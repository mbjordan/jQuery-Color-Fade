/*
  jQuery Color Fade v0.1
  A jQuery plugin to fade the background-color of an element.
  Released under the CC BY 3.0 License (http://creativecommons.org/licenses/by/3.0/)
  https://github.com/matthewbj/jQuery-Color-Fade
*/

(function ($) {
    var methods = {
        init: function (options) {
            var settings = $.extend({
                'fadeColor': 'yellow',
                'fadeTime': 800,
                'delayTime': 600
            }, options);
            var wrapCSS = {
                'position': 'relative',
                'z-index': 1
            },
                fadeCSS = {
                    'height': '100%',
                    'width': '100%',
                    'background-color': settings.fadeColor,
                    'position': 'absolute',
                    'top': 0,
                    'left': 0,
                    'z-index': '-1'
                };
            return this.each(function (i) {
                $(this).css(wrapCSS).append('<div id="colorFadeDiv' + i + '" class="colorFadeClass"></div>');
                $('#colorFadeDiv' + i).css(fadeCSS).delay(settings.delayTime).fadeOut(settings.fadeTime);
            });
        },
        refade: function (options) {
            var settings = $.extend({
                'fadeColor': 'yellow',
                'fadeTime': 800,
                'delayTime': 600
            }, options);
            $(this).find('.colorFadeClass').css('background-color', settings.fadeColor).show().delay(settings.delayTime).fadeOut(settings.fadeTime);
        }
    };
    $.fn.colorFade = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.colorFade');
        }
    };
})(jQuery);
