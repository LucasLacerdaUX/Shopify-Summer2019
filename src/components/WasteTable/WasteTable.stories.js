import React from "react";
import { storiesOf } from "@storybook/react";
import WasteTable from ".";

const items = [
  {
    body: "<ul><li>Place item in the <strong>Garbage Bin.</strong></li></ul>",
    category: "Garbage",
    favourited: false,
    id: 0,
    keywords: "keyword1, keyword2",
    title: "Sample Item"
  },
  {
    body: "Any <strong>HTML description</strong> goes here.",
    category: "Garbage",
    favourited: false,
    id: 1,
    keywords: "key, word, keyword",
    title: "Sample Item #2"
  }
];

storiesOf("WasteTable", module).add("default", () => (
  <WasteTable items={items} />
));
