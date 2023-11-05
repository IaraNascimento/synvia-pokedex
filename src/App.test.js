import { renderWithProviders } from './utils/test';
import App from './App';

test.only('renders learn react link', () => {
  const { component } = renderWithProviders(<App />);
  expect(component).toMatchSnapshot();
});
