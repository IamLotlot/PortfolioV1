// Hover functions for the social media icons
$(document).ready(function() {
    var src;
    
    $(".media-icons").hover(function() {
        src = $(this).attr("src");
        id = $(this).attr("id");

        if(id === "facebook-icon"){
            $(this).attr("src", "../assets/img/Facebook-Icon.png");

        }else if(id === "tiktok-icon"){
            $(this).attr("src", "../assets/img/Tiktok-Icon.png");

        }else if(id === "instagram-icon"){
            $(this).attr("src", "../assets/img/Instagram-Icon.png");

        }else if(id === "twitter-icon"){
            $(this).attr("src", "../assets/img/Twitter-Icon.png");
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
            var confirmed = confirm("Are you sure you want to be redirect to this link? ()");

            if(confirmed){
                window.location.href = "https://example.com";

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
        }
    });
  });
