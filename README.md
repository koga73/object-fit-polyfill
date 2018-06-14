# object-fit-polyfill
Simple polyfill for object-fit by converting img to background-image

Markup:
```html
<div class="img-container">
	<img src="http://via.placeholder.com/1920x1080" data-object-fit>
</div>
<script src="../src/object-fit-polyfill.js"></script>
```

Styles:
```css
.img-container {
	display:block;
	width:100%;
	height:100%;
	background-size:cover;
	background-position:center center;
}

/* Image gets hidden */
img {
	display:block;
	width:100%;
	height:100%;
	object-fit:cover;
}
```