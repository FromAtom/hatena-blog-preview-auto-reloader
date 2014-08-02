chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(true) {
        chrome.pageAction.show(tabId);
    }
});

function setAutoReloader() {
    var target_element = $('.blogicon-external js-icon-preview-in-new-window preview-in-new-window tipsy-top');
    //var click_event = $().createEvent("MouseEvents");
    //click_event.initEvent("click", false, true);
    //target_element.dispatchEvent(click_event);
    target_element.trigger("click");
    console.log(target_element.attr('original-title'));
}

chrome.pageAction.onClicked.addListener(function() {
    chrome.tabs.executeScript(null, {
        "code": setAutoReloader()
    }, function(result) {
        if (chrome.runtime.lastError) { // or if (!result)
            console.log('ERROR: ' + chrome.runtime.lastError.message);
            // Get the error message via chrome.runtime.lastError.message
            return;
        }
    });
});

// chrome.browserAction.onClicked.addListener(function () {
//     chrome.tabs.executeScript(null, {
//         "code": setAutoReloader()
//     });
// });
