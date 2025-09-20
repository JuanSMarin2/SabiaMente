import React from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from '../store';
import toast from "react-hot-toast";

export default function VerifyCode(){
  const nav = useNavigate();
  return (
    <div className="page">
      <main className="card narrow">
        <h1 className="title center">Introduce el código</h1>
        <p className="subtitle">Se ha enviado un código al correo: j*****@gmail.com</p>
        <form
          className="form"
          onSubmit={(e)=>{
            e.preventDefault();
            toast.success("Código verificado correctamente ✅");
+           nav("/login");
          }}
        >



          <div style={{display:"flex",gap:"10px",justifyContent:"center",margin:"20px 0"}}>
            <input className="input" maxLength="1" required/>
            <input className="input" maxLength="1" required/>
            <input className="input" maxLength="1" required/>
            <input className="input" maxLength="1" required/>
          </div>
          <p className="helper"><a className="link" href="#">No recibí el código</a></p>
          <button className="btn primary" type="submit">Continuar</button>
        </form>
      </main>
    </div>
  );
}
