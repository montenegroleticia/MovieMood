import styled from "styled-components";

const SignContainer = styled.div`
    background-color: #9F3647;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 16px;
    }

    h1 {
        color: #FFF;
        font-family: "Saira Stencil One";
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    input {
        width: 250px;
        height: 40px;
        border-radius: 4px;
        border: #fff 1px solid;
        padding-left: 8px;

        color: #000;
        font-family: Raleway;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    button {
        background-color: #DB4648;
        width: 250px;
        height: 40px;
        border-radius: 4px;
        border: #DB4648 1px solid;
        color: #fff;
    }
`;

export default SignContainer;
