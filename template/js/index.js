// Click and hover functions for the social media icons

const icons = document.querySelectorAll(".media-icons");

const iconData = {
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

icons.forEach(icon => {
    const id = icon.id;
    // Hover in
    icon.addEventListener("mouseenter", () => {
        icon.src = iconData[id].hover;
    });
    // Hover out
    icon.addEventListener("mouseleave", () => {
        icon.src = iconData[id].default;
    });
    // Click
    icon.addEventListener("click", () => {
        const confirmed = confirm(`Go to ${iconData[id].link}?`);
        if (confirmed){
            window.location.href = iconData[id].link;
        }
    });
});

// Hover function for projects
$(document).ready(function() {
    $('.projects').hover(
      function() {
        $(this).find('h3, h4, h5').css('display', 'block');
      },
      function() {
        $(this).find('h3, h4, h5').css('display', 'none');
      }
    );
  });

// Hover funtion for the skills button


// Click function for the skills button
$(document).ready(function() {
    $(".language-buttons").click(function() {
        id = $(this).attr("id");
        
        switch(id){
            case "html":
                $(this).attr("src", "../assets/img/icons/HTML-Icon-Clicked.png");
                $("#css").attr("src", "../assets/img/icons/CSS-Icon.png");
                $("#javascript").attr("src", "../assets/img/icons/Javascript-Icon.png");
                $("#php").attr("src", "../assets/img/icons/PHP-Icon.png");
                $("#sql").attr("src", "../assets/img/icons/SQL-Icon.png");
                $("#java").attr("src", "../assets/img/icons/Java-Icon.png");
                $("#cSharp").attr("src", "../assets/img/icons/C%23-Icon.png");
                $("#python").attr("src", "../assets/img/icons/Python-Icon.png");

                displaySkill(id);
            break;

            case "css":
                $("#html").attr("src", "../assets/img/icons/HTML-Icon.png");
                $(this).attr("src", "../assets/img/icons/CSS-Icon-Clicked.png");
                $("#javascript").attr("src", "../assets/img/icons/Javascript-Icon.png");
                $("#php").attr("src", "../assets/img/icons/PHP-Icon.png");
                $("#sql").attr("src", "../assets/img/icons/SQL-Icon.png");
                $("#java").attr("src", "../assets/img/icons/Java-Icon.png");
                $("#cSharp").attr("src", "../assets/img/icons/C%23-Icon.png");
                $("#python").attr("src", "../assets/img/icons/Python-Icon.png");

                displaySkill(id);
            break;
            
            case "javascript":
                $("#html").attr("src", "../assets/img/icons/HTML-Icon.png");
                $("#css").attr("src", "../assets/img/icons/CSS-Icon.png");
                $(this).attr("src", "../assets/img/icons/Javascript-Icon-Clicked.png");
                $("#php").attr("src", "../assets/img/icons/PHP-Icon.png");
                $("#sql").attr("src", "../assets/img/icons/SQL-Icon.png");
                $("#java").attr("src", "../assets/img/icons/Java-Icon.png");
                $("#cSharp").attr("src", "../assets/img/icons/C%23-Icon.png");
                $("#python").attr("src", "../assets/img/icons/Python-Icon.png");

                displaySkill(id);
            break;
            
            case "php":
                $("#html").attr("src", "../assets/img/icons/HTML-Icon.png");
                $("#css").attr("src", "../assets/img/icons/CSS-Icon.png");
                $("#javascript").attr("src", "../assets/img/icons/Javascript-Icon.png");
                $(this).attr("src", "../assets/img/icons/PHP-Icon-Clicked.png");
                $("#sql").attr("src", "../assets/img/icons/SQL-Icon.png");
                $("#java").attr("src", "../assets/img/icons/Java-Icon.png");
                $("#cSharp").attr("src", "../assets/img/icons/C%23-Icon.png");
                $("#python").attr("src", "../assets/img/icons/Python-Icon.png");

                displaySkill(id);
            break;
            
            case "sql":
                $("#html").attr("src", "../assets/img/icons/HTML-Icon.png");
                $("#css").attr("src", "../assets/img/icons/CSS-Icon.png");
                $("#javascript").attr("src", "../assets/img/icons/Javascript-Icon.png");
                $("#php").attr("src", "../assets/img/icons/PHP-Icon.png");
                $(this).attr("src", "../assets/img/icons/SQL-Icon-Clicked.png");
                $("#java").attr("src", "../assets/img/icons/Java-Icon.png");
                $("#cSharp").attr("src", "../assets/img/icons/C%23-Icon.png");
                $("#python").attr("src", "../assets/img/icons/Python-Icon.png");

                displaySkill(id);
            break;
            
            case "java":
                $("#html").attr("src", "../assets/img/icons/HTML-Icon.png");
                $("#css").attr("src", "../assets/img/icons/CSS-Icon.png");
                $("#javascript").attr("src", "../assets/img/icons/Javascript-Icon.png");
                $("#php").attr("src", "../assets/img/icons/PHP-Icon.png");
                $("#sql").attr("src", "../assets/img/icons/SQL-Icon.png");
                $(this).attr("src", "../assets/img/icons/Java-Icon-Clicked.png");
                $("#cSharp").attr("src", "../assets/img/icons/C%23-Icon.png");
                $("#python").attr("src", "../assets/img/icons/Python-Icon.png");

                displaySkill(id);
            break;
            
            case "cSharp":
                $("#html").attr("src", "../assets/img/icons/HTML-Icon.png");
                $("#css").attr("src", "../assets/img/icons/CSS-Icon.png");
                $("#javascript").attr("src", "../assets/img/icons/Javascript-Icon.png");
                $("#php").attr("src", "../assets/img/icons/PHP-Icon.png");
                $("#sql").attr("src", "../assets/img/icons/SQL-Icon.png");
                $("#java").attr("src", "../assets/img/icons/Java-Icon.png");
                $(this).attr("src", "../assets/img/icons/C%23-Icon-Clicked.png");
                $("#python").attr("src", "../assets/img/icons/Python-Icon.png");

                displaySkill(id);
            break;
            
            case "python":
                $("#html").attr("src", "../assets/img/icons/HTML-Icon.png");
                $("#css").attr("src", "../assets/img/icons/CSS-Icon.png");
                $("#javascript").attr("src", "../assets/img/icons/Javascript-Icon.png");
                $("#php").attr("src", "../assets/img/icons/PHP-Icon.png");
                $("#sql").attr("src", "../assets/img/icons/SQL-Icon.png");
                $("#java").attr("src", "../assets/img/icons/Java-Icon.png");
                $("#cSharp").attr("src", "../assets/img/icons/C%23-Icon.png");
                $(this).attr("src", "../assets/img/icons/Python-Icon-Clicked.png");

                displaySkill(id);
            break;
        }
    });
  });

// Display the skill details depending on the language button clicked
function displaySkill(language){
    $("#skill-details").css("background-image", "url(../assets/img/icons/Monitor-On.png)");
    $("#skill-image").css("display", "flex");
    $("#details-container").css("display", "block");

    switch(language){
        case "html":
            $("#skill-image").attr("src", "../assets/img/icons/HTML-Container.gif");
            $("#skill-language").text("HTML");
            $("#skill-experience").text("2020-2023 & 2026");
            $("#skill-story").text("My school introduced the basics in my first year college and started to self learn more about HTML and web developement.");
        break;
        
        case "css":
            $("#skill-image").attr("src", "../assets/img/icons/CSS-Container.gif");
            $("#skill-language").text("CSS");
            $("#skill-experience").text("2020-2023 & 2026");
            $("#skill-story").text("I gave more attention in CSS than HTML bacause I love how a UI interface or designs looks stunning.");
        break;

        case "javascript":
            $("#skill-image").attr("src", "../assets/img/icons/Javascript-Container.gif");
            $("#skill-language").text("Javascript");
            $("#skill-experience").text("2020-2023 & 2026");
            $("#skill-story").text("I mostly focus in Javascript in my web development progress as this makes the website more interactive.");
        break;
        
        case "php":
            $("#skill-image").attr("src", "../assets/img/icons/PHP-Container.gif");
            $("#skill-language").text("PHP");
            $("#skill-experience").text("2020-2023 & 2026");
            $("#skill-story").text("Same progress with other languages I used in web development.");
        break;
        
        case "sql":
            $("#skill-image").attr("src", "../assets/img/icons/SQL-Container.gif");
            $("#skill-language").text("SQL");
            $("#skill-experience").text("2018-2023 & 2026");
            $("#skill-story").text("Started to use SQL through PHPMyAdmin when I was in 1st year Senior High School with Java till now with web development.");
        break;
        
        case "java":
            $("#skill-image").attr("src", "../assets/img/icons/Java-Container.gif");
            $("#skill-language").text("Java");
            $("#skill-experience").text("2018-2020");
            $("#skill-story").text("Same starting point with SQL as I used both of them at the same time in my Senior High days.");
        break;
        
        case "cSharp":
            $("#skill-image").attr("src", "../assets/img/icons/C%23-Container.gif");
            $("#skill-language").text("C#");
            $("#skill-experience").text("2023");
            $("#skill-story").text("Started to learn more about game development as this is one of my dream and used Unity along side it but my device cannot keep up so I stopped.");
        break;
        
        case "python":
            $("#skill-image").attr("src", "../assets/img/icons/Python-Container.gif");
            $("#skill-language").text("Python");
            $("#skill-experience").text("2021");
            $("#skill-story").text("Started to learn this from my school but just a few days and continue it for a week for starting a web application through python.");
        break;
    }
}

// Function for the web, pixel and app button on My Projects
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".project-btn");
  const sections = document.querySelectorAll(".projects-list");

  buttons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.id.replace("-btn", "-projects");
    //Color effect on click
    buttons.forEach(btn => btn.classList.remove("active-btn"));
    button.classList.add("active-btn");
    //Show/hide effect on click
    sections.forEach(sec => sec.classList.add("hidden"));
    document.getElementById(target).classList.remove("hidden");
  });
  });
});