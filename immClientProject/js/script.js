// Run scrollSticky() when the user scrolls on the page
window.onscroll = function () {
    scrollSticky()
};

let navigationBar = document.getElementById("navbar");

//Get the navbar position offset from the top
let stickyOffset = navbar.offsetTop;


function scrollSticky() {
    //Add the sticky class to the navbar when user scrolls to its position
    if (window.pageYOffset >= stickyOffset) {
        navigationBar.classList.add("sticky");
    } else {
        //Remove sticky class when user leaves the position
        navigationBar.classList.remove("sticky");
    }
}
