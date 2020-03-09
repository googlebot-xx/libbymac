

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


function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}



function hidediv(estr) {
	var banner=document.querySelector(estr);
	if (!banner) return;
	banner.style.display = 'none';
}

var ddoc,edoc;

function changeiframecss()
{
	//getCssRulesFromDocumentStyleSheets(document,'print');
	//cleanRules(document,'print');
//	return;
	var dframe = findiframe(document,'easyXDM_default');
	if (dframe) {
		console.log(dframe.id);
		ddoc =dframe.contentDocument || dframe.contentWindow.document;
		var epubframe = findiframe(ddoc,'epub-content');
		if (epubframe) {
			edoc = epubframe.contentDocument? epubframe.contentDocument: epubframe.contentWindow.document;
			var hh = edoc.documentElement.scrollHeight;
			//hh;
		}
	}
}

function mylog(msg)
{
    window.webkit.messageHandlers.logging.postMessage(msg);
}

window.addEventListener('load', (event) => {
    //log.textContent = log.textContent + 'load\n';
    //changeiframecss();
    var url=document.URL;
    if (url.indexOf("/books") !== -1) {
        mylog(document.body.scrollHeight);
    }
});
