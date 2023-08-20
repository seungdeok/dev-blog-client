import Home from '@/app/page';
import { render } from '@testing-library/react';

describe('<Home />', () => {
  it('renders without crashing', () => {
    render(<Home />);
  });
});
