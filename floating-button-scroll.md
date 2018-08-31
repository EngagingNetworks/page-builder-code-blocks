# Floating button for mobiles to scroll to form
This code will add a button fixed to the bottom of the page for screens less than 600 pixels wide that, when clicked,
will scroll to specified content, such as the second column.

This is useful if you are worried that the left column (which will sit above the right column in narrow screens is obscuring the fields that the supporter needs to complete. 

This code should all be within one code block. Note that you will need to have styled .button

The button will scroll to the variable specified in $slideTo

```html
<div id="mobileScrollerFooter">
    <a class="button" id="mobileScroller">Sign the letter</a>
</div>
<style>
    @media only screen and (min-width: 600px) {
        .pb div#mobileScrollerFooter {
            display: none;
        }
    }
    .en__component--codeblock div#mobileScrollerFooter {
        position: fixed;
        bottom: 0;
        background-color: #fff;
        width: 100%;
        padding: 1rem;
        border-top: 1px solid #555;
        z-index: 1000;
        text-align: center;
        box-sizing: border-box;
    }
    .en__component--codeblock a#mobileScroller {
        cursor: pointer;
    }
</style>
<script>
    $( document ).ready(function() {
        // The floating button
        var $floatingButton = $(".en__component--codeblock div#mobileScrollerFooter");
        // Where the floating button should slide to
        var $slideTo = $(".en__component--column--2");
        var $slideToPosition = $slideTo.position();
        // Check window width
        if ( $( document ).width() > 600 ) {
            $floatingButton.hide();
        } else {
            // If button clicked, scroll
            $floatingButton.find(".button").click(function() {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $slideTo.offset().top
                }, 2000);
            });
            // Hide button if just above or below target
            $(window).scroll(function(){
                if ( $(window).scrollTop() > ( $slideToPosition.top - 200 ) ) {
                    $floatingButton.slideUp("slow");
                } else {
                    $floatingButton.slideDown("slow");
                }
                
            });
        }
    });
</script>
```
