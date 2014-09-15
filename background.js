chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.tabs.executeScript(null, {
        file: "main.js"
    }, function(result) {
        if (chrome.runtime.lastError) {
            console.log('ERROR: ' + chrome.runtime.lastError.message);
            return;
        }
    });

    if(true) {
        chrome.pageAction.show(tabId);
    }
});

chrome.pageAction.onClicked.addListener(function() {
    chrome.tabs.executeScript(null, {
        "code": 'hatenaBlogAutoReloader.disableAutoReloader();'
    }, function(result) {
        if (chrome.runtime.lastError) {
            console.log('ERROR: ' + chrome.runtime.lastError.message);
            return;
        }
    });
});
