import React from 'react';
import Card from './Card';


const Cardlist = ({robots}) => {
    const cardComponents = robots.map((user, i) => {
        return (
            <Card 
                key={i} 
                id={user.id} 
                name={user.name} 
                email={user.email} 
            />
        );
    });

    if (true) {
        throw new Error("Test Error") 
    } 
    return (
        <>
            {cardComponents}
        </>
    );
}

export default Cardlist;