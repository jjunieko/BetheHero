import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import{FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import heroImg from '../../assets/hero.png';

import './styles.css';

export default function Register() {
    const[id, setId] = useState();



    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[whatsapp, setWhatsapp] = useState('');
    const[city, setCity] = useState('');
    const[uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();


           const data = { 
            name,
            email,
            whatsapp,
            city,
            uf,

           };

           try{
           const response = await api.post('ongs', data);

           alert('Seu ID de Acesso: ${response.data.id} ');
           
           history.push('/');

    } catch (err) {
        alert('Erro no cadastro tente de novo');
    }
}
    return (
        <div className="register-container">
            <section className="from">
            <img src={logoImg} alt= "Be the Hero"/>

        <form onSubmit={handleRegister}>
            <input placeholder ="nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}/>

<input placeholder ="nome da ONG"
            value={email}
            onChange={e => setEmail(e.target.value)}/>

<input placeholder ="nome da ONG"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}/>

<input placeholder ="nome da ONG"
            value={city}
            onChange={e => setCity(e.target.value)}/>

<input placeholder ="nome da ONG"
            value={uf}
            onChange={e => setUf(e.target.value)}/>


            
            <h1> Faça seu Login</h1>

            <input placeholder="sua ID"/>
            <button className="button" type="submit">Entrar</button>
        <Link to= "/register">
            <filogin size={16} color="#E02041"/>
        Não tenho cadatro
        </ Link>
        </form>

            </section>
        

            <form>
                <input placeholder="Nome da ONg"/>
                <input placeholder="Cidade" />
            </form>

            <button className="button" type="submit"></button>
        <img src={heroImg} alt= "hero"/>

        </div>
    );
}