const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();

// playerManager.setMessageInterceptor(
//     cast.framework.messages.MessageType.LOAD,
//     request => {
//         document.getElementById("iframe").src = request.media.contentId; 
//     }
// )

context.start({ touchScreenOptimizedApp: true });
