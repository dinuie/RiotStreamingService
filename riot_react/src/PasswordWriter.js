import React from 'react';

const SearchBox = (props) => {
    return (
        <div className='col col-sm-4'>
            <input
                className='form-control'
                value={props.value}
                onChange={(event) => props.setSearchValuePass(event.target.value)}
                placeholder='Write your Password...'
            ></input>
        </div>
    );
};

export default SearchBox;