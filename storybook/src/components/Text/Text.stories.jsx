// Button.stories.js|jsx

import React from "react";
import Text from "./Text";

export default {
  title: "Text",
  description: "Text component",
  component: Text,
  argTypes: {
    element: {
      control: {
        type: "select",
        options: ["p", "h1", "h2", "h3", "h4", "h5", "h6"],
      },
      options: ["p", "h1", "h2", "h3", "h4", "h5", "h6"],
    },
    color: {
      control: {
        type: "color",
      },
    },
    rest: {
      control: {
        type: "object",
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
};

const Template = (args) => <Text {...args}>{args.children}</Text>;

export const Heading = Template.bind({});
Heading.args = {
  element: "h1",
  children: "This is a heading",
  rest: {},
};

export const SubHeading = Template.bind({});
SubHeading.args = {
  element: "h2",
  children: "This is a subheading",
  rest: {},
};

export const Title = Template.bind({});
Title.args = {
  element: "p",
  children: "This is a paragraph",
  rest: {},
};
