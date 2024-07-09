let prevbtn = document.querySelector("#prev");
let nextbtn = document.querySelector("#next");
let slides = document.querySelectorAll(".slide");
let counter = 0;
const totalSlides = slides.length;

slides.forEach((slide, index) => {
	slide.style.right = `${index * 100}%`;
});

let changeSlide = () => {
	slides.forEach((slide) => {
        slide.style.transform = `translateX(${counter * 100}%)`;
      
		
	});
};

nextbtn.addEventListener("click", () => {
    counter = (counter + 1) % totalSlides;
    changeSlide();
    console.log(counter);
});
prevbtn.addEventListener("click", () => {
    counter = (counter - 1 + totalSlides) % totalSlides;
    changeSlide();
    console.log(counter);
    
});
