import type { Meta, StoryObj } from "@storybook/react";
import { fn, within, userEvent, expect, waitFor } from "@storybook/test";
import LoginForm from "../component/LoginForm";

const meta = {
  title: "Forms/LoginForm",
  component: LoginForm,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    test: { control: "text", description: "테스트용 입력값" },
  },
  args: { test: "" },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyForm: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const emailInput = canvas.getByLabelText("이메일");
    const passwordInput = canvas.getByLabelText("비밀번호");
    const loginButton = canvas.getByRole("button", { name: "로그인" });

    await expect(emailInput).toBeInTheDocument();
    await expect(passwordInput).toBeInTheDocument();
    await expect(loginButton).toBeInTheDocument();
    await expect(loginButton).toBeDisabled();
  },
};

export const FilledForm: Story = {
  args: {},
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const emailInput = canvas.getByLabelText("이메일");
    const passwordInput = canvas.getByLabelText("비밀번호");
    const loginButton = canvas.getByRole("button", { name: "로그인" });

    await userEvent.type(emailInput, "email@provider.com");
    await userEvent.type(passwordInput, "a-random-password");
    await userEvent.click(loginButton);

    await expect(loginButton).toBeEnabled();
  },
};
