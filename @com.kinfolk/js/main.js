function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}! function(e, t, i) {
    function n(e, t) {
        return typeof e === t
    }

    function o() {
        var e, t, i, o, s, r, a;
        for (var l in d)
            if (d.hasOwnProperty(l)) {
                if (e = [], t = d[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (i = 0; i < t.options.aliases.length; i++) e.push(t.options.aliases[i].toLowerCase());
                for (o = n(t.fn, "function") ? t.fn() : t.fn, s = 0; s < e.length; s++) r = e[s], a = r.split("."), 1 === a.length ? p[a[0]] = o : (!p[a[0]] || p[a[0]] instanceof Boolean || (p[a[0]] = new Boolean(p[a[0]])), p[a[0]][a[1]] = o), c.push((o ? "" : "no-") + a.join("-"))
            }
    }

    function s(e) {
        var t = f.className,
            i = p._config.classPrefix || "";
        if (h && (t = t.baseVal), p._config.enableJSClass) {
            var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
            t = t.replace(n, "$1" + i + "js$2")
        }
        p._config.enableClasses && (t += " " + i + e.join(" " + i), h ? f.className.baseVal = t : f.className = t)
    }

    function r() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : h ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function a() {
        var e = t.body;
        return e || (e = r(h ? "svg" : "body"), e.fake = !0), e
    }

    function l(e, i, n, o) {
        var s, l, c, d, u = "modernizr",
            p = r("div"),
            h = a();
        if (parseInt(n, 10))
            for (; n--;) c = r("div"), c.id = o ? o[n] : u + (n + 1), p.appendChild(c);
        return s = r("style"), s.type = "text/css", s.id = "s" + u, (h.fake ? h : p).appendChild(s), h.appendChild(p), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(t.createTextNode(e)), p.id = u, h.fake && (h.style.background = "", h.style.overflow = "hidden", d = f.style.overflow, f.style.overflow = "hidden", f.appendChild(h)), l = i(p, e), h.fake ? (h.parentNode.removeChild(h), f.style.overflow = d, f.offsetHeight) : p.parentNode.removeChild(p), !!l
    }
    var c = [],
        d = [],
        u = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var i = this;
                setTimeout(function() {
                    t(i[e])
                }, 0)
            },
            addTest: function(e, t, i) {
                d.push({
                    name: e,
                    fn: t,
                    options: i
                })
            },
            addAsyncTest: function(e) {
                d.push({
                    name: null,
                    fn: e
                })
            }
        },
        p = function() {};
    p.prototype = u, p = new p;
    var f = t.documentElement,
        h = "svg" === f.nodeName.toLowerCase(),
        m = u._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    u._prefixes = m;
    var g = function() {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function(e) {
            var i = t(e);
            return i && i.matches || !1
        } : function(t) {
            var i = !1;
            return l("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                i = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            }), i
        }
    }();
    u.mq = g;
    var v = u.testStyles = l;
    p.addTest("touchevents", function() {
        var i;
        if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) i = !0;
        else {
            var n = ["@media (", m.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            v(n, function(e) {
                i = 9 === e.offsetTop
            })
        }
        return i
    }), o(), s(c), delete u.addTest, delete u.addAsyncTest;
    for (var y = 0; y < p._q.length; y++) p._q[y]();
    e.Modernizr = p
}(window, document),
function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && "object" == typeof module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
}(this, function(e) {
    "use strict";

    function t(e, t) {
        return typeof e === t
    }

    function i(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function n(e, t) {
        for (var n in e) {
            var o = e[n];
            if (!i(o, "-") && void 0 !== g[o]) return "pfx" != t || o
        }
        return !1
    }

    function o(e, i, n) {
        for (var o in e) {
            var s = i[e[o]];
            if (void 0 !== s) return n === !1 ? e[o] : t(s, "function") ? s.bind(n || i) : s
        }
        return !1
    }

    function s(e, i, s) {
        var r = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + y.join(r + " ") + r).split(" ");
        return t(i, "string") || t(i, "undefined") ? n(a, i) : (a = (e + " " + w.join(r + " ") + r).split(" "), o(a, i, s))
    }
    var r, a, l = {
            image: null,
            imageAttribute: "image",
            holderClass: "imageHolder",
            imgClass: "img-holder-img",
            container: e("body"),
            windowObject: e(window),
            speed: .2,
            coverRatio: .75,
            holderMinHeight: 200,
            holderMaxHeight: null,
            extraHeight: 0,
            mediaWidth: 1600,
            mediaHeight: 900,
            parallax: !0,
            touch: !1
        },
        c = "imageScroll",
        d = "plugin_" + c,
        u = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        p = {},
        f = document.documentElement,
        h = "imageScrollModernizr",
        m = document.createElement(h),
        g = m.style,
        v = "Webkit Moz O ms",
        y = v.split(" "),
        w = v.toLowerCase().split(" "),
        b = {},
        x = 0,
        k = "",
        T = function(e, t, i, n) {
            var o, s, r, a, l = document.createElement("div"),
                c = document.body,
                d = c || document.createElement("body");
            if (parseInt(i, 10))
                for (; i--;) r = document.createElement("div"), r.id = n ? n[i] : h + (i + 1), l.appendChild(r);
            return o = ["&#173;", '<style id="s', h, '">', e, "</style>"].join(""), l.id = h, (c ? l : d).innerHTML += o, d.appendChild(l), c || (d.style.background = "", d.style.overflow = "hidden", a = f.style.overflow, f.style.overflow = "hidden", f.appendChild(d)), s = t(l, e), c ? l.parentNode.removeChild(l) : (d.parentNode.removeChild(d), f.style.overflow = a), !!s
        };
    return b.csstransforms = function() {
        return !!s("transform")
    }, b.csstransforms3d = function() {
        var e = !!s("perspective");
        return e && "webkitPerspective" in f.style && T("@media (transform-3d),(-webkit-transform-3d){#imageScrollModernizr{left:9px;position:absolute;height:3px;}}", function(t, i) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }), e
    }, p.prefixed = function(e, t, i) {
        return t ? s(e, t, i) : s(e, "pfx")
    }, window.requestAnimationFrame = p.prefixed("requestAnimationFrame", window) || function(e, t) {
        var i = (new Date).getTime(),
            n = Math.max(0, 16 - (i - x)),
            o = window.setTimeout(function() {
                e(i + n)
            }, n);
        return x = i + n, o
    }, b.csstransforms3d() ? k = "csstransforms3d" : b.csstransforms() && (k = "csstransforms"), "" !== k && (a = p.prefixed("transform")), r = function(t, i) {
        this.$imageHolder = e(t), this.settings = e.extend({}, l, i), this.image = this.$imageHolder.data(this.settings.imageAttribute) || this.settings.image, this.mediaWidth = this.$imageHolder.data("width") || this.settings.mediaWidth, this.mediaHeight = this.$imageHolder.data("height") || this.settings.mediaHeight, this.coverRatio = this.$imageHolder.data("cover-ratio") || this.settings.coverRatio, this.holderMinHeight = this.$imageHolder.data("min-height") || this.settings.holderMinHeight, this.holderMaxHeight = this.$imageHolder.data("max-height") || this.settings.holderMaxHeight, this.extraHeight = this.$imageHolder.data("extra-height") || this.settings.extraHeight, this.ticking = !1, this.refresh = u(this.refresh, this), this._onScroll = u(this._onScroll, this), this._defaults = l, this._name = c, this.init()
    }, e.extend(r.prototype, {
        constructor: r,
        init: function() {
            var t;
            if (!this.image) throw new Error("You need to provide either a data-img attr or an image option");
            t = this.image, this.$scrollingElement = e("<div></div>").addClass(this.settings.imgClass), this.settings.touch === !0 ? this.$scrollingElement.css({
                maxWidth: "100%"
            }).prependTo(this.$imageHolder) : this.settings.parallax === !0 ? (this.$scrollerHolder = e("<div/>", {
                html: this.$imageHolder.html()
            }).css({
                top: 0,
                visibility: "hidden",
                position: "fixed",
                overflow: "hidden"
            }).addClass(this.settings.holderClass).prependTo(this.settings.container), this.$imageHolder.css("visibility", "hidden").empty(), this.$scrollingElement.css({
                backgroundImage: "url(" + t + ")",
                position: "absolute",
                top: 0,
                left: 0,
                visibility: "hidden",
                maxWidth: "none"
            }).prependTo(this.$scrollerHolder)) : (this.$scrollerHolder = this.$imageHolder.css({
                overflow: "hidden"
            }), this.$scrollingElement.css({
                position: "relative",
                overflow: "hidden"
            }).prependTo(this.$imageHolder)), this.settings.touch === !1 && (this._bindEvents(), this.refresh())
        },
        _adjustImgHolderHeights: function() {
            var e, t, i, n, o, s, r, a, l, c = this.settings.windowObject.height(),
                d = this.settings.windowObject.width() - this.settings.container.offset().left,
                u = this.coverRatio * c;
            u = null === this.holderMaxHeight || this.holderMaxHeight > u ? Math.floor(u) : this.holderMaxHeight, u = this.holderMinHeight < u ? Math.floor(u) : this.holderMinHeight, u += this.extraHeight, a = Math.floor(c - (c - u) * this.settings.speed), s = Math.round(this.mediaWidth * (a / this.mediaHeight)), s >= d ? r = a : (s = d, r = Math.round(this.mediaHeight * (s / this.mediaWidth))), l = a - u, o = c + u, n = 2 * c * (1 - this.settings.speed) - l, e = -(l / 2 + (r - a) / 2), t = Math.round((s - d) * -.5), i = e - n / 2, this.$scrollingElement.css({
                height: r,
                width: s
            }), this.$imageHolder.height(u), this.$scrollerHolder.css({
                height: u,
                width: s
            }), this.scrollingState = {
                winHeight: c,
                fromY: i,
                imgTopPos: e,
                imgLeftPos: t,
                imgHolderHeight: u,
                imgScrollingDistance: n,
                travelDistance: o,
                holderDistanceFromTop: this.$imageHolder.offset().top - this.settings.windowObject.scrollTop()
            }
        },
        _bindEvents: function() {
            this.settings.windowObject.on("resize", this.refresh), this.settings.parallax === !0 && this.settings.windowObject.on("scroll", this._onScroll)
        },
        _unBindEvents: function() {
            this.settings.windowObject.off("resize", this.refresh), this.settings.parallax === !0 && this.settings.windowObject.off("scroll", this._onScroll)
        },
        _onScroll: function() {
            this.scrollingState.holderDistanceFromTop = this.$imageHolder.offset().top - this.settings.windowObject.scrollTop(), this._requestTick()
        },
        _requestTick: function() {
            var e = this;
            this.ticking || (this.ticking = !0, requestAnimationFrame(function() {
                e._updatePositions()
            }))
        },
        _updatePositions: function() {
            if (this.scrollingState.holderDistanceFromTop <= this.scrollingState.winHeight && this.scrollingState.holderDistanceFromTop >= -this.scrollingState.imgHolderHeight) {
                var e = this.scrollingState.holderDistanceFromTop + this.scrollingState.imgHolderHeight,
                    t = e / this.scrollingState.travelDistance,
                    i = Math.round(this.scrollingState.fromY + this.scrollingState.imgScrollingDistance * (1 - t)),
                    n = this.settings.container.offset().left;
                this.$scrollerHolder.css(this._getCSSObject({
                    transform: a,
                    left: n,
                    x: Math.ceil(this.scrollingState.imgLeftPos) + ("" === k && n > 0 ? n : 0),
                    y: Math.round(this.scrollingState.holderDistanceFromTop),
                    visibility: "visible"
                })), this.$scrollingElement.css(this._getCSSObject({
                    transform: a,
                    x: 0,
                    y: i,
                    visibility: "visible"
                }))
            } else this.$scrollerHolder.css({
                visibility: "hidden"
            }), this.$scrollingElement.css({
                visibility: "hidden"
            });
            this.ticking = !1
        },
        _updateFallbackPositions: function() {
            this.$scrollerHolder.css({
                width: "100%"
            }), this.$scrollingElement.css({
                top: this.scrollingState.imgTopPos,
                left: this.scrollingState.imgLeftPos
            })
        },
        _getCSSObject: function(e) {
            return "csstransforms3d" === k ? e.transform = "translate3d(" + e.x + "px, " + e.y + "px, 0)" : "csstransforms" === k ? e.transform = "translate(" + e.x + "px, " + e.y + "px)" : (e.top = e.y, e.left = e.x), delete e.x, delete e.y, e
        },
        enable: function() {
            this.settings.touch === !1 && (this._bindEvents(), this.refresh())
        },
        disable: function() {
            this.settings.touch === !1 && this._unBindEvents()
        },
        refresh: function() {
            this.settings.touch === !1 && (this._adjustImgHolderHeights(), this.settings.parallax === !0 ? this._requestTick() : this._updateFallbackPositions())
        },
        destroy: function() {
            this.settings.touch === !1 && this._unBindEvents(), this.settings.touch === !0 ? (this.$imageHolder.removeAttr("style"), this.$scrollingElement.remove()) : this.settings.parallax === !0 ? (this.$scrollerHolder.find("." + this.settings.imgClass).remove(), this.$imageHolder.css({
                visibility: "visible",
                height: "auto"
            }).html(this.$scrollerHolder.html()), this.$scrollerHolder.remove()) : (this.$imageHolder.css({
                overflow: "auto"
            }).removeAttr("style"), this.$scrollingElement.remove()), this.$imageHolder.removeData()
        }
    }), e.fn[c] = function(t) {
        return void 0 === t || "object" == typeof t ? this.each(function() {
            e.data(this, d) || e.data(this, d, new r(this, t))
        }) : "string" == typeof t && "_" !== t[0] && "init" !== t ? this.each(function() {
            var i = e.data(this, d);
            i instanceof r && "function" == typeof i[t] && i[t].apply(i, Array.prototype.slice.call(arguments, 1))
        }) : void 0
    }, e.fn[c].defaults = r.defaults = l, e.fn[c].Plugin = r, r
}), ! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e.Vimeo = e.Vimeo || {}, e.Vimeo.Player = t())
}(this, function() {
    "use strict";

    function e(e, t) {
        return t = {
            exports: {}
        }, e(t, t.exports), t.exports
    }

    function t(e, t, i) {
        var n = k.get(e.element) || {};
        t in n || (n[t] = []), n[t].push(i), k.set(e.element, n)
    }

    function i(e, t) {
        var i = k.get(e.element) || {};
        return i[t] || []
    }

    function n(e, t, i) {
        var n = k.get(e.element) || {};
        if (!n[t]) return !0;
        if (!i) return n[t] = [], k.set(e.element, n), !0;
        var o = n[t].indexOf(i);
        return o !== -1 && n[t].splice(o, 1), k.set(e.element, n), n[t] && 0 === n[t].length
    }

    function o(e, t) {
        var i = k.get(e);
        k.set(t, i), k["delete"](e)
    }

    function s(e, t) {
        return 0 === e.indexOf(t.toLowerCase()) ? e : "" + t.toLowerCase() + e.substr(0, 1).toUpperCase() + e.substr(1)
    }

    function r(e) {
        return e instanceof window.HTMLElement
    }

    function a(e) {
        return !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e
    }

    function l(e) {
        return /^(https?:)?\/\/(player.)?vimeo.com(?=$|\/)/.test(e)
    }

    function c() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
            t = e.id,
            i = e.url,
            n = t || i;
        if (!n) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
        if (a(n)) return "https://vimeo.com/" + n;
        if (l(n)) return n.replace("http:", "https:");
        if (t) throw new TypeError("��" + t + "�� is not a valid video id.");
        throw new TypeError("��" + n + "�� is not a vimeo.com url.")
    }

    function d(e) {
        for (var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], i = T, n = Array.isArray(i), o = 0, i = n ? i : i[Symbol.iterator]();;) {
            var s;
            if (n) {
                if (o >= i.length) break;
                s = i[o++]
            } else {
                if (o = i.next(), o.done) break;
                s = o.value
            }
            var r = s,
                a = e.getAttribute("data-vimeo-" + r);
            (a || "" === a) && (t[r] = "" === a ? 1 : a)
        }
        return t
    }

    function u(e) {
        var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
        return new Promise(function(i, n) {
            if (!l(e)) throw new TypeError("��" + e + "�� is not a vimeo.com url.");
            var o = "https://vimeo.com/api/oembed.json?url=" + encodeURIComponent(e);
            for (var s in t) t.hasOwnProperty(s) && (o += "&" + s + "=" + encodeURIComponent(t[s]));
            var r = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
            r.open("GET", o, !0), r.onload = function() {
                if (404 === r.status) return void n(new Error("��" + t + "�� was not found."));
                if (403 === r.status) return void n(new Error("��" + t + "�� is not embeddable."));
                try {
                    var e = JSON.parse(r.responseText);
                    i(e)
                } catch (t) {
                    n(t)
                }
            }, r.onerror = function() {
                var e = r.status ? " (" + r.status + ")" : "";
                n(new Error("There was an error fetching the embed code from Vimeo" + e + "."))
            }, r.send()
        })
    }

    function p(e, t) {
        var i = e.html;
        if (!t) throw new TypeError("An element must be provided");
        if (null !== t.getAttribute("data-vimeo-initialized")) return t.querySelector("iframe");
        var n = document.createElement("div");
        return n.innerHTML = i, t.appendChild(n.firstChild), t.setAttribute("data-vimeo-initialized", "true"), t.querySelector("iframe")
    }

    function f() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? document : arguments[0],
            t = [].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
            i = function(e) {
                "console" in window && console.error && console.error("There was an error creating an embed: " + e)
            },
            n = function() {
                if (s) {
                    if (r >= o.length) return "break";
                    a = o[r++]
                } else {
                    if (r = o.next(), r.done) return "break";
                    a = r.value
                }
                var e = a;
                try {
                    if (null !== e.getAttribute("data-vimeo-defer")) return "continue";
                    var t = d(e),
                        n = c(t);
                    u(n, t).then(function(t) {
                        return p(t, e)
                    })["catch"](i)
                } catch (e) {
                    i(e)
                }
            };
        e: for (var o = t, s = Array.isArray(o), r = 0, o = s ? o : o[Symbol.iterator]();;) {
            var a, l = n();
            switch (l) {
                case "break":
                    break e;
                case "continue":
                    continue
            }
        }
    }

    function h(e) {
        return "string" == typeof e && (e = JSON.parse(e)), e
    }

    function m(e, t, i) {
        if (e.element.contentWindow.postMessage) {
            var n = {
                method: t
            };
            void 0 !== i && (n.value = i);
            var o = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
            o >= 8 && o < 10 && (n = JSON.stringify(n)), e.element.contentWindow.postMessage(n, e.origin)
        }
    }

    function g(e, t) {
        t = h(t);
        var o = [],
            s = void 0;
        if (t.event) {
            if ("error" === t.event)
                for (var r = i(e, t.data.method), a = r, l = Array.isArray(a), c = 0, a = l ? a : a[Symbol.iterator]();;) {
                    var d;
                    if (l) {
                        if (c >= a.length) break;
                        d = a[c++]
                    } else {
                        if (c = a.next(), c.done) break;
                        d = c.value
                    }
                    var u = d,
                        p = new Error(t.data.message);
                    p.name = t.data.name, u.reject(p), n(e, t.data.method, u)
                }
            o = i(e, "event:" + t.event), s = t.data
        } else t.method && (o = i(e, t.method), s = t.value, n(e, t.method));
        for (var f = o, m = Array.isArray(f), g = 0, f = m ? f : f[Symbol.iterator]();;) {
            var v;
            if (m) {
                if (g >= f.length) break;
                v = f[g++]
            } else {
                if (g = f.next(), g.done) break;
                v = g.value
            }
            var y = v;
            try {
                if ("function" == typeof y) {
                    y.call(e, s);
                    continue
                }
                y.resolve(s)
            } catch (e) {}
        }
    }
    var v = "undefined" != typeof Array.prototype.indexOf,
        y = "undefined" != typeof window.postMessage;
    if (!v || !y) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
    var w = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        b = (e(function(e, t) {
            ! function(e) {
                function t(e, t) {
                    function n(e) {
                        return this && this.constructor === n ? (this._keys = [], this._values = [], this._itp = [], this.objectOnly = t, void(e && i.call(this, e))) : new n(e)
                    }
                    return t || w(e, "size", {
                        get: g
                    }), e.constructor = n, n.prototype = e, n
                }

                function i(e) {
                    this.add ? e.forEach(this.add, this) : e.forEach(function(e) {
                        this.set(e[0], e[1])
                    }, this)
                }

                function n(e) {
                    return this.has(e) && (this._keys.splice(y, 1), this._values.splice(y, 1), this._itp.forEach(function(e) {
                        y < e[0] && e[0]--
                    })), -1 < y
                }

                function o(e) {
                    return this.has(e) ? this._values[y] : void 0
                }

                function s(e, t) {
                    if (this.objectOnly && t !== Object(t)) throw new TypeError("Invalid value used as weak collection key");
                    if (t != t || 0 === t)
                        for (y = e.length; y-- && !b(e[y], t););
                    else y = e.indexOf(t);
                    return -1 < y
                }

                function r(e) {
                    return s.call(this, this._values, e)
                }

                function a(e) {
                    return s.call(this, this._keys, e)
                }

                function l(e, t) {
                    return this.has(e) ? this._values[y] = t : this._values[this._keys.push(e) - 1] = t, this
                }

                function c(e) {
                    return this.has(e) || this._values.push(e), this
                }

                function d() {
                    (this._keys || 0).length = this._values.length = 0
                }

                function u() {
                    return m(this._itp, this._keys)
                }

                function p() {
                    return m(this._itp, this._values)
                }

                function f() {
                    return m(this._itp, this._keys, this._values)
                }

                function h() {
                    return m(this._itp, this._values, this._values)
                }

                function m(e, t, i) {
                    var n = [0],
                        o = !1;
                    return e.push(n), {
                        next: function() {
                            var s, r = n[0];
                            return !o && r < t.length ? (s = i ? [t[r], i[r]] : t[r], n[0]++) : (o = !0, e.splice(e.indexOf(n), 1)), {
                                done: o,
                                value: s
                            }
                        }
                    }
                }

                function g() {
                    return this._values.length
                }

                function v(e, t) {
                    for (var i = this.entries();;) {
                        var n = i.next();
                        if (n.done) break;
                        e.call(t, n.value[1], n.value[0], this)
                    }
                }
                var y, w = Object.defineProperty,
                    b = function(e, t) {
                        return e === t || e !== e && t !== t
                    };
                "undefined" == typeof WeakMap && (e.WeakMap = t({
                    "delete": n,
                    clear: d,
                    get: o,
                    has: a,
                    set: l
                }, !0)), "undefined" != typeof Map && "function" == typeof(new Map).values && (new Map).values().next || (e.Map = t({
                    "delete": n,
                    has: a,
                    get: o,
                    set: l,
                    keys: u,
                    values: p,
                    entries: f,
                    forEach: v,
                    clear: d
                })), "undefined" != typeof Set && "function" == typeof(new Set).values && (new Set).values().next || (e.Set = t({
                    has: r,
                    add: c,
                    "delete": n,
                    clear: d,
                    keys: p,
                    values: p,
                    entries: h,
                    forEach: v
                })), "undefined" == typeof WeakSet && (e.WeakSet = t({
                    "delete": n,
                    add: c,
                    clear: d,
                    has: r
                }, !0))
            }("undefined" != typeof t && "undefined" != typeof w ? w : window)
        }), e(function(e) {
            ! function(t, i, n) {
                i[t] = i[t] || n(), "undefined" != typeof e && e.exports ? e.exports = i[t] : "function" == typeof define && define.amd && define(function() {
                    return i[t]
                })
            }("Promise", "undefined" != typeof w ? w : w, function() {
                function e(e, t) {
                    p.add(e, t), u || (u = h(p.drain))
                }

                function t(e) {
                    var t, i = typeof e;
                    return null == e || "object" != i && "function" != i || (t = e.then), "function" == typeof t && t
                }

                function i() {
                    for (var e = 0; e < this.chain.length; e++) n(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
                    this.chain.length = 0
                }

                function n(e, i, n) {
                    var o, s;
                    try {
                        i === !1 ? n.reject(e.msg) : (o = i === !0 ? e.msg : i.call(void 0, e.msg), o === n.promise ? n.reject(TypeError("Promise-chain cycle")) : (s = t(o)) ? s.call(o, n.resolve, n.reject) : n.resolve(o))
                    } catch (e) {
                        n.reject(e)
                    }
                }

                function o(e) {
                    var n, r = this;
                    if (!r.triggered) {
                        r.triggered = !0, r.def && (r = r.def);
                        try {
                            (n = t(e)) ? l(function() {
                                var t = new a(r);
                                try {
                                    n.call(e, function() {
                                        o.apply(t, arguments)
                                    }, function() {
                                        s.apply(t, arguments)
                                    })
                                } catch (i) {
                                    s.call(t, i)
                                }
                            }): (r.msg = e, r.state = 1, r.chain.length > 0 && l(i, r))
                        } catch (l) {
                            s.call(new a(r), l)
                        }
                    }
                }

                function s(t) {
                    var n = this;
                    n.triggered || (n.triggered = !0, n.def && (n = n.def), n.msg = t, n.state = 2, n.chain.length > 0 && e(i, n))
                }

                function r(e, t, i, n) {
                    for (var o = 0; o < t.length; o++) ! function(o) {
                        e.resolve(t[o]).then(function(e) {
                            i(o, e)
                        }, n)
                    }(o)
                }

                function a(e) {
                    this.def = e, this.triggered = !1
                }

                function l(e) {
                    this.promise = e, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
                }

                function c(e) {
                    if ("function" != typeof e) throw TypeError("Not a function");
                    if (0 !== this.__NPO__) throw TypeError("Not a promise");
                    this.__NPO__ = 1;
                    var t = new l(this);
                    this.then = function(e, o) {
                        var s = {
                            success: "function" != typeof e || e,
                            failure: "function" == typeof o && o
                        };
                        return s.promise = new this.constructor(function(e, t) {
                            if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
                            s.resolve = e, s.reject = t
                        }), t.chain.push(s), 0 !== t.state && n(i, t), s.promise
                    }, this["catch"] = function(e) {
                        return this.then(void 0, e)
                    };
                    try {
                        e.call(void 0, function(e) {
                            o.call(t, e)
                        }, function(e) {
                            s.call(t, e)
                        })
                    } catch (n) {
                        s.call(t, n)
                    }
                }
                var d, u, p, f = Object.prototype.toString,
                    h = "undefined" != typeof setImmediate ? function(e) {
                        return setImmediate(e)
                    } : setTimeout;
                try {
                    Object.defineProperty({}, "x", {}), d = function(e, t, i, n) {
                        return Object.defineProperty(e, t, {
                            value: i,
                            writable: !0,
                            configurable: n !== !1
                        })
                    }
                } catch (e) {
                    d = function(e, t, i) {
                        return e[t] = i, e
                    }
                }
                p = function() {
                    function e(e, t) {
                        this.fn = e, this.self = t, this.next = void 0
                    }
                    var t, i, n;
                    return {
                        add: function(o, s) {
                            n = new e(o, s), i ? i.next = n : t = n, i = n, n = void 0
                        },
                        drain: function() {
                            var e = t;
                            for (t = i = u = void 0; e;) e.fn.call(e.self), e = e.next
                        }
                    }
                }();
                var m = d({}, "constructor", c, !1);
                return c.prototype = m, d(m, "__NPO__", 0, !1), d(c, "resolve", function(e) {
                    var t = this;
                    return e && "object" == typeof e && 1 === e.__NPO__ ? e : new t(function(t, i) {
                        if ("function" != typeof t || "function" != typeof i) throw TypeError("Not a function");
                        t(e)
                    })
                }), d(c, "reject", function(e) {
                    return new this(function(t, i) {
                        if ("function" != typeof t || "function" != typeof i) throw TypeError("Not a function");
                        i(e)
                    })
                }), d(c, "all", function(e) {
                    var t = this;
                    return "[object Array]" != f.call(e) ? t.reject(TypeError("Not an array")) : 0 === e.length ? t.resolve([]) : new t(function(i, n) {
                        if ("function" != typeof i || "function" != typeof n) throw TypeError("Not a function");
                        var o = e.length,
                            s = Array(o),
                            a = 0;
                        r(t, e, function(e, t) {
                            s[e] = t, ++a === o && i(s)
                        }, n)
                    })
                }), d(c, "race", function(e) {
                    var t = this;
                    return "[object Array]" != f.call(e) ? t.reject(TypeError("Not an array")) : new t(function(i, n) {
                        if ("function" != typeof i || "function" != typeof n) throw TypeError("Not a function");
                        r(t, e, function(e, t) {
                            i(t)
                        }, n)
                    })
                }), c
            })
        })),
        x = b && "object" == typeof b && "default" in b ? b["default"] : b,
        k = new WeakMap,
        T = ["id", "url", "width", "maxwidth", "height", "maxheight", "portrait", "title", "byline", "color", "autoplay", "autopause", "loop", "responsive"],
        C = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        S = new WeakMap,
        _ = new WeakMap,
        E = function() {
            function e(t) {
                var i = this,
                    n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                if (C(this, e), window.jQuery && t instanceof jQuery && (t.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), t = t[0]), "string" == typeof t && (t = document.getElementById(t)), !r(t)) throw new TypeError("You must pass either a valid element or a valid id.");
                if ("IFRAME" !== t.nodeName) {
                    var s = t.querySelector("iframe");
                    s && (t = s)
                }
                if ("IFRAME" === t.nodeName && !l(t.getAttribute("src") || "")) throw new Error("The player element passed isn�셳 a Vimeo embed.");
                if (S.has(t)) return S.get(t);
                this.element = t, this.origin = "*";
                var a = new x(function(e, s) {
                    var r = function(t) {
                        if (l(t.origin) && i.element.contentWindow === t.source) {
                            "*" === i.origin && (i.origin = t.origin);
                            var n = h(t.data),
                                o = "event" in n && "ready" === n.event,
                                s = "method" in n && "ping" === n.method;
                            return o || s ? (i.element.setAttribute("data-ready", "true"), void e()) : void g(i, n)
                        }
                    };
                    if (window.addEventListener ? window.addEventListener("message", r, !1) : window.attachEvent && window.attachEvent("onmessage", r), "IFRAME" !== i.element.nodeName) {
                        var a = d(t, n),
                            f = c(a);
                        u(f, a).then(function(e) {
                            var n = p(e, t);
                            return i.element = n, o(t, n), e
                        })["catch"](function(e) {
                            return s(e)
                        })
                    }
                });
                return _.set(this, a), S.set(this.element, this), "IFRAME" === this.element.nodeName && m(this, "ping"), this
            }
            return e.prototype.then = function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? function() {} : arguments[1];
                return this.ready().then(e, t)
            }, e.prototype.callMethod = function(e) {
                var i = this,
                    n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                return new x(function(o, s) {
                    return i.ready().then(function() {
                        t(i, e, {
                            resolve: o,
                            reject: s
                        }), m(i, e, n)
                    })
                })
            }, e.prototype.get = function(e) {
                var i = this;
                return new x(function(n, o) {
                    return e = s(e, "get"), i.ready().then(function() {
                        t(i, e, {
                            resolve: n,
                            reject: o
                        }), m(i, e)
                    })
                })
            }, e.prototype.set = function(e, i) {
                var n = this;
                return x.resolve(i).then(function(i) {
                    if (e = s(e, "set"), void 0 === i || null === i) throw new TypeError("There must be a value to set.");
                    return n.ready().then(function() {
                        return new x(function(o, s) {
                            t(n, e, {
                                resolve: o,
                                reject: s
                            }), m(n, e, i)
                        })
                    })
                })
            }, e.prototype.on = function(e, n) {
                if (!e) throw new TypeError("You must pass an event name.");
                if (!n) throw new TypeError("You must pass a callback function.");
                if ("function" != typeof n) throw new TypeError("The callback must be a function.");
                var o = i(this, "event:" + e);
                0 === o.length && this.callMethod("addEventListener", e)["catch"](function() {}), t(this, "event:" + e, n)
            }, e.prototype.off = function(e, t) {
                if (!e) throw new TypeError("You must pass an event name.");
                if (t && "function" != typeof t) throw new TypeError("The callback must be a function.");
                var i = n(this, "event:" + e, t);
                i && this.callMethod("removeEventListener", e)["catch"](function(e) {})
            }, e.prototype.loadVideo = function(e) {
                return this.callMethod("loadVideo", e)
            }, e.prototype.ready = function() {
                var e = _.get(this);
                return x.resolve(e)
            }, e.prototype.enableTextTrack = function(e, t) {
                if (!e) throw new TypeError("You must pass a language.");
                return this.callMethod("enableTextTrack", {
                    language: e,
                    kind: t
                })
            }, e.prototype.disableTextTrack = function() {
                return this.callMethod("disableTextTrack")
            }, e.prototype.pause = function() {
                return this.callMethod("pause")
            }, e.prototype.play = function() {
                return this.callMethod("play")
            }, e.prototype.unload = function() {
                return this.callMethod("unload")
            }, e.prototype.getAutopause = function() {
                return this.get("autopause")
            }, e.prototype.setAutopause = function(e) {
                return this.set("autopause", e)
            }, e.prototype.getColor = function() {
                return this.get("color")
            }, e.prototype.setColor = function(e) {
                return this.set("color", e)
            }, e.prototype.getCurrentTime = function() {
                return this.get("currentTime")
            }, e.prototype.setCurrentTime = function(e) {
                return this.set("currentTime", e)
            }, e.prototype.getDuration = function() {
                return this.get("duration")
            }, e.prototype.getEnded = function() {
                return this.get("ended")
            }, e.prototype.getLoop = function() {
                return this.get("loop")
            }, e.prototype.setLoop = function(e) {
                return this.set("loop", e)
            }, e.prototype.getPaused = function() {
                return this.get("paused")
            }, e.prototype.getTextTracks = function() {
                return this.get("textTracks")
            }, e.prototype.getVideoEmbedCode = function() {
                return this.get("videoEmbedCode")
            }, e.prototype.getVideoId = function() {
                return this.get("videoId")
            }, e.prototype.getVideoTitle = function() {
                return this.get("videoTitle")
            }, e.prototype.getVideoWidth = function() {
                return this.get("videoWidth")
            }, e.prototype.getVideoHeight = function() {
                return this.get("videoHeight")
            }, e.prototype.getVideoUrl = function() {
                return this.get("videoUrl")
            }, e.prototype.getVolume = function() {
                return this.get("volume")
            }, e.prototype.setVolume = function(e) {
                return this.set("volume", e)
            }, e
        }();
    return f(), E
}), ! function(e) {
    "use strict";

    function t(e) {
        if (void 0 === Function.prototype.name) {
            var t = /function\s([^(]{1,})\(/,
                i = t.exec(e.toString());
            return i && i.length > 1 ? i[1].trim() : ""
        }
        return void 0 === e.prototype ? e.constructor.name : e.prototype.constructor.name
    }

    function i(e) {
        return !!/true/.test(e) || !/false/.test(e) && (isNaN(1 * e) ? e : parseFloat(e))
    }

    function n(e) {
        return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }
    var o = "6.2.2",
        s = {
            version: o,
            _plugins: {},
            _uuids: [],
            rtl: function() {
                return "rtl" === e("html").attr("dir")
            },
            plugin: function(e, i) {
                var o = i || t(e),
                    s = n(o);
                this._plugins[s] = this[o] = e
            },
            registerPlugin: function(e, i) {
                var o = i ? n(i) : t(e.constructor).toLowerCase();
                e.uuid = this.GetYoDigits(6, o), e.$element.attr("data-" + o) || e.$element.attr("data-" + o, e.uuid), e.$element.data("zfPlugin") || e.$element.data("zfPlugin", e), e.$element.trigger("init.zf." + o), this._uuids.push(e.uuid)
            },
            unregisterPlugin: function(e) {
                var i = n(t(e.$element.data("zfPlugin").constructor));
                this._uuids.splice(this._uuids.indexOf(e.uuid), 1), e.$element.removeAttr("data-" + i).removeData("zfPlugin").trigger("destroyed.zf." + i);
                for (var o in e) e[o] = null
            },
            reInit: function(t) {
                var i = t instanceof e;
                try {
                    if (i) t.each(function() {
                        e(this).data("zfPlugin")._init()
                    });
                    else {
                        var o = typeof t,
                            s = this,
                            r = {
                                object: function(t) {
                                    t.forEach(function(t) {
                                        t = n(t), e("[data-" + t + "]").foundation("_init")
                                    })
                                },
                                string: function() {
                                    t = n(t), e("[data-" + t + "]").foundation("_init")
                                },
                                undefined: function() {
                                    this.object(Object.keys(s._plugins))
                                }
                            };
                        r[o](t)
                    }
                } catch (a) {
                    console.error(a)
                } finally {
                    return t
                }
            },
            GetYoDigits: function(e, t) {
                return e = e || 6, Math.round(Math.pow(36, e + 1) - Math.random() * Math.pow(36, e)).toString(36).slice(1) + (t ? "-" + t : "")
            },
            reflow: function(t, n) {
                "undefined" == typeof n ? n = Object.keys(this._plugins) : "string" == typeof n && (n = [n]);
                var o = this;
                e.each(n, function(n, s) {
                    var r = o._plugins[s],
                        a = e(t).find("[data-" + s + "]").addBack("[data-" + s + "]");
                    a.each(function() {
                        var t = e(this),
                            n = {};
                        if (t.data("zfPlugin")) return void console.warn("Tried to initialize " + s + " on an element that already has a Foundation plugin.");
                        if (t.attr("data-options")) {
                            t.attr("data-options").split(";").forEach(function(e, t) {
                                var o = e.split(":").map(function(e) {
                                    return e.trim()
                                });
                                o[0] && (n[o[0]] = i(o[1]))
                            })
                        }
                        try {
                            t.data("zfPlugin", new r(e(this), n))
                        } catch (o) {
                            console.error(o)
                        } finally {
                            return
                        }
                    })
                })
            },
            getFnName: t,
            transitionend: function(e) {
                var t, i = {
                        transition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "otransitionend"
                    },
                    n = document.createElement("div");
                for (var o in i) "undefined" != typeof n.style[o] && (t = i[o]);
                return t ? t : (t = setTimeout(function() {
                    e.triggerHandler("transitionend", [e])
                }, 1), "transitionend")
            }
        };
    s.util = {
        throttle: function(e, t) {
            var i = null;
            return function() {
                var n = this,
                    o = arguments;
                null === i && (i = setTimeout(function() {
                    e.apply(n, o), i = null
                }, t))
            }
        }
    };
    var r = function(i) {
        var n = typeof i,
            o = e("meta.foundation-mq"),
            r = e(".no-js");
        if (o.length || e('<meta class="foundation-mq">').appendTo(document.head), r.length && r.removeClass("no-js"), "undefined" === n) s.MediaQuery._init(), s.reflow(this);
        else {
            if ("string" !== n) throw new TypeError("We're sorry, " + n + " is not a valid parameter. You must use a string representing the method you wish to invoke.");
            var a = Array.prototype.slice.call(arguments, 1),
                l = this.data("zfPlugin");
            if (void 0 === l || void 0 === l[i]) throw new ReferenceError("We're sorry, '" + i + "' is not an available method for " + (l ? t(l) : "this element") + ".");
            1 === this.length ? l[i].apply(l, a) : this.each(function(t, n) {
                l[i].apply(e(n).data("zfPlugin"), a)
            })
        }
        return this
    };
    window.Foundation = s, e.fn.foundation = r,
        function() {
            Date.now && window.Date.now || (window.Date.now = Date.now = function() {
                return (new Date).getTime()
            });
            for (var e = ["webkit", "moz"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) {
                var i = e[t];
                window.requestAnimationFrame = window[i + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]
            }
            if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
                var n = 0;
                window.requestAnimationFrame = function(e) {
                    var t = Date.now(),
                        i = Math.max(n + 16, t);
                    return setTimeout(function() {
                        e(n = i)
                    }, i - t)
                }, window.cancelAnimationFrame = clearTimeout
            }
            window.performance && window.performance.now || (window.performance = {
                start: Date.now(),
                now: function() {
                    return Date.now() - this.start
                }
            })
        }(), Function.prototype.bind || (Function.prototype.bind = function(e) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var t = Array.prototype.slice.call(arguments, 1),
                i = this,
                n = function() {},
                o = function() {
                    return i.apply(this instanceof n ? this : e, t.concat(Array.prototype.slice.call(arguments)))
                };
            return this.prototype && (n.prototype = this.prototype), o.prototype = new n, o
        })
}(jQuery), ! function(e) {
    function t(e) {
        var t = {};
        return "string" != typeof e ? t : (e = e.trim().slice(1, -1)) ? t = e.split("&").reduce(function(e, t) {
            var i = t.replace(/\+/g, " ").split("="),
                n = i[0],
                o = i[1];
            return n = decodeURIComponent(n), o = void 0 === o ? null : decodeURIComponent(o), e.hasOwnProperty(n) ? Array.isArray(e[n]) ? e[n].push(o) : e[n] = [e[n], o] : e[n] = o, e
        }, {}) : t
    }
    var i = {
        queries: [],
        current: "",
        _init: function() {
            var i, n = this,
                o = e(".foundation-mq").css("font-family");
            i = t(o);
            for (var s in i) i.hasOwnProperty(s) && n.queries.push({
                name: s,
                value: "only screen and (min-width: " + i[s] + ")"
            });
            this.current = this._getCurrentSize(), this._watcher()
        },
        atLeast: function(e) {
            var t = this.get(e);
            return !!t && window.matchMedia(t).matches
        },
        get: function(e) {
            for (var t in this.queries)
                if (this.queries.hasOwnProperty(t)) {
                    var i = this.queries[t];
                    if (e === i.name) return i.value
                }
            return null
        },
        _getCurrentSize: function() {
            for (var e, t = 0; t < this.queries.length; t++) {
                var i = this.queries[t];
                window.matchMedia(i.value).matches && (e = i)
            }
            return "object" == typeof e ? e.name : e
        },
        _watcher: function() {
            var t = this;
            e(window).on("resize.zf.mediaquery", function() {
                var i = t._getCurrentSize(),
                    n = t.current;
                i !== n && (t.current = i, e(window).trigger("changed.zf.mediaquery", [i, n]))
            })
        }
    };
    Foundation.MediaQuery = i, window.matchMedia || (window.matchMedia = function() {
        "use strict";
        var e = window.styleMedia || window.media;
        if (!e) {
            var t = document.createElement("style"),
                i = document.getElementsByTagName("script")[0],
                n = null;
            t.type = "text/css", t.id = "matchmediajs-test", i.parentNode.insertBefore(t, i), n = "getComputedStyle" in window && window.getComputedStyle(t, null) || t.currentStyle, e = {
                matchMedium: function(e) {
                    var i = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
                    return t.styleSheet ? t.styleSheet.cssText = i : t.textContent = i, "1px" === n.width
                }
            }
        }
        return function(t) {
            return {
                matches: e.matchMedium(t || "all"),
                media: t || "all"
            }
        }
    }()), Foundation.MediaQuery = i
}(jQuery), ! function(e) {
    function t(e, t, i) {
        var n, o, s = this,
            r = t.duration,
            a = Object.keys(e.data())[0] || "timer",
            l = -1;
        this.isPaused = !1, this.restart = function() {
            l = -1, clearTimeout(o), this.start()
        }, this.start = function() {
            this.isPaused = !1, clearTimeout(o), l = l <= 0 ? r : l, e.data("paused", !1), n = Date.now(), o = setTimeout(function() {
                t.infinite && s.restart(), i()
            }, l), e.trigger("timerstart.zf." + a)
        }, this.pause = function() {
            this.isPaused = !0, clearTimeout(o), e.data("paused", !0);
            var t = Date.now();
            l -= t - n, e.trigger("timerpaused.zf." + a)
        }
    }

    function i(t, i) {
        function n() {
            o--, 0 === o && i()
        }
        var o = t.length;
        0 === o && i(), t.each(function() {
            this.complete ? n() : "undefined" != typeof this.naturalWidth && this.naturalWidth > 0 ? n() : e(this).one("load", function() {
                n()
            })
        })
    }
    Foundation.Timer = t, Foundation.onImagesLoaded = i
}(jQuery);
var _createClass = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
    }
}();
! function(e) {
    var t = function() {
        function t(i, n) {
            _classCallCheck(this, t), this.$element = i, this.options = e.extend({}, t.defaults, n), this.rules = [], this.currentPath = "", this._init(), this._events(), Foundation.registerPlugin(this, "Interchange")
        }
        return _createClass(t, [{
            key: "_init",
            value: function() {
                this._addBreakpoints(), this._generateRules(), this._reflow()
            }
        }, {
            key: "_events",
            value: function() {
                e(window).on("resize.zf.interchange", Foundation.util.throttle(this._reflow.bind(this), 50))
            }
        }, {
            key: "_reflow",
            value: function() {
                var e;
                for (var t in this.rules)
                    if (this.rules.hasOwnProperty(t)) {
                        var i = this.rules[t];
                        window.matchMedia(i.query).matches && (e = i)
                    }
                e && this.replace(e.path)
            }
        }, {
            key: "_addBreakpoints",
            value: function() {
                for (var e in Foundation.MediaQuery.queries)
                    if (Foundation.MediaQuery.queries.hasOwnProperty(e)) {
                        var i = Foundation.MediaQuery.queries[e];
                        t.SPECIAL_QUERIES[i.name] = i.value
                    }
            }
        }, {
            key: "_generateRules",
            value: function(e) {
                var i, n = [];
                i = this.options.rules ? this.options.rules : this.$element.data("interchange").match(/\[.*?\]/g);
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        var s = i[o].slice(1, -1).split(", "),
                            r = s.slice(0, -1).join(""),
                            a = s[s.length - 1];
                        t.SPECIAL_QUERIES[a] && (a = t.SPECIAL_QUERIES[a]), n.push({
                            path: r,
                            query: a
                        })
                    }
                this.rules = n
            }
        }, {
            key: "replace",
            value: function(t) {
                if (this.currentPath !== t) {
                    var i = this,
                        n = "replaced.zf.interchange";
                    "IMG" === this.$element[0].nodeName ? this.$element.attr("src", t).load(function() {
                        i.currentPath = t
                    }).trigger(n) : t.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i) ? this.$element.css({
                        "background-image": "url(" + t + ")"
                    }).trigger(n) : e.get(t, function(o) {
                        i.$element.html(o).trigger(n), e(o).foundation(), i.currentPath = t
                    })
                }
            }
        }, {
            key: "destroy",
            value: function() {}
        }]), t
    }();
    t.defaults = {
        rules: null
    }, t.SPECIAL_QUERIES = {
        landscape: "screen and (orientation: landscape)",
        portrait: "screen and (orientation: portrait)",
        retina: "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"
    }, Foundation.plugin(t, "Interchange")
}(jQuery), ! function(e, t) {
    var i = t(e, e.document);
    e.lazySizes = i, "object" == typeof module && module.exports && (module.exports = i)
}(window, function(e, t) {
    "use strict";
    if (t.getElementsByClassName) {
        var i, n = t.documentElement,
            o = e.Date,
            s = e.HTMLPictureElement,
            r = "addEventListener",
            a = "getAttribute",
            l = e[r],
            c = e.setTimeout,
            d = e.requestAnimationFrame || c,
            u = e.requestIdleCallback,
            p = /^picture$/i,
            f = ["load", "error", "lazyincluded", "_lazyloaded"],
            h = {},
            m = Array.prototype.forEach,
            g = function(e, t) {
                return h[t] || (h[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), h[t].test(e[a]("class") || "") && h[t]
            },
            v = function(e, t) {
                g(e, t) || e.setAttribute("class", (e[a]("class") || "").trim() + " " + t)
            },
            y = function(e, t) {
                var i;
                (i = g(e, t)) && e.setAttribute("class", (e[a]("class") || "").replace(i, " "))
            },
            w = function(e, t, i) {
                var n = i ? r : "removeEventListener";
                i && w(e, t), f.forEach(function(i) {
                    e[n](i, t)
                })
            },
            b = function(e, i, n, o, s) {
                var r = t.createEvent("CustomEvent");
                return r.initCustomEvent(i, !o, !s, n || {}), e.dispatchEvent(r), r
            },
            x = function(t, n) {
                var o;
                !s && (o = e.picturefill || i.pf) ? o({
                    reevaluate: !0,
                    elements: [t]
                }) : n && n.src && (t.src = n.src)
            },
            k = function(e, t) {
                return (getComputedStyle(e, null) || {})[t]
            },
            T = function(e, t, n) {
                for (n = n || e.offsetWidth; n < i.minSize && t && !e._lazysizesWidth;) n = t.offsetWidth, t = t.parentNode;
                return n
            },
            C = function() {
                var e, i, n = [],
                    o = function() {
                        var t;
                        for (e = !0, i = !1; n.length;) t = n.shift(), t[0].apply(t[1], t[2]);
                        e = !1
                    };
                return function(s) {
                    e ? s.apply(this, arguments) : (n.push([s, this, arguments]), i || (i = !0, (t.hidden ? c : d)(o)))
                }
            }(),
            S = function(e, t) {
                return t ? function() {
                    C(e)
                } : function() {
                    var t = this,
                        i = arguments;
                    C(function() {
                        e.apply(t, i)
                    })
                }
            },
            _ = function(e) {
                var t, i = 0,
                    n = 125,
                    s = 999,
                    r = s,
                    a = function() {
                        t = !1, i = o.now(), e()
                    },
                    l = u ? function() {
                        u(a, {
                            timeout: r
                        }), r !== s && (r = s)
                    } : S(function() {
                        c(a)
                    }, !0);
                return function(e) {
                    var s;
                    (e = e === !0) && (r = 66), t || (t = !0, s = n - (o.now() - i), 0 > s && (s = 0), e || 9 > s && u ? l() : c(l, s))
                }
            },
            E = function(e) {
                var t, i, n = 99,
                    s = function() {
                        t = null, e()
                    },
                    r = function() {
                        var e = o.now() - i;
                        n > e ? c(r, n - e) : (u || s)(s)
                    };
                return function() {
                    i = o.now(), t || (t = c(r, n))
                }
            },
            I = function() {
                var s, d, u, f, h, T, I, A, M, O, z, H, P, D, L, F = /^img$/i,
                    j = /^iframe$/i,
                    N = "onscroll" in e && !/glebot/.test(navigator.userAgent),
                    R = 0,
                    W = 0,
                    q = 0,
                    B = -1,
                    U = function(e) {
                        q--, e && e.target && w(e.target, U), (!e || 0 > q || !e.target) && (q = 0)
                    },
                    Z = function(e, i) {
                        var o, s = e,
                            r = "hidden" == k(t.body, "visibility") || "hidden" != k(e, "visibility");
                        for (M -= i, H += i, O -= i, z += i; r && (s = s.offsetParent) && s != t.body && s != n;) r = (k(s, "opacity") || 1) > 0, r && "visible" != k(s, "overflow") && (o = s.getBoundingClientRect(), r = z > o.left && O < o.right && H > o.top - 1 && M < o.bottom + 1);
                        return r
                    },
                    Y = function() {
                        var e, o, r, l, c, p, f, m, g;
                        if ((h = i.loadMode) && 8 > q && (e = s.length)) {
                            o = 0, B++, null == D && ("expand" in i || (i.expand = n.clientHeight > 500 ? 500 : 400), P = i.expand, D = P * i.expFactor), D > W && 1 > q && B > 2 && h > 2 && !t.hidden ? (W = D, B = 0) : W = h > 1 && B > 1 && 6 > q ? P : R;
                            for (; e > o; o++)
                                if (s[o] && !s[o]._lazyRace)
                                    if (N)
                                        if ((m = s[o][a]("data-expand")) && (p = 1 * m) || (p = W), g !== p && (I = innerWidth + p * L, A = innerHeight + p, f = -1 * p, g = p), r = s[o].getBoundingClientRect(), (H = r.bottom) >= f && (M = r.top) <= A && (z = r.right) >= f * L && (O = r.left) <= I && (H || z || O || M) && (u && 3 > q && !m && (3 > h || 4 > B) || Z(s[o], p))) {
                                            if (te(s[o]), c = !0, q > 9) break
                                        } else !c && u && !l && 4 > q && 4 > B && h > 2 && (d[0] || i.preloadAfterLoad) && (d[0] || !m && (H || z || O || M || "auto" != s[o][a](i.sizesAttr))) && (l = d[0] || s[o]);
                            else te(s[o]);
                            l && !c && te(l)
                        }
                    },
                    V = _(Y),
                    Q = function(e) {
                        v(e.target, i.loadedClass), y(e.target, i.loadingClass), w(e.target, K)
                    },
                    X = S(Q),
                    K = function(e) {
                        X({
                            target: e.target
                        })
                    },
                    G = function(e, t) {
                        try {
                            e.contentWindow.location.replace(t)
                        } catch (i) {
                            e.src = t
                        }
                    },
                    J = function(e) {
                        var t, n, o = e[a](i.srcsetAttr);
                        (t = i.customMedia[e[a]("data-media") || e[a]("media")]) && e.setAttribute("media", t), o && e.setAttribute("srcset", o), t && (n = e.parentNode, n.insertBefore(e.cloneNode(), e), n.removeChild(e))
                    },
                    ee = S(function(e, t, n, o, s) {
                        var r, l, d, u, h, g;
                        (h = b(e, "lazybeforeunveil", t)).defaultPrevented || (o && (n ? v(e, i.autosizesClass) : e.setAttribute("sizes", o)), l = e[a](i.srcsetAttr), r = e[a](i.srcAttr), s && (d = e.parentNode, u = d && p.test(d.nodeName || "")), g = t.firesLoad || "src" in e && (l || r || u), h = {
                            target: e
                        }, g && (w(e, U, !0), clearTimeout(f), f = c(U, 2500), v(e, i.loadingClass), w(e, K, !0)), u && m.call(d.getElementsByTagName("source"), J), l ? e.setAttribute("srcset", l) : r && !u && (j.test(e.nodeName) ? G(e, r) : e.src = r), (l || u) && x(e, {
                            src: r
                        })), C(function() {
                            e._lazyRace && delete e._lazyRace, y(e, i.lazyClass), (!g || e.complete) && (g ? U(h) : q--, Q(h))
                        })
                    }),
                    te = function(e) {
                        var t, n = F.test(e.nodeName),
                            o = n && (e[a](i.sizesAttr) || e[a]("sizes")),
                            s = "auto" == o;
                        (!s && u || !n || !e.src && !e.srcset || e.complete || g(e, i.errorClass)) && (t = b(e, "lazyunveilread").detail, s && $.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, q++, ee(e, t, s, o, n))
                    },
                    ie = function() {
                        if (!u) {
                            if (o.now() - T < 999) return void c(ie, 999);
                            var e = E(function() {
                                i.loadMode = 3, V()
                            });
                            u = !0, i.loadMode = 3, V(), l("scroll", function() {
                                3 == i.loadMode && (i.loadMode = 2), e()
                            }, !0)
                        }
                    };
                return {
                    _: function() {
                        T = o.now(), s = t.getElementsByClassName(i.lazyClass), d = t.getElementsByClassName(i.lazyClass + " " + i.preloadClass), L = i.hFac, l("scroll", V, !0), l("resize", V, !0), e.MutationObserver ? new MutationObserver(V).observe(n, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (n[r]("DOMNodeInserted", V, !0), n[r]("DOMAttrModified", V, !0), setInterval(V, 999)), l("hashchange", V, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(e) {
                            t[r](e, V, !0)
                        }), /d$|^c/.test(t.readyState) ? ie() : (l("load", ie), t[r]("DOMContentLoaded", V), c(ie, 2e4)), V(s.length > 0)
                    },
                    checkElems: V,
                    unveil: te
                }
            }(),
            $ = function() {
                var e, n = S(function(e, t, i, n) {
                        var o, s, r;
                        if (e._lazysizesWidth = n, n += "px", e.setAttribute("sizes", n), p.test(t.nodeName || ""))
                            for (o = t.getElementsByTagName("source"), s = 0, r = o.length; r > s; s++) o[s].setAttribute("sizes", n);
                        i.detail.dataAttr || x(e, i.detail)
                    }),
                    o = function(e, t, i) {
                        var o, s = e.parentNode;
                        s && (i = T(e, s, i), o = b(e, "lazybeforesizes", {
                            width: i,
                            dataAttr: !!t
                        }), o.defaultPrevented || (i = o.detail.width, i && i !== e._lazysizesWidth && n(e, s, o, i)))
                    },
                    s = function() {
                        var t, i = e.length;
                        if (i)
                            for (t = 0; i > t; t++) o(e[t])
                    },
                    r = E(s);
                return {
                    _: function() {
                        e = t.getElementsByClassName(i.autosizesClass), l("resize", r)
                    },
                    checkElems: r,
                    updateElem: o
                }
            }(),
            A = function() {
                A.i || (A.i = !0, $._(), I._())
            };
        return function() {
            var t, n = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.5,
                hFac: .8,
                loadMode: 2
            };
            i = e.lazySizesConfig || e.lazysizesConfig || {};
            for (t in n) t in i || (i[t] = n[t]);
            e.lazySizesConfig = i, c(function() {
                i.init && A()
            })
        }(), {
            cfg: i,
            autoSizer: $,
            loader: I,
            init: A,
            uP: x,
            aC: v,
            rC: y,
            hC: g,
            fire: b,
            gW: T,
            rAF: C
        }
    }
}),
function(e, t, i) {
    "use strict";
    var n, o = e.lazySizes && lazySizes.cfg || e.lazySizesConfig,
        s = t.createElement("img"),
        r = "sizes" in s && "srcset" in s,
        a = /\s+\d+h/g,
        l = function() {
            var e = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
                i = Array.prototype.forEach;
            return function(n) {
                var o = t.createElement("img"),
                    s = function(t) {
                        var i, n = t.getAttribute(lazySizesConfig.srcsetAttr);
                        n && (n.match(e) && (i = "w" == RegExp.$2 ? RegExp.$1 / RegExp.$3 : RegExp.$3 / RegExp.$1, i && t.setAttribute("data-aspectratio", i)), t.setAttribute(lazySizesConfig.srcsetAttr, n.replace(a, "")))
                    },
                    r = function(e) {
                        var t = e.target.parentNode;
                        t && "PICTURE" == t.nodeName && i.call(t.getElementsByTagName("source"), s), s(e.target)
                    },
                    l = function() {
                        o.currentSrc && t.removeEventListener("lazybeforeunveil", r)
                    };
                n[1] && (t.addEventListener("lazybeforeunveil", r), o.onload = l, o.onerror = l, o.srcset = "data:,a 1w 1h", o.complete && l())
            }
        }();
    if (o || (o = {}, e.lazySizesConfig = o), o.supportsType || (o.supportsType = function(e) {
            return !e
        }), !e.picturefill && !o.pf) {
        if (e.HTMLPictureElement && r) return t.msElementsFromPoint && l(navigator.userAgent.match(/Edge\/(\d+)/)), void(o.pf = function() {});
        o.pf = function(t) {
            var i, o;
            if (!e.picturefill)
                for (i = 0, o = t.elements.length; i < o; i++) n(t.elements[i])
        }, n = function() {
            var i = function(e, t) {
                    return e.w - t.w
                },
                s = /^\s*\d+px\s*$/,
                l = function(e) {
                    var t, i, n = e.length,
                        o = e[n - 1],
                        s = 0;
                    for (s; s < n; s++)
                        if (o = e[s], o.d = o.w / e.w, o.d >= e.d) {
                            !o.cached && (t = e[s - 1]) && t.d > e.d - .13 * Math.pow(e.d, 2.2) && (i = Math.pow(t.d - .6, 1.6), t.cached && (t.d += .15 * i), t.d + (o.d - e.d) * i > e.d && (o = t));
                            break
                        }
                    return o
                },
                c = function() {
                    var e, t = /(([^,\s].[^\s]+)\s+(\d+)w)/g,
                        i = /\s/,
                        n = function(t, i, n, o) {
                            e.push({
                                c: i,
                                u: n,
                                w: 1 * o
                            })
                        };
                    return function(o) {
                        return e = [], o = o.trim(), o.replace(a, "").replace(t, n), e.length || !o || i.test(o) || e.push({
                            c: o,
                            u: o,
                            w: 99
                        }), e
                    }
                }(),
                d = function() {
                    d.init || (d.init = !0, addEventListener("resize", function() {
                        var e, i = t.getElementsByClassName("lazymatchmedia"),
                            o = function() {
                                var e, t;
                                for (e = 0, t = i.length; e < t; e++) n(i[e])
                            };
                        return function() {
                            clearTimeout(e), e = setTimeout(o, 66)
                        }
                    }()))
                },
                u = function(t, i) {
                    var n, s = t.getAttribute("srcset") || t.getAttribute(o.srcsetAttr);
                    !s && i && (s = t._lazypolyfill ? t._lazypolyfill._set : t.getAttribute(o.srcAttr) || t.getAttribute("src")), t._lazypolyfill && t._lazypolyfill._set == s || (n = c(s || ""), i && t.parentNode && (n.isPicture = "PICTURE" == t.parentNode.nodeName.toUpperCase(), n.isPicture && e.matchMedia && (lazySizes.aC(t, "lazymatchmedia"), d())), n._set = s, Object.defineProperty(t, "_lazypolyfill", {
                        value: n,
                        writable: !0
                    }))
                },
                p = function(t) {
                    var i = e.devicePixelRatio || 1,
                        n = lazySizes.getX && lazySizes.getX(t);
                    return Math.min(n || i, 2.5, i)
                },
                f = function(t) {
                    return e.matchMedia ? (f = function(e) {
                        return !e || (matchMedia(e) || {}).matches
                    })(t) : !t
                },
                h = function(e) {
                    var t, n, r, a, c, d, h;
                    if (a = e, u(a, !0), c = a._lazypolyfill, c.isPicture)
                        for (n = 0, t = e.parentNode.getElementsByTagName("source"), r = t.length; n < r; n++)
                            if (o.supportsType(t[n].getAttribute("type"), e) && f(t[n].getAttribute("media"))) {
                                a = t[n], u(a), c = a._lazypolyfill;
                                break
                            }
                    return c.length > 1 ? (h = a.getAttribute("sizes") || "", h = s.test(h) && parseInt(h, 10) || lazySizes.gW(e, e.parentNode), c.d = p(e), !c.src || !c.w || c.w < h ? (c.w = h, d = l(c.sort(i)), c.src = d) : d = c.src) : d = c[0], d
                },
                m = function(e) {
                    if (!r || !e.parentNode || "PICTURE" == e.parentNode.nodeName.toUpperCase()) {
                        var t = h(e);
                        t && t.u && e._lazypolyfill.cur != t.u && (e._lazypolyfill.cur = t.u, t.cached = !0, e.setAttribute(o.srcAttr, t.u), e.setAttribute("src", t.u))
                    }
                };
            return m.parse = c, m
        }(), o.loadedClass && o.loadingClass && ! function() {
            var e = [];
            ['img[sizes$="px"][srcset].', "picture > img:not([srcset])."].forEach(function(t) {
                e.push(t + o.loadedClass), e.push(t + o.loadingClass)
            }), o.pf({
                elements: t.querySelectorAll(e.join(", "))
            })
        }()
    }
}(window, document),
function(e) {
    "use strict";
    var t, i = e.createElement("img");
    !("srcset" in i) || "sizes" in i || window.HTMLPictureElement || (t = /^picture$/i, e.addEventListener("lazybeforeunveil", function(i) {
        var n, o, s, r, a, l, c;
        !i.defaultPrevented && !lazySizesConfig.noIOSFix && (n = i.target) && (s = n.getAttribute(lazySizesConfig.srcsetAttr)) && (o = n.parentNode) && ((a = t.test(o.nodeName || "")) || (r = n.getAttribute("sizes") || n.getAttribute(lazySizesConfig.sizesAttr))) && (l = a ? o : e.createElement("picture"), n._lazyImgSrc || Object.defineProperty(n, "_lazyImgSrc", {
            value: e.createElement("source"),
            writable: !0
        }), c = n._lazyImgSrc, r && c.setAttribute("sizes", r), c.setAttribute(lazySizesConfig.srcsetAttr, s), n.setAttribute("data-pfsrcset", s), n.removeAttribute(lazySizesConfig.srcsetAttr), a || (o.insertBefore(l, n), l.appendChild(n)), l.insertBefore(c, n))
    }))
}(document),
function() {
    var e;
    e = function() {
            function e(e, t) {
                var i, n;
                if (this.options = {
                        target: "instafeed",
                        get: "popular",
                        resolution: "thumbnail",
                        sortBy: "none",
                        links: !0,
                        mock: !1,
                        useHttp: !1
                    }, "object" == typeof e)
                    for (i in e) n = e[i], this.options[i] = n;
                this.context = null != t ? t : this, this.unique = this._genKey()
            }
            return e.prototype.hasNext = function() {
                return "string" == typeof this.context.nextUrl && this.context.nextUrl.length > 0
            }, e.prototype.next = function() {
                return !!this.hasNext() && this.run(this.context.nextUrl)
            }, e.prototype.run = function(t) {
                var i, n, o;
                if ("string" != typeof this.options.clientId && "string" != typeof this.options.accessToken) throw new Error("Missing clientId or accessToken.");
                if ("string" != typeof this.options.accessToken && "string" != typeof this.options.clientId) throw new Error("Missing clientId or accessToken.");
                return null != this.options.before && "function" == typeof this.options.before && this.options.before.call(this), "undefined" != typeof document && null !== document && (o = document.createElement("script"), o.id = "instafeed-fetcher", o.src = t || this._buildUrl(), i = document.getElementsByTagName("head"), i[0].appendChild(o), n = "instafeedCache" + this.unique, window[n] = new e(this.options, this), window[n].unique = this.unique), !0
            }, e.prototype.parse = function(e) {
                var t, i, n, o, s, r, a, l, c, d, u, p, f, h, m, g, v, y, w, b, x, k, T, C, S, _, E, I, $, A, M, O, z;
                if ("object" != typeof e) {
                    if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "Invalid JSON data"), !1;
                    throw new Error("Invalid JSON response")
                }
                if (200 !== e.meta.code) {
                    if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, e.meta.error_message), !1;
                    throw new Error("Error from Instagram: " + e.meta.error_message)
                }
                if (0 === e.data.length) {
                    if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "No images were returned from Instagram"), !1;
                    throw new Error("No images were returned from Instagram")
                }
                if (null != this.options.success && "function" == typeof this.options.success && this.options.success.call(this, e), this.context.nextUrl = "", null != e.pagination && (this.context.nextUrl = e.pagination.next_url), "none" !== this.options.sortBy) switch (M = "random" === this.options.sortBy ? ["", "random"] : this.options.sortBy.split("-"), A = "least" === M[0], M[1]) {
                    case "random":
                        e.data.sort(function() {
                            return .5 - Math.random()
                        });
                        break;
                    case "recent":
                        e.data = this._sortBy(e.data, "created_time", A);
                        break;
                    case "liked":
                        e.data = this._sortBy(e.data, "likes.count", A);
                        break;
                    case "commented":
                        e.data = this._sortBy(e.data, "comments.count", A);
                        break;
                    default:
                        throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
                }
                if ("undefined" != typeof document && null !== document && this.options.mock === !1) {
                    if (g = e.data, $ = parseInt(this.options.limit, 10), null != this.options.limit && g.length > $ && (g = g.slice(0, $)), a = document.createDocumentFragment(), null != this.options.filter && "function" == typeof this.options.filter && (g = this._filter(g, this.options.filter)), null != this.options.template && "string" == typeof this.options.template) {
                        for (c = "", h = "", b = "", z = document.createElement("div"), u = 0, S = g.length; u < S; u++) {
                            if (p = g[u], f = p.images[this.options.resolution], "object" != typeof f) throw r = "No image found for resolution: " + this.options.resolution + ".", new Error(r);
                            x = f.width, y = f.height, w = "square", x > y && (w = "landscape"), x < y && (w = "portrait"), m = f.url, d = window.location.protocol.indexOf("http") >= 0, d && !this.options.useHttp && (m = m.replace(/https?:\/\//, "//")), h = this._makeTemplate(this.options.template, {
                                model: p,
                                id: p.id,
                                link: p.link,
                                type: p.type,
                                image: m,
                                width: x,
                                height: y,
                                orientation: w,
                                caption: this._getObjectProperty(p, "caption.text"),
                                likes: p.likes.count,
                                comments: p.comments.count,
                                location: this._getObjectProperty(p, "location.name")
                            }), c += h
                        }
                        for (z.innerHTML = c, o = [], n = 0, i = z.childNodes.length; n < i;) o.push(z.childNodes[n]), n += 1;
                        for (T = 0, _ = o.length; T < _; T++) I = o[T], a.appendChild(I)
                    } else
                        for (C = 0, E = g.length; C < E; C++) {
                            if (p = g[C], v = document.createElement("img"), f = p.images[this.options.resolution], "object" != typeof f) throw r = "No image found for resolution: " + this.options.resolution + ".", new Error(r);
                            m = f.url, d = window.location.protocol.indexOf("http") >= 0, d && !this.options.useHttp && (m = m.replace(/https?:\/\//, "//")), v.src = m, this.options.links === !0 ? (t = document.createElement("a"), t.href = p.link, t.appendChild(v), a.appendChild(t)) : a.appendChild(v)
                        }
                    if (O = this.options.target, "string" == typeof O && (O = document.getElementById(O)), null == O) throw r = 'No element with id="' + this.options.target + '" on page.', new Error(r);
                    O.appendChild(a), l = document.getElementsByTagName("head")[0], l.removeChild(document.getElementById("instafeed-fetcher")), k = "instafeedCache" + this.unique, window[k] = void 0;
                    try {
                        delete window[k]
                    } catch (H) {
                        s = H
                    }
                }
                return null != this.options.after && "function" == typeof this.options.after && this.options.after.call(this), !0
            }, e.prototype._buildUrl = function() {
                var e, t, i;
                switch (e = "https://api.instagram.com/v1", this.options.get) {
                    case "popular":
                        t = "media/popular";
                        break;
                    case "tagged":
                        if (!this.options.tagName) throw new Error("No tag name specified. Use the 'tagName' option.");
                        t = "tags/" + this.options.tagName + "/media/recent";
                        break;
                    case "location":
                        if (!this.options.locationId) throw new Error("No location specified. Use the 'locationId' option.");
                        t = "locations/" + this.options.locationId + "/media/recent";
                        break;
                    case "user":
                        if (!this.options.userId) throw new Error("No user specified. Use the 'userId' option.");
                        t = "users/" + this.options.userId + "/media/recent";
                        break;
                    default:
                        throw new Error("Invalid option for get: '" + this.options.get + "'.")
                }
                return i = e + "/" + t, i += null != this.options.accessToken ? "?access_token=" + this.options.accessToken : "?client_id=" + this.options.clientId, null != this.options.limit && (i += "&count=" + this.options.limit), i += "&callback=instafeedCache" + this.unique + ".parse"
            }, e.prototype._genKey = function() {
                var e;
                return e = function() {
                    return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
                }, "" + e() + e() + e() + e()
            }, e.prototype._makeTemplate = function(e, t) {
                var i, n, o, s, r;
                for (n = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, i = e; n.test(i);) s = i.match(n)[1], r = null != (o = this._getObjectProperty(t, s)) ? o : "", i = i.replace(n, function() {
                    return "" + r
                });
                return i
            }, e.prototype._getObjectProperty = function(e, t) {
                var i, n;
                for (t = t.replace(/\[(\w+)\]/g, ".$1"), n = t.split("."); n.length;) {
                    if (i = n.shift(), !(null != e && i in e)) return null;
                    e = e[i]
                }
                return e
            }, e.prototype._sortBy = function(e, t, i) {
                var n;
                return n = function(e, n) {
                    var o, s;
                    return o = this._getObjectProperty(e, t), s = this._getObjectProperty(n, t), i ? o > s ? 1 : -1 : o < s ? 1 : -1
                }, e.sort(n.bind(this)), e
            }, e.prototype._filter = function(e, t) {
                var i, n, o, s, r;
                for (i = [], n = function(e) {
                        if (t(e)) return i.push(e)
                    }, o = 0, r = e.length; o < r; o++) s = e[o], n(s);
                return i
            }, e
        }(),
        function(e, t) {
            return "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.Instafeed = t()
        }(this, function() {
            return e
        })
}.call(this),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        function t() {
            var t, i, n = {
                height: c.innerHeight,
                width: c.innerWidth
            };
            return n.height || (t = l.compatMode, !t && e.support.boxModel || (i = "CSS1Compat" === t ? d : l.body, n = {
                height: i.clientHeight,
                width: i.clientWidth
            })), n
        }

        function i() {
            return {
                top: c.pageYOffset || d.scrollTop || l.body.scrollTop,
                left: c.pageXOffset || d.scrollLeft || l.body.scrollLeft
            }
        }

        function n() {
            if (a.length) {
                var n = 0,
                    r = e.map(a, function(e) {
                        var t = e.data.selector,
                            i = e.$element;
                        return t ? i.find(t) : i
                    });
                for (o = o || t(), s = s || i(); n < a.length; n++)
                    if (e.contains(d, r[n][0])) {
                        var l = e(r[n]),
                            c = {
                                height: l[0].offsetHeight,
                                width: l[0].offsetWidth
                            },
                            u = l.offset(),
                            p = l.data("inview");
                        if (!s || !o) return;
                        u.top + c.height > s.top && u.top < s.top + o.height && u.left + c.width > s.left && u.left < s.left + o.width ? p || l.data("inview", !0).trigger("inview", [!0]) : p && l.data("inview", !1).trigger("inview", [!1])
                    }
            }
        }
        var o, s, r, a = [],
            l = document,
            c = window,
            d = l.documentElement;
        e.event.special.inview = {
            add: function(t) {
                a.push({
                    data: t,
                    $element: e(this),
                    element: this
                }), !r && a.length && (r = setInterval(n, 250))
            },
            remove: function(e) {
                for (var t = 0; t < a.length; t++) {
                    var i = a[t];
                    if (i.element === this && i.data.guid === e.guid) {
                        a.splice(t, 1);
                        break
                    }
                }
                a.length || (clearInterval(r), r = null)
            }
        }, e(c).bind("scroll resize scrollstop", function() {
            o = s = null
        }), !d.addEventListener && d.attachEvent && d.attachEvent("onfocusin", function() {
            s = null
        })
    }),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        var t = -1,
            i = -1,
            n = function(e) {
                return parseFloat(e) || 0
            },
            o = function(t) {
                var i = 1,
                    o = e(t),
                    s = null,
                    r = [];
                return o.each(function() {
                    var t = e(this),
                        o = t.offset().top - n(t.css("margin-top")),
                        a = r.length > 0 ? r[r.length - 1] : null;
                    null === a ? r.push(t) : Math.floor(Math.abs(s - o)) <= i ? r[r.length - 1] = a.add(t) : r.push(t), s = o
                }), r
            },
            s = function(t) {
                var i = {
                    byRow: !0,
                    property: "height",
                    target: null,
                    remove: !1
                };
                return "object" == typeof t ? e.extend(i, t) : ("boolean" == typeof t ? i.byRow = t : "remove" === t && (i.remove = !0), i)
            },
            r = e.fn.matchHeight = function(t) {
                var i = s(t);
                if (i.remove) {
                    var n = this;
                    return this.css(i.property, ""), e.each(r._groups, function(e, t) {
                        t.elements = t.elements.not(n)
                    }), this
                }
                return this.length <= 1 && !i.target ? this : (r._groups.push({
                    elements: this,
                    options: i
                }), r._apply(this, i), this)
            };
        r.version = "master", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null, r._afterUpdate = null, r._rows = o, r._parse = n, r._parseOptions = s, r._apply = function(t, i) {
            var a = s(i),
                l = e(t),
                c = [l],
                d = e(window).scrollTop(),
                u = e("html").outerHeight(!0),
                p = l.parents().filter(":hidden");
            return p.each(function() {
                var t = e(this);
                t.data("style-cache", t.attr("style"))
            }), p.css("display", "block"), a.byRow && !a.target && (l.each(function() {
                var t = e(this),
                    i = t.css("display");
                "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block"), t.data("style-cache", t.attr("style")), t.css({
                    display: i,
                    "padding-top": "0",
                    "padding-bottom": "0",
                    "margin-top": "0",
                    "margin-bottom": "0",
                    "border-top-width": "0",
                    "border-bottom-width": "0",
                    height: "100px",
                    overflow: "hidden"
                })
            }), c = o(l), l.each(function() {
                var t = e(this);
                t.attr("style", t.data("style-cache") || "")
            })), e.each(c, function(t, i) {
                var o = e(i),
                    s = 0;
                if (a.target) s = a.target.outerHeight(!1);
                else {
                    if (a.byRow && o.length <= 1) return void o.css(a.property, "");
                    o.each(function() {
                        var t = e(this),
                            i = t.attr("style"),
                            n = t.css("display");
                        "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block");
                        var o = {
                            display: n
                        };
                        o[a.property] = "", t.css(o), t.outerHeight(!1) > s && (s = t.outerHeight(!1)), i ? t.attr("style", i) : t.css("display", "")
                    })
                }
                o.each(function() {
                    var t = e(this),
                        i = 0;
                    a.target && t.is(a.target) || ("border-box" !== t.css("box-sizing") && (i += n(t.css("border-top-width")) + n(t.css("border-bottom-width")), i += n(t.css("padding-top")) + n(t.css("padding-bottom"))), t.css(a.property, s - i + "px"))
                })
            }), p.each(function() {
                var t = e(this);
                t.attr("style", t.data("style-cache") || null)
            }), r._maintainScroll && e(window).scrollTop(d / u * e("html").outerHeight(!0)), this
        }, r._applyDataApi = function() {
            var t = {};
            e("[data-match-height], [data-mh]").each(function() {
                var i = e(this),
                    n = i.attr("data-mh") || i.attr("data-match-height");
                n in t ? t[n] = t[n].add(i) : t[n] = i
            }), e.each(t, function() {
                this.matchHeight(!0)
            })
        };
        var a = function(t) {
            r._beforeUpdate && r._beforeUpdate(t, r._groups), e.each(r._groups, function() {
                r._apply(this.elements, this.options)
            }), r._afterUpdate && r._afterUpdate(t, r._groups)
        };
        r._update = function(n, o) {
            if (o && "resize" === o.type) {
                var s = e(window).width();
                if (s === t) return;
                t = s
            }
            n ? i === -1 && (i = setTimeout(function() {
                a(o), i = -1
            }, r._throttle)) : a(o)
        }, e(r._applyDataApi), e(window).bind("load", function(e) {
            r._update(!1, e)
        }), e(window).bind("resize orientationchange", function(e) {
            r._update(!0, e)
        })
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function(t, i) {
            return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(i), i
        } : e(jQuery)
    }(function(e) {
        "use strict";
        var t = e(document),
            i = e(window),
            n = "selectric",
            o = "Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Scroll Group GroupLabel",
            s = ".sl",
            r = ["a", "e", "i", "o", "u", "n", "c", "y"],
            a = [/[\xE0-\xE5]/g, /[\xE8-\xEB]/g, /[\xEC-\xEF]/g, /[\xF2-\xF6]/g, /[\xF9-\xFC]/g, /[\xF1]/g, /[\xE7]/g, /[\xFD-\xFF]/g],
            l = function(t, i) {
                var n = this;
                n.element = t, n.$element = e(t), n.state = {
                    multiple: !!n.$element.attr("multiple"),
                    enabled: !1,
                    opened: !1,
                    currValue: -1,
                    selectedIdx: -1,
                    highlightedIdx: -1
                }, n.eventTriggers = {
                    open: n.open,
                    close: n.close,
                    destroy: n.destroy,
                    refresh: n.refresh,
                    init: n.init
                }, n.init(i)
            };
        l.prototype = {
            utils: {
                isMobile: function() {
                    return /android|ip(hone|od|ad)/i.test(navigator.userAgent)
                },
                escapeRegExp: function(e) {
                    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                },
                replaceDiacritics: function(e) {
                    for (var t = a.length; t--;) e = e.toLowerCase().replace(a[t], r[t]);
                    return e
                },
                format: function(e) {
                    var t = arguments;
                    return ("" + e).replace(/\{(?:(\d+)|(\w+))\}/g, function(e, i, n) {
                        return n && t[1] ? t[1][n] : t[i]
                    })
                },
                nextEnabledItem: function(e, t) {
                    for (; e[t = (t + 1) % e.length].disabled;);
                    return t
                },
                previousEnabledItem: function(e, t) {
                    for (; e[t = (t > 0 ? t : e.length) - 1].disabled;);
                    return t
                },
                toDash: function(e) {
                    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
                },
                triggerCallback: function(t, i) {
                    var o = i.element,
                        s = i.options["on" + t],
                        r = [o].concat([].slice.call(arguments).slice(1));
                    e.isFunction(s) && s.apply(o, r), e.fn[n].hooks[t] && e.each(e.fn[n].hooks[t], function() {
                        this.apply(o, r)
                    }), e(o).trigger(n + "-" + this.toDash(t), r)
                },
                arrayToClassname: function(t) {
                    var i = e.grep(t, function(e) {
                        return !!e
                    });
                    return e.trim(i.join(" "))
                }
            },
            init: function(t) {
                var i = this;
                if (i.options = e.extend(!0, {}, e.fn[n].defaults, i.options, t), i.utils.triggerCallback("BeforeInit", i), i.destroy(!0), i.options.disableOnMobile && i.utils.isMobile()) return void(i.disableOnMobile = !0);
                i.classes = i.getClassNames();
                var o = e("<input/>", {
                        "class": i.classes.input,
                        readonly: i.utils.isMobile()
                    }),
                    s = e("<div/>", {
                        "class": i.classes.items,
                        tabindex: -1
                    }),
                    r = e("<div/>", {
                        "class": i.classes.scroll
                    }),
                    a = e("<div/>", {
                        "class": i.classes.prefix,
                        html: i.options.arrowButtonMarkup
                    }),
                    l = e("<span/>", {
                        "class": "label"
                    }),
                    c = i.$element.wrap("<div/>").parent().append(a.prepend(l), s, o),
                    d = e("<div/>", {
                        "class": i.classes.hideselect
                    });
                i.elements = {
                    input: o,
                    items: s,
                    itemsScroll: r,
                    wrapper: a,
                    label: l,
                    outerWrapper: c
                }, i.options.nativeOnMobile && i.utils.isMobile() && (i.elements.input = void 0, d.addClass(i.classes.prefix + "-is-native"), i.$element.on("change", function() {
                    i.refresh()
                })), i.$element.on(i.eventTriggers).wrap(d), i.originalTabindex = i.$element.prop("tabindex"), i.$element.prop("tabindex", !1), i.populate(), i.activate(), i.utils.triggerCallback("Init", i)
            },
            activate: function() {
                var e = this,
                    t = e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow),
                    i = e.$element.width();
                t.removeClass(e.classes.tempshow), e.utils.triggerCallback("BeforeActivate", e), e.elements.outerWrapper.prop("class", e.utils.arrayToClassname([e.classes.wrapper, e.$element.prop("class").replace(/\S+/g, e.classes.prefix + "-$&"), e.options.responsive ? e.classes.responsive : ""])), e.options.inheritOriginalWidth && i > 0 && e.elements.outerWrapper.width(i), e.unbindEvents(), e.$element.prop("disabled") ? (e.elements.outerWrapper.addClass(e.classes.disabled), e.elements.input && e.elements.input.prop("disabled", !0)) : (e.state.enabled = !0, e.elements.outerWrapper.removeClass(e.classes.disabled), e.$li = e.elements.items.removeAttr("style").find("li"), e.bindEvents()), e.utils.triggerCallback("Activate", e)
            },
            getClassNames: function() {
                var t = this,
                    i = t.options.customClass,
                    n = {};
                return e.each(o.split(" "), function(e, o) {
                    var s = i.prefix + o;
                    n[o.toLowerCase()] = i.camelCase ? s : t.utils.toDash(s)
                }), n.prefix = i.prefix, n
            },
            setLabel: function() {
                var t = this,
                    i = t.options.labelBuilder;
                if (t.state.multiple) {
                    var n = e.isArray(t.state.currValue) ? t.state.currValue : [t.state.currValue];
                    n = 0 === n.length ? [0] : n;
                    var o = e.map(n, function(i) {
                        return e.grep(t.lookupItems, function(e) {
                            return e.index === i
                        })[0]
                    });
                    o = e.grep(o, function(t) {
                        return o.length > 1 || 0 === o.length ? "" !== e.trim(t.value) && t.value !== t.text : t
                    }), o = e.map(o, function(n) {
                        return e.isFunction(i) ? i(n) : t.utils.format(i, n)
                    }), t.options.multiple.maxLabelEntries && (o.length >= t.options.multiple.maxLabelEntries + 1 ? (o = o.slice(0, t.options.multiple.maxLabelEntries), o.push(e.isFunction(i) ? i({
                        text: "..."
                    }) : t.utils.format(i, {
                        text: "..."
                    }))) : o.slice(o.length - 1)), t.elements.label.html(o.join(t.options.multiple.separator))
                } else {
                    var s = t.lookupItems[t.state.currValue];
                    t.elements.label.html(e.isFunction(i) ? i(s) : t.utils.format(i, s))
                }
            },
            populate: function() {
                var t = this,
                    i = t.$element.children(),
                    n = t.$element.find("option"),
                    o = n.filter(":selected"),
                    s = n.index(o),
                    r = 0,
                    a = t.state.multiple ? [] : 0;
                o.length > 1 && t.state.multiple && (s = [], o.each(function() {
                    s.push(e(this).index())
                })), t.state.currValue = ~s ? s : a, t.state.selectedIdx = t.state.currValue, t.state.highlightedIdx = t.state.currValue, t.items = [], t.lookupItems = [], i.length && (i.each(function(i) {
                    var n = e(this);
                    if (n.is("optgroup")) {
                        var o = {
                            element: n,
                            label: n.prop("label"),
                            groupDisabled: n.prop("disabled"),
                            items: []
                        };
                        n.children().each(function(i) {
                            var n = e(this);
                            o.items[i] = t.getItemData(r, n, o.groupDisabled), t.lookupItems[r] = o.items[i], r++
                        }), t.items[i] = o
                    } else t.items[i] = t.getItemData(r, n, n.prop("disabled")), t.lookupItems[r] = t.items[i], r++
                }), t.setLabel(), t.elements.items.append(t.elements.itemsScroll.html(t.getItemsMarkup(t.items))))
            },
            getItemData: function(t, i, n) {
                var o = this;
                return {
                    index: t,
                    element: i,
                    value: i.val(),
                    className: i.prop("class"),
                    text: i.html(),
                    slug: e.trim(o.utils.replaceDiacritics(i.html())),
                    selected: i.prop("selected"),
                    disabled: n
                }
            },
            getItemsMarkup: function(t) {
                var i = this,
                    n = "<ul>";
                return e.each(t, function(t, o) {
                    void 0 !== o.label ? (n += i.utils.format('<ul class="{1}"><li class="{2}">{3}</li>', i.utils.arrayToClassname([i.classes.group, o.groupDisabled ? "disabled" : "", o.element.prop("class")]), i.classes.grouplabel, o.element.prop("label")), e.each(o.items, function(e, t) {
                        n += i.getItemMarkup(t.index, t)
                    }), n += "</ul>") : n += i.getItemMarkup(o.index, o)
                }), n + "</ul>"
            },
            getItemMarkup: function(t, i) {
                var n = this,
                    o = n.options.optionsItemBuilder;
                return n.utils.format('<li data-index="{1}" class="{2}">{3}</li>', t, n.utils.arrayToClassname([i.className, t === n.items.length - 1 ? "last" : "", i.disabled ? "disabled" : "", i.selected ? "selected" : ""]), e.isFunction(o) ? o(i, i.element, t) : n.utils.format(o, i))
            },
            unbindEvents: function() {
                var e = this;
                e.elements.wrapper.add(e.$element).add(e.elements.outerWrapper).add(e.elements.input).off(s)
            },
            bindEvents: function() {
                var t = this;
                t.elements.outerWrapper.on("mouseenter" + s + " mouseleave" + s, function(i) {
                    e(this).toggleClass(t.classes.hover, "mouseenter" === i.type), t.options.openOnHover && (clearTimeout(t.closeTimer), "mouseleave" === i.type ? t.closeTimer = setTimeout(e.proxy(t.close, t), t.options.hoverIntentTimeout) : t.open())
                }), t.elements.wrapper.on("click" + s, function(e) {
                    t.state.opened ? t.close() : t.open(e)
                }), t.options.nativeOnMobile && t.utils.isMobile() || (t.$element.on("focus" + s, function() {
                    t.elements.input.focus()
                }), t.elements.input.prop({
                    tabindex: t.originalTabindex,
                    disabled: !1
                }).on("keydown" + s, e.proxy(t.handleKeys, t)).on("focusin" + s, function(e) {
                    t.elements.outerWrapper.addClass(t.classes.focus), t.elements.input.one("blur", function() {
                        t.elements.input.blur()
                    }), t.options.openOnFocus && !t.state.opened && t.open(e)
                }).on("focusout" + s, function() {
                    t.elements.outerWrapper.removeClass(t.classes.focus)
                }).on("input propertychange", function() {
                    var i = t.elements.input.val();
                    clearTimeout(t.resetStr), t.resetStr = setTimeout(function() {
                        t.elements.input.val("")
                    }, t.options.keySearchTimeout), i.length && e.each(t.items, function(e, n) {
                        if (new RegExp("^" + t.utils.escapeRegExp(i), "i").test(n.slug) && !n.disabled) return t.highlight(e), !1
                    })
                })), t.$li.on({
                    mousedown: function(e) {
                        e.preventDefault(), e.stopPropagation()
                    },
                    click: function() {
                        return t.select(e(this).data("index")), !1
                    }
                })
            },
            handleKeys: function(t) {
                var i = this,
                    n = t.keyCode || t.which,
                    o = i.options.keys,
                    s = e.inArray(n, o.previous) > -1,
                    r = e.inArray(n, o.next) > -1,
                    a = e.inArray(n, o.select) > -1,
                    l = e.inArray(n, o.open) > -1,
                    c = i.state.highlightedIdx,
                    d = s && 0 === c || r && c + 1 === i.items.length,
                    u = 0;
                if (13 !== n && 32 !== n || t.preventDefault(), s || r) {
                    if (!i.options.allowWrap && d) return;
                    s && (u = i.utils.previousEnabledItem(i.items, c)), r && (u = i.utils.nextEnabledItem(i.items, c)), i.highlight(u)
                }
                return a && i.state.opened ? (i.select(c), void(i.state.multiple && i.options.multiple.keepMenuOpen || i.close())) : void(l && !i.state.opened && i.open())
            },
            refresh: function() {
                var e = this;
                e.populate(), e.activate(), e.utils.triggerCallback("Refresh", e)
            },
            setOptionsDimensions: function() {
                var e = this,
                    t = e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow),
                    i = e.options.maxHeight,
                    n = e.elements.items.outerWidth(),
                    o = e.elements.wrapper.outerWidth() - (n - e.elements.items.width());
                !e.options.expandToItemText || o > n ? e.finalWidth = o : (e.elements.items.css("overflow", "scroll"), e.elements.outerWrapper.width(9e4), e.finalWidth = e.elements.items.width(), e.elements.items.css("overflow", ""), e.elements.outerWrapper.width("")), e.elements.items.width(e.finalWidth).height() > i && e.elements.items.height(i), t.removeClass(e.classes.tempshow)
            },
            isInViewport: function() {
                var e = this,
                    t = i.scrollTop(),
                    n = i.height(),
                    o = e.elements.outerWrapper.offset().top,
                    s = e.elements.outerWrapper.outerHeight(),
                    r = o + s + e.itemsHeight <= t + n,
                    a = o - e.itemsHeight > t,
                    l = !r && a;
                e.elements.outerWrapper.toggleClass(e.classes.above, l)
            },
            detectItemVisibility: function(t) {
                var i = this;
                i.state.multiple && (t = e.isArray(t) && 0 === t.length ? 0 : t, t = e.isArray(t) ? Math.min.apply(Math, t) : t);
                var n = i.$li.eq(t).outerHeight(),
                    o = i.$li[t].offsetTop,
                    s = i.elements.itemsScroll.scrollTop(),
                    r = o + 2 * n;
                i.elements.itemsScroll.scrollTop(r > s + i.itemsHeight ? r - i.itemsHeight : o - n < s ? o - n : s)
            },
            open: function(i) {
                var o = this;
                return (!o.options.nativeOnMobile || !o.utils.isMobile()) && (o.utils.triggerCallback("BeforeOpen", o), i && (i.preventDefault(), i.stopPropagation()), void(o.state.enabled && (o.setOptionsDimensions(), e("." + o.classes.hideselect, "." + o.classes.open).children()[n]("close"), o.state.opened = !0, o.itemsHeight = o.elements.items.outerHeight(), o.itemsInnerHeight = o.elements.items.height(), o.elements.outerWrapper.addClass(o.classes.open), o.elements.input.val(""), i && "focusin" !== i.type && o.elements.input.focus(), setTimeout(function() {
                    t.on("click" + s, e.proxy(o.close, o)).on("scroll" + s, e.proxy(o.isInViewport, o))
                }, 1), o.isInViewport(), o.options.preventWindowScroll && t.on("mousewheel" + s + " DOMMouseScroll" + s, "." + o.classes.scroll, function(t) {
                    var i = t.originalEvent,
                        n = e(this).scrollTop(),
                        s = 0;
                    "detail" in i && (s = i.detail * -1), "wheelDelta" in i && (s = i.wheelDelta), "wheelDeltaY" in i && (s = i.wheelDeltaY), "deltaY" in i && (s = i.deltaY * -1), (n === this.scrollHeight - o.itemsInnerHeight && s < 0 || 0 === n && s > 0) && t.preventDefault()
                }), o.detectItemVisibility(o.state.selectedIdx), o.highlight(o.state.multiple ? -1 : o.state.selectedIdx), o.utils.triggerCallback("Open", o))))
            },
            close: function() {
                var e = this;
                e.utils.triggerCallback("BeforeClose", e), t.off(s), e.elements.outerWrapper.removeClass(e.classes.open), e.state.opened = !1, e.utils.triggerCallback("Close", e)
            },
            change: function() {
                var t = this;
                t.utils.triggerCallback("BeforeChange", t), t.state.multiple ? (e.each(t.lookupItems, function(e) {
                    t.lookupItems[e].selected = !1, t.$element.find("option").prop("selected", !1)
                }), e.each(t.state.selectedIdx, function(e, i) {
                    t.lookupItems[i].selected = !0, t.$element.find("option").eq(i).prop("selected", !0)
                }), t.state.currValue = t.state.selectedIdx, t.setLabel(), t.utils.triggerCallback("Change", t)) : t.state.currValue !== t.state.selectedIdx && (t.$element.prop("selectedIndex", t.state.currValue = t.state.selectedIdx).data("value", t.lookupItems[t.state.selectedIdx].text), t.setLabel(), t.utils.triggerCallback("Change", t))
            },
            highlight: function(e) {
                var t = this,
                    i = t.$li.filter("[data-index]").removeClass("highlighted");
                t.utils.triggerCallback("BeforeHighlight", t), void 0 !== e && (e === -1 || t.lookupItems[e].disabled || (i.eq(t.state.highlightedIdx = e).addClass("highlighted"), t.detectItemVisibility(e)), t.utils.triggerCallback("Highlight", t))
            },
            select: function(t) {
                var i = this,
                    n = i.$li.filter("[data-index]").removeClass("selected");
                if (i.utils.triggerCallback("BeforeSelect", i, t), t !== -1 && i.lookupItems[t].disabled) return !1;
                if (i.state.multiple) {
                    i.state.selectedIdx = e.isArray(i.state.selectedIdx) ? i.state.selectedIdx : [i.state.selectedIdx];
                    var o = e.inArray(t, i.state.selectedIdx);
                    o !== -1 ? i.state.selectedIdx.splice(o, 1) : i.state.selectedIdx.push(t), n.filter(function(t) {
                        return e.inArray(t, i.state.selectedIdx) !== -1
                    }).addClass("selected")
                } else n.eq(i.state.selectedIdx = t).addClass("selected");
                i.state.multiple && i.options.multiple.keepMenuOpen || i.close(), i.change(), i.utils.triggerCallback("Select", i, t)
            },
            destroy: function(e) {
                var t = this;
                t.state && t.state.enabled && (t.elements.items.add(t.elements.wrapper).add(t.elements.input).remove(), e || t.$element.removeData(n).removeData("value"), t.$element.prop("tabindex", t.originalTabindex).off(s).off(t.eventTriggers).unwrap().unwrap(), t.state.enabled = !1)
            }
        }, e.fn[n] = function(t) {
            return this.each(function() {
                var i = e.data(this, n);
                i && !i.disableOnMobile ? "string" == typeof t && i[t] ? i[t]() : i.init(t) : e.data(this, n, new l(this, t))
            })
        }, e.fn[n].hooks = {
            add: function(e, t, i) {
                return this[e] || (this[e] = {}), this[e][t] = i, this
            },
            remove: function(e, t) {
                return delete this[e][t], this
            }
        }, e.fn[n].defaults = {
            onChange: function(t) {
                e(t).change()
            },
            maxHeight: 300,
            keySearchTimeout: 500,
            arrowButtonMarkup: '<b class="button">&#x25be;</b>',
            disableOnMobile: !0,
            nativeOnMobile: !0,
            openOnFocus: !0,
            openOnHover: !1,
            hoverIntentTimeout: 500,
            expandToItemText: !1,
            responsive: !1,
            preventWindowScroll: !0,
            inheritOriginalWidth: !1,
            allowWrap: !0,
            optionsItemBuilder: "{text}",
            labelBuilder: "{text}",
            keys: {
                previous: [37, 38],
                next: [39, 40],
                select: [9, 13, 27],
                open: [13, 32, 37, 38, 39, 40],
                close: [9, 27]
            },
            customClass: {
                prefix: n,
                camelCase: !1
            },
            multiple: {
                separator: ", ",
                keepMenuOpen: !0,
                maxLabelEntries: !1
            }
        }
    }),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        "use strict";
        var t = window.Slick || {};
        t = function() {
            function t(t, n) {
                var o, s = this;
                s.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(t),
                    appendDots: e(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(t, i) {
                        return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, s.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = e(t), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = e(t).data("slick") || {}, s.options = e.extend({}, s.defaults, n, o), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, "undefined" != typeof document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.instanceUid = i++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
            }
            var i = 0;
            return t
        }(), t.prototype.activateADA = function() {
            var e = this;
            e.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
            var o = this;
            if ("boolean" == typeof i) n = i, i = null;
            else if (i < 0 || i >= o.slideCount) return !1;
            o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : n ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : n === !0 ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(t, i) {
                e(i).attr("data-slick-index", t)
            }), o.$slidesCache = o.$slides, o.reinit()
        }, t.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed)
            }
        }, t.prototype.animateSlide = function(t, i) {
            var n = {},
                o = this;
            o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (t = -t), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
                left: t
            }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
                top: t
            }, o.options.speed, o.options.easing, i) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), e({
                animStart: o.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function(e) {
                    e = Math.ceil(e), o.options.vertical === !1 ? (n[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(n))
                },
                complete: function() {
                    i && i.call()
                }
            })) : (o.applyTransition(), t = Math.ceil(t), o.options.vertical === !1 ? n[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function() {
                o.disableTransition(), i.call()
            }, o.options.speed))
        }, t.prototype.getNavTarget = function() {
            var t = this,
                i = t.options.asNavFor;
            return i && null !== i && (i = e(i).not(t.$slider)), i
        }, t.prototype.asNavFor = function(t) {
            var i = this,
                n = i.getNavTarget();
            null !== n && "object" == typeof n && n.each(function() {
                var i = e(this).slick("getSlick");
                i.unslicked || i.slideHandler(t, !0)
            })
        }, t.prototype.applyTransition = function(e) {
            var t = this,
                i = {};
            t.options.fade === !1 ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, t.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function() {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function() {
            var e = this,
                t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (e.options.infinite === !1 && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 === 0 && (e.direction = 1))), e.slideHandler(t))
        }, t.prototype.buildArrows = function() {
            var t = this;
            t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, t.prototype.buildDots = function() {
            var t, i, n = this;
            if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
                for (n.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(n.options.dotsClass), t = 0; t <= n.getDotCount(); t += 1) i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
                n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, t.prototype.buildOut = function() {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
                e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
            }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), t.options.centerMode !== !0 && t.options.swipeToSlide !== !0 || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
        }, t.prototype.buildRows = function() {
            var e, t, i, n, o, s, r, a = this;
            if (n = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
                for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), e = 0; e < o; e++) {
                    var l = document.createElement("div");
                    for (t = 0; t < a.options.rows; t++) {
                        var c = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var d = e * r + (t * a.options.slidesPerRow + i);
                            s.get(d) && c.appendChild(s.get(d))
                        }
                        l.appendChild(c)
                    }
                    n.appendChild(l)
                }
                a.$slider.empty().append(n), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, t.prototype.checkResponsive = function(t, i) {
            var n, o, s, r = this,
                a = !1,
                l = r.$slider.width(),
                c = window.innerWidth || e(window).width();
            if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                o = null;
                for (n in r.breakpoints) r.breakpoints.hasOwnProperty(n) && (r.originalSettings.mobileFirst === !1 ? s < r.breakpoints[n] && (o = r.breakpoints[n]) : s > r.breakpoints[n] && (o = r.breakpoints[n]));
                null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || i) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t), a = o), t || a === !1 || r.$slider.trigger("breakpoint", [r, a])
            }
        }, t.prototype.changeSlide = function(t, i) {
            var n, o, s, r = this,
                a = e(t.currentTarget);
            switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), s = r.slideCount % r.options.slidesToScroll !== 0, n = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
                case "previous":
                    o = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
                    break;
                case "next":
                    o = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
                    break;
                case "index":
                    var l = 0 === t.data.index ? 0 : t.data.index || a.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, t.prototype.checkNavigable = function(e) {
            var t, i, n = this;
            if (t = n.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1];
            else
                for (var o in t) {
                    if (e < t[o]) {
                        e = i;
                        break
                    }
                    i = t[o]
                }
            return e
        }, t.prototype.cleanUpEvents = function() {
            var t = this;
            t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.cleanUpSlideEvents = function() {
            var t = this;
            t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.cleanUpRows = function() {
            var e, t = this;
            t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.empty().append(e))
        }, t.prototype.clickHandler = function(e) {
            var t = this;
            t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, t.prototype.destroy = function(t) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                e(this).attr("style", e(this).data("originalStyling"))
            }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
        }, t.prototype.disableTransition = function(e) {
            var t = this,
                i = {};
            i[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, t.prototype.fadeSlide = function(e, t) {
            var i = this;
            i.cssTransitions === !1 ? (i.$slides.eq(e).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(e).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), t && setTimeout(function() {
                i.disableTransition(e), t.call()
            }, i.options.speed))
        }, t.prototype.fadeSlideOut = function(e) {
            var t = this;
            t.cssTransitions === !1 ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
            var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.focusHandler = function() {
            var t = this;
            t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
                i.stopImmediatePropagation();
                var n = e(this);
                setTimeout(function() {
                    t.options.pauseOnFocus && (t.focussed = n.is(":focus"), t.autoPlay())
                }, 0)
            })
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
            var e = this;
            return e.currentSlide
        }, t.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                i = 0,
                n = 0;
            if (e.options.infinite === !0)
                for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (e.options.centerMode === !0) n = e.slideCount;
            else if (e.options.asNavFor)
                for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return n - 1
        }, t.prototype.getLeft = function(e) {
            var t, i, n, o = this,
                s = 0;
            return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, s = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll !== 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, s = (o.options.slidesToShow - (e - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, s = o.slideCount % o.options.slidesToScroll * i * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (e + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, s = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = o.options.vertical === !1 ? e * o.slideWidth * -1 + o.slideOffset : e * i * -1 + s, o.options.variableWidth === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = o.options.rtl === !0 ? n[0] ? (o.$slideTrack.width() - n[0].offsetLeft - n.width()) * -1 : 0 : n[0] ? n[0].offsetLeft * -1 : 0, o.options.centerMode === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = o.options.rtl === !0 ? n[0] ? (o.$slideTrack.width() - n[0].offsetLeft - n.width()) * -1 : 0 : n[0] ? n[0].offsetLeft * -1 : 0, t += (o.$list.width() - n.outerWidth()) / 2)), t
        }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
            var t = this;
            return t.options[e]
        }, t.prototype.getNavigableIndexes = function() {
            var e, t = this,
                i = 0,
                n = 0,
                o = [];
            for (t.options.infinite === !1 ? e = t.slideCount : (i = t.options.slidesToScroll * -1, n = t.options.slidesToScroll * -1, e = 2 * t.slideCount); i < e;) o.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return o
        }, t.prototype.getSlick = function() {
            return this
        }, t.prototype.getSlideCount = function() {
            var t, i, n, o = this;
            return n = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function(t, s) {
                if (s.offsetLeft - n + e(s).outerWidth() / 2 > o.swipeLeft * -1) return i = s, !1
            }), t = Math.abs(e(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
        }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
            var i = this;
            i.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, t.prototype.init = function(t) {
            var i = this;
            e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, t.prototype.initADA = function() {
            var t = this;
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
                e(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + t.instanceUid + i
                })
            }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(i) {
                e(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + t.instanceUid + i,
                    id: "slick-slide" + t.instanceUid + i
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
        }, t.prototype.initArrowEvents = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, e.changeSlide))
        }, t.prototype.initDotEvents = function() {
            var t = this;
            t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.initSlideEvents = function() {
            var t = this;
            t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
        }, t.prototype.initializeEvents = function() {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.initUI = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, t.prototype.keyHandler = function(e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
                data: {
                    message: t.options.rtl === !0 ? "next" : "previous"
                }
            }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
                data: {
                    message: t.options.rtl === !0 ? "previous" : "next"
                }
            }))
        }, t.prototype.lazyLoad = function() {
            function t(t) {
                e("img[data-lazy]", t).each(function() {
                    var t = e(this),
                        i = e(this).attr("data-lazy"),
                        n = document.createElement("img");
                    n.onload = function() {
                        t.animate({
                            opacity: 0
                        }, 100, function() {
                            t.attr("src", i).animate({
                                opacity: 1
                            }, 200, function() {
                                t.removeAttr("data-lazy").removeClass("slick-loading")
                            }), r.$slider.trigger("lazyLoaded", [r, t, i])
                        })
                    }, n.onerror = function() {
                        t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, i])
                    }, n.src = i
                })
            }
            var i, n, o, s, r = this;
            r.options.centerMode === !0 ? r.options.infinite === !0 ? (o = r.currentSlide + (r.options.slidesToShow / 2 + 1), s = o + r.options.slidesToShow + 2) : (o = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), s = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (o = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, s = Math.ceil(o + r.options.slidesToShow), r.options.fade === !0 && (o > 0 && o--, s <= r.slideCount && s++)), i = r.$slider.find(".slick-slide").slice(o, s), t(i), r.slideCount <= r.options.slidesToShow ? (n = r.$slider.find(".slick-slide"), t(n)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (n = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), t(n)) : 0 === r.currentSlide && (n = r.$slider.find(".slick-cloned").slice(r.options.slidesToShow * -1), t(n))
        }, t.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, t.prototype.next = t.prototype.slickNext = function() {
            var e = this;
            e.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.orientationChange = function() {
            var e = this;
            e.checkResponsive(), e.setPosition()
        }, t.prototype.pause = t.prototype.slickPause = function() {
            var e = this;
            e.autoPlayClear(), e.paused = !0
        }, t.prototype.play = t.prototype.slickPlay = function() {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, t.prototype.postSlide = function(e) {
            var t = this;
            t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), t.options.accessibility === !0 && t.initADA())
        }, t.prototype.prev = t.prototype.slickPrev = function() {
            var e = this;
            e.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, t.prototype.preventDefault = function(e) {
            e.preventDefault()
        }, t.prototype.progressiveLazyLoad = function(t) {
            t = t || 1;
            var i, n, o, s = this,
                r = e("img[data-lazy]", s.$slider);
            r.length ? (i = r.first(), n = i.attr("data-lazy"), o = document.createElement("img"), o.onload = function() {
                i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), s.options.adaptiveHeight === !0 && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, i, n]), s.progressiveLazyLoad()
            }, o.onerror = function() {
                t < 3 ? setTimeout(function() {
                    s.progressiveLazyLoad(t + 1)
                }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, i, n]), s.progressiveLazyLoad())
            }, o.src = n) : s.$slider.trigger("allImagesLoaded", [s])
        }, t.prototype.refresh = function(t) {
            var i, n, o = this;
            n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
                currentSlide: i
            }), o.init(), t || o.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !1)
        }, t.prototype.registerBreakpoints = function() {
            var t, i, n, o = this,
                s = o.options.responsive || null;
            if ("array" === e.type(s) && s.length) {
                o.respondTo = o.options.respondTo || "window";
                for (t in s)
                    if (n = o.breakpoints.length - 1, i = s[t].breakpoint, s.hasOwnProperty(t)) {
                        for (; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                        o.breakpoints.push(i), o.breakpointSettings[i] = s[t].settings
                    }
                o.breakpoints.sort(function(e, t) {
                    return o.options.mobileFirst ? e - t : t - e
                })
            }
        }, t.prototype.reinit = function() {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
        }, t.prototype.resize = function() {
            var t = this;
            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
            }, 50))
        }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
            var n = this;
            return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : n.slideCount - 1) : e = t === !0 ? --e : e, !(n.slideCount < 1 || e < 0 || e > n.slideCount - 1) && (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
        }, t.prototype.setCSS = function(e) {
            var t, i, n = this,
                o = {};
            n.options.rtl === !0 && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, n.transformsEnabled === !1 ? n.$slideTrack.css(o) : (o = {}, n.cssTransitions === !1 ? (o[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(o)))
        }, t.prototype.setDimensions = function() {
            var e = this;
            e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, t.prototype.setFade = function() {
            var t, i = this;
            i.$slides.each(function(n, o) {
                t = i.slideWidth * n * -1, i.options.rtl === !0 ? e(o).css({
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : e(o).css({
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, t.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, t.prototype.setOption = t.prototype.slickSetOption = function() {
            var t, i, n, o, s, r = this,
                a = !1;
            if ("object" === e.type(arguments[0]) ? (n = arguments[0], a = arguments[1], s = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? s = "responsive" : "undefined" != typeof arguments[1] && (s = "single")), "single" === s) r.options[n] = o;
            else if ("multiple" === s) e.each(n, function(e, t) {
                r.options[e] = t
            });
            else if ("responsive" === s)
                for (i in o)
                    if ("array" !== e.type(r.options.responsive)) r.options.responsive = [o[i]];
                    else {
                        for (t = r.options.responsive.length - 1; t >= 0;) r.options.responsive[t].breakpoint === o[i].breakpoint && r.options.responsive.splice(t, 1), t--;
                        r.options.responsive.push(o[i])
                    }
            a && (r.unload(), r.reinit())
        }, t.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, t.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && e.animType !== !1
        }, t.prototype.setSlideClasses = function(e) {
            var t, i, n, o, s = this;
            i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), s.options.centerMode === !0 ? (t = Math.floor(s.options.slidesToShow / 2), s.options.infinite === !0 && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + e, i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = s.options.infinite === !0 ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
        }, t.prototype.setupInfinite = function() {
            var t, i, n, o = this;
            if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (i = null, o.slideCount > o.options.slidesToShow)) {
                for (n = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - n; t -= 1) i = t - 1, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                for (t = 0; t < n; t += 1) i = t, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    e(this).attr("id", "")
                })
            }
        }, t.prototype.interrupt = function(e) {
            var t = this;
            e || t.autoPlay(), t.interrupted = e
        }, t.prototype.selectHandler = function(t) {
            var i = this,
                n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                o = parseInt(n.attr("data-slick-index"));
            return o || (o = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(o), void i.asNavFor(o)) : void i.slideHandler(o)
        }, t.prototype.slideHandler = function(e, t, i) {
            var n, o, s, r, a, l = null,
                c = this;
            if (t = t || !1, (c.animating !== !0 || c.options.waitForAnimate !== !0) && !(c.options.fade === !0 && c.currentSlide === e || c.slideCount <= c.options.slidesToShow)) return t === !1 && c.asNavFor(e), n = e, l = c.getLeft(n), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, c.options.infinite === !1 && c.options.centerMode === !1 && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll) ? void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(r, function() {
                c.postSlide(n)
            }) : c.postSlide(n))) : c.options.infinite === !1 && c.options.centerMode === !0 && (e < 0 || e > c.slideCount - c.options.slidesToScroll) ? void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(r, function() {
                c.postSlide(n)
            }) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll !== 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll !== 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), s = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), c.options.fade === !0 ? (i !== !0 ? (c.fadeSlideOut(s), c.fadeSlide(o, function() {
                c.postSlide(o)
            })) : c.postSlide(o), void c.animateHeight()) : void(i !== !0 ? c.animateSlide(l, function() {
                c.postSlide(o)
            }) : c.postSlide(o)))
        }, t.prototype.startLoad = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function() {
            var e, t, i, n, o = this;
            return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), n = Math.round(180 * i / Math.PI), n < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? o.options.rtl === !1 ? "left" : "right" : n <= 360 && n >= 315 ? o.options.rtl === !1 ? "left" : "right" : n >= 135 && n <= 225 ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
        }, t.prototype.swipeEnd = function(e) {
            var t, i, n = this;
            if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
            if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                switch (i = n.swipeDirection()) {
                    case "left":
                    case "down":
                        t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                }
                "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, t.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && e.type.indexOf("mouse") !== -1)) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, t.prototype.swipeMove = function(e) {
            var t, i, n, o, s, r = this;
            return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!r.dragging || s && 1 !== s.length) && (t = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, r.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), r.options.verticalSwiping === !0 && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), i = r.swipeDirection(), "vertical" !== i ? (void 0 !== e.originalEvent && r.touchObject.swipeLength > 4 && e.preventDefault(), o = (r.options.rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), r.options.verticalSwiping === !0 && (o = r.touchObject.curY > r.touchObject.startY ? 1 : -1), n = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, r.options.infinite === !1 && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (n = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), r.options.vertical === !1 ? r.swipeLeft = t + n * o : r.swipeLeft = t + n * (r.$list.height() / r.listWidth) * o, r.options.verticalSwiping === !0 && (r.swipeLeft = t + n * o), r.options.fade !== !0 && r.options.touchMove !== !1 && (r.animating === !0 ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))) : void 0)
        }, t.prototype.swipeStart = function(e) {
            var t, i = this;
            return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(i.dragging = !0))
        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function() {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, t.prototype.unslick = function(e) {
            var t = this;
            t.$slider.trigger("unslick", [t, e]), t.destroy()
        }, t.prototype.updateArrows = function() {
            var e, t = this;
            e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, t.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, t.prototype.visibility = function() {
            var e = this;
            e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
        }, e.fn.slick = function() {
            var e, i, n = this,
                o = arguments[0],
                s = Array.prototype.slice.call(arguments, 1),
                r = n.length;
            for (e = 0; e < r; e++)
                if ("object" == typeof o || "undefined" == typeof o ? n[e].slick = new t(n[e], o) : i = n[e].slick[o].apply(n[e].slick, s), "undefined" != typeof i) return i;
            return n
        }
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
    }(this, function() {
        "use strict";
        var e = function(e, t, i, n) {
            var o = {
                features: null,
                bind: function(e, t, i, n) {
                    var o = (n ? "remove" : "add") + "EventListener";
                    t = t.split(" ");
                    for (var s = 0; s < t.length; s++) t[s] && e[o](t[s], i, !1)
                },
                isArray: function(e) {
                    return e instanceof Array
                },
                createEl: function(e, t) {
                    var i = document.createElement(t || "div");
                    return e && (i.className = e), i
                },
                getScrollY: function() {
                    var e = window.pageYOffset;
                    return void 0 !== e ? e : document.documentElement.scrollTop
                },
                unbind: function(e, t, i) {
                    o.bind(e, t, i, !0)
                },
                removeClass: function(e, t) {
                    var i = new RegExp("(\\s|^)" + t + "(\\s|$)");
                    e.className = e.className.replace(i, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                },
                addClass: function(e, t) {
                    o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
                },
                hasClass: function(e, t) {
                    return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
                },
                getChildByClass: function(e, t) {
                    for (var i = e.firstChild; i;) {
                        if (o.hasClass(i, t)) return i;
                        i = i.nextSibling
                    }
                },
                arraySearch: function(e, t, i) {
                    for (var n = e.length; n--;)
                        if (e[n][i] === t) return n;
                    return -1
                },
                extend: function(e, t, i) {
                    for (var n in t)
                        if (t.hasOwnProperty(n)) {
                            if (i && e.hasOwnProperty(n)) continue;
                            e[n] = t[n]
                        }
                },
                easing: {
                    sine: {
                        out: function(e) {
                            return Math.sin(e * (Math.PI / 2))
                        },
                        inOut: function(e) {
                            return -(Math.cos(Math.PI * e) - 1) / 2
                        }
                    },
                    cubic: {
                        out: function(e) {
                            return --e * e * e + 1
                        }
                    }
                },
                detectFeatures: function() {
                    if (o.features) return o.features;
                    var e = o.createEl(),
                        t = e.style,
                        i = "",
                        n = {};
                    if (n.oldIE = document.all && !document.addEventListener, n.touch = "ontouchstart" in window, window.requestAnimationFrame && (n.raf = window.requestAnimationFrame, n.caf = window.cancelAnimationFrame), n.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !n.pointerEvent) {
                        var s = navigator.userAgent;
                        if (/iP(hone|od)/.test(navigator.platform)) {
                            var r = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            r && r.length > 0 && (r = parseInt(r[1], 10), r >= 1 && r < 8 && (n.isOldIOSPhone = !0))
                        }
                        var a = s.match(/Android\s([0-9\.]*)/),
                            l = a ? a[1] : 0;
                        l = parseFloat(l), l >= 1 && (l < 4.4 && (n.isOldAndroid = !0), n.androidVersion = l), n.isMobileOpera = /opera mini|opera mobi/i.test(s)
                    }
                    for (var c, d, u = ["transform", "perspective", "animationName"], p = ["", "webkit", "Moz", "ms", "O"], f = 0; f < 4; f++) {
                        i = p[f];
                        for (var h = 0; h < 3; h++) c = u[h], d = i + (i ? c.charAt(0).toUpperCase() + c.slice(1) : c), !n[c] && d in t && (n[c] = d);
                        i && !n.raf && (i = i.toLowerCase(), n.raf = window[i + "RequestAnimationFrame"], n.raf && (n.caf = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]))
                    }
                    if (!n.raf) {
                        var m = 0;
                        n.raf = function(e) {
                            var t = (new Date).getTime(),
                                i = Math.max(0, 16 - (t - m)),
                                n = window.setTimeout(function() {
                                    e(t + i)
                                }, i);
                            return m = t + i, n
                        }, n.caf = function(e) {
                            clearTimeout(e)
                        }
                    }
                    return n.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = n, n
                }
            };
            o.detectFeatures(), o.features.oldIE && (o.bind = function(e, t, i, n) {
                t = t.split(" ");
                for (var o, s = (n ? "detach" : "attach") + "Event", r = function() {
                        i.handleEvent.call(i)
                    }, a = 0; a < t.length; a++)
                    if (o = t[a])
                        if ("object" == typeof i && i.handleEvent) {
                            if (n) {
                                if (!i["oldIE" + o]) return !1
                            } else i["oldIE" + o] = r;
                            e[s]("on" + o, i["oldIE" + o])
                        } else e[s]("on" + o, i)
            });
            var s = this,
                r = 25,
                a = 3,
                l = {
                    allowPanToNext: !0,
                    spacing: .12,
                    bgOpacity: 1,
                    mouseUsed: !1,
                    loop: !0,
                    pinchToClose: !0,
                    closeOnScroll: !0,
                    closeOnVerticalDrag: !0,
                    verticalDragRange: .75,
                    hideAnimationDuration: 333,
                    showAnimationDuration: 333,
                    showHideOpacity: !1,
                    focus: !0,
                    escKey: !0,
                    arrowKeys: !0,
                    mainScrollEndFriction: .35,
                    panEndFriction: .35,
                    isClickableElement: function(e) {
                        return "A" === e.tagName
                    },
                    getDoubleTapZoom: function(e, t) {
                        return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
                    },
                    maxSpreadZoom: 1.33,
                    modal: !0,
                    scaleMode: "fit"
                };
            o.extend(l, n);
            var c, d, u, p, f, h, m, g, v, y, w, b, x, k, T, C, S, _, E, I, $, A, M, O, z, H, P, D, L, F, j, N, R, W, q, B, U, Z, Y, V, Q, X, K, G, J, ee, te, ie, ne, oe, se, re, ae, le, ce, de, ue = function() {
                    return {
                        x: 0,
                        y: 0
                    }
                },
                pe = ue(),
                fe = ue(),
                he = ue(),
                me = {},
                ge = 0,
                ve = {},
                ye = ue(),
                we = 0,
                be = !0,
                xe = [],
                ke = {},
                Te = !1,
                Ce = function(e, t) {
                    o.extend(s, t.publicMethods), xe.push(e)
                },
                Se = function(e) {
                    var t = Jt();
                    return e > t - 1 ? e - t : e < 0 ? t + e : e
                },
                _e = {},
                Ee = function(e, t) {
                    return _e[e] || (_e[e] = []), _e[e].push(t)
                },
                Ie = function(e) {
                    var t = _e[e];
                    if (t) {
                        var i = Array.prototype.slice.call(arguments);
                        i.shift();
                        for (var n = 0; n < t.length; n++) t[n].apply(s, i)
                    }
                },
                $e = function() {
                    return (new Date).getTime()
                },
                Ae = function(e) {
                    le = e, s.bg.style.opacity = e * l.bgOpacity
                },
                Me = function(e, t, i, n, o) {
                    (!Te || o && o !== s.currItem) && (n /= o ? o.fitRatio : s.currItem.fitRatio), e[A] = b + t + "px, " + i + "px" + x + " scale(" + n + ")"
                },
                Oe = function(e) {
                    ne && (e && (y > s.currItem.fitRatio ? Te || (ui(s.currItem, !1, !0), Te = !0) : Te && (ui(s.currItem), Te = !1)), Me(ne, he.x, he.y, y))
                },
                ze = function(e) {
                    e.container && Me(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
                },
                He = function(e, t) {
                    t[A] = b + e + "px, 0px" + x
                },
                Pe = function(e, t) {
                    if (!l.loop && t) {
                        var i = p + (ye.x * ge - e) / ye.x,
                            n = Math.round(e - yt.x);
                        (i < 0 && n > 0 || i >= Jt() - 1 && n < 0) && (e = yt.x + n * l.mainScrollEndFriction)
                    }
                    yt.x = e, He(e, f)
                },
                De = function(e, t) {
                    var i = wt[e] - ve[e];
                    return fe[e] + pe[e] + i - i * (t / w)
                },
                Le = function(e, t) {
                    e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
                },
                Fe = function(e) {
                    e.x = Math.round(e.x), e.y = Math.round(e.y)
                },
                je = null,
                Ne = function() {
                    je && (o.unbind(document, "mousemove", Ne), o.addClass(e, "pswp--has_mouse"), l.mouseUsed = !0, Ie("mouseUsed")), je = setTimeout(function() {
                        je = null
                    }, 100)
                },
                Re = function() {
                    o.bind(document, "keydown", s), j.transform && o.bind(s.scrollWrap, "click", s), l.mouseUsed || o.bind(document, "mousemove", Ne), o.bind(window, "resize scroll", s), Ie("bindEvents")
                },
                We = function() {
                    o.unbind(window, "resize", s), o.unbind(window, "scroll", v.scroll), o.unbind(document, "keydown", s), o.unbind(document, "mousemove", Ne), j.transform && o.unbind(s.scrollWrap, "click", s), Z && o.unbind(window, m, s), Ie("unbindEvents")
                },
                qe = function(e, t) {
                    var i = ai(s.currItem, me, e);
                    return t && (ie = i), i
                },
                Be = function(e) {
                    return e || (e = s.currItem), e.initialZoomLevel
                },
                Ue = function(e) {
                    return e || (e = s.currItem), e.w > 0 ? l.maxSpreadZoom : 1
                },
                Ze = function(e, t, i, n) {
                    return n === s.currItem.initialZoomLevel ? (i[e] = s.currItem.initialPosition[e], !0) : (i[e] = De(e, n), i[e] > t.min[e] ? (i[e] = t.min[e], !0) : i[e] < t.max[e] && (i[e] = t.max[e], !0))
                },
                Ye = function() {
                    if (A) {
                        var t = j.perspective && !O;
                        return b = "translate" + (t ? "3d(" : "("), void(x = j.perspective ? ", 0px)" : ")")
                    }
                    A = "left", o.addClass(e, "pswp--ie"), He = function(e, t) {
                        t.left = e + "px"
                    }, ze = function(e) {
                        var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                            i = e.container.style,
                            n = t * e.w,
                            o = t * e.h;
                        i.width = n + "px", i.height = o + "px", i.left = e.initialPosition.x + "px", i.top = e.initialPosition.y + "px"
                    }, Oe = function() {
                        if (ne) {
                            var e = ne,
                                t = s.currItem,
                                i = t.fitRatio > 1 ? 1 : t.fitRatio,
                                n = i * t.w,
                                o = i * t.h;
                            e.width = n + "px", e.height = o + "px", e.left = he.x + "px", e.top = he.y + "px"
                        }
                    }
                },
                Ve = function(e) {
                    var t = "";
                    l.escKey && 27 === e.keyCode ? t = "close" : l.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, s[t]()))
                },
                Qe = function(e) {
                    e && (Q || V || oe || B) && (e.preventDefault(), e.stopPropagation())
                },
                Xe = function() {
                    s.setScrollOffset(0, o.getScrollY())
                },
                Ke = {},
                Ge = 0,
                Je = function(e) {
                    Ke[e] && (Ke[e].raf && H(Ke[e].raf), Ge--, delete Ke[e])
                },
                et = function(e) {
                    Ke[e] && Je(e), Ke[e] || (Ge++, Ke[e] = {})
                },
                tt = function() {
                    for (var e in Ke) Ke.hasOwnProperty(e) && Je(e)
                },
                it = function(e, t, i, n, o, s, r) {
                    var a, l = $e();
                    et(e);
                    var c = function() {
                        if (Ke[e]) {
                            if (a = $e() - l, a >= n) return Je(e), s(i), void(r && r());
                            s((i - t) * o(a / n) + t), Ke[e].raf = z(c)
                        }
                    };
                    c()
                },
                nt = {
                    shout: Ie,
                    listen: Ee,
                    viewportSize: me,
                    options: l,
                    isMainScrollAnimating: function() {
                        return oe
                    },
                    getZoomLevel: function() {
                        return y
                    },
                    getCurrentIndex: function() {
                        return p
                    },
                    isDragging: function() {
                        return Z
                    },
                    isZooming: function() {
                        return J
                    },
                    setScrollOffset: function(e, t) {
                        ve.x = e, F = ve.y = t, Ie("updateScrollOffset", ve)
                    },
                    applyZoomPan: function(e, t, i, n) {
                        he.x = t, he.y = i, y = e, Oe(n)
                    },
                    init: function() {
                        if (!c && !d) {
                            var i;
                            s.framework = o, s.template = e, s.bg = o.getChildByClass(e, "pswp__bg"), P = e.className, c = !0, j = o.detectFeatures(), z = j.raf, H = j.caf, A = j.transform, L = j.oldIE, s.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap"), s.container = o.getChildByClass(s.scrollWrap, "pswp__container"), f = s.container.style, s.itemHolders = C = [{
                                el: s.container.children[0],
                                wrap: 0,
                                index: -1
                            }, {
                                el: s.container.children[1],
                                wrap: 0,
                                index: -1
                            }, {
                                el: s.container.children[2],
                                wrap: 0,
                                index: -1
                            }], C[0].el.style.display = C[2].el.style.display = "none", Ye(), v = {
                                resize: s.updateSize,
                                scroll: Xe,
                                keydown: Ve,
                                click: Qe
                            };
                            var n = j.isOldIOSPhone || j.isOldAndroid || j.isMobileOpera;
                            for (j.animationName && j.transform && !n || (l.showAnimationDuration = l.hideAnimationDuration = 0), i = 0; i < xe.length; i++) s["init" + xe[i]]();
                            if (t) {
                                var r = s.ui = new t(s, o);
                                r.init()
                            }
                            Ie("firstUpdate"), p = p || l.index || 0, (isNaN(p) || p < 0 || p >= Jt()) && (p = 0), s.currItem = Gt(p), (j.isOldIOSPhone || j.isOldAndroid) && (be = !1), e.setAttribute("aria-hidden", "false"), l.modal && (be ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = o.getScrollY() + "px")), void 0 === F && (Ie("initialLayout"), F = D = o.getScrollY());
                            var u = "pswp--open ";
                            for (l.mainClass && (u += l.mainClass + " "), l.showHideOpacity && (u += "pswp--animate_opacity "), u += O ? "pswp--touch" : "pswp--notouch", u += j.animationName ? " pswp--css_animation" : "", u += j.svg ? " pswp--svg" : "", o.addClass(e, u), s.updateSize(), h = -1, we = null, i = 0; i < a; i++) He((i + h) * ye.x, C[i].el.style);
                            L || o.bind(s.scrollWrap, g, s), Ee("initialZoomInEnd", function() {
                                s.setContent(C[0], p - 1), s.setContent(C[2], p + 1), C[0].el.style.display = C[2].el.style.display = "block", l.focus && e.focus(), Re()
                            }), s.setContent(C[1], p), s.updateCurrItem(), Ie("afterInit"), be || (k = setInterval(function() {
                                Ge || Z || J || y !== s.currItem.initialZoomLevel || s.updateSize()
                            }, 1e3)), o.addClass(e, "pswp--visible")
                        }
                    },
                    close: function() {
                        c && (c = !1, d = !0, Ie("close"), We(), ti(s.currItem, null, !0, s.destroy))
                    },
                    destroy: function() {
                        Ie("destroy"), Vt && clearTimeout(Vt), e.setAttribute("aria-hidden", "true"), e.className = P, k && clearInterval(k), o.unbind(s.scrollWrap, g, s), o.unbind(window, "scroll", s), Ct(), tt(), _e = null
                    },
                    panTo: function(e, t, i) {
                        i || (e > ie.min.x ? e = ie.min.x : e < ie.max.x && (e = ie.max.x), t > ie.min.y ? t = ie.min.y : t < ie.max.y && (t = ie.max.y)), he.x = e, he.y = t, Oe()
                    },
                    handleEvent: function(e) {
                        e = e || window.event, v[e.type] && v[e.type](e)
                    },
                    goTo: function(e) {
                        e = Se(e);
                        var t = e - p;
                        we = t, p = e, s.currItem = Gt(p), ge -= t, Pe(ye.x * ge), tt(), oe = !1, s.updateCurrItem()
                    },
                    next: function() {
                        s.goTo(p + 1)
                    },
                    prev: function() {
                        s.goTo(p - 1)
                    },
                    updateCurrZoomItem: function(e) {
                        if (e && Ie("beforeChange", 0), C[1].el.children.length) {
                            var t = C[1].el.children[0];
                            ne = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                        } else ne = null;
                        ie = s.currItem.bounds, w = y = s.currItem.initialZoomLevel, he.x = ie.center.x, he.y = ie.center.y, e && Ie("afterChange")
                    },
                    invalidateCurrItems: function() {
                        T = !0;
                        for (var e = 0; e < a; e++) C[e].item && (C[e].item.needsUpdate = !0)
                    },
                    updateCurrItem: function(e) {
                        if (0 !== we) {
                            var t, i = Math.abs(we);
                            if (!(e && i < 2)) {
                                s.currItem = Gt(p), Te = !1, Ie("beforeChange", we), i >= a && (h += we + (we > 0 ? -a : a), i = a);
                                for (var n = 0; n < i; n++) we > 0 ? (t = C.shift(), C[a - 1] = t, h++, He((h + 2) * ye.x, t.el.style), s.setContent(t, p - i + n + 1 + 1)) : (t = C.pop(), C.unshift(t), h--, He(h * ye.x, t.el.style), s.setContent(t, p + i - n - 1 - 1));
                                if (ne && 1 === Math.abs(we)) {
                                    var o = Gt(S);
                                    o.initialZoomLevel !== y && (ai(o, me), ui(o), ze(o))
                                }
                                we = 0, s.updateCurrZoomItem(), S = p, Ie("afterChange")
                            }
                        }
                    },
                    updateSize: function(t) {
                        if (!be && l.modal) {
                            var i = o.getScrollY();
                            if (F !== i && (e.style.top = i + "px", F = i), !t && ke.x === window.innerWidth && ke.y === window.innerHeight) return;
                            ke.x = window.innerWidth, ke.y = window.innerHeight, e.style.height = ke.y + "px"
                        }
                        if (me.x = s.scrollWrap.clientWidth, me.y = s.scrollWrap.clientHeight, Xe(), ye.x = me.x + Math.round(me.x * l.spacing), ye.y = me.y, Pe(ye.x * ge), Ie("beforeResize"), void 0 !== h) {
                            for (var n, r, c, d = 0; d < a; d++) n = C[d], He((d + h) * ye.x, n.el.style), c = p + d - 1, l.loop && Jt() > 2 && (c = Se(c)), r = Gt(c), r && (T || r.needsUpdate || !r.bounds) ? (s.cleanSlide(r), s.setContent(n, c), 1 === d && (s.currItem = r, s.updateCurrZoomItem(!0)), r.needsUpdate = !1) : n.index === -1 && c >= 0 && s.setContent(n, c), r && r.container && (ai(r, me), ui(r), ze(r));
                            T = !1
                        }
                        w = y = s.currItem.initialZoomLevel, ie = s.currItem.bounds, ie && (he.x = ie.center.x, he.y = ie.center.y, Oe(!0)), Ie("resize")
                    },
                    zoomTo: function(e, t, i, n, s) {
                        t && (w = y, wt.x = Math.abs(t.x) - he.x, wt.y = Math.abs(t.y) - he.y, Le(fe, he));
                        var r = qe(e, !1),
                            a = {};
                        Ze("x", r, a, e), Ze("y", r, a, e);
                        var l = y,
                            c = {
                                x: he.x,
                                y: he.y
                            };
                        Fe(a);
                        var d = function(t) {
                            1 === t ? (y = e, he.x = a.x, he.y = a.y) : (y = (e - l) * t + l, he.x = (a.x - c.x) * t + c.x, he.y = (a.y - c.y) * t + c.y), s && s(t), Oe(1 === t)
                        };
                        i ? it("customZoomTo", 0, 1, i, n || o.easing.sine.inOut, d) : d(1)
                    }
                },
                ot = 30,
                st = 10,
                rt = {},
                at = {},
                lt = {},
                ct = {},
                dt = {},
                ut = [],
                pt = {},
                ft = [],
                ht = {},
                mt = 0,
                gt = ue(),
                vt = 0,
                yt = ue(),
                wt = ue(),
                bt = ue(),
                xt = function(e, t) {
                    return e.x === t.x && e.y === t.y
                },
                kt = function(e, t) {
                    return Math.abs(e.x - t.x) < r && Math.abs(e.y - t.y) < r
                },
                Tt = function(e, t) {
                    return ht.x = Math.abs(e.x - t.x), ht.y = Math.abs(e.y - t.y), Math.sqrt(ht.x * ht.x + ht.y * ht.y)
                },
                Ct = function() {
                    X && (H(X), X = null)
                },
                St = function() {
                    Z && (X = z(St), Rt())
                },
                _t = function() {
                    return !("fit" === l.scaleMode && y === s.currItem.initialZoomLevel)
                },
                Et = function(e, t) {
                    return !(!e || e === document) && (!(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : Et(e.parentNode, t)))
                },
                It = {},
                $t = function(e, t) {
                    return It.prevent = !Et(e.target, l.isClickableElement), Ie("preventDragEvent", e, t, It), It.prevent
                },
                At = function(e, t) {
                    return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
                },
                Mt = function(e, t, i) {
                    i.x = .5 * (e.x + t.x), i.y = .5 * (e.y + t.y)
                },
                Ot = function(e, t, i) {
                    if (e - R > 50) {
                        var n = ft.length > 2 ? ft.shift() : {};
                        n.x = t, n.y = i, ft.push(n), R = e
                    }
                },
                zt = function() {
                    var e = he.y - s.currItem.initialPosition.y;
                    return 1 - Math.abs(e / (me.y / 2))
                },
                Ht = {},
                Pt = {},
                Dt = [],
                Lt = function(e) {
                    for (; Dt.length > 0;) Dt.pop();
                    return M ? (de = 0, ut.forEach(function(e) {
                        0 === de ? Dt[0] = e : 1 === de && (Dt[1] = e), de++
                    })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Dt[0] = At(e.touches[0], Ht), e.touches.length > 1 && (Dt[1] = At(e.touches[1], Pt))) : (Ht.x = e.pageX, Ht.y = e.pageY, Ht.id = "", Dt[0] = Ht), Dt
                },
                Ft = function(e, t) {
                    var i, n, o, r, a = 0,
                        c = he[e] + t[e],
                        d = t[e] > 0,
                        u = yt.x + t.x,
                        p = yt.x - pt.x;
                    return i = c > ie.min[e] || c < ie.max[e] ? l.panEndFriction : 1, c = he[e] + t[e] * i, !l.allowPanToNext && y !== s.currItem.initialZoomLevel || (ne ? "h" !== se || "x" !== e || V || (d ? (c > ie.min[e] && (i = l.panEndFriction, a = ie.min[e] - c, n = ie.min[e] - fe[e]), (n <= 0 || p < 0) && Jt() > 1 ? (r = u, p < 0 && u > pt.x && (r = pt.x)) : ie.min.x !== ie.max.x && (o = c)) : (c < ie.max[e] && (i = l.panEndFriction, a = c - ie.max[e], n = fe[e] - ie.max[e]), (n <= 0 || p > 0) && Jt() > 1 ? (r = u, p > 0 && u < pt.x && (r = pt.x)) : ie.min.x !== ie.max.x && (o = c))) : r = u, "x" !== e) ? void(oe || K || y > s.currItem.fitRatio && (he[e] += t[e] * i)) : (void 0 !== r && (Pe(r, !0), K = r !== pt.x), ie.min.x !== ie.max.x && (void 0 !== o ? he.x = o : K || (he.x += t.x * i)), void 0 !== r)
                },
                jt = function(e) {
                    if (!("mousedown" === e.type && e.button > 0)) {
                        if (Kt) return void e.preventDefault();
                        if (!U || "mousedown" !== e.type) {
                            if ($t(e, !0) && e.preventDefault(), Ie("pointerDown"), M) {
                                var t = o.arraySearch(ut, e.pointerId, "id");
                                t < 0 && (t = ut.length),
                                    ut[t] = {
                                        x: e.pageX,
                                        y: e.pageY,
                                        id: e.pointerId
                                    }
                            }
                            var i = Lt(e),
                                n = i.length;
                            G = null, tt(), Z && 1 !== n || (Z = re = !0, o.bind(window, m, s), q = ce = ae = B = K = Q = Y = V = !1, se = null, Ie("firstTouchStart", i), Le(fe, he), pe.x = pe.y = 0, Le(ct, i[0]), Le(dt, ct), pt.x = ye.x * ge, ft = [{
                                x: ct.x,
                                y: ct.y
                            }], R = N = $e(), qe(y, !0), Ct(), St()), !J && n > 1 && !oe && !K && (w = y, V = !1, J = Y = !0, pe.y = pe.x = 0, Le(fe, he), Le(rt, i[0]), Le(at, i[1]), Mt(rt, at, bt), wt.x = Math.abs(bt.x) - he.x, wt.y = Math.abs(bt.y) - he.y, ee = te = Tt(rt, at))
                        }
                    }
                },
                Nt = function(e) {
                    if (e.preventDefault(), M) {
                        var t = o.arraySearch(ut, e.pointerId, "id");
                        if (t > -1) {
                            var i = ut[t];
                            i.x = e.pageX, i.y = e.pageY
                        }
                    }
                    if (Z) {
                        var n = Lt(e);
                        if (se || Q || J) G = n;
                        else if (yt.x !== ye.x * ge) se = "h";
                        else {
                            var s = Math.abs(n[0].x - ct.x) - Math.abs(n[0].y - ct.y);
                            Math.abs(s) >= st && (se = s > 0 ? "h" : "v", G = n)
                        }
                    }
                },
                Rt = function() {
                    if (G) {
                        var e = G.length;
                        if (0 !== e)
                            if (Le(rt, G[0]), lt.x = rt.x - ct.x, lt.y = rt.y - ct.y, J && e > 1) {
                                if (ct.x = rt.x, ct.y = rt.y, !lt.x && !lt.y && xt(G[1], at)) return;
                                Le(at, G[1]), V || (V = !0, Ie("zoomGestureStarted"));
                                var t = Tt(rt, at),
                                    i = Zt(t);
                                i > s.currItem.initialZoomLevel + s.currItem.initialZoomLevel / 15 && (ce = !0);
                                var n = 1,
                                    o = Be(),
                                    r = Ue();
                                if (i < o)
                                    if (l.pinchToClose && !ce && w <= s.currItem.initialZoomLevel) {
                                        var a = o - i,
                                            c = 1 - a / (o / 1.2);
                                        Ae(c), Ie("onPinchClose", c), ae = !0
                                    } else n = (o - i) / o, n > 1 && (n = 1), i = o - n * (o / 3);
                                else i > r && (n = (i - r) / (6 * o), n > 1 && (n = 1), i = r + n * o);
                                n < 0 && (n = 0), ee = t, Mt(rt, at, gt), pe.x += gt.x - bt.x, pe.y += gt.y - bt.y, Le(bt, gt), he.x = De("x", i), he.y = De("y", i), q = i > y, y = i, Oe()
                            } else {
                                if (!se) return;
                                if (re && (re = !1, Math.abs(lt.x) >= st && (lt.x -= G[0].x - dt.x), Math.abs(lt.y) >= st && (lt.y -= G[0].y - dt.y)), ct.x = rt.x, ct.y = rt.y, 0 === lt.x && 0 === lt.y) return;
                                if ("v" === se && l.closeOnVerticalDrag && !_t()) {
                                    pe.y += lt.y, he.y += lt.y;
                                    var d = zt();
                                    return B = !0, Ie("onVerticalDrag", d), Ae(d), void Oe()
                                }
                                Ot($e(), rt.x, rt.y), Q = !0, ie = s.currItem.bounds;
                                var u = Ft("x", lt);
                                u || (Ft("y", lt), Fe(he), Oe())
                            }
                    }
                },
                Wt = function(e) {
                    if (j.isOldAndroid) {
                        if (U && "mouseup" === e.type) return;
                        e.type.indexOf("touch") > -1 && (clearTimeout(U), U = setTimeout(function() {
                            U = 0
                        }, 600))
                    }
                    Ie("pointerUp"), $t(e, !1) && e.preventDefault();
                    var t;
                    if (M) {
                        var i = o.arraySearch(ut, e.pointerId, "id");
                        if (i > -1)
                            if (t = ut.splice(i, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse";
                            else {
                                var n = {
                                    4: "mouse",
                                    2: "touch",
                                    3: "pen"
                                };
                                t.type = n[e.pointerType], t.type || (t.type = e.pointerType || "mouse")
                            }
                    }
                    var r, a = Lt(e),
                        c = a.length;
                    if ("mouseup" === e.type && (c = 0), 2 === c) return G = null, !0;
                    1 === c && Le(dt, a[0]), 0 !== c || se || oe || (t || ("mouseup" === e.type ? t = {
                        x: e.pageX,
                        y: e.pageY,
                        type: "mouse"
                    } : e.changedTouches && e.changedTouches[0] && (t = {
                        x: e.changedTouches[0].pageX,
                        y: e.changedTouches[0].pageY,
                        type: "touch"
                    })), Ie("touchRelease", e, t));
                    var d = -1;
                    if (0 === c && (Z = !1, o.unbind(window, m, s), Ct(), J ? d = 0 : vt !== -1 && (d = $e() - vt)), vt = 1 === c ? $e() : -1, r = d !== -1 && d < 150 ? "zoom" : "swipe", J && c < 2 && (J = !1, 1 === c && (r = "zoomPointerUp"), Ie("zoomGestureEnded")), G = null, Q || V || oe || B)
                        if (tt(), W || (W = qt()), W.calculateSwipeSpeed("x"), B) {
                            var u = zt();
                            if (u < l.verticalDragRange) s.close();
                            else {
                                var p = he.y,
                                    f = le;
                                it("verticalDrag", 0, 1, 300, o.easing.cubic.out, function(e) {
                                    he.y = (s.currItem.initialPosition.y - p) * e + p, Ae((1 - f) * e + f), Oe()
                                }), Ie("onVerticalDrag", 1)
                            }
                        } else {
                            if ((K || oe) && 0 === c) {
                                var h = Ut(r, W);
                                if (h) return;
                                r = "zoomPointerUp"
                            }
                            if (!oe) return "swipe" !== r ? void Yt() : void(!K && y > s.currItem.fitRatio && Bt(W))
                        }
                },
                qt = function() {
                    var e, t, i = {
                        lastFlickOffset: {},
                        lastFlickDist: {},
                        lastFlickSpeed: {},
                        slowDownRatio: {},
                        slowDownRatioReverse: {},
                        speedDecelerationRatio: {},
                        speedDecelerationRatioAbs: {},
                        distanceOffset: {},
                        backAnimDestination: {},
                        backAnimStarted: {},
                        calculateSwipeSpeed: function(n) {
                            ft.length > 1 ? (e = $e() - R + 50, t = ft[ft.length - 2][n]) : (e = $e() - N, t = dt[n]), i.lastFlickOffset[n] = ct[n] - t, i.lastFlickDist[n] = Math.abs(i.lastFlickOffset[n]), i.lastFlickDist[n] > 20 ? i.lastFlickSpeed[n] = i.lastFlickOffset[n] / e : i.lastFlickSpeed[n] = 0, Math.abs(i.lastFlickSpeed[n]) < .1 && (i.lastFlickSpeed[n] = 0), i.slowDownRatio[n] = .95, i.slowDownRatioReverse[n] = 1 - i.slowDownRatio[n], i.speedDecelerationRatio[n] = 1
                        },
                        calculateOverBoundsAnimOffset: function(e, t) {
                            i.backAnimStarted[e] || (he[e] > ie.min[e] ? i.backAnimDestination[e] = ie.min[e] : he[e] < ie.max[e] && (i.backAnimDestination[e] = ie.max[e]), void 0 !== i.backAnimDestination[e] && (i.slowDownRatio[e] = .7, i.slowDownRatioReverse[e] = 1 - i.slowDownRatio[e], i.speedDecelerationRatioAbs[e] < .05 && (i.lastFlickSpeed[e] = 0, i.backAnimStarted[e] = !0, it("bounceZoomPan" + e, he[e], i.backAnimDestination[e], t || 300, o.easing.sine.out, function(t) {
                                he[e] = t, Oe()
                            }))))
                        },
                        calculateAnimOffset: function(e) {
                            i.backAnimStarted[e] || (i.speedDecelerationRatio[e] = i.speedDecelerationRatio[e] * (i.slowDownRatio[e] + i.slowDownRatioReverse[e] - i.slowDownRatioReverse[e] * i.timeDiff / 10), i.speedDecelerationRatioAbs[e] = Math.abs(i.lastFlickSpeed[e] * i.speedDecelerationRatio[e]), i.distanceOffset[e] = i.lastFlickSpeed[e] * i.speedDecelerationRatio[e] * i.timeDiff, he[e] += i.distanceOffset[e])
                        },
                        panAnimLoop: function() {
                            if (Ke.zoomPan && (Ke.zoomPan.raf = z(i.panAnimLoop), i.now = $e(), i.timeDiff = i.now - i.lastNow, i.lastNow = i.now, i.calculateAnimOffset("x"), i.calculateAnimOffset("y"), Oe(), i.calculateOverBoundsAnimOffset("x"), i.calculateOverBoundsAnimOffset("y"), i.speedDecelerationRatioAbs.x < .05 && i.speedDecelerationRatioAbs.y < .05)) return he.x = Math.round(he.x), he.y = Math.round(he.y), Oe(), void Je("zoomPan")
                        }
                    };
                    return i
                },
                Bt = function(e) {
                    return e.calculateSwipeSpeed("y"), ie = s.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (et("zoomPan"), e.lastNow = $e(), void e.panAnimLoop())
                },
                Ut = function(e, t) {
                    var i;
                    oe || (mt = p);
                    var n;
                    if ("swipe" === e) {
                        var r = ct.x - dt.x,
                            a = t.lastFlickDist.x < 10;
                        r > ot && (a || t.lastFlickOffset.x > 20) ? n = -1 : r < -ot && (a || t.lastFlickOffset.x < -20) && (n = 1)
                    }
                    var c;
                    n && (p += n, p < 0 ? (p = l.loop ? Jt() - 1 : 0, c = !0) : p >= Jt() && (p = l.loop ? 0 : Jt() - 1, c = !0), c && !l.loop || (we += n, ge -= n, i = !0));
                    var d, u = ye.x * ge,
                        f = Math.abs(u - yt.x);
                    return i || u > yt.x == t.lastFlickSpeed.x > 0 ? (d = Math.abs(t.lastFlickSpeed.x) > 0 ? f / Math.abs(t.lastFlickSpeed.x) : 333, d = Math.min(d, 400), d = Math.max(d, 250)) : d = 333, mt === p && (i = !1), oe = !0, Ie("mainScrollAnimStart"), it("mainScroll", yt.x, u, d, o.easing.cubic.out, Pe, function() {
                        tt(), oe = !1, mt = -1, (i || mt !== p) && s.updateCurrItem(), Ie("mainScrollAnimComplete")
                    }), i && s.updateCurrItem(!0), i
                },
                Zt = function(e) {
                    return 1 / te * e * w
                },
                Yt = function() {
                    var e = y,
                        t = Be(),
                        i = Ue();
                    y < t ? e = t : y > i && (e = i);
                    var n, r = 1,
                        a = le;
                    return ae && !q && !ce && y < t ? (s.close(), !0) : (ae && (n = function(e) {
                        Ae((r - a) * e + a)
                    }), s.zoomTo(e, 0, 200, o.easing.cubic.out, n), !0)
                };
            Ce("Gestures", {
                publicMethods: {
                    initGestures: function() {
                        var e = function(e, t, i, n, o) {
                            _ = e + t, E = e + i, I = e + n, $ = o ? e + o : ""
                        };
                        M = j.pointerEvent, M && j.touch && (j.touch = !1), M ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : j.touch ? (e("touch", "start", "move", "end", "cancel"), O = !0) : e("mouse", "down", "move", "up"), m = E + " " + I + " " + $, g = _, M && !O && (O = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), s.likelyTouchDevice = O, v[_] = jt, v[E] = Nt, v[I] = Wt, $ && (v[$] = v[I]), j.touch && (g += " mousedown", m += " mousemove mouseup", v.mousedown = v[_], v.mousemove = v[E], v.mouseup = v[I]), O || (l.allowPanToNext = !1)
                    }
                }
            });
            var Vt, Qt, Xt, Kt, Gt, Jt, ei, ti = function(t, i, n, r) {
                    Vt && clearTimeout(Vt), Kt = !0, Xt = !0;
                    var a;
                    t.initialLayout ? (a = t.initialLayout, t.initialLayout = null) : a = l.getThumbBoundsFn && l.getThumbBoundsFn(p);
                    var c = n ? l.hideAnimationDuration : l.showAnimationDuration,
                        d = function() {
                            Je("initialZoom"), n ? (s.template.removeAttribute("style"), s.bg.removeAttribute("style")) : (Ae(1), i && (i.style.display = "block"), o.addClass(e, "pswp--animated-in"), Ie("initialZoom" + (n ? "OutEnd" : "InEnd"))), r && r(), Kt = !1
                        };
                    if (!c || !a || void 0 === a.x) return Ie("initialZoom" + (n ? "Out" : "In")), y = t.initialZoomLevel, Le(he, t.initialPosition), Oe(), e.style.opacity = n ? 0 : 1, Ae(1), void(c ? setTimeout(function() {
                        d()
                    }, c) : d());
                    var f = function() {
                        var i = u,
                            r = !s.currItem.src || s.currItem.loadError || l.showHideOpacity;
                        t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), n || (y = a.w / t.w, he.x = a.x, he.y = a.y - D, s[r ? "template" : "bg"].style.opacity = .001, Oe()), et("initialZoom"), n && !i && o.removeClass(e, "pswp--animated-in"), r && (n ? o[(i ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function() {
                            o.addClass(e, "pswp--animate_opacity")
                        }, 30)), Vt = setTimeout(function() {
                            if (Ie("initialZoom" + (n ? "Out" : "In")), n) {
                                var s = a.w / t.w,
                                    l = {
                                        x: he.x,
                                        y: he.y
                                    },
                                    u = y,
                                    p = le,
                                    f = function(t) {
                                        1 === t ? (y = s, he.x = a.x, he.y = a.y - F) : (y = (s - u) * t + u, he.x = (a.x - l.x) * t + l.x, he.y = (a.y - F - l.y) * t + l.y), Oe(), r ? e.style.opacity = 1 - t : Ae(p - t * p)
                                    };
                                i ? it("initialZoom", 0, 1, c, o.easing.cubic.out, f, d) : (f(1), Vt = setTimeout(d, c + 20))
                            } else y = t.initialZoomLevel, Le(he, t.initialPosition), Oe(), Ae(1), r ? e.style.opacity = 1 : Ae(1), Vt = setTimeout(d, c + 20)
                        }, n ? 25 : 90)
                    };
                    f()
                },
                ii = {},
                ni = [],
                oi = {
                    index: 0,
                    errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                    forceProgressiveLoading: !1,
                    preload: [1, 1],
                    getNumItemsFn: function() {
                        return Qt.length
                    }
                },
                si = function() {
                    return {
                        center: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        },
                        min: {
                            x: 0,
                            y: 0
                        }
                    }
                },
                ri = function(e, t, i) {
                    var n = e.bounds;
                    n.center.x = Math.round((ii.x - t) / 2), n.center.y = Math.round((ii.y - i) / 2) + e.vGap.top, n.max.x = t > ii.x ? Math.round(ii.x - t) : n.center.x, n.max.y = i > ii.y ? Math.round(ii.y - i) + e.vGap.top : n.center.y, n.min.x = t > ii.x ? 0 : n.center.x, n.min.y = i > ii.y ? e.vGap.top : n.center.y
                },
                ai = function(e, t, i) {
                    if (e.src && !e.loadError) {
                        var n = !i;
                        if (n && (e.vGap || (e.vGap = {
                                top: 0,
                                bottom: 0
                            }), Ie("parseVerticalMargin", e)), ii.x = t.x, ii.y = t.y - e.vGap.top - e.vGap.bottom, n) {
                            var o = ii.x / e.w,
                                s = ii.y / e.h;
                            e.fitRatio = o < s ? o : s;
                            var r = l.scaleMode;
                            "orig" === r ? i = 1 : "fit" === r && (i = e.fitRatio), i > 1 && (i = 1), e.initialZoomLevel = i, e.bounds || (e.bounds = si())
                        }
                        if (!i) return;
                        return ri(e, e.w * i, e.h * i), n && i === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
                    }
                    return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = si(), e.initialPosition = e.bounds.center, e.bounds
                },
                li = function(e, t, i, n, o, r) {
                    t.loadError || n && (t.imageAppended = !0, ui(t, n, t === s.currItem && Te), i.appendChild(n), r && setTimeout(function() {
                        t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
                    }, 500))
                },
                ci = function(e) {
                    e.loading = !0, e.loaded = !1;
                    var t = e.img = o.createEl("pswp__img", "img"),
                        i = function() {
                            e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
                        };
                    return t.onload = i, t.onerror = function() {
                        e.loadError = !0, i()
                    }, t.src = e.src, t
                },
                di = function(e, t) {
                    if (e.src && e.loadError && e.container) return t && (e.container.innerHTML = ""), e.container.innerHTML = l.errorMsg.replace("%url%", e.src), !0
                },
                ui = function(e, t, i) {
                    if (e.src) {
                        t || (t = e.container.lastChild);
                        var n = i ? e.w : Math.round(e.w * e.fitRatio),
                            o = i ? e.h : Math.round(e.h * e.fitRatio);
                        e.placeholder && !e.loaded && (e.placeholder.style.width = n + "px", e.placeholder.style.height = o + "px"), t.style.width = n + "px", t.style.height = o + "px"
                    }
                },
                pi = function() {
                    if (ni.length) {
                        for (var e, t = 0; t < ni.length; t++) e = ni[t], e.holder.index === e.index && li(e.index, e.item, e.baseDiv, e.img, !1, e.clearPlaceholder);
                        ni = []
                    }
                };
            Ce("Controller", {
                publicMethods: {
                    lazyLoadItem: function(e) {
                        e = Se(e);
                        var t = Gt(e);
                        t && (!t.loaded && !t.loading || T) && (Ie("gettingData", e, t), t.src && ci(t))
                    },
                    initController: function() {
                        o.extend(l, oi, !0), s.items = Qt = i, Gt = s.getItemAt, Jt = l.getNumItemsFn, ei = l.loop, Jt() < 3 && (l.loop = !1), Ee("beforeChange", function(e) {
                            var t, i = l.preload,
                                n = null === e || e >= 0,
                                o = Math.min(i[0], Jt()),
                                r = Math.min(i[1], Jt());
                            for (t = 1; t <= (n ? r : o); t++) s.lazyLoadItem(p + t);
                            for (t = 1; t <= (n ? o : r); t++) s.lazyLoadItem(p - t)
                        }), Ee("initialLayout", function() {
                            s.currItem.initialLayout = l.getThumbBoundsFn && l.getThumbBoundsFn(p)
                        }), Ee("mainScrollAnimComplete", pi), Ee("initialZoomInEnd", pi), Ee("destroy", function() {
                            for (var e, t = 0; t < Qt.length; t++) e = Qt[t], e.container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                            ni = null
                        })
                    },
                    getItemAt: function(e) {
                        return e >= 0 && (void 0 !== Qt[e] && Qt[e])
                    },
                    allowProgressiveImg: function() {
                        return l.forceProgressiveLoading || !O || l.mouseUsed || screen.width > 1200
                    },
                    setContent: function(e, t) {
                        l.loop && (t = Se(t));
                        var i = s.getItemAt(e.index);
                        i && (i.container = null);
                        var n, r = s.getItemAt(t);
                        if (!r) return void(e.el.innerHTML = "");
                        Ie("gettingData", t, r), e.index = t, e.item = r;
                        var a = r.container = o.createEl("pswp__zoom-wrap");
                        if (!r.src && r.html && (r.html.tagName ? a.appendChild(r.html) : a.innerHTML = r.html), di(r), ai(r, me), !r.src || r.loadError || r.loaded) r.src && !r.loadError && (n = o.createEl("pswp__img", "img"), n.style.opacity = 1, n.src = r.src, ui(r, n), li(t, r, a, n, !0));
                        else {
                            if (r.loadComplete = function(i) {
                                    if (c) {
                                        if (e && e.index === t) {
                                            if (di(i, !0)) return i.loadComplete = i.img = null, ai(i, me), ze(i), void(e.index === p && s.updateCurrZoomItem());
                                            i.imageAppended ? !Kt && i.placeholder && (i.placeholder.style.display = "none", i.placeholder = null) : j.transform && (oe || Kt) ? ni.push({
                                                item: i,
                                                baseDiv: a,
                                                img: i.img,
                                                index: t,
                                                holder: e,
                                                clearPlaceholder: !0
                                            }) : li(t, i, a, i.img, oe || Kt, !0)
                                        }
                                        i.loadComplete = null, i.img = null, Ie("imageLoadComplete", t, i)
                                    }
                                }, o.features.transform) {
                                var d = "pswp__img pswp__img--placeholder";
                                d += r.msrc ? "" : " pswp__img--placeholder--blank";
                                var u = o.createEl(d, r.msrc ? "img" : "");
                                r.msrc && (u.src = r.msrc), ui(r, u), a.appendChild(u), r.placeholder = u
                            }
                            r.loading || ci(r), s.allowProgressiveImg() && (!Xt && j.transform ? ni.push({
                                item: r,
                                baseDiv: a,
                                img: r.img,
                                index: t,
                                holder: e
                            }) : li(t, r, a, r.img, !0, !0))
                        }
                        Xt || t !== p ? ze(r) : (ne = a.style, ti(r, n || r.img)), e.el.innerHTML = "", e.el.appendChild(a)
                    },
                    cleanSlide: function(e) {
                        e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
                    }
                }
            });
            var fi, hi = {},
                mi = function(e, t, i) {
                    var n = document.createEvent("CustomEvent"),
                        o = {
                            origEvent: e,
                            target: e.target,
                            releasePoint: t,
                            pointerType: i || "touch"
                        };
                    n.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(n)
                };
            Ce("Tap", {
                publicMethods: {
                    initTap: function() {
                        Ee("firstTouchStart", s.onTapStart), Ee("touchRelease", s.onTapRelease), Ee("destroy", function() {
                            hi = {}, fi = null
                        })
                    },
                    onTapStart: function(e) {
                        e.length > 1 && (clearTimeout(fi), fi = null)
                    },
                    onTapRelease: function(e, t) {
                        if (t && !Q && !Y && !Ge) {
                            var i = t;
                            if (fi && (clearTimeout(fi), fi = null, kt(i, hi))) return void Ie("doubleTap", i);
                            if ("mouse" === t.type) return void mi(e, t, "mouse");
                            var n = e.target.tagName.toUpperCase();
                            if ("BUTTON" === n || o.hasClass(e.target, "pswp__single-tap")) return void mi(e, t);
                            Le(hi, i), fi = setTimeout(function() {
                                mi(e, t), fi = null
                            }, 300)
                        }
                    }
                }
            });
            var gi;
            Ce("DesktopZoom", {
                publicMethods: {
                    initDesktopZoom: function() {
                        L || (O ? Ee("mouseUsed", function() {
                            s.setupDesktopZoom()
                        }) : s.setupDesktopZoom(!0))
                    },
                    setupDesktopZoom: function(t) {
                        gi = {};
                        var i = "wheel mousewheel DOMMouseScroll";
                        Ee("bindEvents", function() {
                            o.bind(e, i, s.handleMouseWheel)
                        }), Ee("unbindEvents", function() {
                            gi && o.unbind(e, i, s.handleMouseWheel)
                        }), s.mouseZoomedIn = !1;
                        var n, r = function() {
                                s.mouseZoomedIn && (o.removeClass(e, "pswp--zoomed-in"), s.mouseZoomedIn = !1), y < 1 ? o.addClass(e, "pswp--zoom-allowed") : o.removeClass(e, "pswp--zoom-allowed"), a()
                            },
                            a = function() {
                                n && (o.removeClass(e, "pswp--dragging"), n = !1)
                            };
                        Ee("resize", r), Ee("afterChange", r), Ee("pointerDown", function() {
                            s.mouseZoomedIn && (n = !0, o.addClass(e, "pswp--dragging"))
                        }), Ee("pointerUp", a), t || r()
                    },
                    handleMouseWheel: function(e) {
                        if (y <= s.currItem.fitRatio) return l.modal && (!l.closeOnScroll || Ge || Z ? e.preventDefault() : A && Math.abs(e.deltaY) > 2 && (u = !0, s.close())), !0;
                        if (e.stopPropagation(), gi.x = 0, "deltaX" in e) 1 === e.deltaMode ? (gi.x = 18 * e.deltaX, gi.y = 18 * e.deltaY) : (gi.x = e.deltaX, gi.y = e.deltaY);
                        else if ("wheelDelta" in e) e.wheelDeltaX && (gi.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? gi.y = -.16 * e.wheelDeltaY : gi.y = -.16 * e.wheelDelta;
                        else {
                            if (!("detail" in e)) return;
                            gi.y = e.detail
                        }
                        qe(y, !0);
                        var t = he.x - gi.x,
                            i = he.y - gi.y;
                        (l.modal || t <= ie.min.x && t >= ie.max.x && i <= ie.min.y && i >= ie.max.y) && e.preventDefault(), s.panTo(t, i)
                    },
                    toggleDesktopZoom: function(t) {
                        t = t || {
                            x: me.x / 2 + ve.x,
                            y: me.y / 2 + ve.y
                        };
                        var i = l.getDoubleTapZoom(!0, s.currItem),
                            n = y === i;
                        s.mouseZoomedIn = !n, s.zoomTo(n ? s.currItem.initialZoomLevel : i, t, 333), o[(n ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                    }
                }
            });
            var vi, yi, wi, bi, xi, ki, Ti, Ci, Si, _i, Ei, Ii, $i = {
                    history: !0,
                    galleryUID: 1
                },
                Ai = function() {
                    return Ei.hash.substring(1)
                },
                Mi = function() {
                    vi && clearTimeout(vi), wi && clearTimeout(wi)
                },
                Oi = function() {
                    var e = Ai(),
                        t = {};
                    if (e.length < 5) return t;
                    var i, n = e.split("&");
                    for (i = 0; i < n.length; i++)
                        if (n[i]) {
                            var o = n[i].split("=");
                            o.length < 2 || (t[o[0]] = o[1])
                        }
                    if (l.galleryPIDs) {
                        var s = t.pid;
                        for (t.pid = 0, i = 0; i < Qt.length; i++)
                            if (Qt[i].pid === s) {
                                t.pid = i;
                                break
                            }
                    } else t.pid = parseInt(t.pid, 10) - 1;
                    return t.pid < 0 && (t.pid = 0), t
                },
                zi = function() {
                    if (wi && clearTimeout(wi), Ge || Z) return void(wi = setTimeout(zi, 500));
                    bi ? clearTimeout(yi) : bi = !0;
                    var e = p + 1,
                        t = Gt(p);
                    t.hasOwnProperty("pid") && (e = t.pid);
                    var i = Ti + "&gid=" + l.galleryUID + "&pid=" + e;
                    Ci || Ei.hash.indexOf(i) === -1 && (_i = !0);
                    var n = Ei.href.split("#")[0] + "#" + i;
                    Ii ? "#" + i !== window.location.hash && history[Ci ? "replaceState" : "pushState"]("", document.title, n) : Ci ? Ei.replace(n) : Ei.hash = i, Ci = !0, yi = setTimeout(function() {
                        bi = !1
                    }, 60)
                };
            Ce("History", {
                publicMethods: {
                    initHistory: function() {
                        if (o.extend(l, $i, !0), l.history) {
                            Ei = window.location, _i = !1, Si = !1, Ci = !1, Ti = Ai(), Ii = "pushState" in history, Ti.indexOf("gid=") > -1 && (Ti = Ti.split("&gid=")[0], Ti = Ti.split("?gid=")[0]), Ee("afterChange", s.updateURL), Ee("unbindEvents", function() {
                                o.unbind(window, "hashchange", s.onHashChange)
                            });
                            var e = function() {
                                ki = !0, Si || (_i ? history.back() : Ti ? Ei.hash = Ti : Ii ? history.pushState("", document.title, Ei.pathname + Ei.search) : Ei.hash = ""), Mi()
                            };
                            Ee("unbindEvents", function() {
                                u && e()
                            }), Ee("destroy", function() {
                                ki || e()
                            }), Ee("firstUpdate", function() {
                                p = Oi().pid
                            });
                            var t = Ti.indexOf("pid=");
                            t > -1 && (Ti = Ti.substring(0, t), "&" === Ti.slice(-1) && (Ti = Ti.slice(0, -1))), setTimeout(function() {
                                c && o.bind(window, "hashchange", s.onHashChange)
                            }, 40)
                        }
                    },
                    onHashChange: function() {
                        return Ai() === Ti ? (Si = !0, void s.close()) : void(bi || (xi = !0, s.goTo(Oi().pid), xi = !1))
                    },
                    updateURL: function() {
                        Mi(), xi || (Ci ? vi = setTimeout(zi, 800) : zi())
                    }
                }
            }), o.extend(s, nt)
        };
        return e
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
    }(this, function() {
        "use strict";
        var e = function(e, t) {
            var i, n, o, s, r, a, l, c, d, u, p, f, h, m, g, v, y, w, b, x = this,
                k = !1,
                T = !0,
                C = !0,
                S = {
                    barsSize: {
                        top: 44,
                        bottom: "auto"
                    },
                    closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                    timeToIdle: 4e3,
                    timeToIdleOutside: 1e3,
                    loadingIndicatorDelay: 1e3,
                    addCaptionHTMLFn: function(e, t) {
                        return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
                    },
                    closeEl: !0,
                    captionEl: !0,
                    fullscreenEl: !0,
                    zoomEl: !0,
                    shareEl: !0,
                    counterEl: !0,
                    arrowEl: !0,
                    preloaderEl: !0,
                    tapToClose: !1,
                    tapToToggleControls: !0,
                    clickToCloseNonZoomable: !0,
                    shareButtons: [{
                        id: "facebook",
                        label: "Share on Facebook",
                        url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                    }, {
                        id: "twitter",
                        label: "Tweet",
                        url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                    }, {
                        id: "pinterest",
                        label: "Pin it",
                        url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                    }, {
                        id: "download",
                        label: "Download image",
                        url: "{{raw_image_url}}",
                        download: !0
                    }],
                    getImageURLForShare: function() {
                        return e.currItem.src || ""
                    },
                    getPageURLForShare: function() {
                        return window.location.href
                    },
                    getTextForShare: function() {
                        return e.currItem.title || ""
                    },
                    indexIndicatorSep: " / ",
                    fitControlsWidth: 1200
                },
                _ = function(e) {
                    if (v) return !0;
                    e = e || window.event, g.timeToIdle && g.mouseUsed && !d && D();
                    for (var i, n, o = e.target || e.srcElement, s = o.getAttribute("class") || "", r = 0; r < B.length; r++) i = B[r], i.onTap && s.indexOf("pswp__" + i.name) > -1 && (i.onTap(), n = !0);
                    if (n) {
                        e.stopPropagation && e.stopPropagation(), v = !0;
                        var a = t.features.isOldAndroid ? 600 : 30;
                        y = setTimeout(function() {
                            v = !1
                        }, a)
                    }
                },
                E = function() {
                    return !e.likelyTouchDevice || g.mouseUsed || screen.width > g.fitControlsWidth
                },
                I = function(e, i, n) {
                    t[(n ? "add" : "remove") + "Class"](e, "pswp__" + i)
                },
                $ = function() {
                    var e = 1 === g.getNumItemsFn();
                    e !== m && (I(n, "ui--one-slide", e), m = e)
                },
                A = function() {
                    I(l, "share-modal--hidden", C)
                },
                M = function() {
                    return C = !C, C ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function() {
                        C && A()
                    }, 300)) : (A(), setTimeout(function() {
                        C || t.addClass(l, "pswp__share-modal--fade-in")
                    }, 30)), C || z(), !1
                },
                O = function(t) {
                    t = t || window.event;
                    var i = t.target || t.srcElement;
                    return e.shout("shareLinkClick", t, i), !!i.href && (!!i.hasAttribute("download") || (window.open(i.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), C || M(), !1))
                },
                z = function() {
                    for (var e, t, i, n, o, s = "", r = 0; r < g.shareButtons.length; r++) e = g.shareButtons[r], i = g.getImageURLForShare(e), n = g.getPageURLForShare(e), o = g.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(n)).replace("{{image_url}}", encodeURIComponent(i)).replace("{{raw_image_url}}", i).replace("{{text}}", encodeURIComponent(o)), s += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", g.parseShareButtonOut && (s = g.parseShareButtonOut(e, s));
                    l.children[0].innerHTML = s, l.children[0].onclick = O
                },
                H = function(e) {
                    for (var i = 0; i < g.closeElClasses.length; i++)
                        if (t.hasClass(e, "pswp__" + g.closeElClasses[i])) return !0
                },
                P = 0,
                D = function() {
                    clearTimeout(b), P = 0, d && x.setIdle(!1)
                },
                L = function(e) {
                    e = e ? e : window.event;
                    var t = e.relatedTarget || e.toElement;
                    t && "HTML" !== t.nodeName || (clearTimeout(b), b = setTimeout(function() {
                        x.setIdle(!0)
                    }, g.timeToIdleOutside))
                },
                F = function() {
                    g.fullscreenEl && !t.features.isOldAndroid && (i || (i = x.getFullscreenAPI()), i ? (t.bind(document, i.eventK, x.updateFullscreen), x.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs"))
                },
                j = function() {
                    g.preloaderEl && (N(!0), u("beforeChange", function() {
                        clearTimeout(h), h = setTimeout(function() {
                            e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && N(!1) : N(!0)
                        }, g.loadingIndicatorDelay)
                    }), u("imageLoadComplete", function(t, i) {
                        e.currItem === i && N(!0)
                    }))
                },
                N = function(e) {
                    f !== e && (I(p, "preloader--active", !e), f = e)
                },
                R = function(e) {
                    var i = e.vGap;
                    if (E()) {
                        var r = g.barsSize;
                        if (g.captionEl && "auto" === r.bottom)
                            if (s || (s = t.createEl("pswp__caption pswp__caption--fake"), s.appendChild(t.createEl("pswp__caption__center")), n.insertBefore(s, o), t.addClass(n, "pswp__ui--fit")), g.addCaptionHTMLFn(e, s, !0)) {
                                var a = s.clientHeight;
                                i.bottom = parseInt(a, 10) || 44
                            } else i.bottom = r.top;
                        else i.bottom = "auto" === r.bottom ? 0 : r.bottom;
                        i.top = r.top
                    } else i.top = i.bottom = 0
                },
                W = function() {
                    g.timeToIdle && u("mouseUsed", function() {
                        t.bind(document, "mousemove", D), t.bind(document, "mouseout", L), w = setInterval(function() {
                            P++, 2 === P && x.setIdle(!0)
                        }, g.timeToIdle / 2)
                    })
                },
                q = function() {
                    u("onVerticalDrag", function(e) {
                        T && e < .95 ? x.hideControls() : !T && e >= .95 && x.showControls()
                    });
                    var e;
                    u("onPinchClose", function(t) {
                        T && t < .9 ? (x.hideControls(), e = !0) : e && !T && t > .9 && x.showControls()
                    }), u("zoomGestureEnded", function() {
                        e = !1, e && !T && x.showControls()
                    })
                },
                B = [{
                    name: "caption",
                    option: "captionEl",
                    onInit: function(e) {
                        o = e
                    }
                }, {
                    name: "share-modal",
                    option: "shareEl",
                    onInit: function(e) {
                        l = e
                    },
                    onTap: function() {
                        M()
                    }
                }, {
                    name: "button--share",
                    option: "shareEl",
                    onInit: function(e) {
                        a = e
                    },
                    onTap: function() {
                        M()
                    }
                }, {
                    name: "button--zoom",
                    option: "zoomEl",
                    onTap: e.toggleDesktopZoom
                }, {
                    name: "counter",
                    option: "counterEl",
                    onInit: function(e) {
                        r = e
                    }
                }, {
                    name: "button--close",
                    option: "closeEl",
                    onTap: e.close
                }, {
                    name: "button--arrow--left",
                    option: "arrowEl",
                    onTap: e.prev
                }, {
                    name: "button--arrow--right",
                    option: "arrowEl",
                    onTap: e.next
                }, {
                    name: "button--fs",
                    option: "fullscreenEl",
                    onTap: function() {
                        i.isFullscreen() ? i.exit() : i.enter()
                    }
                }, {
                    name: "preloader",
                    option: "preloaderEl",
                    onInit: function(e) {
                        p = e
                    }
                }],
                U = function() {
                    var e, i, o, s = function(n) {
                        if (n)
                            for (var s = n.length, r = 0; r < s; r++) {
                                e = n[r], i = e.className;
                                for (var a = 0; a < B.length; a++) o = B[a], i.indexOf("pswp__" + o.name) > -1 && (g[o.option] ? (t.removeClass(e, "pswp__element--disabled"), o.onInit && o.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
                            }
                    };
                    s(n.children);
                    var r = t.getChildByClass(n, "pswp__top-bar");
                    r && s(r.children)
                };
            x.init = function() {
                t.extend(e.options, S, !0), g = e.options, n = t.getChildByClass(e.scrollWrap, "pswp__ui"), u = e.listen, q(), u("beforeChange", x.update), u("doubleTap", function(t) {
                    var i = e.currItem.initialZoomLevel;
                    e.getZoomLevel() !== i ? e.zoomTo(i, t, 333) : e.zoomTo(g.getDoubleTapZoom(!1, e.currItem), t, 333)
                }), u("preventDragEvent", function(e, t, i) {
                    var n = e.target || e.srcElement;
                    n && n.getAttribute("class") && e.type.indexOf("mouse") > -1 && (n.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(n.tagName)) && (i.prevent = !1)
                }), u("bindEvents", function() {
                    t.bind(n, "pswpTap click", _), t.bind(e.scrollWrap, "pswpTap", x.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", x.onMouseOver)
                }), u("unbindEvents", function() {
                    C || M(), w && clearInterval(w), t.unbind(document, "mouseout", L), t.unbind(document, "mousemove", D), t.unbind(n, "pswpTap click", _), t.unbind(e.scrollWrap, "pswpTap", x.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", x.onMouseOver), i && (t.unbind(document, i.eventK, x.updateFullscreen), i.isFullscreen() && (g.hideAnimationDuration = 0, i.exit()), i = null)
                }), u("destroy", function() {
                    g.captionEl && (s && n.removeChild(s), t.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), t.removeClass(n, "pswp__ui--over-close"), t.addClass(n, "pswp__ui--hidden"), x.setIdle(!1)
                }), g.showAnimationDuration || t.removeClass(n, "pswp__ui--hidden"), u("initialZoomIn", function() {
                    g.showAnimationDuration && t.removeClass(n, "pswp__ui--hidden")
                }), u("initialZoomOut", function() {
                    t.addClass(n, "pswp__ui--hidden")
                }), u("parseVerticalMargin", R), U(), g.shareEl && a && l && (C = !0), $(), W(), F(), j()
            }, x.setIdle = function(e) {
                d = e, I(n, "ui--idle", e)
            }, x.update = function() {
                T && e.currItem ? (x.updateIndexIndicator(), g.captionEl && (g.addCaptionHTMLFn(e.currItem, o), I(o, "caption--empty", !e.currItem.title)), k = !0) : k = !1, C || M(), $()
            }, x.updateFullscreen = function(n) {
                n && setTimeout(function() {
                    e.setScrollOffset(0, t.getScrollY())
                }, 50), t[(i.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
            }, x.updateIndexIndicator = function() {
                g.counterEl && (r.innerHTML = e.getCurrentIndex() + 1 + g.indexIndicatorSep + g.getNumItemsFn())
            }, x.onGlobalTap = function(i) {
                i = i || window.event;
                var n = i.target || i.srcElement;
                if (!v)
                    if (i.detail && "mouse" === i.detail.pointerType) {
                        if (H(n)) return void e.close();
                        t.hasClass(n, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? g.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(i.detail.releasePoint))
                    } else if (g.tapToToggleControls && (T ? x.hideControls() : x.showControls()), g.tapToClose && (t.hasClass(n, "pswp__img") || H(n))) return void e.close()
            }, x.onMouseOver = function(e) {
                e = e || window.event;
                var t = e.target || e.srcElement;
                I(n, "ui--over-close", H(t))
            }, x.hideControls = function() {
                t.addClass(n, "pswp__ui--hidden"), T = !1
            }, x.showControls = function() {
                T = !0, k || x.update(), t.removeClass(n, "pswp__ui--hidden")
            }, x.supportsFullscreen = function() {
                var e = document;
                return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
            }, x.getFullscreenAPI = function() {
                var t, i = document.documentElement,
                    n = "fullscreenchange";
                return i.requestFullscreen ? t = {
                    enterK: "requestFullscreen",
                    exitK: "exitFullscreen",
                    elementK: "fullscreenElement",
                    eventK: n
                } : i.mozRequestFullScreen ? t = {
                    enterK: "mozRequestFullScreen",
                    exitK: "mozCancelFullScreen",
                    elementK: "mozFullScreenElement",
                    eventK: "moz" + n
                } : i.webkitRequestFullscreen ? t = {
                    enterK: "webkitRequestFullscreen",
                    exitK: "webkitExitFullscreen",
                    elementK: "webkitFullscreenElement",
                    eventK: "webkit" + n
                } : i.msRequestFullscreen && (t = {
                    enterK: "msRequestFullscreen",
                    exitK: "msExitFullscreen",
                    elementK: "msFullscreenElement",
                    eventK: "MSFullscreenChange"
                }), t && (t.enter = function() {
                    return c = g.closeOnScroll, g.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                }, t.exit = function() {
                    return g.closeOnScroll = c, document[this.exitK]()
                }, t.isFullscreen = function() {
                    return document[this.elementK]
                }), t
            }
        };
        return e
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
    }("undefined" != typeof window ? window : this, function() {
        function e() {}
        var t = e.prototype;
        return t.on = function(e, t) {
            if (e && t) {
                var i = this._events = this._events || {},
                    n = i[e] = i[e] || [];
                return n.indexOf(t) == -1 && n.push(t), this
            }
        }, t.once = function(e, t) {
            if (e && t) {
                this.on(e, t);
                var i = this._onceEvents = this._onceEvents || {},
                    n = i[e] = i[e] || {};
                return n[t] = !0, this
            }
        }, t.off = function(e, t) {
            var i = this._events && this._events[e];
            if (i && i.length) {
                var n = i.indexOf(t);
                return n != -1 && i.splice(n, 1), this
            }
        }, t.emitEvent = function(e, t) {
            var i = this._events && this._events[e];
            if (i && i.length) {
                var n = 0,
                    o = i[n];
                t = t || [];
                for (var s = this._onceEvents && this._onceEvents[e]; o;) {
                    var r = s && s[o];
                    r && (this.off(e, o), delete s[o]), o.apply(this, t), n += r ? 0 : 1, o = i[n]
                }
                return this
            }
        }, e
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
            return t(e, i)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
    }(window, function(e, t) {
        function i(e, t) {
            for (var i in t) e[i] = t[i];
            return e
        }

        function n(e) {
            var t = [];
            if (Array.isArray(e)) t = e;
            else if ("number" == typeof e.length)
                for (var i = 0; i < e.length; i++) t.push(e[i]);
            else t.push(e);
            return t
        }

        function o(e, t, s) {
            return this instanceof o ? ("string" == typeof e && (e = document.querySelectorAll(e)), this.elements = n(e), this.options = i({}, this.options), "function" == typeof t ? s = t : i(this.options, t), s && this.on("always", s), this.getImages(), a && (this.jqDeferred = new a.Deferred), void setTimeout(function() {
                this.check()
            }.bind(this))) : new o(e, t, s)
        }

        function s(e) {
            this.img = e
        }

        function r(e, t) {
            this.url = e, this.element = t, this.img = new Image
        }
        var a = e.jQuery,
            l = e.console;
        o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, o.prototype.addElementImages = function(e) {
            "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
            var t = e.nodeType;
            if (t && c[t]) {
                for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                    var o = i[n];
                    this.addImage(o)
                }
                if ("string" == typeof this.options.background) {
                    var s = e.querySelectorAll(this.options.background);
                    for (n = 0; n < s.length; n++) {
                        var r = s[n];
                        this.addElementBackgroundImages(r)
                    }
                }
            }
        };
        var c = {
            1: !0,
            9: !0,
            11: !0
        };
        return o.prototype.addElementBackgroundImages = function(e) {
            var t = getComputedStyle(e);
            if (t)
                for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                    var o = n && n[2];
                    o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
                }
        }, o.prototype.addImage = function(e) {
            var t = new s(e);
            this.images.push(t)
        }, o.prototype.addBackground = function(e, t) {
            var i = new r(e, t);
            this.images.push(i)
        }, o.prototype.check = function() {
            function e(e, i, n) {
                setTimeout(function() {
                    t.progress(e, i, n)
                })
            }
            var t = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
                t.once("progress", e), t.check()
            }) : void this.complete()
        }, o.prototype.progress = function(e, t, i) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + i, e, t)
        }, o.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var t = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[t](this)
            }
        }, s.prototype = Object.create(t.prototype), s.prototype.check = function() {
            var e = this.getIsImageComplete();
            return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
        }, s.prototype.getIsImageComplete = function() {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, s.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
        }, s.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, s.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, s.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, s.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, r.prototype = Object.create(s.prototype), r.prototype.check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
            var e = this.getIsImageComplete();
            e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
                this.unbindEvents())
        }, r.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, r.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
        }, o.makeJQueryPlugin = function(t) {
            t = t || e.jQuery, t && (a = t, a.fn.imagesLoaded = function(e, t) {
                var i = new o(this, e, t);
                return i.jqDeferred.promise(a(this))
            })
        }, o.makeJQueryPlugin(), o
    }),
    function(e, t, i) {
        "use strict";
        var n = e(t),
            o = t.document,
            s = e(o),
            r = function() {
                for (var e, t = 3, i = o.createElement("div"), n = i.getElementsByTagName("i"); i.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->", n[0];);
                return t > 4 ? t : e
            }(),
            a = function() {
                var e = t.pageXOffset !== i ? t.pageXOffset : "CSS1Compat" == o.compatMode ? t.document.documentElement.scrollLeft : t.document.body.scrollLeft,
                    n = t.pageYOffset !== i ? t.pageYOffset : "CSS1Compat" == o.compatMode ? t.document.documentElement.scrollTop : t.document.body.scrollTop;
                "undefined" == typeof a.x && (a.x = e, a.y = n), "undefined" == typeof a.distanceX ? (a.distanceX = e, a.distanceY = n) : (a.distanceX = e - a.x, a.distanceY = n - a.y);
                var s = a.x - e,
                    r = a.y - n;
                a.direction = s < 0 ? "right" : s > 0 ? "left" : r <= 0 ? "down" : r > 0 ? "up" : "first", a.x = e, a.y = n
            };
        n.on("scroll", a), e.fn.style = function(i) {
            if (!i) return null;
            var n, s = e(this),
                r = s.clone().css("display", "none");
            r.find("input:radio").attr("name", "copy-" + Math.floor(100 * Math.random() + 1)), s.after(r);
            var a = function(e, i) {
                var n;
                return e.currentStyle ? n = e.currentStyle[i.replace(/-\w/g, function(e) {
                    return e.toUpperCase().replace("-", "")
                })] : t.getComputedStyle && (n = o.defaultView.getComputedStyle(e, null).getPropertyValue(i)), n = /margin/g.test(i) ? parseInt(n) === s[0].offsetLeft ? n : "auto" : n
            };
            return "string" == typeof i ? n = a(r[0], i) : (n = {}, e.each(i, function(e, t) {
                n[t] = a(r[0], t)
            })), r.remove(), n || null
        }, e.fn.extend({
            hcSticky: function(o) {
                return 0 == this.length ? this : (this.pluginOptions("hcSticky", {
                    top: 0,
                    bottom: 0,
                    bottomEnd: 0,
                    innerTop: 0,
                    innerSticker: null,
                    className: "sticky",
                    wrapperClassName: "wrapper-sticky",
                    stickTo: null,
                    responsive: !0,
                    followScroll: !0,
                    offResolutions: null,
                    onStart: e.noop,
                    onStop: e.noop,
                    on: !0,
                    fn: null
                }, o || {}, {
                    reinit: function() {
                        e(this).hcSticky()
                    },
                    stop: function() {
                        e(this).pluginOptions("hcSticky", {
                            on: !1
                        }).each(function() {
                            var t = e(this),
                                i = t.pluginOptions("hcSticky"),
                                n = t.parent("." + i.wrapperClassName),
                                o = t.offset().top - n.offset().top;
                            t.css({
                                position: "absolute",
                                top: o,
                                bottom: "auto",
                                left: "auto",
                                right: "auto"
                            }).removeClass(i.className)
                        })
                    },
                    off: function() {
                        e(this).pluginOptions("hcSticky", {
                            on: !1
                        }).each(function() {
                            var t = e(this),
                                i = t.pluginOptions("hcSticky"),
                                n = t.parent("." + i.wrapperClassName);
                            t.css({
                                position: "relative",
                                top: "auto",
                                bottom: "auto",
                                left: "auto",
                                right: "auto"
                            }).removeClass(i.className), n.css("height", "auto")
                        })
                    },
                    on: function() {
                        e(this).each(function() {
                            e(this).pluginOptions("hcSticky", {
                                on: !0,
                                remember: {
                                    offsetTop: n.scrollTop()
                                }
                            }).hcSticky()
                        })
                    },
                    destroy: function() {
                        var t = e(this),
                            i = t.pluginOptions("hcSticky"),
                            o = t.parent("." + i.wrapperClassName);
                        t.removeData("hcStickyInit").css({
                            position: o.css("position"),
                            top: o.css("top"),
                            bottom: o.css("bottom"),
                            left: o.css("left"),
                            right: o.css("right")
                        }).removeClass(i.className), n.off("resize", i.fn.resize).off("scroll", i.fn.scroll), t.unwrap()
                    }
                }), o && "undefined" != typeof o.on && (o.on ? this.hcSticky("on") : this.hcSticky("off")), "string" == typeof o ? this : this.each(function() {
                    var o = e(this),
                        l = o.pluginOptions("hcSticky"),
                        c = function() {
                            var e = o.parent("." + l.wrapperClassName);
                            return e.length > 0 && (e.css({
                                height: o.outerHeight(!0),
                                width: function() {
                                    var t = e.style("width");
                                    return t.indexOf("%") >= 0 || "auto" == t ? ("border-box" == o.css("box-sizing") || "border-box" == o.css("-moz-box-sizing") ? o.css("width", e.width()) : o.css("width", e.width() - parseInt(o.css("padding-left") - parseInt(o.css("padding-right")))), t) : o.outerWidth(!0)
                                }()
                            }), e)
                        }() || function() {
                            var t = o.style(["width", "margin-left", "left", "right", "top", "bottom", "float", "display"]),
                                i = o.css("display"),
                                n = e("<div>", {
                                    "class": l.wrapperClassName
                                }).css({
                                    display: i,
                                    height: o.outerHeight(!0),
                                    width: function() {
                                        return t.width.indexOf("%") >= 0 || "auto" == t.width && "inline-block" != i && "inline" != i ? (o.css("width", parseFloat(o.css("width"))), t.width) : "auto" != t.width || "inline-block" != i && "inline" != i ? "auto" == t["margin-left"] ? o.outerWidth() : o.outerWidth(!0) : o.width()
                                    }(),
                                    margin: t["margin-left"] ? "auto" : null,
                                    position: function() {
                                        var e = o.css("position");
                                        return "static" == e ? "relative" : e
                                    }(),
                                    "float": t["float"] || null,
                                    left: t.left,
                                    right: t.right,
                                    top: t.top,
                                    bottom: t.bottom,
                                    "vertical-align": "top"
                                });
                            return o.wrap(n), 7 === r && 0 === e("head").find("style#hcsticky-iefix").length && e('<style id="hcsticky-iefix">.' + l.wrapperClassName + " {zoom: 1;}</style>").appendTo("head"), o.parent()
                        }();
                    if (!o.data("hcStickyInit")) {
                        o.data("hcStickyInit", !0);
                        var d = !(!l.stickTo || !("document" == l.stickTo || l.stickTo.nodeType && 9 == l.stickTo.nodeType || "object" == typeof l.stickTo && l.stickTo instanceof("undefined" != typeof HTMLDocument ? HTMLDocument : Document))),
                            u = l.stickTo ? d ? s : "string" == typeof l.stickTo ? e(l.stickTo) : l.stickTo : c.parent();
                        o.css({
                            top: "auto",
                            bottom: "auto",
                            left: "auto",
                            right: "auto"
                        }), n.load(function() {
                            o.outerHeight(!0) > u.height() && (c.css("height", o.outerHeight(!0)), o.hcSticky("reinit"))
                        });
                        var p = function(e) {
                                o.hasClass(l.className) || (e = e || {}, o.css({
                                    position: "fixed",
                                    top: e.top || 0,
                                    left: e.left || c.offset().left
                                }).addClass(l.className), l.onStart.apply(o[0]), c.addClass("sticky-active"))
                            },
                            f = function(e) {
                                e = e || {}, e.position = e.position || "absolute", e.top = e.top || 0, e.left = e.left || 0, "fixed" != o.css("position") && parseInt(o.css("top")) == e.top || (o.css({
                                    position: e.position,
                                    top: e.top,
                                    left: e.left
                                }).removeClass(l.className), l.onStop.apply(o[0]), c.removeClass("sticky-active"))
                            },
                            h = function(t) {
                                if (l.on && o.is(":visible")) {
                                    if (o.outerHeight(!0) >= u.height()) return void f();
                                    var i, s = l.innerSticker ? e(l.innerSticker).position().top : l.innerTop ? l.innerTop : 0,
                                        r = c.offset().top,
                                        h = u.height() - l.bottomEnd + (d ? 0 : r),
                                        m = c.offset().top - l.top + s,
                                        g = o.outerHeight(!0) + l.bottom,
                                        v = n.height(),
                                        y = n.scrollTop(),
                                        w = o.offset().top,
                                        b = w - y;
                                    if ("undefined" != typeof l.remember && l.remember) {
                                        var x = w - l.top - s;
                                        return void(g - s > v && l.followScroll ? x < y && y + v <= x + o.height() && (l.remember = !1) : l.remember.offsetTop > x ? y <= x && (p({
                                            top: l.top - s
                                        }), l.remember = !1) : y >= x && (p({
                                            top: l.top - s
                                        }), l.remember = !1))
                                    }
                                    y > m ? h + l.bottom - (l.followScroll && v < g ? 0 : l.top) <= y + g - s - (g - s > v - (m - s) && l.followScroll && (i = g - v - s) > 0 ? i : 0) ? f({
                                        top: h - g + l.bottom - r
                                    }) : g - s > v && l.followScroll ? b + g <= v ? "down" == a.direction ? p({
                                        top: v - g
                                    }) : b < 0 && "fixed" == o.css("position") && f({
                                        top: w - (m + l.top - s) - a.distanceY
                                    }) : "up" == a.direction && w >= y + l.top - s ? p({
                                        top: l.top - s
                                    }) : "down" == a.direction && w + g > v && "fixed" == o.css("position") && f({
                                        top: w - (m + l.top - s) - a.distanceY
                                    }) : p({
                                        top: l.top - s
                                    }) : f()
                                }
                            },
                            m = !1,
                            g = !1,
                            v = function() {
                                if (w(), y(), l.on) {
                                    var e = function() {
                                        "fixed" == o.css("position") ? o.css("left", c.offset().left) : o.css("left", 0)
                                    };
                                    if (l.responsive) {
                                        g || (g = o.clone().attr("style", "").css({
                                            visibility: "hidden",
                                            height: 0,
                                            overflow: "hidden",
                                            paddingTop: 0,
                                            paddingBottom: 0,
                                            marginTop: 0,
                                            marginBottom: 0
                                        }), c.after(g));
                                        var t = c.style("width"),
                                            i = g.style("width");
                                        "auto" == i && "auto" != t && (i = parseInt(o.css("width"))), i != t && c.width(i), m && clearTimeout(m), m = setTimeout(function() {
                                            m = !1, g.remove(), g = !1
                                        }, 250)
                                    }
                                    if (e(), o.outerWidth(!0) != c.width()) {
                                        var n = "border-box" == o.css("box-sizing") || "border-box" == o.css("-moz-box-sizing") ? c.width() : c.width() - parseInt(o.css("padding-left")) - parseInt(o.css("padding-right"));
                                        n = n - parseInt(o.css("margin-left")) - parseInt(o.css("margin-right")), o.css("width", n)
                                    }
                                }
                            };
                        o.pluginOptions("hcSticky", {
                            fn: {
                                scroll: h,
                                resize: v
                            }
                        });
                        var y = function() {
                            if (l.offResolutions) {
                                e.isArray(l.offResolutions) || (l.offResolutions = [l.offResolutions]);
                                var t = !0;
                                e.each(l.offResolutions, function(e, i) {
                                    i < 0 ? n.width() < i * -1 && (t = !1, o.hcSticky("off")) : n.width() > i && (t = !1, o.hcSticky("off"))
                                }), t && !l.on && o.hcSticky("on")
                            }
                        };
                        y(), n.on("resize", v);
                        var w = function() {
                            var o = !1;
                            e._data(t, "events").scroll != i && e.each(e._data(t, "events").scroll, function(e, t) {
                                t.handler == l.fn.scroll && (o = !0)
                            }), o || (l.fn.scroll(!0), n.on("scroll", l.fn.scroll))
                        };
                        w()
                    }
                }))
            }
        })
    }(jQuery, this),
    function(e, t) {
        "use strict";
        e.fn.extend({
            pluginOptions: function(i, n, o, s) {
                return this.data(i) || this.data(i, {}), i && "undefined" == typeof n ? this.data(i).options : (o = o || n || {}, "object" == typeof o || o === t ? this.each(function() {
                    var t = e(this);
                    t.data(i).options ? t.data(i, e.extend(t.data(i), {
                        options: e.extend(t.data(i).options, o || {})
                    })) : (t.data(i, {
                        options: e.extend(n, o || {})
                    }), s && (t.data(i).commands = s))
                }) : "string" == typeof o ? this.each(function() {
                    e(this).data(i).commands[o].call(this)
                }) : this)
            }
        })
    }(jQuery),
    function(e, t) {
        var n = {
                small: 0,
                mediumSmall: 440,
                medium: 640,
                large: 1024,
                xlarge: 1200,
                xxlarge: 1400,
                xxxlarge: 1600
            },
            o = function() {
                var e = {};
                return function(t, i, n) {
                    n || (n = 1e3 * Math.random()), e[n] && clearTimeout(e[n]), e[n] = setTimeout(t, i)
                }
            }();
        e(t).ready(function() {
            u.foundation(), u.pushy(), u.instafeed.init(), u.matchHeights(), u.photoswipe.init(), u.sticky.init(), u.selectric.init(), u.selectric.pageNav.init(), s.accordion.init(), s.banner.init(), s.header.init(), s.progress.init(), s.overlay.init(), s.loadMore.init(), s.video.init(), a.stockists.init(), l.footnote.init(), l.progressPosition.init(), l.publishIssuePosition.init(), l.paywall.init(), c.init(), d.init(), r.bundled.init(), r.cart.init(), r.checkout.init(), r.notifications.init(), r.wholesale.init()
        }), e(window).resize(function() {
            o(function() {
                u.instafeed.resize(), u.sticky.resize(), s.header.init(), s.banner.header(), c.storyInit(), l.publishIssuePosition.init(), l.footnote.init()
            }, 300, "init")
        });
        var s = {
                accordion: {
                    init: function() {
                        this._open()
                    },
                    _open: function() {
                        var t = this;
                        e(".c-accordion__title").on("click", function(i) {
                            i.preventDefault(), e(this).next().is(":hidden") ? (t._close(), e(this).addClass("c-accordion--active"), e(this).next().slideDown()) : (e(this).removeClass("c-accordion--active"), e(this).next().slideUp())
                        })
                    },
                    _close: function() {
                        e(".c-accordion__title").removeClass("c-accordion--active"), e(".c-accordion__content").slideUp()
                    }
                },
                banner: {
                    init: function() {
                        this.get_parallax_banners(), this.header()
                    },
                    get_parallax_banners: function() {
                        Foundation.MediaQuery.atLeast("xlarge") && e(".m-advert--parallax").each(function(t) {
                            var i = e(this).find(".m-advert__image").not(".show-for-small-only"),
                                n = i.find("img")[0].dataset.noscript;
                            i.find("img")[0].height, i.find("img")[0].width;
                            i.attr("data-image", n), i.find("img").remove(), e(".m-advert").imagesLoaded(function() {
                                i.imageScroll({
                                    touch: !1,
                                    holderMinHeight: 480,
                                    holderMaxHeight: 480
                                })
                            })
                        })
                    },
                    header: function() {
                        if (e(".m-advert--fixed").length > 0) {
                            var t = e(".m-advert--fixed"),
                                i = t.outerHeight(!0);
                            t.next(".m-advert__body-container").css("margin-top", i)
                        }
                    }
                },
                header: {
                    init: function() {
                        this.story_fixed.init(), this.global_fixed.init()
                    },
                    story_fixed: {
                        init: function() {
                            var t = this;
                            Foundation.MediaQuery.atLeast("xlarge") && e(".l-header--fixed").length > 0 ? t.onScroll() : (e(window).off("scroll", t.scrollHandler), e(".l-header--fixed").removeClass("l-header--fixed--active"))
                        },
                        scrollHandler: function() {
                            var t = 0,
                                i = e(".l-header--fixed");
                            e(window).scrollTop() > t ? i.addClass("l-header--fixed--active") : i.removeClass("l-header--fixed--active")
                        },
                        onScroll: function() {
                            var t = this;
                            e(window).on("scroll", t.scrollHandler)
                        },
                        showHeader: function() {
                            $headerFixed = e(".l-header--fixed"), $headerFixed.addClass("l-header--fixed--active")
                        },
                        hideHeader: function() {
                            $headerFixed = e(".l-header--fixed"), $headerFixed.removeClass("l-header--fixed--active")
                        }
                    },
                    global_fixed: {
                        init: function() {
                            var t = this;
                            if ($elOffset = e(".l-header"), offsetTop = $elOffset.offset().top, offsetBottom = offsetTop + $elOffset.outerHeight(!0), !e(".single-post").length > 0 && !e(".home.page").length > 0) t.onScroll(offsetBottom);
                            else if (e(".home.page").length > 0) {
                                if (e("body > .m-advert").length > 0) {
                                    var i;
                                    e("body > .m-advert").each(function() {
                                        i += e(this).outerHeight(!0)
                                    }), i += e(".l-header").outerHeight(!0)
                                }
                                if (e("body").scrollTop() >= i || "undefined" == typeof i) e(".l-header").css("position", "fixed"), t.onScroll(offsetBottom);
                                else {
                                    e(".l-header").css("position", "absolute");
                                    var n = 0;
                                    e(window).on("scroll", function() {
                                        e(".m-advert__body-container").offset().top <= e(window).scrollTop() ? (e(".l-header").css("position", "fixed"), 0 == n && (t.onScroll(575), n = 1)) : e(".l-header").css("position", "absolute")
                                    })
                                }
                            } else !e(".single-post").length > 0 && (e(window).off("scroll", t.scrollHandler), e(".l-header").removeClass("l-header--sticky"))
                        },
                        scrollHandler: function(t) {
                            var i = e(".l-header"),
                                n = e(window).scrollTop();
                            e(window).scrollTop() > t.data.offset ? i.addClass("l-header--sticky") : i.removeClass("l-header--sticky"), n >= t.data.lastScroll ? i.removeClass("l-header--sticky--active") : i.addClass("l-header--sticky--active"), t.data.lastScroll = n
                        },
                        onScroll: function(t) {
                            var i = this;
                            e(window).on("scroll", {
                                offset: t,
                                lastScroll: 0
                            }, i.scrollHandler)
                        },
                        showHeader: function() {
                            var t = e(".l-header");
                            t.addClass("l-header--sticky--active")
                        },
                        hideHeader: function() {
                            var t = e(".l-header");
                            t.removeClass("l-header--sticky--active")
                        }
                    }
                },
                loadMore: {
                    init: function() {
                        e(".js-repeater-load-more").on("click", function(t) {
                            t.preventDefault();
                            var i = e(this),
                                n = i.closest(".module"),
                                o = n.find(".item-container").filter(":hidden:lt(6)");
                            o.show(), 0 == n.find(".item-container").filter(":hidden").length && i.remove()
                        })
                    }
                },
                matchScroll: {
                    init: function() {
                        e(".js-matchScroll-right").matchScroll({
                            target: e(".js-matchScroll-left"),
                            offset: 50
                        })
                    }
                },
                progress: {
                    init: function() {
                        var t = this;
                        e(".c-progress").length > 0 && Foundation.MediaQuery.atLeast("xlarge") && t.scroll(t.height())
                    },
                    height: function() {
                        var i = e(t).height() - e(window).height();
                        return i
                    },
                    scroll: function(t) {
                        var i = this,
                            n = function() {
                                var n = e(window).scrollTop() / t;
                                i.update(n.toFixed(3))
                            };
                        e(window).scroll(n)
                    },
                    update: function(t) {
                        t >= 1 ? e(".c-progress__line").css({
                            width: "100%"
                        }) : e(".c-progress__line").css({
                            width: 100 * t + "%"
                        })
                    }
                },
                overlay: {
                    init: function() {
                        this.trigger()
                    },
                    trigger: function() {
                        var i = this;
                        e(".js-overlay-trigger").on("click", function() {
                            e(".c-overlay").hasClass("c-overlay--active") ? i.close() : (i.open(), i.focus())
                        }), e(t).keyup(function(t) {
                            27 == t.keyCode && e(".c-overlay").hasClass("c-overlay--active") && i.close()
                        })
                    },
                    open: function() {
                        var t = e(".c-overlay");
                        t.fadeIn(), t.addClass("c-overlay--active")
                    },
                    close: function() {
                        var t = e(".c-overlay");
                        t.hide(), t.removeAttr("style"), t.removeClass("c-overlay--active")
                    },
                    focus: function() {
                        e('.c-overlay input[type="text"]').select()
                    }
                },
                video: {
                    init: function() {
                        this.vimeo.autoplay(), this.vimeo.play(), this.embed.play(), this["default"]()
                    },
                    vimeo: {
                        iframe: e(".m-video--vimeo").length > 0 && e(".m-video--vimeo iframe")[0],
                        player: !1,
                        autoplay: function() {
                            var e = this;
                            e.iframe && (e.player = new Vimeo.Player(s.video.vimeo.iframe), e.player.setVolume(0))
                        },
                        play: function() {
                            var t = this;
                            e(".m-video--vimeo .js-play").on("click", function() {
                                s.video.remove_overlay(e(this)), t.player.setCurrentTime(0).then(function() {
                                    t.player.setVolume(1)
                                })
                            })
                        }
                    },
                    embed: {
                        play: function() {
                            e(".m-video--embed .js-play").on("click", function() {
                                var t = e(this).parents(".m-video--embed").find("iframe");
                                t[0].src += "&autoplay=1"
                            })
                        }
                    },
                    remove_overlay: function(e) {
                        e.parents(".m-video__content").fadeOut()
                    },
                    "default": function() {
                        var t = this;
                        e(".js-play").on("click", function() {
                            t.remove_overlay(e(this))
                        })
                    }
                }
            },
            r = {
                bundled: {
                    init: function() {
                        this.syncCheckbox()
                    },
                    syncCheckbox: function() {
                        e(".bundled_product_checkbox").change(function() {
                            e(this).parent().prev("input").prop("checked", this.checked)
                        })
                    }
                },
                checkout: {
                    init: function() {
                        this.updateCheckout()
                    },
                    updateCheckout: function() {
                        e(t).on("wc_fragments_refreshed", function() {
                            u.selectric.init(!0)
                        })
                    }
                },
                cart: {
                    cartText: e(".single_add_to_cart_button").text(),
                    init: function() {
                        this.shipping();
                        var t = this;
                        e(".single_add_to_cart_button").on("click", function() {
                            r.cart.button.loading()
                        }), e("body").on("added_to_cart", function() {
                            e.ajax({
                                url: wpAPIData.ajaxurl,
                                type: "get",
                                data: {
                                    action: "kf_get_cart_count"
                                },
                                error: function() {
                                    console.log("error")
                                },
                                success: function(t) {
                                    "" != t && (e(".l-header__cart span").text("(" + t + ")"), e(".l-header__cart").removeClass("hidden"))
                                }
                            }), e.ajax({
                                url: wpAPIData.ajaxurl,
                                type: "get",
                                data: {
                                    action: "kf_update_mini_cart"
                                },
                                error: function() {
                                    console.log("error")
                                },
                                success: function(i) {
                                    "" != i && (r.cart.button.reset(), e(".mini-cart__wrapper").empty().append(i), e(".l-header--fixed").length > 0 ? (s.header.story_fixed.hideHeader(), setTimeout(function() {
                                        t.openMiniCart()
                                    }, 350)) : e(".l-header").length > 0 ? (s.header.global_fixed.showHeader(), setTimeout(function() {
                                        t.openMiniCart()
                                    }, 350)) : setTimeout(function() {
                                        t.openMiniCart()
                                    }, 350))
                                }
                            })
                        }), e(".l-header__cart").on("click", function(i) {
                            i.preventDefault(), e(".mini-cart").is(":visible") ? t.closeMiniCart() : t.openMiniCart()
                        }), e(window).on("scroll", t.closeMiniCart)
                    },
                    button: {
                        reset: function() {
                            e(".single_add_to_cart_button").text(r.cart.cartText)
                        },
                        loading: function() {
                            console.log("loading"), e(t).find(".single_add_to_cart_button").text("Adding...")
                        }
                    },
                    openMiniCart: function() {
                        var i = e(".mini-cart");
                        if (i.is(":hidden")) {
                            var n = e(".l-header").offset().top + 100 - e(t).scrollTop();
                            i.css("top", n), i.stop().fadeIn(250, function() {
                                e(t).on("click", function() {
                                    r.cart.closeMiniCart()
                                })
                            }).on("click", function(e) {
                                e.stopPropagation()
                            })
                        }
                    },
                    closeMiniCart: function() {
                        e(".mini-cart").is(":visible") && (e(".mini-cart").fadeOut(250), e(t).off("click"))
                    },
                    shipping: function() {
                        e(".shipping-calculator-form").show()
                    }
                },
                notifications: {
                    init: function() {
                        this.shopSingle()
                    },
                    shopSingle: function() {
                        setTimeout(function() {
                            e(".single-product .woocommerce-message").slideUp()
                        }, 5e3)
                    }
                },
                wholesale: {
                    init: function() {
                        e("#showwholesale").length && e("#wholesale-wrapper").hide();
                        var t = this;
                        e("#showwholesale").on("change", function() {
                            t.toggleWholesale(e(this))
                        })
                    },
                    toggleWholesale: function(t) {
                        t.is(":checked") ? e("#wholesale-wrapper").show() : e("#wholesale-wrapper").hide()
                    }
                }
            },
            a = {
                stockists: {
                    init: function() {
                        this.placeholder(), Foundation.MediaQuery.atLeast("xlarge") && this.reCheckHeights()
                    },
                    placeholder: function() {
                        e("#addressInput").attr("placeholder", "enter city or postcode")
                    },
                    reCheckHeights: function() {
                        e(t).ajaxComplete(function() {
                            e(".slp_map__container").css("height", e("#map_sidebar").height() + e("#searchForm").height())
                        })
                    }
                }
            },
            l = {
                paywall: {
                    init: function() {
                        var i = this,
                            n = !1;
                        e("#paywall-click").on("click", function(o) {
                            o.preventDefault(), n = !0;
                            var s = new Date;
                            s.setTime(s.getTime() + 2592e6);
                            var r = "; expires=" + s.toUTCString(),
                                a = i.getCookie("01" + e("#shdhfsi").val() + "4113230131");
                            if (a < 3) {
                                var l = "01" + e("#shdhfsi").val() + "4113230131[" + a + "]",
                                    c = e("#kiyne").val();
                                t.cookie = l + "=" + c + r + "; path=/", setTimeout(function() {
                                    e("#paywall-form").submit()
                                }, 5)
                            } else window.location.reload()
                        }), e("#paywall-form").on("submit", function(e) {
                            n || e.preventDefault()
                        })
                    },
                    getCookie: function(e) {
                        var i = new RegExp(e, "g"),
                            n = (t.cookie.match(i) || []).length;
                        return console.log("COOKIE"), console.log(n), n
                    }
                },
                footnote: {
                    init: function() {
                        var t = this;
                        e(".c-footnote").length > 0 && e(".c-gallery").length > 0 && Foundation.MediaQuery.atLeast("xlarge") && e(".c-gallery__image:first-of-type()").imagesLoaded(function() {
                            e(".c-footnote").each(function() {
                                var i = e(this);
                                if (i.parents(".row").find(".c-gallery__image").length > 1) {
                                    var n = t.getImageHeight(i.parents(".row").find(".c-gallery")) - t.getCreditHeight(i.parents(".column"));
                                    n >= 0 && (i.css("margin-top", n), l.publishIssuePosition.init()), l.publishIssuePosition.init()
                                }
                            })
                        })
                    },
                    getImageHeight: function(e) {
                        return e.find("figure:first-of-type").outerHeight(!0)
                    },
                    getCreditHeight: function(e) {
                        return e.find(".c-credits").outerHeight(!0)
                    }
                },
                publishIssuePosition: {
                    init: function() {
                        var t = this;
                        e(".c-footnote").length > 0 ? e(".c-footnote").imagesLoaded(function() {
                            e(".js-publish-issue").css("height", "calc(100% - " + t.getContentsHeight() + "px)")
                        }) : e(".js-publish-issue").css("height", "calc(100% - " + t.getContentsHeight() + "px)")
                    },
                    getContentsHeight: function() {
                        var t = e(".js-publish-issue").parents(".match"),
                            i = 0;
                        return e(t).children().each(function() {
                            e(this).hasClass("js-publish-issue") || (i += e(this).outerHeight(!0))
                        }), i
                    }
                },
                progressPosition: {
                    init: function() {
                        this.onScroll()
                    },
                    onScroll: function() {
                        var t = e(".c-progress__container");
                        e(window).on("scroll", function() {
                            e(window).scrollTop() > e(".l-header").outerHeight(!0) - 1 ? t.addClass("c-progress--fixed") : t.removeClass("c-progress--fixed")
                        })
                    }
                }
            },
            c = {
                easing: "cubic-bezier(.65,0,.35,1)",
                init: function() {
                    var e = this;
                    e.multi(), e.single(), e.singleWide(), e.storyInit()
                },
                storyInit: function() {
                    var e = this;
                    Foundation.MediaQuery.atLeast("xlarge") || e.story()
                },
                multi: function() {
                    var i = e(".m-slideshow--multi");
                    i.length > 0 && (e(t).on("click", ".slick-list__overlay--prev", function() {
                        i.slick("slickPrev")
                    }), e(t).on("click", ".slick-list__overlay--next", function() {
                        i.slick("slickNext")
                    }), i.on("init", function() {
                        e(this).find(".slick-list").before('<span class="slick-list__overlay slick-list__overlay--prev"></span>'), e(this).find(".slick-list").after('<span class="slick-list__overlay slick-list__overlay--next"></span>')
                    }), i.on("init afterChange", function(t, i) {
                        e(".slick-list__overlay--disabled").removeClass("slick-list__overlay--disabled"), 0 === i.currentLeft && e(".slick-list__overlay--next").addClass("slick-list__overlay--disabled"), 0 === i.currentSlide && e(".slick-list__overlay--prev").addClass("slick-list__overlay--disabled")
                    }), i.slick({
                        slidesToShow: 6,
                        slidesToScroll: 6,
                        infinite: !1,
                        dots: !0,
                        arrows: !1,
                        customPaging: function(t, i) {
                            return e('<button type="button" data-role="none" role="button" tabindex="0" />').text("0" + (i + 1))
                        },
                        responsive: [{
                            breakpoint: n.xxlarge,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 5
                            }
                        }, {
                            breakpoint: n.xlarge,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 4
                            }
                        }, {
                            breakpoint: n.large,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        }, {
                            breakpoint: n.medium,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                variableWidth: !0,
                                dots: !1
                            }
                        }]
                    }))
                },
                single: function() {
                    var t, i = e(".m-slideshow--single");
                    i.length > 0 && (e(".single-product").length > 0 && (! function() {
                        i.on("init setPosition", function() {
                            e(this).find("img").each(function(i) {
                                var n = e(this);
                                n.height() > 6 && (0 === i && (t = n.height()), t = n.height() < t ? n.height() : t), i++, e(".single-product .m-slideshow--single img").css("max-height", t)
                            })
                        })
                    }(), function() {
                        i.on("afterChange", function(t, i) {
                            e(".m-slideshow__wrapper > .c-gallery__expand").data("index", i.currentSlide)
                        })
                    }()), i.slick({
                        dots: !0,
                        arrows: !0,
                        fade: !0,
                        autoplay: !(e(".single-product").length > 0),
                        autoplaySpeed: 5e3,
                        responsive: [{
                            breakpoint: n.xlarge,
                            settings: {
                                arrows: !1
                            }
                        }]
                    }), e(".single-product").length > 0 && Foundation.MediaQuery.atLeast("xlarge") && i.find("img").on("click", function() {
                        i.slick("slickNext")
                    }))
                },
                singleWide: function() {
                    var t = e(".m-slider-wide"),
                        i = e(".m-slider-wide--fade");
                    t.length > 0 && (t.slick({
                        dots: !0,
                        arrows: !0,
                        autoplay: !0,
                        autoplaySpeed: 5e3,
                        speed: 800,
                        cssEase: c.easing,
                        asNavFor: ".m-slider-wide--fade",
                        responsive: [{
                            breakpoint: n.xlarge,
                            settings: {
                                arrows: !1
                            }
                        }]
                    }), i.on("init afterChange", function() {
                        i.find(".slick-active--fade").removeClass("slick-active--fade"), setTimeout(function() {
                            i.find(".slick-active").addClass("slick-active--fade")
                        }, 100)
                    }), i.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: !1,
                        fade: !0,
                        asNavFor: ".m-slider-wide"
                    }))
                },
                story: function() {
                    var t = e(".c-gallery--slideshow");
                    t.length > 0 && (t.on("init breakpoint", function() {
                        e.fn.matchHeight._update()
                    }), t.slick({
                        mobileFirst: !0,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: !1,
                        dots: !1,
                        arrows: !1,
                        variableWidth: !0,
                        responsive: [{
                            breakpoint: 1200,
                            settings: "unslick"
                        }]
                    }), t.each(function() {
                        var t = e(this);
                        t.find(".c-gallery__image").length <= 1 && (t.slick("slickSetOption", "variableWidth", !1, !0), t.addClass("c-gallery--slideshow--single"), t.parents(".column").addClass("medium-9"))
                    }))
                }
            },
            d = {
                init: function() {
                    this.headerForm(), this.submit()
                },
                headerForm: function() {
                    e(".js-menu-newsletter").on("click", function(t) {
                        t.preventDefault(), e(this).next().slideToggle()
                    })
                },
                callback: function(e, t, i) {
                    var n = i === !0 ? "c-newsletter__notification--success" : "c-newsletter__notification--error";
                    e.find(".c-newsletter__notification").length > 0 ? (i === !0 && (e.find(".c-newsletter__notification").removeClass("c-newsletter__notification--error"), e.find(".c-newsletter__notification").addClass(n)), e.find(".c-newsletter__notification").text(t), e.find(".c-newsletter__notification").is(":visible") || e.find(".c-newsletter__notification").slideDown()) : (e.append('<div class="c-newsletter__notification ' + n + '" style="display: none;">' + t + "</div>"), e.find(".c-newsletter__notification").slideDown()), i === !0 && (e.find('input[type="email"]').val(""), setTimeout(function() {
                        e.find(".c-newsletter__notification").slideUp()
                    }, 3e3))
                },
                submit: function() {
                    e(".c-newsletter").submit(function(t) {
                        t.preventDefault();
                        var i = e(this);
                        e.ajax({
                            type: "POST",
                            url: wpAPIData.ajaxurl,
                            data: {
                                action: "sign_up",
                                email: i.find("#mce-EMAIL").val()
                            },
                            success: function(e) {
                                "success" == e ? d.callback(i, "Thank you!", !0) : e.indexOf("domain") !== -1 || e.indexOf("must") !== -1 ? d.callback(i, "You have entered an invalid email address. Please try again.", !1) : d.callback(i, e, !1)
                            },
                            error: function(e) {
                                d.callback(i, e, !1)
                            }
                        })
                    })
                }
            },
            u = {
                foundation: function() {
                    e(t).foundation()
                },
                instafeed: {
                    init: function() {
                        var t = e(".c-instafeed"),
                            i = this;
                        t.length > 0 && i.setup()
                    },
                    resize: function() {
                        this.destroy(), this.init()
                    },
                    setup: function() {
                        var e = new Instafeed({
                            accessToken: "7452999.1677ed0.6c1408e84fd64c33bc277f16fd73bde2",
                            get: "user",
                            userId: "7452999",
                            links: !1,
                            limit: Foundation.MediaQuery.atLeast("xxlarge") ? 6 : Foundation.MediaQuery.atLeast("xlarge") ? 4 : Foundation.MediaQuery.atLeast("medium") ? 3 : 2,
                            resolution: "standard_resolution",
                            template: '<div class="c-instagram__image columns small-6 medium-4 xlarge-3 xxlarge-2"><a href="{{link}}" target="_blank"><img src="{{image}}" /></a></div>'
                        });
                        e.run()
                    },
                    destroy: function() {
                        e(".c-instafeed > *").remove()
                    }
                },
                matchHeights: function() {
                    e(".match").matchHeight(), e(".match--parent").matchHeight(), e(window).on("load", function() {
                        e.fn.matchHeight._update()
                    })
                },
                photoswipe: {
                    init: function() {
                        var t = this;
                        e(".m-slideshow__wrapper .c-gallery__expand, .c-gallery .c-gallery__expand").on("click", function(i) {
                            i.preventDefault(), t.initPswp(e(this).data("index"))
                        })
                    },
                    initPswp: function(e) {
                        var i = t.querySelectorAll(".pswp")[0],
                            n = this.getData(),
                            o = {
                                index: e,
                                fullscreenEl: !1,
                                shareEl: !1,
                                indexIndicatorSep: " <span>of</span> "
                            },
                            s = new PhotoSwipe(i, PhotoSwipeUI_Default, n, o);
                        return s.init(), s
                    },
                    getData: function() {
                        return pswp_gallery
                    }
                },
                pushy: function() {
                    function i(e) {
                        "left" == e || r.hasClass(d) ? r.toggleClass(d) : ("right" == e || r.hasClass(u)) && r.toggleClass(u)
                    }

                    function n() {
                        s.hasClass(c) ? (r.addClass(d), s.animate({
                            left: "0px"
                        }, h), a.animate({
                            left: m
                        }, h), l.animate({
                            left: m
                        }, h)) : (r.addClass(u), s.animate({
                            right: "0px"
                        }, h), a.animate({
                            right: m
                        }, h), l.animate({
                            right: m
                        }, h))
                    }

                    function o() {
                        s.hasClass(c) ? (r.removeClass(d), s.animate({
                            left: "-" + m
                        }, h), a.animate({
                            left: "0px"
                        }, h), l.animate({
                            left: "0px"
                        }, h)) : (r.removeClass(u), s.animate({
                            right: "-" + m
                        }, h), a.animate({
                            right: "0px"
                        }, h), l.animate({
                            right: "0px"
                        }, h))
                    }
                    var s = e(".pushy"),
                        r = e("body"),
                        a = e("#container"),
                        l = e(".push"),
                        c = "pushy-left",
                        d = "pushy-open-left",
                        u = "pushy-open-right",
                        p = e(".site-overlay"),
                        f = e(".menu-btn, .pushy-link"),
                        h = 200,
                        m = s.width() + "px",
                        g = ".pushy-submenu",
                        v = (e(g), function() {
                            var e = t.createElement("p"),
                                i = !1,
                                n = {
                                    webkitTransform: "-webkit-transform",
                                    OTransform: "-o-transform",
                                    msTransform: "-ms-transform",
                                    MozTransform: "-moz-transform",
                                    transform: "transform"
                                };
                            t.body.insertBefore(e, null);
                            for (var o in n) void 0 !== e.style[o] && (e.style[o] = "translate3d(1px,1px,1px)", i = window.getComputedStyle(e).getPropertyValue(n[o]));
                            return t.body.removeChild(e), void 0 !== i && i.length > 0 && "none" !== i
                        }());
                    if (v) s.css({
                        visibility: "visible"
                    }), f.on("click", function() {
                        var t = e(this).data("pushy-dir");
                        i(t)
                    }), p.on("click", function() {
                        i()
                    });
                    else {
                        r.addClass("no-csstransforms3d"), s.hasClass(c) ? s.css({
                            left: "-" + m
                        }) : s.css({
                            right: "-" + m
                        }), s.css({
                            visibility: "visible"
                        }), a.css({
                            "overflow-x": "hidden"
                        });
                        var y = !1;
                        f.on("click", function() {
                            y ? (o(), y = !1) : (n(), y = !0)
                        }), p.on("click", function() {
                            y ? (o(), y = !1) : (n(), y = !0)
                        })
                    }
                },
                selectric: {
                    init: function() {
                        var t = t ? "refresh" : "";
                        t && e("select").selectric(t), e("select").selectric({
                            disableOnMobile: !1,
                            nativeOnMobile: !1
                        })
                    },
                    pageNav: {
                        init: function() {
                            var t = this;
                            e(".page__nav").length > 0 && (t.setUp(), t.navChange())
                        },
                        setUp: function() {
                            e("<select />").appendTo(".page__nav__wrapper"), e("<option />", {
                                selected: "selected",
                                value: "",
                                text: e(".woocommerce").length > 0 ? e(".page__nav__item .active").length > 0 ? e(e(".page__nav__item .active")[0]).text() : "Shop:" : e(".page__nav__item--active a").text()
                            }).appendTo(".page__nav__wrapper select"), e(".page__nav__item a").each(function() {
                                var t = e(this);
                                e("<option />", {
                                    value: t.attr("href"),
                                    text: t.text()
                                }).appendTo(".page__nav__wrapper select")
                            }), this.fireSelectric()
                        },
                        fireSelectric: function() {
                            e(".page__nav__wrapper select").selectric({
                                disableOnMobile: !1,
                                nativeOnMobile: !1,
                                onInit: function() {
                                    e(".page__nav__wrapper .selectric").addClass("selectric--alt")
                                }
                            })
                        },
                        navChange: function() {
                            e(".page__nav__wrapper select").on("change", function() {
                                window.location = e(this).find("option:selected").val()
                            })
                        }
                    }
                },
                sticky: {
                    init: function() {
                        var t = this,
                            i = t.storyCheckHeights();
                        t.storyCheckHeights() && Foundation.MediaQuery.atLeast("xlarge") && t.story.init(i), e(".slp_map").length > 0 && Foundation.MediaQuery.atLeast("xlarge") && t.stockists.init(), e(".js-sticky").length > 0 && Foundation.MediaQuery.atLeast("large") && t["default"].init()
                    },
                    resize: function() {
                        this["default"].resize(), this.stockists.resize(), this.story.resize()
                    },
                    "default": {
                        $default: e(".js-sticky"),
                        init: function() {
                            this.$default.hcSticky({
                                top: 40,
                                bottom: 40,
                                offResolutions: -1024
                            })
                        },
                        resize: function() {
                            var t = this;
                            !Foundation.MediaQuery.atLeast("large") && e(".js-sticky").length > 0 ? e(".wrapper-sticky").length > 0 && (t.$default.hcSticky("destroy"), t.$default.removeAttr("style")) : e(".js-sticky").length > 0 && t.init()
                        }
                    },
                    stockists: {
                        $map: e(".slp_map__inner"),
                        init: function() {
                            this.$map.hcSticky({
                                top: 40,
                                bottom: 40,
                                offResolutions: -1200
                            })
                        },
                        resize: function() {
                            var t = this;
                            !Foundation.MediaQuery.atLeast("xlarge") && e(".slp_map__inner").length > 0 ? e(".wrapper-sticky").length > 0 && (t.$map.hcSticky("destroy"), t.$map.removeAttr("style")) : e(".slp_map__inner").length > 0 && t.init()
                        }
                    },
                    story: {
                        init: function(t) {
                            e.fn.matchHeight._afterUpdate = function(n, o) {
                                for (i = 1; i <= t; i++) e(".sticky--" + i).hcSticky({
                                    top: 50 + e(".l-header--fixed").outerHeight(!0),
                                    bottom: 50,
                                    offResolutions: -1200
                                })
                            }
                        },
                        resize: function() {
                            e(".single-post").length > 0 && e.fn.matchHeight._update()
                        }
                    },
                    storyCheckHeights: function() {
                        var t = 1;
                        return e(".single-post__text").each(function() {
                            var i = e(this),
                                n = i.outerHeight(!0),
                                o = i.parent().prev().find(".c-gallery--slideshow"),
                                s = o.outerHeight(!0);
                            n >= s ? o.addClass("sticky--" + t) : i.addClass("sticky--" + t), t++
                        }), t
                    }
                }
            }
    }(jQuery, document);
