// THIS IS FOR THE CHANGING OF THE HEADER BACKGROUND 
const header = document.getElementById("header")
const arrLeft = document.querySelector(".header__arr-left") 
const arrRight = document.querySelector(".header__arr-right")
const headerHeading = document.querySelector(".header__heading")
const headerHeadingTop = document.querySelector(".header__heading1-top")
const headerHeadingBottom = document.querySelector(".header__heading1-bottom")
const headerWriteup = document.querySelector(".header__heading-writeup")

const imgSlide = [
    {
        bgImg: "url(images/mount.jpg)",
        headingTop: "We can change",
        headingBottom: "your digital world",
        writeup: "Bold enough to blow a hole in your next marketing campaign."
    },

    {
        bgImg: "url(images/train.webp)",
        headingTop: "You need",
        headingBottom: "a good partner",
        writeup: "Let us help you realise your true potential."
    },

    {
        bgImg: "url(images/basketball.jpg)",
        headingTop: "Shoot for",
        headingBottom: "the hoop!",
        writeup: "Aiming low is not an option for us."
    }
]

let count = 0

const changeHeaderPropsInterval = setInterval(()=>{
    if(count === imgSlide.length - 1){
        count = 0
    }
    else{count +=1}
    changeHeaderProps()

}, 5000)

header.addEventListener("click", function(){
    clearInterval(changeHeaderPropsInterval)
})

arrRight.addEventListener("click", function(){
    
    if(count === imgSlide.length - 1){
        count = 0
    }
    else{count +=1}
    changeHeaderProps()
})

arrLeft.addEventListener("click", function(){
    if(count === 0){
        count = imgSlide.length - 1
    }
    else{count -=1}
    changeHeaderProps()
    
})

function changeHeaderProps(){
    header.style.backgroundImage = imgSlide[count].bgImg;
    headerHeading.style.animation = "textAppear 1000ms ease-out"
    headerHeadingTop.innerText = imgSlide[count].headingTop;
    headerHeadingBottom.innerText =imgSlide[count].headingBottom;
    headerWriteup.innerText = imgSlide[count].writeup;

    setTimeout(()=>{
        headerHeading.style.animation = ""

    }, 1000)

    
    
}

//////////////////////////////////////////////////////////////////////////

// ANIMATION IN TESTIMONY SECTION

const quotes = document.querySelector(".testimony__para-quote")
const quotees = document.querySelector(".testimony__para-quotee")
const testimony = document.querySelector(".testimony")

const paraQuote = [

    {
        quote: `&ldquo;I don’t like people, but I make an exception for ABC Agency. They’re pretty damn cool.&rdquo;`,

        quotee: `Brian Jones,  America Big Corporation`
    },


    {
        quote: `&ldquo;ABC Agency our the best. Not only did they deliver my work on time, they even walked 
        my dog when I was out of town&rdquo;`,

        quotee: `A Smith – Neighbour`
    }
    
]

let quoteCount = 0

let quoteInterval = setInterval(()=>{
    if(quoteCount === paraQuote.length){
        quoteCount = 0
    }

    quotes.innerHTML = paraQuote[quoteCount].quote
    quotees.innerHTML = paraQuote[quoteCount].quotee

    quoteAnimation()

    quoteCount++

}, 5000)


function quoteAnimation(){
    quotes.style.animation = "textAppear 2000ms ease-out"
    quotees.style.animation = "textAppear 2000ms ease-out"

    setTimeout(() => {
        quotes.style.animation = ""
        quotees.style.animation = ""
        
    }, 3500);
}

testimony.addEventListener("click", ()=>{
    clearInterval(quoteInterval)
})

//////////////////////////////////////////////////////////////////////////

//     POP UP SECTION FUNCTIONALITY

const figList = document.querySelectorAll(".gallery__item")
const popup = document.querySelector(".popup")
const popupClose = document.querySelector(".popup__close")
const popupImg = document.querySelector(".popup__img")
const popupArrLeft = document.querySelector(".popup__arr-left")
const popupArrRight = document.querySelector(".popup__arr-right")
const imgList = document.querySelectorAll(".gallery__img")
const subImgList = document.querySelectorAll(".popup__sub-img-item-img")
const galleryPopupList = document.querySelectorAll(".gallery__popup")
const galleryPopupContentList = document.querySelectorAll(".gallery__popup-content")
const galleryPopupContentParaList = document.querySelectorAll(".gallery__popup-content-para")

