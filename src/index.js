import {sectionOne, sectionTwo, sectionThree} from './frontPage.js'
import "./style.css"

const content = document.querySelector('#content');
content.append(sectionOne())
content.append(sectionTwo())
content.append(sectionThree())
