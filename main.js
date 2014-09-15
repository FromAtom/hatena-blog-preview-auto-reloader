var HatenaBlogAutoReloader = function () {
    this.state = false;
};

HatenaBlogAutoReloader.prototype.isEnableExternalPreview = function () {
    var blogicon_external_element = document.querySelector('#ui-id-2 i.blogicon-external');
    var is_display = blogicon_external_element.style.display;

    if (is_display === 'none') {
        return true;
    }
    return false;
};

HatenaBlogAutoReloader.prototype.isUpdateEditarea = function () {
};

HatenaBlogAutoReloader.prototype.reload = function () {
    var blogicon_repeat_element = document.querySelector('#ui-id-2 i.blogicon-repeat');
    var click_event = document.createEvent("MouseEvents");
    click_event.initEvent("click", false, true);
    blogicon_repeat_element.dispatchEvent(click_event);
};

HatenaBlogAutoReloader.prototype.setAutoReloader = function () {
    var blogicon_repeat_element = document.querySelector('#ui-id-2 i.blogicon-repeat');
    var interval_time = 5000;
    var self = this;

    setInterval(function () {
        self.reload();
   }, interval_time);
};

HatenaBlogAutoReloader.prototype.removeAutoReloader = function () {
    console.log('HI!!!');
};

if (typeof hatenaBlogAutoReloader === 'undefined') {
    var hatenaBlogAutoReloader = new HatenaBlogAutoReloader();
    hatenaBlogAutoReloader.setAutoReloader();
}
