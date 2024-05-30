import { render } from "@testing-library/react"
import { expect, vitest } from "vitest"
import PayorcCheckoutModal from "./checkout-modal"

describe(('PayorcCheckoutModal'), () => {
  it('should render', () => {
    const { queryAllByText } = render(
      <PayorcCheckoutModal
        onCancel={() => { }}
      />
    )
    expect(queryAllByText('Payment')).toHaveLength(1)
  })

  it('should call onCancel fn when cancelling payment', () => {
    const onCancel = vitest.fn();
    const { queryAllByText } = render(
      <PayorcCheckoutModal
        onCancel={onCancel}
      />
    )
    const cancelButton = queryAllByText('Cancel Payment')[0];
    cancelButton.click();
    expect(onCancel).toHaveBeenCalled();
  });

  it('should have description text', () => {
    const { queryAllByText } = render(
      <PayorcCheckoutModal
        onCancel={() => { }}
      />
    )
    const expectedText = "To start your subscription, input your card details to make payment. You will be redirected to your banks authorization page."
    expect(queryAllByText(expectedText)).toHaveLength(1);
  })

  it('should have cardholder name label and input', () => {
    const { queryAllByText, queryAllByPlaceholderText } = render(
      <PayorcCheckoutModal
        onCancel={() => { }}
      />
    )
    expect(queryAllByText("Cardholder's Name")).toHaveLength(1);
    expect(queryAllByPlaceholderText("Name here")).toHaveLength(1);
  })

  it('should have card number field with label and input', () => {
    const { queryAllByText, queryAllByPlaceholderText } = render(
      <PayorcCheckoutModal
        onCancel={() => { }}
      />
    )
    expect(queryAllByText("Card number")).toHaveLength(1);
    expect(queryAllByPlaceholderText("1234 5678 9101 1121")).toHaveLength(1);
  })

  it('should have expiry field with label and input', () => {
    const { queryAllByText, queryAllByPlaceholderText } = render(
      <PayorcCheckoutModal
        onCancel={() => { }}
      />
    )
    expect(queryAllByText("Expiry")).toHaveLength(1);
    expect(queryAllByPlaceholderText("05/27")).toHaveLength(1);
  })

  it('should have cvc field with label and input', () => {
    const { queryAllByText, queryAllByPlaceholderText } = render(
      <PayorcCheckoutModal
        onCancel={() => { }}
      />
    )
    expect(queryAllByText("CVC")).toHaveLength(1);
    expect(queryAllByPlaceholderText("000")).toHaveLength(1);
  });

  it('should have discount code field with label and input', () => {
    const { queryAllByText, queryAllByPlaceholderText } = render(
      <PayorcCheckoutModal
        onCancel={() => { }}
      />
    )
    expect(queryAllByText("Discount Code")).toHaveLength(1);
    expect(queryAllByPlaceholderText("Enter code here")).toHaveLength(1);
  });

  it('expect to have a button type submit with text "Pay"', () => {
    const { queryAllByText } = render(
      <PayorcCheckoutModal
        onCancel={() => { }}
      />
    )
    expect(queryAllByText("Pay")).toHaveLength(1);
  })

  it("expect to have the text `You're paying,`", () => {
    const { queryAllByText } = render(
      <PayorcCheckoutModal
        onCancel={() => { }}
      />
    )
    expect(queryAllByText("You're paying,")).toHaveLength(1);
  })
  //should test the amount
  //should test the items
  it("expect total row to exists", () => {
    const { queryAllByText } = render(
      <PayorcCheckoutModal
        onCancel={() => { }}
      />
    )
    expect(queryAllByText("Total")).toHaveLength(1);
  })
})