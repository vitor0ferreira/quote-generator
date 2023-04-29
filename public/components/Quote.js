import styled from "styled-components";

export default function Quote(props) {
    const { quotes, authors } = props;

    console.log('1');

    return(
        <StyledQuoteBox>
            <span>{quotes}</span>
            <span>- {authors}</span>
        </StyledQuoteBox>
    );
};

const StyledQuoteBox = styled.div`
    min-height: min-content;
    width: 35rem;
    border-radius: 0.4rem;
    padding: 1rem 1.2rem;
    background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    span {
        color: white;
        text-shadow: 0.1rem 0.1rem 0.2rem black;
        font-family: 'Arial', sans serif;
        font-size: 1.5rem;
        font-weight: bold;
        text-align: justify;
        :last-of-type{
            font-size: 2rem;
            font-style: italic;
        }
    }
`;