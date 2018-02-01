import React from 'react'

const CoffeeList = ({ list }) => (
    <ul>
        {list.map(coffee =>(
            <li>{coffee}</li>
        ))}
    </ul>
)

export default CoffeeList;