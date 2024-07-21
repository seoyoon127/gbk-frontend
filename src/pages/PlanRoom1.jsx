import React, { useState, useRef } from 'react';
import ImgUpload from './이미지 업로드.png';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TimePicker from 'react-time-picker';
import 'react-calendar/dist/Calendar.css';
import 'react-time-picker/dist/TimePicker.css';
import { format } from 'date-fns';

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
const PlanBottom=styled.div`
    display: flex;
    div {
        font-size: 18px;
    }
`
const Img = styled.img`
    width: 500px;
    height: 300px;
    object-fit: contain;
    cursor: pointer;
`;

const Text = styled.div`
    > div {
        margin: 10px 0;
    }
    > input {
        width: 500px;
        height: 25px;
        font-size: 16px;
    }
    > textarea {
        font-size: 16px;
        cols:10;
    }
`;
const CalendarContainer = styled.div`
  margin-bottom: 20px;
`;

const DateDisplay = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const DateText = styled.p`
  font-size: 15px;
  padding: 5px 15px;
  background-color: #f0f0f0;
  border-radius: 10px;
`;

const Separator = styled.div`
  font-size: 15px;
  margin: 0 10px;
`;

const TimeDisplay = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTimePicker = styled(TimePicker)`
  .react-time-picker__wrapper {
    background-color: #f0f0f0;
    border-radius: 10px;
    border: none;
    padding: 2px 2px;
    font-size: 15px;
  }
`
const NextButton=styled.button`
    width:80%; height:30px;
    text-align:center;
    .link{
        text-decoration:none;
    }
`
const Time=styled.div`
    margin-top:5%;
    margin-left:7%;
`
const Period=styled.div`
    margin-left:100px;
`
function PlanRoom1() {
    const [image, setImage] = useState(ImgUpload);
    const [dateRange, setDateRange] = useState([new Date(), new Date()]);
     const [startDate, endDate] = dateRange;
    const [startTime, setStartTime] = useState('00:00');
    const [endTime, setEndTime] = useState('00:00');
    const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const onDateChange = (range) => {
    setDateRange(range);
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
                <Period>
                    <div>여행 기간</div>
                    <CalendarContainer>
                        <Calendar
                        selectRange={true}
                        onChange={onDateChange}
                        value={dateRange}
                        />
                    </CalendarContainer>
                    <DateDisplay>
                        <DateText>{format(startDate, 'yyyy/MM/dd')}</DateText>
                        <Separator>~</Separator>
                    <   DateText>{format(endDate, 'yyyy/MM/dd')}</DateText>
                    </DateDisplay>
                </Period>
            </PlanTop>
            <PlanBottom>
                <Text>
                    <div>여행 제목</div>
                    <input type="text" />
                    <Time>
                </Time>
                    <div>여행 설명</div>
                    <textarea cols="60" rows="10"/>
                </Text>
                <Time>
                    <div>시간 설정</div>
                    <TimeDisplay>
                        <StyledTimePicker
                        onChange={setStartTime}
                        value={startTime}
                        format="HH:mm"
                        clearIcon={null}
                        />
                        <Separator>~</Separator>
                        <StyledTimePicker
                        onChange={setEndTime}
                        value={endTime}
                        format="HH:mm"
                        clearIcon={null}
                        />
                    </TimeDisplay>
                </Time>
            </PlanBottom>
            <NextButton><Link className="link" to="/Planroom2">다음으로&gt;</Link></NextButton>
        </PlanContainer>
    );
}

export default PlanRoom1;
