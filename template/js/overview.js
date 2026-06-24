// Data storage for the project details
const projectDetails = {
    // WEB data storage
    "web-one": {
        header : ["Study Buddy", "Web App", "2023"],
        banner : "../assets/img/thumbnails/web/StudyBuddy.png",
        about : "Study Buddy is a thesis-based web application designed to help students find study partners and collaborate more effectively on specific subjects. The platform allows users to filter and match with other students based on shared academic needs, such as finding a partner for Mathematics or other subjects. It also includes a secure authentication system with enhanced account verification features, including face capture for identity validation and OTP (one-time password) verification via SMS to strengthen account security. These added layers of protection ensure that user accounts are authentic and reduce the risk of fake profiles within the system. In addition to its matching system, users can share and access study notes through a built-in content marketplace. Students are able to upload notes for others to view or purchase using a custom in-platform currency, which can also be earned when submitted content is approved by moderators. Notes can also be shared directly with other students, encouraging collaboration and knowledge exchange. The system further includes features such as real-time chat, a notepad tool, and standard account management functions like login and registration. This project was developed using HTML, CSS, JavaScript, PHP, and MySQL, with PayPal API integration for subscription payments. As the sole programmer, I was responsible for the full development of the system, which significantly improved my skills in full-stack development, security implementation, and third-party API integration.",
        setting : ["School Project", "November 20, 2023", ""],
        tech : ["HTML", "PHP", "CSS", "JavaScript", "SQL", "Paypal API", ""],
        tools : ["VS Code", "Aseprite", ""],
        gallery : ["", "", ""]
    },
    "web-two": {
        header : ["Web Tool", "Web App", "2025"],
        banner : "../assets/img/thumbnails/web/WebTool.png",
        about : "",
        setting : ["Personal Project", "", ""],
        tech : ["HTML", "PHP", "CSS", "Javascript", "SQL"],
        tools : ["VS Code", "", ""],
        gallery : ["", "", ""]
    },
    "web-three": {
        header : ["Dental Clinic Management System", "Web App", "2023"],
        banner : "../assets/img/thumbnails/web/DCMS.png",
        about : "DCMS (Dental Clinic Management System) is a web-based appointment and scheduling system designed to help a dental clinic manage patient bookings more efficiently. The platform allows customers to view available and unavailable dates and time slots in real time, making it easier to schedule appointments without conflicts. Its main feature is an interactive 2D dental chart where users can select one or multiple teeth depending on their concern, and the system automatically identifies and labels the selected teeth to improve communication between the patient and the clinic. The system was built to simplify appointment handling while improving accuracy in identifying dental issues prior to consultation. By combining scheduling functionality with a visual tooth-selection interface, DCMS provides a more intuitive and user-friendly experience for both patients and clinic staff. This project strengthened my understanding of interactive UI development and practical system design focused on real-world use cases in healthcare management.",
        setting : ["School Project", "June 6, 2023", ""],
        tech : ["HTML", "PHP", "CSS", "JavaScript", "SQL"],
        tools : ["VS Code", "Canva", ""],
        gallery : ["", "", ""]
    },
    "web-four": {
        header : ["Coffee Scape", "Web App", "2023"],
        banner : "../assets/img/thumbnails/web/CoffeeScape.png",
        about : "Coffee-Scape is a web-based inventory and billing system designed for a restaurant environment, focusing on streamlining menu management and customer ordering. The application includes essential account features such as login, registration, and user account management. Its core functionality revolves around an interactive menu system where available products can be managed by the administrator, allowing items to be added, updated, or removed based on availability. Customers can browse the menu, add multiple items to a cart, and proceed through a confirmation step to ensure that their selected orders are correct before finalizing. In addition to its ordering system, Coffee-Scape includes a cart validation process that helps ensure order accuracy before checkout. It also features a “Most Selling Products” section displayed with a vertical auto-scrolling animation, creating a dynamic and engaging way to showcase popular items based on sales data. Another key feature is its integrated Google Maps functionality, which provides users with directions from their current location to the restaurant, improving accessibility and convenience. This project enhanced my experience in building practical inventory and ordering systems, particularly in handling data-driven features, UI animations, cart logic, and API integration.",
        setting : ["School Project", "", ""],
        tech : ["HTML", "PHP", "CSS", "JavaScript", "SQL"],
        tools : ["VS Code", "Gimp", ""],
        gallery : ["", "", ""]
    },
    "web-five": {
        header : ["Traba Hanap", "Web App", "2023"],
        banner : "/assets/img/thumbnails/web/TrabaHanap.png",
        about : "TrabaHanap is a local job-searching web application designed to connect users with small and short-term job opportunities within their community. The platform allows employers to post job listings, while job seekers can quickly browse and apply for available positions. To ensure safety and legitimacy, job postings require proper documentation, which is reviewed and authenticated by moderators before being approved. This verification system helps maintain trust and reduces fraudulent job postings on the platform. For job seekers, TrabaHanap offers a fast application process where users can directly apply to jobs and initiate communication with employers once a listing is selected. The system also includes standard account features such as login, registration, and account management, along with a dedicated section that tracks all jobs a user has applied for. This project helped strengthen my understanding of building secure user-driven platforms, particularly in implementing moderation workflows, application tracking systems, and role-based interactions between users and employers.",
        setting : ["School Project", "", ""],
        tech : ["HTML", "PHP", "CSS", "JavaScript", "SQL"],
        tools : ["VS Code", "", ""],
        gallery : ["", "", ""]
    },
    "web-template": {
        header : ["", "Web App", ""],
        banner : "../assets/img/thumbnails/",
        about : "",
        setting : ["", "", ""],
        tech : ["", "", ""],
        tools : ["", "", ""],
        gallery : ["", "", ""]
    },
    // PIXEL data storage
    "pixel-one": {
        header : ["Spirited Away Train Scene", "Pixel Art", "2025"],
        banner : "../assets/img/thumbnails/pixel/Spirited-Away-Train-Scene.gif",
        about : "Spirited Away Train Scene is a pixel art animation inspired by a memorable scene from Spirited Away, featuring characters such as Chihiro, No-Face, Boh in his mouse form, and Zeniba’s Shikigami. The artwork captures a calm and whimsical moment as the characters ride a train across the ocean, emphasizing a peaceful atmosphere and a sense of quiet adventure. The ocean backdrop enhances the serene mood, creating a dreamlike feeling that reflects the emotional tone of the original scene. The animation was created by designing each frame individually using Aseprite, focusing on smooth motion and consistent character expression throughout the sequence. After completing the frame-by-frame artwork, a video editing software was used to compile the frames into a looping GIF. This project helped strengthen my understanding of pixel animation workflows, timing, and storytelling through movement, while also improving my skills in frame consistency and animation composition.",
        setting : ["Pixel Art", "April 04, 2025", "3200 x 1800"],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-two": {
        header : ["Finn's Swords", "Pixel Art", "2023"],
        banner : "../assets/img/thumbnails/pixel/Finn's-Swords.png",
        about : "Finn’s Sword is a pixel art piece inspired by Adventure Time, focusing on Finn and showcasing his main swords throughout the series. The artwork highlights the iconic weapons associated with the character, capturing the adventurous and nostalgic feel of the show. It was created using Aseprite, with attention given to clean pixel detailing and visual consistency to reflect the style and charm of the original animation. This piece was inspired by my appreciation for the cartoon, especially its unique storytelling. Working on this project allowed me to practice pixel art fundamentals such as shape design, shading, and object variation while recreating recognizable elements in a simplified pixel style.",
        setting : ["Pixel Art", "September 03, 2023", "5120 x 2560"],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-three": {
        header : ["Low Level Dead World", "Pixel Art", "2024"],
        banner : "../assets/img/thumbnails/pixel/Halloween-Ghost.png",
        about : "Low Level Dead World is a pixel art piece inspired by Adventure Time, depicting the eerie yet playful ghost dimension where Jake’s death is referenced in the series. The scene showcases various ghostly characters and objects floating within a dim, abandoned environment, capturing the strange afterlife setting of the show. Despite its unsettling theme, the composition still maintains the cartoon’s signature charm and humor through its simplified character designs and whimsical layout. What makes this piece unique is its highly constrained color approach, where an almost single-color palette is used to build the entire environment. Depth, mood, and visual interest are achieved entirely through careful shading, lighting, and contrast rather than multiple colors. Created in Aseprite, this project helped strengthen my understanding of value control, atmospheric design, and how limited palettes can still produce visually rich and expressive scenes.",
        setting : ["Pixel Art", "September 05, 2024", "4100 x 1560"],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-four": {
        header : ["Lotlot's Terraria Set", "Pixel Art", "2023"],
        banner : "../assets/img/thumbnails/pixel/Lotlot's-Terraria-Set.png",
        about : "Lotlot’s Terraria Set is a pixel art equipment set created for a community activity inspired by the game Terraria, where participants were challenged to design their own original armor and weapon sets. The collection includes a complete armor set, weapons, tools, and accessories designed around a unified visual theme. The artwork reflects my favorite color, green, which served as the primary inspiration for the set’s appearance, giving it a vibrant and distinctive identity while maintaining the recognizable style of Terraria’s pixel art. Created in Aseprite, this project focused on designing a cohesive set of game assets that could naturally fit within Terraria’s world. Special attention was given to maintaining consistency across the armor pieces, weapons, and tools while ensuring that each item remained visually unique and recognizable. Through this project, I further developed my skills in pixel art design, color harmony, and creating game-ready assets within the constraints of an established art style.",
        setting : ["Pixel Art", "December 21, 2023", "740 x 360"],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-five": {
        header : ["Crying Jake", "Pixel Art", "2023"],
        banner : "../assets/img/thumbnails/pixel/Adventure-Time.gif",
        about : "Crying Jake is a pixel art recreation of an emotional scene from Adventure Time, inspired by the moment when the Tree House—the home shared by Finn and Jake—is destroyed. The artwork captures Jake in a state of sadness and grief, while BMO comforts him with a gentle embrace. Although the scene is heartbreaking, it also highlights the strong bond between the characters, creating a touching balance between sorrow and warmth. Created in Aseprite, this piece focuses on expressing emotion through character poses, facial expressions, and composition rather than action or complex effects. The contrast between Jake’s sadness and BMO’s comforting presence helps tell the story instantly, even in a single frame. This project allowed me to practice conveying feelings through pixel art while recreating one of the most memorable and heartfelt moments from the series.",
        setting : ["Pixel Art", "August 19, 2023", "1280 x 1280"],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-six": {
        header : ["Gazer", "Pixel Art", "2024"],
        banner : "../assets/img/thumbnails/pixel/Gazer.png",
        about : "",
        setting : ["Pixel Art", "March 23, 2024", "1600 x 1600"],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-seven": {
        header : ["My Homie", "Pixel Art", "2023"],
        banner : "../assets/img/thumbnails/pixel/Feight.png",
        about : "",
        setting : ["Pixel Art", "December 21, 2023", "320 x 320"],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-eight": {
        header : ["Finn", "Pixel Art", "2023"],
        banner : "../assets/img/thumbnails/pixel/Finn-The-Human.gif",
        about : "",
        setting : ["Pixel Art", "November 27, 2023", "320 x 320"],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-nine": {
        header : ["Jake", "Pixel Art", ""],
        banner : "../assets/img/thumbnails/pixel/Jake-The-Dog.gif",
        about : "",
        setting : ["Pixel Art", "November 27, 2023", "320 x 320"],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-ten": {
        header : ["Princess Bubblegum", "Pixel Art", ""],
        banner : "../assets/img/thumbnails/pixel/Princess-Bubblegum.gif",
        about : "",
        setting : ["Pixel Art", "November 27, 2023", "320 x 320"],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-eleven": {
        header : ["Ice King", "Pixel Art", "2023"],
        banner : "../assets/img/thumbnails/pixel/Ice-King.png",
        about : "",
        setting : ["Pixel Art", "November 27, 2023", ""],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-twelve": {
        header : ["The Trio", "Pixel Art", ""],
        banner : "../assets/img/thumbnails/pixel/The-Trio.png",
        about : "",
        setting : ["Pixel Art", "Febuary 22, 2024", "600 x 1000"],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-thirteen": {
        header : ["Adventure Time Wallpaper", "Pixel Art", "On-Progress"],
        banner : "../assets/img/thumbnails/pixel/Adventure-Time-Wallpaper.png",
        about : "",
        setting : ["Pixel Art", "On-Progress", "7200 x 4500"],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-fourteen": {
        header : ["Food Processing", "Pixel Art", "2024"],
        banner : "../assets/img/thumbnails/pixel/Food-Processing-Equipments.png",
        about : "",
        setting : ["Pixel Art", "April 03, 2024", "1920 x 1920"],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    // Not applied yet pls apply LATER!!!
    "pixel-fifteen": {
        header : ["Guevarra", "Pixel Art", "On-Progress"],
        banner : "../assets/img/thumbnails/pixel/Guevarra.png",
        about : "",
        setting : ["Pixel Art", "On-Progress", ""],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    "pixel-template": {
        header : ["", "Pixel Art", ""],
        banner : "../assets/img/thumbnails/pixel/",
        about : "",
        setting : ["Pixel Art", "", ""],
        tools : ["Aseprite", "", ""],
        gallery : ["", "", ""]
    },
    // APP data storage
    "app-one": {
        header : ["Tito Sisig Billing System", "Application", "2020"],
        banner : "../assets/img/thumbnails/app/TSBS.png",
        about : "",
        setting : ["", "", ""],
        tools : ["", "", ""],
        gallery : ["", "", ""]
    },
    "app-template": {
        header : ["", "", ""],
        banner : "../assets/img/thumbnails/app/",
        about : "",
        setting : ["", "", ""],
        tools : ["", "", ""],
        gallery : ["", "", ""]
    }
}

// Function when the load pages the description of the project will be displayed
document.addEventListener("DOMContentLoaded", () => {
    const page = (new URLSearchParams(window.location.search)).get("id");
    const result = page.slice(page.indexOf('-') + 1); // Remove the "project-" from the id
    if (result) {
        updateDetails(projectDetails[result]);
    } else {
        console.log("Failed to Load Project Details");
    }
});

// Displaying the techs
document.addEventListener("DOMContentLoaded", () => {
    const techContainer = document.getElementById("tech-images");
    const page = (new URLSearchParams(window.location.search)).get("id");
    const id = page.slice(page.indexOf('-') + 1); // Remove the "project-" from the id
    const projectType = page.slice(page.indexOf('-') + 1, page.lastIndexOf('-') + 0); // Remove all words and characters except the one between two '-'
    // If the project is not web or app it will remove the tech wrapper
    if(projectType === "pixel"){
        document.getElementById("tech-wrapper").style.display = "none";
        
    } else {
        projectDetails[id].tech.forEach(tech => {
            if(tech){
                const techWrapper = document.createElement("div");
                const techImage = document.createElement("img");
                const techLabel = document.createElement("h3");
                techContainer.appendChild(techWrapper);
                techImage.src = "../assets/img/icons/"+tech.split(/\s+/)[0]+"-Logo-Green.png";
                techWrapper.appendChild(techImage);// Place the new image element into techContainer which is the target parent
                
                techImage.onerror = function (){
                    // techImage.src = "../assets/img/icons/Unknown-Image.png";
                    techImage.style.display = "none";
                }

                techLabel.textContent = tech;
                techWrapper.appendChild(techLabel);// Place the new h3 element into techContainer which is the target parent
            }
        });
    }

    // Displaying the tools
    const toolsContainer = document.getElementById("tool-images");

    projectDetails[id].tools.forEach(tool => {
        if(tool){
            const toolWrapper = document.createElement("div");
            const toolImage = document.createElement("img");
            const toolLabel = document.createElement("h3");
            toolsContainer.appendChild(toolWrapper);
            toolImage.src = "../assets/img/icons/"+tool.split(/\s+/)[0]+"-Logo-Green.png";
            toolWrapper.appendChild(toolImage);// Place the new image element into toolContainer which is the target parent
            
            toolImage.onerror = function (){
                // toolImage.src = "../assets/img/icons/Unknown-Image.png";
                toolImage.style.display = "none";
            }

            toolLabel.textContent = tool;
            toolWrapper.appendChild(toolLabel);// Place the new h3 element into toolContainer which is the target parent
        }
    });
});

// Function for going back to the home page
document.addEventListener("DOMContentLoaded", () => {
    const homeWrapper = document.querySelector("#home-wrapper");
    
    homeWrapper.addEventListener("click", () => {
        window.location.href = "index.html#third-section";
    });
});

// Function for image viewer
document.addEventListener("DOMContentLoaded", () => {
    const bannerImages = document.getElementById("project-banner");
    const activeContainer = document.getElementById("active-image-container");

    bannerImages.addEventListener("click", () => {

        activeSkill = bannerImages.id;
        showActiveImage(bannerImages);

        activeContainer.addEventListener("click", () => {

            hideActiveImage();
        });
    });
});

// ------------------------- Functions -------------------------- //

function updateDetails(result){
    document.getElementById("project-title").textContent = result.header[0];
    document.getElementById("project-type").textContent = result.header[1];
    document.getElementById("project-year").textContent = result.header[2];
    document.getElementById("project-banner").src = result.banner;
    document.getElementById("project-about").textContent = result.about;
    document.getElementById("project-reason").textContent = result.setting[0];
    document.getElementById("date-completed").textContent = result.setting[1];
    document.getElementById("canvas-size").textContent = result.setting[2];

    if (result.setting[2] === ""){
        document.getElementById("setting-three").classList.add("hide-image");
    }
}