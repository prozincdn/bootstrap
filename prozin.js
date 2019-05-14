

var parallax = new Scrollax;
$.Loading.setDefaults({
    overlay: $("#loading"),
    zIndex: 2,
    onStart: function(i) {
        i.overlay.fadeIn(400)
    },
    onStop: function(i) {
        setTimeout(function() {
            i.overlay.fadeOut(400)
        }, config.loadingLength)
    }
});

$.ajaxSetup({
    async: true
});

var loadingSpinner = "<i class='fas fa-circle-notch fa-spin loadingSpinner'></i>";

function getAttributes(i) {
    var t = {};
    return $.each(i[0].attributes, function(i, e) {
        "data-ajax" != e.name && e.name.startsWith("data-ajax-") && (t[e.name.replace("data-ajax-", "")] = e.value)
    }), t
}

function browseInit(i) {
    $('a[data-ajax="true"]').each(function() {
        $(this).off("touch click").on("touch click", function(i) {
            if (($(this).button("reset"), i.preventDefault(), $(this).data("confirm")) && !confirm($(this).data("confirm"))) return !1;
            var t = getAttributes($(this));
            if (void 0 === $(this).data("loading-text")) {
                var e = $(this).clone().find("i").remove().end();
                $(this).data("loading-text", loadingSpinner + e.html())
            } else "spinner" == $(this).data("loading-text") ? $(this).data("loading-text", loadingSpinner) : "no" == $(this).data("loading-text") && $(this).data("loading-text", $(this).clone().html());
            return $(this).data("ajax-noclean") || $(".prozin_alerts").remove(), $(this).button("loading"), browse($(this).attr("href"), {}, $(this), t), !1
        })
    }), $('form[data-ajax="true"]').each(function() {
        void 0 !== i && i && $(this).find("#" + $(this).attr("id")).val(i), $(this).find('button[type="submit"]').button("reset"), "ajaxed" != $(this).data("ajaxed") && void 0 === $(this).data("ajaxed") || $(this).off("submit send"), $(this).validator({
            focus: !1
        }).on("submit send", function(i) {
            if ($(this).data("ajaxed", "ajaxed"), !i.isDefaultPrevented()) {
                if ($(this).validator("destroy"), $(this).data("confirm") && !confirm($(this).data("confirm"))) return !1;
                var t = getAttributes($(this));
                if (void 0 === $(this).find('button[type="submit"]').data("loading-text") && $(this).find('button[type="submit"]').each(function() {
                        var i = $(this).clone().find("i").remove().end();
                        $(this).data("loading-text", loadingSpinner + i.html())
                    }), $(this).data("ajax-noclean") || $(".prozin_alerts").remove(), $(this).find('button[type="submit"]').button("loading"), "undefined" != typeof CKEDITOR)
                    for (instance in CKEDITOR.instances) CKEDITOR.instances[instance].updateElement();
                return browse($(this).attr("action") ? $(this).attr("action") : window.location.href, $(this).serialize(), $(this), t), !1
            }
        })
    }), parallax.init(), parallax.reload(); if(config.lang=='fa')$(".persianNumbers").persiaNumber("ar"); $('[data-toggle="tooltip"]').tooltip({
        boundary: "window"
    }), $('a[href^="#"]').click(function(i) {
        $(this).hasClass("scroll") && (i.preventDefault(), smoothScroll(this.hash, 1e3))
    }), $(function() {
        $(".lazy").lazy({
            load: function(i) {
                head.load(i.data("load")), i.attr("src", i.data("src"))
            },
            placeholder: "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibGRzLW1lc3NhZ2UiIHdpZHRoPSIyMDBweCIgaGVpZ2h0PSIyMDBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBzdHlsZT0iYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lIHJlcGVhdCBzY3JvbGwgMCUgMCU7Ij48c2NyaXB0IHhtbG5zPSIiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5LjA5MDkwOTA5MDkwOTA5MiA1MCkiPjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyIiBmaWxsPSIjOGM4YzhjIj4gIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGJlZ2luPSItMC42M3MiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9IjAuMyAwIDAuNyAxOzAuMyAwIDAuNyAxIiB2YWx1ZXM9IjA7MTswIiBrZXlUaW1lcz0iMDswLjU7MSIgZHVyPSIxLjRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOC4xODE4MTgxODE4MTgxODMgNTApIj48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMiIgZmlsbD0iIzhjOGM4YyI+ICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBiZWdpbj0iLTAuNTU5OTk5OTk5OTk5OTk5OXMiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9IjAuMyAwIDAuNyAxOzAuMyAwIDAuNyAxIiB2YWx1ZXM9IjA7MTswIiBrZXlUaW1lcz0iMDswLjU7MSIgZHVyPSIxLjRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNy4yNzI3MjcyNzI3MjcyNzMgNTApIj48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMiIgZmlsbD0iIzhjOGM4YyI+ICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBiZWdpbj0iLTAuNDg5OTk5OTk5OTk5OTk5OTRzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjMgMCAwLjcgMTswLjMgMCAwLjcgMSIgdmFsdWVzPSIwOzE7MCIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMS40cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L2NpcmNsZT48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzYuMzYzNjM2MzYzNjM2MzcgNTApIj48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMiIgZmlsbD0iIzhjOGM4YyI+ICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBiZWdpbj0iLTAuNDE5OTk5OTk5OTk5OTk5OTNzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjMgMCAwLjcgMTswLjMgMCAwLjcgMSIgdmFsdWVzPSIwOzE7MCIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMS40cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L2NpcmNsZT48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDUuNDU0NTQ1NDU0NTQ1NDUgNTApIj48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMiIgZmlsbD0iIzhjOGM4YyI+ICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBiZWdpbj0iLTAuMzVzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjMgMCAwLjcgMTswLjMgMCAwLjcgMSIgdmFsdWVzPSIwOzE7MCIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMS40cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L2NpcmNsZT48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTQuNTQ1NDU0NTQ1NDU0NTUgNTApIj48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMiIgZmlsbD0iIzhjOGM4YyI+ICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBiZWdpbj0iLTAuMjc5OTk5OTk5OTk5OTk5OTdzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjMgMCAwLjcgMTswLjMgMCAwLjcgMSIgdmFsdWVzPSIwOzE7MCIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMS40cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L2NpcmNsZT48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjMuNjM2MzYzNjM2MzYzNjMgNTApIj48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMiIgZmlsbD0iIzhjOGM4YyI+ICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBiZWdpbj0iLTAuMjA5OTk5OTk5OTk5OTk5OTZzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjMgMCAwLjcgMTswLjMgMCAwLjcgMSIgdmFsdWVzPSIwOzE7MCIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMS40cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L2NpcmNsZT48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzIuNzI3MjcyNzI3MjcyNzMgNTApIj48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMiIgZmlsbD0iIzhjOGM4YyI+ICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBiZWdpbj0iLTAuMTM5OTk5OTk5OTk5OTk5OTlzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjMgMCAwLjcgMTswLjMgMCAwLjcgMSIgdmFsdWVzPSIwOzE7MCIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMS40cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L2NpcmNsZT48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODEuODE4MTgxODE4MTgxODEgNTApIj48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMiIgZmlsbD0iIzhjOGM4YyI+ICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBiZWdpbj0iLTAuMDY5OTk5OTk5OTk5OTk5OTlzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjMgMCAwLjcgMTswLjMgMCAwLjcgMSIgdmFsdWVzPSIwOzE7MCIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMS40cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L2NpcmNsZT48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTAuOTA5MDkwOTA5MDkwOSA1MCkiPjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyIiBmaWxsPSIjOGM4YzhjIj4gIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGJlZ2luPSIwcyIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iMC4zIDAgMC43IDE7MC4zIDAgMC43IDEiIHZhbHVlcz0iMDsxOzAiIGtleVRpbWVzPSIwOzAuNTsxIiBkdXI9IjEuNHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9jaXJjbGU+PC9nPjwvc3ZnPg=="
        })
    })
}

