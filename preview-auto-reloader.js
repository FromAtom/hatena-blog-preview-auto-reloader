var HatenaBlogAutoReloader = function () {
    this.inputting = false;
    this.textarea_updated = false;
    this.prev_editarea = '';

    this.addKeyupEventToEditArea();
    this.checkUpdateEditarea();
};

HatenaBlogAutoReloader.prototype.isEnableExternalPreview = function () {
    var blogicon_external_element = document.querySelector('i.preview-in-new-window');
    var is_display = blogicon_external_element.style.display;

    if (is_display === 'none') {
        return true;
    }
    return false;
};

HatenaBlogAutoReloader.prototype.checkUpdateEditarea = function () {
    var editarea = document.querySelector('textarea#body');

    if (this.textarea_updated === true) { return; }

    if (editarea.value === this.prev_editarea) {
        this.prev_editarea = editarea.value;
        this.textarea_updated = false;
    }
    else {
        this.prev_editarea = editarea.value;
        this.textarea_updated = true;
    }
};

HatenaBlogAutoReloader.prototype.addKeyupEventToEditArea = function () {
    var editarea = document.querySelector('textarea#body');
    var self = this;
    editarea.addEventListener("keyup", function () {
        self.inputting = true;
    });
};

HatenaBlogAutoReloader.prototype.reload = function () {
    var is_enable = this.isEnableExternalPreview();
    this.checkUpdateEditarea();

    if (this.inputting || !this.textarea_updated || !is_enable) {
        this.inputting = false;
        return;
    }

    var blogicon_repeat_element = document.querySelector('i.preview-in-new-window');
    var click_event = document.createEvent("MouseEvents");
    click_event.initEvent("click", false, true);
    blogicon_repeat_element.dispatchEvent(click_event);

    this.inputting = false;
    this.textarea_updated = false;
};

HatenaBlogAutoReloader.prototype.enableAutoReloader = function () {
    var interval_time = 1000;
    var self = this;
    this.autoReloader = setInterval(function () {
        self.reload();
    }, interval_time);
};

HatenaBlogAutoReloader.prototype.disableAutoReloader = function () {
    clearInterval(this.autoReloader);
};


if (typeof hatenaBlogAutoReloader === 'undefined') {
    var hatenaBlogAutoReloader = new HatenaBlogAutoReloader();
    hatenaBlogAutoReloader.enableAutoReloader();
}
