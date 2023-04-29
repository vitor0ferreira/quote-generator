import styled from "styled-components";

export default function Quote(props) {

    const {quote, author} = props.quoteResponse;

    return(
        <StyledQuoteBox>
            {quote && <span>{quote}</span>}
            {author && <span>{author}</span>}
        </StyledQuoteBox>
    )
}

const StyledQuoteBox = styled.div`
    height: 600px;
    width: 600px;
    background-color: white;
    display: flex;
    span{
        color: black,
        font-size: 3rem;
    }

`;