function browse(i, t, e, a) {
    var n = $.extend({
            loadingin: !1,
            noloading: !1,
            nouri: !1,
            notitle: !1,
            noerror: !1,
            inmodal: !1,
            norender: !1,
            hidemodales: !0,
            success: !1,
            beforesend: !1,
            error: !1,
            datatype: 'json'
        }, a),
        o = -1 != i.indexOf(config.site) ? i : config.site + "/" + i,
        r = new Date;
    if (config.request && (config.request.abort(), resetEverything(), config.request = !1), "object" == typeof t) t = $.extend(t, {
        ajax: "true",
        time: r.getTime()
    });
    else if ("string" == typeof t) t = t + "&ajax=true&time=" + r.getTime();
    else t = {
        ajax: "true",
        time: r.getTime()
    };
    return config.request = $.ajax({
        type: "POST",
        url: o,
        async: true,
        data: function() {
            if (n.beforesend) {
                var i = window[n.beforesend](e, t);
                if (void 0 !== i) return i
            }
            document.onkeydown = function(evt) {
                evt = evt || window.event;
                var isEscape = false;
                if ("key" in evt) {
                    isEscape = (evt.key === "Escape" || evt.key === "Esc");
                } else {
                    isEscape = (evt.keyCode === 27);
                }
                if (isEscape) {
                    browseStop()
                }
            };

            return 0 != n.noloading && n.noloading && "no" != n.noloading || browseLoading(1, n.loadingin), t
        }(),
        error: function(i, t) {
            browseLoading(0, n.loadingin), formAjaxError(i, t, n.noerror), browseInit(), resetEverything()
        },
        success: function(i) {
            var a = getLocation(o);
            if (_paq.push(["setReferrerUrl", window.location.href]), _paq.push(["setCustomUrl", o]), _paq.push(["setDocumentTitle", i.title]), _paq.push(["deleteCustomVariables", "page"]), _paq.push(["setGenerationTimeMs", 0]), _paq.push(["trackPageView"]), window.history.replaceState && window.location.href != o && !n.nouri && window.history.pushState({
                    body: "noth",
                    title: "",
                    loadingin: n.loadingin
                }, "", o), n.nouri || window.history.replaceState({
                    body: i.body,
                    title: i.title,
                    location: i.location,
                    loadingin: n.loadingin
                }, i.title, o), ga("set", {
                    page: a.pathname,
                    title: i.title
                }), ga("send", "pageview")); 
            if (void 0 !== i.alerts) {
                if (void 0 !== i.alerts.fielderrors) {
                    var r = 1;
                    for (key in i.alerts.fielderrors) fieldError(key, i.alerts.fielderrors[key])
                }
                if (void 0 !== i.alerts.errors) {
                    var c = 1;
                    browseAlerts(i.alerts.errors, "danger", "error" == n.inmodal || "alerts" == n.inmodal ? e : config.area, n.noerror), n.error && void 0 !== window[n.error] && window[n.error](i, e, t)
                }
                void 0 !== i.alerts.successes && browseAlerts(i.alerts.successes, "success", "alerts" == n.inmodal ? e : config.area, n.noerror)
            }
            if (void 0 !== i.meta)
                for (mk in i.meta) addMeta(mk, i.meta[mk]);
            if (void 0 !== i.js)
                for (jsk in i.js) - 1 == $.inArray(i.js[jsk], config.scripts) && (config.scripts.push(i.js[jsk]), addScript(i.js[jsk]));
            if (void 0 !== i.scripts)
                for (sk in i.scripts) $("head").append("<script>" + i.scripts[sk] + "<\/script>");
            if (void 0 !== i.css)
                for (cssk in i.css) addStyle(i.css[cssk]);
            if (void 0 !== i.styles)
                for (stk in i.styles) $("head").append("<style>" + i.styles[stk] + "</style>");
            if (void 0 !== i.cdnjs) {
                var s = [];
                for (cjsk in i.cdnjs) - 1 == $.inArray(i.cdnjs[cjsk], config.scripts) && s.push(i.cdnjs[cjsk]);
                s.length && addScript("_cdnurl_/" + s.join(","))
            }
            if (void 0 !== i.cdncss) {
                var d = [];
                for (cdnc in i.cdncss) - 1 == $.inArray(i.cdncss[cdnc], config.css) && (config.css.push(i.cdncss[cdnc]), d.push(i.cdncss[cdnc]));
                d.length && addStyle("_cdnurl_/" + d.join(","))
            }
            
            void 0 === i.onlyalerts && (n.hidemodales && "false" != n.hidemodales && bootbox.hideAll(), (void 0 !== i.redirect?browse(i.redirect):(n.inmodal ? showModal(i.body, i.title) : browseSuccess(n.norender ? false : i.body, n.notitle ? false : i.title, i.location, n.loadingin ? n.loadingin : config.area))) ), void 0 === r && void 0 === c && n.success && void 0 !== window[n.success] && window[n.success](i, e, t), 0 != $(e).find('button[type="submit"]').length ? $(e).find('button[type="submit"]').button("reset") : $(e).button("reset"), browseInit(void 0 !== i.data && (void 0 !== i.data.csrf && i.data.csrf)), browseLoading(0, n.loadingin), resetEverything()
        },
        dataType: n.datatype,
        timeout: 3e4
    }), !1
}

