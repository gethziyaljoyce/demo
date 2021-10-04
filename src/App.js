import { Reset } from 'styled-reset';
import { createGlobalStyle } from "styled-components";
import Header from './Header';
import QuestionsPage from "./Questionspage";
import AskPage from './AskPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const GlobalStyles = createGlobalStyle`
@import url('@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300,400;900&display=swap');');
body{
    background: #2d2d2d;
    color:#fff;
    font-family:Roboto;
}
`;



function App() {
    return (
        <>
            <div>
                <Reset />
                <GlobalStyles />

                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact  path="/ask" component={AskPage}></Route>
                        <Route exact path="/" component={QuestionsPage}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
