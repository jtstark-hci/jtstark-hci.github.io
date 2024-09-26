function pageLoaded() {
    var moreButtons = document.getElementsByClassName("project-summary-card");
    Array.from(moreButtons).forEach(elem => {
        elem.addEventListener("click", navToProject) }
    );

    var backButtons = document.getElementsByClassName("back-button");
    Array.from(backButtons).forEach(elem => {
        elem.addEventListener("click", backToMain) }
    );
    
}


const navToProject = function () {
    document.getElementById("main_page_content").style.display = "none";
    document.getElementById(this.id + "_content").style.display = "flex";

    console.log(this.id);
}


const backToMain = function () {
    document.getElementById("main_page_content").style.display = "flex";

    hidePageId = this.id.replace("_back", "_content");
    document.getElementById(hidePageId).style.display = "none";
}