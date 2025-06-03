let imageContainer = document.querySelector(".image-3");
let images = document.querySelectorAll(".image-3 img");
let backBtn1 = document.querySelector(".back-Btn2");
let nextBtn2 = document.querySelector(".next-Btn2");


images[0].style.opacity = "1";

nextBtn2.addEventListener("click" ,() =>{
    imageContainer.style.scrollBehavior = "smooth";
    imageContainer.scrollLeft+= 345;
    images[1].style.opacity = "1";
    images[2].style.opacity = "1";

});

backBtn1.addEventListener("click" ,() =>{
    imageContainer.style.scrollBehavior = "smooth";
    imageContainer.scrollLeft -= 345;
    // images[1].style.opacity = "0";
    images[1].style.opacity = "1";
    images[2].style.opacity = "1"; 
}); 

// section-images
let sectionImages = document.querySelector(".section-images");
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.querySelector(".back-Btn");
let nextBtn = document.querySelector(".next-Btn");

nextBtn.addEventListener("click" ,() =>{
    sectionImages.style.scrollBehavior = "smooth";
    sectionImages.scrollLeft += 300;
});

backBtn.addEventListener("click" ,() =>{
    sectionImages.style.scrollBehavior = "smooth";
    sectionImages.scrollLeft -= 300;
});
