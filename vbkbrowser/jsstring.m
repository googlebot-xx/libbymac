//
//  jsstringe.m
//  vbkbrowser
//
//  Created by aa on 2017-05-09.
//  Copyright © 2017 ebookconverter. All rights reserved.
//

#import <Cocoa/Cocoa.h>

#define QUOTE(...) #__VA_ARGS__
NSString* js_nextpage =
@QUOTE(
       var node = document.querySelector('#jigsaw-placeholder-inner > div.horizontal-button-wrapper.next-wrapper > button');
       if (node) { node.click(); node.className; }
       node=  document.querySelector('#jigsaw-placeholder-inner > div.vertical-button-wrapper.next-wrapper > button');
       if (node) { node.click(); node.className;}
);

NSString* js_cssrule =
@QUOTE(
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
      banner.style.height=1;
  }

  function hidediv2(estr) {
      var banner=document.querySelector(estr);
      if (!banner) return;
      banner.style.display = 'none';
      banner.style.bottom = "-44px";
      //banner.style.height=1;
  }


  function positionchange()
  {
      var node = document.querySelector("#bookshelf");
      if (node) {
         node.style.position="absolute";
          var node2 = node.querySelector("#jigsaw-placeholder-outer");
          if (node2) {
              //console.log(node2);
              node2.style.position="absolute";  //
          }
      }
  }

  function changediv()
  {
      hidediv("#jigsaw-placeholder-inner > div.vertical-button-wrapper.previous-wrapper");
      hidediv("#jigsaw-placeholder-inner > div.vertical-button-wrapper.next-wrapper");
      //hidediv2("#reader-handler > div.cookie-banner");
      hidediv2("#scrubber-container");
      //hidediv("#jigsaw-placeholder-inner > div.horizontal-button-wrapper.next-wrapper");
      //hidediv("#jigsaw-placeholder-inner > div.horizontal-button-wrapper.previous-wrapper");
      //hidediv("");
      //cleanRules(document,"print");
      //console.log("done cssrule");
  }

  positionchange();
  changediv();
);

//https://obfuscator.io

