# Select a random target for a custom database ETT

Usually when using a custom database that requires a Match field, you match the target
on a field determined by the supporter, e.g. their broadband company

However, you may want to randomise this, so that the supporter is given a randomised target from a list of targets.

This is especially useful for the UK's House of Lords database, since these aren't determined by a postcode.

1) Create your custom database as usual, with a column of match numbers from 1 upwards, so each row has a unique number
2) Create a match field in your account data structure that will hold the randomised match number
3) Add the field to your ETT's first page, and the target block on the 2nd page
4) Add the code block below, ensuring you amend num to be the total number of targets in your database
5) Also amend matchFieldID to be the ID of your field (you can see this in the HTML of your page)


```html
<script>
    $(document).ready(function() {
        var lords = new Array();
        var num = 5;
        var i = 1;
        var exclude = new Array();
        var matchFieldID = "#" + "en__field_supporter_NOT_TAGGED_2";
        
        /* Exclude values if you wish. Copy the line below and change the number */
        //exclude.push(35);
        
        /* create array of 73 index and 73 value. don't create if number matches forbidden numbers */
        while(i <= num){
        	if($.inArray(i,exclude) == -1){
        		lords.push(i);
        	}
        	i++;
        }
        
        /* count the size of the new array (no. of lords after exclusions). minus 1 because 0 is an array index */
        countLords = lords.length - 1;
        
        /* get a random value between 1 and no. of remaining lords */
        var lordIndex = 1 + Math.floor(Math.random() * countLords);
        
        /* get the lord value and add to field */
        var lordValue = lords[lordIndex];
        
        $(matchFieldID).val(lordValue);
    });
</script>
```
