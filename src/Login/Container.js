import React, { useState } from "react";
import LoginHEader from "./loginHeader";
import Button from "./Login";
import USer from "./user"
function Container() {

    // useState "Atualizar o valor da Variável"

    const [name, setName] = useState("");
    const [passwordLogin, setPassword] = useState();
    
    const user = USer;

    // Coletar Valor do Nome
    function nameChange(event) {
        let e = event.target.value
        setName(e);
    }

    // Coletar valor de password
    function passChange(event) {
        let s = event.target.value
        setPassword(s);
    }
    return (
        // Estrutura de Jdx
        <div className="footer">
             <LoginHEader className="Header"></LoginHEader>
            <form className="LoginForm">
                <h1>Login</h1>
                <input type="text" className="input" placeholder="Digite seu nome" onChange={nameChange}></input>
                <input type="password" className="input" placeholder="Digite sua senha" onChange={passChange}></input>
                <Button className="input" name={name} passwordLogin={passwordLogin} user={user} ></Button>
                <a href="" target="_blank">Se-registrar</a>
            </form>
        </div>
    )

}

export default Container