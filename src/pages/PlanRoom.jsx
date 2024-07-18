import React, { useState, useRef } from "react";
import styled from 'styled-components';
import ImgUpload from "./이미지 업로드.png"

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
    border: red 1px solid;
`;
const Text = styled.div`
    margin-left: 100px;
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

function PlanRoom() {
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
            <h1>국내 여행 계획하기</h1>
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
                <Text>
                    <div>여행 제목</div>
                    <input type="text" />
                    <div>여행 설명</div>
                    <textarea cols="60" rows="10"/>
                </Text>
            </PlanTop>
            <PlanBottom>
                <div>여행 기간</div>
            </PlanBottom>
        </PlanContainer>
    );
}

export default PlanRoom;
