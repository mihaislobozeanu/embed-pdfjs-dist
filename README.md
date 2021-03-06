# PDF.js

PDF.js is a Portable Document Format (PDF) library that is built with HTML5.
Our goal is to create a general-purpose, web standards-based platform for
parsing and rendering PDFs.

This is a pre-built version of the PDF.js source code. It is automatically
generated by the build scripts.

See https://github.com/mihaislobozeanu/pdf.js for learning and contributing.

## Installation
    npm install embed-pdfjs-dist

## Introduction
The aim was to create an angular 4 component to view pdfs and use webpack as a bundler.
> <b>Warning!</b> Webpack crashes when you try to embed minified pdfjs files.

## Usage

Copy from `pdf.embeddedviewer.html` the `div.outerContainer` with its content an past it wherever you want.
> <b>Warning!</b> Don't forget to add attribute `dir="ltr"` to `html` tag. Also, you should add locale `<link rel="resource" type="application/l10n" href="locale/locale.properties">`, without it you'll get an wild render.

```js
var pdfjsLib = require('embed-pdfjs-dist');
pdfjsLib.PDFJS.workerSrc = 'public/path/to/pdf.worker.js';
pdfjsLib.PDFJS.webEmbeddedViewerLoad(file); //file can be an url or files raw data.
```

Add new entry in webpack:
```js
	entry: {
		'pdf.worker': 'embed-pdfjs-dist/build/pdf.worker.entry'
	},
```
## To do

Load only once `pdf.worker.js`.


Enjoy,