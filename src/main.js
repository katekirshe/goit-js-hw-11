import { getImagesByQuery } from "./js/pixabay-api"
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions"


// createGallery()
// clearGallery()
// showLoader()
// hideLoader()

const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = event.target.children[0].children[0].value;
    if (!value.trim().length) {
        return alert("Поле порожнє!!!");
    }
    clearGallery();
    showLoader();
    getImagesByQuery(value).then((data) => {
        createGallery(data.hits)
    }).catch((error) =>{
        console.log(error);
    }).finally(() => {
        hideLoader();
        event.target.reset();
    }); 
})