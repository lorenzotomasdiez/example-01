import { PayorcInvoice } from "../types/invoice";

export const mockedInvoice: PayorcInvoice = {
  total: 450,
  tax: 5,
  discounts: 0,
  items: [
    {
      name: "Erika Sensation",
      price: 400
    }
  ]
}