import navBtn from "./NavBtnView.js";
import { appState } from "./module.js";
import home from "./HomeView.js";
import about from "./AboutView.js";


const sections = [home, about];

const navBarController = function (){
    navBtn.renderNavbar(appState);
}

const init = function (){
    navBtn.addEventHandler(navBarController);
    window.addEventListener("hashchange", sectionControler);
    window.addEventListener("load", sectionControler);
}

const sectionControler = function (){
    const hash = window.location.hash;
    if(!hash){
        window.location.hash = "#home";
        return;
    }
    sections.forEach((obj) => {
        if(obj.element.classList.contains(window.location.hash.slice(1))){
            obj.renderElement(appState.sections);
            navBtn.renderNavbar(appState);
        }
        else{
            obj.hideElement();
        }
    })
}

init();