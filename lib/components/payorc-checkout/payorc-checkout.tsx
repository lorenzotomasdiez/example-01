import { cn } from "../../utils";
import { useState } from "react";

export default function PayorcCheckout() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)} className="bg-blue-500 text-white p-2 rounded">Open Checkout</button>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className={cn(
            "relative w-full h-full bg-white p-4 rounded-3xl max-w-screen-md max-h-[400px]",
          )}
          >
            <button
              onClick={() => setOpen(false)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Close
            </button>
            <h1 className="text-2xl font-bold">Payment</h1>
            <p className="text-gray-700">This is the checkout form</p>

          </div>
        </div>
      )
      }
    </div>
  )
}