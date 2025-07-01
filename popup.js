document.addEventListener('DOMContentLoaded', function() {
  const iframe = document.getElementById('atomicmail-iframe');
  const fallbackContainer = document.getElementById('fallback-container');
  let iframeLoaded = false;

  // Function to show fallback UI
  function showFallbackUI() {
    if (fallbackContainer) {
      fallbackContainer.style.display = 'flex';
    }
    if (iframe) {
      iframe.style.display = 'none';
    }
  }

  // Function to open Atomicmail in a new tab
  window.openAtomicmailInNewTab = function() {
    chrome.tabs.create({ url: 'https://atomicmail.io' });
  };

  // Set a timeout to check if the iframe has loaded successfully
  const iframeTimeout = setTimeout(() => {
    if (!iframeLoaded) {
      showFallbackUI();
    }
  }, 5000); // 5 seconds timeout

  // Try to detect if iframe loaded successfully
  if (iframe) {
    iframe.addEventListener('load', function() {
      iframeLoaded = true;
      clearTimeout(iframeTimeout);
      
      // Additional check: try to access iframe content to see if it's accessible
      try {
        // This will throw an error if the iframe is blocked due to X-Frame-Options
        const iframeContent = iframe.contentWindow.document;
        console.log('Iframe loaded successfully');
      } catch (e) {
        console.error('Error accessing iframe content:', e);
        showFallbackUI();
      }
    });

    // Listen for iframe load errors
    iframe.addEventListener('error', function() {
      console.error('Iframe failed to load');
      showFallbackUI();
    });
  }
});
