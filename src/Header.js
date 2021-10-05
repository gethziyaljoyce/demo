import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";

const StyledHeader = styled.header`
background:#393939;
box-shadow:0 2px 2px black;
display:grid;
grid-template-columns:200px 1fr 200px 200px 200px;
grid-column-gap:20px;
`;

const LogoLink = styled(Link)`
color:#fff;
text-decoration:none;
display:inline-block;
height: 50px;
line-height:30px;
padding:0px 15px;
b{
    font-weight:bold;
}
svg{
    margin-top:10px;
    display:inline-block;
    float:left
}

span{
    display:inline-block;
    padding-left:5px;
    padding-top:15px;
}
`;

const SearchInput = styled.input`
width:100%;
border-radius : 3px;
border:1px solid #777;
background:black;
padding:10px 6px;
margin-top:7px;
`;

const LoginLink = styled(Link)`
width:100px;
height:50px;
border-radius : 3px;
border:1px solid #777;
background:black;
padding:10px 6px;
margin-top:7px;
color:#fff;
text-decoration:none;
display:inline-block;
height: 40px;
line-height:30px;
padding:0px 15px;
text-align:center;
`;

const SignUpLink = styled(Link)`
width:100px;
height:50px;
border-radius : 3px;
border:1px solid #777;
background:black;
padding:10px 6px;
margin-top:7px;
color:#fff;
text-decoration:none;
display:inline-block;
height: 40px;
line-height:30px;
padding:0px 15px;
text-align:center;
`;

const UserLink = styled(Link)`
text-decoration:none;
padding:25px;
`;

function Header() {
    return (
        <StyledHeader>
            <LogoLink to="/" className="logo">
                <FontAwesomeIcon icon={faStackOverflow} size="2x" />
               <span> Stack<b>OverflowClone</b></span>
            </LogoLink>

            <form action="" className="search">
                <SearchInput type="text" placeholder="Search...." />
            </form>
            <UserLink to="/users" className="profile">Users</UserLink>
            <LoginLink to="/LogIn">Log In</LoginLink>
            <SignUpLink to="/SignUp">Sign Up</SignUpLink>
        </StyledHeader>
    );
}

export default Header;