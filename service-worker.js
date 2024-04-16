"use strict";

chrome.commands.onCommand.addListener((command) => {
  if (!(command === "share-card")) return;

  // check if current tab is one of allowed sites for user privacy and security
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    const currentUrl = new URL(currentTab.url);
    if (!isUrlPermitted(currentUrl)) return;

    chrome.tabs.sendMessage(currentTab.id, { action: "share-card" });
  });
});

function isUrlPermitted(url) {
  const permittedUrls = ["scryfall.com", "edhrec.com", "google.com"];
  const hostnameArr = url.hostname.split(".").reverse();
  const parsed = `${hostnameArr[1]}.${hostnameArr[0]}`;

  return permittedUrls.includes(parsed);
}
