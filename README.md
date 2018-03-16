# page-builder: Code Blocks

Code Blocks can contain styles and javascript that only run when you preview or load the live page. They can add extra functionality to your pages.

**Note that these need to be thoroughly tested by you before launching your page! It is functionality outside of the normal operation of the platform.**

Many of these code blocks assume you have the jQuery library loaded in your template. If you do not, then you can add it via a line in your template's `<head>`, e.g.:
  
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```

## Inputs code

Add placeholders within text boxes that match the input's label
https://github.com/EngagingNetworks/page-builder-code-blocks/blob/master/placeholders.html

Do not allow spaces in an email address field
https://github.com/EngagingNetworks/page-builder-code-blocks/blob/master/email-address-do-not-allow-spaces.js

Create and place a random email address - useful for anonymous actions
https://github.com/EngagingNetworks/page-builder-code-blocks/blob/master/anonymous-random-email%20address.js

## Opt-in code

Show and hide an alert if the supporter chooses No for a radio opt-in
https://github.com/EngagingNetworks/page-builder-code-blocks/blob/master/opt-in-text-toggle.html

Pre-tick and hide a checkbox opt-in
https://github.com/EngagingNetworks/page-builder-code-blocks/blob/master/pre-tick-and-hide-checkbox-opt-in.html

Change a checkbox opt-in to a radio on that page only. Good for testing
https://github.com/EngagingNetworks/page-builder-code-blocks/blob/master/convert-opt-in-checkbox-to-radio.md

## Donation pages code

This code chooses the next two available dates on the 1st or 15th of the month
https://github.com/EngagingNetworks/page-builder-code-blocks/blob/master/direct-debits-next-two-possible-dates.html

## Social code

Add a Whatsapp sharing button for mobiles
https://github.com/EngagingNetworks/page-builder-code-blocks/blob/master/whatsapp.html

## Other code
Needs testing - authorise iframes to use cookies
https://github.com/EngagingNetworks/page-builder-code-blocks/blob/master/iframes-in-safari-fix.md
