import React from "react";
import { shallow } from "enzyme";
import Header from ".";

describe("Header", () => {
  it("should render correctly", () => {
    const component = shallow(<Header />);
    expect(component.find("header").length).toEqual(1);
  });

  it("should render a title", () => {
    const component = shallow(<Header title="Testing" />);
    expect(component.find("h1").length).toEqual(1);
    expect(component.find("h1").text()).toContain("Testing");
  });
});
