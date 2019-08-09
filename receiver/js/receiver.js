const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();

playerManager.setMessageInterceptor(
    cast.framework.messages.MessageType.LOAD,
    request => {
        console.log(request.media.contentId);
        document.getElementById("iframe").src = request.media.contentId; 
    }
)

context.start({ touchScreenOptimizedApp: true });
