import { render } from '@testing-library/react';
import { expect } from 'vitest';
import PayorcCheckout from './payorc-checkout';

describe("PayorcCheckout", () => {
  it("renders", () => {
    const { queryAllByText } = render(<PayorcCheckout />);

    expect(queryAllByText("Open Checkout")).toHaveLength(1);
  })
})