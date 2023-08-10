"use strict";
const menu = document.querySelector(".menu"); 
let subMenu;

function menuMain() {
    $(".menu-main").click(function (e) {
        if (e.target.closest(".menu-item-has-children")) {
            const hasChildren = e.target.closest(".menu-item-has-children");
            showSubMenu(hasChildren); // need discussion
        }
    })
}

function goBack() {
    $(".go-back").click(function () {
        hideSubMenu();
    })
}

function menuTrigger() {
    $(".mobile-menu-trigger").click(function () {
        toggleMenu();
    })
}

function closeMenu() {
    $(".mobile-menu-close").click(function () {
        toggleMenu();
    })
}

function menuOverlay() {
    $(".menu-overlay").click(function () {
        toggleMenu();
    })
}
function toggleMenu() {
    $(".menu").toggleClass("active");
    $(".menu-overlay").toggleClass("active");
}

function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    $(".menu .mobile-menu-head").addClass("active");
    $(".menu .current-menu-title").text(menuTitle);
    $(".menu .mobile-menu-head").addClass("active");
}

function hideSubMenu() {
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() => {
        subMenu.classList.remove("active");
    }, 300);
    menu.querySelector(".mobile-menu-head").classList.remove("active");
    $(".menu .current-menu-title").text("");
    $(".menu .mobile-menu-head").removeClass("active");
}

window.onresize = function () {
    if (this.innerWidth > 991) {
        if ($(".menu").hasClass("active")) {
            toggleMenu();
        }
    }
}

function searchIcon() {
    $('#search-icon').click(function () {
        $('#search-icon').toggleClass("fa-times");
        $('.search-form').toggleClass("active");
        $(".menu").removeClass("fa-times");
    })
    $('.search-icons').keypress(function (event) {
        var id = event.keyCode;
        if (id == 13) {
            $('#search-icon').trigger('click');
        }
    });
}

window.onscroll = () => {
    $(".menu").removeClass("fa-times");

}

