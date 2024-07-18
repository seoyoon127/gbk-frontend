import React from "react";
import styled from 'styled-components';

const PlanContainer=styled.div`
    width:80%;
    border:1px solid red;
    margin-left:10%;
`
const PlanTop=styled.div`
    div{
        font-size:18px;
    }
`
const PlanBottom=styled.div`

`
function PlanRoom(){
    return(
        <PlanContainer>
            <h1>국내 여행 계획하기</h1>
            <PlanTop>
                <div>대표 이미지</div>
                <div>
                    
                </div>
            </PlanTop>
            <PlanBottom>
                <div>여행 기간</div>
            </PlanBottom>
        </PlanContainer>
    )
}

export default PlanRoom;