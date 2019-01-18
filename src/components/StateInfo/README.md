# StateInfo

The StateInfo component is used to show the current state of the application to the user.

It can be used to create empty state screens, error screens or loading spinners.

## Props

| Prop       | PropType | DefaultValue | Required? | Description                                                                                           |
| ---------- | -------- | ------------ | --------- | ----------------------------------------------------------------------------------------------------- |
| _icon_     | `node`   |              |           | Add an icon component or any other component to visually describe the state. Shown before the title.. |
| _title_    | `string` | `""`         |           | Title of the state component.                                                                         |
| _children_ | `node`   | `null`       |           | Add text explaining the current state or any other component/HTML code. Shown after the title.        |

## Usage Examples

1. Import the component:

```javascript
import StateInfo from "../components/StateInfo";
```

2. Add the JSX code:

```jsx
<StateInfo icon={<LoadingIcon />} title="Loading...">
  <span>Connecting to the database...</span>
</StateInfo>
```

![alt text](http://lacerda.design/Shopify2019/StateInfo.png "StateInfo component")

_*StateInfo component*_
