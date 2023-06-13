"use strict";

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

    setTimeout(function () {
        if ($('.toast-notification').length > 0) {
            $('.toast-notification').remove();
        }
    }, 10000);

    if ($('.toast-notification').length > 0) {
        $(".toast-notification a").click(function (e) {
            e.preventDefault();
            $(".toast-notification").remove();
        });
    }


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
    if ($(".modal-topic-list li").length > 0) {

        showfiltermodal()
    }
    if ($(".clear-filter-btn").length > 0) {
        clearmodalcontent()
    }
    $(".filters-content").click(function () {
        $("body").addClass("overflow-x-hidden")
    });
    if ($('#carousel-count').length > 0) {
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
	if ($('#SearchInputPhone').length > 0) {
    lookupfun()
  }

});
// caroseul count full size img code starts here
$("#carousel-count .carousel-inner .carousel-item img").click(function () {
    $("#carousel-count-fullsize-img img").attr({ src: $(this).attr("src"), alt: $(this).attr("alt") });
    var myModal = new bootstrap.Modal(document.getElementById('carousel-count-fullsize-img'))
    myModal.show()
    
});
$("#carousel-count .carousel-inner .carousel-item").on("keydown", function (event) {

    var id = event.keyCode;
    if (id == 13) {
        $("#carousel-count .carousel-inner .carousel-item img").trigger('click');
        $("#carousel-count-fullsize-img img").attr({ src: $(this).attr("src"), alt: $(this).attr("alt") });
    }
});
// showfilter code
function showfiltermodal() {
    $(".modal-topic-list li").click(function () {
        $(this).find("i").toggleClass("close-li-icon");
        $(this).find("a").toggleClass("text-decoration-underline");
    })
}
function clearmodalcontent() {
    $(".clear-filter-btn").click(function () {

        $(".modal-topic-list li i").addClass("close-li-icon");
        $(".modal-topic-list li a").removeClass("text-decoration-underline");
    });
}


function carouselCount() {
    var totalItems = $('#carousel-count .carousel-item').length;

    var currentIndex = $('div.active').index() + 1;
    $('.carouselnumber').html('' + currentIndex + '/' + totalItems + '');
    var myCarousel = document.getElementById('carousel-count');
    myCarousel.addEventListener('slid.bs.carousel', function () {
        currentIndex = $('div.active').index() + 1;
        $('.carouselnumber').html('' + currentIndex + '/' + totalItems + '');
    })
}

/////////////////////////// Lookup Table/////////////////////////////////


var phoneSearch = {
  sel: {
    targetTable: document.getElementById('allserach'),
    noResults: document.getElementById('noresults'),
    input: document.getElementById('SearchInputPhone')
  },
  vars: {
    numberJson: {}
  },
  init: function () {
    // get JSON from table
    this.vars.numberJson = JSON.stringify(
      this.tableToObj(this.sel.targetTable)
    );
    // event on keyup
    this.onEnterNumber();
  },
  tableToObj: function (table) {
    var trs = table.rows,
      trl = trs.length,
      i = 0,
      j = 0,
      keys = [],
      obj,
      ret = [];

    for (; i < trl; i++) {
      if (i == 0) {
        for (; j < trs[i].children.length; j++) {
          keys.push(trs[i].children[j].innerHTML);
        }
      } else {
        obj = {};
        for (j = 0; j < trs[i].children.length; j++) {
          obj[keys[j]] = trs[i].children[j].innerHTML;
        }
        ret.push(obj);
      }
    }

    return ret;
  },
  onEnterNumber: function () {
    var self = this;
    this.sel.input.addEventListener('keyup', function (e) {
      var searchValue = e.currentTarget.value;
      var currentcharcter = this.selectionStart,
        regx = /[^a-z0-9 .]/gi,
        currentval = $(this).val();
      if (regx.test(currentval)) {
        $(this).val(currentval.replace(regx, ''));
        currentcharcter--;
      }
      this.setSelectionRange(currentcharcter, currentcharcter);
      // only numbers max 6 chars
      if (/^[0-9]{1,6}$/.test(searchValue)) {
        self.doNumberSearch(searchValue);
        // only numbers && more then 6
      } else if (/^\d+$/.test(searchValue)) {
        searchValue = searchValue.slice(0, 6);
        self.doNumberSearch(searchValue);
      } else {
        self.doStringSearch(searchValue);
      }
    });
  },
  prepareTab: function (searchValue) {
    var regex = new RegExp(searchValue, 'i'),
      regexNum = new RegExp('^' + searchValue, 'm'),
      self = this;

    this.sel.targetTable.style.display = "";
    this.sel.noResults.style.display = "none";

    $.each(JSON.parse(this.vars.numberJson), function (key, val) {
      // ##### this will break if the Table header rows are changed and the values are different in Welsh #####
      if ((regexNum.test(val.Code)) || (regex.test(val.Area))) {
        self.sel.targetTable.rows[key + 1].style.display = "";
      }
      else {
        self.sel.targetTable.rows[key + 1].style.display = "none";
      }
    });
  },
  doStringSearch: function (searchValue) {
    this.prepareTab(searchValue);

    var tableLength = $('#allserach tbody > tr:visible').length;

    if (tableLength < 1) {
      this.sel.noResults.style.display = "";
      $('#SearchInformation').html('');
      this.sel.targetTable.style.display = "none";
    }
    else {
      $('#SearchInformation').html(tableLength + ' results are shown');
      $('#resultsinfo').show();
    }
  },
  doNumberSearch: function (searchValue) {
    this.prepareTab(searchValue);
    var tableLength = $('#allserach tbody > tr:visible').length;

    if (tableLength < 1) {
      if (!searchValue.length) {
        this.sel.noResults.style.display = "";
        $('#SearchInformation').html('');
        this.sel.targetTable.style.display = "none";
      } else {
        searchValue = searchValue.slice(0, -1);
        this.doNumberSearch(searchValue);
      }
    }
    else {
      $('#SearchInformation').html(tableLength + ' results are shown');
      $('#resultsinfo').show();
    }

  }
}
function lookupfun() {
  phoneSearch.init();
}

