import type { Meta, StoryObj } from "@storybook/react";
import { fn, within, userEvent, expect, waitFor } from "@storybook/test";
import LoginForm from "../component/LoginForm";

const meta = {
  title: "Forms/LoginForm",
  component: LoginForm,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    email: { control: "text", description: "이메일 입력값" },
    password: { control: "text", description: "비밀번호 입력값" },
    onChangeEmail: { action: "changed", description: "이메일 입력값 변경 이벤트" },
    onChangePassword: { action: "changed", description: "비밀번호 입력값 변경 이벤트" },
  },
  args: { email: "", password: "", onChangeEmail: fn(), onChangePassword: fn() },
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
