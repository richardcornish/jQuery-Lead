/**
 * jQuery Lead https://github.com/richardcornish/jQuery-Lead
 *
 * @author       Richard Cornish <http://richardcornish.com>
 * @version      1.0
 * @description  Styles an arbitrary leading number of words of a paragraph
 *
 *  (c) Richard Cornish, licensed under the MIT License:
 *  http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {

    'use strict';

    $.fn.lead = function (user_options) {

        var defaults, options;

        defaults = {
            words: 4,
            classname: 'caps',
            style: true,
            fontsize: '.875rem',
            texttransform: 'uppercase',
            letterspacing: '.1rem'
        };

        options = $.extend(defaults, user_options);

        return this.each(function () {

            var $el, old, regex, html;

            // Find the first paragraph of the selected element
            $el = $(this).find('p:first');

            // Get the HTML of that paragraph
            old = $el.html();

            // Create a regular expression looking for a "non-space" sequence,
            // probably a word or number with some punctuation, and then a space,
            // and stop after the number of words specified
            regex = new RegExp('((\\S+\\s){' + options.words.toString() + '})');

            // Wrap the match with a `<span class="caps" />`
            html = old.replace(regex, '<span class="' + options.classname + '">$1</span>');

            // Replace the old HTML with the new HTML
            $el.html(html);

            // Style the `<span>` if the style option is true
            if (options.style) {
                $el.find('.' + options.classname).css({
                    'font-size': options.fontsize,
                    'text-transform': options.texttransform,
                    'letter-spacing': options.letterspacing
                });
            }

        });

    };
}(jQuery));