// let ourServices = document.querySelector('.service_menu')
//
// ourServices.addEventListener('click', function (event) {
//     const clickedBtn = event.target
//    if (clickedBtn.tagName === 'LI') {
//
//         const lastActive = event.currentTarget.querySelector('.active')
//         const tabName = event.target.dataset.tab
//         const tabContentItem = document.querySelector(`.service_options[data-tab="${tabName}"]`)
//         const lastActiveTabContent = document.querySelector('.options_active')
//        if (lastActive !== clickedBtn) {
//            lastActive.classList.remove('active')
//        }
//        if (lastActiveTabContent !== tabContentItem) {
//            lastActiveTabContent.classList.remove('options_active')
//        }
//        tabContentItem.classList.add('options_active')
//        clickedBtn.classList.add('active')
//    }
// })


///////////////////////////     Сервис     /////////////////////////////////////////////////////////////////////////////////





document.querySelectorAll('.service_menu_items').forEach(el => {
    el.addEventListener('click', () => {
        document.querySelectorAll('.service_menu_items').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.service_options').forEach(el => el.classList.remove('options_active'));
        el.classList.add('active');
        document.querySelector(`.service_options[data-tab='${el.dataset.tab}']`).classList.add('options_active');
    })
})



///////////////////////////////////////////////      Галерея     //////////////////////////////////////////////////////////////////////

document.querySelectorAll('.work_menu_items').forEach(el => {
    el.addEventListener('click', () => {
        document.querySelectorAll('.work_menu_items').forEach(el => el.classList.remove('items_active'));
        document.querySelectorAll('.gallery_card').forEach(el => el.classList.remove('card_active'));
        el.classList.add('items_active');
        document.querySelectorAll(`.gallery_card[data-work='${el.dataset.work}']`).forEach(el => el.classList.add('card_active'));

        if (el.dataset.work === 'all') {
            document.querySelectorAll(`.gallery_card[data-work='graphic_design']`).forEach(el => el.classList.add('card_active'))
            document.querySelectorAll(`.gallery_card[data-work='web_design']`).forEach(el => el.classList.add('card_active'))
            document.querySelector('.button_load').style = (display = 'block')
            document.querySelector('.button_load').classList.remove('loader')
        }
        if (el.dataset.work !== 'all') {
            document.querySelector('.work_button').style.display = 'none'
        } else {document.querySelector('.work_button').style = (display = 'block')}
    })

})

document.querySelector('.work_button').addEventListener('click', (event) => {
    event.target.style.display = 'none'

    document.querySelector('.button_load').classList.add('loader')
    let interval = setTimeout(function () {
        document.querySelector('.button_load').style.display = 'none'
        document.querySelectorAll(`.gallery_card[data-work='landing_pages']`).forEach(el => el.classList.add('card_active'))
        document.querySelectorAll(`.gallery_card[data-work='wordpress']`).forEach(el => el.classList.add('card_active'))
    }, 2000)
})



/////////////////////////////////////////////   Карусель    /////////////////////////////////////////////////////////////////////



const feedbackLength = document.querySelectorAll(".client_feedback_items").length

let currentIndex = 0

let leftArrow = document.querySelector(".button_left")
leftArrow.addEventListener("click", function () {
    slide("left")
})
let rightArrow = document.querySelector(".button_right")
rightArrow.addEventListener("click", function () {
    slide("right")
})

let width = document.querySelector(".client_feedback_gallery").offsetWidth

const slider = document.querySelector(".slider")

//////////////////// доработка /////////////////////////

let thumbWidth = "97"
let visibleThumbs = (document.querySelectorAll(".client_carousel_img img").length) - 4


function update () {
    if (currentIndex === 0 || currentIndex < 2) {
        document.querySelector(".client_carousel_img").style.cssText = `transform: translateX(0px)`
    } else if (currentIndex > visibleThumbs) {
        document.querySelector(".client_carousel_img").style.cssText = `transform: translateX(${visibleThumbs * -thumbWidth}px)`
    } else {
        document.querySelector(".client_carousel_img").style.cssText = `transform: translateX(${(currentIndex * -thumbWidth) + 97}px)`

    }
}

//////////////////// доработка ///////////////////////

function slide(direction) {
    switch (direction) {
        case "left":
            if (currentIndex > 0) {
                currentIndex--
                slider.style.cssText = `transform: translateX( ${currentIndex * -width}px)`
                document.querySelectorAll(".client_carousel_img img").forEach((el, index) => {
                    if (index === currentIndex) {
                        el.style.marginBottom = "30px"
                    }
                })
                document.querySelectorAll(".client_carousel_img img").forEach((el, index) => {
                    if (index === currentIndex + 1) {
                        el.style.marginBottom = "0"
                    }
                })
            }
            break;
        case "right":
            currentIndex++
            if (currentIndex < feedbackLength) {
                slider.style.cssText = `transform: translateX( ${currentIndex * -width}px)`
                document.querySelectorAll(".client_carousel_img img").forEach((el, index) => {
                    if (index === currentIndex) {
                        el.style.marginBottom = "30px"
                    }
                })
                document.querySelectorAll(".client_carousel_img img").forEach((el, index) => {
                    if (index === currentIndex - 1) {
                        el.style.marginBottom = "0"
                    }
                })
            } else {currentIndex--}
            break;
        default:
            false;
    }
    update ()
}


document.querySelectorAll(".client_carousel_img img").forEach((el, index) => {
    el.addEventListener('click', () => {
        currentIndex = index
        slider.style.cssText = `transform: translateX( ${currentIndex * -width}px)`


        if (currentIndex === 0 || currentIndex < 2) {                                                               /////////////////  доработка (162-170)    //////////////////////////
            document.querySelector(".client_carousel_img").style.cssText = `transform: translateX(0px)`
        } else if (currentIndex > visibleThumbs) {
            document.querySelector(".client_carousel_img").style.cssText = `transform: translateX(${visibleThumbs * -thumbWidth}px)`
        } else if (currentIndex === visibleThumbs) {
            document.querySelector(".client_carousel_img").style.cssText = `transform: translateX(${(currentIndex * -thumbWidth) + 194}px)`
        } else {
            document.querySelector(".client_carousel_img").style.cssText = `transform: translateX(${(currentIndex * -thumbWidth) + 97}px)`
        }


        document.querySelectorAll(".client_carousel_img img").forEach((el, index) => {
            el.style.marginBottom = "0"
        })
        el.style.marginBottom = "30px"
    })
})




