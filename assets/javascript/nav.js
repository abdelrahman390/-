
// ############## window.length ###############
const width = window.innerWidth

let header = document.querySelector('header'),
    lis = document.querySelectorAll("header ul li"),
    burger = document.querySelector('header .max-width .right .links_container .burgerIcon'),
    ul = document.querySelector('header .right .links_container ul'),
    settingIcon = document.querySelector('header .max-width .right .links_container .setting span'),
    settingIconBox = document.querySelector('header .right .links_container .setting .box'),
    settingIconBoxColors = document.querySelectorAll('header .right .links_container .setting .box span');

if (width < 1150) {
    burger.onclick = function burgerClick() {

        if (burger.classList.contains("checked")) {
            burger.classList.remove("checked")
            ul.style.cssText = 'max-height: 0; padding: 0; transition: 1s; display: flex; border-top: 1px solid black;'
            header.style.marginBottom = '0'
            header.style.transition = '1s'
            ul.style.display = 'none'

        } else if (!(burger.classList.contains("checked"))) {
            burger.classList.add("checked")

            if (width < 900) {
                header.style.marginBottom = '320px'
            } else {
                header.style.marginBottom = '90px'
            }

            header.style.transition = '0.7s'

            function headerTimeOut() {
                ul.style.cssText = 'display: flex; max-height: 150px; padding: 25px; transition: 0.5s;  border-top: 1px solid black;'
            }
            setTimeout(headerTimeOut, 500);

        }
    }
}


// let inputs = document.querySelectorAll(".max-width .cont input:not([type=date])")
// let select = document.querySelectorAll(".max-width .cont select")

// for (let i = 0; i < inputs.length; i++) {
//     // console.log(inputs[i].required)
//     if (inputs[i].required === true) {
//         inputs[i].style.cssText = "background-color: red !important;"
//     }
// }

// for (let i = 0; i < select.length; i++) {
//     // console.log(inputs[i].required)
//     if (select[i].required === true) {
//         select[i].style.cssText = "background-color: red !important;"
//     }
// }

// ###########################################################################################################
// let h3 = document.querySelectorAll(".max-width .cont h3")
// let span = document.querySelectorAll(".max-width .cont h3 span")


// span.forEach(element => {
//     element.remove()
// });

// for (let i = 0; i < inputs.length; i++) {
//     if (inputs[i].parentElement.nodeName !== "A") {
//         if (inputs[i].placeholder.trim() === inputs[i].previousElementSibling.innerText.trim()) {
//             inputs[i].style.cssText = "background-color: green !important"
//         } else {
//             inputs[i].style.cssText = "background-color: red !important"
//             // console.log(inputs[i].placeholder)
//             // console.log(inputs[i].previousElementSibling.innerText)
//         }
//     }
// }

// for (let i = 0; i < select.length; i++) {
//     if (select[i].parentElement.nodeName !== "A") {
//         if (select[i].parentElement.children[0].innerText.trim() === select[i].children[0].innerText.trim()) {
//             select[i].style.cssText = "background-color: green !important"
//         } else {
//             select[i].style.cssText = "background-color: red !important"
//             console.log(select[0].parentElement.children[0].innerText)
//             console.log(select[0].children[0].innerText)
//         }
//     }
// }