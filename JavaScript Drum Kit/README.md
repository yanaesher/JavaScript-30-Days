# 🧠 Keyboard Input Handling in JavaScript

This document covers key concepts and best practices when working with keyboard events in JavaScript.

---

## 1. `event.code` vs `event.key`

| Property     | Description                                  | Layout-dependent? | Example (QWERTY) | Example (AZERTY) |
|--------------|----------------------------------------------|-------------------|------------------|------------------|
| `event.code` | Physical key on the keyboard                 | ❌ No              | `KeyQ`           | `KeyQ`           |
| `event.key`  | Character or action generated                | ✅ Yes             | `q`              | `a`              |

- Use `event.code` when you care about the physical position (e.g., for games or WASD controls).
- Use `event.key` when you care about the actual character (e.g., for text input).

---

## 2. Making Elements Focusable with `tabindex="0"`

To allow a non-interactive element (like a `<div>`) to receive keyboard input, add:

```html
<div tabindex="0">Focusable Block</div>
```

## 3. Listening for Keyboard Events Globally

You can listen for keyboard input across the entire page using `document.addEventListener()`, which allows detection without clicking or focusing a specific element:

```js
document.addEventListener("keydown", (event) => {
  console.log(event.key); // Logs the key pressed
});
```

👍 Pros:
- Works anywhere on the page.

- Ideal for global shortcuts or games.


## 6. `transitionend` Event

The `transitionend` event is fired when a CSS transition **completes** on an element.  
It’s useful when you want to run code **after** a visual transition finishes.

## 7. Removing a Class After Transition (`transitionend`)

When building interactive UI elements like a drum kit, you often add a class to trigger a CSS animation or transform.  
You can use the `transitionend` event to **remove the class** after the animation finishes.

### 🎯 Example Use Case:
Highlight a button when pressed, then remove the highlight after the transition ends.

### 🧩 Code Example:

```js
function removeTransition() {
  const btns = document.querySelectorAll(".drumkit-btn");

  btns.forEach((btn) => {
    btn.addEventListener("transitionend", removeClass);
  });
}

function removeClass(event) {
  if (event.propertyName !== "transform") return;
  event.target.classList.remove("playing");
}
```