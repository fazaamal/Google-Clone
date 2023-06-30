# My notes

## File structuring 
```
project-name/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── img/
│   └── image1.jpg
│   └── image2.png
└── other-assets/
    ├── fonts/
    │   └── font1.ttf
    │   └── font2.woff
    ├── icons/
    │   └── icon1.svg
    │   └── icon2.png
    └── other-files/
        └── data.json
        └── readme.txt
```

## Flexbox vs Grid
[Video](https://youtube.com/shorts/qI6zRC_0a5Q?feature=share)
![Alt text](<Screenshot 2023-06-27 161538.png>)

## justify-content
The `justify-content` property in CSS is used to control the alignment and distribution of flex items along the main axis of a flex container. It is applied to the flex container itself. Here's how you can use `justify-content`:

```css
.container {
  display: flex;
  justify-content: <value>;
}
```

In the above code, `.container` is the class name of the flex container element, and `<value>` represents the desired value for `justify-content`. Here are some common values and their effects:

1. `flex-start`: Aligns flex items to the start of the container (left for a horizontal layout or top for a vertical layout).
2. `flex-end`: Aligns flex items to the end of the container (right for a horizontal layout or bottom for a vertical layout).
3. `center`: Centers flex items along the main axis of the container.
4. `space-between`: Distributes flex items evenly along the main axis, with the first item at the start and the last item at the end, and spaces between the items.
5. `space-around`: Distributes flex items evenly along the main axis, with equal spacing before and after each item.
6. `space-evenly`: Distributes flex items evenly along the main axis, with equal spacing between and around each item.

Here's an example that demonstrates the usage of `justify-content`:

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

In this example, the `.container` class is applied to the flex container, and `justify-content: space-between;` is used to evenly distribute the flex items along the main axis, with space between the items.

Feel free to adjust the CSS selector (`.container`) and the value of `justify-content` based on your specific layout requirements.

## CSS for different screen sizes

To group certain CSS stylings for specific screen sizes, you can use media queries in your CSS. Media queries allow you to apply different styles based on the characteristics of the device or viewport, such as screen size, resolution, or orientation. Here's an example:

```css
/* Default styles for all screen sizes */
.element {
  /* Default styles */
}

/* Media query for screens with a maximum width of 768px */
@media (max-width: 768px) {
  .element {
    /* Styles for screens up to 768px */
  }
}

/* Media query for screens with a minimum width of 1024px */
@media (min-width: 1024px) {
  .element {
    /* Styles for screens starting from 1024px */
  }
}
```

In the above code, the `.element` class represents the selector for the HTML element you want to target. The default styles are applied to all screen sizes outside of any media queries.

Inside the media queries, you can define specific styles for different screen sizes using the `max-width` and `min-width` properties. In the example, the first media query applies styles for screens with a maximum width of 768px, while the second media query applies styles for screens with a minimum width of 1024px.

You can add as many media queries as needed and customize the styles within each query to suit your specific requirements. By grouping your CSS stylings within media queries, you can create responsive designs that adapt to different screen sizes and provide an optimal user experience.