import React, { Component } from 'react';
import logo from './logo.svg';

const animate = {
    transition: 'background-color 0.5s ease-out',
};

class Home extends Component {
    render() {
        return (
            <div className="container mx-auto">
                <header className="w-full flex justify-center flex-col bg-green-lightest">
                    <img src={logo} className="h-32" alt="logo" />
                    <p className="text-center bg-green-lighter py-8">
                        Edit <code className="text-blue-darker">src/App.js</code> and save to
                        reload.
                    </p>
                    <a
                        className="text-blue-darker hover:text-blue-lightest text-center font-bold bg-green-light hover:bg-green py-4"
                        style={animate}
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default Home;
