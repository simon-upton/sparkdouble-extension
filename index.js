"use strict";

function getKeybind() {
  let keybind = "";

  if (
    navigator.userAgent.indexOf("Win") != -1 ||
    navigator.userAgent.indexOf("X11") != -1 ||
    navigator.userAgent.indexOf("Linux") != -1
  ) {
    keybind = "Ctrl + ⇧ + S";
  } else if (navigator.userAgent.indexOf("Mac") != -1) {
    keybind = "⌘ + ⇧ + S";
  }

  return keybind;
}

function storageHasData(storageObj) {
  return Object.keys(storageObj).length != 0;
}

// set OS-specific keybind text
document.querySelector(".keybind").innerText = getKeybind();

const unsavedChangesText = document.querySelector(".unsaved-changes");

const submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  // gather form data
  const form = document.querySelector("form");
  const data = Array.from(new FormData(form));
  const userId = data[0][1];
  const secret = data[1][1];

  // save form data and reset temporary storage
  chrome.storage.sync.set({
    userId: userId,
    secret: secret,
    userIdTemp: "",
    secretTemp: "",
  });
  unsavedChangesText.classList.remove("visible");

  // display and remove success coloring
  submitButton.classList.toggle("save-success");
  setTimeout(() => {
    submitButton.classList.toggle("save-success");
  }, 600);
});

const userIdInput = document.getElementById("userId-input");
userIdInput.addEventListener("input", () => {
  // grab saved 'userId' option
  chrome.storage.sync.get("userId").then((value) => {
    // if userId object doesn't exist or is an empty string, save inputs to temp storage
    if (Object.keys(value).length === 0 || value.userId.length === 0)
      chrome.storage.sync.set({ userIdTemp: userIdInput.value });
    unsavedChangesText.classList.add("visible");
  });
});

const secretInput = document.getElementById("secret-input");
secretInput.addEventListener("input", () => {
  // grab saved 'secret' option
  chrome.storage.sync.get("secret").then((value) => {
    // if secret object doesn't exist or is an empty string, save inputs to temp storage
    if (Object.keys(value).length === 0 || value.secret.length === 0)
      chrome.storage.sync.set({ secretTemp: secretInput.value });
    unsavedChangesText.classList.add("visible");
  });
});

const discardButton = document.querySelector(".unsaved-changes>a");
discardButton.addEventListener("click", async () => {
  // reset temporary storage
  chrome.storage.sync.set({ userIdTemp: "", secretTemp: "" });

  // grab last saved options and set form values
  const savedUserId = await chrome.storage.sync.get("userId");
  const savedSecret = await chrome.storage.sync.get("secret");
  userIdInput.value = savedUserId.userId;
  secretInput.value = savedSecret.secret;

  unsavedChangesText.classList.remove("visible");
});

// when popup opened, update input fields from saved options
window.onload = () => {
  // this could be abstracted into a function/refactored to be nicer, but it's not that bad
  chrome.storage.sync.get("userId").then((value) => {
    // check if data has been officially saved locally
    if (storageHasData(value) && value.userId.length != 0) {
      userIdInput.value = value.userId;
    } else {
      // if not, grab whatever data was thrown into temporary storage
      chrome.storage.sync.get("userIdTemp").then((tempValue) => {
        if (storageHasData(tempValue)) userIdInput.value = tempValue.userIdTemp;
      });
    }
  });

  chrome.storage.sync.get("secret").then((value) => {
    if (storageHasData(value) && value.secret.length != 0) {
      secretInput.value = value.secret;
    } else {
      chrome.storage.sync.get("secretTemp").then((tempValue) => {
        if (storageHasData(tempValue)) secretInput.value = tempValue.secretTemp;
      });
    }
  });
};
