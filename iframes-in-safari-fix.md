# Safari iframe fix
Embedded email-to-target pages can sometimes fail to load properly in Safari. This fix essentially makes the browser trust the domain of the iframe by reloading it. There are a few components:

## Create a page that can bounce requests
This page should be a static page with a code block on. It sends you back from whence you came.
```html
<script>
    window.location.replace(document.referrer + '#bounced');
</script>
```

## In the parent website that contains the iframe, add this code before the iframe, using the URL of the bouncer in place of the URL in the sample code
```html
<script>
    if(window.location.href.search('#bounced') == -1){
        window.location.replace('https://politicalnetworks.com/page/11134/action/1');
    }
</script>
```

When the parent page is loaded, it will immediately load the bouncer, which will reload the parent page again. Because the parent page has visited the iframe's domain before, it will trust it and allow cookies to be loaded properly.
