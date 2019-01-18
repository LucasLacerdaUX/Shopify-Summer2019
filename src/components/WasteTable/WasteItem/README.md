# WasteItem

The WasteItem represents each individual item inside a WasteTable. It should cointain a title, a body (used to describe the waste instructions) and a favourite button.

## Props

| Prop         | PropType | DefaultValue | Required? | Description                                                                                                    |
| ------------ | -------- | ------------ | --------- | -------------------------------------------------------------------------------------------------------------- |
| id           | `number` | 0            |           | Unique id to identify the waste item. It's used as an argument for the favoriteItem function.                  |
| title        | `string` | `""`         |           | Title of the waste item.                                                                                       |
| body         | `string` | `""`         |           | Body of the waste item (HTML allowed). Usually contains instructions on how to discard the item.               |
| favourited   | `bool`   | `false`      |           | Is the item in the favourite list?                                                                             |
| favoriteItem | `func`   | `null`       |           | Function to handle the favourite action of any WasteItem inside this table. Usually passed through WasteTable. |

## Usage Examples

1. Import the component:

```javascript
import WasteItem from "../components/WasteItem";
```

2. Add the JSX code:

```jsx
<WasteItem
  key={item.id}
  id={item.id}
  title={item.title}
  body={item.body}
  favourited={item.favourited}
  favoriteItem={favoriteItem}
/>
```

![alt text](http://lacerda.design/Shopify2019/WasteItem.png "WasteItem component on Desktops")

_*WasteItem component on Desktops*_

![alt text](http://lacerda.design/Shopify2019/HeaderMobile.png "Header component on Mobile Devices")

_*WasteItem component on Mobile Devices*_
