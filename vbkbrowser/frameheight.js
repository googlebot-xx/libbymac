
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

function cleanRules2(doc,media)
{
      var rule;
      var plist = [];
      var ss = document.styleSheets;
      for (var i = 0; i < ss.length; ++i) {
          // loop through all the rules!
          //if (!ss[i].cssRules) continue;
          //console.log(ss[i].cssRules.length);
          //mylog(ss[i].cssRules.length);
          var sheet =  ss[i];
          if (String(sheet.media).toLowerCase() == media) {
              //sheet.media.item(0).disabled = true;
              console.log("sheet %s %s",i,sheet.href);
              for (var x = sheet.cssRules.length-1; x >=0; --x) {
                  rule = sheet.cssRules[x];
                    //console.log(rule);
                    sheet.deleteRule(x);
                }
          } else {
              var href = sheet.href;
              console.log("sheet %s %s",i,href);
              if ((!href) || (href.indexOf('vitalsource') !== -1)) {
                  for (var x = ss[i].cssRules.length-1; x >=0; --x) {
                      rule = ss[i].cssRules[x];
                      //console.log(rule);
                        if (rule.type == 4) // CSSMediaRule
                        {
                            console.log(rule);
                            if (rule.cssText.indexOf("print")!== -1) {
                                    //console.log(rule);
                                    ss[i].deleteRule(x);
                            }
                        }
                    }
                }
          }
      }
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
//          if (String(sheet.media).toLowerCase() == media) {
          if (sheet.media.mediaText.indexOf("print") !== -1) {
              // css in html
              //console.log("sheet %s %s",i,sheet.href);
              for (var x = sheet.cssRules.length-1; x >=0; --x) {
              //for (var x=0; x<sheet.cssRules.length; x++) {
                  rule = sheet.cssRules[x];
                  //rule.cssText = "";
                  //key =  rule.keyText;
                  console.log(rule);
                  console.log("rule %s %s",x,sheet.href);
                  sheet.deleteRule(x);
                }
              console.log("rule nums %d",sheet.cssRules.length);

          } else {
              // css in css
            //console.log("sheet %s %s",i,sheet.href);
              //if (!ss[i].cssRules) continue;
              for (var x = ss[i].cssRules.length-1; x >=0; --x) {
                  rule = ss[i].cssRules[x];
                  //console.log(rule);
                    if ((rule.type == 4) && (rule.media.mediaText.indexOf("print")!==-1)) // CSSMediaRule
                    {
                        if ((rule.cssText.indexOf("body")!== -1)) {
                        //if (rule.media.mediaText=="print") {
                                console.log(rule);
                                console.log(sheet.href);
                                ss[i].deleteRule(x);
                        }
                    }
                }
          }
      }
    //window.print = oldPrintFunction;
}

function onload () {

    var node = document.querySelector("#recaptcha");
    if (node) {
       mylog("recaptcha");
    }
    var url=document.URL;
    console.log("onlond "+url);
    if (url.indexOf("/books/") !== -1) {
//    if (url.indexOf("bt4") !== -1) {
        if (document.body.scrollHeight>100) {
            //mylog("#body="+document.body.innerHTML.length.toString());
            mylog("#Height="+document.body.scrollHeight.toString());
        }
    }
    else if (url.indexOf("recaptcha") !== -1) {
         if (document.documentElement.clientWidth>200)
                //mylog("#recaptcha="+document.documentElement.clientWidth.toString());
             mylog("recaptcha");
    }
    //cleanRules(document,"print");
    //onPrint(() => console.log('printing!'));
    //onPrint(cleanRules);
    cleanRules();

}

function onPrint(callback) {
    //window.matchMedia('print').addListener(query => query.matches ? callback() : null)
    window.addEventListener('beforeprint', () => callback());
}

var oldPrintFunction = window.print;
window.addEventListener('load', (event) => {

    setTimeout(onload, 500);

});
window.aaa = 1;

Window.prototype.print=function(){
    console.log("print disabled");
}
//window.print = function () {
//    console.log('print function');
//    oldPrintFunction();
//};
