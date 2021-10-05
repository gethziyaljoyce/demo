import styled from "styled-components";

const Container = styled.div`
border:1px solid #444;
margin: 10rem 35rem;
background-color: #444;
padding-left: 5rem;
padding-right: 5rem;
padding-top: 2rem;
padding-bottom: 2rem;
text-align: center;
border-radius: 10px;
color:#fff;
`;


function LogIn(){
    return (
        <>
        <Container>
            <form>
                <label>Name </label><br></br><br></br>
                <input type="text"/><br></br><br></br>
                <label>Email  </label><br></br><br></br>
                <input type="email"/><br></br><br></br>
                <label>PassWord  </label><br></br><br></br>
                <input type="password"/><br></br><br></br>
                <button>Log In</button><br></br><br></br>
            </form>
        </Container>
        </>
    );
}

export default LogIn;