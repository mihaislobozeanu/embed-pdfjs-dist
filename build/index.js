var pdfjsLib = (typeof window !== 'undefined' ? window : {})['embed-pdfjs-dist/build/pdf'] = require('./pdf.js');
require('./../web/pdf.embeddedviewer.js');
module.exports = pdfjsLib;