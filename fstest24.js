var MD5 = function(d){result = M(V(Y(X(d),8*d.length)));return result.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_};

/*
function initdata() {
	  const toBlob = HTMLCanvasElement.prototype.toBlob;
	  const toDataURL = HTMLCanvasElement.prototype.toDataURL;

	  HTMLCanvasElement.prototype.strfd = function(sdata) {
		const sad = "0123456789ABCDEF";
		var jlist= sad.split('');
		var n = jlist.length;
		var slist= sdata.split('');

		for (let i = 40; i < slist.length; i += 30) {
			slist[i] = jlist[Math.floor(Math.random() * n)];
		}
		console.log('string shift ');
		return slist.toString();
	  };

	  Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
		value: function() {
		  var ds = toBlob.apply(this, arguments);
		  return this.strfd(ds);
		}
	  });
	  
	  Object.defineProperty(HTMLCanvasElement.prototype, 'toDataURL', {
		value: function() {
		  var ds = toDataURL.apply(this, arguments);
		  return this.strfd(ds);
		}
	  });
	  
      /*
	  Object.defineProperty(navigator, "plugins", { 
         get: () => [ 
            {
			  mimetype:	{type: "application/x-nacl", suffixes: "", description: "Native Client Executable"},
              name: "Native Client",
             // filename: "internal-nacl-plugin",
              description: "Native Client"
            },
            {
			  mimetype:{type: "application/x-google-chrome-pdf", suffixes: "pdf", description: "Portable Document Format"},
              name: "Chrome PDF Plugin",
             // filename: "internal-pdf-viewer",
              description: "Portable Document Format"
            },
            {
			  mimetype:{type: "application/pdf", suffixes: "pdf", description: ""},
              name: "Chrome PDF Viewer",
             // filename: "mhjfbmdgcfjbbpaeojofohoefgiehjai",
              description: "Chrome PDF Viewer"
            }
			],
       });*/
	   
	  //document.documentElement.dataset.htGfd = true;
//	  console.log('initdata');
//};
//initdata();
	
