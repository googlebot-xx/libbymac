var htmlStrings = new Array();
var pageType;  /* 0 = normal page, 1 = saved page, 2 = saved page with resource loader */
var removeUnsavedURLs = 0;
var vbktype;
var dstyle = {};
var dimg = {};

 function initializeBeforeSave()
{
    htmlStrings.length = 0;
    htmlStrings[0] = "\uFEFF";  /* UTF-8 Byte Order Mark (BOM) - 0xEF 0xBB 0xBF */
    pageType = (document.querySelector("script[id='savepage-pageloader']") != null ||  /* Version 7.0-14.0 */
                document.querySelector("meta[name='savepage-resourceloader']") != null) ? 2 :  /* Version 15.0-15.1 */
                document.querySelector("meta[name='savepage-url']") != null ? 1 : 0;    
}

function extractsheet(aurl)
{
    var rule;
    var ss = document.styleSheets;
    //console.log("sheet len ",ss.length);
    for (var i = 0; i < ss.length; ++i) {
        var sheet =  ss[i];
        if (!sheet) continue;
        var href = sheet.href;
        var csstext = "";
        if (!href) {
            continue;
            if (sheet.media.mediaText.indexOf("print") !== -1) {
                for (var x = sheet.cssRules.length-1; x >=0; --x) {
                    rule = sheet.cssRules[x];
                    //console.log("remove print",rule);
                    sheet.deleteRule(x);                    
                }
            }

        } else {
            //if (href.indexOf(aurl)==-1)  continue;
            datauri = URLfilename(href);
            for (var x = 0 ; x<sheet.cssRules.length ; ++x) {
                rule = sheet.cssRules[x];
                csstext += rule.cssText + "\n";
                //console.log(x,rule.cssText);
                //console.log("rule %s %s",x,sheet.href);
            }
            dstyle[datauri] = csstext; 
            //console.log(href,datauri);
            //console.log(csstext);
        }
    }
}


