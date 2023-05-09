import styled from "styled-components";
import { FaQuoteLeft } from "react-icons/fa";

export default function Quote(props) {

    const { quotes, authors } = props;

    return(
        <StyledQuoteBox>
            <span>
                <FaQuoteLeft/> {quotes}
            </span>
            <span>- {authors}</span>
        </StyledQuoteBox>
    );
};

const StyledQuoteBox = styled.div`
    min-height: min-content;
    height: auto;
    max-height: 85vh;
    width: 40rem;
    max-width: 70vw;
    border-radius: 0.4rem;
    padding: 2.5rem 2rem;
    margin-bottom: 2rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    span {
        font-family: 'Arial', sans serif;
        font-size: 2rem;
        font-weight: bold;
        text-align: left;
        white-space: break-word;
        :last-of-type{
            font-size: 1.6rem;
            font-style: italic;
            font-weight: 400;
            align-self: flex-end;
        }
    }
    overflow: auto;
`;