// for main menu 
$(document).ready(function () {
    var timeVal = $("#ToastTime").val();
    setTimeout(function () {
        if ($('.toast-notification').length > 0) {
            $('.toast-notification').remove();
        }
    }, parseInt(timeVal) * 100);

    if ($('.toast-notification').length > 0) {
        $(".toast-notification .close-toast").click(function (e) {
            e.preventDefault();
            $(".toast-notification").remove();
        });
    }

    //Filter and Sorting
    $("#btnsubmit").on("click", function () {
        var topicarr = [];
        for (var i = 0; i < $(".modal-topic-list li[select='true']").length; i++) {
            var x = document.querySelectorAll(".modal-topic-list li[select='true']")[i].getAttribute("data-value");
            topicarr.push(x);
        }
        var statusarr = [];
        for (var i = 0; i < $(".modal-status-list li[select='true']").length; i++) {
            var x = document.querySelectorAll(".modal-status-list li[select='true']")[i].getAttribute("data-value");
            statusarr.push(x);
        }
        var timearr = [];
        for (var i = 0; i < $(".modal-time-list li[select='true']").length; i++) {
            var x = document.querySelectorAll(".modal-time-list li[select='true']")[i].getAttribute("data-value");
            timearr.push(x);
        }
        $("#SelectedTopicFilter").val(topicarr.toString());
        $("#SelectedStatusFilter").val(statusarr.toString());
        $("#SelectedTimeFilter").val(timearr.toString());
        $("#contentTypeForm").trigger("submit");
    });

    $('ul.dropdown-menu li').on("click", function () {
        $("#SelectedSortType").val($(this).attr("data-value"));
        $("#contentTypeForm").trigger("submit");
    });

    $("#btnconsubmit").on("click", function () {
        var contentarr = [];
        for (var i = 0; i < $(".modal-content-list li[select='true']").length; i++) {
            var x = document.querySelectorAll(".modal-content-list li[select='true']")[i].getAttribute("data-value");
            contentarr.push(x);
        }
        $("#SelectedContentFilter").val(contentarr.toString());
        $("#subTopicForm").trigger("submit");
    });

    $('ul.dropdown-menu li').on("click", function () {
        $("#SelectedSortType").val($(this).attr("data-value"));
        $("#subTopicForm").trigger("submit");
    });

    $(".menu-item-has-children").click(function () {
        if ($(this).children(".sub-menu").hasClass("sub-menu-show")) {
            $(this).children(".sub-menu").removeClass("sub-menu-show");
            $(this).find(".fa-angle-down").removeClass("rotate-arrow");
        }
        else {
            $(".menu-item-has-children .sub-menu").removeClass("sub-menu-show");
            $(this).children(".sub-menu").addClass("sub-menu-show");
            $(".menu-item-has-children .fa-angle-down").removeClass("rotate-arrow");
            $(this).find(".fa-angle-down").addClass("rotate-arrow");
        }
    });
    $("#search-icon").click(function () {
        $(".menu-item-has-children .sub-menu").removeClass("sub-menu-show");
        $(".menu-item-has-children .fa-angle-down").removeClass("rotate-arrow");
    })

    $(".mobile-nav-toggle").click(function () {
        $(this).toggleClass("btn-close close-bars");
        $("body").toggleClass("overflow-hidden");
    });

    //Filter and Sorting
    if ($(".modal-topic-list").length > 0) {
        showContentTypeFilter()
    }

    if ($(".clear-filter-btn").length > 0) {
        clearContentTypeFilter()
    }

    if ($(".modal-content-list").length > 0) {
        showSubTopicFilter()
    }

    if ($(".clear-filter-btn").length > 0) {
        clearSubTopicFilter()
    }

    $(".filters-content").click(function () {
        $("body").addClass("overflow-x-hidden")
    });

    if ($('.carousel-count').length > 0) {
        carouselCount()
    }

    if ($(".menu-main").length > 0) {
        menuMain()
    }

    if ($(".go-back").length > 0) {
        goBack()
    }

    if ($(".mobile-menu-trigger").length > 0) {
        menuTrigger()
    }

    if ($(".mobile-menu-close").length > 0) {
        closeMenu()
    }

    if ($(".menu-overlay").length > 0) {
        menuOverlay()
    }

    if ($('#search-icon').length > 0) {
        searchIcon()
    }

    if ($('#searchInput').length > 0) {
        lookupTable()
    }

    if ($('#video-player').length > 0) {
        videoPlayer()
    }

    if ($('.counter').length > 0) {
        counterNumber()
    }

    if ($('#globalInput').length > 0) {
        autoCompleteSearch(document.getElementById("globalInput"), document.getElementById("searchLink"), "#global-search-form")
    }
    if ($('#q').length > 0) {
        autoCompleteSearch(document.getElementById("q"), document.getElementById("pageLink"), "#contentTypeForm")
    }
    if ($('#internalInput').length > 0) {
        autoCompleteSearch(document.getElementById("internalInput"), document.getElementById("pageLink"), "#internal-search-form")
    }

    //Filter and Sorting
    if ($(".modal-topic-list li[select='true']").length > 0) {
        $("#btnsubmit").text(function (i, text) {
            return "Apply";
        })
    }
    if ($(".modal-status-list li[select='true']").length > 0) {
        $("#btnsubmit").text(function (i, text) {
            return "Apply";
        })
    }
    if ($(".modal-time-list li[select='true']").length > 0) {
        $("#btnsubmit").text(function (i, text) {
            return "Apply";
        })
    }
    if ($(".modal-content-list li[select='true']").length > 0) {
        $("#btnconsubmit").text(function (i, text) {
            return "Apply";
        })
    }

    $("#ddsort li").click(function () {
        if ($(this).attr("select")) {
            $(this).removeAttr("select");
        } else {
            $(this).attr("select", "true");
        }
    })
});

// caroseul count full size img code starts here
$(".carousel-count .carousel-inner .carousel-item img").click(function () {
    var myModal = new bootstrap.Modal(document.getElementById('carousel-count-fullsize-img'))
    myModal.show();
    $("#carousel-count-fullsize-img img").attr({ src: $(this).attr("src"), alt: $(this).attr("alt") });
});

$("#carousel-count-fullsize-img .btn-close").click(function () {
    var myModal = new bootstrap.Modal(document.getElementById('carousel-count-fullsize-img'))
    myModal.hide();
});

$(".carousel-count .carousel-inner .carousel-item").on("keydown", function (event) {
    var id = event.keyCode;
    if (id == 13) {
        $("#carousel-count .carousel-inner .carousel-item img").trigger('click');
        $("#carousel-count-fullsize-img img").attr({ src: $(this).attr("src"), alt: $(this).attr("alt") });
    }
});

function globalSearch() {
    $("#global-search-form").trigger('submit');
}

