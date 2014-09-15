this.enable = true;

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
        chrome.pageAction.setIcon({
            tabId: tab.id,
            path: 'on.png'
        });
    }
});

chrome.pageAction.onClicked.addListener(function(tab) {
    if (this.enable) {
        chrome.tabs.executeScript(null, {
            "code": 'hatenaBlogAutoReloader.disableAutoReloader();'
        }, function(result) {
            if (chrome.runtime.lastError) {
                console.log('ERROR: ' + chrome.runtime.lastError.message);
                return;
            }
        });

        chrome.pageAction.setIcon({
            tabId: tab.id,
            path: 'off.png'
        });

        this.enable = false;
    }
    else {
        chrome.tabs.executeScript(null, {
            "code": 'hatenaBlogAutoReloader.enableAutoReloader();'
        }, function(result) {
            if (chrome.runtime.lastError) {
                console.log('ERROR: ' + chrome.runtime.lastError.message);
                return;
            }
        });

        chrome.pageAction.setIcon({
            tabId: tab.id,
            path: 'on.png'
        });

        this.enable = true;
    }
});
