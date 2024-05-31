import * as transactionMock from "../../mock/transaction";
import { payorcInitialiazer } from '../../utils/initializer';

export default function PayorcCheckoutExample() {
  const handleSubmit = async () => {
    const merchant_id: string = await transactionMock.getMerchantId();
    payorcInitialiazer({
      merchant_id,
      onSuccess: () => console.log("success"),
      onError: () => console.log("error"),
      onCancel: () => console.log("cancel")
    })
  }

  return (
    <div>
      <div id="checkout" data-testid="checkout" />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Pay Now
      </button>
    </div>
  )
}