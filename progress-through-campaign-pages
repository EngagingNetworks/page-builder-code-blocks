# Show progress through the campaign
This is useful to give an indication of how far through the campaign the supporter is. 
For example, for a donation campaign, page 1 might be "Personal Details", 2 "Payment details" and 3 "Confirmation". 
This is very simple by using a text block on each page:

```html
<ol>
	<li class="active">Details</li>
	<li>Payment</li>
	<li>Complete</li>
</ol>
```

Note that the "active" class shows the current stage in the process.

An example style is below - this adds the numbers into circles and an underline in red:

```css
/* Page progress */
.progress ol {
    padding: 0;
    display: flex;
    width: 100%;
    list-style: none;
    counter-reset: item;
}
.progress ol li {
    width: 33%;
    font-weight: bold;
    border-bottom: 3px solid #dddddd;
    padding-bottom: 14px;
    list-style-position: inside;
    counter-increment: item;
    text-align: center;
}
.progress ol li.active {
    border-bottom: 3px solid var(--submit__button_background-color);
    color: var(--submit__button_background-color);
}
.progress ol li::before {
    content: counter(item);
    margin-right: 5px;
    background-color: #aaa;
    border-radius: 100%;
    color: #ffffff;
    width: 24px;
    display: inline-block;
    text-align: center;
}
.progress ol li.active::before {
    background-color: var(--submit__button_background-color);
}
```
