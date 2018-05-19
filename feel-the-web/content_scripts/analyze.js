(function() {
    if (window.hasRun) {
        return;
    }
    window.hasRun = true;
    
    function annotateWebpage() {
        removeAnnotations();
        // TODO: inject 'feel-the-web' class with dataset sentiment props.
        var result = analyzeSentiment(document);
        console.log("SUCESS");
    }

    // Queries Google Language Cloud
    function analyzeSentiment(inputHTML) {
        // Load the google client api
        gapi.load('client', function() {
            gapi.client.init({
                'apiKey': 'AIzaSyBaB_8SABbPAuPQ-Q52OTXcYAZPbPR72Pw',
                // clientId and scope are optional if auth is not required.
                // 'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
                // 'scope': 'profile',
            }).then(function() {
                // 3. Initialize and make the API request.
                return gapi.client.request({
                    'path': 'https://language.googleapis.com/v1beta2/documents:analyzeSentiment',
                    'method': 'POST',
                    'headers': ['Content-Type: application/json'],
                    'body': {
                        'document' : {
                            'type' : 'HTML',
                            'content' : inputHTML
                        },
                        'encodingType' : 'UTF_8'
                    }
                })
            }).then(function(response) {
                console.log(response.result);
            }, function(reason) {
                console.log('Error: ' + reason.result.error.message);
            });
        });
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