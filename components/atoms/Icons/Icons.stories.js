import React from 'react';

import { Icons } from './Icons';

// This default export determines where your story goes in the story list
export default {
  title: 'Atoms/Icons',
  component: Icons,
};

const Template = (args) => <Icons {...args} />;

export const PrimaryIcon = Template.bind({});
export const AnotherIcon = Template.bind({});