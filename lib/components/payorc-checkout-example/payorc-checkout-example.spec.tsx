import { fireEvent, render, screen, act } from '@testing-library/react';
import { expect, vi } from 'vitest';
import PayorcCheckoutExample from './payorc-checkout-example';
import * as transactionMock from '../../mock/transaction';
import * as transactions from '../../services/transactions';

describe("PayorcCheckoutExample", () => {
  beforeAll(() => {
    vi.resetAllMocks();
  });

  it("should render a button with text Pay Now", () => {
    const { getByText } = render(<PayorcCheckoutExample />);
    const payNowButton = getByText("Pay Now");

    expect(payNowButton).toBeTruthy();
  });

  it("should mount checkout component when clicking pay now", async () => {
    vi.spyOn(transactionMock, "getMerchantId").mockResolvedValue("test_merchant_id12");
    vi.spyOn(transactions, "getMerchantById").mockResolvedValue({})
    const { getByText } = render(<PayorcCheckoutExample />);
    const payNowButton = getByText("Pay Now");

    await act(async () => {
      fireEvent.click(payNowButton);
    });

    const checkoutDiv = screen.getByTestId("checkout");
    const spanElement = screen.getByText("test_merchant_id12");
    expect(checkoutDiv).toContain(spanElement);
  });
});
