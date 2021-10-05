import { Reset } from 'styled-reset';

import Header from './Header';
import QuestionsPage from "./Questionspage";
import AskPage from './AskPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import LogIn from './LogIn';
import SignUp from "./SignUp";
import Users from "./Users";


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
                        <Route exact path="/LogIn" component={LogIn}></Route>
                        <Route exact path="/SignUp" component={SignUp}></Route>
                        <Route exact path="/Users" component={Users}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
