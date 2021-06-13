$(window).resize(function () {
    if ($(window).width() >= 980) {

        // when you hover a toggle show its dropdown menu
        $(".navbar .dropdown-toggle").hover(function () {
            $(this).parent().toggleClass("show");
            $(this).parent().find(".dropdown-menu").toggleClass("show");
        });

        // hide the menu when the mouse leaves the dropdown
        $(".navbar .dropdown-menu").mouseleave(function () {
            $(this).removeClass("show");
        });

        // do something here
    }
});
$('.navbar-toggler-icon').click(function() {
    $(this).hide();
    $('.navbar-toggler-close').show();
});
$('.navbar-toggler-close-btn').click(function() {
    $('.navbar-toggler-close').hide();
    $('.navbar-toggler-icon').show();
    $('navbar-collapse ').removeClass('show');
});

// Cookie Page JS to hide div when close button is clicked
function hide(target){document.getElementById(target).style.display = 'none';}