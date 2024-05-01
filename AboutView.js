import { SectionsView } from "./SectionsView";

class About extends SectionsView{
    element = document.querySelector(".about");

    startView(){
        console.log(this.appState)
    }

    resetView(){
        console.log(this)
    }
}

export default new About();