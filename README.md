# Atomicmail Quick Access - Instant Browser Access to Your Atomicmail Inbox

Atomicmail Quick Access is a browser extension that provides seamless, one-click access to your Atomicmail inbox directly from your browser toolbar. This extension creates a convenient popup interface that loads your Atomicmail account in a mobile-optimized window, eliminating the need to navigate to the website separately.

The extension implements a lightweight, secure approach by embedding the Atomicmail web application within a controlled iframe environment. It features a responsive design optimized for quick interactions, with dimensions matching common mobile viewport sizes for familiar usability. The extension requires minimal permissions and maintains a strict security boundary by limiting host permissions to the Atomicmail domain.

## Repository Structure
```
atomicmail-quick-access/
├── manifest.json         # Extension configuration and permissions
├── popup.html           # Main popup interface HTML structure
├── popup.css           # Styles for the popup window
├── popup.js            # JavaScript functionality for popup interactions
└── README.md           # Project documentation
```

## Usage Instructions

### Prerequisites
- Google Chrome, Microsoft Edge, or any Chromium-based browser that supports Manifest V3 extensions
- An active Atomicmail account

### Installation

#### Local Development Installation
1. Clone the repository or download the source code
2. Open your Chrome-based browser and navigate to the extensions page:
   ```
   chrome://extensions/
   ```
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory

#### From Chrome Web Store (When Published)
1. Visit the Chrome Web Store page for Atomicmail Quick Access
2. Click "Add to Chrome"
3. Follow the prompts to complete installation

### Quick Start
1. After installation, locate the Atomicmail Quick Access icon in your browser toolbar
2. Click the icon to open your Atomicmail inbox in a popup window
3. Log in to your Atomicmail account if not already authenticated

### More Detailed Examples
#### Using the Popup Interface
```javascript
// The popup automatically loads your Atomicmail inbox
// No additional configuration required
// The interface is optimized for 375x600 viewport
```

### Troubleshooting

#### Common Issues
1. Popup Not Loading
   - Verify your internet connection
   - Check if https://atomicmail.io is accessible in your main browser
   - Clear browser cache and reload the extension

2. Authentication Issues
   - Ensure you're logged into Atomicmail in your main browser
   - Try clearing site cookies for atomicmail.io
   - Reload the extension

#### Debugging
- Open Developer Tools while the popup is active:
  - Windows/Linux: Press F12 or right-click and select "Inspect"
  - macOS: Press ⌘+Option+I
- Check the console for any error messages
- Verify network requests to atomicmail.io are successful

## Data Flow
The extension implements a straightforward data flow where user interactions in the browser trigger the popup interface, which loads the Atomicmail web application in a sandboxed iframe environment.

```ascii
Browser Toolbar Icon → Popup Window → Iframe → Atomicmail Web App
     ↑                     ↓             ↓           ↓
User Click           Window Creation   Loads URL   Auth Check
```

Key Component Interactions:
1. Browser extension icon triggers popup.html when clicked
2. popup.html creates a contained window with specific dimensions (375x600)
3. The iframe loads atomicmail.io with full window dimensions
4. CSS ensures proper containment and scrolling behavior
5. Host permissions restrict iframe access to atomicmail.io domain only
6. ActiveTab permission enables basic browser integration
7. Manifest V3 ensures modern security standards compliance