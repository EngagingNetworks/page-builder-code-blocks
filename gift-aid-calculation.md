You might want to tell the supporter how much their donation would be worth if they ticked the Gift Aid option. You can achieve this using calculated fields, but what if you want to show this within a text block, e.g. "With Gift Aid your donation would be worth £1.25"?

One way is to add a code block with the following code:

```html
<script>
document.addEventListener('DOMContentLoaded', function () {

    // Function to update donation and Gift Aid values
    function updateGiftAidDisplay() {
        const donationRadios = document.querySelectorAll('input[name="transaction.donationAmt"]');
        const otherInput = document.querySelector('input[name="transaction.donationAmt.other"]');
        let selectedValue = "0";

        // Find the checked radio
        const checkedRadio = Array.from(donationRadios).find(r => r.checked);

        if (checkedRadio && checkedRadio.value === "Other" && otherInput) {
            selectedValue = otherInput.value;
        } else if (checkedRadio) {
            selectedValue = checkedRadio.value;
        }

        let val = parseFloat(selectedValue);
        if (isNaN(val) || val <= 0) val = 1;

        const donationAmtEl = document.querySelector('.gift-aid p strong.donation-amt');
        const giftAidValEl = document.querySelector('.gift-aid p strong.gift-aid-val');

        if (donationAmtEl) donationAmtEl.textContent = "£" + val;
        if (giftAidValEl) giftAidValEl.textContent = "£" + (val + (val * 20 / 80)).toFixed(2);
    }

    // Attach listeners to donation radios, other input, and recurrpay radios
    document.addEventListener('change', function (event) {
        if (
            event.target.name === 'transaction.donationAmt' ||
            event.target.name === 'transaction.donationAmt.other' ||
            event.target.name === 'transaction.recurrpay'
        ) {
            updateGiftAidDisplay();
        }
    });

    // For real-time updates on typing into "Other" field
    const otherInput = document.querySelector('input[name="transaction.donationAmt.other"]');
    if (otherInput) {
        otherInput.addEventListener('input', updateGiftAidDisplay);
    }

    // Trigger once on load
    updateGiftAidDisplay();

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
