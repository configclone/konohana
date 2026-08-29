
function checkBoxes() {
    const height = window.innerHeight;
    const objects = document.querySelectorAll(".boxes");

    objects.forEach(object => {
        const top = object.getBoundingClientRect().top;

        if (height > top) {
            object.classList.add("show");
        }
    });
}

window.addEventListener("scroll", checkBoxes);

checkBoxes();