NSString* js_frameheight =
@QUOTE(
       var _0x235c=['15_6','body','6eOdaoh','pageList','currentBookData','postMessage','toString','naturalWidth','load','VST','Book','2HVRpuh','1197670fTrHRG','frameElement','mediaText','webkit','#height=','#img=','media','indexOf','vbkType','image/png','messageHandlers','object','print','814507hTcQBA','book\x20object','width','516706csLBCy','getContext','userAgent','scrollHeight','cssRules','deleteRule','isbn','cfi','708079EsGUgy','self','#recaptcha','clientWidth','beforeprint','length','navigator','page','type','top','drawImage','keys','querySelector','logging','stringify','1117213qKicfJ','pbk','naturalHeight','215730yzNbiz','iframe\x20','epub-content','recaptcha','751855BwnJXd','createElement','1YnIdwZ','title','currentPageData','log','URL'];var _0x5046=function(_0x5d1c59,_0x1355f3){_0x5d1c59=_0x5d1c59-0x12a;var _0x235c96=_0x235c[_0x5d1c59];return _0x235c96;};var _0x3cf40e=_0x5046;(function(_0x1241c8,_0x4f2b29){var _0x462fb6=_0x5046;while(!![]){try{var _0x23422d=-parseInt(_0x462fb6(0x12c))+-parseInt(_0x462fb6(0x12f))*-parseInt(_0x462fb6(0x135))+parseInt(_0x462fb6(0x133))+parseInt(_0x462fb6(0x15e))+-parseInt(_0x462fb6(0x146))+-parseInt(_0x462fb6(0x153))*parseInt(_0x462fb6(0x145))+parseInt(_0x462fb6(0x13c))*parseInt(_0x462fb6(0x156));if(_0x23422d===_0x4f2b29)break;else _0x1241c8['push'](_0x1241c8['shift']());}catch(_0x3f2f4f){_0x1241c8['push'](_0x1241c8['shift']());}}}(_0x235c,0xcb203));function mylog(_0x2222fc){var _0x2e4a85=_0x5046;window[_0x2e4a85(0x149)][_0x2e4a85(0x150)][_0x2e4a85(0x12a)][_0x2e4a85(0x13f)](_0x2222fc);}function inIframe(){var _0x194a0d=_0x5046;try{return window[_0x194a0d(0x15f)]!==window[_0x194a0d(0x167)];}catch(_0x477573){return!![];}}function positionchange(){}function cleanRules(){var _0x229dfc=_0x5046,_0x5f0a17,_0x48b0db=[],_0x1bc0fe=document['styleSheets'];media='print';for(var _0x5227ff=0x0;_0x5227ff<_0x1bc0fe[_0x229dfc(0x163)];++_0x5227ff){var _0x38c4fc=_0x1bc0fe[_0x5227ff];if(!_0x1bc0fe[_0x5227ff]['cssRules'])continue;if(_0x38c4fc[_0x229dfc(0x14c)]['mediaText']['indexOf'](_0x229dfc(0x152))!==-0x1)for(var _0x33fae9=_0x38c4fc[_0x229dfc(0x15a)]['length']-0x1;_0x33fae9>=0x0;--_0x33fae9){_0x5f0a17=_0x38c4fc['cssRules'][_0x33fae9],_0x38c4fc['deleteRule'](_0x33fae9);}else{var _0x244162=![];for(var _0x33fae9=_0x1bc0fe[_0x5227ff][_0x229dfc(0x15a)][_0x229dfc(0x163)]-0x1;_0x33fae9>=0x0;--_0x33fae9){_0x5f0a17=_0x1bc0fe[_0x5227ff][_0x229dfc(0x15a)][_0x33fae9],_0x5f0a17[_0x229dfc(0x166)]==0x4&&_0x5f0a17['media'][_0x229dfc(0x148)][_0x229dfc(0x14d)]('print')!==-0x1&&_0x1bc0fe[_0x5227ff][_0x229dfc(0x15b)](_0x33fae9);}}}}function getpdfpage(){var _0x5e7771=_0x5046;vbktype=window[_0x5e7771(0x143)]['currentBookData']['vbkType'];if(vbktype!==_0x5e7771(0x12d))return;console[_0x5e7771(0x138)]('pbk\x20book');var _0x296939=document[_0x5e7771(0x16a)]('#pbk-page');if(!_0x296939)return;var _0x469b43=document[_0x5e7771(0x134)]('canvas');_0x469b43[_0x5e7771(0x155)]=_0x296939[_0x5e7771(0x141)],_0x469b43['height']=_0x296939[_0x5e7771(0x12e)];var _0x188930=_0x469b43[_0x5e7771(0x157)]('2d');_0x188930[_0x5e7771(0x168)](_0x296939,0x0,0x0);var _0x35d698=_0x469b43['toDataURL'](_0x5e7771(0x14f));mylog(_0x5e7771(0x14b)+_0x35d698);}function bookinfo(){var _0x4ad43f=_0x5046;if(typeof window[_0x4ad43f(0x143)]!=='object')return;if(typeof navigator!==_0x4ad43f(0x151))return;document[_0x4ad43f(0x13b)][_0x4ad43f(0x159)]>0x64&&mylog(_0x4ad43f(0x14a)+document[_0x4ad43f(0x13b)]['scrollHeight'][_0x4ad43f(0x140)]()),working=window[_0x4ad43f(0x164)][_0x4ad43f(0x158)]['indexOf'](_0x4ad43f(0x13a))!==-0x1,vsbook={},currentpage={},typeof window[_0x4ad43f(0x143)][_0x4ad43f(0x137)]==_0x4ad43f(0x151)&&(currentpage[_0x4ad43f(0x15d)]=window[_0x4ad43f(0x143)]['currentPageData']['cfiWithoutAssertions'],currentpage[_0x4ad43f(0x165)]=window[_0x4ad43f(0x143)][_0x4ad43f(0x137)][_0x4ad43f(0x165)],currentpage['scrollHeight']=window[_0x4ad43f(0x143)][_0x4ad43f(0x137)][_0x4ad43f(0x159)]),!working&&(typeof window[_0x4ad43f(0x143)][_0x4ad43f(0x13e)]==_0x4ad43f(0x151)&&(vsbook[_0x4ad43f(0x15c)]=window[_0x4ad43f(0x143)][_0x4ad43f(0x13e)]['isbn'],vsbook[_0x4ad43f(0x14e)]=window[_0x4ad43f(0x143)]['currentBookData'][_0x4ad43f(0x14e)],vsbook[_0x4ad43f(0x136)]=window['VST'][_0x4ad43f(0x13e)][_0x4ad43f(0x136)],vsbook[_0x4ad43f(0x13d)]=window[_0x4ad43f(0x143)][_0x4ad43f(0x144)]['pageBreakList'])),Object[_0x4ad43f(0x169)](currentpage)[_0x4ad43f(0x163)]>0x0&&(console[_0x4ad43f(0x138)](_0x4ad43f(0x154)),!working?mylog('#book='+JSON[_0x4ad43f(0x12b)](vsbook)):getpdfpage(),mylog('#currentpage='+JSON[_0x4ad43f(0x12b)](currentpage)));}function onload(){var _0x14b012=_0x5046,_0x1bddea=document[_0x14b012(0x16a)](_0x14b012(0x160));_0x1bddea&&mylog(_0x14b012(0x132));var _0x2cdaa0=document[_0x14b012(0x139)];console[_0x14b012(0x138)]('onlond\x20'+_0x2cdaa0);var _0x3b6beb=window[_0x14b012(0x147)];if(_0x3b6beb!==null&&_0x3b6beb['id'][_0x14b012(0x14d)](_0x14b012(0x131))!==-0x1)console[_0x14b012(0x138)](_0x14b012(0x130)+_0x3b6beb['id']),bookinfo();else{if(_0x2cdaa0[_0x14b012(0x14d)](_0x14b012(0x132))!==-0x1){if(document['documentElement'][_0x14b012(0x161)]>0xc8)mylog(_0x14b012(0x132));}}cleanRules();}function onPrint(_0x4bcfed){var _0x336541=_0x5046;window['addEventListener'](_0x336541(0x162),()=>_0x4bcfed());}window['addEventListener'](_0x3cf40e(0x142),_0xc5e407=>{setTimeout(onload,0x1f4);});
);
