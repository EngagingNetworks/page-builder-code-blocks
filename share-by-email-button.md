# Add a share by email button to the simple social buttons

The social share channels available are Facebook, Twitter and Google+. But what if you wanted to add another option to share by email here?

If you add this code to the bottom of the page, below the social buttons then it'll do this for you. Adjust the settings for the email variables for your own content:

```html
<script>
$( document ).ready(function() {
    // Email variables
    var emailSubject = "Please take action";
    var emailBody = "I just signed this petition - will you too? https://e-activist.com/page/29856/petition/1";
    var emailIcon = "https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1757/en_share--email.png?v=1535971194000";
    // Encode for the URL
    emailSubject = encodeURIComponent(emailSubject);
    emailBody = encodeURIComponent(emailBody);
    // Make up the HTML of the button
    var emailHREF = "mailto:?subject=" + emailSubject + "&body=" + emailBody;
    var emailHTML = "<div class='en__share en__share--email en__share--simple'><a class='en__share__button en__share__button--simple en__share__button--email' href='" + emailHREF + "' target='_blank'></a></div>";
    // Insert the button
    $( ".en__shares--simple" ).append( emailHTML );
    // Set the style
    $(".en__share__button--email").css("background-image","url('"+emailIcon+"')");
});
</script>
```

For example: https://e-activist.com/page/29856/petition/2?mode=DEMO
