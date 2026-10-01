var requirejs,
    require,
    define;
!function(t) {
    function e(t, e) {
        return b.call(t, e)
    }
    function i(t, e) {
        var i,
            n,
            s,
            o,
            r,
            a,
            c,
            l,
            h,
            u,
            d,
            p,
            f = e && e.split("/"),
            m = _.map,
            g = m && m["*"] || {};
        if (t) {
            for (t = t.split("/"), r = t.length - 1, _.nodeIdCompat && y.test(t[r]) && (t[r] = t[r].replace(y, "")), "." === t[0].charAt(0) && f && (p = f.slice(0, f.length - 1), t = p.concat(t)), h = 0; h < t.length; h++)
                if (d = t[h], "." === d)
                    t.splice(h, 1),
                    h -= 1;
                else if (".." === d) {
                    if (0 === h || 1 === h && ".." === t[2] || ".." === t[h - 1])
                        continue;
                    h > 0 && (t.splice(h - 1, 2), h -= 2)
                }
            t = t.join("/")
        }
        if ((f || g) && m) {
            for (i = t.split("/"), h = i.length; h > 0; h -= 1) {
                if (n = i.slice(0, h).join("/"), f)
                    for (u = f.length; u > 0; u -= 1)
                        if (s = m[f.slice(0, u).join("/")], s && (s = s[n])) {
                            o = s,
                            a = h;
                            break
                        }
                if (o)
                    break;
                !c && g && g[n] && (c = g[n], l = h)
            }
            !o && c && (o = c, a = l),
            o && (i.splice(0, a, o), t = i.join("/"))
        }
        return t
    }
    function n(e, i) {
        return function() {
            var n = v.call(arguments, 0);
            return "string" != typeof n[0] && 1 === n.length && n.push(null), u.apply(t, n.concat([e, i]))
        }
    }
    function s(t) {
        return function(e) {
            return i(e, t)
        }
    }
    function o(t) {
        return function(e) {
            f[t] = e
        }
    }
    function r(i) {
        if (e(m, i)) {
            var n = m[i];
            delete m[i],
            g[i] = !0,
            h.apply(t, n)
        }
        if (!e(f, i) && !e(g, i))
            throw new Error("No " + i);
        return f[i]
    }
    function a(t) {
        var e,
            i = t ? t.indexOf("!") : -1;
        return i > -1 && (e = t.substring(0, i), t = t.substring(i + 1, t.length)), [e, t]
    }
    function c(t) {
        return t ? a(t) : []
    }
    function l(t) {
        return function() {
            return _ && _.config && _.config[t] || {}
        }
    }
    var h,
        u,
        d,
        p,
        f = {},
        m = {},
        _ = {},
        g = {},
        b = Object.prototype.hasOwnProperty,
        v = [].slice,
        y = /\.js$/;
    d = function(t, e) {
        var n,
            o = a(t),
            c = o[0],
            l = e[1];
        return t = o[1], c && (c = i(c, l), n = r(c)), c ? t = n && n.normalize ? n.normalize(t, s(l)) : i(t, l) : (t = i(t, l), o = a(t), c = o[0], t = o[1], c && (n = r(c))), {
            f: c ? c + "!" + t : t,
            n: t,
            pr: c,
            p: n
        }
    },
    p = {
        require: function(t) {
            return n(t)
        },
        exports: function(t) {
            var e = f[t];
            return "undefined" != typeof e ? e : f[t] = {}
        },
        module: function(t) {
            return {
                id: t,
                uri: "",
                exports: f[t],
                config: l(t)
            }
        }
    },
    h = function(i, s, a, l) {
        var h,
            u,
            _,
            b,
            v,
            y,
            k,
            w = [],
            x = typeof a;
        if (l = l || i, y = c(l), "undefined" === x || "function" === x) {
            for (s = !s.length && a.length ? ["require", "exports", "module"] : s, v = 0; v < s.length; v += 1)
                if (b = d(s[v], y), u = b.f, "require" === u)
                    w[v] = p.require(i);
                else if ("exports" === u)
                    w[v] = p.exports(i),
                    k = !0;
                else if ("module" === u)
                    h = w[v] = p.module(i);
                else if (e(f, u) || e(m, u) || e(g, u))
                    w[v] = r(u);
                else {
                    if (!b.p)
                        throw new Error(i + " missing " + u);
                    b.p.load(b.n, n(l, !0), o(u), {}),
                    w[v] = f[u]
                }
            _ = a ? a.apply(f[i], w) : void 0,
            i && (h && h.exports !== t && h.exports !== f[i] ? f[i] = h.exports : _ === t && k || (f[i] = _))
        } else
            i && (f[i] = a)
    },
    requirejs = require = u = function(e, i, n, s, o) {
        if ("string" == typeof e)
            return p[e] ? p[e](i) : r(d(e, c(i)).f);
        if (!e.splice) {
            if (_ = e, _.deps && u(_.deps, _.callback), !i)
                return;
            i.splice ? (e = i, i = n, n = null) : e = t
        }
        return i = i || function() {}, "function" == typeof n && (n = s, s = o), s ? h(t, e, i, n) : setTimeout(function() {
            h(t, e, i, n)
        }, 4), u
    },
    u.config = function(t) {
        return u(t)
    },
    requirejs._defined = f,
    define = function(t, i, n) {
        if ("string" != typeof t)
            throw new Error("See almond README: incorrect module build, no module name");
        i.splice || (n = i, i = []),
        e(f, t) || e(m, t) || (m[t] = [t, i, n])
    },
    define.amd = {
        jQuery: !0
    }
}(),
define("src/ext/requirejs/almond", function() {}),
function() {
    "use strict";
    var Quirks = function(t) {
        return !!Quirks._.registry[t]
    };
    Quirks.has = Quirks,
    Quirks.add = function(t) {
        for (var e = [], i = 1, n = arguments.length; i < n; ++i)
            e.push(arguments[i]);
        return this._.registry[t] = this.ask(e)
    },
    Quirks.set = function(t, e) {
        "undefined" != typeof e && null !== e || (e = !1),
        e instanceof Array && (e = e[1] || !0),
        "function" == typeof e && (e = e()),
        this._.survey[t] = e
    },
    Quirks.ask = function() {
        var t = arguments[0];
        t instanceof Array || (t = Array.prototype.slice.call(arguments, 0));
        for (var e = 0, i = t.length; e < i; ++e) {
            for (var n = this._tokenize("" + t[e]), s = !0, o = 0, r = n.length; o < r; ++o) {
                var a = n[o];
                s = s && this._evaluate(a[0], a[1], a[2], a[3])
            }
            if (s)
                return !0
        }
        return !1
    },
    Quirks.dump = function() {
        var t = [];
        t.push("Query types:");
        for (var e in this._.survey)
            t.push("  " + e + ": " + this._.survey[e]);
        t.push("Quirks:");
        for (var e in this._.registry)
            t.push("  " + e + ": " + this._.registry[e]);
        return console.log(t.join("\n")), t
    },
    Quirks._reset = function() {
        this._ = {
            survey: {
                true: !0,
                false: !1
            },
            registry: {}
        }
    },
    Quirks._tokenize = function(t) {
        for (var e = t.split(/\s+/), i = [], n = 0, s = e.length; n < s; ++n) {
            var o = e[n].match(/(!?)([^:=<>]+)([:=<>]*)([^:=<>]*)/);
            o ? i.push([o[2], o[3], o[4], o[1]]) : console.warn('No match for sequence: "' + t + '"')
        }
        return i
    },
    Quirks._evaluate = function(key, op, operand, modifier) {
        var val = this._.survey[key],
            pass;
        if (op) {
            if ("=" == op)
                pass = "" + val == "" + operand;
            else if (">=" == op)
                pass = this._operate(val, operand, function(t, e) {
                    return t >= e
                });
            else if ("<=" == op)
                pass = this._operate(val, operand, function(t, e) {
                    return t <= e
                });
            else if (">" == op)
                pass = this._operate(val, operand, function(t, e) {
                    return t > e
                });
            else if ("<" == op)
                pass = this._operate(val, operand, function(t, e) {
                    return t < e
                });
            else if (":" == op)
                if ("quirk" == key)
                    pass = Quirks(operand);
                else if ("function" == key)
                    try {
                        pass = "function" == typeof eval(operand)
                    } catch (t) {
                        pass = !1
                    }
        } else
            pass = "undefined" != typeof val && val !== !1;
        return "undefined" == typeof pass ? (console.warn("No test for %s %s %s", key, op, operand), !1) : "!" == modifier ? !pass : pass
    },
    Quirks._operate = function(t, e, i) {
        if ("string" != typeof t || "string" != typeof e)
            return !1;
        for (var n = !1, s = t.split("."), o = e.split(".");;) {
            var t = s.shift(),
                e = o.shift();
            if ("undefined" == typeof t || "undefined" == typeof e)
                break;
            if (t.match(/\d+/) && e.match(/^\d+$/) && (t = parseFloat(t), e = parseFloat(e)), n = i(t, e), t !== e)
                break
        }
        return n
    },
    Quirks._survey = function(t) {
        this._reset(),
        this.set("kindle3", t.match(/Kindle\/3/)),
        this.set("nook", t.match(/NOOK/)),
        this.set("sony-reader", t.match(/Linux;.*EBRD/)),
        this.set("nintendo", t.match(/NintendoBrowser/)),
        this.set("webkit", t.match(/WebKit\/([\d\.]+)/)),
        this.set("gecko", t.match(/Gecko\/([\d\.]+)/)),
        this.set("trident", t.match(/Trident\/([\d\.]+)/)),
        this.set("edge", t.match(/Edge\/([\d\.]+)/)),
        this.set("firefox", t.match(/Firefox\/([\d\.]+)/)),
        this.set("chrome", t.match(/Chrom(?:e|ium)\/([\d\.]+)/) || t.match(/Cr(?:Mo|iOS)\/([\d\.]+)/)),
        this.set("blink", this.ask("chrome>=28")),
        this.set("iexplore", !!this.ask("trident") && t.match(/(?:rv:|MSIE )([\d\.]+)/)),
        this.set("safari-build", !!this.ask("!chrome") && t.match(/Safari\/([\d\.]+)/)),
        this.set("safari", !!this.ask("safari-build") && t.match(/Version\/([\d\.]+)/)),
        this.set("silk", t.match(/Silk/)),
        this.set("chromeframe", t.match(/chromeframe/) && window.externalHost);
        var e = !t.match(/like Android/) && t.match(/Android\s?([\d\.]+)?/);
        this.set("android", e || this.ask("sony-reader", "silk"));
        var i = t.match(/(OS) ([\d_]+).*AppleWebKit.*Mobile/) || t.match(/(iPhone|iPad|iPod).* OS ([\d_]+)/);
        this.set("ios", !!i && i[2].replace(/_/g, ".")),
        this.ask("ios") && !this.ask("safari") && this.set("safari", this._.survey.ios),
        this.set("macosx", !i && t.match(/Mac OS X/)),
        this.set("windows", t.match(/Windows/)),
        this.set("blackberry", t.match(/BlackBerry/)),
        this.set("mobile", t.match(/mobi|tablet|ip(?:ad|hone|od)|android|silk/i)),
        this.set("ipad", i && t.match(/iPad/)),
        this.set("iphone", i && t.match(/(iPhone|iPod)/)),
        this.set("android-chrome", this.ask("android chrome") || e && t.match(/CrMo/)),
        this.set("android-stock", this.ask("android !android-chrome !firefox")),
        this.set("ios-standalone", i && navigator.standalone),
        this.set("ios-webview", this.ask("ios !safari !ios-standalone")),
        this.set("ios-uiwebview", this.ask("ios<12 ios-standalone")),
        this.set("eink", this.ask("kindle3", "sony-reader"))
    },
    Quirks._survey(navigator.userAgent),
    "function" == typeof define && define.amd ? define("quirkbase/quirkbase", [], function() {
        return Quirks
    }) : "undefined" != typeof exports ? exports.Quirkbase = Quirks : window.Quirkbase = Quirks
}(),
define("quirkbase", ["quirkbase/quirkbase"], function(t) {
    return t
}),
define("bifocal/themes/read/dewey/src/parts/quirks", ["require", "quirkbase"], function(t) {
    var e,
        i = t("quirkbase");
    try {
        e = window.BRIDGE || window.parent.BRIDGE
    } catch (t) {}
    var n = (e ? e.userAgent : null) || navigator.userAgent;
    return i.set("nautilus", !!n.match(/Dewey|Wishbone/)), i.set("nautilus-uwp-local", location.origin.match(/^ms-local-stream/)), i.set("nautilus-browser", !!n.match(/PWA;/)), i.add("load-components-via-xhr", "nautilus-uwp-local"), i
}),
define("common/src/_", ["require"], function(t) {
    return {}
}),
define("common/src/object", ["require", "./_"], function(t) {
    var e = t("./_");
    return e.try = function(t, i) {
        var n = [],
            s = Array.prototype.slice.call(arguments, 2);
        for (e.each(i.split(/[\.\[\]]+/), function(t) {
            t && n.push(t)
        }); n.length;) {
            if (!t)
                return t;
            var o = n.shift();
            if ("()" == o.substr(-2)) {
                var r = o.slice(0, -2);
                if ("function" != typeof t[r])
                    return;
                var a = e.isList(s[0]) ? s.shift() : void 0;
                a || (a = s.splice(0)),
                t = t[r].apply(t, a)
            } else
                t = o.match(/^\d+$/) ? t[parseFloat(o)] : t[o]
        }
        return t
    }, e.absorb = function(t, i) {
        return "string" == typeof t ? console.warn('[C] absorbing from string? "%s"', t) : "string" == typeof i ? console.warn('[C] absorbing into string? "%s"', i) : i || (console.warn("[C] absorbing into nothing?", t), i = {}), e.each(t, function(t, e) {
            i[t] = e
        }), i
    }, e.clone = function(t) {
        try {
            return JSON.parse(JSON.stringify(t))
        } catch (i) {
            return e.absorb(t, {})
        }
    }, e.mixin = function(t, i) {
        return i.__SHADOWS = {}, e.each(t, function(t, e) {
            "undefined" != typeof i[t] && (i.__SHADOWS[t] = i[t]),
            i[t] = e
        }), i
    }, e.unmix = function(t, i) {
        return e.each(t, function(t) {
            i[t] = i.__SHADOWS[t],
            delete i.__SHADOWS[t]
        }), i
    }, e.isNullish = function(t) {
        return null === t || "undefined" == typeof t
    }, e
}),
define("common/src/iterable", ["require", "./_"], function(t) {
    var e = t("./_");
    return e.each = function(t, i, n) {
        try {
            if (!t)
                return;
            if (e.isList(t))
                Array.prototype.forEach.call(t, i, n);
            else if ("function" == typeof t.forEach) {
                var s = 0;
                t.forEach(function(t, e) {
                    "undefined" == typeof e ? i.call(n, t, s++) : i.call(n, e, t, s++)
                })
            } else {
                var o = [];
                try {
                    o = Object.getOwnPropertyNames(t)
                } catch (t) {}
                e.each(o, function(e, s) {
                    i.call(n, e, t[e], s, o)
                })
            }
        } catch (t) {
            if (t !== e.BreakException)
                throw console.warn("[ITERABLE] re-throwing exception", t.message), console.warn(t.stack), t
        }
    }, e.select = function(t, i, n) {
        var s = [];
        return e.each(t, function() {
            var t = i.apply(n, arguments);
            "undefined" != typeof t && s.push(t)
        }, n), s
    }, e.breakIteration = function() {
        throw e.BreakException
    }, e.BreakException = new Error("Break out of iteration loop"), e.excise = function(t, i) {
        if (e.isArray(t)) {
            for (var n = [], s = 0; s < t.length;)
                t[s] === i ? n = n.concat(t.splice(s, 1)) : s += 1;
            return 1 == n.length ? n[0] : n
        }
        var o = t[i];
        return delete t[i], o
    }, e.without = function(t, i) {
        if (e.isArray(i) || (i = Array.prototype.slice.call(arguments, 1)), e.isArray(t))
            return e.select(t, function(t) {
                return e.among(t, i) ? void 0 : t
            });
        var n = {};
        return e.each(t, function(t, s) {
            e.among(t, i) || (n[t] = s)
        }), n
    }, e.flatten = function(t, i) {
        return i = i || [], e.isList(t) ? e.each(t, function(t) {
            e.flatten(t, i)
        }) : i.push(t), i
    }, e.unique = function(t) {
        for (var e = [], i = 0, n = t.length; i < n; ++i)
            e.indexOf(t[i]) < 0 && e.push(t[i]);
        return e
    }, e.compact = function(t) {
        for (var e = [], i = 0, n = t.length; i < n; ++i) {
            var s = t[i];
            void 0 !== s && null !== s && e.push(s)
        }
        return e
    }, e.last = function(t) {
        return t[t.length - 1]
    }, e.shuffle = function(t) {
        for (var e, i, n = t.length; 0 !== n;)
            e = Math.floor(Math.random() * n),
            n -= 1,
            i = t[n],
            t[n] = t[e],
            t[e] = i;
        return t
    }, e.invertObject = function(t) {
        var e = {};
        for (var i in t)
            t.hasOwnProperty(i) && (e[t[i]] = i);
        return e
    }, e.isArray = function(t) {
        return Array.isArray ? Array.isArray(t) : "[object Array]" == Object.prototype.toString.call(t)
    }, e.isList = function(t) {
        if (e.isArray(t))
            return !0;
        var i = Object.prototype.toString.call(t);
        return !!i.match(/^\[object (HTMLCollection|NodeList)]$/)
    }, e.isEmpty = function(t) {
        if (e.isList(t))
            return !t.length;
        var i = !0;
        return e.each(t, function(t, n) {
            i = !1,
            e.breakIteration()
        }), i
    }, e.among = function(t, i) {
        return e.isArray(i) || (i = Array.prototype.slice.call(arguments, 1)), i.indexOf(t) >= 0
    }, e
}),
define("common/src/arithmetic", ["require", "./_"], function(t) {
    var e = t("./_");
    return e.smoothFloat = function(t, e) {
        var i = Math.pow(10, e || 5);
        return Math.round(t * i) / i
    }, e
}),
define("common/src/time", ["require", "./_"], function(t) {
    var e = t("./_");
    return e.deltaMilliseconds = function() {
        return window.performance ? performance.now() : e.epochMilliseconds()
    }, e.epochMilliseconds = function() {
        return (new Date).getTime()
    }, e.epochSeconds = function() {
        return Math.floor(e.epochMilliseconds() / 1e3)
    }, e.secondsToUnits = function(t) {
        for (var e = [{
                label: "seconds",
                mod: 60
            }, {
                label: "minutes",
                mod: 60
            }, {
                label: "hours",
                mod: 24
            }, {
                label: "days",
                mod: 7
            }, {
                label: "weeks",
                mod: 52
            }], i = {}, n = t, s = 0, o = e.length; s < o; ++s) {
            var r = n % e[s].mod;
            i[e[s].label] = r,
            n = (n - r) / e[s].mod
        }
        return i.years = n, i
    }, e.timestampToUnits = function(t) {
        var e = new Date,
            i = new Date(t),
            n = {
                hours: i.getHours(),
                minutes: i.getMinutes(),
                date: i.getDate(),
                month: i.getMonth(),
                year: i.getFullYear()
            },
            s = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
        return n.monthName = s[n.month], e.getFullYear() == n.year && (n.thisYear = !0), e > i && e - i < 31536e6 && (n.thisPastYear = !0), e.getMonth() == n.month && n.thisYear && (n.thisMonth = !0), e.getDate() == n.date && n.thisMonth && n.thisYear && (n.thisDay = !0), n
    }, e.timestampAsMS = function(t) {
        if ("number" == typeof t)
            return t > 0 && t < 99999999999 ? 1e3 * t : t
    }, e
}),
define("common/src/uuid", ["require", "./_"], function(t) {
    function e(t) {
        var e = 16 * Math.random() | 0,
            i = "x" == t ? e : 3 & e | 8;
        return i.toString(16)
    }
    var i = t("./_");
    return i.generateUUID = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e)
    }, i
}),
define("common/src/href", ["require", "./_"], function(t) {
    var e = t("./_");
    return e.absoluteURL = function(t, e) {
        e = e || document;
        var i = e.createElement("a");
        i.setAttribute("href", t);
        var n = i.href;
        return n.match(/%/) ? n : encodeURI(n)
    }, e.relativeURL = function(t) {
        return t.replace(/^[^\:]+:\/\/[^\/]+/, "")
    }, e.resolvePath = function(t) {
        for (var e = t.split("/"), i = 1; i < e.length;)
            "." == e[i] ? e.splice(i, 1) : ".." == e[i] && i > 0 && ".." != e[i - 1] && (e.splice(i - 1, 2), i -= 2),
            i += 1;
        return e.join("/")
    }, e.expandPath = function(t, i) {
        var n = i.split("/");
        return n.pop(), e.resolvePath(n.join("/") + "/" + t)
    }, e.parameterizeURL = function(t, e) {
        var i = [];
        for (var n in e) {
            var s = e[n];
            if ("undefined" != typeof s && null !== s && "" !== s) {
                s = s instanceof Array ? s : [s];
                for (var o = 0, r = s.length; o < r; ++o) {
                    var a = s[o];
                    i.push(encodeURIComponent(n) + "=" + encodeURIComponent(a))
                }
            }
        }
        return t = t.replace(/#.*/, ""), i.length && (t += t.match(/\?/) ? "&" : "?", t += i.join("&")), t
    }, e.queryStringToObject = function(t) {
        t = t.replace(/^\?/, ""),
        t = t.replace(/#.*/, ""),
        t = t.replace(/=/g, '":"'),
        t = t.replace(/&/g, '","');
        var e = function(t, e) {
            return "" === t ? e : decodeURIComponent(e)
        };
        try {
            return JSON.parse('{ "' + t + '" }', e)
        } catch (t) {}
    }, e
}),
define("common/src/string", ["require", "./_"], function(t) {
    var e = t("./_");
    return e.safe = function(t, i) {
        if (e.isNullish(t))
            return "";
        if (i && 2 == i.trust)
            return t.replace(/(\s*<li>\s*)+/gi, " • ").replace(/<\/?(b|i|s|u|br|em|strike)>/gi, "").replace(/&(amp;)+/gi, "&amp;").replace(/</g, "&lt;");
        var n = document.createElement("div");
        return n.appendChild(document.createTextNode(t)), n.innerHTML
    }, e.textFromHTML = function(t) {
        if (!t)
            return "";
        var i = document.createElement("div");
        i.innerHTML = t;
        var n = [];
        return e.walk(i, function(t) {
            t.nodeValue && n.push(t.nodeValue)
        }), n.join("")
    }, e.base64EncodeSafely = function(t) {
        return btoa(t.replace(/[^\x00-\x7F]/g, escape))
    }, e.regExpEscape = function(t) {
        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }, e.regExpPunctuation = function() {
        return "\\u2000-\\u206F\\u2E00-\\u2E7F" + e.regExpEscape("\\'!\"#$%&()*+,-./:;<=>?@[]^_`{|}~")
    }, e.listToSentence = function(t, e) {
        var i = [];
        if ("function" == typeof e)
            for (var n = 0, s = t.length; n < s; ++n) {
                var o = e(t[n], n);
                "undefined" != typeof o && i.push(o)
            }
        else
            i = t;
        return 1 == i.length ? i[0] : 2 == i.length ? i.join(" and ") : i.slice(0, -1).join(", ") + ", and&nbsp;" + i[i.length - 1]
    }, e.capitalize = function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }, e.titleize = function(t) {
        var i = ["a", "an", "the", "and", "but", "or", "for", "nor", "as", "at", "by", "for", "from", "in", "into", "near", "of", "on", "onto", "to"],
            n = /^\w+[A-Z]/,
            s = new RegExp("^(" + i.join("|") + ")*$", "i"),
            o = /^[-–—:.]$/,
            r = new RegExp("([^\\w\\s]*)(\\w+)", "g");
        return e.capitalize(t.replace(r, function(t, e, i) {
            return e && !e.match(o) ? e + i : i.match(n) ? e + i : i.match(s) ? e + i.toLowerCase() : e + i.charAt(0).toUpperCase() + i.substr(1).toLowerCase()
        }))
    }, e.camelize = function(t) {
        return t.replace(/([_-]\w)/g, function(t) {
            return t[1].toUpperCase()
        })
    }, e.snakerize = function(t) {
        return t.replace(/([a-z][A-Z])/g, function(t) {
            return t[0] + "_" + t[1].toLowerCase()
        })
    }, e.dasherize = function(t) {
        return t.replace(/([A-Z]*)([A-Z\s])([^A-Z]*)/g, function(t, e, i, n, s) {
            return "-" + e.toLowerCase() + (n ? "-" : "") + i.toLowerCase() + n
        }).replace(/[0-9]+/g, function(t) {
            return "-" + t
        }).replace(/\s+/g, "").replace(/^-+/, "").replace(/-+$/, "").replace(/-+/g, "-")
    }, e.hashStringToFloat = function(t) {
        for (var e = 5381, i = 0, n = t.length; i < n; ++i)
            e = (e << 5) + e + t.charCodeAt(i) & 4294967295;
        return (e >>> 0) / 4294967295
    }, e
}),
function() {
    function t(t) {
        var e = [],
            i = Math.pow(t + 16, 3) / 1560896;
        i = i > M ? i : t / E;
        for (var n = 0; 3 > n;) {
            var s = n++,
                o = C[s][0],
                r = C[s][1];
            s = C[s][2];
            for (var a = 0; 2 > a;) {
                var c = a++,
                    l = (632260 * s - 126452 * r) * i + 126452 * c;
                e.push({
                    b: (284517 * o - 94839 * s) * i / l,
                    a: ((838422 * s + 769860 * r + 731718 * o) * t * i - 769860 * c * t) / l
                })
            }
        }
        return e
    }
    function e(e) {
        e = t(e);
        for (var i = 1 / 0, n = 0; n < e.length;) {
            var s = e[n];
            ++n,
            i = Math.min(i, Math.abs(s.a) / Math.sqrt(Math.pow(s.b, 2) + 1))
        }
        return i
    }
    function i(e, i) {
        i = i / 360 * Math.PI * 2,
        e = t(e);
        for (var n = 1 / 0, s = 0; s < e.length;) {
            var o = e[s];
            ++s,
            o = o.a / (Math.sin(i) - o.b * Math.cos(i)),
            0 <= o && (n = Math.min(n, o))
        }
        return n
    }
    function n(t, e) {
        for (var i = 0, n = 0, s = t.length; n < s;) {
            var o = n++;
            i += t[o] * e[o]
        }
        return i
    }
    function s(t) {
        return .0031308 >= t ? 12.92 * t : 1.055 * Math.pow(t, .4166666666666667) - .055
    }
    function o(t) {
        return .04045 < t ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92
    }
    function r(t) {
        return [s(n(C[0], t)), s(n(C[1], t)), s(n(C[2], t))]
    }
    function a(t) {
        return t = [o(t[0]), o(t[1]), o(t[2])], [n(I[0], t), n(I[1], t), n(I[2], t)]
    }
    function c(t) {
        var e = t[0],
            i = t[1];
        return t = e + 15 * i + 3 * t[2], 0 != t ? (e = 4 * e / t, t = 9 * i / t) : t = e = NaN, i = i <= M ? i / T * E : 116 * Math.pow(i / T, .3333333333333333) - 16, 0 == i ? [0, 0, 0] : [i, 13 * i * (e - S), 13 * i * (t - B)]
    }
    function l(t) {
        var e = t[0];
        if (0 == e)
            return [0, 0, 0];
        var i = t[1] / (13 * e) + S;
        return t = t[2] / (13 * e) + B, e = 8 >= e ? T * e / E : T * Math.pow((e + 16) / 116, 3), i = 0 - 9 * e * i / ((i - 4) * t - i * t), [i, e, (9 * e - 15 * t * e - t * i) / (3 * t)]
    }
    function h(t) {
        var e = t[0],
            i = t[1],
            n = t[2];
        return t = Math.sqrt(i * i + n * n), 1e-8 > t ? i = 0 : (i = 180 * Math.atan2(n, i) / Math.PI, 0 > i && (i = 360 + i)), [e, t, i]
    }
    function u(t) {
        var e = t[1],
            i = t[2] / 360 * 2 * Math.PI;
        return [t[0], Math.cos(i) * e, Math.sin(i) * e]
    }
    function d(t) {
        var e = t[0],
            n = t[1];
        return t = t[2], 99.9999999 < t ? [100, 0, e] : 1e-8 > t ? [0, 0, e] : (n = i(t, e) / 100 * n, [t, n, e])
    }
    function p(t) {
        var e = t[0],
            n = t[1];
        if (t = t[2], 99.9999999 < e)
            return [t, 0, 100];
        if (1e-8 > e)
            return [t, 0, 0];
        var s = i(e, t);
        return [t, n / s * 100, e]
    }
    function f(t) {
        var i = t[0],
            n = t[1];
        return t = t[2], 99.9999999 < t ? [100, 0, i] : 1e-8 > t ? [0, 0, i] : (n = e(t) / 100 * n, [t, n, i])
    }
    function m(t) {
        var i = t[0],
            n = t[1];
        if (t = t[2], 99.9999999 < i)
            return [t, 0, 100];
        if (1e-8 > i)
            return [t, 0, 0];
        var s = e(i);
        return [t, n / s * 100, i]
    }
    function _(t) {
        for (var e = "#", i = 0; 3 > i;) {
            var n = i++;
            n = Math.round(255 * t[n]);
            var s = n % 16;
            e += F.charAt((n - s) / 16 | 0) + F.charAt(s)
        }
        return e
    }
    function g(t) {
        t = t.toLowerCase();
        for (var e = [], i = 0; 3 > i;) {
            var n = i++;
            e.push((16 * F.indexOf(t.charAt(2 * n + 1)) + F.indexOf(t.charAt(2 * n + 2))) / 255)
        }
        return e
    }
    function b(t) {
        return r(l(u(t)))
    }
    function v(t) {
        return h(c(a(t)))
    }
    function y(t) {
        return b(d(t))
    }
    function k(t) {
        return p(v(t))
    }
    function w(t) {
        return b(f(t))
    }
    function x(t) {
        return m(v(t))
    }
    var C = [[3.240969941904521, -1.537383177570093, -.498610760293], [-.96924363628087, 1.87596750150772, .041555057407175], [.055630079696993, -.20397695888897, 1.056971514242878]],
        I = [[.41239079926595, .35758433938387, .18048078840183], [.21263900587151, .71516867876775, .072192315360733], [.019330818715591, .11919477979462, .95053215224966]],
        T = 1,
        S = .19783000664283,
        B = .46831999493879,
        E = 903.2962962,
        M = .0088564516,
        F = "0123456789abcdef";
    window.hsluv = {
        hsluvToRgb: y,
        rgbToHsluv: k,
        hpluvToRgb: w,
        rgbToHpluv: x,
        hsluvToHex: function(t) {
            return _(y(t))
        },
        hexToHsluv: function(t) {
            return k(g(t))
        },
        hpluvToHex: function(t) {
            return _(w(t))
        },
        hexToHpluv: function(t) {
            return x(g(t))
        },
        lchToHpluv: m,
        hpluvToLch: f,
        lchToHsluv: p,
        hsluvToLch: d,
        lchToLuv: u,
        luvToLch: h,
        xyzToLuv: c,
        luvToXyz: l,
        xyzToRgb: r,
        rgbToXyz: a,
        lchToRgb: b,
        rgbToLch: v
    }
}(),
define("hsluv", ["hsluv/hsluv-0.1.0.min"], function(t) {
    return t
}),
define("hsluv/hsluv-0.1.0.min", function() {}),
define("common/src/color", ["require", "./_", "hsluv"], function(t) {
    var e = t("./_");
    t("hsluv");
    var i = window.hsluv;
    return delete window.hsluv, e.hexToRGB = function(t) {
        var e = /^#?([A-F\d])([A-F\d])([A-F\d])([A-F\d])?$/i;
        t = t.replace(e, function(t, e, i, n, s) {
            return "string" != typeof s && (s = "F"), e + e + i + i + n + n + s + s
        });
        var i = /^#?([A-F\d]{2})([A-F\d]{2})([A-F\d]{2})([A-F\d]{2})?$/i.exec(t),
            n = "string" == typeof i[4] ? i[4] : "FF";
        return i ? [parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16), parseInt(n, 16) / 255] : null
    }, e.rgbToHex = function(t, e) {
        var i = function(t) {
                var e = parseInt(t, 10).toString(16).toUpperCase();
                return 1 == e.length ? "0" + e : e
            },
            n = "#" + i(t[0]) + i(t[1]) + i(t[2]);
        if (e && "number" == typeof t[3]) {
            var s = n + i(255 * Math.max(0, Math.min(1, t[3])));
            return s
        }
        return n
    }, e.rgbStringToHex = function(t, i) {
        var n = t.match(/rgba\((\d+),\s?(\d+),\s?(\d+),\s?(([0-9]*[.])?[0-9]+)?\)/) || t.match(/rgb\((\d+),\s?(\d+),\s?(\d+)\)/);
        if (n)
            return e.rgbToHex([n[1], n[2], n[3], parseFloat(n[4] || "1")], i)
    }, e.rgbToString = function(t) {
        if (t.length >= 4) {
            var e = t.slice(0, 4);
            return "rgba(" + e.join(",") + ")"
        }
        return t = [t[0] || 0, t[1] || 0, t[2] || 0], "rgb(" + t.join(",") + ")"
    }, e.rgbToHSLA = function(t) {
        var e,
            i,
            n = t[0] / 255,
            s = t[1] / 255,
            o = t[2] / 255,
            r = Math.max(n, s, o),
            a = Math.min(n, s, o),
            c = (r + a) / 2;
        if (r == a)
            e = i = 0;
        else {
            var l = r - a;
            switch (i = c > .5 ? l / (2 - r - a) : l / (r + a), r) {
            case n:
                e = (s - o) / l + (s < o ? 6 : 0);
                break;
            case s:
                e = (o - n) / l + 2;
                break;
            case o:
                e = (n - s) / l + 4
            }
            e /= 6
        }
        var h = [Math.floor(360 * e), Math.floor(100 * i), Math.floor(100 * c), t[3] || 1];
        return h
    }, e.hslaToRGBA = function(t) {
        var e,
            i,
            n,
            s = t[0] / 360,
            o = t[1] / 100,
            r = t[2] / 100;
        if (0 == o)
            e = i = n = r;
        else {
            var a = function(t, e, i) {
                    return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
                },
                c = r < .5 ? r * (1 + o) : r + o - r * o,
                l = 2 * r - c;
            e = a(l, c, s + 1 / 3),
            i = a(l, c, s),
            n = a(l, c, s - 1 / 3)
        }
        return [Math.round(255 * e), Math.round(255 * i), Math.round(255 * n), t[3] || 1]
    }, e.rgbToHSLuv = function(t) {
        var e = i.rgbToHsluv([t[0] / 255, t[1] / 255, t[2] / 255]);
        return "number" == typeof t[3] && (e[3] = t[3]), e
    }, e.hsluvToRGB = function(t) {
        var e = i.hsluvToRgb(t),
            n = function(t) {
                return Math.min(255, Math.max(0, Math.round(255 * t)))
            };
        return e = [n(e[0]), n(e[1]), n(e[2])], "number" == typeof t[3] && (e[3] = t[3]), e
    }, e.hsluvToHex = function(t, i) {
        return e.rgbToHex(e.hsluvToRGB(t), i)
    }, e.adjustRGB = function(t, i) {
        var i = i || {},
            n = e.rgbToHSLuv(t),
            s = n[2];
        if ("number" == typeof i.shift && (n[2] > 50 ? i.down = i.shift : i.up = i.shift), "number" == typeof i.shade) {
            var o = i.shade < 0 ? 0 : 100;
            n[2] = Math.round((o - n[2]) * Math.abs(i.shade)) + n[2]
        }
        if ("number" == typeof i.down) {
            var r = i.down / 100;
            n[2] = Math.max(0, n[2] - n[2] * r)
        }
        if ("number" == typeof i.up) {
            var r = i.up / 100;
            n[2] = Math.min(100, n[2] + (100 - n[2]) * r)
        }
        "number" == typeof i.min && n[2] < i.min && (n[2] = i.min),
        "number" == typeof i.max && i.max && n[2] > i.max && (n[2] = i.max),
        !i.allowBlooms && Math.abs(n[2] - s) > 5 && (n = e.debloomHSLuv(n, s));
        var a = e.hsluvToRGB(n);
        return "number" == typeof t[3] && (a[3] = t[3]), a
    }, e.debloomHSLuv = function(t, i, n) {
        "number" != typeof i && (i = t[2]),
        n = e.absorb(n, {
            black: 25,
            white: 4
        });
        var s = i / n.black;
        s < 1 && (t[1] *= s * s);
        var o = (100 - i) / n.white;
        return o < 1 && (t[1] *= o * o), t
    }, e.colorYIQ = function(t) {
        return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3
    }, e
}),
define("common/src/callback", ["require", "./_"], function(t) {
    var e = t("./_");
    return e.MAX_TIMEOUT = 2147483647, e.defer = function(t, i, n, s) {
        return "string" == typeof arguments[1] ? (t._ = t._ || {}, t._.timers = t._.timers || {}, clearTimeout(t._.timers[i]), delete t._.timers[i], "function" == typeof n ? t._.timers[i] = e.defer(function() {
            clearTimeout(t._.timers[i]),
            delete t._.timers[i],
            n()
        }, s || 0) : void 0) : (n = null, s = null, e.each(Array.prototype.slice.call(arguments, 0), function(t) {
            "function" == typeof t && null === s ? n = t : n && "number" == typeof t && (s = t)
        }), n ? setTimeout(n, s || 0) : void console.trace("[C] unrecognized arguments to defer()", arguments))
    }, e.staggerInvocation = function(t, i, n) {
        var s,
            o = 1 / 0,
            r = function() {
                o = 1 / 0,
                t()
            };
        return n = Math.max(i, n || 0), function(t) {
            clearTimeout(s);
            var a = e.epochMilliseconds();
            o = Math.min(o, a);
            var c = t ? 0 : o + n;
            if (a >= c)
                r();
            else {
                var l = Math.min(i, c - a);
                s = setTimeout(r, l)
            }
        }
    }, e
}),
define("common/src/dom-factory", ["require", "./_"], function(t) {
    var e = t("./_");
    return e.element = function(t) {
        t = t || {},
        !t.link || t.tag && "a" != t.tag || ("string" != typeof t.link ? t.link = "#" : t.link.match(/^#/) || (t.link = "/" + t.link.replace(/^\//, "")), t.tag = "a", t.attributes = e.absorb(t.attributes, {
            href: t.link,
            role: "link"
        }));
        var i = document;
        "object" == typeof t.parentNode && t.parentNode && (i = t.parentNode.ownerDocument);
        var n;
        return n = "svg" == t.tag || "svg" == t.namespace ? i.createElementNS("http://www.w3.org/2000/svg", t.tag) : i.createElement(t.tag || "div"), e.applyElementOptions(n, t)
    }, e.applyElementOptions = function(t, i) {
        return i ? (i.tag && i.tag.toLowerCase() !== t.tagName.toLowerCase() && console.warn("[C] cannot change tagName of existing element", i.tag, t), "string" == typeof i.id && i.id && (t.id = i.id), "string" == typeof i.className && i.className ? t.setAttribute("class", i.className) : "string" == typeof i.classes && i.classes && t.setAttribute("class", i.classes), "string" == typeof i.html && i.html && (t.innerHTML = i.html), e.each(i.attributes, function(e, i) {
            "undefined" != typeof i && null !== i && t.setAttribute(e, i)
        }), "object" == typeof i.parentNode && i.parentNode && ("prepend" == i.pos && i.parentNode.firstChild ? i.parentNode.insertBefore(t, i.parentNode.firstChild) : i.parentNode.appendChild(t)), t) : t
    }, e.iframe = function(t, i) {
        t = t || {},
        t.tag = "iframe",
        t.attributes = e.absorb({
            frameborder: "no",
            scrolling: t.scrolling || "no",
            width: t.width || 0,
            height: t.height || 0
        }, t.attributes || {});
        var n = e.element(t);
        return "function" == typeof i && this._iframeAddHandler(n, "load", i), "string" == typeof t.src && n.setAttribute("src", t.src), n
    }, e._iframeAddHandler = function(t, i, n) {
        var s = function() {
            e._iframeRemoveHandler(t, i, s),
            n(t)
        };
        t._handlers = t._handlers || {},
        t._handlers[i] = t._handlers[i] || [],
        t._handlers[i].push(s),
        t.addEventListener ? t.addEventListener(i, s, !1) : t.attachEvent && t.attachEvent("on" + i, s)
    }, e._iframeRemoveHandler = function(t, e, i) {
        t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent && t.detachEvent("on" + e, i)
    }, e._iframeRemoveAllHandlers = function(t, i) {
        if (t._handlers)
            for (var n in t._handlers)
                if (!i || n == i)
                    for (var s = t._handlers[n]; s && s.length;)
                        e._iframeRemoveHandler(t, n, s.shift())
    }, e.removeElement = function(t) {
        t && t.parentNode && t.parentNode.removeChild(t)
    }, e
}),
define("common/src/dom-classname", ["require", "./_"], function(t) {
    var e = t("./_");
    return e.batonClass = function(t, i, n) {
        n = n || e.try(t, "ownerDocument.documentElement");
        for (var s = n.querySelectorAll("." + i), o = 0, r = s.length; o < r; ++o)
            s[o] != t && s[o].classList.remove(i);
        t && t.classList.add(i)
    }, e
}),
define("common/src/dom-css-prefixing", ["require", "./_"], function(t) {
    var e = t("./_");
    return e.prefixProperty = function(t, i, n) {
        var s = ["-webkit-", "-moz-", "-ms-", ""];
        if (e.isNullish(n))
            for (; s.length;)
                t.removeProperty(s.shift() + i);
        else
            for (; s.length;)
                t.setProperty(s.shift() + i, n)
    }, e
}),
define("common/src/dom-traversal", ["require", "./_"], function(t) {
    var e = t("./_");
    return e.isElement = function(t) {
        try {
            return t instanceof Element
        } catch (e) {
            return "object" == typeof t && "object" == typeof t.style && "object" == typeof t.ownerDocument && 1 === t.nodeType
        }
    }, e.isInDOM = function(t, e) {
        return (e || document.body).contains(t)
    }, e.elementClosest = function(t, e) {
        if ("function" == typeof t.closest)
            return t.closest(e);
        for (var i = t; i.parentNode;)
            i = i.parentNode;
        for (var n = i.querySelectorAll(e); t && 1 === t.nodeType;) {
            for (var s = 0, o = n.length; s < o; ++s)
                if (n[s] == t)
                    return t;
            t = t.parentNode
        }
    }, e.walk = function(t, i, n) {
        for (var s = [], o = t; o && (s.push(o), o = o.firstChild || e._nextInWalk(o), !n || o !== n);)
            ;
        for (var r = 0, a = s.length; r < a; ++r)
            try {
                i(s[r])
            } catch (t) {
                if (t !== e.BreakException)
                    throw t;
                return
            }
    }, e._nextInWalk = function(t) {
        return t ? t.nextSibling || e._nextInWalk(t.parentNode) : null
    }, e.getRangeRects = function(t) {
        var i = [],
            n = t.startOffset,
            s = e._nextInWalk(t.endContainer);
        return e.walk(t.startContainer, function(e) {
            if (!e.childNodes.length)
                try {
                    var s = e.ownerDocument.createRange();
                    s.selectNodeContents(e),
                    n && (s.setStart(e, n), n = 0),
                    s.collapsed ? Array.prototype.push.apply(i, s.startContainer.getClientRects()) : (e === t.endContainer && s.setEnd(e, t.endOffset), Array.prototype.push.apply(i, s.getClientRects()))
                } catch (t) {
                    console.warn("[DOM] unexpected result in range:", t)
                }
        }, s), i.length || i.push(t.getBoundingClientRect()), i
    }, e
}),
define("common/src/class", ["require", "./_"], function(t) {
    var e = t("./_"),
        i = function() {},
        n = i.prototype,
        s = "__I_AM_METACLASS__";
    return i.new = function() {
        var t = function(e) {
            e !== s && (this._ = {}, this.__class = t, this.$init.apply(this, Array.prototype.slice.call(arguments, 0)))
        };
        return t.new = this.new, t.prototype = new this(s), t
    }, n.$init = function() {}, e.Class = i
}),
define("common/src/data-class", ["require", "./_"], function(t) {
    var e = t("./_"),
        i = {};
    return i.set = function(t, e, i) {
        if (this.get(t, e) != i) {
            this.clear(t, e);
            var n = "undefined" != typeof i ? "_" + i : "";
            t.classList.add("data-" + e + n)
        }
    }, i.get = function(t, e) {
        for (var i = this._pattern(e), n = 0, s = t.classList.length; n < s; ++n) {
            var o = t.classList[n].match(i);
            if (o)
                return o[2]
        }
    }, i.clear = function(t, e) {
        for (var i = this._pattern(e), n = [], s = 0, o = t.classList.length; s < o; ++s)
            t.classList[s].match(i) && n.push(t.classList[s]);
        for (; n.length;)
            t.classList.remove(n.shift())
    }, i.semaphore = function(t) {
        return {
            set: i.set.bind(i, t),
            get: i.get.bind(i, t),
            clear: i.clear.bind(i, t)
        }
    }, i._pattern = function(t) {
        return new RegExp("^data-" + t + "(_(.*))?$")
    }, e.DataClass = i
}),
define("common/common", ["require", "./src/object", "./src/iterable", "./src/arithmetic", "./src/time", "./src/uuid", "./src/href", "./src/string", "./src/color", "./src/callback", "./src/dom-factory", "./src/dom-classname", "./src/dom-css-prefixing", "./src/dom-traversal", "./src/class", "./src/data-class", "./src/_"], function(t) {
    return t("./src/object"), t("./src/iterable"), t("./src/arithmetic"), t("./src/time"), t("./src/uuid"), t("./src/href"), t("./src/string"), t("./src/color"), t("./src/callback"), t("./src/dom-factory"), t("./src/dom-classname"), t("./src/dom-css-prefixing"), t("./src/dom-traversal"), t("./src/class"), t("./src/data-class"), t("./src/_")
}),
define("common", ["common/common"], function(t) {
    return t
}),
define("gala/src/quirks", ["require", "quirkbase"], function(t) {
    var e = t("quirkbase");
    return e.add("has-touch-pointers", "ontouchstart" in window), e.add("active-pseudoclass-needs-touchstart", "ios"), e.add("legacy-ontap", "ios-uiwebview"), e.add("pointer-events-capture-randomly-cancels", "ios>=13 ios<13.1"), e.add("forgets-how-to-scroll", "ios<13"), function() {
        var t = !1;
        try {
            var i = Object.defineProperty({}, "passive", {
                get: function() {
                    t = !0
                }
            });
            window.addEventListener("test", null, i),
            window.removeEventListener("test", null, i)
        } catch (t) {}
        e.add("no-options-for-event-listeners", !t)
    }(), e
}),
define("gala/src/events", ["require", "./quirks"], function(t) {
    var e = {},
        i = t("./quirks");
    return e.DEFAULT_DISPATCHER = document.documentElement, e.listen = function(t, i, n, s) {
        return e._listen.apply(e, e._addDispatcher(arguments))
    }, e._listen = function(t, e, i, n) {
        t.addEventListener(e, i, this._listenerOptions(n))
    }, e.deafen = function(t, i, n, s) {
        return e._deafen.apply(e, e._addDispatcher(arguments))
    }, e._deafen = function(t, e, i, n) {
        t.removeEventListener(e, i, this._listenerOptions(n))
    }, e._listenerOptions = function(t) {
        return "boolean" == typeof t && (t = {
            capture: t
        }), i("no-options-for-event-listeners") ? t ? t.capture : null : t
    }, e.dispatch = function(t, i, n, s) {
        return e._dispatch.apply(e, e._addDispatcher(arguments))
    }, e._dispatch = function(t, e, i, n) {
        var s = document.createEvent("Events");
        return s.initEvent(e, !1, n || !1), s.m = "undefined" != typeof i ? i : {}, t.dispatchEvent(s)
    }, e.stop = function(t) {
        return t = t || window.event, t.preventDefault && t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), t.cancelBubble = !0, t._gala_prevented = !0, !1
    }, e._addDispatcher = function(t) {
        return t = Array.prototype.slice.call(t, 0), "string" == typeof t[0] && t.unshift(e.DEFAULT_DISPATCHER), t
    }, e
}),
define("gala/src/constants", ["require", "./quirks"], function(t) {
    var e = (t("./quirks"), {});
    return e.DEFAULT_TOUCH_ACTION = "none", e
}),
define("gala/src/handler", ["require", "./events"], function(t) {
    var e = t("./events"),
        i = function(t, i, n, s) {
            var o = e._addDispatcher(arguments);
            this.element = o[0],
            this.evtType = o[1],
            this.callback = o[2],
            this.useCapture = o[3]
        },
        n = i.prototype;
    return n.listen = function() {
        if (!this.listening)
            return e._listen(this.element, this.evtType, this.callback, this.useCapture), this.listening = !0, this
    }, n.deafen = function() {
        if (this.listening)
            return e._deafen(this.element, this.evtType, this.callback, this.useCapture), this.listening = !1, this
    }, n.fire = function() {
        return this.callback.apply(this, arguments), this
    }, i
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("pep/pep", e) : t.PointerEventsPolyfill = e()
}(this, function() {
    "use strict";
    function t(t, e) {
        e = e || Object.create(null);
        var i = document.createEvent("Event");
        i.initEvent(t, e.bubbles || !1, e.cancelable || !1);
        for (var n, s = 2; s < d.length; s++)
            n = d[s],
            i[n] = e[n] || p[s];
        i.buttons = e.buttons || 0;
        var o = 0;
        return o = e.pressure && i.buttons ? e.pressure : i.buttons ? .5 : 0, i.x = i.clientX, i.y = i.clientY, i.pointerId = e.pointerId || 0,
        i.width = e.width || 0, i.height = e.height || 0, i.pressure = o, i.tiltX = e.tiltX || 0, i.tiltY = e.tiltY || 0, i.twist = e.twist || 0, i.tangentialPressure = e.tangentialPressure || 0, i.pointerType = e.pointerType || "", i.hwTimestamp = e.hwTimestamp || 0, i.isPrimary = e.isPrimary || !1, i
    }
    function e() {
        this.array = [],
        this.size = 0
    }
    function i(t, e, i, n) {
        this.addCallback = t.bind(n),
        this.removeCallback = e.bind(n),
        this.changedCallback = i.bind(n),
        T && (this.observer = new T(this.mutationWatcher.bind(this)))
    }
    function n(t) {
        return "body /shadow-deep/ " + s(t)
    }
    function s(t) {
        return '[touch-action="' + t + '"]'
    }
    function o(t) {
        return "{ -ms-touch-action: " + t + "; touch-action: " + t + "; }"
    }
    function r() {
        if (F) {
            E.forEach(function(t) {
                String(t) === t ? (M += s(t) + o(t) + "\n", A && (M += n(t) + o(t) + "\n")) : (M += t.selectors.map(s) + o(t.rule) + "\n", A && (M += t.selectors.map(n) + o(t.rule) + "\n"))
            });
            var t = document.createElement("style");
            t.id = "PEP",
            t.textContent = M,
            document.head.appendChild(t)
        }
    }
    function a() {
        if (!window.PointerEvent) {
            if (window.PointerEvent = t, window.navigator.msPointerEnabled) {
                var e = window.navigator.msMaxTouchPoints;
                Object.defineProperty(window.navigator, "maxTouchPoints", {
                    value: e,
                    enumerable: !0
                }),
                y.registerSource("ms", Q)
            } else
                Object.defineProperty(window.navigator, "maxTouchPoints", {
                    value: 0,
                    enumerable: !0
                }),
                y.registerSource("mouse", D),
                void 0 !== window.ontouchstart && y.registerSource("touch", V);
            y.register(document)
        }
    }
    function c(t) {
        if (!y.pointermap.has(t)) {
            var e = new Error("InvalidPointerId");
            throw e.name = "InvalidPointerId", e
        }
    }
    function l(t) {
        for (var e = t.parentNode; e && e !== t.ownerDocument;)
            e = e.parentNode;
        if (!e) {
            var i = new Error("InvalidStateError");
            throw i.name = "InvalidStateError", i
        }
    }
    function h(t) {
        var e = y.pointermap.get(t);
        return 0 !== e.buttons
    }
    function u() {
        window.Element && !Element.prototype.setPointerCapture && Object.defineProperties(Element.prototype, {
            setPointerCapture: {
                value: K
            },
            releasePointerCapture: {
                value: Y
            },
            hasPointerCapture: {
                value: X
            }
        })
    }
    var d = ["bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "relatedTarget", "pageX", "pageY"],
        p = [!1, !1, null, null, 0, 0, 0, 0, !1, !1, !1, !1, 0, null, 0, 0],
        f = window.Map && window.Map.prototype.forEach,
        m = f ? Map : e;
    e.prototype = {
        set: function(t, e) {
            return void 0 === e ? this.delete(t) : (this.has(t) || this.size++, void (this.array[t] = e))
        },
        has: function(t) {
            return void 0 !== this.array[t]
        },
        delete: function(t) {
            this.has(t) && (delete this.array[t], this.size--)
        },
        get: function(t) {
            return this.array[t]
        },
        clear: function() {
            this.array.length = 0,
            this.size = 0
        },
        forEach: function(t, e) {
            return this.array.forEach(function(i, n) {
                t.call(e, i, n, this)
            }, this)
        }
    };
    var _ = ["bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "relatedTarget", "buttons", "pointerId", "width", "height", "pressure", "tiltX", "tiltY", "pointerType", "hwTimestamp", "isPrimary", "type", "target", "currentTarget", "which", "pageX", "pageY", "timeStamp"],
        g = [!1, !1, null, null, 0, 0, 0, 0, !1, !1, !1, !1, 0, null, 0, 0, 0, 0, 0, 0, 0, "", 0, !1, "", null, null, 0, 0, 0, 0],
        b = {
            pointerover: 1,
            pointerout: 1,
            pointerenter: 1,
            pointerleave: 1
        },
        v = "undefined" != typeof SVGElementInstance,
        y = {
            pointermap: new m,
            eventMap: Object.create(null),
            captureInfo: Object.create(null),
            eventSources: Object.create(null),
            eventSourceList: [],
            registerSource: function(t, e) {
                var i = e,
                    n = i.events;
                n && (n.forEach(function(t) {
                    i[t] && (this.eventMap[t] = i[t].bind(i))
                }, this), this.eventSources[t] = i, this.eventSourceList.push(i))
            },
            register: function(t) {
                for (var e, i = this.eventSourceList.length, n = 0; n < i && (e = this.eventSourceList[n]); n++)
                    e.register.call(e, t)
            },
            unregister: function(t) {
                for (var e, i = this.eventSourceList.length, n = 0; n < i && (e = this.eventSourceList[n]); n++)
                    e.unregister.call(e, t)
            },
            contains: function(t, e) {
                try {
                    return t.contains(e)
                } catch (t) {
                    return !1
                }
            },
            down: function(t) {
                t.bubbles = !0,
                this.fireEvent("pointerdown", t)
            },
            move: function(t) {
                t.bubbles = !0,
                this.fireEvent("pointermove", t)
            },
            up: function(t) {
                t.bubbles = !0,
                this.fireEvent("pointerup", t)
            },
            enter: function(t) {
                t.bubbles = !1,
                this.fireEvent("pointerenter", t)
            },
            leave: function(t) {
                t.bubbles = !1,
                this.fireEvent("pointerleave", t)
            },
            over: function(t) {
                t.bubbles = !0,
                this.fireEvent("pointerover", t)
            },
            out: function(t) {
                t.bubbles = !0,
                this.fireEvent("pointerout", t)
            },
            cancel: function(t) {
                t.bubbles = !0,
                this.fireEvent("pointercancel", t)
            },
            leaveOut: function(t) {
                this.out(t),
                this.propagate(t, this.leave, !1)
            },
            enterOver: function(t) {
                this.over(t),
                this.propagate(t, this.enter, !0)
            },
            eventHandler: function(t) {
                if (!t._handledByPE) {
                    var e = t.type,
                        i = this.eventMap && this.eventMap[e];
                    i && i(t),
                    t._handledByPE = !0
                }
            },
            listen: function(t, e) {
                e.forEach(function(e) {
                    this.addEvent(t, e)
                }, this)
            },
            unlisten: function(t, e) {
                e.forEach(function(e) {
                    this.removeEvent(t, e)
                }, this)
            },
            addEvent: function(t, e) {
                t.addEventListener(e, this.boundHandler)
            },
            removeEvent: function(t, e) {
                t.removeEventListener(e, this.boundHandler)
            },
            makeEvent: function(e, i) {
                this.captureInfo[i.pointerId] && (i.relatedTarget = null);
                var n = new t(e, i);
                return i.preventDefault && (n.preventDefault = i.preventDefault), n._target = n._target || i.target, n
            },
            fireEvent: function(t, e) {
                var i = this.makeEvent(t, e);
                return this.dispatchEvent(i)
            },
            cloneEvent: function(t) {
                for (var e, i = Object.create(null), n = 0; n < _.length; n++)
                    e = _[n],
                    i[e] = t[e] || g[n],
                    !v || "target" !== e && "relatedTarget" !== e || i[e] instanceof SVGElementInstance && (i[e] = i[e].correspondingUseElement);
                return t.preventDefault && (i.preventDefault = function() {
                    t.preventDefault()
                }), i
            },
            getTarget: function(t) {
                var e = this.captureInfo[t.pointerId];
                return e ? t._target !== e && t.type in b ? void 0 : e : t._target
            },
            propagate: function(t, e, i) {
                for (var n = t.target, s = []; n !== document && !n.contains(t.relatedTarget);)
                    if (s.push(n), n = n.parentNode, !n)
                        return;
                i && s.reverse(),
                s.forEach(function(i) {
                    t.target = i,
                    e.call(this, t)
                }, this)
            },
            setCapture: function(e, i, n) {
                this.captureInfo[e] && this.releaseCapture(e, n),
                this.captureInfo[e] = i,
                this.implicitRelease = this.releaseCapture.bind(this, e, n),
                document.addEventListener("pointerup", this.implicitRelease),
                document.addEventListener("pointercancel", this.implicitRelease);
                var s = new t("gotpointercapture");
                s.pointerId = e,
                s._target = i,
                n || this.asyncDispatchEvent(s)
            },
            releaseCapture: function(e, i) {
                var n = this.captureInfo[e];
                if (n) {
                    this.captureInfo[e] = void 0,
                    document.removeEventListener("pointerup", this.implicitRelease),
                    document.removeEventListener("pointercancel", this.implicitRelease);
                    var s = new t("lostpointercapture");
                    s.pointerId = e,
                    s._target = n,
                    i || this.asyncDispatchEvent(s)
                }
            },
            dispatchEvent: function(t) {
                var e = this.getTarget(t);
                if (e)
                    return e.dispatchEvent(t)
            },
            asyncDispatchEvent: function(t) {
                requestAnimationFrame(this.dispatchEvent.bind(this, t))
            }
        };
    y.boundHandler = y.eventHandler.bind(y);
    var k = {
            shadow: function(t) {
                if (t)
                    return t.shadowRoot || t.webkitShadowRoot
            },
            canTarget: function(t) {
                return t && Boolean(t.elementFromPoint)
            },
            targetingShadow: function(t) {
                var e = this.shadow(t);
                if (this.canTarget(e))
                    return e
            },
            olderShadow: function(t) {
                var e = t.olderShadowRoot;
                if (!e) {
                    var i = t.querySelector("shadow");
                    i && (e = i.olderShadowRoot)
                }
                return e
            },
            allShadows: function(t) {
                for (var e = [], i = this.shadow(t); i;)
                    e.push(i),
                    i = this.olderShadow(i);
                return e
            },
            searchRoot: function(t, e, i) {
                if (t) {
                    var n,
                        s,
                        o = t.elementFromPoint(e, i);
                    for (s = this.targetingShadow(o); s;) {
                        if (n = s.elementFromPoint(e, i)) {
                            var r = this.targetingShadow(n);
                            return this.searchRoot(r, e, i) || n
                        }
                        s = this.olderShadow(s)
                    }
                    return o
                }
            },
            owner: function(t) {
                for (var e = t; e.parentNode;)
                    e = e.parentNode;
                return e.nodeType !== Node.DOCUMENT_NODE && e.nodeType !== Node.DOCUMENT_FRAGMENT_NODE && (e = document), e
            },
            findTarget: function(t) {
                var e = t.clientX,
                    i = t.clientY,
                    n = this.owner(t.target);
                return n.elementFromPoint(e, i) || (n = document), this.searchRoot(n, e, i)
            }
        },
        w = Array.prototype.forEach.call.bind(Array.prototype.forEach),
        x = Array.prototype.map.call.bind(Array.prototype.map),
        C = Array.prototype.slice.call.bind(Array.prototype.slice),
        I = Array.prototype.filter.call.bind(Array.prototype.filter),
        T = window.MutationObserver || window.WebKitMutationObserver,
        S = "[touch-action]",
        B = {
            subtree: !0,
            childList: !0,
            attributes: !0,
            attributeOldValue: !0,
            attributeFilter: ["touch-action"]
        };
    i.prototype = {
        watchSubtree: function(t) {
            this.observer && k.canTarget(t) && this.observer.observe(t, B)
        },
        enableOnSubtree: function(t) {
            this.watchSubtree(t),
            t === document && "complete" !== document.readyState ? this.installOnLoad() : this.installNewSubtree(t)
        },
        installNewSubtree: function(t) {
            w(this.findElements(t), this.addElement, this)
        },
        findElements: function(t) {
            return t.querySelectorAll ? t.querySelectorAll(S) : []
        },
        removeElement: function(t) {
            this.removeCallback(t)
        },
        addElement: function(t) {
            this.addCallback(t)
        },
        elementChanged: function(t, e) {
            this.changedCallback(t, e)
        },
        concatLists: function(t, e) {
            return t.concat(C(e))
        },
        installOnLoad: function() {
            document.addEventListener("readystatechange", function() {
                "complete" === document.readyState && this.installNewSubtree(document)
            }.bind(this))
        },
        isElement: function(t) {
            return t.nodeType === Node.ELEMENT_NODE
        },
        flattenMutationTree: function(t) {
            var e = x(t, this.findElements, this);
            return e.push(I(t, this.isElement)), e.reduce(this.concatLists, [])
        },
        mutationWatcher: function(t) {
            t.forEach(this.mutationHandler, this)
        },
        mutationHandler: function(t) {
            if ("childList" === t.type) {
                var e = this.flattenMutationTree(t.addedNodes);
                e.forEach(this.addElement, this);
                var i = this.flattenMutationTree(t.removedNodes);
                i.forEach(this.removeElement, this)
            } else
                "attributes" === t.type && this.elementChanged(t.target, t.oldValue)
        }
    };
    var E = ["none", "auto", "pan-x", "pan-y", {
            rule: "pan-x pan-y",
            selectors: ["pan-x pan-y", "pan-y pan-x"]
        }],
        M = "",
        F = window.PointerEvent || window.MSPointerEvent,
        A = !window.ShadowDOMPolyfill && document.head.createShadowRoot,
        L = y.pointermap,
        P = 25,
        R = [1, 4, 2, 8, 16],
        O = !1;
    try {
        O = 1 === new MouseEvent("test", {
            buttons: 1
        }).buttons
    } catch (t) {}
    var N,
        D = {
            POINTER_ID: 1,
            POINTER_TYPE: "mouse",
            events: ["mousedown", "mousemove", "mouseup", "mouseover", "mouseout"],
            register: function(t) {
                y.listen(t, this.events)
            },
            unregister: function(t) {
                y.unlisten(t, this.events)
            },
            lastTouches: [],
            isEventSimulatedFromTouch: function(t) {
                for (var e, i = this.lastTouches, n = t.clientX, s = t.clientY, o = 0, r = i.length; o < r && (e = i[o]); o++) {
                    var a = Math.abs(n - e.x),
                        c = Math.abs(s - e.y);
                    if (a <= P && c <= P)
                        return !0
                }
            },
            prepareEvent: function(t) {
                var e = y.cloneEvent(t),
                    i = e.preventDefault;
                return e.preventDefault = function() {
                    t.preventDefault(),
                    i()
                }, e.pointerId = this.POINTER_ID, e.isPrimary = !0, e.pointerType = this.POINTER_TYPE, e
            },
            prepareButtonsForMove: function(t, e) {
                var i = L.get(this.POINTER_ID);
                0 !== e.which && i ? t.buttons = i.buttons : t.buttons = 0,
                e.buttons = t.buttons
            },
            mousedown: function(t) {
                if (!this.isEventSimulatedFromTouch(t)) {
                    var e = L.get(this.POINTER_ID),
                        i = this.prepareEvent(t);
                    O || (i.buttons = R[i.button], e && (i.buttons |= e.buttons), t.buttons = i.buttons),
                    L.set(this.POINTER_ID, t),
                    !e || 0 === e.buttons,
                    y.down(i)
                }
            },
            mousemove: function(t) {
                if (!this.isEventSimulatedFromTouch(t)) {
                    var e = this.prepareEvent(t);
                    O || this.prepareButtonsForMove(e, t),
                    e.button = -1,
                    L.set(this.POINTER_ID, t),
                    y.move(e)
                }
            },
            mouseup: function(t) {
                if (!this.isEventSimulatedFromTouch(t)) {
                    var e = L.get(this.POINTER_ID),
                        i = this.prepareEvent(t);
                    if (!O) {
                        var n = R[i.button];
                        i.buttons = e ? e.buttons & ~n : 0,
                        t.buttons = i.buttons
                    }
                    L.set(this.POINTER_ID, t),
                    i.buttons &= ~R[i.button],
                    0 === i.buttons ? y.up(i) : y.move(i)
                }
            },
            mouseover: function(t) {
                if (!this.isEventSimulatedFromTouch(t)) {
                    var e = this.prepareEvent(t);
                    O || this.prepareButtonsForMove(e, t),
                    e.button = -1,
                    L.set(this.POINTER_ID, t),
                    y.enterOver(e)
                }
            },
            mouseout: function(t) {
                if (!this.isEventSimulatedFromTouch(t)) {
                    var e = this.prepareEvent(t);
                    O || this.prepareButtonsForMove(e, t),
                    e.button = -1,
                    y.leaveOut(e)
                }
            },
            cancel: function(t) {
                var e = this.prepareEvent(t);
                y.cancel(e),
                this.deactivateMouse()
            },
            deactivateMouse: function() {
                L.delete(this.POINTER_ID)
            }
        },
        j = y.captureInfo,
        q = k.findTarget.bind(k),
        H = k.allShadows.bind(k),
        z = y.pointermap,
        W = 2500,
        G = 200,
        U = "touch-action",
        V = {
            events: ["touchstart", "touchmove", "touchend", "touchcancel"],
            register: function(t) {
                N.enableOnSubtree(t)
            },
            unregister: function() {},
            elementAdded: function(t) {
                var e = t.getAttribute(U),
                    i = this.touchActionToScrollType(e);
                i && (t._scrollType = i, y.listen(t, this.events), H(t).forEach(function(t) {
                    t._scrollType = i,
                    y.listen(t, this.events)
                }, this))
            },
            elementRemoved: function(t) {
                t._scrollType = void 0,
                y.unlisten(t, this.events),
                H(t).forEach(function(t) {
                    t._scrollType = void 0,
                    y.unlisten(t, this.events)
                }, this)
            },
            elementChanged: function(t, e) {
                var i = t.getAttribute(U),
                    n = this.touchActionToScrollType(i),
                    s = this.touchActionToScrollType(e);
                n && s ? (t._scrollType = n, H(t).forEach(function(t) {
                    t._scrollType = n
                }, this)) : s ? this.elementRemoved(t) : n && this.elementAdded(t)
            },
            scrollTypes: {
                EMITTER: "none",
                XSCROLLER: "pan-x",
                YSCROLLER: "pan-y",
                SCROLLER: /^(?:pan-x pan-y)|(?:pan-y pan-x)|auto$/
            },
            touchActionToScrollType: function(t) {
                var e = t,
                    i = this.scrollTypes;
                return "none" === e ? "none" : e === i.XSCROLLER ? "X" : e === i.YSCROLLER ? "Y" : i.SCROLLER.exec(e) ? "XY" : void 0
            },
            POINTER_TYPE: "touch",
            firstTouch: null,
            isPrimaryTouch: function(t) {
                return this.firstTouch === t.identifier
            },
            setPrimaryTouch: function(t) {
                (0 === z.size || 1 === z.size && z.has(1)) && (this.firstTouch = t.identifier, this.firstXY = {
                    X: t.clientX,
                    Y: t.clientY
                }, this.scrolling = !1, this.cancelResetClickCount())
            },
            removePrimaryPointer: function(t) {
                t.isPrimary && (this.firstTouch = null, this.firstXY = null, this.resetClickCount())
            },
            clickCount: 0,
            resetId: null,
            resetClickCount: function() {
                var t = function() {
                    this.clickCount = 0,
                    this.resetId = null
                }.bind(this);
                this.resetId = setTimeout(t, G)
            },
            cancelResetClickCount: function() {
                this.resetId && clearTimeout(this.resetId)
            },
            typeToButtons: function(t) {
                var e = 0;
                return "touchstart" !== t && "touchmove" !== t || (e = 1), e
            },
            touchToPointer: function(t) {
                var e = this.currentTouchEvent,
                    i = y.cloneEvent(t),
                    n = i.pointerId = t.identifier + 2;
                i.target = j[n] || q(i),
                i.bubbles = !0,
                i.cancelable = !0,
                i.detail = this.clickCount,
                i.button = 0,
                i.buttons = this.typeToButtons(e.type),
                i.width = 2 * (t.radiusX || t.webkitRadiusX || 0),
                i.height = 2 * (t.radiusY || t.webkitRadiusY || 0),
                i.pressure = t.force || t.webkitForce || .5,
                i.isPrimary = this.isPrimaryTouch(t),
                i.pointerType = this.POINTER_TYPE,
                i.altKey = e.altKey,
                i.ctrlKey = e.ctrlKey,
                i.metaKey = e.metaKey,
                i.shiftKey = e.shiftKey;
                var s = this;
                return i.preventDefault = function() {
                    s.scrolling = !1,
                    s.firstXY = null,
                    e.preventDefault()
                }, i
            },
            processTouches: function(t, e) {
                var i = t.changedTouches;
                this.currentTouchEvent = t;
                for (var n, s = 0; s < i.length; s++)
                    n = i[s],
                    e.call(this, this.touchToPointer(n))
            },
            shouldScroll: function(t) {
                if (this.firstXY) {
                    var e,
                        i = t.currentTarget._scrollType;
                    if ("none" === i)
                        e = !1;
                    else if ("XY" === i)
                        e = !0;
                    else {
                        var n = t.changedTouches[0],
                            s = i,
                            o = "Y" === i ? "X" : "Y",
                            r = Math.abs(n["client" + s] - this.firstXY[s]),
                            a = Math.abs(n["client" + o] - this.firstXY[o]);
                        e = r >= a
                    }
                    return this.firstXY = null, e
                }
            },
            findTouch: function(t, e) {
                for (var i, n = 0, s = t.length; n < s && (i = t[n]); n++)
                    if (i.identifier === e)
                        return !0
            },
            vacuumTouches: function(t) {
                var e = t.touches;
                if (z.size >= e.length) {
                    var i = [];
                    z.forEach(function(t, n) {
                        if (1 !== n && !this.findTouch(e, n - 2)) {
                            var s = t.out;
                            i.push(s)
                        }
                    }, this),
                    i.forEach(this.cancelOut, this)
                }
            },
            touchstart: function(t) {
                this.vacuumTouches(t),
                this.setPrimaryTouch(t.changedTouches[0]),
                this.dedupSynthMouse(t),
                this.scrolling || (this.clickCount++, this.processTouches(t, this.overDown))
            },
            overDown: function(t) {
                z.set(t.pointerId, {
                    target: t.target,
                    out: t,
                    outTarget: t.target
                }),
                y.enterOver(t),
                y.down(t)
            },
            touchmove: function(t) {
                this.scrolling || (this.shouldScroll(t) ? (this.scrolling = !0, this.touchcancel(t)) : (t.preventDefault(), this.processTouches(t, this.moveOverOut)))
            },
            moveOverOut: function(t) {
                var e = t,
                    i = z.get(e.pointerId);
                if (i) {
                    var n = i.out,
                        s = i.outTarget;
                    y.move(e),
                    n && s !== e.target && (n.relatedTarget = e.target, e.relatedTarget = s, n.target = s, e.target ? (y.leaveOut(n), y.enterOver(e)) : (e.target = s, e.relatedTarget = null, this.cancelOut(e))),
                    i.out = e,
                    i.outTarget = e.target
                }
            },
            touchend: function(t) {
                this.dedupSynthMouse(t),
                this.processTouches(t, this.upOut)
            },
            upOut: function(t) {
                this.scrolling || (y.up(t), y.leaveOut(t)),
                this.cleanUpPointer(t)
            },
            touchcancel: function(t) {
                this.processTouches(t, this.cancelOut)
            },
            cancelOut: function(t) {
                y.cancel(t),
                y.leaveOut(t),
                this.cleanUpPointer(t)
            },
            cleanUpPointer: function(t) {
                z.delete(t.pointerId),
                this.removePrimaryPointer(t)
            },
            dedupSynthMouse: function(t) {
                var e = D.lastTouches,
                    i = t.changedTouches[0];
                if (this.isPrimaryTouch(i)) {
                    var n = {
                        x: i.clientX,
                        y: i.clientY
                    };
                    e.push(n);
                    var s = function(t, e) {
                        var i = t.indexOf(e);
                        i > -1 && t.splice(i, 1)
                    }.bind(null, e, n);
                    setTimeout(s, W)
                }
            }
        };
    N = new i(V.elementAdded, V.elementRemoved, V.elementChanged, V);
    var K,
        Y,
        X,
        $ = y.pointermap,
        J = window.MSPointerEvent && "number" == typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE,
        Q = {
            events: ["MSPointerDown", "MSPointerMove", "MSPointerUp", "MSPointerOut", "MSPointerOver", "MSPointerCancel", "MSGotPointerCapture", "MSLostPointerCapture"],
            register: function(t) {
                y.listen(t, this.events)
            },
            unregister: function(t) {
                y.unlisten(t, this.events)
            },
            POINTER_TYPES: ["", "unavailable", "touch", "pen", "mouse"],
            prepareEvent: function(t) {
                var e = t;
                return J && (e = y.cloneEvent(t), e.pointerType = this.POINTER_TYPES[t.pointerType]), e
            },
            cleanup: function(t) {
                $.delete(t)
            },
            MSPointerDown: function(t) {
                $.set(t.pointerId, t);
                var e = this.prepareEvent(t);
                y.down(e)
            },
            MSPointerMove: function(t) {
                var e = this.prepareEvent(t);
                y.move(e)
            },
            MSPointerUp: function(t) {
                var e = this.prepareEvent(t);
                y.up(e),
                this.cleanup(t.pointerId)
            },
            MSPointerOut: function(t) {
                var e = this.prepareEvent(t);
                y.leaveOut(e)
            },
            MSPointerOver: function(t) {
                var e = this.prepareEvent(t);
                y.enterOver(e)
            },
            MSPointerCancel: function(t) {
                var e = this.prepareEvent(t);
                y.cancel(e),
                this.cleanup(t.pointerId)
            },
            MSLostPointerCapture: function(t) {
                var e = y.makeEvent("lostpointercapture", t);
                y.dispatchEvent(e)
            },
            MSGotPointerCapture: function(t) {
                var e = y.makeEvent("gotpointercapture", t);
                y.dispatchEvent(e)
            }
        },
        Z = window.navigator;
    Z.msPointerEnabled ? (K = function(t) {
        c(t),
        l(this),
        h(t) && (y.setCapture(t, this, !0), this.msSetPointerCapture(t))
    }, Y = function(t) {
        c(t),
        y.releaseCapture(t, !0),
        this.msReleasePointerCapture(t)
    }) : (K = function(t) {
        c(t),
        l(this),
        h(t) && y.setCapture(t, this)
    }, Y = function(t) {
        c(t),
        y.releaseCapture(t)
    }),
    X = function(t) {
        return !!y.captureInfo[t]
    },
    r(),
    a(),
    u();
    var tt = {
        dispatcher: y,
        Installer: i,
        PointerEvent: t,
        PointerMap: m,
        targetFinding: k
    };
    return tt
}),
define("pep", ["pep/pep"], function(t) {
    return t
}),
define("gala/src/touch-action", ["require", "./events"], function(t) {
    var e = t("./events");
    return e.setTouchAction = function(t, e, i) {
        i && i.override === !1 && t.getAttribute("touch-action") || (e ? (t.setAttribute("touch-action", e), t.style.setProperty("-ms-touch-action", e), t.style.setProperty("touch-action", e)) : (t.removeAttribute("touch-action"), t.style.removeProperty("-ms-touch-action"), t.style.removeProperty("touch-action")))
    }, e
}),
define("gala/src/contact-handler", ["require", "pep", "./constants", "./events", "./handler", "./quirks", "./touch-action"], function(t) {
    var e = function(t, e, i) {
            var n = s._addDispatcher(arguments);
            this.element = n.shift(),
            this.callbacks = n.shift(),
            this.options = n.shift() || {},
            this._ = {},
            this._.handlers = {
                start: [],
                move: [],
                end: [],
                cancel: []
            },
            this._.pointers = [],
            this._setAppropriateTouchAction(this.element)
        },
        i = e.prototype,
        n = (t("pep"), t("./constants")),
        s = t("./events"),
        o = (t("./handler"), t("./quirks"));
    t("./touch-action");
    return i.listen = function() {
        return this._listenOnCategory(this.element, "start", ["pointerdown"]), this
    }, i.deafen = function() {
        for (this._deafenHandlers(this._.handlers.start); this._.pointers.length;)
            this._removePointer(this._.pointers[0]);
        return this
    }, i.capture = function() {
        if (!o("pointer-events-capture-randomly-cancels"))
            for (var t = 0, e = this._.pointers.length; t < e; ++t)
                this._capturePointer(this._.pointers[t], this.element);
        this._.handlers.cancel && s.off(this._.handlers.cancel[1])
    }, i.release = function() {
        for (var t = 0, e = this._.pointers.length; t < e; ++t)
            this._releasePointer(this._.pointers[t])
    }, i._setAppropriateTouchAction = function(t) {
        for (var e = n.DEFAULT_TOUCH_ACTION; t && t.getAttribute;) {
            var i = t.getAttribute("touch-action") || (t._scrollableAxis ? "pan-" + t._scrollableAxis : null);
            if (i) {
                e = i;
                break
            }
            t = t.parentNode
        }
        s.setTouchAction(this.element, e, {
            override: !1
        })
    }, i._listenContinue = function() {
        var t = {
            move: ["pointermove"],
            end: ["pointerup"],
            cancel: ["pointercancel", "pointerleave"]
        };
        this._listenOnCategory(this.element, "move", t.move),
        this._listenOnCategory(this.element, "end", t.end),
        this._listenOnCategory(this.element, "cancel", t.cancel),
        this._.continued = !0
    }, i._deafenContinue = function() {
        this._deafenHandlers(this._.handlers.move),
        this._deafenHandlers(this._.handlers.end),
        this._deafenHandlers(this._.handlers.cancel),
        this._.continued = !1
    }, i._listenOnCategory = function(t, e, i) {
        if (!this._.handlers[e].length)
            for (var n = this["_" + e].bind(this); i.length;) {
                var o = i.shift(),
                    r = s.on(t, o, n, this.options.capture);
                this._.handlers[e].push(r)
            }
    }, i._start = function(t) {
        t.button > 0 || (this._addPointer(t), this._invokeCallback("start", t))
    }, i._move = function(t) {
        this._updatePointer(t) && this._invokeCallback("move", t)
    }, i._end = function(t) {
        this._updatePointer(t) && (this._invokeCallback("end", t), this._removePointer(t))
    }, i._cancel = function(t) {
        this._updatePointer(t) && (this._invokeCallback("cancel", t), this._removePointer(t))
    }, i._deafenHandlers = function(t) {
        for (; t.length;)
            t.shift().deafen()
    }, i._invokeCallback = function(t, e) {
        e.contactType = t,
        e.contactPointers = this._.pointers.slice(0),
        e.contactScale = this._computeScaleOfPointers(),
        "function" == typeof this.callbacks[t] && this.callbacks[t](e)
    }, i._addPointer = function(t) {
        this.options.multitouch || this._.pointers.splice(0),
        t.contactIndex = this._.pointers.length,
        this._.pointers.push(t),
        this._.continued || this._listenContinue(),
        delete this._.initialPointerDistance
    }, i._updatePointer = function(t) {
        for (var e = 0, i = this._.pointers.length; e < i; ++e) {
            var n = this._.pointers[e];
            if (n.pointerId == t.pointerId)
                return this._.pointers[e] = t, t.contactIndex = n.contactIndex, !0
        }
        return !1
    }, i._removePointer = function(t) {
        this._releasePointer(t);
        for (var e = [], i = 0, n = this._.pointers.length; i < n; ++i) {
            var s = this._.pointers[i];
            s.pointerId != t.pointerId && e.push(s)
        }
        this._.pointers = e,
        this._.continued && !this._.pointers.length && this._deafenContinue()
    }, i._capturePointer = function(t, e) {
        e = t.target,
        this._.captureTargets = this._.captureTargets || {};
        var i = this._.captureTargets[t.pointerId];
        i != e && (i && i != e && this._releasePointer(t), this._.captureTargets[t.pointerId] = e, e.setPointerCapture(t.pointerId))
    }, i._releasePointer = function(t) {
        this._.captureTargets = this._.captureTargets || {};
        var e = this._.captureTargets[t.pointerId];
        if (e)
            try {
                e.releasePointerCapture(t.pointerId),
                delete this._.captureTargets[t.pointerId]
            } catch (t) {}
    }, i._computeScaleOfPointers = function() {
        if (2 != this._.pointers.length)
            return 1;
        var t = function(t) {
                var e = t[1].pageX - t[0].pageX,
                    i = t[1].pageY - t[0].pageY;
                return Math.sqrt(e * e + i * i)
            },
            e = t(this._.pointers),
            i = this._.initialPointerDistance || e;
        return this._.initialPointerDistance = i, e / i
    }, e
}),
define("gala/src/scroll-manager", ["require", "./events", "./quirks", "./touch-action"], function(t) {
    var e = {},
        i = t("./events"),
        n = t("./quirks");
    t("./touch-action");
    return e.scrollable = function(t, s) {
        s = s || "y",
        t._scrollableAxis != s && (t._scrollableAxis = s, t.classList.add("native-scrollable"), t.classList.add("native-scrollable-" + s), i.setTouchAction(t, "pan-" + s), n("legacy-ontap") && i.on(t, "scroll", function() {
            e.lastScrollTimestamp = (new Date).getTime()
        }))
    }, e.unscrollable = function(t) {
        i.on(t, "scroll", function(e) {
            i.stop(e),
            t.scrollLeft = 0,
            t.scrollTop = 0
        })
    }, e.jiggle = function(t) {
        t.style.setProperty("-webkit-overflow-scrolling", "initial"),
        setTimeout(function() {
            t.style.removeProperty("-webkit-overflow-scrolling")
        }, 500)
    }, e
}),
define("gala/src/velocity", ["require"], function(t) {
    var e = function(t) {
            this._ = {
                points: [],
                target: {
                    x: 0,
                    y: 0
                },
                pointer: {
                    curr: {
                        x: 0,
                        y: 0
                    },
                    prev: {
                        x: 0,
                        y: 0
                    }
                },
                decel: {
                    x: 0,
                    y: 0
                },
                awaitingTick: !1,
                decelerating: !1
            },
            this.configure(t || {})
        },
        i = e.prototype;
    return i.BOUNCE_ACCELERATION = .11, i.BOUNCE_DECELERATION = .04, i.BOUNDARY_FRICTION_BASE = .55, i.MULTIPLIER = 1, i.FRICTION = .92, i.DECAY_THRESHOLD = .3, i.FRAME_MS = 15, i.TRACKING_WINDOW_MS = 100, i.configure = function(t) {
        this.options = t,
        this.options.position && (this._.target.x = this.options.position.x, this._.target.y = this.options.position.y),
        "number" != typeof this.options.multiplier && (this.options.multiplier = this.MULTIPLIER),
        "number" != typeof this.options.friction && (this.options.friction = this.FRICTION),
        "undefined" == typeof this.options.bounce && (this.options.bounce = !0),
        "undefined" == typeof this.options.bounceAcceleration && (this.options.bounceAcceleration = this.BOUNCE_ACCELERATION),
        "undefined" == typeof this.options.bounceDeceleration && (this.options.bounceDeceleration = this.BOUNCE_DECELERATION),
        "undefined" == typeof this.options.boundaryFrictionBase && (this.options.boundaryFrictionBase = {
            x: this.BOUNDARY_FRICTION_BASE,
            y: this.BOUNDARY_FRICTION_BASE
        }),
        "number" != typeof this.options.decayThreshold && (this.options.decayThreshold = this.DECAY_THRESHOLD * this.options.multiplier)
    }, i.onUpdate = function(t, e, i) {
        console.log("[GALA] Velocity: %s (%s, %s)", i.phase, t, e)
    }, i.trackFirst = function(t, e, i) {
        this._.decelerating = !1,
        this._.pointer.prev.x = this._.pointer.curr.x = t,
        this._.pointer.prev.y = this._.pointer.curr.y = e,
        this._.points.splice(0),
        this._addTrackingPoint(t, e, i)
    }, i.trackNext = function(t, e, i) {
        this._.pointer.curr.x = t,
        this._.pointer.curr.y = e,
        this._addTrackingPoint(this._.pointer.prev.x, this._.pointer.prev.y, i),
        this._.awaitingTick || (requestAnimationFrame(this._performUpdate.bind(this)), this._.awaitingTick = !0)
    }, i.trackLast = function(t, e, i) {
        this._addTrackingPoint("number" == typeof t ? t : this._.pointer.prev.x, "number" == typeof e ? e : this._.pointer.prev.y, i),
        this._decelerateStart()
    }, i._addTrackingPoint = function(t, e, i) {
        for (i = i || (new Date).getTime(); this._.points.length > 0 && !(i - this._.points[0].timestamp <= this.TRACKING_WINDOW_MS);)
            this._.points.shift();
        this._.points.push({
            x: t,
            y: e,
            timestamp: i
        })
    }, i._boundaryEnforcement = function(t) {
        var e = {
                x: 0,
                y: 0
            },
            i = this.options.boundary;
        return i ? (this._.target.x < i.left ? e.x = i.left - this._.target.x : this._.target.x > i.right && (e.x = i.right - this._.target.x), this._.target.y < i.top ? e.y = i.top - this._.target.y : this._.target.y > i.bottom && (e.y = i.bottom - this._.target.y), t && (e.x && (this._.target.x = e.x > 0 ? i.left : i.right), e.y && (this._.target.y = e.y > 0 ? i.top : i.bottom)), e.x || e.y ? e : null) : null
    }, i._boundaryFriction = function(t, e) {
        var i = function(t, e) {
            return 5e-6 * Math.pow(t, 2) + 1e-4 * t + e
        };
        return {
            x: i(t, this.options.boundaryFrictionBase.x),
            y: i(e, this.options.boundaryFrictionBase.y)
        }
    }, i._decelerateStart = function() {
        var t = this._.points[0],
            e = this._.points[this._.points.length - 1],
            i = {
                x: e.x - t.x,
                y: e.y - t.y,
                ms: e.timestamp - t.timestamp
            },
            n = i.ms / this.FRAME_MS / this.options.multiplier;
        this._.decay = {
            x: i.x / n || 0,
            y: i.y / n || 0
        };
        var s = this._boundaryEnforcement();
        s || Math.abs(this._.decay.x) > 1 || Math.abs(this._.decay.y) > 1 ? (this._.decelerating = !0, requestAnimationFrame(this._decelerateContinue.bind(this))) : this.onUpdate(this._.target.x, this._.target.y, {
            phase: "resting"
        })
    }, i._decelerateContinue = function() {
        if (this._.decelerating) {
            this._.decay.x *= this.options.friction,
            this._.decay.y *= this.options.friction,
            this._.target.x += this._.decay.x,
            this._.target.y += this._.decay.y;
            var t = this.options.decayThreshold,
                e = this._boundaryEnforcement();
            e && this.options.bounce ? (e.x && (Math.abs(e.x) < t ? this._.decay.x = e.x : e.x * this._.decay.x <= 0 ? this._.decay.x += e.x * this.options.bounceDeceleration : this._.decay.x = e.x * this.options.bounceAcceleration), e.y && (Math.abs(e.y) < t ? this._.decay.y = e.y : e.y * this._.decay.y <= 0 ? this._.decay.y += e.y * this.options.bounceDeceleration : this._.decay.y = e.y * this.options.bounceAcceleration)) : e && this.options.boundary && (e.x && (this._.target.x = this.options.boundary[e.x > 0 ? "left" : "right"], this._.decay.x = 0), e.y && (this._.target.y = this.options.boundary[e.y > 0 ? "top" : "bottom"], this._.decay.y = 0)),
            e && Math.abs(e.x) > t || e && Math.abs(e.y) > t || Math.abs(this._.decay.x) > t || Math.abs(this._.decay.y) > t ? (this.onUpdate(this._.target.x, this._.target.y, {
                phase: "decelerating"
            }), requestAnimationFrame(this._decelerateContinue.bind(this))) : (this.onUpdate(this._.target.x, this._.target.y, {
                phase: "resting"
            }), this._.decelerating = !1)
        }
    }, i._performUpdate = function() {
        var t = {
            x: this._.pointer.curr.x - this._.pointer.prev.x,
            y: this._.pointer.curr.y - this._.pointer.prev.y
        };
        this._.target.x += t.x * this.options.multiplier,
        this._.target.y += t.y * this.options.multiplier;
        var e = this._boundaryEnforcement(!this.options.bounce);
        if (e) {
            var i = this._boundaryFriction(e.x, e.y);
            e.x && (this._.target.x -= t.x * i.x * this.options.multiplier),
            e.y && (this._.target.y -= t.y * i.y * this.options.multiplier)
        }
        this.onUpdate(this._.target.x, this._.target.y, {
            phase: "dragging"
        }),
        this._.pointer.prev.x = this._.pointer.curr.x,
        this._.pointer.prev.y = this._.pointer.curr.y,
        this._.awaitingTick = !1
    }, e
}),
define("gala/src/ontap", ["require", "./events", "./constants", "./quirks", "./contact-handler"], function(t) {
    var e = t("./events");
    t("./constants"),
    t("./quirks"),
    t("./contact-handler");
    return e.onTap = function(t, i) {
        var n = function(n) {
                n.tappedElement = t,
                e.tappedElement = t,
                i(n)
            },
            s = {};
        return s.listen = function() {
            e.listen(t, "click", n)
        }, s.deafen = function() {
            e.deafen(t, "click", n)
        }, s.listen(), s
    }, e
}),
define("gala/src/legacy-ontap", ["require", "./events", "./quirks", "./constants", "./contact-handler", "./scroll-manager"], function(t) {
    var e = t("./events"),
        i = t("./quirks"),
        n = t("./constants"),
        s = (t("./contact-handler"), t("./scroll-manager"));
    if (!i("legacy-ontap"))
        return e;
    n.TAP_MAX_CONTACT_DISTANCE = 10;
    var o = null,
        r = {};
    return r.isTapValid = function(t) {
        if (!o)
            return !1;
        if (s.lastScrollTimestamp) {
            var i = o.time - s.lastScrollTimestamp,
                a = (new Date).getTime() - o.time;
            if (i < a)
                return console.log("Ignoring tap due to recent scroll.\nsinceScrollMS: %s is less than tapLengthMS: %s", i, a), e.__LAST_SCROLL = 0, !1
        }
        if (r.getScrollSignature(o.elem) != o.scrollSig)
            return console.log("Ignoring tap because scroll signature differs"), !1;
        var c = Math.abs(t.pageX - o.coords.x),
            l = Math.abs(t.pageY - o.coords.y),
            h = Math.max(c, l);
        return !(n.TAP_MAX_CONTACT_DISTANCE < h) || (console.log("Ignoring tap because pointer moved too much"), !1)
    }, r.handleTap = function(t, e, i) {
        if (o && o.time == e) {
            var n = r.isTapValid(t);
            r.cancelTap(),
            n && i(t)
        }
    }, r.cancelTap = function() {
        o && (o.endTimer && clearTimeout(o.endTimer), o = null)
    }, r.throttleInvocation = function(t, e) {
        var i = 0;
        return function() {
            var n = new Date,
                s = e - (n - i);
            s <= 0 && (i = n, t.apply(this, arguments))
        }
    }, r.getScrollSignature = function(t) {
        for (var e = 0; t && t.style;)
            e += t.scrollTop + t.scrollLeft,
            t = t.parentNode;
        return e
    }, e.onTap = function(t, i, n) {
        i = r.throttleInvocation(i, 100),
        n = n || {},
        null !== n.ariaRole && t.setAttribute("role", n.ariaRole || "link"),
        "undefined" == typeof n.propagate && (n.propagate = !0);
        var s = {
            start: function(e) {
                n.propagate || e.stopPropagation(),
                o && o.elem != t && r.cancelTap(),
                o = {
                    elem: t,
                    time: (new Date).getTime(),
                    scrollSig: r.getScrollSignature(t),
                    coords: {
                        x: e.pageX,
                        y: e.pageY
                    },
                    options: n
                }
            },
            move: function(e) {
                o && o.elem != t || r.isTapValid(e) || r.cancelTap()
            },
            end: function(s) {
                if (n.propagate || s.stopPropagation(), !o || o.elem == t) {
                    if (e.stop(s), !r.isTapValid(s))
                        return r.cancelTap();
                    s.tappedElement = t;
                    var a = r.handleTap.bind(r, s, o.time, i);
                    if (n.propagate) {
                        var c = "mouse" == s.pointerType ? 0 : 50;
                        o.endTimer = setTimeout(a, c)
                    } else
                        a()
                }
            },
            cancel: function(e) {
                o && o.elem != t || r.cancelTap()
            }
        };
        return e.onContact(t, s)
    }, e
}),
define("gala/src/sugar", ["require", "./events", "./handler", "./contact-handler", "./scroll-manager"], function(t) {
    function e(t, e) {
        if (t && "function" == typeof t[e])
            t[e]();
        else if (Array.isArray(t))
            for (var i = 0, n = t.length; i < n; ++i)
                t[i][e]();
        else if (t)
            for (var s = Object.getOwnPropertyNames(t), i = 0, n = s.length; i < n; ++i)
                t[s[i]][e]();
        return t
    }
    var i = t("./events"),
        n = t("./handler"),
        s = t("./contact-handler"),
        o = t("./scroll-manager");
    return i.on = function(t, s, o, r) {
        if (arguments.length <= 1)
            return e(arguments[0], "listen");
        var a = i._addDispatcher(arguments);
        return new n(a[0], a[1], a[2], a[3]).listen()
    }, i.off = function(t) {
        e(t, "deafen")
    }, i.once = function(t, e, s, o) {
        var r = i._addDispatcher(arguments),
            a = new n(r[0], r[1], function() {
                return a.deafen(), r[2].apply(window, arguments)
            }, r[3]).listen();
        return a
    }, i.onContact = function(t, e, i) {
        return new s(t, e, i).listen()
    }, i.scrollable = function() {
        o.scrollable.apply(o, arguments)
    }, i
}),
define("gala/gala", ["require", "./src/events", "./src/constants", "./src/handler", "./src/contact-handler", "./src/scroll-manager", "./src/velocity", "./src/ontap", "./src/legacy-ontap", "./src/sugar"], function(t) {
    var e = t("./src/events");
    return e.Constants = t("./src/constants"), e.Handler = t("./src/handler"), e.ContactHandler = t("./src/contact-handler"), e.ScrollManager = t("./src/scroll-manager"), e.Velocity = t("./src/velocity"), t("./src/ontap"), t("./src/legacy-ontap"), t("./src/sugar"), e
}),
define("gala", ["gala/gala"], function(t) {
    return t
}),
define("core/src/network", ["require", "common", "gala"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype,
        s = t("gala");
    return n.$init = function() {
        this.online = !0,
        this.listenForOffline(),
        window.navigator.onLine ? this._goOnline() : this._goOffline()
    }, n.listenForOffline = function() {
        s.off(this._.eventHandlers),
        this._.eventHandlers = {
            online: s.on(window, "online", this._goOnline.bind(this)),
            offline: s.on(window, "offline", this._goOffline.bind(this))
        }
    }, n.deafenForOffline = function() {
        s.off(this._.eventHandlers)
    }, n.sendRequest = function(t, e) {
        var i = null,
            n = !1,
            o = {
                req: new XMLHttpRequest,
                url: t,
                method: e.method || "GET",
                headers: e.headers || {},
                body: e.body
            };
        e.external || (o.headers["X-Dervish-Decree"] = BIF.map["-odread-bonafides-d"]),
        "POST" == o.method && (o.headers["Content-Type"] = e.contentType || "application/x-www-form-urlencoded"),
        e.accept && (o.headers.Accept = e.accept),
        o.onSuccess = function() {
            clearTimeout(i),
            this._onRequestSuccess(o.req),
            n || "function" != typeof e.success || e.success(o.req.responseText, o.req),
            n = !0
        }.bind(this),
        o.onFailure = function(t) {
            clearTimeout(i),
            e.unreliable || this._onRequestFailure(o.req),
            n || "function" != typeof e.failure || e.failure(t, o.req),
            n = !0
        }.bind(this);
        var r = s.dispatch("network:request", o, !0);
        if (r) {
            var a = "undefined" == typeof e.async || e.async;
            o.req.open(o.method, o.url, a);
            for (var c in o.headers)
                o.req.setRequestHeader(c, o.headers[c]);
            if (o.req.onreadystatechange = function(t) {
                4 == o.req.readyState && (o.req.status >= 200 && o.req.status < 300 ? o.onSuccess() : o.onFailure("HTTP status: " + o.req.status))
            }, o.req.onerror = function(t) {
                o.onFailure("XMLHttpRequest error event (asynchronous): " + t)
            }, e.timeout) {
                var l = function() {
                    o.req.abort(),
                    o.onFailure("Request timeout")
                };
                i = setTimeout(l, e.timeout)
            }
            try {
                o.req.send(o.body)
            } catch (t) {
                o.onFailure("XMLHttpRequest error (synchronous): " + t)
            }
            return o.req
        }
    }, n._goOnline = function() {
        this.online || (this.online = !0, document.documentElement.classList.remove("offline"), s.dispatch("bifocal:network", "online"))
    }, n._goOffline = function() {
        this.online && (this.online = !1, document.documentElement.classList.add("offline"), s.dispatch("bifocal:network", "offline"))
    }, n._onRequestSuccess = function(t) {
        this.ledger = this.ledger || {
            success: 0,
            failure: 0
        },
        this.ledger.success += 1
    }, n._onRequestFailure = function(t) {
        console.warn("NETWORK: request failed", t),
        this.ledger = this.ledger || {
            success: 0,
            failure: 0
        },
        this.ledger.failure += 1
    }, i
}),
define("core/src/journal", ["require", "common", "gala"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype,
        s = t("gala");
    return n.$init = function() {
        this.entries = [],
        window.onerror = window.onerror || this._onScriptError.bind(this),
        s.on("bifocal:error", this._onBifocalError.bind(this))
    }, n.write = function(t, i) {
        if ("string" != typeof t)
            try {
                t = JSON.stringify(t)
            } catch (e) {
                t = "Unstringifiable message: " + t
            }
        var n = [e.epochMilliseconds(), t];
        this.entries.push(n),
        i !== !1 && this._printEntry(n)
    }, n.print = function(t) {
        e.each(this.entries, function(e) {
            this._printEntry(e, t)
        }, this)
    }, n._onScriptError = function(t, e, i, n, o) {
        if (t) {
            var r = {
                errorMessage: t
            };
            o && o.stack ? r.errorSource = o.stack : !r.source && e && (r.errorSource = e + (i ? ":" + i : "")),
            s.dispatch("bifocal:error", r)
        }
    }, n._onBifocalError = function(t) {
        this.write(t.m)
    }, n._printEntry = function(t, i) {
        i ? e.element({
            tag: "span",
            parentNode: i,
            classes: "bif-journal-entry",
            html: [t[0], ": ", t[1]].join("")
        }) : console.log("[JOURNAL] %s: %s", t[0], t[1])
    }, i
}),
define("core/src/quirks", ["require", "quirkbase"], function(t) {
    var e = t("quirkbase");
    return e.add("broken-node-normalize", "iexplore", "edge"), e.add("broken-fixed-position", "ios<5"), e.add("translation-confuses-rects", "android-stock android>=4"), e.add("expanding-iframe-widths", "android-stock android<4"), e.add("iframe-scrollwidth-expands-to-width", "ios-uiwebview", "gecko", "iexplore"), e.add("missing-multi-column", "iexplore<10"), e.add("timers-stop-on-lock", "webkit>600 ios-standalone"), e.add("font-boosting", "android>3"), e.add("top-margin-in-scrollheight", "gecko"), e.add("table-row-display-none-crash", "android-stock android=4.1.2"), e.set("embedded", window.top != window.self), e.add("referrer-absent-on-doc-write", "iexplore embedded", "android<4", "safari"), e.add("scrolling-transition-bug-417345", "webkit !ios !android"), e.add("cors-requires-manual-redirect", "safari"), e.add("cors-rules-apply-to-media-src-attributes", "safari<8 ios"), e.add("cannot-disable-viewport-scaling", "ios>=10 !nautilus"), e
}),
define("dervish/src/urls", ["require", "common", "core/src/quirks"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = (i.prototype, t("core/src/quirks"));
    return i.toSrcCORS = function(t, e) {
        if (n("cors-requires-manual-redirect")) {
            t += (t.match(/\?/) ? "&" : "?") + "manual_redirect=1";
            var i = new XMLHttpRequest;
            return i.addEventListener("load", function(t) {
                e(i.responseText)
            }), i.addEventListener("error", function(e) {
                console.warn("Error fetching manual redirect:", t, e)
            }), i.open("GET", t, !0), i.send()
        }
        return e(t)
    }, i.toSrcMedia = function(t, e) {
        return n("cors-rules-apply-to-media-src-attributes") && (t += (t.match(/\?/) ? "&" : "?") + "d=" + BIF.map["-odread-bonafides-d"], t = (t.match(/^\//) ? "" : "/") + t, t = location.origin.replace(/(\w+\-\w+)\./, "$1-cors.") + t), e(t)
    }, i
}),
define("text", ["module"], function(t) {
    "use strict";
    function e(t, e) {
        return void 0 === t || "" === t ? e : t
    }
    function i(t, i, n, s) {
        if (i === s)
            return !0;
        if (t === n) {
            if ("http" === t)
                return e(i, "80") === e(s, "80");
            if ("https" === t)
                return e(i, "443") === e(s, "443")
        }
        return !1
    }
    var n,
        s,
        o,
        r,
        a,
        c = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
        l = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        h = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        u = "undefined" != typeof location && location.href,
        d = u && location.protocol && location.protocol.replace(/\:/, ""),
        p = u && location.hostname,
        f = u && (location.port || void 0),
        m = {},
        _ = t.config && t.config() || {};
    return n = {
        version: "2.0.15",
        strip: function(t) {
            if (t) {
                t = t.replace(l, "");
                var e = t.match(h);
                e && (t = e[1])
            } else
                t = "";
            return t
        },
        jsEscape: function(t) {
            return t.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
        },
        createXhr: _.createXhr || function() {
            var t,
                e,
                i;
            if ("undefined" != typeof XMLHttpRequest)
                return new XMLHttpRequest;
            if ("undefined" != typeof ActiveXObject)
                for (e = 0; e < 3; e += 1) {
                    i = c[e];
                    try {
                        t = new ActiveXObject(i)
                    } catch (t) {}
                    if (t) {
                        c = [i];
                        break
                    }
                }
            return t
        },
        parseName: function(t) {
            var e,
                i,
                n,
                s = !1,
                o = t.lastIndexOf("."),
                r = 0 === t.indexOf("./") || 0 === t.indexOf("../");
            return o !== -1 && (!r || o > 1) ? (e = t.substring(0, o), i = t.substring(o + 1)) : e = t, n = i || e, o = n.indexOf("!"), o !== -1 && (s = "strip" === n.substring(o + 1), n = n.substring(0, o), i ? i = n : e = n), {
                moduleName: e,
                ext: i,
                strip: s
            }
        },
        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
        useXhr: function(t, e, s, o) {
            var r,
                a,
                c,
                l = n.xdRegExp.exec(t);
            return !l || (r = l[2], a = l[3], a = a.split(":"), c = a[1], a = a[0], (!r || r === e) && (!a || a.toLowerCase() === s.toLowerCase()) && (!c && !a || i(r, c, e, o)))
        },
        finishLoad: function(t, e, i, s) {
            i = e ? n.strip(i) : i,
            _.isBuild && (m[t] = i),
            s(i)
        },
        load: function(t, e, i, s) {
            if (s && s.isBuild && !s.inlineText)
                return void i();
            _.isBuild = s && s.isBuild;
            var o = n.parseName(t),
                r = o.moduleName + (o.ext ? "." + o.ext : ""),
                a = e.toUrl(r),
                c = _.useXhr || n.useXhr;
            return 0 === a.indexOf("empty:") ? void i() : void (!u || c(a, d, p, f) ? n.get(a, function(e) {
                n.finishLoad(t, o.strip, e, i)
            }, function(t) {
                i.error && i.error(t)
            }) : e([r], function(t) {
                n.finishLoad(o.moduleName + "." + o.ext, o.strip, t, i)
            }))
        },
        write: function(t, e, i, s) {
            if (m.hasOwnProperty(e)) {
                var o = n.jsEscape(m[e]);
                i.asModule(t + "!" + e, "define(function () { return '" + o + "';});\n")
            }
        },
        writeFile: function(t, e, i, s, o) {
            var r = n.parseName(e),
                a = r.ext ? "." + r.ext : "",
                c = r.moduleName + a,
                l = i.toUrl(r.moduleName + a) + ".js";
            n.load(c, i, function(e) {
                var i = function(t) {
                    return s(l, t)
                };
                i.asModule = function(t, e) {
                    return s.asModule(t, l, e)
                },
                n.write(t, c, i, o)
            }, o)
        }
    }, "node" === _.env || !_.env && "undefined" != typeof process && process.versions && process.versions.node && !process.versions["node-webkit"] && !process.versions["atom-shell"] ? (s = require.nodeRequire("fs"), n.get = function(t, e, i) {
        try {
            var n = s.readFileSync(t, "utf8");
            "\ufeff" === n[0] && (n = n.substring(1)),
            e(n)
        } catch (t) {
            i && i(t)
        }
    }) : "xhr" === _.env || !_.env && n.createXhr() ? n.get = function(t, e, i, s) {
        var o,
            r = n.createXhr();
        if (r.open("GET", t, !0), s)
            for (o in s)
                s.hasOwnProperty(o) && r.setRequestHeader(o.toLowerCase(), s[o]);
        _.onXhr && _.onXhr(r, t),
        r.onreadystatechange = function(n) {
            var s,
                o;
            4 === r.readyState && (s = r.status || 0, s > 399 && s < 600 ? (o = new Error(t + " HTTP status: " + s), o.xhr = r, i && i(o)) : e(r.responseText), _.onXhrComplete && _.onXhrComplete(r, t))
        },
        r.send(null)
    } : "rhino" === _.env || !_.env && "undefined" != typeof Packages && "undefined" != typeof java ? n.get = function(t, e) {
        var i,
            n,
            s = "utf-8",
            o = new java.io.File(t),
            r = java.lang.System.getProperty("line.separator"),
            a = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(o), s)),
            c = "";
        try {
            for (i = new java.lang.StringBuffer, n = a.readLine(), n && n.length() && 65279 === n.charAt(0) && (n = n.substring(1)), null !== n && i.append(n); null !== (n = a.readLine());)
                i.append(r),
                i.append(n);
            c = String(i.toString())
        } finally {
            a.close()
        }
        e(c)
    } : ("xpconnect" === _.env || !_.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (o = Components.classes, r = Components.interfaces, Components.utils.import("resource://gre/modules/FileUtils.jsm"), a = "@mozilla.org/windows-registry-key;1" in o, n.get = function(t, e) {
        var i,
            n,
            s,
            c = {};
        a && (t = t.replace(/\//g, "\\")),
        s = new FileUtils.File(t);
        try {
            i = o["@mozilla.org/network/file-input-stream;1"].createInstance(r.nsIFileInputStream),
            i.init(s, 1, 0, !1),
            n = o["@mozilla.org/intl/converter-input-stream;1"].createInstance(r.nsIConverterInputStream),
            n.init(i, "utf-8", i.available(), r.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),
            n.readString(i.available(), c),
            n.close(),
            i.close(),
            e(c.value)
        } catch (t) {
            throw new Error((s && s.path || "") + ": " + t)
        }
    }), n
}),
define("text!core/../../VERSION", [], function() {
    return "9.1.0-ha\n"
}),
define("core/src/bifocal", ["require", "common", "gala", "./network", "./journal", "dervish/src/urls", "text!../../../VERSION"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype,
        s = window,
        o = document,
        r = "-odread-",
        a = t("gala"),
        c = t("./network"),
        l = t("./journal");
    t("dervish/src/urls");
    return n.$init = function() {
        this.journal = new l,
        this.root = o.documentElement,
        this.elements = {},
        this.objects = {},
        this.d = this._decodeDervishData(),
        this.version = t("text!../../../VERSION").trim(),
        this.events = a,
        this.network = new c,
        this.map = e.excise(this.d, "b") || {},
        this.state = this._mapToState(this.map),
        !this._verifyEnvironment()
    }, n.run = function(t) {
        t.runsheet.each(function(e, i) {
            var n = t[i];
            "function" == typeof n ? a.listen(e, n) : console.warn('[BIFOCAL] error in runsheet: ["%s","%s"]', e, i)
        }),
        e.excise(this, "d"),
        this._reveal()
    }, n._decodeDervishData = function() {
        var t = {};
        return e.each(["b", "u", "t"], function(i) {
            var n = e.excise(s, i + "Data");
            "function" != typeof n && (t[i] = n)
        }), t
    }, n._mapToState = function(t) {
        var e = {};
        t[r + "dev"] && (e.development = t[r + "dev"], delete t[r + "dev"]);
        var i = t[r + "msg-access"];
        return "undefined" == typeof i && (i = "f"), e.accessPercent = {
            s: .1,
            f: 1
        }[i] || Math.max(0, Math.min(i, 1)), e.buid = t[r + "buid"], e
    }, n._verifyEnvironment = function() {
        return this._verifyURL() && this._verifyStyles()
    }, n._verifyURL = function() {
        var t = e.excise(this.d, "u");
        if (!t)
            return !0;
        if ("/" != location.pathname)
            return !0;
        if (location.pathname + location.search == t)
            return !0;
        if ("function" != typeof history.replaceState || s.externalHost) {
            console.warn("[BIFOCAL] forcing redirect — history.replaceState unsupported.");
            try {
                location.replace(t)
            } catch (e) {
                location.href = t
            }
            return !1
        }
        return history.replaceState({}, "", t), !0
    }, n._verifyStyles = function() {
        var t = o.body.querySelector("#BIFOCAL-style-canary");
        if (t && t.offsetWidth)
            throw this.objects.shell && this.objects.shell.transmit("bifocal:failed"), "[BIFOCAL] Stylesheet failed to load";
        return t && t.parentNode.removeChild(t), !0
    }, n._reveal = function() {
        this._.interceptHandler = this._.interceptHandler || a.on("bifocal:intercept:continue", function() {
            setTimeout(this._reveal.bind(this), 0)
        }.bind(this)),
        a.dispatch("bifocal:intercept", {}, !0) && (a.off(this._.interceptHandler), delete this._.interceptHandler, a.dispatch("bifocal:reveal"))
    }, i
}),
define("core/src/runsheet", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.$init = function() {
        this.order = Array.prototype.slice.call(arguments)
    }, n.swapMethod = function(t, e) {
        var i = this._indexOfMethod(t);
        i >= 0 && (this.order[i][1] = e)
    }, n.removeMethods = function() {
        for (var t = Array.prototype.slice.call(arguments); t.length > 0;) {
            var e = this._indexOfMethod(t.shift());
            e >= 0 && this.order.splice(e, 1)
        }
    }, n.prepend = function() {
        this.order.unshift.apply(this.order, arguments)
    }, n.append = function() {
        this.order.push.apply(this.order, arguments)
    }, n.insertBefore = function() {
        var t = Array.prototype.slice.call(arguments),
            e = this._indexOfMethod(t.shift());
        t.unshift(e, 0),
        this.order.splice.apply(this.order, t)
    }, n.insertAfter = function() {
        var t = Array.prototype.slice.call(arguments),
            e = this._indexOfMethod(t.shift());
        t.unshift(e + 1, 0),
        this.order.splice.apply(this.order, t)
    }, n.each = function(t) {
        for (var e = 0, i = this.order.length; e < i; ++e)
            t(this.order[e][0], this.order[e][1])
    }, n._indexOfMethod = function(t) {
        for (var e = 0, i = this.order.length; e < i; ++e)
            if (this.order[e][1] == t)
                return e
    }, i
}),
define("core/src/theme", ["require", "common", "./bifocal", "./runsheet"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype,
        s = t("./bifocal"),
        o = t("./runsheet");
    return n.$init = function() {
        this._.features = [],
        this._.results = [],
        this.runsheet = new o
    }, n.addFeature = function(t, e) {
        if (this._.loaded) {
            var i = this._.features.indexOf(t);
            return i < 0 && (i = this._.features.length, this._.features.push(t)), this._.results[i] ? this._.results[i].feature : (this._.results[i] = {
                feature: t(this)
            }, this._.results[i].feature)
        }
        this._.features[e ? "unshift" : "push"](t)
    }, n.removeFeature = function(t) {
        return !!e.excise(this._.features, t)
    }, n.launch = function() {
        this._.loaded = !0;
        var t = window.BIF = new s;
        this.data = {},
        e.each(e.excise(t.d, "t"), function(t, i) {
            this.data[e.dasherize(t)] = i
        }.bind(this)),
        this.name = e.excise(this.data, "theme"),
        t.theme = this,
        e.each(this._.features, this.addFeature, this),
        t.run(this)
    }, i
}),
define("shibui/src/illustrator", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new();
    i.prototype;
    return i.REGISTRY = {}, i.add = function(t, e) {
        this.REGISTRY[t] = e
    }, i.graphic = function(t, i) {
        i = e.absorb(i, {});
        var n = this.REGISTRY[t];
        if (!n)
            throw "[SHIBUI] unknown graphic: " + t;
        n = this.substituteUniqueIds(n);
        var s = e.element({
                html: n
            }),
            o = s.querySelector("svg");
        o.parentNode.removeChild(o),
        i.parentNode && ("prepend" == i.pos && i.parentNode.firstChild ? i.parentNode.insertBefore(o, i.parentNode.firstChild) : i.parentNode.appendChild(o));
        var r = e.flatten([i.classes]).concat(["shibui-graphic"]);
        return o.setAttribute("class", r.join(" ")), o.querySelector("title") || (o.setAttribute("aria-hidden", "true"), o.setAttribute("data-decorative", "")), o
    }, i.pattern = function(t, i) {
        i = e.absorb(i, {});
        var n = this.REGISTRY[t];
        if (!n)
            throw "[SHIBUI] unknown graphic: " + t;
        var s = e.element({
            html: n
        });
        i.color && (e.each(s.querySelectorAll(".pattern-solid"), function(t) {
            t.style.fill = i.color
        }), e.each(s.querySelectorAll(".pattern-hollow"), function(t) {
            t.style.stroke = i.color
        }));
        var o = "data:image/svg+xml;base64," + btoa(s.innerHTML),
            r = e.element({
                parentNode: i.parentNode,
                classes: "shibui-pattern",
                pos: "prepend"
            });
        return r.style.setProperty("background-image", "url(" + o + ")"), r
    }, i.substituteUniqueIds = function(t) {
        var i = {};
        return t = t.replace(/\bid="([^"]+)"/g, function(t, n) {
            return i[n] = e.generateUUID(), 'id="' + i[n] + '"'
        }), e.each(i, function(e, i) {
            t = t.replace(new RegExp("#" + e, "g"), "#" + i)
        }), t
    }, i
}),
define("shibui/src/phrasebook", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new();
    i.prototype;
    return "function" == typeof Intl.__disableRegExpRestore && Intl.__disableRegExpRestore(), i.LOCALE = "en-NONE", i.TEMPLATES = {}, i.initialize = function(t, i) {
        this.LOCALE = t || this.LOCALE,
        this.TEMPLATES = i || this.TEMPLATES,
        document.documentElement.lang = t,
        e.DataClass.set(document.documentElement, "lang", t)
    }, i.text = function(t, i, n) {
        var s = this.TEMPLATES[this._normalizeLabel(t)];
        return "string" != typeof s ? e.try(n, "okIfMissing") ? void 0 : "⩻" + t + "⩼" : this._parseTemplate(s, i, n)
    }, i.number = function(t, i) {
        var n = this._toFormatterOptions(i);
        if (e.excise(n, "nth"))
            return this.numberToNth(t, n);
        if ("megabytes" == n.unit)
            return this.numberOfBytesToMegabytes(t);
        "string" == typeof t && (t = parseFloat(t));
        var s = e.excise(n, "_miss");
        return "number" != typeof t || isNaN(t) ? s || "[?]" : this._intl("NumberFormat", n).format(t)
    }, i.numberToNth = function(t, e) {
        if ("number" != typeof t)
            return "";
        if (t = t < 0 ? Math.ceil(t) : Math.floor(t), !t)
            return "#0";
        if (!this._isEnglish())
            return "#" + t;
        var i = this.number(t, e),
            n = i[i.length - 1],
            s = i.length > 1 && "1" == i[i.length - 2];
        return "1" != n || s ? "2" != n || s ? "3" != n || s ? i + "th" : i + "rd" : i + "nd" : i + "st"
    }, i.numberOfBytesToMegabytes = function(t) {
        var e = (t || 0) / 1048576;
        return e >= 100 ? e = Math.round(e) : e && (e = e.toFixed(1)), e ? this.text("units.megabytes", {
            N: e
        }) : "--"
    }, i.list = function(t, i) {
        var n = e.absorb(this._toFormatterOptions(i), {
            style: "long",
            type: "conjunction"
        });
        try {
            return this._intl("ListFormat", n).format(t)
        } catch (e) {
            return n.type = "unit", this._intl("ListFormat", n).format(t)
        }
    }, i.date = function(t, i) {
        if ("number" == typeof t && (t = new Date(t)), i = this._toFormatterOptions(i), e.excise(i, "relative"))
            return this.relativeDate(t, i);
        if (e.excise(i, "time"))
            return this.dateAndTime(t, i);
        var n = {
            day: "numeric",
            month: "short",
            year: "numeric"
        };
        e.absorb(i, n);
        var s = !!e.excise(n, "idiom");
        return n.locale || (n.locale = this.LOCALE, this._isEnglish() && !s && (n.locale = "en-GB")), this._intl("DateTimeFormat", n).format(t)
    }, i.time = function(t) {
        "number" == typeof t && (t = new Date(t));
        var i = {
                hour: "numeric",
                minute: "numeric"
            },
            n = !!e.excise(i, "idiom");
        if (this._isEnglish() && !n) {
            var s = this._intl("DateTimeFormat", i).format(t);
            return s.replace(" ", "").toLowerCase()
        }
        return t.toLocaleString(this.LOCALE, i)
    }, i.dateAndTime = function(t, i) {
        "number" == typeof t && (t = new Date(t));
        var n = {
            day: "numeric",
            month: "short",
            year: this._dateIsLessThanAYearAgo(t) ? void 0 : "numeric"
        };
        e.absorb(this._toFormatterOptions(i), n);
        var s = !!e.excise(n, "idiom");
        return this._isEnglish() && !s ? this.date(t, n) + ", " + this.time(t) : (n = e.absorb(n, {
            hour: "numeric",
            minute: "numeric"
        }), this.date(t, n))
    }, i.relativeDate = function(t, i) {
        if ("number" == typeof t && (t = new Date(t)), !(t instanceof Date))
            return "";
        i = this._toFormatterOptions(i);
        var n = new Date;
        return i.today !== !1 && t.getFullYear() == n.getFullYear() && t.getMonth() == n.getMonth() && t.getDate() == n.getDate() ? this.text("units.days.today") : !i.year && this._dateIsLessThanAYearAgo(t) ? this.date(t, e.absorb({
            year: void 0
        }, i)) : this.date(t, i)
    }, i.relativeTime = function(t, e) {
        var i = {
            numeric: "always"
        };
        return this._intl("RelativeTimeFormat", i).format(t, e)
    }, i._isEnglish = function(t) {
        return "en" == (t || this.LOCALE).split("-").shift()
    }, i._isMissingValue = function(t) {
        return e.isNullish(t)
    }, i._dateIsLessThanAYearAgo = function(t) {
        var e = new Date;
        return t.getFullYear() == e.getFullYear() || t.getTime() + 28512e6 > e.getTime()
    }, i._normalizeLabel = function(t) {
        try {
            return t.toLowerCase().replace(/[^a-z0-9\.\-]+/g, " ").trim().replace(/\s/g, "-")
        } catch (e) {
            console.warn("[PHRASEBOOK] could not normalize label:", t)
        }
    }, i._intl = function(t, i) {
        var n = e.excise(i || {}, "locale") || this.LOCALE,
            s = t + "?" + n;
        e.each(i, function(t, e) {
            s += "&" + t + "=" + e
        });
        var o = this.intlCache = this.intlCache || {};
        return o[s] = o[s] || new Intl[t](n, i)
    }, i._toFormatterOptions = function(t) {
        if ("string" == typeof t) {
            var i = {
                    true: !0,
                    false: !1,
                    null: null,
                    undefined: void 0
                },
                n = {},
                s = t.split(";");
            return e.each(s, function(t) {
                var e = t.split(":");
                if (1 == e.length)
                    n[e.shift()] = !0;
                else if (e.length) {
                    var s = e.shift(),
                        o = e.join(":");
                    i.hasOwnProperty(o) && (o = i[o]),
                    n[s] = o
                }
            }), n
        }
        return e.absorb(t, {})
    }, i._parseTemplate = function(t, i, n) {
        for (var s = !0; s;)
            s = !1,
            t = this._replaceNextSequence(t, function(t) {
                s = t.split(",");
                var o = {};
                o.identifier = s.shift().trim(),
                o.argument = (s.shift() || "").trim(),
                o.options = s.join(",").trim(),
                o.substitutions = i || {},
                o.value = o.substitutions[o.identifier],
                o.templateOptions = n;
                var r = this._processInstruction(o);
                if (e.try(n, "substitutionTags")) {
                    var a = "default" == o.argument && r == o.options;
                    r = ["<span ", 'data-sub="' + o.identifier + '" ', 'class="data-' + (a ? "un" : "") + 'subbed"', ">" + r + "</span>"].join("")
                }
                return r
            }.bind(this));
        return t.replace(/\\\{/g, "{").replace(/\\\}/g, "}")
    }, i._replaceNextSequence = function(t, e) {
        for (var i, n, s = 0, o = 0, r = !1; s < t.length;) {
            if (r)
                r = !1;
            else if ("\\" == t[s])
                r = !0;
            else if ("{" == t[s])
                o || (i = s),
                o += 1;
            else if ("}" == t[s] && (o -= 1, !o)) {
                n = s;
                break
            }
            s += 1
        }
        return "number" == typeof n ? [t.substring(0, i), e(t.substring(i + 1, n)) || "", t.substring(n + 1)].join("") : t
    }, i._processInstruction = function(t) {
        switch (t.argument) {
        case "number":
            return this.number(t.value, t.options);
        case "list":
            return this.list(t.value, t.options);
        case "date":
            return this.date(t.value, t.options);
        case "time":
            return this.time(t.value, t.options);
        case "plural":
            return this._handlePluralArgument(t);
        case "select":
            return this._handleSelectArgument(t);
        case "default":
            return this._handleDefaultArgument(t);
        default:
            return t.options = "", this._handleDefaultArgument(t)
        }
    }, i._handlePluralArgument = function(t) {
        var i = [];
        return this._isMissingValue(t.value) || (i.push("=" + t.value), e.each(t.substitutions, function(e, n) {
            n == t.value && e != t.identifier && i.push("=" + e)
        }), i.push(this._intl("PluralRules").select(t.value))), this._handleSelectArgument(t, i)
    }, i._handleSelectArgument = function(t, i) {
        for (var n, s = {}, o = t.options; o && o !== n;) {
            n = o;
            var r;
            o = this._replaceNextSequence(o, function(t) {
                return r = t, " }"
            });
            var a = o.split(/ }/);
            s[a.shift().trim()] = r,
            o = a.join(" }")
        }
        i = e.isList(i) ? i : [t.value];
        for (var c, l = 0, h = i.length; l < h && (this._isMissingValue(i[l]) || (c = s[i[l]], this._isMissingValue(c))); ++l)
            ;
        return this._isMissingValue(c) && (this._isMissingValue(t.value) || (c = s._pass), this._isMissingValue(c) && (c = s._miss || "")), this._parseTemplate(c, t.substitutions, t.templateOptions)
    }, i._handleDefaultArgument = function(t) {
        return this._isMissingValue(t.value) ? t.options || "" : "" + t.value
    }, i
}),
define("shibui/src/keys", ["require", "common", "gala"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype,
        s = t("gala");
    return n.KEYS = {
        BACKSPACE: 8,
        TAB: 9,
        RETURN: 13,
        ESC: 27,
        SPACE: 32,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        DELETE: 46,
        HOME: 36,
        END: 35,
        PAGEUP: 33,
        PAGEDOWN: 34,
        INSERT: 45,
        "?": 191,
        '"': 222,
        $: 52,
        "+": 187,
        "-": 189,
        PLUS: 61,
        MINUS: 173
    }, n.$init = function(t, e, i) {
        this._.shortcut = t,
        this._.definition = this._parseShortcut(this._.shortcut),
        this._.callback = e,
        this._.handlers = [],
        this.attach(i)
    }, n.attach = function(t) {
        t = t || document,
        this._.handlers.push({
            element: t,
            listener: s.on(t, this._.definition.keyEventType, this._onKeyEvent.bind(this, t))
        })
    }, n.detach = function(t) {
        var i = [];
        e.each(this._.handlers, function(e) {
            e.element == t ? e.listener.deafen() : i.push(e)
        }),
        this._.handlers = i
    }, n.on = function() {
        e.each(this._.handlers, function(t) {
            t.listener.listen()
        })
    }, n.off = function() {
        e.each(this._.handlers, function(t) {
            t.listener.deafen()
        })
    }, n._parseShortcut = function(t) {
        var e = {},
            i = t.split(" ");
        i[1] && i[1].match(/\d+ms/) ? (e.keyEventType = "keydown", e.keyEventDelay = parseFloat(i[1])) : e.keyEventType = "key" + (i[1] || "up");
        var n = i[0].match(/^([\w\-]+-)?(.+)$/),
            s = n ? n[2] : i[0];
        i = n && n[1] ? n[1].split("-") : [],
        ["alt", "ctrl", "meta", "cmd"].indexOf(s) >= 0 ? i.push(s) : (e.charCode = this.KEYS[s.toUpperCase()]) ? (e.keyCode = e.charCode, e.keyDesc = s) : 1 == s.length ? (e.charCode = s.charCodeAt(0), e.keyCode = s.toUpperCase().charCodeAt(0), e.keyDesc = s) : "#" == s[0] ? (e.charCode = parseInt(s.replace(/^#/, "")), e.keyCode = e.charCode, e.keyDesc = s) : "blur" == s && (e.keyEventType = "blur", e.keyDesc = s);
        for (var o; o = i.shift();)
            o = o.toLowerCase(),
            "shift" == o ? e.shiftKey = !0 : "alt" == o ? e.altKey = !0 : "ctrl" == o ? e.ctrlKey = !0 : "meta" != o && "cmd" != o || ("keydown" != e.keyEventType ? console.warn('[KEYS] "%s" key cannot be registered with "%s"', o, e.keyEventType) : e.metaKey = !0);
        return e
    }, n._matchDefinition = function(t) {
        var e = this._.definition;
        if ("keypress" == t.type) {
            var i = t.charCode || t.keyCode;
            if (e.charCode != i)
                return !1
        } else if (e.keyCode && e.keyCode != t.keyCode)
            return !1;
        return !!e.shiftKey == !!t.shiftKey && (!!e.altKey == !!t.altKey && (!!e.ctrlKey == !!t.ctrlKey && !!e.metaKey == !!t.metaKey))
    }, n._onKeyEvent = function(t, e) {
        if (this._.delaying && !this._matchDefinition(e))
            return this._.delaying.cleanup();
        if (!e.defaultPrevented && this._matchDefinition(e))
            if (e.m || (e.m = {}), e.m.keyDef = this._.definition, this._.definition.keyEventDelay) {
                var i = function() {
                    this._.delaying && (clearTimeout(this._.delaying.timer), s.off(this._.delaying.upHandler), s.off(this._.delaying.cancelHandler), delete this._.delaying)
                }.bind(this);
                this._.delaying = {
                    cleanup: i,
                    upHandler: s.on(t, "keyup", i),
                    cancelHandler: s.on("keystroke:cancel", i),
                    timer: setTimeout(function() {
                        i(),
                        this._.callback(e)
                    }.bind(this), this._.definition.keyEventDelay)
                }
            } else
                this._.callback(e)
    }, i
}),
define("shibui/src/key-manager", ["require", "common", "gala", "./keys"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype,
        s = t("gala"),
        o = t("./keys");
    return n.KEY_ENTRY_TAGNAMES = ["INPUT", "TEXTAREA", "SELECT"], n.$init = function(t) {
        this._.element = t || document,
        this._.document = this._.element.ownerDocument,
        !this._.document && this._.element.documentElement ? this._.document = this._.element : this._.document = document,
        this._.bindings = [],
        this._disableBindingsOnFieldFocus()
    }, n.listen = function() {
        if (delete this._.deafenReason, clearTimeout(this._.listenTimer), this._.document.activeElement) {
            var t = this._.document.activeElement.tagName.toLowerCase();
            if ("input" == t || "textarea" == t || "select" == t)
                return
        }
        e.each(this._.bindings, function(t) {
            t.on()
        })
    }, n.deafen = function(t) {
        this._.deafenReason = t || "intentional",
        clearTimeout(this._.listenTimer),
        e.each(this._.bindings, function(t) {
            t.off()
        })
    }, n.addBinding = function(t, e, i) {
        var n = e;
        i && (i.stop || i.global) && (n = function(t) {
            try {
                e()
            } catch (t) {
                if ("invalid" == t.key)
                    return;
                throw t
            }
            i.stop && s.stop(t),
            i.global && document.activeElement.blur()
        }.bind(this));
        var r = new o(t, n, this._.element);
        return this._.bindings.push(r), r
    }, n.removeBinding = function(t) {
        t.off(),
        e.excise(this._.bindings, t)
    }, n._disableBindingsOnFieldFocus = function() {
        s.on(document, "focus", function(t) {
            var i = e.try(document.activeElement, "tagName");
            if (this.KEY_ENTRY_TAGNAMES.indexOf(i) >= 0) {
                if (this._.deafenReason)
                    return;
                this.deafen("field-focus")
            }
        }.bind(this), !0),
        s.on(document, "blur", function(t) {
            if ("field-focus" == this._.deafenReason) {
                var i = e.try(document.activeElement, "tagName");
                this.KEY_ENTRY_TAGNAMES.indexOf(i) < 0 && (delete this._.deafenReason, clearTimeout(this._.listenTimer), this._.listenTimer = setTimeout(this.listen.bind(this), 500))
            }
        }.bind(this), !0)
    }, i
}),
define("shibui/shibui", ["require", "./src/illustrator", "./src/phrasebook", "./src/key-manager"], function(t) {
    var e = {
        Illustrator: t("./src/illustrator"),
        Phrasebook: t("./src/phrasebook"),
        KeyManager: t("./src/key-manager")
    };
    return e
}),
define("shibui", ["shibui/shibui"], function(t) {
    return t
}),
define("shibui/src/view", ["require", "common", "gala", "./illustrator", "./phrasebook"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype,
        s = t("gala"),
        o = t("./illustrator"),
        r = t("./phrasebook");
    return n.$init = function(t) {
        t && this.impart(t)
    }, n.impart = function(t, e) {
        var n = this._._extraction;
        if (delete this._._extraction, t || n) {
            this._impartViews(n),
            this._listenHandlers(),
            this._prepare();
            var s = {
                view: this,
                dom: this.dom
            };
            if (t instanceof i && (s.parentView = t, t = t.dom.appendix || t.dom.root), t && t.firstChild && "prepend" == e)
                t.insertBefore(this.dom.root, t.firstChild);
            else if (t)
                t.parentNode && "before" == e ? t.parentNode.insertBefore(this.dom.root, t) : t.parentNode && "after" == e ? t.nextSibling ? t.parentNode.insertBefore(this.dom.root, t.nextSibling) : t.parentNode.appendChild(this.dom.root) : t.appendChild(this.dom.root);
            else if (n) {
                var o = n.parent,
                    r = n.prior;
                r && r.nextSibling && r.parentNode == o ? o.insertBefore(this.dom.root, r.nextSibling) : n.prior || !o.firstChild ? o.appendChild(this.dom.root) : o.insertBefore(this.dom.root, o.firstChild)
            } else
                this.isInDocument() || console.trace("[VIEW] cannot impart to null node:", this.dom.root.className);
            return this.access(this.dom.root), this._dispatch("view:impart", s), this.dom
        }
    }, n.extract = function() {
        if (this._._extraction)
            return this.dom;
        this._dispatch("view:extract", {
            view: this,
            dom: this.dom
        }),
        this._deafenHandlers();
        var t = e.try(this.dom, "root.parentNode");
        return t && (this._._extraction = {
            parent: t,
            prior: this.dom.root.previousSibling,
            views: this._extractViews()
        }, t.removeChild(this.dom.root)), this.dom
    }, n.isInDocument = function() {
        return e.try(this, "dom.root") && e.isInDOM(this.dom.root)
    }, n.appendChild = function(t) {
        this._prepare(),
        (this.dom.appendix || this.dom.root).appendChild(t)
    }, n.access = function(t, i) {
        if (!e.isElement(t) && (i = t, t = e.try(this.dom, "root"), !e.isElement(t)))
            return console.warn("[VIEW] cannot assign access", t, i);
        i || (i = this._attr(t, "data-access")),
        "string" == typeof i && (i = i.split(/\s+/)),
        i = e.compact(e.flatten([i])),
        e.excise(i, "normal");
        var n = [];
        delete t._accessAttributes,
        e.each(i, function(i) {
            i && "string" == typeof i ? n.push(i) : t._accessAttributes = e.absorb(i, t._accessAttributes || {})
        }),
        this._attr(t, "data-access", n.join(" ") || null);
        for (var s, o = [], r = t.parentNode; e.isElement(r);)
            (s = this._attr(r, "data-access")) && (o = o.concat(s.split(/\s+/))),
            r = r.parentNode;
        var a = function(t, i) {
            s = this._attr(t, "data-access") || "",
            s && (i = s.split(/\s+/).concat(i));
            var n = this._attr(t, "role");
            s.indexOf("spoken") >= 0 ? this._attr(t, "role", n || "text") : "text" == n && this._attr(t, "role", null);
            var o = e.among("inert", i) || e.among("visual", i);
            return o = o || t.hasAttribute("data-decorative"), this._attr(t, "aria-hidden", o ? "true" : null), this._attr(t, "disabled", e.try(t._accessAttributes, "disabled")), this._attr(t, "tabindex", e.try(t._accessAttributes, "tabindex")), this._isInteractiveElement(t) ? e.among("inert", i) ? (t == document.activeElement && t.blur(), this._attr(t, "disabled", !0), this._attr(t, "tabindex", -1)) : e.among("visual", i) && (t == document.activeElement && t.blur(), this._attr(t, "disabled", null), this._attr(t, "tabindex", -1)) : t.classList.contains("native-scrollable") && (e.among("inert", i) || e.among("visual", i)) && this._attr(t, "tabindex", -1), e.each(t._accessAttributes, this._attr.bind(this, t)), t.namespaceURI == document.documentElement.namespaceURI && e.each(t.children, function(t) {
                a(t, i)
            }), t
        }.bind(this);
        return a(t, o)
    }, n.on = function(t, e) {
        var i = null === this._.dispatcher,
            n = s.on(this.enableEvents(), t, e);
        return i && this.disableEvents(), n
    }, n.enableEvents = function() {
        return this._.dispatcher ? this._.dispatcher : this._.disabledDispatcher ? (this._.dispatcher = this._.disabledDispatcher, void delete this._.disabledDispatcher) : e.try(this, "dom.root") ? this._.dispatcher = this.dom.root : this._.dispatcher = this._element()
    }, n.disableEvents = function() {
        return this._.disabledDispatcher = this._.dispatcher || this._.disabledDispatcher, this._.dispatcher = null
    }, n._dispatch = function(t, e, i) {
        return !this._.dispatcher || s.dispatch(this._.dispatcher, t, e, i)
    }, n._prepare = function() {
        return this.dom || (this.dom = {
            root: this._.dispatcher || this._element()
        }, this._deafenHandlers(), this.handlers = {}, "function" == typeof this._beforeLayout && this._beforeLayout(this.dom), this._layout(this.dom), "function" == typeof this._afterLayout && this._afterLayout(this.dom), console.assert(this.dom, "[VIEW] this.dom unassigned after _layout"), console.assert(this.dom.root, "[VIEW] this.dom.root unassigned after _layout"), "function" == typeof this._beforeListen && this._beforeListen(this.dom), this._listen(this.handlers, this.dom), "function" == typeof this._afterListen && this._afterListen(this.handlers, this.dom), this.dom.root._view = this), this.dom
    }, n._extractViews = function() {
        if (!this.dom || !this.dom.root)
            return [];
        var t = [],
            i = function(t) {
                if (t.children.length) {
                    var i = Array.prototype.slice.call(t.children, 0);
                    e.each(i.reverse(), n)
                }
            },
            n = function(e) {
                return e._view ? (e._view.extract(), void t.push(e._view)) : i(e)
            };
        return i(this.dom.root), t
    }, n._impartViews = function(t) {
        for (var i = e.try(t, "views"); i && i.length;) {
            var n = i.length;
            if (i = e.select(i, function(t) {
                var e = t._._extraction;
                if (e)
                    return e.prior && !e.prior.parentNode ? t : void t.impart()
            }), i.length >= n)
                break
        }
    }, n._listenHandlers = function() {
        e.each(this.handlers, function(t, e) {
            s.on(e)
        })
    }, n._deafenHandlers = function() {
        e.each(this.handlers, function(t, e) {
            s.off(e)
        })
    }, n._layout = function(t) {}, n._listen = function(t) {}, n._element = function(t, i, n) {
        arguments[0] && "function" == typeof arguments[0].appendChild ? arguments[1] && "string" != typeof arguments[1] && (n = arguments[1], i = void 0) : arguments[0] && (n = arguments[0], t = i = void 0),
        n = n || {},
        n.parentNode = n.parentNode || t,
        n.classes = [i, n.classes],
        n = this._normalizeElementOptions(n);
        var s = e.excise(n, "factory"),
            r = s.graphic ? o.graphic(e.excise(s, "graphic"), s) : e.element(s);
        return this._applyNormalizedElementOptions(r, n)
    }, n._normalizeElementOptions = function(t) {
        var i = {};
        if (!t)
            return i;
        t = e.absorb(t, {}),
        i.factory = {
            tag: e.excise(t, "tag"),
            graphic: e.excise(t, "graphic") || e.excise(t, "icon"),
            namespace: e.excise(t, "namespace"),
            parentNode: e.excise(t, "parentNode"),
            pos: e.excise(t, "pos")
        },
        i.textData = {
            html: e.excise(t, "html"),
            label: e.excise(t, "label"),
            substitutions: e.excise(t, "substitutions"),
            substitutionTags: e.excise(t, "substitutionTags"),
            morph: e.excise(t, "morph"),
            enliven: e.excise(t, "enliven"),
            wrapper: e.excise(t, "wrapper"),
            visual: e.excise(t, "visual"),
            spoken: e.excise(t, "spoken")
        },
        i.access = e.excise(t, "access");
        var n = e.excise(t, "classes");
        "string" == typeof n && (n = n.split(/\s+/)),
        e.isList(n) && (i.classes = e.unique(e.compact(e.flatten(n))).join(" ").trim()),
        i.onTap = e.excise(t, "button");
        var s = e.excise(t, "link");
        if (i.attributes = e.excise(t, "attributes") || {}, !i.attributes.id) {
            var o = e.excise(t, "id");
            o === !0 ? i.attributes.id = this._generateIdAttribute(i.classes) : "string" == typeof o && (i.attributes.id = o)
        }
        var r = e.excise(t, "landmark") || [];
        return r[0] && (i.attributes["aria-label"] = this._phrase(r[0])), r[1] && (i.attributes["aria-roledescription"] = this._phrase(r[1])), e.absorb(t, i.attributes), i.factory.graphic ? (i.classes = ((i.classes || "") + " icon").trim(), i.attributes.alt = i.attributes.alt || this._phrase(i.textData), i.attributes["aria-label"] = i.attributes["aria-label"] || i.attributes.alt) : i.onTap ? (i.factory.tag = "button", i.attributes.type = i.attributes.type || "button") : s && (i.factory.tag = "a", "string" != typeof s && (console.warn("[VIEW] link is not a string", s), "function" == typeof s && (i.attributes.role = "button", i.onTap = s), s = "#"), s.match(/^#/) || s.match(/^\w+:/) ? i.attributes.href = s : i.attributes.href = "/" + s.replace(/^\//, "")), (i.onTap || s) && (i.classes = ((i.classes || "") + " halo").trim()), i
    }, n._applyNormalizedElementOptions = function(t, i) {
        return e.applyElementOptions(t, i.factory), i.textData && this._textify(t, i.textData), i.classes && this._classify(t, i.classes), "function" == typeof i.onTap && this._buttonify(t, i.onTap), e.each(i.attributes, this._attr.bind(this, t)), i.access && this.access(t, i.access), t
    }, n._swapElement = function(t, i) {
        var n;
        e.each(this.dom, function(i, s) {
            s == t && (n = i, e.breakIteration())
        });
        var s = this._element(i);
        t.parentNode && t.parentNode.insertBefore(s, t),
        e.each(Array.prototype.slice.call(t.childNodes, 0), function(t) {
            s.appendChild(t)
        }),
        t.parentNode && t.parentNode.removeChild(t),
        s.className = t.className;
        var o = t.getAttribute("data-access");
        return o && this.access(s, o), t._view && (s._view = t._view), n && (this.dom[n] = s), s
    }, n._attr = function(t, i, n) {
        var s = Array.prototype.slice.call(arguments);
        return e.isElement(s[0]) || (s.unshift(e.try(this.dom, "root")), e.isElement(s[0])) ? (s.length >= 3 && (s[2] = "undefined" != typeof s[2] ? s[2] : null, s[2] === !0 ? s[2] = "" : s[2] === !1 && (s[2] = null)), t = s[0], i = s[1], n = s[2], i ? (null === n ? t.removeAttribute(i) : "undefined" != typeof n && t.setAttribute(i, n), t.getAttribute(i)) : console.warn("[VIEW] attr() -- missing name", s)) : console.warn("[VIEW] pass an element to _attr()", s[0])
    }, n._build = function() {
        if ("string" != typeof arguments[0]) {
            var t = Array.prototype.slice.call(arguments),
                n = t.shift(),
                s = t.shift(),
                o = t.shift();
            if (e.isList(t[0]) && (t = t.shift()), s && t.unshift(s), t.unshift(o || ""), t[0])
                for (var r = 1, a = t.length; r < a; ++r)
                    "string" == typeof t[r] && (t[r] = " " + t[r]);
            return console.warn("[VIEW] legacy _build():", t), e.absorb(this._build.apply(this, t), n)
        }
        var c = [],
            l = 0,
            h = null,
            u = [],
            d = {},
            p = Array.prototype.slice.call(arguments),
            f = p[0].replace(/\b\s+.*$/, "");
        e.try(p[1], "extending") && (d = e.excise(p[1], "extending"), p[1].element || p[1].parentNode || (p[1].element = d.root), p[1].extensionClass ? f = e.excise(p[1], "extensionClass") : d.root.classList[0] ? f = d.root.classList[0] : p[0] = p[0].replace(f, "root"));
        for (var m = f ? f + "-" : ""; p && p.length;) {
            var _ = p.shift();
            console.assert("string" == typeof _, "[VIEW] cannot build element with non-string name:", _);
            var g = ((_.match(/^\s+/) || [])[0] || "").length,
                b = {};
            if ("string" != typeof p[0] && (e.isElement(p[0]) ? b.element = p.shift() : "function" == typeof p[0] ? b.construct = p.shift() : e.absorb(p.shift(), b)), e.excise(b, "extending") && console.warn('[VIEW] ignored child `extending`: "%s"', _), e.excise(b, "skip"))
                (null === h || h > g) && (h = g);
            else if (!(null !== h && g > h)) {
                h = null;
                var v = [];
                b.classes && v.push(b.classes),
                _ = _.replace(/<([\w]+)>/, function(t, e) {
                    return "button" == e ? b.button = b.button || "tag" : b.tag = b.tag || e, ""
                }),
                _ = _.replace(/\{([\w-\.]+)\}/, function(t, e) {
                    return b.label = b.label || e, ""
                }),
                _ = _.replace(/#([\w-]+)/, function(t, e) {
                    return b.id = b.id || e, ""
                }),
                _ = _.replace(/\.([\w-\.]+)/g, function(t, e) {
                    return v.push(e.split(".").join(" ")), ""
                });
                var y = null,
                    k = null;
                if (d.root && d.root != b.element ? _ = _.replace(/([\w-]+)/, function(t, i) {
                    return k = e.dasherize(i), y = e.camelize(k), v.unshift(m + k), ""
                }) : f && v.unshift(f), b.classes = v.join(" "), b.parentNode = b.parentNode || c[g], g && console.assert("function" == typeof e.try(b.parentNode, "appendChild"), ["[VIEW] invalid build stack depth: ", "  depth: %s => newDepth: %s", "  elementInTree:%o", "  parentNode:%o", "  stack:%o", "  view:%o"].join("\n"), l, g, _.trim() || null, b.parentNode || null, c, this), b.construct) {
                    var w = [b.parentNode];
                    if (b.with && (e.isList(b.with) || (b.with = [b.with]), w = w.concat(b.with)), e.try(b.construct, "prototype") instanceof i) {
                        var x = function() {
                            return b.construct.apply(this, w)
                        };
                        x.prototype = b.construct.prototype,
                        d[y] = new x
                    } else
                        d[y] = b.construct.apply(this, w);
                    console.assert(e.isElement(d[y]) || d[y] instanceof i, "[VIEW] options.construct() did not return an element or view:", y),
                    c[g + 1] = d[y]
                } else {
                    var C = null;
                    if (b.button === !0) {
                        var I = ["on", "Tap"];
                        y && I.push(y),
                        C = this._handlerMethodName(I)
                    }
                    var T = {
                            label: e.excise(b, "labeling") || e.excise(b, "labelling"),
                            description: e.excise(b, "describing")
                        },
                        S = e.excise(b, "element");
                    if (S) {
                        var B = this._normalizeElementOptions(b);
                        this._applyNormalizedElementOptions(S, B)
                    } else
                        S = S || this._element(b);
                    d.root ? y && (d[y] = S) : d.root = S,
                    C && (this.handlers[C] = this._buttonify(S, this[C].bind(this))),
                    T.label && u.push({
                        element: S,
                        targetName: e.camelize(T.label),
                        attribute: "aria-labelledby"
                    }),
                    T.description && u.push({
                        element: S,
                        targetName: e.camelize(T.description),
                        attribute: "aria-describedby"
                    }),
                    c[g + 1] = S
                }
            }
        }
        return e.each(u, function(t) {
            t.element.id = t.element.id || "aria-" + e.generateUUID().replace(/-.*/, ""),
            d[t.targetName] ? this._attr(d[t.targetName], t.attribute, t.element.id) : console.warn("[VIEW] no such target for ARIA:", t)
        }, this), d
    }, n._generateIdAttribute = function(t) {
        var n = t ? e.flatten([t]).join(" ").split(/\s+/)[0] : "shibui-element";
        i.ID_COUNTS = i.ID_COUNTS || {},
        i.ID_COUNTS[n] = (i.ID_COUNTS[n] || 0) + 1;
        var s = "0000",
            o = "" + i.ID_COUNTS[n];
        return o = s.slice(0, Math.max(0, s.length - o.length)) + o, n + "-" + o
    }, n._handle = function(t, i) {
        var n,
            o = function() {
                return console.assert("function" == typeof this[n], "[VIEW] no such handler method:", n, this), this[n].bind(this)
            }.bind(this);
        if (!i)
            return n = this._handlerMethodName(["on", t]), this.handlers[n] = s.on(t, o());
        if (i == this)
            return n = this._handlerMethodName(["on", t, "Self"]), this.handlers[n] = this.on(t, o());
        var r = e.select(this.dom, function(r, a) {
            if (a == i) {
                if (n = this._handlerMethodName(["on", t, r]), e.isElement(a))
                    return this.handlers[n] = s.on(a, t, o());
                if ("function" == typeof a.on)
                    return this.handlers[n] = a.on(t, o());
                console.warn("[VIEW] no way to listen for handler:", r, t, a),
                e.breakIteration()
            }
        }, this);
        return n ? r : void console.assert(n, "[VIEW] no target for handler:", t, i)
    }, n._handleTap = function(t) {
        var i,
            n;
        t ? e.each(this.dom, function(s, o) {
            o == t && (i = this._handlerMethodName(["on", "Tap", s]), n = o, e.breakIteration())
        }, this) : (i = this._handlerMethodName(["on", "Tap"]), n = this.dom.root),
        console.assert(i && n, "[SHIBUI] could not _handleTap", t),
        this.handlers[i] = this._buttonify(n, this[i].bind(this))
    }, n._handlerMethodName = function(t) {
        var i = [];
        e.each(t, function(t) {
            i = i.concat(t.split(/[\:\-\_]/))
        });
        var n = "_" + e.camelize(i.join("_"));
        return console.assert("function" == typeof this[n], "[SHIBUI] handler method does not exist", n), n
    }, n._stylePrefix = function(t, i, n) {
        e.prefixProperty(t.style, i, n)
    }, n._styleTransform = function(t, i) {
        e.prefixProperty(t.style, "transform", i)
    }, n._classify = function(t, i, n) {
        t && t.classList && ("string" == typeof i && (i = i.split(/\s+/)), e.isList(i) && ("boolean" != typeof n && (n = !0), e.each(i, function(e) {
            t.classList.toggle(e, n)
        })))
    }, n._declassify = function(t, e) {
        e ? this._classify(t, e, !1) : this._attr(t, "class", null)
    }, n._semaphore = function(t, i) {
        return 1 == arguments.length ? e.DataClass.get(this.dom.root, t) : i ? (e.DataClass.set(this.dom.root, t, i), i.toString()) : void e.DataClass.clear(this.dom.root, t)
    }, n._focusElement = function(t, i) {
        if ("function" != typeof e.try(t, "focus"))
            return !1;
        if (!e.isInDOM(t))
            return !1;
        if ("true" == this._attr(t, "aria-hidden"))
            return !1;
        var n = e.excise(i || {}, "delay");
        return "number" == typeof n ? (this._defer("focus", this._focusElement.bind(this, t, i), n), !0) : (this._defer("focus"), this._attr(t, "tabindex") || this._isInteractiveElement(t) || this._attr(t, "tabindex", -1), t.focus(i), !0)
    }, n._focusFirstInvalidity = function(t) {
        var i = t.querySelector(":invalid:not(form)");
        return i ? (i = e.elementClosest(i, ".shibui-form-field") || i, this._focusElement(i) && i) : null
    }, n._isInteractiveElement = function(t) {
        if (!e.isElement(t))
            return !1;
        var i = ["BUTTON", "INPUT", "TEXTAREA", "SELECT", "IFRAME", "DETAILS", "SUMMARY"];
        return !!(e.among(t.tagName.toUpperCase(), i) || this._attr(t, "src") || this._attr(t, "href"))
    }, n._hasInteractiveChildren = function(t) {
        var i = !1;
        return e.each(t.querySelectorAll("*"), function(t) {
            this._isInteractiveElement(t) && (i = !0, e.breakIteration())
        }, this), i
    }, n._swapInteractiveElement = function(t, i) {
        var n = e.excise(i, "tag") || "div";
        if (i.button && "BUTTON" == t.tagName)
            return this._buttonify(t, i.button), t;
        if (i.link && "A" == t.tagName)
            return this._linkify(t, i.link), t;
        if (!i.button && !i.link) {
            if (t.tagName == n.toUpperCase())
                return t;
            e.absorb({
                tag: n
            }, i)
        }
        return this._swapElement(t, i)
    }, n._linkify = function(t, e) {
        if ("A" == t.tagName)
            if ("string" == typeof e && e) {
                var i = e;
                e.match(/^#/) || e.match(/^\w+:/) || (i = "/" + e.replace(/^\//, "")),
                this._attr(t, "href", i),
                "text" == this._attr(t, "role") && this._attr(t, "role", null)
            } else
                this._attr(t, "href", null),
                this._attr(t, "role", "text");
        else
            this._swapInteractiveElement(t, {
                link: e
            })
    }, n._buttonify = function(t, e, i) {
        if (this._unbuttonify(t), e) {
            var n = function(t) {
                e(t),
                s.stop(t)
            };
            return t.__onTapHandlers = s.onTap(t, n, i)
        }
    }, n._unbuttonify = function(t) {
        t.__onTapHandlers && (s.off(t.__onTapHandlers), delete t.__onTapHandlers)
    }, n._formify = function(t, e) {
        t.__onSubmitHandler && s.off(t.__onSubmitHandler);
        var i = function(t) {
            s.stop(t),
            e(t)
        };
        t.__onSubmitHandler = s.on(t, "submit", i)
    }, n._enliven = function(t, i, n) {
        var s = t.querySelectorAll('[href="' + i + '"]');
        return e.each(s, function(t) {
            this._classify(t, "halo", n !== !1),
            n === !1 ? this._attr(t, "href", null) : "string" == typeof n ? this._linkify(t, n) : "function" == typeof n && this._buttonify(t, n)
        }, this), s.length && "text" == this._attr(t, "role") && this._attr(t, "role"), s
    }, n._textify = function(t, i) {
        if (t) {
            if ("string" == typeof i)
                i = {
                    label: i
                };
            else if (e.isList(i)) {
                var n = i;
                i = {},
                e.each(n, function(t) {
                    "string" == typeof t ? (i.label = i.label || [], i.label.push(t)) : t.label ? (i.label = i.label || [], t = e.absorb(t, {}), i.label.push(e.excise(t, "label")), e.absorb(t, i)) : t.html && !i.label ? (i.html ? i.html += " " + t.html : i.html = t.html, t.enliven && (i.enliven = e.absorb(t.enliven, i.enliven || {}))) : (console.warn("[VIEW] unhandled array of strings", n), e.breakIteration())
                })
            } else
                i || (i = {
                    html: ""
                });
            if (i.morph && t.innerHTML) {
                var s = "number" == typeof i.morph ? i.morph : 100,
                    o = e.absorb({
                        morph: !1
                    }, e.absorb(i, {})),
                    r = this._element(o);
                return void (t.innerHTML != r.innerHTML && (t._ = t._ || {}, t._.morphing = !0, this._classify(t, "shibui-morphable-text"), e.defer(t, "morph", function() {
                    this._classify(t, "shibui-morphing-text"),
                    e.defer(t, "morph", function() {
                        for (t.innerHTML = ""; r.firstChild;)
                            t.appendChild(r.firstChild);
                        e.defer(t, "morph", function() {
                            this._declassify(t, "shibui-morphing-text"),
                            delete t._.morphing
                        }.bind(this), s)
                    }.bind(this), s)
                }.bind(this))))
            }
            if (t._ && t._.morphing && (e.defer(t, "morph"), this._declassify(t, "shibui-morphing-text")), "undefined" != typeof i.spoken) {
                i.spoken && ("string" == typeof i.spoken && (i.spoken = {
                    label: i.spoken
                }), i.spoken.substitutions || (i.spoken.substitutions = i.substitutions));
                var a;
                i.spoken && (a = i.spoken.html || this._phrase(i.spoken));
                var c,
                    l;
                "IMG" == t.tagName ? (c = t, this._attr(c, "alt", a)) : this._isInteractiveElement(t) && "A" != t.tagName ? (c = t, a ? a != this._attr(c, "aria-label") && this._attr(c, "aria-label", a) : this._attr(c, "aria-label", null)) : (2 == t.children.length && t.firstChild.matches('[data-access~="spoken"]') && t.lastChild.matches('[data-access~="visual"]') ? (c = t.firstChild, l = t.lastChild) : a && (c = this._element({
                    tag: "span",
                    access: "spoken"
                }), l = this._element({
                    tag: "span",
                    access: "visual",
                    html: t.innerHTML
                }), t.innerHTML = "", t.appendChild(c), t.appendChild(l)), !a && l ? (t.innerHTML = l.innerHTML, l = c = null) : a && c && (c.innerHTML = a, t = l))
            }
            return i = i.visual || i, "string" == typeof i && (i = {
                label: i
            }), i.html && i.html.nodeType && i.html.nodeName ? (t.innerHTML = "", t.appendChild(i.html)) : "function" == typeof i.html ? (t.innerHTML = "", i.html = i.html(t)) : "string" != typeof i.html && ("undefined" == typeof i.wrapper && (i.wrapper = "span"), i.html = this._phrase(i)), "string" == typeof i.html && (i.wrapper && (i.html = "<" + i.wrapper + ">" + i.html + "</" + i.wrapper + ">"), t.innerHTML != i.html && (t.innerHTML = i.html, "span" == i.wrapper && t.firstElementChild && !this._hasInteractiveChildren(t.firstElementChild) && (this._attr(t.firstElementChild, "role", "text"), t.firstElementChild._accessAttributes = {
                role: "text"
            }))), e.each(i.enliven, this._enliven.bind(this, t)), t
        }
    }, n._phrase = function(t) {
        var i = e.flatten(Array.prototype.slice.call(arguments, 0));
        if (i.length) {
            if (i.length > 1) {
                var n = [];
                return e.each(i, function(t) {
                    var e = this._phrase(t);
                    "string" == typeof e && n.push(e)
                }, this), n.join(" ")
            }
            if (t = i[0], t = "string" == typeof t ? {
                label: t
            } : e.absorb(t, {}), "string" == typeof t.html)
                return t.html;
            if (e.isList(t.label)) {
                var n = [];
                return e.each(t.label, function(i) {
                    var s = e.absorb({
                            label: i
                        }, e.absorb(t, {})),
                        o = this._phrase(s);
                    "string" == typeof o && n.push(o)
                }, this), n.join(" ")
            }
            return t.label ? r.text(e.excise(t, "label"), e.excise(t, "substitutions") || {}, t) : "number" == typeof t.number ? r.number(e.excise(t, "number"), t) : t.list ? r.list(e.excise(t, "list"), t) : t.date ? r.date(e.excise(t, "date"), t) : t.time ? r.time(t.time) : t.dateAndTime ? r.dateAndTime(e.excise(t, "dateAndTime"), t) : t.relativeTime ? r.relativeTime(e.excise(t, "relativeTime"), e.excise(t, "unit")) : t.relativeDate ? r.relativeDate(e.excise(t, "relativeDate"), t) : void 0
        }
    }, n._graphic = function(t, e) {
        o.add(t, e)
    }, n._defer = function(t, i, n) {
        if ("string" == typeof t) {
            var s = [this].concat(Array.prototype.slice.call(arguments));
            return e.defer.apply(e, s)
        }
        e.defer.apply(e, arguments)
    }, i
}),
define("core/src/view", ["require", "common", "shibui/src/view"], function(t) {
    var e = t("common"),
        i = t("shibui/src/view"),
        n = i.new(),
        s = n.prototype;
    return s._build = function(t, e, n) {
        return t == this.dom && e == this.dom.root && (this._.domRootName = n), i.prototype._build.apply(this, arguments)
    }, s._activateForModes = function(t) {
        t = e.flatten([t]),
        BIF.events.off(this.handlers.modeChanges),
        this.handlers.modeChanges = {},
        e.each(t, function(t) {
            this.handlers.modeChanges["exit:" + t] = BIF.events.on("mode:exit:" + t, this.access.bind(this, "inert")),
            this.handlers.modeChanges["enter:" + t] = BIF.events.on("mode:enter:" + t, this.access.bind(this, "normal"))
        }, this),
        this.access(e.among(BIF.state.mode, t) ? "normal" : "inert")
    }, n
}),
define("text!shibui/svg/spinner-9.svg", [], function() {
    return '<svg version="1.1" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n  <g fill="none" fill-rule="evenodd" stroke="none" stroke-linecap="round" stroke-width="1">\n    <line class="icon-hollow" stroke="#000000" stroke-width="4" x1="32" x2="32" y1="15" y2="19" />\n    <line class="icon-hollow" stroke="#000000" stroke-width="4" x1="43.570177" x2="40.9990265" y1="19.2112" y2="22.2753778" />\n    <line class="icon-hollow" stroke="#000000" stroke-width="4" x1="49.7265396" x2="45.7873085" y1="29.8743328" y2="30.5689255" />\n    <line class="icon-hollow" stroke="#000000" stroke-width="4" x1="47.5884573" x2="44.1243557" y1="42" y2="40" />\n    <line class="icon-hollow" stroke="#000000" stroke-width="4" x1="38.1563626" x2="36.788282" y1="49.9144672" y2="46.1556967" />\n    <line class="icon-hollow" stroke="#000000" stroke-width="4" x1="25.8436374" x2="27.211718" y1="49.9144672" y2="46.1556967" />\n    <line class="icon-hollow" stroke="#000000" stroke-width="4" x1="16.4115427" x2="19.8756443" y1="42" y2="40" />\n    <line class="icon-hollow" stroke="#000000" stroke-width="4" x1="14.2734604" x2="18.2126915" y1="29.8743328" y2="30.5689255" />\n    <line class="icon-hollow" stroke="#000000" stroke-width="4" x1="20.429823" x2="23.0009735" y1="19.2112" y2="22.2753778" />\n  </g>\n</svg>\n'
}),
define("text!shibui/svg/spinner-12.svg", [], function() {
    return '<svg version="1.1" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n  <g fill="none" fill-rule="evenodd" stroke="none" stroke-linecap="round" stroke-width="1">\n    <line class="icon-hollow" stroke="#000000" stroke-width="3" x1="32" x2="32" y1="12.875" y2="16.125" />\n    <line class="icon-hollow" stroke="#000000" stroke-width="3" x1="41.5625" x2="39.9375" y1="15.4372642" y2="18.2518467" />\n    <line class="icon-hollow" stroke="#000000" stroke-width="3" x1="48.5627358" x2="45.7481533" y1="22.4375" y2="24.0625" />\n    <line class="icon-hollow" stroke="#000000" stroke-width="3" x1="51.125" x2="47.875" y1="32" y2="32" />\n    <line class="icon-hollow" stroke="#000000" stroke-width="3" x1="48.5627358" x2="45.7481533" y1="41.5625" y2="39.9375" />\n    <line class="icon-hollow" stroke="#000000" stroke-width="3" x1="41.5625" x2="39.9375" y1="48.5627358" y2="45.7481533" />\n    <line class="icon-hollow" stroke="#000000" stroke-width="3" x1="32" x2="32" y1="51.125" y2="47.875" />\n    <line class="icon-hollow" stroke="#000000" stroke-width="3" x1="22.4375" x2="24.0625" y1="48.5627358" y2="45.7481533" />\n    <line class="icon-hollow" stroke="#000000" stroke-width="3" x1="15.4372642" x2="18.2518467" y1="41.5625" y2="39.9375" />\n    <line class="icon-hollow" stroke="#000000" stroke-width="3" x1="12.875" x2="16.125" y1="32" y2="32" />\n    <line class="icon-hollow" stroke="#000000" stroke-width="3" x1="15.4372642" x2="18.2518467" y1="22.4375" y2="24.0625" />\n    <line class="icon-hollow" stroke="#000000" stroke-width="3" x1="22.4375" x2="24.0625" y1="15.4372642" y2="18.2518467" />\n  </g>\n</svg>\n'
}),
define("shibui/src/components/spinner", ["require", "common", "../view", "text!shibui/svg/spinner-9.svg", "text!shibui/svg/spinner-12.svg"], function(t) {
    var e = t("common"),
        i = t("../view"),
        n = i.new(),
        s = n.prototype;
    return s._graphic("spinner-9", t("text!shibui/svg/spinner-9.svg")), s._graphic("spinner-12", t("text!shibui/svg/spinner-12.svg")), s.HEIGHT = 200, s.$init = function(t, i) {
        this.options = e.absorb(i, {
            variant: "medium"
        }),
        this.impart(t)
    }, s.spin = function() {
        return this.dom.root.style.removeProperty("display"), this._attr(this.dom.root, "aria-busy", "true"), this.access({
            tabindex: 0
        }), this
    }, s.stop = function() {
        return this._defer("focus"), this.access("inert"), this._attr(this.dom.root, "aria-busy", null), this.dom.root.style.setProperty("display", "none"), this
    }, s.isSpinning = function() {
        return "none" != this.dom.root.style.getPropertyValue("display")
    }, s.focus = function() {
        this.isSpinning() || this.spin();
        var t = document.activeElement;
        this._defer("focus", function() {
            document.activeElement == t && this.isInDocument() && this._focusElement(this.dom.root)
        }.bind(this), 100)
    }, s.spokenStatus = function(t) {
        this._textify(this.dom.status, t)
    }, s._layout = function(t) {
        this._build("shibui-spinner", {
            extending: t,
            classes: "shibui-spinner-" + this.options.variant
        }, " status {loading}", {
            labeling: "root",
            access: "spoken"
        }, " icon", {
            icon: "spinner-" + {
                small: 9,
                medium: 12
            }[this.options.variant]
        }),
        this._attr(this.dom.root, "role", "progressbar"),
        this._attr(this.dom.root, "aria-busy", "true"),
        this._attr(this.dom.root, "aria-valuemin", "0"),
        this._attr(this.dom.root, "aria-valuemax", "100"),
        this._attr(this.dom.root, "aria-valuetext", this._phrase("loading"))
    }, n
}),
define("text!bifocal/themes/read/default/svg/chapter-lock.svg", [], function() {
    return "<svg viewBox='0 0 64 63' version='1.1' xmlns='http://www.w3.org/2000/svg'>\n  <g stroke='none' stroke-width='1' fill='#000000' fill-rule='evenodd' class='icon-solid'>\n    <rect x='14' y='31' width='35' height='24' rx='3' />\n    <path d='M24,21.9960474 L24,21.9960474 L24,33.0039526 C24,36.3138307 26.6866883,39 29.9998299,39 L33.0001701,39 C36.3176108,39 39,36.3175462 39,33.0039526 L39,21.9960474 C39,18.6861693 36.3133117,16 33.0001701,16 L29.9998299,16 C26.6823892,16 24,18.6824538 24,21.9960474 L24,21.9960474 Z M29.9998299,10 L33.0001701,10 C39.6274932,10 45,15.3729336 45,21.9960474 L45,33.0039526 C45,39.6291866 39.6333872,45 33.0001701,45 L29.9998299,45 C23.3725068,45 18,39.6270664 18,33.0039526 L18,21.9960474 C18,15.3708134 23.3666128,10 29.9998299,10 Z' />\n  </g>\n</svg>\n"
}),
define("bifocal/themes/read/default/src/parts/place-phrase", ["require", "common", "core/src/view", "shibui/src/components/spinner", "text!../../svg/chapter-lock.svg"], function(t) {
    var e = t("common"),
        i = t("core/src/view"),
        n = i.new(),
        s = n.prototype,
        o = t("shibui/src/components/spinner");
    return s._graphic("chapter-lock", t("text!../../svg/chapter-lock.svg")), s.$init = function(t, e) {
        this.configure(e),
        i.prototype.$init.call(this, t)
    }, s.configure = function(t) {
        this.options = e.absorb(t, {}),
        this._prepare(),
        this._toggleRepresentation("spoken", this.options.spoken),
        this._toggleRepresentation("visual", this.options.visual),
        "string" == typeof this.options.classes && (this.dom.root.className = "place-phrase", this._classify(this.dom.root, this.options.classes))
    }, s.update = function(t) {
        this._render(t)
    }, s._layout = function() {
        this.dom = this._build("place-phrase <span>")
    }, s._toggleRepresentation = function(t, i) {
        this.options[t] = "undefined" == typeof i || !!i,
        this.options[t] && !this.dom[t] ? this.dom[t] = this._element({
            tag: "span",
            parentNode: this.dom.root,
            id: !!e.try(i, "id"),
            classes: "place-phrase-" + t,
            access: t,
            pos: "spoken" == t ? "prepend" : "append"
        }) : !this.options[t] && this.dom[t] && (this.dom[t].parentNode.removeChild(this.dom[t]), delete this.dom[t])
    }, s._render = function(t) {
        if (!this._spinOrLock(t)) {
            var i,
                n,
                s = {
                    substitutions: e.absorb(this.options.substitutions, {})
                },
                o = {
                    substitutions: e.absorb(this.options.substitutions, {})
                };
            "number" == typeof t ? (i = this._phrase({
                number: t
            }), n = this._phrase({
                label: "pages-long",
                substitutions: {
                    SPREAD: !1,
                    PAGES: t
                }
            })) : "place-in-total" == this.options.preset ? t.isFinite() ? (s.label = "pages-short.total", o.label = "pages-long.total") : (i = "--", n = this._phrase("a11y.pages-bar.calculating")) : "pages-bar-number" == this.options.preset ? isFinite(t.percentageOfBook) ? (s.substitutionTags = !0, s.label = "pages-short", o.label = "pages-long") : (i = "--", n = this._phrase("a11y.pages-bar.calculating")) : "pages-bar-percent" == this.options.preset ? isFinite(t.percentageOfBook) ? i = n = this._phrase({
                number: Math.ceil(100 * t.percentageOfBook) / 100,
                style: "percent"
            }) : (i = "--", n = this._phrase("a11y.pages-bar.calculating")) : "pages-bar-total" == this.options.preset ? t.isFinite() ? (s.substitutionTags = !0, s.label = "pages-bar.total", o.label = "a11y.pages-bar.total") : (i = "--", n = this._phrase("a11y.pages-bar.calculating")) : (this.options.long && (s.label = "pages-long"), this.options.short && (s.label = "pages-short"), o.label = "pages-long"),
            this.options.visual && (i = i || this._stringify(t, s), this._textify(this.dom.visual, {
                html: i
            })),
            this.options.spoken && (n = n || this._stringify(t, o), this._textify(this.dom.spoken, {
                html: n
            }))
        }
    }, s._spinOrLock = function(t) {
        return "number" != typeof t && (this.options.spin ? (this._.spinning || (this.options.visual && (this._textify(this.dom.visual), this.dom.spinner = new o(this.dom.visual, {
                variant: "small"
            })), this.options.spoken && this._textify(this.dom.spoken, "place-phrase.indeterminate")), this._.spinning = !0) : (delete this._.spinning, delete this.dom.spinner, this.options.lock ? (this._.locking || (this._.locking = !0, this.options.visual && (this._textify(this.dom.visual), this.dom.lock = this._element({
                icon: "chapter-lock",
                parentNode: this.dom.visual
            })), this.options.spoken && this._textify(this.dom.spoken, "place-phrase.locked")), this._.locking = !0) : (delete this._.locking, void delete this.dom.lock)))
    }, s._stringify = function(t, i) {
        if (i = e.absorb(i, {}), t.pages.head && t._.finite) {
            var n = [];
            return e.each(t.pages, function(t) {
                n.push(this._phrase({
                    number: t
                }))
            }, this), n = n.join("-"), i.label ? (i.substitutions = e.absorb(i.substitutions, {
                PAGES: n,
                SPREAD: t.pages.length > 1,
                TOTAL: this._phrase({
                    number: t.pages.total
                })
            }), this._phrase(i)) : n
        }
        return isFinite(t.percentageOfBook) ? this._phrase({
            number: Math.ceil(100 * t.percentageOfBook) / 100,
            style: "percent"
        }) : "--"
    }, n
}),
define("bifocal/themes/listen/default/src/parts/place-phrase", ["require", "common", "../../../../read/default/src/parts/place-phrase"], function(t) {
    var e = t("common"),
        i = t("../../../../read/default/src/parts/place-phrase"),
        n = i.new(),
        s = n.prototype;
    return s.update = function(t) {
        var e;
        "number" == typeof t ? e = t : (e = t.bookMilliseconds, "remaining" == this.options.preset && (e = BIF.objects.compass.spool.durationMilliseconds - e));
        var i = Math.floor(e / 1e3);
        i && i == this._.floorCache || this._render(e),
        this._.floorCache = i
    }, s._render = function(t) {
        if (!this._spinOrLock(t)) {
            var i = {
                    substitutions: e.absorb(this.options.substitutions, {})
                },
                n = {
                    substitutions: e.absorb(this.options.substitutions, {})
                };
            "elapsed" == this.options.preset ? n.label = "a11y.audio.time.elapsed" : "remaining" == this.options.preset ? (i.label = "audio.time.remaining", n.label = "a11y.audio.time.remaining") : "sleep-timer-minutes" == this.options.preset ? (t = 60 * Math.ceil(t / 1e3 / 60) * 1e3, i.hoursToMinutes = n.hoursToMinutes = !0, i.label = "sleep-timer.minutes.concise", n.label = "a11y.sleep-timer.minutes.verbose") : "sleep-timer-seconds" == this.options.preset ? (i.label = "audio.time", n.label = "a11y.sleep-timer.seconds.verbose") : "sleep-timer-off" == this.options.preset ? (i.label = "sleep-timer.minutes", n.label = "a11y.sleep-timer.seconds.verbose") : n.label = "a11y.audio.time",
            this.options.visual && this._textify(this.dom.visual, {
                html: this._stringify(t, i)
            }),
            this.options.spoken && this._textify(this.dom.spoken, {
                html: this._stringify(t, n)
            })
        }
    }, s._stringify = function(t, i) {
        i = e.absorb(i, {
            label: "audio.time"
        });
        var n = i.substitutions || {};
        if (isFinite(t)) {
            var s = Math.round(t / 1e3);
            n.HOURS = Math.floor(s / 3600),
            0 !== n.HOURS || i.zeroHour || delete n.HOURS,
            n.MINUTES = Math.floor(s % 3600 / 60),
            n.HOURS && i.hoursToMinutes && (n.MINUTES += 60 * e.excise(n, "HOURS")),
            n.SECONDS = s % 60
        } else
            n.MINUTES = "--",
            n.SECONDS = "--";
        return this._phrase({
            label: i.label,
            substitutions: n
        })
    }, n
}),
define("core/src/bank/bank-scope-memory", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.COMMIT_DELAY_MS = 0, n.$init = function(t, e) {
        this._.name = t,
        this._.flush = {
            keys: [],
            timer: null
        },
        this._.data = e || this._read()
    }, n.get = function(t) {
        return this._.data[t]
    }, n.set = function(t, e) {
        this._.data[t] = e,
        this._write(t)
    }, n.load = function(t, e) {
        var i = this.get(t);
        if (i) {
            var n = new e;
            return n.deserialize(i), n
        }
    }, n.dump = function(t, e) {
        this.set(t, e.serialize())
    }, n.flush = function() {
        this._commit(),
        this._.flush.keys = [],
        this._.flush.timer = null
    }, n.wipe = function() {
        e.each(this._.data, function(t) {
            this.set(t)
        }, this),
        this.flush()
    }, n._read = function() {
        return {}
    }, n._commit = function() {}, n._write = function(t) {
        this._.flush.keys.indexOf(t) < 0 && this._.flush.keys.push(t),
        this._.flush.timer = this._.flush.timer || setTimeout(this.flush.bind(this), this.COMMIT_DELAY_MS)
    }, n._eachFlushKey = function(t) {
        e.each(this._.flush.keys, t, this)
    }, i
}),
function(t) {
    "use strict";
    var e = function(t, i, n) {
        return 1 === arguments.length ? e.get(t) : e.set(t, i, n)
    };
    e._document = document,
    e._navigator = navigator,
    e.defaults = {
        path: "/"
    },
    e.sameSiteValues = ["None", "Lax", "Strict"],
    e.legacyPrefix = "_sscl_",
    e.get = function(t) {
        return e._cachedDocumentCookie !== e._document.cookie && e._renewCache(), e._cache[t] || e._cache[e.legacyPrefix + t]
    },
    e.getAllKeys = function() {
        e._cachedDocumentCookie !== e._document.cookie && e._renewCache();
        var t = [];
        try {
            for (var i, n, s = Object.getOwnPropertyNames(e._cache), o = new RegExp("^" + e.legacyPrefix + "(.+)$"), r = 0; r < s.length; r++)
                i = s[r],
                (n = i.match(o)) && (i = n[1]),
                t.indexOf(i) == -1 && t.push(i)
        } catch (t) {
            console.log("[COOKIES] Error getting keys: ", t)
        }
        return t
    },
    e.set = function(i, n, s) {
        return s = e._getExtendedOptions(s), s.expires = e._getExpiresDate(n === t ? -1 : s.expires), e._document.cookie = e._generateCookieString(i, n, s), "None" == s.sameSite && (delete s.sameSite, e._document.cookie = e._generateCookieString(e.legacyPrefix + i, n, s)), e
    },
    e.expire = function(i, n) {
        return e.set(i, t, n)
    },
    e._getExtendedOptions = function(i) {
        return {
            path: i && i.path || e.defaults.path,
            domain: i && i.domain || e.defaults.domain,
            expires: i && i.expires || e.defaults.expires,
            secure: i && i.secure !== t ? i.secure : e.defaults.secure,
            sameSite: i && e.sameSiteValues.indexOf(i.sameSite) > -1 ? i.sameSite : e.defaults.sameSite
        }
    },
    e._isValidDate = function(t) {
        return "[object Date]" === Object.prototype.toString.call(t) && !isNaN(t.getTime())
    },
    e._getExpiresDate = function(t, i) {
        switch (i = i || new Date, typeof t) {
        case "number":
            t = new Date(i.getTime() + 1e3 * t);
            break;
        case "string":
            t = new Date(t)
        }
        if (t && !e._isValidDate(t))
            throw new Error("`expires` parameter cannot be converted to a valid Date instance");
        return t
    },
    e._generateCookieString = function(t, e, i) {
        t = encodeURIComponent(t),
        e = (e + "").replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent),
        i = i || {};
        var n = t + "=" + e;
        return n += i.path ? ";path=" + i.path : "", n += i.domain ? ";domain=" + i.domain : "", n += i.expires ? ";expires=" + i.expires.toUTCString() : "", "http:" != location.protocol ? (n += i.secure ? ";secure" : "", n += i.sameSite ? ";sameSite=" + i.sameSite : "") : n += ";sameSite=Lax", n
    },
    e._getCookieObjectFromString = function(i) {
        for (var n = {}, s = i ? i.split("; ") : [], o = 0; o < s.length; o++) {
            var r = e._getKeyValuePairFromCookieString(s[o]);
            n[r.key] === t && (n[r.key] = r.value)
        }
        return n
    },
    e._getKeyValuePairFromCookieString = function(t) {
        var e = t.indexOf("=");
        return e = e < 0 ? t.length : e, {
            key: decodeURIComponent(t.substr(0, e)),
            value: decodeURIComponent(t.substr(e + 1))
        }
    },
    e._renewCache = function() {
        e._cache = e._getCookieObjectFromString(e._document.cookie),
        e._cachedDocumentCookie = e._document.cookie
    },
    e._areEnabled = function() {
        var t = "cookies.js",
            i = "1" === e.set(t, 1).get(t);
        return e.expire(t), i
    },
    e.enabled = e._areEnabled(),
    "function" == typeof define && define.amd ? define("cookies/cookies", [], function() {
        return e
    }) : "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = e), exports.Cookies = e) : window.Cookies = e
}(),
define("cookies", ["cookies/cookies"], function(t) {
    return t
}),
define("core/src/bank/bank-scope-cookie", ["require", "./bank-scope-memory", "cookies"], function(t) {
    var e = t("./bank-scope-memory"),
        i = e.new(),
        n = i.prototype,
        s = t("cookies");
    return n.$init = function(t, i) {
        e.prototype.$init.call(this, t, i),
        this._checkDomain()
    }, n._read = function() {
        var t = {};
        return this._eachRawPair(function(e, i) {
            t[e] = JSON.parse(i)
        }), t
    }, n._commit = function() {
        this._eachFlushKey(function(t) {
            var e = this.get(t),
                i = this._address(t),
                n = {
                    domain: this._cookieDomain(),
                    secure: !0,
                    sameSite: "None"
                };
            if (null === e || "undefined" == typeof e)
                s.expire(i, n);
            else {
                n.expires = this._cookieExpires();
                try {
                    s.set(i, JSON.stringify(e), n)
                } catch (t) {
                    console.warn("[BANK] error stringifying value:", t, i, e)
                }
            }
        })
    }, n._eachRawPair = function(t) {
        for (var e = s.getAllKeys(!0), i = new RegExp("^" + this._.name + ":(.+)$"), n = 0, o = e.length; n < o; ++n) {
            var r = e[n].match(i);
            r && t(r[1], s.get(e[n]))
        }
    }, n._address = function(t) {
        return this._.name + ":" + t
    }, n._checkDomain = function() {
        var t = this._defaultDomain(),
            e = this._cookieDomain(),
            i = this.get("bank-domain") || t;
        i !== e && (console.log("[BANK-COOKIE] migrating domain from: %s  -->  current: %s -- default: %s", i, e, t), this._eachRawPair(function(t, e) {
            s.expire(this._address(t), {
                domain: i
            }),
            this._.flush.keys.push(t)
        }.bind(this)), this.set("bank-domain", e))
    }, n._cookieDomain = function() {
        return BIF.theme.data["bank-cookie-use-tld"] ? location.host.split(".").slice(-2).join(".") : this._defaultDomain()
    }, n._defaultDomain = function() {
        var t = location.host.split(".");
        return t.slice(t.length > 2 ? 1 : 0).join(".")
    }, n._cookieExpires = function() {
        return 31536e3
    }, i
}),
define("core/src/bank/bank-scope-domain", ["require", "./bank-scope-memory"], function(t) {
    var e = t("./bank-scope-memory"),
        i = e.new(),
        n = i.prototype;
    return n._read = function() {
        var t = {};
        if ("undefined" == typeof window.localStorage)
            return console.warn("[BANK] localStorage disabled. No persistence for session."), t;
        var e = new RegExp("^" + this._.name + ":(.+)$");
        return this._eachRawPair(function(i, n) {
            var s = i.match(e);
            if (s) {
                var o = s[1];
                t[o] = JSON.parse(n)
            }
        }), t
    }, n._commit = function() {
        "undefined" != typeof window.localStorage && this._eachFlushKey(function(t) {
            var e = this.get(t),
                i = this._.name + ":" + t;
            if (null === e || "undefined" == typeof e)
                localStorage.removeItem(i);
            else
                try {
                    localStorage.setItem(i, JSON.stringify(e))
                } catch (t) {
                    console.warn("[BANK] error stringifying value:", t, i, e)
                }
        })
    }, n._eachRawPair = function(t) {
        for (var e = [], i = 0, n = localStorage.length; i < n; ++i) {
            var s = localStorage.key(i);
            "string" == typeof s && e.push(s)
        }
        for (var i = 0, n = e.length; i < n; ++i)
            t(e[i], localStorage.getItem(e[i]))
    }, i
}),
define("core/src/bank/bank-migrator", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.BANK_VERSION_KEY = "_bank-version", n.migrateAllBanks = function(t) {
        this.migrate(BIF.bank.global, "global", t),
        this.migrate(BIF.bank.title, "title", t)
    }, n.migrate = function(t, i, n) {
        var s = this._versionToIndex(t.get(this.BANK_VERSION_KEY));
        e.each(n, function(e, n) {
            try {
                if ("number" == typeof s && s < n) {
                    var o = this._performMigration(t, i, e);
                    t.set(this._indexToMigrationDataKey(n), o),
                    console.log("[BANK] migrated to %s", this._indexToVersion(n))
                }
                t.set(this.BANK_VERSION_KEY, this._indexToVersion(n))
            } catch (t) {
                console.warn("[BANK] migration failed:", t)
            }
        }, this);
        var o = [],
            r = e.epochMilliseconds();
        if (s = this._versionToIndex(t.get(this.BANK_VERSION_KEY)), e.each(t._.data, function(e, i) {
            var n = e.match(/^migration:(b\d+)$/);
            if (n) {
                var a = this._versionToIndex(n[1]);
                a > s && (o[a] = i, i.exp = r),
                i.exp && i.exp <= r && t.set(e)
            }
        }, this), o.length)
            try {
                e.each(o.reverse(), this._reverseMigration.bind(this, t)),
                console.log("[BANK] rolled back to %s", this._indexToVersion(s))
            } catch (t) {
                console.warn("[BANK] rollback failed:", t)
            }
    }, n._performMigration = function(t, i, n) {
        var s = e.clone(t._.data),
            o = new n;
        "global" == i ? o.migrateGlobal(t) : "title" == i && o.migrateTitle(t);
        var r = this._jsonDiff(s, t._.data);
        return r.exp = e.epochMilliseconds() + o.DELTA_TTL, r
    }, n._reverseMigration = function(t, i) {
        i && (e.each(i.del, function(e, n) {
            delete i.add[e];
            var s = e.split(" > "),
                o = s.shift(),
                r = t.get(o);
            if (r && s.length) {
                for (var a = r; s.length > 1;) {
                    var c = s.shift();
                    a[c] || (a[c] = {}),
                    a = a[c]
                }
                a[s.shift()] = n
            } else
                r = n;
            t.set(o, r)
        }), e.each(i.add, function(e) {
            var i = e.split(" > "),
                n = i.shift(),
                s = t.get(n);
            if (s && i.length) {
                for (var o = s; i.length > 1 && o;)
                    o = o[i.shift()];
                o && i[0] && delete o[i.shift()]
            } else
                s = void 0;
            t.set(n, s)
        }))
    }, n._versionToIndex = function(t) {
        t = (t || "") + "",
        t = t.replace(/[^\d]+/, "");
        parseFloat(t);
        if (isFinite(t))
            return Math.round(t)
    }, n._indexToVersion = function(t) {
        return "b" + (parseFloat(t) + 1e3).toString().substring(1)
    }, n._indexToMigrationDataKey = function(t) {
        return "migration:" + this._indexToVersion(t)
    }, n._jsonDiff = function(t, i) {
        var n = function(t) {
                return "object" == typeof t && !e.isList(t)
            },
            s = function(t, i, o, r) {
                return e.each(i, function(e, i) {
                    var a = t.concat([e]);
                    "undefined" == typeof o[e] ? r[a.join(" > ")] = i : n(i) && n(o[e]) ? s(a, i, o[e], r) : JSON.stringify(i) != JSON.stringify(o[e]) && (r[a.join(" > ")] = i)
                }), r
            },
            o = {
                del: s([], t, i, {}),
                add: s([], i, t, {})
            };
        return e.each(o.add, function(t, e) {
            o.add[t] = "<" + typeof e + ">"
        }), o
    }, i
}),
define("bifocal/themes/read/default/src/migrations/noop", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.DELTA_TTL = 2592e6, n.migrateGlobal = function(t) {}, n.migrateTitle = function(t) {}, i
}),
define("bifocal/themes/read/default/src/migrations/b002", ["require", "common", "./noop"], function(t) {
    var e = (t("common"), t("./noop")),
        i = e.new(),
        n = i.prototype;
    return n.DELTA_TTL = 0, n.migrateGlobal = function(t) {
        var e = t.get("rdby");
        if (e) {
            for (var i; e !== i;) {
                i = e;
                try {
                    e = JSON.parse(e)
                } catch (t) {
                    break
                }
            }
            t.set("rdby", e)
        }
        t.get("audio:incompatible") && t.set("audio:incompatible")
    }, i
}),
define("core/src/traces/a11y", ["require", "common", "gala"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype,
        s = t("gala");
    return n.attach = function(t) {
        this.handlers = {},
        this.handlers.focus = s.on(document, "focusin", this._onElementFocus.bind(this), !0),
        document.documentElement.classList.add("trace-a11y")
    }, n.detach = function(t) {
        s.off(this.handlers.focus),
        document.documentElement.classList.remove("trace-a11y")
    }, n.toggleHalos = function() {
        document.documentElement.classList.toggle("a11y-debug-halos")
    }, n.toggleSpoken = function() {
        document.documentElement.classList.toggle("a11y-debug-spoken")
    }, n._onElementFocus = function(t) {
        var e = t.target;
        if (e) {
            var i = this._ariaForTarget(e);
            i ? i.document ? console.log("[A11Y] focus => entered document") : i.label && i.description ? console.log('[A11Y] focus: "%s" ... "%s"', i.label, i.description) : i.label ? console.log('[A11Y] focus: "%s"', i.label) : i.description && console.warn('[A11Y] focus: missing label, but has description: "%s"', i.description, e) : console.warn("[A11Y] focus not found", e, document.activeElement)
        }
    }, n._ariaForTarget = function(t, i) {
        if (t === document)
            return {
                document: !0
            };
        if (e.isElement(t)) {
            var n,
                s,
                o = {};
            if (o.label = t.getAttribute("aria-label"), o.label || (n = t.getAttribute("aria-labelledby")) && (s = document.getElementById(n)) && (o.label = this._ariaForTarget(s).label), !o.label) {
                o.label = [];
                var r = function(t) {
                    return e.isElement(t) ? void (t.getAttribute("aria-hidden") && !e.try(i, "desc") || e.each(t.childNodes, r)) : o.label.push(t.nodeValue)
                };
                r(t),
                o.label = o.label.join(" ")
            }
            return o.label || (s = t.querySelector("img[alt]")) && (o.label = s.getAttribute("alt")), o.label || e.try(i, "okIfMissing") || (o.label = "missing-label: " + t.className), (n = t.getAttribute("aria-describedby")) && (s = document.getElementById(n)) && (o.description = this._ariaForTarget(s, {
                okIfMissing: !0,
                desc: !0
            }).label), o.label && (o.label = o.label.replace(/\s+/g, " ")), o.description && (o.description = o.description.replace(/\s+/g, " ")), o
        }
    }, i
}),
define("core/src/traces/phrasebook", ["require", "common", "shibui/src/phrasebook"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype,
        s = t("shibui/src/phrasebook");
    return n.attach = function(t) {
        var i = this.templates = {};
        e.each(s.TEMPLATES, function(t, e) {
            var n = this._keyHead(t);
            i[n] = i[n] || {},
            i[n][t] = 0
        }.bind(this));
        var o = this._.superText = s.text;
        s.text = function(r, a, c) {
            var l = s._normalizeLabel(r),
                h = n._keyHead(l),
                u = i[h] || {},
                d = u[l];
            "number" != typeof d ? (e.try(c, "okIfMissing") || console.warn("[PHRASEBOOK] unrecognized label:", h, l), i[h] = i[h] || {}, i[h][l] = 1) : i[h][l] += 1;
            var p = o.call(s, r, a, c);
            return "string" == typeof p && e.try(t, "transformations") && e.each(t.transformations, function(t) {
                p = n._transformText(p, t)
            }), p
        }
    }, n.detach = function(t) {
        this._.superText && (s.text = this._.superText),
        this.templates = {}
    }, n.audit = function() {
        e.each(this.templates, function(t, i) {
            if ("language" != t && "country" != t && "subjects" != t) {
                var n = !1;
                e.each(i, function(e, i) {
                    i || (n || (console.groupCollapsed(t), n = !0), console.log(e))
                }),
                n && (n = !1, console.groupEnd(t))
            }
        }, this)
    }, n.locale = function(t) {
        return localStorage.removeItem("SPARK:locale"), SPARK.locale.determine(), t && SPARK.locale.tag && (localStorage.setItem("SPARK:locale", t), SPARK.locale.determine()), BIF.tracer.relaunch(), SPARK.locale.tag
    }, n._keyHead = function(t) {
        var e = t.split(".");
        return e.length > 1 ? e[0] : "GLOBAL"
    }, n._transformText = function(t, e) {
        var i = "_";
        if ("enclose" == e)
            return "✓" + t + "✓";
        if ("accent" == e || "emoji" == e) {
            var n = {
                accent: ["À", "Â", "Ç", "Ê", "Ï", "Ô", "Š", "Ý", "á", "ç", "ê", "ñ", "ß", "Д", "Ж", "Й", "ф", "Ю", "诶", "伊", "艾", "屁", "维", "プ"],
                emoji: ["🥰", "🤯", "🥳", "🤪", "🤓", "🎃", "👩🏽", "🧓🏾", "👩‍👩‍👧‍👧", "👖", "🌏", "🍪", "🦜", "🦚", "🦔", "🐝", "🌚", "🌀", "💮", "〽️", "💠", "⚜️", "🀄️"]
            }[e];
            return t.replace(new RegExp(i, "g"), function() {
                return n[Math.floor(Math.random() * n.length)]
            })
        }
        if (parseFloat(e)) {
            var s = parseFloat(e),
                o = t;
            try {
                var r = (new DOMParser).parseFromString(t, "text/html");
                o = r.body.textContent || o
            } catch (t) {}
            var a = Math.round(s * o.length - o.length);
            if (a < 0 && o == t)
                return t.slice(0, a);
            for (; a > 0;)
                t += i,
                a -= i.length;
            return t
        }
        return "string" == typeof e ? t.split(i).join(e) : t
    }, i
}),
define("core/src/traces/errors", ["require", "common", "gala"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype,
        s = t("gala");
    return n.attach = function(t) {
        this.handlers = {},
        this.handlers.error = s.on("bifocal:error", this._onBifocalError.bind(this))
    }, n.detach = function(t) {
        s.off(this.handlers)
    }, n._onBifocalError = function(t) {
        var e = t.m;
        try {
            e = JSON.stringify(e, null, 2)
        } catch (t) {}
        var i = ["<pre>", e, "</pre>"].join("");
        s.dispatch("bifocal:notify:message", {
            html: i
        })
    }, i
}),
define("core/src/tracer", ["require", "common", "./traces/a11y", "./traces/phrasebook", "./traces/errors"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.BANK_KEY_TRACES = "testing:traces", n.DEFAULT_TRACE_CLASSES = {
        a11y: t("./traces/a11y"),
        phrasebook: t("./traces/phrasebook"),
        errors: t("./traces/errors")
    }, n.$init = function(t) {
        this.traceClasses = e.absorb(this.DEFAULT_TRACE_CLASSES, {}),
        this.traceClasses = e.absorb(t, this.traceClasses);
        var i = BIF.bank.global.get(this.BANK_KEY_TRACES) || {};
        e.each(i, function(t, e) {
            this.attach.apply(this, [t].concat(e))
        }, this),
        BIF.events.listen("msg:trace:install", this._onMessageTraceInstall.bind(this)),
        BIF.events.listen("msg:trace:reset", this._onMessageTraceReset.bind(this))
    }, n.install = function(t) {
        var e = this._shiftArguments(arguments);
        this.attach.apply(this, arguments);
        var i = BIF.bank.global.get(this.BANK_KEY_TRACES) || {};
        return i[t] = e, BIF.bank.global.set(this.BANK_KEY_TRACES, i), "Installed: " + t
    }, n.uninstall = function(t) {
        var i = BIF.bank.global.get(this.BANK_KEY_TRACES) || {};
        delete i[t];
        var n = !1;
        return e.each(i, function() {
            n = !0
        }), n || (i = void 0), BIF.bank.global.set(this.BANK_KEY_TRACES, i), this.detach.apply(this, arguments), "Uninstalled: " + t
    }, n.attach = function(t) {
        var e = this._shiftArguments(arguments);
        this.detach(t);
        var i = this.traceClasses[t];
        return this[t] = new i, "function" == typeof this[t].attach && this[t].attach.apply(this[t], e), this[t]
    }, n.detach = function(t) {
        var e = this._shiftArguments(arguments);
        this[t] && "function" == typeof this[t].detach && this[t].detach.apply(this[t], e)
    }, n.reset = function() {
        BIF.bank.global.set(this.BANK_KEY_TRACES),
        this.relaunch()
    }, n.relaunch = function(t) {
        setTimeout(function() {
            e.try(BIF, "network.online") ? t ? location.href = t : location.reload(!0) : location.href = "/"
        }.bind(this), 200)
    }, n._shiftArguments = function(t) {
        return Array.prototype.slice.call(t, 1)
    }, n._onMessageTraceInstall = function(t) {
        console.log("[TRACER] bifocal install via message", t.m),
        this.install(t.m.trace)
    }, n._onMessageTraceReset = function(t) {
        console.log("[TRACER] bifocal reset via bridge", t.m),
        this.reset()
    }, i
}),
define("rinser/src/blurb-rinser", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.rinse = function(t, i) {
        if (!t)
            return "<hr />";
        i = i || {};
        var n = {
                lowercase: /[a-z]/g,
                uppercase: /[A-Z]/g,
                spacedEllipsis: /\s?\.\s?\.\s?\.(\s|$)/g,
                quoted: /^\s*["“](.+?)["”](.+)/,
                apostrophe: /(\w)'(\w)/g,
                singleStraightQuotes: /'([^']*)'/g,
                doubleStraightQuotes: /"([^"]*)"/g,
                dashes: /\s*(—|--)\s*/g,
                whitespace: /\s+/g
            },
            s = document.createElement("div"),
            o = document.createElement("div");
        s.innerHTML = t;
        var r,
            a,
            c = function(t, i) {
                return e.element({
                    tag: t,
                    parentNode: i || o
                })
            },
            l = function() {
                e.try(r, "innerHTML") && (r = null)
            },
            h = function(t) {
                return !!i.isEnglish && (!(!t || t.length <= 4) && (t = t.substring(0, 50), (t.match(n.lowercase) || []).length < (t.match(n.uppercase) || []).length))
            };
        e.walk(s.firstChild, function(t) {
            t.nodeType == Node.ELEMENT_NODE ? "P" == t.tagName || "DIV" == t.tagName ? l() : "BR" == t.tagName ? l() : "LI" == t.tagName ? r && (r.innerHTML.indexOf("•") >= 0 || h(r.innerHTML)) ? r.innerHTML += " • " : t.innerHTML.indexOf("•") >= 0 ? l() : (o.lastChild && "UL" == o.lastChild.tagName || c("UL"), r = c("LI", o.lastChild)) : ["Q", "BLOCKQUOTE", "CITE"].indexOf(t.tagName) > 0 && (r = r || c("P"), r = c(t.tagName, r), a = t) : t.nodeType == Node.TEXT_NODE && (a && !a.contains(t) && (r = r.parentNode, a = null), (r || t.nodeValue.trim()) && (r = r || c("P"), r.innerHTML += t.nodeValue))
        });
        var u,
            d = 0;
        return e.walk(o.firstChild, function(t) {
            if (t.nodeType == Node.TEXT_NODE) {
                var s = t.parentNode,
                    o = t.nodeValue.replace(n.spacedEllipsis, "… ").replace(n.apostrophe, "$1’$2").replace(n.singleStraightQuotes, "‘$1’").replace(n.doubleStraightQuotes, "“$1”").replace(n.dashes, " — ").replace(n.whitespace, " ");
                (u = h(o)) && (o = '<span class="is-mostly-caps">' + o + "</span>"),
                o = o.replace(n.quoted, "<q>$1</q>$2"),
                "CITE" != s.tagName && i.title && (o = o.replace(new RegExp("\\b" + e.regExpEscape(i.title) + "\\b", "g"), "<cite>" + (i.titleHTML || i.title) + "</cite>")),
                "magazine" == i.titleFormat && "P" == s.tagName && (i.isEnglish && o.match(/subscri[bp]/) ? o = "" : o.length < 32 && !o.match(/[\.\!\?\']$/) ? s.classList.add("rinse-head") : ++d > 5 && u && (o = "")),
                o = o.replace(/At the Publisher.*\(DRM\) applied./, "");
                for (var r = []; s.lastChild != t;)
                    r.push(s.lastChild),
                    s.removeChild(s.lastChild);
                for (s.removeChild(t), s.innerHTML += o; r.length;)
                    s.appendChild(r.pop());
                s.innerHTML || s.parentNode.removeChild(s)
            }
        }), o.querySelectorAll("p:not(.rinse-head)").length > 2 && e.each(o.querySelectorAll("p.rinse-head"), function(t) {
            t.parentNode.removeChild(t)
        }), o.innerHTML || "<hr />"
    }, i
}),
define("rinser/rinser", ["require", "./src/blurb-rinser"], function(t) {
    var e = {
        Blurb: t("./src/blurb-rinser")
    };
    return e
}),
define("rinser", ["rinser/rinser"], function(t) {
    return t
}),
define("bifocal/themes/read/default/src/parts/codex", ["require", "common", "shibui/src/phrasebook", "rinser"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype,
        s = t("shibui/src/phrasebook"),
        o = t("rinser");
    return n.DEFAULT_COLOR_UNITS = [72, 72, 72], n.freshen = function(t) {
        e.defer(this, "freshen", this._onFreshened.bind(this, t))
    }, n.title = function() {
        return this._memoizing("title", function() {
            return BIF.map.title.main
        })
    }, n.attribution = function() {
        return this._memoizing("attribution", function() {
            return s.list(e.select(BIF.map.creator, function(t) {
                return t.name
            }), {
                type: "unit"
            })
        })
    }, n.format = function() {
        return this._memoizing("format", function() {
            return "Listen" == BIF.state.outlet ? "audiobook" : BIF.state.hasArticles ? "magazine" : "book"
        })
    }, n.description = function() {
        return this._memoizing("description", function() {
            return (new o.Blurb).rinse(this._rawDescription(), {
                isEnglish: !0,
                title: this.title(),
                titleFormat: this.format()
            })
        })
    }, n.coverColor = function() {
        return this._memoizing("coverColor", function() {
            return BIF.map.cover && BIF.map.cover.front && BIF.map.cover.front["-odread-color"] ? BIF.map.cover.front["-odread-color"] : this.DEFAULT_COLOR_UNITS
        })
    }, n.coverPath = function(t) {
        return this._memoizing("coverPath", function() {
            var e = BIF.map["-odread-furbish-uri"];
            return e.match(/\?$/) || (e = e + "/" + t + ".jpg"), e
        })
    }, n.spreadability = function() {
        return this._memoizing("spreadType", function() {
            for (var t, e = 0, i = !0, n = BIF.map.spine.length - 1, s = 0, o = n; s < o; ++s) {
                var r = BIF.map.spine[s];
                if (t = 0, "portrait" == r["rendition-orientation"] || "none" == r["rendition-spread"] || "portrait" == r["rendition-spread"] ? t = 1 : "landscape" != r["rendition-orientation"] && "both" != r["rendition-spread"] && "landscape" != r["rendition-spread"] || (t = 2), e && t && e != t)
                    return this._.spreadType = 0;
                e = t,
                i = i && "center" == r["rendition-position"]
            }
            return e || (i ? 1 : 0)
        })
    }, n._rawDescription = function() {
        return this._memoizing("rawDescription", function() {
            var t = BIF.map.description,
                i = e.try(t, "full") || e.try(t, "short") || t;
            return "string" == typeof i ? i : s.text("codex.description.fallback")
        })
    }, n._memoizing = function(t, e) {
        return this._.memos = this._.memos || {}, this._.memos[t] ? this._.memos[t] : "function" == typeof e ? this._.memos[t] = e.call(this) : void 0
    }, n._onFreshened = function(t) {
        BIF.events.dispatch("bifocal:codex", {
            codex: this
        }),
        t(this)
    }, i
}),
define("core/src/aide", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.LIGHT_BRIGHT = "bright", n.LIGHT_DARK = "dark", n.$init = function(t) {
        this._.overrides = {},
        this.semaphore = t,
        this.queryPrefersDark = window.matchMedia("(prefers-color-scheme: dark)"),
        this.queryPrefersDark.addListener(this._updateLighting.bind(this)),
        this.queryReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)"),
        this.queryReduceMotion.addListener(this._updateReduceMotion.bind(this)),
        BIF.events.on("platform:traits", this._onPlatformTraits.bind(this)),
        this.reapplyTraits()
    }, n.applyTraits = function(t) {
        this.traits = t || this.traits,
        this._updateLighting(),
        this._updateContentScale(),
        this._updateReduceMotion()
    }, n.reapplyTraits = function() {
        this._updateLighting(!0),
        this._updateContentScale(!0),
        this._updateReduceMotion(!0)
    }, n.setLighting = function(t) {
        this._.overrides.lighting = t,
        this._updateLighting(!0)
    }, n.setContentScale = function(t) {
        this._.overrides.contentScale = t,
        this._updateContentScale(!0)
    }, n.setReduceMotion = function(t) {
        this._.overrides.reduceMotion = t,
        this._updateReduceMotion(!0)
    }, n._onPlatformTraits = function(t) {
        this.applyTraits(t.m.traits)
    }, n._updateLighting = function(t) {
        var i,
            n = e.try(this, "traits.profile") || {};
        this._.overrides.lighting ? i = this._.overrides.lighting : n.darkMode || n.darkTheme ? i = this.LIGHT_DARK : this.queryPrefersDark.matches && (i = this.LIGHT_DARK),
        t !== !0 && this.lighting === i || (this.lighting = i, BIF.events.dispatch("aide:lighting", {
            lighting: this.lighting
        }), "Read" != BIF.state.outlet && this.semaphore.set("aide-lighting", this.lighting))
    }, n._updateContentScale = function(t) {
        var i = e.try(this.traits, "profile") || {},
            n = 100;
        "number" == typeof this._.overrides.contentScale ? n = this._.overrides.contentScale : "number" == typeof i.fontScale ? i.fontScale >= 1.3 ? n = 500 : i.fontScale >= 1.2 ? n = 400 : i.fontScale >= 1.1 ? n = 300 : i.fontScale >= 1.05 && (n = 200) : n = {
            UICTContentSizeCategoryXL: 200,
            UICTContentSizeCategoryXXL: 400,
            UICTContentSizeCategoryXXXL: 600,
            UICTContentSizeCategoryAccessibilityM: 700,
            UICTContentSizeCategoryAccessibilityL: 800,
            UICTContentSizeCategoryAccessibilityXL: 900,
            UICTContentSizeCategoryAccessibilityXXL: 900,
            UICTContentSizeCategoryAccessibilityXXXL: 900
        }[i.contentSize] || n,
        t !== !0 && this.contentScale === n || (this.contentScale = n, this.semaphore.set("aide-content-scale", n), BIF.events.dispatch("aide:content:scale", {
            scale: n
        }))
    }, n._updateReduceMotion = function(t) {
        var i = e.try(this, "traits.profile") || {},
            n = !1;
        n = "boolean" == typeof this._.overrides.reduceMotion ? this._.overrides.reduceMotion : "boolean" == typeof i.reduceMotion ? i.reduceMotion : this.queryReduceMotion.matches,
        t !== !0 && this.reduceMotion === n || (this.reduceMotion = n, this.reduceMotion ? this.semaphore.set("aide-motion", "reduce") : this.semaphore.clear("aide-motion"), BIF.events.dispatch("aide:motion", {
            reduceMotion: this.reduceMotion
        }))
    }, i
}),
define("bifocal/themes/read/default/src/parts/command", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.$init = function(t) {
        "function" == typeof t ? this._.refresher = t : this.attributes = t,
        this.refresh(),
        e.isList(this.attributes.refresh) && e.each(this.attributes.refresh, function(t) {
            BIF.events.on(t, this.refresh.bind(this))
        }, this)
    }, n.execute = function() {
        var t = {
            command: this,
            name: this.attributes.name,
            arguments: Array.prototype.slice.apply(arguments)
        };
        return BIF.events.dispatch("bifocal:command:execute", t, !0) ? this.attributes.callback.apply(this, t.arguments) : {
            command: "prevented"
        }
    }, n.refresh = function() {
        this._.refresher && (this.attributes = this._.refresher());
        var t = this.shortcuts(),
            i = JSON.stringify(t);
        return i != this._.bindingData && (e.try(this._.bindings, "length") && (e.each(this._.bindings, function(t) {
            BIF.objects.commands.keyManager.removeBinding(t)
        }), delete this._.bindings), this.isEnabled() && t.length ? (this._.bindings = [], e.each(t, function(t) {
            this._.bindings.push(this._addShortcut(t, this.attributes.shortcutModes, this.attributes.shortcutOptions))
        }, this), this._.bindingData = i) : this._.bindingData = ""), this.attributes
    }, n.isEnabled = function() {
        return !("undefined" != typeof this.attributes.enabled && !this.attributes.enabled)
    }, n.shortcuts = function() {
        return e.isList(this.attributes.shortcut) ? this.attributes.shortcut : "string" == typeof this.attributes.shortcut ? [this.attributes.shortcut] : []
    }, n._addShortcut = function(t, e, i) {
        var n;
        return n = e ? function(t) {
            if (this.attributes.shortcutModes.indexOf(BIF.state.mode) < 0)
                throw {
                    key: "invalid"
                };
            this.execute({
                keyEvent: t
            })
        }.bind(this) : function(t) {
            this.execute({
                keyEvent: t
            })
        }.bind(this), BIF.objects.commands.keyManager.addBinding(t, n, i || {
            stop: !0,
            global: !0
        })
    }, i
}),
define("bifocal/themes/read/default/src/parts/commands", ["require", "common", "shibui/src/key-manager", "./command"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype,
        s = t("shibui/src/key-manager"),
        o = t("./command");
    return n.$init = function() {
        this.keyManager = new s,
        this.all = []
    }, n.register = function(t) {
        var e;
        e = t instanceof o ? t : new o(t),
        this.all.push(e)
    }, n.find = function(t) {
        for (var e = 0, i = this.all.length; e < i; ++e) {
            var n = this.all[e];
            if (n.refresh().name == t)
                return n
        }
    }, n.execute = function(t) {
        var e = this.find(t);
        if (e) {
            var i = Array.prototype.slice.apply(arguments).slice(1);
            return e.execute.apply(e, i)
        }
        throw "[COMMANDS] missing: " + t
    }, n.dump = function() {
        var t = {};
        return e.each(this.all, function(e) {
            var i = e.refresh(),
                n = i.group || "<ungrouped>",
                s = t[n] = t[n] || [],
                o = [i.name || "<unnamed>"];
            e.shortcuts().length && o.push(e.shortcuts().join(" | ")),
            e.isEnabled() || o.push("[DISABLED]"),
            s.push(o.join(" -- "))
        }), t
    }, i
}),
define("bifocal/themes/read/default/src/parts/quirks", ["require", "core/src/quirks"], function(t) {
    var e = t("core/src/quirks");
    return e.add("slow", "eink", "android-stock", "blackberry", "nintendo"), e.add("isolated-contact-events", "gecko"), e.add("plain-fonts-only", "android", "kindle3"), e.add("scroll-out-chrome", "ios safari"), e.add("glaze-inaccurate-during-translation", "ios"), e.add("cannot-disable-native-selection", "android-stock android<4"), e.add("zoom-unavailable", "android-stock"), e.add("useless-3d-transforms", "android<4", "iexplore<12"), e.add("element-from-point-fails-when-obscured", "iexplore", "edge"), e.add("supply-message-in-referrer", "embedded !nautilus"), e.add("measured-layout-available", "!mobile !nautilus", "!mobile nautilus-browser"), e.add("multi-sequence-svg-components-sluggish", "!safari"), e
}),
define("bifocal/themes/read/default/src/parts/world-layout", ["require", "core/src/view", "../parts/quirks"], function(t) {
    var e = t("core/src/view"),
        i = e.new(),
        n = i.prototype,
        s = t("../parts/quirks");
    return n._layout = function(t) {
        BIF.elements = this._build("", {
            extending: t,
            classes: "book-surface"
        }, " book-pillar", "  book-layer", "   book-bounds", "    book-buffer", {
            classes: "bumper-i-n bumper-i-e bumper-i-s bumper-i-w"
        }, "     book-portal", "      scene", "    book-widgets", " modal-layer")
    }, n._listen = function(t, e) {
        t.dragstart = BIF.events.on(window, "dragstart", BIF.events.stop),
        s("cannot-disable-viewport-scaling") && (t.gesturestart = BIF.events.on(document, "gesturestart", BIF.events.stop)),
        t.touchstart = BIF.events.on(document.body, "touchstart", function() {});
        for (var i = e.bookPortal; i;)
            BIF.events.ScrollManager.unscrollable(i),
            i = i.parentNode;
        BIF.events.on(window, "scroll", function() {
            document.activeElement && ("INPUT" != document.activeElement.tagName && "TEXTAREA" != document.activeElement.tagName || window.scrollTo(0, 0))
        })
    }, i
}),
define("bifocal/themes/listen/default/src/parts/world-layout", ["require", "common", "../../../../read/default/src/parts/world-layout"], function(t) {
    var e = (t("common"), t("../../../../read/default/src/parts/world-layout")),
        i = e.new(),
        n = i.prototype;
    return n._layout = function(t) {
        this._classify(BIF.root, "max"),
        BIF.elements = this._build("", {
            extending: t,
            classes: "world"
        }, " book-layer", " modal-layer")
    }, n._listen = function(t, i) {
        e.prototype._listen.call(this, t, i),
        this.handlers.resize = BIF.events.on(window, "resize", this._onResize.bind(this)),
        this.handlers.orientation = BIF.events.on(window, "orientationchange", this._onResize.bind(this))
    }, n._onResize = function(t) {
        this._defer("resize", function() {
            BIF.events.dispatch("bifocal:resize"),
            window.scrollTo(0, 0)
        })
    }, i
}),
function(t, e, i) {
    "use strict";
    function n(t) {
        t && (t.setTargetAtTime || (t.setTargetAtTime = t.setTargetValueAtTime))
    }
    window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext") && (window.AudioContext = webkitAudioContext, AudioContext.prototype.hasOwnProperty("createGain") || (AudioContext.prototype.createGain = AudioContext.prototype.createGainNode), AudioContext.prototype.hasOwnProperty("createDelay") || (AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode), AudioContext.prototype.hasOwnProperty("createScriptProcessor") || (AudioContext.prototype.createScriptProcessor = AudioContext.prototype.createJavaScriptNode), AudioContext.prototype.internal_createGain = AudioContext.prototype.createGain, AudioContext.prototype.createGain = function() {
        var t = this.internal_createGain();
        return n(t.gain), t
    }, AudioContext.prototype.internal_createDelay = AudioContext.prototype.createDelay, AudioContext.prototype.createDelay = function() {
        var t = this.internal_createDelay();
        return n(t.delayTime), t
    }, AudioContext.prototype.internal_createBufferSource = AudioContext.prototype.createBufferSource, AudioContext.prototype.createBufferSource = function() {
        var t = this.internal_createBufferSource();
        return t.start || (t.start = function(t, e, i) {
            e || i ? this.noteGrainOn(t, e, i) : this.noteOn(t)
        }), t.stop || (t.stop = t.noteOff), n(t.playbackRate), t
    }, AudioContext.prototype.internal_createDynamicsCompressor = AudioContext.prototype.createDynamicsCompressor, AudioContext.prototype.createDynamicsCompressor = function() {
        var t = this.internal_createDynamicsCompressor();
        return n(t.threshold), n(t.knee), n(t.ratio), n(t.reduction), n(t.attack), n(t.release), t
    }, AudioContext.prototype.internal_createBiquadFilter = AudioContext.prototype.createBiquadFilter, AudioContext.prototype.createBiquadFilter = function() {
        var t = this.internal_createBiquadFilter();
        return n(t.frequency), n(t.detune), n(t.Q), n(t.gain), t
    }, AudioContext.prototype.hasOwnProperty("createOscillator") && (AudioContext.prototype.internal_createOscillator = AudioContext.prototype.createOscillator, AudioContext.prototype.createOscillator = function() {
        var t = this.internal_createOscillator();
        return t.start || (t.start = t.noteOn), t.stop || (t.stop = t.noteOff), n(t.frequency), n(t.detune), t
    }))
}(window),
define("bifocal/themes/read/default/src/ext/audio-context-shim", function() {}),
define("bifocal/themes/listen/default/src/parts/quirks", ["require", "core/src/quirks"], function(t) {
    var e = t("core/src/quirks");
    return e.add("playback-rate-locked", "android chrome<51 !nautilus"), e.add("web-audio-not-processed", "safari", "ios", "chrome"), e.add("web-audio-disables-playback-rate", "gecko", "edge"), e.add("no-css-filter-on-svg", "ios<12"), e.add("weird-svg-transform-origins", "iexplore", "edge"), e.add("svg-style-transform-unavailable", "edge"), e
}),
define("bifocal/themes/listen/default/src/parts/place", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.$init = function(t, i) {
        if (this._.compass = t, this.timestamp = e.epochMilliseconds(), this.uuid = e.generateUUID(), "string" == typeof i && (i = parseFloat(i)), "number" == typeof i && (i = {
            floc: i
        }), "undefined" != typeof i.component && "undefined" != typeof i.milliseconds && (i = {
            floc: this._floc(i.component, i.milliseconds)
        }), "undefined" != typeof i.floc)
            e.absorb(this._flocToPlace(i.floc), this);
        else if ("undefined" != typeof i.bookMilliseconds)
            e.absorb(this._msToPlace(i.bookMilliseconds), this);
        else {
            if ("undefined" == typeof i.percentageOfBook)
                return;
            var n = parseFloat(i.percentageOfBook),
                s = this._.compass.spool.durationMilliseconds,
                o = n <= 0 ? 0 : Math.min(s * n, s - 1e3);
            e.absorb(this._msToPlace(o), this)
        }
        this.chapter = this._chapterAtMS(this.bookMilliseconds)
    }, n.isFinite = function() {
        return "undefined" != typeof this.bookMilliseconds && isFinite(this.bookMilliseconds)
    }, n.isSeekable = n.isFinite, n.isPrecise = n.isFinite, n.seek = function() {
        this.isSeekable() ? this._.compass.spool.seekWithinBook(this.bookMilliseconds) : console.warn("Cannot seek to uninitialized place:", this)
    }, n.toHash = function() {
        return {
            uuid: this.uuid,
            timestamp: Math.round(this.timestamp / 1e3),
            spinePosition: Math.floor(this.floc),
            componentMilliseconds: this.componentMilliseconds,
            percentageOfComponent: this.floc % 1,
            percentageOfBook: this.percentageOfBook
        }
    }, n.citation = function() {
        return this.chapter ? this.chapter.title : null
    }, n.component = function() {
        if ("number" == typeof this.floc)
            return this._flocToPlace(this.floc).component
    }, n._flocToPlace = function(t) {
        t = parseFloat(t);
        var e = this._.compass.spool.durationMilliseconds,
            i = Math.floor(t),
            n = this._.compass.spool.components[i],
            s = this._.compass.measure(),
            o = Math.round(t % 1 * s.durations[i]),
            r = Math.round(s.offsets[i] + o);
        return {
            floc: t,
            component: n,
            componentMilliseconds: o,
            bookMilliseconds: r,
            percentageOfBook: r / e
        }
    }, n._msToPlace = function(t) {
        t = Math.round(parseFloat(t));
        for (var e = 0, i = 0, n = this._.compass.measure().offsets; n.length > e + 1 && n[e + 1] <= t;)
            e += 1,
            i = n[e];
        var s = this._.compass.spool.durationMilliseconds,
            o = this._.compass.spool.components[e],
            r = t - i;
        return {
            floc: this._floc(o, r),
            component: o,
            componentMilliseconds: r,
            bookMilliseconds: t,
            percentageOfBook: t / s
        }
    }, n._chapterAtMS = function(t) {
        var e = 2e3;
        t = Math.max(0, t) + e;
        for (var i, n = 0, s = this._.compass.chapters.length; n < s; ++n) {
            var o = this._.compass.chapters[n];
            if (!o.place.isSeekable() || o.place.bookMilliseconds > t)
                break;
            i = o
        }
        return i
    }, n._floc = function(t, e) {
        var i = t.index,
            n = this._.compass.measure().durations;
        return i += Math.min(e / n[i], .9999999)
    }, i
}),
define("bifocal/themes/listen/default/src/parts/chapter-manager", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.previousPlace = function(t) {
        t = t || BIF.objects.compass.place;
        for (var i = e.try(t, "chapter"); i;) {
            if (this._placeDistance(t, i.place) < 0)
                return i.place;
            i = i.prev
        }
        return BIF.objects.compass.at({
            percentageOfBook: 0
        })
    }, n.nextPlace = function(t) {
        if (t = t || BIF.objects.compass.place, !t.chapter) {
            var i = e.try(BIF.objects.compass, "chapters[0]");
            if (i)
                return i.place
        }
        for (var n = e.try(t, "chapter.next"); n;) {
            if (this._placeDistance(t, n.place) > 0)
                return n.place;
            n = n.next
        }
        return BIF.objects.compass.at({
            percentageOfBook: 1
        })
    }, n._placeDistance = function(t, i) {
        var n = e.try(t, "bookMilliseconds"),
            s = e.try(i, "bookMilliseconds");
        if ("number" != typeof n || "number" != typeof s)
            return !1;
        var o = s - n;
        return Math.abs(o) > 2e3 ? o : 0
    }, i
}),
define("bifocal/themes/listen/default/src/parts/compass", ["require", "common", "./place", "shibui/src/phrasebook", "./chapter-manager"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype,
        s = t("./place"),
        o = t("shibui/src/phrasebook"),
        r = t("./chapter-manager");
    return n.$init = function(t) {
        this.spool = t,
        this.place = null,
        this.chapters = [],
        this.chapterManager = new r,
        this._.landmarks = {},
        this._initializeChapters()
    }, n.at = function(t) {
        return new s(this, t)
    }, n.landmarks = function(t, e) {
        var i = this._.landmarks[t] = this._.landmarks[t] || [];
        e(function(e, n, s) {
            for (var o = {
                    type: t,
                    id: e,
                    place: n,
                    meta: s || {}
                }, r = 0, a = i.length; r < a; ++r)
                if (i[r].type == t && i[r].id == e)
                    return i[r] = o;
            i.push(o)
        }),
        this._.landmarkTimer || (this._.landmarkTimer = setTimeout(this._announceLandmarks.bind(this), 0))
    }, n.setPlace = function(t) {
        this.place = t,
        BIF.events.dispatch("bifocal:place", {
            place: this.place
        })
    }, n.measure = function() {
        if (this._.measurements)
            return this._.measurements;
        var t = {
                offsets: [],
                durations: []
            },
            i = 0;
        return e.each(this.spool.components, function(e) {
            t.offsets[e.index] = i,
            i += t.durations[e.index] = e.durationMilliseconds
        }), this._.measurements = t
    }, n._announceLandmarks = function() {
        e.each(this._.landmarks, function(t, e) {
            BIF.events.dispatch("bifocal:landmarks:group", {
                name: t,
                items: e
            })
        }),
        this._.landmarks = {},
        this._.landmarkTimer = null
    }, n._announceChapters = function(t) {
        this.landmarks("chapter", function(t) {
            var i = function(n) {
                if (n.place.isSeekable()) {
                    var s = (n.place.floc + "").replace(/\./g, "-");
                    t(s, n.place, {
                        title: n.title,
                        level: n.level
                    })
                }
                n.contents && e.each(n.contents, i)
            };
            e.each(this.chapters, i)
        }.bind(this))
    }, n._initializeChapters = function() {
        var t = BIF.map.nav ? BIF.map.nav.toc : null;
        this.chapters = this._assembleChapters(t, 0),
        BIF.events.on("bifocal:ready", function() {
            this._announceChapters(this.chapters)
        }.bind(this))
    }, n._assembleChapters = function(t, i, n) {
        if (t && (n = n || [], e.each(t, function(t) {
            var e = {
                level: i,
                title: t.title,
                index: n.length
            };
            if (e.prev = n[e.index - 1]) {
                if (e.prev.title == e.title)
                    return;
                e.prev.next = e
            }
            if (t.path) {
                var s = t.path.split("#"),
                    o = s[0].replace(/^\//, ""),
                    r = 1e3 * parseFloat(s[1] || "0"),
                    a = this._componentById(o);
                a && r < a.durationMilliseconds && (!n.length && (a.prev || r > 0) && (n = this._chaptersForPrecedingComponents(a)), e.place = this.at({
                    component: a,
                    milliseconds: r
                }), e.place.chapter = e)
            }
            e.place = e.place || this.at({}),
            n.push(e)
        }, this)), n)
            return n;
        if (0 == i) {
            var s = this.spool.components.length - 1,
                o = this.spool.components[s];
            return this._chaptersForPrecedingComponents(o)
        }
        return []
    }, n._chaptersForPrecedingComponents = function(t) {
        for (var e = []; t;) {
            var i = o.text("compass.part", {
                    PART: t.index + 1
                }),
                n = this.at(t.index);
            e.unshift({
                place: n,
                path: t.meta.path,
                level: 0,
                title: i,
                index: t.index
            }),
            n.chapter = e[0],
            t = t.prev
        }
        return e
    }, n._componentById = function(t) {
        for (var e = 0, i = this.spool.components.length; e < i; ++e) {
            var n = this.spool.components[e];
            if (n.id === t)
                return n
        }
    }, i
}),
define("bifocal/themes/listen/default/src/parts/component", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.$init = function(t, i, n) {
        this.spool = t,
        this.meta = e.absorb(i, {}),
        (this.prev = n) && (n.next = this),
        this.next = null;
        var s = parseFloat(e.excise(this.meta, "audio-duration"));
        this.durationMilliseconds = 1e3 * s,
        this.index = this.meta.index,
        this.id = e.excise(this.meta, "-odread-original-path") || this.meta.path,
        this.id = this.id.replace(/^\//, "")
    }, n.isFocus = function() {
        return this.spool.focus.component == this
    }, n._l = function() {
        return this.meta.path
    }, i
}),
define("bifocal/themes/read/default/src/parts/seeker", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.INTERVAL = 10, n.$init = function() {
        this._listen()
    }, n._listen = function() {
        BIF.events.on("bifocal:place", this._onPlace.bind(this)),
        BIF.events.on("bifocal:seeking", this._onSeeking.bind(this)),
        BIF.events.on("bifocal:seeked", this._onSeeked.bind(this))
    }, n._onPlace = function(t) {
        this.seeking || this._deferEvent(t, "place")
    }, n._onSeeking = function(t) {
        this.seeking = !0,
        this._deferEvent(t, "seek")
    }, n._onSeeked = function(t) {
        this.seeking = !1,
        this._deferEvent(t, "seek")
    }, n._queueEvent = function(t, i) {
        this._.pendingEvtData = e.absorb(t.m, {
            mode: i,
            source: "unknown"
        })
    }, n._deferEvent = function(t, e) {
        this._queueEvent(t, e),
        this._.timer = this._.timer || setTimeout(this._announceEvent.bind(this), this.INTERVAL)
    }, n._announceEvent = function() {
        this._.pendingEvtData && (BIF.events.dispatch("bifocal:seeker:place", this._.pendingEvtData), this._.pendingEvtData = null),
        clearTimeout(this._.timer),
        this._.timer = null
    }, i
}),
define("bifocal/themes/read/default/src/parts/audio-proxy-element", ["require", "common", "./quirks", "dervish/src/urls"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype,
        s = t("./quirks"),
        o = t("dervish/src/urls");
    return n.APPLY_PBR_DELAY_MS = 200, n.MAX_LOAD_ATTEMPTS = 5, n.$init = function(t, e) {
        this._.stage = t,
        this._.seeking = !1,
        this._.playing = !1,
        this._.callbacks = {},
        this._.loadAttempts = 0,
        e && (this._.pollFn = this._pollPosition.bind(this))
    }, n.prime = function() {
        this._.priming = !0,
        this.seek("//static.od-cdn.com/bifocal/silence.mp3", 0),
        this.play()
    }, n.setPlaybackRate = function(t) {
        this._.playbackRate = t || 1,
        this._.element && this._applyPlaybackRate()
    }, n.play = function() {
        if (this._.element) {
            var t = this._.element.play();
            t && "function" == typeof t.catch && t.catch(this.pause.bind(this))
        }
        this._.playing = !0,
        this._reportPosition()
    }, n.pause = function() {
        this._.element && !this._.element.paused && this._.element.pause(),
        this._.playing = !1,
        this._reportPosition()
    }, n.position = function() {
        var t = this._.element;
        return this._.seeking ? 1e3 * this._.seekTime : this._.ended ? (t ? 1e3 * t.duration : 0) || this._.lastPosition : this._.lastPosition = t ? 1e3 * t.currentTime : 0
    }, n.seek = function(t, e) {
        return isFinite(e) ? (this._.ended = !1, this._.seeking = !0, this._.seekTime = e / 1e3, t != this._.mediaPath ? this._load(t) : this._atSoughtTime() ? (console.log("[APE] SEEK to %o ... and already here.", this._.seekTime), this._.seeking = !1) : (console.log("[APE] SEEK to %o ... underway.", this._.seekTime), this._.element.currentTime = this._.seekTime, this._checkForTimeMismatch()), void this._reportPosition()) : console.error("[APE] refusing to seek to ", e)
    }, n.on = function(t) {
        this._.callbacks.position = t.position,
        this._.callbacks.ended = t.ended,
        this._.callbacks.error = t.error
    }, n.hangup = function() {
        this._.callbacks.position = null,
        this._.callbacks.ended = null,
        this._.callbacks.error = null
    }, n._spawnElement = function() {
        return this._.element = new Audio(this._.mediaSource), s("skip-cors-for-webaudio") || (this._.element.crossOrigin = "anonymous"), this._.element.webkitPreservesPitch = !0, this._.element.mozPreservesPitch = !0, this._mediaListen("error", this._onError), this._mediaListen("loadedmetadata", this._onLoadedMetadata), this._mediaListen("canplay", this._onSeeked), this._mediaListen("seeked", this._onSeeked), this._mediaListen("playing", this._onPlaying), this._mediaListen("pause", this._onPause), this._mediaListen("ended", this._onEnded), this._.stage && (this._.mes = this._.stage.context.createMediaElementSource(this._.element), this._.mes.connect(this._.stage.entry)), this._.element
    }, n._load = function(t) {
        o.toSrcMedia(t, function(e) {
            this._.mediaPath = t,
            this._.mediaSource = e,
            this._reload(this._.element)
        }.bind(this))
    }, n._reload = function(t) {
        this._.loadAttempts += 1,
        this._.element = t || this._spawnElement(),
        this._.element.pause(),
        this._.element.setAttribute("src", this._.mediaSource),
        this._.element.load()
    }, n._atSoughtTime = function() {
        return Math.abs(this._.element.currentTime - this._.seekTime) <= .1
    }, n._applyPlaybackRate = function() {
        isFinite(this._.playbackRate) && this._.playbackRate != this._.element.playbackRate && (this._.element.playbackRate = this._.playbackRate, this._reportPosition(), clearTimeout(this._.applyPBRTimer), this._.applyPBRTimer = setTimeout(this._applyPlaybackRate.bind(this), this.APPLY_PBR_DELAY_MS))
    }, n._onLoadedMetadata = function(t) {
        this.seek(this._.mediaPath, 1e3 * this._.seekTime),
        this.setPlaybackRate(this._.playbackRate)
    }, n._onError = function(t) {
        this._.priming || (console.warn("[APE] ERR: %s", this._.mediaPath, this._.element.error), BIF.objects.audioManager && BIF.objects.audioManager.compatibilityError(), this._.mediaPath = null, this._.mediaSource = null, this._.callbacks.error && this._.callbacks.error({
            error: this._.element.error
        }))
    }, n._onSeeked = function() {
        this._.seeking && (this._.seeking = !1, this._reportPosition()),
        this._.playing && this._.element.paused && this._.element.play()
    }, n._onPlaying = function() {
        this._.playing = !0,
        this._.pollFn ? this._.pollFn() : this._mediaListen("timeupdate", function() {
            this._reportPosition()
        }.bind(this)),
        this._mediaDeafen("waiting"),
        this._reportPosition()
    }, n._pollPosition = function() {
        this._reportPosition(),
        cancelAnimationFrame(this._.pollFn.request),
        this._.pollFn.request = requestAnimationFrame(this._.pollFn)
    }, n._reportPosition = function() {
        this._.callbacks.position && this._.callbacks.position({
            playing: this._.playing,
            seeking: this._.seeking,
            path: this._.mediaPath,
            ms: this.position()
        })
    }, n._onPause = function(t) {
        this._.pollFn && cancelAnimationFrame(this._.pollFn.request)
    }, n._onEnded = function(t) {
        this._.ended = !1,
        this._.element.pause(),
        this._.callbacks.ended && this._.callbacks.ended({
            path: this._.mediaPath,
            ms: this.position()
        }),
        this._.pollFn && cancelAnimationFrame(this._.pollRequest)
    }, n._checkForTimeMismatch = function() {
        this._atSoughtTime() || console.warn("[APE] currentTime mismatch. Is the server honoring byte-range requests?[Path:%s | Expected:%s | Actual:%s]", this._.mediaPath, this._.seekTime, this._.element.currentTime)
    }, n._listenForAnyAudioEvents = function(t) {
        for (var e = function(t) {
                console.log("[APE] EVT: %s", this._.mediaPath, t.type)
            }.bind(this), i = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "mozaudioavailable", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], n = 0, s = i.length; n < s; ++n)
            BIF.events.listen(t, i[n], e)
    }, n._mediaListen = function(t, e) {
        this._mediaDeafen(t),
        this._.bindings[t] = e.bind(this),
        BIF.events.listen(this._.element, t, this._.bindings[t])
    }, n._mediaDeafen = function(t) {
        this._.bindings = this._.bindings || {},
        this._.bindings[t] && BIF.events.deafen(this._.element, t, this._.bindings[t])
    }, i
}),
define("bifocal/themes/listen/default/src/parts/spool", ["require", "common", "bifocal/themes/read/default/src/ext/audio-context-shim", "./quirks", "./compass", "./component", "bifocal/themes/read/default/src/parts/seeker", "bifocal/themes/read/default/src/parts/audio-proxy-element"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype,
        s = (t("bifocal/themes/read/default/src/ext/audio-context-shim"), t("./quirks")),
        o = t("./compass"),
        r = t("./component"),
        a = t("bifocal/themes/read/default/src/parts/seeker");
    n.AUDIO_PROXY_CLASS = t("bifocal/themes/read/default/src/parts/audio-proxy-element"),
    n.BANK_KEY_PLAYBACK_RATE = "audiobook:pbr",
    n.DEFAULT_PLAYBACK_RATE = 1;
    var c = {};
    return n.$init = function() {
        this._.stage = this._setStage(),
        this._.proxy = new this.AUDIO_PROXY_CLASS(this._.stage),
        this._.proxy.on({
            position: this._onPosition.bind(this),
            ended: this._onEnded.bind(this),
            error: this._onError.bind(this)
        }),
        this._setState("paused");
        var t = parseFloat(BIF.bank.global.get(this.BANK_KEY_PLAYBACK_RATE));
        t ? this._setPlaybackRate(t) : this._setPlaybackRate(this.DEFAULT_PLAYBACK_RATE),
        this.components = [],
        this.focus = null,
        this._listen()
    }, n.prepare = function() {
        this.durationMilliseconds = 0,
        this.components = this._assembleComponents(),
        BIF.objects.compass = new o(this),
        BIF.objects.seeker = new a(this),
        setTimeout(function() {
            BIF.events.dispatch("bifocal:spool:prepared", {
                spool: this
            }),
            this._locateFirstPlace()
        }.bind(this), 0)
    }, n.play = function() {
        this._.proxy.play()
    }, n.pause = function() {
        this._.proxy.pause()
    }, n.toggle = function() {
        return "paused" == this.state || "error" == this.state ? (this.play(), !0) : "ended" != this.state ? (this.pause(), !1) : void 0
    }, n.seek = function(t, e, i) {
        if (!isFinite(e))
            return console.error("[SPOOL] cannot seek to infinite milliseconds");
        e < 0 && (e = t.durationMilliseconds + e);
        for (var n = e, s = 0, o = this.components.length; s < o && this.components[s] != t; ++s)
            n += this.components[s].durationMilliseconds;
        i || this._jumping(n),
        this._.proxy.seek(c[t.id], e)
    }, n.seekWithinBook = function(t, e) {
        var i = BIF.objects.compass.at({
            bookMilliseconds: t
        });
        this.seek(i.component, i.componentMilliseconds, e)
    }, n.seekBy = function(t) {
        if (!this.focus)
            return void console.warning("[SPOOL] no focus yet in seekBy(%s)", t);
        var e = this.focus.component,
            i = this.focus.componentMilliseconds,
            n = i + t;
        if (t < 0 - i)
            return void (e.prev && i < 2e3 ? this.seek(e.prev, n) : this.seek(e, 0));
        for (; e.next && n > e.durationMilliseconds;)
            n -= e.durationMilliseconds,
            e = e.next;
        var s = Math.min(n, e.durationMilliseconds - 1);
        this.seek(e, s, !0)
    }, n._setStage = function() {
        var t;
        return "undefined" == typeof AudioContext || s("web-audio-not-processed") || s("web-audio-disables-playback-rate") || (t = {
            context: new AudioContext
        }, t.gainNode = t.context.createGain(), t.exit = t.gainNode, t.entry = t.gainNode, t.exit.connect(t.context.destination)), t
    }, n._listen = function() {
        BIF.events.on("bifocal:audio:playbackrate", this._onPlaybackRate.bind(this)),
        BIF.events.on("bifocal:audio:sleep", function(t) {
            this._.sleepAt = null,
            clearTimeout(this._.sleepTimer),
            "function" == typeof this._.proxy.scheduleSleep ? this._.proxy.scheduleSleep(t.m) : t.m.in ? this._.sleepTimer = setTimeout(this.pause.bind(this), t.m.in) : t.m.at && (this._.sleepAt = t.m.at)
        }.bind(this)),
        BIF.events.on("bifocal:seeking", this._onSeeking.bind(this)),
        BIF.events.on("bifocal:seeked", this._onSeeked.bind(this))
    }, n._assembleComponents = function() {
        var t = BIF.map.spine.length,
            i = 0,
            n = [];
        return e.each(BIF.map.spine, function(s, o) {
            var a = e.absorb(s, {
                    total: t,
                    index: o
                }),
                l = new r(this, a, n[n.length - 1]);
            l.spinePosition = a["-odread-spine-position"] || o,
            n.push(l),
            c[l.id] = l._l(),
            i += l.durationMilliseconds,
            this.durationMilliseconds += l.durationMilliseconds
        }, this), n
    }, n._locateFirstPlace = function() {
        this.focus = null,
        BIF.map.firstPlace && (this.focus = BIF.objects.compass.at({
            floc: BIF.map.firstPlace
        })),
        this.focus && this.focus.isSeekable() || (this.focus = BIF.objects.compass.at({
            floc: 0
        })),
        this._publishPlace(),
        BIF.state.autonomousAudio || this.focus.seek()
    }, n._onPlaybackRate = function(t) {
        this._setPlaybackRate(t.m)
    }, n._setPlaybackRate = function(t) {
        t != this.playbackRate && (this.playbackRate = t, this._.proxy.setPlaybackRate(this.playbackRate), BIF.bank.global.set(this.BANK_KEY_PLAYBACK_RATE, this.playbackRate))
    }, n._onSeeking = function(t) {
        this.seeking = !0,
        "playing" == this.state && (this._.nudgePlace = t.m.place, this._.nudger = this._.nudger || e.staggerInvocation(function() {
            this._.nudgePlace && this._.nudgePlace.seek()
        }.bind(this), 250, 1500), this._.nudger())
    }, n._onSeeked = function(t) {
        this.seeking = !1,
        this._.nudger && (delete this._.nudger, delete this._.nudgePlace)
    }, n._onPosition = function(t) {
        var i = {};
        if (t.path != c[e.try(this.focus, "component.id")])
            i.component = this._componentByPath(t.path),
            i.milliseconds = Math.round(t.ms) || 0;
        else {
            var n = "number" == typeof t.ms ? Math.round(t.ms) : null,
                s = e.try(this.focus, "componentMilliseconds");
            "number" == typeof s && n === s || (i.milliseconds = n || 0)
        }
        var o = {};
        "number" == typeof i.milliseconds && (o.component = i.component || e.try(this.focus, "component"), o.milliseconds = i.milliseconds),
        o.component && (this.focus = BIF.objects.compass.at(o), this._.nudger || this._publishPlace());
        var r = this.state;
        t.playing && t.seeking ? this._setState("pending") : this._isEnded() ? this._setState("ended") : t.playing ? this._setState("playing") : "error" != r && this._setState("paused"),
        r != this.state && (i.state = this.state),
        (o.component || i.state) && (clearTimeout(this._.tickTimer), "playing" == this.state && (this._.tickTimer = setTimeout(function() {
            var t = BIF.objects.compass.place,
                e = t.bookMilliseconds + 1e3,
                i = BIF.objects.compass.at({
                    bookMilliseconds: e
                });
            this._onPosition({
                ms: i.componentMilliseconds,
                path: c[i.component.id],
                playing: "playing" == this.state || "pending" == this.state,
                seeking: "pending" == this.state,
                interpolated: !0
            })
        }.bind(this), 1e3 / this.playbackRate))),
        "playing" == this.state && !this.seeking && "number" == typeof this._.sleepAt && BIF.objects.compass.place.bookMilliseconds >= this._.sleepAt && (this._.sleepAt = null, this.pause()),
        this._.retryAttempts && !this.seeking && "playing" == i.state && (clearTimeout(this._.retryTimer), this._.retryTimer = setTimeout(function() {
            this._.retryAttempts = 0
        }.bind(this), 5e3))
    }, n._publishPlace = function() {
        BIF.objects.compass.setPlace(this.focus),
        this._jumped()
    }, n._jumping = function(t) {
        var e = BIF.objects.compass.place;
        this._.jumping = {
            placeOrigin: e || BIF.objects.compass.at({
                bookMilliseconds: 0
            }),
            placeDestination: BIF.objects.compass.at({
                bookMilliseconds: t
            })
        },
        BIF.events.dispatch("bifocal:jumping", this._.jumping)
    }, n._jumped = function() {
        this._.jumping && (BIF.events.dispatch("bifocal:jumped", this._.jumping), delete this._.jumping)
    }, n._onEnded = function() {
        var t = this.focus ? this.focus.component.next : null;
        t && !BIF.state.autonomousAudio ? this.seek(t, 0, !0) : (this._.proxy.pause(), this._setState("ended"), this.focus = BIF.objects.compass.at({
            percentageOfBook: 1
        }), this._publishPlace(), clearTimeout(this._.tickTimer))
    }, n._isEnded = function() {
        if (!e.try(this.focus, "component"))
            return !1;
        if (this.focus.component.next)
            return !1;
        var t = this.focus.component.durationMilliseconds - 1e3;
        return this.focus.componentMilliseconds > t
    }, n._onError = function() {
        this._setState("error"),
        this._publishPlace(),
        clearTimeout(this._.tickTimer)
    }, n._showError = function() {
        clearTimeout(this._.retryTimer),
        BIF.events.dispatch("bifocal:notify:dialog", {
            headingText: "spool.playback-error",
            promptText: "spool.playback-error-desc",
            actions: {
                ok: {
                    label: "spool.retry",
                    onTap: this._retryAfterError.bind(this)
                }
            }
        })
    }, n._hideError = function() {
        BIF.objects.notifier.close()
    }, n._retryAfterError = function() {
        this._.retryAttempts = (this._.retryAttempts || 0) + 1,
        BIF.events.dispatch("bifocal:notify:message", "spool.retrying");
        var t;
        t = this._.retryAttempts < 3 ? this._retryByPausingAndPlaying.bind(this) : this._retryByReloading.bind(this),
        clearTimeout(this._.retryTimer),
        this._.retryTimer = setTimeout(t, 1e3)
    }, n._retryByPausingAndPlaying = function() {
        this.pause(),
        this._setState("retrying"),
        clearTimeout(this._.retryTimer),
        this._.retryTimer = setTimeout(this.play.bind(this), 500)
    }, n._retryByReloading = function() {
        this._setState("retrying"),
        BIF.objects.shell ? BIF.objects.shell.transmit("bifocal:reload") : BIF.network.online ? location.reload() : (BIF.events.dispatch("bifocal:notify:message", "spool.offline-retry"), this._.retryAttempts = 0)
    }, n._setState = function(t) {
        var e = this.state;
        this.state != t && (this.state = t, BIF.events.dispatch("bifocal:spool:state", {
            state: t,
            was: e
        }), BIF.objects.activity && BIF.objects.activity.record("playback-" + BIF.objects.spool.state), clearTimeout(this._.astrTimer), "pending" == e && "playing" == t ? (BIF.events.off(this._.stopSyncHandler), this._.stopSyncHandler = BIF.events.on("bifocal:possession:autosync", BIF.events.stop), this._.astrTimer = setTimeout(this._applyStateToRoot.bind(this), 600)) : (BIF.events.off(this._.stopSyncHandler), this._applyStateToRoot()), "error" == t ? this._showError() : "error" == e && this._hideError())
    }, n._applyStateToRoot = function() {
        e.DataClass.set(BIF.root, "playback", this.state)
    }, n._componentByPath = function(t) {
        for (var e = 0, i = this.components.length; e < i; ++e) {
            var n = this.components[e];
            if (c[n.id] == t || n.meta.path == t)
                return n
        }
    }, i
}),
define("dervish/src/activity", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.BANK_KEY = "activity:queues", n.SAVE_INTERVAL_MIN_MS = 500, n.SAVE_INTERVAL_MAX_MS = 5e3, n.SEND_INTERVAL_MIN_MS = 6e3, n.SEND_INTERVAL_MAX_MS = 6e4, n.$init = function() {
        this._.saveQueuesSoon = e.staggerInvocation(this._saveQueuesNow.bind(this), this.SAVE_INTERVAL_MIN_MS, this.SAVE_INTERVAL_MAX_MS),
        this._.flushQueuesSoon = e.staggerInvocation(this._flushQueuesNow.bind(this), this.SEND_INTERVAL_MIN_MS, this.SEND_INTERVAL_MAX_MS),
        this.queues = BIF.bank.title.get(this.BANK_KEY) || {
            pending: {}
        },
        this._revertSending(),
        BIF.events.on(window, "online", this._flushQueuesNow.bind(this))
    }, n.startTracking = function() {
        this._.tracking = !0,
        this._.flushQueuesSoon()
    }, n.record = function(t, i, n) {
        i = e.absorb(i, {}),
        i.syncstamp = i.syncstamp || e.epochMilliseconds(),
        this.queues.announce = this.queues.announce || {},
        this.queues.announce[t] = i;
        var s = this.queues.pending[t] || [];
        n && s.length && (i.condensing = s[1] ? s[1].condensing + 1 : 1, s = s.slice(0, 1)),
        s.push(i),
        this.queues.pending[t] = s,
        this.queues.pending.count = (this.queues.pending.count || 0) + 1,
        this._.saveQueuesSoon(),
        this._.flushQueuesSoon()
    }, n._revertSending = function() {
        this.queues.sending && (e.each(this.queues.sending, function(t, e) {
            "count" == t ? this.queues.pending.count = this.queues.pending.count + e : this.queues.pending[t] ? this.queues.pending[t] = e.concat(this.queues.pending[t]) : this.queues.pending[t] = e
        }, this), delete this.queues.sending, this._.saveQueuesSoon())
    }, n._commitSending = function() {
        this.queues.sending && (delete this.queues.sending, this._.saveQueuesSoon())
    }, n._saveQueuesNow = function() {
        e.each(this.queues.announce, function(t, e) {
            BIF.events.dispatch("dervish:activity:record", {
                label: t,
                act: e
            })
        }),
        delete this.queues.announce,
        BIF.bank.title.set(this.BANK_KEY, this.queues)
    }, n._flushQueuesNow = function() {
        if (this._.tracking && !this.queues.sending && this.queues.pending.count) {
            this.queues.sending = this.queues.pending,
            this.queues.pending = {};
            var t = {
                environment: this._clientEnvironment(),
                activities: e.absorb(this.queues.sending, {})
            };
            delete t.activities.count,
            this._sendActivity(t, this._commitSending.bind(this), this._revertSending.bind(this)),
            this._.saveQueuesSoon()
        }
    }, n._sendActivity = function(t, e, i) {
        return BIF.state.development ? e() : void BIF.network.sendRequest("/_d/activity", {
            method: "POST",
            body: JSON.stringify(t),
            contentType: "application/json",
            success: e,
            failure: i
        })
    }, n._clientEnvironment = function() {
        var t = {
                width: 0,
                height: 0
            },
            e = BIF.elements.region || BIF.elements.reader;
        if (e)
            t.width = e.offsetWidth,
            t.height = e.offsetHeight;
        else {
            var i = document.documentElement;
            t.width = window.innerWidth || i.clientWidth,
            t.height = window.innerHeight || Math.min(i.clientHeight, document.body.clientHeight)
        }
        var n = 0 - 60 * (new Date).getTimezoneOffset();
        return {
            deviceId: BIF.deviceId,
            timezoneOffset: n,
            display: t
        }
    }, i
}),
define("dervish/src/expiration", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.FIRST_CHECK_MS = 5e3, n.CHECK_INTERVAL_MS = 36e5, n.REDIRECTION_DELAY_MS = 2e3, n.$init = function() {
        BIF.state.expires = BIF.map["-odread-msg-expires"],
        BIF.events.on("bifocal:expiration:check", this._onExpirationCheck.bind(this)),
        this.setExpiration(BIF.map["-odread-msg-expires"], this.FIRST_CHECK_MS)
    }, n.timeRemaining = function() {
        var t;
        return t = "expired" == BIF.state.expires ? 0 : "never" == BIF.state.expires ? 1 / 0 : 1e3 * Math.max(0, BIF.state.expires - e.epochSeconds()), {
            expires: BIF.state.expires,
            asMilliseconds: t,
            asSeconds: t / 1e3,
            asMinutes: t / 6e4,
            asHours: t / 36e5,
            asDays: t / 864e5
        }
    }, n.setExpiration = function(t, i) {
        "number" == typeof t ? BIF.state.expires = t : e.among(t, "never", "expired") ? BIF.state.expires = t : (BIF.state.expires = parseFloat(t), isNaN(BIF.state.expires) && (BIF.state.expires = "never")),
        "number" == typeof i ? e.defer(this, "expire", this._checkExpiration.bind(this), i) : this._checkExpiration()
    }, n.acceptExpiration = function() {
        "expired" == BIF.state.expires ? this._redirectToUncachedLocation() : console.warn("[EXPIRATION] cannot accept expiration unless expired")
    }, n._onExpirationCheck = function(t) {
        "undefined" != typeof t.m.expires ? this.setExpiration(t.m.expires) : this._checkExpiration(),
        "expired" == BIF.state.expires && t.preventDefault()
    }, n._checkExpiration = function() {
        e.defer(this, "expire");
        var t = this.timeRemaining(),
            i = t.asMilliseconds;
        if (i) {
            if (isFinite(i)) {
                var n = 1e3 * (e.try(BIF.theme, "data.leeway") || -1);
                i < n && (console.log("[EXPIRATION] expiration warning…", t), BIF.events.dispatch("bifocal:expiration:warning", t));
                var s = i + 1e3;
                s > n && (s -= n),
                s = Math.min(s, this.CHECK_INTERVAL_MS),
                e.defer(this, "expire", this._checkExpiration.bind(this), s)
            }
        } else
            console.log("[EXPIRATION] expired!", t),
            BIF.state.expires = "expired",
            BIF.root.classList.add("expired"),
            BIF.events.dispatch("bifocal:expiration", t, !0) && this._redirectToUncachedLocation()
    }, n._redirectToUncachedLocation = function() {
        var t = document.location.href;
        t += t.indexOf("?") >= 0 ? "&" : "?",
        t += "expired",
        document.location.href = t
    }, i
}),
define("dervish/src/selection", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.$init = function() {
        BIF.events.on("bifocal:component:modify", this._preventSelectionOnComponent.bind(this))
    }, n._preventSelectionOnComponent = function(t) {
        t.m.component.stylizeContent("selection_prevention", ["html * {", "-webkit-touch-callout: none;", "-webkit-user-select: none;", "-moz-user-select: none;", "-ms-user-select: none;", "-o-user-select: none;", "user-select: none;", "}"]),
        BIF.state.development || BIF.events.on(t.m.doc, "contextmenu", BIF.events.stop),
        BIF.events.on(t.m.doc.documentElement, "selectstart", BIF.events.stop),
        BIF.events.on(t.m.doc.documentElement, "dragstart", BIF.events.stop)
    }, i
}),
define("base64-utf8-safe/base64-utf8-safe", ["require"], function(t) {
    function e(t) {
        this._input = t,
        this._index = -1,
        this._buffer = []
    }
    function i(t) {
        this._input = t,
        this._index = -1,
        this._buffer = []
    }
    function n() {
        this.buffer = []
    }
    var s = {
        codex: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    };
    return s.encode = s._e = function(t) {
        for (var i = new n, s = new e(t); s.moveNext();) {
            var o = s.current;
            s.moveNext();
            var r = s.current;
            s.moveNext();
            var a = s.current,
                c = o >> 2,
                l = (3 & o) << 4 | r >> 4,
                h = (15 & r) << 2 | a >> 6,
                u = 63 & a;
            isNaN(r) ? h = u = 64 : isNaN(a) && (u = 64),
            i.append(this.codex.charAt(c) + this.codex.charAt(l) + this.codex.charAt(h) + this.codex.charAt(u))
        }
        return i.toString()
    }, s.decode = s._d = function(t) {
        for (var e, s = new n, o = new i(t); o.moveNext();) {
            var r = o.current;
            if (r < 128)
                s.append(String.fromCharCode(r));
            else if (r > 191 && r < 224)
                o.moveNext(),
                e = o.current,
                s.append(String.fromCharCode((31 & r) << 6 | 63 & e));
            else {
                o.moveNext(),
                e = o.current,
                o.moveNext();
                var a = o.current;
                s.append(String.fromCharCode((15 & r) << 12 | (63 & e) << 6 | 63 & a))
            }
        }
        return s.toString()
    }, e.prototype = {
        current: Number.NaN
    }, e.prototype.moveNext = function() {
        if (this._buffer.length > 0)
            return this.current = this._buffer.shift(), !0;
        if (this._index >= this._input.length - 1)
            return this.current = Number.NaN, !1;
        var t = this._input.charCodeAt(++this._index);
        return 13 == t && 10 == this._input.charCodeAt(this._index + 1) && (t = 10, this._index += 2), t < 128 ? this.current = t : t > 127 && t < 2048 ? (this.current = t >> 6 | 192, this._buffer.push(63 & t | 128)) : (this.current = t >> 12 | 224, this._buffer.push(t >> 6 & 63 | 128), this._buffer.push(63 & t | 128)), !0
    }, i.prototype = {
        current: 64
    }, i.prototype.moveNext = function() {
        if (this._buffer.length > 0)
            return this.current = this._buffer.shift(), !0;
        if (this._index >= this._input.length - 1)
            return this.current = 64, !1;
        var t = s.codex.indexOf(this._input.charAt(++this._index)),
            e = s.codex.indexOf(this._input.charAt(++this._index)),
            i = s.codex.indexOf(this._input.charAt(++this._index)),
            n = s.codex.indexOf(this._input.charAt(++this._index)),
            o = t << 2 | e >> 4,
            r = (15 & e) << 4 | i >> 2,
            a = (3 & i) << 6 | n;
        return this.current = o, 64 != i && this._buffer.push(r), 64 != n && this._buffer.push(a), !0
    }, n.prototype.append = function(t) {
        return this.buffer.push(t), this
    }, n.prototype.toString = function() {
        return this.buffer.join("")
    }, window.btoa = s.encode.bind(s), window.atob = s.decode.bind(s), s
}),
define("base64-utf8-safe", ["base64-utf8-safe/base64-utf8-safe"], function(t) {
    return t
}),
define("lens/src/component", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.HTML = {
        sourceMissing: '<html data-document-status="source missing"></html>',
        loadTimeout: '<html data-document-status="load timeout"></html>'
    }, n.LOAD_CHECK_MS = 500, n.LOAD_TIMEOUT_MS = 15e3, n.LOAD_WAIT_FOR_HTML_MS = 0, n.$init = function(t, i, n) {
        this.context = t,
        this.meta = e.absorb(i, {}),
        this.id = e.excise(this.meta, "-odread-original-path") || this.meta.path,
        this.id = this.id.replace(/^\//, ""),
        this._layout(n),
        this._.workToken = {},
        this._.memo = {}
    }, n.behaveAs = function(t) {
        if (this._.behavior) {
            if (this._.behavior == t)
                return;
            e.unmix(this._.behavior, this)
        }
        this._.behavior = t,
        e.mixin(this._.behavior, this)
    }, n.chain = function(t, e) {
        this.index = e,
        this.sheetBox.id = "LENS_CMPT_" + e,
        this.prev = t[e - 1],
        this.prev && (this.prev.next = this),
        t[e] = this
    }, n.fetch = function(t) {
        if (this.isLoaded())
            t();
        else if (this._.workToken.callback) {
            var e = this._.workToken.callback;
            this._.workToken.callback = function() {
                t(),
                e()
            }
        } else {
            this._commenceWork("fetching", function() {
                t(),
                this.unprime()
            }.bind(this));
            this._loadContent(this._stepWork(this._completeWork.bind(this)))
        }
    }, n.measure = function(t) {
        if ("undefined" == typeof t)
            return this._quickMeasure();
        this._commenceWork("measuring", t);
        this._doMeasuring(this._stepWork(this._completeWork.bind(this)))
    }, n.prime = function(t) {
        var e = this._commenceWork("priming", t),
            i = function(t) {
                this._checkWork(e) && this._doPriming(this._stepWork(this._completeWork.bind(this, t)))
            }.bind(this);
        this._doMeasuring(this._stepWork(i))
    }, n.unprime = function() {
        return clearTimeout(this._.loadTaskTimer), this.boundsBox.removeAttribute("style"), e.each(this.boundsBox.querySelectorAll("iframe"), function(t) {
            t.parentNode.removeChild(t)
        }, this), this.frameBox && (this.frameBox = null, this.context.dispatch("lens:component:unprimed", {
            component: this
        })), this._.memo.isContentLoaded = !1
    }, n.halt = function() {
        this._cancelWork()
    }, n.stylizeContent = function(t, i) {
        if (!this.frameBox || !this.frameBox.contentDocument)
            return void console.warn("[COMPONENT] cannot stylize unless content is loaded", this.index);
        var n = this.frameBox.contentDocument,
            s = "_LENS_CMPT_STYLE_" + t,
            o = n.querySelector("style#" + s) || e.element({
                tag: "style",
                id: s,
                parentNode: n.querySelector("head")
            });
        if (i instanceof Array && (i = i.join("\n")), o.styleSheet)
            o.styleSheet.cssText = i;
        else {
            var r = n.createTextNode(i);
            o.firstChild ? o.replaceChild(r, o.firstChild) : o.appendChild(r)
        }
    }, n.occupy = function(t) {
        var e = ["sheet", this.block.layout];
        this.block.spread && e.push("spread"),
        "pre-paginated" == this.block.layout && this.block.bleed && e.push("bleed-" + this.block.bleed),
        t.blanks[0] && e.push("blank-start"),
        t.blanks[1] && e.push("blank-end"),
        t.widths.sheet && !this.visibleNeighbor("prev") && e.push(this.context.utils.unbiased("left") + "-wing"),
        t.widths.sheet && !this.visibleNeighbor("next") && e.push(this.context.utils.unbiased("right") + "-wing");
        var i = {
            className: e.join(" "),
            side: this.context.utils.unbiased("left"),
            head: t.head,
            size: t.size
        };
        if ("number" != typeof i.head)
            return !1;
        if ("number" != typeof i.size)
            return !1;
        var n = this._.memo.occupation || {};
        return i.className !== n.className && (this.sheetBox.className = i.className), i.side === n.side && i.head === n.head || this.sheetBox.style.setProperty(i.side, i.head + "px"), i.size !== n.size && this.sheetBox.style.setProperty("width", i.size + "px"), this._.memo.occupation = i, !0
    }, n.evict = function() {
        return "sheet" != this.sheetBox.className && this.context.dispatch("lens:component:invisible", {
            component: this
        }), this.sheetBox.className = "sheet", this.sheetBox.removeAttribute("style"), delete this._.memo.occupation, !1
    }, n.isLoaded = function() {
        return this._.memo.isContentLoaded
    }, n.isStylable = function() {
        return !1
    }, n.visibleNeighbor = function(t) {
        for (var e = this[t]; e;) {
            if ("hidden" != e.block.behavior)
                return e;
            e = e[t]
        }
    }, n._layout = function(t) {
        this.sheetBox = e.element({
            parentNode: t,
            classes: "sheet"
        }),
        this.edgeBox = e.element({
            parentNode: this.sheetBox,
            classes: "edge"
        }),
        this.boundsBox = e.element({
            parentNode: this.edgeBox,
            classes: "bounds"
        })
    }, n._commenceWork = function(t, i) {
        return this._.workToken.order ? (console.warn("[COMPONENT] cannot commence work; already working: " + this.index + " -- " + this._.workToken.order + " => " + t), this._.workToken.callback = i, this._.workToken) : this._.workToken = {
            id: e.generateUUID(),
            order: t,
            callback: i
        }
    }, n._stepWork = function(t) {
        if (this._.workToken) {
            var i = e.absorb(this._.workToken, {});
            return i.callback = t, i
        }
        console.error("[COMPONENT] stepWork invoked but workToken is missing")
    }, n._checkWork = function(t) {
        return t.id == this._.workToken.id
    }, n._completeWork = function() {
        var t = this._.workToken;
        this._.workToken = {},
        t.callback.apply(this, arguments)
    }, n._cancelWork = function() {
        this._.workToken = {},
        this.unprime()
    }, n._doMeasuring = function(t) {
        throw "_doMeasuring must be implemented in subclasses."
    }, n._doPriming = function(t) {
        throw "_doPriming must be implemented in subclasses."
    }, n._quickMeasure = function() {}, n._loadingStage = function(t) {
        this._.loadingStage = t
    }, n._scheduleLoadTask = function(t, e) {
        clearTimeout(this._.loadTaskTimer),
        this._.loadTaskTimer = setTimeout(t, e || 0)
    }, n._loadContent = function(t) {
        if (!this._checkWork(t))
            return void this._loadingStage("dead - invalid step token in loadContent");
        if (this.isLoaded())
            t.callback();
        else {
            var i = {
                    path: this.meta.path
                },
                n = function(e) {
                    this._onContentSource(e, t)
                }.bind(this),
                s = this.context.dispatch("lens:component:fetch", i, !0);
            clearTimeout(this._.loadDelayTimer),
            this._.loadDelayTimer = setTimeout(function() {
                s ? (this._loadingStage("requesting component source"), this.context.map.componentSource(this, n)) : n(i.response)
            }.bind(this), e.try(BIF.debug, "loadDelay") || 0)
        }
    }, n._onContentSource = function(t, i) {
        if (!this._checkWork(i))
            return void this._loadingStage("dead - invalid step token on content source");
        t = t || {
            html: this.HTML.sourceMissing
        };
        var n = t.url,
            s = this._onContentLoaded.bind(this, i);
        t.html && (n = this.context.profile.BASE_URL, s = function(e) {
            return this._checkWork(i) ? (this._loadingStage("assigning HTML to blank frame"), void this._scheduleLoadTask(this._populateContentAsHTML.bind(this, t.html, i), this.LOAD_WAIT_FOR_HTML_MS)) : void this._loadingStage("dead - invalid step token in frame populate handler")
        }.bind(this));
        var o = function(t) {
                return this._checkWork(i) ? (this.frameBox = t, void s(t)) : void this._loadingStage("dead - invalid step token in frame load handler")
            }.bind(this),
            r = e.epochMilliseconds() + this.LOAD_TIMEOUT_MS,
            a = function() {
                if (this._checkWork(i)) {
                    var s = function() {
                            if (this._checkWork(i)) {
                                var t = this.HTML.loadTimeout;
                                this._loadingStage("timed out - assigning timeout HTML to blank iframe"),
                                this.frameBox = c,
                                this._scheduleLoadTask(this._populateContentAsHTML.bind(this, t, i), 0)
                            }
                        }.bind(this),
                        o = e.epochMilliseconds();
                    if (o > r)
                        return s();
                    if (t.url) {
                        var l = new XMLHttpRequest;
                        l.open("GET", n, !0),
                        l.onerror = s,
                        l.send()
                    }
                    this._scheduleLoadTask(a, r - o)
                }
            }.bind(this);
        this._scheduleLoadTask(a, this.LOAD_CHECK_MS),
        this._loadingStage("spawning iframe -> " + n);
        var c = e.iframe({
            parentNode: this.boundsBox,
            src: n,
            width: 0,
            height: 0
        }, o);
        c.contentWindow.name = this.id
    }, n._populateContentAsHTML = function(t, e) {
        if (!this._checkWork(e))
            return void this._loadingStage("dead - invalid step token when populating HTML");
        this.context.profile.quirks("referrer-absent-on-doc-write") ? (this.frameBox.contentWindow._LENS_COMPONENT_SOURCE = t, this.frameBox.src = "javascript:window['_LENS_COMPONENT_SOURCE'];") : (this.frameBox.contentDocument.open("text/html", "replace"), this.frameBox.contentDocument.write(t), this.frameBox.contentDocument.close()),
        this._loadingStage("polling for readiness");
        var i = function() {
            var t = this.frameBox.contentDocument;
            "complete" == t.readyState ? (delete this.frameBox.contentWindow._LENS_COMPONENT_SOURCE, this._onContentLoaded(e)) : this._scheduleLoadTask(i, 33)
        }.bind(this);
        this._scheduleLoadTask(i, 33)
    }, n._onContentLoaded = function(t) {
        if (!this._checkWork(t))
            return void this._loadingStage("dead - invalid step token on content loaded");
        this._assignContentHealth(this._isContentHealthy()),
        this.healthy && this._modifyContent();
        var e = this._onContentReady.bind(this, t);
        try {
            this._loadingStage("waiting for fonts.ready promise to fulfill"),
            this.frameBox.contentDocument.fonts.ready.then(e)
        } catch (t) {
            this._loadingStage("deferring a tick before calling _loaded"),
            this._scheduleLoadTask(e, 33)
        }
    }, n._modifyContent = function() {
        this._applyConsistentStylesToContent(),
        this.context.dispatch("lens:component:modify", {
            component: this,
            doc: this.frameBox.contentDocument
        })
    }, n._applyConsistentStylesToContent = function() {
        var t = ["html * {", "-webkit-text-size-adjust: none;", "}"];
        this.context.profile.quirks("font-boosting") && t.splice(2, 0, "max-height: 1000000px;"),
        this.stylizeContent("anti_quirks", t)
    }, n._solicitStylesForContent = function() {
        this.context.dispatch("lens:component:stylize", {
            component: this,
            doc: this.frameBox.contentDocument
        })
    }, n._onContentReady = function(t) {
        return this._checkWork(t) ? (clearTimeout(this._.loadTaskTimer), this._.memo.isContentLoaded = !0, this._loadingStage("done"), void t.callback()) : void this._loadingStage("dead - invalid step token on content ready")
    }, n._onContentStyled = function() {
        this.boundsBox.style.setProperty("opacity", 1)
    }, n._isContentHealthy = function(t) {
        t = t || e.try(this.frameBox, "contentDocument");
        try {
            docStatus = t.documentElement.getAttribute("data-document-status")
        } catch (t) {
            console.warn("[COMPONENT] %s - error checking health", this.id, t)
        }
        return "ok" == docStatus
    }, n._assignContentHealth = function(t) {
        this.healthy !== t && (this.healthy = t, this.healthy === !1 && (this.isLoaded() && (this.frameBox.contentDocument.documentElement.innerHTML = ""), console.warn("[COMPONENT] %s unhealthy: %s", this.index, this.meta.path)))
    }, n._l = function() {
        return this.meta.path
    }, i
}),
define("dervish/src/rumi", ["require", "common", "gala", "base64-utf8-safe", "core/src/bifocal", "lens/src/component", "bifocal/themes/listen/default/src/parts/component"], function(t) {
    function e() {
        var t = ["W7bcWQddSmow", "W7n8FveLWODVhG5CWPNcJa", "ACo9Fq", "W7ddICkckmkuWPPzWQbB", "aSoBe0JcVCkBW59ShCo6WO9c", "WOzPnXBdOq", "lmkYjmosdHJcTSo6eSkZW4H9", "fX4WW6hdSmok", "WOLRmGFdRtVdOW", "pSkNgehcGSk+h00AfSoaj8ozW4r9ASoKBa", "CCo0gCkVW7msW4uqWOZcNfldTL4", "W4xdK8kHFSkfAHVdPSoTWQ9vWQRdHmkI", "W6rigXG", "aCoACXNdISoOW6T5", "ymkbsaq", "kSofFCko", "WPJdQ1TcW7xdUCksW5BcPG", "zSkpfSkHaYZcJCktW7tcQSkmEwWxbSotnJCJWOa", "vaukWPldVColW5y/W5u", "W63dMSkzp8kt", "a8k2feBdGSoYivDqoCkDzW", "grq6W78", "wGWkW7tcQ8kYWPqkW5JdN2dcHde", "WOPdmGFdUa", "WR1sWQldR0hcK1VcRCo8nYJdHSo5FSoJoaf5qWJdTmkT", "W5bqW6izomonc8kZ", "yhldVmkheCkiFqRdISkR", "WP3cUGaOBSoYrxJdGSotWPyN", "WPhdOmoJW4RcJ8oXW6G", "pY/cVWJcHuZcNSkbre1oWRFcMmk4zq", "hmkzW789oSkwhKTYvSomyKG", "WQuOnX58W4bwxsnEWR/cQG", "dCkrW6e/", "se1MWRtcSmogiHZdLZ/dMq", "W7jJp8k+W5bMof5zucWnWP3cVmkhdSkjfY8", "jCkVW7e4FmkVher9eW", "WQXPl8knW4fZlHPyscGC", "WQ1Pk8kGW5rKoq", "W4xdPMNdPXRcGxNdGc4", "W4ikxeG", "W7rXBLupWPTJqsLb", "caSYW6/dSa", "aSoFArddISo/W69H", "dH3dHSkgmmkqEWa", "kddcSbtcNa", "W7fVWRldTmowk8ovWOS", "W79PWQJdQG", "W5TkW7ujj8oGmCkkWOC", "dg/dNdHMWQ0yla", "WR5numkhpIVdV2m", "W5ddKmkzWOhdGSoqW4NdPLm", "WP7cImo8iW", "a8oCe0pcUColW7radSoxWQm", "WOJcLSkUf8o8W6hcJHi", "W63dJWZcUmk5", "xaGkW7xcRmkYWP1TW6RdRhNcTIdcNG", "xCkXamkPsbFcGCkwW6ldTq", "WOdcO21XWQC7WPm", "cwlcJmozjSkp", "W5tdTKT5", "WPdcSa8PA8oXBxBdQCo9WQWF", "WOhdTSkQgq", "tf3dT8kaeG", "bHtcPSoxrSoKtYhdQ8oSvCkQ", "WPNdPCk7fW", "W5/cG3bfWQiQ", "emkFW7O/", "WRmZCmoBW4BcGwJcS2WUFCkopa", "W57cGtyJWQC", "W7n0WQ7dQCo0n8oxWPfnwxpdOW", "W5XAWQjrW4VdKWb6tN3cUCo2W70", "oSojzCkpW6fAWRi", "WPP6W6ZcTmkeje0YW4FdRXKftW", "pdhcHmkZkSoQlq", "CSk5qXmObSkftSoX", "WQe1W7BcVmkdB8opWQbNBL3dLq", "lmodCmkFW75mWRNcUG", "WOhdV8oIW5pcMG", "W55TWR7dUCkBEb7cLIO", "F8kYtHK+j8k/zmkDu1NdICkhrH/dGG", "B8knuGe"];
        return (e = function() {
            return t
        })()
    }
    function i(t, n) {
        var s = e();
        return (i = function(e, n) {
            e -= 230;
            var o = s[e];
            if (void 0 === i.WKzMEE) {
                var r = function(t) {
                        for (var e, i, n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", o = "", r = 0, a = 0; i = t.charAt(a++); ~i && (e = r % 4 ? 64 * e + i : i, r++ % 4) ? s += String.fromCharCode(255 & e >> (-2 * r & 6)) : 0)
                            i = n.indexOf(i);
                        for (var c = 0, l = s.length; c < l; c++)
                            o += "%" + ("00" + s.charCodeAt(c).toString(16)).slice(-2);
                        return decodeURIComponent(o)
                    },
                    a = function(t, e) {
                        var i,
                            n = [],
                            s = 0,
                            o = "";
                        t = r(t);
                        var a;
                        for (a = 0; a < 256; a++)
                            n[a] = a;
                        for (a = 0; a < 256; a++)
                            s = (s + n[a] + e.charCodeAt(a % e.length)) % 256,
                            i = n[a],
                            n[a] = n[s],
                            n[s] = i;
                        a = 0,
                        s = 0;
                        for (var c = 0; c < t.length; c++)
                            a = (a + 1) % 256,
                            s = (s + n[a]) % 256,
                            i = n[a],
                            n[a] = n[s],
                            n[s] = i,
                            o += String.fromCharCode(t.charCodeAt(c) ^ n[(n[a] + n[s]) % 256]);
                        return o
                    };
                i.oSAtPe = a,
                t = arguments,
                i.WKzMEE = !0
            }
            var c = s[0],
                l = e + c,
                h = t[l];
            return h ? o = h : (void 0 === i.zEPSvG && (i.zEPSvG = !0), o = i.oSAtPe(o, n), t[l] = o), o
        })(t, n)
    }
    var n = t("common"),
        s = t("gala"),
        o = t("base64-utf8-safe"),
        r = t("core/src/bifocal"),
        a = t("lens/src/component"),
        c = t("bifocal/themes/listen/default/src/parts/component");
    !function(t, e) {
        for (var n = i, s = t();;)
            try {
                var o = parseInt(n(302, "#fq5")) / 1 + -parseInt(n(233, "@Y6X")) / 2 * (-parseInt(n(231, "$$Jg")) / 3) + -parseInt(n(270, "f^Pl")) / 4 * (parseInt(n(288, "hw!u")) / 5) + parseInt(n(261, "Z7Wd")) / 6 + parseInt(n(289, "#]]6")) / 7 * (parseInt(n(272, "FtQk")) / 8) + -parseInt(n(306, "EW#G")) / 9 + -parseInt(n(282, "#fq5")) / 10 * (parseInt(n(250, "sAnK")) / 11);
                if (o === e)
                    break;
                s.push(s.shift())
            } catch (t) {
                s.push(s.shift())
            }
    }(e, 680308),
    function() {
        function t(t) {
            return o._d(t)
        }
        function e(t) {
            var e = i,
                n = new RegExp(e(245, "*KUc"), "g");
            return o._d(t[e(276, "9b%b")](n, e(287, "R5v&")))
        }
        function l(t, e) {
            for (var n = i, s = [94, 126, 32], o = t[n(246, "FtQk")], r = [], a = 0, c = e[n(304, "rjp$")]; a < c; ++a) {
                var l = e[n(279, "f^Pl")](a),
                    h = t[a % o],
                    u = parseFloat(h);
                u && (l += (a + u) % s[0], l > s[1] && (l = l % s[1] + s[2])),
                r[n(298, "XaZv")](String[n(308, "@Y6X")](l))
            }
            return r[n(290, "sAnK")]("")
        }
        function h(t, e, n) {
            var o,
                r = i;
            try {
                o = t(n)
            } catch (t) {}
            if (o && o[r(293, ")*Wk")](new RegExp(r(255, "5PKt"), "i")))
                try {
                    e[r(234, "%MzY")][r(260, "FtQk")][r(286, "z@Mz")] = o,
                    s[r(284, "@Y6X")](r(240, "f^Pl"), {
                        targetWindow: e
                    })
                } catch (t) {
                    throw console[r(271, "CX)3")](r(269, "CX)3"), o), t
                }
            else {
                var a = e[r(264, "z@Mz")][r(268, "u*jd")];
                a[r(232, "OMq9")] = "",
                a[r(275, "9b%b")](r(256, "R#%0"), r(237, "OMq9"))
            }
        }
        var u = i;
        window[u(274, "CX)3")] = h[u(254, "%MzY")](window, t),
        window[u(265, "#fq5")] = h[u(253, "6amM")](window, e),
        window[u(295, "R#%0")] = h[u(251, "DuF%")](window, l[u(254, "%MzY")](window, f));
        var d,
            p,
            f = location[u(292, "*sCT")][u(280, "FtQk")](".")[0][u(235, "g(pP")]("-")[1];
        if (!f) {
            var m = document[u(230, "s7uj")](u(263, "DA2A"));
            f = m && (m[u(303, "D0WV")][u(258, "J)fc")](new RegExp(u(259, "j5^s"))) || [])[1]
        }
        var _ = n[u(267, "g(pP")](n[u(247, "yh7c")]([window[u(262, "yh7c")]]));
        if (f && _[u(297, "11%v")]) {
            var g = f[u(283, "u*jd")]("")[u(310, "%MzY")]()[u(285, "@Y6X")](""),
                b = o._d(l(g, _[u(305, "CX)3")]('"')));
            d = JSON[u(307, "vaM^")](b);
            var v = u(273, "9b%b");
            (p = (d.b || {})[v]) && delete d.b[v],
            r[u(236, "KMZu")][u(248, "j5^s")] = function() {
                return d
            },
            delete window[u(239, "@Y6X")]
        }
        p && (a[u(277, "HosD")]._l = c[u(242, "J)fc")]._l = function() {
            var t = u,
                e = this[t(244, "yh7c")];
            if (!p[e])
                return BIF[t(241, "*KUc")][t(301, "#fq5")][0][t(300, "D0WV")] + p[0];
            var i = this[t(238, "6amM")][t(278, "pJYg")] + "?" + p[e];
            return e && delete p[e], i
        })
    }()
}),
define("dervish/src/synchronization", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.commence = function(t, e, i) {
        this.state = t,
        this._.callbacks = {
            success: e,
            failure: i
        },
        this._dispatch("commence"),
        "expired" == BIF.state.expires ? this._onFailure("expired") : BIF.state.development ? this._onFailure("development: no sync service") : this.request = BIF.network.sendRequest("/_d/possession", {
            method: "GET",
            accept: "application/json",
            unreliable: !0,
            success: this._onSuccess.bind(this),
            failure: this._onFailure.bind(this)
        })
    }, n.cancel = function() {
        delete this._.callbacks,
        this.request && this.request.abort(),
        this._dispatch("cancel")
    }, n._onSuccess = function(t) {
        var e = this._parseResponseJSON(t);
        if (!e)
            return this._onFailure("invalid response");
        try {
            var i = {
                expires: e.timestamps.expires
            };
            if (!BIF.events.dispatch("bifocal:expiration:check", i, !0))
                return this._onFailure("expired")
        } catch (t) {
            console.warn("[SYNC] Expiration check error:", e, t)
        }
        this._.callbacks && "function" == typeof this._.callbacks.success && this._.callbacks.success(e, this.state),
        this._dispatch("complete")
    }, n._onFailure = function(t) {
        this.state.reason = t,
        this._.callbacks && "function" == typeof this._.callbacks.failure && this._.callbacks.failure(t, this.state),
        this._dispatch("failure")
    }, n._parseResponseJSON = function(t) {
        if (t)
            try {
                return JSON.parse(t)
            } catch (e) {
                console.warn("[SYNC] Cannot parse response JSON:", t, e)
            }
    }, n._dispatch = function(t) {
        BIF.events.dispatch("bifocal:synchronization:" + t, e.absorb(this.state, {
            sync: this
        }))
    }, i
}),
define("dervish/dervish", ["require", "common", "./src/activity", "./src/expiration", "./src/selection", "./src/rumi", "./src/synchronization", "./src/urls"], function(t) {
    var e = (t("common"), {});
    return e.Activity = t("./src/activity"), e.Expiration = t("./src/expiration"), e.Selection = t("./src/selection"), e.Rumi = t("./src/rumi"), e.Synchronization = t("./src/synchronization"), e.URLs = t("./src/urls"), e
}),
define("dervish", ["dervish/dervish"], function(t) {
    return t
}),
define("bifocal/themes/read/default/src/parts/possession", ["require", "common", "shibui/src/phrasebook", "dervish"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype,
        s = (t("shibui/src/phrasebook"), t("dervish"));
    return n.BANK_KEY_PREFIX = "possession", n.DELAY_SEEK = 0, n.DELAY_NOTIFIER = 1e3, n.$init = function() {
        this.data = {
            timestamps: {
                created: e.epochSeconds(),
                updated: e.epochSeconds(),
                stamped: 0,
                expires: BIF.map["-odread-msg-expires"] || 0
            },
            statistics: {
                accesses: 1,
                positions: 0,
                readingTime: 0
            },
            position: null,
            marks: {}
        },
        this.loadFromBank(this.BANK_KEY_PREFIX),
        this._restoreFirstPlace(),
        this._listenForActivity()
    }, n.sync = function(t) {
        this._.sync && this._.sync.cancel(),
        this._.sync = new s.Synchronization,
        t && t.onlyCheckExpiry ? this._.sync.commence({}, function() {}, function() {}) : this._.sync.commence({
            possession: this,
            preSyncPlaceHash: this.data.position
        }, this._onPossessionSync.bind(this), this._onPossessionSyncFailure.bind(this))
    }, n.autoSync = function(t, e) {
        clearTimeout(this._.autoSyncTimer),
        t && (this._.autoSyncTimer = setInterval(function() {
            BIF.events.dispatch("bifocal:possession:autosync", {}, !0) ? this.sync(e) : this._syncJournal("auto-sync prevent-defaulted")
        }.bind(this), t))
    }, n.loadFromBank = function(t) {
        t = t || this.BANK_KEY_PREFIX;
        var e = {
            timestamps: BIF.bank.title.get(t + ":timestamps"),
            statistics: BIF.bank.title.get(t + ":statistics"),
            position: BIF.bank.title.get(t + ":position"),
            marks: BIF.bank.title.get(t + ":marks")
        };
        return this.loadFromData(e)
    }, n.loadFromData = function(t) {
        this._syncJournal("loadFromData", {
            old: i,
            new: t
        });
        var i = e.clone(this.data),
            n = {};
        return i.position && (this._syncPosition(i.position, t.position), n.position = e.excise(t, "position")), e.absorb(this._syncPossessionData(t), n)
    }, n._restoreFirstPlace = function() {
        if (this.data.position) {
            var t = this.data.position.spinePosition,
                e = this._spinePositionToIndex(t) || 0,
                i = e + this.data.position.percentageOfComponent;
            BIF.map.firstPlace = i
        }
    }, n._listenForActivity = function() {
        this._.bindingsOnFirstPlace = this._onFirstPlace.bind(this),
        BIF.events.listen("bifocal:place", this._.bindingsOnFirstPlace)
    }, n._onFirstPlace = function(t) {
        var e = {
            timestamp: Math.round(t.m.place.timestamp / 1e3)
        };
        BIF.objects.activity.record("access", e),
        BIF.events.deafen("bifocal:place", this._.bindingsOnFirstPlace),
        BIF.events.listen("bifocal:place", this._onPlace.bind(this))
    }, n._onPlace = function(t) {
        var e = t.m.place.toHash();
        this.data.position && e.percentageOfBook == this.data.position.percentageOfBook || (this.data.position = e, this._persistPosition())
    }, n._persistPosition = function() {
        BIF.objects.activity.record("position", this.data.position, !0),
        BIF.bank.title.set(this.BANK_KEY_PREFIX + ":position", this.data.position)
    }, n._onPossessionSync = function(t, e) {
        this._.sync = null,
        e.postSyncPlaceHash = t.position || this.data.position,
        delete t.position,
        this._syncPosition(e.preSyncPlaceHash, e.postSyncPlaceHash),
        this._syncPossessionData(t)
    }, n._onPossessionSyncFailure = function(t, e) {
        this._.sync = null,
        this._syncJournal("failed", {
            reason: t
        }, {
            level: "warn"
        })
    }, n._syncPossessionData = function(t) {
        if (this.data.timestamps.stamped && ("number" != typeof e.try(t, "timestamps.stamped") || t.timestamps.stamped < this.data.timestamps.stamped))
            return this._syncJournal("data not fresh", {
                old: this.data,
                new: t
            }, {
                level: "warn"
            });
        var i = {};
        return e.each(t, function(t, e) {
            if ("undefined" != typeof e)
                return "undefined" == typeof this.data[t] ? this._syncJournal("unknown data key", {
                    key: t,
                    val: e
                }) : void (this.data[t] = i[t] = e)
        }, this), this._savePossessionData(i), BIF.events.dispatch("bifocal:possession:synchronized", {
            possession: this
        }), i
    }, n._savePossessionData = function(t) {
        e.each(e.clone(t), function(t, e) {
            BIF.bank.title.set(this.BANK_KEY_PREFIX + ":" + t, e)
        }, this)
    }, n._syncPosition = function(t, i) {
        var n = {
            current: this.data.position,
            local: t,
            remote: i
        };
        if (!i)
            return this._syncJournal("✖︎ no remote place", n);
        if (i.deviceId == BIF.deviceId)
            return this._syncJournal("✖︎ remote from this device", n);
        var s = this._placeHashToPlace(i);
        if (this.data.position) {
            var o = this._placeHashToPlace(this.data.position);
            if (this._comparePlaces(o, s))
                return this._syncJournal("✖︎ remote matches current", n)
        }
        if (!t)
            return e.defer(this, "sync", function() {
                this._goToSyncPlace(s),
                e.defer(this, "sync", function() {
                    "function" == typeof s.refresh && s.refresh(),
                    BIF.events.dispatch("bifocal:notify:message", {
                        label: "possession.synchronized",
                        substitutionTags: !0,
                        builder: function(t) {
                            this._substitutePlacePhrase(t.message, s)
                        }.bind(this)
                    })
                }.bind(this), this.DELAY_NOTIFIER || 0)
            }.bind(this), this.DELAY_SEEK || 0), this._syncJournal("✔︎ jumping to remote (no local)", n);
        if (i.timestamp <= t.timestamp)
            return this._syncJournal("✖︎ remote not fresh", n);
        var r = this._placeHashToPlace(t);
        return this._comparePlaces(r, s) ? this._syncJournal("✖︎ remote matches local", n) : (this._syncPrompt(t, i), this._syncJournal("✔︎ asking (local and remote differ)", n))
    }, n._syncPrompt = function(t, e) {
        var i = this._placeHashToPlace(this.data.position),
            n = this._placeHashToPlace(e);
        BIF.events.dispatch("bifocal:notify:dialog", {
            headingText: "possession.synchronize-position",
            promptText: "possession.describe-sync",
            actions: {
                cancel: {
                    label: "possession.stay-at",
                    substitutionTags: !0
                },
                ok: {
                    label: "possession.go-to",
                    substitutionTags: !0,
                    onTap: this._goToSyncPlace.bind(this, n)
                }
            },
            builder: function(t) {
                var e = t.actions.firstChild,
                    s = this._substitutePlacePhrase(e, i),
                    o = t.actions.lastChild,
                    r = this._substitutePlacePhrase(o, n),
                    a = function(t) {
                        r && s && s.isInDocument() ? (s.options.spoken = !1, s.update(t.m.place), "function" == typeof n.refresh && n.refresh(), r.options.spoken = !1, r.update(n)) : BIF.events.deafen("bifocal:place", a)
                    }.bind(this);
                BIF.events.listen("bifocal:place", a)
            }.bind(this)
        })
    }, n._goToSyncPlace = function(t) {
        BIF.objects.notifier && BIF.objects.notifier.close(),
        t.seek()
    }, n._placeHashToPlace = function(t) {
        var e;
        return t.spinePosition && t.percentageOfComponent ? (e = this._spinePositionToIndex(t.spinePosition), e += t.percentageOfComponent) : e = {
            percentageOfBook: t.percentageOfBook
        }, BIF.objects.compass.at(e)
    }, n._comparePlaces = function(t, e) {
        var i = Math.round(100 * (t.percentageOfBook || 0)),
            n = Math.round(100 * (e.percentageOfBook || 0));
        return i == n
    }, n._spinePositionToIndex = function(t) {
        for (var e = 0, i = BIF.map.spine.length; e < i; ++e) {
            var n = BIF.map.spine[e]["-odread-spine-position"];
            if ("undefined" == typeof n && (n = e), n == t)
                return e
        }
    }, n._syncJournal = function(t, i, n) {
        if (BIF.state.development) {
            var s = e.try(n, "level") || "log";
            if (i) {
                var o = JSON.stringify(i, null, 2);
                console[s]("[POSSESSION] sync: " + t + " -- %s", o)
            } else
                console[s]("[POSSESSION] sync: " + t)
        }
    }, n._substitutePlacePhrase = function(t, e) {
        var i = t.querySelector(".data-subbed");
        if (!i)
            return console.warn("[PSN] no span for placePhrase", t);
        var n = new BIF.CLASSES.PlacePhrase;
        return n.configure({
            short: !0
        }), n.update(e), n.impart(i, "after"), i.parentNode.removeChild(i), n
    }, i
}),
define("bifocal/themes/listen/default/src/parts/possession", ["require", "common", "../../../../read/default/src/parts/possession", "shibui/src/phrasebook"], function(t) {
    var e = (t("common"), t("../../../../read/default/src/parts/possession")),
        i = e.new(),
        n = i.prototype;
    t("shibui/src/phrasebook");
    return n.SAME_PLACE_DELTA_MS = 1e4, n.DELAY_SEEK = 500, n.DELAY_NOTIFIER = 500, n._persistPosition = function() {
        BIF.state.autonomousAudio || e.prototype._persistPosition.call(this)
    }, n._placeHashToPlace = function(t) {
        if ("undefined" != typeof t.componentMilliseconds) {
            var i = this._spinePositionToIndex(t.spinePosition),
                n = {
                    component: BIF.objects.spool.components[i],
                    milliseconds: t.componentMilliseconds
                };
            return BIF.objects.compass.at(n)
        }
        return e.prototype._placeHashToPlace.call(this, t)
    }, n._comparePlaces = function(t, e) {
        var i = Math.abs(t.bookMilliseconds - e.bookMilliseconds);
        return i < this.SAME_PLACE_DELTA_MS
    }, i
}),
define("shibui/src/components/shield", ["require", "common", "../view", "gala"], function(t) {
    var e = t("common"),
        i = t("../view"),
        n = i.new(),
        s = n.prototype,
        o = t("gala");
    return s.down = function() {
        delete this._.deflection,
        this.disabled = !0,
        this.access("inert")
    }, s.up = function() {
        this.disabled = !1,
        this.access("normal")
    }, s.label = function(t) {
        t = e.try(t, "spoken") || t,
        this._textify(this._prepare().root, {
            spoken: t
        })
    }, s.fit = function(t) {
        if (this.dom.root.style.removeProperty("top"), this.dom.root.style.removeProperty("height"), !this.disabled && t) {
            var i = this.dom.root.getBoundingClientRect(),
                n = t.north,
                s = t.south,
                o = e.try(t, "options.bearing");
            "n" == o ? n = t.dom.blind : "s" == o && (s = t.dom.blind);
            var r = 0,
                a = 0;
            n && (r = n.getBoundingClientRect().bottom - i.top),
            s && (a = s.getBoundingClientRect().top - i.top - (r || 0)),
            r && r > 0 && this.dom.root.style.setProperty("top", r + "px"),
            a && a > 0 && this.dom.root.style.setProperty("height", a + "px")
        }
    }, s._layout = function(t) {
        this._swapInteractiveElement(t.root, {
            button: this._onTap.bind(this)
        }),
        this._attr(t.root, "data-halo-class", "shield"),
        this._attr(t.root, "data-halo-inset", "-1"),
        this._build("shibui-shield .halo", {
            extending: t
        }, " grip"),
        o.setTouchAction(this.dom.grip, "pan-x pan-y")
    }, s._listen = function(t, e) {
        t._onGrip = o.onContact(e.grip, {
            start: this._onGripStart.bind(this),
            cancel: this._onGripCancel.bind(this),
            end: this._onGripEnd.bind(this)
        })
    }, s._onGripStart = function(t) {
        this._.gripping = !0
    }, s._onGripCancel = function(t) {
        e.excise(this._, "gripping")
    }, s._onGripEnd = function(t) {
        t.preventDefault(),
        e.excise(this._, "gripping") && this._defer("deflect", this._deflect.bind(this), 300)
    }, s._deflect = function() {
        this._defer("deflect"),
        this._dispatch("shield:deflect", {
            shield: this
        })
    }, s._onTap = function(t) {
        return this.disabled ? console.warn("[SHIELD] tap disabled") : (t.preventDefault(), void this._deflect())
    }, n
}),
define("shibui/src/components/chevron", ["require", "common", "../view"], function(t) {
    var e = t("common"),
        i = t("../view"),
        n = i.new(),
        s = n.prototype;
    return s.$init = function() {
        this._.d = [["M", [6, 7]], ["L", [26, 30]], ["C", [27, 31], [27, 32], [26, 33]], ["L", [6, 57]]],
        this._.bearing = "e",
        this._.rotation = 0,
        this._.sharpness = 1,
        this._.inversion = 1,
        this._.speed = 200,
        this._.verticalCompression = .5,
        i.prototype.$init.apply(this, arguments)
    }, s.bearing = function(t) {
        if (t == this._.bearing)
            return this;
        var e = "nesw",
            i = e.indexOf(this._.bearing),
            n = e.indexOf(t);
        return 2 == Math.abs(n - i) ? this._.inversion *= -1 : (n % 2 ? this._.sharpness /= this._.verticalCompression : this._.sharpness *= this._.verticalCompression, 0 == n && 3 == i ? this._.rotation += 90 : 3 == n && 0 == i ? this._.rotation -= 90 : this._.rotation += n > i ? 90 : -90), this.dom.image && (this.dom.image.style.transform = "rotate(" + this._.rotation + "deg)", this._attr(this.dom.image, "data-bearing", t), this._updatePath()), this._.bearing = t, this._semaphore("bearing", this._.bearing), this._dispatch("chevron:bearing", {
            bearing: this._.bearing
        }), this
    }, s.sharpness = function(t) {
        return this._.sharpness = t, this._updatePath(), this
    }, s.speed = function(t) {
        return this._.speed = t, this.dom.image && (this.dom.image.style.transition = "all " + this._.speed + "ms ease-in-out", this.dom.path.style.transition = "all " + this._.speed + "ms ease-in-out"), this
    }, s._layout = function(t) {
        this._build("shibui-chevron", {
            extending: t
        }, " image", {
            tag: "svg",
            namespace: "svg",
            attributes: {
                viewBox: "0 0 32 64",
                version: 1.1
            }
        }, "  path", {
            tag: "path",
            namespace: "svg"
        }),
        this.speed(this._.speed),
        this._semaphore("bearing", this._.bearing),
        this._.timer = setTimeout(this._updatePath.bind(this), 0)
    }, s._updatePath = function() {
        if (this.dom.path)
            if (cancelAnimationFrame(this._.timer), clearTimeout(this._.timer), "undefined" == typeof this._.multiplier)
                this._.multiplier = this._.inversion * this._.sharpness,
                this._attr(this.dom.path, "d", this._multiplyPath(this._.multiplier));
            else {
                var t = this._.multiplier,
                    i = this._.inversion * this._.sharpness - this._.multiplier,
                    n = e.epochMilliseconds(),
                    s = function() {
                        var o = e.epochMilliseconds(),
                            r = Math.min(1, (o - n) / this._.speed);
                        this._.multiplier = t + i * r,
                        this._attr(this.dom.path, "d", this._multiplyPath(this._.multiplier)),
                        r < 1 && (this._.timer = requestAnimationFrame(s))
                    }.bind(this);
                s()
            }
    }, s._multiplyPath = function(t) {
        for (var e = 16, i = [], n = 0, s = this._.d.length; n < s; ++n) {
            i.push(this._.d[n][0]);
            for (var o = 1, r = this._.d[n].length; o < r; ++o) {
                var a = this._.d[n][o][0],
                    c = a - e,
                    l = e + c * t;
                i.push(l + "," + this._.d[n][o][1] + " ")
            }
        }
        return i.join("").trim()
    }, n
}),
define("shibui/src/components/focal-point", ["require", "common", "../view"], function(t) {
    var e = t("common"),
        i = t("../view"),
        n = i.new(),
        s = n.prototype;
    return s.say = function(t, i) {
        i = e.absorb(i, {}),
        t = this._phrase(t);
        var n = this._prepare();
        return t != n.speech.innerHTML && (console.log("🎤", t), this._textify(n.speech, {
                html: t
            }), !0)
    }, s.focus = function(t) {
        return t = e.absorb(t, {
            preventScroll: !0
        }), this._focusElement(this.dom.speech, t)
    }, s._layout = function(t) {
        this._build("shibui-focal-point", {
            extending: t,
            access: {
                role: "region"
            }
        }, " speech", {
            access: {
                role: "text",
                tabindex: -1,
                "aria-live": "assertive"
            }
        })
    }, n
}),
define("shibui/src/scroll-animator", ["require", "common", "gala"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype,
        s = t("gala");
    return n.DEFAULT_DURATION = "relative", n.$init = function(t) {
        this.element = t,
        this.element.scrollAnimator = this,
        s.scrollable(this.element)
    }, n.scrollToStart = function(t) {
        this.scrollTo(0, t)
    }, n.scrollToTop = n.scrollToStart, n.scrollTo = function(t, i) {
        i = e.absorb(i, {});
        var n = "x" == i.axis ? "scrollLeft" : "scrollTop";
        if (this.element && this.element[n] !== t) {
            if (0 === i.duration)
                return this.element[n] = t;
            if (i.manual || "undefined" != typeof this._.nativeScrolling || (this._.nativeScrolling = "scrollBehavior" in this.element.style && "function" == typeof this.element.scroll), this._.nativeScrolling) {
                var s = {
                    behavior: "smooth"
                };
                "x" == i.axis ? s.left = t : s.top = t,
                this.element.scroll(s)
            } else
                this._manualScrollToPoint(t, i)
        }
    }, n.scrollToElement = function(t, i) {
        if (this.element.contains(t)) {
            i = e.absorb(i, {});
            var n = i.aperture || ("x" == i.axis ? .5 * window.innerWidth : .5 * window.innerHeight),
                s = this.element.getBoundingClientRect(),
                o = t.getBoundingClientRect(),
                r = "x" == i.axis ? "left" : "top",
                a = o[r] - s[r],
                c = "x" == i.axis ? "scrollLeft" : "scrollTop",
                l = this.element[c];
            if (!(a > 0 && l + a < l + n)) {
                var h = l + a - n;
                this.scrollTo(h, i)
            }
        }
    }, n._manualScrollToPoint = function(t, e) {
        var i = function(t, e, i, n) {
                return t /= n / 2, t < 1 ? i / 2 * t * t + e : (t--, -i / 2 * (t * (t - 2) - 1) + e)
            },
            n = "x" == e.axis ? "scrollLeft" : "scrollTop",
            s = this.element[n],
            o = t - s,
            r = 0,
            a = 20,
            c = e.duration || this.DEFAULT_DURATION;
        "relative" == c && (c = Math.max(100, Math.min(Math.abs(o), 750)));
        var l = function() {
            r += a,
            r < c ? (this.element[n] = i(r, s, o, c), requestAnimationFrame(l)) : this.element[n] = t
        }.bind(this);
        l()
    }, i
}),
define("shibui/src/components/shade", ["require", "common", "../view", "gala", "quirkbase", "./shield", "./chevron", "./focal-point", "../scroll-animator"], function(t) {
    var e = t("common"),
        i = t("../view"),
        n = i.new(),
        s = n.prototype,
        o = t("gala"),
        r = t("quirkbase"),
        a = t("./shield"),
        c = t("./chevron"),
        l = t("./focal-point"),
        h = t("../scroll-animator");
    return s.TAP_PX = 8, s.DEFAULT_BEARING = "s", s.SPRINGS = [.8], s.DEFAULT_THRESHOLD = 72, s.DEFAULT_SPEED = 72, s.$init = function(t, i) {
        this.options = e.absorb(i, {
            bearing: this.DEFAULT_BEARING,
            springs: this.SPRINGS,
            constrainToContentHeight: "once"
        }),
        "string" == typeof this.options.heading && (this.options.heading = {
            label: this.options.heading
        }),
        this.impart(t)
    }, s.bearing = function(t) {
        this.options.bearing = t || this.DEFAULT_BEARING,
        "n" == this.options.bearing ? (this._declassify(this.dom.root, "shibui-shade-s"), this._classify(this.dom.root, "shibui-shade-n"), this._declassify(this.dom.appendix, "bumper-s"), this._classify(this.dom.content, "bumper-n"), this.dom.blind.appendChild(this.dom.controls)) : (this._declassify(this.dom.root, "shibui-shade-n"), this._classify(this.dom.root, "shibui-shade-s"), this._declassify(this.dom.content, "bumper-n"), this._classify(this.dom.appendix, "bumper-s"), this.dom.blind.insertBefore(this.dom.controls, this.dom.content)),
        this._resetY(),
        this._handleGrip()
    }, s.grow = function(t) {
        var e = !this._.isVisible;
        t && "undefined" != typeof t.focusOnFocalPoint && (e = !!t.focusOnFocalPoint),
        this._reveal();
        var i = this._computeBoundary(),
            n = this._higherSpringPoint(i.start, i);
        this.springToPoint(n, i, t),
        e && this._focusOnFocalPoint()
    }, s.shrink = function(t) {
        this._reveal();
        var e = this._computeBoundary(),
            i = this._lowerSpringPoint(e.start, e);
        this.springToPoint(i, e, t)
    }, s.maximize = function(t) {
        this._reveal();
        var e = this._computeBoundary();
        this.springToPoint(e.constraint, e, t)
    }, s.minimize = function(t) {
        this.springToPoint(0, void 0, t)
    }, s.overtake = function(t) {
        if (this.options.bearing == t.options.bearing) {
            var e = t._.yPoint,
                i = this._computeBoundary();
            this.springToPoint(e, i, {
                duration: 0
            }),
            (e > i.constraint || i.maximize) && this._defer(this.maximize.bind(this), 30),
            t._conceal({
                silent: !0
            }),
            this._focusOnFocalPoint()
        } else
            t.minimize();
        t._dispatch("shade:overtaken", {
            overtakingShade: this
        }),
        t._dispatch("shade:invisible", {
            overtakingShade: this
        })
    }, s.springToPoint = function(t, e, i) {
        if (!this._.isMinimizing) {
            if ("number" != typeof t && (t = this._yToPoint(t.y, e)), t > 0)
                this._reveal();
            else {
                if (!this._.isVisible)
                    return;
                this._.isMinimizing = !0,
                this.handlers.grip.deafen(),
                this.access("inert"),
                this._dispatch("shade:invisible"),
                o.dispatch("shade:invisible", {
                    shade: this
                })
            }
            e = e || this._computeBoundary(),
            e.end = this._pointToY(t, e),
            e.start != e.end && (this._commenceResizing(e.start, {
                spring: i || {}
            }), this._conductResizing(e.end), this._announceResize("resizing", e))
        }
    }, s.scrollTo = function(t, e) {
        this._.scrollAnimator.scrollTo(t, e),
        this._setScrolled(t > 0)
    }, s.deflect = function() {
        return !this._.resizing && (this.minimize(), !0)
    }, s._layout = function(t) {
        this._build("shibui-shade", {
            extending: t,
            classes: this.options.classes
        }, " fog", "  fog-gloom", " shield", {
            construct: a,
            skip: this.options.shield === !1
        }, " blind", "  controls .halos-anchor", "   splitter", {
            button: !0,
            access: "visual"
        }, "    splitter-chevron", c, "  content", "   banner .halos-anchor", "    focal-point", {
            skip: !this.options.heading,
            construct: l
        }, "    heading <h1>", {
            skip: !this.options.heading
        }, "     scroll-to-top", e.absorb(this.options.heading, {
            button: !0,
            access: "visual"
        }), "     <div>", e.absorb(this.options.heading, {
            access: "spoken"
        }), "   ruler <hr>", {
            access: "visual"
        }, "   scroller .halos-anchor", "    focal-point", {
            skip: this.options.heading,
            construct: l
        }, "    appendix", " exit-controls", "  dismiss-button", {
            button: !0,
            html: "&times;",
            spoken: "a11y.shade.minimize"
        }),
        t.shield && t.shield.label("a11y.shade.minimize"),
        t.splitterChevron.bearing(this.options.bearing).sharpness(0),
        this._.scrollAnimator = new h(t.scroller),
        this._layoutViews(t)
    }, s._layoutViews = function(t) {}, s._listen = function(t, e) {
        this._handle("transitionend", e.blind),
        this._handle("scroll", e.scroller),
        this._handle("touchmove", e.scroller),
        this._handle("shade:remeasure"),
        this._handle("msg:ui:scroll-to-top"),
        t.resize = o.on(window, "resize", this._onWindowResize.bind(this)),
        e.shield && this._handle("shield:deflect", e.shield),
        this._listenViews(t)
    }, s._listenViews = function(t) {}, s._reveal = function() {
        this.dom.root.parentNode || this.impart(),
        this._.isVisible || (this._.isVisible = !0, e.excise(this._, "isMinimizing") && this.access("normal"), this.bearing(this.options.bearing), this._dispatch("shade:visible"), o.dispatch("shade:visible", {
            shade: this
        }))
    }, s._conceal = function(t) {
        this._completeResizing(),
        delete this._.y,
        this._.isVisible = !1,
        t && t.silent || (this._dispatch("shade:invisible"), o.dispatch("shade:invisible", {
            shade: this
        })),
        this.extract()
    }, s._onTransitionendBlind = function(t) {
        (t === !0 || !t.pseudoElement && t.target == this.dom.blind) && (this._.grip || (this._defer("spring-transition"), this._checkResizing("resting")))
    }, s._onShadeRemeasure = function() {
        this._measureInnerScrolling()
    }, s._onMsgUiScrollToTop = function(t) {
        this.scrollTo(0)
    }, s._onWindowResize = function(t) {
        this._defer("resize", function() {
            this.springToPoint(this._.yPoint || e.last(this.options.springs))
        }.bind(this), 150)
    }, s._onShieldDeflectShield = function(t) {
        this.deflect()
    }, s._onTapDismissButton = function(t) {
        this.deflect()
    }, s._onTapSplitter = function(t) {
        "function" == typeof this._.splitterAction && (o.stop(t), this._.splitterAction())
    }, s._onTapScrollToTop = function(t) {
        this.scrollTo(0)
    }, s._onScrollScroller = function(t) {
        this._.resizing || this._setScrolled(this.dom.scroller.scrollTop > 0)
    }, s._onTouchmoveScroller = function(t) {
        if (this._.grip && this._.grip.captured)
            return o.stop(t)
    }, s._handleGrip = function() {
        this.handlers.grip && this.handlers.grip.deafen();
        var t = this.dom.blind;
        return ("n" == this.options.bearing || r("forgets-how-to-scroll")) && (t = this.dom.controls), this.handlers.grip = o.onContact(t, {
            start: this._onGripStart.bind(this),
            move: this._onGripMove.bind(this),
            end: this._onGripEnd.bind(this),
            cancel: this._onGripCancel.bind(this)
        })
    }, s._onGripStart = function(t) {
        if (!this._isElementGrippy(t.target)) {
            if (e.try(this._.resizing, "innerScrolling"))
                return o.stop(t), this._completeResizing();
            this._.resizing && this._defer("spring-transition"),
            this._.grip = {
                x: t.pageX,
                y: t.pageY,
                withins: {
                    target: t.target
                }
            }
        }
    }, s._onGripMove = function(t) {
        if (this._.grip) {
            if (!this._.grip.captured) {
                var i = !1;
                if ("n" == this.options.bearing) {
                    if (this._isResizingWithin(this.dom.content))
                        return this._.grip = void 0
                } else if (this._isResizingWithin(this.dom.scroller)) {
                    var n = this.dom.scroller;
                    if (this._.isMaximized) {
                        var s = e.try(this._.resizing, "initialScrollTop");
                        "undefined" == typeof s && (s = n.scrollTop);
                        var r = n.scrollHeight - n.clientHeight;
                        if (s > 0)
                            return this._.grip = void 0;
                        if (n.scrollTop <= 0 && t.pageY > this._.grip.y)
                            i = !0;
                        else if (n.scrollTop >= r && t.pageY < this._.grip.y)
                            i = !0;
                        else if (Math.abs(t.pageY - this._.grip.y) > this.TAP_PX)
                            return this._.grip = void 0
                    } else if (this._.grip.y - t.pageY > this.TAP_PX)
                        i = !0;
                    else if (0 != n.scrollTop && t.pageY - this._.grip.y > this.TAP_PX)
                        return this._.grip = void 0
                }
                if (!i) {
                    var a = Math.abs(this._.grip.x - t.pageX) + Math.abs(this._.grip.y - t.pageY);
                    i = a > this.TAP_PX
                }
                i && (this._captureGrip(), this._commenceResizing(this._.grip.y, {
                    friction: .875,
                    boundaryFrictionBase: {
                        x: 0,
                        y: .9
                    },
                    bounceAcceleration: .1,
                    bounceDeceleration: .225,
                    decayThreshold: 3
                }))
            }
            this._.grip.captured && this._.resizing && (o.stop(t), this._.resizing.velocity.trackNext(t.pageX, t.pageY))
        }
    }, s._onGripEnd = function(t) {
        this._.grip && (this._releaseGrip(), this._.resizing && !this._.resizing.spring && this._.resizing.velocity.trackLast(t.pageY, t.pageY))
    }, s._onGripCancel = function(t) {
        this._.grip && (this._releaseGrip(), this._.resizing && !this._.resizing.spring && this._checkResizing("resting"))
    }, s._captureGrip = function() {
        this._.grip && (this._.grip.captured || (this.handlers.grip.capture(), this.dom.splitterChevron.sharpness(0), this._classify(this.dom.root, "is-gripping"), this._.grip.captured = !0))
    }, s._releaseGrip = function() {
        this.handlers.grip.release(),
        this._declassify(this.dom.root, "is-gripping"),
        delete this._.grip
    }, s._isResizingWithin = function(t) {
        var i = e.try(this._.resizing || this._.grip, "withins");
        return !!i && ("boolean" == typeof i[t.className] ? i[t.className] : i[t.className] = t === i.target || t.contains(i.target))
    }, s._commenceResizing = function(t, i) {
        this._defer("resize"),
        this._classify(this.dom.root, "is-resizing");
        var n = e.absorb(this._.resizing, {});
        return n.boundary = e.excise(i, "boundary") || this._computeBoundary(), n.spring = e.excise(i, "spring") || !1, this._resetY(n.boundary.start, n.boundary.height), n.spring ? delete n.withins : (n.withins = e.try(this._.grip, "withins"), n.velocity = new o.Velocity, n.velocity.configure(e.absorb(i, {
            position: {
                x: 0,
                y: n.boundary.start
            },
            boundary: n.boundary
        })), n.velocity.onUpdate = this._updateResizing.bind(this, n), n.velocity.trackFirst(0, t)), n.initialScrollTop = this.dom.scroller.scrollTop, this.dom.scroller.style.setProperty("max-height", n.boundary.height + "px"), this.dom.shield && this.dom.shield.fit(), this._.resizing = n, this._announceResize("resizing", n.boundary), n
    }, s._updateResizing = function(t, i, n, s) {
        if (this._.resizing === t) {
            var o = t.phase = s.phase,
                r = this._.y || 0;
            if (this._conductResizing(n), this._.resizing === t) {
                var a = e.deltaMilliseconds();
                if (t.deltaMS && "decelerating" == o) {
                    var c = t.boundary,
                        l = a - t.deltaMS;
                    if (l) {
                        if (t.speed = Math.abs(n - t.deltaY) / l, t.speed > 1 && this._isBetween(this._.y, r, c.minimize))
                            return this.minimize({
                                curve: "cubic-bezier(0.2,1.35,0.8,1)"
                            });
                        if (t.speed < .02 || t.speed < .06 && !this._isBetween(this._.y, c.maximize, c.upperLimit)) {
                            o = "resting";
                            for (var h = 0, u = this.options.springs.length; h < u; ++h) {
                                var d = this._pointToY(this.options.springs[h]);
                                if (Math.abs(d - this._.y) < 6) {
                                    this._setY(d, c);
                                    break
                                }
                            }
                        }
                    }
                }
                t.deltaY = n,
                t.deltaMS = a,
                this._checkResizing(o)
            }
        }
    }, s._conductResizing = function(t) {
        if (this._.resizing) {
            var i = this._.resizing.boundary;
            if (this._.resizing.spring && !this._.resizing.spring.conducted) {
                var n = this._.resizing.spring.duration;
                if ("number" != typeof n) {
                    n = this.DEFAULT_SPEED;
                    var s = Math.log(Math.max(1, Math.abs(i.start - t) - n));
                    n += s * s * s
                }
                if (n) {
                    var o = this._.resizing.spring.curve || "cubic-bezier(0.3,0.6,0.4,1.05)",
                        r = "transform " + n + "ms " + o;
                    this.dom.fog.style.setProperty("transition", r),
                    this.dom.blind.style.setProperty("transition", r),
                    this.dom.content.style.setProperty("transition", r),
                    this._defer("spring-transition", this._onTransitionendBlind.bind(this, !0), n + 100)
                } else
                    this._defer("spring-transition", this._onTransitionendBlind.bind(this, !0), 100);
                this._.resizing.spring.conducted = !0
            } else
                !this._.resizing.innerScrolling && !this._.isMaximized && "s" == this.options.bearing && this._isResizingWithin(this.dom.scroller) && t < i.maximize && i.contentHeight - (i.height - i.maximize) > 60 && (this._startInnerScrolling(), this._announceResize("resizing", e.absorb(i, {
                    end: i.maximize
                })));
            if (!this._.resizing.spring && this._.resizing.innerScrolling) {
                if (t < i.maximize) {
                    var a = this._.resizing.initialScrollTop + (i.maximize - t);
                    this.dom.scroller.scrollTop = a,
                    this._setScrolled(this.dom.scroller.scrollTop > 0),
                    t = i.maximize
                }
                if (this.dom.scroller.scrollTop >= this.dom.scroller.scrollHeight - this.dom.scroller.clientHeight)
                    return this._completeResizing()
            }
            this._setY(t, i)
        }
    }, s._resetY = function(t, e) {
        if (this.dom.content.style.removeProperty("transition"), this.dom.blind.style.removeProperty("transition"), this.dom.fog.style.removeProperty("transition"), "number" == typeof t ? this._styleTransform(this.dom.blind, "translate3d(0," + t + "px, 0)") : this._styleTransform(this.dom.blind), "number" == typeof t && e) {
            var i = "n" == this.options.bearing ? -1 : 1;
            this._styleTransform(this.dom.fog, "scaleY(" + t / e * i + ")")
        } else
            this._styleTransform(this.dom.fog);
        "n" != this.options.bearing ? this._styleTransform(this.dom.content) : this._.y || (e = e || 0, this._styleTransform(this.dom.content, "translate3d(0," + e + "px,0)"))
    }, s._setY = function(t, i) {
        i = i || e.try(this._.resizing, "boundary") || this._computeBoundary(),
        this._.y = Math.max(i.upperLimit, Math.min(i.lowerLimit, t)),
        this._.yPoint = this._yToPoint(this._.y, i),
        this._.y <= i.upperLimit && "n" == this.options.bearing ? this._declassify(this.dom.root, "is-visible") : this._.y >= i.lowerLimit && "s" == this.options.bearing ? this._declassify(this.dom.root, "is-visible") : this.dom.root.classList.contains("is-visible") || this._classify(this.dom.root, "is-visible"),
        this._styleTransform(this.dom.blind, "translate3d(0," + this._.y + "px, 0)");
        var n = "n" == this.options.bearing ? -1 : 1;
        this._styleTransform(this.dom.fog, "scaleY(" + t / i.height * n + ")"),
        "n" == this.options.bearing && this._styleTransform(this.dom.content, "translate3d(0," + (0 - this._.y) + "px,0)")
    }, s._checkResizing = function(t) {
        if (this._.resizing) {
            var e = this._.resizing.boundary;
            if ("decelerating" == t || "resting" == t)
                if ("n" == this.options.bearing) {
                    if (this._.y <= e.minimize)
                        return this._conceal();
                    if ("resting" == t && this._.y < e.minimize + e.threshold)
                        return this.minimize(50)
                } else {
                    if (this._.y >= e.minimize)
                        return this._conceal();
                    if ("resting" == t && this._.y > e.minimize - e.threshold)
                        return this.minimize(50)
                }
            "resting" == t && this._completeResizing()
        }
    }, s._completeResizing = function() {
        if (this._.resizing) {
            var t = this._.resizing.boundary;
            this._.isMaximized = this._isCloseEnoughTo(t, "maximize");
            var e = "shrink",
                i = this.options.bearing;
            this._higherSpringPoint(this._.y, t) - .025 > this._.yPoint ? (e = "grow", i = "n" == this.options.bearing ? "s" : "n") : this._lowerSpringPoint(this._.y, t) && (i = null),
            this._.splitterAction = this[e].bind(this),
            this._textify(this.dom.splitter, {
                spoken: "a11y.shade." + e
            }),
            this.dom.splitterChevron.bearing(i || "n"),
            this.dom.splitterChevron.sharpness(i ? .5 : 0),
            this.dom.scroller.style.setProperty("max-height", this._computeScrollMaxHeight() + "px"),
            this._stopInnerScrolling(),
            this._setScrolled(this.dom.scroller.scrollTop > 0),
            r("forgets-how-to-scroll") && o.ScrollManager.jiggle(this.dom.scroller),
            "once" == this.options.constrainToContentHeight && (this.options.constrainToContentHeight = !1),
            this.dom.shield && this.dom.shield.fit(this),
            this._declassify(this.dom.root, "is-resizing"),
            delete this._.resizing,
            this._defer("resize", this._announceResize.bind(this, "resize"), 100)
        }
    }, s._startInnerScrolling = function() {
        this._.resizing && (this._.resizing.innerScrolling = this._.resizing.innerScrolling || {
            y: 0
        }, this._.resizing.innerScrolling.y += this.dom.scroller.scrollTop, this._measureInnerScrolling())
    }, s._measureInnerScrolling = function() {
        if (this.dom.scroller.style.setProperty("max-height", this._computeScrollMaxHeight() + "px"), e.try(this._.resizing, "innerScrolling")) {
            var t = this.dom.scroller.getBoundingClientRect(),
                i = this.dom.scroller.scrollHeight - (this._.resizing.boundary.height - t.top) - this._.resizing.initialScrollTop;
            this._.resizing.velocity.configure({
                friction: .935,
                boundary: {
                    top: this._.resizing.boundary.maximize - i,
                    bottom: this._.resizing.boundary.maximize
                }
            })
        }
    }, s._stopInnerScrolling = function() {
        e.try(this._.resizing, "innerScrolling") && delete this._.resizing.innerScrolling
    }, s._computeBoundary = function() {
        var t = {
            left: 0,
            right: 0
        };
        t.height = this.dom.blind.offsetHeight || window.innerHeight || window.screen.height,
        t.threshold = this.options.threshold || this.dom.banner.offsetHeight || this.DEFAULT_THRESHOLD;
        var i = this.dom.content.getBoundingClientRect(),
            n = this.dom.scroller.getBoundingClientRect();
        return t.contentHeight = Math.max(this.dom.scroller.scrollHeight + (i.height - n.height), t.threshold), t.constraint = e.last(this.options.springs), this.options.constrainToContentHeight && (t.constraint = Math.min(t.constraint, t.contentHeight / t.height)), "n" == this.options.bearing ? (t.upperLimit = 0 - t.height, t.lowerLimit = 0, t.top = t.upperLimit, t.bottom = t.upperLimit * (1 - t.constraint), t.minimize = t.top, t.maximize = t.bottom) : (t.upperLimit = 0, t.lowerLimit = t.height, t.bottom = t.lowerLimit, t.top = t.lowerLimit * (1 - t.constraint), t.minimize = t.bottom, t.maximize = t.top), t.start = "number" == typeof this._.y ? this._.y : t.minimize, t
    }, s._computeScrollMaxHeight = function() {
        if (this.dom.blind.offsetParent) {
            var t,
                e = this.dom.scroller.getBoundingClientRect(),
                i = this.dom.blind.offsetParent.getBoundingClientRect();
            if ("n" == this.options.bearing) {
                var n = this.dom.blind.getBoundingClientRect();
                t = n.bottom - e.top
            } else
                t = i.height - (e.top - i.top);
            return this._.lastComputedScrollMaxHeight = t, t
        }
    }, s._isElementGrippy = function(t) {
        for (var i; e.isElement(t);) {
            if (e.among(t, this.dom.scroller, this.dom.content))
                return !!i;
            i = i || this._attr(t, "touch-action"),
            t = t.parentNode
        }
        return !1
    }, s._isCloseEnoughTo = function(t, e) {
        t = t || this._computeBoundary();
        var i = "number" == typeof this._.y ? this._.y : t.start;
        return Math.abs(i - t[e]) <= this.TAP_PX
    }, s._isBetween = function(t, e, i) {
        return t > Math.min(e, i) && t < Math.max(e, i)
    }, s._yToPoint = function(t, e) {
        return e = e || this._computeBoundary(), Math.abs((e.minimize - t) / e.height)
    }, s._pointToY = function(t, e) {
        return e = e || this._computeBoundary(), e.minimize + (e.maximize - e.minimize) * t / e.constraint
    }, s._lowerSpringPoint = function(t, e) {
        e = e || this._computeBoundary(),
        "number" != typeof t && (t = e.start);
        for (var i = this._yToPoint(t, e) - .001, n = this.options.springs.length; n >= 0; --n) {
            var s = this.options.springs[n];
            if (s < i)
                return s
        }
        return 0
    }, s._higherSpringPoint = function(t, e) {
        e = e || this._computeBoundary(),
        "number" != typeof t && (t = e.start);
        for (var i = this._yToPoint(t, e) + .001, n = 0; n < this.options.springs.length; ++n) {
            var s = this.options.springs[n];
            if (s > i && s <= e.constraint)
                return s
        }
        return e.constraint
    }, s._setScrolled = function(t) {
        if (t != this._.scrolled) {
            this._.scrolled = t,
            this._classify(this.dom.root, "is-scrolled", t),
            this.dom.scrollToTop && (this.dom.scrollToTop.disabled = !t);
            var i = {
                top: !t
            };
            this._dispatch("shade:scroll", i),
            o.dispatch("shade:scroll", e.absorb(i, {
                shade: this
            }))
        }
    }, s._focusOnFocalPoint = function() {
        this.dom.focalPoint.say("a11y.announce.shade") && this.dom.focalPoint.focus({
            delay: 200
        })
    }, s._announceResize = function(t, i) {
        var n = this._.lastComputedScrollMaxHeight;
        i = i || this._computeBoundary(),
        i.scrollMaxHeight = this._computeScrollMaxHeight(),
        n && n > 0 && n != i.scrollMaxHeight && (this.dom.scroller.style.setProperty("max-height", i.scrollMaxHeight + "px"), e.try(this.dom.shield, "fit()", this)),
        this._dispatch("shade:" + t, i),
        o.dispatch("shade:" + t, e.absorb(i, {
            shade: this
        }))
    }, n
}),
define("core/src/shade", ["require", "common", "shibui/src/components/shade"], function(t) {
    var e = (t("common"), t("shibui/src/components/shade")),
        i = e.new(),
        n = i.prototype;
    return n.rename = function(t) {
        this._.name = this._phrase(t),
        this._announceName()
    }, n.build = function(t) {
        var e = this._build.apply(this, arguments);
        return e.root && this.dom.appendix.appendChild(e.root), e
    }, n._layoutViews = function(t) {
        this.options.heading && this.rename(this.options.heading),
        t.shield && this._textify(t.shield.dom.root, {
            spoken: "a11y.shade.minimize"
        })
    }, n._listenViews = function(t) {
        this._handle("mode:change"),
        this._handle("shade:visible"),
        this._handle("shade:invisible")
    }, n._onModeChange = function(t) {
        this._.isVisible && ("shading" != t.m.from || this._.isMinimizing || this.minimize())
    }, n._onShadeVisible = function(t) {
        t.m.shade == this ? (delete this._.overtakenBy, BIF.objects.modeManager.enterMode("shading")) : "function" == typeof t.m.shade.overtake ? (this._.overtakenBy = t.m.shade, this._.isMinimizing || t.m.shade.overtake(this)) : this._.isMinimizing || this.minimize(),
        this._announceName()
    }, n._onShadeInvisible = function(t) {
        t.m.shade != this || this._.overtakenBy || BIF.objects.modeManager.exitMode("shading")
    }, n._announceName = function() {
        if (this._.isVisible) {
            var t = {
                shade: this,
                name: this._.name
            };
            this._dispatch("shade:name", t),
            BIF.events.dispatch("shade:name", t)
        }
    }, i
}),
define("bifocal/themes/read/default/src/parts/dialog", ["require", "common", "core/src/view", "core/src/shade"], function(t) {
    var e = t("common"),
        i = t("core/src/view"),
        n = i.new(),
        s = n.prototype,
        o = t("core/src/shade");
    return s.DIALOG_HEADING = {
        html: "[?]"
    }, s.DIALOG_BEARING = "s", s.DIALOG_OPTIONS = {}, s.SHIELD = !0, s.shade = function(t) {
        return this._.shade || (t = e.absorb(t, e.absorb(this.DIALOG_OPTIONS, {
            container: BIF.objects.navigation.dom.shades,
            heading: this.DIALOG_HEADING,
            classes: this.DIALOG_CLASSES,
            bearing: this.DIALOG_BEARING,
            shield: this.SHIELD
        })), this._.shade = new o(t.container, t), this.impart(this._.shade), this._shaded(this._.shade)), this._.shade
    }, s.close = function() {
        this._.shade ? this._.shade.minimize() : console.warn("[DIALOG] cannot close?")
    }, s._remeasure = function() {
        BIF.events.dispatch("shade:remeasure")
    }, s._shaded = function(t) {}, n
}),
define("shibui/src/haptics", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new();
    i.prototype;
    return i.GAP_MS = 75, i.attach = function(t) {
        return this._ = this._ || {}, this._.shell = t, i
    }, i.detach = function() {
        return delete this._, i
    }, i.prepare = function() {
        this._transmit("prepare")
    }, i.select = function() {
        navigator.userAgent.match(/Chrome/) || this._transmit("select")
    }, i.impact = function(t) {
        t = t || "light",
        this._transmit("impact:" + t)
    }, i.notify = function(t) {
        t = t || "success",
        this._transmit("notify:" + t)
    }, i._isSupported = function() {
        return !(!this._ || !this._.shell) && ("undefined" == typeof this._.supported && (this._.supported = this._.shell.has("ui:haptics")), this._.supported)
    }, i._transmit = function(t) {
        if (this._isSupported()) {
            clearTimeout(this._.transmissionTimer);
            var i = e.epochMilliseconds(),
                n = i - (this._.lastTransmissionMS || 0);
            n < this.GAP_MS ? this._.transmissionTimer = setTimeout(this._forceTransmit.bind(this, t), n + 1) : this._forceTransmit(t)
        }
    }, i._forceTransmit = function(t) {
        this._ && this._.shell && (this._.lastTransmissionMS = e.epochMilliseconds(), this._.shell.transmit({
            name: "haptic:" + t,
            dest: "shell"
        }))
    }, i
}),
define("text!shibui/svg/trash.svg", [], function() {
    return "<svg viewBox='0 0 64 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n  <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>\n    <line x1='14.5' y1='18.5' x2='49.5' y2='18.5' stroke='#000000' stroke-width='3' stroke-linecap='round' class='icon-hollow' />\n    <path d='M27,18 L27,15 C27,13.8954305 27.8954305,13 29,13 L35,13 C36.1045695,13 37,13.8954305 37,15 L37,18 L37,18' stroke='#000000' stroke-width='3' class='icon-hollow' />\n    <path d='M46.9213769,22 C47.4736617,22 47.9213769,22.4477153 47.9213769,23 C47.9213769,23.0252074 47.9204238,23.0504058 47.9185196,23.0755411 L45.7101043,52.2266233 C45.5915844,53.7910862 44.287622,55 42.7186762,55 L21.2813238,55 C19.712378,55 18.4084156,53.7910862 18.2898957,52.2266233 L16.0814804,23.0755411 C16.0397602,22.5248344 16.4523753,22.0445775 17.003082,22.0028573 L17.0408255,22.0007146 L17.0408255,22.0007146 L46.9213769,22 Z M32,28.5 C31.4477153,28.5 31,28.9477153 31,29.5 L31,29.5 L31,47.5 L31.0067277,47.6166211 C31.0644928,48.1139598 31.4871642,48.5 32,48.5 C32.5522847,48.5 33,48.0522847 33,47.5 L33,47.5 L33,29.5 L32.9932723,29.3833789 C32.9355072,28.8860402 32.5128358,28.5 32,28.5 Z M23.5613447,28.501788 L23.44453,28.5015396 C22.8930956,28.5321749 22.4709044,29.0040356 22.5015396,29.55547 L22.5015396,29.55547 L23.5015396,47.55547 L23.514726,47.6715384 C23.5999896,48.1649071 24.0434238,48.5269074 24.55547,48.4984604 C25.1069044,48.4678251 25.5290956,47.9959644 25.4984604,47.44453 L25.4984604,47.44453 L24.4984604,29.44453 L24.485274,29.3284616 C24.4000104,28.8350929 23.9565762,28.4730926 23.44453,28.5015396 Z M40.55547,28.5015396 C40.0040356,28.4709044 39.5321749,28.8930956 39.5015396,29.44453 L39.5015396,29.44453 L38.5015396,47.44453 L38.501788,47.5613447 C38.5318768,48.0611219 38.9324837,48.4700133 39.44453,48.4984604 C39.9959644,48.5290956 40.4678251,48.1069044 40.4984604,47.55547 L40.4984604,47.55547 L41.4984604,29.55547 L41.498212,29.4386553 C41.4681232,28.9388781 41.0675163,28.5299867 40.55547,28.5015396 Z' fill='#000000' class='icon-solid' />\n  </g>\n</svg>\n"
}),
define("shibui/src/components/edit-rail", ["require", "common", "../view", "gala", "quirkbase", "../haptics", "text!shibui/svg/trash.svg"], function(t) {
    var e = t("common"),
        i = t("../view"),
        n = i.new(),
        s = n.prototype,
        o = t("gala"),
        r = t("quirkbase"),
        a = t("../haptics");
    return s._graphic("trash", t("text!shibui/svg/trash.svg")), s.SLIDE_PX = 8, s.TERMINAL_PERCENT = .65, s.$init = function(t, n) {
        this.item = t,
        e.isList(n) ? this.actions = {
            right: n
        } : n && "function" != typeof n ? this.actions = n : this.actions = {
            right: [{
                icon: "trash",
                spoken: "a11y.edit-rail.delete",
                button: n || !0
            }]
        },
        i.prototype.$init.call(this, t)
    }, s.delete = function() {
        var t,
            i = e.last(this.actions.right);
        return i && !i.retain && (t = i.button), this._terminate(t), !!t
    }, s._layout = function(t) {
        this._classify(this.item, "halos-anchor"),
        "TR" == this.item.tagName && this._swapElement(t.root, {
            tag: "td"
        }),
        this._build("shibui-edit-rail", {
            extending: t
        }),
        e.each(this.actions.right, function(i) {
            i = e.absorb(i, {});
            var n = e.excise(i, "button");
            e.excise(i, "retain") ? this._.lastButtonAction = this._close.bind(this, n) : this._.lastButtonAction = this._terminate.bind(this, n);
            var s = this._element({
                    parentNode: t.root,
                    button: this._.lastButtonAction,
                    spoken: e.excise(i, "spoken")
                }),
                o = this._element(e.absorb(i, {
                    parentNode: s
                }));
            this._attr(o, "id", this._generateIdAttribute("edit-rail-icon")),
            this._attr(s, "data-halo-delegate", o.id)
        }, this)
    }, s._listen = function(t, e) {
        r("forgets-how-to-scroll") || (t.slide = o.onContact(this.item, {
            start: this._onSlideStart.bind(this),
            move: this._onSlideMove.bind(this),
            end: this._onSlideEnd.bind(this),
            cancel: this._onSlideCancel.bind(this)
        }), o.setTouchAction(this.item, "manipulation"), o.on(this.item, "mousedown", o.stop))
    }, s._onSlideStart = function(t) {
        var e = this._.state ? this._.state.slidePosition : 0,
            i = this._.state = {};
        i.startX = t.screenX,
        i.startY = t.screenY,
        i.slidePosition = i.prevPosition = i.startPosition = e || 0,
        i.terminatePosition = 0 - (this.item.getBoundingClientRect().width + 4),
        i.thresholdPosition = i.terminatePosition * this.TERMINAL_PERCENT,
        i.buttonWidths = this._computeButtonWidths(),
        i.openPosition = 0 - i.buttonWidths[0],
        a.prepare(),
        this.velocity || (this.velocity = new o.Velocity, this.velocity.onUpdate = this._onVelocityUpdate.bind(this)),
        this._configureVelocity(i.openPosition, 0, {
            first: !0
        })
    }, s._onSlideMove = function(t) {
        var e = this._.state;
        if (!e.aborted) {
            var i = t.screenX - e.startX,
                n = t.screenY - e.startY;
            if (!(!e.sliding && Math.abs(i) < this.SLIDE_PX && Math.abs(n) < this.SLIDE_PX))
                if (e.sliding || Math.abs(i) > Math.abs(n)) {
                    if (!e.sliding) {
                        if (i > 0)
                            return;
                        e.sliding = !0,
                        this._captureContact()
                    }
                    o.stop(t),
                    this.velocity.trackNext(e.startPosition + i, 0)
                } else
                    i != n && (e.aborted = !0)
        }
    }, s._onSlideEnd = function(t) {
        var e = this._.state;
        e && e.captured && (this._releaseContact(), e.terminal ? this._defer("transitioning", this._.lastButtonAction, 100) : e.slidePosition <= Math.min(-1, e.prevPosition) ? this._defer("transitioning", this._open.bind(this)) : (this._defer("transitioning", this._close.bind(this)), e.slidePosition >= 0 && delete this._.state))
    }, s._onSlideCancel = function() {
        this._releaseContact(),
        this._defer("transitioning", this._close.bind(this), 100)
    }, s._captureContact = function() {
        this._.state && !this._.state.captured && (this._.state.captured = !0, this.handlers.slide.capture(), this.handlers._onTouchMove = o.on(this.item, "touchmove", o.stop), this._classify(this.item, "is-gripping"), this._defer("activation"))
    }, s._releaseContact = function() {
        this._.state && this._.state.captured && (this._.state.captured = !1, this.handlers.slide.release(), this._declassify(this.item, "is-gripping"), this.handlers._onTouchMove.deafen(), this.access(this.item, "inert"), this._defer("activation", this.access.bind(this, this.item, "normal"), 100))
    }, s._computeButtonWidths = function() {
        var t = Array.prototype.slice.call(this.dom.root.children, 0).reverse(),
            i = [],
            n = 0;
        return e.each(t, function(t) {
            n += t.scrollWidth,
            i.unshift(n)
        }), i
    }, s._configureVelocity = function(t, i, n) {
        if (this.velocity) {
            var s = e.try(this._, "state.slidePosition") || 0;
            this.velocity.configure({
                position: {
                    x: s,
                    y: 0
                },
                boundary: {
                    left: t,
                    right: i,
                    top: 0,
                    bottom: 0
                },
                boundaryFrictionBase: {
                    x: 0,
                    y: 0
                }
            }),
            n && n.first ? this.velocity.trackFirst(s, 0) : n && n.last && this.velocity.trackLast(s, 0)
        }
    }, s._onVelocityUpdate = function(t, i, n) {
        var s = this._.state;
        if (s && !s.terminated) {
            var o = Math.max(Math.min(t, 0), s.terminatePosition);
            if (s.prevPosition = s.slidePosition, s.slidePosition = o, s.captured && o <= s.thresholdPosition || s.terminal && !s.captured)
                s.terminal || (s.terminal = !0, a.impact("light"), e.each(this.dom.root.children, function(t, e) {
                    e && (this._stylePrefix(t, "transition", "transform 150ms"), this._styleTransform(t))
                }, this)),
                this._styleTransform(this.item, "translate3d(" + o + "px, 0, 0)");
            else if (Math.ceil(o)) {
                if (s.terminal && (s.terminal = !1, a.impact("light")), o -= 4, this._styleTransform(this.item, "translate3d(" + o + "px, 0, 0)"), this._classify(this.dom.root, "is-open"), this._classify(this.item, "is-editing"), s.buttonWidths.length > 1) {
                    var r = Math.max(o, s.openPosition) / s.openPosition;
                    e.each(this.dom.root.children, function(t, e) {
                        if (e) {
                            var i = o * -1 - (s.buttonWidths[e] * r + 4);
                            this._stylePrefix(t, "transition"),
                            this._styleTransform(t, "translate3d(" + i + "px, 0, 0)")
                        }
                    }, this)
                }
            } else
                this._styleTransform(this.item),
                this._declassify(this.dom.root, "is-open"),
                this._declassify(this.item, "is-editing")
        }
    }, s._open = function() {
        if (this.handlers.dismissal)
            o.on(this.handlers.dismissal);
        else {
            var t = function(t) {
                    for (var e = t.target.parentNode; e;) {
                        if (e == this.dom.root)
                            return !0;
                        e = e.parentNode
                    }
                }.bind(this),
                i = function(e) {
                    t(e) || (this._configureVelocity(0, 0, {
                        last: !0
                    }), o.stop(e))
                }.bind(this),
                n = function(e) {
                    t(e) || (this._defer("transitioning", this._close.bind(this), 100), o.stop(e))
                }.bind(this),
                s = function(e) {
                    t(e) || o.stop(e)
                },
                r = document.body,
                a = [];
            e.each(["pointerdown", "mousedown", "touchstart"], function(t) {
                a.push(o.on(r, t, i, !0))
            }),
            e.each(["pointerup", "mouseup", "touchend"], function(t) {
                a.push(o.on(r, t, n, !0))
            }),
            e.each(["click"], function(t) {
                a.push(o.on(r, t, s, !0))
            }),
            this.handlers.dismissal = a
        }
        o.off(this.handlers.slide);
        var c = e.try(this._, "state.openPosition") || -100;
        this._configureVelocity(c, c, {
            last: !0
        })
    }, s._close = function(t) {
        o.off(this.handlers.dismissal),
        o.on(this.handlers.slide),
        this._configureVelocity(0, 0, {
            last: !0
        }),
        "function" == typeof t && t(this)
    }, s._terminate = function(t, i) {
        o.off(this.handlers.dismissal);
        var n,
            s = this.item.getBoundingClientRect();
        this._.state ? (this._.state.terminated = !0, n = this._.state.terminatePosition) : n = 0 - (s.width + 4),
        this.access(this.item, "inert"),
        this._stylePrefix(this.item, "transition", "all 200ms"),
        this._styleTransform(this.item, "translate3d(" + n + "px, 0, 0)"),
        this.item.style.setProperty("opacity", 0),
        this.item.style.setProperty("height", s.height + "px"),
        this._defer("transitioning", function() {
            for (; this.item.firstChild !== this.dom.root;)
                this.item.removeChild(this.item.firstChild);
            this.item.style.setProperty("height", 0),
            this._defer("transitioning", function() {
                this.item.parentNode && this.item.parentNode.removeChild(this.item),
                "function" == typeof t && t(this)
            }.bind(this), 200)
        }.bind(this));
        var r = e.try(i, "tappedElement") || this.dom.root.lastChild;
        this._stylePrefix(r, "transition"),
        this._styleTransform(r),
        e.each(this.dom.root.children, function(t) {
            t != r && t.parentNode.removeChild(t)
        }, this)
    }, n
}),
define("bifocal/themes/read/default/src/parts/nav-action-list", ["require", "common", "core/src/view", "shibui/src/components/edit-rail"], function(t) {
    var e = (t("common"), t("core/src/view")),
        i = e.new(),
        n = i.prototype,
        s = t("shibui/src/components/edit-rail");
    return n.add = function(t, e) {
        var i = this.dom.root;
        return e && e.group && (i = this._groupList(e.group).root.firstChild), this._addToList(i, t, e)
    }, n.clear = function() {
        this._textify(this.dom.root)
    }, n._layout = function() {
        this.dom = this._build("nav-action-list <ul>")
    }, n._groupList = function(t) {
        var e = this._.groups = this._.groups || {};
        return e[t] = e[t] || this._build("", {
            tag: "li",
            classes: "nav-action-list-group-row",
            parentNode: this.dom.root
        }, " <ul>", {
            classes: "nav-action-list-group"
        })
    }, n._addToList = function(t, e, i) {
        var n = this._build("nav-action-list-row <li>", {
            parentNode: t
        });
        return e.impart(n.root), i && i.onDelete && new s(n.root, i.onDelete), e
    }, i
}),
define("bifocal/themes/read/default/src/parts/nav-action-overflow-dialog", ["require", "common", "./dialog", "./nav-action-list"], function(t) {
    var e = t("common"),
        i = t("./dialog"),
        n = i.new(),
        s = n.prototype,
        o = t("./nav-action-list");
    return s.DIALOG_HEADING = null, s.DIALOG_BEARING = "n", s.DIALOG_CLASSES = "nav-action-overflow-shade", s.DIALOG_OPTIONS = {
        constrainToContentHeight: !0
    }, s.$init = function(t) {
        this.actionBar = t,
        this.actionItems = this.actionBar.actionItems("secondary")
    }, s._layout = function() {
        this.dom = this._build("nav-action-overflow-dialog", " action-list", o),
        e.each(this.actionItems, function(t) {
            t.extract(),
            this._declassify(t.dom.root, "hide"),
            this.dom.actionList.add(t)
        }, this),
        this.actionItems.reverse()
    }, s._shaded = function(t) {
        t.rename("a11y.action.overflow"),
        t.on("shade:invisible", this._onShadeInvisible.bind(this))
    }, s._onShadeInvisible = function(t) {
        this._revert()
    }, s._revert = function() {
        this.actionItems && (e.each(this.actionItems, function(t) {
            this.actionBar.add(t, {
                priority: "secondary"
            })
        }, this), this.actionBar._manageOverflow(), delete this.actionItems)
    }, n
}),
define("text!bifocal/themes/read/default/svg/actions-overflow.svg", [], function() {
    return "<svg viewBox='0 0 64 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n  <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>\n    <circle fill='#000000' transform='translate(33.000000, 46.000000) rotate(-90.000000) translate(-33.000000, -46.000000) ' cx='33' cy='46' r='3' class='icon-solid' />\n    <circle fill='#000000' transform='translate(33.000000, 32.000000) rotate(-90.000000) translate(-33.000000, -32.000000) ' cx='33' cy='32' r='3' class='icon-solid' />\n    <circle fill='#000000' transform='translate(33.000000, 18.000000) rotate(-90.000000) translate(-33.000000, -18.000000) ' cx='33' cy='18' r='3' class='icon-solid' />\n  </g>\n</svg>\n"
}),
define("bifocal/themes/read/default/src/parts/nav-action-bar", ["require", "common", "core/src/view", "./nav-action-overflow-dialog", "text!../../svg/actions-overflow.svg"], function(t) {
    var e = t("common"),
        i = t("core/src/view"),
        n = i.new(),
        s = n.prototype,
        o = t("./nav-action-overflow-dialog");
    return s._graphic("actions-overflow", t("text!../../svg/actions-overflow.svg")), s.SIDES = {
        primary: "left",
        overflow: "overflow",
        secondary: "right"
    }, s.add = function(t, i) {
        var n = e.try(i, "priority") || "secondary",
            s = this.SIDES[n];
        return t.impart(this.dom[s], "prepend"), t
    }, s.actionItems = function(t) {
        var i = [],
            n = t ? [t] : ["primary", "overflow", "secondary"];
        return e.each(n, function(t) {
            e.each(this.dom[this.SIDES[t]].children, function(t) {
                t._view && i.push(t._view)
            }, this)
        }, this), i
    }, s._layout = function() {
        this.dom = this._build("nav-action-bar", " inner", "  left", "  overflow", "   overflow-item", {
            classes: "nav-action-item hide"
        }, "    overflow-button", {
            button: !0,
            spoken: "a11y.action.overflow"
        }, "     overflow-icon", {
            icon: "actions-overflow"
        }, "  right")
    }, s._listen = function(t) {
        this._handle("mode:change"),
        this._handle("bifocal:layout"),
        this._handle("bifocal:ready"),
        this._handle("bifocal:resize"),
        this._contextuallyActivate()
    }, s._contextuallyActivate = function(t) {
        var e = BIF.state.layout;
        t = t || BIF.state.mode;
        var i = this.dom.root.getAttribute("data-access");
        "navigating" == t || "reading" == t && "mea" == e ? i && this.access("normal") : "inert" != i && this.access("inert")
    }, s._onModeChange = function(t) {
        this._contextuallyActivate(t.m.to)
    }, s._onBifocalLayout = function(t) {
        this._contextuallyActivate()
    }, s._onBifocalReady = function(t) {
        this._manageOverflow()
    }, s._onBifocalResize = function(t) {
        this._defer("resize", this._manageOverflow.bind(this), 100)
    }, s._onTapOverflowButton = function(t) {
        new o(this).shade().grow()
    }, s._manageOverflow = function(t) {
        e.batonClass(this.dom.overflowItem, "hide", this.dom.root);
        for (var i = 0; this._isOverflowing() && i < 10 && (i += 1, this._hideAnotherRightItem());)
            ;
        i && (this._hideAnotherRightItem(), this._declassify(this.dom.overflowItem, "hide"))
    }, s._hideAnotherRightItem = function() {
        var t = this.dom.right.querySelector(".nav-action-item:not(.hide)");
        return !!t && (this._classify(t, "hide"), !0)
    }, s._isOverflowing = function() {
        for (var t = this.dom.left.querySelectorAll("*"), e = 0, i = t.length; e < i; ++e)
            if (t[e].clientWidth && t[e].scrollWidth > t[e].clientWidth + 1 && "SVG" != t[e].tagName.toUpperCase() && "spoken" != this._attr(t[e], "data-access"))
                return !0;
        return !1
    }, n
}),
define("text!bifocal/themes/listen/default/svg/slingshot-arrow.svg", [], function() {
    return "<svg viewBox='0 0 64 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n  <g stroke='none' stroke-width='1' fill='#000000' fill-rule='evenodd' class='icon-solid'>\n    <path class='icon-jump-tail' d='M32,58 C46.3594035,58 58,46.3619599 58,32.0057098 L58,30.1489748 L51.4092597,30.1489748 C50.383588,30.1489748 49.5521168,30.9802634 49.5521168,32.0057098 C49.5521168,33.0311562 50.383588,33.8624448 51.4092597,33.8624448 L54.2094344,33.8624448 C53.2657256,45.2990608 43.6826613,54.28653 32,54.28653 L32,58 Z' />\n    <path class='icon-jump-belly' d='M33.8571429,51.4297946 C33.8571426,50.4043483 33.0256715,49.5730599 32,49.5730599 C30.9743283,49.5730599 30.1428571,50.4043485 30.1428571,51.429795 L30.1428571,54.2102669 C18.703729,53.2667653 9.71428571,43.6858055 9.71428571,32.0057098 L6,32.0057098 C6,46.3619599 17.6405965,58 32,58 C32.6244335,58 33.2437257,57.9779921 33.8571429,57.9347097 L33.8571429,51.4297946 Z' />\n    <path class='icon-jump-head' d='M9.80249373,30.0109862 C10.6882303,20.0368996 18.1483509,11.9525046 27.8214286,10.1180731 L27.8214286,14.6786229 C27.8214286,15.7027983 28.4918819,16.0424092 29.3208823,15.4357348 L38.9021035,8.42405973 C39.3210727,8.11745208 39.3191556,7.61893993 38.9021035,7.31373522 L29.3208823,0.302060174 C28.4927569,-0.303973882 27.8214286,0.0405192432 27.8214286,1.05917202 L27.8214286,6.34768721 C15.4486125,8.34604225 6,19.0733355 6,32.0068861 C6,32.5825627 6.0187193,33.1538683 6.05558257,33.7202278 L9.43571484,33.7202278 C9.47663663,33.7229206 9.51792046,33.7242882 9.55952381,33.7242882 L13.2738095,33.7242882 C14.2994812,33.7242882 15.1309524,32.8930373 15.1309524,31.8676372 C15.1309524,30.8422372 14.2994812,30.0109862 13.2738095,30.0109862 L9.80249373,30.0109862 L9.80249373,30.0109862 Z' />\n  </g>\n</svg>\n"
}),
define("bifocal/themes/listen/default/src/parts/slingshot", ["require", "common", "core/src/view", "text!../../svg/slingshot-arrow.svg"], function(t) {
    var e = t("common"),
        i = t("core/src/view"),
        n = i.new(),
        s = n.prototype;
    return s._graphic("slingshot-arrow", t("text!../../svg/slingshot-arrow.svg")), s.HEIGHT = 320, s.BUBBLE_RADIUS = 32, s.BUBBLE_OFFSET_Y = 128, s.BUBBLE_OFFSET_X = 128, s.STEPS = [0, 5, 10, 15, 20, 30, 45, 60], s.STEP_INTERVAL = 50, s.SEEK_MAX_PX = s.STEPS.length * s.STEP_INTERVAL, s.TAP_THRESHOLD_PX = 10, s.$init = function() {
        this._.classCache = {},
        i.prototype.$init.apply(this, arguments)
    }, s._layout = function() {
        this.dom = this._build("slingshot", {
            access: "visual"
        }, " bubble", "  goo-outer", "   goo-inner", "    rubber", "    ammo", "     ammo-blob", "    anchor", "     anchor-blob", "  arrow", "   arrow-inner", "    arrow-icon", {
            icon: "slingshot-arrow"
        }, " meter", "  meter-gauge", "   meter-ladder"),
        e.each(this.STEPS, function(t) {
            var e = {
                substitutions: {
                    STEP: t
                },
                substitutionTags: !0
            };
            this._build("slingshot-meter-rung", {
                parentNode: this.dom.meterLadder
            }, " pos <span> {slingshot.positive}", e, " neg <span> {slingshot.negative}", e)
        }, this)
    }, s._listen = function(t) {
        this._handle("mode:change"),
        t.grip = BIF.events.onContact(this.dom.root, {
            start: this._onGripStart.bind(this),
            move: this._onGripMove.bind(this),
            end: this._onGripEnd.bind(this),
            cancel: this._onGripCancel.bind(this)
        })
    }, s._onModeChange = function(t) {
        "navigating" == t.m.to ? BIF.events.on(this.handlers.grip) : BIF.events.off(this.handlers.grip)
    }, s._onGripStart = function(t) {
        this.handlers.grip.capture(),
        this._.grip && this._releaseBubble(this._.grip);
        var e = this._.grip = {};
        e.start = {
            x: t.pageX,
            y: t.pageY
        };
        var i = this.dom.root.getBoundingClientRect();
        e.offset = {
            x: e.start.x - i.left,
            y: e.start.y - i.top
        },
        e.width = i.width,
        e.tap = !0,
        this._revealBubble(e.offset, 300),
        this._dispatch("grip", {
            grip: e
        })
    }, s._onGripMove = function(t) {
        var e = this._.grip;
        if (e) {
            e.direction = t.pageX - e.start.x < 0 ? 1 : -1;
            var i = 1.5 * this.BUBBLE_RADIUS,
                n = this.SEEK_MAX_PX;
            n = 1 == e.direction ? Math.min(n, e.start.x - i) : Math.min(n, e.width - e.start.x - i),
            e.delta = {
                x: Math.min(Math.abs(t.pageX - e.start.x), n),
                y: t.pageY - e.start.y
            },
            e.tap && e.delta.x > this.TAP_THRESHOLD_PX && (e.tap = !1, this._dispatch("swipe", {
                grip: e
            }), this._.showing || this._revealBubbleNow()),
            this._updateBubble(e)
        }
    }, s._onGripEnd = function(t) {
        var e = this._.grip;
        e && (e.tap ? (this._abortBubble(e), this._dispatch("tap", {
            grip: e
        })) : e.seeking ? (this._seekBy(this.STEPS[e.step] * e.direction), this._releaseBubble(e)) : (this._dispatch("abort"), this._abortBubble(e)), this._.grip = null)
    }, s._onGripCancel = function(t) {
        this._.grip;
        this._abortBubble(),
        this._.grip = null
    }, s._revealBubble = function(t, e) {
        this._completeReset();
        var i = this.BUBBLE_RADIUS + this.BUBBLE_OFFSET_X,
            n = .5 * this.HEIGHT;
        this.dom.bubble.style.left = t.x - i + "px",
        this.dom.bubble.style.top = t.y - n + "px";
        var s = t.x - 32,
            o = t.y - 50;
        this._styleTransform(this.dom.meter, "translate3d(" + s + "px," + o + "px,0)"),
        this._defer("bubble", this._revealBubbleNow.bind(this), e || 0)
    }, s._revealBubbleNow = function() {
        this._defer("bubble"),
        this._declassify(this.dom.root, "reset"),
        this._classify(this.dom.root, "animated"),
        this._classify(this.dom.root, "show"),
        this._.showing = !0,
        this._dispatch("show")
    }, s._updateBubble = function(t) {
        t.step = Math.min(Math.max(0, Math.floor(t.delta.x / this.STEP_INTERVAL)), this.STEPS.length - 1),
        t.seeking = !!t.step;
        t.delta.x;
        this._styleTransform(this.dom.ammo, "translate3d(" + t.delta.x + "px,0,0)"),
        this._styleTransform(this.dom.arrow, "translate3d(" + t.delta.x + "px,0px,0) scaleX(-1)");
        var e = t.delta.x,
            i = Math.max((500 - t.delta.x) / 500, .2);
        this._styleTransform(this.dom.rubber, "scale3d(" + e + "," + i + ",1)"),
        this._.classCache.seeking !== t.seeking && (this._classify(this.dom.root, "seeking", t.seeking), this._.classCache.seeking = t.seeking),
        this._.classCache.direction !== t.direction && (this._classify(this.dom.root, "positive", t.direction > 0), this._.classCache.direction = t.direction),
        t.step != this._.classCache.step && (this._dispatch("step", {
            step: t.step
        }), this._styleTransform(this.dom.meterLadder, "translateY(" + t.step * -100 + "px)"), this._.classCache.step = t.step)
    }, s._releaseBubble = function(t) {
        var e = t.offset.x - 32,
            i = t.offset.y - 50;
        this._styleTransform(this.dom.meter, "translate3d(" + e + "px," + i + "px,0)"),
        this._beginReset("released")
    }, s._abortBubble = function() {
        this._beginReset("aborted")
    }, s._beginReset = function(t) {
        this._defer("bubble"),
        this._classify(this.dom.root, t),
        this._declassify(this.dom.root, "show"),
        this._.showing = !1,
        this._styleTransform(this.dom.ammo, "translate3d(0,0,0)"),
        this._styleTransform(this.dom.arrow, "scaleX(-1)"),
        this._defer("bubble", this._completeReset.bind(this), 600)
    }, s._completeReset = function() {
        clearTimeout(this._.bubbleTimer),
        this._styleTransform(this.dom.rubber, "translateZ(0)"),
        this.dom.root.className = "slingshot reset",
        this._.classCache = {}
    }, s._seekBy = function(t) {
        this._dispatch("seek", {
            seconds: t
        }),
        BIF.objects.spool.seekBy(1e3 * t),
        BIF.objects.activity.record("slingshot", {
            seconds: t
        })
    }, s._dispatch = function(t, n) {
        n = e.absorb(n, {
            slingshot: this
        }),
        i.prototype._dispatch.call(this, t, n),
        BIF.events.dispatch("bifocal:slingshot:" + t, n)
    }, n
}),
define("text!bifocal/themes/read/default/svg/button-ebook.svg", [], function() {
    return '<svg\n  viewBox="0 0 256 338"\n  version="1.1"\n  xmlns="http://www.w3.org/2000/svg"\n  xmlns:xlink="http://www.w3.org/1999/xlink"\n  aria-labelledby="svg-title"\n  role="img"\n>\n  <title id="svg-title"></title>\n\n  <rect x="6" y="6" width="250" height="332" fill="#000000" rx="1" />\n  <rect x="-1" y="-1" width="250" height="332" fill="#888888" rx="1" class="cover-image-cover-color" />\n\n  <g mask="url(#image-mask)">\n    <use\n      x="-1"\n      y="-1"\n      width="250"\n      height="332"\n      xlink:href="#cover-painter-image"\n    ></use>\n  </g>\n</svg>\n'
}),
define("text!bifocal/themes/read/default/svg/button-audiobook.svg", [], function() {
    return '<svg\n  viewBox="0 0 256 256"\n  version="1.1"\n  xmlns="http://www.w3.org/2000/svg"\n  xmlns:xlink="http://www.w3.org/1999/xlink"\n  aria-labelledby="svg-title"\n  role="img"\n>\n  <title id="svg-title"></title>\n\n  <rect x="6" y="6" width="250" height="250" fill="#000000" rx="1" />\n  <rect x="-1" y="-1" width="250" height="250" fill="#888888" rx="1" class="cover-image-cover-color" />\n\n  <g mask="url(#image-mask)">\n    <use\n      x="-1"\n      y="-1"\n      width="250"\n      height="250"\n      xlink:href="#cover-painter-image"\n    ></use>\n  </g>\n</svg>\n'
}),
define("bifocal/themes/read/default/src/parts/cover-image", ["require", "common", "core/src/view", "text!../../svg/button-ebook.svg", "text!../../svg/button-audiobook.svg"], function(t) {
    var e = (t("common"), t("core/src/view")),
        i = e.new(),
        n = i.prototype;
    return n._graphic("button-ebook", t("text!../../svg/button-ebook.svg")), n._graphic("button-audiobook", t("text!../../svg/button-audiobook.svg")), n._layout = function(t) {
        this.dom = this._build("cover-image", " clip", "  icon", {
            icon: {
                Read: "button-ebook",
                Listen: "button-audiobook"
            }[BIF.state.outlet]
        })
    }, i
}),
define("bifocal/themes/listen/default/src/parts/backdrop", ["require", "common", "core/src/view", "./quirks", "./slingshot", "../../../../read/default/src/parts/cover-image"], function(t) {
    var e = (t("common"), t("core/src/view")),
        i = e.new(),
        n = i.prototype,
        s = t("./quirks"),
        o = t("./slingshot"),
        r = t("../../../../read/default/src/parts/cover-image");
    return n._layout = function() {
        this.dom = this._build("backdrop .bumper-e .bumper-w", {
            access: "visual"
        }, " blur <svg>", {
            attributes: {
                viewBox: "0 0 256 256",
                "xmlns:xlink": "http://www.w3.org/1999/xlink"
            }
        }, "  filter #backdrop-blur-filter", {
            namespace: "svg",
            tag: "filter"
        }, "   <feGaussianBlur>", {
            namespace: "svg",
            attributes: {
                in: "SourceGraphic",
                stdDeviation: 6
            }
        }, "  image <use>", {
            namespace: "svg",
            attributes: {
                width: 256,
                height: 256,
                filter: "url(#backdrop-blur-filter)"
            }
        }, " cover-button", {
            button: !0,
            spoken: "chapters.overview." + BIF.objects.codex.format()
        }, "  cover-image", r, " slingshot", {
            construct: o,
            skip: s("weird-svg-transform-origins")
        }),
        this.dom.image.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#cover-painter-image"),
        s("no-css-filter-on-svg") && this._classify(this.dom.coverButton, "no-shadow")
    }, n._listen = function(t) {
        this._handle("bifocal:ready"),
        this._handle("bifocal:resize"),
        this.dom.slingshot && (this._handle("grip", this.dom.slingshot), this._handle("tap", this.dom.slingshot), this._handle("swipe", this.dom.slingshot), this._handle("abort", this.dom.slingshot)),
        this._defer(this._classify.bind(this, this.dom.blur, "is-loaded", !0), 1e3)
    }, n._onBifocalReady = function() {
        this._defer(this._onBifocalResize.bind(this))
    }, n._onBifocalResize = function() {
        this._declassify(this.dom.coverButton, "is-animated");
        var t = BIF.objects.navigation.dom.header,
            e = BIF.objects.navigation.dom.progress.dom.playbackControls.dom.root,
            i = t.offsetTop + t.offsetHeight,
            n = document.documentElement.offsetHeight,
            s = Math.min(n - e.getBoundingClientRect().top, n - (i + 200));
        this.dom.root.offsetWidth < 500 ? (i += 12, s += 20) : s += 60;
        var o = .85 * this.dom.root.offsetWidth,
            r = this.dom.root.offsetHeight - (i + s),
            a = Math.round(Math.max(0, Math.min(o, r)));
        this.dom.coverButton.style.top = i + "px",
        this.dom.coverButton.style.bottom = s + "px",
        this.dom.coverButton.style.width = a + "px",
        this.dom.coverButton.style.height = a + "px",
        this._defer(this._classify.bind(this, this.dom.coverButton, "is-animated", !0))
    }, n._onTapCoverButton = function(t) {
        BIF.objects.commands.execute("overview")
    }, n._onGripSlingshot = function(t) {
        var e = this.dom.coverButton.getBoundingClientRect(),
            i = t.m.grip.start.x - window.pageXOffset,
            n = t.m.grip.start.y - window.pageYOffset;
        i < e.left || i > e.right || n < e.top || n > e.bottom || this._toggleCoverButton(!0)
    }, n._onTapSlingshot = function(t) {
        this.dom.coverButton.classList.contains("is-active") && (this._toggleCoverButton(!1), BIF.objects.commands.execute("overview"))
    }, n._onSwipeSlingshot = function(t) {
        this._toggleCoverButton(!1)
    }, n._onAbortSlingshot = function(t) {
        this._toggleCoverButton(!1)
    }, n._toggleCoverButton = function(t) {
        this._classify(this.dom.coverButton, "is-active", t || !1)
    }, i
}),
define("text!bifocal/themes/listen/default/svg/playback-jump-l.svg", [], function() {
    return '<svg version="1.1" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n  <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">\n    <path class="icon-hollow" d="M13.1533172,21.4573853 C11.4611445,24.5737838 10.5,28.144786 10.5,31.9402755 C10.5,44.09054 20.3497355,53.9402755 32.5,53.9402755 C44.6502645,53.9402755 54.5,44.09054 54.5,31.9402755 C54.5,19.790011 44.6502645,9.94027551 32.5,9.94027551" stroke="#000000" stroke-linecap="round" stroke-width="3" />\n    <path class="icon-solid" d="M37.575,6.03835562 L37.575,14.9921954 C37.575,16.6700364 36.2148411,18.0301953 34.5370001,18.0301953 C33.9492506,18.0301953 33.3741202,17.8597036 32.8813255,17.5393871 L25.9937564,13.0624672 C24.5869813,12.1480633 24.1878355,10.266376 25.1022393,8.85960093 C25.333799,8.50335527 25.6375107,8.19964353 25.9937564,7.96808385 L32.8813255,3.49116395 C34.2881006,2.57676013 36.1697879,2.97590593 37.0841917,4.38268104 C37.4045083,4.87547579 37.575,5.45060619 37.575,6.03835562 Z" fill="#000000" fill-rule="nonzero" />\n  </g>\n</svg>\n'
}),
define("text!bifocal/themes/listen/default/svg/playback-jump-r.svg", [], function() {
    return '<svg version="1.1" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n  <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">\n    <path class="icon-hollow" d="M13.1533172,21.4573853 C11.4611445,24.5737838 10.5,28.144786 10.5,31.9402755 C10.5,44.09054 20.3497355,53.9402755 32.5,53.9402755 C44.6502645,53.9402755 54.5,44.09054 54.5,31.9402755 C54.5,19.790011 44.6502645,9.94027551 32.5,9.94027551" stroke="#000000" stroke-linecap="round" stroke-width="3" transform="translate(32.500000, 31.940276) scale(-1, 1) translate(-32.500000, -31.940276) " />\n    <path class="icon-solid" d="M40.3889246,6.03835562 L40.3889246,14.9921954 C40.3889246,16.6700364 39.0287657,18.0301953 37.3509247,18.0301953 C36.7631752,18.0301953 36.1880448,17.8597036 35.6952501,17.5393871 L28.807681,13.0624672 C27.4009059,12.1480633 27.0017601,10.266376 27.9161639,8.85960093 C28.1477236,8.50335527 28.4514353,8.19964353 28.807681,7.96808385 L35.6952501,3.49116395 C37.1020252,2.57676013 38.9837125,2.97590593 39.8981163,4.38268104 C40.2184329,4.87547579 40.3889246,5.45060619 40.3889246,6.03835562 Z" fill="#000000" fill-rule="nonzero" transform="translate(33.906962, 10.515098) scale(-1, 1) translate(-33.906962, -10.515098) " />\n  </g>\n</svg>\n'
}),
define("text!bifocal/themes/listen/default/svg/playback-jump-l-mini.svg", [], function() {
    return '<svg version="1.1" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n  <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">\n    <path class="icon-hollow" d="M15.5626599,23.6788982 C13.8631791,26.5774932 12.8888889,29.9527455 12.8888889,33.5555556 C12.8888889,44.3557907 21.6442093,53.1111111 32.4444444,53.1111111 C43.2446796,53.1111111 52,44.3557907 52,33.5555556 C52,22.7553204 43.2446796,14 32.4444444,14" stroke="#000000" stroke-linecap="round" stroke-width="4" />\n    <path class="icon-solid" d="M36.9555556,9.97607121 L36.9555556,17.9350399 C36.9555556,19.4264542 35.7465254,20.6354843 34.2551112,20.6354843 C33.7326672,20.6354843 33.2214402,20.4839361 32.7834004,20.1992103 L25.1126477,15.213221 C24.4180582,14.7617378 24.2209816,13.8326625 24.6724648,13.138073 C24.7867964,12.9621782 24.9367528,12.8122218 25.1126477,12.6978901 L32.7834004,7.71190084 C34.0338672,6.89909744 35.7064781,7.2538937 36.5192815,8.50436047 C36.8040074,8.94240025 36.9555556,9.45362727 36.9555556,9.97607121 Z" fill="#000000" />\n    <line class="icon-hollow" stroke="#000000" stroke-linecap="round" stroke-width="4" x1="26.5" x2="38.5" y1="34.5" y2="34.5" />\n  </g>\n</svg>\n'
}),
define("text!bifocal/themes/listen/default/svg/playback-jump-r-mini.svg", [], function() {
    return '<svg version="1.1" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n  <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">\n    <path class="icon-hollow" d="M48.4373401,23.6788982 C50.1368209,26.5774932 51.1111111,29.9527455 51.1111111,33.5555556 C51.1111111,44.3557907 42.3557907,53.1111111 31.5555556,53.1111111 C20.7553204,53.1111111 12,44.3557907 12,33.5555556 C12,22.7553204 20.7553204,14 31.5555556,14" stroke="#000000" stroke-linecap="round" stroke-width="4" />\n    <path class="icon-solid" d="M27.0444444,9.97607121 L27.0444444,17.9350399 C27.0444444,19.4264542 28.2534746,20.6354843 29.7448888,20.6354843 C30.2673328,20.6354843 30.7785598,20.4839361 31.2165996,20.1992103 L38.8873523,15.213221 C39.5819418,14.7617378 39.7790184,13.8326625 39.3275352,13.138073 C39.2132036,12.9621782 39.0632472,12.8122218 38.8873523,12.6978901 L31.2165996,7.71190084 C29.9661328,6.89909744 28.2935219,7.2538937 27.4807185,8.50436047 C27.1959926,8.94240025 27.0444444,9.45362727 27.0444444,9.97607121 Z" fill="#000000" />\n    <line class="icon-hollow" stroke="#000000" stroke-linecap="round" stroke-width="4" x1="32.5" x2="32.5" y1="28.5" y2="40.5" />\n    <line class="icon-hollow" stroke="#000000" stroke-linecap="round" stroke-width="4" x1="26.5" x2="38.5" y1="34.5" y2="34.5" />\n  </g>\n</svg>\n'
}),
define("bifocal/themes/listen/default/src/parts/playback-jump", ["require", "core/src/view", "text!../../svg/playback-jump-l.svg", "text!../../svg/playback-jump-r.svg", "text!../../svg/playback-jump-l-mini.svg", "text!../../svg/playback-jump-r-mini.svg"], function(t) {
    var e = t("core/src/view"),
        i = e.new(),
        n = i.prototype;
    return n._graphic("playback-jump-l", t("text!../../svg/playback-jump-l.svg")), n._graphic("playback-jump-r", t("text!../../svg/playback-jump-r.svg")), n._graphic("playback-jump-l-mini", t("text!../../svg/playback-jump-l-mini.svg")), n._graphic("playback-jump-r-mini", t("text!../../svg/playback-jump-r-mini.svg")), n.$init = function(t, i, n) {
        this.jumpSeconds = i,
        this.textSeconds = this._phrase({
            number: Math.abs(this.jumpSeconds)
        }),
        this.direction = this.jumpSeconds >= 0 ? "ahead" : "behind",
        this.iconSuffix = "-" + {
            ahead: "r",
            behind: "l"
        }[this.direction],
        (this.iconset = n) && (this.iconSuffix += "-" + n),
        e.prototype.$init.call(this, t)
    }, n._layout = function() {
        this.dom = this._build("playback-jump", {
            button: !0,
            classes: "playback-jump-" + this.direction,
            spoken: {
                label: {
                    behind: "commands.playback-rewind.spoken",
                    ahead: "commands.playback-advance.spoken"
                }[this.direction],
                substitutions: {
                    SECONDS: this.textSeconds
                }
            }
        }, " icon", {
            icon: "playback-jump" + this.iconSuffix
        }, " text", {
            html: this.textSeconds
        }),
        this._semaphore("iconset", this.iconset)
    }, n._onTap = function() {
        BIF.objects.spool.seekBy(1e3 * this.jumpSeconds);
        var t = this.jumpSeconds < 0 ? "jump-rewind" : "jump-advance";
        BIF.objects.activity.record(t, {
            SECONDS: this.jumpSeconds
        })
    }, i
}),
define("text!bifocal/themes/read/default/svg/playback-play.svg", [], function() {
    return '<svg version="1.1" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n  <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">\n    <path class="icon-solid" d="M26.0650388,14.7463423 L48.4526979,28.2416865 C50.3446755,29.3821759 50.953877,31.8404761 49.8133875,33.7324536 C49.4923101,34.2650945 49.0514537,34.7155283 48.5258354,35.0479773 L26.1381763,49.2079767 C24.2711432,50.3888589 21.8003197,49.8326236 20.6194376,47.9655906 C20.2147983,47.3258359 20,46.5843945 20,45.8274143 L20,18.1720706 C20,15.9629316 21.790861,14.1720706 24,14.1720706 C24.7277712,14.1720706 25.4417522,14.3706233 26.0650388,14.7463423 Z" fill="#000000" />\n  </g>\n</svg>\n'
}),
define("text!bifocal/themes/read/default/svg/playback-pause.svg", [], function() {
    return "<svg viewBox='0 0 64 64' version='1.1' xmlns='http://www.w3.org/2000/svg'>\n  <g stroke='none' stroke-width='1' fill='#000000' fill-rule='evenodd' class='icon-solid'>\n    <rect x='16' y='16' width='13' height='33' rx='2' />\n    <rect x='35' y='16' width='13' height='33' rx='2' />\n  </g>\n</svg>\n"
}),
define("text!bifocal/themes/read/default/svg/playback-ended.svg", [], function() {
    return "<svg viewBox='0 0 128 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n  <g stroke='none' stroke-width='1' fill='#000000' fill-rule='evenodd' class='icon-solid'>\n    <path d='M83.0878494,45.0717358 L82.6362162,46.3913514 C82.5324324,46.7027027 82.4805405,46.9621622 82.4805405,47.1697297 C82.4805405,47.7405405 82.8437838,48 83.3627027,48 C84.4524324,48 86.1648649,46.9621622 86.6837838,45.3535135 L87.4621622,43.0702703 C88.4481081,40.2162162 93.1702703,35.9091892 94.3637838,35.9091892 C94.5194595,35.9091892 94.6232432,36.012973 94.6232432,36.2205405 C94.6232432,36.947027 92.9108108,39.3340541 91.8210811,43.1740541 C91.6135135,43.9005405 91.5097297,44.5751351 91.5097297,45.1459459 C91.5097297,46.8583784 92.3918919,48 94.26,48 C95.6904106,48 97.764569,46.937816 99.9754741,44.838798 C100.686087,46.721618 102.346759,48 104.327027,48 C106.247027,48 108.270811,46.9102703 110.087027,44.9902703 C111.332432,48.3113514 114.29027,50.8021622 117.974595,50.8021622 C119.168108,50.8021622 119.894595,50.4908108 119.894595,50.1794595 C119.894595,49.92 119.635135,49.7643243 119.012432,49.5567568 C115.224324,48.3632432 113.511892,45.3535135 113.148649,41.0983784 C117.507568,35.1827027 122.22973,22.9881081 122.22973,16.6572973 C122.22973,14.9448649 121.762703,14.2183784 121.036216,14.2183784 C118.649189,14.2183784 113.044865,22.7805405 110.605946,32.5881081 C110.035135,32.4843243 109.412432,32.4843243 109.049189,32.4843243 C103.704324,32.8475676 99.6048649,38.5037838 99.6048649,42.7589189 C99.6048649,42.8194689 99.6057347,42.8797362 99.6074615,42.939707 C97.8120256,44.7568569 96.4262423,45.612973 95.7648649,45.612973 C95.4016216,45.612973 95.2978378,45.3016216 95.2978378,44.8864865 C95.2978378,44.627027 95.3497297,44.2637838 95.4535135,43.9005405 C96.2318919,41.2540541 97.5291892,38.2443243 98.5151351,36.2205405 C98.9821622,35.2345946 99.2416216,34.3524324 99.2416216,33.8335135 C99.2416216,32.8994595 98.6189189,32.4324324 97.7367568,32.4324324 C95.6610811,32.4324324 91.9248649,34.6118919 89.3302703,37.5697297 L90.5237838,34.092973 C90.6275676,33.7816216 90.6794595,33.5221622 90.6794595,33.3145946 C90.6794595,32.6918919 90.3162162,32.4324324 89.7972973,32.4324324 C87.2545946,32.4324324 84.7637838,34.4562162 84.7637838,35.2864865 C84.7637838,35.6497297 85.127027,35.8054054 85.4902703,35.8054054 C85.6459459,35.8054054 85.8535135,35.7535135 85.9572973,35.7535135 C86.112973,35.7535135 86.1648649,35.8572973 86.1648649,35.9610811 C86.1648649,36.1167568 86.0610811,36.3762162 85.9572973,36.6875676 L84.36577,41.3378113 C84.3600627,41.344504 84.3543557,41.3511796 84.3486486,41.3578378 C81.9097297,44.2118919 80.1972973,45.5091892 76.4610811,47.2735135 C75.0081081,47.9481081 73.0881081,48.467027 71.4275676,48.467027 C69.0405405,48.467027 67.4318919,47.4291892 67.4318919,44.9383784 C67.4318919,43.3816216 68.1064865,41.6172973 69.0924324,40.1643243 C69.0924324,40.1643243 69.0924324,40.1124324 69.1443243,40.1124324 C70.1302703,40.4237838 71.22,40.5794595 72.3097297,40.5794595 C76.9281081,40.5794595 78.5886486,38.6594595 78.5886486,36.8951351 C78.5886486,35.4421622 77.2913514,34.6118919 75.4232432,34.6118919 C73.5551351,34.6118919 71.1162162,35.3902703 68.9886486,36.6356757 C68.2102703,35.5978378 67.6394595,34.092973 67.6394595,31.9135135 C67.6394595,24.6486486 75.9421622,16.2940541 81.2351351,16.2940541 C83.4145946,16.2940541 84.6081081,17.8508108 84.6081081,19.9264865 C84.6081081,23.1437838 81.6502703,27.6583784 75.1637838,29.1632432 C74.4372973,29.3189189 74.1778378,29.5783784 74.1778378,29.8378378 C74.1778378,30.4086486 75.527027,30.8756757 77.1356757,30.8756757 C83.4664865,30.8756757 88.2924324,25.3232432 88.2924324,20.2897297 C88.2924324,16.2940541 85.5421622,14.1664865 82.2210811,14.1664865 C78.6405405,14.1664865 72.9843243,16.2940541 68.8848649,20.1340541 C65.3562162,23.4551351 62.7097297,27.1913514 62.7097297,31.7059459 C62.7097297,34.6118919 64.1627027,37.0508108 66.2902703,38.6594595 L66.1864865,38.7632432 C64.0589189,40.8389189 62.9691892,43.3816216 62.9691892,45.6648649 C62.9691892,46.6508108 63.1248649,47.532973 63.54,48.3113514 C64.7854054,50.8021622 66.912973,51.6843243 69.3518919,51.6843243 C73.0881081,51.6843243 77.1356757,49.7124324 80.5086486,47.2735135 C81.457693,46.5956247 82.3075548,45.8468911 83.0878494,45.0717358 Z M40.8747914,42.877919 C39.0498315,44.7374564 37.6401806,45.612973 36.9713514,45.612973 C36.6081081,45.612973 36.5043243,45.3016216 36.5043243,44.8864865 C36.5043243,44.627027 36.5562162,44.2637838 36.66,43.9005405 C37.4383784,41.2021622 38.7356757,38.2962162 39.7216216,36.2205405 C40.1886486,35.2345946 40.3962162,34.4043243 40.3962162,33.8335135 C40.3962162,32.8994595 39.8254054,32.4843243 38.9432432,32.4843243 C36.9194595,32.4843243 33.2351351,34.56 30.6924324,37.4140541 L37.9054054,16.3459459 C38.112973,15.7751351 38.2167568,15.2562162 38.2167568,15.0486486 C38.2167568,14.4778378 37.8535135,14.1664865 37.3345946,14.1664865 C35.6221622,14.1664865 34.2210811,14.9448649 33.3389189,15.6713514 C32.6643243,16.2421622 32.3010811,16.7091892 32.3010811,17.0724324 C32.3010811,17.4356757 32.5605405,17.5913514 32.9237838,17.5913514 C33.0794595,17.5913514 33.3908108,17.4875676 33.4945946,17.4875676 C33.6502703,17.4875676 33.7021622,17.5913514 33.7021622,17.6951351 C33.7021622,17.8508108 33.5983784,18.1102703 33.4945946,18.4216216 L23.8945946,46.3913514 C23.7908108,46.7027027 23.7389189,46.9621622 23.7389189,47.1697297 C23.7389189,47.7405405 24.1021622,48 24.6210811,48 C25.7108108,48 27.3713514,46.9621622 27.9421622,45.3535135 L28.8243243,42.8108108 C29.7583784,40.0605405 34.4805405,35.9091892 35.5702703,35.9091892 C35.7259459,35.9091892 35.8297297,36.012973 35.8297297,36.1686486 C35.8297297,36.947027 34.1172973,39.2821622 33.0275676,43.1740541 C32.82,43.9005405 32.6643243,44.5751351 32.7162162,45.1459459 C32.7162162,46.8583784 33.5983784,48 35.4664865,48 C36.9235321,48 39.0485228,46.8978907 41.3056047,44.7204648 C42.1744136,46.7375054 44.2417835,48 46.7789189,48 C50.2556757,48 53.94,45.9243243 56.5345946,42.9145946 C57.0535135,42.2918919 57.2610811,41.8248649 57.2610811,41.4616216 C57.2610811,41.0983784 57.0016216,40.9427027 56.6902703,40.9427027 C56.3789189,40.9427027 56.0156757,41.0983784 55.8081081,41.3578378 C53.3691892,44.2118919 50.6189189,45.4572973 48.4394595,45.4572973 C46.2081081,45.4572973 44.6513514,44.16 44.6513514,41.772973 C44.6513514,38.2443243 47.1940541,34.2486486 49.4254054,34.2486486 C50.1518919,34.2486486 50.6189189,34.7156757 50.6189189,35.7016216 C50.6189189,37.1027027 49.5291892,39.4378378 46.26,42.0324324 C45.7410811,42.4475676 45.5335135,42.8108108 45.5335135,43.1221622 C45.5335135,43.4854054 45.8448649,43.7448649 46.26,43.7448649 C46.4156757,43.7448649 46.6232432,43.692973 46.8308108,43.5891892 C50.4632432,41.9286486 54.3551351,38.4 54.3551351,35.5978378 C54.3551351,33.9891892 53.1097297,32.4324324 50.5151351,32.4324324 C44.7551351,32.4324324 40.8632432,37.7772973 40.8632432,42.4994595 C40.8632432,42.6272215 40.8671267,42.7533984 40.8747914,42.877919 Z M29.7064865,16.7091892 C27.4232432,15.6713514 22.2340541,14.1664865 18.8610811,14.1664865 C9.36486486,14.1664865 6.09567568,20.9643243 6.09567568,25.0637838 C6.09567568,29.5783784 8.69027027,32.4324324 12.5302703,32.4324324 C15.2286486,32.4324324 16.2664865,31.5502703 16.2664865,30.8756757 C16.2664865,30.4086486 15.8513514,30.0454054 15.1248649,30.0454054 C12.0632432,30.0454054 9.41675676,27.1394595 9.41675676,23.507027 C9.41675676,18.2140541 13.2048649,16.0345946 17.2524324,16.0345946 C19.4318919,16.0345946 23.0124324,17.3837838 25.7108108,18.6291892 L16.3702703,45.7686486 C15.4881081,48.3113514 13.3605405,49.7643243 11.9075676,50.2313514 C11.1291892,50.4389189 10.7140541,50.6983784 10.7140541,51.1135135 C10.7140541,51.5805405 11.232973,51.6843243 11.7518919,51.6843243 C14.8654054,51.6843243 19.2762162,49.5567568 21.7151351,42.4475676 C24.2578378,35.027027 30.0178378,18.2140541 30.0178378,18.2140541 C30.1216216,17.9545946 30.1735135,17.6951351 30.1735135,17.4875676 C30.1735135,17.0724324 29.9659459,16.812973 29.7064865,16.7091892 Z M75.2156757,37.1545946 C75.2156757,37.932973 74.2816216,38.7632432 72.9324324,38.7632432 C72.4654054,38.7632432 71.687027,38.6075676 70.8567568,38.1924324 C72.0502703,37.1545946 73.4513514,36.4281081 74.3335135,36.4281081 C74.8005405,36.4281081 75.2156757,36.7394595 75.2156757,37.1545946 L75.2156757,37.1545946 Z M103.341081,42.1362162 C103.341081,38.5556757 105.520541,34.7675676 108.582162,34.7675676 C109.152973,34.7675676 109.879459,35.027027 109.879459,35.8572973 C109.879459,37.5697297 108.270811,37.1545946 108.270811,37.8291892 C108.270811,38.3481081 108.945405,38.6594595 109.568108,38.7632432 C109.516216,39.6454054 109.464324,40.5794595 109.464324,41.4616216 C109.464324,42.0843243 109.516216,42.707027 109.62,43.2778378 C108.218919,44.8864865 106.765946,45.7686486 105.676216,45.7686486 C104.171351,45.7686486 103.341081,44.0562162 103.341081,42.1362162 L103.341081,42.1362162 Z M113.46,34.3005405 C114.497838,27.7621622 117.196216,19.8227027 118.182162,19.8227027 C118.38973,19.8227027 118.493514,20.1859459 118.493514,21.0162162 C118.493514,21.8464865 116.781081,31.8097297 113.096757,38.3481081 C113.096757,37.5178378 113.252432,35.5978378 113.46,34.3005405 L113.46,34.3005405 Z' />\n  </g>\n</svg>\n"
}),
define("text!bifocal/themes/read/default/svg/playback-ended-lote.svg", [], function() {
    return "<svg viewBox='0 0 64 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n  <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>\n    <rect fill='#000000' x='2' y='2' width='60' height='60' rx='7' class='icon-solid' />\n  </g>\n</svg>\n"
}),
define("bifocal/themes/read/default/src/parts/playback-toggle", ["require", "common", "core/src/view", "text!../../svg/playback-play.svg", "text!shibui/svg/spinner-12.svg", "text!../../svg/playback-pause.svg", "text!../../svg/playback-ended.svg", "text!../../svg/playback-ended-lote.svg"], function(t) {
    var e = t("common"),
        i = t("core/src/view"),
        n = i.new(),
        s = n.prototype;
    return s._graphic("playback-play", t("text!../../svg/playback-play.svg")), s._graphic("playback-pending", t("text!shibui/svg/spinner-12.svg")), s._graphic("playback-pause", t("text!../../svg/playback-pause.svg")), s._graphic("playback-ended", t("text!../../svg/playback-ended.svg")), s._graphic("playback-ended-lote", t("text!../../svg/playback-ended-lote.svg")), s.toggle = function() {
        try {
            BIF.objects.audioManager.getContext().resume()
        } catch (t) {}
        var t = BIF.objects.audioManager,
            e = t.getState();
        e.speechtrack.playing ? (this._.wasSoundtracking = e.soundtrack.playing, t.properties.speechtrack.pause(), t.properties.soundtrack.pause()) : (t.properties.speechtrack.play(), this._.wasSoundtracking && t.properties.soundtrack.play(), BIF.objects.modeManager.exitModes())
    }, s._layout = function() {
        this.dom = this._build("playback-toggle", {
            button: !0,
            spoken: "a11y.play"
        }, " icons", "  icon-play", {
            icon: "playback-play"
        }, "  icon-pending", {
            icon: "playback-pending"
        }, "  icon-pause", {
            icon: "playback-pause"
        }, "  icon-ended", {
            icon: SPARK.locale.isEnglish ? "playback-ended" : "playback-ended-lote"
        })
    }, s._listen = function(t) {
        this._handle("bifocal:audio:state")
    }, s._onTap = function() {
        this.toggle()
    }, s._onBifocalAudioState = function(t) {
        var i = t.m;
        if (!i.audio.incompatible) {
            var n = i.speechtrack,
                s = "paused";
            n.ended ? s = "ended" : n.playing && n.loading < 1 ? s = "pending" : n.playing && (s = "playing"),
            e.DataClass.set(this.dom.root, "playback", s),
            this._textify(this.dom.root, {
                spoken: "playing" == s ? "a11y.pause" : "a11y.play"
            })
        }
    }, n
}),
define("bifocal/themes/listen/default/src/parts/playback-toggle", ["require", "../../../../read/default/src/parts/playback-toggle"], function(t) {
    var e = t("../../../../read/default/src/parts/playback-toggle"),
        i = e.new(),
        n = i.prototype;
    return n.toggle = function() {
        var t = BIF.objects.spool.toggle();
        this._textify(this.dom.root, {
            spoken: t ? "a11y.pause" : "a11y.play"
        })
    }, i
}),
define("bifocal/themes/listen/default/src/parts/playback-controls", ["require", "common", "core/src/view", "./playback-jump", "./playback-toggle"], function(t) {
    var e = (t("common"), t("core/src/view")),
        i = e.new(),
        n = i.prototype,
        s = t("./playback-jump"),
        o = t("./playback-toggle");
    return n.$init = function(t, i) {
        this.iconset = i,
        e.prototype.$init.call(this, t)
    }, n._layout = function() {
        this.dom = this._build("playback-controls .bumper-e .bumper-w", " left .playback-control", "  jump-behind", {
            construct: s,
            with: [-15, this.iconset]
        }, " center .playback-control", "  playback-toggle", o, " right .playback-control", "  jump-ahead", {
            construct: s,
            with: [15, this.iconset]
        })
    }, n._listen = function() {
        this._activateForModes("navigating")
    }, i
}),
define("text!bifocal/themes/read/default/svg/chapter-arrow.svg", [], function() {
    return '<svg version="1.1" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n  <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">\n    <path class="icon-solid" d="M38.8181825,16.2653774 L38.8181825,47.7346226 C38.8181825,48.7304088 38.0109383,49.5376531 37.0151521,49.5376531 C36.5640489,49.5376531 36.1293326,49.3685555 35.7968,49.063734 L20.0816968,34.6582227 C18.6136009,33.3124681 18.5144237,31.0313917 19.8601782,29.5632959 C19.930774,29.4862823 20.0046832,29.4123731 20.0816968,29.3417773 L35.7968,14.936266 C36.5308479,14.2633888 37.6713862,14.3129774 38.3442634,15.0470253 C38.649085,15.3795579 38.8181825,15.8142742 38.8181825,16.2653774 Z" fill="#000000" />\n  </g>\n</svg>\n'
}),
define("bifocal/themes/read/default/src/parts/chapter-bar", ["require", "common", "core/src/view", "shibui/src/haptics", "text!../../svg/chapter-arrow.svg"], function(t) {
    var e = t("common"),
        i = t("core/src/view"),
        n = i.new(),
        s = n.prototype,
        o = t("shibui/src/haptics");
    return s._graphic("chapter-arrow", t("text!../../svg/chapter-arrow.svg")), s._layout = function() {
        this.dom = this._build("chapter-bar", " prev-button .chapter-bar-jump-button", {
            button: !0,
            access: {
                disabled: !0
            }
        }, "  prev-icon", {
            icon: "chapter-arrow"
        }, "  prev-text <span>", " title-button", {
            button: !0
        }, "  title {loading}", "  <span> {a11y.breath}", {
            access: "spoken"
        }, "  strap {chapters.heading.full}", " next-button .chapter-bar-jump-button", {
            button: !0,
            access: {
                disabled: !0
            }
        }, "  next-text <span>", "  next-icon", {
            icon: "chapter-arrow"
        })
    }, s._listen = function() {
        this._activateForModes("navigating"),
        this._handle("bifocal:seeker:place")
    }, s._onTapTitleButton = function(t) {
        BIF.objects.commands.execute("chapters")
    }, s._onTapPrevButton = function(t) {
        BIF.objects.compass.chapterManager.previousPlace().seek(),
        o.impact("light")
    }, s._onTapNextButton = function(t) {
        BIF.objects.compass.chapterManager.nextPlace().seek(),
        o.impact("light")
    }, s._onBifocalSeekerPlace = function(t) {
        this._updateChapterTitle(t.m.place),
        this._updateChapterButtons(t)
    }, s._updateChapterTitle = function(t) {
        if (!this._.chapter || this._.chapter != t.chapter) {
            this._.chapter = t.chapter;
            var i = e.try(this._.chapter, "title") || BIF.objects.codex.title();
            e.try(this._.chapter, "prev") || (i = i.replace(/\s—\s.*/, "")),
            this._textify(this.dom.title, {
                html: i
            })
        }
    }, s._updateChapterButtons = function(t) {
        var e = "seek" == t.m.mode || !t.m.place.isFinite();
        !this._.seeking && e ? (this._.seeking = !0, this._classify(this.dom.root, "is-seeking")) : this._.seeking && !e && (this._.seeking = !1, this._declassify(this.dom.root, "is-seeking")),
        this._.seeking || (this._populateChapterButton(this.dom.prevButton), this._populateChapterButton(this.dom.nextButton))
    }, s._populateChapterButton = function(t) {
        var i = t == this.dom.prevButton ? "previous" : "next",
            n = BIF.objects.compass.chapterManager,
            s = BIF.objects.compass.place,
            o = n[i + "Place"](s),
            r = this._chapterDataInDirection(i, n._placeDistance(s, o)),
            a = e.excise(r, "distance");
        if (this._.chpCache = this._.chpCache || {
            previous: 1 / 0,
            next: 1 / 0
        }, a !== this._.chpCache[i]) {
            this._.chpCache[i] = a;
            var c = !0,
                l = i;
            if (a) {
                if (c = !1, "previous" == i && e.try(s, "chapter.place")) {
                    var h = n._placeDistance(s.chapter.place, s);
                    h > 0 && (l = "current"),
                    "current" != l || e.try(s, "chapter.prev") || (l = "first")
                }
                "next" != i || e.try(s, "chapter.next") || (l = "last")
            } else
                l = "previous" == i ? "first" : "last";
            this.access(t, {
                disabled: c
            }),
            this._textify(t, {
                spoken: [{
                    label: "a11y.chapters." + l
                }, {
                    label: "a11y.breath"
                }, {
                    label: "a11y.chapters.jump." + i,
                    substitutions: r
                }]
            }),
            c || this._textify(t.querySelector("span"), {
                label: "chapters.jump.abbr",
                substitutions: r
            })
        }
    }, s._chapterDataInDirection = function(t, e) {
        return e ? {
            distance: e,
            COUNT: Math.abs(e)
        } : {}
    }, n
}),
define("bifocal/themes/listen/default/src/parts/chapter-bar", ["require", "../../../../read/default/src/parts/chapter-bar"], function(t) {
    var e = t("../../../../read/default/src/parts/chapter-bar"),
        i = e.new(),
        n = i.prototype;
    return n._chapterDataInDirection = function(t, e) {
        var i = e ? Math.round(e / 6e4) || {
            previous: -1,
            next: 1
        }[t] : void 0;
        return i ? {
            distance: i,
            COUNT: Math.abs(i)
        } : {}
    }, i
}),
define("bifocal/themes/read/default/src/parts/seekometer-affordance", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.SCROLLING_THRESHOLD = 12, n.$init = function(t) {
        this.tape = t,
        this.tape.style.setProperty("transition-property", "transform"),
        this.contactHandler = BIF.events.onContact(this.tape, {
            start: this._onContactStart.bind(this),
            move: this._onContactMove.bind(this),
            end: this._onContactEnd.bind(this),
            cancel: this._onContactEnd.bind(this)
        }),
        this.wheelHandler = BIF.events.on(this.tape, "wheel", this._onMouseWheel.bind(this)),
        this._.lastMouseWheelPercent = 1 / 0,
        this.velocity = new BIF.events.Velocity,
        this.listen()
    }, n.reset = function() {
        this._.width = null
    }, n.jump = function(t, e) {
        var i = this._tapeWidth(),
            n = this._tapePercent();
        if ("number" != typeof e) {
            var s = Math.abs(t * i - n * i);
            e = Math.min(500, Math.round(3 * s))
        }
        this._setPercent(t, e, "ease-out")
    }, n.interpolate = function(t, i, n) {
        var s = function() {
                setTimeout(function() {
                    this._setPercent(i, n - e.epochMilliseconds(), "linear")
                }.bind(this), 0)
            }.bind(this),
            o = this._tapePercent(),
            r = this._tapeWidth();
        Math.abs(Math.round(t * r) - Math.round(o * r)) > 5 ? (this.jump(t), this.transitionHandler = BIF.events.on(this.tape, "transitionend", s)) : s()
    }, n.on = function(t) {
        this._.callbacks = t
    }, n.listen = function() {
        this.contactHandler.listen(),
        this.wheelHandler.listen()
    }, n.deafen = function() {
        this.contactHandler.deafen(),
        this.wheelHandler.deafen()
    }, n._setPercent = function(t, i, n) {
        BIF.events.off(this.transitionHandler),
        n = n || "linear";
        var s = e.epochMilliseconds() + (i || 0);
        if (!(this._.easing == n && Math.abs(this._.percent - t) < 1e-6 && this._.eta && s && Math.abs(this._.eta - s) < 1e3)) {
            this._.percent = t,
            this._.easing = n,
            this._.eta = s;
            var o = 0 - this._tapeWidth() * t;
            o -= Math.random() / 2,
            this.tape.style.setProperty("transition-timing-function", this._.easing),
            this.tape.style.setProperty("transition-duration", (i || 0) + "ms"),
            this.tape.style.setProperty("transform", "translate3d(" + o + "px, 0, 0)")
        }
    }, n._onContactStart = function(t) {
        BIF.events.stop(t);
        var e = this._tapeWidth();
        this._.contact || (this._.contact = {}, this._.contact.precision = [], this._.contact.velocityOptions = {
            boundary: {
                left: 0,
                right: e,
                top: 0,
                bottom: 0
            },
            friction: .95
        }, this.velocity.onUpdate = this._onContactUpdate.bind(this, e)),
        this._.contact.here = this._.contact.start = t.clientX * -1,
        this._.contact.startPercent = this._tapePercent(),
        this._.contact.velocityOptions.position = {
            x: this._.contact.startPercent * e,
            y: 0
        },
        this.velocity.configure(this._.contact.velocityOptions),
        this.velocity.trackFirst(this._.contact.start, 0)
    }, n._onContactMove = function(t) {
        this._.contact && (this._.contact.here = t.clientX * -1, !this._.contact.scrolling && Math.abs(this._.contact.here - this._.contact.start) > this.SCROLLING_THRESHOLD && (this._.contact.scrolling = !0, this.contactHandler.capture()), this.velocity.trackNext(this._.contact.here, 0), this._.contact.precision.unshift([this._.contact.here, t.timeStamp]))
    }, n._onContactEnd = function(t) {
        if (this._.contact) {
            if (this._.contact.precision[0]) {
                var i,
                    n = this._.contact.precision[0][1] - 100,
                    s = 0;
                e.each(this._.contact.precision, function(t) {
                    return t[1] < n ? e.breakIteration() : "undefined" == typeof i ? i = t[0] : (s += Math.abs(i - t[0]), void (i = t[0]))
                }),
                s <= 10 && this.velocity.configure({
                    friction: 0
                })
            }
            this.velocity.trackLast(this._.contact.here, 0)
        }
    }, n._onContactUpdate = function(t, e, i, n) {
        if (this._.contact) {
            if (this._.contact.scrolling) {
                this._setPercent(e / t);
                var s = Math.max(0, Math.min(this._.percent, .9999));
                "resting" != n.phase && this._.callbacks.scrolling ? this._.callbacks.scrolling(s) : "resting" == n.phase && this._.callbacks.scrolled && this._.callbacks.scrolled(s)
            }
            "resting" == n.phase ? delete this._.contact : this._.contact.phase = n.phase
        }
    }, n._onMouseWheel = function(t) {
        if (t.deltaX) {
            var e = this._tapeWidth(),
                i = e * this._tapePercent() + t.deltaX,
                n = i / e,
                s = Math.min(.9999, Math.max(0, n));
            this._.lastMouseWheelPercent = s,
            this._setPercent(s),
            clearTimeout(this._.scrollWheelTimer),
            n == s ? (this._.callbacks.scrolling(s), this._.scrollWheelTimer = setTimeout(this._.callbacks.scrolled.bind(this, s), 200)) : this._.callbacks.scrolled(s)
        }
    }, n._calculateTapePercent = function(t) {
        return Math.max(0, Math.min(1, t / this._tapeWidth()))
    }, n._tapeWidth = function() {
        return this._.width || (this._.width = this.tape.offsetWidth)
    }, n._tapeOffset = function() {
        return this.tape.offsetLeft + this.tape.parentNode.getBoundingClientRect().left - this.tape.getBoundingClientRect().left
    }, n._tapePercent = function() {
        return this._tapeOffset() / this._tapeWidth()
    }, i
}),
define("bifocal/themes/read/default/src/parts/seekometer", ["require", "common", "core/src/view", "./seekometer-affordance"], function(t) {
    var e = t("common"),
        i = t("core/src/view"),
        n = i.new(),
        s = n.prototype,
        o = t("./seekometer-affordance");
    return s.UNIT = 7, s.GROUP = 10, s.NUMBER_INTERVAL = 2, s._layout = function() {
        this.dom = this._build("seekometer", {
            access: "visual"
        }, " clip", "  tape", "   notches", "   numbers", "   landmarks", "    layer-chapter", "    layer-bookmark", "    layer-highlight", " needle")
    }, s._listen = function(t) {
        this._listenAffordance(),
        this._handle("mode:change"),
        this._handle("lens:dub:ambit"),
        this._handle("bifocal:seeker:place"),
        this._handle("bifocal:landmarks:group")
    }, s._listenAffordance = function() {
        this._.affordance = new o(this.dom.tape),
        this._.affordance.on({
            tap: this._onTap.bind(this),
            scrolling: this._onScrolling.bind(this),
            scrolled: this._onScrolled.bind(this)
        })
    }, s._onModeChange = function(t) {
        this._contextuallyActivate()
    }, s._onLensDubAmbit = function(t) {
        delete this._.lastPlace,
        this._contextuallyActivate()
    }, s._onBifocalSeekerPlace = function(t) {
        "seekometer" != t.m.source && this._slideToPlace(t.m.place)
    }, s._onTap = function(t) {
        var e = this._griddedPercentage(t);
        this._.affordance.jump(e),
        this._onScrolling(t),
        this._onScrolled(t)
    }, s._onScrolling = function(t) {
        this._.needlePercent = this._directionalPercentage(t),
        BIF.events.dispatch("bifocal:seeking", this._seekEventData())
    }, s._onScrolled = function(t) {
        this._.needlePercent = this._directionalPercentage(t);
        var e = this._seekEventData();
        BIF.events.dispatch("bifocal:seeked", e),
        e.place.seek()
    }, s._seekEventData = function() {
        return {
            source: "seekometer",
            place: BIF.objects.compass.at({
                percentageOfBook: this._.needlePercent
            })
        }
    }, s._contextuallyActivate = function() {
        var t = "navigating" == BIF.state.mode && BIF.objects.compass.place.isFinite();
        t !== this._.isVisible && (this._.isVisible = t, this._.isVisible ? this._.affordance.listen() : this._.affordance.deafen()),
        this._classify(this.dom.tape, "hide", !this._.isVisible),
        this._classify(this.dom.needle, "hide", !this._.isVisible)
    }, s._slideToPlace = function(t) {
        if (t.isFinite()) {
            this._contextuallyActivate();
            var e = t.pages.total * this.UNIT - 1;
            e !== this._.tapeWidth && (this._.tapeWidth = e, this.dom.tape.style.width = this._.tapeWidth + "px", this._populateNumbers(Math.floor(t.pages.total / this.GROUP)), this._.affordance.reset());
            var i = this._directionalPercentage(t.percentageOfBook),
                n = this._griddedPercentage(i),
                s = "navigating" == BIF.state.mode && this._.lastPlace ? void 0 : 0;
            this._.affordance.jump(n, s),
            this._.lastPlace = t
        }
    }, s._griddedPercentage = function(t) {
        try {
            var e = BIF.objects.compass.place.pages.total,
                i = 1 / e,
                n = Math.floor(t / i) * i;
            if (isFinite(n))
                return n
        } catch (t) {}
        return t
    }, s._directionalPercentage = function(t) {
        var e = !!BIF.context.profile.reverse;
        return e ? 1 - t : t
    }, s._tapeDirection = function() {
        return BIF.context.profile.reverse ? "right" : "left"
    }, s._populateNumbers = function(t) {
        for (var i = this.dom.numbers, n = Math.floor(t / (this.NUMBER_INTERVAL || 1)); i.children.length > n;)
            i.removeChild(i.firstChild);
        for (; i.children.length < n;)
            this._element({
                parentNode: i,
                classes: "seekometer-number"
            });
        e.each(i.children, function(t, e) {
            this._textify(t, {
                html: "" + 10 * (e + 1) * this.NUMBER_INTERVAL
            })
        }, this)
    }, s._onBifocalLandmarksGroup = function(t) {
        var i = this.dom["layer" + e.capitalize(t.m.name)];
        if (!i)
            return console.warn("[SEEKO] no layer for landmarks", t.m.name);
        var n = t.m.items.slice(0).sort(function(t, e) {
                var i = (t.place ? t.place.floc : 0) || 0,
                    n = (e.place ? e.place.floc : 0) || 0;
                return i - n
            }),
            s = "seekometer-landmark-" + t.m.name,
            o = Array.prototype.slice.apply(i.children),
            r = this._tapeDirection();
        for (e.each(n, function(n, a) {
            if (n.place && n.place.isFinite()) {
                for (var c, l = ["seeko", n.type, n.id].join("-"), h = 0, u = o.length; h < u; ++h)
                    if (o[h].id == l) {
                        c = o[h],
                        e.excise(o, c);
                        break
                    }
                c || (c = this._element({
                    button: !0,
                    parentNode: i,
                    id: l,
                    classes: s
                }), BIF.events.on(c, "focus", this._onLandmarkFocus.bind(this, c)), BIF.events.on(c, "blur", this._onLandmarkBlur.bind(this, c))),
                this._buttonify(c, function() {
                    n.place.seek()
                }),
                this.access(c, "visual"),
                e.DataClass.set(c, "seekometer-highlight-color", n.meta.colorGroup);
                var d = e.safe(n.meta.note || n.meta.title || "");
                d ? this._textify(c, {
                    spoken: {
                        label: "a11y.seekometer." + t.m.name,
                        substitutions: {
                            LANDMARK: d
                        }
                    }
                }) : this._textify(c, {
                    spoken: null
                }),
                c.lmType = t.m.name,
                this._adjustLandmarkButton(n, c, a),
                c.style.removeProperty("left"),
                c.style.removeProperty("right"),
                c.style.setProperty(r, c.lmLeft + "px"),
                i.appendChild(c)
            }
        }, this); o.length;) {
            var a = o.shift();
            a.parentNode.removeChild(a)
        }
    }, s._adjustLandmarkButton = function(t, e, i) {
        if (e.lmLeft = (t.place.pages.head - 1) * this.UNIT, "highlight" == e.lmType) {
            0 != i && this._.lefts || (this._.lefts = {}),
            this._.lefts[e.lmLeft] = this._.lefts[e.lmLeft] || 0;
            var n = this._.lefts[e.lmLeft] % 4;
            e.style.setProperty("bottom", 11 * n + "px"),
            this._.lefts[e.lmLeft] += 1
        }
    }, s._onLandmarkFocus = function(t) {
        this._defer("landmark-focus", function() {
            for (var e = this.dom.root; e;) {
                if (e.scrollLeft) {
                    e.scrollLeft = 0;
                    break
                }
                e = e.parentNode
            }
            var i = t.lmLeft / this._.tapeWidth,
                n = BIF.objects.compass.at({
                    percentageOfBook: i
                });
            this._slideToPlace(n)
        }.bind(this))
    }, s._onLandmarkBlur = function(t) {
        this._defer("landmark-focus", function() {
            this._slideToPlace(BIF.objects.compass.place)
        }.bind(this))
    }, n
}),
define("bifocal/themes/listen/default/src/parts/seekometer", ["require", "common", "bifocal/themes/read/default/src/parts/seekometer"], function(t) {
    var e = t("common"),
        i = t("bifocal/themes/read/default/src/parts/seekometer"),
        n = i.new(),
        s = n.prototype;
    return s.UNIT = 2, s.GROUP = 60, s.$init = function() {
        i.prototype.$init.apply(this, arguments),
        this.recompute()
    }, s.recompute = function() {
        this._.durationSeconds = BIF.objects.spool.durationMilliseconds / 1e3,
        this._.tapeWidth = Math.ceil(this._.durationSeconds * this.UNIT + 2),
        this.dom.tape.style.width = this._.tapeWidth + "px",
        this._.eta = null
    }, s._listen = function(t) {
        this._listenAffordance(),
        this._handle("bifocal:resize"),
        this._handle("bifocal:seeker:place"),
        t.firstPlace = BIF.events.on("bifocal:seeker:place", this._onFirstPlace.bind(this)),
        this._handle("bifocal:landmarks:group")
    }, s._contextuallyActivate = function() {
        var t = "navigating" == BIF.state.mode && !this.handlers.firstPlace;
        this._.isVisible = t,
        this._.isVisible ? this._.affordance.listen() : this._.affordance.deafen(),
        this._classify(this.dom.tape, "hide", !this._.isVisible),
        this._classify(this.dom.needle, "hide", !this._.isVisible)
    }, s._onBifocalResize = function(t) {
        this._defer(this.recompute.bind(this), 100)
    }, s._onFirstPlace = function(t) {
        "seekometer" != t.m.source && (this.handlers.firstPlace.deafen(), delete this.handlers.firstPlace, this._contextuallyActivate())
    }, s._onBifocalSeekerPlace = function(t) {
        var i = t.m.place.bookMilliseconds / 1e3,
            n = i / this._.durationSeconds,
            s = BIF.objects.spool.state;
        if ("place" == t.m.mode && "playing" == s) {
            var o = 1e3 * (this._.durationSeconds - i),
                r = e.epochMilliseconds(),
                a = r + o / BIF.objects.spool.playbackRate;
            (!this._.eta || Math.abs(this._.eta - a) > 1e3) && (this._.affordance.interpolate(n, 1, a), this._.eta = a, delete this._.slidToPlace),
            this._numbersForPlace(t.m.place)
        } else if ("place" == t.m.mode && "ended" == s) {
            delete this._.eta;
            var c = BIF.objects.compass.at({
                percentageOfBook: 1
            });
            this._slideToPlace(c)
        } else
            "seekometer" != t.m.source ? (delete this._.eta, this._slideToPlace(t.m.place)) : this._numbersForPlace(t.m.place)
    }, s._numbersForPlace = function(t) {
        var e = this._.durationSeconds * t.percentageOfBook,
            i = 720,
            n = Math.floor(e / i);
        if (n != this._.section) {
            var s = Math.max((n - .5) * i, 0),
                o = Math.min((n + 1.5) * i, this._.durationSeconds);
            this._populateNumbers(s, o),
            this._.section = n
        }
    }, s._slideToPlace = function(t, i) {
        t.percentageOfBook != e.try(this._.slidToPlace, "percentageOfBook") && (this._.isVisible || (i = 0), this._numbersForPlace(t), this._.affordance.jump(t.percentageOfBook, i), this._.slidToPlace = t)
    }, s._griddedPercentage = function(t) {
        return t
    }, s._directionalPercentage = function(t) {
        return t
    }, s._tapeDirection = function() {
        return "left"
    }, s._populateNumbers = function(t, e) {
        this._textify(this.dom.numbers);
        var i = null,
            n = t * this.UNIT,
            s = (e + 1 - t) * this.UNIT;
        this._styleTransform(this.dom.numbers, "translate3d(" + n + "px, 0, 0)"),
        this._styleTransform(this.dom.notches, "translate3d(" + n + "px, 0, 0)"),
        this.dom.notches.style.setProperty("max-width", s + "px");
        for (var o = t; o <= e;) {
            var r = new BIF.CLASSES.PlacePhrase(this.dom.numbers, {
                spoken: !1,
                classes: "seekometer-number"
            }).update(1e3 * Math.min(o, e));
            i && (r.dom.root.style.marginLeft = i, i = null),
            o += this.GROUP
        }
    }, s._adjustLandmarkButton = function(t, e, i) {
        if (e.lmLeft = t.place.bookMilliseconds / 1e3 * this.UNIT, "chapter" == e.lmType) {
            var n = e.lmLeft % 10;
            e.lmLeft -= n > 5 ? n - 10 : n
        }
        var s = function(t) {
            e.lmWidth = t.extentMilliseconds / 1e3 * this.UNIT + 6,
            e.style.setProperty("width", e.lmWidth + "px")
        }.bind(this);
        "number" == typeof t.meta.extentMilliseconds && s(t.meta)
    }, n
}),
define("bifocal/themes/listen/default/src/parts/nav-progress-bar", ["require", "common", "core/src/view", "./playback-controls", "./chapter-bar", "./seekometer"], function(t) {
    var e = (t("common"), t("core/src/view")),
        i = e.new(),
        n = i.prototype,
        s = t("./playback-controls"),
        o = t("./chapter-bar"),
        r = t("./seekometer");
    return n._layout = function() {
        this.dom = this._build("nav-progress-bar", " playback-controls", s, " bumper .bumper-p-s .bumper-s-any .bumper-e .bumper-w", "  chapter-bar", o, "  appendix", "   seekometer", r)
    }, i
}),
define("bifocal/themes/listen/default/src/parts/navigation", ["require", "common", "core/src/view", "../../../../read/default/src/parts/nav-action-bar", "./backdrop", "./nav-progress-bar"], function(t) {
    var e = (t("common"), t("core/src/view")),
        i = e.new(),
        n = i.prototype,
        s = t("../../../../read/default/src/parts/nav-action-bar"),
        o = t("./backdrop"),
        r = t("./nav-progress-bar");
    return n._layout = function() {
        this.dom = this._build("navigation", " nav <nav>", "  header <header>", {
            classes: "bumper-n bumper-w bumper-e",
            landmark: ["a11y.landmark-role.header", "a11y.landmark-role.actions"]
        }, "   actions", s, "  appendix", "   backdrop", o, "  footer <footer>", {
            landmark: ["a11y.landmark-role.footer", "a11y.landmark-role.actions"]
        }, "   progress", r, " shades")
    }, i
}),
define("bifocal/themes/read/default/src/parts/notifier", ["require", "common", "core/src/view", "shibui/src/components/chevron"], function(t) {
    var e = t("common"),
        i = t("core/src/view"),
        n = i.new(),
        s = n.prototype,
        o = t("shibui/src/components/chevron");
    return s.DURATION_MS = 5e3, s.HIDE_MS = 500, s.message = function(t) {
        var e = this._element(this._mergeElementOptions(t, {
            tag: "p"
        }));
        t.builder && t.builder({
            message: e
        });
        for (var i = 0, n = this.dom.message.children.length; i < n; ++i)
            if (this.dom.message.children[i].innerHTML == e.innerHTML)
                return;
        this.dom.message.appendChild(e),
        this._show(),
        BIF.events.dispatch("alert:announce", {
            alertData: {
                html: e.innerHTML
            }
        })
    }, s.dialog = function(t, i, n, s) {
        this._textify(this.dom.dialog);
        var o = this._build("notifier-dialog", this.dom.dialog, " heading <h2>", this._mergeElementOptions(t), " prompt <p>", this._mergeElementOptions(i), " actions", {
            skip: !n
        });
        if (n && n.cancel) {
            var r = this._element(this._mergeElementOptions(n.cancel, {
                button: e.excise(n.cancel, "onTap") || this.close.bind(this),
                parentNode: o.actions,
                classes: "notifier-dialog-action notifier-dialog-action-cancel"
            }));
            r.innerHTML || this._textify(r, "notifier.cancel")
        }
        if (n && n.ok) {
            var r = this._element(this._mergeElementOptions(n.ok, {
                button: e.excise(n.ok, "onTap") || this.close.bind(this),
                parentNode: o.actions,
                classes: "notifier-dialog-action notifier-dialog-action-ok"
            }));
            r.innerHTML || this._textify(r, "notifier.ok")
        }
        s.builder && s.builder(o),
        this._classify(this.dom.root, "dialog"),
        this._classify(this.dom.root, "modal", !(!s || !s.modal)),
        this._show(!0),
        this._focusElement(this.dom.dialog)
    }, s.close = function() {
        this._.lockOpen = !1,
        this._hide()
    }, s._layout = function() {
        this.dom = this._build("notifier", " conveyer", "  pillar", {
            classes: "bumper-p-n"
        }, "   close-button", {
            button: !0,
            spoken: "a11y.notifier.close"
        }, "    close-chevron", o, "   dialog", {
            attributes: {
                role: "alertdialog"
            }
        }, "   message"),
        this.dom.closeChevron.bearing("n"),
        this.access("inert")
    }, s._listen = function(t) {
        this._handle("bifocal:notify:message"),
        this._handle("bifocal:notify:dialog"),
        this._handle("bifocal:notify:close"),
        this._handle("mode:change")
    }, s._mergeElementOptions = function(t, i) {
        return "string" == typeof t && (t = {
            label: t
        }), e.absorb(t, i || {})
    }, s._show = function(t) {
        this._.lockOpen = t || this._.lockOpen,
        this._.showing = e.epochMilliseconds(),
        this._classify(this.dom.root, "expand reveal"),
        this._defer("hide", this._hide.bind(this), this.DURATION_MS),
        this.access("normal")
    }, s._hide = function() {
        this._defer("hide", this._clear.bind(this), this.HIDE_MS),
        this._.lockOpen || (this._.showing = null, this._declassify(this.dom.root, "reveal modal"), this.access("inert"))
    }, s._clear = function() {
        this._textify(this.dom.message),
        this._.lockOpen || (this.access(this.dom.dialog, "normal"), this._textify(this.dom.dialog), this._declassify(this.dom.root, "expand dialog modal"))
    }, s._onBifocalNotifyMessage = function(t) {
        this.message(t.m)
    }, s._onBifocalNotifyDialog = function(t) {
        var i = e.absorb(t.m, {});
        this.dialog(e.excise(i, "headingText"), e.excise(i, "promptText"), e.excise(i, "actions"), i)
    }, s._onBifocalNotifyClose = function(t) {
        this.close()
    }, s._onModeChange = function() {
        this._.showing && (e.epochMilliseconds() - this._.showing > 1e3 ? this.close() : this._defer("hide", this.close.bind(this), 3e3))
    }, s._onTapCloseButton = function(t) {
        this.close()
    }, n
}),
define("bifocal/themes/read/default/src/parts/mode-manager", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.SWITCH_DELAY_MS = 50, n.IMMEDIATE_MODES = ["zooming"], n.$init = function(t, e) {
        this.modeStack = [],
        this.defaultMode = t,
        this.initialMode = e,
        this._switchMode(e || t),
        this._registerDismissCommand()
    }, n.enterMode = function(t) {
        return t != BIF.state.mode && (clearTimeout(this._.switchTimer), !this.SWITCH_DELAY_MS || e.among(t, this.IMMEDIATE_MODES) ? this._switchMode(t) : this._.switchTimer = setTimeout(this._switchMode.bind(this, t), this.SWITCH_DELAY_MS), !0)
    }, n.exitMode = function(t) {
        if (t == BIF.state.mode) {
            var t = e.try(e.last(this.modeStack), "mode") || this.defaultMode;
            return this.enterMode(t), !0
        }
        return !1
    }, n.exitModes = function() {
        this.enterMode(this.defaultMode)
    }, n.toggleMode = function(t) {
        return !this.exitMode(t) && (this.enterMode(t), !0)
    }, n._registerDismissCommand = function() {
        BIF.objects.commands.register({
            shortcut: "ESC",
            shortcutOptions: {
                global: !0
            },
            callback: function(t) {
                "accessing" == BIF.state.mode ? (BIF.events.stop(t), BIF.objects.modeManager.enterMode("reading")) : BIF.state.mode != BIF.objects.modeManager.defaultMode && (BIF.events.stop(t), BIF.objects.modeManager.exitMode(BIF.state.mode))
            }
        })
    }, n._switchMode = function(t) {
        var i = {
                from: BIF.state.mode,
                to: t
            },
            n = [];
        if (t != this.defaultMode) {
            for (var s = 0, o = this.modeStack.length; s < o; ++s) {
                if (this.modeStack[s].mode == t) {
                    i.popping = !0;
                    break
                }
                n.push(this.modeStack[s])
            }
            BIF.state.mode && !i.popping && n.push({
                mode: BIF.state.mode
            })
        }
        return this.modeStack = n, !(i.from && !BIF.events.dispatch("mode:check", i, !0)) && (BIF.state.mode = t, e.DataClass.set(document.documentElement, "mode", BIF.state.mode), BIF.events.dispatch("mode:announce", i), i.from && BIF.events.dispatch("mode:exit:" + i.from, i), BIF.events.dispatch("mode:enter:" + i.to, i), void BIF.events.dispatch("mode:change", i))
    }, i
}),
define("focus-visible/focus-visible", ["require", "common", "gala"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype,
        s = t("gala");
    return n.INPUT_TYPES_WHITELIST = {
        text: !0,
        search: !0,
        url: !0,
        tel: !0,
        email: !0,
        password: !0,
        number: !0,
        date: !0,
        month: !0,
        week: !0,
        time: !0,
        datetime: !0,
        "datetime-local": !0
    }, n.$init = function(t) {
        this.scope = t,
        this.hadKeyboardEvent = !1,
        this.hadFocusVisibleRecently = !1,
        this.hadFocusVisibleRecentlyTimeout = null,
        this._.docHandlers = [s.on(document, "keydown", this._onKeyDown.bind(this), !0), s.on(document, "mousedown", this._onPointerDown.bind(this), !0), s.on(document, "pointerdown", this._onPointerDown.bind(this), !0), s.on(document, "touchstart", this._onPointerDown.bind(this), !0), s.on(document, "visibilitychange", this._onVisibilityChange.bind(this), !0)],
        this._.pointerHandlers = [s.on(document, "mousemove", this._onInitialPointerMove.bind(this), !0), s.on(document, "mousedown", this._onInitialPointerMove.bind(this), !0), s.on(document, "mouseup", this._onInitialPointerMove.bind(this), !0), s.on(document, "pointermove", this._onInitialPointerMove.bind(this), !0), s.on(document, "pointerdown", this._onInitialPointerMove.bind(this), !0), s.on(document, "pointerup", this._onInitialPointerMove.bind(this), !0), s.on(document, "touchmove", this._onInitialPointerMove.bind(this), !0), s.on(document, "touchstart", this._onInitialPointerMove.bind(this), !0), s.on(document, "touchend", this._onInitialPointerMove.bind(this), !0)],
        this._.scopeHandlers = [s.on(this.scope, "focus", this._onFocus.bind(this), !0), s.on(this.scope, "blur", this._onBlur.bind(this), !0)]
    }, n._isValidFocusTarget = function(t) {
        return !!(t && t !== document && "HTML" !== t.nodeName && "BODY" !== t.nodeName && "classList" in t && "contains" in t.classList)
    }, n._focusTriggersKeyboardModality = function(t) {
        var e = t.tagName,
            i = t.type;
        return !("INPUT" !== e || !this.INPUT_TYPES_WHITELIST[i] || t.readOnly) || ("TEXTAREA" === e && !t.readOnly || !!t.isContentEditable)
    }, n._addFocusVisibleClass = function(t) {
        t.classList.contains("focus-visible") || (t.classList.add("focus-visible"), t.setAttribute("data-focus-visible-added", ""))
    }, n._removeFocusVisibleClass = function(t) {
        t.hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added"))
    }, n._onKeyDown = function(t) {
        t.metaKey || t.altKey || t.ctrlKey || (this._isValidFocusTarget(this.scope.activeElement) && this._addFocusVisibleClass(this.scope.activeElement), this.isTyping || (this.hadKeyboardEvent = !0))
    }, n._onPointerDown = function(t) {
        this.hadKeyboardEvent = !1
    }, n._onFocus = function(t) {
        this._isValidFocusTarget(t.target) && (this.isTyping = this._focusTriggersKeyboardModality(t.target), (this.hadKeyboardEvent || this.isTyping) && this._addFocusVisibleClass(t.target))
    }, n._onBlur = function(t) {
        this._isValidFocusTarget(t.target) && (this.isTyping = !1, (t.target.classList.contains("focus-visible") || t.target.hasAttribute("data-focus-visible-added")) && (this.hadFocusVisibleRecently = !0, window.clearTimeout(this.hadFocusVisibleRecentlyTimeout), this.hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
            this.hadFocusVisibleRecently = !1
        }.bind(this), 100), this._removeFocusVisibleClass(t.target)))
    }, n._onVisibilityChange = function(t) {
        "hidden" === document.visibilityState && (this.hadFocusVisibleRecently && (this.hadKeyboardEvent = !0), s.on(this._.pointerHandlers))
    }, n._onInitialPointerMove = function(t) {
        t.target.nodeName && "html" === t.target.nodeName.toLowerCase() || (this.hadKeyboardEvent = !1, s.off(this._.pointerHandlers))
    }, i
}),
define("focus-visible", ["focus-visible/focus-visible"], function(t) {
    return t
}),
define("bifocal/themes/listen/default/src/features/world", ["require", "common", "shibui", "../parts/place-phrase", "core/src/bank/bank-scope-cookie", "core/src/bank/bank-scope-domain", "core/src/bank/bank-migrator", "../../../../read/default/src/migrations/noop", "../../../../read/default/src/migrations/noop", "../../../../read/default/src/migrations/b002", "core/src/tracer", "../../../../read/default/src/parts/codex", "core/src/aide", "../../../../read/default/src/parts/commands", "../parts/world-layout", "../parts/spool", "dervish", "../parts/possession", "../parts/navigation", "../../../../read/default/src/parts/notifier", "../../../../read/default/src/parts/mode-manager", "focus-visible"], function(t) {
    var e = t("common"),
        i = t("shibui");
    return function(n) {
        return n.runsheet.append(["bifocal:reveal", "baseline"], ["bifocal:reveal", "loadBank"], ["bifocal:reveal", "migrateBank"], ["bifocal:reveal", "loadTracer"], ["bifocal:reveal", "loadCodex"], ["bifocal:reveal", "loadAide"], ["bifocal:reveal", "loadCommands"], ["bifocal:reveal", "loadLayout"], ["bifocal:reveal", "loadSpool"], ["bifocal:reveal", "loadDervish"], ["bifocal:reveal", "loadPossession"], ["bifocal:reveal", "prepareSpool"], ["bifocal:spool:prepared", "loadNavigation"], ["bifocal:spool:prepared", "loadNotifier"], ["bifocal:spool:prepared", "enterInitialMode"], ["bifocal:spool:prepared", "announceReady"], ["bifocal:readying", "enableSync"], ["bifocal:readying", "enableTracking"], ["bifocal:reveal", "loadModeManager"], ["bifocal:reveal", "loadFocusVisible"]), n.baseline = function() {
            BIF.state.outlet = "Listen",
            BIF.CLASSES = {
                PlacePhrase: t("../parts/place-phrase")
            },
            i.Phrasebook.initialize(SPARK.locale.tag, SPARK.locale.translations),
            document.body.innerHTML = ""
        }, n.loadBank = function() {
            var e = t("core/src/bank/bank-scope-cookie"),
                i = t("core/src/bank/bank-scope-domain");
            BIF.bank = {
                global: new e("bifocal"),
                title: new i(BIF.map["-odread-bank-scope"])
            }
        }, n.migrateBank = function() {
            var i = t("core/src/bank/bank-migrator");
            (new i).migrateAllBanks([t("../../../../read/default/src/migrations/noop"), t("../../../../read/default/src/migrations/noop"), t("../../../../read/default/src/migrations/b002")]),
            BIF.deviceId || (BIF.deviceId = BIF.bank.global.get("device-id")),
            BIF.deviceId || BIF.bank.global.set("device-id", BIF.deviceId = e.generateUUID());
            var n = BIF.bank.title.get("_bank-verification-token");
            n != BIF.map["-odread-bank-verification-token"] && (n && BIF.bank.title.wipe(), BIF.bank.title.set("_bank-verification-token", BIF.map["-odread-bank-verification-token"]))
        }, n.loadTracer = function() {
            var e = t("core/src/tracer");
            BIF.tracer = new e
        }, n.loadCodex = function() {
            var e = t("../../../../read/default/src/parts/codex");
            BIF.objects.codex = new e
        }, n.loadAide = function() {
            var i = t("core/src/aide");
            BIF.objects.aide = new i(e.DataClass.semaphore(BIF.root))
        }, n.loadCommands = function() {
            var e = t("../../../../read/default/src/parts/commands");
            BIF.objects.commands = new e,
            BIF.events.dispatch("bifocal:command:register", {
                commands: BIF.objects.commands
            })
        }, n.loadLayout = function() {
            if (!BIF.root.classList.contains("expired")) {
                var e = t("../parts/world-layout");
                BIF.objects.layout = new e(document.body)
            }
        }, n.loadSpool = function() {
            var e = t("../parts/spool");
            BIF.objects.spool = new e
        }, n.loadDervish = function() {
            var e = t("dervish");
            BIF.objects.expiration = new e.Expiration,
            BIF.objects.activity = new e.Activity
        }, n.loadPossession = function() {
            var e = t("../parts/possession");
            BIF.objects.possession = new e
        }, n.prepareSpool = function() {
            BIF.objects.spool.prepare()
        }, n.loadNavigation = function() {
            var e = t("../parts/navigation");
            BIF.objects.navigation = new e(BIF.elements.bookLayer),
            BIF.events.dispatch("bifocal:navigation:ready")
        }, n.loadNotifier = function() {
            var e = t("../../../../read/default/src/parts/notifier");
            BIF.objects.notifier = new e(BIF.elements.modalLayer)
        }, n.enterInitialMode = function() {
            BIF.objects.modeManager.enterMode("navigating")
        }, n.announceReady = function() {
            BIF.events.dispatch("bifocal:resize"),
            BIF.events.dispatch("bifocal:readying"),
            BIF.objects.codex.freshen(function() {
                BIF.state.ready = e.epochMilliseconds(),
                BIF.root.classList.add("ready"),
                BIF.events.dispatch("bifocal:ready")
            })
        }, n.enableSync = function() {
            BIF.objects.possession.sync(),
            setInterval(function() {
                BIF.objects.possession.sync()
            }, 6e5)
        }, n.enableTracking = function() {
            BIF.objects.activity.startTracking()
        }, n.loadModeManager = function() {
            var e = t("../../../../read/default/src/parts/mode-manager");
            BIF.objects.modeManager = new e("navigating")
        }, n.loadFocusVisible = function() {
            var e = t("focus-visible");
            new e(document)
        }, !0
    }
}),
define("bifocal/themes/read/default/src/parts/chatterbox", ["require", "common", "core/src/view"], function(t) {
    var e = t("common"),
        i = t("core/src/view"),
        n = i.new(),
        s = n.prototype;
    return s.MODES_ANNOUNCE_BIBLIO = ["reading", "navigating"], s.MODES_SUPPRESS_MODE = ["shading"], s.MODES_SUPPRESS_PLACE = ["accessing"], s._layout = function() {
        this.dom = this._build("chatterbox", " target", {
            access: "spoken"
        }, "  mode", {
            labeling: "target"
        }, " announcer", {
            access: "spoken",
            attributes: {
                "aria-live": "polite",
                "aria-atomic": "true"
            }
        })
    }, s._listen = function(t) {
        this._handle("mode:announce"),
        this._handle("alert:announce"),
        this._handle("shade:name"),
        "Read" == BIF.state.outlet && this._handle("bifocal:place"),
        this._defer("announce:mode", function() {
            BIF.state.mode && this._announceMode(BIF.state.mode)
        }.bind(this), 100)
    }, s._onModeAnnounce = function(t) {
        e.among(t.m.to, this.MODES_SUPPRESS_MODE) || this._announceMode(t.m.to)
    }, s._onAlertAnnounce = function(t) {
        this._announceAlert(t.m.alertData)
    }, s._onShadeName = function(t) {
        this._announceMode("shading", {
            DIALOG_NAME: t.m.name || ""
        })
    }, s._onBifocalPlace = function(t) {
        e.among(BIF.state.mode, this.MODES_SUPPRESS_PLACE) || this._announcePlace(t.m.place)
    }, s._announcePlace = function(t) {
        if (t = t || e.try(BIF, "objects.compass.place")) {
            var i = t.pages.join("-");
            i != this._.pageCache && (this._announceAlert({
                label: "pages-long",
                substitutions: {
                    SPREAD: t.pages.length > 1,
                    PAGES: i
                }
            }), this._.pageCache = i)
        }
    }, s._announceAlert = function(t) {
        "string" == typeof t && (t = {
            label: t
        }),
        t = e.absorb(t, {
            wrapper: !1
        }),
        delete this._.pageCache,
        this._textify(this.dom.announcer, t),
        this.dom.root.appendChild(this.dom.announcer),
        console.log('[CHATTERBOX] 🗣 "%s"', this.dom.announcer.innerHTML),
        this._defer("announce:alert", function() {
            this.dom.root.removeChild(this.dom.announcer)
        }.bind(this), 200)
    }, s._announceMode = function(t, i) {
        this._defer("announce:mode");
        var n = [{
            label: "a11y.mode." + t,
            substitutions: i
        }];
        if (e.among(t, this.MODES_ANNOUNCE_BIBLIO)) {
            var s = e.try(BIF.objects, "codex.title()"),
                o = e.try(BIF.objects, "codex.attribution()"),
                r = e.compact([s, o]).join(", ").trim();
            r && (n.push({
                html: r
            }), n.push({
                label: "a11y.breath"
            }))
        }
        var a = this._phrase(n);
        a != this.dom.mode.innerHTML && (this._textify(this.dom.mode, {
            html: a
        }), this._giveInstructionsForMode(t)),
        this._focusElement(this.dom.target)
    }, s._giveInstructionsForMode = function(t) {
        if (BIF.objects.shell && BIF.objects.shell.has("accessibility:gestures")) {
            var e = this._phrase({
                label: "a11y.mode." + t + ".vo-ios",
                okIfMissing: !0
            });
            e && this._defer("announce:alert", this._announceAlert.bind(this, {
                html: e
            }), 200)
        }
    }, n
}),
define("bifocal/themes/listen/default/src/parts/chatterbox", ["require", "../../../../read/default/src/parts/chatterbox"], function(t) {
    var e = t("../../../../read/default/src/parts/chatterbox"),
        i = e.new(),
        n = i.prototype;
    return n._giveInstructionsForMode = function(t) {}, i
}),
define("bifocal/themes/read/default/src/parts/command-shortcut", ["require", "common", "core/src/view"], function(t) {
    var e = t("common"),
        i = t("core/src/view"),
        n = i.new(),
        s = n.prototype;
    return s.connect = function(t) {
        "string" == typeof t && (t = BIF.objects.commands.find(t)),
        console.assert(t, "[COMMAND-SHORTCUT] no such command");
        var i = t.attributes.name,
            n = this._phrase({
                label: "commands." + i + ".shortcut",
                okIfMissing: !0
            }),
            s = this._phrase({
                label: "commands." + i + ".shortcut.spoken",
                okIfMissing: !0
            });
        if (!n) {
            var o = e.try(t, "_.bindings[0]._.definition");
            if (o) {
                n = {
                    LEFT: "←",
                    RIGHT: "→",
                    UP: "↑",
                    DOWN: "↓"
                }[o.keyDesc] || o.keyDesc;
                var r = (navigator.platform || "").match(/^(Mac|iP)/) ? "mac" : "win";
                o.metaKey && (n = this._phrase({
                    label: "commands.shortcut.meta." + r,
                    substitutions: {
                        KEY: n
                    },
                    okIfMissing: !0
                })),
                o.ctrlKey && (n = this._phrase({
                    label: "commands.shortcut.control",
                    substitutions: {
                        KEY: n
                    },
                    okIfMissing: !0
                })),
                o.altKey && (n = this._phrase({
                    label: "commands.shortcut.alt." + r,
                    substitutions: {
                        KEY: n
                    },
                    okIfMissing: !0
                })),
                o.shiftKey && (n = this._phrase({
                    label: "commands.shortcut.shift",
                    substitutions: {
                        KEY: n
                    },
                    okIfMissing: !0
                }))
            }
        }
        n && (s = s || this._phrase({
            label: "commands.shortcut.spoken",
            substitutions: {
                SHORTCUT: n
            }
        })),
        this._classify(this.dom.root, "hide", !n),
        this._textify(this.dom.label, {
            html: n || ""
        }),
        this._textify(this.dom.desc, {
            html: s || ""
        })
    }, s._layout = function() {
        this.dom = this._build("command-shortcut", {
            access: "visual"
        }, " label", " desc", {
            id: !0,
            access: "spoken"
        }),
        this._describeOwnerButton()
    }, s._listen = function() {
        this.on("view:impart", this._describeOwnerButton.bind(this))
    }, s._describeOwnerButton = function() {
        var t = e.elementClosest(this.dom.root, "button");
        t && t.setAttribute("aria-describedby", this.dom.desc.getAttribute("id"))
    }, n
}),
define("bifocal/themes/read/default/src/parts/commands-access", ["require", "common", "core/src/view", "./command-shortcut"], function(t) {
    var e = (t("common"), t("core/src/view")),
        i = e.new(),
        n = i.prototype,
        s = t("./command-shortcut");
    return n.connect = function(t) {
        t = t || "commands",
        "string" == typeof t && (t = BIF.objects.commands.find(t));
        var e = t.refresh();
        this._buttonify(this.dom.button, function() {
            t.execute()
        }),
        e.html ? this._textify(this.dom.label, {
            html: e.html
        }) : this._textify(this.dom.label, {
            label: e.label || "commands." + e.name,
            substitutions: e.substitutions
        }),
        this.dom.shortcut.connect(t)
    }, n._layout = function() {
        this.dom = this._build("commands-access .bumper-e .bumper-w", " button <button>", "  label", {
            labeling: "button"
        }, "  shortcut", s)
    }, i
}),
define("bifocal/themes/read/default/src/parts/nav-action-item", ["require", "common", "core/src/view", "./command-shortcut"], function(t) {
    var e = t("common"),
        i = t("core/src/view"),
        n = i.new(),
        s = n.prototype,
        o = t("./command-shortcut");
    return s.update = function(t) {
        return this.options = this.options || {}, t = e.absorb(t, {}), this._prepare(), this._textify(this.dom.label, {
            html: t.html,
            label: t.label,
            substitutions: t.substitutions,
            wrapper: !1,
            spoken: t.spoken
        }), this._textify(this.dom.description, t.description), t.icon != this.options.icon && (this._textify(this.dom.icon), t.icon && this._element({
            icon: t.icon,
            parentNode: this.dom.icon
        })), t.classes && this._classify(this.dom.button, t.classes), e.try(t.attributes, "disabled") ? this.access(this.dom.button, {
            disabled: !0
        }) : this.access(this.dom.button, "normal"), this.options = t, this
    }, s.connect = function(t, i) {
        "string" == typeof t && (t = BIF.objects.commands.find(t)),
        this.command = t;
        var n = this._optionsFromCommandAttributes(t, i),
            s = this.update(n);
        return this.handlers.cmdExecute = BIF.events.on("bifocal:command:execute", this._updateOnCommandEvent.bind(this)), e.each(t.attributes.refresh, function(t) {
            var i = e.camelize(["cmd"].concat(t.split(":")).join(""));
            this.handlers[i] = BIF.events.on(t, this._updateOnCommandEvent.bind(this, !0))
        }, this), s
    }, s.shortcut = function() {
        return console.assert(this.command, "[NAV-ACTION-ITEM] no command for shortcut"), this.command.shortcuts().length ? (this.dom.shortcut || (this.dom.shortcut = new o(this)), this.dom.shortcut.connect(this.command)) : void (this.dom.shortcut && (this.dom.shortcut.extract(), delete this.dom.shortcut))
    }, s._layout = function() {
        this.dom = this._build("nav-action-item", " button", {
            button: !0
        }, "  icon", "  label", {
            labeling: "button"
        }, "  description", {
            describing: "button"
        }, "  appendix")
    }, s._onTapButton = function(t) {
        this.options.button()
    }, s._optionsFromCommandAttributes = function(t, i) {
        var i = i || t.refresh(),
            n = {};
        return n.button = t.execute.bind(t), "undefined" == typeof i.icon ? n.icon = i.name : i.icon && (n.icon = i.icon), i.html ? n.html = i.html : (n.label = i.label || "commands." + i.name, n.substitutions = i.substitutions), i.spoken ? n.spoken = i.spoken : n.label && this._phrase({
            label: n.label + ".spoken",
            okIfMissing: !0
        }) && (n.spoken = n.label + ".spoken"), t.isEnabled() || (n.attributes = e.absorb(n.attributes, {
            disabled: !0
        })), n
    }, s._updateOnCommandEvent = function(t, e) {
        if (t !== !0) {
            if (t.m.command !== this.command)
                return;
            if (t.defaultPrevented || t._gala_prevented)
                return
        }
        this._defer("update-from-command", this._updateFromCommand.bind(this))
    }, s._updateFromCommand = function() {
        this.update(this._optionsFromCommandAttributes(this.command)),
        this.dom.shortcut && this.shortcut()
    }, n
}),
define("bifocal/themes/read/default/src/parts/commands-dialog", ["require", "common", "./dialog", "./nav-action-list", "./nav-action-item"], function(t) {
    var e = t("common"),
        i = t("./dialog"),
        n = i.new(),
        s = n.prototype,
        o = t("./nav-action-list"),
        r = t("./nav-action-item");
    return s.DIALOG_HEADING = {
        label: "commands.commands"
    }, s.DIALOG_BEARING = "s", s.DIALOG_CLASSES = "commands-shade", s._layout = function() {
        this.dom = this._build("commands-dialog", " action-list", o),
        e.each(BIF.objects.commands.all, this._addCommand.bind(this));
        this.dom.actionList.dom.root.querySelector("button")
    }, s._addCommand = function(t) {
        var e = t.refresh();
        if (e.group && t.isEnabled()) {
            var i = (new r).connect(t, e);
            i.shortcut();
            return this.dom.actionList.add(i, {
                group: e.group
            })
        }
    }, n
}),
define("shibui/src/colorizer", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.CONTRAST_THRESHOLD = 72, n.$init = function() {
        this._.cache = {}
    }, n.colorize = function(t, i, n, s) {
        s = e.absorb(s, {}),
        "reset" === s.cache && delete this._.cache[i];
        var o = this._.cache[i];
        if (o && s.cache !== !1 || (o = this._findCustomColorProperties(t, i), s.cache !== !1 && (this._.cache[i] = o)), n) {
            var r = e.rgbToHSLuv(n);
            e.each(o, function(e) {
                var n = this._ruleToHSLA(e, r),
                    s = e && "true" != e ? i + "--" + e : i;
                t.style.setProperty("--c-h-" + s, n[0]),
                t.style.setProperty("--c-s-" + s, n[1] + "%"),
                t.style.setProperty("--c-l-" + s, n[2] + "%"),
                t.style.setProperty("--c-hsla-" + s, "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] + ")")
            }, this)
        } else
            e.each(o, function(e) {
                var n = e && "true" != e ? i + "--" + e : i;
                t.style.removeProperty("--c-h-" + n),
                t.style.removeProperty("--c-s-" + n),
                t.style.removeProperty("--c-l-" + n),
                t.style.removeProperty("--c-hsla-" + n)
            }, this)
    }, n._findCustomColorProperties = function(t, i) {
        var n = [],
            s = new RegExp("^--c-h-" + e.regExpEscape(i) + "(--(.*))?$");
        if (t.computedStyleMap)
            t.computedStyleMap().forEach(function(t, e) {
                var i = e.match(s);
                i && n.push(i[2] || "true")
            });
        else
            for (var o = window.getComputedStyle(t), r = 0, a = o.length; r < a; ++r) {
                var c = o.item(r).match(s);
                c && n.push(c[2] || "true")
            }
        return n
    }, n._ruleToHSLA = function(t, i) {
        i = i.slice(0);
        var n = i[2];
        return e.each(t.split("--"), function(t) {
            var n = t.split("-");
            if ("contrast" == n[0])
                i = i[2] > this.CONTRAST_THRESHOLD ? e.rgbToHSLuv([0, 0, 0]) : e.rgbToHSLuv([255, 255, 255]);
            else if (e.among(n[0], "sat", "lit")) {
                var s = Math.max(0, Math.min(100, parseFloat(n[1])));
                i["sat" == n[0] ? 1 : 2] = s
            } else if ("min" == n[0]) {
                var s = Math.max(0, Math.min(100, parseFloat(n[1])));
                i[2] < s && (i[2] = s)
            } else if ("max" == n[0]) {
                var s = Math.max(0, Math.min(100, parseFloat(n[1])));
                i[2] > s && (i[2] = s)
            } else if ("ggg" == n[0]) {
                var o = 5;
                i[2] > 92 ? i[2] = o : i[2] = Math.max(o, Math.min(i[2], this.CONTRAST_THRESHOLD))
            }
        }, this), Math.abs(n - i[2]) > 3 && (i = e.debloomHSLuv(i, n)), e.rgbToHSLA(e.hsluvToRGB(i))
    }, i
}),
define("shibui/src/halos", ["require", "common", "./view", "gala", "./colorizer"], function(t) {
    var e = t("common"),
        i = t("./view"),
        n = i.new(),
        s = n.prototype,
        o = t("gala"),
        r = t("./colorizer");
    return s.$init = function() {
        return this._.groups = [], this._.colorizer = new r, this._observeMutations(), i.prototype.$init.apply(this, arguments)
    }, s.refresh = function(t) {
        this._defer("refresh");
        var i = this._findAngelInScope(),
            n = e.try(this._.pointer, "angel");
        e.each(this._.groups, function(t) {
            e.each(t.wires, function(t) {
                t.angel && t.angel != i && (t.angel == n && e.isInDOM(t.angel, this.scope) || this._setHaloState({
                    blur: !0
                }, t.angel))
            }, this)
        }, this),
        i && i == n ? this._setHaloState({
            active: !0
        }, i) : i && this._setHaloState({
            focus: !0,
            active: !1
        }, i),
        this._repositionHalos()
    }, s._layout = function(t) {
        this._build("shibui-halos", {
            extending: t,
            access: "visual"
        })
    }, s._listen = function(t, e) {
        this.enableEvents(),
        this._handle("view:impart", this),
        this._handle("view:extract", this)
    }, s._onViewImpartSelf = function() {
        this.dom.root.parentNode != this.scope && (o.off(this.handlers._onFocusInDocument), o.off(this.handlers._onFocusOutDocument), o.off(this.handlers._onContact), o.off(this.handlers._onKeyDown), o.off(this.handlers._onResizeWindow), o.off(this.handlers._onManualRefresh), this.scope = this.dom.root.parentNode, this.scope && (this._classify(this.scope, "halos-attached"), this.handlers._onFocusInDocument = o.on(document, "focusin", this._onFocusInDocument.bind(this), {
            capture: !0
        }), this.handlers._onFocusOutDocument = o.on(document, "focusout", this._onFocusOutDocument.bind(this), {
            capture: !0
        }), this.handlers._onContact = o.onContact(this.scope, {
            start: this._onContactStart.bind(this),
            move: this._onContactMove.bind(this),
            end: this._onContactEnd.bind(this),
            cancel: this._onContactEnd.bind(this)
        }), this.handlers._onKeyDown = o.on(document, "keydown", this._onKeyDownDocument.bind(this), {
            capture: !0
        }), this.handlers._onResizeWindow = o.on(window, "resize", this._onResizeWindow.bind(this)), this.handlers._onManualRefresh = o.on("halos:refresh", this.refresh.bind(this, "halos:refresh"))))
    }, s._onViewExtractSelf = function() {
        this.scope && (this._declassify(this.scope, "halos-attached"), this.scope = null)
    }, s._onFocusInDocument = function(t) {
        this._.pointer || this._defer("refresh", this.refresh.bind(this, "focusin"))
    }, s._onFocusOutDocument = function(t) {
        this._.pointer || this._defer("refresh", this.refresh.bind(this, "focusout"))
    }, s._onContactStart = function(t) {
        this._.pointer = {
            target: t.target,
            x: t.clientX,
            y: t.clientY
        },
        this.refresh("contactstart")
    }, s._onContactMove = function(t) {
        if (e.try(this._.pointer, "angel")) {
            this._.pointer.region || (this._.pointer.region = this._.pointer.angel.getBoundingClientRect());
            var i = this._.pointer.region,
                n = {
                    x: t.clientX,
                    y: t.clientY
                };
            return n.x < i.left || n.x > i.right || n.y < i.top || n.y > i.bottom ? this._onContactEnd(t) : void 0
        }
    }, s._onContactEnd = function(t) {
        var i = e.excise(this._, "pointer");
        i && i.angel && this.refresh("contactend")
    }, s._onKeyDownDocument = function(t) {
        13 == t.keyCode && e.each(this._.groups, function(t) {
            e.each(t.wires, function(t) {
                this._isFocusVisible(t.angel) && this._setHaloState({
                    active: !0
                }, t.angel)
            }, this)
        }, this)
    }, s._onResizeWindow = function(t) {
        this._defer("refresh", this.refresh.bind(this, "resize"))
    }, s._observeMutations = function() {
        "undefined" != typeof MutationObserver && (this._.observatory = {
            observer: new MutationObserver(this._onObserveMutation.bind(this)),
            mutant: null
        })
    }, s._onObserveMutation = function(t) {
        var i = this._.observatory.mutant;
        return i ? void e.each(t, function(t) {
            if (t.removedNodes)
                for (var n = 0, s = t.removedNodes.length; n < s; ++n)
                    t.removedNodes[n] == i && (this._.observatory.observer.disconnect(), this._.observatory.mutant = null, this.refresh("angel-removed"), e.breakIteration())
        }, this) : this._.observatory.observer.disconnect()
    }, s._isFocusVisible = function(t) {
        return e.try(t, "matches()", ".focus-visible")
    }, s._findAngelInScope = function() {
        if (this.scope) {
            var t = this._findActiveAngelInScope() || this._findFocusAngelInScope();
            if (t && e.elementClosest(t, ".halos-attached") == this.scope)
                return t
        }
    }, s._findActiveAngelInScope = function() {
        if (e.try(this._.pointer, "angel"))
            return this._.pointer.angel;
        var t = e.try(this._.pointer, "target");
        if (t) {
            var i = e.elementClosest(t, ".halo, [data-halo-delegate]");
            return this._.pointer.angel = this._resolveAngelInScope(i)
        }
    }, s._findFocusAngelInScope = function() {
        if (this._isFocusVisible(document.activeElement) && e.isInDOM(document.activeElement, this.scope))
            return this._resolveAngelInScope(document.activeElement)
    }, s._resolveAngelInScope = function(t) {
        if (t) {
            var e = this._attr(t, "data-halo-delegate");
            return e ? document.getElementById(e) : t.classList.contains("halo") ? t : void 0
        }
    }, s._setHaloState = function(t, i) {
        if (i) {
            var n = this._acquireHalo(i);
            this._declassify(n, "is-blur"),
            o.off(n._onAnimationEnd),
            e.each(t, function(t, s) {
                if (!e.among(t, "focus", "active", "blur"))
                    return console.warn("[HALOS] invalid halo state:", t, s);
                var r = "is-" + t;
                if (!s)
                    return this._declassify(n, r);
                var a = "blur " + (this._attr(i, "data-halo-states") || "focus active"),
                    c = e.among(t, a.split(/\s+/)),
                    l = c && n.classList.contains(r);
                this._classify(n, r, c),
                "blur" == t && (n._onAnimationEnd = o.once(n, "animationend", this._renounceHalo.bind(this, i))),
                "active" == t && l && (n.firstChild.style.setProperty("display", "none"), n.offsetWidth, n.firstChild.style.removeProperty("display")),
                "focus" == t && !l && this._.observatory && (this._.observatory.mutant = i, this._.observatory.observer.observe(i.parentNode, {
                    childList: !0
                }))
            }, this)
        }
    }, s._acquireHalo = function(t) {
        for (var i = 0, n = this._.groups.length; i < n; ++i)
            for (var s = 0, o = this._.groups[i].wires.length; s < o; ++s) {
                var r = this._.groups[i].wires[s];
                if (r.angel == t)
                    return r.halo
            }
        var a,
            c,
            l = e.elementClosest(t, ".halos-anchor");
        l ? (e.each(this._.groups, function(t) {
            if (t.anchor == l)
                return e.breakIteration(c = t)
        }), c || (a = l.querySelector(":scope > .shibui-halos") || this._element({
            tag: {
                OL: "li",
                UL: "li",
                TR: "td"
            }[l.tagName] || "div",
            parentNode: l,
            classes: "shibui-halos"
        }))) : (l = this.scope, a = this.dom.root, e.each(this._.groups, function(t) {
            if (t.anchor == l)
                return e.breakIteration(c = t)
        })),
        c || this._.groups.push(c = {
            uuid: e.generateUUID(),
            anchor: l,
            cluster: a,
            wires: []
        });
        var h;
        return e.each(c.wires, function(t) {
            t.angel || e.breakIteration(h = t)
        }), h || (h = {}, h.haloDOM = this._build("shibui-halo", {
            parentNode: c.cluster
        }, " ripple", "  scalar"), h.halo = h.haloDOM.root, c.wires.push(h)), h.angel = t, this._customizeHaloForAngel(t, h.halo), h.halo
    }, s._customizeHaloForAngel = function(t, i) {
        this._declassify(i, "hide");
        var n = this._attr(t, "data-halo-class");
        if (!n && t.classList.contains("shibui-button") && (n = "pill"), !n)
            return n = t.classList[0] || "", this._classify(i, "halo-for-" + n, !!n);
        if (this._classify(i, "halo-for-" + n), "pill" == n) {
            var s = window.getComputedStyle(t);
            this._classify(i, "halo-for-" + n);
            var o = e.rgbStringToHex(s.backgroundColor || ""),
                r = o ? e.hexToRGB(o) : null;
            this._.colorizer.colorize(i, "halo-pill", r)
        } else
            this._classify(i, "halo-for-" + n)
    }, s._renounceHalo = function(t) {
        e.each(this._.groups, function(i) {
            e.each(i.wires, function(i) {
                i.angel == t && (e.excise(i, "angel"), this._attr(i.halo, "class", "shibui-halo hide"))
            }, this)
        }, this)
    }, s._repositionHalos = function() {
        if (this.scope) {
            var t,
                i,
                n = [];
            e.each(this._.groups, function(s) {
                e.isInDOM(s.cluster) && (n.push(s), t = i = null, e.each(s.wires, function(n) {
                    if (n.angel) {
                        t = t || {
                            w: s.anchor.scrollWidth,
                            h: s.anchor.scrollHeight
                        },
                        i = i || s.cluster.getBoundingClientRect();
                        var o = parseFloat(this._attr(n.angel, "data-halo-inset") || "3"),
                            r = n.angel.getBoundingClientRect();
                        t.w = t.w || window.innerWidth,
                        t.h = t.h || window.innerHeight;
                        var a = {
                            t: Math.max(o, r.top - i.top - o),
                            l: Math.max(o, r.left - i.left - o),
                            b: Math.min(t.h - o, r.top - i.top + r.height + o),
                            r: Math.min(t.w - o, r.left - i.left + r.width + o)
                        };
                        if (a.w = a.r - a.l, a.h = a.b - a.t, a.w <= 0 || a.h <= 0)
                            return this._renounceHalo.bind(n.angel);
                        this._styleTransform(n.halo, "translate3d(" + a.l + "px," + a.t + "px,0)"),
                        n.halo.style.setProperty("width", Math.round(a.w) + "px"),
                        n.halo.style.setProperty("height", Math.round(a.h) + "px");
                        var c = window.getComputedStyle(n.angel),
                            l = function(t) {
                                var i = c["border-" + t + "-radius"];
                                i && !e.among(i, "0px", "1px", "2px") || (i = "3px");
                                var s = "calc(" + Math.max(0, o) + "px + " + i + ")";
                                n.halo.style.setProperty("border-" + t + "-radius", s)
                            };
                        l("top-left"),
                        l("top-right"),
                        l("bottom-right"),
                        l("bottom-left");
                        var h = n.halo.firstChild,
                            u = Math.max(a.w, a.h);
                        if (h.style.setProperty("width", u + "px"), h.style.setProperty("height", u + "px"), this._.pointer) {
                            var d = {
                                x: this._.pointer.x - i.left,
                                y: this._.pointer.y - i.top
                            };
                            if (d.x < a.l || d.x > a.r || d.y < a.t || d.y > a.b)
                                this._styleTransform(h);
                            else {
                                var p = d.x - (a.l + a.w / 2),
                                    f = d.y - (a.t + a.h / 2);
                                this._styleTransform(h, "translateX(" + p + "px) translateY(" + f + "px)")
                            }
                        }
                    }
                }, this))
            }, this),
            e.each(this._.groups, function(t) {
                e.among(t, n) || e.each(t.wires, function(e) {
                    t.cluster.removeChild(e.halo)
                })
            }, this),
            this._.groups = n
        }
    }, n
}),
define("text!bifocal/themes/listen/default/svg/playback-rewind.svg", [], function() {
    return "<svg viewBox='0 0 64 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n  <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>\n    <path d='M15.5626599,23.6788982 C13.8631791,26.5774932 12.8888889,29.9527455 12.8888889,33.5555556 C12.8888889,44.3557907 21.6442093,53.1111111 32.4444444,53.1111111 C43.2446796,53.1111111 52,44.3557907 52,33.5555556 C52,22.7553204 43.2446796,14 32.4444444,14' stroke='#000000' stroke-width='3' stroke-linecap='round' class='icon-hollow' />\n    <path d='M36.9555556,9.97607121 L36.9555556,17.9350399 C36.9555556,19.4264542 35.7465254,20.6354843 34.2551112,20.6354843 C33.7326672,20.6354843 33.2214402,20.4839361 32.7834004,20.1992103 L25.1126477,15.213221 C24.4180582,14.7617378 24.2209816,13.8326625 24.6724648,13.138073 C24.7867964,12.9621782 24.9367528,12.8122218 25.1126477,12.6978901 L32.7834004,7.71190084 C34.0338672,6.89909744 35.7064781,7.2538937 36.5192815,8.50436047 C36.8040074,8.94240025 36.9555556,9.45362727 36.9555556,9.97607121 Z' fill='#000000' class='icon-solid' />\n    <line x1='26.5' y1='34.5' x2='38.5' y2='34.5' stroke='#000000' stroke-width='3' stroke-linecap='round' class='icon-hollow' />\n  </g>\n</svg>\n"
}),
define("text!bifocal/themes/listen/default/svg/playback-advance.svg", [], function() {
    return "<svg viewBox='0 0 64 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n  <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>\n    <path d='M48.4373401,23.6788982 C50.1368209,26.5774932 51.1111111,29.9527455 51.1111111,33.5555556 C51.1111111,44.3557907 42.3557907,53.1111111 31.5555556,53.1111111 C20.7553204,53.1111111 12,44.3557907 12,33.5555556 C12,22.7553204 20.7553204,14 31.5555556,14' stroke='#000000' stroke-width='3' stroke-linecap='round' class='icon-hollow' />\n    <path d='M27.0444444,9.97607121 L27.0444444,17.9350399 C27.0444444,19.4264542 28.2534746,20.6354843 29.7448888,20.6354843 C30.2673328,20.6354843 30.7785598,20.4839361 31.2165996,20.1992103 L38.8873523,15.213221 C39.5819418,14.7617378 39.7790184,13.8326625 39.3275352,13.138073 C39.2132036,12.9621782 39.0632472,12.8122218 38.8873523,12.6978901 L31.2165996,7.71190084 C29.9661328,6.89909744 28.2935219,7.2538937 27.4807185,8.50436047 C27.1959926,8.94240025 27.0444444,9.45362727 27.0444444,9.97607121 Z' fill='#000000' class='icon-solid' />\n    <line x1='32.5' y1='28.5' x2='32.5' y2='40.5' stroke='#000000' stroke-width='3' stroke-linecap='round' class='icon-hollow' />\n    <line x1='26.5' y1='34.5' x2='38.5' y2='34.5' stroke='#000000' stroke-width='3' stroke-linecap='round' class='icon-hollow' />\n  </g>\n</svg>\n"
}),
define("bifocal/themes/listen/default/src/features/accessibility", ["require", "common", "quirkbase", "shibui/src/illustrator", "../parts/chatterbox", "../../../../read/default/src/parts/commands-access", "../../../../read/default/src/parts/commands-dialog", "shibui/src/halos", "text!../../svg/playback-rewind.svg", "text!../../svg/playback-advance.svg"], function(t) {
    var e = t("common"),
        i = t("quirkbase"),
        n = t("shibui/src/illustrator"),
        s = t("../parts/chatterbox"),
        o = t("../../../../read/default/src/parts/commands-access"),
        r = t("../../../../read/default/src/parts/commands-dialog"),
        a = t("shibui/src/halos");
    return function(c) {
        function l() {
            return "playing" == e.try(BIF.objects.spool, "state")
        }
        function h(t) {
            BIF.objects.spool.seekBy(1e3 * t)
        }
        function u() {
            return BIF.elements.cmdNav || (BIF.elements.cmdNav = BIF.objects.layout._element({
                tag: "nav",
                parentNode: document.body,
                classes: "assistive-commands",
                landmark: ["a11y.landmark-role.assistive", "a11y.landmark-role.actions"]
            })), BIF.elements.cmdNav
        }
        return c.runsheet.append(["bifocal:command:register", "registerCommandsCommand"], ["bifocal:command:register", "registerPlaybackCommand"], ["bifocal:command:register", "registerSeekingCommands"], ["bifocal:readying", "loadCommandsAccess"], ["bifocal:readying", "loadChatterbox"], ["bifocal:readying", "loadHalos"]), c.registerCommandsCommand = function(t) {
            var e = ["shift-?"];
            i.ask("ipad") && e.push("cmd 750ms"),
            t.m.commands.register({
                name: "commands",
                shortcut: e,
                callback: function() {
                    (new r).shade().grow()
                }
            })
        }, c.registerPlaybackCommand = function(t) {
            t.m.commands.register(function() {
                return {
                    group: "seeking",
                    name: "playback-" + (l() ? "pause" : "play"),
                    shortcut: ["SPACE", "shift-P"],
                    callback: function() {
                        BIF.objects.spool.toggle()
                    },
                    refresh: ["bifocal:spool:state"]
                }
            })
        }, c.registerSeekingCommands = function(e) {
            n.add("playback-rewind", t("text!../../svg/playback-rewind.svg")),
            e.m.commands.register(function() {
                return {
                    group: "seeking",
                    name: "playback-rewind",
                    shortcut: "LEFT down",
                    shortcutModes: ["navigating"],
                    callback: h.bind(this, -15)
                }
            }),
            n.add("playback-advance", t("text!../../svg/playback-advance.svg")),
            e.m.commands.register(function() {
                return {
                    group: "seeking",
                    name: "playback-advance",
                    shortcut: "RIGHT down",
                    shortcutModes: ["navigating"],
                    callback: h.bind(this, 15)
                }
            }),
            e.m.commands.register(function() {
                return {
                    name: "playback-rewind-long",
                    shortcut: "PAGEUP down",
                    shortcutModes: ["navigating"],
                    callback: h.bind(this, -60)
                }
            }),
            e.m.commands.register(function() {
                return {
                    name: "playback-advance-long",
                    shortcut: "PAGEDOWN down",
                    shortcutModes: ["navigating"],
                    callback: h.bind(this, 60)
                }
            })
        }, c.loadChatterbox = function() {
            BIF.objects.chatterbox = new s,
            BIF.objects.chatterbox.impart(document.body, "prepend")
        }, c.loadHalos = function() {
            BIF.objects.halos = new a(document.body)
        }, c.loadCommandsAccess = function() {
            BIF.objects.commandsAccess = new o(u()),
            BIF.objects.commandsAccess.connect("commands")
        }, !0
    }
}),
define("bifocal/themes/listen/default/src/features/shade-controls", ["require", "../parts/playback-controls"], function(t) {
    var e = t("../parts/playback-controls");
    return function(t) {
        t.runsheet.append(["shade:visible", "attachPlaybackControlsToShade"]),
        t.attachPlaybackControlsToShade = function(t) {
            var i = t.m.shade;
            if (i && !i.dom.playbackControls) {
                var n = i._element({
                    tag: "nav",
                    parentNode: i.dom.root
                });
                i.dom.playbackControls = new e(n, "mini"),
                i.dom.playbackControls._activateForModes("shading"),
                i._classify(i.dom.playbackControls.dom.root, "bumper-n bumper-s halos-anchor")
            }
        }
    }
}),
define("bifocal/themes/read/default/src/parts/cover-painter", ["require", "common", "core/src/view"], function(t) {
    var e = t("common"),
        i = t("core/src/view"),
        n = i.new(),
        s = n.prototype;
    return s.$init = function() {
        this.version = "1",
        BIF.events.on("bifocal:covers:paint", this.repaint.bind(this)),
        BIF.events.on("bifocal:codex", this.repaint.bind(this)),
        BIF.events.on("shade:visible", this.repaint.bind(this)),
        i.prototype.$init.apply(this, arguments)
    }, s.repaint = function(t) {
        var i = BIF.objects.codex;
        if (i) {
            BIF.events.dispatch("bifocal:covers:painting", {
                codex: i
            });
            var n = i.coverPath("big");
            n != this._.coverPath && (this._textify(this.dom.title, {
                html: i.title()
            }), this.dom.image.setAttributeNS("http://www.w3.org/1999/xlink", "href", n), this._.coverPath = n);
            var s = document.querySelectorAll(".cover");
            e.each(s, function(t) {
                t.classList.contains("cover-alt-title") && coverImage.setAttribute("alt", i.title())
            }, this)
        }
    }, s._layout = function() {
        this.dom = this._build("cover-painter <svg>", {
            namespace: "svg",
            attributes: {
                viewBox: "0 0 0 0",
                version: 1.1
            }
        }, " <defs>", {
            namespace: "svg"
        }, "  <symbol> #cover-painter-image", {
            namespace: "svg",
            attributes: {
                viewBox: "0 0 510 680",
                preserveAspectRatio: "none"
            }
        }, "   title <title>", {
            namespace: "svg"
        }, "   image <image>", {
            namespace: "svg",
            attributes: {
                width: 510,
                height: 680,
                preserveAspectRatio: "none"
            }
        }),
        this.dom.root.style.display = "none"
    }, n
}),
define("bifocal/themes/read/default/src/features/covers", ["require", "../parts/cover-painter"], function(t) {
    var e = t("../parts/cover-painter");
    return function(t) {
        return t.runsheet.append(["bifocal:reveal", "loadCoverPainter"]), t.loadCoverPainter = function() {
            BIF.objects.coverPainter = new e(document.body)
        }, !0
    }
}),
define("bifocal/themes/read/default/src/features/cover-colors", ["require", "shibui/src/colorizer"], function(t) {
    var e = t("shibui/src/colorizer");
    return function(t) {
        return t.runsheet.append(["bifocal:codex", "loadCoverColors"]), t.loadCoverColors = function() {
            BIF.objects.coverColorizer = new e;
            var t = BIF.objects.codex.coverColor();
            BIF.objects.coverColorizer.colorize(BIF.root, "cover", t)
        }, !0
    }
}),
define("bifocal/themes/read/default/src/parts/chapter-dialog", ["require", "common", "./dialog", "./quirks"], function(t) {
    var e = t("common"),
        i = t("./dialog"),
        n = i.new(),
        s = n.prototype;
    t("./quirks");
    return s.DIALOG_HEADING = {
        label: "chapters.heading"
    }, s.DIALOG_CLASSES = "chapter-shade", s.DIALOG_OPTIONS = {
        springs: [.5, .8]
    }, s.DIALOG_BEARING = "s", s.BANK_KEY_SCROLL_HINT = "shade:hint:scroll-to-top", s._layout = function(t) {
        var i = BIF.objects.compass.chapters;
        this._build("chapter-dialog", {
            extending: t
        }, " table <ul>", {
            skip: !i.length
        }, " apology {chapters.apology}", {
            skip: i.length
        }, " overview .shibui-button", {
            button: !0,
            label: "chapters.overview." + BIF.objects.codex.format()
        }),
        e.each(i, this._rowForChapter.bind(this, this.dom.table)),
        this._highlightCurrentChapter()
    }, s._listen = function(t, e) {
        this._handle("bifocal:chapters"),
        this._handle("bifocal:place")
    }, s._rowForChapter = function(t, i) {
        var n = this._build("chapter-dialog-row <li>", {
            parentNode: t
        }, " button", {
            button: this._onTapChapterRow.bind(this, i)
        }, "  flex", "   image <img>", {
            skip: !i.featureImage,
            attributes: {
                src: i.featureImage
            }
        }, "   info", "    section", {
            skip: !i.sectionName,
            html: i.sectionName
        }, "    title", {
            html: this._chapterTitle(i)
        }, " place", {
            button: this._onTapChapterRow.bind(this, i)
        }, "  place-phrase", BIF.CLASSES.PlacePhrase);
        n.chapter = i,
        i.place.isSeekable() || i.place.component() && i.place.isFinite() ? (n.placePhrase.configure(), n.placePhrase.update(i.place)) : i.place.component() ? (n.placePhrase.configure({
            spin: !0
        }), n.placePhrase.update(i.place)) : (this._classify(n.root, "is-inaccessible"), n.placePhrase.configure({
            lock: !0
        }), n.placePhrase.update(i.place), n.button.disabled = n.place.disabled = !0),
        this._.items = this._.items || [],
        this._.items.push(n),
        e.each(i.contents, this._rowForChapter.bind(this, t))
    }, s._chapterTitle = function(t) {
        var e = t.title || (BIF.objects.codex ? BIF.objects.codex.title() : "") || "";
        (e.match(/ /g) || []).length > 2 && (e = e.replace(/\s([^\s<]{0,10})\s*$/g, "&nbsp;$1"));
        for (var i = t.level; i > 0;)
            e = '<span class="dent">–</span>' + e,
            i -= 1;
        return e
    }, s._onTapChapterRow = function(t, i) {
        var n = t.place.seek();
        n && "Read" == BIF.state.outlet ? BIF.objects.modeManager.exitModes() : "BUTTON" == e.try(i.target, "tagName") && this.close()
    }, s._onTapOverview = function(t) {
        BIF.objects.commands.execute("overview")
    }, s._onBifocalChapters = function(t) {
        delete this._.items,
        this.dom.table ? (this._textify(this.dom.table), e.each(t.m.chapters, this._rowForChapter.bind(this, this.dom.table)), this._highlightCurrentChapter(t.m.place)) : (this._textify(this.dom.root), this._layout())
    }, s._onBifocalPlace = function(t) {
        this._highlightCurrentChapter(t.m.place)
    }, s._highlightCurrentChapter = function(t) {
        if (this._.items && this._.items.length) {
            t = t || BIF.objects.compass.place;
            for (var i = this._.items.slice(0), n = i.shift(); n && t.chapter != n.chapter;)
                n = i.shift();
            if (n) {
                e.batonClass(n.root, "is-current", this.dom.table);
                var s = this.dom.table.querySelectorAll('[aria-current="location"]'),
                    o = [n.button];
                e.each(s, function(t) {
                    return e.among(t, o) ? e.excise(o, t) : void t.removeAttribute("aria-current")
                }),
                e.each(o, function(t) {
                    t.setAttribute("aria-current", "location")
                })
            }
        }
    }, s._shaded = function(t) {
        var i = this.dom.root.querySelector("[aria-current]");
        if (i) {
            var n = t._computeBoundary(),
                s = n.height - n.maximize - 60,
                o = i.offsetTop + i.offsetHeight - s / 2;
            if (!(o <= 0)) {
                t.options.springs = [e.last(t.options.springs)],
                t.dom.appendix.style.setProperty("margin-top", 0 - o + "px");
                var r = BIF.events.on("shade:resize", function(e) {
                    e.m.shade == t && (r.deafen(), t.dom.appendix.style.removeProperty("margin-top"), t.dom.scroller.scrollTop += o)
                }.bind(this));
                this._defer("max", t.maximize.bind(t))
            }
        }
    }, n
}),
define("text!bifocal/themes/read/default/svg/chapters.svg", [], function() {
    return "<svg viewBox='0 0 64 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n  <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-linecap='round'>\n    <line x1='47.1052632' y1='49' x2='50.8947368' y2='49' stroke='#000000' stroke-width='3' class='icon-hollow' />\n    <line x1='47.1052632' y1='38' x2='50.8947368' y2='38' stroke='#000000' stroke-width='3' class='icon-hollow' />\n    <line x1='47.1052632' y1='27' x2='50.8947368' y2='27' stroke='#000000' stroke-width='3' class='icon-hollow' />\n    <line x1='47.1052632' y1='16' x2='50.8947368' y2='16' stroke='#000000' stroke-width='3' class='icon-hollow' />\n    <line x1='13.6842105' y1='49' x2='38.3157895' y2='49' stroke='#000000' stroke-width='3' class='icon-hollow' />\n    <line x1='13.6842105' y1='38' x2='38.3157895' y2='38' stroke='#000000' stroke-width='3' class='icon-hollow' />\n    <line x1='13.6842105' y1='27' x2='38.3157895' y2='27' stroke='#000000' stroke-width='3' class='icon-hollow' />\n    <line x1='13.6842105' y1='16' x2='38.3157895' y2='16' stroke='#000000' stroke-width='3' class='icon-hollow' />\n  </g>\n</svg>\n"
}),
define("text!bifocal/themes/read/default/svg/chapter-backward.svg", [], function() {
    return '<svg version="1.1" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n  <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">\n    <path class="icon-hollow" d="M45.75,53 L28.6746212,53 C27.2822346,53 25.9468766,52.4468766 24.9623106,51.4623106 L17.5376894,44.0376894 C16.5531234,43.0531234 16,41.7177654 16,40.3253788 L16,12.75 C16,11.7835017 16.7835017,11 17.75,11 L45.75,11 C46.7164983,11 47.5,11.7835017 47.5,12.75 L47.5,51.25 C47.5,52.2164983 46.7164983,53 45.75,53 Z" stroke="#000000" stroke-width="3" />\n    <path class="icon-hollow" d="M28.25,48.625 L28.25,42.5 C28.25,41.5335017 27.4664983,40.75 26.5,40.75 L21.25,40.75 L21.25,40.75" stroke="#000000" stroke-linecap="round" stroke-width="3" />\n    <path class="icon-solid" d="M33.6,19.4 C34.4284271,19.4 35.1,20.0715729 35.1,20.9 C35.1,21.6796961 34.5051119,22.3204487 33.74446,22.3931334 L33.6,22.4 L33.299,22.4 L33.299,28.4 L33.6,28.4 C34.4284271,28.4 35.1,29.0715729 35.1,29.9 C35.1,30.6796961 34.5051119,31.3204487 33.74446,31.3931334 L33.6,31.4 L30,31.4 C29.1715729,31.4 28.5,30.7284271 28.5,29.9 C28.5,29.1203039 29.0948881,28.4795513 29.85554,28.4068666 L30,28.4 L30.299,28.4 L30.299,22.4 L30,22.4 C29.1715729,22.4 28.5,21.7284271 28.5,20.9 C28.5,20.1203039 29.0948881,19.4795513 29.85554,19.4068666 L30,19.4 L33.6,19.4 Z" fill="#000000" fill-rule="nonzero" />\n  </g>\n</svg>\n'
}),
define("text!bifocal/themes/read/default/svg/chapter-forward.svg", [], function() {
    return '<svg version="1.1" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n  <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">\n    <path class="icon-hollow" d="M18.25,53 L35.3253788,53 C36.7177654,53 38.0531234,52.4468766 39.0376894,51.4623106 L46.4623106,44.0376894 C47.4468766,43.0531234 48,41.7177654 48,40.3253788 L48,12.75 C48,11.7835017 47.2164983,11 46.25,11 L18.25,11 C17.2835017,11 16.5,11.7835017 16.5,12.75 L16.5,51.25 C16.5,52.2164983 17.2835017,53 18.25,53 Z" stroke="#000000" stroke-width="3" />\n    <path class="icon-hollow" d="M35.75,48.625 L35.75,42.5 C35.75,41.5335017 36.5335017,40.75 37.5,40.75 L42.75,40.75 L42.75,40.75" stroke="#000000" stroke-linecap="round" stroke-width="3" />\n    <path class="icon-solid" d="M29.6,20.4 C30.4284271,20.4 31.1,21.0715729 31.1,21.9 C31.1,22.6796961 30.5051119,23.3204487 29.74446,23.3931334 L29.6,23.4 L29.299,23.4 L29.299,29.4 L29.6,29.4 C30.4284271,29.4 31.1,30.0715729 31.1,30.9 C31.1,31.6796961 30.5051119,32.3204487 29.74446,32.3931334 L29.6,32.4 L26,32.4 C25.1715729,32.4 24.5,31.7284271 24.5,30.9 C24.5,30.1203039 25.0948881,29.4795513 25.85554,29.4068666 L26,29.4 L26.299,29.4 L26.299,23.4 L26,23.4 C25.1715729,23.4 24.5,22.7284271 24.5,21.9 C24.5,21.1203039 25.0948881,20.4795513 25.85554,20.4068666 L26,20.4 L29.6,20.4 Z M37.6,20.4 C38.4284271,20.4 39.1,21.0715729 39.1,21.9 C39.1,22.6796961 38.5051119,23.3204487 37.74446,23.3931334 L37.6,23.4 L37.299,23.4 L37.299,29.4 L37.6,29.4 C38.4284271,29.4 39.1,30.0715729 39.1,30.9 C39.1,31.6796961 38.5051119,32.3204487 37.74446,32.3931334 L37.6,32.4 L34,32.4 C33.1715729,32.4 32.5,31.7284271 32.5,30.9 C32.5,30.1203039 33.0948881,29.4795513 33.85554,29.4068666 L34,29.4 L34.299,29.4 L34.299,23.4 L34,23.4 C33.1715729,23.4 32.5,22.7284271 32.5,21.9 C32.5,21.1203039 33.0948881,20.4795513 33.85554,20.4068666 L34,20.4 L37.6,20.4 Z" fill="#000000" fill-rule="nonzero" />\n  </g>\n</svg>\n'
}),
define("bifocal/themes/read/default/src/features/chapters", ["require", "common", "../parts/chapter-dialog", "shibui/src/illustrator", "text!../../svg/chapters.svg", "text!../../svg/chapter-backward.svg", "text!../../svg/chapter-forward.svg"], function(t) {
    var e = t("common"),
        i = t("../parts/chapter-dialog"),
        n = t("shibui/src/illustrator");
    return function(s) {
        function o(t) {
            "forward" == t ? BIF.objects.compass.chapterManager.nextPlace().seek() : BIF.objects.compass.chapterManager.previousPlace().seek()
        }
        return s.runsheet.append(["bifocal:command:register", "registerChapterSeekingCommands"], ["bifocal:command:register", "registerChaptersCommand"]), s.registerChaptersCommand = function(e) {
            n.add("chapters", t("text!../../svg/chapters.svg")),
            e.m.commands.register({
                group: "dialogs",
                name: "chapters",
                label: "chapters.heading",
                shortcut: "shift-C",
                callback: function() {
                    (new i).shade().grow()
                }
            })
        }, s.registerChapterSeekingCommands = function(i) {
            n.add("chapter-backward", t("text!../../svg/chapter-backward.svg")),
            n.add("chapter-forward", t("text!../../svg/chapter-forward.svg")),
            i.m.commands.register(function() {
                var t = e.try(BIF, "context.profile.reverse") ? "forward" : "backward";
                return {
                    group: "seeking",
                    name: "chapter-" + t,
                    label: "a11y.chapters." + ("forward" == t ? "next" : "previous"),
                    shortcut: ["shift-LEFT", "shift-PAGEUP"],
                    callback: o.bind(this, t)
                }
            }),
            i.m.commands.register(function() {
                var t = e.try(BIF, "context.profile.reverse") ? "backward" : "forward";
                return {
                    group: "seeking",
                    name: "chapter-" + t,
                    label: "a11y.chapters." + ("forward" == t ? "next" : "previous"),
                    shortcut: ["shift-RIGHT", "shift-PAGEDOWN"],
                    callback: o.bind(this, t)
                }
            })
        }, !0
    }
}),
define("bifocal/themes/read/default/src/parts/marks-collection", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.SAVE_RECORDINGS_DELAY = 200, n.$init = function(t, e, i) {
        this.name = t,
        this.klass = e,
        this._.missing = [],
        this._.callbacks = {
            change: i
        },
        this._.recordingsBankKey = "possession:" + this.name + ":recordings",
        this._.recordings = BIF.bank.title.get(this._.recordingsBankKey) || [],
        this._assignList(BIF.objects.possession),
        BIF.events.on("bifocal:possession:synchronized", this._onPossessionSync.bind(this))
    }, n.perform = function(t, e) {
        var i = this._record(t, e),
            n = {};
        return n[t + "d"] = [i], this._scheduleCallback(n), i
    }, n._record = function(t, i) {
        var n = {
            operation: t,
            params: e.absorb(i, {})
        };
        n.params.syncstamp = e.epochMilliseconds();
        var s = this._replay(n);
        if (s) {
            s.syncstamp = i.syncstamp;
            var o = e.absorb(s.serialize(), {
                syncstamp: i.syncstamp
            });
            return this._.recordings.push(n), this._saveRecordings(), BIF.objects.activity.record(this.name + "." + n.operation, o), s
        }
    }, n._replay = function(t) {
        return this["_operation_" + t.operation].call(this, t)
    }, n._saveRecordings = function() {
        clearTimeout(this._.saveRecordingsTimer),
        this._.saveRecordingsTimer = setTimeout(function() {
            BIF.bank.title.set(this._.recordingsBankKey, this._.recordings)
        }.bind(this), this.SAVE_RECORDINGS_DELAY)
    }, n._operation_create = function(t) {
        var e = new this.klass(t.params);
        return e.place ? (this._findMarkByUUID(e.uuid) && console.warn("[MARKS] adding mark with duplicate UUID", e), e.collection = this, this.all.push(e), e) : void this._.missing.push(e)
    }, n._operation_update = function(t) {
        var i = this._findMarkByUUID(t.params.uuid);
        return i ? (i.deserialize(e.absorb(t.params, i.serialize())), i) : void console.warn("[MARKS] cannot update mark for", t.params.uuid)
    }, n._operation_delete = function(t) {
        var i = this._findMarkByUUID(t.params.uuid);
        if (i) {
            "function" == typeof i.removed && i.removed(),
            e.excise(this.all, i);
            var n = [];
            return e.each(this._.recordings, function(e) {
                e.params.uuid == t.params.uuid && e != t && n.push(e)
            }, this), e.each(n, function(t) {
                e.excise(this._.recordings, t)
            }, this), i
        }
    }, n._findMarkByUUID = function(t) {
        for (var e = 0, i = this.all.length; e < i; ++e) {
            var n = this.all[e];
            if (n.uuid == t)
                return n
        }
    }, n._onPossessionSync = function(t) {
        this._assignList(t.m.possession)
    }, n._assignList = function(t) {
        var i = [],
            n = 0;
        this.all = this.all || i;
        var s = "data.marks." + this.name + "s",
            o = e.try(t, s);
        e.each(o, function(t) {
            var e = this._findMarkByUUID(t.uuid);
            e || (e = new this.klass(t), e.collection = this),
            i.push(e),
            n = Math.max(n, t.syncstamp)
        }, this),
        this.all = i,
        this._replayRecordsSince(n),
        this._scheduleCallback({
            synced: this.all
        })
    }, n._replayRecordsSince = function(t) {
        var i = [];
        e.each(this._.recordings, function(e) {
            e.params.syncstamp > t && (this._replay(e), i.push(e))
        }, this),
        this._.recordings = i,
        this._saveRecordings()
    }, n._scheduleCallback = function(t) {
        var i = this._.callbacks.schedule = this._.callbacks.schedule || {};
        i.delta ? e.each(t, function(t, e) {
            i.delta[t] = i.delta[t] || [],
            i.delta[t] = i.delta[t].concat(e)
        }) : i.delta = t,
        clearTimeout(i.timer),
        setTimeout(this._invokeCallback.bind(this), 0)
    }, n._invokeCallback = function() {
        var t = this._.callbacks.schedule;
        t && (clearTimeout(t.timer), this._.callbacks.change(t.delta), this._.callbacks.schedule = null)
    }, i
}),
define("bifocal/themes/listen/default/src/parts/mark-audiomark", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.COLOR_GROUPS = {
        "#FFB": "Y",
        "#FFE0EC": "R",
        "#DFC": "G"
    }, n.$init = function(t) {
        this.deserialize(t)
    }, n.serialize = function() {
        var t = {};
        return this.extentMilliseconds && (t.extentMilliseconds = this.extentMilliseconds), this.note && (t.note = this.note), this.color && (t.color = this.color), e.absorb(this.place.toHash(), t)
    }, n.deserialize = function(t) {
        var e = t.spinePosition + t.percentageOfComponent;
        return this.place = BIF.objects.compass.at(e), this.uuid = this.place.uuid = t.uuid, this.place.timestamp = 1e3 * t.timestamp, t.extentMilliseconds ? this.extentMilliseconds = t.extentMilliseconds : delete this.extentMilliseconds, t.note ? this.note = t.note : delete this.note, t.color ? this.color = t.color : delete this.color, this.type = this.extentMilliseconds ? "highlight" : "bookmark", this
    }, n.meta = function() {
        var t = {
            timestamp: this.place.timestamp,
            title: this.place.citation(),
            note: this.note
        };
        return this.extentMilliseconds && (t.extentMilliseconds = this.extentMilliseconds), this.color && (t.colorGroup = this.groupForColor(this.color)), this.live && (t.liveMark = this), t
    }, n.colorForGroup = function(t) {
        return e.invertObject(this.COLOR_GROUPS)[t]
    }, n.groupForColor = function(t) {
        return this.COLOR_GROUPS[t];
    }, i
}),
define("bifocal/themes/listen/default/src/parts/marks-manager", ["require", "common", "../../../../read/default/src/parts/marks-collection", "./mark-audiomark"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype,
        s = t("../../../../read/default/src/parts/marks-collection"),
        o = t("./mark-audiomark");
    return n.AURA_RANGE_MS = 3e3, n.HIGHLIGHT_MIN_MS = 750, n.$init = function() {
        this.collections = {
            audiomark: new s("audiomark", o, this._onAudiomarkCollectionChange.bind(this))
        },
        this._.auraRange = this.AURA_RANGE_MS,
        this._.publishSoon = e.staggerInvocation(this._publish.bind(this), 500, 1e3),
        this.colorGroup = "Y",
        this._listen()
    }, n.startRecording = function() {
        if (this._.activeMark)
            BIF.objects.commands.execute("mark-edit", this._.activeMark);
        else {
            var t = {};
            t.component = this._.currentComponent,
            t.milliseconds = this._.currentMilliseconds,
            t.startTime = e.epochMilliseconds(),
            this._.currentRecording = t,
            this._updateCurrentRecording()
        }
    }, n.stopRecording = function() {
        this._.currentRecording && this._completeCurrentRecording()
    }, n.abortRecording = function() {
        if (this._.currentRecording) {
            var t = this._.currentRecording.mark;
            t && (t.live = !1, this.removeMark(t), this._deactivateMark({
                removed: !0
            })),
            this._.currentRecording = null
        }
    }, n.setMarkColor = function(t, e) {
        if (this.colorGroup = e, t.extentMilliseconds) {
            var i = {
                uuid: t.uuid,
                color: t.colorForGroup(this.colorGroup)
            };
            this.collections.audiomark.perform("update", i)
        }
    }, n.setMarkNote = function(t, e) {
        if (t.note !== e) {
            var i = {
                uuid: t.uuid,
                note: e
            };
            this.collections.audiomark.perform("update", i)
        }
    }, n.removeMark = function(t) {
        this._.activeMark && this._.activeMark.uuid == t.uuid && this._deactivateMark({
            removed: !0
        }),
        this.collections.audiomark.perform("delete", {
            uuid: t.uuid
        })
    }, n._listen = function() {
        BIF.events.on("bifocal:place", this._onPlace.bind(this)),
        BIF.events.on("bifocal:seeking", this._onSeeking.bind(this))
    }, n._onPlace = function(t) {
        this._updatePlace(t.m.place)
    }, n._updatePlace = function(t) {
        t = t || BIF.objects.compass.place,
        t && t.component && t.component.isFocus() && (this._.currentComponent = t.component, this._.currentMilliseconds = t.componentMilliseconds, this._.currentRecording ? this._updateCurrentRecording() : this._updateActiveMark())
    }, n._onSeeking = function(t) {
        this._.currentRecording && this.abortRecording(),
        this._.activeMark && this._deactivateMark()
    }, n._updateActiveMark = function() {
        if (this._.activeMark) {
            if (this._withinAura(this._.activeMark))
                return;
            this._deactivateMark()
        }
        var t = this._anyWithinAura(this.collections.audiomark.all);
        t && this._activateMark(t)
    }, n._updateCurrentRecording = function() {
        var t = this._.currentRecording;
        if (t.component !== this._.currentComponent)
            this.abortRecording();
        else if (t.milliseconds - this._.currentMilliseconds >= .1)
            console.log("[MM] new position (%o) is behind recording position (%o)", this._.currentMilliseconds, t.milliseconds),
            this._completeCurrentRecording();
        else if (t.mark) {
            for (var i = this.collections.audiomark.all, n = 0, s = i.length; n < s; ++n)
                i[n] && i[n] != t.mark && this._withinAura(i[n], 250) && this._mergeRecordingWithMark(t, i[n]);
            var r = e.epochMilliseconds() > t.startTime + this.HIGHLIGHT_MIN_MS;
            !t.highlighting && r && (t.highlighting = !0, t.mark.type = "highlight", BIF.events.dispatch("bifocal:audiomark:highlighting", {
                mark: t.mark
            })),
            t.highlighting && (t.mark.extentMilliseconds = this._recordingFinishMS(t) - t.milliseconds),
            this._.publishSoon()
        } else {
            var a = BIF.objects.compass.at({
                component: t.component,
                milliseconds: t.milliseconds
            }).toHash();
            t.mark = new o(a),
            t.mark.color = t.mark.colorForGroup(this.colorGroup),
            t.mark.extentMilliseconds = this._.currentMilliseconds - t.milliseconds,
            t.mark.type = "bookmark",
            t.mark.live = !0,
            this._publish()
        }
    }, n._completeCurrentRecording = function() {
        var t = this._.currentRecording;
        if (t && t.mark) {
            t.highlighting ? t.mark.extentMilliseconds = this._recordingFinishMS(t) - t.milliseconds : (delete t.mark.extentMilliseconds, delete t.mark.color);
            var e = this.collections.audiomark.perform("create", t.mark.serialize()),
                i = "playing" == BIF.objects.spool.state ? 2 : 1;
            this._activateMark(e, this.AURA_RANGE_MS * i)
        }
        this._.currentRecording = null
    }, n._mergeRecordingWithMark = function(t, i) {
        var n = e.select([t.mark, i], function(t) {
            return t.note
        });
        t.mark.note = e.unique(e.compact(n)).join("\n");
        var s = i.place.componentMilliseconds,
            o = s + (i.extentMilliseconds || 0);
        if (s < t.milliseconds) {
            var r = BIF.objects.compass.at({
                component: t.component,
                milliseconds: s
            });
            r.uuid = t.mark.place.uuid,
            r.timestamp = t.mark.place.timestamp,
            t.mark.place = r,
            t.milliseconds = s
        }
        t._mergedFinishMS = Math.max(t._mergedFinishMS || 0, o),
        this.removeMark(i)
    }, n._recordingFinishMS = function(t) {
        return Math.max(this._.currentMilliseconds, t._mergedFinishMS || 0)
    }, n._anyWithinAura = function(t, e) {
        for (var i = 0, n = t.length; i < n; ++i)
            if (this._withinAura(t[i], e))
                return t[i]
    }, n._withinAura = function(t, e) {
        "undefined" == typeof e && (e = this._.auraRange);
        var i = t.place.componentMilliseconds,
            n = i + (t.extentMilliseconds || 0);
        return this._.currentComponent === t.place.component && this._.currentMilliseconds >= i - e && this._.currentMilliseconds <= n + e
    }, n._activateMark = function(t, e) {
        console.assert(!this._.activeMark, "deactivate activeMark first"),
        this._.activeMark = t,
        "number" == typeof e && (this._.auraRange = e),
        BIF.events.dispatch("bifocal:audiomark:active", {
            mark: t,
            isNewMark: !!e
        })
    }, n._deactivateMark = function(t) {
        console.assert(this._.activeMark, "no activeMark to deactivate");
        var i = this._.activeMark;
        this._.activeMark = null,
        this._.auraRange = this.AURA_RANGE_MS,
        BIF.events.dispatch("bifocal:audiomark:inactive", e.absorb(t || {}, {
            mark: i
        }))
    }, n._onAudiomarkCollectionChange = function(t) {
        this._updatePlace(),
        this._publish()
    }, n._publish = function() {
        var t = this._.currentRecording,
            i = this.collections.audiomark.all.slice(0);
        t && t.mark && i.push(t.mark),
        i.sort(this._sortMarksByPlace.bind(this));
        var n = {
            bookmark: [],
            highlight: []
        };
        e.each(i, function(t) {
            n[t.extentMilliseconds ? "highlight" : "bookmark"].push(t)
        }),
        e.each(["bookmark", "highlight"], function(t) {
            BIF.objects.compass.landmarks(t, function(i) {
                e.each(n[t], function(t) {
                    i(t.uuid, t.place, t.meta())
                })
            })
        })
    }, n._sortMarksByPlace = function(t, e) {
        var i = (t.place ? t.place.floc : 0) || 0,
            n = (e.place ? e.place.floc : 0) || 0;
        return i - n
    }, i
}),
define("text!bifocal/themes/read/default/svg/bookmark.svg", [], function() {
    return '<svg viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg">\n  <path d="M15,15.6040408 C15,13.8897264 16.3433124,12.5 18.0023584,12.5 L45.9976416,12.5 C47.6557983,12.5 49,13.887915 49,15.6040408 L49,48.3910718 C49.0000104,50.0479317 47.65686,51.3910821 46,51.3910821 C45.4091983,51.3910821 44.8315484,51.2166389 44.3394991,50.8896311 C36.5671634,45.7242663 32.4905554,43.1440434 32.1096752,43.1489624 C31.7952015,43.1530238 27.6377037,45.7602081 19.6371819,50.9705153 C18.2487953,51.8747151 16.3902905,51.4821866 15.4861039,50.0937915 C15.1688786,49.6066862 15,49.0379112 15,48.4566166 L15,15.6040408 L15,15.6040408 Z" stroke="#000000" stroke-width="3" fill="none" class="icon-hollow" />\n</svg>\n'
}),
define("bifocal/themes/listen/default/src/parts/bookmark-button", ["require", "common", "core/src/view", "shibui/src/key-manager", "text!../../../../read/default/svg/bookmark.svg"], function(t) {
    var e = t("common"),
        i = t("core/src/view"),
        n = i.new(),
        s = n.prototype,
        o = t("shibui/src/key-manager");
    return s._graphic("bookmark", t("text!../../../../read/default/svg/bookmark.svg")), s._layout = function() {
        this.dom = this._build("bookmark", {
            classes: "nav-action-item"
        }, " button", {
            button: !0
        }, "  icon", {
            icon: "bookmark"
        }, "  label .nav-action-item-label {bookmark.add}")
    }, s._listen = function(t) {
        BIF.events.on("bifocal:audiomark:highlighting", this._onMarkHighlighting.bind(this)),
        BIF.events.on("bifocal:audiomark:active", this._onMarkActive.bind(this)),
        BIF.events.on("bifocal:audiomark:inactive", this._onMarkInactive.bind(this)),
        BIF.events.on("bifocal:command:execute", function(t) {
            "mark-edit" == t.m.command.attributes.name && this._abortRecording()
        }.bind(this)),
        this._.handler = BIF.events.onContact(this.dom.button, {
            start: this._startRecording.bind(this),
            move: this._onContactMove.bind(this),
            end: this._stopRecording.bind(this),
            cancel: this._abortRecording.bind(this)
        });
        var i = {
            "space down": function(t) {
                this.dom.button.classList.contains("is-tapping") || this._startRecording(t)
            }.bind(this),
            "space up": this._stopRecording.bind(this),
            return: function(t) {
                this._startRecording(t),
                this._stopRecording(t)
            }.bind(this),
            blur: this._abortRecording.bind(this)
        };
        this._.keyHandler = new o(this.dom.button),
        e.each(i, this._.keyHandler.addBinding.bind(this._.keyHandler)),
        BIF.events.on("bifocal:seeking", this._onSeeking.bind(this)),
        BIF.events.on("bifocal:seeked", this._onSeeked.bind(this)),
        BIF.events.on("bifocal:landmarks:group", this._onLandmarksGroup.bind(this))
    }, s._startRecording = function(t) {
        BIF.events.stop(t),
        this._defer("tapping"),
        this._classify(this.dom.button, "is-tapping"),
        BIF.objects.marksManager.startRecording()
    }, s._stopRecording = function(t) {
        this._aura(!1),
        this._.contactStartCoords = null,
        BIF.events.stop(t),
        BIF.objects.marksManager.stopRecording(),
        this._defer("tapping", this._declassify.bind(this, this.dom.button, "is-tapping"), 100)
    }, s._abortRecording = function() {
        this._aura(!1),
        this._.contactStartCoords = null,
        BIF.objects.marksManager.abortRecording(),
        this._defer("tapping", this._declassify.bind(this, this.dom.button, "is-tapping"))
    }, s._onTapButton = function() {
        this.dom.button.classList.contains("is-tapping") || (this._startRecording(), this._stopRecording())
    }, s._onContactMove = function(t) {
        if (BIF.events.stop(t), !this._.contactStartCoords)
            return this._.contactStartCoords = {
                x: t.pageX,
                y: t.pageY
            };
        var e = Math.abs(t.pageX - this._.contactStartCoords.x),
            i = Math.abs(t.pageY - this._.contactStartCoords.y),
            n = Math.max(e, i);
        n > 50 && this._abortRecording()
    }, s._onMarkHighlighting = function(t) {
        var e = t.m.mark;
        this._setActiveMark(e),
        this._aura(!0)
    }, s._onMarkActive = function(t) {
        this._setActiveMark(t.m.mark),
        this._classify(this.dom.button, "is-bookmarked")
    }, s._onMarkInactive = function(t) {
        this._setActiveMark(null),
        this._declassify(this.dom.button, "is-bookmarked")
    }, s._setActiveMark = function(t) {
        this._.mark = t,
        t && t.color ? this._color(t && t.color ? t.groupForColor(t.color) : null) : this._color(),
        this._textify(this.dom.label, "bookmark." + (t ? "edit" : "add"))
    }, s._color = function(t) {
        t ? e.DataClass.set(this.dom.button, "bookmark-color", t) : e.DataClass.clear(this.dom.button, "bookmark-color")
    }, s._aura = function(t) {
        this._classify(this.dom.button, "has-aura", t)
    }, s._onSeeking = function(t) {
        this.dom.button.disabled = !0,
        this._.handler.deafen()
    }, s._onSeeked = function(t) {
        this.dom.button.disabled = !1,
        this._.handler.listen()
    }, s._onLandmarksGroup = function(t) {
        this._.mark && "highlight" == t.m.name && e.each(t.m.items, function(t) {
            t.id == this._.mark.uuid && this._color(t.meta.colorGroup)
        }, this)
    }, n
}),
define("bifocal/themes/read/default/src/parts/mark-bookmark", ["require", "common", "shibui/src/phrasebook"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype,
        s = t("shibui/src/phrasebook");
    return n.$init = function(t) {
        this.type = "bookmark",
        this.deserialize(t)
    }, n.serialize = function() {
        return this._.savedAttributes || this.place.toHash()
    }, n.deserialize = function(t) {
        var e = BIF.context.spine.byPosition(t.spinePosition);
        return e ? (this.place = BIF.objects.compass.at({
            region: e.index + t.percentageOfComponent,
            percentageOfBook: t.percentageOfBook
        }), this.uuid = this.place.uuid = t.uuid, this.place.timestamp = 1e3 * t.timestamp, this) : (console.warn("[BOOKMARK] could not find place:", t), this._.savedAttributes = t, null)
    }, n.meta = function() {
        var t = this.place.citation();
        return t = t ? "<cite>" + t + "</cite>" : s.text("marks.mark-type", {
            MARK_TYPE: "bookmark"
        }), {
            title: t,
            timestamp: this.place.timestamp
        }
    }, n.refresh = function() {
        this.place.refresh()
    }, i
}),
define("core/src/locator", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.rangeToLocator = function(t, e) {
        var i = t.cloneRange();
        i.startContainer !== i.endContainer && i.setEnd(i.startContainer, i.startContainer.nodeValue.length);
        for (var n = i.startContainer, s = {
                spinePosition: e,
                elementIndex: this._indexOfElement(n),
                charOffset: 0,
                matchIndex: 0,
                matchString: i.toString()
            }; "number" != typeof s.elementIndex && n.parentNode;)
            n = n.parentNode,
            s.elementIndex = this._indexOfElement(n);
        for (var o, r = this._textNodesInElement(n), a = ""; o = r.shift();)
            o === i.startContainer && (s.charOffset = a.length + i.startOffset),
            a += o.nodeValue;
        if (s.matchString)
            for (var c = -1, l = s.matchString.length;;) {
                if (c = a.indexOf(s.matchString, c >= 0 ? c + l : 0), !(c >= 0 && c < s.charOffset))
                    break;
                s.matchIndex += 1
            }
        return s
    }, n.locatorToRange = function(t, e) {
        var i = this._elementAtIndex(t.elementIndex, e);
        if (!i)
            return null;
        for (var n = t.charOffset, s = t.matchIndex, o = t.matchString.length, r = this._textNodesInElement(i), a = "", c = 0, l = r.length; c < l; ++c)
            a += r[c].nodeValue;
        if (a.substr(n, o) !== t.matchString) {
            n = null;
            for (var h = 0; isFinite(s) && (h = a.indexOf(t.matchString, h ? h + o : 0), !(h < 0 || (s -= 1) < 0 && (n = h)));)
                ;
        }
        var u = i.ownerDocument.createRange();
        if ("number" == typeof n) {
            for (; r.length && r[0].nodeValue.length <= n;)
                n -= r.shift().nodeValue.length;
            u.setStart(r[0], n),
            u.setEnd(r[0], n + o)
        } else
            u.selectNode(r[0]),
            u.__BIF_IMPRECISE = !0;
        return u
    }, n.locatorsToRange = function(t, e, i) {
        var n = this.locatorToRange(t, i),
            s = this.locatorToRange(e, i);
        return n.setEnd(s.endContainer, s.endOffset), n
    }, n.injectElement = function(t, e) {
        if (!this._rangeIsBlankGap(t)) {
            var i = t.startContainer.ownerDocument.createElement(e);
            return t.surroundContents(i), i
        }
    }, n.extractElement = function(t) {
        for (var e = t.parentNode; t.childNodes.length;)
            e.insertBefore(t.firstChild, t);
        e.removeChild(t),
        e.normalize()
    }, n._textNodesInElement = function(t) {
        if (3 === t.nodeType)
            return [t];
        for (var e = [], i = 0, n = t.childNodes.length; i < n; ++i)
            e = e.concat(this._textNodesInElement(t.childNodes[i]));
        return e
    }, n._indexOfElement = function(t) {
        try {
            var e = t.getAttribute("data-loc");
            if ("string" == typeof e && e.match(/^\d+$/))
                return parseInt(e)
        } catch (t) {}
    }, n._elementAtIndex = function(t, e) {
        return e.querySelector('*[data-loc="' + t + '"]')
    }, n._rangeIsBlankGap = function(t) {
        var e = function(t) {
            return !t || t.nodeType !== document.body.TEXT_NODE && !t.tagName.match(/^BIF/)
        };
        return t.startContainer === t.endContainer && 0 === t.startOffset && e(t.startContainer.previousSibling) && e(t.startContainer.nextSibling) && t.toString().match(/^\s*$/)
    }, i
}),
define("bifocal/themes/read/default/src/parts/mark-highlight", ["require", "common", "core/src/locator"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype,
        s = t("core/src/locator");
    return n.COLOR_GROUPS = {
        "#FFB": "Y",
        "#FFE0EC": "R",
        "#DFC": "G"
    }, n.EXCERPT_LENGTH = 80, n.$init = function(t) {
        this.type = "highlight",
        this._.locator = new s,
        this.deserialize(t)
    }, n.edit = function() {
        BIF.objects.commands.execute("mark-edit", this)
    }, n.serialize = function() {
        return e.absorb(this._.attributes, {})
    }, n.deserialize = function(t) {
        this._.attributes = e.absorb(t, {});
        var i = this._findComponent();
        if (!i)
            return console.warn("[HIGHLIGHT] could not find place:", this._.attributes), null;
        if (this._.attributes.timestamp = this._.attributes.timestamp || e.epochSeconds(), this._.attributes.quote = this._.attributes.quote || this._grabQuote(), this.uuid = this._.attributes.uuid, this.excerpt = this._excerpt(this.EXCERPT_LENGTH), this.note = this._.attributes.note, this.colorGroup = this.COLOR_GROUPS[this._.attributes.color], this._reattach(), this.place) {
            var n = this.place.chapter;
            n && (this._.attributes.chapterIndex = this._.attributes.chapterIndex || n.index, this._.attributes.chapterTitle = this._.attributes.chapterTitle || n.title),
            this._.attributes.citation = this._.attributes.citation || this.place.citation()
        }
        return this
    }, n.meta = function() {
        var t = this.excerpt || "";
        return this._.attributes.citation && (t += " — " + this._.attributes.citation), {
            title: t,
            note: this.note,
            timestamp: 1e3 * this._.attributes.timestamp,
            colorGroup: this.colorGroup
        }
    }, n.refresh = function() {
        this._findPlace()
    }, n.removed = function() {
        this._.removed = !0,
        BIF.objects.stencil.remove("highlight-" + this.uuid),
        this._.onComponentBinding && (BIF.events.deafen("lens:component:visible", this._.onComponentBinding), delete this._.onComponentBinding)
    }, n._excerpt = function(t) {
        this._.attributes.quote = this._.attributes.quote || this._grabQuote();
        var e = this._.attributes.quote || "";
        return "number" == typeof t && e.length > t && (e = e.slice(0, t).replace(/ ([\w]+)?$/, "…")), e
    }, n._reattach = function() {
        this._.removed || ((this._.range = this._grabRange()) && BIF.objects.stencil.add("highlight-" + this.uuid, this._.range, {
            className: "mask-highlight mask-highlight-" + this.colorGroup,
            title: this.note || "Highlight",
            tap: this.edit.bind(this)
        }), this._.onComponentBinding || (this._.onComponentBinding = this._onComponentModify.bind(this), BIF.events.listen("lens:component:visible", this._.onComponentBinding)), this._findPlace())
    }, n._grabRange = function() {
        var t = this._findComponent(),
            e = t && t.frameBox ? t.frameBox.contentDocument : null;
        if (e) {
            var i = {};
            if (i.A = this._.locator.locatorToRange(this._.attributes.locatorA, e), i.A || this._fixLocators(e, i), i.Z = this._.locator.locatorToRange(this._.attributes.locatorZ, e), i.A && i.Z) {
                var n = e.createRange();
                return n.setStart(i.A.startContainer, i.A.startOffset), n.setEnd(i.Z.endContainer, i.Z.endOffset), n
            }
        }
    }, n._fixLocators = function(t, e) {
        return console.warn("[HL] invalid locator:", this._.attributes.locatorA), this._.attributes.locatorA.elementIndex += 1, this._.attributes.locatorZ.elementIndex += 1, e.A = this._.locator.locatorToRange(this._.attributes.locatorA, t), e.A ? console.warn("[HL] ... fixed by one ahead") : (this._.attributes.locatorA.elementIndex -= 2, this._.attributes.locatorZ.elementIndex -= 2, e.A = this._.locator.locatorToRange(this._.attributes.locatorA, t), e.A ? console.warn("[HL] ... fixed by one behind") : console.warn("[HL] ... could not be fixed"))
    }, n._findComponent = function() {
        var t = this._.attributes.locatorA.spinePosition;
        return BIF.context.spine.byPosition(t)
    }, n._findPlace = function() {
        var t = this._.attributes,
            i = this._findComponent();
        if (this.place = null, this._.range && i.isLoaded()) {
            var n = e.getRangeRects(this._.range)[0],
                s = BIF.context.spool.rectangleToFloc(i, n);
            isFinite(s) && (this.place = BIF.objects.compass.at(s))
        }
        if (!this.place || !this.place.isSeekable()) {
            var o;
            "number" == typeof t.percentageOfComponent ? o = t.locatorA.spinePosition + t.percentageOfComponent : "number" == typeof t.percentageOfBook && (o = {
                percentageOfBook: t.percentageOfBook
            }),
            this.place = BIF.objects.compass.at(o)
        }
        this.place.isSeekable() && (t.percentageOfBook = this.place.percentageOfBook, t.percentageOfComponent = this.place.floc % 1)
    }, n._onComponentModify = function(t) {
        t.m.component == this._findComponent() && this._reattach()
    }, n._grabQuote = function() {
        var t = this._.range || this._grabRange();
        if (t && BIF.objects.pincer)
            return BIF.objects.pincer.toFormattedText(t)
    }, i
}),
define("bifocal/themes/read/default/src/parts/marks-manager", ["require", "common", "./marks-collection", "./mark-bookmark", "./mark-highlight"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype,
        s = t("./marks-collection");
    return n.$init = function() {
        this.collections = {
            bookmark: new s("bookmark", t("./mark-bookmark"), this._onBookmarksCollectionChange.bind(this)),
            highlight: new s("highlight", t("./mark-highlight"), this._onHighlightsCollectionChange.bind(this))
        },
        BIF.events.on("bifocal:page:bookmarked", this._onPageBookmarked.bind(this)),
        BIF.events.on("bifocal:page:unbookmarked", this._onPageUnbookmarked.bind(this)),
        BIF.events.on("bifocal:place", this._checkPageForBookmarks.bind(this)),
        BIF.events.on("bifocal:chapters", this._refreshAllMarks.bind(this))
    }, n.highlightSelection = function(t, i) {
        var n = BIF.objects.compass.place,
            s = BIF.objects.compass.place.toHash();
        s.uuid = e.generateUUID(),
        s.quote = t.text,
        s.locatorA = t.locatorA,
        s.locatorZ = t.locatorZ,
        s.color = i;
        try {
            s.citation = n.citation(t.pincer.properties.startContainer)
        } catch (t) {
            console.warn("[MARKS] did not generate citation from selection --", t)
        }
        this.collections.highlight.perform("create", s)
    }, n.setMarkColor = function(t, i) {
        t = this._resolveMark(t);
        var n = i;
        n.match(/^#\w+$/) || (n = null, e.each(t.COLOR_GROUPS, function(t, s) {
            s == i && (n = t, e.breakIteration())
        })),
        n ? t.collection.perform("update", {
            uuid: t.uuid,
            color: n
        }) : console.warn("[MARKS] could not assign color", t, i)
    }, n.setMarkNote = function(t, e) {
        t = this._resolveMark(t),
        t.note !== e && t.collection.perform("update", {
            uuid: t.uuid,
            note: e
        })
    }, n.removeMark = function(t) {
        t = this._resolveMark(t),
        t.collection.perform("delete", {
            uuid: t.uuid
        })
    }, n._resolveMark = function(t) {
        if ("string" != typeof t)
            return t;
        var i;
        return e.each(this.collections, function(n, s) {
            for (var o = 0, r = s.all.length; o < r; ++o)
                (t = s.all[o].uuid) && (i = s.all[o], e.breakIteration())
        }), i
    }, n._onPageBookmarked = function(t) {
        var e = this._bookmarkAtPlace();
        return e ? console.warn("[MM] place already bookmarked", e) : (this.collections.bookmark.perform("create", BIF.objects.compass.place.toHash()), void this._checkPageForBookmarks())
    }, n._onPageUnbookmarked = function(t) {
        var e = t && t.m && t.m.mark ? t.m.mark : this._bookmarkAtPlace();
        e ? (this.collections.bookmark.perform("delete", {
            uuid: e.uuid
        }), this._onPageUnbookmarked()) : this._checkPageForBookmarks()
    }, n._checkPageForBookmarks = function() {
        BIF.events.dispatch("bifocal:page:bookmark", {
            mark: this._bookmarkAtPlace()
        })
    }, n._bookmarkAtPlace = function(t) {
        if (t = t || (BIF.objects.compass ? BIF.objects.compass.place : null))
            for (var e = 0, i = this.collections.bookmark.all.length; e < i; ++e) {
                var n = this.collections.bookmark.all[e];
                if (t.overlaps(n.place))
                    return n
            }
    }, n._onBookmarksCollectionChange = function() {
        this._checkPageForBookmarks(),
        this._publish("bookmark")
    }, n._onHighlightsCollectionChange = function() {
        for (var t = 0; t < this.collections.highlight.all.length;) {
            var e = this.collections.highlight.all[t];
            this._mergeOverlappingHighlights(e) || (t += 1)
        }
        this._publish("highlight")
    }, n._mergeOverlappingHighlights = function(t) {
        var i = [],
            n = e.absorb(t._.attributes, {}),
            s = function(t, e) {
                return t.spinePosition < e.spinePosition ? t : e.spinePosition < t.spinePosition ? e : t.elementIndex < e.elementIndex ? t : e.elementIndex < t.elementIndex ? e : e.charOffset < t.charOffset ? e : t
            };
        if (e.each(this.collections.highlight.all, function(o) {
            if (o !== t) {
                var r = o._.attributes.locatorA,
                    a = o._.attributes.locatorZ;
                s(n.locatorA, a) !== a && s(r, n.locatorZ) !== n.locatorZ && (n.locatorA = s(n.locatorA, r), n.locatorZ = s(n.locatorZ, a) === a ? n.locatorZ : a, n.note = e.unique(e.compact([n, o._.attributes].sort(function(t, e) {
                    return e.timestamp - t.timestamp
                }).map(function(t) {
                    return t.note
                }))).join("\n"), o._.attributes.timestamp > n.timestamp && (n.color = o._.attributes.color, n.timestamp = o._.attributes.timestamp), i.push(o))
            }
        }), i.length)
            return e.each(i.concat([t]), function(t) {
                this.collections.highlight.perform("delete", {
                    uuid: t.uuid
                })
            }, this), n.uuid = e.generateUUID(), n.quote = null, this.collections.highlight.perform("create", n)
    }, n._refreshAllMarks = function() {
        this.collections.bookmark.all.length && (e.each(this.collections.bookmark.all, function(t) {
            t.refresh()
        }), this._publish("bookmark")),
        this.collections.highlight.all.length && (e.each(this.collections.highlight.all, function(t) {
            t.refresh()
        }), this._publish("highlight"))
    }, n._publish = function(t) {
        var i = this.collections[t].all.slice(0);
        i.sort(this._sortMarksByPlace.bind(this)),
        BIF.objects.compass.landmarks(t, function(t) {
            e.each(i, function(e) {
                t(e.uuid, e.place, e.meta())
            })
        }.bind(this))
    }, n._sortMarksByPlace = function(t, e) {
        var i = (t.place ? t.place.floc : 0) || 0,
            n = (e.place ? e.place.floc : 0) || 0;
        return i - n
    }, i
}),
define("text!shibui/svg/pencil.svg", [], function() {
    return "<svg viewBox='0 0 64 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n  <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>\n    <path d='M18.7208839,39.9997381 L21,40 L21,43 L24,42.999 L24,46 L26.999,45.999 L26.999,47.2777381 L24.7824856,49.495689 L14.8829906,52.3241161 L14.1758839,51.6170094 L17.004311,41.7175144 L18.7208839,39.9997381 Z M35.3890873,23.3327381 L43.1672619,31.1109127 L28.9998839,45.2767381 L29,44 L26,43.999 L26,41 L23,40.999 L23,38 L20.7208839,37.9997381 L35.3890873,23.3327381 Z' fill='#000000' class='icon-solid' />\n    <path d='M43.8492424,17.1507576 L48.8492424,17.1507576 C50.5060967,17.1507576 51.8492424,18.4939033 51.8492424,20.1507576 L51.8492424,23.1507576 L51.8492424,23.1507576 L40.8492424,23.1507576 L40.8492424,20.1507576 C40.8492424,18.4939033 42.1923882,17.1507576 43.8492424,17.1507576 Z' fill='#000000' transform='translate(46.349242, 20.150758) rotate(-315.000000) translate(-46.349242, -20.150758) ' class='icon-solid' />\n    <rect fill='#000000' transform='translate(41.753048, 24.746952) rotate(-315.000000) translate(-41.753048, -24.746952) ' x='36.2530483' y='23.2469517' width='11' height='3' class='icon-solid' />\n  </g>\n</svg>\n"
}),
define("bifocal/themes/read/default/src/parts/marks-dialog", ["require", "common", "./dialog", "shibui/src/components/edit-rail", "text!shibui/svg/pencil.svg"], function(t) {
    var e = t("common"),
        i = t("./dialog"),
        n = i.new(),
        s = n.prototype,
        o = t("shibui/src/components/edit-rail");
    return s._graphic("pencil", t("text!shibui/svg/pencil.svg")), s.DIALOG_HEADING = {
        label: "marks.heading",
        spoken: "a11y.action.marks"
    }, s.DIALOG_BEARING = "n", s.DIALOG_CLASSES = "marks-shade", s._layout = function() {
        var t = this._getSortedMarks();
        this.dom = this._build("marks-dialog", " marks <ul>", {
            skip: !t.length
        }, " apology {marks.empty.max}", {
            skip: !!t.length
        }),
        this._fillOut(t)
    }, s._shaded = function(t) {
        t.rename("a11y.action.marks")
    }, s._getSortedMarks = function() {
        var t = [];
        return e.each(BIF.objects.marksManager.collections, function(e, i) {
            t.push.apply(t, i.all)
        }), t.sort(function(t, e) {
            return t.place.floc - e.place.floc
        })
    }, s._fillOut = function(t) {
        var i,
            n;
        e.each(t, function(t) {
            t.place.chapter && t.place.chapter != i && (i = t.place.chapter, n = this._build("marks-dialog-chapter <li>", {
                parentNode: this.dom.marks
            }, " title <h2>", {
                html: i.title.match(/^\d+/) ? this._phrase({
                    label: "search.chapter",
                    substitutions: {
                        CHAPTER_NUMBER: i.title
                    }
                }) : i.title
            }, " list <ul>").list);
            var s = t.meta(),
                r = this._build("marks-dialog-mark <li>", {
                    parentNode: n
                }, " button", {
                    button: this._goToMark.bind(this, t),
                    attributes: {
                        "data-halo-inset": 0
                    }
                }, "  symbol", "  details", " place", {
                    button: this._goToMark.bind(this, t),
                    attributes: {
                        "data-halo-inset": 0
                    }
                }, "  place-phrase", BIF.CLASSES.PlacePhrase);
            e.DataClass.set(r.root, "mark-type", t.type),
            e.DataClass.set(r.root, "mark-color", s.colorGroup || "none"),
            r.placePhrase.update(t.place),
            t.excerpt ? this._element({
                tag: "span",
                parentNode: r.details,
                classes: "marks-dialog-mark-excerpt",
                html: t.excerpt
            }) : this._element({
                tag: "span",
                parentNode: r.details,
                label: "marks.mark-type" + (s.note ? "" : ".sentence"),
                substitutions: {
                    MARK_TYPE: t.type
                },
                wrapper: !1
            }),
            s.note && this._element({
                tag: "span",
                parentNode: r.details,
                classes: "marks-dialog-mark-note",
                html: e.safe(s.note)
            }),
            this._element({
                tag: "span",
                parentNode: r.details,
                classes: "marks-dialog-mark-date",
                html: this._phrase({
                    date: s.timestamp,
                    relative: !0
                })
            }),
            new o(r.root, this._editActionsForMark(t))
        }, this)
    }, s._editActionsForMark = function(t) {
        var e = [{
            icon: "trash",
            spoken: "marks.mark-remove",
            button: this._deleteMark.bind(this, t)
        }];
        return "highlight" != t.type && "Listen" != BIF.state.outlet || e.unshift({
            icon: "pencil",
            spoken: "marks.mark-edit",
            button: this._editMark.bind(this, t),
            retain: !0
        }), e
    }, s._editMark = function(t) {
        BIF.objects.commands.execute("mark-edit", t)
    }, s._deleteMark = function(t) {
        BIF.objects.marksManager.removeMark(t);
        var i = this.dom.marks.querySelectorAll(".marks-dialog-chapter");
        e.each(i, function(t) {
            t.querySelector("ul:empty") && this._removeHeading(t)
        }, this)
    }, s._removeHeading = function(t) {
        var e = t.getBoundingClientRect();
        this._stylePrefix(t, "transition", "height 200ms"),
        t.style.setProperty("height", e.height + "px"),
        t.style.setProperty("overflow", "hidden"),
        this._textify(t),
        this._defer(function() {
            t.style.setProperty("height", 0),
            this._defer(function() {
                t.parentNode && t.parentNode.removeChild(t)
            }.bind(this), 200)
        }.bind(this))
    }, s._goToMark = function(t) {
        t.place.seek(),
        BIF.objects.modeManager.exitModes()
    }, n
}),
define("shibui/src/components/form-field", ["require", "common", "../view", "gala"], function(t) {
    var e = t("common"),
        i = t("../view"),
        n = i.new(),
        s = n.prototype;
    t("gala");
    return s.$init = function(t, e) {
        this.options = this._normalizeOptions(t, e),
        this.options = this._expandOptions(this.options),
        this.options.parentNode && this.impart(this.options.parentNode)
    }, s._normalizeOptions = function(t, i) {
        return e.isElement(t) ? e.absorb(i, {
            parentNode: t
        }) : e.absorb(arguments[0], {})
    }, s._expandOptions = function(t) {
        return !t.form && t.parentNode && (t.form = e.elementClosest(t.parentNode)), t
    }, s._dispatchFieldEvent = function(t, i) {
        i = e.absorb(i, this._fieldEventData()),
        this._dispatch("form:field:" + t, i)
    }, s._fieldEventData = function() {
        return {
            field: this
        }
    }, n
}),
define("text!shibui/svg/field-warning.svg", [], function() {
    return '<svg version="1.1" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n  <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">\n    <path class="icon-solid" d="M33.7330029,7.51145572 C34.2420586,7.81654828 34.6688804,8.24137434 34.9763555,8.74899442 L61.458314,52.4688732 C62.5008312,54.1899969 61.9507119,56.4303705 60.2295882,57.4728877 C59.6603267,57.8177002 59.007492,58 58.3419439,58 L5.65732888,58 C3.64508912,58 2.01384649,56.3687574 2.01384649,54.3565176 C2.01384649,53.6967676 2.19298583,53.0493982 2.5321458,52.4835001 L28.7348023,8.76362129 C29.7692413,7.03763033 32.007012,6.47701671 33.7330029,7.51145572 Z M32.0306393,43.4871385 L32.003922,43.4871385 C30.25059,43.4871385 28.8292336,44.9084949 28.8292336,46.6618269 C28.8292336,48.415159 30.25059,49.8365154 32.003922,49.8365154 L32.0306393,49.8365154 C33.7839713,49.8365154 35.2053278,48.415159 35.2053278,46.6618269 C35.2053278,44.9084949 33.7839713,43.4871385 32.0306393,43.4871385 Z M32.0172807,21.7178462 C30.5081009,21.7178462 29.2846689,23.071519 29.2846689,24.7413591 L29.2846689,36.8354103 C29.2846689,38.5052503 30.5081009,39.8589231 32.0172807,39.8589231 C33.5264605,39.8589231 34.7498925,38.5052503 34.7498925,36.8354103 L34.7498925,24.7413591 C34.7498925,23.071519 33.5264605,21.7178462 32.0172807,21.7178462 Z" fill="#000000" />\n  </g>\n</svg>\n'
}),
define("shibui/src/components/form-control", ["require", "common", "./form-field", "gala", "text!shibui/svg/field-warning.svg"], function(t) {
    var e = t("common"),
        i = t("./form-field"),
        n = i.new(),
        s = n.prototype,
        o = t("gala");
    return s._graphic("field-warning", t("text!shibui/svg/field-warning.svg")), s.value = function() {
        return this._prepare().control.value
    }, s.setValue = function(t) {
        return this._prepare().control.value = t
    }, s.focus = function() {
        this._focusElement(this.dom.control)
    }, s.blur = function() {
        var t = this.dom.control;
        t && "function" == typeof t.blur && t.blur()
    }, s.enable = function() {
        var t = this.dom.control;
        t && this.access(t, "normal"),
        this._attr(this.dom.root, "aria-disabled", null)
    }, s.disable = function() {
        var t = this.dom.control;
        t && this.access(t, {
            disabled: !0
        }),
        this._attr(this.dom.root, "aria-disabled", "true")
    }, s.validate = function(t) {
        return this._.validating = !0, this._setValidity(this._checkValidity(), t)
    }, s.explain = function(t) {
        "string" == typeof t && (t = {
            label: t
        }),
        this._.validating || (this.options.explanation = t),
        this.dom.explanation.innerHTML && this.dom.explanation.style.setProperty("min-height", this.dom.explanation.clientHeight + "px"),
        t && !e.isList(t) && (t = e.absorb(t, {
            morph: !0
        })),
        this._textify(this.dom.explanation, t),
        this.dom.control && this.dom.explanation.innerHTML && this.dom.explanation.classList.contains("shibui-form-field-description") && this._attr(this.dom.control, "aria-describedby", this.dom.explanation.id)
    }, s._expandOptions = function(t) {
        return ("string" == typeof t.label || e.isList(t.label)) && (t.label = {
            label: t.label
        }), i.prototype._expandOptions.call(this, t)
    }, s._layout = function(t) {
        var i = e.flatten(this.options.classes || [], [this.options.style || "shibui-style-default"]).join(" ");
        this._build("shibui-form-field", {
            extending: t,
            classes: i
        }, " core", "  label <label>", {
            skip: !this.options.label
        }, "   label-text <span>", e.absorb(this.options.label, {
            id: !0,
            wrapper: !1
        }), " explanation <p> .shibui-form-field-description", {
            id: !0
        })
    }, s._afterLayout = function(t) {
        t.control && (this._classify(t.control, "shibui-form-field-control"), t.label && (this._attr(t.label, "for", t.control.id), this._attr(t.control, "aria-labelledby", t.labelText.id), this._hasInteractiveChildren(t.label) || this.access(t.label, {
            "aria-hidden": "true"
        }))),
        this.explain(this.options.explanation)
    }, s._listen = function(t, e) {
        e.control && (this._handle("focus", e.control), this._handle("blur", e.control), this._handle("change", e.control), this._handle("invalid", e.control), t.__onTapControl = o.onTap(e.control, this._onTapControl.bind(this), {
            ariaRole: null
        }))
    }, s._onFocusControl = function(t) {
        this.hasFocus = !0,
        this._classify(this.dom.root, "is-focused"),
        this._dispatchFieldEvent("focus")
    }, s._onBlurControl = function(t) {
        this.hasFocus = !1,
        this._declassify(this.dom.root, "is-focused"),
        this._dispatchFieldEvent("blur")
    }, s._onChangeControl = function(t) {
        this._dispatchFieldEvent("change")
    }, s._onTapControl = function(t) {
        this._dispatchFieldEvent("tap")
    }, s._checkValidity = function() {
        var t = this.dom.control;
        t.setCustomValidity && t.setCustomValidity("");
        var i = e.try(this.options, "invalidations()", this.value());
        return i ? (this._attr(this.dom.control, "data-validation", i), !1) : !t.checkValidity || t.checkValidity()
    }, s._setValidity = function(t, e) {
        if (this._.validating = !0, e = e || {}, t !== this._.validity || !e.ambient) {
            if (t)
                this._attr(this.dom.root, "aria-invalid", null),
                this._attr(this.dom.root, "aria-errormessage", null),
                this._.validity !== t && this.explain(this.options.explanation);
            else if (!e.ambient) {
                this._attr(this.dom.root, "aria-invalid", "true"),
                this._attr(this.dom.root, "aria-errormessage", this.dom.explanation.id);
                var i = this._element({
                    role: "alert"
                });
                this._element({
                    graphic: "field-warning",
                    parentNode: i,
                    class: "shibui-form-warning-graphic"
                });
                var n = this._attr(this.dom.control, "data-validation") || "required",
                    s = this._element({
                        tag: "span",
                        parentNode: i,
                        label: "field.validation." + n,
                        wrapper: !1
                    }),
                    o = this._attr(this.dom.control, "aria-label");
                o && (this.access(s, "visual"), this._element({
                    tag: "span",
                    parentNode: i,
                    html: "⚠️ " + o + ": " + s.innerHTML,
                    attributes: {
                        "data-access": "spoken"
                    },
                    wrapper: !1
                })),
                this.explain({
                    html: i.outerHTML
                })
            }
            t || this.dom.control.setCustomValidity(this.dom.explanation.innerText),
            this._dispatchFieldEvent("validity", {
                validity: t
            })
        }
        return delete this._.validating, this._.validity = t
    }, s._onInvalidControl = function(t) {
        o.stop(t),
        this._.validating || this._setValidity(!1)
    }, n
}),
define("text!shibui/svg/tick.svg", [], function() {
    return "<svg viewBox='0 0 64 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n  <g stroke='#000000' stroke-width='5' fill='none' fill-rule='evenodd' stroke-linecap='round' class='icon-hollow'>\n    <path d='M15,38.0591818 L25.2922068,47.7559046 C25.6913541,48.1319581 26.2730601,48.0725291 26.5945962,47.6187735 L49,16' />\n  </g>\n</svg>\n"
}),
define("shibui/src/components/form-switch", ["require", "common", "./form-control", "shibui/src/haptics", "text!shibui/svg/tick.svg"], function(t) {
    var e = t("common"),
        i = t("./form-control"),
        n = i.new(),
        s = n.prototype,
        o = t("shibui/src/haptics");
    return s._graphic("tick", t("text!shibui/svg/tick.svg")), s.switch = function(t) {
        var e = this._prepare().control;
        "undefined" == typeof t ? e.checked = !e.checked : e.checked = !!t
    }, s.switchOn = function() {
        this.switch(!0)
    }, s.switchOff = function() {
        this.switch(!1)
    }, s.isOn = function() {
        return !!this._prepare().control.checked
    }, s.isOff = function() {
        return !this.isOn()
    }, s._layout = function(t) {
        i.prototype._layout.apply(this, arguments);
        var n = {
            tag: "input",
            id: !0,
            attributes: e.absorb(this.options.attributes, {
                type: "checkbox",
                name: this.options.name,
                value: this.options.value,
                checked: this.options.isOn ? "checked" : null
            })
        };
        this._classify(t.root, "shibui-form-switch"),
        this._build("", {
            extending: t,
            element: t.core,
            extensionClass: "shibui-form-switch"
        }, " target", "  control", n, "  face", {
            id: !0
        }, "   tick", {
            icon: "tick"
        }),
        this._attr(t.control, "data-halo-delegate", t.face.id),
        this.options.disabled && this.disable()
    }, s._onChangeControl = function(t) {
        this._defer(o.impact.bind(o, "light")),
        i.prototype._onChangeControl.apply(this, arguments)
    }, s._fieldEventData = function() {
        var t = this.isOn();
        return {
            field: this,
            on: t,
            off: !t
        }
    }, n
}),
define("shibui/src/components/form-switch-radio", ["require", "common", "./form-switch"], function(t) {
    var e = t("common"),
        i = t("./form-switch"),
        n = i.new(),
        s = n.prototype;
    return s._expandOptions = function(t) {
        return t.attributes = e.absorb({
            type: "radio"
        }, t.attributes || {}), i.prototype._expandOptions.call(this, t)
    }, s._layout = function(t) {
        i.prototype._layout.apply(this, arguments),
        this._classify(t.root, "shibui-form-switch-radio")
    }, n
}),
define("bifocal/themes/read/default/src/parts/mark-highlight-colors", ["require", "common", "core/src/view", "shibui/src/components/form-switch-radio"], function(t) {
    var e = t("common"),
        i = t("core/src/view"),
        n = i.new(),
        s = n.prototype,
        o = t("shibui/src/components/form-switch-radio");
    return s.COLOR_GROUPS = {
        Y: "#FFB",
        R: "#FFE0EC",
        G: "#DFC"
    }, s.BANK_KEY = "mark:highlight:color", s.loadActiveColor = function() {
        this._prepare(),
        this.setActiveColor(BIF.bank.title.get(this.BANK_KEY) || "Y")
    }, s.setActiveColor = function(t) {
        var i = this.dom["color" + t];
        i ? (i.switchOn(), this._onColorChange({
            colorGroup: t,
            colorHex: this.COLOR_GROUPS[t]
        })) : e.each(this.dom, function(t, e) {
            "function" == typeof e.switchOff && e.switchOff()
        })
    }, s._layout = function() {
        this.dom = this._build("mark-highlight-colors"),
        e.each(this.COLOR_GROUPS, function(t, e) {
            var i = this.dom["color" + t] = new o({
                parentNode: this.dom.root,
                name: "color",
                value: t,
                label: "a11y.highlight.color." + t
            });
            i.on("form:field:change", this._onColorChange.bind(this, {
                colorHex: e,
                colorGroup: t
            }))
        }, this)
    }, s._onColorChange = function(t) {
        this.value = t,
        BIF.bank.title.set(this.BANK_KEY, this.value.colorGroup),
        this._dispatch("highlight:color", this.value)
    }, n
}),
define("shibui/src/components/form-input", ["require", "common", "./form-control", "gala"], function(t) {
    var e = t("common"),
        i = t("./form-control"),
        n = i.new(),
        s = n.prototype,
        o = t("gala");
    return s.DEFAULT_LINES_COUNT = 4, s.setValue = function(t) {
        var e = i.prototype.setValue.apply(this, arguments);
        return this._updateCharCount(), e
    }, s._layout = function(t) {
        i.prototype._layout.apply(this, arguments),
        this.options.form || this._swapElement(t.root, {
            tag: "form",
            attributes: {
                methods: "GET",
                action: "#"
            }
        });
        var n = e.absorb(this.options.control, {});
        n.classes = e.flatten(["shibui-form-input-control", n.classes || []]).join(" ").trim(),
        n.id = n.id || !0,
        n.attributes = e.absorb(this.options.attributes, {});
        var s = this.options.type || (this.options.lines > 1 ? "textarea" : "text");
        "textarea" == s ? (n.tag = "textarea", n.attributes.rows = this.options.lines || this.DEFAULT_LINE_COUNT) : (n.tag = "input", n.attributes.type = s),
        this.options.placeholder && (n.attributes.placeholder = this._phrase(this.options.placeholder), this.options.label || n.attributes["aria-label"] || (n.attributes["aria-label"] = n.attributes.placeholder)),
        this.options.required && (n.attributes = e.absorb(n.attributes, {
            required: !0,
            pattern: ".*[^\\s]+.*"
        })),
        n.attributes.minlength = this.options.minlength,
        n.attributes.maxlength = this.options.maxlength,
        this._classify(t.root, "shibui-form-input"),
        this._build("", {
            extending: t,
            element: t.core,
            extensionClass: "shibui-form-input"
        }, " rim", {
            id: !0
        }, "  control", n, "  char-length", {
            skip: !this.options.maxlength || !this.options.showLimit
        }, "   char-count <span>", {
            html: "0"
        }, "   <span>", {
            html: " / "
        }, "   char-limit <span>", {
            html: "" + this.options.maxlength
        }),
        this._attr(t.control, "data-halo-delegate", t.rim.id),
        this._attr(t.rim, "data-halo-states", "active"),
        this._classify(t.root, "shibui-form-input-with-char-length", !!t.charLength)
    }, s._afterLayout = function(t) {
        i.prototype._afterLayout.apply(this, arguments),
        this.setValue(this.options.value || "")
    }, s._listen = function(t, e) {
        i.prototype._listen.apply(this, arguments),
        this._handle("input", e.control),
        this._handle("keydown", e.control),
        t.onSubmitForm = o.on(this.options.form || e.root, "submit", this._onSubmitForm.bind(this)),
        t.onResetForm = o.on(this.options.form || e.root, "reset", this._onResetForm.bind(this)),
        "undefined" != typeof APP && APP.keyboardFocus && APP.keyboardFocus.track(e.control)
    }, s._onInputControl = function(t) {
        this._dispatchFieldEvent("change:immediate"),
        this._updateCharCount(),
        this._defer("validation", this.validate.bind(this, {
            ambient: !0
        }), 500)
    }, s._onKeydownControl = function(t) {
        9 == t.keyCode ? this._dispatchFieldEvent("tab", {
            event: t
        }) : 13 == t.keyCode && this._dispatchFieldEvent("enter", {
            event: t
        })
    }, s._onSubmitForm = function(t) {
        t.preventDefault(),
        this._dispatchFieldEvent("submit")
    }, s._onResetForm = function(t) {
        this.focus(),
        this._dispatchFieldEvent("reset")
    }, s._updateCharCount = function() {
        if (this.dom && this.dom.charCount) {
            var t = this.dom.control.value.length;
            this._textify(this.dom.charCount, {
                html: "" + t
            });
            var e = !t,
                i = this.dom.charLength.classList.contains("is-invisible");
            e !== i && this._classify(this.dom.charLength, "is-invisible", e)
        }
    }, s._fieldEventData = function() {
        return {
            field: this,
            value: this.value(),
            validity: this._.validity,
            control: this.dom.control
        }
    }, n
}),
define("bifocal/themes/read/default/src/parts/mark-edit-dialog", ["require", "common", "./dialog", "./mark-highlight-colors", "shibui/src/components/form-input"], function(t) {
    var e = t("common"),
        i = t("./dialog"),
        n = i.new(),
        s = n.prototype,
        o = t("./mark-highlight-colors"),
        r = t("shibui/src/components/form-input");
    return s.become = function(t) {
        this.mark = t,
        this.meta = t.meta(),
        this._.originalNote = this.mark.note || "";
        var i = this.shade({
            bearing: "n",
            classes: "mark-edit-shade",
            constrainToContentHeight: "once",
            heading: {
                label: "marks.mark-type",
                substitutions: {
                    MARK_TYPE: this.mark.type
                }
            }
        });
        e.DataClass.set(this.dom.root, "mark-type", this.mark.type),
        this._textify(this.dom.excerptColor, {
            html: this.mark.excerpt ? e.safe(this.mark.excerpt) : ""
        }),
        e.DataClass.set(this.dom.excerptColor, "mark-color", this.meta.colorGroup),
        this.dom.noteInput.setValue(this._.originalNote),
        this.dom.colors.setActiveColor(this.meta.colorGroup),
        this._checkForChanges(),
        i.grow()
    }, s._layout = function() {
        this.dom = this._build("mark-edit-dialog", " details <form>", "  excerpt", "   excerpt-color <span>", "  note", "   note-input", {
            construct: r,
            with: {
                lines: 2,
                placeholder: "marks.edit.note.placeholder",
                label: "marks.edit.note.placeholder"
            }
        }, "  controls", "   colors", o, "   remove-button", {
            button: !0,
            spoken: "marks.mark-remove"
        }, "    remove-icon", {
            icon: "trash"
        })
    }, s._listen = function(t) {
        this._handle("form:field:change:immediate", this.dom.noteInput),
        this._handle("highlight:color", this.dom.colors),
        this._handle("shade:resize")
    }, s._onFormFieldChangeImmediateNoteInput = function(t) {
        this._checkForChanges(),
        this._defer("mark-note", this._updateMarkNote.bind(this), 200)
    }, s._onHighlightColorColors = function(t) {
        t.m.colorGroup != this.mark.colorGroup && (this._.originalNote = this.mark.uuid, this._checkForChanges()),
        BIF.objects.marksManager.setMarkColor(this.mark, t.m.colorGroup),
        e.DataClass.set(this.dom.excerptColor, "mark-color", t.m.colorGroup)
    }, s._onTapRemoveButton = function() {
        return this.mark.note ? (this.dom.confirm = this._build("mark-edit-dialog-remove-confirm", {
            parentNode: this.dom.root
        }, " prompt {marks.mark-remove.confirm}", " answers", "  confirm-remove {marks.mark-remove.confirm.yes} .shibui-button", {
            button: this._onTapConfirmRemove.bind(this)
        }, "  cancel-remove {marks.mark-remove.confirm.no} .shibui-button", {
            button: this._onTapCancelRemove.bind(this)
        }).root, this._classify(this.dom.root, "is-confirming-remove"), this._.shade.options.constrainToContentHeight = !0, void this._.shade.grow()) : this._onTapConfirmRemove()
    }, s._onTapConfirmRemove = function() {
        this._defer("mark-note"),
        BIF.objects.marksManager.removeMark(this.mark),
        this.shade().minimize()
    }, s._onTapCancelRemove = function() {
        this.dom.confirm.parentNode.removeChild(this.dom.confirm),
        delete this.dom.confirm,
        this._declassify(this.dom.root, "is-confirming-remove"),
        this._.shade.options.constrainToContentHeight = "once",
        this._.shade.grow()
    }, s._checkForChanges = function() {
        var t = "marks.edit.done";
        this.dom.noteInput.value() != this._.originalNote && (t += ".changed"),
        this._textify(this._.shade.dom.hideButton, t)
    }, s._updateMarkNote = function() {
        this._defer("mark-note"),
        BIF.objects.marksManager.setMarkNote(this.mark, this.dom.noteInput.value())
    }, s._onShadeResize = function(t) {
        if (t.m.shade === this._.shade) {
            var e = this._.shade.dom.scroller,
                i = this.dom.noteInput.dom.control,
                n = e.scrollHeight - i.offsetHeight,
                s = t.m.scrollMaxHeight - n;
            Math.abs(s - i.offsetHeight) > 5 && (i.style.height = s + "px")
        }
    }, n
}),
define("text!bifocal/themes/read/default/svg/marks.svg", [], function() {
    return '<svg viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg">\n  <g stroke-width="3" fill="none" stroke-linecap="round">\n    <path d="M21,14 C21,13.8954305 21.8896739,13 22.991155,13 L41.008845,13 C42.1085295,13 43,13.8877296 43,14" stroke="#000000" class="icon-hollow" />\n    <path d="M15,29.8967091 C15,28.1823946 16.3433124,26.7926683 18.0023584,26.7926683 L45.9976416,26.7926683 C47.6557983,26.7926683 49,28.1805833 49,29.8967091 L49,48.3155611 C49.0000049,49.972418 47.6568569,51.315566 46,51.315566 C45.4317823,51.315566 44.8752487,51.1541937 44.3951683,50.8502296 C36.5866281,45.9062329 32.4914637,43.4366999 32.1096752,43.4416306 C31.7944943,43.4457012 27.6189869,45.943967 19.583153,50.936428 C18.1757915,51.8107723 16.3261004,51.3786897 15.4517461,49.9713344 C15.1564748,49.4960677 15,48.9476967 15,48.3881758 L15,29.8967091 L15,29.8967091 Z" stroke="#000000" class="icon-hollow" />\n    <path d="M18,22 C18,20.3431458 19.3504982,19 20.9964905,19 L43.0035095,19 C44.6584255,19 46,20.3465171 46,22" stroke="#000000" class="icon-hollow" />\n  </g>\n</svg>\n'
}),
define("bifocal/themes/read/default/src/features/marks", ["require", "../parts/nav-action-item", "../parts/marks-manager", "../parts/marks-dialog", "../parts/mark-edit-dialog", "text!../../svg/marks.svg"], function(t) {
    var e = t("../parts/nav-action-item"),
        i = t("../parts/marks-manager"),
        n = t("../parts/marks-dialog"),
        s = t("../parts/mark-edit-dialog");
    return function(o) {
        return o.runsheet.append(["bifocal:command:register", "registerMarksCommand"], ["bifocal:command:register", "registerMarkEditCommand"], ["bifocal:reader:ready", "loadMarksManager"], ["bifocal:reader:ready", "loadMarksAction"]), o.registerMarksCommand = function(t) {
            t.m.commands.register({
                group: "dialogs",
                name: "marks",
                label: "a11y.action.marks",
                shortcut: "shift-M",
                callback: function() {
                    (new n).shade().grow()
                }
            })
        }, o.registerMarkEditCommand = function(t) {
            t.m.commands.register({
                name: "mark-edit",
                callback: function(t) {
                    (new s).become(t)
                }
            })
        }, o.loadMarksManager = function() {
            BIF.objects.marksManager = new i
        }, o.loadMarksAction = function() {
            var i = new e;
            i._graphic("marks", t("text!../../svg/marks.svg")),
            BIF.objects.navigation.dom.actions.add(i.connect("marks"))
        }, !0
    }
}),
define("bifocal/themes/listen/default/src/features/marks", ["require", "../parts/marks-manager", "../parts/bookmark-button", "../../../../read/default/src/features/marks"], function(t) {
    var e = t("../parts/marks-manager"),
        i = t("../parts/bookmark-button");
    return function(n) {
        return t("../../../../read/default/src/features/marks")(n), n.runsheet.prepend(["bifocal:command:register", "registerBookmarkCommand"]), n.runsheet.append(["bifocal:spool:prepared", "loadMarksManager"], ["bifocal:spool:prepared", "loadBookmarkButton"], ["bifocal:spool:prepared", "loadMarksAction"]), n.registerBookmarkCommand = function(t) {
            t.m.commands.register(function() {
                var t = BIF.objects.marksManager,
                    e = !(!t || !t._.activeMark);
                return {
                    group: "access",
                    name: "bookmark",
                    label: "bookmark." + (e ? "edit" : "add"),
                    shortcut: "shift-B",
                    callback: function() {
                        t.startRecording(),
                        t.stopRecording()
                    }
                }
            })
        }, n.loadMarksManager = function() {
            BIF.objects.marksManager = new e
        }, n.loadBookmarkButton = function() {
            BIF.objects.navigation.dom.actions.add(new i)
        }, !0
    }
}),
define("bifocal/themes/listen/default/src/parts/sleep-timer", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.$init = function() {
        BIF.events.on("bifocal:jumping", this._onBifocalJumping.bind(this)),
        BIF.events.on("bifocal:seeker:place", this._onBifocalSeekerPlace.bind(this)),
        BIF.events.on(document, "visibilitychange", this._onDocumentVisibilityChange.bind(this))
    }, n.supportsSleepAtPosition = function() {
        return !BIF.objects.shell || !BIF.objects.shell.info || BIF.objects.shell.has("audio:sleep-at-position")
    }, n.minutesLeftInChapter = function() {
        return Math.ceil(this.millisecondsLeftInChapter() / 6e4)
    }, n.millisecondsLeftInChapter = function() {
        var t = BIF.objects.compass.place;
        if (!t.chapter)
            return -1;
        var e,
            i = t.bookMilliseconds;
        try {
            e = t.chapter.next.place.bookMilliseconds,
            e - i < 1e3 && (e = t.chapter.next.next.place.bookMilliseconds)
        } catch (t) {
            e = BIF.objects.spool.durationMilliseconds
        }
        return e - i
    }, n.armSleepToMinutes = function(t) {
        if (t < 1)
            return this.disarmSleep();
        var i = 60 * t * 1e3;
        this.sleepTarget = {
            minutes: t,
            timestamp: e.epochMilliseconds() + i,
            timer: setInterval(this.checkWatch.bind(this), 1e3)
        },
        BIF.events.dispatch("bifocal:audio:sleep", {
            in: i
        }),
        BIF.objects.activity.record("audio-sleep", {
            in: i
        }),
        this.checkWatch()
    }, n.armSleepToChapter = function() {
        var t = BIF.objects.compass.place;
        this.sleepTarget = {
            chapter: t.chapter,
            spool: t.bookMilliseconds + this.millisecondsLeftInChapter()
        },
        BIF.events.dispatch("bifocal:audio:sleep", {
            at: this.sleepTarget.spool
        }),
        BIF.objects.activity.record("audio-sleep", {
            at: this.sleepTarget.spool
        }),
        this._checkWatchAtPlace(t)
    }, n.disarmSleep = function() {
        this.sleepTarget && (BIF.events.dispatch("bifocal:audio:sleep", {
            cancel: !0
        }), BIF.objects.activity.record("audio-sleep", {
            cancel: !0
        }), this._resetSleepTarget())
    }, n.checkWatch = function() {
        this.sleepTarget && this._checkWatchAtPlace(BIF.objects.compass.place)
    }, n._checkWatchAtPlace = function(t) {
        if (this.sleepTarget) {
            var i;
            this.sleepTarget.minutes ? i = this.sleepTarget.timestamp - e.epochMilliseconds() : this.sleepTarget.chapter && (i = this.sleepTarget.spool - t.bookMilliseconds);
            var n = {};
            n.milliseconds = Math.max(i, 0),
            n.seconds = Math.ceil(n.milliseconds / 1e3),
            n.minutes = n.seconds >= 60 ? Math.ceil(n.seconds / 60) : 0,
            n.chapter = this.sleepTarget.chapter,
            BIF.events.dispatch("bifocal:audio:sleep:countdown", n),
            n.milliseconds || this._resetSleepTarget()
        }
    }, n._resetSleepTarget = function() {
        clearTimeout(this.sleepTarget.timer),
        this.sleepTarget = null,
        BIF.events.dispatch("bifocal:audio:sleep:countdown")
    }, n._onBifocalSeekerPlace = function(t) {
        if (this.sleepTarget)
            return "seek" == t.m.mode && this.sleepTarget.chapter && this.sleepTarget.chapter != t.m.place.chapter ? this.disarmSleep() : void ("seek" != t.m.mode && this._checkWatchAtPlace(t.m.place))
    }, n._onBifocalJumping = function(t) {
        if (this.sleepTarget && this.sleepTarget.chapter) {
            var i = e.try(t.m, "placeDestination");
            i && i.chapter != this.sleepTarget.chapter && this.disarmSleep()
        }
    }, n._onDocumentVisibilityChange = function(t) {
        this.checkWatch()
    }, i
}),
define("shibui/src/components/form-slider", ["require", "common", "./form-control", "gala", "shibui/src/haptics"], function(t) {
    var e = t("common"),
        i = t("./form-control"),
        n = i.new(),
        s = n.prototype,
        o = t("gala"),
        r = t("shibui/src/haptics");
    return s.THUMB_PX = 30, s.value = function() {
        return parseFloat(this._prepare().control.value) || 0
    }, s.setValue = function(t) {
        var i = this._prepare().control,
            n = i.value;
        i.value = Math.round(t / this.options.step) * this.options.step;
        var s = parseFloat(i.value);
        return s === n || e.try(this._.grip, "captured") || this._defer("update", this._updateDisplayOfValue.bind(this), 20), s
    }, s.setValueAsPercentage = function(t) {
        var e = this.options || {},
            i = Math.max(0, Math.min(1, t)),
            n = e.min + (e.max - e.min) * i,
            s = this.value(),
            o = this.setValue(n);
        return o !== s && this._changeOfPercentage(100 * i), o
    }, s.changeScale = function(t) {
        var i = function(e) {
            "number" == typeof t[e] ? this._attr(this.dom.control, e, t[e]) : t[e] = parseFloat(this._attr(this.dom.control, e) || 0)
        }.bind(this);
        if (e.each(["min", "max", "step"], i), this._textify(this.dom.steps), (t.max - t.min) / t.step <= 50)
            for (var n = t.min; n <= t.max; n += t.step)
                this._element({
                    classes: "shibui-form-slider-step",
                    parentNode: this.dom.steps
                });
        e.absorb(t, this.options),
        "number" == typeof t.value ? this.setValue(t.value) : this._defer("update", this._updateDisplayOfValue.bind(this))
    }, s._expandOptions = function(t) {
        return t = i.prototype._expandOptions.call(this, e.absorb(t, {
            min: 0,
            max: 100,
            step: 1,
            haptics: !0
        })), "number" != typeof t.value && (t.value = t.min), t
    }, s._layout = function(t) {
        i.prototype._layout.apply(this, arguments);
        var n = e.absorb(this.options.control, {});
        n.tag = "input",
        n.id = !0,
        n.attributes = e.absorb(n.attributes, {}),
        n.attributes.type = "range",
        n.classes = n.classes || "halo",
        this._classify(t.root, "shibui-form-slider"),
        this._declassify(t.explanation, "shibui-form-field-description"),
        this._build("", {
            extending: t,
            element: t.core,
            extensionClass: "shibui-form-slider"
        }, " range", "  control", n, "  track", {
            id: !0,
            access: "visual"
        }, "   above", "   below", "    needle", "   steps"),
        this._attr(t.control, "data-halo-delegate", t.track.id),
        this.changeScale(this.options)
    }, s._listen = function(t, e) {
        i.prototype._listen.apply(this, arguments),
        this._handle("input", e.control),
        this.options.gripAxis ? (t.grip = {
            start: o.on(e.control, "touchstart", this._onGripStart.bind(this)),
            move: o.on(e.control, "touchmove", this._onGripMove.bind(this)),
            end: o.on(e.control, "touchend", this._onGripEnd.bind(this)),
            cancel: o.on(e.control, "touchcancel", this._onGripCancel.bind(this))
        }, o.setTouchAction(e.control, "pan-" + this.options.gripAxis)) : o.setTouchAction(e.control, "manipulation"),
        this.options.haptics && r.prepare()
    }, s._changeOfPercentage = function(t) {
        this.options.haptics && (t % 100 ? r.select() : r.impact("light")),
        this._defer(this._dispatchFieldEvent.bind(this, "change:immediate"))
    }, s._onInputControl = function(t) {
        this._changeOfPercentage(this._updateDisplayOfValue())
    }, s._onChangeControl = function(t) {
        this._defer("update", this._updateDisplayOfValue.bind(this)),
        i.prototype._onChangeControl.apply(this, arguments)
    }, s._updateDisplayOfValue = function() {
        var t = this.value(),
            e = (t - this.options.min) / (this.options.max - this.options.min);
        this._updateDisplayToPercentage(e)
    }, s._updateDisplayToPercentage = function(t) {
        this._defer("update");
        var i = this.value();
        t *= 100,
        e.prefixProperty(this.dom.below.style, "transform", "translate3d(" + (t - 100) + "%,0,0)");
        var n = Math.ceil(this.dom.needle.offsetWidth / this.dom.below.offsetWidth * 50);
        this.options.separateMinAndMax && (this._classify(this.dom.root, "is-min", 0 === t), this._classify(this.dom.root, "is-max", 100 === t), n *= t % 100 ? 1 : 2);
        for (var s = 0, o = this.dom.steps.children, r = this.options.min; r <= this.options.max; r += this.options.step) {
            var a = o[s],
                c = (r - this.options.min) / (this.options.max - this.options.min) * 100;
            c += .05 * (c - 50);
            var l = Math.abs(c - t);
            this._classify(a, "is-above", r > i),
            this._classify(a, "is-adjacent", l < n + 5),
            this._classify(a, "is-within", l < n),
            s += 1
        }
        return t
    }, s._fieldEventData = function() {
        return {
            field: this,
            value: this.value(),
            validity: this._.validity,
            control: this.dom.control
        }
    }, s._onGripStart = function(t) {
        var e = this._.grip = {
            originalValue: this.value()
        };
        o.stop(t),
        this._gripAddEvent(e, t),
        this._gripApplyToAxis(e)
    }, s._onGripMove = function(t) {
        this._.grip && (o.stop(t), this._gripAddEvent(this._.grip, t), this._gripApplyToAxis(this._.grip))
    }, s._onGripEnd = function(t) {
        this._.grip && (o.stop(t), this._updateDisplayOfValue(), this._defer("announce", this._dispatchFieldEvent.bind(this, "change")), delete this._.grip)
    }, s._onGripCancel = function(t) {
        this._.grip && (this.value() != this._.grip.originalValue && (this.setValue(this._.grip.originalValue), this._defer("announce", this._dispatchFieldEvent.bind(this, "change"))), delete this._.grip)
    }, s._gripAddEvent = function(t, e) {
        var i = e.touches[0].pageX - window.pageXOffset,
            n = e.touches[0].pageY - window.pageYOffset;
        t.rect || (t.rect = this.dom.track.getBoundingClientRect()),
        i -= t.rect.left,
        n -= t.rect.top,
        "number" != typeof t.xStart && (t.xStart = i, t.yStart = n),
        t.x = i,
        t.y = n,
        t.xPercent = Math.max(0, Math.min(1, i / t.rect.width)),
        t.yPercent = Math.max(0, Math.min(1, n / t.rect.height))
    }, s._gripApplyToAxis = function(t) {
        var e = t[this.options.gripAxis + "Percent"];
        this.setValueAsPercentage(e),
        this._updateDisplayToPercentage(e)
    }, n
}),
define("bifocal/themes/read/default/src/parts/playback-rate-dialog", ["require", "common", "./dialog", "shibui/src/components/form-slider"], function(t) {
    var e = t("common"),
        i = t("./dialog"),
        n = i.new(),
        s = n.prototype,
        o = t("shibui/src/components/form-slider");
    return s.DIALOG_HEADING = {
        label: "playback-rate.heading"
    }, s.DIALOG_BEARING = "n", s.DIALOG_CLASSES = "playback-rate-shade", s.DIALOG_OPTIONS = {
        constrainToContentHeight: !0
    }, s.COMPACT_PX = 400, s.IDEAL_PX = 440, s.LABEL_PREFIX = "playback-rate", s.SLIDER_MIN = .6, s.SLIDER_MAX = 3, s.SLIDER_STEP = .05, s.SLIDER_VALUE = 1, s.PRESETS = [1, 1.25, 1.5, 1.75, 2], s._layout = function() {
        this.dom = this._build("slider-dialog", {
            classes: this.LABEL_PREFIX + "-dialog"
        }, " left", "  current", "   <h3>", {
            label: this.LABEL_PREFIX + ".current"
        }, "   current-status", "    current-icon", {
            icon: this.LABEL_PREFIX
        }, "    current-value", "  presets", "   <h3>", {
            label: this.LABEL_PREFIX + ".presets"
        }, "   preset-list <ul>", " right", "  <h3>", {
            label: this.LABEL_PREFIX + ".slider"
        }, "  control", "   slider", {
            construct: o,
            with: {
                min: this.SLIDER_MIN,
                max: this.SLIDER_MAX,
                step: this.SLIDER_STEP,
                value: this.SLIDER_VALUE,
                control: {
                    spoken: "a11y." + this.LABEL_PREFIX + ".slider"
                },
                explanation: {
                    spoken: "a11y." + this.LABEL_PREFIX + ".slider.explanation"
                },
                gripAxis: "y"
            }
        })
    }, s._listen = function(t) {
        this._listenToShade(),
        this._handle("bifocal:audio:playbackrate"),
        this._handle("form:field:change", this.dom.slider),
        this._handle("form:field:change:immediate", this.dom.slider),
        this._populatePresets(this.dom.presetList)
    }, s._listenToShade = function() {
        this._.shade && this._.shade.on("shade:visible", this._onVisibleShade.bind(this))
    }, s._populatePresets = function(t) {
        e.each(this.PRESETS, function(e) {
            var i = "playback-rate.value";
            1 == e && (i += ".normal"),
            this._build("slider-preset <li>", {
                parentNode: t
            }, " button", {
                button: this._onTapPreset.bind(this, e),
                label: i,
                substitutions: {
                    VALUE: e
                },
                spoken: {
                    label: "a11y.playback-rate.preset",
                    substitutions: {
                        PRESET: this._a11yValue(e)
                    }
                },
                attributes: {
                    "data-preset-value": e
                }
            })
        }, this)
    }, s._onBifocalAudioPlaybackrate = function(t) {
        this._updateSliderToValue(t.m),
        this._textify(this.dom.currentValue, {
            label: "playback-rate.value",
            substitutions: {
                VALUE: t.m
            },
            spoken: "a11y.playback-rate.value"
        })
    }, s._onTapPreset = function(t, e) {
        this._onValueChanged(t)
    }, s._onFormFieldChangeSlider = function(t) {
        this._.updateSlider = !1,
        this._onValueChanged(t.m.value)
    }, s._onFormFieldChangeImmediateSlider = function(t) {
        this._.updateSlider = !1,
        this._onValueChanged(t.m.value)
    }, s._onVisibleShade = function(t) {
        var e = Math.min(.6 * window.innerHeight, this.IDEAL_PX);
        this._lockContentHeight(e)
    }, s._onValueChanged = function(t) {
        this._setCurrentPreset(t),
        this.dom.slider.dom.control.setAttribute("aria-valuetext", this._a11yValue(t)),
        this._defer("playback-rate", function() {
            this._.updating = !0,
            BIF.events.dispatch("bifocal:audio:playbackrate", t),
            BIF.objects.activity.record("audio-speed", {
                speed: t
            }, !0),
            this._.updating = !1
        }.bind(this))
    }, s._setCurrentPreset = function(t) {
        var i = this.dom.presets.querySelector('[data-preset-value="' + t + '"]');
        e.each(this.dom.presets.querySelectorAll("[data-preset-value]"), function(t) {
            this._attr(t, "aria-current", t == i ? "true" : null)
        }, this)
    }, s._updateSliderToValue = function(t) {
        this._.updateSlider === !1 ? delete this._.updateSlider : (this.dom.slider.setValue(t), this.dom.slider.dom.control.setAttribute("aria-valuetext", this._a11yValue(t)))
    }, s._a11yValue = function(t) {
        return this._phrase({
            label: "a11y." + this.LABEL_PREFIX + ".value",
            substitutions: {
                VALUE: t || 0
            }
        })
    }, s._lockContentHeight = function(t) {
        t = Math.round(t),
        this._classify(this.dom.root, "is-compact", t < this.COMPACT_PX);
        var e = this.dom.slider.dom.root,
            i = t - e.offsetTop + 8;
        e.style.setProperty("width", i + "px"),
        this.dom.root.style.setProperty("height", t + "px")
    }, n
}),
define("bifocal/themes/listen/default/src/parts/sleep-timer-dialog", ["require", "common", "../../../../read/default/src/parts/playback-rate-dialog"], function(t) {
    var e = t("common"),
        i = t("../../../../read/default/src/parts/playback-rate-dialog"),
        n = i.new(),
        s = n.prototype;
    return s.DIALOG_HEADING = {
        label: "sleep-timer.heading"
    }, s.DIALOG_BEARING = "n", s.DIALOG_CLASSES = "sleep-timer-shade", s.LABEL_PREFIX = "sleep-timer", s.SLIDER_MIN = 0, s.SLIDER_MAX = 120, s.SLIDER_STEP = 5, s.SLIDER_VALUE = 0, s.PRESETS = [0, 15, 30, 60], s._layout = function() {
        i.prototype._layout.call(this),
        this.dom.status = new BIF.CLASSES.PlacePhrase(this.dom.currentValue)
    }, s._listen = function() {
        this._listenToShade(),
        this._handle("bifocal:place"),
        this._handle("bifocal:audio:sleep"),
        this._handle("bifocal:audio:sleep:countdown"),
        this._handle("form:field:change", this.dom.slider),
        this._handle("form:field:change:immediate", this.dom.slider),
        this._populatePresets(this.dom.presetList)
    }, s._populatePresets = function(t) {
        var i;
        BIF.objects.sleepTimer.supportsSleepAtPosition() && (i = BIF.objects.sleepTimer.minutesLeftInChapter());
        var n = e.unique(e.flatten(this.PRESETS, [i || 0])).sort(function(t, e) {
            return t - e
        });
        e.each(n, function(e) {
            var n = e === i ? "chapter" : e;
            this._build("slider-preset <li>", {
                parentNode: t
            }, " button", {
                button: this._onTapPreset.bind(this, n),
                classes: "sleep-timer-preset-" + n,
                label: "sleep-timer.minutes",
                spoken: "a11y.sleep-timer.preset",
                substitutions: {
                    MINUTES: e
                },
                attributes: {
                    "data-preset-value": n
                }
            })
        }, this),
        this._updateChapterPreset(),
        this._updateDisplayOfValues({
            minutes: 0,
            seconds: 0
        })
    }, s._onTapPreset = function(t, e) {
        "chapter" == t ? BIF.objects.sleepTimer.armSleepToChapter() : this._onValueChanged(t)
    }, s._onValueChanged = function(t) {
        this._setCurrentPreset(t),
        this.dom.slider.dom.control.setAttribute("aria-valuetext", this._a11yValue(t)),
        t ? BIF.objects.sleepTimer.armSleepToMinutes(t) : BIF.objects.sleepTimer.disarmSleep()
    }, s._onBifocalPlace = function(t) {
        this._updateChapterPreset()
    }, s._onBifocalAudioSleep = function(t) {
        t.m.cancel && this._updateDisplayOfValues({
            minutes: 0,
            seconds: 0
        })
    }, s._onBifocalAudioSleepCountdown = function(t) {
        this._updateDisplayOfValues(t.m)
    }, s._updateChapterPreset = function() {
        if (BIF.objects.sleepTimer.supportsSleepAtPosition()) {
            var t = BIF.objects.sleepTimer.minutesLeftInChapter();
            if (this._.chapterMinutesCache !== t) {
                var e = this.dom.presets.querySelector(".sleep-timer-preset-chapter");
                e && (this._.chapterMinutesCache = t, this._textify(e, {
                    label: "sleep-timer.minutes",
                    spoken: "a11y.sleep-timer.preset",
                    substitutions: {
                        MINUTES: t,
                        END_OF_CHAPTER: !0
                    }
                }))
            }
        }
    }, s._updateDisplayOfValues = function(t) {
        t.hours && (t.minutes = (t.minutes || 0) + 60 * t.hours);
        var e = t.minutes || t.seconds ? t.minutes || 1 : 0;
        if (this.dom.slider.dom.control.setAttribute("aria-valuetext", this._a11yValue(e)), t.minutes || t.seconds) {
            var i = Math.ceil(t.minutes / this.SLIDER_STEP) * this.SLIDER_STEP;
            this.dom.slider.setValue(i),
            this.dom.status.configure({
                preset: "sleep-timer-" + (t.minutes ? "minutes" : "seconds"),
                substitutions: {
                    END_OF_CHAPTER: !!t.chapter
                }
            }),
            this.dom.status.update(t.milliseconds),
            this._classify(this.dom.root, "is-armed")
        } else
            this.dom.slider.setValue(0),
            this.dom.status.configure({
                preset: "sleep-timer-off"
            }),
            this.dom.status.update(0),
            this._declassify(this.dom.root, "is-armed")
    }, s._a11yValue = function(t) {
        return this._phrase({
            label: "a11y.sleep-timer.minutes",
            substitutions: {
                MINUTES: t || 0
            }
        })
    }, n
});
define("bifocal/themes/read/default/src/parts/playback-rate-gesture", ["require", "common", "core/src/view", "shibui/src/components/form-slider", "shibui/src/haptics", "./quirks"], function(t) {
    var e = t("common"),
        i = t("core/src/view"),
        n = i.new(),
        s = n.prototype,
        o = t("shibui/src/components/form-slider"),
        r = t("shibui/src/haptics"),
        a = t("./quirks");
    return s.LABEL_PREFIX = "playback-rate", s.SLIDER_MIN = .6, s.SLIDER_MAX = 3, s.SLIDER_STEP = .05, s.SLIDER_VALUE = .6, s.SLIDE_PX = 12, s.MAGNET_LABEL = {}, s.ENTER_BY_FORCE = a.ask("ios"), s.$init = function(t) {
        this.gripTarget = t,
        this.gripHandlers = BIF.events.onContact(this.gripTarget, {
            start: this._onGripStart.bind(this),
            move: this._onGripMove.bind(this),
            end: this._onGripEnd.bind(this),
            cancel: this._onGripCancel.bind(this)
        })
    }, s._layout = function() {
        this.dom = this._build("slider-gesture", {
            classes: this.LABEL_PREFIX + "-gesture"
        }, " heading", "  <h1>", {
            label: this.LABEL_PREFIX + ".heading",
            classes: "bumper-n"
        }, " container", "  current", "   current-icon", {
            icon: this.LABEL_PREFIX
        }, "   current-value", "  control", "   slider", {
            construct: o,
            with: {
                min: this.SLIDER_MIN,
                max: this.SLIDER_MAX,
                step: this.SLIDER_STEP,
                value: this.SLIDER_VALUE,
                gripAxis: "y"
            }
        }, "  magnet", "   magnet-position", "    magnet-label", this.MAGNET_LABEL, "    magnet-line", "    magnet-disc")
    }, s._listen = function(t) {
        this._handle("bifocal:audio:playbackrate"),
        this._listenForEmergencyExit(t)
    }, s._listenForEmergencyExit = function(t) {
        t.emergencyUp = BIF.events.on(this.dom.root, "pointerup", this._onGripEnd.bind(this)),
        t.emergencyCancel = BIF.events.on(this.dom.root, "pointercancel", this._onGripCancel.bind(this))
    }, s._resize = function() {
        var t = (e.try(this._.grip, "rect") || this.gripTarget.getBoundingClientRect()).bottom;
        this.dom.heading.style.setProperty("height", t + "px"),
        this.dom.container.style.setProperty("top", t + "px"),
        this.dom.container.style.setProperty("bottom", t + "px");
        var i = this.dom.container.offsetHeight;
        this.dom.slider.dom.root.style.setProperty("width", i + "px")
    }, s._positionMagnet = function() {
        this._classify(this.dom.magnet, "hide")
    }, s._onBifocalAudioPlaybackrate = function(t) {
        this._updateCurrentValue(t.m)
    }, s._onValueChanged = function(t) {
        this._updateCurrentValue(t),
        this._defer("playback-rate", function() {
            BIF.events.dispatch("bifocal:audio:playbackrate", t),
            BIF.objects.activity.record("audio-speed", {
                speed: t
            }, !0)
        }, 150)
    }, s._onValueCommitted = function(t) {}, s._updateCurrentValue = function(t) {
        this._textify(this.dom.currentValue, {
            label: "playback-rate.value",
            substitutions: {
                VALUE: t
            }
        })
    }, s._onGripStart = function(t) {
        this._defer("mode"),
        this._.grip = {},
        this._.grip.y = t.pageY - window.pageYOffset,
        this._.grip.rect = this.gripTarget.getBoundingClientRect(),
        this._defer("capture", this._captureGrip.bind(this), 650)
    }, s._onGripMove = function(t) {
        if (this._.grip) {
            var e = t.pageY - window.pageYOffset,
                i = e - this._.grip.y;
            if (this._.grip.captured || (i > this.SLIDE_PX ? this._captureGrip() : this._isForceTouch(t) && (r.impact("light"), this._captureGrip())), this._.grip.tracking = this._.grip.tracking || this._.grip.captured && i > 3 * this.SLIDE_PX, this._.grip.tracking) {
                var n = this._.grip.rect.bottom,
                    s = Math.max(0, Math.min(1, (e - n) / (window.innerHeight - 2 * n))),
                    o = this.dom.slider.setValueAsPercentage(s);
                s > 0 && "number" == typeof this.magnetPercent && Math.abs(s - this.magnetPercent) < this.magnetDiameter ? (s = this.magnetPercent, o = this.magnetValue, this.magnetized || (this.magnetized = !0, this._classify(this.dom.root, "is-magnetized"), r.impact("medium"))) : this.magnetized && (this.magnetized = !1, this._declassify(this.dom.root, "is-magnetized")),
                this.dom.slider._updateDisplayToPercentage(s),
                this._.grip.value !== o && (this._.grip.value = o, this._onValueChanged(o)),
                BIF.events.stop(t)
            }
        }
    }, s._onGripEnd = function(t) {
        this._.grip && (this._.grip.captured && (BIF.events.stop(t), this._onValueCommitted(this._.grip.value), this._releaseGrip()), delete this._.grip)
    }, s._onGripCancel = function(t) {
        this._releaseGrip(),
        delete this._.grip
    }, s._captureGrip = function() {
        this._defer("capture"),
        this._.grip && (this._.grip.captured = !0, this.gripHandlers.capture(), this._enterGesturingMode())
    }, s._releaseGrip = function() {
        this._defer("capture"),
        this._.grip && this._.grip.captured && (this.gripHandlers.release(), this._.grip.captured = !1, this._exitGesturingMode())
    }, s._enterGesturingMode = function() {
        this.impart(BIF.elements.modalLayer),
        this._.grip.value = this._.grip.originalValue = this.dom.slider.value(),
        this._declassify(this.dom.root, "is-magnetized"),
        this._resize(),
        this._positionMagnet(),
        this._dispatch("visible"),
        this.dom.slider.setValueAsPercentage(0),
        this._defer("mode", function() {
            BIF.objects.modeManager.enterMode("gesturing")
        })
    }, s._exitGesturingMode = function() {
        this._defer("mode", function() {
            BIF.objects.modeManager.exitMode("gesturing"),
            this._defer("mode", this.extract.bind(this), 250)
        }.bind(this), 100)
    }, s._isForceTouch = function(t) {
        return this.ENTER_BY_FORCE && t.pressure > .75
    }, n
});
define("bifocal/themes/listen/default/src/parts/sleep-timer-gesture", ["require", "common", "../../../../read/default/src/parts/playback-rate-gesture"], function(t) {
    var e = (t("common"), t("../../../../read/default/src/parts/playback-rate-gesture")),
        i = e.new(),
        n = i.prototype;
    return n.LABEL_PREFIX = "sleep-timer", n.SLIDER_MIN = 0, n.SLIDER_MAX = 120, n.SLIDER_STEP = 5, n.SLIDER_VALUE = 0, n.MAGNET_LABEL = {
        label: "sleep-timer.gesture.end-of-chapter"
    }, n._listen = function(t) {
        this._listenForEmergencyExit(t)
    }, n._onValueChanged = function(t) {
        this.magnetized ? this._classify(this.dom.root, "is-armed") : t ? this._classify(this.dom.root, "is-armed") : this._declassify(this.dom.root, "is-armed"),
        this._textify(this.dom.currentValue, {
            label: "sleep-timer.minutes",
            substitutions: {
                MINUTES: t
            }
        })
    }, n._onValueCommitted = function(t) {
        this.magnetized ? BIF.objects.sleepTimer.armSleepToChapter() : t ? BIF.objects.sleepTimer.armSleepToMinutes(t) : BIF.objects.sleepTimer.disarmSleep()
    }, n._positionMagnet = function() {
        var t = BIF.objects.sleepTimer.minutesLeftInChapter();
        t <= this.SLIDER_MIN || t >= this.SLIDER_MAX ? (delete this.magnetValue, delete this.magnetPercent, delete this.magnetDiameter, this._classify(this.dom.magnet, "hide")) : (this.magnetValue = t, this.magnetDiameter = .75 * this.SLIDER_STEP / this.SLIDER_MAX, this.magnetPercent = t / this.SLIDER_MAX, this.dom.magnetPosition.style.setProperty("top", 100 * this.magnetPercent + "%"), this.dom.magnetPosition.style.setProperty("margin-top", (2 * this.magnetPercent - 1) * -11 + "px"), this._declassify(this.dom.magnet, "hide"))
    }, i
}),
define("text!bifocal/themes/listen/default/svg/sleep-timer.svg", [], function() {
    return "<svg viewBox='0 0 64 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n  <path d='M25.5495447,22.728999 C25.5495447,32.2678591 33.1748182,40.000633 42.5810697,40.000633 C44.851929,40.000633 47.0189862,39.5499382 49.0000071,38.7319421 C46.054636,45.3750782 39.4720722,50 31.8243171,50 C21.4279338,50 13,41.4532499 13,30.9102993 C13,21.2588263 20.062915,13.2802419 29.2331917,11.9999622 C26.9271702,14.9463522 25.5495447,18.6745267 25.5495447,22.728999 Z' stroke='#000000' stroke-width='3' fill='none' fill-rule='evenodd' class='icon-hollow' />\n</svg>\n"
}),
define("bifocal/themes/listen/default/src/parts/sleep-timer-button", ["require", "core/src/view", "./sleep-timer-dialog", "./sleep-timer-gesture", "text!../../svg/sleep-timer.svg"], function(t) {
    var e = t("core/src/view"),
        i = e.new(),
        n = i.prototype,
        s = t("./sleep-timer-dialog"),
        o = t("./sleep-timer-gesture");
    return n._graphic("sleep-timer", t("text!../../svg/sleep-timer.svg")), n.BANK_KEY_PREFERENCE = "sleep:minutes:preference", n._layout = function() {
        this.dom = this._build("sleep-timer .nav-action-item", " button", {
            button: !0
        }, "  icon", {
            icon: "sleep-timer"
        }, "  label .nav-action-item-label {nav.action.sleep-timer}", {
            labeling: "button"
        }, "  readout", {
            describing: "button"
        }, "   status", {
            construct: BIF.CLASSES.PlacePhrase,
            with: {
                classes: "nav-action-status",
                preset: "sleep-timer-off"
            }
        }, " gesture", o),
        this.dom.status.update(0)
    }, n._listen = function() {
        this._handle("bifocal:audio:sleep"),
        this._handle("bifocal:audio:sleep:countdown")
    }, n._onTapButton = function() {
        if (!BIF.objects.sleepTimer.sleepTarget) {
            var t = BIF.bank.global.get(this.BANK_KEY_PREFERENCE);
            if (t)
                return BIF.objects.sleepTimer.armSleepToMinutes(t)
        }
        (new s).shade().grow(),
        BIF.objects.sleepTimer.checkWatch()
    }, n._onBifocalAudioSleep = function(t) {
        var e;
        t.m.in && (e = Math.round(t.m.in / 6e4)),
        BIF.bank.global.set(this.BANK_KEY_PREFERENCE, e)
    }, n._onBifocalAudioSleepCountdown = function(t) {
        t.m.minutes || t.m.seconds ? (this.dom.status.configure({
            preset: "sleep-timer-" + (t.m.minutes ? "minutes" : "seconds"),
            substitutions: {
                END_OF_CHAPTER: !!t.m.chapter
            }
        }), this.dom.status.update(t.m.milliseconds), this._classify(this.dom.root, "is-armed")) : (this.dom.status.configure({
            preset: "sleep-timer-off"
        }), this.dom.status.update(0), this._declassify(this.dom.root, "is-armed"))
    }, i
}),
define("bifocal/themes/listen/default/src/features/sleep", ["require", "../parts/sleep-timer", "../parts/sleep-timer-dialog", "../parts/sleep-timer-button"], function(t) {
    var e = t("../parts/sleep-timer"),
        i = t("../parts/sleep-timer-dialog"),
        n = t("../parts/sleep-timer-button");
    return function(t) {
        return t.runsheet.append(["bifocal:command:register", "registerSleepTimerCommand"], ["bifocal:spool:prepared", "loadSleepTimer"], ["bifocal:spool:prepared", "loadSleepTimerButton"]), t.registerSleepTimerCommand = function(t) {
            t.m.commands.register({
                group: "dialogs",
                name: "sleep-timer",
                label: "sleep-timer.heading",
                shortcut: "shift-T",
                callback: function() {
                    (new i).shade().grow()
                }
            })
        }, t.loadSleepTimer = function() {
            BIF.objects.sleepTimer = new e
        }, t.loadSleepTimerButton = function() {
            BIF.objects.navigation.dom.actions.add(new n)
        }, !0
    }
}),
define("text!bifocal/themes/read/default/svg/playback-rate.svg", [], function() {
    return "<svg viewBox='0 0 64 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n  <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>\n    <path d='M34.6730196,32.6380285 C33.9208235,31.1617606 32.1142964,30.5747843 30.6380285,31.3269804 L30.4548596,31.4284547 L30.2237922,31.5694841 L29.9569702,31.7414761 L29.493491,32.0533986 C26.5926857,34.0434622 20.0318035,39.1460522 20.4169152,39.9018765 C20.8709057,40.792883 31.8857036,37.4252157 33.3619715,36.6730196 C34.8382394,35.9208235 35.4252157,34.1142964 34.6730196,32.6380285 Z' fill='#000000' class='playback-rate-needle icon-solid' />\n    <line x1='6.5' y1='34.5' x2='11.5' y2='34.5' stroke='#000000' stroke-width='3' stroke-linecap='round' class='icon-hollow' />\n    <line x1='14.1152237' y1='16.1152237' x2='17.6507576' y2='19.6507576' stroke='#000000' stroke-width='3' stroke-linecap='round' class='icon-hollow' />\n    <line x1='32.5' y1='8.5' x2='32.5' y2='13.5' stroke='#000000' stroke-width='3' stroke-linecap='round' class='icon-hollow' />\n    <line x1='50.8847763' y1='16.1152237' x2='47.3492424' y2='19.6507576' stroke='#000000' stroke-width='3' stroke-linecap='round' class='icon-hollow' />\n    <line x1='58.5' y1='34.5' x2='53.5' y2='34.5' stroke='#000000' stroke-width='3' stroke-linecap='round' class='icon-hollow' />\n    <line x1='10.3319532' y1='25.3035261' x2='13.0934678' y2='26.4757195' stroke='#000000' stroke-width='3' stroke-linecap='round' class='icon-hollow' />\n    <line x1='23.3277129' y1='12.3219347' x2='24.4515327' y2='15.1034863' stroke='#000000' stroke-width='3' stroke-linecap='round' class='icon-hollow' />\n    <line x1='41.6964739' y1='12.3319532' x2='40.5242805' y2='15.0934678' stroke='#000000' stroke-width='3' stroke-linecap='round' class='icon-hollow' />\n    <line x1='54.6780653' y1='25.3277129' x2='51.8965137' y2='26.4515327' stroke='#000000' stroke-width='3' stroke-linecap='round' class='icon-hollow' />\n    <line x1='54.6680468' y1='43.6964739' x2='51.9065322' y2='42.5242805' stroke='#000000' stroke-width='3' stroke-linecap='round' class='icon-hollow' />\n    <line x1='10.3219347' y1='43.6722871' x2='13.1034863' y2='42.5484673' stroke='#000000' stroke-width='3' stroke-linecap='round' class='icon-hollow' />\n  </g>\n</svg>\n"
}),
define("bifocal/themes/read/default/src/parts/playback-rate-button", ["require", "common", "core/src/view", "quirkbase", "./playback-rate-dialog", "./playback-rate-gesture", "text!../../svg/playback-rate.svg"], function(t) {
    var e = t("common"),
        i = t("core/src/view"),
        n = i.new(),
        s = n.prototype,
        o = t("quirkbase"),
        r = t("./playback-rate-dialog"),
        a = t("./playback-rate-gesture");
    return s._graphic("playback-rate", t("text!../../svg/playback-rate.svg")), s._layout = function() {
        this.dom = this._build("playback-rate .nav-action-item", " button", {
            button: !0
        }, "  icon", {
            icon: "playback-rate"
        }, "  label .nav-action-item-label {nav.action.playback-rate}", {
            labeling: "button"
        }, "  visual-status .nav-action-status", "  spoken-status", {
            access: "spoken",
            describing: "button"
        }, " gesture", a),
        this._defer("dispatch", this._dispatchCurrentRate.bind(this))
    }, s._listen = function() {
        this._handle("visible", this.dom.gesture),
        this._handle("bifocal:audio:playbackrate")
    }, s._onTapButton = function() {
        (new r).shade().grow(),
        delete this._.needles,
        this._dispatchCurrentRate()
    }, s._onVisibleGesture = function() {
        delete this._.needles,
        this._dispatchCurrentRate()
    }, s._onBifocalAudioPlaybackrate = function(t) {
        this._.playbackRate = t.m,
        this._updateStatus(),
        this._updateNeedles()
    }, s._dispatchCurrentRate = function() {
        var t = e.try(BIF, "objects.spool.playbackRate") || e.try(BIF, "objects.audioManager.properties.speechtrack.playbackRate") || 1;
        BIF.events.dispatch("bifocal:audio:playbackrate", t)
    }, s._updateStatus = function() {
        1 == this._.playbackRate ? this._textify(this.dom.visualStatus) : this._textify(this.dom.visualStatus, {
            label: "playback-rate.value",
            substitutions: {
                VALUE: this._.playbackRate
            }
        }),
        this._textify(this.dom.spokenStatus, {
            label: "a11y.playback-rate.value",
            substitutions: {
                VALUE: this._.playbackRate
            }
        })
    }, s._updateNeedles = function() {
        if (this._.needles = this._.needles || document.querySelectorAll(".playback-rate-needle"), this._.needles.length) {
            var t = Math.min(2.175, this._.playbackRate),
                i = Math.min(240, Math.max(0, 180 * (t - .85)));
            e.each(this._.needles, function(e) {
                o("svg-style-transform-unavailable") ? e.setAttribute("transform", "rotate(" + i + " 32 33)") : this._styleTransform(e, "rotate(" + i + "deg)"),
                this._classify(e, "playback-rate-needle-danger", t < this._.playbackRate)
            }, this)
        }
    }, n
}),
define("bifocal/themes/listen/default/src/features/speed", ["require", "../parts/quirks", "../../../../read/default/src/parts/playback-rate-dialog", "../../../../read/default/src/parts/playback-rate-button"], function(t) {
    var e = t("../parts/quirks"),
        i = t("../../../../read/default/src/parts/playback-rate-dialog"),
        n = t("../../../../read/default/src/parts/playback-rate-button");
    return function(t) {
        return !e("playback-rate-locked") && (t.runsheet.append(["bifocal:command:register", "registerPlaybackRateCommand"], ["bifocal:spool:prepared", "loadPlaybackRateAction"]), t.registerPlaybackRateCommand = function(t) {
                t.m.commands.register({
                    group: "dialogs",
                    name: "playback-rate",
                    label: "playback-rate.heading",
                    shortcut: "shift-S",
                    callback: function() {
                        (new i).shade().grow()
                    }
                })
            }, t.loadPlaybackRateAction = function() {
                BIF.objects.navigation.dom.actions.add(new n)
            }, !0)
    }
}),
define("bifocal/themes/read/default/src/parts/history-manager", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.MAX_JOURNEYS = 15, n.COMMIT_JOURNEY_MS = 3e5, n.$init = function() {
        this.journey = null,
        this.earlierJourneys = [],
        this._listen()
    }, n.history = function() {
        var t = BIF.objects.compass.place,
            e = this._indexOfPlaceWithinJourney(t, this.journey),
            i = this.journey ? this.journey.slice() : [];
        return {
            index: e,
            journey: i,
            atEnd: 0 === e && i.length > 1,
            atStart: e === i.length - 1,
            earlierJourneys: this.earlierJourneys.slice(0)
        }
    }, n.commit = function() {
        this.journey && this.journey.length && (this.earlierJourneys.unshift(this.journey), this.earlierJourneys.length = Math.min(this.earlierJourneys.length, this.MAX_JOURNEYS)),
        this.journey = null,
        this._announceHistory()
    }, n.station = function(t) {
        if (this.journey && this.journey.length) {
            if ("back" == t || "forward" == t) {
                var i = BIF.objects.compass.place,
                    n = this._indexOfPlaceWithinJourney(i, this.journey);
                n < 0 && (n = 0),
                t = n + ("back" == t ? 1 : -1)
            }
            return "number" == typeof t ? this.journey[t] : e.among(t, this.journey) ? t : void 0
        }
    }, n.seek = function(t) {
        var e = this.station(t);
        return console.log("[HISTMAN] seeking to station", t, e), e ? (this._.jumpingToStation = e, e.seek()) : "function" == typeof t.seek && t.seek(), e
    }, n.wipe = function() {
        this.journey = null,
        this.earlierJourneys = [],
        this._announceHistory()
    }, n._listen = function() {
        BIF.events.on("bifocal:jumping", this._onJumping.bind(this)),
        BIF.events.on("bifocal:jumped", this._onJumped.bind(this)),
        this._.placeHandler = BIF.events.on("bifocal:place", this._onPlace.bind(this)),
        BIF.events.off(this._.placeHandler)
    }, n._onJumping = function(t) {
        BIF.events.off(this._.placeHandler)
    }, n._onJumped = function(t) {
        var i = e.try(t.m, "placeOrigin"),
            n = BIF.objects.compass.place;
        if (i && i.isSeekable() && !this._isPlaceWithinStation(n, i)) {
            this.journey = this.journey || [];
            var s = this._indexOfPlaceWithinJourney(n, this.journey),
                o = this._indexOfPlaceWithinJourney(i, this.journey);
            (!this._.jumpingToStation || s < 0) && (o && (this.commit(), this.journey = [], s = o = -1), s >= 0 && this.journey.splice(s, 1), o < 0 && this.journey.unshift(i), this.journey.unshift(n)),
            delete this._.jumpingToStation,
            isFinite(this.COMMIT_JOURNEY_MS) && (clearTimeout(this._.commitTimer), this._.commitTimer = setTimeout(this.commit.bind(this), this.COMMIT_JOURNEY_MS)),
            this._announceHistory(),
            BIF.events.on(this._.placeHandler)
        }
    }, n._onPlace = function(t) {
        if (this.journey && this.journey.length) {
            var e = this._indexOfPlaceWithinJourney(t.m.place, this.journey);
            this.journey[0] = t.m.place,
            1 === e && (this.journey.splice(1, 1), this.journey.length <= 1 && (this.journey = null), this._announceHistory())
        }
    }, n._indexOfPlaceWithinJourney = function(t, e) {
        if (!t || !e)
            return -1;
        for (var i = 0, n = e.length; i < n; ++i)
            if (this._isPlaceWithinStation(t, e[i]))
                return i;
        return -1
    }, n._isPlaceWithinStation = function(t, e) {
        return !!e && (e.floc >= t.flocA && e.floc < t.flocZ)
    }, n._announceHistory = function() {
        clearTimeout(this._.announceTimer),
        this._.announceTimer = setTimeout(function() {
            var t = this.history();
            t.journey = t.journey.slice(0),
            t.earlierJourneys = t.earlierJourneys.slice(0),
            console.log("[HISTMAN] bifocal:history", t),
            BIF.events.dispatch("bifocal:history", t)
        }.bind(this), 0)
    }, i
}),
define("bifocal/themes/listen/default/src/parts/history-manager-listen", ["require", "common", "bifocal/themes/read/default/src/parts/history-manager"], function(t) {
    var e = t("common"),
        i = t("bifocal/themes/read/default/src/parts/history-manager"),
        n = i.new(),
        s = n.prototype;
    return s.WITHIN_STATION_MS = 1e3, s._isPlaceWithinStation = function(t, i) {
        if (!i)
            return !1;
        var n = e.try(t, "bookMilliseconds") || 0,
            s = i.bookMilliseconds || 0;
        return Math.abs(n - s) < this.WITHIN_STATION_MS
    }, n
}),
define("text!bifocal/themes/read/default/svg/fingerprint.svg", [], function() {
    return "<svg viewBox='0 0 64 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n  <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>\n    <path d='M15.9315819,20.885791 C15.7132376,21.2275528 15.6252149,21.639262 15.6841929,22.0428652 C15.7431711,22.4465011 15.9450527,22.8139866 16.2515826,23.0757338 C16.5324818,23.2800849 16.8668178,23.3939292 17.2115826,23.402591 C17.4595378,23.4001068 17.7036818,23.3399651 17.9254738,23.2266764 C18.1472626,23.1134204 18.3408658,22.9500246 18.4915826,22.7488767 C19.172229,21.8409656 19.932741,20.998524 20.763589,20.2320767 C23.129221,18.2124918 25.899653,16.7472892 28.879717,15.9397233 C31.859749,15.1321574 34.976901,15.0018721 38.011589,15.5580195 C41.703717,16.1960447 45.180357,17.7693388 48.123589,20.1340195 C48.458949,20.4027615 48.884869,20.5244504 49.307909,20.4723494 C49.730949,20.4202483 50.116549,20.1986065 50.379589,19.856191 C50.642629,19.5137754 50.761669,19.0786305 50.710789,18.6464927 C50.659909,18.2143222 50.442949,17.82059 50.107589,17.5518481 C46.720869,14.8357306 42.711813,13.0470049 38.459589,12.3548195 C34.983749,11.7416028 31.417925,11.924937 28.019941,12.8915516 C24.621957,13.858199 21.476709,15.5839393 18.8115826,17.9440767 C17.7606354,18.8271466 16.7961106,19.8123267 15.9315819,20.885791 Z' fill='#000000' fill-rule='nonzero' transform='translate(33.194306, 17.701295) scale(-1, 1) translate(-33.194306, -17.701295) ' class='icon-solid' />\n    <path d='M49.1933343,36.1500195 C49.6186143,35.3159455 49.8771743,34.4038179 49.9539743,33.4667185 C50.0310943,32.5296191 49.9248543,31.586244 49.6413343,30.6915052 C49.4771743,30.1796143 49.2848543,29.6776598 49.0653343,29.1879624 C47.7555743,26.1552838 45.7216543,23.5068584 43.1499103,21.4853123 C40.5781663,19.463799 37.5508703,18.1338172 34.3453983,17.6172195 C31.0413663,17.0284844 27.6435103,17.3478566 24.5001503,18.5425521 C21.3567903,19.737215 18.5810143,21.7642522 16.4573983,24.4158481 C14.6588287,27.0470808 13.5198911,30.0889441 13.1405055,33.2745592 C12.7611167,36.4601743 13.1528703,39.6921377 14.2813951,42.6871297 C14.4002111,43.1032188 14.6759903,43.4542634 15.0480639,43.6624714 C15.4201343,43.8710063 15.8580383,43.919708 16.2653983,43.798444 C16.6692703,43.6631251 17.0055583,43.3725491 17.2027743,42.9878383 C17.3999903,42.6034543 17.4425503,42.1553331 17.3213983,41.739244 C16.3352863,39.2301251 15.9740063,36.5102815 16.2700063,33.8234831 C16.5660063,31.136652 17.5100063,28.5668358 19.0173983,26.3443052 C20.7862303,24.1664888 23.0914783,22.5096826 25.6956703,21.5445062 C28.2998623,20.5793297 31.1088863,20.3406586 33.8333983,20.8531052 C36.5111903,21.2836415 39.0410463,22.3913603 41.1927903,24.0753937 C43.3445023,25.7594598 45.0496543,27.9663992 46.1533343,30.495391 C46.3133343,30.9203052 46.4733343,31.3125338 46.6013343,31.7374481 C46.8963743,32.7253738 46.8045343,33.7916472 46.3453343,34.7118481 C45.9926943,35.4797009 45.3616543,36.0774572 44.5853343,36.3788195 C43.4417823,36.7328385 42.2102943,36.6414492 41.1287583,36.122302 C40.0472543,35.6031548 39.1924383,34.6930865 38.7293983,33.5678481 C38.2591903,32.0669201 37.4263583,30.711182 36.3077983,29.6257875 C35.1892383,28.5403603 33.8210143,27.7602831 32.3293983,27.3575624 C30.6425823,27.0272732 28.8959263,27.2941194 27.3775903,28.1141386 C25.8592223,28.9341578 24.6598943,30.2583215 23.9773983,31.868191 C23.4117343,34.002993 23.4098463,36.2527507 23.9719263,38.3885334 C24.5340383,40.524316 25.6400223,42.4697697 27.1773983,44.027244 C30.2109343,47.3709926 34.1956063,49.6573583 38.5693983,50.5643868 L38.7933983,50.5643868 C39.2177503,50.5905354 39.6348063,50.4431228 39.9528863,50.1551617 C40.2709343,49.8668737 40.4639263,49.4615708 40.4893983,49.0281583 C40.5148703,48.5947457 40.3707103,48.1688508 40.0886623,47.8439548 C39.8065823,47.5190588 39.4097503,47.321964 38.9853983,47.2958154 C35.3925663,46.4839023 32.1241503,44.5812668 29.6093983,41.8373011 C28.4799903,40.7086634 27.6407903,39.3125258 27.1663263,37.7730287 C26.6918303,36.2335315 26.5966943,34.5982326 26.8893983,33.012191 C27.2873503,32.1637025 27.9385823,31.4660586 28.7493663,31.0196698 C29.5601823,30.573281 30.4887263,30.401158 31.4013983,30.5280767 C32.8093983,30.8549338 34.3133983,31.639391 35.7213983,34.8752767 C36.4916383,36.7699041 37.9391263,38.2939409 39.7697503,39.1378207 C41.6004063,39.9817331 43.6769183,40.0820783 45.5773343,39.418591 C47.1542943,38.8530954 48.4522143,37.6800051 49.1933343,36.1500195 Z' fill='#000000' fill-rule='nonzero' transform='translate(31.489179, 33.948593) scale(-1, 1) translate(-31.489179, -33.948593) ' class='icon-solid' />\n    <path d='M33.57799,43.6677011 C33.57799,43.2342886 33.40935,42.8185263 33.10919,42.5122611 C32.80935,42.2056691 32.40231,42.0334154 31.977894,42.0334154 C25.577894,42.0334154 21.801894,39.5493011 20.585894,34.7118481 C20.479814,34.2784028 20.20951,33.9057857 19.834438,33.6759071 C19.459366,33.4460284 19.010246,33.3777807 18.585894,33.4861338 C18.161542,33.594487 17.796742,33.8706159 17.571686,34.2537251 C17.34663,34.6368344 17.279814,35.0955457 17.385894,35.528991 C18.505894,39.9742154 21.929894,45.3346726 31.881894,45.3346726 C32.102662,45.3484006 32.32391,45.3150611 32.53127,45.2369423 C32.73895,45.1588234 32.92839,45.0375594 33.08775,44.8809948 C33.24711,44.7244303 33.37287,44.5358337 33.45735,44.326972 C33.54151,44.1181103 33.58279,43.8935594 33.57799,43.6677011 Z' fill='#000000' fill-rule='nonzero' transform='translate(25.457507, 39.386758) scale(-1, 1) translate(-25.457507, -39.386758) ' class='icon-solid' />\n    <path d='M32.9781416,25.7559624 C34.9499176,26.1085759 36.8023976,26.9647128 38.3633256,28.2447834 C39.9242856,29.5248867 41.1429736,31.1873148 41.9061416,33.0775624 C42.0979496,33.4624694 42.4311656,33.7541894 42.8328936,33.8889199 C43.2346536,34.0236831 43.6722856,33.9905071 44.0501416,33.7966481 C44.2397736,33.7030035 44.4089576,33.5713128 44.5476776,33.4094204 C44.6862376,33.2475281 44.7918376,33.0587681 44.8574376,32.8543843 C44.9230376,32.6499679 44.9476776,32.4341768 44.9300776,32.2197912 C44.9124776,32.0054383 44.8526376,31.7969361 44.7540776,31.6067052 C43.7623656,29.225649 42.1930856,27.1419347 40.1943016,25.5521016 C38.1955496,23.9622684 35.8332136,22.9188097 33.3301416,22.5200767 C30.7404456,22.0976792 28.0862696,22.4756895 25.7085096,23.6056019 C23.3307496,24.7355144 21.3379496,26.5657183 19.9861416,28.8611052 C16.9781416,34.0908195 17.9061416,43.2754726 26.7061416,52.0025583 C27.0103016,52.2928074 27.4099176,52.456236 27.8261416,52.4601878 C28.1459176,52.4621194 28.4589416,52.3663503 28.7248296,52.1846177 C28.9907176,52.003212 29.1972456,51.744668 29.3177896,51.4419983 C29.4383336,51.1393286 29.4673576,50.8069148 29.4011176,50.4872486 C29.3348776,50.1679091 29.1763816,49.8760257 28.9461416,49.6491868 C21.3621416,42.1641583 20.3701416,34.6464767 22.7381416,30.5280767 C23.8110056,28.8070104 25.3491176,27.4403553 27.1664296,26.5934684 C28.9837416,25.7465489 31.0023656,25.455646 32.9781416,25.7559624 Z' fill='#000000' fill-rule='nonzero' transform='translate(31.685551, 37.406090) scale(-1, 1) translate(-31.685551, -37.406090) ' class='icon-solid' />\n  </g>\n</svg>\n"
}),
define("bifocal/themes/read/default/src/parts/history-dialog", ["require", "common", "./dialog", "text!../../svg/fingerprint.svg"], function(t) {
    var e = t("common"),
        i = t("./dialog"),
        n = i.new(),
        s = n.prototype;
    return s._graphic("fingerprint", t("text!../../svg/fingerprint.svg")), s.DIALOG_HEADING = {
        label: "history.heading"
    }, s.DIALOG_BEARING = "s", s.DIALOG_OPTIONS = {
        constrainToContentHeight: !0
    }, s.ENTRY_LIMIT = 25, s.refresh = function() {
        this._textify(this.dom.entries),
        this._.history = BIF.objects.historyManager.history();
        var t = this._.history.journey.slice(),
            i = {
                showLabels: !0
            };
        if (this._.history.index < 0 ? (t.unshift(BIF.objects.compass.place), i.hereIndex = 0) : i.hereIndex = this._.history.index, this._buildJourney(this.dom.entries, t, i), this._.history.earlierJourneys.length) {
            var n = this._buildPocket(this.dom.entries, {
                label: "history.journey-pocket.label"
            });
            e.each(this._.history.earlierJourneys, this._buildJourney.bind(this, n))
        }
    }, s._layout = function() {
        this.dom = this._build("history-dialog", " entries")
    }, s._listen = function(t) {
        t.impart = this.on("view:impart", this.refresh.bind(this)),
        this._handle("bifocal:history")
    }, s._onBifocalHistory = function(t) {
        this.refresh()
    }, s._buildJourney = function(t, i, n) {
        "object" != typeof n && (n = {});
        var s,
            o = "end",
            r = this._element(t, "history-dialog-journey");
        e.each(i, function(t, a) {
            if (a == n.hereIndex ? o = "here" : o || a + 1 != i.length || (o = "start"), o) {
                var c = this._buildEntry(r, t, {
                    landmark: n.showLabels ? {
                        label: "history.landmark." + o
                    } : null
                });
                e.DataClass.set(c.root, "landmark", o),
                o = null
            } else {
                var l = r;
                if (!n.hereIndex || n.hereIndex + 1 == i.length) {
                    if (!s) {
                        var h = i.length - 2;
                        s = this._buildPocket(r, {
                            label: "history.station-pocket.label",
                            substitutions: {
                                COUNT: h
                            }
                        })
                    }
                    l = s
                }
                this._buildEntry(l, t)
            }
        }, this)
    }, s._buildPocket = function(t, i) {
        var n = this._element({
            parentNode: t,
            classes: "history-dialog-pocket history-dialog-inset"
        });
        this._element(e.absorb(i, {
            parentNode: n,
            button: this._onTapPocket.bind(this),
            classes: "history-dialog-pocket-button"
        }));
        return n
    }, s._onTapPocket = function(t) {
        for (var e = t.tappedElement, i = e.parentNode, n = i.parentNode, s = e.nextSibling; s;)
            n.insertBefore(s, i),
            s = e.nextSibling;
        n.removeChild(i),
        this._remeasure(),
        this._.shade && this._.shade.grow()
    }, s._buildEntry = function(t, i, n) {
        n = e.absorb(n, {}),
        i.isFinite() || i.refresh();
        var s = (e.epochMilliseconds() - i.timestamp) / 1e3,
            o = this._build("history-dialog-entry", {
                parentNode: t,
                button: this._seekTo.bind(this, i)
            }, " struct .history-dialog-inset", "  landmark <h3>", n.landmark || {
                skip: !0
            }, "  pos", {
                construct: BIF.CLASSES.PlacePhrase,
                with: {
                    short: !0,
                    classes: "history-dialog-entry-pos"
                }
            }, "  time", {
                html: this._secondsAgoToString(s)
            }, "  chapter", {
                html: i.citation() || "&nbsp;"
            });
        return o.pos.update(i), this._classify(o.root, "is-landmarked", !!n.landmark), o
    }, s._secondsAgoToString = function(t) {
        var i = Math.round(t);
        if (i < 6)
            return this._phrase("history.moment-ago");
        if (i < 3600) {
            var n = "minutes",
                s = Math.round(i / 60);
            return i < 60 && (n = "seconds", s = i), this._phrase({
                relativeTime: 0 - s,
                unit: n
            })
        }
        var o = 1e3 * (e.epochSeconds() - i);
        return i < 86400 ? this._phrase({
            label: "history.time",
            substitutions: {
                TIME: this._phrase({
                    time: o
                })
            }
        }) : this._phrase({
            date: o,
            year: void 0
        })
    }, s._seekTo = function(t) {
        BIF.objects.historyManager.seek(t),
        this.close()
    }, s._shaded = function(t) {
        this.dom.clearButton = this._element({
            button: this._onTapClearButton.bind(this),
            parentNode: t.dom.banner,
            classes: "shibui-button",
            label: "search.clear-recent"
        })
    }, s._onTapClearButton = function() {
        BIF.objects.historyManager.wipe(),
        this.close()
    }, n
}),
define("text!bifocal/themes/read/default/svg/history-arrow.svg", [], function() {
    return "<svg viewBox='0 0 64 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n  <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>\n    <path d='M31,16 C33,16 37.131272,17.710424 38,18 C42.5891554,19.5297185 48.7569535,21.5637377 51.7398995,24.324953 C54.6069436,26.9788816 54.3794214,30.304594 54.3794214,34.5 C54.3794214,38.6631111 53.6351802,43.4428831 50.7968373,46.2275572 C47.9656888,49.0051729 43.1541958,49.9009466 38.691862,49.9920556 C38.6284105,49.9975581 38.5644904,50 38.5,50 L38.04,49.999 L37.9069735,50 C37.8806627,50 37.8544212,49.9999333 37.8282488,49.9998001 L29.5,50 C28.1192881,50 27,48.8807119 27,47.5 L27,46.5 C27,45.2270008 27.9514633,44.1762278 29.1820423,44.0200285 C29.1803002,44.0138402 29.1778755,44.0068043 29.1754555,43.9997638 L24.5,44 C23.1192881,44 22,42.8807119 22,41.5 L22,39.5 C22,38.1192881 23.1192881,37 24.5,37 L28.0677899,36.9999419 C28.0528613,36.6689063 28.0409166,36.3352649 28.0314732,35.9994945 L21.5,36 C20.1192881,36 19,34.8807119 19,33.5 L19,31.5 C19,30.1192881 20.1192881,29 21.5,29 L27.7777353,28.9994687 C27.7118503,28.6483943 27.6264353,28.3171052 27.515701,27.9993867 L10.5,28 C8.56700338,28 7,26.4329966 7,24.5 C7,22.5670034 8.56700338,21 10.5,21 L25.0054485,20.999335 C26.6802908,18.709169 29.6339073,16 31,16 Z' fill='#000000' class='icon-solid' />\n  </g>\n</svg>\n"
}),
define("bifocal/themes/read/default/src/parts/history-bar", ["require", "common", "core/src/view", "./history-dialog", "text!../../svg/fingerprint.svg", "text!../../svg/history-arrow.svg"], function(t) {
    var e = t("common"),
        i = t("core/src/view"),
        n = i.new(),
        s = n.prototype,
        o = t("./history-dialog");
    return s._graphic("fingerprint", t("text!../../svg/fingerprint.svg")), s._graphic("history-arrow", t("text!../../svg/history-arrow.svg")), s._layout = function() {
        this.dom = this._build("history-bar", " back-button", {
            button: !0,
            access: "inert"
        }, "  back-icon", {
            icon: "history-arrow"
        }, "  back-place", {
            describing: "back-button"
        }, "   {a11y.history.place}", {
            access: "spoken"
        }, "   place-phrase", {
            construct: BIF.CLASSES.PlacePhrase,
            with: {
                short: !0
            }
        }, "   back-time {history.moment-ago}", {
            access: "spoken"
        }, " history-button", {
            button: !0,
            spoken: "history.heading",
            classes: "is-hidden-unless-focused"
        }, "  history-icon", {
            icon: "fingerprint"
        }, "  history-count", "  history-count-desc {a11y.history.count}", {
            describing: "history-button",
            access: "spoken"
        }),
        e.DataClass.set(this.dom.historyCount, "history-count", 0)
    }, s._listen = function(t) {
        this._activateForModes("navigating"),
        this._handle("bifocal:history")
    }, s._onBifocalHistory = function(t) {
        var i = BIF.objects.compass.place,
            n = this._getDestination();
        if (n) {
            var s = this._isDestinationAhead(i, n);
            this.access(this.dom.backButton, "normal"),
            this._classify(this.dom.root, "is-ahead", s),
            this.dom.placePhrase.update(n),
            this._updateBackTime(i, n)
        } else
            this.access(this.dom.backButton, "inert");
        this._classify(this.dom.historyButton, "is-hidden-unless-focused", t.m.journey.length <= 1 && !t.m.earlierJourneys.length);
        var o = Math.max(0, t.m.journey.length - 1);
        e.DataClass.set(this.dom.historyCount, "history-count", o),
        this._textify(this.dom.historyCount, o ? {
            number: o
        } : null),
        this._textify(this.dom.historyCountDesc, {
            label: "a11y.history.count",
            substitutions: {
                COUNT: o
            }
        })
    }, s._onTapBackButton = function() {
        BIF.objects.historyManager.seek(this._getDestination())
    }, s._onTapHistoryButton = function() {
        var t = new o;
        t.shade().grow(),
        t.refresh()
    }, s._getDestination = function() {
        return BIF.objects.historyManager.station("forward") || BIF.objects.historyManager.station("back")
    }, s._isDestinationAhead = function(t, i) {
        if (!t)
            return !0;
        var n = t.percentageOfBook < i.percentageOfBook;
        return "rtl" == e.DataClass.get(BIF.root, "dir") ? !n : n
    }, s._updateBackTime = function(t, i) {
        var n = e.epochMilliseconds(),
            s = e.try(t, "timestamp") || n,
            o = (n - s) / 1e3,
            r = Math.round(o);
        if (r < 30)
            this._textify(this.dom.backTime, "history.moment-ago");
        else if (r < 60)
            this._textify(this.dom.backTime, {
                relativeTime: -30,
                unit: "seconds"
            });
        else {
            var a = 0 - Math.round(r / 60);
            this._textify(this.dom.backTime, {
                relativeTime: a,
                unit: "minutes"
            })
        }
        this._defer("update-back-time", this._updateBackTime.bind(this), 3e4)
    }, n
}),
define("bifocal/themes/read/default/src/features/history", ["require", "common", "../parts/history-manager", "../parts/history-dialog", "../parts/history-bar"], function(t) {
    var e = (t("common"), t("../parts/history-manager")),
        i = t("../parts/history-dialog"),
        n = t("../parts/history-bar");
    return function(t) {
        return t.runsheet.append(["bifocal:command:register", "registerHistoryDialogCommand"], ["bifocal:command:register", "registerHistoryBackCommand"], ["bifocal:reader:ready", "loadHistoryManager"], ["bifocal:reader:ready", "loadHistoryBar"]), t.registerHistoryDialogCommand = function(t) {
            t.m.commands.register({
                group: "dialogs",
                icon: "fingerprint",
                name: "history-dialog",
                label: "history.heading",
                shortcut: "shift-H",
                callback: function() {
                    var t = new i;
                    t.shade().grow(),
                    t.refresh()
                }
            })
        }, t.registerHistoryBackCommand = function(t) {
            t.m.commands.register(function() {
                return {
                    name: "history-back",
                    shortcut: ["shift-BACKSPACE"],
                    callback: function() {
                        BIF.objects.historyManager.seek("back")
                    }
                }
            })
        }, t.loadHistoryManager = function() {
            BIF.objects.historyManager = new e
        }, t.loadHistoryBar = function() {
            var t = BIF.objects.navigation.dom.progress;
            BIF.objects.historyBar = new n(t)
        }, !0
    }
}),
define("bifocal/themes/listen/default/src/features/history", ["require", "../parts/history-manager-listen", "../../../../read/default/src/features/history"], function(t) {
    var e = t("../parts/history-manager-listen");
    return function(i) {
        return t("../../../../read/default/src/features/history")(i), i.runsheet.append(["bifocal:spool:prepared", "loadHistoryManager"], ["bifocal:spool:prepared", "loadHistoryBar"]), i.loadHistoryManager = function() {
            BIF.objects.historyManager = new e
        }, !0
    }
}),
define("bifocal/themes/read/default/src/parts/place-line", ["require", "common", "core/src/view"], function(t) {
    var e = (t("common"), t("core/src/view")),
        i = e.new(),
        n = i.prototype;
    return n.update = function(t) {
        var e = Math.round(100 * t.percentageOfBook);
        e != this._.percentValue && (this._.percentValue = e, this.dom.read.style.setProperty("width", e + "%"))
    }, n._layout = function() {
        this.dom = this._build("place-line", " total", " read")
    }, n._listen = function() {
        this._handle("bifocal:place")
    }, n._onBifocalPlace = function(t) {
        this.update(t.m.place)
    }, i
}),
define("bifocal/themes/listen/default/src/parts/timeline", ["require", "common", "core/src/view", "../../../../read/default/src/parts/place-line"], function(t) {
    var e = t("common"),
        i = t("core/src/view"),
        n = i.new(),
        s = n.prototype,
        o = t("../../../../read/default/src/parts/place-line");
    return s._layout = function() {
        this.dom = this._build("timeline", {
            access: {
                tabindex: 0
            }
        }, " line", "  place-line", o, " clocks", "  start-minutes", {
            construct: BIF.CLASSES.PlacePhrase,
            with: {
                preset: "elapsed",
                classes: "timeline-start-minutes"
            }
        }, "  percent", "   percent-visual", {
            access: "visual"
        }, "   percent-spoken", {
            access: "spoken"
        }, "  end-minutes", {
            construct: BIF.CLASSES.PlacePhrase,
            with: {
                preset: "remaining",
                classes: "timeline-end-minutes"
            }
        })
    }, s._listen = function(t) {
        this._activateForModes("navigating"),
        this._handle("bifocal:seeker:place")
    }, s._onBifocalSeekerPlace = function(t) {
        this._.lastPlace = t.m.place,
        this._.updateSoon ? this._.updateSoon() : (this._updatePlace(), this._.updateSoon = e.staggerInvocation(this._updatePlace.bind(this), 500, 1e3))
    }, s._updatePlace = function() {
        var t = this._.lastPlace;
        if (t) {
            this.dom.startMinutes.update(t),
            this.dom.endMinutes.update(t);
            var i,
                n,
                s = e.smoothFloat(t.percentageOfBook),
                o = Math.ceil(100 * s);
            if (t.chapter) {
                i = t.chapter.title;
                var r = e.try(t.chapter.place, "percentageOfBook") || 0,
                    a = e.try(t.chapter.next, "place.percentageOfBook") || 1;
                n = Math.ceil(100 * e.smoothFloat((t.percentageOfBook - r) / (a - r)))
            }
            this._textify(this.dom.percentVisual, {
                number: o / 100,
                style: "percent"
            }),
            this._textify(this.dom.percentSpoken, {
                label: "a11y.timeline.progress",
                substitutions: {
                    PERCENT_BOOK: o,
                    PERCENT_CHAPTER: n,
                    CHAPTER_TITLE: i
                }
            }),
            this.dom.placeLine.update(t)
        }
    }, n
}),
define("bifocal/themes/listen/default/src/features/timeline", ["require", "../parts/timeline"], function(t) {
    var e = t("../parts/timeline");
    return function(t) {
        return t.runsheet.append(["bifocal:spool:prepared", "loadTimeline"]), t.loadTimeline = function(t) {
            BIF.objects.timeline = new e(BIF.objects.navigation.dom.header)
        }, !0
    }
}),
define("bifocal/themes/read/default/src/parts/reading-time", ["require", "common", "core/src/view"], function(t) {
    var e = t("common"),
        i = t("core/src/view"),
        n = i.new(),
        s = n.prototype;
    return s.MIN_SECONDS = 60, s.BANK_KEY_CACHE = "reading:time", s.SAVE_CACHE_INTERVAL = 3e4, s.IS_READING_THRESHOLD_IN_SECONDS = 900, s.$init = function() {
        i.prototype.$init.apply(this, arguments),
        this._.cache = BIF.bank.title.get(this.BANK_KEY_CACHE),
        this._toggleEstimates(),
        this.refresh()
    }, s.refresh = function() {
        var t = this._computeValues();
        if ("undefined" == typeof t.timeEffort)
            return this._apologize("uninitialized");
        if (this._resetCache(), this._textify(this.dom.timeEffort, {
            html: this._secondsToString(t.timeEffort)
        }), "undefined" == typeof t.percentEffort)
            return this._apologize("too-early");
        this._declassify(this.dom.root, "is-sorry");
        var e = {
            PERCENT_THROUGH: this._element({
                tag: "span",
                classes: "reading-time-inline-value",
                wrapper: !1,
                label: "reading-time.percent-through",
                substitutions: {
                    PERCENT: t.percentEffort
                }
            }).outerHTML,
            ESTIMATE_EFFORT: this._element({
                tag: "div",
                classes: "reading-time-block-value",
                wrapper: !1,
                html: this._secondsToString(t.estEffort)
            }).outerHTML,
            TIME_ELAPSED: this._element({
                tag: "span",
                classes: "reading-time-inline-value",
                wrapper: !1,
                label: "reading-time.time-past",
                substitutions: {
                    TIME: this._secondsToString(t.timeElapsed, !0)
                }
            }).outerHTML,
            ESTIMATE_ELAPSED: this._element({
                tag: "span",
                classes: "reading-time-inline-value",
                wrapper: !1,
                html: this._secondsToString(t.estElapsed)
            }).outerHTML
        };
        this._textify(this.dom.estimates, {
            wrapper: !1,
            label: "reading-time.estimate",
            substitutions: e
        })
    }, s._layout = function() {
        this.dom = this._build("reading-time", " header {reading-time.time-spent}", " time-effort .reading-time-block-value", " drawer", {
            access: "inert"
        }, "  estimates", {
            access: {
                role: "text"
            }
        }, " apology", " expando .shibui-button", {
            button: !0
        })
    }, s._listen = function(t) {
        this._handle("bifocal:possession:synchronized"),
        this._handle("bifocal:place")
    }, s._onTapExpando = function() {
        this._toggleEstimates()
    }, s._onBifocalPossessionSynchronized = function(t) {
        this._.cache && this._resetCache()
    }, s._onBifocalPlace = function(t) {
        if (this._.cache) {
            var i = (e.epochMilliseconds() - this._.cache.at) / 1e3;
            i < this.IS_READING_THRESHOLD_IN_SECONDS && (this._.cache.acc += i),
            this._.cache.at = e.epochMilliseconds(),
            this._.cache.dirty = !0
        }
    }, s._apologize = function(t) {
        this._classify(this.dom.root, "is-sorry"),
        this._textify(this.dom.apology, "reading-time.apology-" + t)
    }, s._toggleEstimates = function() {
        var t = "false" === this.dom.expando.getAttribute("aria-expanded");
        t ? (this.access(this.dom.drawer, {
            tabindex: -1
        }), this.dom.expando.setAttribute("aria-expanded", "true"), this._textify(this.dom.expando, {
            label: "reading-time.conceal-estimates",
            spoken: "a11y.reading-time.conceal-estimates"
        }), this._focusElement(this.dom.drawer)) : (this.access(this.dom.drawer, "inert"), this.dom.expando.setAttribute("aria-expanded", "false"), this._textify(this.dom.expando, {
            label: "reading-time.reveal-estimates",
            spoken: "a11y.reading-time.reveal-estimates"
        })),
        this._dispatch("reading-time:toggle", {
            view: this,
            expanded: t
        })
    }, s._secondsToString = function(t, i) {
        var n = e.secondsToUnits(t),
            s = {
                years: this._phrase({
                    label: "units.years",
                    substitutions: {
                        YEARS: n.years
                    }
                }),
                weeks: this._phrase({
                    label: "units.weeks",
                    substitutions: {
                        WEEKS: n.weeks
                    }
                }),
                days: this._phrase({
                    label: "units.days",
                    substitutions: {
                        DAYS: n.days
                    }
                }),
                hours: this._phrase({
                    label: "units.hours",
                    substitutions: {
                        HOURS: n.hours
                    }
                }),
                minutes: this._phrase({
                    label: "units.minutes",
                    substitutions: {
                        MINUTES: n.minutes
                    }
                })
            },
            o = [];
        return n.years ? o.push(s.years) : n.weeks ? (o.push(s.weeks), !i && n.days && o.push(s.days)) : n.days ? (o.push(s.days), !i && n.hours && o.push(s.hours)) : n.hours ? (o.push(s.hours), !i && n.minutes && o.push(s.minutes)) : o.push(s.minutes), this._phrase({
            list: o,
            type: "unit"
        })
    }, s._computeValues = function() {
        if (!BIF.objects.compass)
            return {};
        var t = BIF.objects.compass.place;
        if (!t)
            return {};
        var e = {
            timeEffort: this._timeSpentReading()
        };
        return t.percentageOfBook > .01 && (e.percentEffort = t.percentageOfBook, e.estEffort = Math.max(this.MIN_SECONDS, e.timeEffort / e.percentEffort - e.timeEffort), e.timeElapsed = this._timeElapsedReading(), e.estElapsed = Math.max(e.estEffort, e.timeElapsed / e.percentEffort - e.timeElapsed)), e
    }, s._timeSpentReading = function() {
        var t = 0,
            e = BIF.objects.possession;
        if (e && e.data && e.data.statistics && (t = e.data.statistics.readingTime || 0), this._.cache) {
            var i = this._.cache.acc || 0;
            return t = Math.max(this._.cache.timeEffort || 0, t), Math.round(t + i)
        }
        return t
    }, s._timeElapsedReading = function() {
        var t = e.epochSeconds() - this._timeBeganReading();
        return Math.max(this.MIN_SECONDS, t) || 0
    }, s._timeBeganReading = function() {
        var t = e.try(this._.cache, "timeBegan"),
            i = e.try(BIF.objects.possession, "data.timestamps.created"),
            n = t && i ? Math.min(t, i) : t || i || 1 / 0;
        return Math.min(n, e.epochSeconds() - this._timeSpentReading())
    }, s._resetCache = function() {
        this._.cache = {
            timeBegan: this._timeBeganReading(),
            timeEffort: this._timeSpentReading(),
            at: e.epochMilliseconds(),
            acc: 0,
            dirty: !0
        },
        this._saveCache()
    }, s._saveCache = function() {
        this._.cache && (clearTimeout(this._.cacheSaveTimer), this._.cacheSaveTimer = setTimeout(this._saveCache.bind(this), this.SAVE_CACHE_INTERVAL), this._.cache.dirty && (delete this._.cache.dirty, BIF.bank.title.set(this.BANK_KEY_CACHE, this._.cache)))
    }, n
}),
define("bifocal/themes/read/default/src/parts/overview-dialog", ["require", "common", "./dialog", "./reading-time", "../parts/cover-image"], function(t) {
    var e = (t("common"), t("./dialog")),
        i = e.new(),
        n = i.prototype,
        s = t("./reading-time"),
        o = t("../parts/cover-image");
    return n.DIALOG_HEADING = null, n.DIALOG_BEARING = "s", n.DIALOG_CLASSES = "overview-shade", n.become = function(t) {
        var e = this._prepare();
        return this._textify(e.title, {
            html: t.title()
        }), this._textify(e.attribution, {
            html: t.attribution()
        }), this._textify(e.blurb, {
            html: t.description()
        }), BIF.events.dispatch("bifocal:overview:dialog", {
            dialog: this
        }), this
    }, n._layout = function(t) {
        var e = "f" != BIF.map["-odread-msg-access"];
        this._build("overview-dialog", {
            extending: t
        }, " about", "  .overview-dialog-column", "   cover", {
            access: "visual"
        }, "    cover-image", o, "   head <h1>", {
            access: "spoken",
            label: "chapters.overview." + BIF.objects.codex.format(),
            wrapper: !1
        }, "   title <h2>", "   attribution <h3>", "   score", {
            skip: e || !SPARK.locale.isEnglish
        }, "    reading-time", s, "   stamp {sample-stamp}", {
            skip: !e
        }, " details", "  .overview-dialog-column", "   blurb", "   actions", "   version", "    version-number {bifocal.version-number}", {
            button: !0,
            access: "visual",
            substitutions: {
                VERSION: BIF.version
            }
        }, "    {bifocal.version-number}", {
            access: "spoken",
            substitutions: {
                VERSION: BIF.version
            }
        })
    }, n._listen = function(t, e) {
        e.readingTime && (t.readingTimeToggle = e.readingTime.on("reading-time:toggle", function() {
            t.readingTimeToggle.deafen(),
            this._.shade && this._.shade.grow()
        }.bind(this)))
    }, n._onTapVersionNumber = function(t) {
        BIF.events.dispatch("bifocal:version:tap", {
            dialog: this,
            shade: this._.shade,
            version: BIF.version
        })
    }, n._shaded = function(t) {
        t.rename("chapters.overview." + BIF.objects.codex.format())
    }, i
}),
define("text!bifocal/themes/read/default/svg/overview.svg", [], function() {
    return "<svg viewBox='0 0 64 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n  <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>\n    <rect fill='#000000' opacity='0.15' x='39' y='13' width='6' height='38' class='icon-solid' />\n    <path d='M19.5017271,50.4584773 C16.3919744,50.1993312 14,49.5997345 14,46.4792027 L14,17.5207973 C14,14.4002655 16.3919744,13.8006688 19.5017271,13.5415227 L41,12 C41.3481445,12 41.2148808,12.6608276 41.3481445,12.6608276 C47,12.6608276 46,14.7165167 46,19 L46,48 C46,51.3738403 42.9646606,51.3738403 41.4498901,51.3738403 C40.9603882,51.3738403 41.2794692,52.014572 41,52 C34.9041737,51.6821531 27.7380827,51.1683121 19.5017271,50.4584773 Z' stroke='#000000' stroke-width='3' class='icon-hollow' />\n    <line x1='38.99527' y1='11.8719175' x2='38.99527' y2='52.0021259' stroke='#000000' stroke-width='3' fill='#FFFFFF' class='icon-hollow' />\n  </g>\n</svg>\n"
}),
define("bifocal/themes/read/default/src/features/overview", ["require", "common", "../parts/overview-dialog", "shibui/src/illustrator", "text!../../svg/overview.svg"], function(t) {
    var e = t("common"),
        i = t("../parts/overview-dialog"),
        n = t("shibui/src/illustrator");
    return function(s) {
        s.runsheet.append(["bifocal:command:register", "registerOverviewCommand"], ["lens:boundary", "showOverviewAtEndOfBook"]),
        s.registerOverviewCommand = function(e) {
            n.add("overview", t("text!../../svg/overview.svg")),
            e.m.commands.register({
                group: "dialogs",
                name: "overview",
                label: "chapters.overview." + BIF.objects.codex.format(),
                shortcut: "shift-O",
                callback: function() {
                    (new i).become(BIF.objects.codex).shade().grow()
                }
            })
        };
        var o = 0;
        return s.showOverviewAtEndOfBook = function(t) {
            var i = e.try(BIF, "objects.compass.place");
            if (i && i.isFinite() && e.last(i.pages) == i.pages.total) {
                var n = e.epochSeconds();
                n - o < 5 || (o = n, BIF.objects.commands.execute("overview"))
            }
        }, !0
    }
}),
define("bifocal/themes/listen/default/src/features/overview", ["require", "../../../../read/default/src/features/overview"], function(t) {
    return function(e) {
        t("../../../../read/default/src/features/overview")(e),
        e.runsheet.append(["bifocal:spool:state", "showOverviewAtEndOfBook"]);
        var i;
        return e.showOverviewAtEndOfBook = function(t) {
            "ended" == t.m.state && "playing" == t.m.was ? (i || BIF.events.on("mode:change", function() {
                clearTimeout(i)
            }), i = setTimeout(function() {
                "navigating" == BIF.state.mode && BIF.objects.commands.execute("overview")
            }, 2e3)) : clearTimeout(i)
        }, !0
    }
}),
define("bifocal/themes/listen/default/src/features/compat", ["require"], function(t) {
    return function(t) {
        return "virtualKeyboard" in navigator && (navigator.virtualKeyboard.overlaysContent = !0), !0
    }
}),
define("lens/src/sheet-anchor", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.STYLE_ID_PREFIX = "_SHEET_ANCHOR_RULES_", n.applyStyleRules = function(t, e, i) {
        "function" == typeof i.join && (i = i.join("\n"));
        var s = t.querySelector("#" + n.STYLE_ID_PREFIX + e);
        s ? this._updateStyleTag(t, s, i) : this._addStyleTag(t, e, i)
    }, n.removeStyleRules = function(t, e) {
        var i = t.querySelector("#" + n.STYLE_ID_PREFIX + e);
        i && i.parentNode.removeChild(i)
    }, n._addStyleTag = function(t, e, i) {
        var s = t.getElementsByTagName("head")[0];
        s || (s = t.createElement("head"), t.documentElement.appendChild(s)),
        "function" == typeof i.join && (i = i.join("\n"));
        var o = t.createElement("style");
        o.type = "text/css",
        o.id = n.STYLE_ID_PREFIX + e,
        o.styleSheet ? o.styleSheet.cssText = i : o.appendChild(t.createTextNode(i)),
        s.appendChild(o)
    }, n._updateStyleTag = function(t, e, i) {
        e.styleSheet ? e.styleSheet.cssText = i : e.replaceChild(t.createTextNode(i), e.firstChild)
    }, i
}),
define("bifocal/themes/read/default/src/parts/display-area", ["require", "common", "quirkbase", "lens/src/sheet-anchor"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype,
        s = t("quirkbase"),
        o = t("lens/src/sheet-anchor");
    return n.$init = function(t) {
        this._.shell = t,
        BIF.events.on("platform:traits", this._onPlatformTraits.bind(this)),
        this._bifExtraSetup(),
        this._.displayAreas = this._defaultDisplayAreas(),
        this.adjustBumpers()
    }, n.adjustBumpers = function() {
        var t = [],
            e = this._.displayAreas,
            i = e.screenArea,
            n = e.safeArea,
            s = e.prettySafeArea || n,
            r = e.immersiveArea || s || n;
        if (BIF.journal.write("[DISPLAY-AREA] " + JSON.stringify(e, null, 2)), i && n) {
            var a;
            "number" == typeof n.top && (a = n.top - (i.top || 0), t.push(".bumper-n, .bumper-p-n { border-top-width: " + a + "px; }")),
            "number" == typeof n.left && (a = n.left - (i.left || 0), t.push(".bumper-w, .bumper-p-w { border-left-width: " + a + "px; }")),
            "number" == typeof i.bottom && "number" == typeof n.bottom && (a = i.bottom - n.bottom, t.push(".bumper-s, .bumper-p-s { border-bottom-width: " + a + "px; }")),
            "number" == typeof i.right && "number" == typeof n.right && (a = i.right - n.right, t.push(".bumper-e, .bumper-p-e { border-right-width: " + a + "px; }")),
            "number" == typeof s.top && (a = s.top - (i.top || 0), t.push(".bumper-p-n { border-top-width: " + a + "px; }")),
            "number" == typeof s.left && (a = s.left - (i.left || 0), t.push(".bumper-p-w { border-left-width: " + a + "px; }")),
            "number" == typeof i.bottom && "number" == typeof s.bottom && (a = i.bottom - s.bottom, t.push(".bumper-p-s { border-bottom-width: " + a + "px; }")),
            "number" == typeof i.right && "number" == typeof s.right && (a = i.right - s.right, t.push(".bumper-p-e { border-right-width: " + a + "px; }")),
            "number" == typeof r.top && (a = r.top - (i.top || 0), t.push(".bumper-i-n { border-top-width: " + a + "px; }")),
            "number" == typeof r.left && (a = r.left - (i.left || 0), t.push(".bumper-i-w { border-left-width: " + a + "px; }")),
            "number" == typeof i.bottom && "number" == typeof r.bottom && (a = i.bottom - r.bottom, t.push(".bumper-i-s { border-bottom-width: " + a + "px; }")),
            "number" == typeof i.right && "number" == typeof r.right && (a = i.right - r.right, t.push(".bumper-i-e { border-right-width: " + a + "px; }"))
        }
        t = t.join("\n"),
        this._.rules != t && (this._.rules = t, this._.sheetAnchor = this._.sheetAnchor || new o, this._.sheetAnchor.applyStyleRules(document, "display_area", t), BIF.context && BIF.context.scene && BIF.context.scene.rebuild())
    }, n._defaultDisplayAreas = function() {
        var t = e.try(this._.shell, "traits.displayAreas");
        if (e.try(t, "notchArea") && (t = null), t || "iOS" != e.try(this._.shell, "info.platform")) {
            if (!t && s.ask("ios-standalone"))
                t = this._iOSDefaultAreas(),
                document.documentElement.style.width = t.screenArea.right + "px",
                document.documentElement.style.height = t.screenArea.bottom + "px";
            else if (!t && this._.legacyDimensionsCache) {
                var i = {
                        w: window.innerWidth,
                        h: window.innerHeight
                    },
                    n = e.clone(i);
                e.absorb(this._.legacyDimensionsCache[i.w + "x" + i.h] || {}, n),
                t = this._androidDefaultAreas(i, n)
            }
        } else
            t = this._iOSDefaultAreas();
        return t || {}
    }, n._iOSDefaultAreas = function() {
        var t = {
                screenArea: {},
                safeArea: {}
            },
            e = window.innerWidth > window.innerHeight;
        t.screenArea.top = 0,
        t.screenArea.left = 0,
        e ? (t.screenArea.right = screen.height, t.screenArea.bottom = screen.width) : (t.screenArea.right = screen.width, t.screenArea.bottom = screen.height, t.safeArea.top = 20);
        var i = 375 == screen.width && 812 == screen.height || 414 == screen.width && 896 == screen.height;
        return i && e ? (t.safeArea.left = 44, t.safeArea.right = t.screenArea.right - 44, t.safeArea.bottom = t.screenArea.bottom - 21) : i && (t.safeArea.top = 44, t.safeArea.bottom = t.screenArea.bottom - 34, t.prettySafeArea = {}, t.prettySafeArea.top = 30, t.prettySafeArea.bottom = t.screenArea.bottom - 21), t
    }, n._androidDefaultAreas = function(t, i) {
        var n = {};
        n.screenArea = {
            top: 0,
            left: 0,
            right: t.w,
            bottom: t.h
        },
        n.safeArea = {
            top: 0,
            left: 0,
            right: i.w,
            bottom: t.h
        };
        var s = t.h - i.h;
        return n.safeArea.top = Math.max(0, Math.min(s, 25)), s -= 25, n.safeArea.bottom = t.h - Math.max(0, Math.min(s, 48)), s -= 48, n.safeArea.top += Math.max(0, s), n.immersiveArea = e.clone(n.screenArea), n
    }, n._onPlatformTraits = function(t) {
        var i = e.try(t, "m.traits.displayAreas");
        i && !i.notchArea && (BIF.events.off(this._.resizeHandler), delete this._.legacyDimensionsCache, this._adjustShellAreasForIPadPro(i), this._.displayAreas = i, this.adjustBumpers())
    }, n._onResize = function(t) {
        this._.displayAreas = this._defaultDisplayAreas(),
        this.adjustBumpers()
    }, n._bifExtraSetup = function() {
        "Android" == e.try(this._.shell, "info.platform") && "number" == typeof e.try(this._.shell, "info.spec") && e.try(this._.shell, "info.spec") < 16 ? (this._.legacyHandler = BIF.events.on("msg:client:dimensions", this._onClientDimensions.bind(this)), this._.resizeHandler = BIF.events.on("bifocal:resize", function() {
            this._.shell.transmit({
                name: "client:dimensions",
                dest: "shell"
            }),
            this._onResize()
        }.bind(this)), this._.shell.transmit({
            name: "client:dimensions",
            dest: "shell"
        })) : this._.resizeHandler = BIF.events.on("bifocal:resize", this._onResize.bind(this))
    }, n._onClientDimensions = function(t) {
        var i = window.innerWidth,
            n = window.innerHeight,
            s = {
                w: e.try(t, "m.width") || i,
                h: e.try(t, "m.height") || n
            };
        this._.legacyDimensionsCache = this._.legacyDimensionsCache || {},
        this._.legacyDimensionsCache[i + "x" + n] = s,
        this._.displayAreas = this._defaultDisplayAreas(),
        this.adjustBumpers()
    }, n._adjustShellAreasForIPadPro = function(t) {
        if (!t.prettySafeArea && "iOS" != !e.try(this._.shell, "info.platform")) {
            var i = 24;
            Math.max(e.try(t, "safeArea.top"), e.try(this._.displayAreas, "safeArea.top") || 1 / 0) == i && (t.prettySafeArea = e.absorb({
                top: 0
            }, e.clone(t.safeArea)), t.safeArea.top = i)
        }
    }, i
}),
define("bifocal/themes/read/default/src/features/adaptive-display-area", ["require", "../parts/display-area"], function(t) {
    return function(e) {
        var i = t("../parts/display-area");
        return BIF.objects.displayArea = new i(BIF.objects.shell), !0
    }
}),
define("bifocal/themes/read/default/src/parts/expiration-screen", ["require", "common", "core/src/view"], function(t) {
    var e = t("common"),
        i = t("core/src/view"),
        n = i.new(),
        s = n.prototype;
    return s.present = function() {
        return e.try(BIF.objects, "spool.pause()"), this._.lastMode = BIF.state.mode, "accessing" == this._.lastMode && (BIF.objects.modeManager.defaultMode = "reading"), BIF.objects.modeManager.exitModes(), BIF.objects.commands.keyManager.deafen(), this.access(BIF.elements.bookLayer, "inert"), this.access(BIF.elements.cmdNav, "inert"), this
    }, s._layout = function(t) {
        this._build("expiration-screen", {
            extending: t
        }, " bumpers .bumper-n .bumper-s .bumper-e .bumper-w", "  alert <alert>", "   heading <h2> {expiration.heading}", "   prompt <p> {expiration.prompt}", "  answers", "   accept-button .shibui-button {billboard.close}", {
            button: !0
        });
        var e = this._phrase({
            label: "commands.close-book",
            okIfMissing: !0
        });
        e && this._textify(t.acceptButton, {
            html: e
        })
    }, s._listen = function() {
        this._handle("view:extract", this)
    }, s._onTapAcceptButton = function(t) {
        this._dispatch("accept")
    }, s._onViewExtractSelf = function(t) {
        BIF.objects.commands.keyManager.listen(),
        this.access(BIF.elements.bookLayer, "normal"),
        this.access(BIF.elements.cmdNav, "normal"),
        "accessing" == e.excise(this._, "lastMode") && BIF.objects.readFromHere.reveal()
    }, n
}),
define("bifocal/themes/read/default/src/features/expiration", ["require", "../parts/expiration-screen"], function(t) {
    var e = t("../parts/expiration-screen");
    return function(t) {
        t.runsheet.append(["bifocal:expiration", "onBifocalExpiration"]),
        t.onBifocalExpiration = function(i) {
            i.preventDefault(),
            new e(BIF.elements.modalLayer).present().on("accept", t.exitBifocalAfterExpiration.bind(t))
        },
        t.exitBifocalAfterExpiration = function() {
            BIF.objects.expiration.acceptExpiration()
        }
    }
}),
define("text!shibui/svg/input-search.svg", [], function() {
    return '<svg version="1.1" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n  <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">\n    <path class="icon-solid" d="M46.4190729,7.10290497e-16 C52.5323443,-4.12699233e-16 54.7491642,0.636518476 56.9840848,1.83176711 C59.2190055,3.02701575 60.9729843,4.78099454 62.1682329,7.01591518 C63.3634815,9.25083581 64,11.4676557 64,17.5809271 L64,46.4190729 C64,52.5323443 63.3634815,54.7491642 62.1682329,56.9840848 C60.9729843,59.2190055 59.2190055,60.9729843 56.9840848,62.1682329 C54.7491642,63.3634815 52.5323443,64 46.4190729,64 L17.5809271,64 C11.4676557,64 9.25083581,63.3634815 7.01591518,62.1682329 C4.78099454,60.9729843 3.02701575,59.2190055 1.83176711,56.9840848 C0.636518476,54.7491642 -2.51763928e-16,52.5323443 4.33307141e-16,46.4190729 L4.73526998e-16,17.5809271 C-2.75132822e-16,11.4676557 0.636518476,9.25083581 1.83176711,7.01591518 C3.02701575,4.78099454 4.78099454,3.02701575 7.01591518,1.83176711 C9.25083581,0.636518476 11.4676557,-1.14197516e-16 17.5809271,1.96543643e-16 L46.4190729,7.10290497e-16 Z M28.8351648,16.1758242 C21.843604,16.1758242 16.1758242,21.843604 16.1758242,28.8351648 C16.1758242,35.8267256 21.843604,41.4945055 28.8351648,41.4945055 C31.4582961,41.4945055 33.8950867,40.6966858 35.9161185,39.3304643 L44.2223681,47.2062033 L44.4384319,47.3950283 C45.2654277,48.0244447 46.4509036,47.961503 47.2062033,47.2062033 C48.0301667,46.38224 48.0301667,45.0463315 47.2062033,44.2223681 L47.2062033,44.2223681 L38.9748797,36.4156817 C40.5572593,34.3024903 41.4945055,31.6782803 41.4945055,28.8351648 C41.4945055,21.843604 35.8267256,16.1758242 28.8351648,16.1758242 Z M28.8351648,20.3956044 C33.4962054,20.3956044 37.2747253,24.1741243 37.2747253,28.8351648 C37.2747253,33.4962054 33.4962054,37.2747253 28.8351648,37.2747253 C24.1741243,37.2747253 20.3956044,33.4962054 20.3956044,28.8351648 C20.3956044,24.1741243 24.1741243,20.3956044 28.8351648,20.3956044 Z" fill="#000000" />\n  </g>\n</svg>\n'
}),
define("text!shibui/svg/input-reset.svg", [], function() {
    return '<svg version="1.1" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n  <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">\n    <path class="color-primary icon-solid" d="M32,0 C49.673112,-3.24649801e-15 64,14.326888 64,32 C64,49.673112 49.673112,64 32,64 C14.326888,64 2.164332e-15,49.673112 0,32 C-2.164332e-15,14.326888 14.326888,3.24649801e-15 32,0 Z" fill="#000000" opacity="0.151629" />\n    <path class="icon-solid" d="M39.2760967,21.2998578 C40.2216208,20.3543337 41.7546182,20.3543337 42.7001422,21.2998578 C43.6456663,22.2453818 43.6456663,23.7783792 42.7001422,24.7239033 L42.7001422,24.7239033 L35.4237147,31.9997147 L42.7001422,39.2760967 C43.6456663,40.2216208 43.6456663,41.7546182 42.7001422,42.7001422 C41.7546182,43.6456663 40.2216208,43.6456663 39.2760967,42.7001422 L31.9997147,35.4237147 L24.7239033,42.7001422 C23.8213576,43.6026879 22.3835314,43.6437127 21.4323239,42.8232166 L21.2998578,42.7001422 C20.3543337,41.7546182 20.3543337,40.2216208 21.2998578,39.2760967 L21.2998578,39.2760967 L28.5757147,31.9997147 L21.2998578,24.7239033 C20.3543337,23.7783792 20.3543337,22.2453818 21.2998578,21.2998578 C22.2453818,20.3543337 23.7783792,20.3543337 24.7239033,21.2998578 L31.9997147,28.5757147 Z" fill="#000000" fill-rule="nonzero" />\n  </g>\n</svg>\n'
}),
define("shibui/src/components/form-input-search", ["require", "common", "./form-input", "text!shibui/svg/input-search.svg", "text!shibui/svg/input-reset.svg"], function(t) {
    var e = t("common"),
        i = t("./form-input"),
        n = i.new(),
        s = n.prototype;
    return s._graphic("input-search", t("text!shibui/svg/input-search.svg")), s._graphic("input-reset", t("text!shibui/svg/input-reset.svg")), s._expandOptions = function(t) {
        return i.prototype._expandOptions.call(this, e.absorb(t, {
            type: "search",
            lines: 1,
            attributes: {
                autocapitalize: "off"
            },
            placeholder: "form.search.placeholder"
        }))
    }, s._layout = function(t) {
        i.prototype._layout.call(this, t),
        this._classify(t.root, "shibui-form-input-search"),
        this._attr(t.root, "role") || this._attr(t.root, "role", "search"),
        this._build("", {
            extending: t,
            element: t.rim
        }, " reset-button <button>", {
            spoken: "a11y.form.search.reset",
            attributes: {
                type: "reset"
            }
        }, "  reset-icon", {
            icon: this.options.resetIcon || "input-reset"
        }, " submit-button <button>", {
            spoken: "a11y.form.search.submit",
            attributes: {
                type: "submit"
            }
        }, "  submit-icon", {
            icon: this.options.submitIcon || "input-search"
        })
    }, n
}),
define("text!bifocal/themes/read/default/svg/search.svg", [], function() {
    return '<svg version="1.1" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n  <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">\n    <line class="icon-hollow" stroke="#000000" stroke-linecap="round" stroke-width="3.5" x1="43.6970588" x2="51.0958824" y1="44.9509804" y2="52.22" />\n    <path class="icon-hollow" d="M27.7311765,11 C32.3391805,11 36.5109452,12.8677627 39.5307089,15.8875264 C42.5504726,18.9072901 44.4182353,23.0790548 44.4182353,27.6870588 C44.4182353,32.2950629 42.5504726,36.4668276 39.5307089,39.4865913 C36.5109452,42.506355 32.3391805,44.3741176 27.7311765,44.3741176 C23.1231724,44.3741176 18.9514077,42.506355 15.931644,39.4865913 C12.9118803,36.4668276 11.0441176,32.2950629 11.0441176,27.6870588 C11.0441176,23.0790548 12.9118803,18.9072901 15.931644,15.8875264 C18.9514077,12.8677627 23.1231724,11 27.7311765,11 Z" stroke="#000000" stroke-width="3" />\n    <path class="icon-hollow" d="M37.3458824,27.3458824 C37.3458824,22.1842941 33.1615883,18 28,18" stroke="#000000" stroke-linecap="round" stroke-width="3" />\n  </g>\n</svg>\n'
}),
define("bifocal/themes/read/default/src/parts/query-list", ["require", "common", "core/src/view", "./nav-action-item", "./nav-action-list", "text!../../svg/search.svg"], function(t) {
    var e = t("common"),
        i = t("core/src/view"),
        n = i.new(),
        s = n.prototype,
        o = t("./nav-action-item"),
        r = t("./nav-action-list");
    return s.MAX_ITEMS = 9, s._graphic("search", t("text!../../svg/search.svg")), s.$init = function(t, n) {
        this.options = e.absorb(n, {
            maximum: this.MAX_ITEMS
        }),
        this.queries = this._loadQueries() || [],
        i.prototype.$init.apply(this, arguments)
    }, s.addToQueries = function(t) {
        e.excise(this.queries, t),
        this.queries.splice(this.options.maximum),
        this.queries.unshift(t),
        this._saveQueries(this.queries),
        this._listQueries()
    }, s.removeFromQueries = function(t, i) {
        e.excise(this.queries, t),
        this._saveQueries(this.queries),
        i && i.relist === !1 || this._listQueries()
    }, s.clearQueries = function() {
        this.dom.items.clear(),
        this.queries.splice(0),
        this._saveQueries(this.queries)
    }, s._layout = function() {
        this.dom = this._build("query-list", " items", r, " clear-button .shibui-button", {
            skip: !this.options.removable,
            button: this.clearQueries.bind(this),
            label: "search.clear-recent",
            spoken: "a11y.search.recent-clear"
        }),
        this._listQueries()
    }, s._loadQueries = function() {
        if (this.options.bankKey) {
            var t = BIF.bank[this.options.bankScope || "global"];
            return t.get(this.options.bankKey)
        }
    }, s._saveQueries = function(t) {
        if (this.options.bankKey) {
            var e = BIF.bank[this.options.bankScope || "global"];
            e.set(this.options.bankKey, t)
        }
    }, s._listQueries = function() {
        this.dom.items.clear(),
        e.each(this.queries, function(t) {
            var i = {};
            this.options.removable && (i.onDelete = this.removeFromQueries.bind(this, t, {
                relist: !1
            })),
            this.dom.items.add((new o).update({
                icon: this.options.icon || "search",
                html: e.safe(t),
                spoken: {
                    html: this._phrase("a11y.search.recent-query") + " " + e.safe(t)
                },
                button: this.options.callback.bind(this, t)
            }), i)
        }, this)
    }, n
}),
define("text!bifocal/themes/read/default/svg/launch.svg", [], function() {
    return "<svg viewBox='0 0 64 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n  <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>\n    <path d='M24.7439903,47.7720149 L20.3134466,49.7676432 C19.7458573,50.0235416 19.0800782,49.90939 18.6298152,49.4789749 L13.6466494,44.7154699 C13.1855069,44.2746547 13.0457097,43.5935611 13.2958235,43.0062409 L15.3588063,38.8837414 C15.0717795,38.3531185 15.117897,37.6833605 15.5171796,37.1917748 C15.7854645,36.8614698 16.0515737,36.5342211 16.3155071,36.2100287 L9.74467933,34.7732737 C9.52477774,34.7251907 9.3182007,34.6291603 9.13969135,34.4920359 C8.46983967,33.9774803 8.34394734,33.0173285 8.85850296,32.3474768 L12.2828061,27.8896978 C12.5722852,27.5128522 13.0204843,27.2919714 13.4956799,27.2919714 L23.6723026,27.2919714 C29.6866793,20.1174189 34.0722858,15.2308759 36.8291221,12.6323425 C40.8185741,8.87197265 47.5374376,6.66119181 56.9857128,6 C56.3586639,13.3299535 54.9509778,18.9063331 52.7626544,22.729139 C51.1674341,25.5158467 45.85034,30.8138116 36.8113721,38.6230338 L36.8113721,49.1017585 C36.8113721,49.576954 36.5904913,50.0251531 36.2136457,50.3146322 L31.7667673,53.7305619 C31.0969156,54.2451175 30.1367638,54.1192252 29.6222082,53.4493735 C29.4834678,53.2687603 29.3868161,53.0594413 29.3393109,52.8367009 L27.909469,46.1325293 C27.3599411,46.5870846 26.8014846,47.0476643 26.2340993,47.5142685 C25.805906,47.8664079 25.237618,47.9496596 24.7439903,47.7720149 Z M43.375,23.3617021 C45.4690797,23.3617021 47.1666667,21.6613368 47.1666667,19.5638298 C47.1666667,17.4663228 45.4690797,15.7659574 43.375,15.7659574 C41.2809203,15.7659574 39.5833333,17.4663228 39.5833333,19.5638298 C39.5833333,21.6613368 41.2809203,23.3617021 43.375,23.3617021 Z' fill='#000000' fill-rule='nonzero' class='icon-solid' />\n    <path d='M10.2121752,48.1351615 L6.50512518,51.5143143 C6.27992847,51.7195918 6.15159697,52.0102193 6.15159697,52.3149363 L6.15159697,56.8744598 L10.4942773,56.8744598 C10.8013976,56.8744598 11.094085,56.7441032 11.2995316,56.5158171 L14.763975,52.6662329' stroke='#000000' stroke-width='3.25' stroke-linecap='round' fill-rule='nonzero' class='icon-hollow' />\n  </g>\n</svg>\n"
}),
define("text!bifocal/themes/read/default/svg/command-item.svg", [], function() {
    return "<svg viewBox='0 0 64 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n  <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>\n    <path d='M18.8,46.264 C19.472,46.264 19.792,45.88 19.792,45.208 L19.792,43.32 C23.6,42.872 25.84,40.216 25.84,37.016 C25.84,29.816 14.768,30.744 14.768,26.264 C14.768,24.472 16.464,22.968 18.864,22.968 C20.688,22.968 22.128,23.736 22.928,24.248 C23.536,24.632 24.048,24.568 24.4,23.96 L24.816,23.16 C25.104,22.584 25.072,22.072 24.528,21.72 C23.696,21.144 22.096,20.216 19.792,20.088 L19.792,18.04 C19.792,17.432 19.472,17.112 18.8,17.112 L18.544,17.112 C17.872,17.112 17.52,17.464 17.52,18.168 L17.52,20.12 C13.968,20.632 11.6,23.224 11.6,26.328 C11.6,33.176 22.672,32.44 22.672,37.112 C22.672,39.256 20.848,40.44 18.736,40.44 C16.496,40.44 14.736,39.352 13.84,38.68 C13.232,38.296 12.752,38.296 12.336,38.872 L11.824,39.608 C11.408,40.12 11.44,40.664 11.984,41.08 C12.88,41.784 14.768,43.064 17.52,43.32 L17.52,45.336 C17.52,45.944 17.872,46.264 18.544,46.264 L18.8,46.264 Z' fill='#000000' fill-rule='nonzero' class='icon-solid' />\n    <circle fill='#000000' cx='33.5' cy='40.5' r='2.5' class='icon-solid' />\n    <circle fill='#000000' cx='43.5' cy='40.5' r='2.5' class='icon-solid' />\n    <circle fill='#000000' cx='53.5' cy='40.5' r='2.5' class='icon-solid' />\n  </g>\n</svg>\n"
}),
define("text!bifocal/themes/read/default/svg/search-reset.svg", [], function() {
    return "<svg viewBox='0 0 64 64' version='1.1' xmlns='http://www.w3.org/2000/svg'>\n  <g stroke='none' stroke-width='1' fill='#000000' fill-rule='evenodd' class='icon-solid'>\n    <path d='M36.406124,31.2731898 L31.4075994,26.2746652 C30.7035437,25.5706095 29.5656955,25.5713889 28.8634114,26.2736731 L28.2353526,26.9017318 C27.5307115,27.606373 27.5335127,28.7430877 28.2363447,29.4459198 L33.2348694,34.4444444 L28.2363447,39.4429691 C27.5335127,40.1458012 27.5307115,41.2825159 28.2353526,41.9871571 L28.8634114,42.6152158 C29.5656955,43.3175 30.7035437,43.3182794 31.4075994,42.6142237 L36.406124,37.6156991 L41.4046487,42.6142237 C42.1087043,43.3182794 43.2465525,43.3175 43.9488367,42.6152158 L44.5768954,41.9871571 C45.2815366,41.2825159 45.2787354,40.1458012 44.5759033,39.4429691 L39.5773787,34.4444444 L44.5759033,29.4459198 C45.2787354,28.7430877 45.2815366,27.606373 44.5768954,26.9017318 L43.9488367,26.2736731 C43.2465525,25.5713889 42.1087043,25.5706095 41.4046487,26.2746652 L36.406124,31.2731898 Z M7,34 C7,31.2330428 16.8028179,18.7957258 16.8028179,18.7957258 C17.9907211,17.2516891 20.5400703,16 22.4818129,16 L53.4718941,16 C55.4204132,16 57,17.5816555 57,19.5338445 L57,48.4661555 C57,50.4178439 55.4136366,52 53.4718941,52 L22.4818129,52 C20.5332938,52 17.9856105,50.7507542 16.8028179,49.2026108 C16.8028179,49.2026108 7,36.7565706 7,34 Z' />\n  </g>\n</svg>\n";
}),
define("bifocal/themes/read/default/src/parts/diagnostic-dialog", ["require", "common", "./dialog", "shibui/src/components/form-input-search", "./query-list", "text!../../svg/launch.svg", "text!../../svg/command-item.svg", "text!../../svg/search-reset.svg"], function(require) {
    var C = require("common"),
        SUPER = require("./dialog"),
        CLASS = SUPER.new(),
        PROTO = CLASS.prototype,
        FormInputSearch = require("shibui/src/components/form-input-search"),
        QueryList = require("./query-list");
    return PROTO._graphic("launch", require("text!../../svg/launch.svg")), PROTO._graphic("command-item", require("text!../../svg/command-item.svg")), PROTO._graphic("search-reset", require("text!../../svg/search-reset.svg")), PROTO.BANK_KEY_HISTORY = "command:recent", PROTO.DIALOG_HEADING = {
        label: "debug.diagnostics"
    }, PROTO.DIALOG_CLASSES = "command-shade", PROTO.DIALOG_OPTIONS = {
        constrainToContentHeight: !1
    }, PROTO.run = function(t) {
        this._prepare(),
        this.dom.command.setValue(t),
        t = t.replace(/^\$\s*/, ""),
        t.trim() && (this.dom.queryList.addToQueries(t), this._runCommand(t))
    }, PROTO._layout = function() {
        this.dom = this._build("diagnostic-dialog", " field", "  command", {
            construct: FormInputSearch,
            with: {
                submitIcon: "launch",
                placeholder: {
                    html: "..."
                },
                control: {
                    spoken: "debug.diagnostics.enter-command"
                },
                attributes: {
                    autocorrect: "off",
                    autocomplete: "off"
                }
            }
        }, " outgoing <pre>", " controls", "  copy-output-button .shibui-button {debug.diagnostics.copy-output}", {
            button: !0
        }, " history", "  query-list", {
            construct: QueryList,
            with: {
                bankKey: this.BANK_KEY_HISTORY,
                callback: this.run.bind(this),
                icon: "command-item",
                removable: !0
            }
        })
    }, PROTO._listen = function(t) {
        this._handle("form:field:submit", this.dom.command),
        this._handle("form:field:reset", this.dom.command)
    }, PROTO._onFormFieldSubmitCommand = function(t) {
        t && BIF.events.stop(t),
        this.run(t.m.value.trim())
    }, PROTO._onFormFieldResetCommand = function(t) {
        this._output("")
    }, PROTO._onTapCopyOutputButton = function(t) {
        var e = document.createRange();
        e.selectNodeContents(this.dom.outgoing);
        var i = window.getSelection();
        i.removeAllRanges(),
        i.addRange(e);
        try {
            document.execCommand("copy") ? console.log("[$] copied!", i.toString()) : console.log("[$] unable to copy")
        } catch (t) {
            console.log("[$] error while copying:", t)
        }
        i.removeAllRanges()
    }, PROTO._runCommand = function(cmd) {
        var result = this._shortcutCommand(cmd);
        try {
            result = result || eval(cmd)
        } catch (t) {
            return console.warn("[$] Unknown command:", t), this._output("UNKNOWN COMMAND")
        }
        if ("undefined" == typeof result || null === result)
            return this._output("NO RESULT");
        var output;
        try {
            output = JSON.stringify(result, null, 2)
        } catch (t) {
            return console.warn("[$] Unserializable result:", result), this._output("UNSERIALIZABLE RESULT: " + result)
        }
        this._output(output)
    }, PROTO._shortcutCommand = function(t) {
        var e;
        if (e = t.match(/^error:?\s*(.*)/i)) {
            var i = e[1].trim() || "☠️☠️☠️";
            throw this._output("THROWING: " + i), i
        }
        if (e = t.match(/^(re|relaunch)$/i))
            return setTimeout(location.reload.bind(location, !0), 200), "RELAUNCH";
        if (e = t.match(/^trace[:\s]+reset/i))
            return BIF.tracer.reset();
        if (e = t.match(/^trace[:\s]+([\w-]+)/i))
            return BIF.tracer.install(e[1]);
        if (e = t.match(/^journal$/i))
            return BIF.journal.entries;
        for (var n = t.split(" "), s = 0, o = BIF.objects.commands.all.length; s < o; ++s) {
            var r = BIF.objects.commands.all[s],
                a = r.refresh().name;
            if (a == n[0].toLowerCase())
                return r.execute(n.slice(1).join(" ")) || "[INVOKE] " + a
        }
    }, PROTO._output = function(t) {
        this._textify(this.dom.outgoing, {
            html: C.safe(t)
        })
    }, CLASS
}),
define("bifocal/themes/read/default/src/features/diagnostics", ["require", "common", "../parts/diagnostic-dialog"], function(t) {
    var e = t("common"),
        i = t("../parts/diagnostic-dialog");
    return function(t) {
        var n = 0,
            s = 0,
            o = location.host.match(/dev\.dv\.io|alpha/);
        return t.runsheet.append(["bifocal:command:register", "registerDiagnosticsCommand"], ["bifocal:version:tap", "onTapVersion"]), t.registerDiagnosticsCommand = function(t) {
            t.m.commands.register(function() {
                return {
                    group: o ? "diagnostics" : void 0,
                    icon: "command-item",
                    name: "diagnostic-dialog",
                    shortcut: "shift-$",
                    callback: function() {
                        (new i).shade().grow()
                    }
                }
            })
        }, t.onTapVersion = function(t) {
            var i = e.deltaMilliseconds();
            i - s > 2e3 ? (s = i, n = 1) : n += 1,
            n >= 5 && (o = !0, BIF.objects.commands.find("diagnostic-dialog").refresh(), BIF.objects.commands.execute("commands"))
        }, !0
    }
}),
define("bifocal/themes/listen/default/src/default", ["require", "core/src/theme", "./features/world", "./features/accessibility", "./features/shade-controls", "../../../read/default/src/features/covers", "../../../read/default/src/features/cover-colors", "../../../read/default/src/features/chapters", "./features/marks", "./features/sleep", "./features/speed", "./features/history", "./features/timeline", "./features/overview", "./features/compat", "../../../read/default/src/features/adaptive-display-area", "../../../read/default/src/features/expiration", "../../../read/default/src/features/diagnostics"], function(t) {
    var e = t("core/src/theme"),
        i = new e;
    return i.addFeature(t("./features/world")), i.addFeature(t("./features/accessibility")), i.addFeature(t("./features/shade-controls")), i.addFeature(t("../../../read/default/src/features/covers")), i.addFeature(t("../../../read/default/src/features/cover-colors")), i.addFeature(t("../../../read/default/src/features/chapters")), i.addFeature(t("./features/marks")), i.addFeature(t("./features/sleep")), i.addFeature(t("./features/speed")), i.addFeature(t("./features/history")), i.addFeature(t("./features/timeline")), i.addFeature(t("./features/overview")), i.addFeature(t("./features/compat")), i.addFeature(t("../../../read/default/src/features/adaptive-display-area")), i.addFeature(t("../../../read/default/src/features/expiration")), i.addFeature(t("../../../read/default/src/features/diagnostics")), i
}),
define("bifocal/themes/read/dewey/src/features/error-capture", ["require", "common"], function(t) {
    var e = t("common");
    return function(t) {
        return BIF.events.on("bifocal:error", function(t) {
            t.preventDefault();
            var i = e.clone(t.m);
            i.errorMessage = "BIFOCAL: " + i.errorMessage,
            i.errorData = e.absorb(i.errorData, {}),
            i.errorData.bifocal = e.absorb(BIF.state, {
                title: e.try(BIF, "objects.codex.title()"),
                version: BIF.version
            }),
            BIF.objects.shell.transmit(e.absorb(i, {
                name: "sage:submit:error",
                dest: "client"
            }))
        }), !0
    }
}),
define("bifocal/themes/read/dewey/src/parts/shell", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.$init = function() {
        this.bridge = this._constructBridge(),
        this.info = this._parseUA(this.bridge.userAgent),
        this._addCapabilityClasses(),
        BIF.events.on(window, "message", this._onWindowMessageEvent.bind(this)),
        BIF.events.on(window, this._bridgeMessageEventType("receive"), this._onBridgeMessageEvent.bind(this)),
        this.has("network:request-override") && BIF.events.on("network:request", this._onNetworkRequest.bind(this)),
        BIF.events.on("msg:platform:traits", this._onMsgPlatformTraits.bind(this)),
        BIF.events.on("msg:command:execute", this._onMsgCommandExecute.bind(this)),
        BIF.events.on("bifocal:reveal", function() {
            this.transmit({
                name: "platform:traits",
                dest: "shell"
            })
        }.bind(this))
    }, n.transmit = function(t) {
        "string" == typeof t && (t = {
            name: t
        }),
        "string" != typeof t.dest && (t.dest = "client"),
        "string" != typeof t.source && (t.source = "bifocal"),
        this._dispatchMessageObject(t)
    }, n.has = function(t) {
        if (this.bridge.capabilities) {
            var e = this.bridge.capabilities[t];
            if ("undefined" != typeof e)
                return e;
            if ("audio:proxy" === t)
                return !!this.info
        }
        if (t.match(/^debug:/))
            return this.info && "DEBUG" == this.info.flavor
    }, n._constructBridge = function() {
        var t,
            e = {};
        try {
            t = window.BRIDGE || window.parent.BRIDGE
        } catch (t) {}
        return t && ("function" == typeof t.clientToShellAsJSON ? e.clientToShell = function(e) {
            t.clientToShellAsJSON(JSON.stringify(e))
        } : "function" == typeof t.clientToShell && (e.clientToShell = t.clientToShell.bind(t)), "function" == typeof t.capabilities ? e.capabilities = t.capabilities() : e.capabilities = t.capabilities, "string" == typeof e.capabilities && (e.capabilities = JSON.parse(e.capabilities)), "function" == typeof t.userAgent ? e.userAgent = t.userAgent() : e.userAgent = t.userAgent, "function" == typeof t.environment ? e.environment = t.environment() : e.environment = t.environment), e.environment = e.environment || "", e.userAgent = e.userAgent || navigator.userAgent, e.capabilities = e.capabilities || {}, e.clientToShell || (e.clientToShell = this._clientToShellFallback.bind(this)), e
    }, n._parseUA = function(t) {
        var e = t.match(/\((\w+; V\d+; \w+; .*?)\)/);
        if (e) {
            var i = e[1].split("; "),
                n = {};
            return n.name = i.shift(), n.spec = this._specNumber(i.shift()), n.platform = i.shift(), n.version = i.shift(), n.flavor = i.shift() || "RELEASE", n
        }
    }, n._addCapabilityClasses = function() {
        if (this.info) {
            var t = this.info.platform.toLowerCase();
            document.documentElement.classList.add("compat-bridged-" + t)
        }
    }, n._onWindowMessageEvent = function(t) {
        var i;
        try {
            i = JSON.parse(t.data)
        } catch (t) {
            return
        }
        i && i.name == this._bridgeMessageEventType("receive") && this._receiveMessageObject(e.absorb(i.detail, {
            dest: "bifocal"
        }))
    }, n._onBridgeMessageEvent = function(t) {
        this._receiveMessageObject(t.detail),
        t.preventDefault()
    }, n._receiveMessageObject = function(t) {
        if ("bifocal" == t.dest) {
            this._logMessageObject(t);
            var i = e.absorb(t, {});
            delete i.name,
            delete i.dest,
            BIF.events.dispatch("msg:" + t.name, i)
        }
    }, n._dispatchMessageObject = function(t) {
        this._logMessageObject(t),
        this.bridge.clientToShell(t)
    }, n._logMessageObject = function(t) {
        "client" != t.dest && "DEBUG" != e.try(this, "info.flavor") || console.debug("[BRIDGE] ➜ %s — %s %o", t.dest, t.name, t)
    }, n._onNetworkRequest = function(t) {
        var e = t.m,
            i = this.info && this.info.spec >= "V5";
        if (i && (i = "GET" != e.method, !i))
            for (var n in e.headers) {
                i = !0;
                break
            }
        if (i = i || e.url.match(/\/_d\//)) {
            var s = {};
            e.method && (s.method = e.method),
            e.headers && (s.headers = e.headers),
            e.body && (s.body = e.body),
            e.url += e.url.match(/\?/) ? "&" : "?",
            e.url += "_override=" + btoa(JSON.stringify(s)),
            e.method = "GET",
            e.headers = {},
            e.body = null
        }
    }, n._clientToShellFallback = function(t) {
        try {
            var e = new CustomEvent(this._bridgeMessageEventType("send"), {
                detail: t,
                cancelable: !0
            });
            window.dispatchEvent(e) && parent !== self && parent.postMessage(JSON.stringify(t), "*")
        } catch (e) {
            console.log("[SHELL] unable to send message:", t)
        }
    }, n._bridgeMessageEventType = function(t) {
        var e;
        return e = this.info && this.info.spec ? this.info.spec : this._specNumber(BIF.theme.data.spec), e && e >= 10 ? "bridge:" + t : "dewey:bridge:" + t
    }, n._specNumber = function(t) {
        var e = (t || "").match(/^V(\d+)/);
        return e ? parseFloat(e[1]) : null
    }, n._onMsgPlatformTraits = function(t) {
        BIF.events.dispatch("platform:traits", {
            traits: t.m
        })
    }, n._onMsgCommandExecute = function(t) {
        console.log("[SHELL] remote command:", t.m);
        var e = {
            name: "command:failure",
            dest: t.m.source
        };
        try {
            var i = BIF.objects.commands.find(t.m.command);
            e.result = i.execute.apply(i, t.m.arguments),
            e.name = "command:success"
        } catch (t) {
            e.error = "" + t
        }
        this.transmit(e)
    }, i
}),
define("bifocal/themes/listen/dewey/src/features/shell", ["require", "../../../../read/dewey/src/parts/shell"], function(t) {
    var e = t("../../../../read/dewey/src/parts/shell");
    return function(t) {
        return BIF.objects.shell = new e, t.runsheet.append(["bifocal:ready", "communicateReadiness"], ["msg:nav:back", "onMsgNavBack"], ["bifocal:spool:state", "onBifocalSpoolState"]), t.communicateReadiness = function() {
            BIF.objects.shell.transmit({
                name: "bifocal:ready",
                orientation: void 0
            }),
            setTimeout(function() {
                BIF.objects.shell.transmit("bifocal:idle")
            }, 1e4)
        }, t.onMsgNavBack = function() {
            BIF.state.mode != BIF.objects.modeManager.defaultMode ? BIF.objects.modeManager.exitMode(BIF.state.mode) : BIF.objects.shell.transmit({
                name: "nav:back",
                dest: "client"
            })
        }, t.onBifocalSpoolState = function(t) {
            BIF.objects.shell.transmit({
                name: "bifocal:spool:state",
                dest: "client",
                state: t.m.state,
                was: t.m.was
            })
        }, !0
    }
}),
define("bifocal/themes/read/dewey/src/parts/bank-scope-native", ["require", "core/src/bank/bank-scope-memory"], function(t) {
    var e = t("core/src/bank/bank-scope-memory"),
        i = e.new(),
        n = i.prototype;
    return n.COMMIT_DELAY_MS = 1e3, n._commit = function() {
        this._eachFlushKey(function(t) {
            BIF.objects.shell.transmit({
                name: "bank:write",
                dest: "shell",
                scope: this._.name,
                key: t,
                value: this.get(t)
            })
        })
    }, i
}),
define("bifocal/themes/read/dewey/src/features/native-bank", ["require", "common", "../parts/quirks", "../parts/bank-scope-native"], function(t) {
    var e = t("common"),
        i = (t("../parts/quirks"), t("../parts/bank-scope-native"));
    return function(t) {
        function n(n) {
            if (BIF.bank = {
                global: new i("bifocal", n.m.scopes.bifocal),
                title: new i(s, n.m.scopes[s])
            }, n.m.scopes.conveyance) {
                var o = new i("conveyance", n.m.scopes.conveyance);
                BIF.deviceId = o.get("sentry.chip");
                var r = o.get("bifocal.tdata"),
                    a = e.try(r, "codex.title") || {},
                    c = e.try(t.data, "codex.title") || {},
                    l = a.titleId || a.slug,
                    h = c.titleId || c.slug;
                l == h && e.absorb(r, t.data)
            }
            BIF.events.dispatch("bifocal:bank:ready"),
            BIF.events.dispatch("bifocal:intercept:continue")
        }
        if (!BIF.objects.shell.has("bank"))
            return !1;
        t.runsheet.removeMethods("loadBank"),
        t.runsheet.prepend(["bifocal:intercept", "loadBank"]);
        var s;
        return t.loadBank = function(t) {
            s || (s = BIF.map["-odread-bank-scope"], BIF.events.stop(t), BIF.events.once("msg:bank:read", n), BIF.objects.shell.transmit({
                name: "bank:read",
                dest: "shell",
                source: "bifocal",
                scopes: ["conveyance", "bifocal", s]
            }))
        }, !0
    }
}),
define("bifocal/themes/read/dewey/src/parts/dewey-codex", ["require", "common", "../../../default/src/parts/codex"], function(t) {
    var e = t("common"),
        i = t("../../../default/src/parts/codex"),
        n = i.new(),
        s = n.prototype;
    return s.freshen = function(t) {
        var n = BIF.theme.data.codex || {},
            s = this._.memos = this._.memos || {};
        n.title && (s.titleId = n.title.titleId || n.title.slug || s.titleId),
        n.loan && (s.loanKey = n.loan.psnKey || n.loan.slug || s.loanKey),
        s.coverPath = e.try(n, "title.cover.imageURL") || s.coverPath,
        "string" == typeof e.try(n, "title.cover.color") && (s.coverColor = e.hexToRGB(n.title.cover.color));
        var o = e.try(n, "library.key"),
            r = this.titleId(),
            a = BIF.theme.data.thunder;
        if (a && o && r) {
            var c = e.parameterizeURL(a.replace(/\/+$/, "") + "/v2/libraries/" + o + "/media/" + r, {
                "x-client-id": "bifocal"
            });
            BIF.network.sendRequest(c, {
                external: !0,
                success: function(e) {
                    try {
                        var i = JSON.parse(e);
                        this._memoizeThunderData(i)
                    } catch (t) {
                        console.warn("[DEWEY-CODEX] failed to memoize Thunder data", t)
                    }
                    this._onFreshened(t)
                }.bind(this),
                failure: function() {
                    console.warn("[DEWEY-CODEX] thunder request failure", arguments),
                    this._onFreshened(t)
                }.bind(this),
                timeout: 2500
            })
        } else
            i.prototype.freshen.apply(this, arguments)
    }, s.libraryName = function() {
        return this._memoizing("libraryName", function() {
            return e.try(BIF.theme.data.codex, "library.name")
        })
    }, s.libraryColors = function() {
        return this._memoizing("libraryColors", function() {
            return e.select(e.try(BIF.theme.data.codex, "library.colors"), function(t) {
                return e.hexToRGB(t)
            })
        })
    }, s.libraryLogoURL = function() {
        return this._memoizing("libraryLogoURL", function() {
            return e.try(BIF.theme.data.codex, "library.logoURL") || "/_d/error"
        })
    }, s.titleId = function() {
        return this._memoizing("titleId")
    }, s.loanKey = function() {
        return this._memoizing("loanKey")
    }, s.isOwned = function() {
        return this._memoizing("isOwned") || !1
    }, s.isAvailable = function() {
        return this._memoizing("isAvailable") || !1
    }, s.pathToTitleDetails = function(t) {
        var i = e.try(BIF.theme.data.codex, "library.key"),
            n = this.titleId();
        if (i && n) {
            var s = "library/" + i + "/title/" + n;
            return s += t ? "/" + t : ""
        }
    }, s.pathToLoanAction = function(t) {
        var e = this.loanKey();
        if (e && t)
            return "shelf/loans/" + e + "/" + t
    }, s._memoizeThunderData = function(t) {
        var e = this._.memos = this._.memos || {};
        return e.title = t.title, e.attribution = t.firstCreatorName, e.rawDescription = t.description, e.isOwned = "always" == t.availabilityType || !!t.isOwned, e.isAvailable = "always" == t.availabilityType || !!t.isAvailable, e
    }, n
}),
define("bifocal/themes/read/dewey/src/features/codex-from-tdata", ["require", "../parts/dewey-codex"], function(t) {
    return function(e) {
        return e.loadCodex = function() {
            var e = t("../parts/dewey-codex");
            BIF.objects.codex = new e
        }, !0
    }
}),
define("bifocal/themes/read/dewey/src/features/dervish-activity", ["require"], function(t) {
    return function(t) {
        function e(t, e, i) {
            BIF.objects.shell.transmit({
                name: "dervish:activity:dispatch",
                dest: "shell",
                environment: t.environment,
                activities: t.activities
            }),
            e()
        }
        if (!BIF.objects.shell.has("dervish:activity"))
            return !1;
        var i = t.loadDervish;
        return t.loadDervish = function() {
            i(),
            BIF.objects.activity._sendActivity = e
        }, !0
    }
}),
define("bifocal/themes/read/dewey/src/features/forward-activity", ["require"], function(t) {
    return function(t) {
        return t.runsheet.append(["dervish:activity:record", "forwardActivityToClient"]), t.forwardActivityToClient = function(t) {
            BIF.objects.shell.transmit({
                name: "dervish:activity:record",
                dest: "client",
                data: t.m
            })
        }, !0
    }
}),
define("bifocal/themes/read/dewey/src/features/foreground-sync", ["require", "common"], function(t) {
    var e = t("common");
    return function(t) {
        t.runsheet.append(["bifocal:reveal", "syncInForegroundOnly"]);
        var i = 18e4,
            n = {},
            s = 0;
        t.syncInForegroundOnly = function() {
            n = {
                ready: BIF.events.on("bifocal:ready", o),
                background: BIF.events.on("msg:bifocal:view:background", r),
                foreground: BIF.events.on("msg:bifocal:view:foreground", a),
                transfer: BIF.events.on("msg:client:possession:transfer", c)
            }
        };
        var o = function() {
                setTimeout(l, 0)
            },
            r = function() {
                s = e.epochMilliseconds(),
                BIF.events.off(n.pauseSyncInBackground),
                n.pauseSyncInBackground = BIF.events.on("bifocal:possession:autosync", BIF.events.stop),
                BIF.objects.shell.transmit("bifocal:relay:background")
            },
            a = function() {
                BIF.events.off(n.pauseSyncInBackground);
                var o = e.epochMilliseconds(),
                    r = s || BIF.state.ready || 1 / 0;
                o - r > i && e.defer(t, "fg-sync", h, 1e3),
                BIF.objects.shell.transmit("bifocal:relay:foreground")
            },
            c = function(t) {
                BIF.objects.possession.loadFromData(t.m.possession)
            },
            l = function() {
                var t = BIF.objects.possession.BANK_KEY_PREFIX + ":transfer";
                BIF.bank.title.get(t + ":position") && (BIF.objects.possession.loadFromBank(t), BIF.bank.title.set(t + ":timestamps"), BIF.bank.title.set(t + ":position"), BIF.bank.title.set(t + ":marks"), BIF.bank.title.set(t + ":statistics"))
            },
            h = function() {
                BIF.events.dispatch("bifocal:possession:autosync", {}, !0) && BIF.objects.possession.sync()
            };
        return !0
    }
}),
define("bifocal/themes/read/dewey/src/parts/expiration-screen", ["require", "common", "../../../default/src/parts/expiration-screen"], function(t) {
    var e = t("common"),
        i = t("../../../default/src/parts/expiration-screen"),
        n = i.new(),
        s = n.prototype;
    return s.present = function(t) {
        var n = this._prepare();
        return "warning" == t ? (this._textify(n.heading, "expiration-screen.heading"), this._textify(n.prompt, "expiration-screen.warning"), n.extendButton = n.extendButton || this._element({
            button: this._onTapExtendButton.bind(this),
            classes: "shibui-button",
            parentNode: n.answers,
            pos: "prepend",
            label: "expiration-screen.extend",
            substitutions: {
                TIME: 1e3 * BIF.state.expires
            }
        })) : (this._textify(n.heading, "expiration-screen.heading"), this._textify(n.prompt, "expiration-screen.prompt"), n.extendButton && n.answers.removeChild(e.excise(n, "extendButton"))), i.prototype.present.call(this)
    }, s._onTapExtendButton = function(t) {
        this.extract()
    }, s._onTapAcceptButton = function() {
        BIF.objects.shell.transmit({
            name: "nav:back",
            dest: "client"
        })
    }, n
}),
define("bifocal/themes/read/dewey/src/features/expiration", ["require", "../parts/expiration-screen"], function(t) {
    var e = t("../parts/expiration-screen");
    return function(t) {
        function i() {
            var t = BIF.objects;
            return t.expirationScreen = t.expirationScreen || new e, t.expirationScreen.isInDocument() || t.expirationScreen.impart(BIF.elements.modalLayer), t.expirationScreen
        }
        t.runsheet.append(["bifocal:expiration:warning", "onBifocalExpirationWarning"], ["bifocal:expiration", "onBifocalExpiration"]),
        t.onBifocalExpirationWarning = function(t) {
            t.preventDefault(),
            BIF.objects.expirationScreen || (i().present("warning"), BIF.objects.shell.transmit({
                name: "bifocal:expiration",
                timeRemaining: t.m
            }))
        },
        t.onBifocalExpiration = function(t) {
            t.preventDefault(),
            i().present("expired"),
            BIF.objects.shell.transmit({
                name: "bifocal:expiration",
                timeRemaining: t.m
            })
        }
    }
}),
define("bifocal/themes/read/dewey/src/features/network-info", ["require", "common"], function(t) {
    t("common");
    return function(t) {
        function e(t) {
            t.m.reachable ? BIF.network._goOnline() : BIF.network._goOffline()
        }
        return !!BIF.objects.shell.has("network:info") && (BIF.network.deafenForOffline(), BIF.events.on("msg:network:info", e), !0)
    }
}),
define("text!bifocal/themes/read/dewey/svg/exit.svg", [], function() {
    return '<svg version="1.1" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n  <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">\n    <path class="icon-solid icon-hollow" d="M30.5857864,52.5 L49.5857864,52.5 C50.6903559,52.5 51.5857864,51.6045695 51.5857864,50.5 L51.5857864,13.5 C51.5857864,12.3954305 50.6903559,11.5 49.5857864,11.5 L30.5857864,11.5 L30.5857864,11.5" fill="#000000" fill-opacity="0.18" stroke="#000000" stroke-width="3" />\n    <line class="icon-hollow" stroke="#000000" stroke-linecap="round" stroke-width="3" x1="38" x2="13" y1="33" y2="33" />\n    <path class="icon-hollow" d="M19.0857864,24 L11.7928932,32.2928932 C11.4023689,32.6834175 11.4023689,33.3165825 11.7928932,33.7071068 L19.0857864,42" stroke="#000000" stroke-linecap="round" stroke-width="3" />\n  </g>\n</svg>\n'
}),
define("bifocal/themes/read/dewey/src/features/client-navigation", ["require", "../../../../read/default/src/parts/nav-action-item", "shibui/src/components/chevron", "text!../../svg/exit.svg"], function(t) {
    var e = t("../../../../read/default/src/parts/nav-action-item"),
        i = t("shibui/src/components/chevron");
    return function(n) {
        function s(t, e) {
            e && BIF.events.stop(e),
            BIF.events.dispatch(t),
            BIF.objects.shell.transmit({
                name: t,
                dest: "client"
            })
        }
        return n.runsheet.append(["bifocal:command:register", "registerCloseBookCommand"], ["bifocal:ready", "loadBackButton"]), n.registerCloseBookCommand = function(i) {
            var n = t("text!../../svg/exit.svg");
            e.prototype._graphic("exit", n),
            i.m.commands.register({
                group: "access",
                name: "close-book",
                icon: "exit",
                shortcut: ["shift-Q"],
                callback: s.bind(this, "nav:back")
            })
        }, n.loadBackButton = function() {
            var t = {
                label: "client.back-button",
                spoken: "commands.close-book",
                classes: "client-back-button",
                button: s.bind(this, "nav:back")
            };
            "magazine" == BIF.objects.codex.format() && (t.spoken = "commands.close-magazine");
            var o = (new e).update(t),
                r = BIF.objects.navigation.dom.actions.add(o, {
                    priority: "primary"
                });
            new i(r.dom.icon).bearing("w"),
            BIF.events.on("msg:nav:back:noop", s.bind(n, "nav:shelf"))
        }, !0
    }
}),
define("bifocal/themes/read/dewey/src/parts/library-actions", ["require", "common", "core/src/view"], function(t) {
    var e = t("common"),
        i = t("core/src/view"),
        n = i.new(),
        s = n.prototype;
    return s.refresh = function() {
        this._tailor(this._prepare())
    }, s._layout = function(t) {
        this._build("dewey-library-actions", {
            extending: t
        }, " links", "  action-link", {
            button: !0
        }, "  view-link", {
            button: !0
        }, " logo <img>")
    }, s._listen = function(t, e) {
        this._handle("load", e.logo),
        this._handle("error", e.logo)
    }, s._tailor = function(t) {
        var e = BIF.objects.codex;
        e.pathToTitleDetails() ? this.impart() : this.extract();
        var i = !1;
        "magazine" == e.format() ? i = !0 : e.loanKey() ? this._textify(t.actionLink, "library-actions.full-action") : e.isOwned() ? e.isAvailable() ? this._textify(t.actionLink, "library-actions.sample-available") : this._textify(t.actionLink, "library-actions.sample-unavailable") : i = !0,
        this._classify(t.actionLink, "hide", i),
        this._textify(t.viewLink, "library-actions.view-action"),
        this._attr(t.logo, "src", e.libraryLogoURL())
    }, s._onTapActionLink = function() {
        var t = BIF.objects.codex;
        if (t.loanKey())
            this._goToClientPath(t.pathToLoanAction("return"));
        else {
            var e = t.isAvailable() ? "borrow" : "hold";
            this._goToClientPath(t.pathToTitleDetails("request#" + e))
        }
    }, s._onTapViewLink = function() {
        var t = BIF.objects.codex;
        this._goToClientPath(t.pathToTitleDetails())
    }, s._goToClientPath = function(t) {
        BIF.objects.shell.transmit({
            name: "nav:go",
            path: t,
            dest: "client"
        })
    }, s._onLoadLogo = function() {
        BIF.events.off(this.handlers._onBifocalNetwork),
        delete this.handlers._onBifocalNetwork,
        this._declassify(this.dom.logo, "is-erroring")
    }, s._onErrorLogo = function() {
        BIF.events.off(this.handlers._onBifocalNetwork),
        delete this.handlers._onBifocalNetwork,
        this._handle("bifocal:network"),
        this._classify(this.dom.logo, "is-erroring")
    }, s._onBifocalNetwork = function(t) {
        var i = this.dom.logo.src.replace(/#.*$/, "") + "#" + e.epochSeconds();
        this.dom.logo.src = i
    }, n
}),
define("bifocal/themes/read/dewey/src/features/client-integration", ["require", "../parts/library-actions"], function(t) {
    var e = t("../parts/library-actions");
    return function(t) {
        return t.runsheet.append(["bifocal:overview:dialog", "addLibraryActionsToOverview"]), t.addLibraryActionsToOverview = function(t) {
            new e(t.m.dialog.dom.actions).refresh()
        }, !0
    }
}),
define("bifocal/themes/read/dewey/src/features/haptics", ["require", "shibui/src/haptics"], function(t) {
    return function(e) {
        if (!BIF.objects.shell.has("ui:haptics"))
            return !1;
        e.runsheet.append(["bifocal:seeker:place", "onSeekerPlaceHaptics"]);
        var i,
            n,
            s = t("shibui/src/haptics"),
            o = s.attach(BIF.objects.shell);
        return e.onSeekerPlaceHaptics = function(t) {
            if ("seekometer" == t.m.source) {
                (new Date).getTime();
                i ? !n && e.arePlacesAHapticTickApart(i, t.m.place) && (n = BIF.events.on("bifocal:place", function() {
                    clearTimeout(e.hapticTimer),
                    o.select(),
                    BIF.events.off(n),
                    n = i = void 0
                })) : o.prepare(),
                i = t.m.place
            }
        }, e.arePlacesAHapticTickApart = function(t, e) {
            return t.pages[0] != e.pages[0]
        }, !0
    }
}),
define("bifocal/themes/listen/dewey/src/features/haptics", ["require", "../../../../read/dewey/src/features/haptics", "shibui/src/haptics"], function(t) {
    return function(e) {
        var i = t("../../../../read/dewey/src/features/haptics");
        if (!i(e))
            return !1;
        var n = t("shibui/src/haptics"),
            s = n.attach(BIF.objects.shell);
        return e.runsheet.append(["bifocal:slingshot:show", "onSlingshotShowHaptics"], ["bifocal:slingshot:step", "onSlingshotStepHaptics"], ["bifocal:slingshot:seek", "onSlingshotSeekHaptics"]), e.onSlingshotShowHaptics = function(t) {
            s.prepare()
        }, e.onSlingshotStepHaptics = function(t) {
            t.m.step > 0 && s.select()
        }, e.onSlingshotSeekHaptics = function(t) {
            s.impact("light")
        }, e.arePlacesAHapticTickApart = function(t, e) {
            var i = 5e3,
                n = Math.floor(t.bookMilliseconds / i),
                s = Math.floor(e.bookMilliseconds / i);
            return n != s
        }, !0
    }
}),
define("bifocal/themes/read/dewey/src/features/a11y-magic-tap", ["require"], function(t) {
    return function(t) {
        if (BIF.objects.shell.has("accessibility:gestures"))
            return t.runsheet.append(["msg:bifocal:view:foreground", "subscribeMagicTap"], ["msg:bifocal:view:background", "unsubscribeMagicTap"], ["msg:accessibility:gesture", "onMagicTap"]), t.subscribeMagicTap = function() {
                BIF.objects.shell.transmit({
                    name: "accessibility:gesture:subscribe",
                    gesture: "ios-magic-tap",
                    dest: "shell"
                })
            }, t.unsubscribeMagicTap = function() {
                BIF.objects.shell.transmit({
                    name: "accessibility:gesture:unsubscribe",
                    gesture: "ios-magic-tap",
                    dest: "shell"
                })
            }, t.onMagicTap = function(t) {
                "ios-magic-tap" == t.m.gesture && ("accessing" != BIF.state.mode ? BIF.objects.commands.execute("read-from-here") : BIF.objects.modeManager.enterMode("reading"))
            }, !0
    }
}),
define("bifocal/themes/listen/dewey/src/features/a11y-magic-tap", ["require", "../../../../read/dewey/src/features/a11y-magic-tap"], function(t) {
    return function(e) {
        return t("../../../../read/dewey/src/features/a11y-magic-tap")(e), e.onMagicTap = function(t) {
            if ("ios-magic-tap" == t.m.gesture) {
                BIF.objects.spool.toggle();
                var e = document.querySelector(".playback-toggle:not([aria-hidden])");
                e && e.focus()
            }
        }, !0
    }
}),
define("bifocal/themes/listen/dewey/src/features/background-activity-instructions", ["require", "common", "core/src/shade"], function(t) {
    var e = t("common"),
        i = t("core/src/shade");
    return function(t) {
        function n() {
            if (!c) {
                if ("ready" != a)
                    return a = "pending";
                r = new i(BIF.objects.navigation.dom.shades, {
                    constrainToContentHeight: !1
                }),
                r.build("background-activity-instructions", " <p> {background-activity-instructions.intro}", " <p> {background-activity-instructions.steps.0}", " <ol>", "  <li> {background-activity-instructions.steps.1}", {
                    enliven: {
                        "#app-info": o
                    }
                }, "  <li> {background-activity-instructions.steps.2}", "  <li> {background-activity-instructions.steps.3}", " controls", "  .shibui-button {background-activity-instructions.acknowledge}", {
                    button: s
                }),
                r.grow(),
                c = !0
            }
        }
        function s() {
            "pending" == a && (a = "launching"),
            r && (r.minimize(), delete r)
        }
        function o() {
            BIF.objects.shell.transmit({
                name: "diagnostics:platform-settings",
                dest: "shell",
                settings: "app"
            })
        }
        t.runsheet.append(["platform:traits", "onPlatformTraitsForBackgroundActivity"], ["bifocal:ready", "onBifocalReadyForBackgroundActivity"]);
        var r,
            a = "launching",
            c = !1;
        return t.onPlatformTraitsForBackgroundActivity = function(t) {
            var i = e.try(t.m, "traits.profile.backgroundActivity");
            "restricted" == i ? n() : s()
        }, t.onBifocalReadyForBackgroundActivity = function() {
            var t = "pending" == a;
            a = "ready",
            t && n()
        }, !0
    }
}),
define("bifocal/themes/read/dewey/src/parts/audio-proxy-native", ["require", "common"], function(t) {
    var e = t("common"),
        i = e.Class.new(),
        n = i.prototype;
    return n.MSG_PREFIX = "audioproxy", n.TRANSMIT_CONFIG_DELAY_MS = 75, n.$init = function(t) {
        this._.transmitQueue = {},
        this._.callbacks = {},
        this._listenToMessages()
    }, n.setPlaybackRate = function(t) {
        this._transmitConfiguration("playbackRate", t)
    }, n.scheduleSleep = function(t) {
        "number" == typeof t.at ? this._transmitConfiguration("sleepAtPosition", t.at, 0) : this._transmitConfiguration("sleepMilliseconds", t.in || 0, 0)
    }, n.play = function() {
        this._instruct("play")
    }, n.pause = function() {
        delete this._.awaitingSeekingMessage,
        this._instruct("pause")
    }, n.position = function() {
        return this._.position
    }, n.seek = function(t, e) {
        return isFinite(e) ? (this._.ended = !1, this._.mediaPath = t, this._.position = Math.round(e), this._.awaitingSeekingMessage = !0, void this._instruct("seek", {
            path: this._.mediaPath,
            ms: this._.position
        })) : console.error("[APN] refusing to seek to ", e)
    }, n.on = function(t) {
        this._.callbacks.position = t.position,
        this._.callbacks.ended = t.ended,
        this._.callbacks.error = t.error
    }, n.hangup = function() {
        this._.callbacks.position = null,
        this._.callbacks.ended = null,
        this._.callbacks.error = null
    }, n._startTransmission = function() {
        var t = !1;
        BIF.objects.shell.transmit({
            name: "audioproxy:init",
            dest: "shell",
            autoplay: t
        }),
        this._.transmissable = !0,
        this._transmitConfiguration(null, null, 200)
    }, n._transmitConfiguration = function(t, e, i) {
        t && (this._.transmitQueue[t] = e),
        this._.transmissable && (clearTimeout(this._.transmitTimer), "number" != typeof i && (i = this.TRANSMIT_CONFIG_DELAY_MS), this._.transmitTimer = setTimeout(this._transmitConfigurationNow.bind(this), i))
    }, n._transmitConfigurationNow = function() {
        if (this._.transmissable) {
            clearTimeout(this._.transmitTimer);
            var t = e.absorb({
                name: "audioproxy:configure",
                dest: "shell"
            }, this._.transmitQueue);
            this._.transmitQueue = {},
            BIF.objects.shell.transmit(t)
        }
    }, n._instruct = function(t, i) {
        var n = {
            name: this.MSG_PREFIX + ":" + t,
            dest: "shell"
        };
        i && e.absorb(i, n),
        BIF.objects.shell.transmit(n)
    }, n._listenToMessages = function() {
        BIF.events.on("bifocal:ready", this._startTransmission()),
        BIF.events.on("msg:" + this.MSG_PREFIX + ":position", this._onPosition.bind(this)),
        BIF.events.on("msg:" + this.MSG_PREFIX + ":ended", this._onEnded.bind(this)),
        BIF.events.on("msg:" + this.MSG_PREFIX + ":error", this._onError.bind(this))
    }, n._callback = function(t, e) {
        var i = this._.callbacks[t];
        "function" == typeof i && i(e)
    }, n._onPosition = function(t) {
        if (this._.awaitingSeekingMessage) {
            if (!t.m.seeking)
                return;
            if (t.m.path != this._.mediaPath)
                return;
            if (Math.abs(t.m.ms - this._.position) > 1e4)
                return;
            delete this._.awaitingSeekingMessage
        }
        this._.position = this._.ended ? this._.position : t.m.ms,
        this._.mediaPath = t.m.path,
        this._callback("position", t.m)
    }, n._onEnded = function(t) {
        this._.ended = !0,
        this._callback("ended", {
            path: this._.mediaPath,
            ms: this.position()
        })
    }, n._onError = function(t) {
        this._.awaitingSeekingMessage = !1,
        this._callback("error", t.m)
    }, i
}),
define("bifocal/themes/listen/dewey/src/features/audio-native", ["require", "../../../default/src/parts/spool", "../../../../read/dewey/src/parts/audio-proxy-native"], function(t) {
    return function(e) {
        if (!BIF.objects.shell.has("audio:proxy"))
            return !1;
        BIF.state.autonomousAudio = BIF.objects.shell.has("audio:autonomous");
        var i = t("../../../default/src/parts/spool"),
            n = t("../../../../read/dewey/src/parts/audio-proxy-native");
        return i.prototype.AUDIO_PROXY_CLASS = n, !0
    }
}),
define("bifocal/themes/listen/dewey/src/features/audio-configuration", ["require", "common"], function(t) {
    var e = t("common");
    return function(t) {
        return !!BIF.objects.shell.info && (t.runsheet.prepend(["bifocal:reveal", "listenForAudioConfiguration"]), t.listenForAudioConfiguration = function() {
                BIF.events.on("msg:audioproxy:configure", function(t) {
                    t.m.playbackRate && BIF.events.dispatch("bifocal:audio:playbackrate", t.m.playbackRate),
                    null === t.m.sleepMilliseconds && null === t.m.sleepAtPosition && e.try(BIF.objects, "sleepTimer.disarmSleep()")
                })
            }, !0)
    }
}),
define("bifocal/themes/listen/dewey/src/dewey", ["require", "../../../read/dewey/src/parts/quirks", "../../default/src/default", "../../../read/default/src/features/expiration", "../../../read/dewey/src/features/error-capture", "./features/shell", "../../../read/dewey/src/features/native-bank", "../../../read/dewey/src/features/codex-from-tdata", "../../../read/dewey/src/features/dervish-activity", "../../../read/dewey/src/features/forward-activity", "../../../read/dewey/src/features/foreground-sync", "../../../read/dewey/src/features/expiration", "../../../read/dewey/src/features/network-info", "../../../read/dewey/src/features/client-navigation", "../../../read/dewey/src/features/client-integration", "./features/haptics", "./features/a11y-magic-tap", "./features/background-activity-instructions", "./features/audio-native", "./features/audio-configuration"], function(t) {
    var e = (t("../../../read/dewey/src/parts/quirks"), t("../../default/src/default"));
    return e.removeFeature(t("../../../read/default/src/features/expiration")), e.addFeature(t("../../../read/dewey/src/features/error-capture"), !0), e.addFeature(t("./features/shell"), !0), e.addFeature(t("../../../read/dewey/src/features/native-bank")), e.addFeature(t("../../../read/dewey/src/features/codex-from-tdata")), e.addFeature(t("../../../read/dewey/src/features/dervish-activity")), e.addFeature(t("../../../read/dewey/src/features/forward-activity")), e.addFeature(t("../../../read/dewey/src/features/foreground-sync")), e.addFeature(t("../../../read/dewey/src/features/expiration")), e.addFeature(t("../../../read/dewey/src/features/network-info")), e.addFeature(t("../../../read/dewey/src/features/client-navigation")), e.addFeature(t("../../../read/dewey/src/features/client-integration")), e.addFeature(t("./features/haptics")), e.addFeature(t("./features/a11y-magic-tap")), e.addFeature(t("./features/background-activity-instructions")), e.addFeature(t("./features/audio-native")), e.addFeature(t("./features/audio-configuration")), e
}),
require(["bifocal/themes/listen/dewey/src/dewey"], function(t) {
    t.launch()
}),
define("themes/listen/dewey/theme", function() {});
