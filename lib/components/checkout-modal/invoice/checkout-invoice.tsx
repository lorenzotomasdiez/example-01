import InvoiceSquare from '../../../assets/invoice/invoice-square';
import { PayorcInvoice } from "../../../types/invoice";

interface Props {
  invoice: PayorcInvoice;
}

export default function PayorcCheckoutInvoice({ invoice }: Props) {
  return (
    <div className="bg-white p-5 w-full max-w-[350px] mx-auto rounded-lg relative">
      <div className="absolute top-0 left-0">
        <div className="w-[82px] h-[83px] bg-purple-50" />
      </div>
      <div className="absolute top-0 left-0">
        <InvoiceSquare />
      </div>
      <div className="flex flex-col justify-end text-right mb-[80px]">
        <p className="text-xl font-normal mb-4">You're paying,</p>
        <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-payorc-fuchsia to-payorc-indigo">
          ${invoice.total}
        </p>
      </div>
      <div className="flex flex-col gap-12 text-lg">
        {
          invoice.items.map((item, index) => (
            <div key={index} className="flex justify-between">
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
          ))
        }
        <div className="flex justify-between">
          <p>Discounts & Offers</p>
          <p>$ {invoice.discounts}</p>
        </div>
        <div className="w-full border border-dashed" />
        <div className="flex justify-between">
          <p className="font-black">Tax</p>
          <p>$ {invoice.tax}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-black">Total</p>
          <p>$ {invoice.total}</p>
        </div>
      </div>
    </div>
  )
}