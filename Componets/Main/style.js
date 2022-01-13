import styled, { css } from "styled-components";
import { ReactComponent as img1 } from '../../Assets/navbar/leftBlockIcons/1.svg'
import { ReactComponent as img2 } from '../../Assets/navbar/leftBlockIcons/2.svg'
import { ReactComponent as img3 } from '../../Assets/navbar/leftBlockIcons/3.svg'
import { ReactComponent as img4 } from '../../Assets/navbar/leftBlockIcons/4.svg'
import { ReactComponent as img5 } from '../../Assets/navbar/leftBlockIcons/5.svg'
import { ReactComponent as img6 } from '../../Assets/navbar/leftBlockIcons/6.svg'
import { ReactComponent as img7 } from '../../Assets/navbar/leftBlockIcons/7.svg'
import { ReactComponent as img8 } from '../../Assets/navbar/leftBlockIcons/8.svg'


const back = css`
    background-color: #202020;
`;
const MainContent = styled.div`
    width: 100%;
    height: 91.5vh;
`;

MainContent.LeftcBlock = styled.div`
    width: 240px;
    height: 92.5vh;
    position: fixed;
    position: bottom;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 40px 40px 40px 10px 10px 40px 40px 40px 40px;
    ${back}
    justify-content: center;
    align-items: start;
    padding: 10px 0px;
`;
MainContent.LeftBlockMoreBlock1 = styled.div`
    height: 40px;
    width: 220px;
    cursor: pointer;
    &:hover{
        background-color: #505050;
    }
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-tempalte-rows: 1fr;
    color: #fff;

`;
MainContent.Phr = styled.p`
    font-size: 14px;
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 500;
    font-size: 16px;
    margin: 0px 5px;
    margin-left: -30px;
`;

MainContent.LeftBlockImgs1 = styled(img8)`
    margin-left: 27px;
`;
MainContent.LeftBlockImgs2 = styled(img2)`
    margin-left: 25px;
`;
MainContent.LeftBlockImgs3 = styled(img3)`
    margin-left: 25px;
`;
MainContent.LeftBlockImgs4 = styled(img1)`
    margin-left: 25px;
`;
MainContent.LeftBlockImgs5 = styled(img4)`
    margin-left: 28px;
`;
MainContent.LeftBlockImgs6 = styled(img5)`
    margin-left: 28px;
`;
MainContent.LeftBlockImgs7 = styled(img6)`
    margin-left: 29px;
`;
MainContent.LeftBlockImgs8 = styled(img7)`
    margin-left: 29px;
`;


const Right = styled.div`
    width: 100%;
    padding-left: 240px;
    padding-top: 56px;
    min-height: 1000px;
`;
Right.Inset = styled.div`
    // border: 1px solid red;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    padding: 10px;
    color: #f3f3f3f3;
`;


Right.InsetVideoBlocks = styled.div`
    // border: 1px solid red;
    height: 250px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1.2fr 0.5fr;
    cursor: pointer;
    margin-bottom: 50px;

`;
Right.InsetVideoBlocksBoxTop = styled.div`
    // border: 1px solid red;
    
    
`;  
Right.InsetVideoBlocksBoxCenter = styled.div`
    // border: 1px solid red;
    
    
`;  
Right.InsetVideoBlocksBoxBottom = styled.div`
    // border: 1px solid red;
    
    
`;  



export { Right };
export default MainContent;