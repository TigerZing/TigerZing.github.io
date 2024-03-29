svg4everybody();

jQuery(document).ready( function() {

    // Makes all videos responsive.
    jQuery(".the-content").fitVids();

    // Shows the number of search results.
    jQuery('#search-input').on('focus', function() {
        jQuery('.show-results-count').addClass('active');
    });

    // Shows available sharing options.
    jQuery('.share').on('click', function() {
        jQuery(this).addClass('active');
    });

    // Hides available sharing options and the number of search results.
    jQuery(document).on('click focus', function(e) {
        if (jQuery(e.target).closest('.share').length === 0 && jQuery(e.target).closest('#search-input').length === 0) {
            jQuery('.show-results-count').removeClass('active');
            jQuery('.results-container').hide();
            jQuery('.share').removeClass('active');
        }
    });

    // Generates a quick link to the current heading section.
    jQuery('.post-content').find(':header').on({
        mouseenter: function() {
            var headingID = jQuery(this).attr('id');
            jQuery(this).append('<a class="heading-marker" href="#' + headingID + '">&#35;</a>');
        },
        mouseleave: function () {
            jQuery(this).children('a').remove();
        }
    });

    // Automatically sets the first post image as a featured image on Facebook and Twitter.
    var firstImg = jQuery('.post.single').find('img:first-of-type');
    var firstImgSrc = firstImg.attr('src');
    if (typeof firstImgSrc !== 'undefined') {
        jQuery('meta[property="og:image"]').attr('content', firstImgSrc);
        jQuery('meta[name="twitter:image"]').attr('content', firstImgSrc);
    }

    // Menus Show/Hide
    var steveSidebar = jQuery('.user-profile');
    var viewportWidth = window.innerWidth;

    jQuery(window).on('resize', function() {
        viewportWidth = window.innerWidth;
        if (viewportWidth > 768 && steveSidebar.hasClass('active')) {
            steveSidebar.removeClass('active');
            jQuery('.wrapper').removeClass('active');
            jQuery('#toggleBurger').prop('checked', false);
        }
    });

    jQuery('.trigger').on('click', function() {
        steveSidebar.toggleClass('active');
        jQuery('.wrapper').toggleClass('active');
    });
});


// Add slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}