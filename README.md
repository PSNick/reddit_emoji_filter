# Reddit emoji filter
Hides all Reddit posts with 🤯 (exploding head emoji) in the title. Which is all of them in /r/toptalent at the moment... yay bots.

## Installation

1. **Download the extension**
   - Go to the [Releases page](../../releases)
   - Download the latest `reddit_emoji_filter.zip` file
   - Extract the ZIP file to a folder on your computer

2. **Load the extension in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" by toggling the switch in the top right corner
   - Click the "Load unpacked" button
   - Select the folder containing the extension files (manifest.json and content.js)

3. **Start browsing Reddit**
   - Visit reddit.com
   - Posts with 🤯 in the title will be automatically hidden

## Compatibility

- Works on both new Reddit (www.reddit.com) and old Reddit (old.reddit.com). Also works using Reddit Enhancement Suite.
- Automatically detects dynamically loaded posts (infinite scroll)

## How It Works

The extension scans Reddit posts for the 🤯 emoji in titles and hides them using CSS display properties. It continuously monitors the page for new posts and filters them in real-time.

## Privacy

This extension does not collect, store, or transmit any data. It runs entirely locally in your browser.
