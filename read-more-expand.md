If you want some text that is hidden until a link is clicked, then you can do it by following these instructions

First of all your template will need some javascript to add the functionality. Paste this into the bottom of your footer, just before the <html> tag:

```html
      <!-- More info box -->
    <script type="text/javascript">
    	$(function() {
            $(".moreinfo-content").hide();
            $(".moreinfo").click(function() {
                $(".moreinfo-content",this).toggle("fast");
    	        $(".moreinfo-heading",this).toggleClass("moreinfo-active"); 
    	    });      
    	});
    </script>
```

If you want to, you can add styling so that an arrow appear before the link which twists downwards when it is clicked to expand open. The example below requires the Font Awesome fonts to be installed, which is a handy font because it contains lots of nice symbols. You can do that by visiting https://fontawesome.com/get-started and copying the code it gives you and putting it in your template's header, somewhere inside the <head> tags. 

Then insert the styles below into your <head> also:

```html
<style>
        /* MORE INFO */
        /* More info box */
    	.moreinfo {
    	  cursor: pointer;
    	  border: 0;
    	  box-sizing: border-box;
    	  display: block;
    	  width: 100%;
    	  margin-bottom: 20px;
    	}
    	.moreinfo-heading {
    	    padding-bottom: 1em;
    	  color: #f9461c;
    	  font-size: 1.2em;
    	}
        .moreinfo-heading:before {
            display: inline-block;
            font-family: FontAwesome;
            content: "\f0da";
            padding-right: 0.5rem;
        }
    	.moreinfo-heading.moreinfo-active:before {
            -ms-transform: rotate(90deg);
            -moz-transform: rotate(90deg);
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
            transform-origin: 20% 40%;
    	}
</style>
  
Finally, to make this work, add a text block, then click the Source button and add this HTML:

```html
<div class="moreinfo">
<div class="moreinfo-heading">More information</div>

<div class="moreinfo-content">
<p>More info more info</p>

<p>More info more info</p>

<p>More info more info</p>

<p>More info more info</p>
</div>
</div>
```

Any HTML that appears between the moreinfo-content div will be hidden until the moreinfo-heading is clicked.
