import { render } from "@testing-library/react"
import { expect } from "vitest"
import PayorcCheckoutForm from "./checkout-form"

describe("PayorcCheckoutForm", () => {
  it('should have cardholder name label and input', () => {
    const { queryAllByText, queryAllByPlaceholderText } = render(
      <PayorcCheckoutForm />
    )
    expect(queryAllByText("Cardholder's Name")).toHaveLength(1);
    expect(queryAllByPlaceholderText("Name here")).toHaveLength(1);
  })

  it('should have card number field with label and input', () => {
    const { queryAllByText, queryAllByPlaceholderText } = render(
      <PayorcCheckoutForm />
    )
    expect(queryAllByText("Card number")).toHaveLength(1);
    expect(queryAllByPlaceholderText("1234 5678 9101 1121")).toHaveLength(1);
  })

  it('should have expiry field with label and input', () => {
    const { queryAllByText, queryAllByPlaceholderText } = render(
      <PayorcCheckoutForm />
    )
    expect(queryAllByText("Expiry")).toHaveLength(1);
    expect(queryAllByPlaceholderText("05/27")).toHaveLength(1);
  })

  it('should have cvc field with label and input', () => {
    const { queryAllByText, queryAllByPlaceholderText } = render(
      <PayorcCheckoutForm />
    )
    expect(queryAllByText("CVC")).toHaveLength(1);
    expect(queryAllByPlaceholderText("000")).toHaveLength(1);
  });

  it('should have discount code field with label and input', () => {
    const { queryAllByText, queryAllByPlaceholderText } = render(
      <PayorcCheckoutForm />
    )
    expect(queryAllByText("Discount Code")).toHaveLength(1);
    expect(queryAllByPlaceholderText("Enter code here")).toHaveLength(1);
  });

  it('expect to have a button type submit with text "Pay"', () => {
    const { queryAllByText } = render(
      <PayorcCheckoutForm />
    )
    expect(queryAllByText("Pay")).toHaveLength(1);
  })
})