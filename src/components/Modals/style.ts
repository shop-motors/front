import styled from "styled-components";

const StyledModalDiv = styled.div`
    position: absolute;
    top:0;
    left:0;
    z-index: 70;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    position: fixed;
    -webkit-transition: 0.5s;
    background-color: rgba(0, 0, 0, 0.88);

    & .divContent{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background-color: white;
    z-index: 71;

    & .buttonCloseModal{
        background: inherit;
        border: none;
        font-size: 20px;
        margin-left: 10px;
        margin-top: 5px;
    }
}



`;
export const ModalComponent = styled.div`
@media(min-width: 768px){
    display:none;
}
`

export default StyledModalDiv;