function browseLoading(i, t) {
    void 0 !== $(t) && 0 != $(t).length && void 0 !== t ? i ? ($(t).loading("start"), $(window).scroll(function() {
        $(t).loading("resize")
    })) : $(t).loading("stop") : windowLoading(i)
}

function windowLoading(i) {
    if (i) disableScrolling(), config.loading.window = !0, $("#preloader").removeClass("load-complete"), $("body").removeClass("show-menu"), config.isOpen = !1;
    else {
        if (!1 === config.loading.window) return;
        config.loading.window = !1, setTimeout(function() {
            $("#preloader").addClass("load-complete"), enableScrolling(), $("html,body").animate({
                scrollTop: 0
            }, 10, function() {
                $("html,body").animate({
                    scrollTop: 2
                }, 10)
            })
        }, config.loadingLength)
    }
}

function browseSuccess(i, t, e, a) {
    if(!i)return;
    if(!t)
        t = $(document).find("title").text();
    (a = void 0 !== a ? a : config.area) == config.area && (void 0 !== e && NavSet(e), config.request = !1, document.title = t), $(a).html(i), $(a).loading("resize"), windowLoading(0), browseInit()
}

function smoothScroll(i, t) {
    $.smoothScroll({
        scrollTarget: i,
        speed: void 0 === t ? 100 : t
    })
}

