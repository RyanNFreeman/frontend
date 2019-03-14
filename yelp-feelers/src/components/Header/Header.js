import React from 'react';
import styled from 'styled-components';
import bookmark from '../../assets/bookmark.svg';
import yelp from '../../assets/Yelp_trademark_RGB.png';
import back from '../../assets/chevron.svg';

const MainHeader = styled.header`
    background-color: #d32323;
    height: 50px;
    width: 100%;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: 1250px;
    position: relative;
    width: 90%;
`;

const Icon = styled.div`
    background: ${props => `url(${props.icon}) center no-repeat`}
    background-size: 16px;
    cursor: pointer;
    height: 25px;
    margin: auto;
    width: 25px;
`;

const Div = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.div`
    background: ${props => `url(${props.icon}) center no-repeat`}
    background-size: 100px;
    height: 50px;
    margin: auto;
    width: 80px;
`;
const Title = styled.h1`
    color: #ffff;
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    font-weigth: 200;
`;

const Header = props => (
    <MainHeader>
        <Nav>
            <Icon icon={back}/>
            <Div>
                <Logo icon={yelp}/>
                <Title>Tacopedia</Title>
            </Div>
            <Icon icon={bookmark} />
        </Nav>
    </MainHeader>
)

export default Header;