import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (email) => {
    setEmail(email.target.value);
  };

  
  const handlePasswordChange = (password) => {
    setPassword(password.target.value);
  };


  // atualizar botão enviar 
  const handleSubmit = (submit) => {
    submit.preventDefault();

    console.log("Email", email);
    console.log("Password", password);
  };

  return (
    <div className="App">

      <header className="App-header"> 

        <h1>React Hooks</h1>
        <h3>e-mail, senha</h3>

        <form className="form-keyframes" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <button type="submit">Submit</button>
          
        </form>
      </header>
    </div>
  );
};

export default App;
