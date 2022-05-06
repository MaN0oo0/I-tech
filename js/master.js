//Toggle Spi Class On Icon
document.querySelector(".toggle-settings .fa-gear").onclick = function() {
    //Taggle class Fa- spain for rutation on self
    this.classList.toggle("fa-spin");
    //Taggle

    document.querySelector(".settings-box ").classList.toggle("open");

};

//Back ground option
let BackgroundOption = true;

//var to control intervel
let intervelControl;
//Switch colors
const ColorsLi = document.querySelectorAll(".colors-list li");


ColorsLi.forEach(li => {
    li.addEventListener("click", (e) => {
        console.log(e.target.dataset.color);


        //set color on root
        document.documentElement.style.setProperty('--main--color', e.target.dataset.color);
    });
});

//Switch Background
const randomBackground = document.querySelectorAll(".random-backgrounds span");

//loop on backgrounds

randomBackground.forEach(span => {
    //click on span
    span.addEventListener("click", (e) => {

        //Remove active class foorm all  span
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        //Add active class on self
        e.target.classList.add("active");
        if (e.target.dataset.background === 'yes') {
            BackgroundOption = true;
            RandmizImges();
        } else {
            BackgroundOption = false;
            clearInterval(intervelControl);

        }
    });

});




//Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

//Get Array Of Images
let imagesArray = ["tem1.jpg", "tem2.jpg", "tem3.jpg", "tem4.jpg", "tem5.jpg", "tem6.jpg"];



//Function to randmiz Imges
function RandmizImges() {
    if (BackgroundOption === true) {
        intervelControl = setInterval(() => {

            //Get Random Number
            let randomNumber = Math.floor(Math.random() * imagesArray.length);

            //Charger Background Image Url
            landingPage.style.backgroundImage = 'url("img/' + imagesArray[randomNumber] + '")';


        }, 8000);
    }



}
RandmizImges();








//Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function() {

    //SKILLSoffset top
    let skillOfsetTop = ourSkills.offsetTop;
    //OUTER Hright
    let OuterHeight = ourSkills.offsetHeight;
    //Window Height
    let WindowHeight = window.innerHeight;



    //Window ScrollTop
    let windowScrollTop = this.pageYOffset;
    if (windowScrollTop < (skillOfsetTop + OuterHeight - WindowHeight)) {

        let AllSkills = document.querySelectorAll(".skill-box .skill-progress span");
        AllSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });


    }



};


// Creat PopUp With The Image

let OurGallery = document.querySelectorAll(".gallery img");
OurGallery.forEach(img => {
    img.addEventListener('click', (e) => {
        //  Craet overLay eLMENT
        let overLay = document.createElement("div");

        //Add Class To Overlay
        overLay.className = 'popup-overlay';

        //Apend Overlay to teh body

        document.body.appendChild(overLay);

        //Craet The popup
        let popupBox = document.createElement("div");

        //add class to popup box
        popupBox.className = 'popup-box';

        if (img !== null) {
            //Craeting Heading
            let imgHeading = document.createElement("h3");

            //Creat Text For Heading
            let imgText = document.createTextNode(img.alt);

            //Apend The Text To the Heding
            imgHeading.appendChild(imgText);
            //Apend The Heading To Popup Box
            popupBox.appendChild(imgHeading);
        }
        //Creat Image
        let popupImage = document.createElement("img");

        //Set Image Sorce
        popupImage.src = img.src;
        //add image to popup box
        popupBox.appendChild(popupImage);

        //apend popup box to the body
        document.body.appendChild(popupBox);

        //Creat The Close Span
        let closeButton = document.createElement("span");

        //Craet Close Button text
        let closeButtonText = document.createTextNode("X");

        //apaend text to close button
        closeButton.appendChild(closeButtonText);

        //Add Class to close button
        closeButton.className = 'close-button';

        //add close button to popup box

        popupBox.appendChild(closeButton);
    });
});

//Close popup
document.addEventListener('click', function(e) {
    if (e.target.className == 'close-button') {
        e.target.parentNode.remove();
        //Remove over lay
        document.querySelector(".popup-overlay").remove();
    }
});

//Select all links
const allLinks = document.querySelectorAll(".links a");

function scrollTosomewhere(elements) {
    elements.forEach(ele => {
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}





// Select all bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

scrollTosomewhere(allLinks);
scrollTosomewhere(allBullets);

//ddddd

anime.timeline({ loop: true })
    .add({
        targets: '.ml8 .circle-white',
        scale: [0, 3],
        opacity: [1, 0],
        easing: "easeInOutExpo",
        rotateZ: 360,
        duration: 1100
    }).add({
        targets: '.ml8 .circle-container',
        scale: [0, 1],
        duration: 1100,
        easing: "easeInOutExpo",
        offset: '-=1000'
    }).add({
        targets: '.ml8 .circle-dark',
        scale: [0, 1],
        duration: 1100,
        easing: "easeOutExpo",
        offset: '-=600'
    }).add({
        targets: '.ml8 .letters-left',
        scale: [0, 1],
        duration: 1200,
        offset: '-=550'
    }).add({
        targets: '.ml8 .bang',
        scale: [0, 1],
        rotateZ: [45, 15],
        duration: 1200,
        offset: '-=1000'
    }).add({
        targets: '.ml8',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1400
    });

anime({
    targets: '.ml8 .circle-dark-dashed',
    rotateZ: 360,
    duration: 8000,
    easing: "linear",
    loop: true
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml7 .letter',
        translateY: ["1.1em", 0],
        translateX: ["0.55em", 0],
        translateZ: 0,
        rotateZ: [180, 0],
        duration: 750,
        easing: "easeOutExpo",
        delay: (el, i) => 50 * i
    }).add({
        targets: '.ml7',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });


//uupp
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700
    })
    .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
    }).add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i + 1)
    }).add({
        targets: '.ml11',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml16');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml16 .letter',
        translateY: [-100, 0],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 30 * i
    }).add({
        targets: '.ml16',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });