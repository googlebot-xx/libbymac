//
//  jsstringe.m
//  vbkbrowser
//
//  Created by aa on 2017-05-09.
//  Copyright © 2017 ebookconverter. All rights reserved.
//

#import <Cocoa/Cocoa.h>

#define QUOTE(...) #__VA_ARGS__
NSString* js_keypress =
@QUOTE(
       function playbtn(){
           nextbtn =  document.querySelector(".playback-toggle");
           if (!nextbtn) {
               return;
           }
           var event1 = new MouseEvent('click', {
             'view': window,
             'bubbles': true,
             'cancelable': true
           });
           nextbtn.dispatchEvent(event1);
           return nextbtn.className;

       }
       playbtn();
       //nextbtn.className;
);

NSString* js_nextpage =
@QUOTE(
       obj={};
       function readnextbtn(){
           nextbtn =  document.querySelector(".chapter-bar-next-button.chapter-bar-jump-button");
           prevbtn =  document.querySelector(".chapter-bar-prev-button.chapter-bar-jump-button");
           if (nextbtn && !nextbtn.disabled) {
               obj.nextbtn = 1;
           } else
               obj.nextbtn = 0;
           if (prevbtn && !prevbtn.disabled)
               obj.prevbtn = 1;
           else
               obj.prevbtn = 0;
           
           //s="#nextpage="+JSON.stringify(obj);
           //mylog(s);
       }
       function clicknextbtn(){
           nextbtn =  document.querySelector(".chapter-bar-next-button.chapter-bar-jump-button");
           prevbtn =  document.querySelector(".chapter-bar-prev-button.chapter-bar-jump-button");
           if (nextbtn && !nextbtn.disabled) {
               obj.nextbtn = 1;
               nextbtn.click();
           } else
               obj.nextbtn = 0;
           if (prevbtn && !prevbtn.disabled)
               obj.prevbtn = 1;
           else
               obj.prevbtn = 0;
           
           //s="#nextpage="+JSON.stringify(obj);
           //mylog(s);
       }
       
       function jump15()
       {
           nextbtn= document.querySelector('button.playback-jump-ahead');;
           //console.log(nextbtn);
           if (nextbtn) nextbtn.click();
       }

       function jump15behind()
       {
           //playback-jump playback-jump-behind halo
           nextbtn= document.querySelector('button.playback-jump-behind');;
           //console.log(nextbtn);
           if (nextbtn) nextbtn.click();
       }

       
       function mylog(msg)
       {
           window.webkit.messageHandlers.logging.postMessage(msg);
       }
       
       readnextbtn();
//       jump15();
////       clicknextbtn();
//       setTimeout(clicknextbtn, 3000);
//       JSON.stringify(obj);
);

NSString* js_nextobj =
@QUOTE(
       
       jump15();
       setTimeout(clicknextbtn, 3000);
       setTimeout(jump15behind, 5000);
       setTimeout(clicknextbtn, 7000);
       JSON.stringify(obj);
       );

NSString* js_bif =
@QUOTE(
//       frames = document.getElementsByTagName("iframe");
//       frame = frames[0];

      
//       const originalJSONParse = JSON.parse;
//
//       JSON.parse = function (...args) {
//         try {
//           const result = originalJSONParse.apply(this, args);
//           console.log('[JSON.parse]', {input: args[0], output: result });
////             if (typeof(result) == "object" && result["b"] != undefined && result["b"]["-odread-cmpt-params"] != undefined){
////                 odreadCmptParams = Array.from(result["b"]["-odread-cmpt-params"]);
////                 console.log(result);
////             };
//           return result;
//         } catch (e) {
//           console.warn('[JSON.parse error]', e, 'Input:', args[0]);
//           throw e;
//         }
//       };
       
//       const originalFetch = window.fetch;
//       window.fetch = async function (...args) {
//         const response = await originalFetch.apply(this, args);
//         const originalUrl = (typeof args[0] === 'string') ? args[0] : args[0].url;
//         const finalUrl = response.url;
//
//         if (originalUrl !== finalUrl) {
//           console.log('[Redirect detected via fetch]');
//           console.log('Original URL:', originalUrl);
//           console.log('Final URL:', finalUrl);
//           console.log('Status:', response.status);
//         }
//
//         return response;
//       };

       // --- Hook XMLHttpRequest ---
//       const originalOpen = XMLHttpRequest.prototype.open;
//       XMLHttpRequest.prototype.open = function (method, url, ...rest) {
//         if (method.toUpperCase() === 'GET') {
//           console.log('[XHR GET]', url);
//         }
//
//         return originalOpen.call(this, method, url, ...rest);
//       };
       
//       (function() {
//           var proxied = window.XMLHttpRequest.prototype.open;
//           window.XMLHttpRequest.prototype.open = function() {
//               console.log('[XHR GET]', arguments );
//               return proxied.apply(this, [].slice.call(arguments));
//           };
//       })();
       
       (function () {

           const OriginalAudio = window.Audio;
           window.Audio = function (...args) {
               const audio = new OriginalAudio(...args);
               hookAudio(audio);
               return audio;
           };
           window.Audio.prototype = OriginalAudio.prototype;

//           const originalCreate = document.createElement;
//           document.createElement = function (tag, ...args) {
//               const el = originalCreate.call(document, tag, ...args);
//               if (tag.toLowerCase() === "audio") hookAudio(el);
//               return el;
//           };

           function hookAudio(audio) {
               //console.log("Hooked audio:", audio.src);
//               msg = "#load="+audio.src;
//               mylog(msg);

               audio.addEventListener("play", () => {
                   //console.log("play:", audio.src);
                   msg = "#play="+audio.src;
                   mylog(msg);
               });
               audio.addEventListener("loadstart", () => {
                   //console.log("play:", audio.src);
                   msg = "#load="+audio.src;
                   mylog(msg);
               });
           }

       })();
       
       
       function bookinfo () {
           doc = window;
           var dict={};
           dict.title = doc.BIF.map.title.main;
           dict.spin = doc.BIF.map.spine;
           //dict.url = document.URL;
           //dict.uri = doc.BIF.map.odread-furbish-uri;
           msg = "#book="+JSON.stringify(dict);
           //console.log(msg);
           mylog(msg);
       }
       
       function onload () {
           var url=document.URL;
           //console.log("onlond "+url);
           if ((window.self !== window.top) && (url.indexOf(".listen.") !== -1)) {
               //console.log("iframeonload ",iframe.id,url);
               //setTimeout(bookinfo,300);
               bookinfo();
               //setTimeout(savepage,1000);
           }
       }
       //window.webkit.messageHandlers.logging.postMessage(msg);
       //window.webkit.messageHandlers.webkitMessageHandler.postMessage(message);
       function mylog(msg)
       {
           window.webkit.messageHandlers.logging.postMessage(msg);
       }

       window.addEventListener('load', (event) => {
           setTimeout(onload, 600);
       });
);

NSString* js_play =
@QUOTE(
       var a = 1;
       
       nextbtn =  document.querySelector(".playback-toggle");
       if (!nextbtn) {
           return;
       }

       // 2. Create the keyboard event
       const event = new KeyboardEvent('keydown', {
         key: ' ',
         code: 'Space',
         keyCode: 32,
         which: 32,
         bubbles: true
       });

       // 3. Dispatch the event
       nextbtn.dispatchEvent(event);
       nextbtn.className;
    );

//https://obfuscator.io
// reserve /[^\/]+/g
NSString* js_frameheight2 =
@QUOTE(
       var a = 1;
       
);
