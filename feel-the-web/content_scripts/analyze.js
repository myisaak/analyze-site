(function() {
    if (window.hasRun) {
        return;
    }
    window.hasRun = true;

    function annotateWebpage() {
        removeAnnotations();
        // TODO: Instead of appending an element, use the 'feel-the-web' class.
        let beastImage = document.createElement("div");
        beastImage.innerHTML = "'ANAL'YSIS COMPLETED";
        beastImage.style.fontSize = "78";
        beastImage.className = "feel-the-web";
        document.body.appendChild(beastImage);
        console.log("SUCESS");
    }

    // Ca
    function analyzeSentiment(inputText) {
        // TODO: Call Google Natural Language API
        var json = inputText;
        return json
    }

    function removeAnnotations() {
        let existingAnnotations = document.querySelectorAll(".feel-the-web");
        for (let annotation of existingAnnotations) {
            annotation.remove();
        }
    }

    browser.runtime.onMessage.addListener((message) => {
        if (message.command === "analyze") {
            annotateWebpage();
        } else if (message.command === "reset") {
            removeAnnotations();
        }
    });
})();