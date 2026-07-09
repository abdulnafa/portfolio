$(document).ready(function () {
  window.addEventListener("scroll", function () {
    if ($(window).scrollTop() > 600) {
      $(".smallarrowupicon").show();
    } else {
      $(".smallarrowupicon").hide();
    }
  });

  $(".smallarrowupicon").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  $("a[href^='#']").on("click", function (e) {
    var target = $($(this).attr("href"));
    if (target.length) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: target.offset().top - 70 }, 500);
    }
  });

  if ($(".serviceParts.owl-carousel").length) {
    $(".serviceParts.owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        800: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  }

  if ($(".formsection.owl-carousel").length) {
    $(".formsection.owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  }

  $("#contactus").on("submit", function (e) {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#subject").val();

    if (name === "" || email === "" || message === "") {
      e.preventDefault();
      $("#errorform").html("Name, email, and message fields are required.");
      setTimeout(function () {
        $("#errorform").html(" ");
      }, 5000);
      return;
    }

    $("#errorform").html(" ");
    $("#successform").html("Sending your message...");
    $(".submitform").prop("disabled", true).text("SENDING...");
  });

  if (window.location.search.indexOf("sent=true") !== -1 && $("#successform").length) {
    $("#successform").html("Thank you. Your message has been sent.");
  }

  $(".part").hover(function () {
    $(".content", this).show(500);
  }, function () {
    $(".content", this).hide(500);
  });

  $(function () {
    if (!$(".items").length) {
      return;
    }

    var increment = 4;
    var startFilter = 0;
    var endFilter = increment;
    var $this = $(".items");
    var elementLength = $this.find(".item").length;

    $(".listLength").text(elementLength);

    if (elementLength > 2) {
      $(".buttonToogle").show();
    }

    $(".items .item").slice(startFilter, endFilter).addClass("shown");
    $(".shownLength").text(endFilter);
    $(".items .item").not(".shown").hide();
    $(".buttonToogle .showMore").on("click", function () {
      if (elementLength > endFilter) {
        startFilter += increment;
        endFilter += increment;
        $(".items .item").slice(startFilter, endFilter).not(".shown").addClass("shown").toggle(500);
        $(".shownLength").text((endFilter > elementLength) ? elementLength : endFilter);
        if (elementLength <= endFilter) {
          $(this).remove();
          $(".projects button").hide();
        }
      }
    });
  });

  $(".filterBtn").on("click", function () {
    var filter = $(this).data("filter");
    var visibleCount = 0;

    $(".filterBtn").removeClass("active");
    $(this).addClass("active");

    $(".projectCard").each(function () {
      var shouldShow = filter === "all" || $(this).data("category") === filter;
      $(this).toggle(shouldShow);
      if (shouldShow) {
        visibleCount++;
      }
    });

    $(".noResults").toggle(visibleCount === 0);
  });

  $(".openmenu").on("click", function () {
    $(".mobilemenusmall").slideDown();
    $("body").css("overflow-y", "hidden");
  });

  $(".mobilemenusmall ul li").on("click", function () {
    $(".mobilemenusmall").hide();
    $("body").css("overflow-y", "scroll");
  });

  $(".cross").on("click", function () {
    $(".mobilemenusmall").slideUp();
    $("body").css("overflow-y", "scroll");
  });

  if ($(".animatedtext").length && typeof Typed !== "undefined") {
    var typed = new Typed(".animatedtext", {
      strings: [
        "Web Developer<br/>WordPress Expert",
        "Laravel & PHP<br/>Website Builder",
        "AI-Assisted<br/>Frontend Workflow"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });
  }
});
