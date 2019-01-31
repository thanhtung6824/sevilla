const Layout = (function () {
    const handleHeaderScroll = function () {
        const header = $('.page-header');
        $(window).scroll(function () {
            if ($(this).scrollTop() > 250) {
                header.fadeIn('normal');
            } else if ($(this).scrollTop() <= 300) {
                header.hide()
            }
        })
    };

    return {
        init: function () {
            handleHeaderScroll();
        }
    }
}());

jQuery(document).ready(function () {
    Layout.init();
});
