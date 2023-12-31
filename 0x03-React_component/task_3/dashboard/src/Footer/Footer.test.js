import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Footer", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("should render the text 'Copyright'", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
  });
});
