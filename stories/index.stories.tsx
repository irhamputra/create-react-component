import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../src";

export default {
  title: "UI/Button",
  component: Button,
} as ComponentMeta<any>;

export const Primary: ComponentStory<typeof Button> = () => (
  <Button type="button" onClickCapture={() => alert("Clicked")}>
    Click Me!
  </Button>
);

Primary.storyName = "Button";
