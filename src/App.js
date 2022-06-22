import React, { useState } from 'react';

import { fetchTopFree } from './api/fetchTopFree';
import { fetchTopPaid } from './api/fetchTopPaid';
import './App.scss';

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const search = (e) => {
        console.log('search');
    }

    return (
        <div className='main-container'>
            <input
                type='text'
                className='search'
                placeholder='Search...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={search}
            />
        </div>
    );
}

export default App;