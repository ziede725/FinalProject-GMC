
import ReactStars from 'react-rating-stars-component'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.div`
`

const Rating=()=>{
const dispatch= useDispatch() ; 

    return(
        <>
        <Wrapper>
            <h5>Rate this movie ! </h5>
            <ReactStars
            value={5}

            
            />

        </Wrapper>
        
        </>
    )
}
export default Rating; 