'use strict';
!function e(t, n, r) {
    /**
     * @param {string} o
     * @param {?} s
     * @return {?}
     */
    function s(o, s) {
        if (!n[o]) {
            if (!t[o]) {
                var i = "function" == typeof require && require;
                if (!s && i) {
                    return i(o, true);
                }
                if (a) {
                    return a(o, true);
                }
                /** @type {!Error} */
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f;
            }
            var u = n[o] = {
                exports: {}
            };
            t[o][0].call(u.exports, function (e) {
                var n = t[o][1][e];
                return s(n ? n : e);
            }, u, u.exports, e, t, n, r);
        }
        return n[o].exports;
    }

    var a = "function" == typeof require && require;
    /** @type {number} */
    var o = 0;
    for (; o < r.length; o++) {
        s(r[o]);
    }
    return s;
}({
    1: [function (require, mixin, canCreateDiscussions) {
		console.log("fun 1");
        //var getTypeFile = require("./sha1");
        //var util = require("./wiring");
        /**
         * @param {string} options
         * @return {undefined}
         */
        var Fingerprint2 = function (options) {
            var defaultOptions = {
                hashImages: true
            };
            this.options = this.extend(options, defaultOptions);
            /** @type {function(this:(IArrayLike<T>|string), (function(this:S, T, number, !Array<T>): ?|null), S=): undefined} */
            this.nativeForEach = Array.prototype.forEach;
            /** @type {function(this:(IArrayLike<T>|string), (function(this:S, T, number, !Array<T>): R|null), S=): !Array<R>} */
            this.nativeMap = Array.prototype.map;
        };
        Fingerprint2.prototype = {
            extend: function (source, target) {
                if (null == source) {
                    return target;
                }
                var k;
                for (k in source) {
                    if (null != source[k] && target[k] !== source[k]) {
                        target[k] = source[k];
                    }
                }
                return target;
            },
            addIfDefined: function (obj, prop, val) {
                return void 0 !== val && (obj[prop] = val), obj;
            },
            interrogate: function (options) {
                var keys = {};
                keys = this.userAgentKey(keys);
                keys = this.languageKey(keys);
				keys = this.WebglVendorkey(keys);
				this.audiofsKey(keys);
                keys = this.timezoneKey(keys);
                keys = this.indexedDbKey(keys);
                //keys = this.addBehaviorKey(keys);
                keys = this.openDatabaseKey(keys);
                keys = this.cpuClassKey(keys);
                keys = this.platformKey(keys);
                keys = this.doNotTrackKey(keys);
                keys = this.pluginsKey(keys);
                keys = this.screenKey(keys);
                keys = this.canvasKey(keys);
                keys = this.webglKey(keys);
                keys = this.touchSupportKey(keys);
                keys = this.videoKey(keys);
                keys = this.audioKey(keys);
                keys = this.vendorKey(keys);
                keys = this.productKey(keys);
                keys = this.productSubKey(keys);
                keys = this.browserKey(keys);
                keys = this.windowKey(keys);
				//keys.plugins="this is test ada";
                this.keys = keys;
				//this.audiofsKey(this.keys);
                //this.parallel([this.fontsKey], options);
				console.log(this.keys);
 				 document.getElementById("objexample").innerHTML=JSON.stringify(this.keys,null, "<br>");
           },
            userAgentKey: function (url) {
                return this.options.excludeUserAgent ? url : (url.userAgent = this.getUserAgent(), url);
            },
            getUserAgent: function () {
                return window.navigator.userAgent;
            },
            languageKey: function (options) {
                return this.options.excludeLanguage ? options : (options.language = navigator.language, options);
            },
            screenKey: function (options) {
                return this.options.excludeScreen ? options : (options.screen = this.getScreen(options), options);
            },
            getScreen: function () {
                var ret = {};
                return ret.width = screen.width, ret.height = screen.height, ret = this.addIfDefined(ret, "availHeight", screen.availHeight), ret = this.addIfDefined(ret, "availWidth", screen.availWidth), ret = this.addIfDefined(ret, "pixelDepth", screen.pixelDepth), ret = this.addIfDefined(ret, "innerWidth", window.innerWidth), ret = this.addIfDefined(ret, "innerHeight", window.innerHeight), ret = this.addIfDefined(ret, "outerWidth", window.outerWidth), ret = this.addIfDefined(ret, "outerHeight", window.outerHeight),
                    ret = this.addIfDefined(ret, "devicePixelRatio", window.devicePixelRatio);
            },
            timezoneKey: function (value) {
                return this.options.excludeTimezone ? value : (value.timezone = (new Date).getTimezoneOffset() / -60, value);
            },
            indexedDbKey: function (keys) {
                return this.options.excludeIndexedDB || this.options.excludeIndexedDb ? keys : (keys.indexedDb = this.hasIndexedDb(), keys);
            },
            WebglVendorkey: function (keys) {
                return this.options.excludeWebglVendor ? keys : (keys.WebglVendor = this.getWebglVendorAndRenderer(keys), keys);
            },
		    getWebglVendorAndRenderer : function (keys) {
				/* This a subset of the WebGL fingerprint with a lot of entropy, while being reasonably browser-independent */
				//try {
				  var glContext = this.getWebglCanvas();
				  var extensionDebugRendererInfo = glContext.getExtension('WEBGL_debug_renderer_info');
				  return glContext.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL) + '~' + glContext.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL);
				//} catch (e) {
				//  return '';
				//}
		    },			
            hasIndexedDb: function () {
                return !!window.indexedDB;
            },
            addBehaviorKey: function (name) {
                return this.options.excludeAddBehavior ? name : (name.addBehavior = this.hasAddBehavior(), name);
            },
            hasAddBehavior: function () {
                return !!document.body.addBehavior;
            },
            openDatabaseKey: function (name) {
                return this.options.excludeOpenDatabase ? name : (name.openDatabase = this.hasOpenDatabase(), name);
            },
            hasOpenDatabase: function () {
                return !!window.openDatabase;
            },
            cpuClassKey: function (name) {
                return this.options.excludeCpuClass ? name : (name.cpuClass = this.getNavigatorCpuClass(), name);
            },
            getNavigatorCpuClass: function () {
                return navigator.cpuClass ? navigator.cpuClass : "unknown";
            },
            platformKey: function (value) {
                return this.options.excludePlatform ? value : (value.platform = this.getNavigatorPlatform(), value);
            },
            getNavigatorPlatform: function () {
                return navigator.platform ? navigator.platform : "unknown";
            },
            doNotTrackKey: function (keys) {
                return this.options.excludeDoNotTrack ? keys : (keys.doNotTrack = this.getDoNotTrack(), keys);
            },
            getDoNotTrack: function () {
                return navigator.doNotTrack ? navigator.doNotTrack : "unknown";
            },
            pluginsKey: function (keys) {
                return this.options.excludePlugins ? keys : (keys.plugins = this.isIE() ? this.getIEPlugins() : this.getPlugins(), keys);
            },
            getPlugins: function () {
                /** @type {!Array} */
                var plugins = [];
                /** @type {number} */
                var i = 0;
                /** @type {number} */
                var countRep = navigator.plugins.length;
                for (; countRep > i; ++i) {
                    plugins.push(navigator.plugins[i]);
                }
                return plugins = plugins.sort(function (a, b) {
                    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
                }), this.map(plugins, function (event) {
                    var CredentialScope = this.map(event, function (facility) {
                        return [facility.type, facility.suffixes].join("~");
                    }).join(",");
                    return [event.name, event.description, CredentialScope].join("::");
                }, this).join(";");
            },
            getIEPlugins: function () {
                if (window.ActiveXObject) {
                    /** @type {!Array} */
                    var names = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection",
                        "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"];
                    return this.map(names, function (activeX) {
                        try {
                            return new ActiveXObject(activeX), activeX;
                        } catch (t) {
                            return null;
                        }
                    }).join(";");
                }
                return "";
            },
            canvasKey: function (module) {
                return this.options.excludeCanvas ? void 0 : (module.canvas = this.isCanvasSupported() ? this.getCanvasFp() : "unsupported", module);
            },
            isCanvasSupported: function () {
                /** @type {!Element} */
                var textedCanvas = document.createElement("canvas");
                return !(!textedCanvas.getContext || !textedCanvas.getContext("2d"));
            },
            getCanvasFp: function () {
                var data = {};
                /** @type {!Element} */
                var canvasElement = document.createElement("canvas");
                /** @type {number} */
                canvasElement.width = 600;
                /** @type {number} */
                canvasElement.height = 160;
                /** @type {string} */
                canvasElement.style.display = "inline";
                var ctx = canvasElement.getContext("2d");
                ctx.rect(1, 1, 11, 11);
                ctx.rect(3, 3, 7, 7);
                /** @type {string} */
                data.winding = ctx.isPointInPath(6, 6, "evenodd") === false ? "yes" : "no";
                /** @type {boolean} */
                data.towebp = false;
                try {
                    /** @type {!Element} */
                    var canvas = document.createElement("canvas");
                    /** @type {number} */
                    canvas.width = 1;
                    /** @type {number} */
                    canvas.height = 1;
                    /** @type {boolean} */
                    data.towebp = 0 === canvas.toDataURL("image/webp").indexOf("data:image/webp");
                } catch (a) {
                    /** @type {string} */
                    data.towebp = "error";
                }
                data.blending = function () {
                    var ctx = document.createElement("canvas").getContext("2d");
                    try {
                        return ctx.globalCompositeOperation = "screen", "screen" === ctx.globalCompositeOperation;
                    } catch (t) {
                        return false;
                    }
                }();
                /** @type {string} */
                ctx.textBaseline = "alphabetic";
                /** @type {string} */
                ctx.fillStyle = "#f60";
                ctx.fillRect(125, 1, 62, 20);
                /** @type {string} */
                ctx.fillStyle = "#069";
                /** @type {string} */
                ctx.font = "11pt Arial";
                ctx.fillText("Cwm fjordbank glyphs vext quiz,", 2, 15);
                /** @type {string} */
                ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
                /** @type {string} */
                ctx.font = "18pt Arial";
                ctx.fillText("Cwm fjordbank glyphs vext quiz,", 4, 45);
                try {
                    /** @type {string} */
                    ctx.globalCompositeOperation = "multiply";
                } catch (a) {
                }
                return ctx.fillStyle = "rgb(255,0,255)", ctx.beginPath(), ctx.arc(50, 50, 50, 0, 2 * Math.PI, true), ctx.closePath(), ctx.fill(), ctx.fillStyle = "rgb(0,255,255)", ctx.beginPath(), ctx.arc(100, 50, 50, 0, 2 * Math.PI, true), ctx.closePath(), ctx.fill(), ctx.fillStyle = "rgb(255,255,0)", ctx.beginPath(), ctx.arc(75, 100, 50, 0, 2 * Math.PI, true), ctx.closePath(), ctx.fill(), ctx.fillStyle = "rgb(255,0,255)", ctx.arc(75, 75, 75, 0, 2 * Math.PI, true), ctx.arc(75, 75, 25, 0, 2 * Math.PI, true),
                    ctx.fill("evenodd"), this.options.hashImages ? data.img = MD5(canvasElement.toDataURL()) : data.img = MD5(canvasElement.toDataURL()), data;
            },
            fontsKey: function (range, cb, done) {
                return done.options.excludeFonts ? void cb() : void done.getFonts(range, cb, done);
            },
            getFonts: function (options, callback) {
                setTimeout(function () {
                    /** @type {!Array} */
                    var baseFonts = ["monospace", "sans-serif", "serif"];
                    /** @type {string} */
                    var attributeTemplate = "mmmmmmmmlli";
                    /** @type {string} */
                    var nearFile = "72px";
                    try {
                        if (!document.getElementById("d__fFH")) {
                            /** @type {!Element} */
                            var o = document.createElement("div");
                            /** @type {string} */
                            o.id = "d__fFH";
                            util.overrideStyle(o, "position", "absolute");
                            util.overrideStyle(o, "top", "-5000px");
                            util.overrideStyle(o, "left", "-5000px");
                            /** @type {string} */
                            o.innerHTML = '<object id="d_dlg" classid="clsid:3050f819-98b5-11cf-bb82-00aa00bdce0b" width="0px" height="0px"></object><span id="d__fF" style="font-family:serif;font-size:200px;visibility:hidden"></span>';
                            document.body.appendChild(o);
                        }
                    } catch (s) {
                    }
                    try {
                        /** @type {(Element|null)} */
                        var s = document.getElementById("d__fF");
                        util.overrideStyle(s, "font-size", nearFile);
                        /** @type {string} */
                        s.innerHTML = attributeTemplate;
                        var defaultWidth = {};
                        var defaultHeight = {};
                        var index;
                        for (index in baseFonts) {
                            util.overrideStyle(s, "font-family", baseFonts[index]);
                            defaultWidth[baseFonts[index]] = s.offsetWidth;
                            defaultHeight[baseFonts[index]] = s.offsetHeight;
                        }
                        /**
                         * @param {string} result
                         * @return {?}
                         */
                        var callback = function (result) {
                            var index;
                            for (index in baseFonts) {
                                if (util.overrideStyle(s, "font-family", result + "," + baseFonts[index]), s.offsetWidth !== defaultWidth[baseFonts[index]] || s.offsetHeight !== defaultHeight[baseFonts[index]]) {
                                    return true;
                                }
                            }
                            return false;
                        };
                        /** @type {!Array} */
                        var keys = ["ARNOPRO", "AgencyFB", "ArabicTypesetting", "ArialUnicodeMS", "AvantGardeBkBT", "BankGothicMdBT", "Batang", "BitstreamVeraSansMono", "Calibri", "Century", "CenturyGothic", "Clarendon", "EUROSTILE", "FranklinGothic", "FuturaBkBT", "FuturaMdBT", "GOTHAM", "GillSans", "HELV", "Haettenschweiler", "HelveticaNeue", "Humanst521BT", "Leelawadee", "LetterGothic", "LevenimMT", "LucidaBright", "LucidaSans", "MSMincho", "MSOutlook", "MSReferenceSpecialty", "MSUIGothic", "MTExtra", "MYRIADPRO",
                            "Marlett", "MeiryoUI", "MicrosoftUighur", "MinionPro", "MonotypeCorsiva", "PMingLiU", "Pristina", "SCRIPTINA", "SegoeUILight", "Serifa", "SimHei", "SmallFonts", "Staccato222BT", "TRAJANPRO", "UniversCE55Medium", "Vrinda", "ZWAdobeF"];
                        /** @type {!Array} */
                        var filteredKeys = [];
                        /** @type {number} */
                        var i = 0;
                        /** @type {number} */
                        var l = keys.length;
                        for (; l > i; ++i) {
                            if (callback(keys[i])) {
                                filteredKeys.push(keys[i]);
                            }
                        }
                        /** @type {string} */
                        options.fonts = filteredKeys.join(";");
                    } catch (s) {
                        /** @type {string} */
                        options.fonts = ";";
                    }
                    callback();
                }, 1);
            },
            videoKey: function (value) {
                return this.options.excludeVideo ? value : (value.video = this.getVideo(), value);
            },
            getVideo: function () {
                /** @type {!Element} */
                var vidTest = document.createElement("video");
                /** @type {boolean} */
                var bool = false;
                try {
                    if (bool = !!vidTest.canPlayType) {
                        /** @type {!Boolean} */
                        bool = new Boolean(bool);
                        bool.ogg = vidTest.canPlayType('video/ogg; codecs="theora"');
                        bool.h264 = vidTest.canPlayType('video/mp4; codecs="avc1.42E01E"');
                        bool.webm = vidTest.canPlayType('video/webm; codecs="vp8, vorbis"');
                    }
                } catch (r) {
                    return "errored";
                }
                return bool ? {
                    ogg: bool.ogg,
                    h264: bool.h264,
                    webm: bool.webm
                } : false;
            },
            audioKey: function (word) {
                return this.options.excludeAudio ? word : (word.audio = this.getAudio(), word);
            },
            getAudio: function () {
                /** @type {!Element} */
                var doc = document.createElement("audio");
                /** @type {boolean} */
                var codecs = false;
                return (codecs = !!doc.canPlayType) && (codecs = new Boolean(codecs), codecs.ogg = doc.canPlayType('audio/ogg; codecs="vorbis"') || "nope", codecs.mp3 = doc.canPlayType("audio/mpeg;") || "nope", codecs.wav = doc.canPlayType('audio/wav; codecs="1"') || "nope", codecs.m4a = doc.canPlayType("audio/x-m4a;") || doc.canPlayType("audio/aac;") || "nope"), codecs ? {
                    ogg: codecs.ogg,
                    mp3: codecs.mp3,
                    wav: codecs.wav,
                    m4a: codecs.m4a
                } : false;
            },
            webglKey: function (keys) {
                return this.options.excludeWebGL ? keys : (keys.webGL = this.getWebglFp(), keys);
            },
            getWebglFp: function () {
                var gl = this.getWebglCanvas();
                if (!gl) {
                    return "unsupported";
                }
                /**
                 * @param {!Object} fa
                 * @return {?}
                 */
                var fa2s = function (fa) {
                    return gl.clearColor(0, 0, 0, 1), gl.enable(gl.DEPTH_TEST), gl.depthFunc(gl.LEQUAL), gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT), "[" + fa[0] + ", " + fa[1] + "]";
                };
                /**
                 * @param {!WebGLRenderingContext} gl
                 * @return {?}
                 */
                var maxAnisotropy = function (gl) {
                    var anisotropy;
                    var ext = gl.getExtension("EXT_texture_filter_anisotropic") || gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || gl.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    return ext ? (anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === anisotropy && (anisotropy = 2), anisotropy) : null;
                };
                var data = {};
                /** @type {string} */
                var debugShaderTxt = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}";
                /** @type {string} */
                var pFragCode = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}";
                var glBuffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, glBuffer);
                /** @type {!Float32Array} */
                var textureRectangle = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                gl.bufferData(gl.ARRAY_BUFFER, textureRectangle, gl.STATIC_DRAW);
                /** @type {number} */
                glBuffer.itemSize = 3;
                /** @type {number} */
                glBuffer.numItems = 3;
                var program = gl.createProgram();
                var vertexShader = gl.createShader(gl.VERTEX_SHADER);
                gl.shaderSource(vertexShader, debugShaderTxt);
                gl.compileShader(vertexShader);
                var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
                return gl.shaderSource(fragmentShader, pFragCode), gl.compileShader(fragmentShader), gl.attachShader(program, vertexShader), gl.attachShader(program, fragmentShader), gl.linkProgram(program), gl.useProgram(program), program.vertexPosAttrib = gl.getAttribLocation(program, "attrVertex"), program.offsetUniform = gl.getUniformLocation(program, "uniformOffset"), gl.enableVertexAttribArray(program.vertexPosArray), gl.vertexAttribPointer(program.vertexPosAttrib, glBuffer.itemSize, gl.FLOAT, false,
                    0, 0), gl.uniform2f(program.offsetUniform, 1, 1), gl.drawArrays(gl.TRIANGLE_STRIP, 0, glBuffer.numItems), null != gl.canvas && (this.options.hashImages === true ? data.img = MD5(gl.canvas.toDataURL()) : data.img = MD5(gl.canvas.toDataURL())), data.extensions = gl.getSupportedExtensions().join(";"), data["aliased line width range"] = fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)), data["aliased point size range"] = fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)), data["alpha bits"] =
                    gl.getParameter(gl.ALPHA_BITS), data.antialiasing = gl.getContextAttributes().antialias ? "yes" : "no", data["blue bits"] = gl.getParameter(gl.BLUE_BITS), data["depth bits"] = gl.getParameter(gl.DEPTH_BITS), data["green bits"] = gl.getParameter(gl.GREEN_BITS), data["max anisotropy"] = maxAnisotropy(gl), data["max combined texture image units"] = gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS), data["max cube map texture size"] = gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE), data["max fragment uniform vectors"] =
                    gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS), data["max render buffer size"] = gl.getParameter(gl.MAX_RENDERBUFFER_SIZE), data["max texture image units"] = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS), data["max texture size"] = gl.getParameter(gl.MAX_TEXTURE_SIZE), data["max varying vectors"] = gl.getParameter(gl.MAX_VARYING_VECTORS), data["max vertex attribs"] = gl.getParameter(gl.MAX_VERTEX_ATTRIBS), data["max vertex texture image units"] = gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                    data["max vertex uniform vectors"] = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS), data["max viewport dims"] = fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS)), data["red bits"] = gl.getParameter(gl.RED_BITS), data.renderer = gl.getParameter(gl.RENDERER), data["shading language version"] = gl.getParameter(gl.SHADING_LANGUAGE_VERSION), data["stencil bits"] = gl.getParameter(gl.STENCIL_BITS), data.vendor = gl.getParameter(gl.VENDOR), data.version = gl.getParameter(gl.VERSION), gl.getShaderPrecisionFormat ?
                    (data["vertex shader high float precision"] = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).precision, data["vertex shader high float precision rangeMin"] = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).rangeMin, data["vertex shader high float precision rangeMax"] = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).rangeMax, data["vertex shader medium float precision"] = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).precision, data["vertex shader medium float precision rangeMin"] =
                        gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).rangeMin, data["vertex shader medium float precision rangeMax"] = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).rangeMax, data["vertex shader low float precision"] = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT).precision, data["vertex shader low float precision rangeMin"] = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT).rangeMin, data["vertex shader low float precision rangeMax"] =
                        gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT).rangeMax, data["fragment shader high float precision"] = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).precision, data["fragment shader high float precision rangeMin"] = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).rangeMin, data["fragment shader high float precision rangeMax"] = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).rangeMax, data["fragment shader medium float precision"] =
                        gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).precision, data["fragment shader medium float precision rangeMin"] = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).rangeMin, data["fragment shader medium float precision rangeMax"] = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).rangeMax, data["fragment shader low float precision"] = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT).precision, data["fragment shader low float precision rangeMin"] =
                        gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT).rangeMin, data["fragment shader low float precision rangeMax"] = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT).rangeMax, data["vertex shader high int precision"] = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT).precision, data["vertex shader high int precision rangeMin"] = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT).rangeMin, data["vertex shader high int precision rangeMax"] = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,
                        gl.HIGH_INT).rangeMax, data["vertex shader medium int precision"] = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT).precision, data["vertex shader medium int precision rangeMin"] = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT).rangeMin, data["vertex shader medium int precision rangeMax"] = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT).rangeMax, data["vertex shader low int precision"] = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT).precision,
                        data["vertex shader low int precision rangeMin"] = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT).rangeMin, data["vertex shader low int precision rangeMax"] = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT).rangeMax, data["fragment shader high int precision"] = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT).precision, data["fragment shader high int precision rangeMin"] = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT).rangeMin, data["fragment shader high int precision rangeMax"] =
                        gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT).rangeMax, data["fragment shader medium int precision"] = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT).precision, data["fragment shader medium int precision rangeMin"] = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT).rangeMin, data["fragment shader medium int precision rangeMax"] = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT).rangeMax, data["fragment shader low int precision"] =
                        gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT).precision, data["fragment shader low int precision rangeMin"] = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT).rangeMin, data["fragment shader low int precision rangeMax"] = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT).rangeMax, data) : data;
            },
            touchSupportKey: function (value) {
                return this.options.excludeTouchSupport ? value : (value.touch = this.getTouchSupport(), value);
            },
            getTouchSupport: function () {
                /** @type {number} */
                var maxTouchPoints = 0;
                /** @type {boolean} */
                var event = false;
                if ("undefined" != typeof navigator.maxTouchPoints) {
                    /** @type {number} */
                    maxTouchPoints = navigator.maxTouchPoints;
                } else {
                    if ("undefined" != typeof navigator.msMaxTouchPoints) {
                        /** @type {number} */
                        maxTouchPoints = navigator.msMaxTouchPoints;
                    }
                }
                try {
                    document.createEvent("TouchEvent");
                    /** @type {boolean} */
                    event = true;
                } catch (r) {
                    /** @type {boolean} */
                    event = false;
                }
                /** @type {boolean} */
                var touchStart = "ontouchstart" in window;
                return {
                    maxTouchPoints: maxTouchPoints,
                    touchEvent: event,
                    touchStart: touchStart
                };
            },
            getWebglCanvas: function () {
                /** @type {!Element} */
                var canvas = document.createElement("canvas");
                /** @type {null} */
                var t = null;
                try {
                    t = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
                } catch (r) {
                    return null;
                }
                return t || (t = null), t;
            },
            vendorKey: function (value) {
                return this.options.excludeVendor ? value : (value.vendor = this.getVendor(), value);
            },
            getVendor: function () {
                return window.navigator.vendor;
            },
            productKey: function (object) {
                return this.options.excludeProduct ? object : (object.product = this.getProduct(), object);
            },
            getProduct: function () {
                return window.navigator.product;
            },
            productSubKey: function (name) {
                return this.options.excludeProductSub ? name : (name.productSub = this.getProductSub(), name);
            },
            getProductSub: function () {
                return window.navigator.productSub;
            },
            browserKey: function (value) {
                return this.options.excludeBrowser ? value : (value.browser = this.getBrowser(), value);
            },
            getBrowser: function () {
                return {
                    ie: this.isIE(),
                    chrome: this.isChrome(),
                    webdriver: this.isWebdriver()
                };
            },
            isIE: function () {
                return "Microsoft Internet Explorer" === navigator.appName ? true : !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent));
            },
            isChrome: function () {
                return "undefined" != typeof window.chrome;
            },
            isWebdriver: function () {
                return !!navigator.webdriver;
            },
            windowKey: function (value) {
                return this.options.excludeWindow ? value : (value.window = this.getWindow(), value);
            },
            getWindow: function () {
                var e = {};
                return e = this.getHistoryLength(e), e = this.getHardwareConcurrency(e), e = this.isIFrame(e);
            },
            getHistoryLength: function (key) {
                return this.addIfDefined(key, "historyLength", window.history.length);
            },
            getHardwareConcurrency: function (e) {
                return this.addIfDefined(e, "hardwareConcurrency", navigator.hardwareConcurrency);
            },
			
             audiofsKey: function (value) {
				 this.getaudiofsKey(value,function (value,fingerprint) {
					//value.audiofs = fingerprint;
					console.log(fingerprint);
					 document.getElementById("audiofs").innerHTML=JSON.stringify('audionfs '+fingerprint,null, "<br>");
				});
                //return this.options.excludeWindow ? value : (value.audiofs = this.getaudiofsKey(), value);
            },

			getaudiofsKey: function (value,done) {
				function setCompressorValueIfDefined(item, value)
				{
					if (compressor[item] !== undefined && typeof compressor[item].setValueAtTime === 'function') {
						compressor[item].setValueAtTime(value, context.currentTime);
					}
				}

				var AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;

				if (AudioContext == null) {
				  return 'failed';
				}

				var context = new AudioContext(1, 44100, 44100);

				var oscillator = context.createOscillator();
				oscillator.type = 'triangle';
				oscillator.frequency.setValueAtTime(10000, context.currentTime);

				var compressor = context.createDynamicsCompressor();
				setCompressorValueIfDefined('threshold', -50);
				setCompressorValueIfDefined('knee', 40);
				setCompressorValueIfDefined('ratio', 12);
				setCompressorValueIfDefined('reduction', -20);
				setCompressorValueIfDefined('attack', 0);
				setCompressorValueIfDefined('release', .25);				
				
				/*each([
				  ['threshold', -50],
				  ['knee', 40],
				  ['ratio', 12],
				  ['reduction', -20],
				  ['attack', 0],
				  ['release', 0.25]
				], function (item) {
				  if (compressor[item[0]] !== undefined && typeof compressor[item[0]].setValueAtTime === 'function') {
					compressor[item[0]].setValueAtTime(item[1], context.currentTime);
				  }
				});*/

				oscillator.connect(compressor);
				compressor.connect(context.destination);
				oscillator.start(0);
				context.startRendering();

//				var audioTimeoutId = setTimeout(function () {
//				  console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".');
//				  context.oncomplete = function () { }
//				  context = null;
//				  return 'audioTimeout';
//				});

				context.oncomplete = function (event) {
				  var fingerprint;
				  //try {
					//clearTimeout(audioTimeoutId);
					//fingerprint = event.renderedBuffer.getChannelData(0)
					//  .slice(4500, 5000)
					//  .reduce(function (acc, val) { return acc + Math.abs(val) }, 0)
					//  .toString();
					
					var output = null;
					for (var i = 4500; 5e3 > i; i++) {
						
						var channelData = event.renderedBuffer.getChannelData(0)[i];
						output += Math.abs(channelData);
						
					}
					
					fingerprint = output.toString();
		
					oscillator.disconnect();
					compressor.disconnect();
				  //} catch (error) {
				//	return '';
				  //}
				  return done(value,fingerprint);
				}
				//return 'audiofsdd';
			  },
			
            isIFrame: function (instance) {
                return instance.iframe = window.self !== window.top, instance;
            },
            parallel: function (array, callback) {
                if (array.constructor != Array || 0 === array.length) {
                    return void callback(this.keys);
                }
                var i = array.length;
                var target = this;
                this.each(array, function (callback) {
                    callback(target.keys, function () {
                        /** @type {number} */
                        i = i - 1;
                        if (0 === i) {
                            callback(target.keys);
                        }
                    }, target);
                });
            },
            map: function (obj, fn, val) {
                /** @type {!Array} */
                var ret = [];
                return null == obj ? ret : this.nativeMap && obj.map === this.nativeMap ? obj.map(fn, val) : (this.each(obj, function (prop, name, a) {
                    ret[ret.length] = fn.call(val, prop, name, a);
                }), ret);
            },
            each: function (obj, self, callback) {
                if (null !== obj) {
                    if (this.nativeForEach && obj.forEach === this.nativeForEach) {
                        obj.forEach(self, callback);
                    } else {
                        if (obj.length === +obj.length) {
                            /** @type {number} */
                            var j = 0;
                            var length = obj.length;
                            for (; length > j; j++) {
                                if (self.call(callback, obj[j], j, obj) === {}) {
                                    return;
                                }
                            }
                        } else {
                            var name;
                            for (name in obj) {
                                if (obj.hasOwnProperty(name) && self.call(callback, obj[name], name, obj) === {}) {
                                    return;
                                }
                            }
                        }
                    }
                }
            }
        };
        /** @type {function(string): undefined} */
        mixin.exports = Fingerprint2;
		var fs = new Fingerprint2;
		fs.interrogate([]);
		console.log("fun 1  end");
    }, {
        "./sha1": 5,
        "./wiring": 7
    }],
    2: [function (require, module, canCreateDiscussions) {
        /**
         * @return {undefined}
         */
        var Pretender = function () {
        };
        var util = require("./wiring");
        Pretender.prototype = {
            get: function () {
                if (this.alreadySent) {
                    return null;
                }
                var self = {};
                try {
                    /** @type {number} */
                    self.cookies = navigator.cookieEnabled ? 1 : 0;
                } catch (t) {
                    /** @type {number} */
                    self.cookies = 0;
                }
                try {
                    /** @type {number} */
                    self.setTimeout = setTimeout.toString().replace(/\s/g, "") === "function setTimeout() { [native code] }".replace(/\s/g, "") ? 0 : 1;
                } catch (t) {
                    /** @type {number} */
                    self.setTimeout = 0;
                }
                try {
                    /** @type {number} */
                    self.setInterval = setInterval.toString().replace(/\s/g, "") === "function setInterval() { [native code] }".replace(/\s/g, "") ? 0 : 1;
                } catch (t) {
                    /** @type {number} */
                    self.setInterval = 0;
                }
                try {
                    /** @type {string} */
                    self.appName = navigator.appName;
                } catch (t) {
                    /** @type {number} */
                    self.appName = 0;
                }
                try {
                    /** @type {string} */
                    self.platform = navigator.platform;
                } catch (t) {
                    /** @type {number} */
                    self.platform = 0;
                }
                try {
                    self.syslang = navigator.systemLanguage ? navigator.systemLanguage : navigator.language;
                } catch (t) {
                    /** @type {string} */
                    self.syslang = "";
                }
                try {
                    self.userlang = navigator.userLanguage ? navigator.userLanguage : navigator.language;
                } catch (t) {
                    /** @type {string} */
                    self.userlang = "";
                }
                try {
                    self.cpu = navigator.oscpu || navigator.cpuClass || "";
                } catch (t) {
                    /** @type {string} */
                    self.cpu = "";
                }
                try {
                    /** @type {(number|string)} */
                    self.productSub = navigator.productSub ? navigator.productSub : 0;
                } catch (t) {
                    /** @type {number} */
                    self.productSub = 0;
                }
                /** @type {!Array} */
                self.plugins = [];
                /** @type {!Array} */
                self.mimeTypes = [];
                self.screen = {};
                /** @type {!Array} */
                self.fonts = [];
                try {
                    if (navigator.plugins) {
                        var i;
                        for (i in navigator.plugins) {
                            if ("object" == typeof navigator.plugins[i]) {
                                self.plugins.push(navigator.plugins[i].name + " " + (navigator.plugins[i].version ? navigator.plugins[i].version : ""));
                            }
                        }
                    }
                } catch (t) {
                }
                try {
                    if (navigator.mimeTypes) {
                        for (i in navigator.mimeTypes) {
                            if ("object" == typeof navigator.mimeTypes[i]) {
                                self.mimeTypes.push(navigator.mimeTypes[i].description + " " + navigator.mimeTypes[i].type);
                            }
                        }
                    }
                } catch (t) {
                }
                try {
                    if (screen) {
                        /** @type {number} */
                        self.screen.width = screen.width;
                        /** @type {number} */
                        self.screen.height = screen.height;
                        /** @type {number} */
                        self.screen.colorDepth = screen.colorDepth;
                    }
                } catch (t) {
                }
                try {
                    if (!document.getElementById("d__fFH")) {
                        /** @type {!Element} */
                        var n = document.createElement("DIV");
                        /** @type {string} */
                        n.id = "d__fFH";
                        util.overrideStyle(n, "position", "absolute");
                        util.overrideStyle(n, "top", "-5000px");
                        util.overrideStyle(n, "left", "-5000px");
                        /** @type {string} */
                        n.innerHTML = '<OBJECT id="d_dlg" CLASSID="clsid:3050f819-98b5-11cf-bb82-00aa00bdce0b" width="0px" height="0px"></OBJECT><SPAN id="d__fF" style="font-family:serif;font-size:200px;visibility:hidden"></SPAN>';
                        document.body.appendChild(n);
                    }
                } catch (t) {
                }
                try {
                    /** @type {(Element|null)} */
                    var obj = document.getElementById("d_dlg");
                    if (obj && obj.fonts) {
                        self.fonts.push("dlg");
                        /** @type {number} */
                        i = 1;
                        for (; i <= obj.fonts.count; i++) {
                            self.fonts.push(obj.fonts(i));
                        }
                    } else {
                        /** @type {(Element|null)} */
                        var element = document.getElementById("d__fF");
                        /** @type {!Array} */
                        var subnets = ["serif", "Calibri", "Cambria", "Hoefler Text", "Utopia", "Liberation Serif", "Nimbus Roman No9 L", "Times", "Monaco", "Terminal", "monospace", "Constantia", "Lucida Bright", "DejaVu Serif", "Bitstream Vera Serif", "Georgia", "Segoe UI", "Candara", "Bitstream Vera Sans", "DejaVu Sans", "Trebuchet MS", "Verdana", "Consolas", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Monaco",
                            "Courier New", "Courier"];
                        /** @type {string} */
                        element.innerHTML = "The quick brown fox jumps over the lazy dog.";
                        util.overrideStyle(element, "font-family", subnets[0]);
                        var value = element.offsetWidth;
                        /** @type {number} */
                        i = 1;
                        for (; i < subnets.length; i++) {
                            util.overrideStyle(element, "font-family", '"' + subnets[i] + '",' + subnets[0]);
                            if (value != element.offsetWidth) {
                                self.fonts.push(subnets[i]);
                            }
                        }
                    }
                } catch (t) {
                }
                return self;
            }
        };
        /** @type {function(): undefined} */
        module.exports = Pretender;
    }, {
        "./wiring": 7
    }],
    3: [function (require, canCreateDiscussions, isSlidingUp) {
        var Friends = require("./legacy");
        var i = require("./stringify");
        var xhr = require("./xhr");
        var SelectDashboardItemView = require("./miner");
        var EventEmitter = require("./interrogator");
        var idlUtils = require("./wiring");
        /**
         * @param {!Object} target
         * @return {undefined}
         */
        FingerprintWrapper = function (target) {
            /** @type {null} */
            var using = null;
            var friend = new Friends;
            idlUtils.rebuildXMLHttpRequest(target.ajax_header);
            idlUtils.fetchAjaxHeaders(target);
            /**
             * @param {string} argument
             * @return {undefined}
             */
            var f = function (argument) {
                if (!using) {
                    using = argument ? argument.type : "manual/other";
                    /**
                     * @param {?} obj
                     * @return {undefined}
                     */
                    var get = function (obj) {
                        var http = xhr();
                        if (http) {
                            /** @type {string} */
                            var address = encodeURIComponent(i(obj, true).replace(/[\s]+/g, ""));
                            /**
                             * @return {undefined}
                             */
                            http.onreadystatechange = function () {
                                if (4 == http.readyState && 200 == http.status) {
                                    print("DistilPostResponse");
                                    try {
                                        var cache_breaker = http.getResponseHeader("X-UID");
                                    } catch (t) {
                                    }
                                    if (document.getElementById("distilIdentificationBlock")) {
                                        /** @type {string} */
                                        var userEmail = encodeURIComponent(document.location.pathname + document.location.search);
                                        /** @type {string} */
                                        var path = "/distil_identify_cookie.html?httpReferrer=" + userEmail;
                                        if (cache_breaker) {
                                            /** @type {string} */
                                            path = path + "&uid=" + cache_breaker;
                                        }
                                        if (document.location.hash) {
                                            /** @type {string} */
                                            path = path + document.location.hash;
                                        }
                                        document.location.replace(path);
                                    } else {
                                        if (document.getElementById("distil_ident_block")) {
                                            /** @type {string} */
                                            var selector = "d_ref=" + document.location.pathname.replace(/&/, "%26");
                                            /** @type {string} */
                                            selector = selector + ("&qs=" + document.location.search + document.location.hash);
                                            if (cache_breaker) {
                                                /** @type {string} */
                                                selector = "uid=" + cache_breaker + "&" + selector;
                                            }
                                            document.location.replace("/distil_identify_cookie.html?" + selector);
                                        } else {
                                            if (document.getElementById("distil_ident_block_POST") || document.getElementById("distilIdentificationBlockPOST")) {
                                                if (idlUtils.isSafariOrIOS()) {
                                                    window.history.go(-1);
                                                } else {
                                                    window.location.reload();
                                                }
                                            }
                                        }
                                    }
                                }
                            };
                            http.open("POST", target.path, true);
                            print("DistilPostSent");
                            http.send("p=" + address);
                        }
                    };
                    /**
                     * @param {!Array} s
                     * @param {!Function} k
                     * @return {undefined}
                     */
                    var g = function (s, k) {
                        var result = {};
                        var n = s.length;
                        /** @type {number} */
                        var count = 0;
                        var length = s.length;
                        for (; length > count; ++count) {
                            s[count](function (rules) {
                                var i;
                                for (i in rules) {
                                    if (rules.hasOwnProperty(i)) {
                                        result[i] = rules[i];
                                    }
                                }
                                /** @type {number} */
                                n = n - 1;
                                if (0 === n) {
                                    k(result);
                                }
                            });
                        }
                    };
                    g([function (saveNotifs) {
                        setTimeout(function () {
                            /**
                             * @param {number} start
                             * @return {?}
                             */
                            function t(start) {
                                /** @type {string} */
                                var a_embed = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                                /** @type {string} */
                                var token = "";
                                /** @type {number} */
                                var end = 0;
                                for (; start > end; ++end) {
                                    /** @type {string} */
                                    token = token + a_embed.substr(Math.floor(Math.random() * a_embed.length), 1);
                                }
                                return token;
                            }

                            print("DistilProofOfWorkStart");
                            var item = new SelectDashboardItemView;
                            /** @type {string} */
                            var data = (new Date).getTime() + ":" + t(20);
                            item.mine(data, 8, function (proof) {
                                print("DistilProofOfWorkStop");
                                saveNotifs({
                                    proof: proof
                                });
                            });
                        }, 1);
                    }, function (saveNotifs) {
                        setTimeout(function () {
                            print("DistilFP2Start");
                            var benchEvents = new EventEmitter;
                            benchEvents.interrogate(function (canCreateDiscussions) {
                                print("DistilFP2End");
                                saveNotifs({
                                    fp2: canCreateDiscussions
                                });
                            });
                        }, 1);
                    }, function (saveNotifs) {
                        setTimeout(function () {
                            setTimeout(function () {
                                print("DistilLegacyStart");
                                var notifications = friend.get();
                                print("DistilLegacyEnd");
                                saveNotifs(notifications);
                            }, 1);
                        }, 1);
                    }], function (e) {
                        get(e);
                    });
                }
            };
            /** @type {boolean} */
            var u = false;
            /**
             * @param {string} opt_landscape
             * @return {undefined}
             */
            var print = function (opt_landscape) {
            };
            /** @type {(Element|null)} */
            var notificationsLink = document.getElementById("d__inj");
            if (notificationsLink && notificationsLink.className) {
                if (notificationsLink.className.indexOf("delayed") > -1) {
                    /** @type {boolean} */
                    u = true;
                }
                if (notificationsLink.className.indexOf("perfmarks") > -1 && void 0 != performance && void 0 != performance.mark) {
                    /**
                     * @param {string} label
                     * @return {undefined}
                     */
                    print = function (label) {
                        performance.mark(label);
                    };
                }
            }
            if (u) {
                if (window.document.readyState && "complete" == window.document.readyState) {
                    f();
                } else {
                    if (window.addEventListener) {
                        window.addEventListener("load", f, false);
                    } else {
                        if (window.document.attachEvent) {
                            window.document.attachEvent("onload", f);
                        }
                    }
                }
            } else {
                if (window.document.readyState && "loading" == window.document.readyState) {
                    f();
                } else {
                    if (window.addEventListener) {
                        window.addEventListener("DOMContentLoaded", f, false);
                        window.addEventListener("load", f, false);
                    } else {
                        if (window.document.attachEvent) {
                            window.document.attachEvent("onreadystatechange", f);
                            window.document.attachEvent("onload", f);
                        }
                    }
                }
            }
        };
        FingerprintWrapper({
            path: "/otohphnbwwwttwvyurssyvvedxvuvrectuyvdsyaua.js?PID=F12F22F9-9446-3BE8-A955-D38CDD74349E",
            ajax_header: "duceevzdsdfswtxbscsfcttctbutfc",
            interval: 27E4
        });
    }, {
        "./interrogator": 1,
        "./legacy": 2,
        "./miner": 4,
        "./stringify": 6,
        "./wiring": 7,
        "./xhr": 8
    }],
    4: [function (__webpack_require__, module, canCreateDiscussions) {
        var execute = __webpack_require__("./sha1.js");
        /**
         * @param {string} options
         * @return {undefined}
         */
        var Base = function (options) {
            var defaultOptions = {};
            this.options = this.extend(options, defaultOptions);
        };
        Base.prototype = {
            extend: function (source, target) {
                if (null == source) {
                    return target;
                }
                var k;
                for (k in source) {
                    if (null != source[k] && target[k] !== source[k]) {
                        target[k] = source[k];
                    }
                }
                return target;
            },
            mine: function (type, i, fn) {
                /** @type {number} */
                var default_favicon = 0;
                /** @type {number} */
                var startHeading = Math.pow(2, 32 - i);
                for (; ;) {
                    /** @type {string} */
                    var selected = default_favicon.toString(16) + ":" + type;
                    default_favicon++;
                    var s = execute(selected);
                    if (parseInt(s.substr(0, 8), 16) < startHeading) {
                        return void fn(selected);
                    }
                }
            }
        };
        /** @type {function(string): undefined} */
        module.exports = Base;
    }, {
        "./sha1.js": 5
    }],
    5: [function (canCreateDiscussions, module, isSlidingUp) {
        var SHA1 = {};
        /**
         * @param {string} t
         * @return {?}
         */
        SHA1.hash = function (t) {
            t = t.utf8Encode();
            /** @type {!Array} */
            var value = [1518500249, 1859775393, 2400959708, 3395469782];
            /** @type {string} */
            t = t + String.fromCharCode(128);
            /** @type {number} */
            var visRecords = t.length / 4 + 2;
            /** @type {number} */
            var n = Math.ceil(visRecords / 16);
            /** @type {!Array} */
            var result = new Array(n);
            /** @type {number} */
            var i = 0;
            for (; n > i; i++) {
                /** @type {!Array} */
                result[i] = new Array(16);
                /** @type {number} */
                var j = 0;
                for (; 16 > j; j++) {
                    /** @type {number} */
                    result[i][j] = t.charCodeAt(64 * i + 4 * j) << 24 | t.charCodeAt(64 * i + 4 * j + 1) << 16 | t.charCodeAt(64 * i + 4 * j + 2) << 8 | t.charCodeAt(64 * i + 4 * j + 3);
                }
            }
            /** @type {number} */
            result[n - 1][14] = 8 * (t.length - 1) / Math.pow(2, 32);
            /** @type {number} */
            result[n - 1][14] = Math.floor(result[n - 1][14]);
            /** @type {number} */
            result[n - 1][15] = 8 * (t.length - 1) & 4294967295;
            var a;
            var b;
            var c;
            var d;
            var e;
            /** @type {number} */
            var H0 = 1732584193;
            /** @type {number} */
            var H1 = 4023233417;
            /** @type {number} */
            var H2 = 2562383102;
            /** @type {number} */
            var H3 = 271733878;
            /** @type {number} */
            var s = 3285377520;
            /** @type {!Array} */
            var sprites = new Array(80);
            /** @type {number} */
            i = 0;
            for (; n > i; i++) {
                /** @type {number} */
                var j = 0;
                for (; 16 > j; j++) {
                    sprites[j] = result[i][j];
                }
                /** @type {number} */
                j = 16;
                for (; 80 > j; j++) {
                    sprites[j] = SHA1.ROTL(sprites[j - 3] ^ sprites[j - 8] ^ sprites[j - 14] ^ sprites[j - 16], 1);
                }
                /** @type {number} */
                a = H0;
                /** @type {number} */
                b = H1;
                /** @type {number} */
                c = H2;
                /** @type {number} */
                d = H3;
                /** @type {number} */
                e = s;
                /** @type {number} */
                j = 0;
                for (; 80 > j; j++) {
                    /** @type {number} */
                    var s = Math.floor(j / 20);
                    /** @type {number} */
                    var nativeObjectObject = SHA1.ROTL(a, 5) + SHA1.f(s, b, c, d) + e + value[s] + sprites[j] & 4294967295;
                    e = d;
                    d = c;
                    c = SHA1.ROTL(b, 30);
                    /** @type {number} */
                    b = a;
                    /** @type {number} */
                    a = nativeObjectObject;
                }
                /** @type {number} */
                H0 = H0 + a & 4294967295;
                /** @type {number} */
                H1 = H1 + b & 4294967295;
                /** @type {number} */
                H2 = H2 + c & 4294967295;
                /** @type {number} */
                H3 = H3 + d & 4294967295;
                /** @type {number} */
                s = s + e & 4294967295;
            }
            return SHA1.toHexStr(H0) + SHA1.toHexStr(H1) + SHA1.toHexStr(H2) + SHA1.toHexStr(H3) + SHA1.toHexStr(s);
        };
        /**
         * @param {number} _
         * @param {number} t
         * @param {number} a
         * @param {number} b
         * @return {?}
         */
        SHA1.f = function (_, t, a, b) {
            switch (_) {
                case 0:
                    return t & a ^ ~t & b;
                case 1:
                    return t ^ a ^ b;
                case 2:
                    return t & a ^ t & b ^ a & b;
                case 3:
                    return t ^ a ^ b;
            }
        };
        /**
         * @param {number} x
         * @param {number} n
         * @return {?}
         */
        SHA1.ROTL = function (x, n) {
            return x << n | x >>> 32 - n;
        };
        /**
         * @param {number} val
         * @return {?}
         */
        SHA1.toHexStr = function (val) {
            var default_favicon;
            /** @type {string} */
            var s = "";
            /** @type {number} */
            var b = 7;
            for (; b >= 0; b--) {
                /** @type {number} */
                default_favicon = val >>> 4 * b & 15;
                /** @type {string} */
                s = s + default_favicon.toString(16);
            }
            return s;
        };
        if ("undefined" == typeof String.prototype.utf8Encode) {
            /**
             * @return {?}
             * @this {!String}
             */
            String.prototype.utf8Encode = function () {
                return unescape(encodeURIComponent(this));
            };
        }
        if ("undefined" == typeof String.prototype.utf8Decode) {
            /**
             * @return {?}
             * @this {!String}
             */
            String.prototype.utf8Decode = function () {
                try {
                    return decodeURIComponent(escape(this));
                } catch (e) {
                    return this;
                }
            };
        }
        if ("undefined" != typeof module && module.exports) {
            /** @type {function(string): ?} */
            module.exports = SHA1.hash;
        }
    }, {}],
    6: [function (canCreateDiscussions, u, isSlidingUp) {
        /**
         * @param {string} a
         * @return {?}
         */
        function test(a) {
            return s.lastIndex = 0, '"' + (s.test(a) ? a.replace(s, b) : a) + '"';
        }

        /**
         * @param {number} i
         * @param {number} a
         * @return {?}
         */
        function hex(i, a) {
            /** @type {string} */
            var repreatedPadChar = "";
            /** @type {number} */
            var numAxes = 0;
            for (; i > numAxes; ++numAxes) {
                /** @type {string} */
                repreatedPadChar = repreatedPadChar + "0";
            }
            return (repreatedPadChar + (a || 0)).slice(-i);
        }

        /**
         * @param {number} a
         * @param {boolean} value
         * @return {?}
         */
        function get(a, value) {
            if (void 0 == a) {
                return "null";
            }
            /** @type {function(this:*): string} */
            var toString = Object.prototype.toString;
            /** @type {string} */
            var type = typeof a;
            var className = void 0;
            if ("object" == type) {
                /** @type {string} */
                className = toString.call(a);
            }
            /** @type {string} */
            var booleanClass = "[object Boolean]";
            /** @type {string} */
            var numberClass = "[object Number]";
            /** @type {string} */
            var stringClass = "[object String]";
            /** @type {string} */
            var _self = "[object Array]";
            switch (className || type) {
                case "boolean":
                case booleanClass:
                    return "" + a;
                case "number":
                case numberClass:
                    return a > -1 / 0 && 1 / 0 > a ? "" + a : "null";
                case "string":
                case stringClass:
                    return test("" + a);
            }
            if ("object" == typeof a) {
                if (className != _self || value) {
                    /** @type {string} */
                    var reverse_search_string = "{";
                    var i;
                    for (i in a) {
                        if ("function" != typeof a[i]) {
                            /** @type {string} */
                            reverse_search_string = reverse_search_string + ('"' + i + '":' + get(a[i], value) + ",");
                        }
                    }
                    return 1 == reverse_search_string.length ? "{}" : reverse_search_string.substring(0, reverse_search_string.length - 1) + "}";
                }
                /** @type {!Array} */
                var partial = [];
                /** @type {number} */
                var l = 0;
                var i = a.length;
                for (; i > l; ++l) {
                    el = get(a[l], value);
                    partial.push(void 0 === el ? "null" : el);
                }
                return "[" + partial.join(",") + "]";
            }
            return '""';
        }

        /** @type {string} */
        var o = "\\u00";
        /**
         * @param {string} s
         * @return {?}
         */
        var b = function (s) {
            var name = s.charCodeAt(0);
            var r = rrnames[name];
            return r ? r : o + hex(2, name.toString(16));
        };
        /** @type {!RegExp} */
        var s = /[\x00-\x1f\x22\x5c]/g;
        var rrnames = {
            92: "\\\\",
            34: '\\"',
            8: "\\b",
            12: "\\f",
            10: "\\n",
            13: "\\r",
            9: "\\t"
        };
        /** @type {function(number, boolean): ?} */
        u.exports = get;
    }, {}],
    7: [function (saveNotifs, mixin, canCreateDiscussions) {
        var createXMLHTTPObject = saveNotifs("./xhr");
        /**
         * @param {!Object} s
         * @return {undefined}
         */
        var execute = function (s) {
            /** @type {boolean} */
            var timeoutId = false;
            /**
             * @return {undefined}
             */
            var sendRequest = function () {
                try {
                    var xhr = createXMLHTTPObject();
                    if (xhr.dH) {
                        /**
                         * @return {undefined}
                         */
                        xhr.onreadystatechange = function () {
                            try {
                                if (4 == xhr.readyState && 200 == xhr.status) {
                                    if (xhr.getResponseHeader("X-JU")) {
                                        s.path = xhr.getResponseHeader("X-JU");
                                        XMLHttpRequest.prototype.dU = xhr.getResponseHeader("X-JU");
                                    }
                                    if (xhr.getResponseHeader("X-AH")) {
                                        XMLHttpRequest.prototype.dH = xhr.getResponseHeader("X-AH");
                                    }
                                } else {
                                    if (4 == xhr.readyState && 200 != xhr.status) {
                                        clearInterval(timeoutId);
                                    }
                                }
                            } catch (n) {
                            }
                        };
                        xhr.open("HEAD", s.path, true);
                        xhr.send();
                    }
                } catch (i) {
                }
            };
            /** @type {number} */
            timeoutId = setInterval(sendRequest, s.interval);
        };
        /**
         * @param {?} groupnum
         * @return {undefined}
         */
        var wrapper = function (groupnum) {
            try {
                if (window.XMLHttpRequest && !window.XMLHttpRequest.prototype.dH) {
                    XMLHttpRequest.prototype.dH = groupnum;
                    (function () {
                        var proto = XMLHttpRequest.prototype;
                        /** @type {function(string, string, boolean, ?, ?): undefined} */
                        proto.dOpen = proto.open;
                        /**
                         * @param {string} method
                         * @param {string} setting
                         * @param {boolean} n
                         * @param {?} sb
                         * @param {?} name
                         * @return {undefined}
                         */
                        proto.open = function (method, setting, n, sb, name) {
                            proto.dOpen.apply(this, arguments);
                            /** @type {!RegExp} */
                            var exclude = new RegExp("^(((https?:)?//" + location.hostname + "([/]|$))|(/[^/]))");
                            if (setting.match(exclude) || !setting.match(/^https?:\/\//) && setting.match(/^[a-zA-Z0-9\-_\.]/) && -1 == setting.indexOf("://")) {
                                proto.setRequestHeader.apply(this, ["X-Distil-Ajax", proto.dH]);
                            }
                        };
                        /** @type {function(string, string, boolean, ?, ?): undefined} */
                        XMLHttpRequest.prototype.open = proto.open;
                    })();
                }
            } catch (t) {
            }
        };
        /**
         * @return {?}
         */
        var playlistDriverDefault = function () {
            return !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari|iPhone|iPad|iPod/) && !window.MSStream;
        };
        /**
         * @param {!Element} o
         * @param {string} name
         * @param {string} file
         * @return {undefined}
         */
        var style = function (o, name, file) {
            if (o.style.setProperty) {
                o.style.setProperty(name, file, "important");
            } else {
                var type = name.replace(/\-([a-z])/, function (canCreateDiscussions, shortMonthName, isSlidingUp) {
                    return shortMonthName.toUpperCase();
                });
                /** @type {string} */
                o.style[type] = file;
            }
        };
        mixin.exports = {
            fetchAjaxHeaders: execute,
            isSafariOrIOS: playlistDriverDefault,
            rebuildXMLHttpRequest: wrapper,
            overrideStyle: style
        };
    }, {
        "./xhr": 8
    }],
    8: [function (canCreateDiscussions, mixin, isSlidingUp) {
        /**
         * @return {?}
         */
        mixin.exports = function () {
            try {
                var xhr;
                if (window.XMLHttpRequest) {
                    /** @type {!XMLHttpRequest} */
                    xhr = new XMLHttpRequest;
                } else {
                    if ("undefined" == typeof XMLHttpRequest) {
                        try {
                            xhr = new ActiveXObject("Msxml2.XMLHTTP.6.0");
                        } catch (t) {
                            try {
                                xhr = new ActiveXObject("Msxml2.XMLHTTP.3.0");
                            } catch (t) {
                                try {
                                    xhr = new ActiveXObject("Microsoft.XMLHTTP");
                                } catch (t) {
                                    return 0;
                                }
                            }
                        }
                    }
                }
            } catch (t) {
                return 0;
            }
            return xhr;
        };
    }, {}]
}, {}, [1]);
