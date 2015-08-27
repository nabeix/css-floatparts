# CSS Floatparts [![Build Status](https://travis-ci.org/nabeix/css-floatparts.svg?branch=master)](https://travis-ci.org/nabeix/css-floatparts)

A set of modal, dialog and tooltip using only CSS3.

## Install

Get floatparts.css and floatparts.min.css from [here](https://github.com/nabeix/css-floatparts/tree/master/build) or bower.

```
<link rel="stylesheet" href="/path/to/floatparts.css">
```

### bower

```
bower install floatparts
```

## Usage

### Modal

A modal is created by adding the `.flp-modal` class to any `<div>` element.
The content of the modal should be in the `.flp-modal.content`.
Initially, the modal is hidden. To show the modal, add the `.flp-show` class.

```html
<div class="flp-modal flp-show">
    <div class="content">
        <div class="header">
            <h3>Modal header</h3>
        </div>
        <div class="body">
            Modal body
        </div>
        <div class="footer">
            Modal footer
        </div>
    </div>
</div>

```

`.header`, `.body` and `.footer` are optional.

### Dialog

A dialog is created by adding the `.flp-dialog` class to any `<div>` element.
Initially, the dialog is hidden. To show the dialog, add the `.flp-show` class.

```html
<div class="flp-dialog flp-show">
    <div class="header">
        <h3>Modal header</h3>
    </div>
    <div class="body">
        Modal body
    </div>
    <div class="footer">
        Modal footer
    </div>
</div>

```

`.header`, `.body` and `.footer` are optional.

### Tooltip

A tooltip is created by adding the tooltip base class(e.g. `.flp-tooltip-top`) to any `<span>` or `<div>` element.
And should add the `.tooltip-holder` class to the element has the tooltip.

```html
<div class="flp-tooltip-holder">
    tooltip example
    <span class="flp-tooltip-right flp-enable-hover">tooltip here</span>
</div>
```

As default, show the tooltip by adding the `.flp-show` class to the tooltip base class.
Instead of the `.flp-show` class, the `.flp-enable-hover` class elables the tooltip to show automatically by mouse hover.

### Animations

The `.flp-modal` class and the `.flp-dialog` class supports the following animation classes.

* `.flp-animation-slide-down` (default)
* `.flp-animation-slide-up`
* `.flp-animation-slide-left-in`
* `.flp-animation-slide-right-in`

```html
<div class="flp-dialog flp-animation-slide-left-in">
    ...
</div>

```

To disable default animation, add the `.flp-animation-none` class.

## Development

We use Node.js, Gulp and Sass to build CSS Floatparts.

```
$ git clone git@github.com:nabeix/css-floatparts.git
$ cd css-floatparts
$ gem install sass
$ npm install
$ gulp
```

## License

MIT