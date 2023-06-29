# Shopping list for donation amounts
You might want to have a page that has a "shopping list" or "money-buys" for different amounts chosen, e.g. "£20 could pay for a a water filtration kit". 
This can be done via some JavaScript (using jQuery) and CSS, then a text block with bulleted items where you set the text.

To do that, you need code like this:

```html
<script>
    $( document ).ready(function() {
        // show the shopping list depending on the donation value and whether it is recurring or not:
        const showPrompt = (radioValue, radioRecurring) => {
            console.log("showPrompt called");
            if (radioValue=="Other") {
                radioValue = $("input[name='transaction.donationAmt.other']").val();
            }
            console.log("showPrompt: value=" + radioValue + " recur = " + radioRecurring);
            $('.en__component--copyblock.prompts ul').find('li').each(function () {
                if ( ($(this).data("amount") == radioValue) && ($(this).data("rec") == radioRecurring) ){
                    $(this).css("display","list-item");
                } else {
                    $(this).css("display","none");
                }
            })
        }
        
        // get the values of the amount and recurring-ness
        const checkRadio = () => {
            console.log("checkRadio called");
            const currentRadioValue = $(".en__field--donationAmt input:checked").val();
            const currentRadioRecurring = $(".en__field--recurrpay input:checked").val();
            console.log("checkRadio: value=" + currentRadioValue + " recur = " + currentRadioRecurring);
            showPrompt(currentRadioValue, currentRadioRecurring);
        }       
        
        // call the function on donation amount change
        $(document).on("change",".en__field--donationAmt input",function(){
            console.log("amount change");
            checkRadio();
        });
        
        // call the function on recurring change
        $(document).on("change",".en__field--recurrpay input",function(){
            console.log("recur change");
            checkRadio();
        });
        
        checkRadio();
    });
</script>
```

Then, add this CSS to style the prompts:

```html
<style>
    body#en__pagebuilder .en__component--copyblock.prompts::before {
        /* This only shows in the page-builder so you can edit the text block */
        content: "Edit money-buys prompts (use Source to set the amount and recurring flags)";
        text-align: center;
        font-weight: bold;
        color: #666;
        background-color: #eee;
        padding: 2em;
        display: block;
    }
    .en__component--copyblock.prompts ul {
        padding: 0;
    }
    .en__component--copyblock.prompts li {
        display: none;
        list-style-type: none;
        text-align: center;
    }
</style>
```

Then you add a text block, with a class of "prompts". 
It will look like a bulleted list, but the data-amount and data-rec are set via the HTML (get there using the Source button).
For example, ```<li data-amount="5" data-rec="N">``` will show when the donation amount is 5, and the recurring payment is N:

```html
<ul>
	<li data-amount="5" data-rec="N"><strong>&pound;5 could pay</strong> for xxx...</li>
	<li data-amount="10" data-rec="N"><strong>&pound;10&nbsp;could pay</strong> for xxx...</li>
	<li data-amount="25" data-rec="N"><strong>&pound;25 could pay</strong> for xxx...</li>
	<li data-amount="50" data-rec="N"><strong>&pound;50 could pay</strong> for xxx...</li>
	<li data-amount="100" data-rec="N"><strong>&pound;100 could pay</strong> for xxx...</li>
	<li data-amount="5" data-rec="Y"><strong>&pound;5 could pay</strong> for xxx...</li>
	<li data-amount="10" data-rec="Y"><strong>&pound;10&nbsp;could pay</strong> for xxx...</li>
	<li data-amount="25" data-rec="Y"><strong>&pound;25 could pay</strong> for xxx...</li>
	<li data-amount="50" data-rec="Y"><strong>&pound;50 could pay</strong> for xxx...</li>
	<li data-amount="100" data-rec="Y"><strong>&pound;100 could pay</strong> for xxx...</li>
</ul>
```
