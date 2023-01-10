import React from 'react';

const SearchBox = (props) => {
    return (
        <div className='col col-sm-4'>
            <input
                type="email"
                className='form-control'
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder='Write your Email...'
            ></input>
        </div>
    );
};

export default SearchBox;