import React, { FC } from 'react';

import './UserCommment.css';

import { Box } from '@material-ui/core';

import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons'

const UserCommment: FC<any> = ({
    comment,
    editComment,
    deleteComment
}) => {
    return (
        <Box className="Row">
            <p>{comment.comment}</p>
            <EditIcon onClick={() => editComment(comment.id)}/>
            <DeleteIcon onClick={() => deleteComment(comment.id)}/>
        </Box>
    )
}

export default UserCommment;