original page -> bounce page -> original page

This script should go on your parent page, where the URL is your special bounce page:

```html
<script>
    if(window.location.href.search('#bounced') == -1){
        window.location.replace('https://politicalnetworks.com/page/11134/action/1');
    }
</script>
```

More coming...