function internalSearch() {
    $("#internal-search-form").trigger('submit');
}

//Filter and Sorting
function showContentTypeFilter() {
    $(".modal-topic-list li").click(function () {
        $(this).find("i").toggleClass("close-li-icon");
        if ($(this).attr("select")) {
            $(this).removeAttr("select");
        } else {
            $(this).attr("select", "true");
        }
        if ($(".modal-topic-list li[select='true']").length > 0) {
            $("#btnsubmit").text(function (i, text) {
                return "Apply";
            })
        }
        else {
            $("#btnsubmit").text(function (i, text) {
                return "Close";
            })
        }
    })
    $(".modal-status-list li").click(function () {
        $(this).find("i").toggleClass("close-li-icon");
        if ($(this).attr("select")) {
            $(this).removeAttr("select");
        } else {
            $(this).attr("select", "true");
        }
        if ($(".modal-status-list li[select='true']").length > 0) {
            $("#btnsubmit").text(function (i, text) {
                return "Apply";
            })
        }
        else {
            $("#btnsubmit").text(function (i, text) {
                return "Close";
            })
        }
    })
    $(".modal-time-list li").click(function () {
        $(this).find("i").toggleClass("close-li-icon");
        if ($(this).attr("select")) {
            $(this).removeAttr("select");
        } else {
            $(this).attr("select", "true");
        }
        if ($(".modal-time-list li[select='true']").length > 0) {
            $("#btnsubmit").text(function (i, text) {
                return "Apply";
            })
        }
        else {
            $("#btnsubmit").text(function (i, text) {
                return "Close";
            })
        }
    })
}

function clearContentTypeFilter() {
    $(".clear-filter-btn").click(function () {
        $(".modal-topic-list li i").addClass("close-li-icon");
        $(".modal-topic-list li").removeAttr("select");
        $("#btnsubmit").text(function (i, text) {
            return "Close";
        })
    });
    $(".clear-filter-btn").click(function () {
        $(".modal-status-list li i").addClass("close-li-icon");
        $(".modal-status-list li").removeAttr("select");
        $("#btnsubmit").text(function (i, text) {
            return "Close";
        })
    });
    $(".clear-filter-btn").click(function () {
        $(".modal-time-list li i").addClass("close-li-icon");
        $(".modal-time-list li").removeAttr("select");
        $("#btnsubmit").text(function (i, text) {
            return "Close";
        })
    });

}

function showSubTopicFilter() {
    $(".modal-content-list li").click(function () {
        $(this).find("i").toggleClass("close-li-icon");
        if ($(this).attr("select")) {
            $(this).removeAttr("select");
        } else {
            $(this).attr("select", "true");
        }
        if ($(".modal-content-list li[select='true']").length > 0) {
            $("#btnconsubmit").text(function (i, text) {
                return "Apply";
            })
        }
        else {
            $("#btnconsubmit").text(function (i, text) {
                return "Close";
            })
        }
    })
}

function clearSubTopicFilter() {
    $(".clear-filter-btn").click(function () {
        $(".modal-content-list li i").addClass("close-li-icon");
        $(".modal-content-list li").removeAttr("select");
        $("#btnconsubmit").text(function (i, text) {
            return "Close";
        })
    });
}

//Pagination
function updatePageQuery(value) {
    if (value == 'undefined' || value == null)
        return;

    var url = window.location.href;
    var key = 'PageNo';
    var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"), hash;

    if (re.test(url)) {
        if (typeof value !== 'undefined' && value !== null) {
            url = url.replace(re, '$1' + key + "=" + value + '$2$3');
            window.location = url;
            return;
        }
        else {
            hash = url.split('#');
            url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
            if (typeof hash[1] !== 'undefined' && hash[1] !== null) {
                url += '#' + hash[1];
            }
            window.location = url;
            return;
        }
    }
    else {
        if (typeof value !== 'undefined' && value !== null) {
            var separator = url.indexOf('?') !== -1 ? '&' : '?';
            hash = url.split('#');
            url = hash[0] + separator + key + '=' + value;
            if (typeof hash[1] !== 'undefined' && hash[1] !== null) {
                url += '#' + hash[1];
            }
            window.location = url;
            return;
        }
        else {
            return;
        }
    }
}

