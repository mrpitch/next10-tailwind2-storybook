import React from 'react';

import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  colorSet: 'text-white bg-indigo-600 hover:bg-indigo-700',
  size: 'text-sm',
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  colorSet: 'text-indigo-600 bg-white border-indigo-500 hover:border-indigo-700 hover:text-indigo-700',
  size: 'text-sm',
  label: 'Secondary Button',
};