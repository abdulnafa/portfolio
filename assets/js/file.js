$(document).ready(function () {
  window.addEventListener("scroll", (event) => {
    if ($(window).scrollTop() > 600) {
      $(".smallarrowupicon").show();
    } else {
      $(".smallarrowupicon").hide();
    }
  });
  $(".smallarrowupicon").on("click", function () {
    $(window).scrollTop(0);
  });


  // Owl Carousel  Skills

  if ($('.serviceParts.owl-carousel').length) {
    $('.serviceParts.owl-carousel').owlCarousel({
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

  // Owl Carousel Form Section 
  if ($('.formsection.owl-carousel').length) {
    $('.formsection.owl-carousel').owlCarousel({
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
    })
  }

  $(".submitform").on("click", function (e) {
    e.preventDefault();
    var name = $("#name").val();
    var number = $("#number").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    if (email == '' || subject == '') {
      $("#errorform").html("Email and Subject Field required");
      const myTimeout = setTimeout(myGreeting, 5000);

      function myGreeting() {
        $("#errorform").html(" ");
      }

      function myStopFunction() {
        clearTimeout(myTimeout);
      }
    } else {
      // Open the visitor's email client with the message pre-filled.
      // No server or secret token — safe for static GitHub Pages hosting.
      var body =
        "Name: " + name + "\n" +
        "Phone: " + number + "\n" +
        "Email: " + email + "\n\n" +
        subject;
      var mailto = "mailto:developerabdulnafa@gmail.com" +
        "?subject=" + encodeURIComponent("Portfolio Inquiry" + (name ? " from " + name : "")) +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailto;

      $("#successform").html("Opening your email app…");
      setTimeout(function () {
        $("#successform").html(" ");
      }, 7000);
      $('#contactus').trigger("reset");
    }


  });

  $(".part").hover(function () {
      $('.content', this).show(500);
    },
    function () {
      $('.content', this).hide(500);
    });

  // Load More Project  Code ------------------

  $(function () {
    if (!$('.items').length) {
      return;
    }

    // items to show
    var increment = 4;

    var startFilter = 0;
    var endFilter = increment;

    // item selector
    var $this = $('.items');

    var elementLength = $this.find('.item').length;
    $('.listLength').text(elementLength);

    // show/hide the Load More button
    if (elementLength > 2) {
      $('.buttonToogle').show();
    }

    $('.items .item').slice(startFilter, endFilter).addClass('shown');
    $('.shownLength').text(endFilter);
    $('.items .item').not('.shown').hide();
    $('.buttonToogle .showMore').on('click', function () {
      if (elementLength > endFilter) {
        startFilter += increment;
        endFilter += increment;
        $('.items .item').slice(startFilter, endFilter).not('.shown').addClass('shown').toggle(500);
        $('.shownLength').text((endFilter > elementLength) ? elementLength : endFilter);
        if (elementLength <= endFilter) {
          $(this).remove();
          $(".projects button").hide();
        }
      }
    });

  });
  // Load More Project code End -------------------------

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



  // Typing Text 
 

  if ($(".animatedtext").length && typeof Typed !== "undefined") {
    var typed = new Typed(".animatedtext", {
      strings: ["Creative<br/>Work Idea",
      "Creative"],
        
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
  }


});
