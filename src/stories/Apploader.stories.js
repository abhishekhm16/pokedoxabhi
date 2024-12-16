import React from 'react';
import Apploader from '../components/loader/loader';

// Default export for Storybook
export default {
  title: 'Components/Apploader',
  component: Apploader,
  argTypes: {
    className: { control: 'text' },
  },
};

// Template for creating stories
const Template = (args) => <Apploader {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  className: 'default-loader',
};

// Additional story with custom class
export const CustomClass = Template.bind({});
CustomClass.args = {
  className: 'custom-loader',
};
