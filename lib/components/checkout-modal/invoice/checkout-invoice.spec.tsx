import { render } from "@testing-library/react"
import { expect } from "vitest"
import PayorcCheckoutInvoice from "./checkout-invoice"
import { mockedInvoice } from "../../../mock/invoice"

describe(("PayorcCheckoutInvoice"), () => {
  it("expect to have the text `You're paying,`", () => {
    const { queryAllByText } = render(
      <PayorcCheckoutInvoice
        invoice={mockedInvoice}
      />
    )
    expect(queryAllByText("You're paying,")).toHaveLength(1);
  })

  it("expects `discounts & offers` row to exists", () => {
    const { queryAllByText } = render(
      <PayorcCheckoutInvoice
        invoice={mockedInvoice}
      />
    )
    expect(queryAllByText("Discounts & Offers")).toHaveLength(1);
  })

  it("expects tax row to exists", () => {
    const { queryAllByText } = render(
      <PayorcCheckoutInvoice
        invoice={mockedInvoice}
      />
    )
    expect(queryAllByText("Tax")).toHaveLength(1);
  })

  it("expect total row to exists", () => {
    const { queryAllByText } = render(
      <PayorcCheckoutInvoice
        invoice={mockedInvoice}
      />
    )
    expect(queryAllByText("Total")).toHaveLength(1);
  })
})