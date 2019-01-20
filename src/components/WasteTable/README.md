# WasteTable

The WasteTable is the component responsible of drawing a list of WasteItems in a table format.

## Props

| Prop           | PropType | DefaultValue       | Required? | Description                                                                 |
| -------------- | -------- | ------------------ | --------- | --------------------------------------------------------------------------- |
| _items_        | `array`  |                    | ✓         | The list of waste items inside the table.                                   |
| _caption_      | `string` | `"Search Results"` |           | A descriptive label for the table (for accessibility purposes).             |
| _favoriteItem_ | `func`   | `null`             |           | Function to handle the favourite action of any WasteItem inside this table. |

## Usage Examples

1. Import the component:

```javascript
import WasteTable from "../components/WasteTable";
```

2. Make sure you have a list of items in the following sample format:

```js
results = [
  {
    body: "HTML content here",
    category: "Garbage",
    favourited: false,
    id: 0,
    keywords: "bread bag tag, milk bag tag, elastic band",
    title: "Item #0"
  },
  {
    body: "HTML content here",
    category: "Garbage",
    favourited: true,
    id: 1,
    keywords: "plastic, takeout",
    title: "Item #1"
  }
];
```

3. Add the JSX code:

```jsx
<WasteTable
  caption={"Favourites List"}
  items={results}
  favoriteItem={this.handleFavorite}
/>
```

![WasteTable component on Desktops](http://lacerda.design/Shopify2019/WasteTable.png "WasteTable component on Desktops")

_*WasteTable component on Desktops*_

![WasteTable component on Desktops](http://lacerda.design/Shopify2019/WasteTableMobile.png "WasteTable component on Desktops")

_*WasteTable component on Mobile Devices*_
