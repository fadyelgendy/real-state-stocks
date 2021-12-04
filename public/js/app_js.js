// Drop down menus
const dropDownBtns = document.querySelectorAll(".drop_menu_btn");

// Event listeners
dropDownBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        let target = btn.getAttribute('data-target');
        let dropDownBody = document.getElementById(target);

        if (dropDownBody.style.display === 'none'){
            dropDownBody.style.display = "block";
            dropDownBody.style.position = "fixed";
            dropDownBody.style.zIndex = 10;
            dropDownBody.style.marginTop = "-13px";
        } else {
            dropDownBody.style.display = "none";
            dropDownBody.style.position = "";
        }
    });
});