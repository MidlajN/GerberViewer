/*! For license information please see gerber-to-svg.min.js.LICENSE.txt */
var gerberToSvg = (function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 43))
  );
})([
  function (e, t) {
    var n,
      r,
      i = (e.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === o || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o;
      } catch (e) {
        n = o;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        r = a;
      }
    })();
    var u,
      l = [],
      f = !1,
      c = -1;
    function h() {
      f &&
        u &&
        ((f = !1), u.length ? (l = u.concat(l)) : (c = -1), l.length && d());
    }
    function d() {
      if (!f) {
        var e = s(h);
        f = !0;
        for (var t = l.length; t; ) {
          for (u = l, l = []; ++c < t; ) u && u[c].run();
          (c = -1), (t = l.length);
        }
        (u = null),
          (f = !1),
          (function (e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === a || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(e);
            try {
              r(e);
            } catch (t) {
              try {
                return r.call(null, e);
              } catch (t) {
                return r.call(this, e);
              }
            }
          })(e);
      }
    }
    function p(e, t) {
      (this.fun = e), (this.array = t);
    }
    function b() {}
    (i.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      l.push(new p(e, t)), 1 !== l.length || f || s(d);
    }),
      (p.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (i.title = "browser"),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ""),
      (i.versions = {}),
      (i.on = b),
      (i.addListener = b),
      (i.once = b),
      (i.off = b),
      (i.removeListener = b),
      (i.removeAllListeners = b),
      (i.emit = b),
      (i.prependListener = b),
      (i.prependOnceListener = b),
      (i.listeners = function (e) {
        return [];
      }),
      (i.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (i.cwd = function () {
        return "/";
      }),
      (i.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (i.umask = function () {
        return 0;
      });
  },
  function (e, t) {
    "function" == typeof Object.create
      ? (e.exports = function (e, t) {
          t &&
            ((e.super_ = t),
            (e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })));
        })
      : (e.exports = function (e, t) {
          if (t) {
            e.super_ = t;
            var n = function () {};
            (n.prototype = t.prototype),
              (e.prototype = new n()),
              (e.prototype.constructor = e);
          }
        });
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      var r = n(48),
        i = n(49),
        o = n(50);
      function a() {
        return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function s(e, t) {
        if (a() < t) throw new RangeError("Invalid typed array length");
        return (
          u.TYPED_ARRAY_SUPPORT
            ? ((e = new Uint8Array(t)).__proto__ = u.prototype)
            : (null === e && (e = new u(t)), (e.length = t)),
          e
        );
      }
      function u(e, t, n) {
        if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
          return new u(e, t, n);
        if ("number" == typeof e) {
          if ("string" == typeof t)
            throw new Error(
              "If encoding is specified then the first argument must be a string"
            );
          return c(this, e);
        }
        return l(this, e, t, n);
      }
      function l(e, t, n, r) {
        if ("number" == typeof t)
          throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
          ? (function (e, t, n, r) {
              if ((t.byteLength, n < 0 || t.byteLength < n))
                throw new RangeError("'offset' is out of bounds");
              if (t.byteLength < n + (r || 0))
                throw new RangeError("'length' is out of bounds");
              t =
                void 0 === n && void 0 === r
                  ? new Uint8Array(t)
                  : void 0 === r
                  ? new Uint8Array(t, n)
                  : new Uint8Array(t, n, r);
              u.TYPED_ARRAY_SUPPORT
                ? ((e = t).__proto__ = u.prototype)
                : (e = h(e, t));
              return e;
            })(e, t, n, r)
          : "string" == typeof t
          ? (function (e, t, n) {
              ("string" == typeof n && "" !== n) || (n = "utf8");
              if (!u.isEncoding(n))
                throw new TypeError(
                  '"encoding" must be a valid string encoding'
                );
              var r = 0 | p(t, n),
                i = (e = s(e, r)).write(t, n);
              i !== r && (e = e.slice(0, i));
              return e;
            })(e, t, n)
          : (function (e, t) {
              if (u.isBuffer(t)) {
                var n = 0 | d(t.length);
                return 0 === (e = s(e, n)).length || t.copy(e, 0, 0, n), e;
              }
              if (t) {
                if (
                  ("undefined" != typeof ArrayBuffer &&
                    t.buffer instanceof ArrayBuffer) ||
                  "length" in t
                )
                  return "number" != typeof t.length || (r = t.length) != r
                    ? s(e, 0)
                    : h(e, t);
                if ("Buffer" === t.type && o(t.data)) return h(e, t.data);
              }
              var r;
              throw new TypeError(
                "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
              );
            })(e, t);
      }
      function f(e) {
        if ("number" != typeof e)
          throw new TypeError('"size" argument must be a number');
        if (e < 0) throw new RangeError('"size" argument must not be negative');
      }
      function c(e, t) {
        if ((f(t), (e = s(e, t < 0 ? 0 : 0 | d(t))), !u.TYPED_ARRAY_SUPPORT))
          for (var n = 0; n < t; ++n) e[n] = 0;
        return e;
      }
      function h(e, t) {
        var n = t.length < 0 ? 0 : 0 | d(t.length);
        e = s(e, n);
        for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
        return e;
      }
      function d(e) {
        if (e >= a())
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              a().toString(16) +
              " bytes"
          );
        return 0 | e;
      }
      function p(e, t) {
        if (u.isBuffer(e)) return e.length;
        if (
          "undefined" != typeof ArrayBuffer &&
          "function" == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
        )
          return e.byteLength;
        "string" != typeof e && (e = "" + e);
        var n = e.length;
        if (0 === n) return 0;
        for (var r = !1; ; )
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return n;
            case "utf8":
            case "utf-8":
            case void 0:
              return W(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * n;
            case "hex":
              return n >>> 1;
            case "base64":
              return q(e).length;
            default:
              if (r) return W(e).length;
              (t = ("" + t).toLowerCase()), (r = !0);
          }
      }
      function b(e, t, n) {
        var r = !1;
        if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
        if (((void 0 === n || n > this.length) && (n = this.length), n <= 0))
          return "";
        if ((n >>>= 0) <= (t >>>= 0)) return "";
        for (e || (e = "utf8"); ; )
          switch (e) {
            case "hex":
              return A(this, t, n);
            case "utf8":
            case "utf-8":
              return x(this, t, n);
            case "ascii":
              return M(this, t, n);
            case "latin1":
            case "binary":
              return T(this, t, n);
            case "base64":
              return k(this, t, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return L(this, t, n);
            default:
              if (r) throw new TypeError("Unknown encoding: " + e);
              (e = (e + "").toLowerCase()), (r = !0);
          }
      }
      function g(e, t, n) {
        var r = e[t];
        (e[t] = e[n]), (e[n] = r);
      }
      function y(e, t, n, r, i) {
        if (0 === e.length) return -1;
        if (
          ("string" == typeof n
            ? ((r = n), (n = 0))
            : n > 2147483647
            ? (n = 2147483647)
            : n < -2147483648 && (n = -2147483648),
          (n = +n),
          isNaN(n) && (n = i ? 0 : e.length - 1),
          n < 0 && (n = e.length + n),
          n >= e.length)
        ) {
          if (i) return -1;
          n = e.length - 1;
        } else if (n < 0) {
          if (!i) return -1;
          n = 0;
        }
        if (("string" == typeof t && (t = u.from(t, r)), u.isBuffer(t)))
          return 0 === t.length ? -1 : _(e, t, n, r, i);
        if ("number" == typeof t)
          return (
            (t &= 255),
            u.TYPED_ARRAY_SUPPORT &&
            "function" == typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(e, t, n)
                : Uint8Array.prototype.lastIndexOf.call(e, t, n)
              : _(e, [t], n, r, i)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function _(e, t, n, r, i) {
        var o,
          a = 1,
          s = e.length,
          u = t.length;
        if (
          void 0 !== r &&
          ("ucs2" === (r = String(r).toLowerCase()) ||
            "ucs-2" === r ||
            "utf16le" === r ||
            "utf-16le" === r)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (a = 2), (s /= 2), (u /= 2), (n /= 2);
        }
        function l(e, t) {
          return 1 === a ? e[t] : e.readUInt16BE(t * a);
        }
        if (i) {
          var f = -1;
          for (o = n; o < s; o++)
            if (l(e, o) === l(t, -1 === f ? 0 : o - f)) {
              if ((-1 === f && (f = o), o - f + 1 === u)) return f * a;
            } else -1 !== f && (o -= o - f), (f = -1);
        } else
          for (n + u > s && (n = s - u), o = n; o >= 0; o--) {
            for (var c = !0, h = 0; h < u; h++)
              if (l(e, o + h) !== l(t, h)) {
                c = !1;
                break;
              }
            if (c) return o;
          }
        return -1;
      }
      function v(e, t, n, r) {
        n = Number(n) || 0;
        var i = e.length - n;
        r ? (r = Number(r)) > i && (r = i) : (r = i);
        var o = t.length;
        if (o % 2 != 0) throw new TypeError("Invalid hex string");
        r > o / 2 && (r = o / 2);
        for (var a = 0; a < r; ++a) {
          var s = parseInt(t.substr(2 * a, 2), 16);
          if (isNaN(s)) return a;
          e[n + a] = s;
        }
        return a;
      }
      function m(e, t, n, r) {
        return F(W(t, e.length - n), e, n, r);
      }
      function w(e, t, n, r) {
        return F(
          (function (e) {
            for (var t = [], n = 0; n < e.length; ++n)
              t.push(255 & e.charCodeAt(n));
            return t;
          })(t),
          e,
          n,
          r
        );
      }
      function S(e, t, n, r) {
        return w(e, t, n, r);
      }
      function E(e, t, n, r) {
        return F(q(t), e, n, r);
      }
      function R(e, t, n, r) {
        return F(
          (function (e, t) {
            for (
              var n, r, i, o = [], a = 0;
              a < e.length && !((t -= 2) < 0);
              ++a
            )
              (n = e.charCodeAt(a)),
                (r = n >> 8),
                (i = n % 256),
                o.push(i),
                o.push(r);
            return o;
          })(t, e.length - n),
          e,
          n,
          r
        );
      }
      function k(e, t, n) {
        return 0 === t && n === e.length
          ? r.fromByteArray(e)
          : r.fromByteArray(e.slice(t, n));
      }
      function x(e, t, n) {
        n = Math.min(e.length, n);
        for (var r = [], i = t; i < n; ) {
          var o,
            a,
            s,
            u,
            l = e[i],
            f = null,
            c = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
          if (i + c <= n)
            switch (c) {
              case 1:
                l < 128 && (f = l);
                break;
              case 2:
                128 == (192 & (o = e[i + 1])) &&
                  (u = ((31 & l) << 6) | (63 & o)) > 127 &&
                  (f = u);
                break;
              case 3:
                (o = e[i + 1]),
                  (a = e[i + 2]),
                  128 == (192 & o) &&
                    128 == (192 & a) &&
                    (u = ((15 & l) << 12) | ((63 & o) << 6) | (63 & a)) >
                      2047 &&
                    (u < 55296 || u > 57343) &&
                    (f = u);
                break;
              case 4:
                (o = e[i + 1]),
                  (a = e[i + 2]),
                  (s = e[i + 3]),
                  128 == (192 & o) &&
                    128 == (192 & a) &&
                    128 == (192 & s) &&
                    (u =
                      ((15 & l) << 18) |
                      ((63 & o) << 12) |
                      ((63 & a) << 6) |
                      (63 & s)) > 65535 &&
                    u < 1114112 &&
                    (f = u);
            }
          null === f
            ? ((f = 65533), (c = 1))
            : f > 65535 &&
              ((f -= 65536),
              r.push(((f >>> 10) & 1023) | 55296),
              (f = 56320 | (1023 & f))),
            r.push(f),
            (i += c);
        }
        return (function (e) {
          var t = e.length;
          if (t <= 4096) return String.fromCharCode.apply(String, e);
          var n = "",
            r = 0;
          for (; r < t; )
            n += String.fromCharCode.apply(String, e.slice(r, (r += 4096)));
          return n;
        })(r);
      }
      (t.Buffer = u),
        (t.SlowBuffer = function (e) {
          +e != e && (e = 0);
          return u.alloc(+e);
        }),
        (t.INSPECT_MAX_BYTES = 50),
        (u.TYPED_ARRAY_SUPPORT =
          void 0 !== e.TYPED_ARRAY_SUPPORT
            ? e.TYPED_ARRAY_SUPPORT
            : (function () {
                try {
                  var e = new Uint8Array(1);
                  return (
                    (e.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      },
                    }),
                    42 === e.foo() &&
                      "function" == typeof e.subarray &&
                      0 === e.subarray(1, 1).byteLength
                  );
                } catch (e) {
                  return !1;
                }
              })()),
        (t.kMaxLength = a()),
        (u.poolSize = 8192),
        (u._augment = function (e) {
          return (e.__proto__ = u.prototype), e;
        }),
        (u.from = function (e, t, n) {
          return l(null, e, t, n);
        }),
        u.TYPED_ARRAY_SUPPORT &&
          ((u.prototype.__proto__ = Uint8Array.prototype),
          (u.__proto__ = Uint8Array),
          "undefined" != typeof Symbol &&
            Symbol.species &&
            u[Symbol.species] === u &&
            Object.defineProperty(u, Symbol.species, {
              value: null,
              configurable: !0,
            })),
        (u.alloc = function (e, t, n) {
          return (function (e, t, n, r) {
            return (
              f(t),
              t <= 0
                ? s(e, t)
                : void 0 !== n
                ? "string" == typeof r
                  ? s(e, t).fill(n, r)
                  : s(e, t).fill(n)
                : s(e, t)
            );
          })(null, e, t, n);
        }),
        (u.allocUnsafe = function (e) {
          return c(null, e);
        }),
        (u.allocUnsafeSlow = function (e) {
          return c(null, e);
        }),
        (u.isBuffer = function (e) {
          return !(null == e || !e._isBuffer);
        }),
        (u.compare = function (e, t) {
          if (!u.isBuffer(e) || !u.isBuffer(t))
            throw new TypeError("Arguments must be Buffers");
          if (e === t) return 0;
          for (
            var n = e.length, r = t.length, i = 0, o = Math.min(n, r);
            i < o;
            ++i
          )
            if (e[i] !== t[i]) {
              (n = e[i]), (r = t[i]);
              break;
            }
          return n < r ? -1 : r < n ? 1 : 0;
        }),
        (u.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (u.concat = function (e, t) {
          if (!o(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return u.alloc(0);
          var n;
          if (void 0 === t)
            for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
          var r = u.allocUnsafe(t),
            i = 0;
          for (n = 0; n < e.length; ++n) {
            var a = e[n];
            if (!u.isBuffer(a))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            a.copy(r, i), (i += a.length);
          }
          return r;
        }),
        (u.byteLength = p),
        (u.prototype._isBuffer = !0),
        (u.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var t = 0; t < e; t += 2) g(this, t, t + 1);
          return this;
        }),
        (u.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var t = 0; t < e; t += 4)
            g(this, t, t + 3), g(this, t + 1, t + 2);
          return this;
        }),
        (u.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var t = 0; t < e; t += 8)
            g(this, t, t + 7),
              g(this, t + 1, t + 6),
              g(this, t + 2, t + 5),
              g(this, t + 3, t + 4);
          return this;
        }),
        (u.prototype.toString = function () {
          var e = 0 | this.length;
          return 0 === e
            ? ""
            : 0 === arguments.length
            ? x(this, 0, e)
            : b.apply(this, arguments);
        }),
        (u.prototype.equals = function (e) {
          if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === u.compare(this, e);
        }),
        (u.prototype.inspect = function () {
          var e = "",
            n = t.INSPECT_MAX_BYTES;
          return (
            this.length > 0 &&
              ((e = this.toString("hex", 0, n).match(/.{2}/g).join(" ")),
              this.length > n && (e += " ... ")),
            "<Buffer " + e + ">"
          );
        }),
        (u.prototype.compare = function (e, t, n, r, i) {
          if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          if (
            (void 0 === t && (t = 0),
            void 0 === n && (n = e ? e.length : 0),
            void 0 === r && (r = 0),
            void 0 === i && (i = this.length),
            t < 0 || n > e.length || r < 0 || i > this.length)
          )
            throw new RangeError("out of range index");
          if (r >= i && t >= n) return 0;
          if (r >= i) return -1;
          if (t >= n) return 1;
          if (this === e) return 0;
          for (
            var o = (i >>>= 0) - (r >>>= 0),
              a = (n >>>= 0) - (t >>>= 0),
              s = Math.min(o, a),
              l = this.slice(r, i),
              f = e.slice(t, n),
              c = 0;
            c < s;
            ++c
          )
            if (l[c] !== f[c]) {
              (o = l[c]), (a = f[c]);
              break;
            }
          return o < a ? -1 : a < o ? 1 : 0;
        }),
        (u.prototype.includes = function (e, t, n) {
          return -1 !== this.indexOf(e, t, n);
        }),
        (u.prototype.indexOf = function (e, t, n) {
          return y(this, e, t, n, !0);
        }),
        (u.prototype.lastIndexOf = function (e, t, n) {
          return y(this, e, t, n, !1);
        }),
        (u.prototype.write = function (e, t, n, r) {
          if (void 0 === t) (r = "utf8"), (n = this.length), (t = 0);
          else if (void 0 === n && "string" == typeof t)
            (r = t), (n = this.length), (t = 0);
          else {
            if (!isFinite(t))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (t |= 0),
              isFinite(n)
                ? ((n |= 0), void 0 === r && (r = "utf8"))
                : ((r = n), (n = void 0));
          }
          var i = this.length - t;
          if (
            ((void 0 === n || n > i) && (n = i),
            (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          r || (r = "utf8");
          for (var o = !1; ; )
            switch (r) {
              case "hex":
                return v(this, e, t, n);
              case "utf8":
              case "utf-8":
                return m(this, e, t, n);
              case "ascii":
                return w(this, e, t, n);
              case "latin1":
              case "binary":
                return S(this, e, t, n);
              case "base64":
                return E(this, e, t, n);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return R(this, e, t, n);
              default:
                if (o) throw new TypeError("Unknown encoding: " + r);
                (r = ("" + r).toLowerCase()), (o = !0);
            }
        }),
        (u.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      function M(e, t, n) {
        var r = "";
        n = Math.min(e.length, n);
        for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
        return r;
      }
      function T(e, t, n) {
        var r = "";
        n = Math.min(e.length, n);
        for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
        return r;
      }
      function A(e, t, n) {
        var r = e.length;
        (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
        for (var i = "", o = t; o < n; ++o) i += U(e[o]);
        return i;
      }
      function L(e, t, n) {
        for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2)
          i += String.fromCharCode(r[o] + 256 * r[o + 1]);
        return i;
      }
      function O(e, t, n) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > n)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function P(e, t, n, r, i, o) {
        if (!u.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < o)
          throw new RangeError('"value" argument is out of bounds');
        if (n + r > e.length) throw new RangeError("Index out of range");
      }
      function j(e, t, n, r) {
        t < 0 && (t = 65535 + t + 1);
        for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i)
          e[n + i] =
            (t & (255 << (8 * (r ? i : 1 - i)))) >>> (8 * (r ? i : 1 - i));
      }
      function C(e, t, n, r) {
        t < 0 && (t = 4294967295 + t + 1);
        for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i)
          e[n + i] = (t >>> (8 * (r ? i : 3 - i))) & 255;
      }
      function N(e, t, n, r, i, o) {
        if (n + r > e.length) throw new RangeError("Index out of range");
        if (n < 0) throw new RangeError("Index out of range");
      }
      function I(e, t, n, r, o) {
        return o || N(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4;
      }
      function D(e, t, n, r, o) {
        return o || N(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8;
      }
      (u.prototype.slice = function (e, t) {
        var n,
          r = this.length;
        if (
          ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
          (t = void 0 === t ? r : ~~t) < 0
            ? (t += r) < 0 && (t = 0)
            : t > r && (t = r),
          t < e && (t = e),
          u.TYPED_ARRAY_SUPPORT)
        )
          (n = this.subarray(e, t)).__proto__ = u.prototype;
        else {
          var i = t - e;
          n = new u(i, void 0);
          for (var o = 0; o < i; ++o) n[o] = this[o + e];
        }
        return n;
      }),
        (u.prototype.readUIntLE = function (e, t, n) {
          (e |= 0), (t |= 0), n || O(e, t, this.length);
          for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
            r += this[e + o] * i;
          return r;
        }),
        (u.prototype.readUIntBE = function (e, t, n) {
          (e |= 0), (t |= 0), n || O(e, t, this.length);
          for (var r = this[e + --t], i = 1; t > 0 && (i *= 256); )
            r += this[e + --t] * i;
          return r;
        }),
        (u.prototype.readUInt8 = function (e, t) {
          return t || O(e, 1, this.length), this[e];
        }),
        (u.prototype.readUInt16LE = function (e, t) {
          return t || O(e, 2, this.length), this[e] | (this[e + 1] << 8);
        }),
        (u.prototype.readUInt16BE = function (e, t) {
          return t || O(e, 2, this.length), (this[e] << 8) | this[e + 1];
        }),
        (u.prototype.readUInt32LE = function (e, t) {
          return (
            t || O(e, 4, this.length),
            (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
              16777216 * this[e + 3]
          );
        }),
        (u.prototype.readUInt32BE = function (e, t) {
          return (
            t || O(e, 4, this.length),
            16777216 * this[e] +
              ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
          );
        }),
        (u.prototype.readIntLE = function (e, t, n) {
          (e |= 0), (t |= 0), n || O(e, t, this.length);
          for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
            r += this[e + o] * i;
          return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
        }),
        (u.prototype.readIntBE = function (e, t, n) {
          (e |= 0), (t |= 0), n || O(e, t, this.length);
          for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256); )
            o += this[e + --r] * i;
          return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
        }),
        (u.prototype.readInt8 = function (e, t) {
          return (
            t || O(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          );
        }),
        (u.prototype.readInt16LE = function (e, t) {
          t || O(e, 2, this.length);
          var n = this[e] | (this[e + 1] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (u.prototype.readInt16BE = function (e, t) {
          t || O(e, 2, this.length);
          var n = this[e + 1] | (this[e] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (u.prototype.readInt32LE = function (e, t) {
          return (
            t || O(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (u.prototype.readInt32BE = function (e, t) {
          return (
            t || O(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (u.prototype.readFloatLE = function (e, t) {
          return t || O(e, 4, this.length), i.read(this, e, !0, 23, 4);
        }),
        (u.prototype.readFloatBE = function (e, t) {
          return t || O(e, 4, this.length), i.read(this, e, !1, 23, 4);
        }),
        (u.prototype.readDoubleLE = function (e, t) {
          return t || O(e, 8, this.length), i.read(this, e, !0, 52, 8);
        }),
        (u.prototype.readDoubleBE = function (e, t) {
          return t || O(e, 8, this.length), i.read(this, e, !1, 52, 8);
        }),
        (u.prototype.writeUIntLE = function (e, t, n, r) {
          ((e = +e), (t |= 0), (n |= 0), r) ||
            P(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
          var i = 1,
            o = 0;
          for (this[t] = 255 & e; ++o < n && (i *= 256); )
            this[t + o] = (e / i) & 255;
          return t + n;
        }),
        (u.prototype.writeUIntBE = function (e, t, n, r) {
          ((e = +e), (t |= 0), (n |= 0), r) ||
            P(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
          var i = n - 1,
            o = 1;
          for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
            this[t + i] = (e / o) & 255;
          return t + n;
        }),
        (u.prototype.writeUInt8 = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || P(this, e, t, 1, 255, 0),
            u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (u.prototype.writeUInt16LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || P(this, e, t, 2, 65535, 0),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : j(this, e, t, !0),
            t + 2
          );
        }),
        (u.prototype.writeUInt16BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || P(this, e, t, 2, 65535, 0),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : j(this, e, t, !1),
            t + 2
          );
        }),
        (u.prototype.writeUInt32LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || P(this, e, t, 4, 4294967295, 0),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t + 3] = e >>> 24),
                (this[t + 2] = e >>> 16),
                (this[t + 1] = e >>> 8),
                (this[t] = 255 & e))
              : C(this, e, t, !0),
            t + 4
          );
        }),
        (u.prototype.writeUInt32BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || P(this, e, t, 4, 4294967295, 0),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : C(this, e, t, !1),
            t + 4
          );
        }),
        (u.prototype.writeIntLE = function (e, t, n, r) {
          if (((e = +e), (t |= 0), !r)) {
            var i = Math.pow(2, 8 * n - 1);
            P(this, e, t, n, i - 1, -i);
          }
          var o = 0,
            a = 1,
            s = 0;
          for (this[t] = 255 & e; ++o < n && (a *= 256); )
            e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1),
              (this[t + o] = (((e / a) >> 0) - s) & 255);
          return t + n;
        }),
        (u.prototype.writeIntBE = function (e, t, n, r) {
          if (((e = +e), (t |= 0), !r)) {
            var i = Math.pow(2, 8 * n - 1);
            P(this, e, t, n, i - 1, -i);
          }
          var o = n - 1,
            a = 1,
            s = 0;
          for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); )
            e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1),
              (this[t + o] = (((e / a) >> 0) - s) & 255);
          return t + n;
        }),
        (u.prototype.writeInt8 = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || P(this, e, t, 1, 127, -128),
            u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (u.prototype.writeInt16LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || P(this, e, t, 2, 32767, -32768),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : j(this, e, t, !0),
            t + 2
          );
        }),
        (u.prototype.writeInt16BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || P(this, e, t, 2, 32767, -32768),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : j(this, e, t, !1),
            t + 2
          );
        }),
        (u.prototype.writeInt32LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || P(this, e, t, 4, 2147483647, -2147483648),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                (this[t + 2] = e >>> 16),
                (this[t + 3] = e >>> 24))
              : C(this, e, t, !0),
            t + 4
          );
        }),
        (u.prototype.writeInt32BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || P(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : C(this, e, t, !1),
            t + 4
          );
        }),
        (u.prototype.writeFloatLE = function (e, t, n) {
          return I(this, e, t, !0, n);
        }),
        (u.prototype.writeFloatBE = function (e, t, n) {
          return I(this, e, t, !1, n);
        }),
        (u.prototype.writeDoubleLE = function (e, t, n) {
          return D(this, e, t, !0, n);
        }),
        (u.prototype.writeDoubleBE = function (e, t, n) {
          return D(this, e, t, !1, n);
        }),
        (u.prototype.copy = function (e, t, n, r) {
          if (
            (n || (n = 0),
            r || 0 === r || (r = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            r > 0 && r < n && (r = n),
            r === n)
          )
            return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError("targetStart out of bounds");
          if (n < 0 || n >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (r < 0) throw new RangeError("sourceEnd out of bounds");
          r > this.length && (r = this.length),
            e.length - t < r - n && (r = e.length - t + n);
          var i,
            o = r - n;
          if (this === e && n < t && t < r)
            for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
          else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
            for (i = 0; i < o; ++i) e[i + t] = this[i + n];
          else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
          return o;
        }),
        (u.prototype.fill = function (e, t, n, r) {
          if ("string" == typeof e) {
            if (
              ("string" == typeof t
                ? ((r = t), (t = 0), (n = this.length))
                : "string" == typeof n && ((r = n), (n = this.length)),
              1 === e.length)
            ) {
              var i = e.charCodeAt(0);
              i < 256 && (e = i);
            }
            if (void 0 !== r && "string" != typeof r)
              throw new TypeError("encoding must be a string");
            if ("string" == typeof r && !u.isEncoding(r))
              throw new TypeError("Unknown encoding: " + r);
          } else "number" == typeof e && (e &= 255);
          if (t < 0 || this.length < t || this.length < n)
            throw new RangeError("Out of range index");
          if (n <= t) return this;
          var o;
          if (
            ((t >>>= 0),
            (n = void 0 === n ? this.length : n >>> 0),
            e || (e = 0),
            "number" == typeof e)
          )
            for (o = t; o < n; ++o) this[o] = e;
          else {
            var a = u.isBuffer(e) ? e : W(new u(e, r).toString()),
              s = a.length;
            for (o = 0; o < n - t; ++o) this[o + t] = a[o % s];
          }
          return this;
        });
      var B = /[^+\/0-9A-Za-z-_]/g;
      function U(e) {
        return e < 16 ? "0" + e.toString(16) : e.toString(16);
      }
      function W(e, t) {
        var n;
        t = t || 1 / 0;
        for (var r = e.length, i = null, o = [], a = 0; a < r; ++a) {
          if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
            if (!i) {
              if (n > 56319) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              if (a + 1 === r) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = n;
              continue;
            }
            if (n < 56320) {
              (t -= 3) > -1 && o.push(239, 191, 189), (i = n);
              continue;
            }
            n = 65536 + (((i - 55296) << 10) | (n - 56320));
          } else i && (t -= 3) > -1 && o.push(239, 191, 189);
          if (((i = null), n < 128)) {
            if ((t -= 1) < 0) break;
            o.push(n);
          } else if (n < 2048) {
            if ((t -= 2) < 0) break;
            o.push((n >> 6) | 192, (63 & n) | 128);
          } else if (n < 65536) {
            if ((t -= 3) < 0) break;
            o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
          } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            o.push(
              (n >> 18) | 240,
              ((n >> 12) & 63) | 128,
              ((n >> 6) & 63) | 128,
              (63 & n) | 128
            );
          }
        }
        return o;
      }
      function q(e) {
        return r.toByteArray(
          (function (e) {
            if (
              (e = (function (e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
              })(e).replace(B, "")).length < 2
            )
              return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
          })(e)
        );
      }
      function F(e, t, n, r) {
        for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i)
          t[i + n] = e[i];
        return i;
      }
    }).call(this, n(2));
  },
  function (e, t, n) {
    "use strict";
    var r = n(47).Buffer,
      i =
        r.isEncoding ||
        function (e) {
          switch ((e = "" + e) && e.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
              return !0;
            default:
              return !1;
          }
        };
    function o(e) {
      var t;
      switch (
        ((this.encoding = (function (e) {
          var t = (function (e) {
            if (!e) return "utf8";
            for (var t; ; )
              switch (e) {
                case "utf8":
                case "utf-8":
                  return "utf8";
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return "utf16le";
                case "latin1":
                case "binary":
                  return "latin1";
                case "base64":
                case "ascii":
                case "hex":
                  return e;
                default:
                  if (t) return;
                  (e = ("" + e).toLowerCase()), (t = !0);
              }
          })(e);
          if ("string" != typeof t && (r.isEncoding === i || !i(e)))
            throw new Error("Unknown encoding: " + e);
          return t || e;
        })(e)),
        this.encoding)
      ) {
        case "utf16le":
          (this.text = u), (this.end = l), (t = 4);
          break;
        case "utf8":
          (this.fillLast = s), (t = 4);
          break;
        case "base64":
          (this.text = f), (this.end = c), (t = 3);
          break;
        default:
          return (this.write = h), void (this.end = d);
      }
      (this.lastNeed = 0),
        (this.lastTotal = 0),
        (this.lastChar = r.allocUnsafe(t));
    }
    function a(e) {
      return e <= 127
        ? 0
        : e >> 5 == 6
        ? 2
        : e >> 4 == 14
        ? 3
        : e >> 3 == 30
        ? 4
        : e >> 6 == 2
        ? -1
        : -2;
    }
    function s(e) {
      var t = this.lastTotal - this.lastNeed,
        n = (function (e, t, n) {
          if (128 != (192 & t[0])) return (e.lastNeed = 0), "�";
          if (e.lastNeed > 1 && t.length > 1) {
            if (128 != (192 & t[1])) return (e.lastNeed = 1), "�";
            if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
              return (e.lastNeed = 2), "�";
          }
        })(this, e);
      return void 0 !== n
        ? n
        : this.lastNeed <= e.length
        ? (e.copy(this.lastChar, t, 0, this.lastNeed),
          this.lastChar.toString(this.encoding, 0, this.lastTotal))
        : (e.copy(this.lastChar, t, 0, e.length),
          void (this.lastNeed -= e.length));
    }
    function u(e, t) {
      if ((e.length - t) % 2 == 0) {
        var n = e.toString("utf16le", t);
        if (n) {
          var r = n.charCodeAt(n.length - 1);
          if (r >= 55296 && r <= 56319)
            return (
              (this.lastNeed = 2),
              (this.lastTotal = 4),
              (this.lastChar[0] = e[e.length - 2]),
              (this.lastChar[1] = e[e.length - 1]),
              n.slice(0, -1)
            );
        }
        return n;
      }
      return (
        (this.lastNeed = 1),
        (this.lastTotal = 2),
        (this.lastChar[0] = e[e.length - 1]),
        e.toString("utf16le", t, e.length - 1)
      );
    }
    function l(e) {
      var t = e && e.length ? this.write(e) : "";
      if (this.lastNeed) {
        var n = this.lastTotal - this.lastNeed;
        return t + this.lastChar.toString("utf16le", 0, n);
      }
      return t;
    }
    function f(e, t) {
      var n = (e.length - t) % 3;
      return 0 === n
        ? e.toString("base64", t)
        : ((this.lastNeed = 3 - n),
          (this.lastTotal = 3),
          1 === n
            ? (this.lastChar[0] = e[e.length - 1])
            : ((this.lastChar[0] = e[e.length - 2]),
              (this.lastChar[1] = e[e.length - 1])),
          e.toString("base64", t, e.length - n));
    }
    function c(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed
        ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
        : t;
    }
    function h(e) {
      return e.toString(this.encoding);
    }
    function d(e) {
      return e && e.length ? this.write(e) : "";
    }
    (t.StringDecoder = o),
      (o.prototype.write = function (e) {
        if (0 === e.length) return "";
        var t, n;
        if (this.lastNeed) {
          if (void 0 === (t = this.fillLast(e))) return "";
          (n = this.lastNeed), (this.lastNeed = 0);
        } else n = 0;
        return n < e.length
          ? t
            ? t + this.text(e, n)
            : this.text(e, n)
          : t || "";
      }),
      (o.prototype.end = function (e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed ? t + "�" : t;
      }),
      (o.prototype.text = function (e, t) {
        var n = (function (e, t, n) {
          var r = t.length - 1;
          if (r < n) return 0;
          var i = a(t[r]);
          if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i;
          if (--r < n || -2 === i) return 0;
          if ((i = a(t[r])) >= 0) return i > 0 && (e.lastNeed = i - 2), i;
          if (--r < n || -2 === i) return 0;
          if ((i = a(t[r])) >= 0)
            return i > 0 && (2 === i ? (i = 0) : (e.lastNeed = i - 3)), i;
          return 0;
        })(this, e, t);
        if (!this.lastNeed) return e.toString("utf8", t);
        this.lastTotal = n;
        var r = e.length - (n - this.lastNeed);
        return e.copy(this.lastChar, 0, r), e.toString("utf8", t, r);
      }),
      (o.prototype.fillLast = function (e) {
        if (this.lastNeed <= e.length)
          return (
            e.copy(
              this.lastChar,
              this.lastTotal - this.lastNeed,
              0,
              this.lastNeed
            ),
            this.lastChar.toString(this.encoding, 0, this.lastTotal)
          );
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
          (this.lastNeed -= e.length);
      });
  },
  function (e, t, n) {
    "use strict";
    var r,
      i = "object" == typeof Reflect ? Reflect : null,
      o =
        i && "function" == typeof i.apply
          ? i.apply
          : function (e, t, n) {
              return Function.prototype.apply.call(e, t, n);
            };
    r =
      i && "function" == typeof i.ownKeys
        ? i.ownKeys
        : Object.getOwnPropertySymbols
        ? function (e) {
            return Object.getOwnPropertyNames(e).concat(
              Object.getOwnPropertySymbols(e)
            );
          }
        : function (e) {
            return Object.getOwnPropertyNames(e);
          };
    var a =
      Number.isNaN ||
      function (e) {
        return e != e;
      };
    function s() {
      s.init.call(this);
    }
    (e.exports = s),
      (s.EventEmitter = s),
      (s.prototype._events = void 0),
      (s.prototype._eventsCount = 0),
      (s.prototype._maxListeners = void 0);
    var u = 10;
    function l(e) {
      return void 0 === e._maxListeners
        ? s.defaultMaxListeners
        : e._maxListeners;
    }
    function f(e, t, n, r) {
      var i, o, a, s;
      if ("function" != typeof n)
        throw new TypeError(
          'The "listener" argument must be of type Function. Received type ' +
            typeof n
        );
      if (
        (void 0 === (o = e._events)
          ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
          : (void 0 !== o.newListener &&
              (e.emit("newListener", t, n.listener ? n.listener : n),
              (o = e._events)),
            (a = o[t])),
        void 0 === a)
      )
        (a = o[t] = n), ++e._eventsCount;
      else if (
        ("function" == typeof a
          ? (a = o[t] = r ? [n, a] : [a, n])
          : r
          ? a.unshift(n)
          : a.push(n),
        (i = l(e)) > 0 && a.length > i && !a.warned)
      ) {
        a.warned = !0;
        var u = new Error(
          "Possible EventEmitter memory leak detected. " +
            a.length +
            " " +
            String(t) +
            " listeners added. Use emitter.setMaxListeners() to increase limit"
        );
        (u.name = "MaxListenersExceededWarning"),
          (u.emitter = e),
          (u.type = t),
          (u.count = a.length),
          (s = u),
          console && console.warn && console.warn(s);
      }
      return e;
    }
    function c() {
      for (var e = [], t = 0; t < arguments.length; t++) e.push(arguments[t]);
      this.fired ||
        (this.target.removeListener(this.type, this.wrapFn),
        (this.fired = !0),
        o(this.listener, this.target, e));
    }
    function h(e, t, n) {
      var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
        i = c.bind(r);
      return (i.listener = n), (r.wrapFn = i), i;
    }
    function d(e, t, n) {
      var r = e._events;
      if (void 0 === r) return [];
      var i = r[t];
      return void 0 === i
        ? []
        : "function" == typeof i
        ? n
          ? [i.listener || i]
          : [i]
        : n
        ? (function (e) {
            for (var t = new Array(e.length), n = 0; n < t.length; ++n)
              t[n] = e[n].listener || e[n];
            return t;
          })(i)
        : b(i, i.length);
    }
    function p(e) {
      var t = this._events;
      if (void 0 !== t) {
        var n = t[e];
        if ("function" == typeof n) return 1;
        if (void 0 !== n) return n.length;
      }
      return 0;
    }
    function b(e, t) {
      for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
      return n;
    }
    Object.defineProperty(s, "defaultMaxListeners", {
      enumerable: !0,
      get: function () {
        return u;
      },
      set: function (e) {
        if ("number" != typeof e || e < 0 || a(e))
          throw new RangeError(
            'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
              e +
              "."
          );
        u = e;
      },
    }),
      (s.init = function () {
        (void 0 !== this._events &&
          this._events !== Object.getPrototypeOf(this)._events) ||
          ((this._events = Object.create(null)), (this._eventsCount = 0)),
          (this._maxListeners = this._maxListeners || void 0);
      }),
      (s.prototype.setMaxListeners = function (e) {
        if ("number" != typeof e || e < 0 || a(e))
          throw new RangeError(
            'The value of "n" is out of range. It must be a non-negative number. Received ' +
              e +
              "."
          );
        return (this._maxListeners = e), this;
      }),
      (s.prototype.getMaxListeners = function () {
        return l(this);
      }),
      (s.prototype.emit = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
        var r = "error" === e,
          i = this._events;
        if (void 0 !== i) r = r && void 0 === i.error;
        else if (!r) return !1;
        if (r) {
          var a;
          if ((t.length > 0 && (a = t[0]), a instanceof Error)) throw a;
          var s = new Error(
            "Unhandled error." + (a ? " (" + a.message + ")" : "")
          );
          throw ((s.context = a), s);
        }
        var u = i[e];
        if (void 0 === u) return !1;
        if ("function" == typeof u) o(u, this, t);
        else {
          var l = u.length,
            f = b(u, l);
          for (n = 0; n < l; ++n) o(f[n], this, t);
        }
        return !0;
      }),
      (s.prototype.addListener = function (e, t) {
        return f(this, e, t, !1);
      }),
      (s.prototype.on = s.prototype.addListener),
      (s.prototype.prependListener = function (e, t) {
        return f(this, e, t, !0);
      }),
      (s.prototype.once = function (e, t) {
        if ("function" != typeof t)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof t
          );
        return this.on(e, h(this, e, t)), this;
      }),
      (s.prototype.prependOnceListener = function (e, t) {
        if ("function" != typeof t)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof t
          );
        return this.prependListener(e, h(this, e, t)), this;
      }),
      (s.prototype.removeListener = function (e, t) {
        var n, r, i, o, a;
        if ("function" != typeof t)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof t
          );
        if (void 0 === (r = this._events)) return this;
        if (void 0 === (n = r[e])) return this;
        if (n === t || n.listener === t)
          0 == --this._eventsCount
            ? (this._events = Object.create(null))
            : (delete r[e],
              r.removeListener &&
                this.emit("removeListener", e, n.listener || t));
        else if ("function" != typeof n) {
          for (i = -1, o = n.length - 1; o >= 0; o--)
            if (n[o] === t || n[o].listener === t) {
              (a = n[o].listener), (i = o);
              break;
            }
          if (i < 0) return this;
          0 === i
            ? n.shift()
            : (function (e, t) {
                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                e.pop();
              })(n, i),
            1 === n.length && (r[e] = n[0]),
            void 0 !== r.removeListener &&
              this.emit("removeListener", e, a || t);
        }
        return this;
      }),
      (s.prototype.off = s.prototype.removeListener),
      (s.prototype.removeAllListeners = function (e) {
        var t, n, r;
        if (void 0 === (n = this._events)) return this;
        if (void 0 === n.removeListener)
          return (
            0 === arguments.length
              ? ((this._events = Object.create(null)), (this._eventsCount = 0))
              : void 0 !== n[e] &&
                (0 == --this._eventsCount
                  ? (this._events = Object.create(null))
                  : delete n[e]),
            this
          );
        if (0 === arguments.length) {
          var i,
            o = Object.keys(n);
          for (r = 0; r < o.length; ++r)
            "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
          return (
            this.removeAllListeners("removeListener"),
            (this._events = Object.create(null)),
            (this._eventsCount = 0),
            this
          );
        }
        if ("function" == typeof (t = n[e])) this.removeListener(e, t);
        else if (void 0 !== t)
          for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
        return this;
      }),
      (s.prototype.listeners = function (e) {
        return d(this, e, !0);
      }),
      (s.prototype.rawListeners = function (e) {
        return d(this, e, !1);
      }),
      (s.listenerCount = function (e, t) {
        return "function" == typeof e.listenerCount
          ? e.listenerCount(t)
          : p.call(e, t);
      }),
      (s.prototype.listenerCount = p),
      (s.prototype.eventNames = function () {
        return this._eventsCount > 0 ? r(this._events) : [];
      });
  },
  function (e, t, n) {
    "use strict";
    var r = {};
    function i(e, t, n) {
      n || (n = Error);
      var i = (function (e) {
        var n, r;
        function i(n, r, i) {
          return (
            e.call(
              this,
              (function (e, n, r) {
                return "string" == typeof t ? t : t(e, n, r);
              })(n, r, i)
            ) || this
          );
        }
        return (
          (r = e),
          ((n = i).prototype = Object.create(r.prototype)),
          (n.prototype.constructor = n),
          (n.__proto__ = r),
          i
        );
      })(n);
      (i.prototype.name = n.name), (i.prototype.code = e), (r[e] = i);
    }
    function o(e, t) {
      if (Array.isArray(e)) {
        var n = e.length;
        return (
          (e = e.map(function (e) {
            return String(e);
          })),
          n > 2
            ? "one of "
                .concat(t, " ")
                .concat(e.slice(0, n - 1).join(", "), ", or ") + e[n - 1]
            : 2 === n
            ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1])
            : "of ".concat(t, " ").concat(e[0])
        );
      }
      return "of ".concat(t, " ").concat(String(e));
    }
    i(
      "ERR_INVALID_OPT_VALUE",
      function (e, t) {
        return 'The value "' + t + '" is invalid for option "' + e + '"';
      },
      TypeError
    ),
      i(
        "ERR_INVALID_ARG_TYPE",
        function (e, t, n) {
          var r, i, a, s;
          if (
            ("string" == typeof t &&
            ((i = "not "), t.substr(!a || a < 0 ? 0 : +a, i.length) === i)
              ? ((r = "must not be"), (t = t.replace(/^not /, "")))
              : (r = "must be"),
            (function (e, t, n) {
              return (
                (void 0 === n || n > e.length) && (n = e.length),
                e.substring(n - t.length, n) === t
              );
            })(e, " argument"))
          )
            s = "The ".concat(e, " ").concat(r, " ").concat(o(t, "type"));
          else {
            var u = (function (e, t, n) {
              return (
                "number" != typeof n && (n = 0),
                !(n + t.length > e.length) && -1 !== e.indexOf(t, n)
              );
            })(e, ".")
              ? "property"
              : "argument";
            s = 'The "'
              .concat(e, '" ')
              .concat(u, " ")
              .concat(r, " ")
              .concat(o(t, "type"));
          }
          return (s += ". Received type ".concat(typeof n));
        },
        TypeError
      ),
      i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
      i("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
        return "The " + e + " method is not implemented";
      }),
      i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
      i("ERR_STREAM_DESTROYED", function (e) {
        return "Cannot call " + e + " after a stream was destroyed";
      }),
      i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
      i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
      i("ERR_STREAM_WRITE_AFTER_END", "write after end"),
      i(
        "ERR_STREAM_NULL_VALUES",
        "May not write null values to stream",
        TypeError
      ),
      i(
        "ERR_UNKNOWN_ENCODING",
        function (e) {
          return "Unknown encoding: " + e;
        },
        TypeError
      ),
      i(
        "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
        "stream.unshift() after end event"
      ),
      (e.exports.codes = r);
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var r =
        Object.keys ||
        function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return t;
        };
      e.exports = l;
      var i = n(20),
        o = n(24);
      n(1)(l, i);
      for (var a = r(o.prototype), s = 0; s < a.length; s++) {
        var u = a[s];
        l.prototype[u] || (l.prototype[u] = o.prototype[u]);
      }
      function l(e) {
        if (!(this instanceof l)) return new l(e);
        i.call(this, e),
          o.call(this, e),
          (this.allowHalfOpen = !0),
          e &&
            (!1 === e.readable && (this.readable = !1),
            !1 === e.writable && (this.writable = !1),
            !1 === e.allowHalfOpen &&
              ((this.allowHalfOpen = !1), this.once("end", f)));
      }
      function f() {
        this._writableState.ended || t.nextTick(c, this);
      }
      function c(e) {
        e.end();
      }
      Object.defineProperty(l.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function () {
          return this._writableState.highWaterMark;
        },
      }),
        Object.defineProperty(l.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(l.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(l.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            );
          },
          set: function (e) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = e),
              (this._writableState.destroyed = e));
          },
        });
    }).call(this, n(0));
  },
  function (e, t, n) {
    "use strict";
    var r = {};
    function i(e, t, n) {
      n || (n = Error);
      var i = (function (e) {
        var n, r;
        function i(n, r, i) {
          return (
            e.call(
              this,
              (function (e, n, r) {
                return "string" == typeof t ? t : t(e, n, r);
              })(n, r, i)
            ) || this
          );
        }
        return (
          (r = e),
          ((n = i).prototype = Object.create(r.prototype)),
          (n.prototype.constructor = n),
          (n.__proto__ = r),
          i
        );
      })(n);
      (i.prototype.name = n.name), (i.prototype.code = e), (r[e] = i);
    }
    function o(e, t) {
      if (Array.isArray(e)) {
        var n = e.length;
        return (
          (e = e.map(function (e) {
            return String(e);
          })),
          n > 2
            ? "one of "
                .concat(t, " ")
                .concat(e.slice(0, n - 1).join(", "), ", or ") + e[n - 1]
            : 2 === n
            ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1])
            : "of ".concat(t, " ").concat(e[0])
        );
      }
      return "of ".concat(t, " ").concat(String(e));
    }
    i(
      "ERR_INVALID_OPT_VALUE",
      function (e, t) {
        return 'The value "' + t + '" is invalid for option "' + e + '"';
      },
      TypeError
    ),
      i(
        "ERR_INVALID_ARG_TYPE",
        function (e, t, n) {
          var r, i, a, s;
          if (
            ("string" == typeof t &&
            ((i = "not "), t.substr(!a || a < 0 ? 0 : +a, i.length) === i)
              ? ((r = "must not be"), (t = t.replace(/^not /, "")))
              : (r = "must be"),
            (function (e, t, n) {
              return (
                (void 0 === n || n > e.length) && (n = e.length),
                e.substring(n - t.length, n) === t
              );
            })(e, " argument"))
          )
            s = "The ".concat(e, " ").concat(r, " ").concat(o(t, "type"));
          else {
            var u = (function (e, t, n) {
              return (
                "number" != typeof n && (n = 0),
                !(n + t.length > e.length) && -1 !== e.indexOf(t, n)
              );
            })(e, ".")
              ? "property"
              : "argument";
            s = 'The "'
              .concat(e, '" ')
              .concat(u, " ")
              .concat(r, " ")
              .concat(o(t, "type"));
          }
          return (s += ". Received type ".concat(typeof n));
        },
        TypeError
      ),
      i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
      i("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
        return "The " + e + " method is not implemented";
      }),
      i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
      i("ERR_STREAM_DESTROYED", function (e) {
        return "Cannot call " + e + " after a stream was destroyed";
      }),
      i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
      i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
      i("ERR_STREAM_WRITE_AFTER_END", "write after end"),
      i(
        "ERR_STREAM_NULL_VALUES",
        "May not write null values to stream",
        TypeError
      ),
      i(
        "ERR_UNKNOWN_ENCODING",
        function (e) {
          return "Unknown encoding: " + e;
        },
        TypeError
      ),
      i(
        "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
        "stream.unshift() after end event"
      ),
      (e.exports.codes = r);
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var r =
        Object.keys ||
        function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return t;
        };
      e.exports = l;
      var i = n(29),
        o = n(33);
      n(1)(l, i);
      for (var a = r(o.prototype), s = 0; s < a.length; s++) {
        var u = a[s];
        l.prototype[u] || (l.prototype[u] = o.prototype[u]);
      }
      function l(e) {
        if (!(this instanceof l)) return new l(e);
        i.call(this, e),
          o.call(this, e),
          (this.allowHalfOpen = !0),
          e &&
            (!1 === e.readable && (this.readable = !1),
            !1 === e.writable && (this.writable = !1),
            !1 === e.allowHalfOpen &&
              ((this.allowHalfOpen = !1), this.once("end", f)));
      }
      function f() {
        this._writableState.ended || t.nextTick(c, this);
      }
      function c(e) {
        e.end();
      }
      Object.defineProperty(l.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function () {
          return this._writableState.highWaterMark;
        },
      }),
        Object.defineProperty(l.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(l.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(l.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            );
          },
          set: function (e) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = e),
              (this._writableState.destroyed = e));
          },
        });
    }).call(this, n(0));
  },
  function (e, t, n) {
    "use strict";
    var r = {};
    function i(e, t, n) {
      n || (n = Error);
      var i = (function (e) {
        var n, r;
        function i(n, r, i) {
          return (
            e.call(
              this,
              (function (e, n, r) {
                return "string" == typeof t ? t : t(e, n, r);
              })(n, r, i)
            ) || this
          );
        }
        return (
          (r = e),
          ((n = i).prototype = Object.create(r.prototype)),
          (n.prototype.constructor = n),
          (n.__proto__ = r),
          i
        );
      })(n);
      (i.prototype.name = n.name), (i.prototype.code = e), (r[e] = i);
    }
    function o(e, t) {
      if (Array.isArray(e)) {
        var n = e.length;
        return (
          (e = e.map(function (e) {
            return String(e);
          })),
          n > 2
            ? "one of "
                .concat(t, " ")
                .concat(e.slice(0, n - 1).join(", "), ", or ") + e[n - 1]
            : 2 === n
            ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1])
            : "of ".concat(t, " ").concat(e[0])
        );
      }
      return "of ".concat(t, " ").concat(String(e));
    }
    i(
      "ERR_INVALID_OPT_VALUE",
      function (e, t) {
        return 'The value "' + t + '" is invalid for option "' + e + '"';
      },
      TypeError
    ),
      i(
        "ERR_INVALID_ARG_TYPE",
        function (e, t, n) {
          var r, i, a, s;
          if (
            ("string" == typeof t &&
            ((i = "not "), t.substr(!a || a < 0 ? 0 : +a, i.length) === i)
              ? ((r = "must not be"), (t = t.replace(/^not /, "")))
              : (r = "must be"),
            (function (e, t, n) {
              return (
                (void 0 === n || n > e.length) && (n = e.length),
                e.substring(n - t.length, n) === t
              );
            })(e, " argument"))
          )
            s = "The ".concat(e, " ").concat(r, " ").concat(o(t, "type"));
          else {
            var u = (function (e, t, n) {
              return (
                "number" != typeof n && (n = 0),
                !(n + t.length > e.length) && -1 !== e.indexOf(t, n)
              );
            })(e, ".")
              ? "property"
              : "argument";
            s = 'The "'
              .concat(e, '" ')
              .concat(u, " ")
              .concat(r, " ")
              .concat(o(t, "type"));
          }
          return (s += ". Received type ".concat(typeof n));
        },
        TypeError
      ),
      i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
      i("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
        return "The " + e + " method is not implemented";
      }),
      i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
      i("ERR_STREAM_DESTROYED", function (e) {
        return "Cannot call " + e + " after a stream was destroyed";
      }),
      i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
      i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
      i("ERR_STREAM_WRITE_AFTER_END", "write after end"),
      i(
        "ERR_STREAM_NULL_VALUES",
        "May not write null values to stream",
        TypeError
      ),
      i(
        "ERR_UNKNOWN_ENCODING",
        function (e) {
          return "Unknown encoding: " + e;
        },
        TypeError
      ),
      i(
        "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
        "stream.unshift() after end event"
      ),
      (e.exports.codes = r);
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var r =
        Object.keys ||
        function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return t;
        };
      e.exports = l;
      var i = n(36),
        o = n(40);
      n(1)(l, i);
      for (var a = r(o.prototype), s = 0; s < a.length; s++) {
        var u = a[s];
        l.prototype[u] || (l.prototype[u] = o.prototype[u]);
      }
      function l(e) {
        if (!(this instanceof l)) return new l(e);
        i.call(this, e),
          o.call(this, e),
          (this.allowHalfOpen = !0),
          e &&
            (!1 === e.readable && (this.readable = !1),
            !1 === e.writable && (this.writable = !1),
            !1 === e.allowHalfOpen &&
              ((this.allowHalfOpen = !1), this.once("end", f)));
      }
      function f() {
        this._writableState.ended || t.nextTick(c, this);
      }
      function c(e) {
        e.end();
      }
      Object.defineProperty(l.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function () {
          return this._writableState.highWaterMark;
        },
      }),
        Object.defineProperty(l.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(l.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(l.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            );
          },
          set: function (e) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = e),
              (this._writableState.destroyed = e));
          },
        });
    }).call(this, n(0));
  },
  function (e, t, n) {
    (function (t) {
      var n = "object" == typeof t && t && t.Object === Object && t,
        r = "object" == typeof self && self && self.Object === Object && self,
        i = (n || r || Function("return this")()).isFinite;
      e.exports = function (e) {
        return "number" == typeof e && i(e);
      };
    }).call(this, n(2));
  },
  function (e, t, n) {
    "use strict";
    var r = function (e) {
        return Math.round(1e10 * e) / 1e7;
      },
      i = function (e, t, n) {
        return n("rect", {
          x: r(e[0]),
          y: r(e[1]),
          width: r(e[2] - e[0]),
          height: r(e[3] - e[1]),
          fill: t,
        });
      };
    e.exports = {
      shift: r,
      maskLayer: function (e, t, n) {
        return n("g", { mask: "url(#" + e + ")" }, t);
      },
      createMask: function (e, t, n, r) {
        return r("mask", { id: e, fill: "#000", stroke: "#000" }, [
          r("g", {}, (n = [i(t, "#fff", r)].concat(n))),
        ]);
      },
    };
  },
  function (e, t, n) {
    (function (t) {
      function n(e) {
        try {
          if (!t.localStorage) return !1;
        } catch (e) {
          return !1;
        }
        var n = t.localStorage[e];
        return null != n && "true" === String(n).toLowerCase();
      }
      e.exports = function (e, t) {
        if (n("noDeprecation")) return e;
        var r = !1;
        return function () {
          if (!r) {
            if (n("throwDeprecation")) throw new Error(t);
            n("traceDeprecation") ? console.trace(t) : console.warn(t),
              (r = !0);
          }
          return e.apply(this, arguments);
        };
      };
    }).call(this, n(2));
  },
  function (e, t, n) {
    "use strict";
    var r = n(6).codes.ERR_STREAM_PREMATURE_CLOSE;
    function i() {}
    e.exports = function e(t, n, o) {
      if ("function" == typeof n) return e(t, null, n);
      n || (n = {}),
        (o = (function (e) {
          var t = !1;
          return function () {
            if (!t) {
              t = !0;
              for (
                var n = arguments.length, r = new Array(n), i = 0;
                i < n;
                i++
              )
                r[i] = arguments[i];
              e.apply(this, r);
            }
          };
        })(o || i));
      var a = n.readable || (!1 !== n.readable && t.readable),
        s = n.writable || (!1 !== n.writable && t.writable),
        u = function () {
          t.writable || f();
        },
        l = t._writableState && t._writableState.finished,
        f = function () {
          (s = !1), (l = !0), a || o.call(t);
        },
        c = t._readableState && t._readableState.endEmitted,
        h = function () {
          (a = !1), (c = !0), s || o.call(t);
        },
        d = function (e) {
          o.call(t, e);
        },
        p = function () {
          var e;
          return a && !c
            ? ((t._readableState && t._readableState.ended) || (e = new r()),
              o.call(t, e))
            : s && !l
            ? ((t._writableState && t._writableState.ended) || (e = new r()),
              o.call(t, e))
            : void 0;
        },
        b = function () {
          t.req.on("finish", f);
        };
      return (
        !(function (e) {
          return e.setHeader && "function" == typeof e.abort;
        })(t)
          ? s && !t._writableState && (t.on("end", u), t.on("close", u))
          : (t.on("complete", f),
            t.on("abort", p),
            t.req ? b() : t.on("request", b)),
        t.on("end", h),
        t.on("finish", f),
        !1 !== n.error && t.on("error", d),
        t.on("close", p),
        function () {
          t.removeListener("complete", f),
            t.removeListener("abort", p),
            t.removeListener("request", b),
            t.req && t.req.removeListener("finish", f),
            t.removeListener("end", u),
            t.removeListener("close", u),
            t.removeListener("finish", f),
            t.removeListener("end", h),
            t.removeListener("error", d),
            t.removeListener("close", p);
        }
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(12),
      i = n(62),
      o = n(63);
    e.exports = function (e, t) {
      if (null == e) return NaN;
      var n = "" + e,
        a = "+";
      if (
        (("-" !== n[0] && "+" !== n[0]) || ((a = n[0]), (n = n.slice(1))),
        -1 !== n.indexOf(".") || null == t || null == t.zero)
      )
        return Number(a + n);
      if (null == t.places || 2 !== t.places.length) return NaN;
      var s = t.places[0],
        u = t.places[1];
      if (!r(s) || !r(u)) return NaN;
      if ("T" === t.zero) n = o(n, s + u, "0");
      else {
        if ("L" !== t.zero) return NaN;
        n = i(n, s + u, "0");
      }
      var l = n.slice(0, s),
        f = n.slice(s, s + u);
      return Number(a + l + "." + f);
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(8).codes.ERR_STREAM_PREMATURE_CLOSE;
    function i() {}
    e.exports = function e(t, n, o) {
      if ("function" == typeof n) return e(t, null, n);
      n || (n = {}),
        (o = (function (e) {
          var t = !1;
          return function () {
            if (!t) {
              t = !0;
              for (
                var n = arguments.length, r = new Array(n), i = 0;
                i < n;
                i++
              )
                r[i] = arguments[i];
              e.apply(this, r);
            }
          };
        })(o || i));
      var a = n.readable || (!1 !== n.readable && t.readable),
        s = n.writable || (!1 !== n.writable && t.writable),
        u = function () {
          t.writable || f();
        },
        l = t._writableState && t._writableState.finished,
        f = function () {
          (s = !1), (l = !0), a || o.call(t);
        },
        c = t._readableState && t._readableState.endEmitted,
        h = function () {
          (a = !1), (c = !0), s || o.call(t);
        },
        d = function (e) {
          o.call(t, e);
        },
        p = function () {
          var e;
          return a && !c
            ? ((t._readableState && t._readableState.ended) || (e = new r()),
              o.call(t, e))
            : s && !l
            ? ((t._writableState && t._writableState.ended) || (e = new r()),
              o.call(t, e))
            : void 0;
        },
        b = function () {
          t.req.on("finish", f);
        };
      return (
        !(function (e) {
          return e.setHeader && "function" == typeof e.abort;
        })(t)
          ? s && !t._writableState && (t.on("end", u), t.on("close", u))
          : (t.on("complete", f),
            t.on("abort", p),
            t.req ? b() : t.on("request", b)),
        t.on("end", h),
        t.on("finish", f),
        !1 !== n.error && t.on("error", d),
        t.on("close", p),
        function () {
          t.removeListener("complete", f),
            t.removeListener("abort", p),
            t.removeListener("request", b),
            t.req && t.req.removeListener("finish", f),
            t.removeListener("end", u),
            t.removeListener("close", u),
            t.removeListener("finish", f),
            t.removeListener("end", h),
            t.removeListener("error", d),
            t.removeListener("close", p);
        }
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = function (e, t) {
        return [
          Math.min(e[0], t[0]),
          Math.min(e[1], t[1]),
          Math.max(e[2], t[2]),
          Math.max(e[3], t[3]),
        ];
      },
      i = function (e, t) {
        var n = t[0],
          r = t[1];
        return [e[0] + n, e[1] + r, e[2] + n, e[3] + r];
      };
    e.exports = {
      new: function () {
        return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
      },
      add: r,
      addPoint: function (e, t) {
        return [
          Math.min(e[0], t[0]),
          Math.min(e[1], t[1]),
          Math.max(e[2], t[0]),
          Math.max(e[3], t[1]),
        ];
      },
      addCircle: function (e, t, n, r) {
        return [
          Math.min(e[0], n - t),
          Math.min(e[1], r - t),
          Math.max(e[2], n + t),
          Math.max(e[3], r + t),
        ];
      },
      translate: i,
      repeat: function (e, t) {
        return r(e, i(e, t));
      },
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(10).codes.ERR_STREAM_PREMATURE_CLOSE;
    function i() {}
    e.exports = function e(t, n, o) {
      if ("function" == typeof n) return e(t, null, n);
      n || (n = {}),
        (o = (function (e) {
          var t = !1;
          return function () {
            if (!t) {
              t = !0;
              for (
                var n = arguments.length, r = new Array(n), i = 0;
                i < n;
                i++
              )
                r[i] = arguments[i];
              e.apply(this, r);
            }
          };
        })(o || i));
      var a = n.readable || (!1 !== n.readable && t.readable),
        s = n.writable || (!1 !== n.writable && t.writable),
        u = function () {
          t.writable || f();
        },
        l = t._writableState && t._writableState.finished,
        f = function () {
          (s = !1), (l = !0), a || o.call(t);
        },
        c = t._readableState && t._readableState.endEmitted,
        h = function () {
          (a = !1), (c = !0), s || o.call(t);
        },
        d = function (e) {
          o.call(t, e);
        },
        p = function () {
          var e;
          return a && !c
            ? ((t._readableState && t._readableState.ended) || (e = new r()),
              o.call(t, e))
            : s && !l
            ? ((t._writableState && t._writableState.ended) || (e = new r()),
              o.call(t, e))
            : void 0;
        },
        b = function () {
          t.req.on("finish", f);
        };
      return (
        !(function (e) {
          return e.setHeader && "function" == typeof e.abort;
        })(t)
          ? s && !t._writableState && (t.on("end", u), t.on("close", u))
          : (t.on("complete", f),
            t.on("abort", p),
            t.req ? b() : t.on("request", b)),
        t.on("end", h),
        t.on("finish", f),
        !1 !== n.error && t.on("error", d),
        t.on("close", p),
        function () {
          t.removeListener("complete", f),
            t.removeListener("abort", p),
            t.removeListener("request", b),
            t.req && t.req.removeListener("finish", f),
            t.removeListener("end", u),
            t.removeListener("close", u),
            t.removeListener("finish", f),
            t.removeListener("end", h),
            t.removeListener("error", d),
            t.removeListener("close", p);
        }
      );
    };
  },
  function (e, t, n) {
    "use strict";
    (function (t, r) {
      var i;
      (e.exports = R), (R.ReadableState = E);
      n(5).EventEmitter;
      var o = function (e, t) {
          return e.listeners(t).length;
        },
        a = n(21),
        s = n(3).Buffer,
        u = t.Uint8Array || function () {};
      var l,
        f = n(52);
      l = f && f.debuglog ? f.debuglog("stream") : function () {};
      var c,
        h,
        d = n(53),
        p = n(22),
        b = n(23).getHighWaterMark,
        g = n(6).codes,
        y = g.ERR_INVALID_ARG_TYPE,
        _ = g.ERR_STREAM_PUSH_AFTER_EOF,
        v = g.ERR_METHOD_NOT_IMPLEMENTED,
        m = g.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,
        w = n(55).emitExperimentalWarning;
      n(1)(R, a);
      var S = ["error", "close", "destroy", "pause", "resume"];
      function E(e, t, r) {
        (i = i || n(7)),
          (e = e || {}),
          "boolean" != typeof r && (r = t instanceof i),
          (this.objectMode = !!e.objectMode),
          r && (this.objectMode = this.objectMode || !!e.readableObjectMode),
          (this.highWaterMark = b(this, e, "readableHighWaterMark", r)),
          (this.buffer = new d()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.paused = !0),
          (this.emitClose = !1 !== e.emitClose),
          (this.destroyed = !1),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          e.encoding &&
            (c || (c = n(4).StringDecoder),
            (this.decoder = new c(e.encoding)),
            (this.encoding = e.encoding));
      }
      function R(e) {
        if (((i = i || n(7)), !(this instanceof R))) return new R(e);
        var t = this instanceof i;
        (this._readableState = new E(e, this, t)),
          (this.readable = !0),
          e &&
            ("function" == typeof e.read && (this._read = e.read),
            "function" == typeof e.destroy && (this._destroy = e.destroy)),
          a.call(this);
      }
      function k(e, t, n, r, i) {
        l("readableAddChunk", t);
        var o,
          a = e._readableState;
        if (null === t)
          (a.reading = !1),
            (function (e, t) {
              if (t.ended) return;
              if (t.decoder) {
                var n = t.decoder.end();
                n &&
                  n.length &&
                  (t.buffer.push(n), (t.length += t.objectMode ? 1 : n.length));
              }
              (t.ended = !0),
                t.sync
                  ? T(e)
                  : ((t.needReadable = !1),
                    t.emittedReadable || ((t.emittedReadable = !0), A(e)));
            })(e, a);
        else if (
          (i ||
            (o = (function (e, t) {
              var n;
              (r = t),
                s.isBuffer(r) ||
                  r instanceof u ||
                  "string" == typeof t ||
                  void 0 === t ||
                  e.objectMode ||
                  (n = new y("chunk", ["string", "Buffer", "Uint8Array"], t));
              var r;
              return n;
            })(a, t)),
          o)
        )
          e.emit("error", o);
        else if (a.objectMode || (t && t.length > 0))
          if (
            ("string" == typeof t ||
              a.objectMode ||
              Object.getPrototypeOf(t) === s.prototype ||
              (t = (function (e) {
                return s.from(e);
              })(t)),
            r)
          )
            a.endEmitted ? e.emit("error", new m()) : x(e, a, t, !0);
          else if (a.ended) e.emit("error", new _());
          else {
            if (a.destroyed) return !1;
            (a.reading = !1),
              a.decoder && !n
                ? ((t = a.decoder.write(t)),
                  a.objectMode || 0 !== t.length ? x(e, a, t, !1) : L(e, a))
                : x(e, a, t, !1);
          }
        else r || ((a.reading = !1), L(e, a));
        return !a.ended && (a.length < a.highWaterMark || 0 === a.length);
      }
      function x(e, t, n, r) {
        t.flowing && 0 === t.length && !t.sync
          ? ((t.awaitDrain = 0), e.emit("data", n))
          : ((t.length += t.objectMode ? 1 : n.length),
            r ? t.buffer.unshift(n) : t.buffer.push(n),
            t.needReadable && T(e)),
          L(e, t);
      }
      Object.defineProperty(R.prototype, "destroyed", {
        enumerable: !1,
        get: function () {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function (e) {
          this._readableState && (this._readableState.destroyed = e);
        },
      }),
        (R.prototype.destroy = p.destroy),
        (R.prototype._undestroy = p.undestroy),
        (R.prototype._destroy = function (e, t) {
          t(e);
        }),
        (R.prototype.push = function (e, t) {
          var n,
            r = this._readableState;
          return (
            r.objectMode
              ? (n = !0)
              : "string" == typeof e &&
                ((t = t || r.defaultEncoding) !== r.encoding &&
                  ((e = s.from(e, t)), (t = "")),
                (n = !0)),
            k(this, e, t, !1, n)
          );
        }),
        (R.prototype.unshift = function (e) {
          return k(this, e, null, !0, !1);
        }),
        (R.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }),
        (R.prototype.setEncoding = function (e) {
          return (
            c || (c = n(4).StringDecoder),
            (this._readableState.decoder = new c(e)),
            (this._readableState.encoding =
              this._readableState.decoder.encoding),
            this
          );
        });
      function M(e, t) {
        return e <= 0 || (0 === t.length && t.ended)
          ? 0
          : t.objectMode
          ? 1
          : e != e
          ? t.flowing && t.length
            ? t.buffer.head.data.length
            : t.length
          : (e > t.highWaterMark &&
              (t.highWaterMark = (function (e) {
                return (
                  e >= 8388608
                    ? (e = 8388608)
                    : (e--,
                      (e |= e >>> 1),
                      (e |= e >>> 2),
                      (e |= e >>> 4),
                      (e |= e >>> 8),
                      (e |= e >>> 16),
                      e++),
                  e
                );
              })(e)),
            e <= t.length
              ? e
              : t.ended
              ? t.length
              : ((t.needReadable = !0), 0));
      }
      function T(e) {
        var t = e._readableState;
        (t.needReadable = !1),
          t.emittedReadable ||
            (l("emitReadable", t.flowing),
            (t.emittedReadable = !0),
            r.nextTick(A, e));
      }
      function A(e) {
        var t = e._readableState;
        l("emitReadable_", t.destroyed, t.length, t.ended),
          t.destroyed || (!t.length && !t.ended) || e.emit("readable"),
          (t.needReadable =
            !t.flowing && !t.ended && t.length <= t.highWaterMark),
          N(e);
      }
      function L(e, t) {
        t.readingMore || ((t.readingMore = !0), r.nextTick(O, e, t));
      }
      function O(e, t) {
        for (
          ;
          !t.reading &&
          !t.ended &&
          (t.length < t.highWaterMark || (t.flowing && 0 === t.length));

        ) {
          var n = t.length;
          if ((l("maybeReadMore read 0"), e.read(0), n === t.length)) break;
        }
        t.readingMore = !1;
      }
      function P(e) {
        var t = e._readableState;
        (t.readableListening = e.listenerCount("readable") > 0),
          t.resumeScheduled && !t.paused
            ? (t.flowing = !0)
            : e.listenerCount("data") > 0 && e.resume();
      }
      function j(e) {
        l("readable nexttick read 0"), e.read(0);
      }
      function C(e, t) {
        l("resume", t.reading),
          t.reading || e.read(0),
          (t.resumeScheduled = !1),
          e.emit("resume"),
          N(e),
          t.flowing && !t.reading && e.read(0);
      }
      function N(e) {
        var t = e._readableState;
        for (l("flow", t.flowing); t.flowing && null !== e.read(); );
      }
      function I(e, t) {
        return 0 === t.length
          ? null
          : (t.objectMode
              ? (n = t.buffer.shift())
              : !e || e >= t.length
              ? ((n = t.decoder
                  ? t.buffer.join("")
                  : 1 === t.buffer.length
                  ? t.buffer.first()
                  : t.buffer.concat(t.length)),
                t.buffer.clear())
              : (n = t.buffer.consume(e, t.decoder)),
            n);
        var n;
      }
      function D(e) {
        var t = e._readableState;
        l("endReadable", t.endEmitted),
          t.endEmitted || ((t.ended = !0), r.nextTick(B, t, e));
      }
      function B(e, t) {
        l("endReadableNT", e.endEmitted, e.length),
          e.endEmitted ||
            0 !== e.length ||
            ((e.endEmitted = !0), (t.readable = !1), t.emit("end"));
      }
      function U(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      }
      (R.prototype.read = function (e) {
        l("read", e), (e = parseInt(e, 10));
        var t = this._readableState,
          n = e;
        if (
          (0 !== e && (t.emittedReadable = !1),
          0 === e &&
            t.needReadable &&
            ((0 !== t.highWaterMark
              ? t.length >= t.highWaterMark
              : t.length > 0) ||
              t.ended))
        )
          return (
            l("read: emitReadable", t.length, t.ended),
            0 === t.length && t.ended ? D(this) : T(this),
            null
          );
        if (0 === (e = M(e, t)) && t.ended)
          return 0 === t.length && D(this), null;
        var r,
          i = t.needReadable;
        return (
          l("need readable", i),
          (0 === t.length || t.length - e < t.highWaterMark) &&
            l("length less than watermark", (i = !0)),
          t.ended || t.reading
            ? l("reading or ended", (i = !1))
            : i &&
              (l("do read"),
              (t.reading = !0),
              (t.sync = !0),
              0 === t.length && (t.needReadable = !0),
              this._read(t.highWaterMark),
              (t.sync = !1),
              t.reading || (e = M(n, t))),
          null === (r = e > 0 ? I(e, t) : null)
            ? ((t.needReadable = !0), (e = 0))
            : ((t.length -= e), (t.awaitDrain = 0)),
          0 === t.length &&
            (t.ended || (t.needReadable = !0), n !== e && t.ended && D(this)),
          null !== r && this.emit("data", r),
          r
        );
      }),
        (R.prototype._read = function (e) {
          this.emit("error", new v("_read()"));
        }),
        (R.prototype.pipe = function (e, t) {
          var n = this,
            i = this._readableState;
          switch (i.pipesCount) {
            case 0:
              i.pipes = e;
              break;
            case 1:
              i.pipes = [i.pipes, e];
              break;
            default:
              i.pipes.push(e);
          }
          (i.pipesCount += 1), l("pipe count=%d opts=%j", i.pipesCount, t);
          var a =
            (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr ? u : g;
          function s(t, r) {
            l("onunpipe"),
              t === n &&
                r &&
                !1 === r.hasUnpiped &&
                ((r.hasUnpiped = !0),
                l("cleanup"),
                e.removeListener("close", p),
                e.removeListener("finish", b),
                e.removeListener("drain", f),
                e.removeListener("error", d),
                e.removeListener("unpipe", s),
                n.removeListener("end", u),
                n.removeListener("end", g),
                n.removeListener("data", h),
                (c = !0),
                !i.awaitDrain ||
                  (e._writableState && !e._writableState.needDrain) ||
                  f());
          }
          function u() {
            l("onend"), e.end();
          }
          i.endEmitted ? r.nextTick(a) : n.once("end", a), e.on("unpipe", s);
          var f = (function (e) {
            return function () {
              var t = e._readableState;
              l("pipeOnDrain", t.awaitDrain),
                t.awaitDrain && t.awaitDrain--,
                0 === t.awaitDrain && o(e, "data") && ((t.flowing = !0), N(e));
            };
          })(n);
          e.on("drain", f);
          var c = !1;
          function h(t) {
            l("ondata");
            var r = e.write(t);
            l("dest.write", r),
              !1 === r &&
                (((1 === i.pipesCount && i.pipes === e) ||
                  (i.pipesCount > 1 && -1 !== U(i.pipes, e))) &&
                  !c &&
                  (l("false write response, pause", i.awaitDrain),
                  i.awaitDrain++),
                n.pause());
          }
          function d(t) {
            l("onerror", t),
              g(),
              e.removeListener("error", d),
              0 === o(e, "error") && e.emit("error", t);
          }
          function p() {
            e.removeListener("finish", b), g();
          }
          function b() {
            l("onfinish"), e.removeListener("close", p), g();
          }
          function g() {
            l("unpipe"), n.unpipe(e);
          }
          return (
            n.on("data", h),
            (function (e, t, n) {
              if ("function" == typeof e.prependListener)
                return e.prependListener(t, n);
              e._events && e._events[t]
                ? Array.isArray(e._events[t])
                  ? e._events[t].unshift(n)
                  : (e._events[t] = [n, e._events[t]])
                : e.on(t, n);
            })(e, "error", d),
            e.once("close", p),
            e.once("finish", b),
            e.emit("pipe", n),
            i.flowing || (l("pipe resume"), n.resume()),
            e
          );
        }),
        (R.prototype.unpipe = function (e) {
          var t = this._readableState,
            n = { hasUnpiped: !1 };
          if (0 === t.pipesCount) return this;
          if (1 === t.pipesCount)
            return (
              (e && e !== t.pipes) ||
                (e || (e = t.pipes),
                (t.pipes = null),
                (t.pipesCount = 0),
                (t.flowing = !1),
                e && e.emit("unpipe", this, n)),
              this
            );
          if (!e) {
            var r = t.pipes,
              i = t.pipesCount;
            (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
            for (var o = 0; o < i; o++)
              r[o].emit("unpipe", this, { hasUnpiped: !1 });
            return this;
          }
          var a = U(t.pipes, e);
          return (
            -1 === a ||
              (t.pipes.splice(a, 1),
              (t.pipesCount -= 1),
              1 === t.pipesCount && (t.pipes = t.pipes[0]),
              e.emit("unpipe", this, n)),
            this
          );
        }),
        (R.prototype.on = function (e, t) {
          var n = a.prototype.on.call(this, e, t),
            i = this._readableState;
          return (
            "data" === e
              ? ((i.readableListening = this.listenerCount("readable") > 0),
                !1 !== i.flowing && this.resume())
              : "readable" === e &&
                (i.endEmitted ||
                  i.readableListening ||
                  ((i.readableListening = i.needReadable = !0),
                  (i.flowing = !1),
                  (i.emittedReadable = !1),
                  l("on readable", i.length, i.reading),
                  i.length ? T(this) : i.reading || r.nextTick(j, this))),
            n
          );
        }),
        (R.prototype.addListener = R.prototype.on),
        (R.prototype.removeListener = function (e, t) {
          var n = a.prototype.removeListener.call(this, e, t);
          return "readable" === e && r.nextTick(P, this), n;
        }),
        (R.prototype.removeAllListeners = function (e) {
          var t = a.prototype.removeAllListeners.apply(this, arguments);
          return ("readable" !== e && void 0 !== e) || r.nextTick(P, this), t;
        }),
        (R.prototype.resume = function () {
          var e = this._readableState;
          return (
            e.flowing ||
              (l("resume"),
              (e.flowing = !e.readableListening),
              (function (e, t) {
                t.resumeScheduled ||
                  ((t.resumeScheduled = !0), r.nextTick(C, e, t));
              })(this, e)),
            (e.paused = !1),
            this
          );
        }),
        (R.prototype.pause = function () {
          return (
            l("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (l("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            (this._readableState.paused = !0),
            this
          );
        }),
        (R.prototype.wrap = function (e) {
          var t = this,
            n = this._readableState,
            r = !1;
          for (var i in (e.on("end", function () {
            if ((l("wrapped end"), n.decoder && !n.ended)) {
              var e = n.decoder.end();
              e && e.length && t.push(e);
            }
            t.push(null);
          }),
          e.on("data", function (i) {
            (l("wrapped data"),
            n.decoder && (i = n.decoder.write(i)),
            n.objectMode && null == i) ||
              ((n.objectMode || (i && i.length)) &&
                (t.push(i) || ((r = !0), e.pause())));
          }),
          e))
            void 0 === this[i] &&
              "function" == typeof e[i] &&
              (this[i] = (function (t) {
                return function () {
                  return e[t].apply(e, arguments);
                };
              })(i));
          for (var o = 0; o < S.length; o++)
            e.on(S[o], this.emit.bind(this, S[o]));
          return (
            (this._read = function (t) {
              l("wrapped _read", t), r && ((r = !1), e.resume());
            }),
            this
          );
        }),
        "function" == typeof Symbol &&
          (R.prototype[Symbol.asyncIterator] = function () {
            return (
              w("Readable[Symbol.asyncIterator]"),
              void 0 === h && (h = n(56)),
              h(this)
            );
          }),
        Object.defineProperty(R.prototype, "readableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._readableState.highWaterMark;
          },
        }),
        Object.defineProperty(R.prototype, "readableBuffer", {
          enumerable: !1,
          get: function () {
            return this._readableState && this._readableState.buffer;
          },
        }),
        Object.defineProperty(R.prototype, "readableFlowing", {
          enumerable: !1,
          get: function () {
            return this._readableState.flowing;
          },
          set: function (e) {
            this._readableState && (this._readableState.flowing = e);
          },
        }),
        (R._fromList = I),
        Object.defineProperty(R.prototype, "readableLength", {
          enumerable: !1,
          get: function () {
            return this._readableState.length;
          },
        });
    }).call(this, n(2), n(0));
  },
  function (e, t, n) {
    e.exports = n(5).EventEmitter;
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      function n(e, t) {
        i(e, t), r(e);
      }
      function r(e) {
        (e._writableState && !e._writableState.emitClose) ||
          (e._readableState && !e._readableState.emitClose) ||
          e.emit("close");
      }
      function i(e, t) {
        e.emit("error", t);
      }
      e.exports = {
        destroy: function (e, o) {
          var a = this,
            s = this._readableState && this._readableState.destroyed,
            u = this._writableState && this._writableState.destroyed;
          return s || u
            ? (o
                ? o(e)
                : !e ||
                  (this._writableState && this._writableState.errorEmitted) ||
                  t.nextTick(i, this, e),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(e || null, function (e) {
                !o && e
                  ? (t.nextTick(n, a, e),
                    a._writableState && (a._writableState.errorEmitted = !0))
                  : o
                  ? (t.nextTick(r, a), o(e))
                  : t.nextTick(r, a);
              }),
              this);
        },
        undestroy: function () {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finalCalled = !1),
              (this._writableState.prefinished = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1));
        },
      };
    }).call(this, n(0));
  },
  function (e, t, n) {
    "use strict";
    var r = n(6).codes.ERR_INVALID_OPT_VALUE;
    e.exports = {
      getHighWaterMark: function (e, t, n, i) {
        var o = (function (e, t, n) {
          return null != e.highWaterMark ? e.highWaterMark : t ? e[n] : null;
        })(t, i, n);
        if (null != o) {
          if (!isFinite(o) || Math.floor(o) !== o || o < 0)
            throw new r(i ? n : "highWaterMark", o);
          return Math.floor(o);
        }
        return e.objectMode ? 16 : 16384;
      },
    };
  },
  function (e, t, n) {
    "use strict";
    (function (t, r) {
      function i(e) {
        var t = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            !(function (e, t, n) {
              var r = e.entry;
              e.entry = null;
              for (; r; ) {
                var i = r.callback;
                t.pendingcb--, i(n), (r = r.next);
              }
              t.corkedRequestsFree.next = e;
            })(t, e);
          });
      }
      var o;
      (e.exports = R), (R.WritableState = E);
      var a = { deprecate: n(14) },
        s = n(21),
        u = n(3).Buffer,
        l = t.Uint8Array || function () {};
      var f,
        c = n(22),
        h = n(23).getHighWaterMark,
        d = n(6).codes,
        p = d.ERR_INVALID_ARG_TYPE,
        b = d.ERR_METHOD_NOT_IMPLEMENTED,
        g = d.ERR_MULTIPLE_CALLBACK,
        y = d.ERR_STREAM_CANNOT_PIPE,
        _ = d.ERR_STREAM_DESTROYED,
        v = d.ERR_STREAM_NULL_VALUES,
        m = d.ERR_STREAM_WRITE_AFTER_END,
        w = d.ERR_UNKNOWN_ENCODING;
      function S() {}
      function E(e, t, a) {
        (o = o || n(7)),
          (e = e || {}),
          "boolean" != typeof a && (a = t instanceof o),
          (this.objectMode = !!e.objectMode),
          a && (this.objectMode = this.objectMode || !!e.writableObjectMode),
          (this.highWaterMark = h(this, e, "writableHighWaterMark", a)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var s = !1 === e.decodeStrings;
        (this.decodeStrings = !s),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (e) {
            !(function (e, t) {
              var n = e._writableState,
                i = n.sync,
                o = n.writecb;
              if ("function" != typeof o) throw new g();
              if (
                ((function (e) {
                  (e.writing = !1),
                    (e.writecb = null),
                    (e.length -= e.writelen),
                    (e.writelen = 0);
                })(n),
                t)
              )
                !(function (e, t, n, i, o) {
                  --t.pendingcb,
                    n
                      ? (r.nextTick(o, i),
                        r.nextTick(L, e, t),
                        (e._writableState.errorEmitted = !0),
                        e.emit("error", i))
                      : (o(i),
                        (e._writableState.errorEmitted = !0),
                        e.emit("error", i),
                        L(e, t));
                })(e, n, i, t, o);
              else {
                var a = T(n) || e.destroyed;
                a ||
                  n.corked ||
                  n.bufferProcessing ||
                  !n.bufferedRequest ||
                  M(e, n),
                  i ? r.nextTick(x, e, n, a, o) : x(e, n, a, o);
              }
            })(t, e);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.emitClose = !1 !== e.emitClose),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new i(this));
      }
      function R(e) {
        var t = this instanceof (o = o || n(7));
        if (!t && !f.call(R, this)) return new R(e);
        (this._writableState = new E(e, this, t)),
          (this.writable = !0),
          e &&
            ("function" == typeof e.write && (this._write = e.write),
            "function" == typeof e.writev && (this._writev = e.writev),
            "function" == typeof e.destroy && (this._destroy = e.destroy),
            "function" == typeof e.final && (this._final = e.final)),
          s.call(this);
      }
      function k(e, t, n, r, i, o, a) {
        (t.writelen = r),
          (t.writecb = a),
          (t.writing = !0),
          (t.sync = !0),
          t.destroyed
            ? t.onwrite(new _("write"))
            : n
            ? e._writev(i, t.onwrite)
            : e._write(i, o, t.onwrite),
          (t.sync = !1);
      }
      function x(e, t, n, r) {
        n ||
          (function (e, t) {
            0 === t.length &&
              t.needDrain &&
              ((t.needDrain = !1), e.emit("drain"));
          })(e, t),
          t.pendingcb--,
          r(),
          L(e, t);
      }
      function M(e, t) {
        t.bufferProcessing = !0;
        var n = t.bufferedRequest;
        if (e._writev && n && n.next) {
          var r = t.bufferedRequestCount,
            o = new Array(r),
            a = t.corkedRequestsFree;
          a.entry = n;
          for (var s = 0, u = !0; n; )
            (o[s] = n), n.isBuf || (u = !1), (n = n.next), (s += 1);
          (o.allBuffers = u),
            k(e, t, !0, t.length, o, "", a.finish),
            t.pendingcb++,
            (t.lastBufferedRequest = null),
            a.next
              ? ((t.corkedRequestsFree = a.next), (a.next = null))
              : (t.corkedRequestsFree = new i(t)),
            (t.bufferedRequestCount = 0);
        } else {
          for (; n; ) {
            var l = n.chunk,
              f = n.encoding,
              c = n.callback;
            if (
              (k(e, t, !1, t.objectMode ? 1 : l.length, l, f, c),
              (n = n.next),
              t.bufferedRequestCount--,
              t.writing)
            )
              break;
          }
          null === n && (t.lastBufferedRequest = null);
        }
        (t.bufferedRequest = n), (t.bufferProcessing = !1);
      }
      function T(e) {
        return (
          e.ending &&
          0 === e.length &&
          null === e.bufferedRequest &&
          !e.finished &&
          !e.writing
        );
      }
      function A(e, t) {
        e._final(function (n) {
          t.pendingcb--,
            n && e.emit("error", n),
            (t.prefinished = !0),
            e.emit("prefinish"),
            L(e, t);
        });
      }
      function L(e, t) {
        var n = T(t);
        return (
          n &&
            (!(function (e, t) {
              t.prefinished ||
                t.finalCalled ||
                ("function" != typeof e._final || t.destroyed
                  ? ((t.prefinished = !0), e.emit("prefinish"))
                  : (t.pendingcb++, (t.finalCalled = !0), r.nextTick(A, e, t)));
            })(e, t),
            0 === t.pendingcb && ((t.finished = !0), e.emit("finish"))),
          n
        );
      }
      n(1)(R, s),
        (E.prototype.getBuffer = function () {
          for (var e = this.bufferedRequest, t = []; e; )
            t.push(e), (e = e.next);
          return t;
        }),
        (function () {
          try {
            Object.defineProperty(E.prototype, "buffer", {
              get: a.deprecate(
                function () {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              ),
            });
          } catch (e) {}
        })(),
        "function" == typeof Symbol &&
        Symbol.hasInstance &&
        "function" == typeof Function.prototype[Symbol.hasInstance]
          ? ((f = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(R, Symbol.hasInstance, {
              value: function (e) {
                return (
                  !!f.call(this, e) ||
                  (this === R && e && e._writableState instanceof E)
                );
              },
            }))
          : (f = function (e) {
              return e instanceof this;
            }),
        (R.prototype.pipe = function () {
          this.emit("error", new y());
        }),
        (R.prototype.write = function (e, t, n) {
          var i,
            o = this._writableState,
            a = !1,
            s = !o.objectMode && ((i = e), u.isBuffer(i) || i instanceof l);
          return (
            s &&
              !u.isBuffer(e) &&
              (e = (function (e) {
                return u.from(e);
              })(e)),
            "function" == typeof t && ((n = t), (t = null)),
            s ? (t = "buffer") : t || (t = o.defaultEncoding),
            "function" != typeof n && (n = S),
            o.ending
              ? (function (e, t) {
                  var n = new m();
                  e.emit("error", n), r.nextTick(t, n);
                })(this, n)
              : (s ||
                  (function (e, t, n, i) {
                    var o;
                    return (
                      null === n
                        ? (o = new v())
                        : "string" == typeof n ||
                          t.objectMode ||
                          (o = new p("chunk", ["string", "Buffer"], n)),
                      !o || (e.emit("error", o), r.nextTick(i, o), !1)
                    );
                  })(this, o, e, n)) &&
                (o.pendingcb++,
                (a = (function (e, t, n, r, i, o) {
                  if (!n) {
                    var a = (function (e, t, n) {
                      e.objectMode ||
                        !1 === e.decodeStrings ||
                        "string" != typeof t ||
                        (t = u.from(t, n));
                      return t;
                    })(t, r, i);
                    r !== a && ((n = !0), (i = "buffer"), (r = a));
                  }
                  var s = t.objectMode ? 1 : r.length;
                  t.length += s;
                  var l = t.length < t.highWaterMark;
                  l || (t.needDrain = !0);
                  if (t.writing || t.corked) {
                    var f = t.lastBufferedRequest;
                    (t.lastBufferedRequest = {
                      chunk: r,
                      encoding: i,
                      isBuf: n,
                      callback: o,
                      next: null,
                    }),
                      f
                        ? (f.next = t.lastBufferedRequest)
                        : (t.bufferedRequest = t.lastBufferedRequest),
                      (t.bufferedRequestCount += 1);
                  } else k(e, t, !1, s, r, i, o);
                  return l;
                })(this, o, s, e, t, n))),
            a
          );
        }),
        (R.prototype.cork = function () {
          this._writableState.corked++;
        }),
        (R.prototype.uncork = function () {
          var e = this._writableState;
          e.corked &&
            (e.corked--,
            e.writing ||
              e.corked ||
              e.bufferProcessing ||
              !e.bufferedRequest ||
              M(this, e));
        }),
        (R.prototype.setDefaultEncoding = function (e) {
          if (
            ("string" == typeof e && (e = e.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw",
              ].indexOf((e + "").toLowerCase()) > -1
            ))
          )
            throw new w(e);
          return (this._writableState.defaultEncoding = e), this;
        }),
        Object.defineProperty(R.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(R.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
        (R.prototype._write = function (e, t, n) {
          n(new b("_write()"));
        }),
        (R.prototype._writev = null),
        (R.prototype.end = function (e, t, n) {
          var i = this._writableState;
          return (
            "function" == typeof e
              ? ((n = e), (e = null), (t = null))
              : "function" == typeof t && ((n = t), (t = null)),
            null != e && this.write(e, t),
            i.corked && ((i.corked = 1), this.uncork()),
            i.ending ||
              (function (e, t, n) {
                (t.ending = !0),
                  L(e, t),
                  n && (t.finished ? r.nextTick(n) : e.once("finish", n));
                (t.ended = !0), (e.writable = !1);
              })(this, i, n),
            this
          );
        }),
        Object.defineProperty(R.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(R.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function (e) {
            this._writableState && (this._writableState.destroyed = e);
          },
        }),
        (R.prototype.destroy = c.destroy),
        (R.prototype._undestroy = c.undestroy),
        (R.prototype._destroy = function (e, t) {
          t(e);
        });
    }).call(this, n(2), n(0));
  },
  function (e, t, n) {
    "use strict";
    e.exports = f;
    var r = n(6).codes,
      i = r.ERR_METHOD_NOT_IMPLEMENTED,
      o = r.ERR_MULTIPLE_CALLBACK,
      a = r.ERR_TRANSFORM_ALREADY_TRANSFORMING,
      s = r.ERR_TRANSFORM_WITH_LENGTH_0,
      u = n(7);
    function l(e, t) {
      var n = this._transformState;
      n.transforming = !1;
      var r = n.writecb;
      if (null === r) return this.emit("error", new o());
      (n.writechunk = null),
        (n.writecb = null),
        null != t && this.push(t),
        r(e);
      var i = this._readableState;
      (i.reading = !1),
        (i.needReadable || i.length < i.highWaterMark) &&
          this._read(i.highWaterMark);
    }
    function f(e) {
      if (!(this instanceof f)) return new f(e);
      u.call(this, e),
        (this._transformState = {
          afterTransform: l.bind(this),
          needTransform: !1,
          transforming: !1,
          writecb: null,
          writechunk: null,
          writeencoding: null,
        }),
        (this._readableState.needReadable = !0),
        (this._readableState.sync = !1),
        e &&
          ("function" == typeof e.transform && (this._transform = e.transform),
          "function" == typeof e.flush && (this._flush = e.flush)),
        this.on("prefinish", c);
    }
    function c() {
      var e = this;
      "function" != typeof this._flush || this._readableState.destroyed
        ? h(this, null, null)
        : this._flush(function (t, n) {
            h(e, t, n);
          });
    }
    function h(e, t, n) {
      if (t) return e.emit("error", t);
      if ((null != n && e.push(n), e._writableState.length)) throw new s();
      if (e._transformState.transforming) throw new a();
      return e.push(null);
    }
    n(1)(f, u),
      (f.prototype.push = function (e, t) {
        return (
          (this._transformState.needTransform = !1),
          u.prototype.push.call(this, e, t)
        );
      }),
      (f.prototype._transform = function (e, t, n) {
        n(new i("_transform()"));
      }),
      (f.prototype._write = function (e, t, n) {
        var r = this._transformState;
        if (
          ((r.writecb = n),
          (r.writechunk = e),
          (r.writeencoding = t),
          !r.transforming)
        ) {
          var i = this._readableState;
          (r.needTransform || i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark);
        }
      }),
      (f.prototype._read = function (e) {
        var t = this._transformState;
        null === t.writechunk || t.transforming
          ? (t.needTransform = !0)
          : ((t.transforming = !0),
            this._transform(t.writechunk, t.writeencoding, t.afterTransform));
      }),
      (f.prototype._destroy = function (e, t) {
        u.prototype._destroy.call(this, e, function (e) {
          t(e);
        });
      });
  },
  function (e, t, n) {
    "use strict";
    var r = {
      set: function (e, t, n) {
        return { type: "set", line: n || -1, prop: e, value: t };
      },
      done: function (e) {
        return { type: "done", line: e || -1 };
      },
      level: function (e, t, n) {
        return { type: "level", line: n || -1, level: e, value: t };
      },
      tool: function (e, t, n) {
        return { type: "tool", line: n || -1, code: e, tool: t };
      },
      op: function (e, t, n) {
        return { type: "op", line: n || -1, op: e, coord: t };
      },
      macro: function (e, t, n) {
        return { type: "macro", line: n || -1, name: e, blocks: t };
      },
    };
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    var r = n(16),
      i = /[XY]0\d+/,
      o = /[XY]\d+0(?=\D|$)/,
      a = [
        { coord: "x", test: /X([+-]?[\d.]+)/ },
        { coord: "y", test: /Y([+-]?[\d.]+)/ },
        { coord: "i", test: /I([+-]?[\d.]+)/ },
        { coord: "j", test: /J([+-]?[\d.]+)/ },
        { coord: "a", test: /A([\d.]+)/ },
      ];
    e.exports = {
      parse: function (e, t) {
        if (null == e) return {};
        if (null == t.zero || null == t.places)
          throw new Error("cannot parse coordinate with format undefined");
        return a.reduce(function (n, i) {
          var o = e.match(i.test);
          return o && (n[i.coord] = r(o[1], t)), n;
        }, {});
      },
      detectZero: function (e) {
        return o.test(e) ? "L" : i.test(e) ? "T" : null;
      },
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = {
      DRILL: "5",
      MOVE: "0",
      LINEAR: "1",
      CW_ARC: "2",
      CCW_ARC: "3",
    };
  },
  function (e, t, n) {
    "use strict";
    (function (t, r) {
      var i;
      (e.exports = R), (R.ReadableState = E);
      n(5).EventEmitter;
      var o = function (e, t) {
          return e.listeners(t).length;
        },
        a = n(30),
        s = n(3).Buffer,
        u = t.Uint8Array || function () {};
      var l,
        f = n(71);
      l = f && f.debuglog ? f.debuglog("stream") : function () {};
      var c,
        h,
        d = n(72),
        p = n(31),
        b = n(32).getHighWaterMark,
        g = n(8).codes,
        y = g.ERR_INVALID_ARG_TYPE,
        _ = g.ERR_STREAM_PUSH_AFTER_EOF,
        v = g.ERR_METHOD_NOT_IMPLEMENTED,
        m = g.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,
        w = n(74).emitExperimentalWarning;
      n(1)(R, a);
      var S = ["error", "close", "destroy", "pause", "resume"];
      function E(e, t, r) {
        (i = i || n(9)),
          (e = e || {}),
          "boolean" != typeof r && (r = t instanceof i),
          (this.objectMode = !!e.objectMode),
          r && (this.objectMode = this.objectMode || !!e.readableObjectMode),
          (this.highWaterMark = b(this, e, "readableHighWaterMark", r)),
          (this.buffer = new d()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.paused = !0),
          (this.emitClose = !1 !== e.emitClose),
          (this.destroyed = !1),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          e.encoding &&
            (c || (c = n(4).StringDecoder),
            (this.decoder = new c(e.encoding)),
            (this.encoding = e.encoding));
      }
      function R(e) {
        if (((i = i || n(9)), !(this instanceof R))) return new R(e);
        var t = this instanceof i;
        (this._readableState = new E(e, this, t)),
          (this.readable = !0),
          e &&
            ("function" == typeof e.read && (this._read = e.read),
            "function" == typeof e.destroy && (this._destroy = e.destroy)),
          a.call(this);
      }
      function k(e, t, n, r, i) {
        l("readableAddChunk", t);
        var o,
          a = e._readableState;
        if (null === t)
          (a.reading = !1),
            (function (e, t) {
              if (t.ended) return;
              if (t.decoder) {
                var n = t.decoder.end();
                n &&
                  n.length &&
                  (t.buffer.push(n), (t.length += t.objectMode ? 1 : n.length));
              }
              (t.ended = !0),
                t.sync
                  ? T(e)
                  : ((t.needReadable = !1),
                    t.emittedReadable || ((t.emittedReadable = !0), A(e)));
            })(e, a);
        else if (
          (i ||
            (o = (function (e, t) {
              var n;
              (r = t),
                s.isBuffer(r) ||
                  r instanceof u ||
                  "string" == typeof t ||
                  void 0 === t ||
                  e.objectMode ||
                  (n = new y("chunk", ["string", "Buffer", "Uint8Array"], t));
              var r;
              return n;
            })(a, t)),
          o)
        )
          e.emit("error", o);
        else if (a.objectMode || (t && t.length > 0))
          if (
            ("string" == typeof t ||
              a.objectMode ||
              Object.getPrototypeOf(t) === s.prototype ||
              (t = (function (e) {
                return s.from(e);
              })(t)),
            r)
          )
            a.endEmitted ? e.emit("error", new m()) : x(e, a, t, !0);
          else if (a.ended) e.emit("error", new _());
          else {
            if (a.destroyed) return !1;
            (a.reading = !1),
              a.decoder && !n
                ? ((t = a.decoder.write(t)),
                  a.objectMode || 0 !== t.length ? x(e, a, t, !1) : L(e, a))
                : x(e, a, t, !1);
          }
        else r || ((a.reading = !1), L(e, a));
        return !a.ended && (a.length < a.highWaterMark || 0 === a.length);
      }
      function x(e, t, n, r) {
        t.flowing && 0 === t.length && !t.sync
          ? ((t.awaitDrain = 0), e.emit("data", n))
          : ((t.length += t.objectMode ? 1 : n.length),
            r ? t.buffer.unshift(n) : t.buffer.push(n),
            t.needReadable && T(e)),
          L(e, t);
      }
      Object.defineProperty(R.prototype, "destroyed", {
        enumerable: !1,
        get: function () {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function (e) {
          this._readableState && (this._readableState.destroyed = e);
        },
      }),
        (R.prototype.destroy = p.destroy),
        (R.prototype._undestroy = p.undestroy),
        (R.prototype._destroy = function (e, t) {
          t(e);
        }),
        (R.prototype.push = function (e, t) {
          var n,
            r = this._readableState;
          return (
            r.objectMode
              ? (n = !0)
              : "string" == typeof e &&
                ((t = t || r.defaultEncoding) !== r.encoding &&
                  ((e = s.from(e, t)), (t = "")),
                (n = !0)),
            k(this, e, t, !1, n)
          );
        }),
        (R.prototype.unshift = function (e) {
          return k(this, e, null, !0, !1);
        }),
        (R.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }),
        (R.prototype.setEncoding = function (e) {
          return (
            c || (c = n(4).StringDecoder),
            (this._readableState.decoder = new c(e)),
            (this._readableState.encoding =
              this._readableState.decoder.encoding),
            this
          );
        });
      function M(e, t) {
        return e <= 0 || (0 === t.length && t.ended)
          ? 0
          : t.objectMode
          ? 1
          : e != e
          ? t.flowing && t.length
            ? t.buffer.head.data.length
            : t.length
          : (e > t.highWaterMark &&
              (t.highWaterMark = (function (e) {
                return (
                  e >= 8388608
                    ? (e = 8388608)
                    : (e--,
                      (e |= e >>> 1),
                      (e |= e >>> 2),
                      (e |= e >>> 4),
                      (e |= e >>> 8),
                      (e |= e >>> 16),
                      e++),
                  e
                );
              })(e)),
            e <= t.length
              ? e
              : t.ended
              ? t.length
              : ((t.needReadable = !0), 0));
      }
      function T(e) {
        var t = e._readableState;
        (t.needReadable = !1),
          t.emittedReadable ||
            (l("emitReadable", t.flowing),
            (t.emittedReadable = !0),
            r.nextTick(A, e));
      }
      function A(e) {
        var t = e._readableState;
        l("emitReadable_", t.destroyed, t.length, t.ended),
          t.destroyed || (!t.length && !t.ended) || e.emit("readable"),
          (t.needReadable =
            !t.flowing && !t.ended && t.length <= t.highWaterMark),
          N(e);
      }
      function L(e, t) {
        t.readingMore || ((t.readingMore = !0), r.nextTick(O, e, t));
      }
      function O(e, t) {
        for (
          ;
          !t.reading &&
          !t.ended &&
          (t.length < t.highWaterMark || (t.flowing && 0 === t.length));

        ) {
          var n = t.length;
          if ((l("maybeReadMore read 0"), e.read(0), n === t.length)) break;
        }
        t.readingMore = !1;
      }
      function P(e) {
        var t = e._readableState;
        (t.readableListening = e.listenerCount("readable") > 0),
          t.resumeScheduled && !t.paused
            ? (t.flowing = !0)
            : e.listenerCount("data") > 0 && e.resume();
      }
      function j(e) {
        l("readable nexttick read 0"), e.read(0);
      }
      function C(e, t) {
        l("resume", t.reading),
          t.reading || e.read(0),
          (t.resumeScheduled = !1),
          e.emit("resume"),
          N(e),
          t.flowing && !t.reading && e.read(0);
      }
      function N(e) {
        var t = e._readableState;
        for (l("flow", t.flowing); t.flowing && null !== e.read(); );
      }
      function I(e, t) {
        return 0 === t.length
          ? null
          : (t.objectMode
              ? (n = t.buffer.shift())
              : !e || e >= t.length
              ? ((n = t.decoder
                  ? t.buffer.join("")
                  : 1 === t.buffer.length
                  ? t.buffer.first()
                  : t.buffer.concat(t.length)),
                t.buffer.clear())
              : (n = t.buffer.consume(e, t.decoder)),
            n);
        var n;
      }
      function D(e) {
        var t = e._readableState;
        l("endReadable", t.endEmitted),
          t.endEmitted || ((t.ended = !0), r.nextTick(B, t, e));
      }
      function B(e, t) {
        l("endReadableNT", e.endEmitted, e.length),
          e.endEmitted ||
            0 !== e.length ||
            ((e.endEmitted = !0), (t.readable = !1), t.emit("end"));
      }
      function U(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      }
      (R.prototype.read = function (e) {
        l("read", e), (e = parseInt(e, 10));
        var t = this._readableState,
          n = e;
        if (
          (0 !== e && (t.emittedReadable = !1),
          0 === e &&
            t.needReadable &&
            ((0 !== t.highWaterMark
              ? t.length >= t.highWaterMark
              : t.length > 0) ||
              t.ended))
        )
          return (
            l("read: emitReadable", t.length, t.ended),
            0 === t.length && t.ended ? D(this) : T(this),
            null
          );
        if (0 === (e = M(e, t)) && t.ended)
          return 0 === t.length && D(this), null;
        var r,
          i = t.needReadable;
        return (
          l("need readable", i),
          (0 === t.length || t.length - e < t.highWaterMark) &&
            l("length less than watermark", (i = !0)),
          t.ended || t.reading
            ? l("reading or ended", (i = !1))
            : i &&
              (l("do read"),
              (t.reading = !0),
              (t.sync = !0),
              0 === t.length && (t.needReadable = !0),
              this._read(t.highWaterMark),
              (t.sync = !1),
              t.reading || (e = M(n, t))),
          null === (r = e > 0 ? I(e, t) : null)
            ? ((t.needReadable = !0), (e = 0))
            : ((t.length -= e), (t.awaitDrain = 0)),
          0 === t.length &&
            (t.ended || (t.needReadable = !0), n !== e && t.ended && D(this)),
          null !== r && this.emit("data", r),
          r
        );
      }),
        (R.prototype._read = function (e) {
          this.emit("error", new v("_read()"));
        }),
        (R.prototype.pipe = function (e, t) {
          var n = this,
            i = this._readableState;
          switch (i.pipesCount) {
            case 0:
              i.pipes = e;
              break;
            case 1:
              i.pipes = [i.pipes, e];
              break;
            default:
              i.pipes.push(e);
          }
          (i.pipesCount += 1), l("pipe count=%d opts=%j", i.pipesCount, t);
          var a =
            (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr ? u : g;
          function s(t, r) {
            l("onunpipe"),
              t === n &&
                r &&
                !1 === r.hasUnpiped &&
                ((r.hasUnpiped = !0),
                l("cleanup"),
                e.removeListener("close", p),
                e.removeListener("finish", b),
                e.removeListener("drain", f),
                e.removeListener("error", d),
                e.removeListener("unpipe", s),
                n.removeListener("end", u),
                n.removeListener("end", g),
                n.removeListener("data", h),
                (c = !0),
                !i.awaitDrain ||
                  (e._writableState && !e._writableState.needDrain) ||
                  f());
          }
          function u() {
            l("onend"), e.end();
          }
          i.endEmitted ? r.nextTick(a) : n.once("end", a), e.on("unpipe", s);
          var f = (function (e) {
            return function () {
              var t = e._readableState;
              l("pipeOnDrain", t.awaitDrain),
                t.awaitDrain && t.awaitDrain--,
                0 === t.awaitDrain && o(e, "data") && ((t.flowing = !0), N(e));
            };
          })(n);
          e.on("drain", f);
          var c = !1;
          function h(t) {
            l("ondata");
            var r = e.write(t);
            l("dest.write", r),
              !1 === r &&
                (((1 === i.pipesCount && i.pipes === e) ||
                  (i.pipesCount > 1 && -1 !== U(i.pipes, e))) &&
                  !c &&
                  (l("false write response, pause", i.awaitDrain),
                  i.awaitDrain++),
                n.pause());
          }
          function d(t) {
            l("onerror", t),
              g(),
              e.removeListener("error", d),
              0 === o(e, "error") && e.emit("error", t);
          }
          function p() {
            e.removeListener("finish", b), g();
          }
          function b() {
            l("onfinish"), e.removeListener("close", p), g();
          }
          function g() {
            l("unpipe"), n.unpipe(e);
          }
          return (
            n.on("data", h),
            (function (e, t, n) {
              if ("function" == typeof e.prependListener)
                return e.prependListener(t, n);
              e._events && e._events[t]
                ? Array.isArray(e._events[t])
                  ? e._events[t].unshift(n)
                  : (e._events[t] = [n, e._events[t]])
                : e.on(t, n);
            })(e, "error", d),
            e.once("close", p),
            e.once("finish", b),
            e.emit("pipe", n),
            i.flowing || (l("pipe resume"), n.resume()),
            e
          );
        }),
        (R.prototype.unpipe = function (e) {
          var t = this._readableState,
            n = { hasUnpiped: !1 };
          if (0 === t.pipesCount) return this;
          if (1 === t.pipesCount)
            return (
              (e && e !== t.pipes) ||
                (e || (e = t.pipes),
                (t.pipes = null),
                (t.pipesCount = 0),
                (t.flowing = !1),
                e && e.emit("unpipe", this, n)),
              this
            );
          if (!e) {
            var r = t.pipes,
              i = t.pipesCount;
            (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
            for (var o = 0; o < i; o++)
              r[o].emit("unpipe", this, { hasUnpiped: !1 });
            return this;
          }
          var a = U(t.pipes, e);
          return (
            -1 === a ||
              (t.pipes.splice(a, 1),
              (t.pipesCount -= 1),
              1 === t.pipesCount && (t.pipes = t.pipes[0]),
              e.emit("unpipe", this, n)),
            this
          );
        }),
        (R.prototype.on = function (e, t) {
          var n = a.prototype.on.call(this, e, t),
            i = this._readableState;
          return (
            "data" === e
              ? ((i.readableListening = this.listenerCount("readable") > 0),
                !1 !== i.flowing && this.resume())
              : "readable" === e &&
                (i.endEmitted ||
                  i.readableListening ||
                  ((i.readableListening = i.needReadable = !0),
                  (i.flowing = !1),
                  (i.emittedReadable = !1),
                  l("on readable", i.length, i.reading),
                  i.length ? T(this) : i.reading || r.nextTick(j, this))),
            n
          );
        }),
        (R.prototype.addListener = R.prototype.on),
        (R.prototype.removeListener = function (e, t) {
          var n = a.prototype.removeListener.call(this, e, t);
          return "readable" === e && r.nextTick(P, this), n;
        }),
        (R.prototype.removeAllListeners = function (e) {
          var t = a.prototype.removeAllListeners.apply(this, arguments);
          return ("readable" !== e && void 0 !== e) || r.nextTick(P, this), t;
        }),
        (R.prototype.resume = function () {
          var e = this._readableState;
          return (
            e.flowing ||
              (l("resume"),
              (e.flowing = !e.readableListening),
              (function (e, t) {
                t.resumeScheduled ||
                  ((t.resumeScheduled = !0), r.nextTick(C, e, t));
              })(this, e)),
            (e.paused = !1),
            this
          );
        }),
        (R.prototype.pause = function () {
          return (
            l("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (l("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            (this._readableState.paused = !0),
            this
          );
        }),
        (R.prototype.wrap = function (e) {
          var t = this,
            n = this._readableState,
            r = !1;
          for (var i in (e.on("end", function () {
            if ((l("wrapped end"), n.decoder && !n.ended)) {
              var e = n.decoder.end();
              e && e.length && t.push(e);
            }
            t.push(null);
          }),
          e.on("data", function (i) {
            (l("wrapped data"),
            n.decoder && (i = n.decoder.write(i)),
            n.objectMode && null == i) ||
              ((n.objectMode || (i && i.length)) &&
                (t.push(i) || ((r = !0), e.pause())));
          }),
          e))
            void 0 === this[i] &&
              "function" == typeof e[i] &&
              (this[i] = (function (t) {
                return function () {
                  return e[t].apply(e, arguments);
                };
              })(i));
          for (var o = 0; o < S.length; o++)
            e.on(S[o], this.emit.bind(this, S[o]));
          return (
            (this._read = function (t) {
              l("wrapped _read", t), r && ((r = !1), e.resume());
            }),
            this
          );
        }),
        "function" == typeof Symbol &&
          (R.prototype[Symbol.asyncIterator] = function () {
            return (
              w("Readable[Symbol.asyncIterator]"),
              void 0 === h && (h = n(75)),
              h(this)
            );
          }),
        Object.defineProperty(R.prototype, "readableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._readableState.highWaterMark;
          },
        }),
        Object.defineProperty(R.prototype, "readableBuffer", {
          enumerable: !1,
          get: function () {
            return this._readableState && this._readableState.buffer;
          },
        }),
        Object.defineProperty(R.prototype, "readableFlowing", {
          enumerable: !1,
          get: function () {
            return this._readableState.flowing;
          },
          set: function (e) {
            this._readableState && (this._readableState.flowing = e);
          },
        }),
        (R._fromList = I),
        Object.defineProperty(R.prototype, "readableLength", {
          enumerable: !1,
          get: function () {
            return this._readableState.length;
          },
        });
    }).call(this, n(2), n(0));
  },
  function (e, t, n) {
    e.exports = n(5).EventEmitter;
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      function n(e, t) {
        i(e, t), r(e);
      }
      function r(e) {
        (e._writableState && !e._writableState.emitClose) ||
          (e._readableState && !e._readableState.emitClose) ||
          e.emit("close");
      }
      function i(e, t) {
        e.emit("error", t);
      }
      e.exports = {
        destroy: function (e, o) {
          var a = this,
            s = this._readableState && this._readableState.destroyed,
            u = this._writableState && this._writableState.destroyed;
          return s || u
            ? (o
                ? o(e)
                : !e ||
                  (this._writableState && this._writableState.errorEmitted) ||
                  t.nextTick(i, this, e),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(e || null, function (e) {
                !o && e
                  ? (t.nextTick(n, a, e),
                    a._writableState && (a._writableState.errorEmitted = !0))
                  : o
                  ? (t.nextTick(r, a), o(e))
                  : t.nextTick(r, a);
              }),
              this);
        },
        undestroy: function () {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finalCalled = !1),
              (this._writableState.prefinished = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1));
        },
      };
    }).call(this, n(0));
  },
  function (e, t, n) {
    "use strict";
    var r = n(8).codes.ERR_INVALID_OPT_VALUE;
    e.exports = {
      getHighWaterMark: function (e, t, n, i) {
        var o = (function (e, t, n) {
          return null != e.highWaterMark ? e.highWaterMark : t ? e[n] : null;
        })(t, i, n);
        if (null != o) {
          if (!isFinite(o) || Math.floor(o) !== o || o < 0)
            throw new r(i ? n : "highWaterMark", o);
          return Math.floor(o);
        }
        return e.objectMode ? 16 : 16384;
      },
    };
  },
  function (e, t, n) {
    "use strict";
    (function (t, r) {
      function i(e) {
        var t = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            !(function (e, t, n) {
              var r = e.entry;
              e.entry = null;
              for (; r; ) {
                var i = r.callback;
                t.pendingcb--, i(n), (r = r.next);
              }
              t.corkedRequestsFree.next = e;
            })(t, e);
          });
      }
      var o;
      (e.exports = R), (R.WritableState = E);
      var a = { deprecate: n(14) },
        s = n(30),
        u = n(3).Buffer,
        l = t.Uint8Array || function () {};
      var f,
        c = n(31),
        h = n(32).getHighWaterMark,
        d = n(8).codes,
        p = d.ERR_INVALID_ARG_TYPE,
        b = d.ERR_METHOD_NOT_IMPLEMENTED,
        g = d.ERR_MULTIPLE_CALLBACK,
        y = d.ERR_STREAM_CANNOT_PIPE,
        _ = d.ERR_STREAM_DESTROYED,
        v = d.ERR_STREAM_NULL_VALUES,
        m = d.ERR_STREAM_WRITE_AFTER_END,
        w = d.ERR_UNKNOWN_ENCODING;
      function S() {}
      function E(e, t, a) {
        (o = o || n(9)),
          (e = e || {}),
          "boolean" != typeof a && (a = t instanceof o),
          (this.objectMode = !!e.objectMode),
          a && (this.objectMode = this.objectMode || !!e.writableObjectMode),
          (this.highWaterMark = h(this, e, "writableHighWaterMark", a)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var s = !1 === e.decodeStrings;
        (this.decodeStrings = !s),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (e) {
            !(function (e, t) {
              var n = e._writableState,
                i = n.sync,
                o = n.writecb;
              if ("function" != typeof o) throw new g();
              if (
                ((function (e) {
                  (e.writing = !1),
                    (e.writecb = null),
                    (e.length -= e.writelen),
                    (e.writelen = 0);
                })(n),
                t)
              )
                !(function (e, t, n, i, o) {
                  --t.pendingcb,
                    n
                      ? (r.nextTick(o, i),
                        r.nextTick(L, e, t),
                        (e._writableState.errorEmitted = !0),
                        e.emit("error", i))
                      : (o(i),
                        (e._writableState.errorEmitted = !0),
                        e.emit("error", i),
                        L(e, t));
                })(e, n, i, t, o);
              else {
                var a = T(n) || e.destroyed;
                a ||
                  n.corked ||
                  n.bufferProcessing ||
                  !n.bufferedRequest ||
                  M(e, n),
                  i ? r.nextTick(x, e, n, a, o) : x(e, n, a, o);
              }
            })(t, e);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.emitClose = !1 !== e.emitClose),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new i(this));
      }
      function R(e) {
        var t = this instanceof (o = o || n(9));
        if (!t && !f.call(R, this)) return new R(e);
        (this._writableState = new E(e, this, t)),
          (this.writable = !0),
          e &&
            ("function" == typeof e.write && (this._write = e.write),
            "function" == typeof e.writev && (this._writev = e.writev),
            "function" == typeof e.destroy && (this._destroy = e.destroy),
            "function" == typeof e.final && (this._final = e.final)),
          s.call(this);
      }
      function k(e, t, n, r, i, o, a) {
        (t.writelen = r),
          (t.writecb = a),
          (t.writing = !0),
          (t.sync = !0),
          t.destroyed
            ? t.onwrite(new _("write"))
            : n
            ? e._writev(i, t.onwrite)
            : e._write(i, o, t.onwrite),
          (t.sync = !1);
      }
      function x(e, t, n, r) {
        n ||
          (function (e, t) {
            0 === t.length &&
              t.needDrain &&
              ((t.needDrain = !1), e.emit("drain"));
          })(e, t),
          t.pendingcb--,
          r(),
          L(e, t);
      }
      function M(e, t) {
        t.bufferProcessing = !0;
        var n = t.bufferedRequest;
        if (e._writev && n && n.next) {
          var r = t.bufferedRequestCount,
            o = new Array(r),
            a = t.corkedRequestsFree;
          a.entry = n;
          for (var s = 0, u = !0; n; )
            (o[s] = n), n.isBuf || (u = !1), (n = n.next), (s += 1);
          (o.allBuffers = u),
            k(e, t, !0, t.length, o, "", a.finish),
            t.pendingcb++,
            (t.lastBufferedRequest = null),
            a.next
              ? ((t.corkedRequestsFree = a.next), (a.next = null))
              : (t.corkedRequestsFree = new i(t)),
            (t.bufferedRequestCount = 0);
        } else {
          for (; n; ) {
            var l = n.chunk,
              f = n.encoding,
              c = n.callback;
            if (
              (k(e, t, !1, t.objectMode ? 1 : l.length, l, f, c),
              (n = n.next),
              t.bufferedRequestCount--,
              t.writing)
            )
              break;
          }
          null === n && (t.lastBufferedRequest = null);
        }
        (t.bufferedRequest = n), (t.bufferProcessing = !1);
      }
      function T(e) {
        return (
          e.ending &&
          0 === e.length &&
          null === e.bufferedRequest &&
          !e.finished &&
          !e.writing
        );
      }
      function A(e, t) {
        e._final(function (n) {
          t.pendingcb--,
            n && e.emit("error", n),
            (t.prefinished = !0),
            e.emit("prefinish"),
            L(e, t);
        });
      }
      function L(e, t) {
        var n = T(t);
        return (
          n &&
            (!(function (e, t) {
              t.prefinished ||
                t.finalCalled ||
                ("function" != typeof e._final || t.destroyed
                  ? ((t.prefinished = !0), e.emit("prefinish"))
                  : (t.pendingcb++, (t.finalCalled = !0), r.nextTick(A, e, t)));
            })(e, t),
            0 === t.pendingcb && ((t.finished = !0), e.emit("finish"))),
          n
        );
      }
      n(1)(R, s),
        (E.prototype.getBuffer = function () {
          for (var e = this.bufferedRequest, t = []; e; )
            t.push(e), (e = e.next);
          return t;
        }),
        (function () {
          try {
            Object.defineProperty(E.prototype, "buffer", {
              get: a.deprecate(
                function () {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              ),
            });
          } catch (e) {}
        })(),
        "function" == typeof Symbol &&
        Symbol.hasInstance &&
        "function" == typeof Function.prototype[Symbol.hasInstance]
          ? ((f = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(R, Symbol.hasInstance, {
              value: function (e) {
                return (
                  !!f.call(this, e) ||
                  (this === R && e && e._writableState instanceof E)
                );
              },
            }))
          : (f = function (e) {
              return e instanceof this;
            }),
        (R.prototype.pipe = function () {
          this.emit("error", new y());
        }),
        (R.prototype.write = function (e, t, n) {
          var i,
            o = this._writableState,
            a = !1,
            s = !o.objectMode && ((i = e), u.isBuffer(i) || i instanceof l);
          return (
            s &&
              !u.isBuffer(e) &&
              (e = (function (e) {
                return u.from(e);
              })(e)),
            "function" == typeof t && ((n = t), (t = null)),
            s ? (t = "buffer") : t || (t = o.defaultEncoding),
            "function" != typeof n && (n = S),
            o.ending
              ? (function (e, t) {
                  var n = new m();
                  e.emit("error", n), r.nextTick(t, n);
                })(this, n)
              : (s ||
                  (function (e, t, n, i) {
                    var o;
                    return (
                      null === n
                        ? (o = new v())
                        : "string" == typeof n ||
                          t.objectMode ||
                          (o = new p("chunk", ["string", "Buffer"], n)),
                      !o || (e.emit("error", o), r.nextTick(i, o), !1)
                    );
                  })(this, o, e, n)) &&
                (o.pendingcb++,
                (a = (function (e, t, n, r, i, o) {
                  if (!n) {
                    var a = (function (e, t, n) {
                      e.objectMode ||
                        !1 === e.decodeStrings ||
                        "string" != typeof t ||
                        (t = u.from(t, n));
                      return t;
                    })(t, r, i);
                    r !== a && ((n = !0), (i = "buffer"), (r = a));
                  }
                  var s = t.objectMode ? 1 : r.length;
                  t.length += s;
                  var l = t.length < t.highWaterMark;
                  l || (t.needDrain = !0);
                  if (t.writing || t.corked) {
                    var f = t.lastBufferedRequest;
                    (t.lastBufferedRequest = {
                      chunk: r,
                      encoding: i,
                      isBuf: n,
                      callback: o,
                      next: null,
                    }),
                      f
                        ? (f.next = t.lastBufferedRequest)
                        : (t.bufferedRequest = t.lastBufferedRequest),
                      (t.bufferedRequestCount += 1);
                  } else k(e, t, !1, s, r, i, o);
                  return l;
                })(this, o, s, e, t, n))),
            a
          );
        }),
        (R.prototype.cork = function () {
          this._writableState.corked++;
        }),
        (R.prototype.uncork = function () {
          var e = this._writableState;
          e.corked &&
            (e.corked--,
            e.writing ||
              e.corked ||
              e.bufferProcessing ||
              !e.bufferedRequest ||
              M(this, e));
        }),
        (R.prototype.setDefaultEncoding = function (e) {
          if (
            ("string" == typeof e && (e = e.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw",
              ].indexOf((e + "").toLowerCase()) > -1
            ))
          )
            throw new w(e);
          return (this._writableState.defaultEncoding = e), this;
        }),
        Object.defineProperty(R.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(R.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
        (R.prototype._write = function (e, t, n) {
          n(new b("_write()"));
        }),
        (R.prototype._writev = null),
        (R.prototype.end = function (e, t, n) {
          var i = this._writableState;
          return (
            "function" == typeof e
              ? ((n = e), (e = null), (t = null))
              : "function" == typeof t && ((n = t), (t = null)),
            null != e && this.write(e, t),
            i.corked && ((i.corked = 1), this.uncork()),
            i.ending ||
              (function (e, t, n) {
                (t.ending = !0),
                  L(e, t),
                  n && (t.finished ? r.nextTick(n) : e.once("finish", n));
                (t.ended = !0), (e.writable = !1);
              })(this, i, n),
            this
          );
        }),
        Object.defineProperty(R.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(R.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function (e) {
            this._writableState && (this._writableState.destroyed = e);
          },
        }),
        (R.prototype.destroy = c.destroy),
        (R.prototype._undestroy = c.undestroy),
        (R.prototype._destroy = function (e, t) {
          t(e);
        });
    }).call(this, n(2), n(0));
  },
  function (e, t, n) {
    "use strict";
    e.exports = f;
    var r = n(8).codes,
      i = r.ERR_METHOD_NOT_IMPLEMENTED,
      o = r.ERR_MULTIPLE_CALLBACK,
      a = r.ERR_TRANSFORM_ALREADY_TRANSFORMING,
      s = r.ERR_TRANSFORM_WITH_LENGTH_0,
      u = n(9);
    function l(e, t) {
      var n = this._transformState;
      n.transforming = !1;
      var r = n.writecb;
      if (null === r) return this.emit("error", new o());
      (n.writechunk = null),
        (n.writecb = null),
        null != t && this.push(t),
        r(e);
      var i = this._readableState;
      (i.reading = !1),
        (i.needReadable || i.length < i.highWaterMark) &&
          this._read(i.highWaterMark);
    }
    function f(e) {
      if (!(this instanceof f)) return new f(e);
      u.call(this, e),
        (this._transformState = {
          afterTransform: l.bind(this),
          needTransform: !1,
          transforming: !1,
          writecb: null,
          writechunk: null,
          writeencoding: null,
        }),
        (this._readableState.needReadable = !0),
        (this._readableState.sync = !1),
        e &&
          ("function" == typeof e.transform && (this._transform = e.transform),
          "function" == typeof e.flush && (this._flush = e.flush)),
        this.on("prefinish", c);
    }
    function c() {
      var e = this;
      "function" != typeof this._flush || this._readableState.destroyed
        ? h(this, null, null)
        : this._flush(function (t, n) {
            h(e, t, n);
          });
    }
    function h(e, t, n) {
      if (t) return e.emit("error", t);
      if ((null != n && e.push(n), e._writableState.length)) throw new s();
      if (e._transformState.transforming) throw new a();
      return e.push(null);
    }
    n(1)(f, u),
      (f.prototype.push = function (e, t) {
        return (
          (this._transformState.needTransform = !1),
          u.prototype.push.call(this, e, t)
        );
      }),
      (f.prototype._transform = function (e, t, n) {
        n(new i("_transform()"));
      }),
      (f.prototype._write = function (e, t, n) {
        var r = this._transformState;
        if (
          ((r.writecb = n),
          (r.writechunk = e),
          (r.writeencoding = t),
          !r.transforming)
        ) {
          var i = this._readableState;
          (r.needTransform || i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark);
        }
      }),
      (f.prototype._read = function (e) {
        var t = this._transformState;
        null === t.writechunk || t.transforming
          ? (t.needTransform = !0)
          : ((t.transforming = !0),
            this._transform(t.writechunk, t.writeencoding, t.afterTransform));
      }),
      (f.prototype._destroy = function (e, t) {
        u.prototype._destroy.call(this, e, function (e) {
          t(e);
        });
      });
  },
  function (e, t, n) {
    "use strict";
    var r = n(84);
    e.exports = function (e, t, n) {
      return (
        (t = t || {}),
        (n = n || []),
        "<" +
          r(e) +
          Object.keys(t).reduce(function (e, n) {
            var i = t[n];
            return e + (null != i ? " " + r(n) + '="' + r(i) + '"' : "");
          }, "") +
          (n.length ? ">" + n.join("") + "</" + e + ">" : "/>")
      );
    };
  },
  function (e, t, n) {
    "use strict";
    (function (t, r) {
      var i;
      (e.exports = R), (R.ReadableState = E);
      n(5).EventEmitter;
      var o = function (e, t) {
          return e.listeners(t).length;
        },
        a = n(37),
        s = n(3).Buffer,
        u = t.Uint8Array || function () {};
      var l,
        f = n(87);
      l = f && f.debuglog ? f.debuglog("stream") : function () {};
      var c,
        h,
        d = n(88),
        p = n(38),
        b = n(39).getHighWaterMark,
        g = n(10).codes,
        y = g.ERR_INVALID_ARG_TYPE,
        _ = g.ERR_STREAM_PUSH_AFTER_EOF,
        v = g.ERR_METHOD_NOT_IMPLEMENTED,
        m = g.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,
        w = n(90).emitExperimentalWarning;
      n(1)(R, a);
      var S = ["error", "close", "destroy", "pause", "resume"];
      function E(e, t, r) {
        (i = i || n(11)),
          (e = e || {}),
          "boolean" != typeof r && (r = t instanceof i),
          (this.objectMode = !!e.objectMode),
          r && (this.objectMode = this.objectMode || !!e.readableObjectMode),
          (this.highWaterMark = b(this, e, "readableHighWaterMark", r)),
          (this.buffer = new d()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.paused = !0),
          (this.emitClose = !1 !== e.emitClose),
          (this.destroyed = !1),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          e.encoding &&
            (c || (c = n(4).StringDecoder),
            (this.decoder = new c(e.encoding)),
            (this.encoding = e.encoding));
      }
      function R(e) {
        if (((i = i || n(11)), !(this instanceof R))) return new R(e);
        var t = this instanceof i;
        (this._readableState = new E(e, this, t)),
          (this.readable = !0),
          e &&
            ("function" == typeof e.read && (this._read = e.read),
            "function" == typeof e.destroy && (this._destroy = e.destroy)),
          a.call(this);
      }
      function k(e, t, n, r, i) {
        l("readableAddChunk", t);
        var o,
          a = e._readableState;
        if (null === t)
          (a.reading = !1),
            (function (e, t) {
              if (t.ended) return;
              if (t.decoder) {
                var n = t.decoder.end();
                n &&
                  n.length &&
                  (t.buffer.push(n), (t.length += t.objectMode ? 1 : n.length));
              }
              (t.ended = !0),
                t.sync
                  ? T(e)
                  : ((t.needReadable = !1),
                    t.emittedReadable || ((t.emittedReadable = !0), A(e)));
            })(e, a);
        else if (
          (i ||
            (o = (function (e, t) {
              var n;
              (r = t),
                s.isBuffer(r) ||
                  r instanceof u ||
                  "string" == typeof t ||
                  void 0 === t ||
                  e.objectMode ||
                  (n = new y("chunk", ["string", "Buffer", "Uint8Array"], t));
              var r;
              return n;
            })(a, t)),
          o)
        )
          e.emit("error", o);
        else if (a.objectMode || (t && t.length > 0))
          if (
            ("string" == typeof t ||
              a.objectMode ||
              Object.getPrototypeOf(t) === s.prototype ||
              (t = (function (e) {
                return s.from(e);
              })(t)),
            r)
          )
            a.endEmitted ? e.emit("error", new m()) : x(e, a, t, !0);
          else if (a.ended) e.emit("error", new _());
          else {
            if (a.destroyed) return !1;
            (a.reading = !1),
              a.decoder && !n
                ? ((t = a.decoder.write(t)),
                  a.objectMode || 0 !== t.length ? x(e, a, t, !1) : L(e, a))
                : x(e, a, t, !1);
          }
        else r || ((a.reading = !1), L(e, a));
        return !a.ended && (a.length < a.highWaterMark || 0 === a.length);
      }
      function x(e, t, n, r) {
        t.flowing && 0 === t.length && !t.sync
          ? ((t.awaitDrain = 0), e.emit("data", n))
          : ((t.length += t.objectMode ? 1 : n.length),
            r ? t.buffer.unshift(n) : t.buffer.push(n),
            t.needReadable && T(e)),
          L(e, t);
      }
      Object.defineProperty(R.prototype, "destroyed", {
        enumerable: !1,
        get: function () {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function (e) {
          this._readableState && (this._readableState.destroyed = e);
        },
      }),
        (R.prototype.destroy = p.destroy),
        (R.prototype._undestroy = p.undestroy),
        (R.prototype._destroy = function (e, t) {
          t(e);
        }),
        (R.prototype.push = function (e, t) {
          var n,
            r = this._readableState;
          return (
            r.objectMode
              ? (n = !0)
              : "string" == typeof e &&
                ((t = t || r.defaultEncoding) !== r.encoding &&
                  ((e = s.from(e, t)), (t = "")),
                (n = !0)),
            k(this, e, t, !1, n)
          );
        }),
        (R.prototype.unshift = function (e) {
          return k(this, e, null, !0, !1);
        }),
        (R.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }),
        (R.prototype.setEncoding = function (e) {
          return (
            c || (c = n(4).StringDecoder),
            (this._readableState.decoder = new c(e)),
            (this._readableState.encoding =
              this._readableState.decoder.encoding),
            this
          );
        });
      function M(e, t) {
        return e <= 0 || (0 === t.length && t.ended)
          ? 0
          : t.objectMode
          ? 1
          : e != e
          ? t.flowing && t.length
            ? t.buffer.head.data.length
            : t.length
          : (e > t.highWaterMark &&
              (t.highWaterMark = (function (e) {
                return (
                  e >= 8388608
                    ? (e = 8388608)
                    : (e--,
                      (e |= e >>> 1),
                      (e |= e >>> 2),
                      (e |= e >>> 4),
                      (e |= e >>> 8),
                      (e |= e >>> 16),
                      e++),
                  e
                );
              })(e)),
            e <= t.length
              ? e
              : t.ended
              ? t.length
              : ((t.needReadable = !0), 0));
      }
      function T(e) {
        var t = e._readableState;
        (t.needReadable = !1),
          t.emittedReadable ||
            (l("emitReadable", t.flowing),
            (t.emittedReadable = !0),
            r.nextTick(A, e));
      }
      function A(e) {
        var t = e._readableState;
        l("emitReadable_", t.destroyed, t.length, t.ended),
          t.destroyed || (!t.length && !t.ended) || e.emit("readable"),
          (t.needReadable =
            !t.flowing && !t.ended && t.length <= t.highWaterMark),
          N(e);
      }
      function L(e, t) {
        t.readingMore || ((t.readingMore = !0), r.nextTick(O, e, t));
      }
      function O(e, t) {
        for (
          ;
          !t.reading &&
          !t.ended &&
          (t.length < t.highWaterMark || (t.flowing && 0 === t.length));

        ) {
          var n = t.length;
          if ((l("maybeReadMore read 0"), e.read(0), n === t.length)) break;
        }
        t.readingMore = !1;
      }
      function P(e) {
        var t = e._readableState;
        (t.readableListening = e.listenerCount("readable") > 0),
          t.resumeScheduled && !t.paused
            ? (t.flowing = !0)
            : e.listenerCount("data") > 0 && e.resume();
      }
      function j(e) {
        l("readable nexttick read 0"), e.read(0);
      }
      function C(e, t) {
        l("resume", t.reading),
          t.reading || e.read(0),
          (t.resumeScheduled = !1),
          e.emit("resume"),
          N(e),
          t.flowing && !t.reading && e.read(0);
      }
      function N(e) {
        var t = e._readableState;
        for (l("flow", t.flowing); t.flowing && null !== e.read(); );
      }
      function I(e, t) {
        return 0 === t.length
          ? null
          : (t.objectMode
              ? (n = t.buffer.shift())
              : !e || e >= t.length
              ? ((n = t.decoder
                  ? t.buffer.join("")
                  : 1 === t.buffer.length
                  ? t.buffer.first()
                  : t.buffer.concat(t.length)),
                t.buffer.clear())
              : (n = t.buffer.consume(e, t.decoder)),
            n);
        var n;
      }
      function D(e) {
        var t = e._readableState;
        l("endReadable", t.endEmitted),
          t.endEmitted || ((t.ended = !0), r.nextTick(B, t, e));
      }
      function B(e, t) {
        l("endReadableNT", e.endEmitted, e.length),
          e.endEmitted ||
            0 !== e.length ||
            ((e.endEmitted = !0), (t.readable = !1), t.emit("end"));
      }
      function U(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      }
      (R.prototype.read = function (e) {
        l("read", e), (e = parseInt(e, 10));
        var t = this._readableState,
          n = e;
        if (
          (0 !== e && (t.emittedReadable = !1),
          0 === e &&
            t.needReadable &&
            ((0 !== t.highWaterMark
              ? t.length >= t.highWaterMark
              : t.length > 0) ||
              t.ended))
        )
          return (
            l("read: emitReadable", t.length, t.ended),
            0 === t.length && t.ended ? D(this) : T(this),
            null
          );
        if (0 === (e = M(e, t)) && t.ended)
          return 0 === t.length && D(this), null;
        var r,
          i = t.needReadable;
        return (
          l("need readable", i),
          (0 === t.length || t.length - e < t.highWaterMark) &&
            l("length less than watermark", (i = !0)),
          t.ended || t.reading
            ? l("reading or ended", (i = !1))
            : i &&
              (l("do read"),
              (t.reading = !0),
              (t.sync = !0),
              0 === t.length && (t.needReadable = !0),
              this._read(t.highWaterMark),
              (t.sync = !1),
              t.reading || (e = M(n, t))),
          null === (r = e > 0 ? I(e, t) : null)
            ? ((t.needReadable = !0), (e = 0))
            : ((t.length -= e), (t.awaitDrain = 0)),
          0 === t.length &&
            (t.ended || (t.needReadable = !0), n !== e && t.ended && D(this)),
          null !== r && this.emit("data", r),
          r
        );
      }),
        (R.prototype._read = function (e) {
          this.emit("error", new v("_read()"));
        }),
        (R.prototype.pipe = function (e, t) {
          var n = this,
            i = this._readableState;
          switch (i.pipesCount) {
            case 0:
              i.pipes = e;
              break;
            case 1:
              i.pipes = [i.pipes, e];
              break;
            default:
              i.pipes.push(e);
          }
          (i.pipesCount += 1), l("pipe count=%d opts=%j", i.pipesCount, t);
          var a =
            (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr ? u : g;
          function s(t, r) {
            l("onunpipe"),
              t === n &&
                r &&
                !1 === r.hasUnpiped &&
                ((r.hasUnpiped = !0),
                l("cleanup"),
                e.removeListener("close", p),
                e.removeListener("finish", b),
                e.removeListener("drain", f),
                e.removeListener("error", d),
                e.removeListener("unpipe", s),
                n.removeListener("end", u),
                n.removeListener("end", g),
                n.removeListener("data", h),
                (c = !0),
                !i.awaitDrain ||
                  (e._writableState && !e._writableState.needDrain) ||
                  f());
          }
          function u() {
            l("onend"), e.end();
          }
          i.endEmitted ? r.nextTick(a) : n.once("end", a), e.on("unpipe", s);
          var f = (function (e) {
            return function () {
              var t = e._readableState;
              l("pipeOnDrain", t.awaitDrain),
                t.awaitDrain && t.awaitDrain--,
                0 === t.awaitDrain && o(e, "data") && ((t.flowing = !0), N(e));
            };
          })(n);
          e.on("drain", f);
          var c = !1;
          function h(t) {
            l("ondata");
            var r = e.write(t);
            l("dest.write", r),
              !1 === r &&
                (((1 === i.pipesCount && i.pipes === e) ||
                  (i.pipesCount > 1 && -1 !== U(i.pipes, e))) &&
                  !c &&
                  (l("false write response, pause", i.awaitDrain),
                  i.awaitDrain++),
                n.pause());
          }
          function d(t) {
            l("onerror", t),
              g(),
              e.removeListener("error", d),
              0 === o(e, "error") && e.emit("error", t);
          }
          function p() {
            e.removeListener("finish", b), g();
          }
          function b() {
            l("onfinish"), e.removeListener("close", p), g();
          }
          function g() {
            l("unpipe"), n.unpipe(e);
          }
          return (
            n.on("data", h),
            (function (e, t, n) {
              if ("function" == typeof e.prependListener)
                return e.prependListener(t, n);
              e._events && e._events[t]
                ? Array.isArray(e._events[t])
                  ? e._events[t].unshift(n)
                  : (e._events[t] = [n, e._events[t]])
                : e.on(t, n);
            })(e, "error", d),
            e.once("close", p),
            e.once("finish", b),
            e.emit("pipe", n),
            i.flowing || (l("pipe resume"), n.resume()),
            e
          );
        }),
        (R.prototype.unpipe = function (e) {
          var t = this._readableState,
            n = { hasUnpiped: !1 };
          if (0 === t.pipesCount) return this;
          if (1 === t.pipesCount)
            return (
              (e && e !== t.pipes) ||
                (e || (e = t.pipes),
                (t.pipes = null),
                (t.pipesCount = 0),
                (t.flowing = !1),
                e && e.emit("unpipe", this, n)),
              this
            );
          if (!e) {
            var r = t.pipes,
              i = t.pipesCount;
            (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
            for (var o = 0; o < i; o++)
              r[o].emit("unpipe", this, { hasUnpiped: !1 });
            return this;
          }
          var a = U(t.pipes, e);
          return (
            -1 === a ||
              (t.pipes.splice(a, 1),
              (t.pipesCount -= 1),
              1 === t.pipesCount && (t.pipes = t.pipes[0]),
              e.emit("unpipe", this, n)),
            this
          );
        }),
        (R.prototype.on = function (e, t) {
          var n = a.prototype.on.call(this, e, t),
            i = this._readableState;
          return (
            "data" === e
              ? ((i.readableListening = this.listenerCount("readable") > 0),
                !1 !== i.flowing && this.resume())
              : "readable" === e &&
                (i.endEmitted ||
                  i.readableListening ||
                  ((i.readableListening = i.needReadable = !0),
                  (i.flowing = !1),
                  (i.emittedReadable = !1),
                  l("on readable", i.length, i.reading),
                  i.length ? T(this) : i.reading || r.nextTick(j, this))),
            n
          );
        }),
        (R.prototype.addListener = R.prototype.on),
        (R.prototype.removeListener = function (e, t) {
          var n = a.prototype.removeListener.call(this, e, t);
          return "readable" === e && r.nextTick(P, this), n;
        }),
        (R.prototype.removeAllListeners = function (e) {
          var t = a.prototype.removeAllListeners.apply(this, arguments);
          return ("readable" !== e && void 0 !== e) || r.nextTick(P, this), t;
        }),
        (R.prototype.resume = function () {
          var e = this._readableState;
          return (
            e.flowing ||
              (l("resume"),
              (e.flowing = !e.readableListening),
              (function (e, t) {
                t.resumeScheduled ||
                  ((t.resumeScheduled = !0), r.nextTick(C, e, t));
              })(this, e)),
            (e.paused = !1),
            this
          );
        }),
        (R.prototype.pause = function () {
          return (
            l("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (l("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            (this._readableState.paused = !0),
            this
          );
        }),
        (R.prototype.wrap = function (e) {
          var t = this,
            n = this._readableState,
            r = !1;
          for (var i in (e.on("end", function () {
            if ((l("wrapped end"), n.decoder && !n.ended)) {
              var e = n.decoder.end();
              e && e.length && t.push(e);
            }
            t.push(null);
          }),
          e.on("data", function (i) {
            (l("wrapped data"),
            n.decoder && (i = n.decoder.write(i)),
            n.objectMode && null == i) ||
              ((n.objectMode || (i && i.length)) &&
                (t.push(i) || ((r = !0), e.pause())));
          }),
          e))
            void 0 === this[i] &&
              "function" == typeof e[i] &&
              (this[i] = (function (t) {
                return function () {
                  return e[t].apply(e, arguments);
                };
              })(i));
          for (var o = 0; o < S.length; o++)
            e.on(S[o], this.emit.bind(this, S[o]));
          return (
            (this._read = function (t) {
              l("wrapped _read", t), r && ((r = !1), e.resume());
            }),
            this
          );
        }),
        "function" == typeof Symbol &&
          (R.prototype[Symbol.asyncIterator] = function () {
            return (
              w("Readable[Symbol.asyncIterator]"),
              void 0 === h && (h = n(91)),
              h(this)
            );
          }),
        Object.defineProperty(R.prototype, "readableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._readableState.highWaterMark;
          },
        }),
        Object.defineProperty(R.prototype, "readableBuffer", {
          enumerable: !1,
          get: function () {
            return this._readableState && this._readableState.buffer;
          },
        }),
        Object.defineProperty(R.prototype, "readableFlowing", {
          enumerable: !1,
          get: function () {
            return this._readableState.flowing;
          },
          set: function (e) {
            this._readableState && (this._readableState.flowing = e);
          },
        }),
        (R._fromList = I),
        Object.defineProperty(R.prototype, "readableLength", {
          enumerable: !1,
          get: function () {
            return this._readableState.length;
          },
        });
    }).call(this, n(2), n(0));
  },
  function (e, t, n) {
    e.exports = n(5).EventEmitter;
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      function n(e, t) {
        i(e, t), r(e);
      }
      function r(e) {
        (e._writableState && !e._writableState.emitClose) ||
          (e._readableState && !e._readableState.emitClose) ||
          e.emit("close");
      }
      function i(e, t) {
        e.emit("error", t);
      }
      e.exports = {
        destroy: function (e, o) {
          var a = this,
            s = this._readableState && this._readableState.destroyed,
            u = this._writableState && this._writableState.destroyed;
          return s || u
            ? (o
                ? o(e)
                : !e ||
                  (this._writableState && this._writableState.errorEmitted) ||
                  t.nextTick(i, this, e),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(e || null, function (e) {
                !o && e
                  ? (t.nextTick(n, a, e),
                    a._writableState && (a._writableState.errorEmitted = !0))
                  : o
                  ? (t.nextTick(r, a), o(e))
                  : t.nextTick(r, a);
              }),
              this);
        },
        undestroy: function () {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finalCalled = !1),
              (this._writableState.prefinished = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1));
        },
      };
    }).call(this, n(0));
  },
  function (e, t, n) {
    "use strict";
    var r = n(10).codes.ERR_INVALID_OPT_VALUE;
    e.exports = {
      getHighWaterMark: function (e, t, n, i) {
        var o = (function (e, t, n) {
          return null != e.highWaterMark ? e.highWaterMark : t ? e[n] : null;
        })(t, i, n);
        if (null != o) {
          if (!isFinite(o) || Math.floor(o) !== o || o < 0)
            throw new r(i ? n : "highWaterMark", o);
          return Math.floor(o);
        }
        return e.objectMode ? 16 : 16384;
      },
    };
  },
  function (e, t, n) {
    "use strict";
    (function (t, r) {
      function i(e) {
        var t = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            !(function (e, t, n) {
              var r = e.entry;
              e.entry = null;
              for (; r; ) {
                var i = r.callback;
                t.pendingcb--, i(n), (r = r.next);
              }
              t.corkedRequestsFree.next = e;
            })(t, e);
          });
      }
      var o;
      (e.exports = R), (R.WritableState = E);
      var a = { deprecate: n(14) },
        s = n(37),
        u = n(3).Buffer,
        l = t.Uint8Array || function () {};
      var f,
        c = n(38),
        h = n(39).getHighWaterMark,
        d = n(10).codes,
        p = d.ERR_INVALID_ARG_TYPE,
        b = d.ERR_METHOD_NOT_IMPLEMENTED,
        g = d.ERR_MULTIPLE_CALLBACK,
        y = d.ERR_STREAM_CANNOT_PIPE,
        _ = d.ERR_STREAM_DESTROYED,
        v = d.ERR_STREAM_NULL_VALUES,
        m = d.ERR_STREAM_WRITE_AFTER_END,
        w = d.ERR_UNKNOWN_ENCODING;
      function S() {}
      function E(e, t, a) {
        (o = o || n(11)),
          (e = e || {}),
          "boolean" != typeof a && (a = t instanceof o),
          (this.objectMode = !!e.objectMode),
          a && (this.objectMode = this.objectMode || !!e.writableObjectMode),
          (this.highWaterMark = h(this, e, "writableHighWaterMark", a)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var s = !1 === e.decodeStrings;
        (this.decodeStrings = !s),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (e) {
            !(function (e, t) {
              var n = e._writableState,
                i = n.sync,
                o = n.writecb;
              if ("function" != typeof o) throw new g();
              if (
                ((function (e) {
                  (e.writing = !1),
                    (e.writecb = null),
                    (e.length -= e.writelen),
                    (e.writelen = 0);
                })(n),
                t)
              )
                !(function (e, t, n, i, o) {
                  --t.pendingcb,
                    n
                      ? (r.nextTick(o, i),
                        r.nextTick(L, e, t),
                        (e._writableState.errorEmitted = !0),
                        e.emit("error", i))
                      : (o(i),
                        (e._writableState.errorEmitted = !0),
                        e.emit("error", i),
                        L(e, t));
                })(e, n, i, t, o);
              else {
                var a = T(n) || e.destroyed;
                a ||
                  n.corked ||
                  n.bufferProcessing ||
                  !n.bufferedRequest ||
                  M(e, n),
                  i ? r.nextTick(x, e, n, a, o) : x(e, n, a, o);
              }
            })(t, e);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.emitClose = !1 !== e.emitClose),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new i(this));
      }
      function R(e) {
        var t = this instanceof (o = o || n(11));
        if (!t && !f.call(R, this)) return new R(e);
        (this._writableState = new E(e, this, t)),
          (this.writable = !0),
          e &&
            ("function" == typeof e.write && (this._write = e.write),
            "function" == typeof e.writev && (this._writev = e.writev),
            "function" == typeof e.destroy && (this._destroy = e.destroy),
            "function" == typeof e.final && (this._final = e.final)),
          s.call(this);
      }
      function k(e, t, n, r, i, o, a) {
        (t.writelen = r),
          (t.writecb = a),
          (t.writing = !0),
          (t.sync = !0),
          t.destroyed
            ? t.onwrite(new _("write"))
            : n
            ? e._writev(i, t.onwrite)
            : e._write(i, o, t.onwrite),
          (t.sync = !1);
      }
      function x(e, t, n, r) {
        n ||
          (function (e, t) {
            0 === t.length &&
              t.needDrain &&
              ((t.needDrain = !1), e.emit("drain"));
          })(e, t),
          t.pendingcb--,
          r(),
          L(e, t);
      }
      function M(e, t) {
        t.bufferProcessing = !0;
        var n = t.bufferedRequest;
        if (e._writev && n && n.next) {
          var r = t.bufferedRequestCount,
            o = new Array(r),
            a = t.corkedRequestsFree;
          a.entry = n;
          for (var s = 0, u = !0; n; )
            (o[s] = n), n.isBuf || (u = !1), (n = n.next), (s += 1);
          (o.allBuffers = u),
            k(e, t, !0, t.length, o, "", a.finish),
            t.pendingcb++,
            (t.lastBufferedRequest = null),
            a.next
              ? ((t.corkedRequestsFree = a.next), (a.next = null))
              : (t.corkedRequestsFree = new i(t)),
            (t.bufferedRequestCount = 0);
        } else {
          for (; n; ) {
            var l = n.chunk,
              f = n.encoding,
              c = n.callback;
            if (
              (k(e, t, !1, t.objectMode ? 1 : l.length, l, f, c),
              (n = n.next),
              t.bufferedRequestCount--,
              t.writing)
            )
              break;
          }
          null === n && (t.lastBufferedRequest = null);
        }
        (t.bufferedRequest = n), (t.bufferProcessing = !1);
      }
      function T(e) {
        return (
          e.ending &&
          0 === e.length &&
          null === e.bufferedRequest &&
          !e.finished &&
          !e.writing
        );
      }
      function A(e, t) {
        e._final(function (n) {
          t.pendingcb--,
            n && e.emit("error", n),
            (t.prefinished = !0),
            e.emit("prefinish"),
            L(e, t);
        });
      }
      function L(e, t) {
        var n = T(t);
        return (
          n &&
            (!(function (e, t) {
              t.prefinished ||
                t.finalCalled ||
                ("function" != typeof e._final || t.destroyed
                  ? ((t.prefinished = !0), e.emit("prefinish"))
                  : (t.pendingcb++, (t.finalCalled = !0), r.nextTick(A, e, t)));
            })(e, t),
            0 === t.pendingcb && ((t.finished = !0), e.emit("finish"))),
          n
        );
      }
      n(1)(R, s),
        (E.prototype.getBuffer = function () {
          for (var e = this.bufferedRequest, t = []; e; )
            t.push(e), (e = e.next);
          return t;
        }),
        (function () {
          try {
            Object.defineProperty(E.prototype, "buffer", {
              get: a.deprecate(
                function () {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              ),
            });
          } catch (e) {}
        })(),
        "function" == typeof Symbol &&
        Symbol.hasInstance &&
        "function" == typeof Function.prototype[Symbol.hasInstance]
          ? ((f = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(R, Symbol.hasInstance, {
              value: function (e) {
                return (
                  !!f.call(this, e) ||
                  (this === R && e && e._writableState instanceof E)
                );
              },
            }))
          : (f = function (e) {
              return e instanceof this;
            }),
        (R.prototype.pipe = function () {
          this.emit("error", new y());
        }),
        (R.prototype.write = function (e, t, n) {
          var i,
            o = this._writableState,
            a = !1,
            s = !o.objectMode && ((i = e), u.isBuffer(i) || i instanceof l);
          return (
            s &&
              !u.isBuffer(e) &&
              (e = (function (e) {
                return u.from(e);
              })(e)),
            "function" == typeof t && ((n = t), (t = null)),
            s ? (t = "buffer") : t || (t = o.defaultEncoding),
            "function" != typeof n && (n = S),
            o.ending
              ? (function (e, t) {
                  var n = new m();
                  e.emit("error", n), r.nextTick(t, n);
                })(this, n)
              : (s ||
                  (function (e, t, n, i) {
                    var o;
                    return (
                      null === n
                        ? (o = new v())
                        : "string" == typeof n ||
                          t.objectMode ||
                          (o = new p("chunk", ["string", "Buffer"], n)),
                      !o || (e.emit("error", o), r.nextTick(i, o), !1)
                    );
                  })(this, o, e, n)) &&
                (o.pendingcb++,
                (a = (function (e, t, n, r, i, o) {
                  if (!n) {
                    var a = (function (e, t, n) {
                      e.objectMode ||
                        !1 === e.decodeStrings ||
                        "string" != typeof t ||
                        (t = u.from(t, n));
                      return t;
                    })(t, r, i);
                    r !== a && ((n = !0), (i = "buffer"), (r = a));
                  }
                  var s = t.objectMode ? 1 : r.length;
                  t.length += s;
                  var l = t.length < t.highWaterMark;
                  l || (t.needDrain = !0);
                  if (t.writing || t.corked) {
                    var f = t.lastBufferedRequest;
                    (t.lastBufferedRequest = {
                      chunk: r,
                      encoding: i,
                      isBuf: n,
                      callback: o,
                      next: null,
                    }),
                      f
                        ? (f.next = t.lastBufferedRequest)
                        : (t.bufferedRequest = t.lastBufferedRequest),
                      (t.bufferedRequestCount += 1);
                  } else k(e, t, !1, s, r, i, o);
                  return l;
                })(this, o, s, e, t, n))),
            a
          );
        }),
        (R.prototype.cork = function () {
          this._writableState.corked++;
        }),
        (R.prototype.uncork = function () {
          var e = this._writableState;
          e.corked &&
            (e.corked--,
            e.writing ||
              e.corked ||
              e.bufferProcessing ||
              !e.bufferedRequest ||
              M(this, e));
        }),
        (R.prototype.setDefaultEncoding = function (e) {
          if (
            ("string" == typeof e && (e = e.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw",
              ].indexOf((e + "").toLowerCase()) > -1
            ))
          )
            throw new w(e);
          return (this._writableState.defaultEncoding = e), this;
        }),
        Object.defineProperty(R.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(R.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
        (R.prototype._write = function (e, t, n) {
          n(new b("_write()"));
        }),
        (R.prototype._writev = null),
        (R.prototype.end = function (e, t, n) {
          var i = this._writableState;
          return (
            "function" == typeof e
              ? ((n = e), (e = null), (t = null))
              : "function" == typeof t && ((n = t), (t = null)),
            null != e && this.write(e, t),
            i.corked && ((i.corked = 1), this.uncork()),
            i.ending ||
              (function (e, t, n) {
                (t.ending = !0),
                  L(e, t),
                  n && (t.finished ? r.nextTick(n) : e.once("finish", n));
                (t.ended = !0), (e.writable = !1);
              })(this, i, n),
            this
          );
        }),
        Object.defineProperty(R.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(R.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function (e) {
            this._writableState && (this._writableState.destroyed = e);
          },
        }),
        (R.prototype.destroy = c.destroy),
        (R.prototype._undestroy = c.undestroy),
        (R.prototype._destroy = function (e, t) {
          t(e);
        });
    }).call(this, n(2), n(0));
  },
  function (e, t, n) {
    "use strict";
    e.exports = f;
    var r = n(10).codes,
      i = r.ERR_METHOD_NOT_IMPLEMENTED,
      o = r.ERR_MULTIPLE_CALLBACK,
      a = r.ERR_TRANSFORM_ALREADY_TRANSFORMING,
      s = r.ERR_TRANSFORM_WITH_LENGTH_0,
      u = n(11);
    function l(e, t) {
      var n = this._transformState;
      n.transforming = !1;
      var r = n.writecb;
      if (null === r) return this.emit("error", new o());
      (n.writechunk = null),
        (n.writecb = null),
        null != t && this.push(t),
        r(e);
      var i = this._readableState;
      (i.reading = !1),
        (i.needReadable || i.length < i.highWaterMark) &&
          this._read(i.highWaterMark);
    }
    function f(e) {
      if (!(this instanceof f)) return new f(e);
      u.call(this, e),
        (this._transformState = {
          afterTransform: l.bind(this),
          needTransform: !1,
          transforming: !1,
          writecb: null,
          writechunk: null,
          writeencoding: null,
        }),
        (this._readableState.needReadable = !0),
        (this._readableState.sync = !1),
        e &&
          ("function" == typeof e.transform && (this._transform = e.transform),
          "function" == typeof e.flush && (this._flush = e.flush)),
        this.on("prefinish", c);
    }
    function c() {
      var e = this;
      "function" != typeof this._flush || this._readableState.destroyed
        ? h(this, null, null)
        : this._flush(function (t, n) {
            h(e, t, n);
          });
    }
    function h(e, t, n) {
      if (t) return e.emit("error", t);
      if ((null != n && e.push(n), e._writableState.length)) throw new s();
      if (e._transformState.transforming) throw new a();
      return e.push(null);
    }
    n(1)(f, u),
      (f.prototype.push = function (e, t) {
        return (
          (this._transformState.needTransform = !1),
          u.prototype.push.call(this, e, t)
        );
      }),
      (f.prototype._transform = function (e, t, n) {
        n(new i("_transform()"));
      }),
      (f.prototype._write = function (e, t, n) {
        var r = this._transformState;
        if (
          ((r.writecb = n),
          (r.writechunk = e),
          (r.writeencoding = t),
          !r.transforming)
        ) {
          var i = this._readableState;
          (r.needTransform || i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark);
        }
      }),
      (f.prototype._read = function (e) {
        var t = this._transformState;
        null === t.writechunk || t.transforming
          ? (t.needTransform = !0)
          : ((t.transforming = !0),
            this._transform(t.writechunk, t.writeencoding, t.afterTransform));
      }),
      (f.prototype._destroy = function (e, t) {
        u.prototype._destroy.call(this, e, function (e) {
          t(e);
        });
      });
  },
  function (e, t, n) {
    "use strict";
    var r = n(35);
    e.exports = function (e, t, n) {
      var i = n || r,
        o = {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "0",
          "fill-rule": "evenodd",
          width: e.width + e.units,
          height: e.height + e.units,
          viewBox: e.viewBox.join(" "),
        };
      "string" == typeof t && (t = { id: t }),
        Object.keys(t || {}).forEach(function (e) {
          var n = t[e];
          null != n && (o[e] = n);
        });
      var a = [];
      if (e.layer.length) {
        e.defs.length && a.push(i("defs", {}, e.defs));
        var s =
          "translate(0," + (e.viewBox[3] + 2 * e.viewBox[1]) + ") scale(1,-1)";
        a.push(
          i(
            "g",
            { transform: s, fill: "currentColor", stroke: "currentColor" },
            e.layer
          )
        );
      }
      return i("svg", o, a);
    };
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var r = n(44),
        i = n(45),
        o = n(68),
        a = n(35),
        s = n(85),
        u = n(42),
        l = n(97);
      (e.exports = function (e, n, u) {
        "function" == typeof n && ((u = n), (n = null));
        var l,
          f =
            ("string" == typeof (l = n) ? (l = { id: l }) : l || (l = {}),
            {
              id: r.ensure(l.id),
              attributes: l.attributes || {},
              createElement: l.createElement || a,
              objectMode: null != l.objectMode && l.objectMode,
              parser: { places: l.places, zero: l.zero, filetype: l.filetype },
              plotter: {
                units: l.units,
                backupUnits: l.backupUnits,
                nota: l.nota,
                backupNota: l.backupNota,
                optimizePaths: l.optimizePaths,
                plotAsOutline: l.plotAsOutline,
              },
            }),
          c = null != u,
          h = new s(f.id, f.attributes, f.createElement, f.objectMode),
          d = i(f.parser),
          p = o(f.plotter);
        if (
          ((h.parser = d),
          (h.plotter = p),
          d.on("warning", function (e) {
            h.emit("warning", e);
          }),
          p.on("warning", function (e) {
            h.emit("warning", e);
          }),
          d.once("error", function (e) {
            h.emit("error", e);
          }),
          p.once("error", function (e) {
            h.emit("error", e);
          }),
          d.once("end", function () {
            h.filetype = d.format.filetype;
          }),
          e.pipe
            ? (e.setEncoding("utf8"), e.pipe(d))
            : t.nextTick(function () {
                d.write(e), d.end();
              }),
          d.pipe(p).pipe(h),
          c)
        ) {
          var b = "",
            g = function () {
              return u(null, b);
            };
          h.on("readable", function () {
            var e;
            do {
              (e = h.read() || ""), (b += e);
            } while (e);
          }),
            h.once("end", g),
            h.once("error", function (e) {
              return h.removeListener("end", g), u(e);
            });
        }
        return h;
      }),
        (e.exports.render = u),
        (e.exports.clone = l);
    }).call(this, n(0));
  },
  function (e, t, n) {
    "use strict";
    var r = "_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      i = "-0123456789" + r,
      o = new RegExp("^[^" + r + "]|[^\\" + i + "]", "g");
    function a(e) {
      return (e = e || 12), u(1, r) + u(e - 1, i);
    }
    function s(e) {
      return e.replace(o, "_");
    }
    function u(e, t) {
      for (var n = t.length, r = ""; e > 0; )
        e--, (r += t[Math.floor(Math.random() * n)]);
      return r;
    }
    e.exports = {
      random: a,
      sanitize: s,
      ensure: function (e, t) {
        return "string" == typeof e ? s(e) : a(t);
      },
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(12),
      i = n(46);
    e.exports = function (e) {
      var t = (e = e || {}).places
          ? (function (e) {
              if (Array.isArray(e) && 2 === e.length && r(e[0]) && r(e[1]))
                return e;
              throw new Error("places must be an array of two whole numbers");
            })(e.places)
          : null,
        n = e.zero
          ? (function (e) {
              if ("T" === e || "L" === e) return e;
              throw new Error("zero suppression must be 'L' or 'T'");
            })(e.zero)
          : null,
        o = e.filetype
          ? (function (e) {
              if ("gerber" === e || "drill" === e) return e;
              throw new Error('filetype must be "drill" or "gerber"');
            })(e.filetype)
          : null;
      return new i(t, n, o);
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(4).StringDecoder,
      i = n(1),
      o = n(51).Transform,
      a = n(59),
      s = n(60),
      u = n(61),
      l = n(66),
      f = n(67),
      c = n(28),
      h = function (e, t, n) {
        o.call(this, { readableObjectMode: !0 }),
          (this._decoder = new r("utf8")),
          (this._stash = ""),
          (this._index = 0),
          (this._drillMode = c.DRILL),
          (this._drillStash = []),
          (this._syncResult = null),
          (this.line = 0),
          (this.format = { places: e, zero: t, filetype: n });
      };
    i(h, o),
      (h.prototype._process = function (e, t) {
        for (; this._index < e.length; ) {
          var n = s(t, e, this._index);
          (this._index += n.read),
            (this.line += n.lines),
            (this._stash += n.rem),
            n.block &&
              ("gerber" === t ? u(this, n.block) : l.parse(this, n.block));
        }
      }),
      (h.prototype._transform = function (e, t, n) {
        var r = this.format.filetype;
        if (((e = this._decoder.write(e)), !r)) {
          if (((r = a(e, this._index, 65535)), (this._index += e.length), !r))
            return this._index >= 65535
              ? n(new Error("unable to determine filetype"))
              : ((this._stash += e), n());
          (this.format.filetype = r), (this._index = 0);
        }
        (e = this._stash + e),
          (this._stash = ""),
          this._process(e, r),
          (this._index = 0),
          n();
      }),
      (h.prototype._flush = function (e) {
        return "drill" === this.format.filetype && l.flush(this), e && e();
      }),
      (h.prototype._push = function (e) {
        -1 === e.line && (e.line = this.line),
          (this._syncResult ? this._syncResult : this).push(e);
      }),
      (h.prototype._warn = function (e) {
        this.emit("warning", f(e, this.line));
      }),
      (h.prototype.parseSync = function (e) {
        var t = a(e, this._index, 6553500);
        return (
          (this.format.filetype = t),
          (this._syncResult = []),
          this._process(e, t),
          this._flush(),
          this._syncResult
        );
      }),
      (e.exports = h);
  },
  function (e, t, n) {
    var r = n(3),
      i = r.Buffer;
    function o(e, t) {
      for (var n in e) t[n] = e[n];
    }
    function a(e, t, n) {
      return i(e, t, n);
    }
    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
      ? (e.exports = r)
      : (o(r, t), (t.Buffer = a)),
      (a.prototype = Object.create(i.prototype)),
      o(i, a),
      (a.from = function (e, t, n) {
        if ("number" == typeof e)
          throw new TypeError("Argument must not be a number");
        return i(e, t, n);
      }),
      (a.alloc = function (e, t, n) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        var r = i(e);
        return (
          void 0 !== t
            ? "string" == typeof n
              ? r.fill(t, n)
              : r.fill(t)
            : r.fill(0),
          r
        );
      }),
      (a.allocUnsafe = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return i(e);
      }),
      (a.allocUnsafeSlow = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return r.SlowBuffer(e);
      });
  },
  function (e, t, n) {
    "use strict";
    (t.byteLength = function (e) {
      var t = l(e),
        n = t[0],
        r = t[1];
      return (3 * (n + r)) / 4 - r;
    }),
      (t.toByteArray = function (e) {
        var t,
          n,
          r = l(e),
          a = r[0],
          s = r[1],
          u = new o(
            (function (e, t, n) {
              return (3 * (t + n)) / 4 - n;
            })(0, a, s)
          ),
          f = 0,
          c = s > 0 ? a - 4 : a;
        for (n = 0; n < c; n += 4)
          (t =
            (i[e.charCodeAt(n)] << 18) |
            (i[e.charCodeAt(n + 1)] << 12) |
            (i[e.charCodeAt(n + 2)] << 6) |
            i[e.charCodeAt(n + 3)]),
            (u[f++] = (t >> 16) & 255),
            (u[f++] = (t >> 8) & 255),
            (u[f++] = 255 & t);
        2 === s &&
          ((t = (i[e.charCodeAt(n)] << 2) | (i[e.charCodeAt(n + 1)] >> 4)),
          (u[f++] = 255 & t));
        1 === s &&
          ((t =
            (i[e.charCodeAt(n)] << 10) |
            (i[e.charCodeAt(n + 1)] << 4) |
            (i[e.charCodeAt(n + 2)] >> 2)),
          (u[f++] = (t >> 8) & 255),
          (u[f++] = 255 & t));
        return u;
      }),
      (t.fromByteArray = function (e) {
        for (
          var t, n = e.length, i = n % 3, o = [], a = 0, s = n - i;
          a < s;
          a += 16383
        )
          o.push(f(e, a, a + 16383 > s ? s : a + 16383));
        1 === i
          ? ((t = e[n - 1]), o.push(r[t >> 2] + r[(t << 4) & 63] + "=="))
          : 2 === i &&
            ((t = (e[n - 2] << 8) + e[n - 1]),
            o.push(r[t >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63] + "="));
        return o.join("");
      });
    for (
      var r = [],
        i = [],
        o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        s = 0,
        u = a.length;
      s < u;
      ++s
    )
      (r[s] = a[s]), (i[a.charCodeAt(s)] = s);
    function l(e) {
      var t = e.length;
      if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var n = e.indexOf("=");
      return -1 === n && (n = t), [n, n === t ? 0 : 4 - (n % 4)];
    }
    function f(e, t, n) {
      for (var i, o, a = [], s = t; s < n; s += 3)
        (i =
          ((e[s] << 16) & 16711680) +
          ((e[s + 1] << 8) & 65280) +
          (255 & e[s + 2])),
          a.push(
            r[((o = i) >> 18) & 63] +
              r[(o >> 12) & 63] +
              r[(o >> 6) & 63] +
              r[63 & o]
          );
      return a.join("");
    }
    (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
  },
  function (e, t) {
    (t.read = function (e, t, n, r, i) {
      var o,
        a,
        s = 8 * i - r - 1,
        u = (1 << s) - 1,
        l = u >> 1,
        f = -7,
        c = n ? i - 1 : 0,
        h = n ? -1 : 1,
        d = e[t + c];
      for (
        c += h, o = d & ((1 << -f) - 1), d >>= -f, f += s;
        f > 0;
        o = 256 * o + e[t + c], c += h, f -= 8
      );
      for (
        a = o & ((1 << -f) - 1), o >>= -f, f += r;
        f > 0;
        a = 256 * a + e[t + c], c += h, f -= 8
      );
      if (0 === o) o = 1 - l;
      else {
        if (o === u) return a ? NaN : (1 / 0) * (d ? -1 : 1);
        (a += Math.pow(2, r)), (o -= l);
      }
      return (d ? -1 : 1) * a * Math.pow(2, o - r);
    }),
      (t.write = function (e, t, n, r, i, o) {
        var a,
          s,
          u,
          l = 8 * o - i - 1,
          f = (1 << l) - 1,
          c = f >> 1,
          h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          d = r ? 0 : o - 1,
          p = r ? 1 : -1,
          b = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
        for (
          t = Math.abs(t),
            isNaN(t) || t === 1 / 0
              ? ((s = isNaN(t) ? 1 : 0), (a = f))
              : ((a = Math.floor(Math.log(t) / Math.LN2)),
                t * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                (t += a + c >= 1 ? h / u : h * Math.pow(2, 1 - c)) * u >= 2 &&
                  (a++, (u /= 2)),
                a + c >= f
                  ? ((s = 0), (a = f))
                  : a + c >= 1
                  ? ((s = (t * u - 1) * Math.pow(2, i)), (a += c))
                  : ((s = t * Math.pow(2, c - 1) * Math.pow(2, i)), (a = 0)));
          i >= 8;
          e[n + d] = 255 & s, d += p, s /= 256, i -= 8
        );
        for (
          a = (a << i) | s, l += i;
          l > 0;
          e[n + d] = 255 & a, d += p, a /= 256, l -= 8
        );
        e[n + d - p] |= 128 * b;
      });
  },
  function (e, t) {
    var n = {}.toString;
    e.exports =
      Array.isArray ||
      function (e) {
        return "[object Array]" == n.call(e);
      };
  },
  function (e, t, n) {
    ((t = e.exports = n(20)).Stream = t),
      (t.Readable = t),
      (t.Writable = n(24)),
      (t.Duplex = n(7)),
      (t.Transform = n(25)),
      (t.PassThrough = n(57)),
      (t.finished = n(15)),
      (t.pipeline = n(58));
  },
  function (e, t) {},
  function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var i = n(3).Buffer,
      o = n(54).inspect,
      a = (o && o.custom) || "inspect";
    e.exports = (function () {
      function e() {
        (this.head = null), (this.tail = null), (this.length = 0);
      }
      var t = e.prototype;
      return (
        (t.push = function (e) {
          var t = { data: e, next: null };
          this.length > 0 ? (this.tail.next = t) : (this.head = t),
            (this.tail = t),
            ++this.length;
        }),
        (t.unshift = function (e) {
          var t = { data: e, next: this.head };
          0 === this.length && (this.tail = t), (this.head = t), ++this.length;
        }),
        (t.shift = function () {
          if (0 !== this.length) {
            var e = this.head.data;
            return (
              1 === this.length
                ? (this.head = this.tail = null)
                : (this.head = this.head.next),
              --this.length,
              e
            );
          }
        }),
        (t.clear = function () {
          (this.head = this.tail = null), (this.length = 0);
        }),
        (t.join = function (e) {
          if (0 === this.length) return "";
          for (var t = this.head, n = "" + t.data; (t = t.next); )
            n += e + t.data;
          return n;
        }),
        (t.concat = function (e) {
          if (0 === this.length) return i.alloc(0);
          for (
            var t, n, r, o = i.allocUnsafe(e >>> 0), a = this.head, s = 0;
            a;

          )
            (t = a.data),
              (n = o),
              (r = s),
              i.prototype.copy.call(t, n, r),
              (s += a.data.length),
              (a = a.next);
          return o;
        }),
        (t.consume = function (e, t) {
          var n;
          return (
            e < this.head.data.length
              ? ((n = this.head.data.slice(0, e)),
                (this.head.data = this.head.data.slice(e)))
              : (n =
                  e === this.head.data.length
                    ? this.shift()
                    : t
                    ? this._getString(e)
                    : this._getBuffer(e)),
            n
          );
        }),
        (t.first = function () {
          return this.head.data;
        }),
        (t._getString = function (e) {
          var t = this.head,
            n = 1,
            r = t.data;
          for (e -= r.length; (t = t.next); ) {
            var i = t.data,
              o = e > i.length ? i.length : e;
            if (
              (o === i.length ? (r += i) : (r += i.slice(0, e)), 0 === (e -= o))
            ) {
              o === i.length
                ? (++n,
                  t.next
                    ? (this.head = t.next)
                    : (this.head = this.tail = null))
                : ((this.head = t), (t.data = i.slice(o)));
              break;
            }
            ++n;
          }
          return (this.length -= n), r;
        }),
        (t._getBuffer = function (e) {
          var t = i.allocUnsafe(e),
            n = this.head,
            r = 1;
          for (n.data.copy(t), e -= n.data.length; (n = n.next); ) {
            var o = n.data,
              a = e > o.length ? o.length : e;
            if ((o.copy(t, t.length - e, 0, a), 0 === (e -= a))) {
              a === o.length
                ? (++r,
                  n.next
                    ? (this.head = n.next)
                    : (this.head = this.tail = null))
                : ((this.head = n), (n.data = o.slice(a)));
              break;
            }
            ++r;
          }
          return (this.length -= r), t;
        }),
        (t[a] = function (e, t) {
          return o(
            this,
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                  (i = i.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                  )),
                  i.forEach(function (t) {
                    r(e, t, n[t]);
                  });
              }
              return e;
            })({}, t, { depth: 0, customInspect: !1 })
          );
        }),
        e
      );
    })();
  },
  function (e, t) {},
  function (e, t, n) {
    "use strict";
    (function (t) {
      var n = new Set();
      e.exports.emitExperimentalWarning = t.emitWarning
        ? function (e) {
            if (!n.has(e)) {
              var r =
                e +
                " is an experimental feature. This feature could change at any time";
              n.add(e), t.emitWarning(r, "ExperimentalWarning");
            }
          }
        : function () {};
    }).call(this, n(0));
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var r;
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var o = n(15),
        a = Symbol("lastResolve"),
        s = Symbol("lastReject"),
        u = Symbol("error"),
        l = Symbol("ended"),
        f = Symbol("lastPromise"),
        c = Symbol("handlePromise"),
        h = Symbol("stream");
      function d(e, t) {
        return { value: e, done: t };
      }
      function p(e) {
        var t = e[a];
        if (null !== t) {
          var n = e[h].read();
          null !== n &&
            ((e[f] = null), (e[a] = null), (e[s] = null), t(d(n, !1)));
        }
      }
      function b(e) {
        t.nextTick(p, e);
      }
      var g = Object.getPrototypeOf(function () {}),
        y = Object.setPrototypeOf(
          (i(
            (r = {
              get stream() {
                return this[h];
              },
              next: function () {
                var e = this,
                  n = this[u];
                if (null !== n) return Promise.reject(n);
                if (this[l]) return Promise.resolve(d(void 0, !0));
                if (this[h].destroyed)
                  return new Promise(function (n, r) {
                    t.nextTick(function () {
                      e[u] ? r(e[u]) : n(d(void 0, !0));
                    });
                  });
                var r,
                  i = this[f];
                if (i)
                  r = new Promise(
                    (function (e, t) {
                      return function (n, r) {
                        e.then(function () {
                          t[l] ? n(d(void 0, !0)) : t[c](n, r);
                        }, r);
                      };
                    })(i, this)
                  );
                else {
                  var o = this[h].read();
                  if (null !== o) return Promise.resolve(d(o, !1));
                  r = new Promise(this[c]);
                }
                return (this[f] = r), r;
              },
            }),
            Symbol.asyncIterator,
            function () {
              return this;
            }
          ),
          i(r, "return", function () {
            var e = this;
            return new Promise(function (t, n) {
              e[h].destroy(null, function (e) {
                e ? n(e) : t(d(void 0, !0));
              });
            });
          }),
          r),
          g
        );
      e.exports = function (e) {
        var t,
          n = Object.create(
            y,
            (i((t = {}), h, { value: e, writable: !0 }),
            i(t, a, { value: null, writable: !0 }),
            i(t, s, { value: null, writable: !0 }),
            i(t, u, { value: null, writable: !0 }),
            i(t, l, { value: e._readableState.endEmitted, writable: !0 }),
            i(t, c, {
              value: function (e, t) {
                var r = n[h].read();
                r
                  ? ((n[f] = null), (n[a] = null), (n[s] = null), e(d(r, !1)))
                  : ((n[a] = e), (n[s] = t));
              },
              writable: !0,
            }),
            t)
          );
        return (
          (n[f] = null),
          o(e, function (e) {
            if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
              var t = n[s];
              return (
                null !== t &&
                  ((n[f] = null), (n[a] = null), (n[s] = null), t(e)),
                void (n[u] = e)
              );
            }
            var r = n[a];
            null !== r &&
              ((n[f] = null), (n[a] = null), (n[s] = null), r(d(void 0, !0))),
              (n[l] = !0);
          }),
          e.on("readable", b.bind(null, n)),
          n
        );
      };
    }).call(this, n(0));
  },
  function (e, t, n) {
    "use strict";
    e.exports = i;
    var r = n(25);
    function i(e) {
      if (!(this instanceof i)) return new i(e);
      r.call(this, e);
    }
    n(1)(i, r),
      (i.prototype._transform = function (e, t, n) {
        n(null, e);
      });
  },
  function (e, t, n) {
    "use strict";
    var r;
    var i = n(6).codes,
      o = i.ERR_MISSING_ARGS,
      a = i.ERR_STREAM_DESTROYED;
    function s(e) {
      if (e) throw e;
    }
    function u(e, t, i, o) {
      o = (function (e) {
        var t = !1;
        return function () {
          t || ((t = !0), e.apply(void 0, arguments));
        };
      })(o);
      var s = !1;
      e.on("close", function () {
        s = !0;
      }),
        void 0 === r && (r = n(15)),
        r(e, { readable: t, writable: i }, function (e) {
          if (e) return o(e);
          (s = !0), o();
        });
      var u = !1;
      return function (t) {
        if (!s && !u)
          return (
            (u = !0),
            (function (e) {
              return e.setHeader && "function" == typeof e.abort;
            })(e)
              ? e.abort()
              : "function" == typeof e.destroy
              ? e.destroy()
              : void o(t || new a("pipe"))
          );
      };
    }
    function l(e) {
      e();
    }
    function f(e, t) {
      return e.pipe(t);
    }
    function c(e) {
      return e.length
        ? "function" != typeof e[e.length - 1]
          ? s
          : e.pop()
        : s;
    }
    e.exports = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r,
        i = c(t);
      if ((Array.isArray(t[0]) && (t = t[0]), t.length < 2))
        throw new o("streams");
      var a = t.map(function (e, n) {
        var o = n < t.length - 1;
        return u(e, o, n > 0, function (e) {
          r || (r = e), e && a.forEach(l), o || (a.forEach(l), i(r));
        });
      });
      return t.reduce(f);
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n) {
      for (
        var r = Math.min(n - t, e.length), i = [], o = null, a = -1;
        !o && ++a < r;

      ) {
        var s = e[a];
        "\n" === s
          ? i.length + a && ((o = "drill"), (i = []))
          : (i.push(s),
            "*" === s && ";" !== i[0] && ((o = "gerber"), (i = [])));
      }
      return o;
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n) {
      if ("gerber" !== e && "drill" !== e)
        throw new Error(
          'filetype to get next block must be "drill" or "gerber"'
        );
      for (
        var r = t.length - n,
          i = "gerber" === e ? "*" : "\n",
          o = "gerber" === e ? "%" : "",
          a = !1,
          s = !1,
          u = !1,
          l = !1,
          f = [],
          c = 0,
          h = 0;
        !l && c < r;

      ) {
        var d = t[n + c];
        "\n" === d && h++,
          d === o
            ? s
              ? ((u = !0), f.pop())
              : ((s = !0), f.push(d))
            : d === i
            ? ((a = !0), s && f.push(d))
            : d >= " " && d <= "~" && f.push(d),
          c++,
          (l = a && (!s || u));
      }
      return {
        lines: h,
        read: c,
        block: l ? f.join("").trim() : "",
        rem: l ? "" : f.join(""),
      };
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(26),
      i = n(16),
      o = n(27),
      a = n(64),
      s = /^G0*([123])/,
      u = /^G3([67])/,
      l = /^G7([45])/,
      f = /^G7([01])/,
      c = /^G9([01])/,
      h = /^G0*4/,
      d = /^%TO[^%*]*/,
      p = /^(?:G54)?D0*([1-9]\d+)/,
      b = /D0*([123])$/,
      g = /^(?:G0*[123])?((?:[XYIJ][+-]?\d+){1,4})(?:D0*[123])?$/,
      y = /^%MO(IN|MM)/,
      _ = /^%FS([LT]?)([AI]?)(.*)X([0-7])([0-7])Y\4\5/,
      v = /^%LP([CD])/,
      m = /^%SR(?:X(\d+)Y(\d+)I([\d.]+)J([\d.]+))?/,
      w = /^%ADD0*(\d{2,})([A-Za-z_$][\w\-.]*)(?:,((?:X?[\d.-]+)*))?/,
      S = /^%AM([A-Za-z_$][\w\-.]*)\*?(.*)/,
      E = /\*MO(IN|MM)$/,
      R = function (e, t) {
        var n = "IN" === t ? "in" : "mm";
        return e._push(r.set("units", n));
      };
    e.exports = function (e, t) {
      if (!h.test(t) && !d.test(t)) {
        if ("M02" === t) return e._push(r.done());
        if (u.test(t)) {
          var n = "6" === t.match(u)[1];
          return e._push(r.set("region", n));
        }
        if (l.test(t)) {
          var k = "4" === t.match(l)[1] ? "s" : "m";
          return e._push(r.set("arc", k));
        }
        if (y.test(t)) {
          var x = t.match(y)[1];
          return R(e, x);
        }
        if (f.test(t)) {
          var M = "0" === t.match(f)[1] ? "in" : "mm";
          return e._push(r.set("backupUnits", M));
        }
        if (_.test(t)) {
          var T = t.match(_),
            A = T[1],
            L = T[2],
            O = T[3],
            P = Number(T[4]),
            j = Number(T[5]),
            C = e.format;
          (C.zero = C.zero || A),
            C.places || (C.places = [P, j]),
            C.zero
              ? "T" === C.zero &&
                e._warn("trailing zero suppression has been deprecated")
              : ((C.zero = "L"),
                e._warn(
                  "zero suppression missing from format; assuming leading"
                )),
            O &&
              e._warn(
                'unknown characters "' + O + '" in "' + t + '" were ignored'
              );
          var N = 1.5 * Math.pow(10, -C.places[1]);
          if (
            (e._push(r.set("nota", L)), e._push(r.set("epsilon", N)), E.test(t))
          ) {
            var I = t.match(E)[1];
            R(e, I);
          }
        } else {
          if (c.test(t)) {
            var D = "0" === t.match(c)[1] ? "A" : "I";
            return e._push(r.set("backupNota", D));
          }
          if (v.test(t)) {
            var B = t.match(v)[1];
            return e._push(r.level("polarity", B));
          }
          if (m.test(t)) {
            var U = t.match(m),
              W = U[1] || 1,
              q = U[2] || 1,
              F = U[3] || 0,
              Y = U[4] || 0,
              H = { x: Number(W), y: Number(q), i: Number(F), j: Number(Y) };
            return e._push(r.level("stepRep", H));
          }
          if (p.test(t)) {
            var z = t.match(p)[1];
            return e._push(r.set("tool", z));
          }
          if (w.test(t))
            return (function (e, t) {
              var n,
                o,
                a,
                s = { places: e.format.places },
                u = t.match(w),
                l = u[1],
                f = u[2],
                c = u[3] ? u[3].split("X") : [];
              "C" === f
                ? ((n = "circle"), (o = 3))
                : "R" === f
                ? ((n = "rect"), (o = 4))
                : "O" === f
                ? ((n = "obround"), (o = 4))
                : "P" === f
                ? ((n = "poly"), (o = 5))
                : ((n = f), (o = 0)),
                "circle" === n
                  ? (a = [i(c[0], s)])
                  : "rect" === n || "obround" === n
                  ? (a = [i(c[0], s), i(c[1], s)])
                  : "poly" === n
                  ? ((a = [i(c[0], s), Number(c[1]), 0]),
                    c[2] && (a[2] = Number(c[2])))
                  : (a = c.map(Number));
              var h = [];
              c[o - 1]
                ? (h = [i(c[o - 2], s), i(c[o - 1], s)])
                : c[o - 2] && (h = [i(c[o - 2], s)]);
              var d = { shape: n, params: a, hole: h };
              return e._push(r.tool(l, d));
            })(e, t);
          if (S.test(t))
            return (function (e, t) {
              var n = t.match(S),
                i = n[1];
              i.match(/-/) &&
                e._warn("hyphens in macro name are illegal: " + i);
              var o = (n[2].length ? n[2].split("*") : [])
                .filter(Boolean)
                .map(function (t) {
                  return a(e, t);
                });
              return e._push(r.macro(i, o));
            })(e, t);
          if (!(b.test(t) || s.test(t) || g.test(t)))
            return e._warn(
              'block "' + t + '" was not recognized and was ignored'
            );
          var G,
            V = t.match(b),
            $ = t.match(s),
            K = t.match(g);
          if (
            ($ &&
              ((G = "1" === $[1] ? "i" : "2" === $[1] ? "cw" : "ccw"),
              e._push(r.set("mode", G))),
            V || K)
          ) {
            var X = V ? V[1] : "",
              Z = K ? K[1] : "",
              J = o.parse(Z, e.format),
              Q = "last";
            "1" === X
              ? (Q = "int")
              : "2" === X
              ? (Q = "move")
              : "3" === X && (Q = "flash"),
              e._push(r.op(Q, J));
          }
        }
      }
    };
  },
  function (e, t, n) {
    (function (t) {
      var n,
        r = /^\s+|\s+$/g,
        i = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        a = /^0o[0-7]+$/i,
        s = "[\\ud800-\\udfff]",
        u = "[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",
        l = "\\ud83c[\\udffb-\\udfff]",
        f = "[^\\ud800-\\udfff]",
        c = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        h = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        d = "(?:" + u + "|" + l + ")" + "?",
        p =
          "[\\ufe0e\\ufe0f]?" +
          d +
          ("(?:\\u200d(?:" +
            [f, c, h].join("|") +
            ")[\\ufe0e\\ufe0f]?" +
            d +
            ")*"),
        b = "(?:" + [f + u + "?", u, c, h, s].join("|") + ")",
        g = RegExp(l + "(?=" + l + ")|" + b + p, "g"),
        y = RegExp(
          "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"
        ),
        _ = parseInt,
        v = "object" == typeof t && t && t.Object === Object && t,
        m = "object" == typeof self && self && self.Object === Object && self,
        w = v || m || Function("return this")(),
        S =
          ((n = "length"),
          function (e) {
            return null == e ? void 0 : e[n];
          });
      function E(e) {
        return y.test(e);
      }
      function R(e) {
        return E(e)
          ? (function (e) {
              var t = (g.lastIndex = 0);
              for (; g.test(e); ) t++;
              return t;
            })(e)
          : S(e);
      }
      function k(e) {
        return E(e)
          ? (function (e) {
              return e.match(g) || [];
            })(e)
          : (function (e) {
              return e.split("");
            })(e);
      }
      var x = Object.prototype.toString,
        M = w.Symbol,
        T = Math.ceil,
        A = Math.floor,
        L = M ? M.prototype : void 0,
        O = L ? L.toString : void 0;
      function P(e, t) {
        var n = "";
        if (!e || t < 1 || t > 9007199254740991) return n;
        do {
          t % 2 && (n += e), (t = A(t / 2)) && (e += e);
        } while (t);
        return n;
      }
      function j(e) {
        if ("string" == typeof e) return e;
        if (I(e)) return O ? O.call(e) : "";
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
      }
      function C(e, t, n) {
        var r = e.length;
        return (
          (n = void 0 === n ? r : n),
          !t && n >= r
            ? e
            : (function (e, t, n) {
                var r = -1,
                  i = e.length;
                t < 0 && (t = -t > i ? 0 : i + t),
                  (n = n > i ? i : n) < 0 && (n += i),
                  (i = t > n ? 0 : (n - t) >>> 0),
                  (t >>>= 0);
                for (var o = Array(i); ++r < i; ) o[r] = e[r + t];
                return o;
              })(e, t, n)
        );
      }
      function N(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function I(e) {
        return (
          "symbol" == typeof e ||
          ((function (e) {
            return !!e && "object" == typeof e;
          })(e) &&
            "[object Symbol]" == x.call(e))
        );
      }
      function D(e) {
        return e
          ? (e = (function (e) {
              if ("number" == typeof e) return e;
              if (I(e)) return NaN;
              if (N(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = N(t) ? t + "" : t;
              }
              if ("string" != typeof e) return 0 === e ? e : +e;
              e = e.replace(r, "");
              var n = o.test(e);
              return n || a.test(e)
                ? _(e.slice(2), n ? 2 : 8)
                : i.test(e)
                ? NaN
                : +e;
            })(e)) ===
              1 / 0 || e === -1 / 0
            ? 17976931348623157e292 * (e < 0 ? -1 : 1)
            : e == e
            ? e
            : 0
          : 0 === e
          ? e
          : 0;
      }
      e.exports = function (e, t, n) {
        var r;
        e = null == (r = e) ? "" : j(r);
        var i = (t = (function (e) {
          var t = D(e),
            n = t % 1;
          return t == t ? (n ? t - n : t) : 0;
        })(t))
          ? R(e)
          : 0;
        return t && i < t
          ? (function (e, t) {
              var n = (t = void 0 === t ? " " : j(t)).length;
              if (n < 2) return n ? P(t, e) : t;
              var r = P(t, T(e / R(t)));
              return E(t) ? C(k(r), 0, e).join("") : r.slice(0, e);
            })(t - i, n) + e
          : e;
      };
    }).call(this, n(2));
  },
  function (e, t, n) {
    (function (t) {
      var n,
        r = /^\s+|\s+$/g,
        i = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        a = /^0o[0-7]+$/i,
        s = "[\\ud800-\\udfff]",
        u = "[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",
        l = "\\ud83c[\\udffb-\\udfff]",
        f = "[^\\ud800-\\udfff]",
        c = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        h = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        d = "(?:" + u + "|" + l + ")" + "?",
        p =
          "[\\ufe0e\\ufe0f]?" +
          d +
          ("(?:\\u200d(?:" +
            [f, c, h].join("|") +
            ")[\\ufe0e\\ufe0f]?" +
            d +
            ")*"),
        b = "(?:" + [f + u + "?", u, c, h, s].join("|") + ")",
        g = RegExp(l + "(?=" + l + ")|" + b + p, "g"),
        y = RegExp(
          "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"
        ),
        _ = parseInt,
        v = "object" == typeof t && t && t.Object === Object && t,
        m = "object" == typeof self && self && self.Object === Object && self,
        w = v || m || Function("return this")(),
        S =
          ((n = "length"),
          function (e) {
            return null == e ? void 0 : e[n];
          });
      function E(e) {
        return y.test(e);
      }
      function R(e) {
        return E(e)
          ? (function (e) {
              var t = (g.lastIndex = 0);
              for (; g.test(e); ) t++;
              return t;
            })(e)
          : S(e);
      }
      function k(e) {
        return E(e)
          ? (function (e) {
              return e.match(g) || [];
            })(e)
          : (function (e) {
              return e.split("");
            })(e);
      }
      var x = Object.prototype.toString,
        M = w.Symbol,
        T = Math.ceil,
        A = Math.floor,
        L = M ? M.prototype : void 0,
        O = L ? L.toString : void 0;
      function P(e, t) {
        var n = "";
        if (!e || t < 1 || t > 9007199254740991) return n;
        do {
          t % 2 && (n += e), (t = A(t / 2)) && (e += e);
        } while (t);
        return n;
      }
      function j(e) {
        if ("string" == typeof e) return e;
        if (I(e)) return O ? O.call(e) : "";
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
      }
      function C(e, t, n) {
        var r = e.length;
        return (
          (n = void 0 === n ? r : n),
          !t && n >= r
            ? e
            : (function (e, t, n) {
                var r = -1,
                  i = e.length;
                t < 0 && (t = -t > i ? 0 : i + t),
                  (n = n > i ? i : n) < 0 && (n += i),
                  (i = t > n ? 0 : (n - t) >>> 0),
                  (t >>>= 0);
                for (var o = Array(i); ++r < i; ) o[r] = e[r + t];
                return o;
              })(e, t, n)
        );
      }
      function N(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function I(e) {
        return (
          "symbol" == typeof e ||
          ((function (e) {
            return !!e && "object" == typeof e;
          })(e) &&
            "[object Symbol]" == x.call(e))
        );
      }
      function D(e) {
        return e
          ? (e = (function (e) {
              if ("number" == typeof e) return e;
              if (I(e)) return NaN;
              if (N(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = N(t) ? t + "" : t;
              }
              if ("string" != typeof e) return 0 === e ? e : +e;
              e = e.replace(r, "");
              var n = o.test(e);
              return n || a.test(e)
                ? _(e.slice(2), n ? 2 : 8)
                : i.test(e)
                ? NaN
                : +e;
            })(e)) ===
              1 / 0 || e === -1 / 0
            ? 17976931348623157e292 * (e < 0 ? -1 : 1)
            : e == e
            ? e
            : 0
          : 0 === e
          ? e
          : 0;
      }
      e.exports = function (e, t, n) {
        var r;
        e = null == (r = e) ? "" : j(r);
        var i = (t = (function (e) {
          var t = D(e),
            n = t % 1;
          return t == t ? (n ? t - n : t) : 0;
        })(t))
          ? R(e)
          : 0;
        return t && i < t
          ? e +
              (function (e, t) {
                var n = (t = void 0 === t ? " " : j(t)).length;
                if (n < 2) return n ? P(t, e) : t;
                var r = P(t, T(e / R(t)));
                return E(t) ? C(k(r), 0, e).join("") : r.slice(0, e);
              })(t - i, n)
          : e;
      };
    }).call(this, n(2));
  },
  function (e, t, n) {
    "use strict";
    var r = n(65),
      i = /^-?[\d.]+$/,
      o = /^(\$[\d+])=(.+)/;
    e.exports = function (e, t) {
      if ("0" === t[0]) return { type: "comment" };
      if (o.test(t)) {
        var n = t.match(o),
          a = n[1],
          s = n[2],
          u = r(e, s);
        return {
          type: "variable",
          set: function (e) {
            return (e[a] = u(e)), e;
          },
        };
      }
      var l = t.split(",").map(function (t) {
          return i.test(t) ? Number(t) : r(e, t);
        }),
        f = l[0],
        c = l[1];
      return 1 === f
        ? {
            type: "circle",
            exp: c,
            dia: l[2],
            cx: l[3],
            cy: l[4],
            rot: l[5] || 0,
          }
        : (2 === f &&
            e._warn(
              "macro aperture vector primitives with code 2 are deprecated"
            ),
          2 === f || 20 === f
            ? {
                type: "vect",
                exp: c,
                width: l[2],
                x1: l[3],
                y1: l[4],
                x2: l[5],
                y2: l[6],
                rot: l[7],
              }
            : 21 === f
            ? {
                type: "rect",
                exp: c,
                width: l[2],
                height: l[3],
                cx: l[4],
                cy: l[5],
                rot: l[6],
              }
            : 22 === f
            ? (e._warn(
                "macro aperture lower-left rectangle primitives are deprecated"
              ),
              {
                type: "rectLL",
                exp: c,
                width: l[2],
                height: l[3],
                x: l[4],
                y: l[5],
                rot: l[6],
              })
            : 4 === f
            ? {
                type: "outline",
                exp: c,
                points: l.slice(3, -1),
                rot: l[l.length - 1],
              }
            : 5 === f
            ? {
                type: "poly",
                exp: c,
                vertices: l[2],
                cx: l[3],
                cy: l[4],
                dia: l[5],
                rot: l[6],
              }
            : 6 === f
            ? {
                type: "moire",
                exp: 1,
                cx: l[1],
                cy: l[2],
                dia: l[3],
                ringThx: l[4],
                ringGap: l[5],
                maxRings: l[6],
                crossThx: l[7],
                crossLen: l[8],
                rot: l[9],
              }
            : 7 === f
            ? {
                type: "thermal",
                exp: 1,
                cx: l[1],
                cy: l[2],
                outerDia: l[3],
                innerDia: l[4],
                gap: l[5],
                rot: l[6],
              }
            : void e._warn(
                f + " is an unrecognized primitive for a macro aperture"
              ));
    };
  },
  function (e, t, n) {
    "use strict";
    var r = /[$\d.]+/,
      i = new RegExp([/[+\-/xX()]/.source, r.source].join("|"), "g");
    e.exports = function (e, t) {
      var n,
        o = t.match(i),
        a = function () {
          var e,
            t = o.shift();
          return (
            r.test(t) ? (e = { type: "n", val: t }) : ((e = n()), o.shift()), e
          );
        },
        s = function () {
          var t = a(),
            n = o[0];
          for (
            "X" === n &&
            (e._warn("multiplication in macros should use 'x', not 'X'"),
            (n = "x"));
            "x" === n || "/" === n;

          ) {
            o.shift(), (t = { type: n, left: t, right: a() }), (n = o[0]);
          }
          return t;
        },
        u = (n = function () {
          for (var e = s(), t = o[0]; "+" === t || "-" === t; ) {
            o.shift(), (e = { type: t, left: e, right: s() }), (t = o[0]);
          }
          return e;
        })(),
        l = function (e, t) {
          var n,
            r = e.type;
          return "n" === r
            ? "$" === (n = e.val)[0]
              ? Number(t[n])
              : Number(n)
            : "+" === r
            ? l(e.left, t) + l(e.right, t)
            : "-" === r
            ? l(e.left, t) - l(e.right, t)
            : "x" === r
            ? l(e.left, t) * l(e.right, t)
            : l(e.left, t) / l(e.right, t);
        };
      return function (e) {
        return l(u, e);
      };
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(12),
      i = n(26),
      o = n(28),
      a = n(16),
      s = n(27),
      u = /;FILE_FORMAT=(\d):(\d)/,
      l = /;TYPE=(PLATED|NON_PLATED)/,
      f =
        /;FORMAT={(.):(.)\/ (absolute|.+)? \/ (metric|inch) \/.+(trailing|leading|decimal|keep)/,
      c = /^(INCH|METRIC|M71|M72)/,
      h = /,([TL])Z/,
      d = /,(0{1,8})\.(0{1,8})/,
      p = /T0*(\d+)[\S]*C([\d.]+)/,
      b = /T0*(\d+)(?![\S]*C)/,
      g = /((?:[XYIJA][+-]?[\d.]+){1,4})(?:G85((?:[XY][+-]?[\d.]+){1,2}))?/,
      y = /^G0([01235])/,
      _ = function (e, t, n) {
        if (p.test(t)) {
          var r = t.match(p),
            u = r[1],
            l = { shape: "circle", params: [a(r[2])], hole: [] };
          return e._push(i.tool(u, l, n));
        }
        if (b.test(t)) {
          var f = t.match(b)[1];
          e._push(i.set("tool", f, n));
        }
        return g.test(t)
          ? (e.format.places ||
              ((e.format.places = [2, 4]),
              e._warn("places format missing; assuming [2, 4]")),
            e.format.zero ||
              ((e.format.zero = "T"),
              e._warn(
                "zero suppression missing; assuming trailing suppression"
              )),
            (function (e, t, n) {
              var r = t.match(g),
                a = s.parse(r[1], e.format);
              if (r[2])
                return (
                  e._push(i.op("move", a, n)),
                  e._push(i.set("mode", "i", n)),
                  (a = s.parse(r[2], e.format)),
                  e._push(i.op("int", a, n))
                );
              switch (
                (y.test(t) && (e._drillMode = t.match(y)[1]), e._drillMode)
              ) {
                case o.DRILL:
                  return e._push(i.op("flash", a, n));
                case o.MOVE:
                  return e._push(i.op("move", a, n));
                case o.LINEAR:
                  return (
                    e._push(i.set("mode", "i", n)), e._push(i.op("int", a, n))
                  );
                case o.CW_ARC:
                  return (
                    e._push(i.set("mode", "cw", n)), e._push(i.op("int", a, n))
                  );
                case o.CCW_ARC:
                  return (
                    e._push(i.set("mode", "ccw", n)), e._push(i.op("int", a, n))
                  );
              }
            })(e, t, n))
          : "M00" === t || "M30" === t
          ? e._push(i.done(n))
          : "G90" === t
          ? e._push(i.set("nota", "A", n))
          : "G91" === t
          ? e._push(i.set("nota", "I", n))
          : c.test(t)
          ? (function (e, t, n) {
              var r = t.match(c),
                o = t.match(h),
                a = t.match(d),
                s = "METRIC" === r[1] || "M71" === r[1] ? "mm" : "in",
                u = o && o[1];
              null == e.format.zero &&
                u &&
                (e.format.zero = "T" === u ? "L" : "T"),
                null == e.format.places &&
                  (e.format.places = a
                    ? [a[1].length, a[2].length]
                    : "in" === s
                    ? [2, 4]
                    : [3, 3]),
                e._push(i.set("units", s, n));
            })(e, t, n)
          : void 0;
      },
      v = function (e) {
        e._drillStash.forEach(function (t) {
          _(e, t.block, t.line);
        }),
          (e._drillStash = []);
      };
    e.exports = {
      parse: function (e, t) {
        if (";" === t[0]) {
          var n = (function (e, t, n) {
            var o = {};
            if (f.test(t)) {
              var a = t.match(f),
                s = Number(a[1]),
                c = Number(a[2]),
                h = a[3],
                d = a[4],
                p = a[5];
              r(s) && r(c) && (o.places = [s, c]),
                "absolute" === h
                  ? e._push(i.set("backupNota", "A", n))
                  : e._push(i.set("backupNota", "I", n)),
                "metric" === d
                  ? e._push(i.set("backupUnits", "mm", n))
                  : e._push(i.set("backupUnits", "in", n)),
                (o.zero =
                  "leading" === p || "keep" === p
                    ? "L"
                    : "trailing" === p
                    ? "T"
                    : "D");
            } else if (u.test(t)) {
              var b = t.match(u);
              o.places = [Number(b[1]), Number(b[2])];
            } else if (l.test(t)) {
              var g = "PLATED" === t.match(l)[1] ? "pth" : "npth";
              e._push(i.set("holePlating", g, n));
            }
            return o;
          })(e, t, e.line);
          Object.keys(n).forEach(function (t) {
            e.format[t] || (e.format[t] = n[t]);
          });
        } else
          e.format.zero
            ? _(e, t, e.line)
            : (e._drillStash.push({ line: e.line, block: t }),
              g.test(t) &&
                ((e.format.zero = s.detectZero(t)),
                e.format.zero &&
                  e._warn(
                    "zero suppression missing; detected " +
                      ("L" === e.format.zero ? "leading" : "trailing") +
                      " suppression"
                  )),
              (e.format.zero || h.test(t) || e._drillStash.length >= 1e3) &&
                v(e));
      },
      flush: v,
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      return { message: e, line: t };
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(69),
      i = function (e) {
        if ("A" === e || "I" === e) return e;
        throw new Error('notation must be "in" or "mm"');
      },
      o = function (e) {
        if ("in" === e || "mm" === e) return e;
        throw new Error('units must be "in" or "mm"');
      };
    e.exports = function (e) {
      var t = (e = e || {}).units ? o(e.units) : null,
        n = e.backupUnits ? o(e.backupUnits) : null,
        a = e.nota ? i(e.nota) : null,
        s = e.backupNota ? i(e.backupNota) : null;
      return new r(t, n, a, s, e.optimizePaths, e.plotAsOutline);
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(70).Transform,
      i = n(1),
      o = n(78),
      a = n(80),
      s = n(81),
      u = n(83),
      l = n(18),
      f = function (e, t, n, i, a, s) {
        r.call(this, { readableObjectMode: !0, writableObjectMode: !0 }),
          (this.format = {
            units: e,
            backupUnits: t || "in",
            nota: n,
            backupNota: i || "A",
          }),
          (this._formatLock = {
            units: null != e,
            backupUnits: null != t,
            nota: null != n,
            backupNota: null != i,
          }),
          (this._plotAsOutline = !0 === s ? 11e-5 : s),
          "in" === (e || this.format.backupUnits) &&
            (this._plotAsOutline = this._plotAsOutline / 25.4),
          (this._optimizePaths = a || s),
          (this._line = 0),
          (this._done = !1),
          (this._tool = null),
          (this._outTool = null),
          (this._tools = {}),
          (this._macros = {}),
          (this._pos = [0, 0]),
          (this._box = l.new()),
          (this._mode = null),
          (this._arc = null),
          (this._region = !1),
          (this._path = new o(this._optimizePaths, this._plotAsOutline)),
          (this._epsilon = null),
          (this._lastOp = null),
          (this._stepRep = []);
      };
    i(f, r),
      (f.prototype._finishPath = function (e) {
        var t = this._path.traverse();
        if (
          ((this._path = new o(!e && this._optimizePaths, this._plotAsOutline)),
          t.length)
        ) {
          var n = this._plotAsOutline ? this._outTool : this._tool;
          this._region || 1 !== n.trace.length
            ? this.push({ type: "fill", path: t })
            : this.push({ type: "stroke", width: n.trace[0], path: t });
        }
      }),
      (f.prototype._warn = function (e) {
        this.emit("warning", a(e, this._line));
      }),
      (f.prototype._checkFormat = function () {
        this.format.units ||
          ((this.format.units = this.format.backupUnits),
          this._warn(
            "units not set; using backup units: " + this.format.units
          )),
          this.format.nota ||
            ((this.format.nota = this.format.backupNota),
            this._warn(
              "notation not set; using backup notation: " + this.format.nota
            ));
      }),
      (f.prototype._updateBox = function (e) {
        var t = this._stepRep.length;
        if (t) {
          var n = l.repeat(e, this._stepRep[t - 1]);
          this._box = l.add(this._box, n);
        } else this._box = l.add(this._box, e);
      }),
      (f.prototype._transform = function (e, t, n) {
        var r,
          i = e.type;
        if (((this._line = e.line), this._done))
          return (
            this._warn("ignoring extra command recieved after done command"),
            n()
          );
        if ("op" === i) {
          this._checkFormat();
          var o = e.op,
            a = e.coord;
          if ("I" === this.nota) {
            var l = this;
            a = Object.keys(a).reduce(function (e, t) {
              var n = a[t];
              return (
                (e[t] =
                  "x" === t ? l._pos[0] + n : "y" === t ? l._pos[1] + n : n),
                e
              );
            }, {});
          }
          "last" === o &&
            (this._warn("modal operation commands are deprecated"),
            (o = this._lastOp)),
            "int" === o &&
              (null == this._mode &&
                (this._warn("no interpolation mode specified; assuming linear"),
                (this._mode = "i")),
              null != this._arc ||
                "cw" !== this._mode.slice(-2) ||
                a.a ||
                (this._warn(
                  "quadrant mode unspecified; assuming single quadrant"
                ),
                (this._arc = "s"))),
            this._plotAsOutline && (this._outTool = this._tool);
          var f = u(
            o,
            a,
            this._pos,
            this._tool,
            this._mode,
            this._arc,
            this._region || this._plotAsOutline,
            this._path,
            this._epsilon,
            this
          );
          (this._lastOp = o), (this._pos = f.pos), this._updateBox(f.box);
        } else if ("set" === i) {
          var c = e.prop,
            h = e.value;
          "region" === c
            ? (this._finishPath(h), (this._region = h))
            : ("units" !== (r = c) &&
                "backupUnits" !== r &&
                "nota" !== r &&
                "backupNota" !== r) ||
              this._formatLock[c]
            ? "tool" === c
              ? this._region
                ? this._warn("cannot change tool while region mode is on")
                : this._tools[h]
                ? this._outTool ||
                  (this._finishPath(), (this._tool = this._tools[h]))
                : this._warn("tool " + h + " is not defined")
              : (this["_" + c] = h)
            : ((this.format[c] = h),
              ("units" !== c && "nota" !== c) || (this._formatLock[c] = !0));
        } else if ("tool" === i) {
          var d = e.code,
            p = e.tool;
          this._tools[d] &&
            this._warn(
              "tool " + d + " is already defined; overwriting definition"
            );
          var b = s(p, this._macros),
            g = { code: d, trace: [], pad: b.shape, flashed: !1, box: b.box };
          ("circle" !== p.shape && "rect" !== p.shape) ||
            (0 === p.hole.length && (g.trace = p.params)),
            this._outTool ||
              (this._finishPath(), (this._tools[d] = g), (this._tool = g));
        } else if ("macro" === i) this._macros[e.name] = e.blocks;
        else if ("level" === i) {
          var y = e.level,
            _ = e.value;
          if ((this._finishPath(), "polarity" === y))
            this.push({
              type: "polarity",
              polarity: "C" === _ ? "clear" : "dark",
              box: this._box.slice(0),
            });
          else {
            var v = [];
            if (_.x > 1 || _.y > 1)
              for (var m = 0; m < _.x; m++)
                for (var w = 0; w < _.y; w++) v.push([m * _.i, w * _.j]);
            (this._stepRep = v),
              this.push({
                type: "repeat",
                offsets: this._stepRep.slice(0),
                box: this._box.slice(0),
              });
          }
        } else "done" === i && (this._done = !0);
        return n();
      }),
      (f.prototype._flush = function (e) {
        this._finishPath(),
          this.push({ type: "size", box: this._box, units: this.format.units }),
          e();
      }),
      (e.exports = f);
  },
  function (e, t, n) {
    ((t = e.exports = n(29)).Stream = t),
      (t.Readable = t),
      (t.Writable = n(33)),
      (t.Duplex = n(9)),
      (t.Transform = n(34)),
      (t.PassThrough = n(76)),
      (t.finished = n(17)),
      (t.pipeline = n(77));
  },
  function (e, t) {},
  function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var i = n(3).Buffer,
      o = n(73).inspect,
      a = (o && o.custom) || "inspect";
    e.exports = (function () {
      function e() {
        (this.head = null), (this.tail = null), (this.length = 0);
      }
      var t = e.prototype;
      return (
        (t.push = function (e) {
          var t = { data: e, next: null };
          this.length > 0 ? (this.tail.next = t) : (this.head = t),
            (this.tail = t),
            ++this.length;
        }),
        (t.unshift = function (e) {
          var t = { data: e, next: this.head };
          0 === this.length && (this.tail = t), (this.head = t), ++this.length;
        }),
        (t.shift = function () {
          if (0 !== this.length) {
            var e = this.head.data;
            return (
              1 === this.length
                ? (this.head = this.tail = null)
                : (this.head = this.head.next),
              --this.length,
              e
            );
          }
        }),
        (t.clear = function () {
          (this.head = this.tail = null), (this.length = 0);
        }),
        (t.join = function (e) {
          if (0 === this.length) return "";
          for (var t = this.head, n = "" + t.data; (t = t.next); )
            n += e + t.data;
          return n;
        }),
        (t.concat = function (e) {
          if (0 === this.length) return i.alloc(0);
          for (
            var t, n, r, o = i.allocUnsafe(e >>> 0), a = this.head, s = 0;
            a;

          )
            (t = a.data),
              (n = o),
              (r = s),
              i.prototype.copy.call(t, n, r),
              (s += a.data.length),
              (a = a.next);
          return o;
        }),
        (t.consume = function (e, t) {
          var n;
          return (
            e < this.head.data.length
              ? ((n = this.head.data.slice(0, e)),
                (this.head.data = this.head.data.slice(e)))
              : (n =
                  e === this.head.data.length
                    ? this.shift()
                    : t
                    ? this._getString(e)
                    : this._getBuffer(e)),
            n
          );
        }),
        (t.first = function () {
          return this.head.data;
        }),
        (t._getString = function (e) {
          var t = this.head,
            n = 1,
            r = t.data;
          for (e -= r.length; (t = t.next); ) {
            var i = t.data,
              o = e > i.length ? i.length : e;
            if (
              (o === i.length ? (r += i) : (r += i.slice(0, e)), 0 === (e -= o))
            ) {
              o === i.length
                ? (++n,
                  t.next
                    ? (this.head = t.next)
                    : (this.head = this.tail = null))
                : ((this.head = t), (t.data = i.slice(o)));
              break;
            }
            ++n;
          }
          return (this.length -= n), r;
        }),
        (t._getBuffer = function (e) {
          var t = i.allocUnsafe(e),
            n = this.head,
            r = 1;
          for (n.data.copy(t), e -= n.data.length; (n = n.next); ) {
            var o = n.data,
              a = e > o.length ? o.length : e;
            if ((o.copy(t, t.length - e, 0, a), 0 === (e -= a))) {
              a === o.length
                ? (++r,
                  n.next
                    ? (this.head = n.next)
                    : (this.head = this.tail = null))
                : ((this.head = n), (n.data = o.slice(a)));
              break;
            }
            ++r;
          }
          return (this.length -= r), t;
        }),
        (t[a] = function (e, t) {
          return o(
            this,
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                  (i = i.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                  )),
                  i.forEach(function (t) {
                    r(e, t, n[t]);
                  });
              }
              return e;
            })({}, t, { depth: 0, customInspect: !1 })
          );
        }),
        e
      );
    })();
  },
  function (e, t) {},
  function (e, t, n) {
    "use strict";
    (function (t) {
      var n = new Set();
      e.exports.emitExperimentalWarning = t.emitWarning
        ? function (e) {
            if (!n.has(e)) {
              var r =
                e +
                " is an experimental feature. This feature could change at any time";
              n.add(e), t.emitWarning(r, "ExperimentalWarning");
            }
          }
        : function () {};
    }).call(this, n(0));
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var r;
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var o = n(17),
        a = Symbol("lastResolve"),
        s = Symbol("lastReject"),
        u = Symbol("error"),
        l = Symbol("ended"),
        f = Symbol("lastPromise"),
        c = Symbol("handlePromise"),
        h = Symbol("stream");
      function d(e, t) {
        return { value: e, done: t };
      }
      function p(e) {
        var t = e[a];
        if (null !== t) {
          var n = e[h].read();
          null !== n &&
            ((e[f] = null), (e[a] = null), (e[s] = null), t(d(n, !1)));
        }
      }
      function b(e) {
        t.nextTick(p, e);
      }
      var g = Object.getPrototypeOf(function () {}),
        y = Object.setPrototypeOf(
          (i(
            (r = {
              get stream() {
                return this[h];
              },
              next: function () {
                var e = this,
                  n = this[u];
                if (null !== n) return Promise.reject(n);
                if (this[l]) return Promise.resolve(d(void 0, !0));
                if (this[h].destroyed)
                  return new Promise(function (n, r) {
                    t.nextTick(function () {
                      e[u] ? r(e[u]) : n(d(void 0, !0));
                    });
                  });
                var r,
                  i = this[f];
                if (i)
                  r = new Promise(
                    (function (e, t) {
                      return function (n, r) {
                        e.then(function () {
                          t[l] ? n(d(void 0, !0)) : t[c](n, r);
                        }, r);
                      };
                    })(i, this)
                  );
                else {
                  var o = this[h].read();
                  if (null !== o) return Promise.resolve(d(o, !1));
                  r = new Promise(this[c]);
                }
                return (this[f] = r), r;
              },
            }),
            Symbol.asyncIterator,
            function () {
              return this;
            }
          ),
          i(r, "return", function () {
            var e = this;
            return new Promise(function (t, n) {
              e[h].destroy(null, function (e) {
                e ? n(e) : t(d(void 0, !0));
              });
            });
          }),
          r),
          g
        );
      e.exports = function (e) {
        var t,
          n = Object.create(
            y,
            (i((t = {}), h, { value: e, writable: !0 }),
            i(t, a, { value: null, writable: !0 }),
            i(t, s, { value: null, writable: !0 }),
            i(t, u, { value: null, writable: !0 }),
            i(t, l, { value: e._readableState.endEmitted, writable: !0 }),
            i(t, c, {
              value: function (e, t) {
                var r = n[h].read();
                r
                  ? ((n[f] = null), (n[a] = null), (n[s] = null), e(d(r, !1)))
                  : ((n[a] = e), (n[s] = t));
              },
              writable: !0,
            }),
            t)
          );
        return (
          (n[f] = null),
          o(e, function (e) {
            if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
              var t = n[s];
              return (
                null !== t &&
                  ((n[f] = null), (n[a] = null), (n[s] = null), t(e)),
                void (n[u] = e)
              );
            }
            var r = n[a];
            null !== r &&
              ((n[f] = null), (n[a] = null), (n[s] = null), r(d(void 0, !0))),
              (n[l] = !0);
          }),
          e.on("readable", b.bind(null, n)),
          n
        );
      };
    }).call(this, n(0));
  },
  function (e, t, n) {
    "use strict";
    e.exports = i;
    var r = n(34);
    function i(e) {
      if (!(this instanceof i)) return new i(e);
      r.call(this, e);
    }
    n(1)(i, r),
      (i.prototype._transform = function (e, t, n) {
        n(null, e);
      });
  },
  function (e, t, n) {
    "use strict";
    var r;
    var i = n(8).codes,
      o = i.ERR_MISSING_ARGS,
      a = i.ERR_STREAM_DESTROYED;
    function s(e) {
      if (e) throw e;
    }
    function u(e, t, i, o) {
      o = (function (e) {
        var t = !1;
        return function () {
          t || ((t = !0), e.apply(void 0, arguments));
        };
      })(o);
      var s = !1;
      e.on("close", function () {
        s = !0;
      }),
        void 0 === r && (r = n(17)),
        r(e, { readable: t, writable: i }, function (e) {
          if (e) return o(e);
          (s = !0), o();
        });
      var u = !1;
      return function (t) {
        if (!s && !u)
          return (
            (u = !0),
            (function (e) {
              return e.setHeader && "function" == typeof e.abort;
            })(e)
              ? e.abort()
              : "function" == typeof e.destroy
              ? e.destroy()
              : void o(t || new a("pipe"))
          );
      };
    }
    function l(e) {
      e();
    }
    function f(e, t) {
      return e.pipe(t);
    }
    function c(e) {
      return e.length
        ? "function" != typeof e[e.length - 1]
          ? s
          : e.pop()
        : s;
    }
    e.exports = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r,
        i = c(t);
      if ((Array.isArray(t[0]) && (t = t[0]), t.length < 2))
        throw new o("streams");
      var a = t.map(function (e, n) {
        var o = n < t.length - 1;
        return u(e, o, n > 0, function (e) {
          r || (r = e), e && a.forEach(l), o || (a.forEach(l), i(r));
        });
      });
      return t.reduce(f);
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(79),
      i = function (e, t) {
        var n, r;
        for (r = 0; r < e.length; r++) if (t((n = e[r]))) return n;
      },
      o = function (e, t, n) {
        return e.reduce(
          function (e, r) {
            var i = a(t, r.position);
            return i < n && i < e.distance ? { point: r, distance: i } : e;
          },
          { point: void 0, distance: 1 / 0 }
        ).point;
      },
      a = function (e, t) {
        return Math.sqrt(Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2));
      },
      s = function (e, t) {
        return e[0] === t[0] && e[1] === t[1];
      },
      u = function (e, t) {
        (this._edges = []),
          (this._optimize = e),
          (this._fillGaps = t),
          (this.length = 0);
      };
    (u.prototype.add = function (e) {
      var t = { segment: e, start: e.start, end: e.end };
      this._edges.push(t), this.length++;
    }),
      (u.prototype._fillGapsAndOptimize = function () {
        var e = this._edges.map(function (e) {
          return e.segment;
        });
        (this._edges = []), (this.length = 0);
        for (
          var t = e.reduce(function (e, t) {
              return e.concat([
                { position: t.start, edges: [] },
                { position: t.end, edges: [] },
              ]);
            }, []),
            n = e.length,
            r = 0;
          r < n;
          r++
        ) {
          var a,
            u,
            l = e[r],
            f = this._fillGaps,
            c = 2 * r,
            h = c + 1,
            d = t.slice(0, c).concat(t.slice(h + 1));
          if (
            ((a = o(d, l.start, f)),
            (u = o(d, l.end, f)),
            a
              ? f && (l.start = a.position)
              : (a = { position: l.start, edges: [] }),
            u
              ? f && (l.end = u.position)
              : (u = { position: l.end, edges: [] }),
            !i(this._edges, function (e) {
              return (
                (t = e.segment),
                (n = l),
                "line" === t.type &&
                  ((s(t.start, n.start) && s(t.end, n.end)) ||
                    (s(t.start, n.end) && s(t.end, n.start)))
              );
              var t, n;
            }))
          ) {
            var p = this._edges.length,
              b = { segment: l, start: a, end: u };
            t[c].edges.push(p),
              (t[c].position = b.start.position),
              t[h].edges.push(p),
              (t[h].position = b.end.position),
              this._edges.push(b),
              this.length++;
          }
        }
        this._edges.forEach(function (e) {
          t.forEach(function (t) {
            s(t.position, e.start.position) &&
              (e.start.edges = e.start.edges.concat(t.edges)),
              s(t.position, e.end.position) &&
                (e.end.edges = e.end.edges.concat(t.edges));
          });
        });
      }),
      (u.prototype.traverse = function () {
        if (!this._optimize)
          return this._edges.map(function (e) {
            return e.segment;
          });
        this._fillGapsAndOptimize();
        for (
          var e,
            t,
            n,
            i,
            o,
            a,
            u = r(Array(this._edges.length), !1),
            l = [],
            f = [],
            c = { position: [] };
          f.length < this._edges.length;

        )
          for (e = u.indexOf(!1), l.push(e); l.length; )
            (e = l.pop()),
              u[e] ||
                ((u[e] = !0),
                (n = (t = this._edges[e]).end),
                s(c.position, n.position)
                  ? ((o = t.segment),
                    (a = void 0),
                    (a = { type: o.type, start: o.end, end: o.start }),
                    "arc" === o.type &&
                      ((a.center = o.center),
                      (a.radius = o.radius),
                      (a.sweep = o.sweep),
                      (a.dir = "cw" === o.dir ? "ccw" : "cw")),
                    (i = a),
                    (c = t.start))
                  : ((i = t.segment), (c = t.end)),
                c.edges.reverse().forEach(function (e) {
                  u[e] || l.push(e);
                }),
                f.push(i));
        return f;
      }),
      (e.exports = u);
  },
  function (e, t) {
    var n = /^\s+|\s+$/g,
      r = /^[-+]0x[0-9a-f]+$/i,
      i = /^0b[01]+$/i,
      o = /^0o[0-7]+$/i,
      a = /^(?:0|[1-9]\d*)$/,
      s = parseInt,
      u = Object.prototype.toString;
    function l(e, t, n, r) {
      var i = e.length;
      for (
        (n = d(n)) < 0 && (n = -n > i ? 0 : i + n),
          (r = void 0 === r || r > i ? i : d(r)) < 0 && (r += i),
          r =
            n > r
              ? 0
              : (function (e) {
                  return e
                    ? ((t = d(e)),
                      (n = 0),
                      (r = 4294967295),
                      t == t &&
                        (void 0 !== r && (t = t <= r ? t : r),
                        void 0 !== n && (t = t >= n ? t : n)),
                      t)
                    : 0;
                  var t, n, r;
                })(r);
        n < r;

      )
        e[n++] = t;
      return e;
    }
    function f(e, t, n) {
      if (!c(n)) return !1;
      var r = typeof t;
      return (
        !!("number" == r
          ? (function (e) {
              return (
                null != e &&
                (function (e) {
                  return (
                    "number" == typeof e &&
                    e > -1 &&
                    e % 1 == 0 &&
                    e <= 9007199254740991
                  );
                })(e.length) &&
                !(function (e) {
                  var t = c(e) ? u.call(e) : "";
                  return (
                    "[object Function]" == t ||
                    "[object GeneratorFunction]" == t
                  );
                })(e)
              );
            })(n) &&
            (function (e, t) {
              return (
                !!(t = null == t ? 9007199254740991 : t) &&
                ("number" == typeof e || a.test(e)) &&
                e > -1 &&
                e % 1 == 0 &&
                e < t
              );
            })(t, n.length)
          : "string" == r && t in n) &&
        (function (e, t) {
          return e === t || (e != e && t != t);
        })(n[t], e)
      );
    }
    function c(e) {
      var t = typeof e;
      return !!e && ("object" == t || "function" == t);
    }
    function h(e) {
      return e
        ? (e = (function (e) {
            if ("number" == typeof e) return e;
            if (
              (function (e) {
                return (
                  "symbol" == typeof e ||
                  ((function (e) {
                    return !!e && "object" == typeof e;
                  })(e) &&
                    "[object Symbol]" == u.call(e))
                );
              })(e)
            )
              return NaN;
            if (c(e)) {
              var t = "function" == typeof e.valueOf ? e.valueOf() : e;
              e = c(t) ? t + "" : t;
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(n, "");
            var a = i.test(e);
            return a || o.test(e)
              ? s(e.slice(2), a ? 2 : 8)
              : r.test(e)
              ? NaN
              : +e;
          })(e)) ===
            1 / 0 || e === -1 / 0
          ? 17976931348623157e292 * (e < 0 ? -1 : 1)
          : e == e
          ? e
          : 0
        : 0 === e
        ? e
        : 0;
    }
    function d(e) {
      var t = h(e),
        n = t % 1;
      return t == t ? (n ? t - n : t) : 0;
    }
    e.exports = function (e, t, n, r) {
      var i = e ? e.length : 0;
      return i
        ? (n && "number" != typeof n && f(e, t, n) && ((n = 0), (r = i)),
          l(e, t, n, r))
        : [];
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      return { message: e, line: t };
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(82),
      i = n(12),
      o = n(18),
      a = function (e) {
        var t = Math.round(1e8 * e) / 1e8;
        return 0 === t ? 0 : t;
      },
      s = function (e, t) {
        t = (t * Math.PI) / 180;
        var n = Math.sin(t),
          r = Math.cos(t),
          i = e[0],
          o = e[1];
        return [a(i * r - o * n), a(i * n + o * r)];
      },
      u = function (e, t, n, r) {
        var i = e / 2;
        if (((t = t || 0), (n = n || 0), r && (t || n))) {
          var a = s([t, n], r);
          (t = a[0]), (n = a[1]);
        }
        return {
          shape: { type: "circle", cx: t, cy: n, r: e / 2 },
          box: o.addCircle(o.new(), i, t, n),
        };
      },
      l = function (e, t, n, r, u, l) {
        if (l) {
          var f = s([e, t], l),
            c = s([n, r], l);
          (e = f[0]), (t = f[1]), (n = c[0]), (r = c[1]);
        }
        var h = (r - t) / (n - e),
          d = u / 2,
          p = d,
          b = d;
        i(h)
          ? ((p *= h / Math.sqrt(1 + Math.pow(h, 2))),
            (b *= 1 / Math.sqrt(1 + Math.pow(h, 2))))
          : (b = 0);
        var g = [];
        g.push([a(e + p), a(t - b)]),
          g.push([a(n + p), a(r - b)]),
          g.push([a(n - p), a(r + b)]),
          g.push([a(e - p), a(t + b)]);
        var y = g.reduce(function (e, t) {
          return o.addPoint(e, t);
        }, o.new());
        return { shape: { type: "poly", points: g }, box: y };
      },
      f = function (e, t, n, r, i, o) {
        (r = r || 0), (i = i || 0), (n = n || 0);
        var a = e / 2,
          s = t / 2;
        return (o = o || 0)
          ? l(r - a, i, r + a, i, t, o)
          : {
              shape: { type: "rect", cx: r, cy: i, r: n, width: e, height: t },
              box: [-a + r, -s + i, a + r, s + i],
            };
      },
      c = function (e, t, n, r, i) {
        (r = r || 0), (i = i || 0);
        for (
          var s,
            u,
            l,
            f = [],
            c = o.new(),
            h = e / 2,
            d = (n * Math.PI) / 180,
            p = (2 * Math.PI) / t,
            b = 0;
          b < t;
          b++
        )
          (s = p * b + d),
            (u = r + a(h * Math.cos(s))),
            (l = i + a(h * Math.sin(s))),
            (c = o.addPoint(c, [u, l])),
            f.push([u, l]);
        return { shape: { type: "poly", points: f }, box: c };
      },
      h = function (e, t, n, r) {
        return { type: "ring", cx: e, cy: t, r: n, width: r };
      },
      d = function (e, t) {
        var n = { shape: [], box: o.new() },
          i = 1;
        return (t = t || []).reduce(function (t, n) {
          var d;
          switch (
            ("variable" !== n.type &&
              "comment" !== n.type &&
              (n = Object.keys(n).reduce(function (t, i) {
                var o = n[i];
                return (
                  (t[i] = (function t(n) {
                    return Array.isArray(n) ? n.map(t) : r(n) ? n(e) : n;
                  })(o)),
                  t
                );
              }, {})),
            null != n.exp &&
              n.exp !== i &&
              (t.shape.push({
                type: "layer",
                polarity: 1 === n.exp ? "dark" : "clear",
                box: t.box.slice(0),
              }),
              (i = n.exp)),
            n.type)
          ) {
            case "circle":
              d = u(n.dia, n.cx, n.cy, n.rot);
              break;
            case "vect":
              d = l(n.x1, n.y1, n.x2, n.y2, n.width, n.rot);
              break;
            case "rect":
              d = f(n.width, n.height, 0, n.cx, n.cy, n.rot);
              break;
            case "rectLL":
              var p = n.height / 2,
                b = n.width / 2,
                g = n.x + b,
                y = n.y + p;
              d = f(n.width, n.height, 0, g, y, n.rot);
              break;
            case "outline":
              d = (function (e, t) {
                for (
                  var n, r = [], i = o.new(), a = 0;
                  a < e.length - 2;
                  a += 2
                )
                  (n = [e[a], e[a + 1]]),
                    t && (n = s(n, t)),
                    r.push(n),
                    (i = o.addPoint(i, n));
                return { shape: { type: "poly", points: r }, box: i };
              })(n.points, n.rot);
              break;
            case "poly":
              d = c(n.dia, n.vertices, n.rot, n.cx, n.cy);
              break;
            case "moire":
              d = (function (e, t, n, r, i, s, l, c, d) {
                for (
                  var p = e / 2,
                    b = [],
                    g = o.addCircle(o.new(), p, l, c),
                    y = t / 2,
                    _ = n + y;
                  p > t && b.length < r;

                )
                  (p -= y), b.push(h(l, c, a(p), t)), (p -= _);
                p > 0 && b.length < r && b.push(u(a(2 * p), l, c).shape);
                var v = f(s, i, 0, l, c, d),
                  m = f(i, s, 0, l, c, d);
                return (
                  b.push(v.shape),
                  b.push(m.shape),
                  (g = o.add(g, v.box)),
                  { shape: b, box: (g = o.add(g, m.box)) }
                );
              })(
                n.dia,
                n.ringThx,
                n.ringGap,
                n.maxRings,
                n.crossThx,
                n.crossLen,
                n.cx,
                n.cy,
                n.rot
              );
              break;
            case "thermal":
              d = (function (e, t, n, r, i, s) {
                var u = a((n - i) / 2),
                  l = a((n + i) / 4),
                  c = a((n - r) / 2),
                  d = a((n - c) / 2),
                  p = o.addCircle(o.new(), n / 2, e, t);
                return {
                  shape: {
                    type: "clip",
                    shape: [
                      f(u, u, 0, e + l, t + l, s).shape,
                      f(u, u, 0, e - l, t + l, s).shape,
                      f(u, u, 0, e - l, t - l, s).shape,
                      f(u, u, 0, e + l, t - l, s).shape,
                    ],
                    clip: h(e, t, d, c),
                  },
                  box: p,
                };
              })(n.cx, n.cy, n.outerDia, n.innerDia, n.gap, n.rot);
              break;
            case "variable":
              return (e = n.set(e)), t;
            default:
              return t;
          }
          return (
            (t.shape = t.shape.concat(d.shape)),
            1 === i && (t.box = o.add(t.box, d.box)),
            t
          );
        }, n);
      };
    e.exports = function (e, t) {
      var n,
        r,
        i = [],
        a = o.new(),
        s = e.shape,
        l = e.params;
      if ("circle" === s) r = u(l[0]);
      else if ("rect" === s) r = f(l[0], l[1]);
      else if ("obround" === s) r = f(l[0], l[1], Math.min(l[0], l[1]) / 2);
      else {
        if ("poly" !== s) {
          var h = l.reduce(function (e, t, n) {
            return (e["$" + (n + 1)] = t), e;
          }, {});
          return d(h, t[s]);
        }
        r = c(l[0], l[1], l[2]);
      }
      return (
        i.push(r.shape),
        (a = o.add(a, r.box)),
        e.hole.length &&
          ((n =
            1 === e.hole.length
              ? u(e.hole[0]).shape
              : f(e.hole[0], e.hole[1]).shape),
          i.push({ type: "layer", polarity: "clear", box: a }, n)),
        { shape: i, box: a }
      );
    };
  },
  function (e, t, n) {
    (function (t) {
      var n = "object" == typeof t && t && t.Object === Object && t,
        r = "object" == typeof self && self && self.Object === Object && self,
        i = n || r || Function("return this")(),
        o = Object.prototype,
        a = o.hasOwnProperty,
        s = o.toString,
        u = i.Symbol,
        l = u ? u.toStringTag : void 0;
      function f(e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : l && l in Object(e)
          ? (function (e) {
              var t = a.call(e, l),
                n = e[l];
              try {
                e[l] = void 0;
                var r = !0;
              } catch (e) {}
              var i = s.call(e);
              r && (t ? (e[l] = n) : delete e[l]);
              return i;
            })(e)
          : (function (e) {
              return s.call(e);
            })(e);
      }
      e.exports = function (e) {
        if (
          !(function (e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t);
          })(e)
        )
          return !1;
        var t = f(e);
        return (
          "[object Function]" == t ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      };
    }).call(this, n(2));
  },
  function (e, t, n) {
    "use strict";
    var r = n(18),
      i = Math.PI / 2,
      o = Math.PI,
      a = 2 * Math.PI,
      s = (3 * Math.PI) / 2,
      u = function (e, t) {
        return e >= t ? e : 0;
      },
      l = function (e, t, n, o, l, f, c, h, d, p) {
        var b,
          g = n[2] || Math.sqrt(Math.pow(n[0], 2) + Math.pow(n[1], 2)),
          y = [],
          _ = [],
          v = [];
        n[0] && "s" === f
          ? _.push(e[0] + n[0], e[0] - n[0])
          : _.push(e[0] + n[0]),
          n[1] && "s" === f
            ? v.push(e[1] + n[1], e[1] - n[1])
            : v.push(e[1] + n[1]);
        for (var m = 0; m < _.length; m++)
          for (var w = 0; w < v.length; w++) y.push([_[m], v[w]]);
        n[2]
          ? ((f = "m"),
            (b = (function (e, t, n, r, i) {
              var o = "ccw" === n ? 1 : -1,
                a = (e[0] + t[0]) / 2,
                s = (e[1] + t[1]) / 2,
                l = t[0] - e[1],
                f = t[1] - e[1],
                c = Math.sqrt(Math.pow(l, 2) + Math.pow(f, 2)),
                h = c / 2,
                d = Math.sqrt(Math.pow(i, 2) - Math.pow(h, 2)),
                p = (o * l * d) / c;
              return [[u(a + (-o * f * d) / c, r), u(s + p, r)]];
            })(e, t, l, h, n[2])))
          : (b =
              "s" === f
                ? y.filter(function (n) {
                    var r = Math.sqrt(
                        Math.pow(n[0] - e[0], 2) + Math.pow(n[1] - e[1], 2)
                      ),
                      i = Math.sqrt(
                        Math.pow(n[0] - t[0], 2) + Math.pow(n[1] - t[1], 2)
                      );
                    return Math.abs(r - g) <= h && Math.abs(i - g) <= h;
                  })
                : y);
        var S = (function (e, t, n, r, o) {
          for (var s, u, l, f, c; null == c && o.length > 0; )
            (f = o.pop()),
              (s = Math.atan2(e[1] - f[1], e[0] - f[0])),
              (u = Math.atan2(t[1] - f[1], t[0] - f[0])),
              "cw" === n ? (s = s >= u ? s : s + a) : (u = u >= s ? u : u + a),
              (l = Math.abs(s - u)),
              "s" === r ? l <= i && (c = f) : (c = f);
          if (null != c)
            return (
              (s = (s = s >= 0 ? s : s + a) < a ? s : s - a),
              (u = (u = u >= 0 ? u : u + a) < a ? u : u - a),
              { center: c, sweep: l, start: e.concat(s), end: t.concat(u) }
            );
        })(e, t, l, f, b);
        "m" === f && e[0] === t[0] && e[1] === t[1] && (S.sweep = a);
        var E = r.new();
        return (
          null != S
            ? (d.add({
                type: "arc",
                start: S.start,
                end: S.end,
                center: S.center,
                sweep: S.sweep,
                radius: g,
                dir: l,
              }),
              (E = (function (e, t, n, o, u) {
                var l,
                  f,
                  c = e.start,
                  h = e.end,
                  d = e.center,
                  p = e.sweep;
                "cw" === u
                  ? ((l = h[2]), (f = c[2]))
                  : ((l = c[2]), (f = h[2]));
                var b = [c, h];
                return (
                  (l > f || p === a) && b.push([d[0] + t, d[1]]),
                  ((l = l >= i ? l - i : l + s) >
                    (f = f >= i ? f - i : f + s) ||
                    p === a) &&
                    b.push([d[0], d[1] + t]),
                  ((l = l >= i ? l - i : l + s) >
                    (f = f >= i ? f - i : f + s) ||
                    p === a) &&
                    b.push([d[0] - t, d[1]]),
                  ((l = l >= i ? l - i : l + s) >
                    (f = f >= i ? f - i : f + s) ||
                    p === a) &&
                    b.push([d[0], d[1] - t]),
                  b.reduce(function (e, t) {
                    if (!n) {
                      var i = r.translate(o.box, t);
                      return r.add(e, i);
                    }
                    return r.addPoint(e, t);
                  }, r.new())
                );
              })(S, g, c, o, l)))
            : p._warn("skipping impossible arc"),
          E
        );
      },
      f = function (e, t, n, a, s, u, f, c, h, d) {
        var p = f || (a && a.trace.length > 0),
          b = f || (a && 1 === a.trace.length),
          g = a ? a.code : "[NO TOOL SET]";
        return p
          ? "i" === s
            ? f || 1 === a.trace.length
              ? (function (e, t, n, i, o) {
                  if ((o.add({ type: "line", start: e, end: t }), !i)) {
                    var a = r.translate(n.box, e),
                      s = r.translate(n.box, t);
                    return r.add(a, s);
                  }
                  var u = r.new();
                  return (u = r.addPoint(u, e)), (u = r.addPoint(u, t));
                })(e, t, a, f, h)
              : (function (e, t, n, a, s) {
                  var u = n.trace[0] / 2,
                    l = n.trace[1] / 2,
                    f = Math.atan2(t[1] - e[1], t[0] - e[0]),
                    c = e[0] - u,
                    h = e[0] + u,
                    d = e[1] - l,
                    p = e[1] + l,
                    b = t[0] - u,
                    g = t[0] + u,
                    y = t[1] - l,
                    _ = t[1] + l,
                    v = [];
                  return (
                    e[0] === t[0] && e[1] === t[1]
                      ? v.push([c, d], [h, d], [h, p], [c, p])
                      : f >= 0 && f < i
                      ? v.push([c, d], [h, d], [g, y], [g, _], [b, _], [c, p])
                      : f >= i && f <= o
                      ? v.push([h, d], [h, p], [g, _], [b, _], [b, y], [c, d])
                      : f >= -o && f < -i
                      ? v.push([h, p], [c, p], [b, _], [b, y], [g, y], [h, d])
                      : v.push([c, p], [c, d], [b, y], [g, y], [g, _], [h, p]),
                    v.forEach(function (e, t) {
                      var n = t < v.length - 1 ? t + 1 : 0;
                      a.add({ type: "line", start: e, end: v[n] });
                    }),
                    s._finishPath(),
                    r.add(r.translate(n.box, e), r.translate(n.box, t))
                  );
                })(e, t, a, h, d)
            : b
            ? l(e, t, n, a, s, u, f, c, h, d)
            : (d._warn(
                "cannot draw arc with non-circular tool " +
                  g +
                  "; ignoring interpolate"
              ),
              r.new())
          : (d._warn("tool " + g + " is not strokable; ignoring interpolate"),
            r.new());
      };
    e.exports = function (e, t, n, i, o, a, s, u, l, c) {
      var h,
        d = [null != t.x ? t.x : n[0], null != t.y ? t.y : n[1]],
        p = [null != t.i ? t.i : 0, null != t.j ? t.j : 0, t.a];
      switch (e) {
        case "flash":
          h = (function (e, t, n, i) {
            return n
              ? (i._warn("flash in region ignored"), r.new())
              : t
              ? (t.flashed ||
                  ((t.flashed = !0),
                  i.push({ type: "shape", tool: t.code, shape: t.pad })),
                i.push({ type: "pad", tool: t.code, x: e[0], y: e[1] }),
                r.translate(t.box, e))
              : (i._warn("flash with unknown tool ignored"), r.new());
          })(d, i, s, c);
          break;
        case "int":
          h = f(n, d, p, i, o, a, s, l, u, c);
          break;
        default:
          h = r.new();
      }
      return { pos: d, box: h };
    };
  },
  function (e, t, n) {
    "use strict";
    var r = /["'&<>]/;
    e.exports = function (e) {
      var t,
        n = "" + e,
        i = r.exec(n);
      if (!i) return n;
      var o = "",
        a = 0,
        s = 0;
      for (a = i.index; a < n.length; a++) {
        switch (n.charCodeAt(a)) {
          case 34:
            t = "&quot;";
            break;
          case 38:
            t = "&amp;";
            break;
          case 39:
            t = "&#39;";
            break;
          case 60:
            t = "&lt;";
            break;
          case 62:
            t = "&gt;";
            break;
          default:
            continue;
        }
        s !== a && (o += n.substring(s, a)), (s = a + 1), (o += t);
      }
      return s !== a ? o + n.substring(s, a) : o;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(86).Transform,
      i = n(1),
      o = n(12),
      a = n(94),
      s = n(95),
      u = n(96),
      l = n(13),
      f = n(42),
      c = l.shift,
      h = l.maskLayer,
      d = l.createMask,
      p = function (e, t, n, i) {
        r.call(this, { writableObjectMode: !0, readableObjectMode: i }),
          (this.id = e),
          (this.attributes = t),
          (this.defs = []),
          (this.layer = []),
          (this.viewBox = [0, 0, 0, 0]),
          (this.width = 0),
          (this.height = 0),
          (this.units = ""),
          (this._maskId = ""),
          (this._maskBox = []),
          (this._mask = []),
          (this._blockMode = !1),
          (this._blockBox = []),
          (this._block = []),
          (this._blockCount = 0),
          (this._blockLayerCount = 0),
          (this._offsets = []),
          (this._clearCount = 0),
          (this._lastLayer = 0),
          (this._blockCount = 0),
          (this._blockCount = 0),
          (this._element = n);
      };
    i(p, r),
      (p.prototype._transform = function (e, t, n) {
        switch (e.type) {
          case "shape":
            this.defs = this.defs.concat(
              a(this.id, e.tool, e.shape, this._element)
            );
            break;
          case "pad":
            this._draw(s(this.id, e.tool, e.x, e.y, this._element));
            break;
          case "fill":
            this._draw(u(e.path, null, this._element));
            break;
          case "stroke":
            this._draw(u(e.path, e.width, this._element));
            break;
          case "polarity":
            this._handleNewPolarity(e.polarity, e.box);
            break;
          case "repeat":
            this._handleNewRepeat(e.offsets, e.box);
            break;
          case "size":
            this._handleSize(e.box, e.units);
        }
        n();
      }),
      (p.prototype._flush = function (e) {
        this._handleNewRepeat([]),
          this.push(f(this, this.attributes, this._element)),
          e();
      }),
      (p.prototype._finishBlockLayer = function () {
        if (this._block.length) {
          this._blockLayerCount++;
          var e =
            this.id +
            "_block-" +
            this._blockCount +
            "-" +
            this._blockLayerCount;
          this.defs.push(this._element("g", { id: e }, this._block)),
            (this._block = []);
        }
      }),
      (p.prototype._finishClearLayer = function () {
        return (
          !!this._maskId &&
          (this.defs.push(
            d(this._maskId, this._maskBox, this._mask, this._element)
          ),
          (this._maskId = ""),
          (this._maskBox = []),
          (this._mask = []),
          !0)
        );
      }),
      (p.prototype._handleNewPolarity = function (e, t) {
        if (this._blockMode)
          return (
            0 !== this._blockLayerCount ||
              this._block.length ||
              (this._blockMode = "dark" === e ? 1 : 2),
            this._finishBlockLayer()
          );
        this._clearCount =
          "clear" === e ? this._clearCount + 1 : this._clearCount;
        var n = this.id + "_clear-" + this._clearCount;
        "clear" === e
          ? ((this.layer = [h(n, this.layer, this._element)]),
            (this._maskId = n),
            (this._maskBox = t.slice(0)))
          : this._finishClearLayer(t);
      }),
      (p.prototype._handleNewRepeat = function (e, t) {
        var n = 0 === e.length,
          r = this._finishClearLayer();
        this._finishBlockLayer();
        var i = this.layer,
          a = this._element,
          s = this._blockMode,
          u = this._blockLayerCount,
          l = this.id + "_block-" + this._blockCount + "-";
        if (
          (this._offsets.forEach(function (e) {
            for (var t = s; t <= u; t += 2)
              i.push(
                a("use", { "xlink:href": "#" + l + t, x: c(e[0]), y: c(e[1]) })
              );
          }),
          u > 2 - s)
        ) {
          var f = l + "clear";
          (this.layer = [h(f, i, this._element)]),
            (this._maskId = f),
            (this._maskBox = this._blockBox.slice(0)),
            (this._mask = this._offsets.reduce(function (e, t) {
              for (var n, r = 1; r <= u; r++) {
                n = 1 === s ? r % 2 == 1 : r % 2 == 0;
                var i = { "xlink:href": "#" + l + r, x: c(t[0]), y: c(t[1]) };
                n && ((i.fill = "#fff"), (i.stroke = "#fff")),
                  e.push(a("use", i));
              }
              return e;
            }, [])),
            (r = this._finishClearLayer());
        }
        (this._offsets = e),
          n
            ? (this._blockMode = 0)
            : ((this._blockMode = r ? 2 : 1),
              this._blockCount++,
              (this._blockLayerCount = 0),
              (this._blockBox = t.every(o) ? t : [0, 0, 0, 0]));
      }),
      (p.prototype._handleSize = function (e, t) {
        if (e.every(o)) {
          var n = c(e[0]),
            r = c(e[1]),
            i = c(e[2] - e[0]),
            a = c(e[3] - e[1]);
          (this.viewBox = [n, r, i, a]),
            (this.width = i / 1e3),
            (this.height = a / 1e3),
            (this.units = t);
        }
      }),
      (p.prototype._draw = function (e) {
        this._blockMode
          ? this._block.push(e)
          : this._maskId
          ? this._mask.push(e)
          : this.layer.push(e);
      }),
      (e.exports = p);
  },
  function (e, t, n) {
    ((t = e.exports = n(36)).Stream = t),
      (t.Readable = t),
      (t.Writable = n(40)),
      (t.Duplex = n(11)),
      (t.Transform = n(41)),
      (t.PassThrough = n(92)),
      (t.finished = n(19)),
      (t.pipeline = n(93));
  },
  function (e, t) {},
  function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var i = n(3).Buffer,
      o = n(89).inspect,
      a = (o && o.custom) || "inspect";
    e.exports = (function () {
      function e() {
        (this.head = null), (this.tail = null), (this.length = 0);
      }
      var t = e.prototype;
      return (
        (t.push = function (e) {
          var t = { data: e, next: null };
          this.length > 0 ? (this.tail.next = t) : (this.head = t),
            (this.tail = t),
            ++this.length;
        }),
        (t.unshift = function (e) {
          var t = { data: e, next: this.head };
          0 === this.length && (this.tail = t), (this.head = t), ++this.length;
        }),
        (t.shift = function () {
          if (0 !== this.length) {
            var e = this.head.data;
            return (
              1 === this.length
                ? (this.head = this.tail = null)
                : (this.head = this.head.next),
              --this.length,
              e
            );
          }
        }),
        (t.clear = function () {
          (this.head = this.tail = null), (this.length = 0);
        }),
        (t.join = function (e) {
          if (0 === this.length) return "";
          for (var t = this.head, n = "" + t.data; (t = t.next); )
            n += e + t.data;
          return n;
        }),
        (t.concat = function (e) {
          if (0 === this.length) return i.alloc(0);
          for (
            var t, n, r, o = i.allocUnsafe(e >>> 0), a = this.head, s = 0;
            a;

          )
            (t = a.data),
              (n = o),
              (r = s),
              i.prototype.copy.call(t, n, r),
              (s += a.data.length),
              (a = a.next);
          return o;
        }),
        (t.consume = function (e, t) {
          var n;
          return (
            e < this.head.data.length
              ? ((n = this.head.data.slice(0, e)),
                (this.head.data = this.head.data.slice(e)))
              : (n =
                  e === this.head.data.length
                    ? this.shift()
                    : t
                    ? this._getString(e)
                    : this._getBuffer(e)),
            n
          );
        }),
        (t.first = function () {
          return this.head.data;
        }),
        (t._getString = function (e) {
          var t = this.head,
            n = 1,
            r = t.data;
          for (e -= r.length; (t = t.next); ) {
            var i = t.data,
              o = e > i.length ? i.length : e;
            if (
              (o === i.length ? (r += i) : (r += i.slice(0, e)), 0 === (e -= o))
            ) {
              o === i.length
                ? (++n,
                  t.next
                    ? (this.head = t.next)
                    : (this.head = this.tail = null))
                : ((this.head = t), (t.data = i.slice(o)));
              break;
            }
            ++n;
          }
          return (this.length -= n), r;
        }),
        (t._getBuffer = function (e) {
          var t = i.allocUnsafe(e),
            n = this.head,
            r = 1;
          for (n.data.copy(t), e -= n.data.length; (n = n.next); ) {
            var o = n.data,
              a = e > o.length ? o.length : e;
            if ((o.copy(t, t.length - e, 0, a), 0 === (e -= a))) {
              a === o.length
                ? (++r,
                  n.next
                    ? (this.head = n.next)
                    : (this.head = this.tail = null))
                : ((this.head = n), (n.data = o.slice(a)));
              break;
            }
            ++r;
          }
          return (this.length -= r), t;
        }),
        (t[a] = function (e, t) {
          return o(
            this,
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                  (i = i.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                  )),
                  i.forEach(function (t) {
                    r(e, t, n[t]);
                  });
              }
              return e;
            })({}, t, { depth: 0, customInspect: !1 })
          );
        }),
        e
      );
    })();
  },
  function (e, t) {},
  function (e, t, n) {
    "use strict";
    (function (t) {
      var n = new Set();
      e.exports.emitExperimentalWarning = t.emitWarning
        ? function (e) {
            if (!n.has(e)) {
              var r =
                e +
                " is an experimental feature. This feature could change at any time";
              n.add(e), t.emitWarning(r, "ExperimentalWarning");
            }
          }
        : function () {};
    }).call(this, n(0));
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var r;
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var o = n(19),
        a = Symbol("lastResolve"),
        s = Symbol("lastReject"),
        u = Symbol("error"),
        l = Symbol("ended"),
        f = Symbol("lastPromise"),
        c = Symbol("handlePromise"),
        h = Symbol("stream");
      function d(e, t) {
        return { value: e, done: t };
      }
      function p(e) {
        var t = e[a];
        if (null !== t) {
          var n = e[h].read();
          null !== n &&
            ((e[f] = null), (e[a] = null), (e[s] = null), t(d(n, !1)));
        }
      }
      function b(e) {
        t.nextTick(p, e);
      }
      var g = Object.getPrototypeOf(function () {}),
        y = Object.setPrototypeOf(
          (i(
            (r = {
              get stream() {
                return this[h];
              },
              next: function () {
                var e = this,
                  n = this[u];
                if (null !== n) return Promise.reject(n);
                if (this[l]) return Promise.resolve(d(void 0, !0));
                if (this[h].destroyed)
                  return new Promise(function (n, r) {
                    t.nextTick(function () {
                      e[u] ? r(e[u]) : n(d(void 0, !0));
                    });
                  });
                var r,
                  i = this[f];
                if (i)
                  r = new Promise(
                    (function (e, t) {
                      return function (n, r) {
                        e.then(function () {
                          t[l] ? n(d(void 0, !0)) : t[c](n, r);
                        }, r);
                      };
                    })(i, this)
                  );
                else {
                  var o = this[h].read();
                  if (null !== o) return Promise.resolve(d(o, !1));
                  r = new Promise(this[c]);
                }
                return (this[f] = r), r;
              },
            }),
            Symbol.asyncIterator,
            function () {
              return this;
            }
          ),
          i(r, "return", function () {
            var e = this;
            return new Promise(function (t, n) {
              e[h].destroy(null, function (e) {
                e ? n(e) : t(d(void 0, !0));
              });
            });
          }),
          r),
          g
        );
      e.exports = function (e) {
        var t,
          n = Object.create(
            y,
            (i((t = {}), h, { value: e, writable: !0 }),
            i(t, a, { value: null, writable: !0 }),
            i(t, s, { value: null, writable: !0 }),
            i(t, u, { value: null, writable: !0 }),
            i(t, l, { value: e._readableState.endEmitted, writable: !0 }),
            i(t, c, {
              value: function (e, t) {
                var r = n[h].read();
                r
                  ? ((n[f] = null), (n[a] = null), (n[s] = null), e(d(r, !1)))
                  : ((n[a] = e), (n[s] = t));
              },
              writable: !0,
            }),
            t)
          );
        return (
          (n[f] = null),
          o(e, function (e) {
            if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
              var t = n[s];
              return (
                null !== t &&
                  ((n[f] = null), (n[a] = null), (n[s] = null), t(e)),
                void (n[u] = e)
              );
            }
            var r = n[a];
            null !== r &&
              ((n[f] = null), (n[a] = null), (n[s] = null), r(d(void 0, !0))),
              (n[l] = !0);
          }),
          e.on("readable", b.bind(null, n)),
          n
        );
      };
    }).call(this, n(0));
  },
  function (e, t, n) {
    "use strict";
    e.exports = i;
    var r = n(41);
    function i(e) {
      if (!(this instanceof i)) return new i(e);
      r.call(this, e);
    }
    n(1)(i, r),
      (i.prototype._transform = function (e, t, n) {
        n(null, e);
      });
  },
  function (e, t, n) {
    "use strict";
    var r;
    var i = n(10).codes,
      o = i.ERR_MISSING_ARGS,
      a = i.ERR_STREAM_DESTROYED;
    function s(e) {
      if (e) throw e;
    }
    function u(e, t, i, o) {
      o = (function (e) {
        var t = !1;
        return function () {
          t || ((t = !0), e.apply(void 0, arguments));
        };
      })(o);
      var s = !1;
      e.on("close", function () {
        s = !0;
      }),
        void 0 === r && (r = n(19)),
        r(e, { readable: t, writable: i }, function (e) {
          if (e) return o(e);
          (s = !0), o();
        });
      var u = !1;
      return function (t) {
        if (!s && !u)
          return (
            (u = !0),
            (function (e) {
              return e.setHeader && "function" == typeof e.abort;
            })(e)
              ? e.abort()
              : "function" == typeof e.destroy
              ? e.destroy()
              : void o(t || new a("pipe"))
          );
      };
    }
    function l(e) {
      e();
    }
    function f(e, t) {
      return e.pipe(t);
    }
    function c(e) {
      return e.length
        ? "function" != typeof e[e.length - 1]
          ? s
          : e.pop()
        : s;
    }
    e.exports = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r,
        i = c(t);
      if ((Array.isArray(t[0]) && (t = t[0]), t.length < 2))
        throw new o("streams");
      var a = t.map(function (e, n) {
        var o = n < t.length - 1;
        return u(e, o, n > 0, function (e) {
          r || (r = e), e && a.forEach(l), o || (a.forEach(l), i(r));
        });
      });
      return t.reduce(f);
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(13),
      i = r.shift,
      o = r.createMask,
      a = r.maskLayer,
      s = function (e, t, n) {
        return { tag: e, attr: t, children: n || [] };
      },
      u = function (e, t, n, r) {
        var o = { cx: i(e), cy: i(t), r: i(n) };
        return (
          null != r && ((o["stroke-width"] = i(r)), (o.fill = "none")),
          s("circle", o)
        );
      },
      l = function (e, t, n, r, o) {
        var a = { x: i(e - r / 2), y: i(t - o / 2), width: i(r), height: i(o) };
        return n && ((a.rx = i(n)), (a.ry = i(n))), s("rect", a);
      },
      f = function (e) {
        var t = e
          .map(function (e) {
            return e.map(i).join(",");
          })
          .join(" ");
        return s("polygon", { points: t });
      };
    e.exports = function (e, t, n, r) {
      var i = e + "_pad-" + t,
        c = i + "_",
        h = n.reduce(
          function (e, t, h) {
            var d;
            switch (t.type) {
              case "circle":
                d = u(t.cx, t.cy, t.r);
                break;
              case "ring":
                d = u(t.cx, t.cy, t.r, t.width);
                break;
              case "rect":
                d = l(t.cx, t.cy, t.r, t.width, t.height);
                break;
              case "poly":
                d = f(t.points);
                break;
              case "clip":
                var p = (function (e, t, n, r, i) {
                  var o = e + "mask-" + t,
                    a = "url(#" + o + ")",
                    c = u(r.cx, r.cy, r.r, r.width),
                    h = i("mask", { id: o, stroke: "#fff" }, [
                      i(c.tag, c.attr),
                    ]),
                    d = n.map(function (e) {
                      var t =
                        "rect" === e.type
                          ? l(e.cx, e.cy, e.r, e.width, e.height)
                          : f(e.points);
                      return i(t.tag, t.attr);
                    });
                  return { mask: h, layer: s("g", { mask: a }, d) };
                })(c, h, t.shape, t.clip, r);
                e.masks.push(p.mask), (d = p.layer);
                break;
              case "layer":
                if (
                  (e.count++, (e.last = t.polarity), "clear" === t.polarity)
                ) {
                  var b = c + e.count;
                  (e.maskId = b),
                    (e.maskBox = t.box.slice(0)),
                    (e.maskChildren = []),
                    (e.layers = [a(b, e.layers, r)]);
                } else {
                  var g = o(e.maskId, e.maskBox, e.maskChildren, r);
                  e.masks.push(g);
                }
            }
            if (d) {
              1 === n.length && (d.attr.id = i);
              var y = r(d.tag, d.attr, d.children);
              "dark" === e.last ? e.layers.push(y) : e.maskChildren.push(y);
            }
            return e;
          },
          {
            count: 0,
            last: "dark",
            layers: [],
            maskId: "",
            maskBox: [],
            maskChildren: [],
            masks: [],
          }
        );
      return (
        "clear" === h.last &&
          h.masks.push(o(h.maskId, h.maskBox, h.maskChildren, r)),
        n.length > 1 && (h.layers = r("g", { id: i }, h.layers)),
        h.masks.concat(h.layers)
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(13).shift;
    e.exports = function (e, t, n, i, o) {
      return o("use", {
        "xlink:href": "#" + e + "_pad-" + t,
        x: r(n),
        y: r(i),
      });
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(13).shift,
      i = function (e, t) {
        return ("L" === e || "M" === e ? "" : "L ") + r(t[0]) + " " + r(t[1]);
      },
      o = function (e, t, n, a, s, u) {
        if (0 === n) return i(e, s);
        if (n === 2 * Math.PI) {
          var l = [2 * u[0] - s[0], 2 * u[1] - s[1]];
          return o(e, t, Math.PI, a, l, u) + " " + o("A", t, Math.PI, a, s, u);
        }
        var f = "A" === e ? "" : "A ";
        return (
          (f += (t = r(t)) + " " + t + " 0 "),
          (f += n > Math.PI ? "1 " : "0 "),
          (f += "ccw" === a ? "1 " : "0 "),
          (f += r(s[0]) + " " + r(s[1]))
        );
      },
      a = function (e, t) {
        var n,
          a,
          s = t.type,
          u = t.start,
          l = t.end;
        return (
          (n = e.last),
          (a = u),
          (n[0] !== a[0] || n[1] !== a[1]) &&
            ((e.data +=
              (e.data ? " " : "") +
              (function (e) {
                return "M " + r(e[0]) + " " + r(e[1]);
              })(u)),
            (e.lastCmd = "M")),
          (e.data += " "),
          "line" === s
            ? ((e.data += i(e.lastCmd, l)), (e.lastCmd = "L"))
            : ((e.data += o(e.lastCmd, t.radius, t.sweep, t.dir, l, t.center)),
              (e.lastCmd = "A")),
          (e.last = l),
          e
        );
      };
    e.exports = function (e, t, n) {
      var i = { d: e.reduce(a, { last: [], data: "" }).data };
      return (
        null != t && ((i.fill = "none"), (i["stroke-width"] = r(t))),
        n("path", i)
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = [
      "id",
      "attributes",
      "defs",
      "layer",
      "viewBox",
      "width",
      "height",
      "units",
    ];
    e.exports = function (e) {
      return r.reduce(function (t, n) {
        return null != e[n] && (t[n] = e[n]), t;
      }, {});
    };
  },
]);
//# sourceMappingURL=gerber-to-svg.min.js.map