function fieldError(i, t) {
    $("." + i + "field").addClass("has-error has-danger"), $("." + i + "field").find(".with-errors").html(t)
}

function browseAlerts(i, t, e, noerror) {
    if(noerror)return;
    var n = "";
    for (a in i) n += i[a] + "<br>";
    void 0 === e && (e = config.area), "error" != t && "success" != t && (t = "error"), swal({
        title: "",
        html: n,
        type: t
    }), resetEverything()
}

function browseStop() {
    config.request && config.request.abort(), browseLoading(0)
}

function formAjaxError(i, t, noerror) {
    if(noerror)return;
    var e = !1;
    404 == i.status ? e = "Requested page not found. [404]" : 500 == i.status ? e = "Internal Server Error [500]." : "parsererror" === t ? e = "JSON parse failed." : "timeout" === t ? e = "Time out error." : "TIMEOUT" === t && (e = "request TIMEOUT."), e && swal({
        title: "Error",
        html: e,
        type: "error"
    })
}

function formBrowse(i, t, e, a, n, o, r, c) {
    browse($(i).data("action") ? $(i).data("action") : $(i).attr("action"), $(i).serialize(), $(i), t, e, a, n, o, r, c)
}

function formSubmit(i, t, e, a) {
    $.ajax({
        form: i,
        type: "POST",
        url: (action = $(i).data("action") ? $(i).data("action") : $(i).attr("action")) + (action.indexOf("?") >= 0 ? "&" : "?") + "ajax=1",
        data: $(i).serialize() + "&ajax=1",
        beforeSend: t ? window[t] : null,
        success: e ? function(t) {
            window[e](t, i)
        } : null,
        error: a ? window[a] : formAjaxError,
        dataType: $(i).data("data") ? $(i).data("data") : "html"
    })
}

