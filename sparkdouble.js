"use strict";

console.log("content script injected!");

let lastMouseX = 0;
let lastMouseY = 0;

document.addEventListener("mousemove", (e) => {
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;
});

const activeNotifs = new Map();

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (!(request.action === "share-card")) return;

  const hoveredElement = document.elementFromPoint(lastMouseX, lastMouseY);
  if (!(hoveredElement.tagName === "IMG")) return;

  const COOLDOWN = 2_500;

  const date = new Date();
  const hoveredAsString = hoveredElement.outerHTML;
  // has the card notification happened before? If so, have we surpassed its COOLDOWN?
  if (
    activeNotifs.has(hoveredAsString) &&
    activeNotifs.get(hoveredAsString) > date.getTime()
  ) {
    return;
  }

  // TODO: this feels like a brittle way to store/track recently sent cards
  activeNotifs.set(hoveredAsString, date.getTime() + COOLDOWN);

  showSentNotif(hoveredElement);

  const savedUserId = (await chrome.storage.sync.get("userId")).userId;
  const savedSecret = (await chrome.storage.sync.get("secret")).secret;

  chrome.runtime.sendMessage({
    action: "postCard",
    data: {
      imgUrl: hoveredElement.src,
      userId: savedUserId,
      secret: savedSecret,
    },
  });
});

function showSentNotif(hoveredElement) {
  // create "Sent to Discord!" notification and calculate/place it center-bottom of target card
  const body = document.body;
  const hoveredElementRect = hoveredElement.getBoundingClientRect();
  const hoveredCenterX = hoveredElement.clientWidth / 2;
  const OFFSET_X = 80;
  const OFFSET_Y = 60;

  const container = document.createElement("div");
  container.classList.add("sparkdouble-sent-notif");
  container.style = `
  left: ${hoveredElementRect.x + hoveredCenterX - OFFSET_X}px;
  top: ${hoveredElementRect.bottom - OFFSET_Y + window.scrollY}px;
  `;

  const successGif = document.createElement("img");
  // random number does cache busting, forces Chrome to correctly load and play gif as expected
  successGif.src = chrome.runtime.getURL(
    "./images/checkanimation.gif?" + Math.random()
  );

  const successText = document.createElement("p");
  successText.innerText = "Sent to Discord!";

  container.appendChild(successGif);
  container.appendChild(successText);

  body.appendChild(container);

  // wait for the notification to complete its success animation, trigger and wait for fadeout animation to play, then remove element from DOM
  setTimeout(() => {
    container.classList.add("transition-out");
    setTimeout(() => container.remove(), 800);
  }, 1500);
}
