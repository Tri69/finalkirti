const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".Navbar_ul");

hamburger.addEventListener('click', ()=> {
	navbar.classList.toggle("open")
});
const sun = document.querySelector(".sun");

sun.addEventListener('click', () => {
	const sun1 = document.querySelector(".sun")
	sun1.style.backgroundImage = "url('./public/img/moon.svg')"
})

const title = document.querySelector(".title");

setInterval(()=> {
	title.classList.add("color")
	setTimeout(() => {
		title.classList.remove("color")
	}, 1000)
}, 2000)

const light = document.querySelector("#light");
const main = document.querySelector(".main")
light.addEventListener("click", function () {
	main.classList.toggle("mainlight")
})