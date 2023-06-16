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
    width: 50%;
    height: 50%;
}



`;
export const ModalComponent = styled.div`
@media(min-width: 991px){
    display:none;
}
`

export default StyledModalDiv;
