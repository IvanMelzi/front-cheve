import { Box, Button, TextareaAutosize } from '@material-ui/core'
import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'

import UserCommment from '../../components/UserCommment/UserCommment'

import './Home.css'

const Home: FC = () => {

    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/comment').then((response: any)=> {
            setComments(response.data)
        })
    },[])

    const handleComment = () => {
        axios.post('http://localhost:3000/comment', {
            comment: comment
        }).then((response: any) => {
            console.log(response)
        })
    }

    const editCommentHandler = (id: number) => {

    }

    const deleteCommentHandler = (id: number) => {
        axios.delete('http://localhost:3000/comment/' + id).then((response: any) => {
            console.log(response)
        })
    }

    return (
        <Box className="Containers">
            <Box className="CommentContainer">
                <Box className="Scroll">
                    {comments && comments.map((commentResponse: any) => {
                        return (
                            <Box
                                key={commentResponse.id}>
                                <UserCommment
                                    comment={commentResponse}
                                    editComment={editCommentHandler}
                                    deleteComment={deleteCommentHandler}/>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
            <Box className="CommentContainer">
                <Box className="CommentDescription">
                    <TextareaAutosize
                        onChange={(e) => {
                            setComment(e.target.value)
                        }}
                        value={comment}
                        aria-label="minimum height"
                        rowsMin={3}
                        placeholder="Minimum 3 rows"
                        style={{minHeight: '100px', marginBottom: '40px'}}/>
                    <Button
                        onClick={() => handleComment()} variant="contained" color="primary">
                        Send Comment
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Home
