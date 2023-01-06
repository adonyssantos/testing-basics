// Button.stories.js|jsx

import React from "react";
import Button from "./Button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
  description: "Button component",
  component: Button,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
      options: ["primary", "secondary"],
    },
    children: {
      control: {
        type: "text",
      },
    },
    onClick: {
      action: "clicked",
    },
  },
};

const Template = (args) => (
  <Button {...args} onClick={action("clicked")}>
    {args.children}
  </Button>
);

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  children: "Button",
  onClick: action("clicked"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  children: "Button",
  onClick: action("clicked"),
};
