// NOTE: this requires the jQuery library
// The Next Suggested Gift can change the radio donation amounts on a donation page
// But it loses the currency symbol. This code adds the currency symbol (set as £ in this example)
// to the amount label, if the first character is a number (e.g. "10" becomes "£10" but "£20" or "Other" stays the same)
// setTimeout is needed to ensure this code runs after the NSG has done what it needs to do
<script>
$(function() {
    
	addCurrencySign();
	
	$( ".en__field--recurrpay" ).on( "click", function() {
        	addCurrencySign();
	});
	
	function addCurrencySign() {
	    setTimeout(function(){
		    $( ".en__field--donationAmt .en__field__input + label" ).each(function( index ) {
			  var firstChar = $( this ).text().charAt(0);
			  if( parseInt(firstChar)) {
				  $( this ).prepend( "£" );
			  }
		    }); 
	    }, 0)
	}
});
</script>
