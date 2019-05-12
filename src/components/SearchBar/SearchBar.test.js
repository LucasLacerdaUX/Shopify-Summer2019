import React from "react";
import { mount } from "enzyme";
import SearchBar from ".";

describe("SearchBar", () => {
  let mockSubmit;
  let component;
  beforeAll(() => {
    mockSubmit = jest.fn();
    component = mount(
      <SearchBar
        initialValue="test"
        labelInput="Search something"
        labelSubmit="Submit"
        handleSubmit={mockSubmit}
      />
    );
  });

  it("should render correctly", () => {
    expect(component.find(".searchForm").length).toEqual(1);
  });

  it("should return form content on submit", () => {
    component
      .find("button")
      .at(0)
      .simulate("submit", { preventDefault: mockSubmit });

    expect(mockSubmit).toHaveBeenCalledWith("test");
  });

  it("should contain a input label", () => {
    expect(component.find("input").props()).toHaveProperty("aria-label");
    expect(component.find("input").prop("aria-label")).toEqual(
      "Search something"
    );
  });

  it("should contain a button label", () => {
    expect(component.find("button").props()).toHaveProperty("aria-label");
    expect(component.find("button").prop("aria-label")).toEqual("Submit");
  });

  it("should update text onChange", () => {
    component
      .find("input")
      .simulate("change", { target: { value: "new value" } });

    expect(component.find("input").prop("value")).toEqual("new value");
  });
});
