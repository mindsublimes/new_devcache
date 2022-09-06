(function (e) {
    "use strict";
    function t(t) {
      return this.each(function () {
        var n = e(this),
          s = n.data("bs.carousel"),
          o = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t),
          a = "string" == typeof t ? t : o.slide;
        s || n.data("bs.carousel", (s = new i(this, o))), "number" == typeof t ? s.to(t) : a ? s[a]() : o.interval && s.pause().cycle();
      });
    }
    var i = function (t, i) {
      (this.$element = e(t)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = i),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)),
        "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this));
    };
    (i.VERSION = "3.3.6"),
      (i.TRANSITION_DURATION = 600),
      (i.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (i.prototype.keydown = function (e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
          switch (e.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          e.preventDefault();
        }
      }),
      (i.prototype.cycle = function (t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this;
      }),
      (i.prototype.getItemIndex = function (e) {
        return (this.$items = e.parent().children(".item")), this.$items.index(e || this.$active);
      }),
      (i.prototype.getItemForDirection = function (e, t) {
        var i = this.getItemIndex(t);
        if ((("prev" == e && 0 === i) || ("next" == e && i == this.$items.length - 1)) && !this.options.wrap) return t;
        var n = (i + ("prev" == e ? -1 : 1)) % this.$items.length;
        return this.$items.eq(n);
      }),
      (i.prototype.to = function (e) {
        var t = this,
          i = this.getItemIndex((this.$active = this.$element.find(".item.active")));
        if (!(e > this.$items.length - 1 || e < 0))
          return this.sliding
            ? this.$element.one("slid.bs.carousel", function () {
                t.to(e);
              })
            : i == e
            ? this.pause().cycle()
            : this.slide(e > i ? "next" : "prev", this.$items.eq(e));
      }),
      (i.prototype.pause = function (t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), (this.interval = clearInterval(this.interval)), this;
      }),
      (i.prototype.next = function () {
        if (!this.sliding) return this.slide("next");
      }),
      (i.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev");
      }),
      (i.prototype.slide = function (t, n) {
        var s = this.$element.find(".item.active"),
          o = n || this.getItemForDirection(t, s),
          a = this.interval,
          r = "next" == t ? "left" : "right",
          l = this;
        if (o.hasClass("active")) return (this.sliding = !1);
        var d = o[0],
          u = e.Event("slide.bs.carousel", { relatedTarget: d, direction: r });
        if ((this.$element.trigger(u), !u.isDefaultPrevented())) {
          if (((this.sliding = !0), a && this.pause(), this.$indicators.length)) {
            this.$indicators.find(".active").removeClass("active");
            var c = e(this.$indicators.children()[this.getItemIndex(o)]);
            c && c.addClass("active");
          }
          var h = e.Event("slid.bs.carousel", { relatedTarget: d, direction: r });
          return (
            e.support.transition && this.$element.hasClass("slide")
              ? (o.addClass(t),
                o[0].offsetWidth,
                s.addClass(r),
                o.addClass(r),
                s
                  .one("bsTransitionEnd", function () {
                    o.removeClass([t, r].join(" ")).addClass("active"),
                      s.removeClass(["active", r].join(" ")),
                      (l.sliding = !1),
                      setTimeout(function () {
                        l.$element.trigger(h);
                      }, 0);
                  })
                  .emulateTransitionEnd(i.TRANSITION_DURATION))
              : (s.removeClass("active"), o.addClass("active"), (this.sliding = !1), this.$element.trigger(h)),
            a && this.cycle(),
            this
          );
        }
      });
    var n = e.fn.carousel;
    (e.fn.carousel = t),
      (e.fn.carousel.Constructor = i),
      (e.fn.carousel.noConflict = function () {
        return (e.fn.carousel = n), this;
      });
    var s = function (i) {
      var n,
        s = e(this),
        o = e(s.attr("data-target") || ((n = s.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")));
      if (o.hasClass("carousel")) {
        var a = e.extend({}, o.data(), s.data()),
          r = s.attr("data-slide-to");
        r && (a.interval = !1), t.call(o, a), r && o.data("bs.carousel").to(r), i.preventDefault();
      }
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s),
      e(window).on("load", function () {
        e('[data-ride="carousel"]').each(function () {
          var i = e(this);
          t.call(i, i.data());
        });
      });
  })(jQuery)