const fileInput = Document.getElementById('file-input');
const cookBtn = Document.getElementById('cook-btn');

const toggleVisibility = require('buttonVisibilityToggle');

fileInput.addEventListener('click', toggleVisibility);

module.exports = fileGetter;