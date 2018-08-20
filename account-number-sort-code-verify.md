You cannot insert some field values into thanks emails or on thanks pages. For example, tagged account number and sort code.
Therefore if you want to verify these to the supporter, you need to create new untagged fields in your Account Data Structure
and add them to the form block as Hidden fields. You can then use a Code Block to update these fields with the data that
the supporter enters.

In this example, the code block will update the untagged fields NOT_TAGGED_13 and NOT_TAGGED_14 with the tagged fields.
Your own IDs may vary.

In addition, the code masks out the first 4 digits of the account number.

```html
<script>
    $( document ).ready(function() {
        var accountNumberInput = "#en__field_supporter_bankAccountNumber";
        var sortCodeInput = "#en__field_supporter_bankRoutingNumber";
        var accountNumberVerify = "input[name='supporter.NOT_TAGGED_13']";
        var sortCodeVerify = "input[name='supporter.NOT_TAGGED_14']";
        doVerification();
        $(accountNumberInput + "," + sortCodeInput).on("change", doVerification);
        function doVerification() {
            var accountNumberMask = "****" + $(accountNumberInput).val().slice(4);
            $(accountNumberVerify).val( accountNumberMask );
            $(sortCodeVerify).val( $(sortCodeInput).val() );
        }
    })
</script>
```