///////////////////////////////Back to top/////////////////////////////////////
var btn = $('.back-to-top');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});


// ********************Video Player**********************
function videoPlayer() {
    $("#video-player .nav .nav-link").click(function () {

        if ($("a[href='#video-1']").not(".active").length > 0) {

            if ($("#video-1 iframe").length > 0) {
                var x = $("#video-1 iframe").attr("src");
                if (x.indexOf('youtube') != -1) {
                    var y = "&autoplay=0&mute=0";
                    $("#video-1 iframe").attr("src", x + y);
                }
                if (x.indexOf('vimeo') != -1) {
                    var iframe = $('#vimeo-player')[0];
                    var player = $f(iframe);
                    player.api('pause');
                    console.log("Vimeo video");
                }
            }
            if ($("#video-1 video").length > 0) {
                $("#video-2 video")[0].pause();
            }
        }

        if ($("a[href='#video-2']").not(".active").length > 0) {

            if ($("#video-2 iframe").length > 0) {
                var x = $("#video-2 iframe").attr("src");
                if (x.indexOf('youtube') != -1) {
                    var y = "&autoplay=0&mute=0";
                    $("#video-2 iframe").attr("src", x + y);
                }
                if (x.indexOf('vimeo') != -1) {
                    var iframe = $('#vimeo-player')[0];
                    var player = $f(iframe);
                    player.api('pause');
                    console.log("Vimeo video");
                }
            }
            if ($("#video-2 video").length > 0) {
                $("#video-2 video")[0].pause();
            }
        }

        if ($("a[href='#video-3']").not(".active").length > 0) {

            if ($("#video-3 iframe").length > 0) {
                var x = $("#video-3 iframe").attr("src");
                if (x.indexOf('youtube') != -1) {
                    var y = "&autoplay=0&mute=0";
                    $("#video-3 iframe").attr("src", x + y);
                }
                if (x.indexOf('vimeo') != -1) {
                    var iframe = $('#vimeo-player')[0];
                    var player = $f(iframe);
                    player.api('pause');
                    console.log("Vimeo video");
                }
            }
            if ($("#video-3 video").length > 0) {
                $("#video-3 video")[0].pause();
            }
        }

        if ($("a[href='#video-4']").not(".active").length > 0) {

            if ($("#video-4 iframe").length > 0) {
                var x = $("#video-4 iframe").attr("src");
                if (x.indexOf('youtube') != -1) {
                    var y = "&autoplay=0&mute=0";
                    $("#video-4 iframe").attr("src", x + y);
                }
                if (x.indexOf('vimeo') != -1) {
                    var iframe = $('#vimeo-player')[0];
                    var player = $f(iframe);
                    player.api('pause');

                }
            }
            if ($("#video-4 video").length > 0) {
                $("#video-4 video")[0].pause();
            }
        }


    });

}
$(".langauge-change").click(function (e) {
    e.preventDefault();
    if ($(".back-to-top span").text() == "Back to top") {
    $(".back-to-top span").text("yn ôl i'r brig");
    } else {
        $(".back-to-top span").text("Back to top");
    }
});



$(function () {
  $(window).on('load', function () {
    $('[data-src]').each(function () {
      var $this = $(this),
        src = $(this).data('src');
      $this.attr('src', src);
      console.log(src);
    });
  });
});