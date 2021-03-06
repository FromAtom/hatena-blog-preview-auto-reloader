this.enable = true;

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if( tab.url.indexOf('blog.hatena.ne.jp') != -1 ) {
        chrome.tabs.executeScript(null, {
            file: "preview-auto-reloader.js"
        }, function(result) {
            if (chrome.runtime.lastError) {
                console.log('ERROR: ' + chrome.runtime.lastError.message);
                return;
            }
        });

        chrome.pageAction.show(tabId);
    }
});

chrome.pageAction.onClicked.addListener(function(tab) {
    var code = '';
    var path = '';

    if (this.enable) {
        code = 'hatenaBlogAutoReloader.disableAutoReloader();';
        path = 'icons/off16.png';
        this.enable = false;
    }
    else {
        code = 'hatenaBlogAutoReloader.enableAutoReloader();';
        path = 'icons/on16.png';
        this.enable = true;
    }

    chrome.tabs.executeScript(null, {
        "code": code
    }, function(result) {
        if (chrome.runtime.lastError) {
            console.log('ERROR: ' + chrome.runtime.lastError.message);
            return;
        }
    });

    chrome.pageAction.setIcon({
        tabId: tab.id,
        path: path
    });
});
