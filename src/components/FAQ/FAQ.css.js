import styled from "styled-components"
import cssVars from "../../theme/_variables"

export const Wrapper1 = styled.div`
  min-height: 900px;
  width: 100%;
  color: ${cssVars.txtLghtGrn};
  font-size: 20px;
  font-family: ${cssVars.LATO} @media (max-width: 920px) {
    min-height: 500px;
  }
`

export const P = styled.p`
  padding: 20px;
`

export const ToggleWrap = styled.div`
  width: 100%;
  height: auto;
  display: inline-block;
  background: rgba(6, 12, 7, 0.35);
  font-family: Hind sans-serif;
  //   border-bottom: 1px solid white;
  border-radius: 50px;
  margin-bottom: 40px;
  padding: 35px;
  @media (max-width: 920px) {
   width: 80%;
  }
`

export const Symbol = styled.span`
  height: 25px;
  width: 25px;
  color: white;
  text-align: center;
  font-size: 15px;
  display: inline-block;
  font-weight: 700;
  font-family: Hind, sans-serif;
  border: 2px solid white;
  border-radius: 50%;
`
export const DivWrap = styled.div`
  height: 100%;
  width: 1000px;
  //   background: rgba(1, 12, 7, 0.3);
  margin: 0 auto;
  border-radius: 5px;
  padding: 30px 40px 100px 40px;
  margin-bottom: 100px;
  margin-top: 50px;
  @media (max-width: 920px) {
    height: auto;
  }
  @media (max-width: 500px) {
    padding: 20px;
  }
  @media (max-width: 1444px) {
    width: 75%;
    margin: 0 auto;
  }
`

export const H3 = styled.h3`
  width: 95%;
  font-size: 30px;
  font-weight: 400;
  display: inline-block;
  font-family: ${cssVars.Objktv};
`

export const Pdiv = styled.div`
  display: none;
`