$.fn.progress = function (options) {
    var defaults = { InProgress: 0, Completed: 0 };
    var opt = $.extend(defaults, options);

    function addScale(container, scaleValue, cssClass) {
        // Ignore scale when value is zero.
        if (scaleValue == 0)
            return;

        // Create scale.
        var scale = $('<div/>');
        scale.addClass("scale");
        scale.addClass(cssClass);
        scale.css("width", scaleValue + "%");
        scale.html(scaleValue + "%");

        // Append scale to container.
        container.append(scale);
    }

    return this.each(function () {
        var container = $(this);

        // Remove any data from container.
        container.empty();

        // Truncate to 100%
        if (opt.Completed > 100) opt.Completed = 100;
        if (opt.InProgress > 100) opt.InProgress = 100;
        if (opt.Completed + opt.InProgress > 100)
            opt.InProgress = 100 - opt.Completed;

        // Make container like progress bar.
        container.addClass("progress");
        container.css("width", opt.Width + "px");

        // Add scales.
        addScale(container, opt.Completed, "complete");
        addScale(container, opt.InProgress, "inprogress");

        // Create corners. I don't know why, but it dosn't workt on IE like I need it.
        //container.corner("3px");
    });
};