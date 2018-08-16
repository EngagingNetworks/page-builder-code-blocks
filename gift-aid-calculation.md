You might want to tell the supporter how much their donation would be worth if they ticked the Gift Aid option. You can achieve this using calculated fields, but what if you want to show this within a text block, e.g. "With Gift Aid your donation would be worth £1.25"?

One way is to add a code block with the following code:

```html
<script>
$('input[name="transaction.donationAmt"], input[name="transaction.donationAmt.other"]').change(function(){
  var val = $('input[name="transaction.donationAmt"]:checked').val() == "Other" ? $('input[name="transaction.donationAmt.other"]').val() : $('input[name="transaction.donationAmt"]:checked').val();
  if(val <= 0){ val = 1; }
  $('.gift-aid p strong.donation-amt').html("£" + val);
  $('.gift-aid p strong.gift-aid-val').html("£" + (+val + (+val * 20 / 80)).toFixed(2));
});
</script>
```

And then inside the text block (with class "gift-aid") where you want to show the calculated amount, add this:

```html
<h2>Gift aid</h2>
<p>With gift aid, every <strong class="donation-amt">&pound;1</strong> 
you give to us would be worth <strong class="gift-aid-val">&pound;1.25</strong> 
at no extra cost to you.</p>
```

The code will replace the values inside the text block with values based on the input donation amount. Bingo!
