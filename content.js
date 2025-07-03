// Content script to help with mobile layout detection
(function() {
  // Override user agent detection for mobile layout
  if (window.self !== window.top) { // Only run in iframe
    Object.defineProperty(navigator, 'userAgent', {
      get: function() {
        return 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1';
      }
    });
    
    // Force mobile viewport width detection
    Object.defineProperty(window.screen, 'width', {
      get: function() { return 360; }
    });
    
    Object.defineProperty(window, 'innerWidth', {
      get: function() { return 360; }
    });
  }
})();