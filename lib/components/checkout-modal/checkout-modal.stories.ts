import { Meta } from "@storybook/react"
import { PayorcCheckoutModal } from "./"


const meta = {
  title: "Payorc Checkout Modal View",
  component: PayorcCheckoutModal,
  args:{
    merchant_id: "id_example"
  }

} satisfies Meta<typeof PayorcCheckoutModal>


export default meta;