function extractHTML(depth,frame,element,crossframe,nosrcframe,framekey,parentpreserve,indent)
{
    var i,j,startTag,textContent,endTag,inline,preserve,style,display,position,whitespace,displayed,csstext,baseuri,origurl,datauri,origstr,newurl;
    var visible,width,height,currentsrc,parser,htmltext,prefix;
    var doctype,target,text,asciistring,date,pageurl,state;
    var voidElements = new Array("area","base","br","col","command","embed","frame","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr");  
    /* W3C HTML5 4. */

    startTag = "<" + element.localName;
    for (i = 0; i < element.attributes.length; i++)
    {
        if (element.attributes[i].name != "zoompage-fontsize")
        {
            startTag += " " + element.attributes[i].name;
            startTag += "=\"";
            startTag += element.attributes[i].value.replace(/"/g,"&quot;");
            startTag += "\"";
        }
    }    
    startTag += ">";
    //console.log(startTag);
    textContent = "";     

    if (voidElements.indexOf(element.localName) >= 0) endTag = "";
    else endTag = "</" + element.localName + ">";


    if (element.hasAttribute("style"))
    {
        csstext = element.getAttribute("style");
        
        baseuri = element.ownerDocument.baseURI;
                
        //csstext = replaceCSSImageURLs(csstext,baseuri,framekey);
        
        startTag = startTag.replace(/ style="(?:\\"|[^"])*"/," style=\"" + csstext.replace(/"/g,"&quot;") + "\"");
    }

    if (element.localName == "meta")
    {
        if (element.httpEquiv.toLowerCase() == "content-security-policy")
        {
            origstr = " data-savepage-content=\"" + element.content + "\"";
            
            startTag = startTag.replace(/ content="(?:\\"|[^"])*"/,origstr + " content=\"\"");
        }
    }
    else if (element.localName == "html")
    {
        /* Add !DOCTYPE declaration */
        
        doctype = element.ownerDocument.doctype;
        
        if (doctype != null)
        {
            htmltext = '<!DOCTYPE ' + doctype.name + (doctype.publicId ? ' PUBLIC "' + doctype.publicId + '"' : '') +
                       ((doctype.systemId && !doctype.publicId) ? ' SYSTEM' : '') + (doctype.systemId ? ' "' + doctype.systemId + '"' : '') + '>';
            
            htmlStrings[htmlStrings.length] = htmltext;
        }
        
        htmlStrings[htmlStrings.length] = startTag;
    }    

    else if (element.localName == "textarea")
    {
        textContent = element.value;
    }
    /* Reinstate selected state of <option> element */
    
    else if (element.localName == "option")
    {
        if (element.selected) startTag = startTag.replace(/ selected="[^"]*"/," selected=\"\"");
        else startTag = startTag.replace(/ selected="[^"]*"/,"");
    }
 
    else if (element.localName == "script") {
        if (element.getAttribute("src"))  /* external script */
        {
            if (replaceableResourceURL(element.src))
            {
                baseuri = element.ownerDocument.baseURI;
                origurl = element.getAttribute("src");
                //datauri = replaceURL(origurl,baseuri);
                datauri = URLfilename(origurl);
                origstr = (datauri == origurl) ? "" : " data-savepage-src=\"" + origurl + "\"";
                startTag = startTag.replace(/ src="[^"]*"/,origstr + " src=\"" + datauri + "\"");
                //console.log(startTag);                
            }
        }
        else  /* internal script */
        {
            textContent = element.textContent;
        }
    }
    // else if (element.localName == "style") 
    // {
    //     if (startTag
    // }
    /* style link */
    else if (element.localName == "link") 
    {
        if (element.rel.toLowerCase().indexOf("stylesheet") >= 0 && element.getAttribute("href")) {
            origurl = element.getAttribute("href");
            baseuri = element.ownerDocument.baseURI;
            aurl = resolveURL(element.href,baseuri);
            datauri = URLfilename(aurl);
            //console.log(datauri,origurl);
            origstr = (datauri == origurl) ? "" : " data-savepage-href=\"" + origurl + "\"";
            startTag = startTag.replace(/ href="[^"]*"/,origstr + " href=\"" + datauri + "\"");
            //console.log(startTag);
        }
    }

    else if (element.localName == "img")
    {
        if (true)
        {
            /* currentSrc is set from src or srcset attributes on this <img> element */
            /* or from srcset attribute on <source> element inside <picture> element */
            
            currentsrc = (element.currentSrc != "") ? element.currentSrc : (element.getAttribute("src") ? element.src : "");
            if (currentsrc != "")  /* currentSrc set from src or srcset attribute */
            {
                    if (replaceableResourceURL(currentsrc))
                    {
                        baseuri = element.ownerDocument.baseURI;
                        origurl = element.getAttribute("src");

                        //datauri = replaceURL(currentsrc,baseuri);
                        //datauri = URLPath(origurl);
                        //datauri = URLPath(currentsrc);
                        datauri = URLfilename(currentsrc)+".png";
						createCanvasDataURL(datauri,element);
                        origstr = (currentsrc == origurl) ? "" : " data-savepage-currentsrc=\"" + currentsrc + "\"";
                        origstr += " data-savepage-src=\"" + origurl + "\"";
                        
                        if (element.hasAttribute("src")) startTag = startTag.replace(/ src="[^"]*"/,origstr + " src=\"" + datauri + "\"");
                        else startTag = startTag.replace(/<img/,"<img" + origstr + " src=\"" + datauri + "\"");
                        //console.log(startTag);                          
                    }
            }
            
            if (element.getAttribute("srcset"))
            {
                /* Remove srcset URLs - currentSrc may be set to one of these URLs - other URls are unsaved */
                origurl = element.getAttribute("srcset");
                origstr = " data-savepage-srcset=\"" + origurl + "\"";
                startTag = startTag.replace(/ srcset="[^"]*"/,origstr + " srcset=\"\"");
            }
        }
    }
   
    htmlStrings[htmlStrings.length] = startTag;

    for (i = 0; i < element.childNodes.length; i++)
    {
        if (element.childNodes[i] != null)  /* in case web page not fully loaded before extracting */
        {
            if (element.childNodes[i].nodeType == 1)  /* element node */
            {
                if (depth == 0)
                {
                    if (element.childNodes[i].localName == "script" && element.childNodes[i].id.substr(0,8) == "savepage") continue;
                    if (element.childNodes[i].localName == "meta" && element.childNodes[i].name.substr(0,8) == "savepage") continue;
                }
                
                /* Handle other element nodes */
                
                extractHTML(depth,frame,element.childNodes[i],crossframe,nosrcframe,framekey,preserve,indent+2);
            }
            else if (element.childNodes[i].nodeType == 3)  /* text node */
            {
                text = element.childNodes[i].textContent;
                
                /* Skip text nodes before skipped elements/comments and at end of <head>/<body> elements */
                
                if (pageType > 0 && formatHTML && depth == 0)
                {
                    if (text.trim() == "" && (i+1) < element.childNodes.length && element.childNodes[i+1].nodeType == 1)
                    {
                        if (element.childNodes[i+1].localName == "base") continue;
                        if (element.childNodes[i+1].localName == "script" && element.childNodes[i+1].id.substr(0,8) == "savepage") continue;
                        if (element.childNodes[i+1].localName == "meta" && element.childNodes[i+1].name.substr(0,8) == "savepage") continue;
                    }
                        
                    if (text.trim() == "" && (i+1) < element.childNodes.length && element.childNodes[i+1].nodeType == 8)
                    {
                        if (element.childNodes[i+1].textContent.indexOf("SAVE PAGE WE") >= 0) continue;
                    }
                    
                    if (text.trim() == "" && i == element.childNodes.length-1)
                    {
                        if (element.localName == "head") continue;
                        if (element.localName == "body") continue;
                    }
                }
                
                /* Handle other text nodes */
                if (element.localName == "style")
                {
                    media = element.getAttribute("media");
                    if (media && media=="print")
                        text = "   "; 
                }

                if (element.localName != "noscript")
                {
                    text = text.replace(/&/g,"&amp;");
                    text = text.replace(/</g,"&lt;");
                    text = text.replace(/>/g,"&gt;");
                }
                
                if (pageType == 0 && formatHTML && depth == 0)
                {
                    /* HTML whitespace == HTML space characters == spaces + newlines */
                    /* HTML spaces: space (U+0020), tab (U+0009), form feed (U+000C) */
                    /* HTML newlines: line feed (U+000A) or carriage return (U+000D) */
                    
                    if (preserve == 0) text = text.replace(/[\u0020\u0009\u000C\u000A\u000D]+/g," ");
                    else if (preserve == 1) text = text.replace(/[\u0020\u0009\u000C]+/g," ");
                }
                if (text.length>0) {
                    //console.log(text);
                    htmlStrings[htmlStrings.length] = text;
                }
            }
            else if (element.childNodes[i].nodeType == 8)  /* comment node */
            {
                text = element.childNodes[i].textContent;
                
                /* Skip existing Save Page WE metrics and resource summary comment */
                
                if (text.indexOf("SAVE PAGE WE") >= 0) continue;
                
                /* Handle other comment nodes */
                
                if (pageType == 0 && formatHTML && depth == 0 && !inline && preserve == 0)
                {
                    text = text.replace(/\n/g,newlineIndent(indent+2));
                    
                    htmlStrings[htmlStrings.length] = newlineIndent(indent+2);
                }
                
                htmlStrings[htmlStrings.length] = "<!--" + text + "-->";
            }
        }
    }

    if (endTag != "")
    {
        if (pageType == 0 && formatHTML && depth == 0 && !inline && preserve == 0 && element.children.length > 0)
        {
            htmlStrings[htmlStrings.length] = newlineIndent(indent);
        }
        
        htmlStrings[htmlStrings.length] = endTag;
    }    

}

