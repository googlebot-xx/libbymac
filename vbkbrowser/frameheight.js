

function mylog(msg)
{
    window.webkit.messageHandlers.logging.postMessage(msg);
}

window.addEventListener('load', (event) => {
    var node = document.querySelector("#recaptcha");
    if (node) {
       mylog("recaptcha");
    }
    var url=document.URL;
    if (url.indexOf("/books/") !== -1) {
        mylog("#Height="+document.body.scrollHeight.toString());
    }
    else if (url.indexOf("recaptcha") !== -1) {
         if (document.documentElement.clientWidth>200)
                //mylog("#recaptcha="+document.documentElement.clientWidth.toString());
             mylog("recaptcha");
    }
});
