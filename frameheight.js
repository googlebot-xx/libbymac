window.wrtcread = console.log;

function nlog(str)
{
	window.wrtcread(str);
}

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
          //nlog(ss[i].cssRules.length);
          var sheet =  ss[i];
          if (!ss[i].cssRules) continue;
          if (sheet.media.mediaText.indexOf("print") !== -1) {
              // css in html
              //nlog("sheet %s %s",i,sheet.href);
              for (var x = sheet.cssRules.length-1; x >=0; --x) {
                  rule = sheet.cssRules[x];
                  //nlog(rule);
                  //nlog("rule %s %s",x,sheet.href);
                  sheet.deleteRule(x);
                }
              //nlog("rule nums %d",sheet.cssRules.length);

          } else {
              // css in css
			  //pas books print css
			  //if (sheet.href.indexof("/books/")!==-1)  continue;
              var b = false;
              for (var x = ss[i].cssRules.length-1; x >=0; --x) {
                  rule = ss[i].cssRules[x];
                    if ((rule.type == 4) && (rule.media.mediaText.indexOf("print")!==-1)) // CSSMediaRule
                    {
                        if (rule.cssText.indexOf("body >")!== -1) {
                        //if (rule.media.mediaText=="print") {
                                //nlog(rule);
                                ss[i].deleteRule(x);
                            
                        } else {
							//rule.selectorText = "aaaa";
							//nlog(rule.cssText);
                        }
                        //b=true;
                        //nlog(rule);
                  } //if
             } //for
          //nlog('sheet '+sheet.href);
      } //else
   } //for
}

function getpdfpage(cfi) {
    vbktype = window.VST.currentBookData.vbkType;
    if(vbktype!=="pbk") return;

    //nlog("pbk book");
    //return;
    
    var img = document.querySelector("#pbk-page");
    if(!img) return;
    
    var canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    //nlog("#img="+dataURL.length);
    mylog(cfi+"="+dataURL);
    //var dataURL = canvas.toDataURL('image/jpeg', 1);
    //return dataURL;//.replace(/^data:image\/(png|jpg);base64,/, "");
}

function bookinfo() {
    //    if (url.indexOf("bt4") !== -1) {
    //if (navigator.userAgent.indexOf("14_") !== -1)
    if (typeof window.VST !=="object") return;

    if (typeof navigator !== "object")
        return;


    
    var vst = window.VST;
    working = window.navigator.userAgent.indexOf("15_6")!==-1;
    var iframe = window.frameElement ;
    var vbktype = window.VST.currentBookData.vbkType;
    vsbook = {}
    currentpage = {}
    
    if (iframe.id.indexOf("epub-content") !== -1) {
	    if (document.body.scrollHeight>100) {
	        //mylog("#body="+document.body.innerHTML.length.toString());
	        mylog("#height="+document.body.scrollHeight.toString());
	    }
        //if (typeof window.VST.currentPageData =="object") {

        if(!working){ //book meta
            if (typeof window.VST.currentBookData =="object") {
                vsbook.isbn = window.VST.currentBookData.isbn;
                vsbook.vbkType = window.VST.currentBookData.vbkType;
                vsbook.title = window.VST.currentBookData.title;
                //vsbook.pageList = window.VST.Book.pageBreakList;
                vsbook.pageList = [];// window.VST.Book.pageBreakList;
                a = window.VST.Book.pages;
                a.forEach(function(obj) {
                    var pobj = {};
                    pobj.cfiWithoutAssertions = obj.getCFIWithoutAssertions();
                    pobj.path = obj.getPath();
                    vsbook.pageList[vsbook.pageList.length] = pobj;
                    //console.log(obj);
                });                    
                mylog("#book="+JSON.stringify(vsbook));
            }
        }
        var page = vst.currentPageData;
        if (typeof page =="object") {
            //currentpage.cfi = window.VST.currentPageData.cfiwithoutAssertions;
            //nlog(vst.currentPageData);
            currentpage.cfi = page.cfiwithoutAssertions;
            currentpage.page = page.cfi;
            currentpage.vbktype = vbktype;
            currentpage.scrollHeight = page.scrollHeight;
            mylog("#currentpage="+JSON.stringify(currentpage));
        }
        if (vbktype=="pbk") {
            getpdfpage("#img"+page.cfi);
        }
    }

    if (iframe.id.indexOf("next-page") !== -1 ) {
        var page = vst.currentPageData;
        var nextpage = page.nextPage;
        //nlog("nextpage--currentPageData");
        //nlog(page);
        //mylog("#next-page="+nextpage.cfi);
        getpdfpage("#nextimg"+nextpage.cfi);
    }
        
    return;

//    if(vbktype !== "pbk") return;
//    //pdf book
//    new MutationObserver(() => {
//      newid  = window.frameElement.id;
//      if (newid !== lastid) {
//        lastid = newid;
//        oniframeChange();
//      }
//    }).observe(window.frameElement, {attributes: true});
    
    //send
    if (Object.keys(currentpage).length>0) {
    //if (typeof vsbook.currentpage =="object") {
        //console.log("book object");
        if(!working) {
            //console.log(vsbook);
            //mylog("#book="+JSON.stringify(vsbook));
            //getpdfpage();
        } else {
            //getpdfpage();
        }
        //console.log(currentpage);
        //mylog("#currentpage="+JSON.stringify(currentpage));
    }
}

function oniframeChange() {
    var iframe = window.frameElement ;
    if (iframe.id.indexOf("epub-content") !== -1)
        nlog('frameElement', lastid);
}

function onload () {
    
    var node = document.querySelector("#recaptcha");
    if (node) {
       mylog("recaptcha");
    }
    var url=document.URL;
    //console.log("onlond "+url);
    var iframe = window.frameElement ;
//    console.log(window.frameElement);
    //if (url.indexOf("/books/") !== -1) {
//    if ((iframe !== null) && (iframe.id.indexOf("epub-content") !== -1)) {
    if ((iframe !== null) && (url.indexOf("/books/") !== -1)) {
        //console.log("iframeonload ",iframe.id,url);
        bookinfo();
    }
    else if (url.indexOf("recaptcha") !== -1) {
         if (document.documentElement.clientWidth>200)
                //mylog("#recaptcha="+document.documentElement.clientWidth.toString());
             mylog("recaptcha");
    }
    //onPrint(() => console.log('printing!'));
    //onPrint(cleanRules);
    //cleanRules();

}

function onPrint(callback) {
    //window.matchMedia('print').addListener(query => query.matches ? callback() : null)
    window.addEventListener('beforeprint', () => callback());
}

window.addEventListener('load', (event) => {
   	    setTimeout(cleanRules, 500);
        setTimeout(onload, 1000);
});

