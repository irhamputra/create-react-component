import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from "../src";

export default {
  title: "UI/Text",
  component: Text,
} as ComponentMeta<any>;

export const H2: ComponentStory<typeof Text> = () => (
  <Text as="h2">Heading 2</Text>
);

H2.storyName = "H2";
