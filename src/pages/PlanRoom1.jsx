import React, { useState, useRef } from "react";
import styled from 'styled-components';
import ImgUpload from "./이미지 업로드.png"
import { Link } from 'react-router-dom';

const PlanContainer = styled.div`
    width: 80%;
    margin-left: 15%;
`;
const PlanTop = styled.div`
    display: flex;
    div {
        font-size: 18px;
    }
`;
const PlanBottom = styled.div``;
const Img = styled.img`
    width: 500px;
    height: 300px;
    object-fit: contain;
    cursor: pointer;
`;
const Text = styled.div`
    > div {
        margin: 15px 0;
    }
    > input {
        width: 500px;
        height: 25px;
        font-size: 16px;
    }
    > textarea {
        font-size: 16px;
    }
`;
const Calendar=styled.div`
    margin-left:5%;
`
const NextButton=styled.button`
    margin-top:3%;
    width:80%; height:40px;
    text-align:center;
    border-radius: 10px;
    .link{
        text-decoration: none;
    }
`
function PlanRoom1() {
    const [image, setImage] = useState(ImgUpload);
    const fileInputRef = useRef(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    return (
        <PlanContainer>
            <h1>여행 계획방 만들기 (1/2)</h1>
            <PlanTop>
                <div>
                    <div>대표 이미지</div><br />
                    <Img 
                        src={image} 
                        alt="image_upload" 
                        id="image_upload"
                        onClick={() => {
                            if (fileInputRef.current) {
                                fileInputRef.current.click();
                            } else {
                                console.warn("File input element is null/undefined");
                            }
                        }}
                    />
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        accept="image/*" 
                        style={{ display: "none" }} 
                        onChange={handleImageUpload}
                    />
                </div>
                <Calendar>
                    <div>여행 기간</div>
                </Calendar>
            </PlanTop>
            <PlanBottom>
                <Text>
                    <div>여행 제목</div>
                    <input type="text" />
                    <div>여행 설명</div>
                    <textarea cols="60" rows="10"/>
                </Text>
            </PlanBottom>
            <NextButton><Link className="link" to="/Planroom2">다음으로&gt;</Link></NextButton>
        </PlanContainer>
    );
}

export default PlanRoom1;
