import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import Header from ".";

storiesOf("Headers", module).add("default", () => (
  <Header title={text("Title", "Header Title")} />
));
