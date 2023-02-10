Images
- src
- sizing
- border attribute

## CSS styles, selectors, classes

- Styles like `background: white;` can be used inline in the HTML elements like `<h1 style="background: white"></h1>`
- Selectors are used in CSS to target your styles to affect certain elements, for example `h1 { background: white; }` uses the h1 selector to apply the white background to all H1 elements.
- Classes are used for more specific selectors. For instance `<span class="price">` and then `.price { background: white}`
- You can have multiple selectors to apply same style to more than 1 target. Like `h1, h2 { background: white;}`

### Applying CSS

- Introduce `<style>` section in your HTML document and write CSS inside
- Or move styles to separate CSS file and have a <link rel="stylesheet" href="myfile.css"> in head

### Random tips

- `Cmd + Option + J` opens Developer tools in Chrome
- Use `Command + Shift + P` to find all actions in Visual Studio Code. Type "format" to find the Format Document action.
- Enable "Format on save" in Preferences to keep things formatted
- `shape-outside: circle()` to wrap surrounding text around a circular shape
- Use `font-family: fantasy` for awesome fonts and use `<marquee>` extensively for a guaranteed 90s vibe
