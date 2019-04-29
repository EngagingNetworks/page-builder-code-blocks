This example uses the EaAOContactData public data service call.

You can use data calls to query our contact databases for information and display them to the user, without having to use an email to target form.

Here's an example using a postcode field on the first page of an action. When the supporter types this in and submits the page, the second page uses the postcode to request information from our MP contact database and then displays the supporter's MP in a copy block.

1) Create the first page of the data capture action, including the postcode field and anything else you want.

2) On the second page, add a copy block that will contain text including the MP name.

3) Add a Code Block to the page

4) Include code like this in the MP name copy block (NOTE: Replace xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx with your public token):

``` html
<span id="userPostcode" style="display:none;">{user_data~Postcode}</span>
<p>Your MP is <span id="mpName"></span></p>

<script>

var userPostcode = encodeURIComponent($.trim($('#userPostcode').text()));

var dataUrl = 'https://e-activist.com/ea-dataservice/data.service?service=EaAOContactData&constituencyDatabaseId=3&postcode=' + userPostcode + '&token=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx&contentType=json';

var newDataRequest = $.ajax({
  url: dataUrl,
  dataType: "jsonp",
  crossDomain: true,
  timeout: 30000
});

newDataRequest.done(function(data) {
  var mpName = data.rows[0].columns[1].value + ' ' + data.rows[0].columns[2].value + ' ' + data.rows[0].columns[3].value + ' ' + data.rows[0].columns[4].value;
  $('#mpName').text(mpName);
});

newDataRequest.fail(function(jqXHR, textStatus) {
  console.log('ajax error' + jqXHR.responseText);
});

</script>
```

5) The page will then display something like: Your MP is Caroline Lucas MP

# How does it work?
The first span just puts the supporter's postcode in a hidden box so we can reference it later. The next paragraph then shows text to the supporter "Your MP is xxx", where xxx is filled in by the script.

The script begins by assigning the postcode to a variable, which it gets from the hidden span. The dataurl that will be used to query the contact database is then made, including a filter for the supporter's postcode. The database ID refers to the Westminster MP database, and the service as seen on Public Data Services. The token is the public token you have on your account.

The data request is then made, using the URL. When it is done, the received JSON information is put in a variable called data. From this, the MP's name is assembled via a few columns of the received data. Finally, it is inserted into the mpName span from the second line.
