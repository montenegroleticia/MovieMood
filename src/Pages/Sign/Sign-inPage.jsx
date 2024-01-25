import { useState } from "react";
import SignContainer from "./Styles/index"

export default function SignIn() {
     const [form, setForm] = useState({
        email: "",
        senha: "",
    });
    
    function handleForm(element){
        setForm({...form, [element.target.name]: element.target.value});
    }

    return(
        <SignContainer>
            <h1>Movie Mood</h1>
            <form onSubmit="">
                <input
                    type="email" 
                    placeholder="Email" 
                    name="email" 
                    value={form.email} 
                    onChange={handleForm}
                    required />
                <input
                    type="password" 
                    placeholder="Senha" 
                    name="senha"
                    minLength={6}
                    value={form.senha} 
                    onChange={handleForm} 
                    required />
                <button type="submit">Entrar</button>
            </form>
            <a href="#">Primeira vez? Cadastre-se!</a>
        </SignContainer>

    );
}