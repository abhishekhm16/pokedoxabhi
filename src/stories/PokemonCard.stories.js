import React from 'react';
import PokemonCard from '../components/pokemonCard/pokemonCard'; // Ensure the path is correct

// Default export for Storybook
export default {
  title: 'Components/PokemonCard', // Title for the Storybook sidebar
  component: PokemonCard, // The component being documented
  argTypes: {
    onClick: { action: 'clicked' }, // Action logger for onClick events
    className: { control: 'text' }, // Control for className prop
  },
};

// Template for creating stories
const Template = (args) => <PokemonCard {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  data: {
    name: "Pikachu",
    id: 25,
    types: ["Electric"],
    sprites: {
      front_default: "https://example.com/pikachu.png",
      other: {
        dream_world: {
          front_default: "https://example.com/pikachu-dream.png",
        },
      },
    },
  },
  className: 'default-card',
};

// Additional story with different data
export const WithDifferentPokemon = Template.bind({});
WithDifferentPokemon.args = {
  data: {
    name: "Charmander",
    id: 4,
    types: ["Fire"],
    sprites: {
      front_default: "https://example.com/charmander.png",
      other: {
        dream_world: {
          front_default: "https://example.com/charmander-dream.png",
        },
      },
    },
  },
  className: 'fire-card',
};
