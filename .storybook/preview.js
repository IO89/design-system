import { addParameters, addDecorator } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { contexts } from './contexts';
import { withKnobs } from '@storybook/addon-knobs';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'Default theme',
    values: [
      {
        name: 'Default theme',
        value: '#ffffff',
      },
      {
        name: 'Dark theme',
        value: '#050449',
      },
    ],
  },
};

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