function newlineIndent(indent)
{
    var i,str;
    str = "\n";
    for (i = 0; i < indent; i++) str += " ";
    return str;
}

function createCanvasDataURL(url,element)
{
    var canvas,context;
    
    canvas = document.createElement("canvas");
//    canvas.width = element.clientWidth;
//    canvas.height = element.clientHeight;
    canvas.width = element.naturalWidth;
    canvas.height = element.naturalHeight;
    
    context = canvas.getContext("2d");
    context.drawImage(element,0,0,canvas.width,canvas.height);
    dimg[url] = canvas.toDataURL("image/png","");
}

function removeQuotes(url)
{
    if (url.substr(0,1) == "\"" || url.substr(0,1) == "'") url = url.substr(1);
    if (url.substr(-1) == "\"" || url.substr(-1) == "'") url = url.substr(0,url.length-1);
    
    return url;
}

function replaceableResourceURL(url)
{
    /* Exclude existing data:, blob: or moz-extension: url */
    if (url.substr(0,5).toLowerCase() == "data:" || url.substr(0,5).toLowerCase() == "blob:" ||
        url.substr(0,14).toLowerCase() == "moz-extension:" || url == "") return false;
    
    return true;
}

function replaceURL(url,baseuri)
{
    var i,location,fragment,count,asciistring;
    //console.log("replaceURL",url);
    if (pageType > 0) return url;  /* saved page - ignore new resources when re-saving */
    
    if (baseuri != null)
    {
        location = resolveURL(url,baseuri);
        if (location != null)
        {
            i = location.indexOf("#");
            fragment = (i >= 0) ? location.substr(i) : "";
            location = removeFragment(location);
        }
    }
    
    return unsavedURL(url,baseuri);  /* unsaved url */
}

function URLPath(url)
{
    if (url.indexOf("://")>0) {
        aurl = new URL(url);
        return aurl.pathname;
    } else 
    return url;
}

