function imageOpenFullscreen(image) {
	const fullPage = document.getElementById("fullpage");
    fullPage.style.backgroundImage = 'url(' + image.src + ')';
    fullPage.classList.add("active")
}

function imageCloseFullscreen() {
	const fullPage = document.getElementById("fullpage");
    fullPage.classList.remove("active")

}
