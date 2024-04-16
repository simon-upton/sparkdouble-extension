"use strict";

console.log("content script injected!");

let lastMouseX = 0;
let lastMouseY = 0;

document.addEventListener("mousemove", (e) => {
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (!(request.action === "share-card")) return;

  const hoveredElement = document.elementFromPoint(lastMouseX, lastMouseY);
  if (!(hoveredElement.tagName === "IMG")) return;

  // API request to Discord bot with img url and extension's username?
});
