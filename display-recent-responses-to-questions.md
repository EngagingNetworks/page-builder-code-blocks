You can use our public API call to retrieve, and display, responses to a question directly on the page. 

To do this, you need to add a Code Block, with code similar to the below. Note that you'll need to get your own Public Token for the token variable, and to place in your own questionId. The questionId can be retrieved by following the instructions at the bottom of https://engagingnetworks.support/knowledge-base/public-data-services-using-a-token

```
<div id="responses"></div>
<script>
    var questionId = 23668;
    var token = "a85d22f6-6fac-4fcf-8d25-2c348bd2e0b5";
    var dataURL = "https://e-activist.com/ea-dataservice/data.service?service=EaSupporterQuestionResponse&token=" + 
        token + "&questionId=" + questionId + "&contentType=json";
    // make the data call
    var ret = $.ajax({
    	url: dataURL,
    	crossDomain: true,
    	dataType: 'jsonp'
	});
	// when data call is done
	var responseHTML = "<ul>";
	ret.done(function(data){
	    var result = data;
	    var count = result.rows.length;
	    for(var i=0; i<count; i++){
	        var response = $.trim(result.rows[i].columns[7].value);
	        responseHTML += "<li>" + response + "</li>";
	    }
	    responseHTML += "</ul>";
	    $("#responses").html(responseHTML);
	});

</script>
```
