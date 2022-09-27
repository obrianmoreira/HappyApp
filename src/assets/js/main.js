import "bootstrap"

window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');


const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))