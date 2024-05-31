export type PayorcInvoice = {
  total: number;
  tax: number;
  discounts: number;
  items: PayorcInvoiceItem[];
}

export type PayorcInvoiceItem = {
  name: string;
  price: number;
}