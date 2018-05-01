$(document).ready(function() {    window.addEventListener("DOMContentLoaded", function() {        function setCursorPosition(pos, elem) {            elem.focus();            if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);        else if (elem.createTextRange) {                var range = elem.createTextRange();                range.collapse(true);                range.moveEnd("character", pos);                range.moveStart("character", pos);                range.select()            }        }        function mask(event) {            var matrix = "+7 (___) ___ ____",            i = 0,            def = matrix.replace(/\D/g, ""),            val = this.value.replace(/\D/g, "");            if (def.length >= val.length) val = def;            this.value = matrix.replace(/./g, function(a) {                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a            });            if (event.type == "blur") {                if (this.value.length == 2) this.value = ""            }        };        var input1 = document.querySelector(".tel1");        input1.addEventListener("input", mask, false);        input1.addEventListener("focus", mask, false);        input1.addEventListener("blur", mask, false);        var input2 = document.querySelector(".tel2");        input2.addEventListener("input", mask, false);        input2.addEventListener("focus", mask, false);        input2.addEventListener("blur", mask, false);        var input3 = document.querySelector(".tel3");        input3.addEventListener("input", mask, false);        input3.addEventListener("focus", mask, false);        input3.addEventListener("blur", mask, false);        var input4 = document.querySelector(".tel4");        input4.addEventListener("input", mask, false);        input4.addEventListener("focus", mask, false);        input4.addEventListener("blur", mask, false);        var input5 = document.querySelector(".tel5");        input5.addEventListener("input", mask, false);        input5.addEventListener("focus", mask, false);        input5.addEventListener("blur", mask, false);    });    !function () {        var e = [window.Element, window.CharacterData, window.DocumentType],            t = []        e.forEach(function (e) {            e && t.push(e.prototype)        }), $(".callback, .call-en, .consultation-form").on("submit", function () {            $(this).hide()        }),            function (e) {                e.forEach(function (e) {                    e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", {                        configurable: !0,                        enumerable: !0,                        writable: !0,                        value: function () {                            this.parentNode.removeChild(this)                        }                    })                })            }(t)    }()    for (var e = document.querySelectorAll("button, [type=submit]"), t = 0; t < e.length; t++) e[t].addEventListener("click", function (e) {        e.preventDefault()        var t = document.querySelector(".ripple")        t && t.remove()        var o = this.offsetWidth,            n = this.offsetHeight        o >= n ? n = o : o = n        var a = void 0 == e.offsetX ? e.layerX : e.offsetX - o / 2,            l = void 0 == e.offsetY ? e.layerY : e.offsetY - n / 2,            i = document.createElement("span")        i.className = "ripple", s = i.style, s.width = o + "px", s.height = n + "px", s.top = l + "px", s.left = a + "px", this.appendChild(i)    })    $(".callback-b").on("click", function () {        $(".module-window").show(), $(".callback").css({            left: "-3000px"        }), $(".callback").show().animate({            left: "0"        }, 400)    }), $(document).mouseup(function (e) {        var t = $(".target")        t.is(e.target) || 0 !== t.has(e.target).length || (t.fadeOut(), $(".module-window").fadeOut())    }), $(".sale-button").on("click", function () {        $(".module-window").show(), $(".fix-sale").animate({            left: "-3000px"        }, 1), $(".fix-sale").show().animate({            left: 0        }, 400)    }), $(".fix-sale").on("submit", function () {        $(this).hide()    }), $('button[type="submit"]').on("click", function () {        $(this).submit();        $(".module-window").show(), $(".thanks").fadeIn();    }), $(window).scroll(function () {        $(window).scrollTop() <= "250" ? $(".top").fadeOut("slow") : $(".top").fadeIn("slow")    }), $(".top").click(function () {        $("html, body").animate({            scrollTop: 0        }, "slow")    }), $(".close").click(function () {        $(".target, .module-window").fadeOut()        $('html, body').removeClass('fixed');    }), $(".get-sale, .sale-menu button, .sale-menu .close").click(function () {        $(".sale-menu").hasClass("closed") ? $(".sale-menu").removeClass("closed").addClass('mobile') : $(".sale-menu").addClass("closed").removeClass('mobile');    })    $('.more-information').click(function () {        $("html, body").animate({            scrollTop: 1260        }, "slow");    });    $(".need-consult").on("click", function () {        $(".module-window").show(), $(".consultation-form").css({            left: "-3000px"        }), $(".consultation-form").show().animate({            left: "0"        }, 400);    });    $('.en-call').click(function () {        $(".module-window").show(), $(".call-en").css({            left: "-3000px"        }), $(".call-en").show().animate({            left: "0"        }, 400);    });// Detect ios 11_x_x affected    // NEED TO BE UPDATED if new versions are affected    var ua = navigator.userAgent,        iOS = /iPad|iPhone|iPod/.test(ua),        iOS11 = /OS 11_0|OS 11_1|OS 11_2/.test(ua);    // ios 11 bug caret position    if ( iOS && iOS11 ) {    $('.en-call, .feedback, .need-consult, .get-sale').click(function (e) {        $('html, body').addClass('fixed');        var y = e.pageY;        var parse = parseInt(y) - 350;        $('.test, .en-call .close, .feedback .close, .consultation-form .close, .get-sale .close').click(function () {            $('html, body').removeClass('fixed').animate({scrollTop: parse}, 1);        });    });}        });