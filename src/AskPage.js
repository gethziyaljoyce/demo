import styled from "styled-components";


const Container = styled.div`
padding:30px 20px;
`;

const QuestionTitleInput = styled.input`
background:none;
border:1px solid #777;
border-radius:3px;
display:block;
width:100%;
box-sizing:border-box;
padding:10px;
`;

const QuestionBodyTextarea = styled.textarea`
background:none;
border:1px solid #777;
border-radius:3px;
display:block;
width:100%;
box-sizing:border-box;
padding:10px;
`;

export default function AskPage(){
    console.log("ther");
     return (
        
         <Container>
             <QuestionTitleInput type="text" placeholder="Enter the title of your question"/>
             <QuestionBodyTextarea></QuestionBodyTextarea>
         </Container>
     );
}

