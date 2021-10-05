import styled from "styled-components";
import HeaderCommon from "./HeaderCommon";
import BlueButton from "./BlueButton";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import {useState} from "react";

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
margin-bottom: 20px;
color:#fff;
`;

const QuestionBodyTextarea = styled.textarea`
background:none;
border:1px solid #777;
border-radius:3px;
display:block;
width:100%;
box-sizing:border-box;
padding:10px;
min-height:200px;
margin-bottom: 20px;
color:#fff;
`;

const PreviewArea = styled.div`
padding: 10px 20px;
background-color:#444;
border-radius: 5px;
margin-bottom:20px;
`;

export default function AskPage(){
    
    const [questionTitle,setQuestionTitle] = useState("");
    const [questionBody,setQuestionBody] = useState("");
     return (
        
         <Container>
             <HeaderCommon style={{marginBottom:"25px"}}>Ask a public question</HeaderCommon>
             <QuestionTitleInput type="text" value={questionTitle} onChange={e=>setQuestionTitle(e.target.value)} placeholder="Enter the title of your question"/>
             <QuestionBodyTextarea value={questionBody} onChange={e=>setQuestionBody(e.target.value)} placeholder="More info about your question.."></QuestionBodyTextarea>
             <PreviewArea>
                 <ReactMarkdown plugins={{gfm}} children={questionBody} />
                 </PreviewArea>
             <BlueButton>Post Your Question</BlueButton>
         </Container>
     );
}

