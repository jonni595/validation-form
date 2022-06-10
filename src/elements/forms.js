import styled from "styled-components";

const colors = {
    border: "#37E2D5",
    error: "#D61C4E",
    successful: "#2F8F9D"
};

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 800px){
        grid-template-columns: 1fr;
    }
`;

const Label = styled.label`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;
    color: #fff;
    letter-spacing: 2px;
`;

const GrupoInput = styled.div`
    position: relative;
    z-index: 90;
`;

const Input = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;

    &:focus {
        border: 3px solid ${colors.border};
        outline: none;
        box-shadow: 3px 0px 30px rgb(55,226,213, .4);
    }
`;

export { Formulario, Label, GrupoInput, Input };