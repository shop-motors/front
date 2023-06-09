import styled from "styled-components";

const StyledModalDiv = styled.div`
width: 100vw;
height: 100vw;
z-index: 5;

& .modalConten{
    z-index: 7
    display: flex;
    flex-direction: column;
    width: 60vw;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
`;

export default StyledModalDiv