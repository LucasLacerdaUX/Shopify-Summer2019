# SearchResults

The SearchResults is the component responsible of drawing a list of WasteItems in a table format.

## Props

| Prop           | PropType | DefaultValue       | Required? | Description                                                                 |
| -------------- | -------- | ------------------ | --------- | --------------------------------------------------------------------------- |
| _items_        | `object` |                    | ✓         | The list of waste items inside the table.                                   |
| _caption_      | `string` | `"Search Results"` |           | A descriptive label for the table (for accessibility purposes).             |
| _favoriteItem_ | `func`   | `null`             |           | Function to handle the favourite action of any WasteItem inside this table. |

## Usage Exampless

1. Import the component:

```javascript
import SearchResults from "../components/SearchResults";
```

2. Make sure you have a list of items in the following sample format:

```json
"items": {
    0: {
        "body": "HTML content here",
        "category": "Garbage",
        "favourited": false,
        "id": 0,
        "keywords": "bread bag tag, milk bag tag, elastic band",
        "title": "Garbage (wrapping and tying)"
    }
}
```

3. Add the JSX code:

```jsx
<SearchResults
  caption={"Favourites List"}
  items={items}
  favoriteItem={this.handleFavorite}
/>
```

![alt text](http://lacerda.design/Shopify2019/SearchResults.png "SearchResults component on Desktops")

_*SearchResults component*_
