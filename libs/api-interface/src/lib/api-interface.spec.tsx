import { render } from '@testing-library/react';

import ApiInterface from './api-interface';

describe('ApiInterface', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApiInterface />);
    expect(baseElement).toBeTruthy();
  });
});
