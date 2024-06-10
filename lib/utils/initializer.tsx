import { PayorcCheckoutModal } from '../components/checkout-modal';
import ReactDOM from 'react-dom/client';

interface PayorcInitializerProps {
  checkout_id?: string;
  onCancel?: () => void;
  merchant_id: string;
  onSuccess?: () => void;
  onError?: () => void;
}

export function payorcInitialiazer({
  checkout_id = "checkout",
  onCancel,
  merchant_id,
  onSuccess,
  onError
}: PayorcInitializerProps) {
  const checkout = document.getElementById(checkout_id);
  if (checkout) {
    ReactDOM.createRoot(checkout).render(
      <PayorcCheckoutModal
        merchant_id={merchant_id}
        onCancel={() => {
          ReactDOM.createRoot(checkout).unmount();
          onCancel && onCancel();
        }}
        onSuccess={onSuccess}
        onError={onError}
      />
    );
    return;
  }
  console.error("Payorc could not mount checkout component. Please ensure you have a div with id provided in your component.")
}
