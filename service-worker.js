"use strict";

chrome.commands.onCommand.addListener((command) => {
  if (!command === "share-card") return;

  // check if current tab is one of allowed sites for user privacy and security
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentUrl = new URL(tabs[0].url);
    if (!isUrlPermitted(currentUrl)) return;
  });
});

function isUrlPermitted(url) {
  const permittedUrls = ["scryfall.com", "edhrec.com", "google.com"];
  const hostnameArr = url.hostname.split(".").reverse();
  const parsed = `${hostnameArr[1]}.${hostnameArr[0]}`;

  return permittedUrls.includes(parsed);
}
