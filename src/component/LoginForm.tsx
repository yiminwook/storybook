import { useState } from "react";
import { form } from "./loginForm.css";

interface LoginFormProps {}

export default function LoginForm({}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  return (
    <div className={form}>
      <div>
        <label htmlFor="email">이메일</label>
        <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input id="password" type="password" value={pw} onChange={(e) => setPw(e.target.value)} />
      </div>
      <button disabled={!email || !pw}>로그인</button>
    </div>
  );
}
