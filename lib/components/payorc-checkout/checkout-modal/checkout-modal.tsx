import { useForm, SubmitHandler } from "react-hook-form"
import InstafansLogo from "../../../assets/if/logo";
import { BiscuitButton } from "../../biscuit-button";
import { cn } from "../../../utils";
import { PayorcInput } from "../../input";

interface Props {
  onCancel?: () => void;
}
type Inputs = {
  cardholders_name: string;
  card_number: string;
  expiry: string;
  cvc: string;
  discount_code?: string;
}
export default function PayorcCheckoutModal({
  onCancel
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="fixed w-screen h-screen inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className={cn(
        "relative bg-payorc-purple p-4 rounded-3xl w-full h-full max-w-screen-lg flex flex-col gap-4",
        "lg:max-h-[600px] lg:p-6"
      )}
      >
        <div className={cn(
          "grow grid grid-cols-1 pb-5 overflow-auto",
          "lg:grid-cols-2 lg:gap-4"
        )}>
          {/* LEFT SIDE */}
          <div>
            <div className="mb-[22px]">
              <InstafansLogo />
            </div>
            <h1 className="text-2xl font-semibold mb-6">Payment</h1>
            <p className="text-base font-normal leading-normal mb-[45px]">
              To start your subscription, input your card details to make payment.
              You will be redirected to your banks authorization page.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <PayorcInput
                label="Cardholder's Name"
                placeholder="Name here"
                {...register("cardholders_name")}
                error={errors.cardholders_name}
              />
              <PayorcInput
                label="Card number"
                placeholder="1234 5678 9101 1121"
                {...register("card_number")}
                error={errors.card_number}
              />
              <div className="grid grid-cols-2 gap-4">
                <PayorcInput
                  label="Expiry"
                  placeholder="05/27"
                  {...register("expiry")}
                  error={errors.expiry}
                />
                <PayorcInput
                  label="CVC"
                  placeholder="000"
                  {...register("cvc")}
                  error={errors.cvc}
                />
              </div>
              <PayorcInput
                label="Discount Code"
                placeholder="Enter code here"
                {...register("discount_code")}
                error={errors.discount_code}
              />

              <BiscuitButton type="submit">
                Pay
              </BiscuitButton>
            </form>
          </div>
          {/* RIGHT SIDE */}
          <div>
            <div className="bg-white p-5 w-full max-w-[350px] mx-auto rounded-lg">
              <div className="flex flex-col justify-end text-right mb-[80px]">
                <p className="text-xl font-normal mb-4">You're paying,</p>
                <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-payorc-fuchsia to-payorc-indigo">
                  $450.00
                </p>
              </div>
              <div className="flex flex-col gap-12 text-lg">
                <div className="flex justify-between">
                  <p>Erika Sensation</p>
                  <p>$ 400.00</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-black">Total</p>
                  <p>$ 455.00</p>
                </div>
              </div>
            </div>
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