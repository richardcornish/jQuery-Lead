# jQuery Lead

**jQuery Lead** is a jQuery plugin that styles an arbitrary leading number of words, creating a professional appearance like those in newspapers and magazines.

Although CSS has [pseudo-elements](http://www.w3.org/TR/CSS2/selector.html#pseudo-element-selectors) such as [:first-line](http://www.w3.org/TR/CSS2/selector.html#first-line-pseudo) and [:first-letter](http://www.w3.org/TR/CSS2/selector.html#first-letter), it continues to lack the ability to select and style and arbitrary number of words from the beginning of a paragraph.

## Demo

[Please see the demo](http://richardcornish.github.io/jQuery-Lead/) to see these examples in action.

    // Demo 1: Default options
    $('.article-1').lead();

    // Demo 2: First 10 words
    $('.article-2').lead({ words: 10 });

    // Demo 3: `<span>` with class of `run-in`
    $('.article-3').lead({ classname: 'run-in' });

    // Demo 4: Disable default style
    $('.article-4').lead({ style: false });

## Installation

1. Link to jQuery:

        <script src="/path/to/jquery.min.js"></script>

2. Link to the plugin:

        <script src="/path/to/jquery.lead.min.js"></script>

3. Call the plugin:

        $(document).ready(function(){
            $('article').lead();
        });

## Options

The plugin comes with reasonable default options: Wrap the first four words in `<span class="caps" />`. Feel free to customize it with these options:

- `words`

    The number of words to wrap, default of `4`

- `classname`

    The string as the class of the `<span>`, default of `'caps'`

- `style`

    A boolean adding a nifty built-in style, default of `true`

The `style` option is to show that the plugin is working. You should probably have a `.caps` selector style with declarations of your own choosing, but the built-in (faked) small caps style is a reasonable choice as well.