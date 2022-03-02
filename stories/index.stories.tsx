import * as React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Thing from "../src/ui";

export default {
    title: 'UI/Thing',
    component: Thing,
} as ComponentMeta<typeof Thing>;

export const Primary: ComponentStory<typeof Thing> = () => <Thing />
Primary.storyName = 'Thing'
