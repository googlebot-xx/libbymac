function findiframe(doc,framename)
{
	var items = doc.getElementsByTagName('iframe');
	for (i=0; i< items.length;i++)
	{
		if (items[i].id.indexOf(framename) !== -1) {
			return items[i];
		}
	}
}

function appendStyle(styles) {
  var css = document.createElement('style');
  css.type = 'text/css';

  if (css.styleSheet) css.styleSheet.cssText = styles;
  else css.appendChild(document.createTextNode(styles));

  document.getElementsByTagName("head")[0].appendChild(css);
}

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}


function hidediv(estr) {
	var banner=document.querySelector(estr);
	if (!banner) return;
	banner.style.display = 'none';
}

function hidediv2(estr) {
    var banner=document.querySelector(estr);
    if (!banner) return;
    banner.style.display = 'none';
    banner.style.height=1;
}

function cleanRules(doc,media)
{
      var rule;
      var plist = [];
      var ss = doc.styleSheets;
      for (var i = 0; i < ss.length; ++i) {
          // loop through all the rules!
          //console.log(ss[i].cssRules.length);
          var sheet =  ss[i];
          if (String(sheet.media).toLowerCase() == media) {
              //sheet.media.item(0).disabled = true;
              //console.log("sheet %s %s",i,sheet.href);
              if (!ss[i].cssRules) continue;
              for (var x = sheet.cssRules.length-1; x >=0; --x) {
                  rule = sheet.cssRules[x];
                    console.log(rule);
                    sheet.deleteRule(x);
                }
          } else {
            //console.log("sheet %s %s",i,sheet.href);
              if (!ss[i].cssRules) continue;
              for (var x = ss[i].cssRules.length-1; x >=0; --x) {
                  rule = ss[i].cssRules[x];
                  //console.log(rule);
                    if (rule.type == 4) // CSSMediaRule
                    {
                        if (rule.cssText.indexOf("!important")!== -1) {
                                //console.log(rule);
                                ss[i].deleteRule(x);
                        }
                    }
                }
          }
      }
}

function changediv()
{
     hidediv("#jigsaw-placeholder-inner > div.vertical-button-wrapper.previous-wrapper");
    hidediv("#jigsaw-placeholder-inner > div.vertical-button-wrapper.next-wrapper");
    hidediv2("#reader-handler > div.cookie-banner");
    hidediv2("#scrubber-container");
    hidediv("#jigsaw-placeholder-inner > div.horizontal-button-wrapper.next-wrapper");
    hidediv("#jigsaw-placeholder-inner > div.horizontal-button-wrapper.previous-wrapper");
    //hidediv("");
    //cleanRules(document,"print");
    console.log("done cssrule");
}

changediv();
