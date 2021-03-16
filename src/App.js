import React from 'react';
import Logo from './components/logo'
import paintings from './paintings.json';
import PaintingList from './components/PaintingList'
import Panel from "./components/Panel";


    console.log(paintings)




const App = () => {
    return (
        <div>
            <Panel>
                <p>
                    Привет
                </p>
            </Panel>

            <Logo text="Главный компонент" />
            
            <PaintingList paintings={paintings} />
                 
        </div>
    );
};

export default App;