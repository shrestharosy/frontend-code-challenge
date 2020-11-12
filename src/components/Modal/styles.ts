import styled from "@emotion/styled";
import { fontWeights } from "styles/Typography";

export const ModalOverLay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: .5;
  `
export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  
  .modal-close-button {
    color: #000;
    opacity: .3;
    cursor: pointer;
    font-size: 16px;
  }
  
  button {
    background: #c3e6cb;
  } 
 
`

export const ModalContainer = styled.div`
    z-index: 100;
    background: #c3e6cb;
    opacity: 1;
    position: relative;
    margin: 1.75rem auto;
    border-radius: 3px;
    max-width: 400px;
    padding: 10px;
    
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    aligh-items: center;
    font-weight: ${fontWeights.medium}   
`