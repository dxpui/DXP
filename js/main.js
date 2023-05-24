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
function lookupTable() {
  window.onload = function () { searchTable() };
  function searchTable() {
    var input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    var count = 0;
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td");
      tr[i].style.display = "";
      for (j = 0; j < td.length; j++) {
        txtValue = td[j].textContent || td[j].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          count++;
          break;
        } else if (j == td.length - 1) {
          tr[i].style.display = "none";
        }
      }
    }
    document.getElementById("resultCount").textContent = count + " result(s) are shown";
    var noResults = document.getElementById("noResults");
    if (count == 0) {
      noResults.style.display = "";
      resultCount.style.display = "none";
    } else {
      noResults.style.display = "none";
      resultCount.style.display = "";
    }
  }
}
var data = [
  {
    "Code": "0114",
    "Area": "Sheffield",
  },
  {
    "Code": "0115",
    "Area": "Nottingham",
  },
  {
    "Code": "0116",
    "Area": "Leicester",
  },
  {
    "Code": "0117",
    "Area": "Bristol",
  },
  {
    "Code": "01200",
    "Area": "Clitheroe",
  },
  {
    "Code": "01202",
    "Area": "Bournemouth",
  },
];

$(document).ready(function () {
  var html = '<table class="table table-bordered table-responsive table-blue table-lookup" id="myTable">';
  html += '<tr>';
  var flag = 0;
  $.each(data[0], function (index, value) {
    html += '<th>' + index + '</th>';
  });
  html += '</tr>';
  $.each(data, function (index, value) {
    html += '<tr>';
    $.each(value, function (index2, value2) {
      html += '<td>' + value2 + '</td>';
    });
    html += '<tr>';
  });
  html += '</table>';
  $('#tableData').html(html);
});

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