! function(c) {
    c.fn.extend({
        deleteSmoothProducts: function() {
            c(document.body).off("click", ".sp-lightbox"), c(document.body).off("click", "#sp-prev"), c(document.body).off("click", "#sp-next"), c(document.body).off("click", ".sp-large a"), c(document.body).off("click", ".sp-noff-touch .sp-zoom"), c(document.body).off("click", ".sp-tb-active a"), c(document.body).off("click", ".sp-thumbs")
        },
        smoothproducts: function() {
            function t() {
                c(".sp-selected").removeClass("sp-selected"), c(".sp-lightbox").fadeOut(function() {
                    c(this).remove()
                })
            }

            function i(s) {
                return s.match(/url\([\"\']{0,1}(.+)[\"\']{0,1}\)+/i)[1]
            }
            c(".sp-loading").hide(), c(".sp-wrap").each(function() {
                var a, n, i;
                c(this).addClass("sp-touch"), 1 < c("a", this).length ? (i = !!c("a.sp-default", this)[0], c(this).append('<div class="sp-large"></div><div class="sp-thumbs sp-tb-active"></div>'), c("a", this).each(function(s) {
                    var t = c("img", this).attr("src"),
                        e = c(this).attr("href"),
                        p = "";
                    (0 === s && !i || c(this).hasClass("sp-default")) && (p = ' class="sp-current"', a = e, n = c("img", this)[0].src), c(this).parents(".sp-wrap").find(".sp-thumbs").append('<a href="' + e + '" style="background-image:url(' + t + ')"' + p + "></a>"), c(this).remove()
                }), c(".sp-large", this).append('<a href="' + a + '" class="sp-current-big"><img src="' + n + '" alt="§ITEMTIT§" /></a>')) : (c(this).append('<div class="sp-large"></div>'), c("a", this).appendTo(c(".sp-large", this)).addClass(".sp-current-big")), c(".sp-wrap").css("display", "inline-block")
            }), c(document.body).on("click", ".sp-thumbs", function(s) {
                s.preventDefault()
            }), c(document.body).on("mouseover", function(s) {
                c(".sp-wrap").removeClass("sp-touch").addClass("sp-non-touch"), s.preventDefault()
            }), c(document.body).on("touchstart", function() {
                c(".sp-wrap").removeClass("sp-non-touch").addClass("sp-touch")
            }), c(document.body).on("click", ".sp-tb-active a", function(s) {
                s.preventDefault(), c(this).parent().find(".sp-current").removeClass(), c(this).addClass("sp-current"), c(this).parents(".sp-wrap").find(".sp-thumbs").removeClass("sp-tb-active"), c(this).parents(".sp-wrap").find(".sp-zoom").remove();
                var t = c(this).parents(".sp-wrap").find(".sp-large").height(),
                    e = c(this).parents(".sp-wrap").find(".sp-large").width();
                c(this).parents(".sp-wrap").find(".sp-large").css({
                    overflow: "hidden",
                    height: t + "px",
                    width: e + "px"
                }), c(this).addClass("sp-current").parents(".sp-wrap").find(".sp-large a").remove();
                var p = c(this).parent().find(".sp-current").attr("href"),
                    a = i(c(this).parent().find(".sp-current").css("backgroundImage"));
                c(this).parents(".sp-wrap").find(".sp-large").html('<a href="' + p + '" class="sp-current-big"><img src="' + a + '"/></a>'), c(this).parents(".sp-wrap").find(".sp-large").hide().fadeIn(250, function() {
                    var s = c(this).parents(".sp-wrap").find(".sp-large img").height();
                    c(this).parents(".sp-wrap").find(".sp-large").animate({
                        height: s
                    }, "fast", function() {
                        c(".sp-large").css({
                            height: "auto",
                            width: "auto"
                        })
                    }), c(this).parents(".sp-wrap").find(".sp-thumbs").addClass("sp-tb-active")
                })
            }), c(document.body).on("mouseenter", ".sp-non-touch .sp-large", function(s) {
                var t = c("a", this).attr("href");
                c(this).append('<div class="sp-zoom"><img src="' + t + '"/></div>'), c(this).find(".sp-zoom").fadeIn(250), s.preventDefault()
            }), c(document.body).on("mouseleave", ".sp-non-touch .sp-large", function(s) {
                c(this).find(".sp-zoom").fadeOut(250, function() {
                    c(this).remove()
                }), s.preventDefault()
            }), c(document.body).on("click", ".sp-non-touch .sp-zoom", function(s) {
                var t = c(this).html(),
                    e = c(this).parents(".sp-wrap").find(".sp-thumbs a").length,
                    p = c(this).parents(".sp-wrap").find(".sp-thumbs .sp-current").index() + 1;
                c(this).parents(".sp-wrap").addClass("sp-selected"), c("body").append("<div class='sp-lightbox' data-currenteq='" + p + "'>" + t + "</div>"), 1 < e && (c(".sp-lightbox").append("<a href='#' id='sp-prev'></a><a href='#' id='sp-next'></a>"), 1 == p ? c("#sp-prev").css("opacity", ".1") : p == e && c("#sp-next").css("opacity", ".1")), c(".sp-lightbox").fadeIn(), s.preventDefault()
            }), c(document.body).on("click", ".sp-large a", function(s) {
                var t = c(this).attr("href"),
                    e = c(this).parents(".sp-wrap").find(".sp-thumbs a").length,
                    p = c(this).parents(".sp-wrap").find(".sp-thumbs .sp-current").index() + 1;
                c(this).parents(".sp-wrap").addClass("sp-selected"), c("body").append('<div class="sp-lightbox" data-currenteq="' + p + '"><img src="' + t + '"/></div>'), 1 < e && (c(".sp-lightbox").append("<a href='#' id='sp-prev'></a><a href='#' id='sp-next'></a>"), 1 == p ? c("#sp-prev").css("opacity", ".1") : p == e && c("#sp-next").css("opacity", ".1")), c(".sp-lightbox").fadeIn(), s.preventDefault()
            }), c(document.body).on("click", "#sp-next", function(s) {
                s.stopPropagation();
                var t, e, p, a = c(".sp-lightbox").data("currenteq"),
                    n = c(".sp-selected .sp-thumbs a").length;
                n <= a || (t = a + 1, e = c(".sp-selected .sp-thumbs").find("a:eq(" + a + ")").attr("href"), p = i(c(".sp-selected .sp-thumbs").find("a:eq(" + a + ")").css("backgroundImage")), a == n - 1 && c("#sp-next").css("opacity", ".1"), c("#sp-prev").css("opacity", "1"), c(".sp-selected .sp-current").removeClass(), c(".sp-selected .sp-thumbs a:eq(" + a + ")").addClass("sp-current"), c(".sp-selected .sp-large").empty().append("<a href=" + e + '><img src="' + p + '"/></a>'), c(".sp-lightbox img").fadeOut(250, function() {
                    c(this).remove(), c(".sp-lightbox").data("currenteq", t).append('<img src="' + e + '"/>'), c(".sp-lightbox img").hide().fadeIn(250)
                })), s.preventDefault()
            }), c(document.body).on("click", "#sp-prev", function(s) {
                s.stopPropagation();
                var t, e, p, a = c(".sp-lightbox").data("currenteq");
                (a = a - 1) <= 0 || (1 == a && c("#sp-prev").css("opacity", ".1"), t = a - 1, e = c(".sp-selected .sp-thumbs").find("a:eq(" + t + ")").attr("href"), p = i(c(".sp-selected .sp-thumbs").find("a:eq(" + t + ")").css("backgroundImage")), c("#sp-next").css("opacity", "1"), c(".sp-selected .sp-current").removeClass(), c(".sp-selected .sp-thumbs a:eq(" + t + ")").addClass("sp-current"), c(".sp-selected .sp-large").empty().append("<a href=" + e + '><img src="' + p + '"/></a>'), c(".sp-lightbox img").fadeOut(250, function() {
                    c(this).remove(), c(".sp-lightbox").data("currenteq", a).append('<img src="' + e + '"/>'), c(".sp-lightbox img").hide().fadeIn(250)
                })), s.preventDefault()
            }), c(document.body).on("click", ".sp-lightbox", function() {
                t()
            }), c(document).keydown(function(s) {
                if (27 == s.keyCode) return t(), !1
            }), c(".sp-large").mousemove(function(s) {
                var t = c(this).width(),
                    e = c(this).height(),
                    p = c(this).offset(),
                    a = c(this).find(".sp-zoom").width(),
                    n = c(this).find(".sp-zoom").height(),
                    i = s.pageX - p.left,
                    r = s.pageY - p.top,
                    o = Math.floor(i * (t - a) / t),
                    d = Math.floor(r * (e - n) / e);
                c(this).find(".sp-zoom").css({
                    left: o,
                    top: d
                })
            })
        }
    })
}(jQuery);