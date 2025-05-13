import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:3658/m1/914149-896526-default/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        setStatus("success");
      } else {
        const data = await response.json();
        setMessage(data.message);
        setStatus("error");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setMessage("Hubo un error con la solicitud.");
      setStatus("error");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {message && (
        <div style={{ color: status === "success" ? "green" : "red" }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Login;
