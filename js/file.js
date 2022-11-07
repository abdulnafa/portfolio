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
        items: 3
      },
      1000: {
        items: 3
      }
    }
  });

  // Owl Carousel Form Section 
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

  $(".playbtn").on("click", function () {
    $(".overlay").hide();
    $(".aboutCompany").get(0).play();
  });
  $(".submitform").on("click", function () {

    var name = $("#name").val();
    var number = $("#number").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    if (email == '' || subject == '') {
      $("#errorform").html("Email and Subject Field required");
    } else {
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "abdulnafa1122@gmail.com",
        Password: "A4513253055E04025CCBA6B3A383EB4BF5CC",
        To: 'abdulnafa1122@gmail.com',
        From: email,
        Subject: name,
        Body: `<h1>${name}</h1><p>subject</p>`,
      }).then(
        $("#successform").html("Form Submitted Succssfully"),

      );
    }


  });

  $(".part").hover(function () {
      $('.content', this).show(500);
    },
    function () {
      $('.content', this).hide(500);
    });

  // Load More Project  Code 

  $(function () {

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


});