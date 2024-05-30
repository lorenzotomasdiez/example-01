import { Meta, StoryObj } from '@storybook/react';
import PayorcCheckout from './payorc-checkout';

const meta = {
  title: "Example/PayorcCheckout",
  component: PayorcCheckout,
} satisfies Meta<typeof PayorcCheckout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};