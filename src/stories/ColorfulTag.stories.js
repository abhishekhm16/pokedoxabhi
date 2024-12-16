import React from 'react';
import ColorfulTag from '../components/pokemonDetailsCard/colorfulTags/colorfulTag';

// Default export for Storybook
export default {
  title: 'Components/ColorfulTag', // Title for the Storybook sidebar
  component: ColorfulTag, // The component being documented
  argTypes: {
    text: { control: 'text' }, // Control for text prop
    className: { control: 'text' }, // Control for className prop
    type: { control: 'text' }, // Control for type prop
  },
};

// Template for creating stories
const Template = (args) => <ColorfulTag {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  text: 'Electric',
  className: 'default-tag',
  type: 'electric',
};

// Additional story with different type
export const FireType = Template.bind({});
FireType.args = {
  text: 'Fire',
  className: 'fire-tag',
  type: 'fire',
};

// Additional story with custom class
export const CustomClass = Template.bind({});
CustomClass.args = {
  text: 'Water',
  className: 'custom-class',
  type: 'water',
};
