import React from 'react';

import { Button } from "@/components/atoms/Button"

export default {
  title: 'Atoms/Button',
  component: Button
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  colorSet: 'btn--primary',
  size: 'text-sm',
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  colorSet: 'btn--secondary',
  size: 'text-sm',
  label: 'Secondary Button',
};