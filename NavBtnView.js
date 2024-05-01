class NavBtnView{
    #navBtnElement = document.querySelector(".navBtn_container");
    #navContainerElement = document.querySelector(".nav_container");

    addEventHandler(handler){
        this.#navBtnElement.addEventListener("click", handler);
    }
    renderNavbar(data){
        if(data.navBarOpen === 0){
            data.navBarOpen = 1;
            this.#openNavbar();
            return;
        }

        if(data.navBarOpen === 1){
            data.navBarOpen = 0;
            this.#closeNavbar();
            return;
        }
    }
    #openNavbar(){
        this.#navBtnElement.children[0].innerHTML = "Close"
        this.#navBtnElement.style.left = "300px"
        this.#navContainerElement.style.left = "0px";
    }

    #closeNavbar(){
        this.#navBtnElement.children[0].innerHTML = "Menu"
        this.#navBtnElement.style.left = "10px"
        this.#navContainerElement.style.left = "-300px";
    }

}

export default new NavBtnView();