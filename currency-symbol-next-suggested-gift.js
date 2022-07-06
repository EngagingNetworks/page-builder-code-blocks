// NOTE: this requires the jQuery library
// The Next Suggested Gift can change the radio donation amounts on a donation page
// But it loses the currency symbol. This code adds the currency symbol (set as £ in this example)
// to the amount label, if the first character is a number (e.g. 10 becomes £10 but Other stays the same)
<script>
$(function() {

	setTimeout(function(){ 
		addCurrencySign();
	}, 0)
	
	$( ".en__field--recurrpay" ).on( "click", function() {
	    setTimeout(function(){ 
		    addCurrencySign();
	    }, 0)
	});
	
	function addCurrencySign() {
        $( ".en__field--donationAmt .en__field__input + label" ).each(function( index ) {
		  var firstChar = $( this ).text().charAt(0);
		  if( parseInt(firstChar)) {
			  $( this ).prepend( "£" );
		  }
	    }); 
	}
});
</script>
