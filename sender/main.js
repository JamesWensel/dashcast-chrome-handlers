initializeCastApi = function() {
    cast.framework.CastContext.getInstance().setOptions({
        receiverApplicationId: '2D880D9D'
    });

    var context = cast.framework.CastContext.getInstance();
    context.addEventListener(
        cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED, 
        sendMedia().bind(this)
    );
};

sendMedia = function() {
    let castSession = cast.framework.CastContext.getInstance().getCurrentSession();

    let e = document.getElementById("url-dropdown");
    let currentMediaURL = e.options[e.selectedIndex].text; 

    let mediaInfo = new chrome.cast.media.MediaInfo(currentMediaURL, 'text/javascript');
    let request = new chrome.cast.media.LoadRequest(mediaInfo);
    castSession.loadMedia(request).then(
    function() { console.log('Load succeed'); },
    function(errorCode) { console.log('Error code: ' + errorCode); });
}