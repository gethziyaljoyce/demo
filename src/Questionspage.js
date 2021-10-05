import styled from "styled-components";
import QuestionRow from "./QuestionRow";
import HeaderCommon from "./HeaderCommon";
import BlueButtonLink from "./BlueButtonLink";

const HeaderRow = styled.div`
display:grid;
grid-template-columns:1fr min-content;
padding:30px 20px;
`;

// const BlueButton = styled(Link)`
// background-color:#378ad3;
// color:#fff;
// border:0;
// border-radius:5px;
// padding:10px 10px;
// text-decoration:none;
// `;


function QuestionsPage() {
    return (
        <main>
            <HeaderRow>
                <HeaderCommon>Top Questions</HeaderCommon>
                <BlueButtonLink to="/ask">Ask&nbsp;Questions</BlueButtonLink>
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