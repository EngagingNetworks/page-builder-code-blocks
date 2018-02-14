``` html
<script>
    // This script takes a checkbox opt-in and converts it to a radio opt-in
    // This can be useful for testing how supporters react to opt-in type
    // Please test this thoroughly
    
    // Checkbox to convert - check 
    var optInField = "en__field--cat-opt-in";
    var optInInputID = "19328";
    // Labels of new radio
    var radioYesLabel = "Yes";
    var radioNoLabel = "No";
    // Convert checkbox
    $("." + optInField + " input").attr("type","radio");
    $("." + optInField + " input").removeClass("en__field__input--checkbox").addClass("en__field__input--radio");
    $("." + optInField + " .en__field__item label").text(radioYesLabel);
    // Additional radio button html
    var newRadio = "<div class='en__field__item'><input id='en__field_supporter_questions_" +
        optInInputID + "Y' type='radio' class='en__field__input en__field__input--radio' value='N' name='supporter.questions." +
        optInInputID + "'><label for='en__field_supporter_questions_" +
        optInInputID + "Y' class='en__field__label en__field__label--item'>" + radioNoLabel + "</label></div>"
    // Add additional radio
    $("." + optInField + " .en__field__item").after ( $(newRadio) );
</script>
```
