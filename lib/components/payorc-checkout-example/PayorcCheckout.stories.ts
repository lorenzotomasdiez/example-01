import { Meta, StoryObj } from '@storybook/react';
import PayorcCheckoutExample from './payorc-checkout-example';

const meta = {
  title: "Example/PayorcCheckout",
  component: PayorcCheckoutExample,
  args: {
    handleSubmit: () => { }
  }
} satisfies Meta<typeof PayorcCheckoutExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};