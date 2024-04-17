import styled from "styled-components";
import hamburgerIcon from '../assets/icons/hambIcon.svg'

export const Container = styled.header`
    color: #FFFFFF;
    background-color: #FFFFFF;
    /* border: 2px solid black; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 90px;
    margin-right: 90px;
    margin-top: 10px;
    @media (max-width: 768px) {
        margin-left: 20px;
        margin-right: 20px;
    }
`;

export const LogoContainer = styled.img`
    /* border: 5px solid pink;  */
    @media (max-width: 768px) {
    }
`;

export const IconsContainer = styled.div`
    display: flex;
    /* border: 5px solid green; */
    align-items: center;
    justify-content: space-around;
    column-gap: 20px; 
    background-color: white;
    @media (max-width: 768px) {
    }
`;

export const HamburgerButton = styled.button`
    background-image: url(${hamburgerIcon});
    background-size: cover; 
    background-color: white;
    width: 30px; 
    height: 30px;
    border: none; 
    cursor: pointer;
`;