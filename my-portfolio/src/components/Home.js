import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section id="home">
            <h2>🌟 Bem-vindo ao Meu Portfólio</h2>
            <p>Explore minhas habilidades, projetos e entre em contato comigo.</p>
            <button onClick={() => window.location.href='#projetos'}>Veja Meus Projetos</button>
            <button onClick={() => window.location.href='#sobre'}>Saiba Mais Sobre Mim</button>
        </section>
    );
};

export default Home;
