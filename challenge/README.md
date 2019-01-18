# Web Engineer Challenge - Summer 2019

Build a web app to search for waste items using the Toronto Waste Wizard database, and save frequently used ones.

## Instructions

- Reproduce the design as provided in the screenshot, which displays example search results.
- The data must be taken from the [Waste Wizard Lookup data (JSON)](https://www.toronto.ca/city-government/data-research-maps/open-data/open-data-catalogue/#5ed40494-a290-7807-d5da-09ab6a56fca2).
- Typing in the search field should _NOT_ perform an API call.
- A search must be performed when hitting enter or clicking the search button.
- When the search input field is cleared, the list of results should also be cleared.
- Performing a search should render a list of potential matching items based on keywords. Each item should:
  - Render the title and description of the item.
  - Render a grey star button _if the item is not already favourited_.
  - Render a green star icon _if the item is not already favourited_.
  - Clicking the star button should add the item to the favourites list.
- When the number of favourites is more than one, the app should render a list of items. Each saved item should:
  - Render the title and description of the item.
  - Render a green star button _if the item has been favourited_.
  - Clicking the green star button should remove the item from the saved list.

## Design

![Design](http://cdn.shopify.com/static/web-eng-challenge-summer-2019/design.png)

## Submission

In your application, please include:

1. A link to your codebase, for review.
2. A link to a hosted version, for testing.
