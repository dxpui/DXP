document.addEventListener('DOMContentLoaded', () => {
  "use strict";
  // Menu
  const menu = document.querySelector(".menu");
  const menuMain = menu.querySelector(".menu-main");
  const goBack = menu.querySelector(".go-back");
  const menuTrigger = document.querySelector(".mobile-menu-trigger");
  const closeMenu = menu.querySelector(".mobile-menu-close");

  // const showHideMenu = document.querySelectorAll('.menu-item-has-children');
  // for (var i = 0; i < showHideMenu.length; i++) {    
  //   showHideMenu[i].addEventListener("click", function (e) { 

  //     for (var j = 0; j < showHideMenu.length; j++) {
  //         showHideMenu[j].classList.remove("mystyle")
  //     }

  //     if(e.target.classList.contains("mystyle") == true){
  //       e.target.classList.remove("mystyle");
  //     }else{
  //         e.target.classList.add("mystyle");
  //     }      
  //   });
  // }


  let subMenu;
  menuMain.addEventListener("click", (e) => {
    if (!menu.classList.contains("active")) {
      return;
    }
    if (e.target.closest(".menu-item-has-children")) {
      const hasChildren = e.target.closest(".menu-item-has-children");
      showSubMenu(hasChildren);
    }
  });
  goBack.addEventListener("click", () => {
    hideSubMenu();
  })
  menuTrigger.addEventListener("click", () => {
    toggleMenu();
  })
  closeMenu.addEventListener("click", () => {
    toggleMenu();
  })
  document.querySelector(".menu-overlay").addEventListener("click", () => {
    toggleMenu();
  })

  function toggleMenu() {
    menu.classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
  }

  function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    menu.querySelector(".current-menu-title").innerHTML = menuTitle;
    menu.querySelector(".mobile-menu-head").classList.add("active");
  }

  function hideSubMenu() {
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() => {
      subMenu.classList.remove("active");
    }, 300);
    menu.querySelector(".current-menu-title").innerHTML = "";
    menu.querySelector(".mobile-menu-head").classList.remove("active");
  }

  window.onresize = function () {
    if (this.innerWidth > 991) {
      if (menu.classList.contains("active")) {
        toggleMenu();
      }

    }
  }
  // Cliick on Link

  // function myFunction() {
  //   var element = document.getElementById("has-Child");
  //   element.classList.toggle("mystyle");
  // }

  /* Search ****************/
  let searchIcon = document.querySelector('#search-icon');
  let searchForm = document.querySelector('.search-form');

  searchIcon.onclick = () => {
    searchIcon.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
    menu.classList.remove('fa-times');
    // navbar.classList.remove('active');
  }

  window.onscroll = () => {
    menu.classList.remove('fa-times');
    // navbar.classList.remove('active');
    // searchIcon.classList.remove('fa-times');
    //searchForm.classList.remove('active');
  }
});


// for main menu 
$(document).ready(function () {
  $(".menu-item-has-children").click(function () {
    if ($(this).children(".sub-menu").hasClass("sub-menu-show")) {
      $(this).children(".sub-menu").removeClass("sub-menu-show");
      $(this).find(".fa-angle-down").removeClass("rotate-arrow");
      //alert("If"+ $(this).children(".fa-angle-down").text("if"));
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
  if ($(".modal-topic-list li")) {
    showfiltermodal()
  }
  if ($(".clear-filter-btn")) {
    clearmodalcontent()
  }
  $(".filters-content").click(function () {

    $("body").addClass("overflow-x-hidden")

  });
  if ($('#carousel-count .carousel-item')) {
    carouselCount()
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
  console.log("totalItems" + totalItems);
  var currentIndex = $('div.active').index() + 1;
  $('.carouselnumber').html('' + currentIndex + '/' + totalItems + '');
  var myCarousel = document.getElementById('carousel-count');
  myCarousel.addEventListener('slid.bs.carousel', function () {
    currentIndex = $('div.active').index() + 1;
    $('.carouselnumber').html('' + currentIndex + '/' + totalItems + '');
  })
}

/////////////////////////// Lookup Table/////////////////////////////////

//window.onload = function () { searchTable() };
function searchTable() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  var count = 0;
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    tr[i].style.display = "";
    for (var j = 0; j < td.length; j++) {
      txtValue = td[j].textContent || td[j].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        count++;
        break;
      } else {
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