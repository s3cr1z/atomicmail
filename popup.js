// Handle communication with the Atomicmail iframe and active tab functionality
document.addEventListener('DOMContentLoaded', function() {
  const iframe = document.getElementById('atomicmail-iframe');

  // Get the current active tab URL
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if (tabs[0]) {
      const activeTab = tabs[0];
      const activeUrl = activeTab.url;
      
      // Wait for iframe to load
      iframe.addEventListener('load', function() {
        // Construct the Atomicmail URL with @Active parameter
        const atomicmailUrl = new URL(iframe.src);
        atomicmailUrl.searchParams.set('active_url', encodeURIComponent(activeUrl));
        atomicmailUrl.hash = 'active';
        
        // Update iframe URL to include active tab information
        iframe.src = atomicmailUrl.toString();
      });
    }
  });

  // Listen for messages from the Atomicmail iframe
  window.addEventListener('message', function(event) {
    // Verify the message origin is from Atomicmail
    if (event.origin === 'https://atomicmail.io') {
      try {
        const data = event.data;
        if (data.type === 'active_file_ready') {
          // Handle any necessary UI updates or actions when @Active file is ready
          console.log('Active file is ready');
        }
      } catch (error) {
        console.error('Error processing message:', error);
      }
    }
  });
});
