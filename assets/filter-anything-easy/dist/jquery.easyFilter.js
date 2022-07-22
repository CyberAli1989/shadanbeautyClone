/*!
 * EasyFilter v1.0.0
 * The awesome jQuery filter plugin
 * https://github.com/RafaelSilva-RFS/jquery.easyfilter
 *
 * Created by Rafael F. Silva
 *
 * Licensed under the terms of the MIT License
 * https://
 */

;
(function($, window, document, undefined) {
    "use strict";

    // Default options
    var defaults = {
        firstFilter: '*',
        animation: 'slide',
        duration: 400
    }

    // The plugin constructor
    function EasyFilter(element, options) {

        // Merge user settings with default, recursively
        this.options = $.extend(true, {}, defaults, options);


        // Wrap container element
        this.wrap = $(element);

        // Call initial method
        this.init();

    }

    $.extend(EasyFilter.prototype, {


        init: function() {
            var object = this;

            this._addEvents();
            this.filter(object.options.firstFilter);
        },

        filter: function(value) {
            var object = this;

            var showItems = [];
            var hiddeItems = [];

            $(this.wrap).find('[data-easyitem]').each(function() {
                var item = $(this);

                // Compare if the ['data-easyfilter'] is diferent from *
                if (value !== '*') {
                    if (item.attr('data-easyitem') == value) {
                        showItems.push(item[0]);
                    } else {
                        hiddeItems.push(item[0]);
                    }
                } else {
                    showItems.push(item[0]);
                }
            });

            object._toggleItems(hiddeItems, showItems);
        },

        _slideItemsEffect: function(value, showItems) {
            var object = this;
            $(value).slideUp(object.options.duration, function() {
                setTimeout(function() {
                    $.each(showItems, function(index, value) {
                        $(value).slideDown(object.options.duration, function() {});
                    });
                }, 300)
            });
        },

        _fadeItemsEffect: function(value, showItems) {
            var object = this;
            $(value).fadeOut(object.options.duration, function() {
                setTimeout(function() {
                    $.each(showItems, function(index, value) {
                        $(value).fadeIn(object.options.duration, function() {});
                    });
                }, 300)
            });
        },

        _toggleItems: function(hiddeItems, showItems) {
            var object = this;

            // Compare if there is more than one item to hide
            if (hiddeItems.length > 0) {
                // Hide and show item from arrays
                $.each(hiddeItems, function(index, value) {

                    switch (object.options.animation) {
                        case 'slide':
                            object._slideItemsEffect(value, showItems);
                            break;
                        case 'fade':
                            object._fadeItemsEffect(value, showItems);
                            break;
                        default:
                            object._slideItemsEffect(value, showItems);
                    }

                });
            } else {
                //Show all items
                $.each(showItems, function(index, value) {

                    switch (object.options.animation) {
                        case 'slide':
                            $(value).slideDown(object.options.duration, function() {});
                            break;
                        case 'fade':
                            $(value).fadeIn(object.options.duration, function() {});
                            break;
                        default:
                            $(value).slideDown(object.options.duration, function() {});
                    }
                });
            }
        },

        _addEvents: function() {
            var object = this;

            // Click
            $(this.wrap).find('[data-easyfilter]').click(function() {
                object.filter($(this).attr('data-easyfilter'));
            })
        },

    });

    // Easy Filter Wraper
    $.fn.easyFilter = function(options) {
        this.each(function() {
            new EasyFilter(this, options)
        });
    };

})(jQuery, window, document);