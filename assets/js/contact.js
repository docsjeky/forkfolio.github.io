! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = pe.type(e);
        return "function" === n || pe.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (pe.isFunction(t)) return pe.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return pe.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (Te.test(t)) return pe.filter(t, e, n);
            t = pe.filter(t, e)
        }
        return pe.grep(e, function(e) {
            return pe.inArray(e, t) > -1 !== n
        })
    }

    function o(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function i(e) {
        var t = {};
        return pe.each(e.match(De) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        re.addEventListener ? (re.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (re.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (re.addEventListener || "load" === e.event.type || "complete" === re.readyState) && (a(), pe.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(Me, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : He.test(n) ? pe.parseJSON(n) : n
                } catch (o) {}
                pe.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, r) {
        if ($e(e)) {
            var o, i, a = pe.expando,
                s = e.nodeType,
                l = s ? pe.cache : e,
                u = s ? e[a] : e[a] && a;
            if (u && l[u] && (r || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = ne.pop() || pe.guid++ : a), l[u] || (l[u] = s ? {} : {
                toJSON: pe.noop
            }), ("object" == typeof t || "function" == typeof t) && (r ? l[u] = pe.extend(l[u], t) : l[u].data = pe.extend(l[u].data, t)), i = l[u], r || (i.data || (i.data = {}), i = i.data), void 0 !== n && (i[pe.camelCase(t)] = n), "string" == typeof t ? (o = i[t], null == o && (o = i[pe.camelCase(t)])) : o = i, o
        }
    }

    function d(e, t, n) {
        if ($e(e)) {
            var r, o, i = e.nodeType,
                a = i ? pe.cache : e,
                s = i ? e[pe.expando] : pe.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    pe.isArray(t) ? t = t.concat(pe.map(t, pe.camelCase)) : t in r ? t = [t] : (t = pe.camelCase(t), t = t in r ? [t] : t.split(" ")), o = t.length;
                    for (; o--;) delete r[t[o]];
                    if (n ? !u(r) : !pe.isEmptyObject(r)) return
                }(n || (delete a[s].data, u(a[s]))) && (i ? pe.cleanData([e], !0) : de.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
            }
        }
    }

    function f(e, t, n, r) {
        var o, i = 1,
            a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return pe.css(e, t, "")
            },
            l = s(),
            u = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
            c = (pe.cssNumber[t] || "px" !== u && +l) && Be.exec(pe.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do i = i || ".5", c /= i, pe.style(e, t, c + u); while (i !== (i = s() / l) && 1 !== i && --a)
        }
        return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = o)), o
    }

    function p(e) {
        var t = We.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function h(e, t) {
        var n, r, o = 0,
            i = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!i)
            for (i = [], n = e.childNodes || e; null != (r = n[o]); o++) !t || pe.nodeName(r, t) ? i.push(r) : pe.merge(i, h(r, t));
        return void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], i) : i
    }

    function m(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) pe._data(n, "globalEval", !t || pe._data(t[r], "globalEval"))
    }

    function v(e) {
        Fe.test(e.type) && (e.defaultChecked = e.checked)
    }

    function g(e, t, n, r, o) {
        for (var i, a, s, l, u, c, d, f = e.length, g = p(t), y = [], b = 0; f > b; b++)
            if (a = e[b], a || 0 === a)
                if ("object" === pe.type(a)) pe.merge(y, a.nodeType ? [a] : a);
                else if (ze.test(a)) {
            for (l = l || g.appendChild(t.createElement("div")), u = (Oe.exec(a) || ["", ""])[1].toLowerCase(), d = Ie[u] || Ie._default, l.innerHTML = d[1] + pe.htmlPrefilter(a) + d[2], i = d[0]; i--;) l = l.lastChild;
            if (!de.leadingWhitespace && Re.test(a) && y.push(t.createTextNode(Re.exec(a)[0])), !de.tbody)
                for (a = "table" !== u || Ve.test(a) ? "<table>" !== d[1] || Ve.test(a) ? 0 : l : l.firstChild, i = a && a.childNodes.length; i--;) pe.nodeName(c = a.childNodes[i], "tbody") && !c.childNodes.length && a.removeChild(c);
            for (pe.merge(y, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = g.lastChild
        } else y.push(t.createTextNode(a));
        for (l && g.removeChild(l), de.appendChecked || pe.grep(h(y, "input"), v), b = 0; a = y[b++];)
            if (r && pe.inArray(a, r) > -1) o && o.push(a);
            else if (s = pe.contains(a.ownerDocument, a), l = h(g.appendChild(a), "script"), s && m(l), n)
            for (i = 0; a = l[i++];) Ue.test(a.type || "") && n.push(a);
        return l = null, g
    }

    function y() {
        return !0
    }

    function b() {
        return !1
    }

    function x() {
        try {
            return re.activeElement
        } catch (e) {}
    }

    function w(e, t, n, r, o, i) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) w(e, s, n, r, t[s], i);
            return e
        }
        if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), o === !1) o = b;
        else if (!o) return e;
        return 1 === i && (a = o, o = function(e) {
            return pe().off(e), a.apply(this, arguments)
        }, o.guid = a.guid || (a.guid = pe.guid++)), e.each(function() {
            pe.event.add(this, t, o, r, n)
        })
    }

    function k(e, t) {
        return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function T(e) {
        return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type, e
    }

    function C(e) {
        var t = ot.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function E(e, t) {
        if (1 === t.nodeType && pe.hasData(e)) {
            var n, r, o, i = pe._data(e),
                a = pe._data(t, i),
                s = i.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, o = s[n].length; o > r; r++) pe.event.add(t, n, s[n][r])
            }
            a.data && (a.data = pe.extend({}, a.data))
        }
    }

    function N(e, t) {
        var n, r, o;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !de.noCloneEvent && t[pe.expando]) {
                o = pe._data(t);
                for (r in o.events) pe.removeEvent(t, r, o.handle);
                t.removeAttribute(pe.expando)
            }
            "script" === n && t.text !== e.text ? (T(t).text = e.text, C(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Fe.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function A(e, t, n, r) {
        t = ie.apply([], t);
        var o, i, a, s, l, u, c = 0,
            d = e.length,
            f = d - 1,
            p = t[0],
            m = pe.isFunction(p);
        if (m || d > 1 && "string" == typeof p && !de.checkClone && rt.test(p)) return e.each(function(o) {
            var i = e.eq(o);
            m && (t[0] = p.call(this, o, i.html())), A(i, t, n, r)
        });
        if (d && (u = g(t, e[0].ownerDocument, !1, e, r), o = u.firstChild, 1 === u.childNodes.length && (u = o), o || r)) {
            for (s = pe.map(h(u, "script"), T), a = s.length; d > c; c++) i = u, c !== f && (i = pe.clone(i, !0, !0), a && pe.merge(s, h(i, "script"))), n.call(e[c], i, c);
            if (a)
                for (l = s[s.length - 1].ownerDocument, pe.map(s, C), c = 0; a > c; c++) i = s[c], Ue.test(i.type || "") && !pe._data(i, "globalEval") && pe.contains(l, i) && (i.src ? pe._evalUrl && pe._evalUrl(i.src) : pe.globalEval((i.text || i.textContent || i.innerHTML || "").replace(it, "")));
            u = o = null
        }
        return e
    }

    function S(e, t, n) {
        for (var r, o = t ? pe.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || pe.cleanData(h(r)), r.parentNode && (n && pe.contains(r.ownerDocument, r) && m(h(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function D(e, t) {
        var n = pe(t.createElement(e)).appendTo(t.body),
            r = pe.css(n[0], "display");
        return n.detach(), r
    }

    function j(e) {
        var t = re,
            n = ut[e];
        return n || (n = D(e, t), "none" !== n && n || (lt = (lt || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (lt[0].contentWindow || lt[0].contentDocument).document, t.write(), t.close(), n = D(e, t), lt.detach()), ut[e] = n), n
    }

    function L(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function $(e) {
        if (e in Ct) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Tt.length; n--;)
            if (e = Tt[n] + t, e in Ct) return e
    }

    function H(e, t) {
        for (var n, r, o, i = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (i[a] = pe._data(r, "olddisplay"), n = r.style.display, t ? (i[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && _e(r) && (i[a] = pe._data(r, "olddisplay", j(r.nodeName)))) : (o = _e(r), (n && "none" !== n || !o) && pe._data(r, "olddisplay", o ? n : pe.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[a] || "" : "none"));
        return e
    }

    function M(e, t, n) {
        var r = xt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function K(e, t, n, r, o) {
        for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > i; i += 2) "margin" === n && (a += pe.css(e, n + qe[i], !0, o)), r ? ("content" === n && (a -= pe.css(e, "padding" + qe[i], !0, o)), "margin" !== n && (a -= pe.css(e, "border" + qe[i] + "Width", !0, o))) : (a += pe.css(e, "padding" + qe[i], !0, o), "padding" !== n && (a += pe.css(e, "border" + qe[i] + "Width", !0, o)));
        return a
    }

    function B(t, n, r) {
        var o = !0,
            i = "width" === n ? t.offsetWidth : t.offsetHeight,
            a = ht(t),
            s = de.boxSizing && "border-box" === pe.css(t, "boxSizing", !1, a);
        if (re.msFullscreenElement && e.top !== e && t.getClientRects().length && (i = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= i || null == i) {
            if (i = mt(t, n, a), (0 > i || null == i) && (i = t.style[n]), dt.test(i)) return i;
            o = s && (de.boxSizingReliable() || i === t.style[n]), i = parseFloat(i) || 0
        }
        return i + K(t, n, r || (s ? "border" : "content"), o, a) + "px"
    }

    function q(e, t, n, r, o) {
        return new q.prototype.init(e, t, n, r, o)
    }

    function _() {
        return e.setTimeout(function() {
            Et = void 0
        }), Et = pe.now()
    }

    function P(e, t) {
        var n, r = {
                height: e
            },
            o = 0;
        for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = qe[o], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function F(e, t, n) {
        for (var r, o = (R.tweeners[t] || []).concat(R.tweeners["*"]), i = 0, a = o.length; a > i; i++)
            if (r = o[i].call(n, t, e)) return r
    }

    function O(e, t, n) {
        var r, o, i, a, s, l, u, c, d = this,
            f = {},
            p = e.style,
            h = e.nodeType && _e(e),
            m = pe._data(e, "fxshow");
        n.queue || (s = pe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, pe.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = pe.css(e, "display"), c = "none" === u ? pe._data(e, "olddisplay") || j(e.nodeName) : u, "inline" === c && "none" === pe.css(e, "float") && (de.inlineBlockNeedsLayout && "inline" !== j(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", de.shrinkWrapBlocks() || d.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (o = t[r], At.exec(o)) {
                if (delete t[r], i = i || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[r]) continue;
                    h = !0
                }
                f[r] = m && m[r] || pe.style(e, r)
            } else u = void 0;
        if (pe.isEmptyObject(f)) "inline" === ("none" === u ? j(e.nodeName) : u) && (p.display = u);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = pe._data(e, "fxshow", {}), i && (m.hidden = !h), h ? pe(e).show() : d.done(function() {
                pe(e).hide()
            }), d.done(function() {
                var t;
                pe._removeData(e, "fxshow");
                for (t in f) pe.style(e, t, f[t])
            });
            for (r in f) a = F(h ? m[r] : 0, r, d), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function U(e, t) {
        var n, r, o, i, a;
        for (n in e)
            if (r = pe.camelCase(n), o = t[r], i = e[n], pe.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), a = pe.cssHooks[r], a && "expand" in a) {
                i = a.expand(i), delete e[r];
                for (n in i) n in e || (e[n] = i[n], t[n] = o)
            } else t[r] = o
    }

    function R(e, t, n) {
        var r, o, i = 0,
            a = R.prefilters.length,
            s = pe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = Et || _(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, i = 1 - r, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(i);
                return s.notifyWith(e, [u, i, n]), 1 > i && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: pe.extend({}, t),
                opts: pe.extend(!0, {
                    specialEasing: {},
                    easing: pe.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Et || _(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = pe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (U(c, u.opts.specialEasing); a > i; i++)
            if (r = R.prefilters[i].call(u, e, c, u.opts)) return pe.isFunction(r.stop) && (pe._queueHooks(u.elem, u.opts.queue).stop = pe.proxy(r.stop, r)), r;
        return pe.map(c, F, u), pe.isFunction(u.opts.start) && u.opts.start.call(e, u), pe.fx.timer(pe.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function W(e) {
        return pe.attr(e, "class") || ""
    }

    function I(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, o = 0,
                i = t.toLowerCase().match(De) || [];
            if (pe.isFunction(n))
                for (; r = i[o++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function z(e, t, n, r) {
        function o(s) {
            var l;
            return i[s] = !0, pe.each(e[s] || [], function(e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || a || i[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
            }), l
        }
        var i = {},
            a = e === Jt;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function V(e, t) {
        var n, r, o = pe.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((o[r] ? e : n || (n = {}))[r] = t[r]);
        return n && pe.extend(!0, e, n), e
    }

    function Y(e, t, n) {
        for (var r, o, i, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
        if (o)
            for (a in s)
                if (s[a] && s[a].test(o)) {
                    l.unshift(a);
                    break
                }
        if (l[0] in n) i = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    i = a;
                    break
                }
                r || (r = a)
            }
            i = i || r
        }
        return i ? (i !== l[0] && l.unshift(i), n[i]) : void 0
    }

    function X(e, t, n, r) {
        var o, i, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (i = c.shift(); i;)
            if (e.responseFields[i] && (n[e.responseFields[i]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = c.shift())
                if ("*" === i) i = l;
                else if ("*" !== l && l !== i) {
            if (a = u[l + " " + i] || u["* " + i], !a)
                for (o in u)
                    if (s = o.split(" "), s[1] === i && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[o] : u[o] !== !0 && (i = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + l + " to " + i
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function G(e) {
        return e.style && e.style.display || pe.css(e, "display")
    }

    function J(e) {
        for (; e && 1 === e.nodeType;) {
            if ("none" === G(e) || "hidden" === e.type) return !0;
            e = e.parentNode
        }
        return !1
    }

    function Q(e, t, n, r) {
        var o;
        if (pe.isArray(t)) pe.each(t, function(t, o) {
            n || nn.test(e) ? r(e, o) : Q(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
        });
        else if (n || "object" !== pe.type(t)) r(e, t);
        else
            for (o in t) Q(e + "[" + o + "]", t[o], n, r)
    }

    function Z() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function te(e) {
        return pe.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var ne = [],
        re = e.document,
        oe = ne.slice,
        ie = ne.concat,
        ae = ne.push,
        se = ne.indexOf,
        le = {},
        ue = le.toString,
        ce = le.hasOwnProperty,
        de = {},
        fe = "1.12.1",
        pe = function(e, t) {
            return new pe.fn.init(e, t)
        },
        he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        me = /^-ms-/,
        ve = /-([\da-z])/gi,
        ge = function(e, t) {
            return t.toUpperCase()
        };
    pe.fn = pe.prototype = {
        jquery: fe,
        constructor: pe,
        selector: "",
        length: 0,
        toArray: function() {
            return oe.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : oe.call(this)
        },
        pushStack: function(e) {
            var t = pe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return pe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(pe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(oe.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ae,
        sort: ne.sort,
        splice: ne.splice
    }, pe.extend = pe.fn.extend = function() {
        var e, t, n, r, o, i, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || pe.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (o = arguments[s]))
                for (r in o) e = a[r], n = o[r], a !== n && (u && n && (pe.isPlainObject(n) || (t = pe.isArray(n))) ? (t ? (t = !1, i = e && pe.isArray(e) ? e : []) : i = e && pe.isPlainObject(e) ? e : {}, a[r] = pe.extend(u, i, n)) : void 0 !== n && (a[r] = n));
        return a
    }, pe.extend({
        expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === pe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === pe.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e)) return !1;
            try {
                if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (!de.ownFirst)
                for (t in e) return ce.call(e, t);
            for (t in e);
            return void 0 === t || ce.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ue.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && pe.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(me, "ms-").replace(ve, ge)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var r, o = 0;
            if (n(e))
                for (r = e.length; r > o && t.call(e[o], o, e[o]) !== !1; o++);
            else
                for (o in e)
                    if (t.call(e[o], o, e[o]) === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(he, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? pe.merge(r, "string" == typeof e ? [e] : e) : ae.call(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (se) return se.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, o = e.length; n > r;) e[o++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r];) e[o++] = t[r++];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var r, o = [], i = 0, a = e.length, s = !n; a > i; i++) r = !t(e[i], i), r !== s && o.push(e[i]);
            return o
        },
        map: function(e, t, r) {
            var o, i, a = 0,
                s = [];
            if (n(e))
                for (o = e.length; o > a; a++) i = t(e[a], a, r), null != i && s.push(i);
            else
                for (a in e) i = t(e[a], a, r), null != i && s.push(i);
            return ie.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, o;
            return "string" == typeof t && (o = e[t], t = e, e = o), pe.isFunction(e) ? (n = oe.call(arguments, 2), r = function() {
                return e.apply(t || this, n.concat(oe.call(arguments)))
            }, r.guid = e.guid = e.guid || pe.guid++, r) : void 0
        },
        now: function() {
            return +new Date
        },
        support: de
    }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ne[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var ye = function(e) {
        function t(e, t, n, r) {
            var o, i, a, s, l, u, d, p, h = t && t.ownerDocument,
                m = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!r && ((t ? t.ownerDocument || t : F) !== $ && L(t), t = t || $, M)) {
                if (11 !== m && (u = ge.exec(e)))
                    if (o = u[1]) {
                        if (9 === m) {
                            if (!(a = t.getElementById(o))) return n;
                            if (a.id === o) return n.push(a), n
                        } else if (h && (a = h.getElementById(o)) && _(t, a) && a.id === o) return n.push(a), n
                    } else {
                        if (u[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = u[3]) && w.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(o)), n
                    }
                if (w.qsa && !I[e + " "] && (!K || !K.test(e))) {
                    if (1 !== m) h = t, p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = P), d = E(e), i = d.length, l = fe.test(s) ? "#" + s : "[id='" + s + "']"; i--;) d[i] = l + " " + f(d[i]);
                        p = d.join(","), h = ye.test(e) && c(t.parentNode) || t
                    }
                    if (p) try {
                        return Q.apply(n, h.querySelectorAll(p)), n
                    } catch (v) {} finally {
                        s === P && t.removeAttribute("id")
                    }
                }
            }
            return A(e.replace(se, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[P] = !0, e
        }

        function o(e) {
            var t = $.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function i(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) k.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function f(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function p(e, t, n) {
            var r = t.dir,
                o = n && "parentNode" === r,
                i = U++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || o) return e(t, n, i)
            } : function(t, n, a) {
                var s, l, u, c = [O, i];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || o) {
                            if (u = t[P] || (t[P] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (s = l[r]) && s[0] === O && s[1] === i) return c[2] = s[2];
                            if (l[r] = c, c[2] = e(t, n, a)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, r) {
            for (var o = 0, i = n.length; i > o; o++) t(e, n[o], r);
            return r
        }

        function v(e, t, n, r, o) {
            for (var i, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(i = e[s]) && (!n || n(i, r, o)) && (a.push(i), u && t.push(s));
            return a
        }

        function g(e, t, n, o, i, a) {
            return o && !o[P] && (o = g(o)), i && !i[P] && (i = g(i, a)), r(function(r, a, s, l) {
                var u, c, d, f = [],
                    p = [],
                    h = a.length,
                    g = r || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? g : v(g, f, e, s, l),
                    b = n ? i || (r ? e : h || o) ? [] : a : y;
                if (n && n(y, b, s, l), o)
                    for (u = v(b, p), o(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
                if (r) {
                    if (i || e) {
                        if (i) {
                            for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                            i(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (u = i ? ee(r, d) : f[c]) > -1 && (r[u] = !(a[u] = d))
                    }
                } else b = v(b === a ? b.splice(h, b.length) : b), i ? i(null, a, b, l) : Q.apply(a, b)
            })
        }

        function y(e) {
            for (var t, n, r, o = e.length, i = k.relative[e[0].type], a = i || k.relative[" "], s = i ? 1 : 0, l = p(function(e) {
                    return e === t
                }, a, !0), u = p(function(e) {
                    return ee(t, e) > -1
                }, a, !0), c = [function(e, n, r) {
                    var o = !i && (r || n !== S) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                    return t = null, o
                }]; o > s; s++)
                if (n = k.relative[e[s].type]) c = [p(h(c), n)];
                else {
                    if (n = k.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                        for (r = ++s; o > r && !k.relative[e[r].type]; r++);
                        return g(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, r > s && y(e.slice(s, r)), o > r && y(e = e.slice(r)), o > r && f(e))
                    }
                    c.push(n)
                }
            return h(c)
        }

        function b(e, n) {
            var o = n.length > 0,
                i = e.length > 0,
                a = function(r, a, s, l, u) {
                    var c, d, f, p = 0,
                        h = "0",
                        m = r && [],
                        g = [],
                        y = S,
                        b = r || i && k.find.TAG("*", u),
                        x = O += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (u && (S = a === $ || a || u); h !== w && null != (c = b[h]); h++) {
                        if (i && c) {
                            for (d = 0, a || c.ownerDocument === $ || (L(c), s = !M); f = e[d++];)
                                if (f(c, a || $, s)) {
                                    l.push(c);
                                    break
                                }
                            u && (O = x)
                        }
                        o && ((c = !f && c) && p--, r && m.push(c))
                    }
                    if (p += h, o && h !== p) {
                        for (d = 0; f = n[d++];) f(m, g, a, s);
                        if (r) {
                            if (p > 0)
                                for (; h--;) m[h] || g[h] || (g[h] = G.call(l));
                            g = v(g)
                        }
                        Q.apply(l, g), u && !r && g.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (O = x, S = y), m
                };
            return o ? r(a) : a
        }
        var x, w, k, T, C, E, N, A, S, D, j, L, $, H, M, K, B, q, _, P = "sizzle" + 1 * new Date,
            F = e.document,
            O = 0,
            U = 0,
            R = n(),
            W = n(),
            I = n(),
            z = function(e, t) {
                return e === t && (j = !0), 0
            },
            V = 1 << 31,
            Y = {}.hasOwnProperty,
            X = [],
            G = X.pop,
            J = X.push,
            Q = X.push,
            Z = X.slice,
            ee = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
            ie = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(ie),
            fe = new RegExp("^" + re + "$"),
            pe = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re + "|[*])"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            ke = function() {
                L()
            };
        try {
            Q.apply(X = Z.call(F.childNodes), F.childNodes), X[F.childNodes.length].nodeType
        } catch (Te) {
            Q = {
                apply: X.length ? function(e, t) {
                    J.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, L = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : F;
            return r !== $ && 9 === r.nodeType && r.documentElement ? ($ = r, H = $.documentElement, M = !C($), (n = $.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)), w.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = o(function(e) {
                return e.appendChild($.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test($.getElementsByClassName), w.getById = o(function(e) {
                return H.appendChild(e).id = P, !$.getElementsByName || !$.getElementsByName(P).length
            }), w.getById ? (k.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && M) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, k.filter.ID = function(e) {
                var t = e.replace(xe, we);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete k.find.ID, k.filter.ID = function(e) {
                var t = e.replace(xe, we);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), k.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    o = 0,
                    i = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return i
            }, k.find.CLASS = w.getElementsByClassName && function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && M ? t.getElementsByClassName(e) : void 0
            }, B = [], K = [], (w.qsa = ve.test($.querySelectorAll)) && (o(function(e) {
                H.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && K.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || K.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + P + "-]").length || K.push("~="), e.querySelectorAll(":checked").length || K.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || K.push(".#.+[+~]")
            }), o(function(e) {
                var t = $.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && K.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || K.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), K.push(",.*:")
            })), (w.matchesSelector = ve.test(q = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function(e) {
                w.disconnectedMatch = q.call(e, "div"), q.call(e, "[s!='']:x"), B.push("!=", ie)
            }), K = K.length && new RegExp(K.join("|")), B = B.length && new RegExp(B.join("|")), t = ve.test(H.compareDocumentPosition), _ = t || ve.test(H.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, z = t ? function(e, t) {
                if (e === t) return j = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === $ || e.ownerDocument === F && _(F, e) ? -1 : t === $ || t.ownerDocument === F && _(F, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return j = !0, 0;
                var n, r = 0,
                    o = e.parentNode,
                    i = t.parentNode,
                    s = [e],
                    l = [t];
                if (!o || !i) return e === $ ? -1 : t === $ ? 1 : o ? -1 : i ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                if (o === i) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[r] === l[r];) r++;
                return r ? a(s[r], l[r]) : s[r] === F ? -1 : l[r] === F ? 1 : 0
            }, $) : $
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== $ && L(e), n = n.replace(ce, "='$1']"), w.matchesSelector && M && !I[n + " "] && (!B || !B.test(n)) && (!K || !K.test(n))) try {
                var r = q.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (o) {}
            return t(n, $, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== $ && L(e), _(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== $ && L(e);
            var n = k.attrHandle[t.toLowerCase()],
                r = n && Y.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
            return void 0 !== r ? r : w.attributes || !M ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                o = 0;
            if (j = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(z), j) {
                for (; t = e[o++];) t === e[o] && (r = n.push(o));
                for (; r--;) e.splice(n[r], 1)
            }
            return D = null, e
        }, T = t.getText = function(e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[r++];) n += T(t);
            return n
        }, k = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
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
                    return e[1] = e[1].replace(xe, we), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xe, we).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = R[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && R(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(o) {
                        var i = t.attr(o, e);
                        return null == i ? "!=" === n : n ? (i += "", "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n ? i === r || i.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, d, f, p, h, m = i !== a ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            g = s && t.nodeName.toLowerCase(),
                            y = !l && !s,
                            b = !1;
                        if (v) {
                            if (i) {
                                for (; m;) {
                                    for (f = t; f = f[m];)
                                        if (s ? f.nodeName.toLowerCase() === g : 1 === f.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                for (f = v, d = f[P] || (f[P] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[e] || [], p = u[0] === O && u[1], b = p && u[2], f = p && v.childNodes[p]; f = ++p && f && f[m] || (b = p = 0) || h.pop();)
                                    if (1 === f.nodeType && ++b && f === t) {
                                        c[e] = [O, p, b];
                                        break
                                    }
                            } else if (y && (f = t, d = f[P] || (f[P] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[e] || [], p = u[0] === O && u[1], b = p), b === !1)
                                for (;
                                    (f = ++p && f && f[m] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== g : 1 !== f.nodeType) || !++b || (y && (d = f[P] || (f[P] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), c[e] = [O, b]), f !== t)););
                            return b -= o, b === r || b % r === 0 && b / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, i = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return i[P] ? i(n) : i.length > 1 ? (o = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, o = i(e, n), a = o.length; a--;) r = ee(e, o[a]),
                            e[r] = !(t[r] = o[a])
                    }) : function(e) {
                        return i(e, 0, o)
                    }) : i
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        o = N(e.replace(se, "$1"));
                    return o[P] ? r(function(e, t, n, r) {
                        for (var i, a = o(e, null, r, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                    }) : function(e, r, i) {
                        return t[0] = e, o(t, null, i, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(xe, we),
                        function(t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, we).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !k.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, k.pseudos.nth = k.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) k.pseudos[x] = s(x);
        for (x in {
                submit: !0,
                reset: !0
            }) k.pseudos[x] = l(x);
        return d.prototype = k.filters = k.pseudos, k.setFilters = new d, E = t.tokenize = function(e, n) {
            var r, o, i, a, s, l, u, c = W[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = k.preFilter; s;) {
                (!r || (o = le.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(i = [])), r = !1, (o = ue.exec(s)) && (r = o.shift(), i.push({
                    value: r,
                    type: o[0].replace(se, " ")
                }), s = s.slice(r.length));
                for (a in k.filter) !(o = pe[a].exec(s)) || u[a] && !(o = u[a](o)) || (r = o.shift(), i.push({
                    value: r,
                    type: a,
                    matches: o
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : W(e, l).slice(0)
        }, N = t.compile = function(e, t) {
            var n, r = [],
                o = [],
                i = I[e + " "];
            if (!i) {
                for (t || (t = E(e)), n = t.length; n--;) i = y(t[n]), i[P] ? r.push(i) : o.push(i);
                i = I(e, b(o, r)), i.selector = e
            }
            return i
        }, A = t.select = function(e, t, n, r) {
            var o, i, a, s, l, u = "function" == typeof e && e,
                d = !r && E(e = u.selector || e);
            if (n = n || [], 1 === d.length) {
                if (i = d[0] = d[0].slice(0), i.length > 2 && "ID" === (a = i[0]).type && w.getById && 9 === t.nodeType && M && k.relative[i[1].type]) {
                    if (t = (k.find.ID(a.matches[0].replace(xe, we), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(i.shift().value.length)
                }
                for (o = pe.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !k.relative[s = a.type]);)
                    if ((l = k.find[s]) && (r = l(a.matches[0].replace(xe, we), ye.test(i[0].type) && c(t.parentNode) || t))) {
                        if (i.splice(o, 1), e = r.length && f(i), !e) return Q.apply(n, r), n;
                        break
                    }
            }
            return (u || N(e, d))(r, t, !M, n, !t || ye.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = P.split("").sort(z).join("") === P, w.detectDuplicates = !!j, L(), w.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition($.createElement("div"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || i("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || i("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || i(te, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    pe.find = ye, pe.expr = ye.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ye.uniqueSort, pe.text = ye.getText, pe.isXMLDoc = ye.isXML, pe.contains = ye.contains;
    var be = function(e, t, n) {
            for (var r = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && pe(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        xe = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        we = pe.expr.match.needsContext,
        ke = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Te = /^.[^:#\[\.,]*$/;
    pe.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? pe.find.matchesSelector(r, e) ? [r] : [] : pe.find.matches(e, pe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, pe.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                o = r.length;
            if ("string" != typeof e) return this.pushStack(pe(e).filter(function() {
                for (t = 0; o > t; t++)
                    if (pe.contains(r[t], this)) return !0
            }));
            for (t = 0; o > t; t++) pe.find(e, r[t], n);
            return n = this.pushStack(o > 1 ? pe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && we.test(e) ? pe(e) : e || [], !1).length
        }
    });
    var Ce, Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        Ne = pe.fn.init = function(e, t, n) {
            var r, o;
            if (!e) return this;
            if (n = n || Ce, "string" == typeof e) {
                if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Ee.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : re, !0)), ke.test(r[1]) && pe.isPlainObject(t))
                        for (r in t) pe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                if (o = re.getElementById(r[2]), o && o.parentNode) {
                    if (o.id !== r[2]) return Ce.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = re, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : pe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(pe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), pe.makeArray(e, this))
        };
    Ne.prototype = pe.fn, Ce = pe(re);
    var Ae = /^(?:parents|prev(?:Until|All))/,
        Se = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    pe.fn.extend({
        has: function(e) {
            var t, n = pe(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (pe.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, o = this.length, i = [], a = we.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; o > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                        i.push(n);
                        break
                    }
            return this.pushStack(i.length > 1 ? pe.uniqueSort(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), pe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return be(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return be(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return be(e, "nextSibling")
        },
        prevAll: function(e) {
            return be(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return be(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return be(e, "previousSibling", n)
        },
        siblings: function(e) {
            return xe((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return xe(e.firstChild)
        },
        contents: function(e) {
            return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes)
        }
    }, function(e, t) {
        pe.fn[e] = function(n, r) {
            var o = pe.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = pe.filter(r, o)), this.length > 1 && (Se[e] || (o = pe.uniqueSort(o)), Ae.test(e) && (o = o.reverse())), this.pushStack(o)
        }
    });
    var De = /\S+/g;
    pe.Callbacks = function(e) {
        e = "string" == typeof e ? i(e) : pe.extend({}, e);
        var t, n, r, o, a = [],
            s = [],
            l = -1,
            u = function() {
                for (o = e.once, r = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < a.length;) a[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = a.length, n = !1);
                e.memory || (n = !1), t = !1, o && (a = n ? [] : "")
            },
            c = {
                add: function() {
                    return a && (n && !t && (l = a.length - 1, s.push(n)), function r(t) {
                        pe.each(t, function(t, n) {
                            pe.isFunction(n) ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== pe.type(n) && r(n)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function() {
                    return pe.each(arguments, function(e, t) {
                        for (var n;
                            (n = pe.inArray(t, a, n)) > -1;) a.splice(n, 1), l >= n && l--
                    }), this
                },
                has: function(e) {
                    return e ? pe.inArray(e, a) > -1 : a.length > 0
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return o = s = [], a = n = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return o = !0, n || c.disable(), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, n) {
                    return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || u()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return c
    }, pe.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", pe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", pe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", pe.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return pe.Deferred(function(n) {
                            pe.each(t, function(t, i) {
                                var a = pe.isFunction(e[t]) && e[t];
                                o[i[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? pe.extend(e, r) : r
                    }
                },
                o = {};
            return r.pipe = r.then, pe.each(t, function(e, i) {
                var a = i[2],
                    s = i[3];
                r[i[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function() {
                    return o[i[0] + "With"](this === o ? r : this, arguments), this
                }, o[i[0] + "With"] = a.fireWith
            }), r.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, n, r, o = 0,
                i = oe.call(arguments),
                a = i.length,
                s = 1 !== a || e && pe.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : pe.Deferred(),
                u = function(e, n, r) {
                    return function(o) {
                        n[e] = this, r[e] = arguments.length > 1 ? oe.call(arguments) : o, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > o; o++) i[o] && pe.isFunction(i[o].promise) ? i[o].promise().progress(u(o, n, t)).done(u(o, r, i)).fail(l.reject) : --s;
            return s || l.resolveWith(r, i), l.promise()
        }
    });
    var je;
    pe.fn.ready = function(e) {
        return pe.ready.promise().done(e), this
    }, pe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? pe.readyWait++ : pe.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, e !== !0 && --pe.readyWait > 0 || (je.resolveWith(re, [pe]), pe.fn.triggerHandler && (pe(re).triggerHandler("ready"), pe(re).off("ready"))))
        }
    }), pe.ready.promise = function(t) {
        if (!je)
            if (je = pe.Deferred(), "complete" === re.readyState || "loading" !== re.readyState && !re.documentElement.doScroll) e.setTimeout(pe.ready);
            else if (re.addEventListener) re.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s);
        else {
            re.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && re.documentElement
            } catch (r) {}
            n && n.doScroll && ! function o() {
                if (!pe.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return e.setTimeout(o, 50)
                    }
                    a(), pe.ready()
                }
            }()
        }
        return je.promise(t)
    }, pe.ready.promise();
    var Le;
    for (Le in pe(de)) break;
    de.ownFirst = "0" === Le, de.inlineBlockNeedsLayout = !1, pe(function() {
            var e, t, n, r;
            n = re.getElementsByTagName("body")[0], n && n.style && (t = re.createElement("div"), r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
        }),
        function() {
            var e = re.createElement("div");
            de.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                de.deleteExpando = !1
            }
            e = null
        }();
    var $e = function(e) {
            var t = pe.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        },
        He = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Me = /([A-Z])/g;
    pe.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando], !!e && !u(e)
            },
            data: function(e, t, n) {
                return c(e, t, n)
            },
            removeData: function(e, t) {
                return d(e, t)
            },
            _data: function(e, t, n) {
                return c(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return d(e, t, !0)
            }
        }), pe.fn.extend({
            data: function(e, t) {
                var n, r, o, i = this[0],
                    a = i && i.attributes;
                if (void 0 === e) {
                    if (this.length && (o = pe.data(i), 1 === i.nodeType && !pe._data(i, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = pe.camelCase(r.slice(5)), l(i, r, o[r])));
                        pe._data(i, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function() {
                    pe.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    pe.data(this, e, t)
                }) : i ? l(i, e, pe.data(i, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    pe.removeData(this, e)
                })
            }
        }), pe.extend({
            queue: function(e, t, n) {
                var r;
                return e ? (t = (t || "fx") + "queue", r = pe._data(e, t), n && (!r || pe.isArray(n) ? r = pe._data(e, t, pe.makeArray(n)) : r.push(n)), r || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = pe.queue(e, t),
                    r = n.length,
                    o = n.shift(),
                    i = pe._queueHooks(e, t),
                    a = function() {
                        pe.dequeue(e, t)
                    };
                "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, a, i)), !r && i && i.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return pe._data(e, n) || pe._data(e, n, {
                    empty: pe.Callbacks("once memory").add(function() {
                        pe._removeData(e, t + "queue"), pe._removeData(e, n)
                    })
                })
            }
        }), pe.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = pe.queue(this, e, t);
                    pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    pe.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    o = pe.Deferred(),
                    i = this,
                    a = this.length,
                    s = function() {
                        --r || o.resolveWith(i, [i])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = pe._data(i[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                return s(), o.promise(t)
            }
        }),
        function() {
            var e;
            de.shrinkWrapBlocks = function() {
                if (null != e) return e;
                e = !1;
                var t, n, r;
                return n = re.getElementsByTagName("body")[0], n && n.style ? (t = re.createElement("div"), r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(re.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
            }
        }();
    var Ke = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Be = new RegExp("^(?:([+-])=|)(" + Ke + ")([a-z%]*)$", "i"),
        qe = ["Top", "Right", "Bottom", "Left"],
        _e = function(e, t) {
            return e = t || e, "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e)
        },
        Pe = function(e, t, n, r, o, i, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === pe.type(n)) {
                o = !0;
                for (s in n) Pe(e, t, s, n[s], !0, i, a)
            } else if (void 0 !== r && (o = !0, pe.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(pe(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return o ? e : u ? t.call(e) : l ? t(e[0], n) : i
        },
        Fe = /^(?:checkbox|radio)$/i,
        Oe = /<([\w:-]+)/,
        Ue = /^$|\/(?:java|ecma)script/i,
        Re = /^\s+/,
        We = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
        var e = re.createElement("div"),
            t = re.createDocumentFragment(),
            n = re.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", de.leadingWhitespace = 3 === e.firstChild.nodeType, de.tbody = !e.getElementsByTagName("tbody").length, de.htmlSerialize = !!e.getElementsByTagName("link").length, de.html5Clone = "<:nav></:nav>" !== re.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), de.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = re.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, de.noCloneEvent = !!e.addEventListener, e[pe.expando] = 1, de.attributes = !e.getAttribute(pe.expando)
    }();
    var Ie = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Ie.optgroup = Ie.option, Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead, Ie.th = Ie.td;
    var ze = /<|&#?\w+;/,
        Ve = /<tbody/i;
    ! function() {
        var t, n, r = re.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (de[t] = n in e) || (r.setAttribute(n, "t"), de[t] = r.attributes[n].expando === !1);
        r = null
    }();
    var Ye = /^(?:input|select|textarea)$/i,
        Xe = /^key/,
        Ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Je = /^(?:focusinfocus|focusoutblur)$/,
        Qe = /^([^.]*)(?:\.(.+)|)/;
    pe.event = {
        global: {},
        add: function(e, t, n, r, o) {
            var i, a, s, l, u, c, d, f, p, h, m, v = pe._data(e);
            if (v) {
                for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = pe.guid++), (a = v.events) || (a = v.events = {}), (c = v.handle) || (c = v.handle = function(e) {
                        return "undefined" == typeof pe || e && pe.event.triggered === e.type ? void 0 : pe.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(De) || [""], s = t.length; s--;) i = Qe.exec(t[s]) || [], p = m = i[1], h = (i[2] || "").split(".").sort(), p && (u = pe.event.special[p] || {}, p = (o ? u.delegateType : u.bindType) || p, u = pe.event.special[p] || {}, d = pe.extend({
                    type: p,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && pe.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, l), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, u.setup && u.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, d) : f.push(d), pe.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, o) {
            var i, a, s, l, u, c, d, f, p, h, m, v = pe.hasData(e) && pe._data(e);
            if (v && (c = v.events)) {
                for (t = (t || "").match(De) || [""], u = t.length; u--;)
                    if (s = Qe.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = pe.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = i = f.length; i--;) a = f[i], !o && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(i, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && d.teardown.call(e, h, v.handle) !== !1 || pe.removeEvent(e, p, v.handle), delete c[p])
                    } else
                        for (p in c) pe.event.remove(e, p + t[u], n, r, !0);
                pe.isEmptyObject(c) && (delete v.handle, pe._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, o) {
            var i, a, s, l, u, c, d, f = [r || re],
                p = ce.call(t, "type") ? t.type : t,
                h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || re, 3 !== r.nodeType && 8 !== r.nodeType && !Je.test(p + pe.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[pe.expando] ? t : new pe.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : pe.makeArray(n, [t]), u = pe.event.special[p] || {}, o || !u.trigger || u.trigger.apply(r, n) !== !1)) {
                if (!o && !u.noBubble && !pe.isWindow(r)) {
                    for (l = u.delegateType || p, Je.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                    c === (r.ownerDocument || re) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0;
                    (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || p, i = (pe._data(s, "events") || {})[t.type] && pe._data(s, "handle"), i && i.apply(s, n), i = a && s[a], i && i.apply && $e(s) && (t.result = i.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !o && !t.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), n) === !1) && $e(r) && a && r[p] && !pe.isWindow(r)) {
                    c = r[a], c && (r[a] = null), pe.event.triggered = p;
                    try {
                        r[p]()
                    } catch (m) {}
                    pe.event.triggered = void 0, c && (r[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = pe.event.fix(e);
            var t, n, r, o, i, a = [],
                s = oe.call(arguments),
                l = (pe._data(this, "events") || {})[e.type] || [],
                u = pe.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = pe.event.handlers.call(this, e, l), t = 0;
                    (o = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                        (i = o.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.rnamespace || e.rnamespace.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((pe.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, o, i, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (r = [], n = 0; s > n; n++) i = t[n], o = i.selector + " ", void 0 === r[o] && (r[o] = i.needsContext ? pe(o, this).index(l) > -1 : pe.find(o, this, null, [l]).length), r[o] && r.push(i);
                        r.length && a.push({
                            elem: l,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[pe.expando]) return e;
            var t, n, r, o = e.type,
                i = e,
                a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = Ge.test(o) ? this.mouseHooks : Xe.test(o) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new pe.Event(i), t = r.length; t--;) n = r[t], e[n] = i[n];
            return e.target || (e.target = i.srcElement || re), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, i) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
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
                var n, r, o, i = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || re, o = r.documentElement, n = r.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== x() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === x() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return pe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return pe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var r = pe.extend(new pe.Event, n, {
                type: e,
                isSimulated: !0
            });
            pe.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
        }
    }, pe.removeEvent = re.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n))
    }, pe.Event = function(e, t) {
        return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? y : b) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), void(this[pe.expando] = !0)) : new pe.Event(e, t)
    }, pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = y, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = y, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = y, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, pe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        pe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    o = e.relatedTarget,
                    i = e.handleObj;
                return (!o || o !== r && !pe.contains(r, o)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), de.submit || (pe.event.special.submit = {
        setup: function() {
            return pe.nodeName(this, "form") ? !1 : void pe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : void 0;
                n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", function(e) {
                    e._submitBubble = !0
                }), pe._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            return pe.nodeName(this, "form") ? !1 : void pe.event.remove(this, "._submit")
        }
    }), de.change || (pe.event.special.change = {
        setup: function() {
            return Ye.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (pe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), pe.event.add(this, "click._change", function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), pe.event.simulate("change", this, e)
            })), !1) : void pe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Ye.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e)
                }), pe._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return pe.event.remove(this, "._change"), !Ye.test(this.nodeName)
        }
    }), de.focusin || pe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            pe.event.simulate(t, e.target, pe.event.fix(e))
        };
        pe.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    o = pe._data(r, t);
                o || r.addEventListener(e, n, !0), pe._data(r, t, (o || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    o = pe._data(r, t) - 1;
                o ? pe._data(r, t, o) : (r.removeEventListener(e, n, !0), pe._removeData(r, t))
            }
        }
    }), pe.fn.extend({
        on: function(e, t, n, r) {
            return w(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return w(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, pe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = b), this.each(function() {
                pe.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                pe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? pe.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ze = / jQuery\d+="(?:null|\d+)"/g,
        et = new RegExp("<(?:" + We + ")[\\s/>]", "i"),
        tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        nt = /<script|<style|<link/i,
        rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ot = /^true\/(.*)/,
        it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        at = p(re),
        st = at.appendChild(re.createElement("div"));
    pe.extend({
        htmlPrefilter: function(e) {
            return e.replace(tt, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, o, i, a, s, l = pe.contains(e.ownerDocument, e);
            if (de.html5Clone || pe.isXMLDoc(e) || !et.test("<" + e.nodeName + ">") ? i = e.cloneNode(!0) : (st.innerHTML = e.outerHTML, st.removeChild(i = st.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                for (r = h(i), s = h(e), a = 0; null != (o = s[a]); ++a) r[a] && N(o, r[a]);
            if (t)
                if (n)
                    for (s = s || h(e), r = r || h(i), a = 0; null != (o = s[a]); a++) E(o, r[a]);
                else E(e, i);
            return r = h(i, "script"), r.length > 0 && m(r, !l && h(e, "script")), r = s = o = null, i
        },
        cleanData: function(e, t) {
            for (var n, r, o, i, a = 0, s = pe.expando, l = pe.cache, u = de.attributes, c = pe.event.special; null != (n = e[a]); a++)
                if ((t || $e(n)) && (o = n[s], i = o && l[o])) {
                    if (i.events)
                        for (r in i.events) c[r] ? pe.event.remove(n, r) : pe.removeEvent(n, r, i.handle);
                    l[o] && (delete l[o], u || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), ne.push(o))
                }
        }
    }), pe.fn.extend({
        domManip: A,
        detach: function(e) {
            return S(this, e, !0)
        },
        remove: function(e) {
            return S(this, e)
        },
        text: function(e) {
            return Pe(this, function(e) {
                return void 0 === e ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || re).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return A(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return A(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return A(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return A(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && pe.cleanData(h(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && pe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return pe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Pe(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ze, "") : void 0;
                if ("string" == typeof e && !nt.test(e) && (de.htmlSerialize || !et.test(e)) && (de.leadingWhitespace || !Re.test(e)) && !Ie[(Oe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = pe.htmlPrefilter(e);
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (pe.cleanData(h(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return A(this, arguments, function(t) {
                var n = this.parentNode;
                pe.inArray(this, e) < 0 && (pe.cleanData(h(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), pe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        pe.fn[e] = function(e) {
            for (var n, r = 0, o = [], i = pe(e), a = i.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), pe(i[r])[t](n), ae.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var lt, ut = {
            HTML: "block",
            BODY: "block"
        },
        ct = /^margin/,
        dt = new RegExp("^(" + Ke + ")(?!px)[a-z%]+$", "i"),
        ft = function(e, t, n, r) {
            var o, i, a = {};
            for (i in t) a[i] = e.style[i], e.style[i] = t[i];
            o = n.apply(e, r || []);
            for (i in t) e.style[i] = a[i];
            return o
        },
        pt = re.documentElement;
    ! function() {
        function t() {
            var t, c, d = re.documentElement;
            d.appendChild(l), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = o = s = !1, r = a = !0, e.getComputedStyle && (c = e.getComputedStyle(u), n = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, o = "4px" === (c || {
                width: "4px"
            }).width, u.style.marginRight = "50%", r = "4px" === (c || {
                marginRight: "4px"
            }).marginRight, t = u.appendChild(re.createElement("div")), t.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", u.style.width = "1px", a = !parseFloat((e.getComputedStyle(t) || {}).marginRight), u.removeChild(t)), u.style.display = "none", i = 0 === u.getClientRects().length, i && (u.style.display = "",
                u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = u.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", i = 0 === t[0].offsetHeight, i && (t[0].style.display = "", t[1].style.display = "none", i = 0 === t[0].offsetHeight)), d.removeChild(l)
        }
        var n, r, o, i, a, s, l = re.createElement("div"),
            u = re.createElement("div");
        u.style && (u.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === u.style.opacity, de.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === u.style.backgroundClip, l = re.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), de.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, pe.extend(de, {
            reliableHiddenOffsets: function() {
                return null == n && t(), i
            },
            boxSizingReliable: function() {
                return null == n && t(), o
            },
            pixelMarginRight: function() {
                return null == n && t(), r
            },
            pixelPosition: function() {
                return null == n && t(), n
            },
            reliableMarginRight: function() {
                return null == n && t(), a
            },
            reliableMarginLeft: function() {
                return null == n && t(), s
            }
        }))
    }();
    var ht, mt, vt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (ht = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, mt = function(e, t, n) {
        var r, o, i, a, s = e.style;
        return n = n || ht(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)), n && !de.pixelMarginRight() && dt.test(a) && ct.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i), void 0 === a ? a : a + ""
    }) : pt.currentStyle && (ht = function(e) {
        return e.currentStyle
    }, mt = function(e, t, n) {
        var r, o, i, a, s = e.style;
        return n = n || ht(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), dt.test(a) && !vt.test(t) && (r = s.left, o = e.runtimeStyle, i = o && o.left, i && (o.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, i && (o.left = i)), void 0 === a ? a : a + "" || "auto"
    });
    var gt = /alpha\([^)]*\)/i,
        yt = /opacity\s*=\s*([^)]*)/i,
        bt = /^(none|table(?!-c[ea]).+)/,
        xt = new RegExp("^(" + Ke + ")(.*)$", "i"),
        wt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        kt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Tt = ["Webkit", "O", "Moz", "ms"],
        Ct = re.createElement("div").style;
    pe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = mt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
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
            "float": de.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, a, s = pe.camelCase(t),
                    l = e.style;
                if (t = pe.cssProps[s] || (pe.cssProps[s] = $(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
                if (i = typeof n, "string" === i && (o = Be.exec(n)) && o[1] && (n = f(e, t, o), i = "number"), null != n && n === n && ("number" === i && (n += o && o[3] || (pe.cssNumber[s] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                    l[t] = n
                } catch (u) {}
            }
        },
        css: function(e, t, n, r) {
            var o, i, a, s = pe.camelCase(t);
            return t = pe.cssProps[s] || (pe.cssProps[s] = $(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = mt(e, t, r)), "normal" === i && t in kt && (i = kt[t]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
        }
    }), pe.each(["height", "width"], function(e, t) {
        pe.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? bt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? ft(e, wt, function() {
                    return B(e, t, r)
                }) : B(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var o = r && ht(e);
                return M(e, n, r ? K(e, t, r, de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), de.opacity || (pe.cssHooks.opacity = {
        get: function(e, t) {
            return yt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                o = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                i = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === pe.trim(i.replace(gt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = gt.test(i) ? i.replace(gt, o) : i + " " + o)
        }
    }), pe.cssHooks.marginRight = L(de.reliableMarginRight, function(e, t) {
        return t ? ft(e, {
            display: "inline-block"
        }, mt, [e, "marginRight"]) : void 0
    }), pe.cssHooks.marginLeft = L(de.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(mt(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ft(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), pe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        pe.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) o[e + qe[r] + t] = i[r] || i[r - 2] || i[0];
                return o
            }
        }, ct.test(e) || (pe.cssHooks[e + t].set = M)
    }), pe.fn.extend({
        css: function(e, t) {
            return Pe(this, function(e, t, n) {
                var r, o, i = {},
                    a = 0;
                if (pe.isArray(t)) {
                    for (r = ht(e), o = t.length; o > a; a++) i[t[a]] = pe.css(e, t[a], !1, r);
                    return i
                }
                return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return H(this, !0)
        },
        hide: function() {
            return H(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                _e(this) ? pe(this).show() : pe(this).hide()
            })
        }
    }), pe.Tween = q, q.prototype = {
        constructor: q,
        init: function(e, t, n, r, o, i) {
            this.elem = e, this.prop = n, this.easing = o || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (pe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = q.propHooks[this.prop];
            return e && e.get ? e.get(this) : q.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = q.propHooks[this.prop];
            return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : q.propHooks._default.set(this), this
        }
    }, q.prototype.init.prototype = q.prototype, q.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, pe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, pe.fx = q.prototype.init, pe.fx.step = {};
    var Et, Nt, At = /^(?:toggle|show|hide)$/,
        St = /queueHooks$/;
    pe.Animation = pe.extend(R, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return f(n.elem, e, Be.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(De);
                for (var n, r = 0, o = e.length; o > r; r++) n = e[r], R.tweeners[n] = R.tweeners[n] || [], R.tweeners[n].unshift(t)
            },
            prefilters: [O],
            prefilter: function(e, t) {
                t ? R.prefilters.unshift(e) : R.prefilters.push(e)
            }
        }), pe.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? pe.extend({}, e) : {
                complete: n || !n && t || pe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !pe.isFunction(t) && t
            };
            return r.duration = pe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in pe.fx.speeds ? pe.fx.speeds[r.duration] : pe.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                pe.isFunction(r.old) && r.old.call(this), r.queue && pe.dequeue(this, r.queue)
            }, r
        }, pe.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(_e).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var o = pe.isEmptyObject(e),
                    i = pe.speed(t, n, r),
                    a = function() {
                        var t = R(this, pe.extend({}, e), i);
                        (o || pe._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, o || i.queue === !1 ? this.each(a) : this.queue(i.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        i = pe.timers,
                        a = pe._data(this);
                    if (o) a[o] && a[o].stop && r(a[o]);
                    else
                        for (o in a) a[o] && a[o].stop && St.test(o) && r(a[o]);
                    for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                    (t || !n) && pe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = pe._data(this),
                        r = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        i = pe.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, pe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), pe.each(["toggle", "show", "hide"], function(e, t) {
            var n = pe.fn[t];
            pe.fn[t] = function(e, r, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, r, o)
            }
        }), pe.each({
            slideDown: P("show"),
            slideUp: P("hide"),
            slideToggle: P("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            pe.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), pe.timers = [], pe.fx.tick = function() {
            var e, t = pe.timers,
                n = 0;
            for (Et = pe.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || pe.fx.stop(), Et = void 0
        }, pe.fx.timer = function(e) {
            pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop()
        }, pe.fx.interval = 13, pe.fx.start = function() {
            Nt || (Nt = e.setInterval(pe.fx.tick, pe.fx.interval))
        }, pe.fx.stop = function() {
            e.clearInterval(Nt), Nt = null
        }, pe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, pe.fn.delay = function(t, n) {
            return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                var o = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(o)
                }
            })
        },
        function() {
            var e, t = re.createElement("input"),
                n = re.createElement("div"),
                r = re.createElement("select"),
                o = r.appendChild(re.createElement("option"));
            n = re.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", de.getSetAttribute = "t" !== n.className, de.style = /top/.test(e.getAttribute("style")), de.hrefNormalized = "/a" === e.getAttribute("href"), de.checkOn = !!t.value, de.optSelected = o.selected, de.enctype = !!re.createElement("form").enctype, r.disabled = !0, de.optDisabled = !o.disabled, t = re.createElement("input"), t.setAttribute("value", ""), de.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), de.radioValue = "t" === t.value
        }();
    var Dt = /\r/g;
    pe.fn.extend({
        val: function(e) {
            var t, n, r, o = this[0]; {
                if (arguments.length) return r = pe.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = r ? e.call(this, n, pe(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : pe.isArray(o) && (o = pe.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                });
                if (o) return t = pe.valHooks[o.type] || pe.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(Dt, "") : null == n ? "" : n)
            }
        }
    }), pe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = pe.find.attr(e, "value");
                    return null != t ? t : pe.trim(pe.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || 0 > o, a = i ? null : [], s = i ? o + 1 : r.length, l = 0 > o ? s : i ? o : 0; s > l; l++)
                        if (n = r[l], (n.selected || l === o) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = pe(n).val(), i) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, o = e.options, i = pe.makeArray(t), a = o.length; a--;)
                        if (r = o[a], pe.inArray(pe.valHooks.option.get(r), i) >= 0) try {
                            r.selected = n = !0
                        } catch (s) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), pe.each(["radio", "checkbox"], function() {
        pe.valHooks[this] = {
            set: function(e, t) {
                return pe.isArray(t) ? e.checked = pe.inArray(pe(e).val(), t) > -1 : void 0
            }
        }, de.checkOn || (pe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var jt, Lt, $t = pe.expr.attrHandle,
        Ht = /^(?:checked|selected)$/i,
        Mt = de.getSetAttribute,
        Kt = de.input;
    pe.fn.extend({
        attr: function(e, t) {
            return Pe(this, pe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                pe.removeAttr(this, e)
            })
        }
    }), pe.extend({
        attr: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return "undefined" == typeof e.getAttribute ? pe.prop(e, t, n) : (1 === i && pe.isXMLDoc(e) || (t = t.toLowerCase(), o = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? Lt : jt)), void 0 !== n ? null === n ? void pe.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : (r = pe.find.attr(e, t), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!de.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, o = 0,
                i = t && t.match(De);
            if (i && 1 === e.nodeType)
                for (; n = i[o++];) r = pe.propFix[n] || n, pe.expr.match.bool.test(n) ? Kt && Mt || !Ht.test(n) ? e[r] = !1 : e[pe.camelCase("default-" + n)] = e[r] = !1 : pe.attr(e, n, ""), e.removeAttribute(Mt ? n : r)
        }
    }), Lt = {
        set: function(e, t, n) {
            return t === !1 ? pe.removeAttr(e, n) : Kt && Mt || !Ht.test(n) ? e.setAttribute(!Mt && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = $t[t] || pe.find.attr;
        Kt && Mt || !Ht.test(t) ? $t[t] = function(e, t, r) {
            var o, i;
            return r || (i = $t[t], $t[t] = o, o = null != n(e, t, r) ? t.toLowerCase() : null, $t[t] = i), o
        } : $t[t] = function(e, t, n) {
            return n ? void 0 : e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Kt && Mt || (pe.attrHooks.value = {
        set: function(e, t, n) {
            return pe.nodeName(e, "input") ? void(e.defaultValue = t) : jt && jt.set(e, t, n)
        }
    }), Mt || (jt = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, $t.id = $t.name = $t.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, pe.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: jt.set
    }, pe.attrHooks.contenteditable = {
        set: function(e, t, n) {
            jt.set(e, "" === t ? !1 : t, n)
        }
    }, pe.each(["width", "height"], function(e, t) {
        pe.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), de.style || (pe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Bt = /^(?:input|select|textarea|button|object)$/i,
        qt = /^(?:a|area)$/i;
    pe.fn.extend({
        prop: function(e, t) {
            return Pe(this, pe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = pe.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), pe.extend({
        prop: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return 1 === i && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, o = pe.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = pe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Bt.test(e.nodeName) || qt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), de.hrefNormalized || pe.each(["href", "src"], function(e, t) {
        pe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), de.optSelected || (pe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        pe.propFix[this.toLowerCase()] = this
    }), de.enctype || (pe.propFix.enctype = "encoding");
    var _t = /[\t\r\n\f]/g;
    pe.fn.extend({
        addClass: function(e) {
            var t, n, r, o, i, a, s, l = 0;
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).addClass(e.call(this, t, W(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(De) || []; n = this[l++];)
                    if (o = W(n), r = 1 === n.nodeType && (" " + o + " ").replace(_t, " ")) {
                        for (a = 0; i = t[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s = pe.trim(r), o !== s && pe.attr(n, "class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, o, i, a, s, l = 0;
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).removeClass(e.call(this, t, W(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(De) || []; n = this[l++];)
                    if (o = W(n), r = 1 === n.nodeType && (" " + o + " ").replace(_t, " ")) {
                        for (a = 0; i = t[a++];)
                            for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
                        s = pe.trim(r), o !== s && pe.attr(n, "class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) {
                pe(this).toggleClass(e.call(this, n, W(this), t), t)
            }) : this.each(function() {
                var t, r, o, i;
                if ("string" === n)
                    for (r = 0, o = pe(this), i = e.match(De) || []; t = i[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else(void 0 === e || "boolean" === n) && (t = W(this), t && pe._data(this, "__className__", t), pe.attr(this, "class", t || e === !1 ? "" : pe._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + W(n) + " ").replace(_t, " ").indexOf(t) > -1) return !0;
            return !1
        }
    }), pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        pe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), pe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Pt = e.location,
        Ft = pe.now(),
        Ot = /\?/,
        Ut = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    pe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            o = pe.trim(t + "");
        return o && !pe.trim(o.replace(Ut, function(e, t, o, i) {
            return n && t && (r = 0), 0 === r ? e : (n = o || t, r += !i - !o, "")
        })) ? Function("return " + o)() : pe.error("Invalid JSON: " + t)
    }, pe.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new e.DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (o) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n
    };
    var Rt = /#.*$/,
        Wt = /([?&])_=[^&]*/,
        It = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        zt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Vt = /^(?:GET|HEAD)$/,
        Yt = /^\/\//,
        Xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Gt = {},
        Jt = {},
        Qt = "*/".concat("*"),
        Zt = Pt.href,
        en = Xt.exec(Zt.toLowerCase()) || [];
    pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Zt,
            type: "GET",
            isLocal: zt.test(en[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": pe.parseJSON,
                "text xml": pe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? V(V(e, pe.ajaxSettings), t) : V(pe.ajaxSettings, e)
        },
        ajaxPrefilter: I(Gt),
        ajaxTransport: I(Jt),
        ajax: function(t, n) {
            function r(t, n, r, o) {
                var i, d, y, b, w, T = n;
                2 !== x && (x = 2, l && e.clearTimeout(l), c = void 0, s = o || "", k.readyState = t > 0 ? 4 : 0, i = t >= 200 && 300 > t || 304 === t, r && (b = Y(f, k, r)), b = X(f, b, k, i), i ? (f.ifModified && (w = k.getResponseHeader("Last-Modified"), w && (pe.lastModified[a] = w), w = k.getResponseHeader("etag"), w && (pe.etag[a] = w)), 204 === t || "HEAD" === f.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, d = b.data, y = b.error, i = !y)) : (y = T, (t || !T) && (T = "error", 0 > t && (t = 0))), k.status = t, k.statusText = (n || T) + "", i ? m.resolveWith(p, [d, T, k]) : m.rejectWith(p, [k, T, y]), k.statusCode(g), g = void 0, u && h.trigger(i ? "ajaxSuccess" : "ajaxError", [k, f, i ? d : y]), v.fireWith(p, [k, T]), u && (h.trigger("ajaxComplete", [k, f]), --pe.active || pe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o, i, a, s, l, u, c, d, f = pe.ajaxSetup({}, n),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? pe(p) : pe.event,
                m = pe.Deferred(),
                v = pe.Callbacks("once memory"),
                g = f.statusCode || {},
                y = {},
                b = {},
                x = 0,
                w = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!d)
                                for (d = {}; t = It.exec(s);) d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = b[n] = b[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) g[t] = [g[t], e[t]];
                            else k.always(e[k.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return c && c.abort(t), r(0, t), this
                    }
                };
            if (m.promise(k).complete = v.add, k.success = k.done, k.error = k.fail, f.url = ((t || f.url || Zt) + "").replace(Rt, "").replace(Yt, en[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = pe.trim(f.dataType || "*").toLowerCase().match(De) || [""], null == f.crossDomain && (o = Xt.exec(f.url.toLowerCase()), f.crossDomain = !(!o || o[1] === en[1] && o[2] === en[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = pe.param(f.data, f.traditional)), z(Gt, f, n, k), 2 === x) return k;
            u = pe.event && f.global, u && 0 === pe.active++ && pe.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Vt.test(f.type), a = f.url, f.hasContent || (f.data && (a = f.url += (Ot.test(a) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = Wt.test(a) ? a.replace(Wt, "$1_=" + Ft++) : a + (Ot.test(a) ? "&" : "?") + "_=" + Ft++)), f.ifModified && (pe.lastModified[a] && k.setRequestHeader("If-Modified-Since", pe.lastModified[a]), pe.etag[a] && k.setRequestHeader("If-None-Match", pe.etag[a])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && k.setRequestHeader("Content-Type", f.contentType), k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Qt + "; q=0.01" : "") : f.accepts["*"]);
            for (i in f.headers) k.setRequestHeader(i, f.headers[i]);
            if (f.beforeSend && (f.beforeSend.call(p, k, f) === !1 || 2 === x)) return k.abort();
            w = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) k[i](f[i]);
            if (c = z(Jt, f, n, k)) {
                if (k.readyState = 1, u && h.trigger("ajaxSend", [k, f]), 2 === x) return k;
                f.async && f.timeout > 0 && (l = e.setTimeout(function() {
                    k.abort("timeout")
                }, f.timeout));
                try {
                    x = 1, c.send(y, r)
                } catch (T) {
                    if (!(2 > x)) throw T;
                    r(-1, T)
                }
            } else r(-1, "No Transport");
            return k
        },
        getJSON: function(e, t, n) {
            return pe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return pe.get(e, void 0, t, "script")
        }
    }), pe.each(["get", "post"], function(e, t) {
        pe[t] = function(e, n, r, o) {
            return pe.isFunction(n) && (o = o || r, r = n, n = void 0), pe.ajax(pe.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: r
            }, pe.isPlainObject(e) && e))
        }
    }), pe._evalUrl = function(e) {
        return pe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, pe.fn.extend({
        wrapAll: function(e) {
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return pe.isFunction(e) ? this.each(function(t) {
                pe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = pe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = pe.isFunction(e);
            return this.each(function(n) {
                pe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), pe.expr.filters.hidden = function(e) {
        return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : J(e)
    }, pe.expr.filters.visible = function(e) {
        return !pe.expr.filters.hidden(e)
    };
    var tn = /%20/g,
        nn = /\[\]$/,
        rn = /\r?\n/g,
        on = /^(?:submit|button|image|reset|file)$/i,
        an = /^(?:input|select|textarea|keygen)/i;
    pe.param = function(e, t) {
        var n, r = [],
            o = function(e, t) {
                t = pe.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = pe.ajaxSettings && pe.ajaxSettings.traditional), pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) Q(n, e[n], t, o);
        return r.join("&").replace(tn, "+")
    }, pe.fn.extend({
        serialize: function() {
            return pe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = pe.prop(this, "elements");
                return e ? pe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !pe(this).is(":disabled") && an.test(this.nodeName) && !on.test(e) && (this.checked || !Fe.test(e))
            }).map(function(e, t) {
                var n = pe(this).val();
                return null == n ? null : pe.isArray(n) ? pe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(rn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(rn, "\r\n")
                }
            }).get()
        }
    }), pe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return this.isLocal ? ee() : re.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
    } : Z;
    var sn = 0,
        ln = {},
        un = pe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in ln) ln[e](void 0, !0)
    }), de.cors = !!un && "withCredentials" in un, un = de.ajax = !!un, un && pe.ajaxTransport(function(t) {
        if (!t.crossDomain || de.cors) {
            var n;
            return {
                send: function(r, o) {
                    var i, a = t.xhr(),
                        s = ++sn;
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (i in t.xhrFields) a[i] = t.xhrFields[i];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (i in r) void 0 !== r[i] && a.setRequestHeader(i, r[i] + "");
                    a.send(t.hasContent && t.data || null), n = function(e, r) {
                        var i, l, u;
                        if (n && (r || 4 === a.readyState))
                            if (delete ln[s], n = void 0, a.onreadystatechange = pe.noop, r) 4 !== a.readyState && a.abort();
                            else {
                                u = {}, i = a.status, "string" == typeof a.responseText && (u.text = a.responseText);
                                try {
                                    l = a.statusText
                                } catch (c) {
                                    l = ""
                                }
                                i || !t.isLocal || t.crossDomain ? 1223 === i && (i = 204) : i = u.text ? 200 : 404
                            }
                        u && o(i, l, u, a.getAllResponseHeaders())
                    }, t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = ln[s] = n : n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    }), pe.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), pe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return pe.globalEval(e), e
            }
        }
    }), pe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), pe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = re.head || pe("head")[0] || re.documentElement;
            return {
                send: function(r, o) {
                    t = re.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var cn = [],
        dn = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = cn.pop() || pe.expando + "_" + Ft++;
            return this[e] = !0, e
        }
    }), pe.ajaxPrefilter("json jsonp", function(t, n, r) {
        var o, i, a, s = t.jsonp !== !1 && (dn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(dn, "$1" + o) : t.jsonp !== !1 && (t.url += (Ot.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return a || pe.error(o + " was not called"), a[0]
        }, t.dataTypes[0] = "json", i = e[o], e[o] = function() {
            a = arguments
        }, r.always(function() {
            void 0 === i ? pe(e).removeProp(o) : e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, cn.push(o)), a && pe.isFunction(i) && i(a[0]), a = i = void 0
        }), "script") : void 0
    }), de.createHTMLDocument = function() {
        if (!re.implementation.createHTMLDocument) return !1;
        var e = re.implementation.createHTMLDocument("");
        return e.body.innerHTML = "<form></form><form></form>", 2 === e.body.childNodes.length
    }(), pe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || (de.createHTMLDocument ? re.implementation.createHTMLDocument("") : re);
        var r = ke.exec(e),
            o = !n && [];
        return r ? [t.createElement(r[1])] : (r = g([e], t, o), o && o.length && pe(o).remove(), pe.merge([], r.childNodes))
    };
    var fn = pe.fn.load;
    pe.fn.load = function(e, t, n) {
        if ("string" != typeof e && fn) return fn.apply(this, arguments);
        var r, o, i, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = pe.trim(e.slice(s, e.length)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && pe.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, a.html(r ? pe("<div>").append(pe.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(a, i || [e.responseText, t, e])
            })
        }), this
    }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        pe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), pe.expr.filters.animated = function(e) {
        return pe.grep(pe.timers, function(t) {
            return e === t.elem
        }).length
    }, pe.offset = {
        setOffset: function(e, t, n) {
            var r, o, i, a, s, l, u, c = pe.css(e, "position"),
                d = pe(e),
                f = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), i = pe.css(e, "top"), l = pe.css(e, "left"), u = ("absolute" === c || "fixed" === c) && pe.inArray("auto", [i, l]) > -1, u ? (r = d.position(), a = r.top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(l) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, pe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                pe.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                i = o && o.ownerDocument;
            if (i) return t = i.documentElement, pe.contains(t, o) ? ("undefined" != typeof o.getBoundingClientRect && (r = o.getBoundingClientRect()), n = te(i), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === pe.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (n = e.offset()), n.top += pe.css(e[0], "borderTopWidth", !0), n.left += pe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - pe.css(r, "marginTop", !0),
                    left: t.left - n.left - pe.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position");) e = e.offsetParent;
                return e || pt
            })
        }
    }), pe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        pe.fn[e] = function(r) {
            return Pe(this, function(e, r, o) {
                var i = te(e);
                return void 0 === o ? i ? t in i ? i[t] : i.document.documentElement[r] : e[r] : void(i ? i.scrollTo(n ? pe(i).scrollLeft() : o, n ? o : pe(i).scrollTop()) : e[r] = o)
            }, e, r, arguments.length, null)
        }
    }), pe.each(["top", "left"], function(e, t) {
        pe.cssHooks[t] = L(de.pixelPosition, function(e, n) {
            return n ? (n = mt(e, t), dt.test(n) ? pe(e).position()[t] + "px" : n) : void 0
        })
    }), pe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        pe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            pe.fn[r] = function(r, o) {
                var i = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || o === !0 ? "margin" : "border");
                return Pe(this, function(t, n, r) {
                    var o;
                    return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? pe.css(t, n, a) : pe.style(t, n, r, a)
                }, t, i ? r : void 0, i, null)
            }
        })
    }), pe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), pe.fn.size = function() {
        return this.length
    }, pe.fn.andSelf = pe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return pe
    });
    var pn = e.jQuery,
        hn = e.$;
    return pe.noConflict = function(t) {
        return e.$ === pe && (e.$ = hn), t && e.jQuery === pe && (e.jQuery = pn), pe
    }, t || (e.jQuery = e.$ = pe), pe
});
var Karmeleon;
Karmeleon || (Karmeleon = {
        liveMode: "production"
    }), Karmeleon.Components || (Karmeleon.Components = {}), Karmeleon.Behavior || (Karmeleon.Behavior = {}), Karmeleon.Utils || (Karmeleon.Utils = {}), Karmeleon.FormHelper || (Karmeleon.FormHelper = {}),
    Karmeleon.Behavior.AddSpinnerOnFormSubmit = function(e) {
        var t = e.parents("form");
        t.submit(function(t) {
            e.attr("disabled", !0), e.addClass("k-button--spinner")
        })
    }, Karmeleon.Behavior.Bogo = function(e) {
        if (!window.noDoubleDataPromo) {
            var t = 1445328e6,
                n = 1446364799e3,
                r = 6e4,
                o = 864e5,
                i = new Date,
                a = ["2015-10-28", "Last Day", "2015-10-29", "24 hrs", "2015-10-30", "Last Day", "2015-10-31", "24 hrs"],
                s = function() {
                    var e = i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate(),
                        t = a.indexOf(e);
                    if (t >= 0) return a[t + 1];
                    var r = Math.ceil((n - i) / o);
                    return 1 === r ? "Last Day" : r
                },
                l = function() {
                    return i >= t && n >= i
                },
                u = function() {
                    i = new Date, l() ? ($(".k-navbar-item-bogo").hasClass("k-navbar-item-bogo--hide") && $(".k-navbar-item-bogo").removeClass("k-navbar-item-bogo--hide"), $(".k-navbar-item--hide-when-bogo").hasClass("k-navbar-item-bogo--hide") || $(".k-navbar-item--hide-when-bogo").addClass("k-navbar-item-bogo--hide"), $(".k-navbar-item-bogo-button").text(s())) : ($(".k-navbar-item-bogo").hasClass("k-navbar-item-bogo--hide") || $(".k-navbar-item-bogo").addClass("k-navbar-item-bogo--hide"), $(".k-navbar-item--hide-when-bogo").hasClass("k-navbar-item-bogo--hide") && $(".k-navbar-item--hide-when-bogo").removeClass("k-navbar-item-bogo--hide"))
                };
            l() && (u(), window.setTimeout(function() {
                u()
            }, r))
        }
    }, Karmeleon.Behavior.DisableAfterClick = function(e) {
        e.click(function(t) {
            e.attr("disabled") ? t.preventDefault() : e.attr("disabled", !0)
        })
    }, Karmeleon.Behavior.ExpandableContent = function(e) {
        var t, n = e.text(),
            r = 0;
        t = e.data("content-id") ? $("#" + e.data("content-id")) : e.next(".k-expandable-content");
        var o = function() {
                return e.hasClass("k-expandable-link--expanded")
            },
            i = function() {
                t.removeClass("k-expandable-content--visible"), e.data("expanded-text") && e.text(n)
            },
            a = function() {
                o() ? (e.removeClass("k-expandable-link--expanded"), t.animate({
                    height: 0
                }, {
                    duration: 200,
                    complete: i,
                    queue: !1
                })) : (e.addClass("k-expandable-link--expanded"), t.addClass("k-expandable-content--visible"), e.data("expanded-text") && e.text(e.data("expanded-text")), 0 == r && (r = t.outerHeight()), t.height(0), t.animate({
                    height: r
                }, {
                    duration: 200,
                    queue: !1
                }))
            };
        e.click(function(e) {
            e.preventDefault(), a()
        })
    }, Karmeleon.Behavior.FormValidation = function(e) {
        var t, n, r, o = e.find("button"),
            i = new Karmeleon.Store,
            r = function() {
                var r;
                e.data("form-validator") && (r = Karmeleon.Utils.resolve(window, e.data("form-validator")), "function" == typeof r && (r = r())), r != t && (t = r, n = new Karmeleon.Store.Validator(t, i), n._setValidationErrorsInStore())
            },
            a = function() {
                Karmeleon.FormHelper.renderFieldStates(i, e), Karmeleon.FormHelper.renderErrors(i, e)
            },
            s = function() {
                e.addClass("k-form--disabled"), e.find("input").attr("readonly", !0)
            },
            l = function() {
                o.data("submit-css-class") ? o.prop("class", o.data("submit-css-class")) : o.addClass("k-button--spinner"), o.text(o.data("loading-text"))
            },
            u = function(t) {
                r(), Karmeleon.FormHelper.sync(i, e, !(e.data("validate-non-visible") === !0));
                var o = n.validate();
                if (a(), !o) return t.preventDefault(), !1;
                if (s(), l(), !e.data("form-submit-callback")) return !0;
                t.preventDefault();
                var u = Karmeleon.Utils.resolve(window, e.data("form-submit-callback"));
                u(t)
            };
        e.submit(u), a()
    }, Karmeleon.initAfterPageReload = function() {
        $("[data-behavior]").each(function(e, t) {
            var n = t,
                t = $(t),
                r = t.data("behavior");
            r.split(" ").forEach(function(e) {
                var e = e.trim();
                if (!("" == e || n.isBehaviorAdded && n.isBehaviorAdded[e]))
                    if (n.isBehaviorAdded || (n.isBehaviorAdded = {}), n.isBehaviorAdded[e] = !0, Karmeleon.Behavior[e]) Karmeleon.Behavior[e](t);
                    else {
                        var r = Karmeleon.Utils.resolve(window, e);
                        r(t)
                    }
            })
        })
    }, $(function() {
        Karmeleon.initAfterPageReload()
    }), Karmeleon.Behavior.LoggedInNavbar = function(e) {
        var t = function() {
            e.addClass("k-navbar--logged-in"), $("[data-logged-in='true']").removeClass("k-hidden"), $("[data-logged-in='false']").addClass("k-hidden"), $(window).trigger("resize")
        };
        $.ajax({
            url: e.data("login-details"),
            context: document.body,
            xhrFields: {
                withCredentials: !0
            }
        }).done(function(n) {
            t(), e.trigger("loaded")
        })
    }, Karmeleon.Behavior.PromoModal = function(e) {
        $.ajax({
            url: e.data("promo-details"),
            context: document.body,
            xhrFields: {
                withCredentials: !0
            }
        }).done(function(t) {
            $("head").append("<link rel='stylesheet' type='text/css' href='" + t.promo.css + "' />"), $("body").append("<div class='k-promo-container' />"), $("body .k-promo-container").append(t.promo.html), window.setTimeout(function() {
                $(window).trigger("resize"), e.trigger("loaded")
            }, 200)
        })
    }, Karmeleon.Behavior.PromoNavbar = function(e) {
        $.ajax({
            url: e.data("promo-details"),
            context: document.body,
            xhrFields: {
                withCredentials: !0
            }
        }).done(function(t) {
            t.promo.html ? e.prepend("<div class='k-promo-banner k-promo-banner--black'>" + t.promo.html + "</div>") : t.promo.link ? e.prepend("<a class='k-promo-banner k-promo-banner--black' href='" + t.promo.link + "'>" + t.promo.text + "</a>") : e.prepend("<div class='k-promo-banner k-promo-banner--black'>" + t.promo.text + "</div>"), window.setTimeout(function() {
                $(window).trigger("resize"), e.trigger("loaded")
            }, 200)
        })
    }, Karmeleon.Behavior.ScrollToAnchor = function(e) {
        e.click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var e = $(this.hash);
                if (e.length || (e = $("[id='" + this.hash.slice(1) + "']")), e.length >= 1) return $("html, body").animate({
                    scrollTop: e.offset().top
                }, 500), !1
            }
        })
    }, Karmeleon.Behavior.SetMainPadding = function(e) {
        var t = 0,
            n = function() {
                t < e.outerHeight() && (t = e.outerHeight(), $(".k-main").css("padding-top", t + 1)), $(".k-main").trigger("after:resize")
            };
        n(), $(window).on("resize", n), $(e).on("transitionend", n)
    }, Karmeleon.Behavior.ToggleClassWhenScrolling = function(e) {
        var t, n = parseInt(e.data("scroll-offset")),
            r = "add" == e.data("scroll-class-behavior"),
            o = !1,
            i = function() {
                var i = $(document).scrollTop();
                r ? i >= n && !o ? (o = !0, e.addClass(e.data("scroll-class"))) : n > i && o && (o = !1, e.removeClass(e.data("scroll-class"))) : i >= n && o ? (o = !1, e.removeClass(e.data("scroll-class"))) : n > i && !o && (o = !0, e.addClass(e.data("scroll-class"))), t && (clearTimeout(t), t = null)
            },
            a = function(e) {
                t || setTimeout(i, 50)
            };
        $(document).bind("ready scroll", a), i()
    }, Karmeleon.Behavior.ToggleExpandedMenu = function(e) {
        var t = e.parent().find(".k-navbar-expand-container"),
            n = 0,
            r = !1,
            o = function(n) {
                e.is(n.target) || t.is(n.target) || 0 != e.has(n.target).length || 0 != t.has(n.target).length || a()
            },
            i = function() {
                r !== !0 && (r = !0, n = $(document).scrollTop(), e.addClass("k-navbar-link--with-sub-nav--expanded"), $(document).bind("mouseup.karmeleon-behavior-toggle-expanded-menu", o), $(document).bind("scroll", s))
            },
            a = function() {
                r !== !1 && (r = !1, e.removeClass("k-navbar-link--with-sub-nav--expanded"), $(document).unbind("mouseup.karmeleon-behavior-toggle-expanded-menu"), $(document).unbind("scroll", s))
            },
            s = function(e) {
                var t = Math.abs($(document).scrollTop() - n);
                t > 100 && a()
            },
            l = function(e) {
                e.preventDefault(), e.stopPropagation(), r ? a() : i()
            },
            u = function(e) {
                27 == e.keyCode && r && a()
            };
        e.on("click touchend", l), $(window).keyup(u)
    }, Karmeleon.Behavior.ToggleMobileMenu = function(e) {
        var t = $(".k-navbar-mobile-container"),
            n = t.parents(".k-navbar"),
            r = $(".k-navbar-mobile-layer"),
            o = function() {
                return e.hasClass("k-navbar-link--menu--expanded")
            },
            i = function() {
                e.removeClass("k-navbar-link--menu--expanded"), t.removeClass("k-navbar-mobile-container--expanded"), r.removeClass("k-navbar-mobile-layer--visible"), n.removeClass("k-navbar--mobile-expanded"), $(window).disablescroll("undo")
            },
            a = function() {
                e.addClass("k-navbar-link--menu--expanded"), t.addClass("k-navbar-mobile-container--expanded"), r.addClass("k-navbar-mobile-layer--visible"), n.addClass("k-navbar--mobile-expanded"), $(window).disablescroll()
            },
            s = function(e) {
                e && (e.preventDefault(), e.stopPropagation()), o() ? i() : a()
            },
            l = function(e) {
                27 == e.keyCode && o() && s(null)
            },
            u = function(e) {
                e.preventDefault(), i()
            },
            c = function(e) {
                o() && i()
            };
        r.on("click touchend", u), $(e).on("click touchend", s), $(window).keyup(l), $(window).on("resize", c)
    }, Karmeleon.Behavior.YoutubeVideoModal = function(e) {
        Karmeleon.Behavior.YoutubeVideoModal._initYoutube(), Karmeleon.Behavior.YoutubeVideoModal._initModal(), e.click(function(e) {
            e.preventDefault(), Karmeleon.Behavior.YoutubeVideoModal._openVideo($(e.currentTarget).data("video-id"))
        })
    }, Karmeleon.Behavior.YoutubeVideoModal.player = null, Karmeleon.Behavior.YoutubeVideoModal.closeEvent = document.createEvent("Event"), Karmeleon.Behavior.YoutubeVideoModal.closeEvent.initEvent("youtubeVideoModalClose", !0, !0), Karmeleon.Behavior.YoutubeVideoModal._initYoutube = function() {
        $("head script#youtube-iframe").length > 0 || ($("head").prepend("<script id='youtube-iframe' src='https://www.youtube.com/iframe_api' />"), window.onYouTubeIframeAPIReady = function() {
            Karmeleon.Behavior.YoutubeVideoModal.player = new YT.Player("youtube-video", {
                playerVars: {
                    rel: 0,
                    showinfo: 0,
                    autohide: 1,
                    controls: 1,
                    enablejsapi: 1,
                    disablekb: 1
                }
            })
        })
    }, Karmeleon.Behavior.YoutubeVideoModal._initModal = function() {
        $("body .k-video-modal").length > 0 || 0 == $("body .k-video-modal").length && ($("body").append("\n      <div class='k-video-modal'>\n        <div class='k-video-modal-canvas'>\n          <div class='container'>\n            <div class='k-embed-responsive--16-9'>\n              <div id='youtube-video' />\n            </div>\n            <div class='k-video-modal-close'/>\n          </div>\n        </div>\n      </div>\n    "), $("body .k-video-modal").click(function() {
            Karmeleon.Behavior.YoutubeVideoModal._stopVideo()
        }), $("body .k-video-modal .k-video-modal-close").click(function() {
            Karmeleon.Behavior.YoutubeVideoModal._stopVideo()
        }))
    }, Karmeleon.Behavior.YoutubeVideoModal.openNewWindowOnMobile = !1, Karmeleon.Behavior.YoutubeVideoModal._openVideo = function(e) {
        return Karmeleon.Behavior.YoutubeVideoModal.openNewWindowOnMobile && Karmeleon.Utils.isMobile() ? void window.open("https://www.youtube.com/watch?v=" + e, "_blank") : void(Karmeleon.Behavior.YoutubeVideoModal.player && ($("body").addClass("k-body--modal-expanded"), $("body .k-video-modal").addClass("k-video-modal--expanded"), $("body .k-video-modal .k-video-modal-canvas").css("margin-top", "-" + $(".k-video-modal-canvas").outerHeight() / 2 + "px"), Karmeleon.Behavior.YoutubeVideoModal.player.loadVideoById(e)))
    }, Karmeleon.Behavior.YoutubeVideoModal._stopVideo = function() {
        $("body .k-video-modal").removeClass("k-video-modal--expanded"), $("body").removeClass("k-body--modal-expanded"), Karmeleon.Behavior.YoutubeVideoModal.player && Karmeleon.Behavior.YoutubeVideoModal.player.stopVideo(), document.dispatchEvent(Karmeleon.Behavior.YoutubeVideoModal.closeEvent)
    }, Karmeleon.Behavior.ZopimChatButton = function(e) {
        e.click(function(t) {
            t.preventDefault(), e.is(":visible") && ($zopim.livechat.badge.hide(), $zopim.livechat.button.hide(), $zopim.livechat.button.setPosition("br"), $zopim.livechat.window.show(), $zopim.livechat.window.setPosition("br"), $zopim.livechat.window.setOffsetHorizontal(30), $zopim.livechat.window.setOffsetVertical(0))
        })
    }, Karmeleon.Utils.setAlert = function(e) {
        var t = arguments.length <= 1 || void 0 === arguments[1] ? "default" : arguments[1];
        Karmeleon.Utils.clearAlertTimer(), e ? ($("#k-alert").html("<div class='k-alert " + ("default" == t ? "" : "k-alert--" + t) + " k-alert-animation'><p class='k-alert-body'>" + e + "</p></div>"), window.setTimeout(function() {
            $("#k-alert .k-alert-animation").addClass("k-alert-animation--end")
        }, 100), Karmeleon.Utils.setAlertTimer()) : $("#k-alert").empty(), $("#k-alert").removeClass("k-alert--hidden")
    }, Karmeleon.Utils.clearAlertTimer = function() {
        Karmeleon.Utils.setAlert.timer && (window.clearTimeout(Karmeleon.Utils.setAlert.timer), Karmeleon.Utils.setAlert.timer = null)
    }, Karmeleon.Utils.setAlertTimer = function() {
        Karmeleon.Utils.setAlert.timer = window.setTimeout(function() {
            Karmeleon.Utils.setAlert(null)
        }, 7e3)
    }, Karmeleon.Utils.setAlert.DEFAULT = "default", Karmeleon.Utils.setAlert.WARNING = "warning", Karmeleon.Utils.setAlert.NOTICE = "notice", Karmeleon.Utils.setAlert.timer = null, $(function() {
        var e = $("#k-alert");
        e.click(function(e) {
            Karmeleon.Utils.setAlert(null)
        })
    }), Karmeleon.Utils.arrayContainsAtLeastOneItemOf = function(e, t) {
        for (var n = 0; n < e.length; n++)
            for (var r = 0; r < t.length; r++)
                if (e[n] === t[r]) return !0;
        return !1
    }, Karmeleon.Utils.deepMerge = function(e, t) {
        var n;
        return Karmeleon.Utils.isArray(t) ? n = t.slice(0) || [] : (n = {}, e && "object" == typeof e && Object.keys(e).forEach(function(t) {
            n[t] = e[t]
        }), Object.keys(t).forEach(function(r) {
            "object" == typeof t[r] && t[r] && e[r] ? n[r] = Karmeleon.Utils.deepMerge(e[r], t[r]) : n[r] = t[r]
        })), n
    }, Karmeleon.Utils.timers = {}, Karmeleon.Utils.filterTimer = function(e, t) {
        return Karmeleon.Utils.cancelTimer(e), new Promise(function(n, r) {
            Karmeleon.Utils.timers[e] = setTimeout(function() {
                n()
            }, t)
        })
    }, Karmeleon.Utils.cancelTimer = function(e) {
        Karmeleon.Utils.timers[e] && (clearTimeout(Karmeleon.Utils.timers[e]), delete Karmeleon.Utils.timers[e])
    }, Karmeleon.Utils.formatCurrency = function(e) {
        var e = parseFloat(e),
            t = e.toFixed(2).toString();
        return t.replace(/\.00$/, "")
    }, Karmeleon.Utils.getPropertyNames = function(e) {
        var t = [],
            n = "";
        return Karmeleon.Utils._getPropertyNames(t, n, e), t
    }, Karmeleon.Utils._getPropertyNames = function(e, t, n) {
        for (var r in n) Karmeleon.Utils.isArray(n[r]) || "object" != typeof n[r] ? e.push("" + t + r) : Karmeleon.Utils._getPropertyNames(e, "" + t + r + ".", n[r])
    }, Karmeleon.Utils.getPropertyPath = function(e) {
        for (var t = e.split("."), n = [], r = 0; r < t.length; r++) {
            var o = t[r],
                i = o.match(/(\[[^\]]*\])+$/);
            if (i) {
                var a = o.replace(/(\[[^\]]*\])+$/, "");
                "" !== a && n.push(a);
                for (var s = i[0].split("]"), l = 0; l < s.length; l++) Karmeleon.Utils.hasValue(s[l]) && ("[" === s[l] ? n.push("-1") : n.push(s[l].replace("[", "")))
            } else n.push(o)
        }
        return n
    }, Karmeleon.Utils.getScrollVisibility = function(e) {
        var t = $(window),
            n = t.scrollTop(),
            r = t.scrollTop() + t.height(),
            o = e.offset().top,
            i = e.offset().top + e.height();
        if (n += $(".k-navbar").height(), n > i || o > r) return 0;
        if (o > n && r > i) return 100;
        var a = void 0;
        return a = o > n ? r - o : i - n, Math.round(a / e.height() * 100)
    }, Karmeleon.Utils.getUtf8Length = function(e) {
        for (var t = 0, n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            127 >= r ? t += 1 : 2047 >= r ? t += 2 : r >= 55296 && 57343 >= r ? (t += 4, n++) : t += 65535 > r ? 3 : 4
        }
        return t
    }, Karmeleon.Utils.hasValue = function(e) {
        return !!e && (Array.isArray(e) && e.length > 0 || "string" != typeof e && !Array.isArray(e) || "string" == typeof e && "" != e.trim())
    }, Karmeleon.Utils.isArray = function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }, Karmeleon.Utils.isMobile = function() {
        return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)
    }, Karmeleon.Utils.replaceArray = function(e, t) {
        e.splice(0, e.length);
        for (var n = 0; n < t.length; n++) e[n] = t[n];
        return e
    }, Karmeleon.Utils.resolve = function(e, t) {
        t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, "");
        for (var n = t.split("."), r = 0; r < n.length; r++) {
            var o = n[r];
            if (o.match(/[^\[\]]+\[\]$/) && (o = o.replace(/\[\]$/, "")), !(e && o in e)) return;
            e = e[o]
        }
        return e
    }, Karmeleon.Utils.setDefaultProperty = function(e, t, n) {
        var r = Karmeleon.Utils.resolve(e, t);
        return ("undefined" == typeof r || null === r) && (Karmeleon.Utils.setProperty(e, t, n), r = Karmeleon.Utils.resolve(e, t)), r
    }, Karmeleon.Utils.setProperty = function(e, t, n) {
        for (var r = Karmeleon.Utils.getPropertyPath(t), o = e, i = 0; i < r.length; i++) {
            var a = r[i],
                s = i == r.length - 1,
                l = s ? null : r[i + 1];
            if (s)
                if (a.match(/^\-?[0-9]+$/)) {
                    "undefined" == typeof o && (o = []);
                    var u = parseInt(a); - 1 == u ? Karmeleon.Utils.isArray(n) ? Karmeleon.Utils.replaceArray(o, n) : o.push(n) : Karmeleon.Utils.isArray(n) ? Karmeleon.Utils.replaceArray(o, n) : o[u] = n
                } else "undefined" == typeof o && (o = {}), o[a] = n;
            else "undefined" == typeof o[a] && l ? (l.match(/^\-?[0-9]+$/) ? o[a] = [] : o[a] = {}, o = o[a]) : o = Karmeleon.Utils.isArray(o) ? o["-1" === a ? 0 : parseInt(a)] : o[a]
        }
        return e
    }, Karmeleon.Utils.unique = function(e) {
        return e.filter(function(e, t, n) {
            return n.indexOf(e) === t
        })
    }, Karmeleon.Utils.lastId = {}, Karmeleon.Utils.getUniqueId = function(e) {
        return Karmeleon.Utils.lastId[e] || (Karmeleon.Utils.lastId[e] = 0), Karmeleon.Utils.lastId[e]++, Karmeleon.Utils.lastId[e]
    }, Karmeleon.Utils.getUrlParams = function() {
        for (var e, t = [], n = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), r = 0; r < n.length; r++) e = n[r].split("="), t.push(e[0]), t[e[0]] = e[1];
        return t
    },
    function(e) {
        "use strict";

        function t(t, n) {
            this.opts = e.extend({
                handleWheel: !0,
                handleScrollbar: !0,
                handleKeys: !0,
                scrollEventKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40]
            }, n), this.$container = t, this.$document = e(document), this.lockToScrollPos = [0, 0], this.disable()
        }
        var n, r;
        r = t.prototype, r.disable = function() {
            var e = this;
            e.opts.handleWheel && e.$container.on("mousewheel.disablescroll DOMMouseScroll.disablescroll touchmove.disablescroll", e._handleWheel), e.opts.handleScrollbar && (e.lockToScrollPos = [e.$container.scrollLeft(), e.$container.scrollTop()], e.$container.on("scroll.disablescroll", function() {
                e._handleScrollbar.call(e)
            })), e.opts.handleKeys && e.$document.on("keydown.disablescroll", function(t) {
                e._handleKeydown.call(e, t)
            })
        }, r.undo = function() {
            var e = this;
            e.$container.off(".disablescroll"), e.opts.handleKeys && e.$document.off(".disablescroll")
        }, r._handleWheel = function(e) {
            e.preventDefault()
        }, r._handleScrollbar = function() {
            this.$container.scrollLeft(this.lockToScrollPos[0]), this.$container.scrollTop(this.lockToScrollPos[1])
        }, r._handleKeydown = function(e) {
            for (var t = 0; t < this.opts.scrollEventKeys.length; t++)
                if (e.keyCode === this.opts.scrollEventKeys[t]) return void e.preventDefault()
        }, e.fn.disablescroll = function(e) {
            n || "object" != typeof e && e || (n = new t(this, e)), n && "undefined" == typeof e ? n.disable() : n && n[e] && n[e].call(n)
        }, window.UserScrollDisabler = t
    }(jQuery);
