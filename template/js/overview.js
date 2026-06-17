document.addEventListener("DOMContentLoaded", () => {
    const homeWrapper = document.querySelector("#home-wrapper");
    
    homeWrapper.addEventListener("click", () => {
        window.location.href = "index.html";
    });
})