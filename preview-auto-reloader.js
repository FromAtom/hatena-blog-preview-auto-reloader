var HatenaBlogAutoReloader = function () {
    this.changed = false;
    this.textarea_updated = false;
    this.prev_editarea = '';

    this.addKeyupEventToEditArea();
    this.isUpdateEditarea();
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
        self.changed = true;
    });
};

HatenaBlogAutoReloader.prototype.reload = function () {
    var is_enable = this.isEnableExternalPreview();
    this.isUpdateEditarea();

    if (this.changed || !this.textarea_updated || !is_enable) {
        this.changed = false;
        return;
    }

    var blogicon_repeat_element = document.querySelector('#ui-id-2 i.blogicon-repeat');
    var click_event = document.createEvent("MouseEvents");
    click_event.initEvent("click", false, true);
    blogicon_repeat_element.dispatchEvent(click_event);

    this.changed = false;
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
