// This code makes it impossible to type or paste spaces into the email address field
// This helps with the autocomplete issue which can sometimes add a trailing space
$( document ).ready(function() {
  
  $(function(){
    $('#en__field_supporter_emailAddress').bind('input', function(){
      $(this).val(function(_, v){
       return v.replace(/\s+/g, '');
      });
    });
  });
  
  
});
