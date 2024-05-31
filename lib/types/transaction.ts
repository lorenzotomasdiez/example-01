import { PayorcInvoice } from "./invoice";

export type PayorcTransaction = {
  id: string;
  invoice: PayorcInvoice;
}