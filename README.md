# feel-the-web

[![HitCount](http://hits.dwyl.io/myisaak/feel-the-web.svg)](http://hits.dwyl.io/myisaak/feel-the-web)
[![Join the chat at https://gitter.im/feel-the-web/Lobby](https://badges.gitter.im/feel-the-web/Lobby.svg)](https://gitter.im/feel-the-web/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

### Introduction

Feel-the-web is a free cross-platform browser extension allows marketers and students to view, or 'feel', sentiments from websites. It highlights all positive in green, neutral in yellow and negative in red, directly on the webpage itself.

### Setup

- Required dependencies: `Node` and `NPM`
- Optional dependency: `crxmake`

#### 1. You need to clone this GitHub repo *with submodules* so run the following:

`git clone --recurse-submodules -j8 <repo link>` where `<repo link>` is replaced with any of the two links below: 
 - `https://github.com/MyIsaak/feel-the-web.git`
 - `git@github.com:MyIsaak/feel-the-web.git`
 
#### 2. Run the install.sh from base directory
> Note: For Windows users I recommend copying the `browser-polyfill.js` file located in `webextension-polyfill/dist/` to `feel-the-web/src/`, assuming you're locating from base repo directory.

Perhaps you don't have permission to execute `install.sh`, in this case try running `chmod +x install.sh`

`crxmake` is an optional dependency if you wish to pack the plugin

#### 3. Then load the feel-the-web folder onto your web browser
> Note: Don't mistake `feel-the-web/` (incorrect) with `feel-the-web/feel-the-web/` (correct) when loading the plugin onto the browser. Any plugin must have a `manifest.json` in it's base directory.

- For Chrome, you can go to "chrome://extensions" and enable "Developer Mode" then select "Load Unpacked"
- For Firefox, you can enter "about:debugging" in the URL bar and click "Load Temporary Add-on"

### Development

A hot reload script is added for facilitating the developent cycle, since some browsers don't update and require you reload or refresh the plugin manually (especially when packed). It serves as a watchdog for file changes and immediately refreshes the browser. Will be removed on published builds.

### What is sentiment analysis?

The process of computationally identifying and categorizing opinions expressed in a piece of text, especially in order to determine whether the writer's attitude towards a particular topic, product, etc. is positive, negative, or neutral.

A picture is worth a thousand words:

![alt text](https://www.kdnuggets.com/images/sentiment-fig-1-689.jpg "Sentiment analysis diagram")

### How feel-the-web works?

Using [Google's Natural Language REST API](https://cloud.google.com/natural-language/) feel-the-web sends the webpage to their trained neural-network based model which performs sentiment analysis for the extension to receive. This external machine is hosted on their cloud, payed by my own pockets so don't go wild... unless you make a donation :)

Using [Mozilla's WebExtensions Framework](https://developer.mozilla.org/en-US/Add-ons/WebExtensions) feel-the-web can be supported by Chrome, Firefox and Opera as well as the [W3C Community Group](https://browserext.github.io/browserext/)

### Contributors

- Isaak Eriksson
- (perhaps you?)

### Contributions are welcome

If you have any suggestions, issues or new ideas please [leave a chat on gitter](https://gitter.im/feel-the-web/Lobby) or [submit an issue](https://github.com/MyIsaak/feel-the-web/issues)

If you wan't to modify code please [fork this repo](https://github.com/MyIsaak/feel-the-web/edit/master/README.md#fork-destination-box)

### License

Feel the Web is under MIT licensing
