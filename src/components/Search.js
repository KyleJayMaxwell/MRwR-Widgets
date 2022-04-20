import React, { useState, useEffect } from 'react';

const Search = () => {
    const [term, setTerm] = useState('');

    console.log('run with every render');

    useEffect(() => {
        console.log('i olny run once');
    }, []);

    useEffect(() => {
        console.log('i olny run once');
    }, [term]);

    useEffect(() => {
        console.log('run after every render and at initial render');
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        className="input"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
};

export default Search;