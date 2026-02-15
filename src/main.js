import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = event.target.children[0].children[0].value;
    if (!value.trim().length) {
        iziToast.error({ 
            message: "The field can't be empty!",
            position: 'topRight'
        })
        return 
    }
    clearGallery();
    showLoader();
    getImagesByQuery(value).then((data) => {
        createGallery(data.hits)
    }).finally(() => {
        hideLoader();
        event.target.reset();
    }); 
})