function carouselCount() {
    var totalItems = $('.carousel-count .carousel-item').length;

    var currentIndex = $('.carousel-count div.active').index() + 1;
    $('.carouselnumber').html('' + currentIndex + '/' + totalItems + '');
    var myCarousel = document.getElementById('carousel-count');
    myCarousel.addEventListener('slid.bs.carousel', function () {
        currentIndex = $('.carousel-count div.active').index() + 1;
        $('.carouselnumber').html('' + currentIndex + '/' + totalItems + '');
    })
}

//********************Auto Complete**********************

function autoCompleteSearch(inp, pagelink, formid) {
    var currentFocus;
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAllLists();
        var pattern = /^[A-Za-z0-9 ]*$/;
        if (!pattern.test(val)) {
            $(this).val("");
            return;
        }

        if (val.length < 3) { return; }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        var contentId = "";
        if ($('#contentTypeId').val() != undefined)
            contentId = $('#contentTypeId').val();
        $.ajax({
            type: "POST",
            url: pagelink.value + 'GetAutocomplete?term=' + val + '&id=' + contentId,
            data: val,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.isSucceed) {
                    if (response.result == null) {
                        return;
                    }

                    var inpval = val.toLowerCase()
                    for (i = 0; i < response.result.length; i++) {
                        if (response.result[i] != null) {
                            b = document.createElement("DIV");
                            var suggval = response.result[i].toLowerCase();
                            b.innerHTML = suggval.replace(inpval, "<strong>" + inpval + "</strong>");
                            b.innerHTML += "<input type='hidden' value='" + suggval + "'>";
                            b.addEventListener("click", function (e) {
                                inp.value = this.getElementsByTagName("input")[0].value;
                                closeAllLists();
                                $(formid).trigger('submit');
                            });
                            a.appendChild(b);
                        }
                    }
                }
            }
        });
    });

    inp.addEventListener("keyup", function (e) {
        if ($('#' + inp.id).is(":focus") && (e.keyCode == 13)) {
            $(formid).trigger('submit');
        }
    });

    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

//********************Lookup Table**********************

function lookupTable() {
    $(document).ready(function () {
        $('#searchInput').keyup(function () {
            var searchText = $(this).val().toLowerCase();
            var pattern = /^[A-Za-z0-9]*$/;
            var table = $('#allsearch-table');
            var rows = table.find('tr').slice(1);
            if (!pattern.test(searchText)) {
                $(this).val("");
                return;
            }
            var count = 0;
            rows.each(function () {
                var row = $(this);
                var found = false;

                row.find('td, th').each(function () {
                    var cellText = $(this).text().toLowerCase();
                    if (cellText.includes(searchText)) {
                        found = true;
                        return false;
                    }
                });

                if (found) {
                    row.show();
                    count++;
                } else {
                    row.hide();
                }
            });

            if (searchText.length == 0) {
                table.show();
                $('#searchResults').hide();
                $('#searchResultsFound').hide();
                $('#LookUpTableTitle').show();
            }
            else if (count === 0) {
                table.hide();
                $('#searchResults').show();
                $('#searchResultsFound').hide();
                $('#LookUpTableTitle').hide();
            } else {
                table.show();
                $('#searchResults').hide();
                $('#searchResultsFound').show();
                $('#LookUpTableTitle').show();
                $('#searchResultsFound').text(count + " " + $("#hiddenFoundTextValue").val());
            }
        });
    });
}

//********************Back to top**********************

