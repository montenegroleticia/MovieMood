import { useState } from "react";
import { Link } from "react-router-dom";
import SignContainer from "./Styles/index"

export default function SignUp(){
    const [form, setForm] = useState({
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: "",
    });

    function handleForm(element){
        setForm({...form, [element.target.name]: element.target.value});
    }

    return(
            <SignContainer>
                <h1>Movie Mood</h1>
                <form onSubmit=''>
                    <input
                        type="text" 
                        placeholder="Nome" 
                        name="nome" 
                        value={form.nome} 
                        onChange={handleForm} 
                        required />
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
                        autoComplete="new-password"
                        minLength={6}
                        value={form.senha} 
                        onChange={handleForm} 
                        required />
                    <input
                        type="password" 
                        placeholder="Confime a senha" 
                        name="confirmarSenha"
                        minLength={6}
                        value={form.confirmarSenha}
                        onChange={handleForm}  
                        required />
                <button type="submit">Cadastrar</button>
                </form>
                <Link to={`/`}>Já tem uma conta? Entre agora!</Link>
            </SignContainer>
    );
}
