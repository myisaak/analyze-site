// TODO: Replace with CSS for coloring divs from sentiment result
const cssCode = `body > :not(.beastify-image) {
    display: none;
}`;

function listenForClicks() {
    document.addEventListener("click", (e) => {

        // Inject CSS and broadcasts 'analyze' message
        function beastify(tabs) {
            browser.tabs.insertCSS({code: cssCode}).then(() => {
                browser.tabs.sendMessage(tabs[0].id, {
                    command: "analyze"
                });
            });
        }

        // Removes CSS injection and invokes reset
        function reset(tabs) {
            browser.tabs.removeCSS({code: cssCode}).then(() => {
                browser.tabs.sendMessage(tabs[0].id, {
                    command: "reset",
                });
            });
        }

        function reportError(error) {
            console.error(`Could not analyze: ${error}`);
        }

        // Gets the active tab and execute command
        if (e.target.classList.contains("analyze")) {
            browser.tabs.query({active: true, currentWindow: true})
            .then(analyze)
            .catch(reportError);
        }
        else if (e.target.classList.contains("reset")) {
            browser.tabs.query({active: true, currentWindow: true})
            .then(reset)
            .catch(reportError);
        }
    }); 
}

function reportExecuteScriptError(error) {
    document.querySelector("#popup-content").classList.add("hidden");
    document.querySelector("#error-content").classList.remove("hidden");
    console.error(`Failed to execute analyze content script: ${error.message}`);
}

// Inject webextention polyfill for chrome support
browser.tabs.executeScript({file: "/src/browser-polyfill.js"});

// Inject JS into tab and adds click listener and catches errors
browser.tabs.executeScript({file: "/content_scripts/analyze.js"})
    .then(listenForClicks)
    .catch(reportExecuteScriptError);