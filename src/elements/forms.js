import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colors = {
    border: "#37E2D5",
    error: "#D61C4E",
    successful: "#00FFAB"
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

const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colors.error};
    display: none;
`;

const IconoValidacion = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
    font-size: 16px;
    opacity: 0;
`;

const ContenedorTerminos = styled.div`
    grid-column: span 2;
    input {
        margin-right: 10px;
    }
`;

const ContenedorBotonCentrado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 2;
`;

const Boton = styled.button`
    height: 45px;
    line-height: 45px;
    width: 30%;
    background: #2FA4FF;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: .1s ease all;

    &:hover{
        box-shadow: 3px 0px 15px rgb(94,230,255, 1);
    }
`;

const MensajeExito = styled.p`
    font-size: 14px;
    color: ${colors.successful};
    display: none;
`;

const MensajeError = styled.div`
    height: 45px;
    line-height: 45px;
    background: ${colors.error};
    padding: 0 15px;
    border-radius: 3px;
    grid-column: span 2;

    p{
        margin: 0;
    }
    b {
        margin-left: 10px;
    }
`;

export {
    Formulario,
    Label,
    GrupoInput,
    Input,
    LeyendaError,
    IconoValidacion,
    ContenedorTerminos,
    ContenedorBotonCentrado,
    Boton,
    MensajeExito,
    MensajeError
};