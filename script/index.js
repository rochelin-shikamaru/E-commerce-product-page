const containerImgThumb = document.querySelectorAll('.container-img-thumb div');
const lightBoxContainerImgThumb = document.querySelectorAll('.lightBox__container-img-thumb div');
const lightBoxSliderImg = document.querySelector(".lightBox__slider-img");
const sliderImg = document.querySelector(".slider-img");
const previous = document.querySelector(".previous");
const lightBoxPrevious = document.querySelector(".lightBox__previous");
const next = document.querySelector(".next");
const lightBoxNext = document.querySelector(".lightBox__next");
const numberCart = document.querySelector(".number-cart");
let i = 1, x = 0;

// slider with image thubmail

/// function to slide image and remove selector
const sliderImageWithThumb = (el, slider, dotActive, active) => {
    el.forEach((item) =>{
        item.addEventListener('click', ()=>{
            document.querySelector(dotActive).classList.remove(active);
            item.classList.add(active);
    
            switch (item.getAttribute("number-image")){
                case "1":{
                    slider.style.transform = "translateX(0)";
                }
                break;
                case "2":{
                    slider.style.transform = "translateX(-100%)";
                }
                break;
                case "3":{
                    slider.style.transform = "translateX(-200%)";
                }
                break;
                default: {
                    slider.style.transform = "translateX(-300%)";
                }
            }
        });
    });
}
sliderImageWithThumb(containerImgThumb, sliderImg, ".img-thumb-active", "img-thumb-active");
sliderImageWithThumb(lightBoxContainerImgThumb, lightBoxSliderImg, ".lightBox__img-thumb-active", "lightBox__img-thumb-active");

// addEventListener to the class next and previous
const handleNextPrevious = (next, previous, slider) => {
    next.onclick = ()=>{  
       document.querySelector(".lightBox__img-thumb-active").classList.remove("lightBox__img-thumb-active");
       if(i < 4){
            slider.style.transform = `translateX(-${ x + 100}%)`;
            i++;
            x = x + 100;
        }
        switch(slider.style.transform){
            case "translateX(-100%)":
                document.querySelector(".lightBox__container-img-thumb").children[1].classList.add("lightBox__img-thumb-active");
            break;
            case "translateX(-200%)":
                document.querySelector(".lightBox__container-img-thumb").children[2].classList.add("lightBox__img-thumb-active");

            break;
            default : 
                document.querySelector(".lightBox__container-img-thumb").children[3].classList.add("lightBox__img-thumb-active");
        }
    }
    previous.onclick = ()=>{
        document.querySelector(".lightBox__img-thumb-active").classList.remove("lightBox__img-thumb-active");
        if(x > 0){
            x = x -100;
            i--;
            slider.style.transform = `translateX(-${x}%)`;
        }
        switch(slider.style.transform){
            case "translateX(0%)":
                document.querySelector(".lightBox__container-img-thumb").children[0].classList.add("lightBox__img-thumb-active");
            break;
            case "translateX(-100%)":
                document.querySelector(".lightBox__container-img-thumb").children[1].classList.add("lightBox__img-thumb-active");
            break;
            case "translateX(-200%)":
                document.querySelector(".lightBox__container-img-thumb").children[2].classList.add("lightBox__img-thumb-active");
            break;
            default : 
                document.querySelector(".lightBox__container-img-thumb").children[3].classList.add("lightBox__img-thumb-active");
        }
    }        

}

handleNextPrevious(next, previous, sliderImg);
handleNextPrevious(lightBoxNext, lightBoxPrevious, lightBoxSliderImg);

// lightbox
/// open lightbox
const openLightBox = ()=>{

     const lightBox = document.querySelector(".lightBox");
     lightBox.style.display = "block";
}
/// close lightbox
const closeLightBox = ()=>{
    document.querySelector(".lightBox").style.display = "none";
}

// function to increment decrement and add cart
/// increment
const handlePlus = ()=>{
    numberCart.innerText++;
    document.querySelector(".coefficient").innerText = numberCart.innerText;
}
/// decrement
const handleMinus = ()=>{
    numberCart.innerText--;
    numberCart.innerText < 1 ? numberCart.innerText = 0 : null
    document.querySelector(".coefficient").innerText = numberCart.innerText;

}
/// cart
const handleShowCart = ()=>{
    const cartActive = document.querySelector(".cart-active");
    cartActive.classList.toggle("cart-active-show");
}
/// add to cart
const handleAddToCart = ()=>{
    let result = 0;
    document.querySelector(".notification").innerText = numberCart.innerText;
    if(numberCart.innerText > 0){
        result = 125 * numberCart.innerText;
        document.querySelector(".notification").style.display = "flex"; 
        document.querySelector(".resultat").innerText = ` $ ${result}`;
        document.querySelector(".cart-active-empty").style.display = "none";
        document.querySelector(".cart-active-item").style.display = "flex";
    }
}
/// delete cart
 const handleDelete = ()=>{
    document.querySelector(".cart-active-item").style.display = "none";
    document.querySelector(".cart-active-empty").style.display = "flex";
    document.querySelector(".notification").style.display = "none"; 
 }

 // handle burger

 const handleBurger = ()=>{
     const burger = document.querySelector(".burger");
     const nav = document.querySelector("nav");
     burger.classList.toggle('active');

    if(burger.classList.contains("active")){
        burger.children[1].style.display = "none";
        burger.children[0].style.display = "block";
        nav.style.transform = "translateX(0)";
    }
    else{
        burger.children[1].style.display = "block";
        burger.children[0].style.display = "none";
        nav.style.transform = "translateX(-100%)";

    }
 }

// fix the transform nav when i resize screen
window.addEventListener('resize', ()=>{
    const nav = document.querySelector("nav");
    const burger = document.querySelector(".burger");

    if(window.innerWidth >= 768){
    nav.style.transform = 'translateX(0)';
    }
    else{
        nav.style.transform = 'translateX(-100%)';
    }
});