const imgMoverRight = "img-Mover-right 300ms linear"
const imgMoverLeft = "img-Mover-left 300ms linear"
let target;
let itemNum;

popupClose.addEventListener("click", removePopup)
popupArrRight.addEventListener("click", changeImgRight)
popupArrLeft.addEventListener("click", changeImgLeft)


for(let i =0; i < figList.length; i++){
    figList[i].addEventListener("click", showPopup)
    galleryPopupList[i].num = i
    galleryPopupContentList[i].num = i
    galleryPopupContentParaList[i].num =i
    subImgList[i].num = i
    subImgList[i].addEventListener("click", replaceImg)
}


function showPopup(e){
    popup.style.visibility = "visible";
    popup.style.opacity = 1;

    itemNum = e.target.num
    let clonedImg = imgList[itemNum].cloneNode(true)
    target = clonedImg
    popupImg.appendChild(target);
}

function removePopup(){
    popup.style.visibility = "hidden"
    popup.style.opacity = 0
    popupImg.removeChild(target)
}

function replaceImg(e){
    popupImg.removeChild(target)
    itemNum = e.target.num

    if(itemNum === 0){
        popupArrLeft.style.display = "none"
        popupArrRight.style.display = "block"

    }
    else if(itemNum === figList.length -1){
        popupArrRight.style.display = "none"
        popupArrLeft.style.display = "block"
    }
    else{
        popupArrLeft.style.display = "block"
        popupArrRight.style.display = "block"
        
    }

    let clonedImg = imgList[itemNum].cloneNode(true)
    target = clonedImg
    popupImg.appendChild(target);
}

function changeImgRight(){
    popupImg.removeChild(target)

    itemNum++
    if(itemNum >= figList.length-1){

        popupArrRight.style.display = "none"

        itemNum = figList.length-1
    }
    else if(itemNum > 0){
        popupArrLeft.style.display = "block"
    }

    let clonedImg = imgList[itemNum].cloneNode(true)
    target = clonedImg
    popupImg.appendChild(target);

    popupImg.style.animation = imgMoverRight

    setTimeout(() => {
        popupImg.style.animation = ""
        
    }, 600);
}

function changeImgLeft(){
    popupImg.removeChild(target)

    itemNum--

    if(itemNum <= 0){

        popupArrLeft.style.display = "none"

        itemNum = 0
    }
    else if(itemNum < figList.length-1){
        popupArrRight.style.display = "block"
    }

    let clonedImg = imgList[itemNum].cloneNode(true)
    target = clonedImg
    popupImg.appendChild(target);

    console.log(itemNum)

    popupImg.style.animation = imgMoverLeft

    setTimeout(() => {
        popupImg.style.animation = ""
        
    }, 600);
}

//////////////////////////////////////////////////////////////////////////

//     HEADING ANIMATION

const h2s = document.querySelectorAll(".heading2")
const h5s = document.querySelectorAll(".heading5")
const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px"
}

function slider(entries, slideOnScroll){
    entries.forEach(entry => {

        if(!entry.isIntersecting){
            return;
        }
        else{
            entry.target.classList.add("appear")
            slideOnScroll.unobserve(entry.target)
        }
        
    });
    

}

const slideOnScroll = new IntersectionObserver(slider, appearOptions)

h2s.forEach(h2=>{
    slideOnScroll.observe(h2)
})

h5s.forEach(h5=>{
    slideOnScroll.observe(h5)
})

//ANIMATION FOR THE FEATURES BOX

const featuresBoxes = document.querySelectorAll(".features__box")


const slideUpOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -5px 0px"
}

function slideUp(entries, slideOnScroll){
    entries.forEach(entry => {

        if(!entry.isIntersecting){
            return;
        }
        else{
            entry.target.classList.add("goUp")
            slideUpOnScroll.unobserve(entry.target)
        }
        
    });
    

}

const slideUpOnScroll = new IntersectionObserver(slideUp, slideUpOptions)

featuresBoxes.forEach(featuresBox=>{
    slideUpOnScroll.observe(featuresBox)
})
