import React, { FC, useEffect } from 'react';

import './BeerDescription.css';

import { Box } from '@material-ui/core';

const BeerDescription: FC<any> = ({
    beer={
        name: '',
    }
}) => {

    useEffect(()=> {
        console.log(beer)
    }, [beer])
    return (
        <Box className="Description">
            <p>{beer.name}</p>
        </Box>
    )
}

export default BeerDescription;