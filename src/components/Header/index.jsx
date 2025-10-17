import styled from "styled-components";
import Logo from "../Logo";
import user from "../../assets/icons/Usuario.png"
import Input from "../Input";




const HeaderContainer = styled.header`
    background-color: #929AAB;
    color: #000; /* garante que o texto fique visível */
    display: flex;
    justify-content: center;
    align-items: center;
`

const UserImg = styled.img`


` 


function Header(){
    return(
        <HeaderContainer>
            <Logo />
            <Input />
            <UserImg 
                src={user}
            />
        </HeaderContainer>
    );
}

export default Header