import React from "react";
import { shallow } from "enzyme";
import WasteTable from ".";

describe("WasteTable", () => {
  let component;

  beforeAll(() => {
    const items = [
      {
        body:
          "<ul><li>Place item in the <strong>Garbage Bin.</strong></li></ul>",
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
    component = shallow(<WasteTable items={items} />);
  });

  it("should render correctly", () => {
    expect(component.find("table").length).toEqual(1);
  });

  it("should render an accessible label", () => {
    expect(component.find("caption").length).toEqual(1);
  });

  it("should render the correct amount of WasteItems", () => {
    expect(component.find("tbody").children()).toHaveLength(2);
  });
});
