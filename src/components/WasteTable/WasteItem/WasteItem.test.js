import React from "react";
import { shallow } from "enzyme";
import WasteItem from ".";

describe("WasteItem", () => {
  let mockClick;
  let component;

  beforeAll(() => {
    mockClick = jest.fn();

    component = shallow(
      <WasteItem
        id={5}
        title="WasteItem Title"
        body="<ul><li>HTML Body</li></ul><ol><li>Another Element</li></ol>"
        favourited={true}
        favoriteItem={mockClick}
      />
    );
  });

  it("should render correctly", () => {
    expect(component.find("tr").length).toEqual(1);
  });

  it("should render a title", () => {
    expect(component.find(".title").text()).toContain("WasteItem Title");
  });

  it("should render a body", () => {
    expect(component.find(".body").html()).toContain("HTML Body");
  });

  it("should render an aria-label on the star button", () => {
    expect(component.find("button").props()).toHaveProperty("aria-label");
  });

  it("should return id on favourited button click", () => {
    component
      .find("button")
      .at(0)
      .simulate("click");

    expect(mockClick).toHaveBeenCalledWith(5);
  });

  it("should render Remove label", () => {
    expect(component.find("button").props()["aria-label"]).toContain("Remove");
  });

  it("should render button as favourited", () => {
    expect(component.find("button").hasClass("favourited")).toEqual(true);
  });

  it("should render Add label", () => {
    component = shallow(
      <WasteItem
        id={5}
        title="WasteItem Title"
        body="<ul><li>HTML Body</li></ul><ol><li>Another Element</li></ol>"
        favourited={false}
        favoriteItem={mockClick}
      />
    );
    expect(component.find("button").props()["aria-label"]).toContain("Add");
  });

  it("should render button as not favourited", () => {
    component = shallow(
      <WasteItem
        id={5}
        title="WasteItem Title"
        body="<ul><li>HTML Body</li></ul><ol><li>Another Element</li></ol>"
        favourited={false}
        favoriteItem={mockClick}
      />
    );
    expect(component.find("button").hasClass("favourited")).toEqual(false);
  });
});
