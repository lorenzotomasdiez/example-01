import { render } from "@testing-library/react"
import { expect } from "vitest"
import PayorcCheckoutModal from "./checkout-modal"

describe(('PayorcCheckoutModal'), () => {
  it('should render', () => {
    const { queryByTestId } = render(
      <PayorcCheckoutModal
        merchant_id="123"
        onCancel={() => { }}
      />
    )
    expect(queryByTestId('logo-loader')).toBeTruthy();
  })

  it('should have a loading while fetching transaction', () => {
    const { queryByTestId } = render(
      <PayorcCheckoutModal
        merchant_id="123"
        onCancel={() => { }}
      />
    )
    expect(queryByTestId('logo-loader')).toBeTruthy();
    expect(queryByTestId('dots-loader')).toBeTruthy();
  })

  // it('should call onCancel fn when cancelling payment', () => {
  //   const onCancel = vitest.fn();
  //   const { queryAllByText } = render(
  //     <PayorcCheckoutModal
  //       payorc_id="123"
  //       onCancel={onCancel}
  //     />
  //   )
  //   const cancelButton = queryAllByText('Cancel Payment')[0];
  //   cancelButton.click();
  //   expect(onCancel).toHaveBeenCalled();
  // });

  // it('should have a close icon that cancels payment', () => {
  //   const onCancel = vitest.fn();
  //   const { queryAllByTestId } = render(
  //     <PayorcCheckoutModal
  //       payorc_id="123"
  //       onCancel={onCancel}
  //     />
  //   )
  //   const closeButton = queryAllByTestId('cancel-modal')[0];
  //   closeButton.click();
  //   expect(onCancel).toHaveBeenCalled();
  // })

  // it('should have description text', () => {
  //   const { queryAllByText } = render(
  //     <PayorcCheckoutModal
  //       payorc_id="123"
  //       onCancel={() => { }}
  //     />
  //   )
  //   const expectedText = "To start your subscription, input your card details to make payment. You will be redirected to your banks authorization page."
  //   expect(queryAllByText(expectedText)).toHaveLength(1);
  // })
})