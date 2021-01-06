

function mylog(msg)
{
    window.webkit.messageHandlers.logging.postMessage(msg);
}

function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

window.addEventListener('load', (event) => {
//    if (!inIframe()) //in iframe
//        return;
    //frameElement
    var node = document.querySelector("#recaptcha");
    if (node) {
       mylog("recaptcha");
    }
    var url=document.URL;
    if (url.indexOf("/books/") !== -1) {
        if (document.body.scrollHeight>100) {
            mylog("#body="+document.body.innerHTML.length.toString());
            mylog("#Height="+document.body.scrollHeight.toString());
        }
    }
    else if (url.indexOf("recaptcha") !== -1) {
         if (document.documentElement.clientWidth>200)
                //mylog("#recaptcha="+document.documentElement.clientWidth.toString());
             mylog("recaptcha");
    }
});
