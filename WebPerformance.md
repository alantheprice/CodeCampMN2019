# Web Performance -- 

Speaker: Robert Boedigheimer
Speakers Site: https://www.schwans.com/

* Rarely has much to do with server side optimization.
* Use Fiddler
* SpeedIndex -- Better metric
* Synthetic Monitor (Automated testing)
* Real User Monitoring (RUM - we can )
* AB testing performance. 
* Use Browser Cache, change url on new items
* Progressive Jpegs (the new thing is colors that map to image.)
* Jpegtran -- removes unnessessary metadata.
* lazyloading (Github.com/aFarkas/lazysizes)
* Differed Loading for Marketing tag crap.
* `async` and `deferred` in script loading. I don't think it matters for this site, but still relevant.
* `preconnect`, `preload` and `prerender` look into it for css.
* Urls are case sensitive when it comes to caching on the client. (Maybe do all lowercase for consistency). NOTE: server shouldn't care about case, but some do. 
* Font subsetting. (We need to do this -- fontsquirrel allows you to do this simply).
* Inline Critical css (I did this).


## Code Examples

### CDN

```html

<!-- Before -->
<img src="/images/image.jpg"/>

<!-- After -->
<img src="//cdn.example/images/image.jpg"/>

```

### Responsive Images

```html

<img src-set="image.1024.jpg, (lookup how to do this)"/>

```