function formSuccess(i) {
    browseLoading(0)
}

function showModal(i, t) {
    bootbox.dialog({
        size: "large",
        message: i || "",
        title: t || "",
        onEscape: !0
    }), browseInit()
}

function NavSet(t) {
    $(".Navebar-child").each(function() {
        $(this).remove()
    }), t.length > 1 ? $(".breadcrumbcontain").show() : $(".breadcrumbcontain").hide();
    for (i in t) {
        var e = $('<li class="Navebar-child"></li>'),
            a = $('<a id="userPanel"></a>');
        a.html(t[i].title), a.attr("href", void 0 !== typeof t[i].url ? t[i].url : "#"), a.attr("data-ajax", void 0 !== typeof t[i].ajax && 1 == t[i].ajax ? "true" : "false"), $(".breadcrumb").append(e.append(a))
    }
}

function disableScrolling() {
    var i = window.scrollX,
        t = window.scrollY;
    window.onscroll = function() {
        window.scrollTo(i, t)
    }
}

function enableScrolling() {
    window.onscroll = function() {}
}

function resetEverything() {
    $("i.loadingSpinner").each(function() {
        $(this).parent().removeClass("disabled"), $(this).parent().removeAttr("disabled"), $(this).remove()
    }), $(".wsmenucontainer").removeClass("wsoffcanvasopener"), resetRecaptcha(), windowLoading(0), makeCurrency()
}

function reset(i, t) {
    $(t)[0].reset()
}

function resetRecaptcha() {
    $('script[id="recaptcha"]').each(function() {
        $(this).remove()
    }), addScript("https://www.google.com/recaptcha/api.js?theme=dark&hl=" + config.lang, "recaptcha"), $(".g-recaptcha").each(function() {
        $(this).find("iframe").attr("src", $(this).find("iframe").attr("src"))
    })
}

function resetModals() {
    bootbox.hideAll()
}

function addMeta(i, t) {
    var e = '<meta name="' + i + '" content="' + t + '">';
    $("head").prepend(e)
}

function addScript(i, t) {
    $("head").append('<script type="text/javascript" src="' + i + '" charset="utf-8" ' + (void 0 !== t ? 'id="' + t + '"' : "") + "><\/script>")
}

function addStyle(i, t) {
    var e = $("head"),
        a = "<link rel='stylesheet' href='" + i + "' type='text/css' media='screen' " + (void 0 !== t ? "id='" + t + "'" : "") + ">";
    e.append(a)
}

function userbarCheckCart() {
    var i = $("#cart-tab #cartTable tr").length;
    i > 0 ? ($(".basket-counter").html(i).show(), $(".userbarCheckout").removeAttr("disabled"), $(".usertabTotalPrice").html($("#cart-tab .cartTotalPrice").html())) : ($(".basket-counter").html("0").hide(), $(".userbarCheckout").attr("disabled", "disabled"))
}

function addToBasket(i, t, e) {
    $(".cartTab").click();
    var a = $(".userbar"),
        n = $('<img src="' + i.data.image + '">');
    n && n.clone().offset({
        top: $(t).offset().top,
        left: $(t).offset().left
    }).css({
        opacity: "0.5",
        position: "absolute",
        height: "150px",
        width: "150px",
        "z-index": "100"
    }).appendTo($("body")).animate({
        top: a.offset().top - 50,
        left: a.offset().left + 10,
        width: 75,
        height: 75
    }, 1e3, "easeInOutExpo").animate({
        width: 0,
        height: 0
    }, function() {
        $(this).detach(), userbarCheckCart()
    })
}