function adjustURL(url,baseuri)
{
    var i,location;
    //adjustURL  /hathitrust-downloader.htm https://www.ebook-converter.com/hathitrust-downloader.htm
    if (baseuri != null)
    {
        location = resolveURL(url,baseuri);
        //console.log("adjustURL ",url,location);
        
        if (location != null)
        {
            i = location.indexOf("#");
            
            if (i < 0)  /* without fragment */
            {
                return location;  /* same or different page - make absolute */
            }
            else  /* with fragment */
            {
                if (location.substr(0,i) == baseuri) return location.substr(i);  /* same page - make fragment only */
                else return location;  /* different page - make absolute */
            }
        }
    }
    
    return url;
}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// [\=\?\+\-&\^%!|]

function URLfilename(url)
{
    path = URLPath(url);
    //path  = sanitizeString(path);
    path = path.replace(/^\/|\/$/g,"");  //first last
    path = path.replace(/[\=\?\+\-&\^%!|:]+/g,"");
    path = path.replace(/\//g,".");  //all / to .
    path = path.replace(/[\.]{2}/g,"");  //.. delete
    //path = path.replace(/^./g,"");  //first last
    return path;    
}

function unsavedURL(url,baseuri)
{
    if (removeUnsavedURLs) return "";  /* empty string */
    else return adjustURL(url,baseuri);  /* original or adjusted url */
}

function resolveURL(url,baseuri)
{
    var resolvedURL;
    
    try
    {
        resolvedURL = new URL(url,baseuri);
    }
    catch (e)
    {
        return null;  /* baseuri invalid or null */
    }
    
    return resolvedURL.href;
}

function removeFragment(url)
{
    var i;
    
    i = url.indexOf("#");
    
    if (i >= 0) return url.substr(0,i);
    
    return url;
}

function savepage()
{
    //console.log(` save page`);
    // mess page?
    node = document.querySelector("#page-content");
    if (node) {
        setTimeout(savepage,600);
        return;
    }

    extractsheet("");
    extractHTML(0,window,document.documentElement,false,false,"0",0,0);
    html = "#html="+htmlStrings.join('');
    //console.log(html);
    mylog("#style="+JSON.stringify(dstyle));
    mylog("#dimg="+JSON.stringify(dimg));
    mylog(html);

	//console.log("#style="+JSON.stringify(dstyle));
	//console.log(dimg);
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
    vbktype = window.VST.currentBookData.vbkType;
    vsbook = {}
    currentpage = {}
    
    if (iframe.id.indexOf("epub-content") !== -1) {
//    if (true) {
            if (document.body.scrollHeight>100) {
	        //mylog("#body="+document.body.innerHTML.length.toString());
	        mylog("#height="+document.body.scrollHeight.toString());
	    }
        var page = vst.currentPageData;
        //if (typeof window.VST.currentPageData =="object") {
        if(!working){ //book meta
            if (typeof window.VST.currentBookData =="object") {
                vsbook.isbn = window.VST.currentBookData.isbn;
                vsbook.vbkType = window.VST.currentBookData.vbkType;
                vsbook.title = window.VST.currentBookData.title;
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
                //console.log(vsbook);
            }
        }
        if (typeof page =="object") {
            //currentpage.cfi = window.VST.currentPageData.cfiwithoutAssertions;
            //console.log(vst.currentPageData);
            currentpage.cfi = page.cfiwithoutAssertions;
            //if (vbktype=="pbk")
            //    currentpage.cfi = page.cfi;            
            currentpage.page = page.cfi;
            currentpage.URL = document.URL;
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
        //console.log("nextpage--currentPageData");
        //console.log(page);
        //mylog("#next-page="+nextpage.cfi);
        getpdfpage("#nextimg"+nextpage.cfi);
    }
    node = document.querySelector("#page-content");
    if (vbktype=="epub" && !node) {
        setTimeout(savepage,100);
    }
return;
}


document.addEventListener('keypress', logKey);

function logKey(e) {
  //KeyA 
  //console.log(` key press  ${e.code}`);
  if(e.code=="KeyA") {
    savepage();
  }
}

function onload () {
    
    var url=document.URL;
    //console.log("onlond "+url);
    var iframe = window.frameElement ;
//    console.log(window.frameElement);
    //if (url.indexOf("/books/") !== -1) {
//    if ((iframe !== null) && (iframe.id.indexOf("epub-content") !== -1)) {
//    if ((iframe !== null) && (url.indexOf("/books/") !== -1)) {
    if ((iframe !== null) && (url.indexOf("/books/") !== -1)) {
        //console.log("iframeonload ",iframe.id,url);
        //setTimeout(bookinfo,300);
        bookinfo();
        //setTimeout(savepage,1000);
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

function mylog(msg)
{
    window.webkit.messageHandlers.logging.postMessage(msg);
}

window.addEventListener('load', (event) => {
    setTimeout(onload, 600);
});
