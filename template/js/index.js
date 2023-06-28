// Hover functions for the social media icons
$(document).ready(function() {
    var src;
    
    $(".media-icons").hover(function() {
        src = $(this).attr("src");
        id = $(this).attr("id");

        if(id === "facebook-icon"){
            $(this).attr("src", "../assets/img/icons/Facebook-Icon.png");

        }else if(id === "tiktok-icon"){
            $(this).attr("src", "../assets/img/icons/Tiktok-Icon.png");

        }else if(id === "instagram-icon"){
            $(this).attr("src", "../assets/img/icons/Instagram-Icon.png");

        }else if(id === "twitter-icon"){
            $(this).attr("src", "../assets/img/icons/Twitter-Icon.png");

        }else if(id === "github-icon"){
            $(this).attr("src", "../assets/img/icons/Github-Icon.png");
        }
    }, function() {
        $(this).attr("src", src);
    });
  });

// Click functions for the social media icons
$(document).ready(function() {
    $(".media-icons").click(function() {
        id = $(this).attr("id");
        
        if(id === "facebook-icon"){
            var confirmed = confirm("Are you sure you want to be redirect to this link? (https://www.facebook.com/Lotlot.Navea)");

            if(confirmed){
                window.location.href = "https://www.facebook.com/Lotlot.Navea";

            }
        }else if(id === "tiktok-icon"){
            var confirmed = confirm("Are you sure you want to be redirect to this link? (https://www.tiktok.com/@iamlotlot)");

            if(confirmed){
                window.location.href = "https://www.tiktok.com/@iamlotlot";

            }

        }else if(id === "instagram-icon"){
            var confirmed = confirm("Are you sure you want to be redirect to this link? (https://www.instagram.com/jcnaveaaa/)");

            if(confirmed){
                window.location.href = "https://www.instagram.com/jcnaveaaa/";

            }

        }else if(id === "twitter-icon"){
            var confirmed = confirm("Are you sure you want to be redirect to this link? (https://twitter.com/Iam_Lotlot)");

            if(confirmed){
                window.location.href = "https://twitter.com/Iam_Lotlot";

            }
        }else if(id === "github-icon"){
            var confirmed = confirm("Are you sure you want to be redirect to this link? (https://github.com/IamLotlot)");

            if(confirmed){
                window.location.href = "https://github.com/IamLotlot";

            }
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
            break;
        }
    });
  });

// Display the skill details depending on the language button clicked
function displaySkill(){
    
}

