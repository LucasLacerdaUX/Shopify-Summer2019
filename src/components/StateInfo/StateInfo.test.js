import React from "react";
import { mount } from "enzyme";
import { ReactComponent as EmptyIcon } from "../../containers/WasteWizard/EmptyIcon.svg";
import StateInfo from ".";

describe("StateInfo", () => {
  let component;
  beforeAll(() => {
    component = mount(
      <StateInfo icon={<EmptyIcon />} title="Title">
        StateInfo content.
      </StateInfo>
    );
  });

  it("should render correctly", () => {
    expect(component.find(".StateInfo").length).toEqual(1);
  });

  it("should render a title", () => {
    expect(component.find("h2").length).toEqual(1);
    expect(component.find("h2").text()).toContain("Title");
  });

  it("should render content", () => {
    expect(component.text()).toContain("StateInfo content.");
  });

  it("should render an Icon", () => {
    console.log(component.html());
    expect(component.find("svg").length).toEqual(1);
  });
});
