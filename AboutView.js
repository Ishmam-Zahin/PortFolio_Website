import { SectionsView } from "./SectionsView";

class About extends SectionsView{
    element = document.querySelector(".about");
    #boxElements = this.element.querySelectorAll(".box_s2");
    #announceElement = this.element.querySelector(".announce_container");
    #observer = new IntersectionObserver(this.#moveBoxes.bind(this), {
        root: document.querySelector(".main_container"),
        threshold: 0.1,
    });

    #moveBoxes(entry){
        entry.forEach((e) => {
            if(e.isIntersecting){
                e.target.style.opacity = "1";
                e.target.style.transform = `translate(0, 0)`;
                this.#observer.unobserve(e.target);
            }
        })
    }
    startView(){
        this.#observer.observe(this.#announceElement);
        this.#boxElements.forEach(element => {
            this.#observer.observe(element);
        })
    }

    resetView(){
        this.#announceElement.style.transform = `translate(0, 100px)`;
        this.#announceElement.style.opacity = "0";
        this.#boxElements.forEach((box) => {
            if(box.classList.contains("box_one")){
                box.style.transform = `translate(-55px, 0)`;
                box.style.opacity = "0";
            }
            if(box.classList.contains("box_two")){
                box.style.transform = `translate(0, -55px)`;
                box.style.opacity = "0";
            }
            if(box.classList.contains("box_three")){
                box.style.transform = `translate(0, 55px)`;
                box.style.opacity = "0";
            }
            if(box.classList.contains("box_four")){
                box.style.transform = `translate(55px, 0)`;
                box.style.opacity = "0";
            }
        })
    }
}

export default new About();