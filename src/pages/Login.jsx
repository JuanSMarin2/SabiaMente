import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useStore } from "../store";
import toast from "react-hot-toast";

export default function Login() {
  const nav = useNavigate();
  const { login } = useStore();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
 if (formData.username && formData.password) {
      login({ 
        name: formData.username, 
        email: `${formData.username}@example.com` 
      });
    toast.success("Inicio de sesión exitoso ✅");
      nav("/main");
    } else {
      toast.error("Usuario y contraseña son requeridos ❌");
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleGuestLogin = () => {
    login({ name: "Invitado", isGuest: true });
    toast("Ingresaste como invitado 👤");
    nav("/main");
  };

  return (
    <div className="page">
      <main className="card narrow">
        <h1 className="title center">Iniciar sesión</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label className="label" htmlFor="username">
            Nombre de usuario*
          </label>
          <input 
            className="input" 
            id="username" 
            placeholder="Nombre" 
            value={formData.username}
            onChange={handleInputChange}
            required 
          />
          
          <label className="label" htmlFor="password">
            Contraseña*
          </label>
          <input 
            className="input" 
            id="password" 
            type="password" 
            placeholder="Contraseña" 
            value={formData.password}
            onChange={handleInputChange}
            required 
          />
          
          <p className="helper">
            <Link className="link" to="/recover">
              ¿Olvidaste la contraseña?
            </Link>
          </p>
          
          <button className="btn primary" type="submit">
            Continuar
          </button>
        </form>
        
        <div className="login-actions">
          <button className="btn outline" onClick={handleGuestLogin}>
            Ingresar sin cuenta
          </button>
          <Link className="btn ghost" to="/create">
            ¿No tienes cuenta?
          </Link>
        </div>
      </main>
    </div>
  );
}