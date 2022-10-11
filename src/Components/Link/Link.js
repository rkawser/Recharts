import React from 'react';

const Link = (props) => {
    const { name, link } = props.route;
    console.log(props)
    return (
        <div >
            <li className='mr-10 '>
                <a href={link}>{name}</a>
            </li>
        </div>
    );
};

export default Link;