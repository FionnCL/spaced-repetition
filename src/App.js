import React, { useState } from 'react';
import Header from './components/Header/Header';

import './App.css';
import './variables.css';
import Page0 from './components/Page0/Page0';
import Page1 from './components/Page1/Page1';
import PageTheory from './components/PageTheory/PageTheory';
import Page2 from './components/Page2/Page2';
import References from './components/References/References';

const maxPageIndex = 4;

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
                return <PageTheory/>;
            case 2:
                return <Page1/>;
            case 3:
                return <Page2/>;
            case maxPageIndex:
                return <References/>;
            default:
                if(pageNumber < 0){ setPageNumber(maxPageIndex); return <References/>; }
                if(pageNumber > maxPageIndex){ setPageNumber(0); return <Page0/>; }
                return 'Page indexing error.';
        }
    }

    return (
        <div>
            <Header 
            currPageNumber={pageNumber + 1} 
            maxPageNumber={maxPageIndex + 1} 
            increment={increment} 
            decrement={decrement}/>
            {getPage()}
        </div>
    );
}

export default App;
