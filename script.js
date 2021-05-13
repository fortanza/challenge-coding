// ------------------------  animation Galerie ----------------------------------------------

let galImages = document.querySelectorAll('.grid-content img')

for (let i=0; i<galImages.length; i++){
    let img = galImages[i];
    img.addEventListener('click', showSinglePict, false);
}

function showSinglePict(e) {
    let image = e.target;
    let imageContainer = document.getElementById('galleryContainer');
    let bigImage = imageContainer.querySelector('img');
    bigImage.src = image.src;
    imageContainer.classList.toggle('visible');
    imageContainer.addEventListener('click', closeSinglePict, false)
}

function closeSinglePict(){
    let imageContainer = document.getElementById('galleryContainer');
    imageContainer.classList.toggle('visible');
}