// Grab political party / other data from biography and insert it after the last name of the contact
// For this to work, you need to insert the party as a field insert into the target block's biography tab
$(document).ready(function(){
  // Hide the biography tab
  $('.en__contact--open .en__contactDetails__background, .en__contacts--singleMessageMode .en__contactDetails__background').css("display", "none"); // one message to all contacts - update if individual msgs
  // Insert party
  $('.en__contacts').children('.en__contact').each(function () {
      var contactId = this.getAttribute('data-contact');
      contactId = String(contactId);
      var temp = ".en__contact--"+contactId;
      var selector = temp + " .en__contactBackground__text";

      var contactParty = $(selector).text();
      contactParty = contactParty.replace(" ", ""); // strip extra spaces
 
      $(temp + ' .en__contactDetail--lastName').append('<span style="font-weight: normal;">-'+contactParty+'</span>');
    });
});
