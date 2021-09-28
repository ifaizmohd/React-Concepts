import React from "react";
import { shallow } from "enzyme";
import Counter from "./counter.component";

it("Setting up tests", () => {
  expect(1).toEqual(1);
});

describe("Testing Couter Component", () => {
  it("Shallow testing of counter component", () => {
    expect(shallow(<Counter />)).toMatchSnapshot();
  });
});

it("test", () => {
  const mockColor = "red";
  const wrapper = shallow(<Counter />);
  wrapper.find('[id= "counter"]').simulate("click");
});
