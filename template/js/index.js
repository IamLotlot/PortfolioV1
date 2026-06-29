// Click and hover functions for the SOCIAL MEDIA icons
const mediaData = {
    "facebook-icon": {
        hover : "../assets/img/icons/Facebook-Icon.png",
        default : "../assets/img/icons/Facebook-Icon-Green.png",
        link : "https://www.facebook.com/Lotlot.Navea"
    },
    "tiktok-icon": {
        hover : "../assets/img/icons/Tiktok-Icon.png",
        default : "../assets/img/icons/Tiktok-Icon-Green.png",
        link : "https://www.tiktok.com/@iamlotlot"
    },
    "instagram-icon": {
        hover : "../assets/img/icons/Instagram-Icon.png",
        default : "../assets/img/icons/Instagram-Icon-Green.png",
        link : "https://www.instagram.com/jcnaveaaa/"
    },
    "twitter-icon": {
        hover : "../assets/img/icons/Twitter-Icon.png",
        default : "../assets/img/icons/Twitter-Icon-Green.png",
        link : "https://twitter.com/Iam_Lotlot"
    },
    "github-icon": {
        hover : "../assets/img/icons/Github-Icon.png",
        default : "../assets/img/icons/Github-Icon-Green.png",
        link : "https://github.com/IamLotlot"
    }
};

