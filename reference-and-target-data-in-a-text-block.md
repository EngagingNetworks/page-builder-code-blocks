Reference data can be inserted inside a target block message, in the contact details area of a target block, or in the background information tab of the block.
If you wish for reference data to show up in a text block then you can insert this into the background information area of the tqarget block first, then use the following code to display it in a text block as well (hiding the background information tab too).
This code works for a three-page email-to-target campaign set-up, where the target block is on Page 2.
1) Add any html, target data inserts and reference data inserts you want to display inside the targetblock's background information area (via the target block's settings) first. 
For example:
```html
<h2>In {contact_data~organization}, there are {reference_data~123~column1} cases of graffiti every year.</h2> 
```
2) Add a Code Block at the bottom of the page with the following code (this assume you have jQuery on your page):
```html
<script>
    $(".en__component--copyblock.referencemessage").html($(".en__contactBackground__text pre").text().trim());
</script> 
<style>
    .en__contactDetails__background {
        display: none !important;
    }
</style> 
```
3) Add a class of "referencemessage" to the text block that should display the html (it will replace everything inside the text block so you can add default text here should the code not work for some reason)
