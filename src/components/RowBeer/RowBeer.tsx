import React, { FC } from 'react';

import './RowBeer.css';

import { Box } from '@material-ui/core';

import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons'

const RowBeer: FC<any> = ({
    beer,
    editComment,
    deleteComment
}) => {
    return (
        <Box className="Row">
            <p>{beer.comment}</p>
            <EditIcon onClick={() => editComment(beer.id)}/>
            <DeleteIcon onClick={() => deleteComment(beer.id)}/>
        </Box>
    )
}

export default RowBeer;