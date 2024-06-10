import InstafansLogo from "../../assets/if/logo";
import { mockedInvoice } from "../../mock/invoice";
import { BiscuitButton } from "../biscuit-button";
import { cn } from "../../utils";
import { PayorcCheckoutInvoice } from "./invoice";
import { PayorcCheckoutForm } from "./form";
import { useEffect, useState } from "react";
import { CircleX } from "lucide-react";
import { PayorcCheckoutLoader } from "./loader";
import { getMerchantById } from "../../services";

interface PayorcCheckoutModalProps {
  onCancel?: () => void;
  onSuccess?: () => void;
  onError?: () => void;
  merchant_id: string;
}


export default function PayorcCheckoutModal({
  onCancel,
  merchant_id
}: PayorcCheckoutModalProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getMerchantById().then(() => {
      setLoading(false);
    });
  }, [])

  if (loading) {
    return <PayorcCheckoutLoader />
  }
  return (
    <div className="fixed w-screen h-screen inset-0 bg-black bg-opacity-50 flex justify-center items-center text-black">
      <div className={cn(
        "relative bg-payorc-purple p-4 rounded-3xl w-full h-full max-w-screen-lg flex flex-col gap-4",
        "lg:max-h-[600px] lg:p-6"
      )}
      >
        <span className="hidden">{merchant_id}</span>
        <div className="mb-[22px] flex justify-between">
          <InstafansLogo />
          <button
            className="hover:bg-neutral-300 p-1 rounded-full"
            onClick={onCancel}
            data-testid={"cancel-modal"}
          >
            <CircleX size={35} className="text-neutral-600" />
          </button>
        </div>
        <div
          className={cn(
            "grow grid grid-cols-1 pb-5 overflow-auto gap-20",
            "lg:grid-cols-2 lg:gap-4"
          )}>
          <div>
            <h1 className="text-2xl font-semibold mb-6">Payment</h1>
            <p className="text-base font-normal leading-normal mb-[45px]">
              To start your subscription, input your card details to make payment.
              You will be redirected to your banks authorization page.
            </p>
            <PayorcCheckoutForm />
          </div>
          <div>
            <PayorcCheckoutInvoice
              invoice={mockedInvoice}
            />
          </div>
        </div>
        <div className="grid grid-cols-3">
          <BiscuitButton
            onClick={onCancel}
          >
            Cancel Payment
          </BiscuitButton>
        </div>
      </div>
    </div>
  )
}
