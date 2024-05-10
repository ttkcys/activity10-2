$(document).ready(function() {
    var slider = $("#slider").bxSlider({
        auto: true,
        randomStart: true,
        moveSlides: 1,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 250,
        slideMargin: 10,
        pause: 3000,
        onSliderLoad: function(currentIndex) {
            updatePager(currentIndex + 1);
        },
        onSlideBefore: function($slideElement, oldIndex, newIndex) {
            updatePager(newIndex + 1);
        }
    });

    function updatePager(currentSlideNumber) {
        var totalSlides = slider.getSlideCount();
        $('#pager').text(currentSlideNumber + ' / ' + totalSlides);
    }
});
