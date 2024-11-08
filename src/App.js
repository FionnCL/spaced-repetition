import Header from './components/Header/Header';
import Page0 from './components/Page0/Page0';
import Page1 from './components/Page1/Page1';
import References from './components/References/References';

import './App.css';
import './variables.css';
import { useState } from 'react';

const maxPageIndex = 2;

function App() {
    const [pageNumber, setPageNumber] = useState(0);

    const increment = () => {
        setPageNumber(prevPageNumber => prevPageNumber + 1 )
    };

    const decrement = () => {
        setPageNumber(prevPageNumber => prevPageNumber - 1 )
    };

    const getPage = () => {
        switch(pageNumber){
            case 0:
                return <Page0/>;
            case 1:
                return <Page1/>;
            case 2:
                return <References/>;
            default:
                if(pageNumber < 0){ setPageNumber(maxPageIndex); return <References/>; }
                if(pageNumber > maxPageIndex){ setPageNumber(0); return <Page0/>; }
                return 'Page indexing error.';
        }
    }

    return (
        <div>
            <Header increment={increment} decrement={decrement}/>
            {getPage()}
        </div>
    );
}

export default App;
