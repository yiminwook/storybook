import { useState } from "react";
import { app } from "./app.css";
import LoginForm from "./component/LoginForm";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <LoginForm test="" />
    </div>
  );
}
