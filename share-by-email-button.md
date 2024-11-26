# Add a share by email button to the simple social buttons

The social share channels available are Facebook, Twitter, LinkedIn and WhatsApp. But what if you wanted to add another option to share by email here?

If you add this code to the bottom of the page, below the social buttons then it'll do this for you. Adjust the settings for the email variables for your own content:

Remember to add <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> to the code if you have not already loaded the jQuery library

```html
<script>
$( document ).ready(function() {
    // Email variables
    var emailSubject = "Please take action";
    var emailBody = "I just signed this petition - will you too?";
    var emailIcon = "https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1757/en_share--email.png?v=1535971194000";
    // Encode for the URL
    emailSubject = encodeURIComponent(emailSubject);
    emailBody = encodeURIComponent(emailBody);
    // Make up the HTML of the button
    var emailHREF = "mailto:?subject=" + emailSubject + "&body=" + emailBody;
    var emailHTML = "<a class='en__socialShare en__socialShare--email' style='width: 60px; height: 60px; padding: 12px; margin: 0px;' href='" + emailHREF + "' target='_blank'><img src='" + emailIcon + "' alt='Share by email'></a>"; 
    // Insert the button
    $( ".en__socialShares" ).append( emailHTML );
});
</script>
