import styled from "styled-components";

export default function Quote(props) {
    const { quotes, authors } = props;

    console.log('1');

    return(
        <StyledQuoteBox>
            <span>{quotes}</span>
            <span>-{authors}</span>
        </StyledQuoteBox>
    );
};

const StyledQuoteBox = styled.div`
    height: 600px;
    width: 600px;
    background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
        color: black;
        font-family: 'Arial', sans serif;
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
    }
`;