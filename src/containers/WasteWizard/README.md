# WasteWizard

The WasteWizard container defines the main application layout structure and its logic.

## Sample State

```js
state = {
  items: {
    0: {
      body: "HTML content here",
      category: "Garbage",
      favourited: false,
      id: 0,
      keywords: "bread bag tag, milk bag tag, elastic band",
      title: "Item #0"
    },
    1: {
      body: "HTML content here",
      category: "Garbage",
      favourited: true,
      id: 1,
      keywords: "plastic, takeout",
      title: "Item #1"
    }
  },
  results: [15, 30, 34, 54, 57],
  favourites: [12, 34, 57],
  search: "takeout",
  lastSearch: "plastic",
  loadingComplete: false,
  error: false
};
```