$(document).ready(function () {
    var scrollTrigger = 4 * $(window).height(); // Calculate the scroll trigger based on four screen lengths

    $(window).scroll(function () {
        if ($(this).scrollTop() > scrollTrigger) {
            $('.back-to-top').addClass('show');
        } else {
            $('.back-to-top').removeClass('show');
        }
    });

    $('.back-to-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
});

//********************Video Player**********************
function videoPlayer() {
    $("#video-player .nav .nav-link").click(function () {
        if ($(".blue-bg div[id^='video']:not('.active')").length > 0) {
            $(".blue-bg div[id^='video']:not('.active')").each(function () {
                if ($(this).find("iframe").length > 0) {
                    var x = $(this).find("iframe").attr("src");
                    if (x.indexOf("youtube") != -1) {
                        var y = "&autoplay=0&mute=0";
                        $(this).find("iframe").attr("src", x + y);
                    }

                    if (x.indexOf("vimeo") != -1) {
                        var iframe = $(this).find("#vimeo-player")[0];
                        var player = $f(iframe);
                        player.api("pause");
                    }
                }
                if ($(this).find("video").length > 0) {
                    $(this).find("video")[0].pause();
                }
            });
        }
    });
}

$(function () {
    $(window).on('load', function () {
        $('[data-src]').each(function () {
            var $this = $(this),
                src = $(this).data('src');
            $this.attr('src', src);
        });
    });
});

//********************Counter Number**********************
function counterNumber() {
    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-target');
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
        },
            {
                duration: 5000,
                easing: 'linear',
                step: function () {
                    $this.text(commaSeparateNumber(Math.floor(this.countNum)));
                },
                complete: function () {
                    $this.text(commaSeparateNumber(this.countNum));
                }
            }
        );
    });
}
function commaSeparateNumber(val) {
    val = val.toString().replace(/,/g, '');
    var valRZ = val.replace(/^0+/, '');
    var valSplit = valRZ.split('.');
    while (/(\d+)(\d{3})/.test(valSplit[0].toString())) {
        valSplit[0] = valSplit[0].toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    }
    if (valSplit.length == 2) {
        val = valSplit[0] + "." + valSplit[1];
    } else {
        val = valSplit[0];
    }
    return val;
}

$(document).ready(function () {
    $('.breadcrumb li').each(function () {
        var content = $(this).text();
        var maxLength = 10;
        if (content.length > maxLength) {
            $(this).addClass('ellipsis');
        }
    });
});

//TOAST BLOCK COOKIES
$(document).ready(function () {
    if (document.cookie.indexOf("ToastPopupBlocked") < 0) {
        $("#exampleModal").show();
        $(".modal-backbg").show();
        $("#exampleModal").addClass("show");
    }
    else {
        $("#exampleModal").hide();
        $(".modal-backbg").hide();
    }
});

function getCookie(name) {
    let cookie = {};
    document.cookie.split(';').forEach(function (el) {
        let [k, v] = el.split('=');
        cookie[k.trim()] = v;
    })
    return cookie[name];
}

$("#AllowToastPopup").click(function () {
    document.cookie = "ToastPopupBlocked=false; path=/; expires=Wed, 05 Aug 2028 23:00:00 UTC";
    $("#exampleModal").hide();
    $(".modal-backbg").hide();
});

$("#BlockToastPopup").click(function () {
    document.cookie = "ToastPopupBlocked=true; path=/; expires=Wed, 05 Aug 2028 23:00:00 UTC";
    $("#exampleModal").hide();
    $(".modal-backbg").hide();
});

$("#CloseToast").click(function () {
    $("#exampleModal").hide();
    $(".modal-backbg").hide();
});

//page Specific info banner
$(document).ready(function () {
    CheckCookieAndHidePopup("SiteWideAlertBanner", "SiteWideAlertBanner");
});

function CheckCookieAndHidePopup(cookieName, blockToHide) {
    if (document.cookie.indexOf(cookieName) > -1) {
        $("#" + blockToHide).hide();
        return;
    }
    else {
        $("#" + blockToHide).show();
    }
}

function createCookie(days, cookieName, hideBlockId) {
    if (document.cookie.indexOf(cookieName) > -1) {
        $("#" + hideBlockId).hide();
        return;
    }
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = cookieName + "=false; path=/; expires=" + date.toUTCString();
    }
}


$(".toggle-text").click(function () {
    var hiddenText = $(this).siblings(".hidden-text");
    var toggleIcon = $(this).siblings(".toggle-icon");

    hiddenText.slideToggle();
    toggleIcon.toggleClass("fa-angle-down fa-angle-up");

    if (toggleIcon.hasClass("fa-angle-down")) {
        $(this).text($('#showAllText').val());
        $('.collapse').each(function () {
            $(this).removeClass('show');
        });
        $('.accordion-button').each(function () {
            $(this).attr('aria-expanded', 'false');
            $(this).addClass('collapsed');
        });
    }
    else {
        $(this).text($('#hideAllText').val());
        $('.collapse').each(function () {
            $(this).addClass('show');
        });
        $('.accordion-button').each(function () {
            $(this).attr('aria-expanded', 'true');
            $(this).removeClass('collapsed');
        });
    }
});


//SiteWideAlert BANNER
$("#alert-close").click(function () {
    createCookie(30, "SiteWideAlertBanner", "SiteWideAlertBanner");
});

$(document).ready(function () {
    $('h1:first').attr('id', 'skip');
});

