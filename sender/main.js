let castSession;

initializeCastApi = function() {
    cast.framework.CastContext.getInstance().setOptions({
        receiverApplicationId: '2D880D9D',
        autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
    });

    var player = new cast.framework.RemotePlayer();
    var playerController = new cast.framework.RemotePlayerController(player);
    
    playerController.addEventListener(
        cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED,
        initializeCastSession().bind(this)
    );
};

initializeCastSession = function() {
    castSession = cast.framework.CastContext.getInstance().getCurrentSession(); 
    console.log("Session: " + castSession);
}

sendMedia = function() {
    let e = document.getElementById("select-url");
    let currentMediaURL = e.options[e.selectedIndex+1].text;

    let mediaInfo = new chrome.cast.media.MediaInfo(currentMediaURL, 'text/javascript');

    let request = new chrome.cast.media.LoadRequest(mediaInfo);
    castSession.loadMedia(request).then(
    function() { console.log('Load succeed'); },
    function(errorCode) { console.log('Error code: ' + errorCode); });
}