// Event listeners for the buttons
document.addEventListener('DOMContentLoaded', function() {
  // Button to open the main Atomicmail website
  document.getElementById('open-atomicmail').addEventListener('click', function() {
    chrome.tabs.create({ url: 'https://atomicmail.io' });
    window.close(); // Close the popup
  });

  // Button to directly open the inbox
  document.getElementById('open-inbox').addEventListener('click', function() {
    chrome.tabs.create({ url: 'https://atomicmail.io/inbox' });
    window.close(); // Close the popup
  });
});

// Log that the popup script has loaded
console.log("Atomicmail Quick Access popup loaded");
