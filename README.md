# page-builder: Code Blocks

Code Blocks can contain styles and javascript that only run when you preview or load the live page. They can add extra functionality to your pages.

**Note that these need to be thoroughly tested by you before launching your page! It is functionality outside of the normal operation of the platform.**

Many of these code blocks assume you have the jQuery library loaded in your template. If you do not, then you can add it via a line in your template's `<head>`, e.g.:
  
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```
## Where to put the code block
The code block's position is important - if it is responding to a part of the page but it loads before it, it may not work. It is good to position the block at the bottom of your pages. Sometimes, you may want to wrap the code up in a ready event - this is so that it will only fire once the page has fully loaded:

```javascript
$( document ).ready(function() {
    // your code here
});
```

## Inputs code

Add placeholders within text boxes that match the input's label
https://github.com/EngagingNetworks/page-builder-code-blocks/blob/master/placeholders.html

Do not allow spaces in an email address field
https://github.com/EngagingNetworks/page-builder-code-blocks/blob/master/email-address-do-not-allow-spaces.html

Create and place a random email address - useful for anonymous actions
https://github.com/EngagingNetworks/page-builder-code-blocks/blob/master/anonymous-random-email-address.html

Disable the submit button until the supporter presses a key inside the email-to-target message (to force them to edit it)
https://github.com/EngagingNetworks/page-builder-code-blocks/blob/master/disable-submit-until-message-keypress.html

Field masks, e.g. for phone numbers or credit card numbers
https://github.com/EngagingNetworks/page-builder-code-blocks/blob/master/field-masks.html

## Opt-in code

Show and hide an alert if the supporter chooses No for a radio opt-in
https://github.com/EngagingNetworks/page-builder-code-blocks/blob/master/opt-in-text-toggle.html

Pre-tick and hide a checkbox or radio opt-in
https://github.com/EngagingNetworks/page-builder-code-blocks/blob/master/pre-tick-and-hide-opt-in.html

Change a checkbox opt-in to a radio on that page only. Good for testing
https://github.com/EngagingNetworks/page-builder-code-blocks/blob/master/convert-opt-in-checkbox-to-radio.md

## Donation pages code

This code chooses the next two available start dates on the 1st or 15th of the month
https://github.com/EngagingNetworks/page-builder-code-blocks/blob/master/direct-debits-next-two-possible-dates.html

This code chooses the next available start date as the 20th of next month
https://github.com/EngagingNetworks/page-builder-code-blocks/blob/master/direct-debits-next-month-20th.html

## Social code

Change the share icons' simple images to your own images
https://github.com/EngagingNetworks/page-builder-code-blocks/blob/master/social-icons-simple-image-change.html

Add a Whatsapp sharing button for mobiles
https://github.com/EngagingNetworks/page-builder-code-blocks/blob/master/whatsapp.html

## Other

Alert supporters if their browser does not support TLS 1.1 or above (see http://support.engagingnetworks.net/manually-enabling-tls-11-andor-tls-12-protocols-web-browsers for more information)
https://github.com/EngagingNetworks/page-builder-code-blocks/blob/master/tls-checker.html
