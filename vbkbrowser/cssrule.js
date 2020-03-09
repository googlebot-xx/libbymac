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

function changediv()
{
     hidediv("#jigsaw-placeholder-inner > div.vertical-button-wrapper.previous-wrapper");
    hidediv("#jigsaw-placeholder-inner > div.vertical-button-wrapper.next-wrapper");
    hidediv2("#reader-handler > div.cookie-banner");
    hidediv2("#scrubber-container");
    hidediv("#jigsaw-placeholder-inner > div.horizontal-button-wrapper.next-wrapper");
    hidediv("#jigsaw-placeholder-inner > div.horizontal-button-wrapper.previous-wrapper");
    //hidediv("");
}

changediv();
