import { Box } from '@material-ui/core'
import React, { FC } from 'react'
import RowBeer from '../../components/RowBeer/RowBeer'
import PerferctScroll from 'react-perfect-scrollbar'

import './Home.css'

const Home: FC = () => {
    return (
        <Box className="Containers">
            <Box className="BeerContainer">
                <Box className="Scroll">
                    <RowBeer />
                    <RowBeer />
                    <RowBeer />
                    <RowBeer />
                    <RowBeer />
                    <RowBeer />
                    <RowBeer />
                    <RowBeer />
                    <RowBeer />
                    <RowBeer />
                </Box>
            </Box>
            <Box className="BeerContainer">
                <RowBeer />
            </Box>
        </Box>
    )
}

export default Home
