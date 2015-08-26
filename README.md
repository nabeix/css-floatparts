# CSS Floatparts [![Build Status](https://travis-ci.org/nabeix/css-floatparts.svg?branch=master)](https://travis-ci.org/nabeix/css-floatparts)

A set of modal, dialog and tooltip using only CSS3.

## Install

Get floatparts.css or floatparts.min.css from [here](https://github.com/nabeix/css-floatparts/tree/master/build) or bower.

```
<link rel="stylesheet" href="/path/to/floatparts.css">
```

### bower

TODO:

```
bower install css-floatparts
```

## Usage

### Modal

A basic modal is created by adding the `.flp-modal` class to the `<div>`.
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

### Dialog

TODO:

### Tooltip

TODO:

## Development

### Building

We use Node.js, Gulp and sass to build CSS Floatparts.

```
$ git clone git@github.com:nabeix/css-floatparts.git
$ cd css-floatparts
$ gem install sass
$ npm install
$ gulp
```

## License

MIT