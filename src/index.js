import {sectionOne, sectionTwo, sectionThree} from './frontPage.js'
import {navbar} from './NavBar.js'
import {Menu} from './MenuPage.js'
import "./style.css"

const content = document.querySelector('#content');
content.append(navbar())
content.append(Menu())
// content.append(sectionOne())
// content.append(sectionTwo())
// content.append(sectionThree())
