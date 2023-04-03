const cookBtn = Document.getElementById('cook-btn');
const fileInput = Document.getElementById('file-input');



function buttonVisibilityToggle() {
    if (cookBtn.classList.contains('btn_invisible')) {
        cookBtn.classList.remove('btn_invisible');
        cookBtn.classList.add('btn_visible');
    } else if (cookBtn.classList.contains('btn_visible')) {
        cookBtn.classList.remove('btn_visible');
        cookBtn.classList.add('btn_invisible');
    }
}

module.exports = buttonVisibilityToggle;