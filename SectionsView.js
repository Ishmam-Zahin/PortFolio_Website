export class SectionsView{
    #sectionElements = document.querySelectorAll(".sections");
    appState=undefined;

    renderElement(data){
        this.appState = data;
        this.element.classList.remove("hidden");
        this.startView();
    }

    hideElement(){
        this.element.classList.add("hidden");
        this.resetView();
    }
}