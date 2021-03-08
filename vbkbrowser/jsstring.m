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
       var _0x3f19=['300707OChQlv','createTextNode','getElementsByTagName','#scrubber-container','head','#jigsaw-placeholder-inner\x20>\x20div.vertical-button-wrapper.previous-wrapper','180887AHciCL','176101tzGWaY','length','appendChild','styleSheet','style','text/css','type','1PxbmDX','58417jIdyaQ','9IpYofb','1ZuuEWV','547qvTlQm','384719TrOucO','2FAkQqv','2161Bgnmfy','20630rUqyIY','absolute','#bookshelf','iframe','querySelector','position','#reader-handler\x20>\x20div.cookie-banner','display','height','#jigsaw-placeholder-inner\x20>\x20div.horizontal-button-wrapper.previous-wrapper','documentElement','indexOf','document','#jigsaw-placeholder-outer'];var _0x8ca7=function(_0x192578,_0x41e2e9){_0x192578=_0x192578-0x1b7;var _0x3f196f=_0x3f19[_0x192578];return _0x3f196f;};(function(_0x364e7a,_0x30e316){var _0xad4042=_0x8ca7;while(!![]){try{var _0xa543e7=-parseInt(_0xad4042(0x1c3))*parseInt(_0xad4042(0x1d1))+-parseInt(_0xad4042(0x1d0))+-parseInt(_0xad4042(0x1bd))+parseInt(_0xad4042(0x1ce))*parseInt(_0xad4042(0x1cc))+-parseInt(_0xad4042(0x1c4))*parseInt(_0xad4042(0x1cb))+parseInt(_0xad4042(0x1cd))*parseInt(_0xad4042(0x1d3))+parseInt(_0xad4042(0x1d2))*parseInt(_0xad4042(0x1cf));if(_0xa543e7===_0x30e316)break;else _0x364e7a['push'](_0x364e7a['shift']());}catch(_0x46f56f){_0x364e7a['push'](_0x364e7a['shift']());}}}(_0x3f19,0x31865));function mlog(_0x5e2a3e){}function findiframe(_0x45dabd,_0x348647){var _0x5f4603=_0x8ca7,_0x5b1e89=_0x45dabd[_0x5f4603(0x1bf)](_0x5f4603(0x1d6));for(i=0x0;i<_0x5b1e89[_0x5f4603(0x1c5)];i++){if(_0x5b1e89[i]['id'][_0x5f4603(0x1ba)](_0x348647)!==-0x1)return _0x5b1e89[i];}}function appendStyle(_0x3ba6a5){var _0x37f77b=_0x8ca7,_0x4988bf=document['createElement'](_0x37f77b(0x1c8));_0x4988bf[_0x37f77b(0x1ca)]=_0x37f77b(0x1c9);if(_0x4988bf[_0x37f77b(0x1c7)])_0x4988bf['styleSheet']['cssText']=_0x3ba6a5;else _0x4988bf['appendChild'](document[_0x37f77b(0x1be)](_0x3ba6a5));document[_0x37f77b(0x1bf)](_0x37f77b(0x1c1))[0x0][_0x37f77b(0x1c6)](_0x4988bf);}function resizeIframe(_0x2d2436){var _0x5cbcef=_0x8ca7;_0x2d2436[_0x5cbcef(0x1c8)][_0x5cbcef(0x1b7)]=_0x2d2436['contentWindow'][_0x5cbcef(0x1bb)][_0x5cbcef(0x1b9)]['scrollHeight']+'px';}function hidediv(_0x1f79fc){var _0x1d3b13=_0x8ca7,_0x7bfc94=document[_0x1d3b13(0x1d7)](_0x1f79fc);if(!_0x7bfc94)return;_0x7bfc94['style'][_0x1d3b13(0x1da)]='none';}function hidediv2(_0x277df8){var _0x315443=_0x8ca7,_0x398548=document[_0x315443(0x1d7)](_0x277df8);if(!_0x398548)return;_0x398548[_0x315443(0x1c8)][_0x315443(0x1da)]='none',_0x398548['style'][_0x315443(0x1b7)]=0x1;}function positionchange(){var _0x50ea7c=_0x8ca7,_0x30281e=document[_0x50ea7c(0x1d7)](_0x50ea7c(0x1d5));if(_0x30281e){_0x30281e['style']['position']=_0x50ea7c(0x1d4);var _0x2ca037=_0x30281e['querySelector'](_0x50ea7c(0x1bc));_0x2ca037&&(_0x2ca037['style'][_0x50ea7c(0x1d8)]='absolute');}}function changediv(){var _0x21e46b=_0x8ca7;hidediv(_0x21e46b(0x1c2)),hidediv('#jigsaw-placeholder-inner\x20>\x20div.vertical-button-wrapper.next-wrapper'),hidediv2(_0x21e46b(0x1d9)),hidediv2(_0x21e46b(0x1c0)),hidediv('#jigsaw-placeholder-inner\x20>\x20div.horizontal-button-wrapper.next-wrapper'),hidediv(_0x21e46b(0x1b8));}positionchange(),changediv();
       
       
       );

//https://obfuscator.io
// reserve /[^\/]+/g
NSString* js_frameheight2 =
@QUOTE(
       var a = 1;
       
);
