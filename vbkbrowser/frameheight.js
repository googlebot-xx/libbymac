
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

function positionchange()
{
}
//function cleanRules(doc,media)
function cleanRules()
{
     var rule;
      var plist = [];
      var ss = document.styleSheets;
      media = "print";
      for (var i = 0; i < ss.length; ++i) {
          // loop through all the rules!
          //console.log(ss[i].cssRules.length);
          var sheet =  ss[i];
          if (!ss[i].cssRules) continue;
          if (sheet.media.mediaText.indexOf("print") !== -1) {
              // css in html
              //console.log("sheet %s %s",i,sheet.href);
              for (var x = sheet.cssRules.length-1; x >=0; --x) {
                  rule = sheet.cssRules[x];
                  //console.log(rule);
                  //console.log("rule %s %s",x,sheet.href);
                  sheet.deleteRule(x);
                }
              //console.log("rule nums %d",sheet.cssRules.length);

          } else {
              // css in css
              var b = false;
              for (var x = ss[i].cssRules.length-1; x >=0; --x) {
                  rule = ss[i].cssRules[x];
                    if ((rule.type == 4) && (rule.media.mediaText.indexOf("print")!==-1)) // CSSMediaRule
                    {
                        //if ((rule.cssText.indexOf("body >")!== -1)) {
                        //if (rule.media.mediaText=="print") {
                                //console.log(rule);
                                ss[i].deleteRule(x);
                            
                        //}
                        //b=true;
                        //console.log(rule);
                    }
                }
          }
          //console.log('sheet '+sheet.href);
      }
}

function bookinfo() {
    //    if (url.indexOf("bt4") !== -1) {
    //if (navigator.userAgent.indexOf("14_") !== -1)
    if (typeof window.VST !=="object") return;

    if (typeof navigator !== "object")
        return;

    if (document.body.scrollHeight>100) {
        //mylog("#body="+document.body.innerHTML.length.toString());
        mylog("#height="+document.body.scrollHeight.toString());
    }
    
    working = window.navigator.userAgent.indexOf("15_6")!==-1;
    vsbook = {}
    currentpage = {}
    if (typeof window.VST.currentPageData =="object") {
        currentpage.cfi = window.VST.currentPageData.cfi;
        currentpage.page = window.VST.currentPageData.page;
        currentpage.scrollHeight = window.VST.currentPageData.scrollHeight;
    }
    if(!working){ //book meta
        if (typeof window.VST.currentBookData =="object") {
                vsbook.isbn = window.VST.currentBookData.isbn;
                vsbook.vbkType = window.VST.currentBookData.vbkType;
                vsbook.title = window.VST.currentBookData.title;
                vsbook.pageList = window.VST.Book.pageBreakList;
        }
        //console.log(vsbook);
    }
    //send
    if (Object.keys(currentpage).length>0) {
    //if (typeof vsbook.currentpage =="object") {
        console.log("book object");
        if(!working) {
            console.log(vsbook);
            mylog("#book="+JSON.stringify(vsbook));
        }
        console.log(currentpage);
        mylog("#currentpage="+JSON.stringify(currentpage));
    }
}

function onload () {
    
    var node = document.querySelector("#recaptcha");
    if (node) {
       mylog("recaptcha");
    }
    var url=document.URL;
    console.log("onlond "+url);
    var iframe = window.frameElement ;
//    console.log(window.frameElement);
    //if (url.indexOf("/books/") !== -1) {
    if ((iframe !== null) && (iframe.id.indexOf("epub-content") !== -1)) {
        console.log("iframe "+iframe.id);
        bookinfo();
    }
    else if (url.indexOf("recaptcha") !== -1) {
         if (document.documentElement.clientWidth>200)
                //mylog("#recaptcha="+document.documentElement.clientWidth.toString());
             mylog("recaptcha");
    }

    //onPrint(() => console.log('printing!'));
    //onPrint(cleanRules);
    cleanRules();

}

function onPrint(callback) {
    //window.matchMedia('print').addListener(query => query.matches ? callback() : null)
    window.addEventListener('beforeprint', () => callback());
}

window.addEventListener('load', (event) => {
        setTimeout(onload, 500);
});
