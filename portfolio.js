function pageLoaded() {
    var moreButtons = document.getElementsByClassName("more_button");
    Array.from(moreButtons).forEach(elem => {
        elem.addEventListener("click", navToProject) }
    );

    document.getElementById("back_button").addEventListener("click", backToMain);
    
}


const navToProject = function () {
    document.getElementById("main_page_content").style.display = "none";
    document.getElementById("project_page_content").style.display = "flex";
}


const backToMain = function () {
    document.getElementById("main_page_content").style.display = "flex";
    document.getElementById("project_page_content").style.display = "none";
}