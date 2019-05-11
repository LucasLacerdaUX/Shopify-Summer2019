import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

addDecorator(withKnobs);

addDecorator(
  withInfo({
    inline: true,
    header: false
  })
);

function loadStories() {
  const req = require.context("../src/components", true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
