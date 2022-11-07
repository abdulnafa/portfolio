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
      Email.send({
        SecureToken: "3d85d2b2-c7c4-4b28-9f28-81f5755d91c0",
        To: 'developerabdulnafa@gmail.com',
        From: 'abdulnafa1122@gmail.com',
        Subject: "Portfolio Mails",
        Body: `Name: ${name} <br/> Number: ${number} <br/> Email: ${email} <br/> Subject: ${subject} `,
      }).then(
        myfunction()


      );

      function myfunction() {
        $("#successform").html("Form Successfully Submited");
        setTimeout(myGreeting2, 3000);

        function myGreeting2() {
          $("#successform").html(" ");
        }
        $('#contactus').trigger("reset");
      }
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