$(document).ready(function() {
    $(".share").click(function(event) {
        var width = 575,
            height = 400,
            left = ($(window).width() - width) / 2,
            top = ($(window).height() - height) / 2,
            url = this.href,
            opts = "status=1,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left;

    // reddit is not supposed to open in a popup
    if (!url.startsWith("https://reddit.com")) {
        window.open(url, "share", opts);
        return false;
    } else {
        return true;
    }
})});
