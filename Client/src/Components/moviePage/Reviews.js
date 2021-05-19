import React from 'react' ; 
import styled from 'styled-components'
import ReactStars from "react-rating-stars-component";


// const Comment = styled.div`

// `
const Container = styled.div`

`
const Name = styled.div`

`


const Review = ()=>{

    return(
        <>
        <Container>
            <Name></Name>
            <ReactStars
            count={5}
            edit={false}
            value={5}></ReactStars>
        </Container>
        </>
    )
}