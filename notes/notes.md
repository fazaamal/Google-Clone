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