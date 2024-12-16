import React from 'react';
import AppMultiSelectDropDown from '../components/filter/multiSelectdropDown/multiSelectdropDown';

export default {
  title: 'Components/AppMultiSelectDropDown',
  component: AppMultiSelectDropDown,
  argTypes: {
    onChangeHandler: { action: 'changed' },
    onOpenHandler: { action: 'opened' },
    onCloseHandler: { action: 'closed' },
    onCleanHandler: { action: 'cleaned' },
  },
};

const Template = (args) => <AppMultiSelectDropDown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Select Options',
  data: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
  placeholder: 'Choose...',
  isOpen: false,
};
