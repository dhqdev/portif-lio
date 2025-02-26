import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Home />
                {/* Adicione outros componentes aqui */}
            </main>
            <Footer />
        </div>
    );
}

export default App;
