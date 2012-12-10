# jQuery Color Fade plugin

### A jQuery plugin to fade the background-color of an element.

View a [JS Bin demo](http://jsbin.com/iqikev/2).

## Use

    $('myElement').colorFade();
    
    // And, with options:   
    $('myElement').colorFade({
        'option': 'value'
    });
    

__Options:__

* __fadeColor__ The color of the background that we are fading out. Can be either:
    * a Hex color: `#000 || #000000`
    * an RGB color: `rgb(155, 155, 155)`
    * or a named color: `blue`
    * Default: `yellow`
* __fadeTime__ The time (in milliseconds) the color will take to fade from 100% to 0% opacity.
    * Integer
    * Default: 800
* __delayTime__ The time (in milliseconds) before the fade effect will start.
    * Integer
    * Default: 600
