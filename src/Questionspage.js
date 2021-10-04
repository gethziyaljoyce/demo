import styled from "styled-components";
import QuestionRow from "./QuestionRow";
import {Link} from "react-router-dom";

const StyledHeader = styled.h1`
font-size:2rem;
`;

const HeaderRow = styled.div`
display:grid;
grid-template-columns:1fr min-content;
padding:30px 20px;
`;

const BlueButton = styled(Link)`
background-color:#378ad3;
color:#fff;
border:0;
border-radius:5px;
padding:10px 10px;
text-decoration:none;
`;


function QuestionsPage() {
    return (
        <main>
            <HeaderRow>
                <StyledHeader>Top Questions</StyledHeader>
                <BlueButton to="/ask">Ask&nbsp;Questions</BlueButton>
            </HeaderRow>
            <QuestionRow />
            <QuestionRow />
            <QuestionRow />
            <QuestionRow />
            <QuestionRow />
            <QuestionRow />
            <QuestionRow />
            <QuestionRow />
            <QuestionRow />
            <QuestionRow />
        </main>

    );
}

export default QuestionsPage;