function removeFormBasket(i, t, e) {
    $(".cartProduct" + i.data.id).remove(), $(".usertabTotalPrice").html(i.data.totalPrice), $(".cartTotalPrice").html(i.data.totalPrice), userbarCheckCart()
}

function currencyIt(i) {
    var t = i.replace(/[\D\s\._\-]+/g, "");
    return 0 === (t = t ? parseInt(t, 10) : 0) ? 0 : t.toLocaleString("en-US")
}

function makeCurrency() {
    $('*[data-price="true"]').each(function(i) {
        $(this).val(currencyIt($(this).val())), $(this).on("keyup load", function(i) {
            var t;
            t = (t = (t = $(this).val()).replace(/[\D\s\._\-]+/g, "")) ? parseInt(t, 10) : 0, $(this).val(function() {
                return 0 === t ? 0 : t.toLocaleString("en-US")
            })
        })
    })
}
$(document).ready(function() {
    $(window).load(function() {
        setTimeout(function() {
            windowLoading(0)
        }, 1500)
    }), $(window).scroll(function() {
        var i = $(window).scrollTop(),
            t = $(".go-to-top-button");
        i > 600 ? t.addClass("active") : t.removeClass("active")
    }), browseInit(), window.onpopstate = function(i) {
        null === i.state ? (("string" == typeof window.location.hash && "" !== window.location.hash || "" === window.location.hash) && i.preventDefault(), browseLoading(1), browse(window.location.href)) : "" != i.state.title ? (browseLoading(1, i.state.loadingin), browseSuccess(i.state.body, i.state.title, i.state.location)) : browse(window.location.href), bootbox.hideAll(), browseInit()
    }
});
var getLocation = function(i) {
    var t = document.createElement("a");
    return t.href = i, t
};

(function($) {
  $.fn.RunAfterLoadedPlugin = function(_plugin, _function ) {

    var checkRunned = function()
    {
      if (typeof $.fn[_plugin] != 'undefined') 
      { if(typeof window[_function] != 'undefined') window[_function]();}
    else
      setTimeout(function(){ checkRunned(); },1000);
      
    }

    checkRunned();
  }
}(jQuery));

jQuery.fn.RunAfterLoadedThing = function(i, t) {
    var e = function() {
        void 0 !== i ? void 0 !== window[t] && window[t]() : setTimeout(function() {
            e()
        }, 1e3)
    };
    e()
}, jQuery.unserialize = function(i) {
    for (var t, e, a = decodeURI(i).split("&"), n = {}, o = 0, r = a.length; o < r; o++)
        if ((e = (t = a[o].split("="))[0]).indexOf("[]") == e.length - 2) {
            var c = e.substring(0, e.length - 2);
            void 0 === n[c] && (n[c] = []), n[c].push(t[1])
        } else n[e] = t[1];
    return n
};

function checkLoadedJS(js,jfun)
{

    var checkRunned = function()
    {
        if (config.scripts[js] != 'undefined') 
        {
            if(typeof window[jfun] != 'undefined') window[jfun]();
        }
        else
        {
          config.jstimeout[js] = setTimeout(function(){ checkRunned(); },1000);
        }
      
    }

    checkRunned();
}

function userCheck(uid)
{
  var d = new Date();
  var n = d.getTime();

    $.ajax({
        type: "POST",
        url: '_siteurl_/fa/user/check',
        async: true,
        data: {uid:uid, time:n}
        });
    /*browse('_siteurl_/fa/user/check', {uid:uid}, $('</a>'), { nouri:1,norender:1,noloading:1, datatype:'html', notitle:1});
    /*$('#userCheckSubmit').click();*/
    setTimeout(function(uid){ userCheck(uid)}, 10000, uid);
}

