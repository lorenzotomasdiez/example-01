import { useForm, SubmitHandler } from "react-hook-form"
import { PayorcInput } from "../../input";
import { BiscuitButton } from "../../biscuit-button";
type Inputs = {
  cardholders_name: string;
  card_number: string;
  expiry: string;
  cvc: string;
  discount_code?: string;
}
export default function PayorcCheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
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
  )
}