# SearchBar

This is the SearchBar form. It contains a text input and a button to submit the form.

## Props

| Prop           | PropType | DefaultValue      | Required? | Description                                                                       |
| -------------- | -------- | ----------------- | --------- | --------------------------------------------------------------------------------- |
| _searchValue_  | `string` | `""`              |           | The content of the input                                                          |
| _labelInput_   | `string` | `"Search Wastes"` |           | A descriptive label for the main input label (for accessibility purposes).        |
| _labelSubmit_  | `string` | `"Search"`        |           | A descriptive label for the Submit button (for accessibility purposes).           |
| _handleChange_ | `func`   |                   | ✓         | Function to handle text change inside the input. Use it for two-way data binding. |
| _handleSubmit_ | `func`   |                   | ✓         | Function executed on form submitted (both via enter or via button)                |

## Usage Examples

1. Import the component:

```javascript
import SearchBar from "../components/SearchBar";
```

2. Add the JSX code:

```jsx
<SearchBar
  searchValue={this.state.search}
  handleChange={this.handleChange}
  handleSubmit={this.handleSubmit}
/>
```

![SearchBar component on Desktops](http://lacerda.design/Shopify2019/SearchBar.png "SearchBar component on Desktops")

_*SearchBar component on Desktops*_

![SearchBar component on Mobile Devices](http://lacerda.design/Shopify2019/SearchBarMobile.png "SearchBar component on Mobile Devices")

_*SearchBar component on Mobile Devices*_
