import React from 'react';
import Header from '../components/header/header';

// Default export for Storybook
export default {
  title: 'Components/Header',
  component: Header,
};

// Template for creating stories
const Template = (args) => <Header {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  children: 'This is a header',
};

// Additional story with different content
export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  children: (
    <div>
      <h1>Custom Header</h1>
      <p>Some additional content here</p>
    </div>
  ),
};
