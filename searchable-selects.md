If you have a lot of values in a select field, you might want it to be fully searchable. 

There is a third-party JavaScript plug-in called [Selectize](https://github.com/selectize/selectize.js) that works well.

## Example
For example, this allows you to search for specific UK towns:

https://secure.engagingnetworks.net/page/47877/petition/1?mode=DEMO&locale=en-GB

In that example, it uses a code block to call CDN files (this applies to all Selects - you can change this to be more specific via the .selectize() line in this code):

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script type="text/javascript" src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1757/selectize-standalone.js?v=1567417278000"></script>
<link rel="stylesheet" type="text/css" href="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1757/selectize.css?v=1567417051000" />
<script>
$(function() {
	$("select").selectize();
});
</script>
```

There are many other options available, so check out Selectize's documentation.

## Styling

Some example stylings for the selectize box:

```css
.selectize-input input {
  border-radius: .5em;
  color: #264334;
  min-height: 3em;
  padding: .55em !important;
  border-color: #000;
}
```

To make it full width:

```css
.selectize-control {
  width: 100%;
  padding: 0;
}
```

And to style the search text (highlight) and the active one you hover on (active):

```css
.selectize-control .highlight {
    color: white;
    background-color: #333333 !important;
}
.selectize-control .active {
    background-color: #ccc;
}
```

And to style the placeholder text:

```css
.selectize-control input::placeholder {
    color: black;
}
```

