import { Box, Button, TextareaAutosize } from '@material-ui/core'
import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'

import RowBeer from '../../components/RowBeer/RowBeer'
import BeerDescription from '../../components/BeerDescription/BeerDescription'

import './Home.css'

const Home: FC = () => {

    const [comments, setComments] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState({});
    const [comment, setComment] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/comment').then((response: any)=> {
            setComments(response.data)
        })
    },[])

    const selectBeer = (beer: any) => {
        setSelectedBeer(beer)
    }

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
            <Box className="BeerContainer">
                <Box className="Scroll">
                    {comments && comments.map((commentResponse: any) => {
                        return (
                            <Box
                                key={commentResponse.id}
                                onClick={() => selectBeer(commentResponse)}>
                                <RowBeer
                                    beer={commentResponse}
                                    editComment={editCommentHandler}
                                    deleteComment={deleteCommentHandler}/>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
            <Box className="BeerContainer">
                <Box className="BeerDescription">
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
