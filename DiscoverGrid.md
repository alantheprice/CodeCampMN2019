# CSS Grid

Should you use it? 
**Yes**

## Vocab

* Grid Container (parent container)
* Grid Items (can also be Grid Containers)
* Grid Track (rows and columns)
* Grid Cell (item within a track)
* Grid Gap (Gaps between items)
* Grid Area (Cell or multiple cells, but currently always rectangles |overlapable)

## implementation: 

```css
.wrapper {
    display: grid;
    grid-template-columns: 3fr 2fr 1fr;
    grid-template-rows: 200px minmax(100px, 1fr) minmax(200px, 400px);

    margin: 20px;
    border: 2px solid rgba(100,100,180, .4);
}
```

```
grid-template-areas: 
    "nav nav nav"
    "aside main main"
    "aside info1 info2"
```

## Slides: 
tinyurl.com/discover-grid
