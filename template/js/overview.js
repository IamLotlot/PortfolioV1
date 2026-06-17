// Function for going back to the home page
document.addEventListener("DOMContentLoaded", () => {
    const homeWrapper = document.querySelector("#home-wrapper");
    
    homeWrapper.addEventListener("click", () => {
        window.location.href = "index.html";
    });
})

// Data storage for the project details
const projectDetails = {
    // WEB data storage
    "web-one": {
        header : ["Study Buddy", "Thesis Project", "2023"],
        banner : "/web/StudyBuddy.png",
        about : "asd sdas dasdas asdas dsadasdasdsadsada dasdasd adsdasdsada asdasdasda adsadasdas adsadasd adsadasda asdasdsada asdasdasd",
        setting : ["Thesis Project", "November 20, 2023", ""],
        tech : ["HTML", "PHP", "CSS", "JavaScript", "SQL", "Paypal API"],
        tools : ["VS Code", "Aseprite", ""],
        gallery : ["", "", ""]
    },
    "web-two": {
        header : ["Web Tool", "Personal Project", ""],
        banner : "",
        about : "",
        setting : ["", "", ""],
        tech : ["", "", ""],
        tools : ["", "", ""],
        gallery : ["", "", ""]
    },
    "web-three": {
        header : ["DCMS", "Personal Project", ""],
        banner : "",
        about : "",
        setting : ["Personal Project", "", ""],
        tech : ["HTML", "PHP", "CSS", "JavaScript", "SQL"],
        tools : ["VS Code", "", ""],
        gallery : ["", "", ""]
    },
    "web-four": {
        header : ["Coffee Scape", "Personal Project", ""],
        banner : "",
        about : "",
        setting : ["Personal Project", "", ""],
        tech : ["HTML", "PHP", "CSS", "JavaScript", "SQL"],
        tools : ["VS Code", "", ""],
        gallery : ["", "", ""]
    },
    "web-five": {
        header : ["Traba Hanap", "Personal Project", ""],
        banner : "",
        about : "",
        setting : ["Personal Project", "", ""],
        tech : ["HTML", "PHP", "CSS", "JavaScript", "SQL"],
        tools : ["VS Code", "", ""],
        gallery : ["", "", ""]
    },
    "web-template": {
        header : ["", "", ""],
        banner : "",
        about : "",
        setting : ["", "", ""],
        tech : ["", "", ""],
        tools : ["", "", ""],
        gallery : ["", "", ""]
    },
    // PIXEL data storage
    "pixel-one": {
        header : ["Spirited Away Train Scene", "Pixel Art", "2025"],
        banner : "",
        about : "",
        setting : ["Pixel Art", "April 04, 2025", ""],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-two": {
        header : ["Finn's Swords", "Pixel Art", "2023"],
        banner : "",
        about : "",
        setting : ["Pixel Art", "September 03, 2023", ""],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-three": {
        header : ["Low Level Dead World", "Pixel Art", "2024"],
        banner : "",
        about : "",
        setting : ["Pixel Art", "September 05, 2024", ""],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-four": {
        header : ["Lotlot's Terraria Set", "Pixel Art", "2023"],
        banner : "",
        about : "",
        setting : ["Pixel Art", "December 21, 2023", ""],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-five": {
        header : ["Crying Jake", "Pixel Art", "2023"],
        banner : "",
        about : "",
        setting : ["Pixel Art", "August 19, 2023", ""],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-six": {
        header : ["Gazer", "Pixel Art", "2024"],
        banner : "",
        about : "",
        setting : ["Pixel Art", "March 23, 2024", ""],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-seven": {
        header : ["My Homie", "Pixel Art", "2023"],
        banner : "",
        about : "",
        setting : ["Pixel Art", "December 21, 2023", ""],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-eight": {
        header : ["Finn", "Pixel Art", "2023"],
        banner : "",
        about : "",
        setting : ["Pixel Art", "November 27, 2023", ""],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-nine": {
        header : ["Jake", "Pixel Art", ""],
        banner : "",
        about : "",
        setting : ["Pixel Art", "November 27, 2023", ""],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-ten": {
        header : ["Princess Bubblegum", "Pixel Art", ""],
        banner : "",
        about : "",
        setting : ["Pixel Art", "", ""],
        tools : ["Aseprite", "November 27, 2023", ""],
        gallery : ["", "", ""]
    },
    // Not applied yet pls apply LATER!!!
    "pixel-eleven": {
        header : ["Ice King", "Pixel Art", "2023"],
        banner : "",
        about : "",
        setting : ["Pixel Art", "November 27, 2023", ""],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-twelve": {
        header : ["The Trio", "Pixel Art", ""],
        banner : "",
        about : "",
        setting : ["Pixel Art", "Febuary 22, 2024", ""],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-thirteen": {
        header : ["Adventure Time Wallpaper", "Pixel Art", "On-Progress"],
        banner : "",
        about : "",
        setting : ["Pixel Art", "On-Progress", ""],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-fourteen": {
        header : ["Food Processing", "Pixel Art", "2024"],
        banner : "",
        about : "",
        setting : ["Pixel Art", "April 03, 2024", ""],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-fifteen": {
        header : ["Guevarra", "Pixel Art", "On-Progress"],
        banner : "",
        about : "",
        setting : ["Pixel Art", "On-Progress", ""],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-template": {
        header : ["", "Pixel Art", ""],
        banner : "",
        about : "",
        setting : ["Pixel Art", "", ""],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    // APP data storage
    "app-one": {
        header : ["", "", ""],
        banner : "",
        about : "",
        setting : ["", "", ""],
        tools : ["", "", ""],
        gallery : ["", "", ""]
    },
    "app-template": {
        header : ["", "", ""],
        banner : "",
        about : "",
        setting : ["", "", ""],
        tools : ["", "", ""],
        gallery : ["", "", ""]
    }
}