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
  // if ($('#searchInput').length > 0) {
  //   lookupfun()
  //  }
  if ($('.counter').length > 0) {
    counterNumber()
  }
});
// caroseul count full size img code starts here
$("#carousel-count .carousel-inner .carousel-item img").click(function () {
  var myModal = new bootstrap.Modal(document.getElementById('carousel-count-fullsize-img'))
  myModal.show();
  $("#carousel-count-fullsize-img img").attr({ src: $(this).attr("src"), alt: $(this).attr("alt") });
});
$("#carousel-count-fullsize-img .btn-close").click(function () {
  var myModal = new bootstrap.Modal(document.getElementById('carousel-count-fullsize-img'))
  myModal.hide();
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

  var currentIndex = $('#carousel-count div.active').index() + 1;
  $('.carouselnumber').html('' + currentIndex + '/' + totalItems + '');
  var myCarousel = document.getElementById('carousel-count');
  myCarousel.addEventListener('slid.bs.carousel', function () {
    currentIndex = $('#carousel-count div.active').index() + 1;
    $('.carouselnumber').html('' + currentIndex + '/' + totalItems + '');
  })
}

//********************Lookup Table**********************
// function lookupfun(){

$(document).ready(function() {
  $('#searchInput').keyup(function() {
    var searchText = $(this).val().toLowerCase();
    var table = $('#allsearch-table');
    var rows = table.find('tr').slice(1);

    var count = 0;

    rows.each(function() {
      var row = $(this);
      var found = false;

      row.find('td').each(function() {
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

    if (count === 0) {
      table.hide();
      $('#searchResults').text('No results');
    } else {
      table.show();
      $('#searchResults').text(count + ' results are shown');
    }
  });
});

// }

//********************Back to top**********************
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
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    counter.innerText = "0";
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 2000;
      if (count < target) {
        counter.innerText = `${Math.ceil(count + increment)}`;
        setTimeout(updateCounter, 1);
      } else counter.innerText = target;
    };
    updateCounter();
  });
}