$(document).ready(function () {
    if ($("#CTAShowInRightId").val()) {
        $("#CTABlockId").addClass('ms-auto');

    }
    else {
        $("#CTABlockId").removeClass('ms-auto');
    }
});

// Decision tree
$(".tree-question").click(function () {
    var elementId = $(this).attr('id');
    var strItems = elementId.split("-");
    var ansItem = "answer-" + strItems[1];

    $('.tree-answer').hide();

    var isNested = $(this).parent().attr('class');
    if (isNested.indexOf('nested') > -1) {
        $('.tree-answer-section').hide();
        for (var i = strItems[1].length; i > 1; i--) {
            var temp = strItems[1].substring(0, i - 1);
            $('#answer-' + temp).show();
        }
    }

    $('#' + ansItem).show();
    $('#' + ansItem + ' .form-check-input').prop('checked', false);
    return;
});

$(".tree-reset").click(function () {
    $('.tree-answer').hide();
    $('.tree-answer-section').hide();
    $('.form-check-input').prop('checked', false);
});

$(document).ready(function () {
    CheckCookie_Hide("LanguageBanner", "lang-banner");
});

function CheckCookie_Hide(cookieName, blockToHide) {
    if (document.cookie.indexOf(cookieName) > -1) {
        if (getCookie(cookieName) == Langbannerpath) {
            $("#" + blockToHide).hide();
            return;
        }
        else {
            $("#" + blockToHide).show();
        }
    }
    else {
        $("#" + blockToHide).show();
    }
}
var Langbannerpath = (window.location.pathname + window.location.search);
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function CreatePageCookie(days, cookieName, hideBlockId, path) {
    if (document.cookie.indexOf(cookieName) > -1) {
        $("#lang-banner").hide();
        $("#" + hideBlockId).hide();
        return;
    }
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = cookieName + "=" + path + "; expires=" + date.toUTCString();
    }
}
function LanguageBanner() {
    $("#lang-banner").hide();
    CreatePageCookie(30, "LanguageBanner", "lang-banner", Langbannerpath);
}
/* PostCode Checker Block */
$(document).ready(function () {
    if ($("#ListAddressVal").val() != null && $("#ListAddressVal").val() != "") {
        $("#divChangeLocation").show();
        $("#divChangeLocation").focus();
        $("#PostCodeSubmit").hide();
        $("#postcode-form").hide();
    }
    else if ($("#divNoResultFoudPostCode").is(':visible')) {
        $("#PostCodeSubmit").hide();
        $("#postcode-form").hide();
    }
    else {
        $("#PostCodeSubmit").show();
        $("#postcode-form").show();
    }

    $(".info-card").each(function () {
        var closestRow = $(this).closest(".row");
        closestRow.addClass("extra-margin");
    });
    $(".info-card.news-center").each(function () {
        var closestRow = $(this).closest(".row");
        closestRow.addClass("news-center-spacing");
    });
});

var postcodeRegex = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i;
$("#PostCodeSubmit").click(function () {
    if ($("#PostCode").val() != "") {
        if (postcodeRegex.test($("#PostCode").val())) {
            $("#postcode-form").removeClass("form-error");
            $("#divChangeLocation").show();
            $("#divChangeLocation").focus();
            $("#divInvalidPostCodeMessage").hide();
            $("#PostCodeSubmit").hide();
            $("#postcode-form").hide();
            if ($("#ListAddressVal").val() != null && $("#ListAddressVal").val() != "") {
                $('#SelectAddressDrpDn').show();
            }
        }
        else {
            $("#divInvalidPostCodeMessage").show();
            $("#postcode-form").addClass("form-error");
            $("#divInvalidPostCodeMessage").text($("#hdnInvalidPostCodeMessage").val());
            return false;
        }
    }
});

$("#ChangeLocation").click(function () {
    $("#PostCodeSubmit").show();
    $("#postcode-form").show();
    $("#divChangeLocation").hide();
    $("#PostCodeLabel").text('');
    $('#SelectAddressDrpDn').empty();
    $('#SelectAddressDrpDn').hide();
    $("#divInitialContent").hide();
    $("#PostCodeTableResult").hide();
    $("#divClosingContent").hide();
    $("#divNoResultFoudPostCode").hide();
    var uri = window.location.href.toString();
    if (uri.indexOf("?") > 0) {
        var clean_uri = uri.substring(0, uri.indexOf("?"));
        window.history.replaceState({}, document.title, clean_uri);
    }

});

