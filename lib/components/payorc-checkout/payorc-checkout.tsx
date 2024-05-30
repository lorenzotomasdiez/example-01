import { useState } from "react";
import { PayorcCheckoutModal } from "./checkout-modal";

export default function PayorcCheckout() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)} className="bg-blue-500 text-white p-2 rounded">Open Checkout</button>
      {open && (
        <PayorcCheckoutModal
          onCancel={() => setOpen(false)}
        />
      )
      }
    </div>
  )
}