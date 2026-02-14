export function createGallery(images) {
    const gallery = document.querySelector(".gallery");

    console.log(images);
    

const galleryMarkup = images
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return (`<li class="gallery-item">
            <a class="gallery-link" href="${webformatURL}">
                <img
                    class="gallery-image"
                    src="${webformatURL}"
                    alt="${tags}"
                />
                <ul class="card-info">
                    <li>
                        <div>Likes</div>
                        <div>${likes}</div>
                    </li>
                    <li> <div>Views</div>
                        <div>${views}</div>
                    </li>
                    <li> <div>Comments</div>
                        <div>${comments}</div>
                    </li>
                    <li> <div>Downloads</div>
                        <div>${downloads}</div>
                    </li>
                </ul>
            </a>
        </li>`)
    })
    .join("");


gallery.insertAdjacentHTML('beforeend', galleryMarkup);
};

export function clearGallery() {
    console.log(3);
};

export function showLoader() {
    console.log(4);
};

export function hideLoader() {
    console.log(5);
};

// webformatURL — посилання на маленьке зображення для списку карток у галереї
// largeImageURL — посилання на велике зображення для модального вікна
// tags — рядок з описом зображення. Підійде для атрибута alt
// likes — кількість вподобайок
// views — кількість переглядів
// comments — кількість коментарів
// downloads — кількість завантажень
