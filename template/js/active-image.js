function showActiveImage(image){
    document.getElementById("active-image").src = image.src;
    document.getElementById("active-image-container").classList.add("display-active-image");
    document.body.classList.add("modal-open");
}

function hideActiveImage(){
    document.getElementById("active-image").src = "";
    document.getElementById("active-image-container").classList.remove("display-active-image");
    document.body.classList.remove("modal-open");
}