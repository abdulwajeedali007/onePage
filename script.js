// Popup Images
$(document).ready(function() {
  $(".gallery").magnificPopup({
    delegate: ".popimg",
    type: "image",
    gallery: {
      enabled: true
    }
  });
  // filter option
  var $gallery = $(".gallery").isotope({});
  $(".filter").on("click", "span", function() {
    var filterValue = $(this).attr("data-filter");

    $gallery.isotope({ filter: filterValue });
  });
  $(".filter").on("click", "span", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
  // smooth scrolling

  var scrolllink = $(".nav-link, .btn2 ");

  scrolllink.click(function(e) {
    e.preventDefault();

    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top - 60
      },
      1000
    );
  });

  // scroll top
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $(".icon_box").fadeIn();
    } else {
      $(".icon_box").fadeOut();
    }
  });
  $(".icon_box a").click(function(e) {
    e.preventDefault();

    $("body,html").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });
});
