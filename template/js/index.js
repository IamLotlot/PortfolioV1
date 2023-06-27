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
        $(this).find('h3, h4, img').css('display', 'block');
      },
      function() {
        $(this).find('h3, h4, img').css('display', 'none');
      }
    );
  });