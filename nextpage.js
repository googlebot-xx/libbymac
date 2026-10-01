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
       
       function nexttext()
       {
           nextbtn =  document.querySelector(".chapter-bar-next-button.chapter-bar-jump-button");
           str = nextbtn.innerText;
           if (str) {
               mm = Number(str.match(/\d+/)[0]);
               return mm;            
           } else return 0;
       }

       readnextbtn();
       min = nexttext();
       if (min<4) 
       { clicknextbtn(); }
       else if (min<120) {
          jump15();
          setTimeout(clicknextbtn, 3000);
       } else {
          jump15();
          setTimeout(clicknextbtn, 3000);
          setTimeout(jump15behind, 5000);
          setTimeout(clicknextbtn, 7000);

       }
//       jump15();
////       clicknextbtn();
//       setTimeout(clicknextbtn, 3000);
       JSON.stringify(obj);
