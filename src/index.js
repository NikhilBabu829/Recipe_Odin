import {sectionOne ,sectionTwo, sectionThree} from './frontPage.js'
import {navbar} from './NavBar.js'
import {Menu} from './MenuPage.js'
import "./style.css"

const content = document.querySelector('#content');
const body = document.querySelector('body');

const navBar = navbar()
const section_one = sectionOne()
const section_two = sectionTwo()
const section_three = sectionThree()
const menu = Menu()

content.append(navBar)
content.append(section_one)
content.append(section_two)
content.append(section_three)

const btn = document.querySelectorAll('.menu_btn');
const menuBtn = document.querySelector('.navMenu_btn')
const home = document.querySelector('.home')

btn.forEach(function(ele){
    ele.addEventListener('click', () =>{
        content.removeChild(section_one)
        content.removeChild(section_two)
        content.removeChild(section_three)
        content.append(menu)
    })
})

home.addEventListener('click', () =>{
    content.removeChild(menu)
    content.append(section_one)
    content.append(section_two)
    content.append(section_three)
})

menuBtn.addEventListener('click', () =>{
    content.removeChild(section_one)
    content.removeChild(section_two)
    content.removeChild(section_three)
    content.append(menu)
})
