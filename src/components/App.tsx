import React from 'react';
import "../interfaces/global";
import Tile from "./Tile";
import './styles/App.css';
import useMetaMask from "../hooks/metamask.hook";

function App() {

    const { connect, disconnect, isActive, account, shouldDisable } = useMetaMask()

    return (
        <div className="App">
            <Tile>
                {account}
                <button onClick={connect}>
                    connect
                </button>
                <button onClick={disconnect}>
                    disconnect
                </button>
            </Tile>
            <Tile>
            </Tile>
        </div>
    );
}

export default App;
