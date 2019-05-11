import React from "react";
import { storiesOf } from "@storybook/react";
import StateInfo from ".";
import { ReactComponent as EmptyIcon } from "../../containers/WasteWizard/EmptyIcon.svg";

/*icon: PropTypes.node,
title: PropTypes.string,
children: PropTypes.node*/

storiesOf("StateInfo", module)
  .add("with icon", () => (
    <StateInfo icon={<EmptyIcon />}>StateInfo content.</StateInfo>
  ))
  .add("only title", () => <StateInfo icon={<EmptyIcon />} title="Title" />)
  .add("full ", () => (
    <StateInfo icon={<EmptyIcon />} title="Title">
      StateInfo content.
    </StateInfo>
  ));
