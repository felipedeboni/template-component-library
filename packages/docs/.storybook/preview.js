import results from '@org/react/.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

console.log('RESULTS', results);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
export const decorators = [
  withTests({
    results
  })
];