$("#SelectAddressDrpDn").change(function () {
    var selectUrn = $('#SelectAddressDrpDn :selected').val();
    var ListAddressVal = JSON.parse($("#ListAddressVal").val());
    if (selectUrn == "0") {
        $("#divInitialContent").hide();
        $("#PostCodeTableResult").hide();
        $("#divClosingContent").hide();
    }

    $(ListAddressVal).each(function (r, k) {
        if (selectUrn == ListAddressVal[r].UPRN) {
            $("#divInitialContent").show();
            $("#PostCodeTableResult").show();
            $("#divClosingContent").show();
            SetPostCodeTableValues(ListAddressVal[r]);
            return;
        }
    });

});

function SetPostCodeTableValues(ListAddressVal) {
    let netSpeedUnit = $("#hdnInternetSpeedUnit").val();
    $("#StandardDownloadVal").text(ListAddressVal.MaxBbPredictedDown > -1 ? ListAddressVal.MaxBbPredictedDown + " " + netSpeedUnit : '- -');
    $("#StandardUploadVal").text(ListAddressVal.MaxBbPredictedUp > -1 ? ListAddressVal.MaxBbPredictedUp + " " + netSpeedUnit : '- -');
    SetValuesForAvailability(ListAddressVal.MaxBbPredictedUp, ListAddressVal.MaxBbPredictedDown, "StandardAvailableVal");
    $("#SuperfastDownloadVal").text(ListAddressVal.MaxSfbbPredictedDown > -1 ? ListAddressVal.MaxSfbbPredictedDown + " " + netSpeedUnit : '- -');
    $("#SuperfastUploadVal").text(ListAddressVal.MaxSfbbPredictedUp > -1 ? ListAddressVal.MaxSfbbPredictedUp + " " + netSpeedUnit : '- -');
    SetValuesForAvailability(ListAddressVal.MaxSfbbPredictedUp, ListAddressVal.MaxSfbbPredictedDown, "SuperfastAvailableVal");
    console.log(ListAddressVal.MaxUfbbPredictedDown)
    $("#UltrafastDownloadVal").text(ListAddressVal.MaxUfbbPredictedDown > -1 ? ListAddressVal.MaxUfbbPredictedDown + " " + netSpeedUnit : '- -');
    $("#UltrafastUploadVal").text(ListAddressVal.MaxUfbbPredictedUp > -1 ? ListAddressVal.MaxUfbbPredictedUp + " " + netSpeedUnit : '- -');
    SetValuesForAvailability(ListAddressVal.MaxUfbbPredictedUp, ListAddressVal.MaxUfbbPredictedDown, "UltrafastAvailableVal");
}

function SetValuesForAvailability(upload, download, id) {
    if (parseFloat(upload) > -1 || parseFloat(download) > -1) {
        $("#" + id).text($("#hdnAvailableText").val());
    }
    else {
        $("#" + id).text($("#hdnUnAvailableText").val());
    }
}

/* End Of Post Code Checker */

//EXTERNAL LINK IN NEW TAB
$(document).ready(function () {
    for (var links = document.links, i = 0, a; a = links[i]; i++) {
        if (a.host !== location.host && a.href.indexOf('javascript:void(0)') < 0) {
            a.target = '_blank';
        }
    }
});

//Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    },
});

$(document).ready(function () {
    CheckCookieAndHidePopup("PageSpecCookie", "page-banner");
});

function CheckCookieAndHidePopup(cookieName, blockToHide) {
    if (document.cookie.indexOf(cookieName) > -1) {
        if (getCookie(cookieName) == pagebannerpath) {
            $("#" + blockToHide).hide();
            return;
        }
        else {
            $("#" + blockToHide).show();
        }
    }
    else {
        $("#" + blockToHide).show();
    }
}
var pagebannerpath = (window.location.pathname + window.location.search);
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function createPageCookie(days, cookieName, hideBlockId, path) {
    if (document.cookie.indexOf(cookieName) > -1) {
        $("#page-banner").hide();
        $("#" + hideBlockId).hide();
        return;
    }
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = cookieName + "=" + path + "; expires=" + date.toUTCString();
    }
}

function pageInfo() {
    $("#page-banner").hide();
    createPageCookie(30, "PageSpecCookie", "page-banner", pagebannerpath);
}
function pageInfoBanner() {
    $("#page-banner").hide();
}