import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api;';
import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroImg from '../../assets/hero.png';

export default function Logon() {
    const [id, setId] = useState();
    const history = useHistory();
    
   async function handleLogin(e) {
        e.preventDefoult();

            try{
                const response = await api.post('sessiond', {id });

                console.log(response.data.name);


            localStorage.setItem('ongID', id);
            localStorage.setItem('ongID', response.data.name);
            
            history.push('/profile');
        }catch (err) {
                alert('falha');
            }

    }


    return (
        <div>
        <div className="login-container">
            <div className="content"></div>
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                <p>Faça seu cadatro  rsrsafdsavdsavdsa</p>

        <Link To= "/login">
            <filogin size={16} color="#E02041"/>
        Não tenho cadatro
        </ Link>
                </section>

                <form onSubmit={handleLogin}>



                <input placeholder="Nome da ONG" />
                <input type="e-mail" placeholder="Nome da ONG" />
                <input placeholder="Whasapp" />

                <div className="input-group">

            <input placeholder="Cidadade" />
            <input placeholder="UF" style={width, 80} />

                </div>

                <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>
        </div>
       );

}