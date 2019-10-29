# object-fit-polyfill
Simple polyfill for object-fit by converting img to background-image

## Install:
``` bash
npm i @koga73/object-fit-polyfill
```

Markup:
```html
<picture>
	<source srcset="http://via.placeholder.com/1920x1080" media="(orientation:landscape)"/>
	<source srcset="http://via.placeholder.com/1080x1920" media="(orientation:portrait)"/>
	<img src="http://via.placeholder.com/1920x1080" data-object-fit>
</picture>
<script src="../src/object-fit-polyfill.js"></script>
```

Styles:
```css
picture {
	display:block;
	width:100%;
	height:100%;
	background-size:cover;
	background-position:center center;
}

/* Image gets hidden when needed */
img {
	display:block;
	width:100%;
	height:100%;
	object-fit:cover;
}
```