import { SectionsView } from "./SectionsView";
import bg_0 from "url:./bg-0.jpg";
import bg_1 from "url:./bg-1.jpg";

class Home extends SectionsView{
    element = document.querySelector(".home");
    #childElement = this.element.querySelector(".info_container");
    #timer=undefined;

    #changeBgImage(){
        console.log("still running");
        if(this.appState.home.currentBgImage === 0){
            this.element.style.opacity = "0";
            setTimeout(() => {
                this.#childElement.style.color = "black";
                this.#childElement.querySelector(".firstP").innerHTML = `Hi,<br> I'm Ishmam`;
                this.element.style.backgroundImage = `url("${bg_0}")`;
                this.element.style.opacity = "1";
                this.#childElement.style.transition = "none";
                this.#childElement.style.top = "50%";
                setTimeout(() => {
                    this.#childElement.style.transition = "top 1s";
                    this.#childElement.style.top = "30%";
                }, 500);
            }, 1000);
            this.appState.home.currentBgImage = (this.appState.home.currentBgImage + 1) % 2;
        }
        else if(this.appState.home.currentBgImage === 1){
            this.element.style.opacity = "0";
            setTimeout(() => {
                this.#childElement.style.color = "white";
                this.#childElement.querySelector(".firstP").innerHTML = `I'm a Web<br> Devloper`;
                this.element.style.backgroundImage = `url("${bg_1}")`;
                this.element.style.opacity = "1";
                this.#childElement.style.transition = "none";
                this.#childElement.style.top = "50%";
                setTimeout(() => {
                    this.#childElement.style.transition = "top 1s";
                    this.#childElement.style.top = "30%";
                }, 500);
            }, 1000);
            this.appState.home.currentBgImage = (this.appState.home.currentBgImage + 1) % 2;
        }
    }
    startView(){
        this.#childElement.style.top = "30%";
        this.#timer = setInterval(this.#changeBgImage.bind(this), 7000);
    }

    resetView(){
        if(this.#timer) clearInterval(this.#timer);
        this.#childElement.style.top = "50%";
    }
}

export default new Home();