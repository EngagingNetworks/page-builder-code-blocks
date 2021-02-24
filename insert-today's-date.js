$( document ).ready(function() {
  // this example:
  // ... inserts today's date into #en__field_supporter_NOT_TAGGED_6,
  // ... inserts the date a year from now into #en__field_supporter_NOT_TAGGED_8,
  // ... inserts the date a year from now, minus one, into #en__field_supporter_NOT_TAGGED_7
  // It will format them as YYYYMMDD which means you can use profile and query filters (e.g. Is After)
  // Note 1: the IDs of the fields you want to insert the dates into will be different for your own account!
  // Note 2: the fields would need to be on the page, and hidden by CSS (NOT as a Hidden type otherwise val cannot be set)
  // Note 3: Hide the fields using CSS in a code block so you can still see them in page-builder
  // Note 4: You don't need all three fields of course - if you just want today's date, only insert for the start date
  // Note 5: You need jQuery for this to work. You can put this in a Code Block on the same page as the fields to insert into
  
  var daytoday = new Date();
  var dayinyear = new Date();
  var dayinyearlessone = new Date();
  dayinyear.setFullYear(dayinyear.getFullYear() + 1);
  dayinyearlessone.setFullYear(dayinyearlessone.getFullYear() + 1);
  dayinyearlessone.setDate(dayinyearlessone.getDate()-1);
  $("#en__field_supporter_NOT_TAGGED_6").val(formatDate(daytoday)); // today's date (e.g. start date)
  $("#en__field_supporter_NOT_TAGGED_7").val(formatDate(dayinyearlessone)); // date a year from now, minus one (e.g. end date)
  $("#en__field_supporter_NOT_TAGGED_8").val(formatDate(dayinyear)); // date a year from now (e.g. due date)
  function formatDate(date) {
      var year=String(date.getFullYear());
      var month=String(date.getMonth() + 1);
      var day=String(date.getDate());
      if (month.length < 2) {
          month = "0" + String(month);
      }
      if (day.length < 2) {
          day = "0" + String(day);
      }
      var formattedDate=String(year)+String(month)+String(day);
      return formattedDate;
  }
});
