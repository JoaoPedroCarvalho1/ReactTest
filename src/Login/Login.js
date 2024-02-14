import React from "react";

function Button({ name, passwordLogin, user }) {
    function Login(event) {
        event.preventDefault();

     // checa se usuário e senha esrá correto e redireciona
        for (let n = 0; n < user.name.length; n++) {
            for (let j = 0; j < user.password.length; j++) {
                if (name == user.name[n] && passwordLogin == user.password[j]) {
                    window.location.href = "https://www.youtube.com/";
                    break;
                } else {
                    alert("inválido")
                    break;
                }
            }
            break;
        }
    }
    return (
        <button onClick={Login}>Login</button>
    )
}

export default Button