import styled from "styled-components";

export const ImgContainer = styled.img`
    /* border: 5px solid pink;  */
    @media (max-width: 768px) {
        width: 550px;
        height: 275px;
        margin-left: -130px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`;