// Click function for the SKILLS button
const languageData = {
    "html": {
        click : "../assets/img/icons/HTML-Icon-Clicked.png",
        default : "../assets/img/icons/HTML-Icon.png",
        image : "../assets/img/icons/HTML-Container.gif",
        name : "HTML",
        experience : "2020-2023 & 2026",
        story : "My school introduced the basics in my first year college and started to self learn more about HTML and web developement."
    },
    "css": {
        click : "../assets/img/icons/CSS-Icon-Clicked.png",
        default : "../assets/img/icons/CSS-Icon.png",
        image : "../assets/img/icons/CSS-Container.gif",
        name : "CSS",
        experience : "2020-2023 & 2026",
        story : "I gave more attention in CSS than HTML bacause I love how a UI interface or designs looks stunning."
    },
    "javascript": {
        click : "../assets/img/icons/Javascript-Icon-Clicked.png",
        default : "../assets/img/icons/Javascript-Icon.png",
        image : "../assets/img/icons/Javascript-Container.gif",
        name : "Javascript",
        experience : "2020-2023 & 2026",
        story : "I mostly focus in Javascript in my web development progress as this makes the website more interactive."
    },
    "php": {
        click : "../assets/img/icons/PHP-Icon-Clicked.png",
        default : "../assets/img/icons/PHP-Icon.png",
        image : "../assets/img/icons/PHP-Container.gif",
        name : "PHP",
        experience : "2020-2023 & 2026",
        story : "Same progress with other languages I used in web development."
    },
    "sql": {
        click : "../assets/img/icons/SQL-Icon-Clicked.png",
        default : "../assets/img/icons/SQL-Icon.png",
        image : "../assets/img/icons/SQL-Container.gif",
        name : "SQL",
        experience : "2018-2023 & 2026",
        story : "Started to use SQL through PHPMyAdmin when I was in 1st year Senior High School with Java till now with web development."
    },
    "java": {
        click : "../assets/img/icons/Java-Icon-Clicked.png",
        default : "../assets/img/icons/Java-Icon.png",
        image : "../assets/img/icons/Java-Container.gif",
        name : "Java",
        experience : "2018-2020",
        story : "Same starting point with SQL as I used both of them at the same time in my Senior High days."
    },
    "cSharp": {
        click : "../assets/img/icons/C%23-Icon-Clicked.png",
        default : "../assets/img/icons/C%23-Icon.png",
        image : "../assets/img/icons/C%23-Container.gif",
        name : "C#",
        experience : "2023",
        story : "Started to learn more about game development as this is one of my dream and used Unity along side it but my device cannot keep up so I stopped."
    },
    "python": {
        click : "../assets/img/icons/Python-Icon-Clicked.png",
        default : "../assets/img/icons/Python-Icon.png",
        image : "../assets/img/icons/Python-Container.gif",
        name : "Python",
        experience : "2021",
        story : "Started to learn this from my school but just a few days and continue it for a week for starting a web application through python."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const mediaIcons = document.querySelectorAll(".media-icons");

    mediaIcons.forEach(media => {
        const id = media.id;
        // Hover in
        media.addEventListener("mouseenter", () => {
            media.src = mediaData[id].hover;
        });
        // Hover out
        media.addEventListener("mouseleave", () => {
            media.src = mediaData[id].default;
        });
        // Click
        media.addEventListener("click", () => {
            const confirmed = confirm(`Go to ${mediaData[id].link}?`);
            if (confirmed){
                window.location.href = mediaData[id].link;
            }
        });
    });
    // 
    const languageIcons = document.querySelectorAll(".language-buttons");

    let activeSkill = null;

    languageIcons.forEach(language => {
        language.addEventListener("click", () => {

            if (activeSkill === language.id) {
                activeSkill = null;
                resetIcons(languageIcons);
                hideSkillDetails();
                return;
            }

            activeSkill = language.id;

            resetIcons(languageIcons);

            const skill = languageData[language.id];

            if (!skill) return;

            setActiveIcons(language, skill)
            updateSkillUI(skill);
        });
    });

    // Functions for the PROJECT buttons
    const buttons = document.querySelectorAll(".project-btn");
    const sections = document.querySelectorAll(".projects-list");
    const projects = document.querySelectorAll(".projects");

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            const target = button.id.replace("-btn", "-projects");

            buttons.forEach(btn => btn.classList.remove("active-btn"));
            button.classList.add("active-btn");

            sections.forEach(sec => sec.classList.add("hidden"));
            document.getElementById(target).classList.remove("hidden");
        });
    });

    // Functions when the PROJECT is clicked or redirection
    projects.forEach(project => {
        project.addEventListener("click", () => {

            const project_id = project.id;
            window.location.href = "overview.html?id="+project_id;
        });
    });

    const certificateImages = document.querySelectorAll(".certificate-images");
    const activeContainer = document.getElementById("active-image-container");

    certificateImages.forEach(image => {
        image.addEventListener("click", () => {

            // activeSkill = image.id;
            showActiveImage(image.src);

            activeContainer.addEventListener("click", () => {

                hideActiveImage();
            });
        });
    });

    // Function for about me section showing the titles
    const aboutCard = {
        "introduction": {
            title : "Introduction",
            icon : "",
            about : "I'm a Bachelor of Science in Information Technology graduate currently working as a Data Analyst at Accenture. My interest in programming began during my time at Advanced Computer Training School, where I first experienced building simple programs. That early exposure sparked my curiosity and led me to pursue a career in web development and game development.",
            footer : ""
        },
        "journey": {
            title : "My Journey",
            icon : "",
            about : "I enjoy both frontend and backend development, though frontend excites me the most because I love designing and creating interactive user experiences. During college, I developed business systems and explored game development using Godot Engine. Although I didn’t complete my game project, the process deepened my understanding of logic, structure, and creative problem-solving.",
            footer : ""
        },
        "mindset": {
            title : "My Mindset",
            icon : "",
            about : "What sets me apart from other developers is my competitiveness and curiosity. I am naturally driven to achieve the best possible results, and when something catches my interest, I actively study and seek answers until I understand it. That curiosity pushes me to continuously improve, explore new technologies, and strengthen my skills.",
            footer : ""
        },
        "future": {
            title : "Future Goals",
            icon : "",
            about : "Currently, I am refocusing on sharpening my web development expertise while also exploring Artificial Intelligence to stay aligned with the evolving tech landscape. My goal is to grow as a Full Stack Developer or Software Engineer to build scalable, efficient, and meaningful digital solutions.",
            footer : ""
        }
    }
    let letterIndex = 0;
    let typingAnimation = false;

    Object.values(aboutCard).forEach(card => {
        if(card){
            const aboutContainer = document.getElementById("about-container");
            const cardContainer = document.createElement("div");
            const cardIcon = document.createElement("img");
            const cardTitle = document.createElement("h2");
            const cardAbout = document.createElement("h3");
            const cardFooter = document.createElement("img");

            cardContainer.classList.add("about-wrapper");
            cardAbout.classList.add("card-about");

            cardTitle.textContent = card.title;
            cardAbout.textContent = card.about;

            aboutContainer.appendChild(cardContainer);
            cardContainer.appendChild(cardTitle);
            cardContainer.appendChild(cardAbout);

            cardAbout.style.display = "none";

            // Function for about me when a card is clicked it will show
            cardContainer.addEventListener("click", () => {
                if(cardAbout.style.display == "none"){
                    cardAbout.style.display = "flex";

                } else if(cardAbout.style.display == "flex"){
                    cardAbout.style.display = "none";
                }
            });
        }
    });
});

// ------------------------- Useable Functions -------------------------- //

function resetIcons(languageIcons) {
    languageIcons.forEach(lang => {
        const data = languageData[lang.id];
        if (data) lang.src = data.default;
    });
}

function setActiveIcons(language, skill){
    language.src = skill.click;
}

function updateSkillUI(skill){
    document.getElementById("skill-image").src = skill.image;
    document.getElementById("skill-language").textContent = skill.name;
    document.getElementById("skill-experience").textContent = skill.experience;
    document.getElementById("skill-story").textContent = skill.story;

    document.getElementById("skill-details").style.backgroundImage = "url(../assets/img/icons/Monitor-On.png)";
    document.getElementById("skill-image").classList.add("active-skill");
    document.getElementById("details-container").classList.add("active-details");
}

function hideSkillDetails(){
    document.getElementById("skill-details").style.backgroundImage = "url(../assets/img/icons/Monitor-Off.gif)";
    document.getElementById("skill-image").classList.remove("active-skill");
    document.getElementById("details-container").classList.remove("active-details");
}