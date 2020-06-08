 chrome.runtime.onInstalled.addListener(function() {
     
     chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
         chrome.declarativeContent.onPageChanged.addRules([{
             conditions: [new chrome.declarativeContent.PageStateMatcher({
                 //pageUrl: { hostContains: '.'}, // use this if need to active this extension for any specific url
             })],
             actions: [new chrome.declarativeContent.ShowPageAction()]
         }]);
     });
 });