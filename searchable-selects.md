If you have a lot of values in a select field, you might want it to be fully searchable. 

There is a third-party JavaScript plug-in called [Selectize](https://github.com/selectize/selectize.js) that works well.

For example, this allows you to search for specific UK towns:

https://e-activist.com/page/47877/petition/1?mode=DEMO&locale=en-GB

This uses a code block to call CDN files:

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

There are many other options available, so check out Selectize's documenation
