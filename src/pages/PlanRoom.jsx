import React, { useState, useRef } from 'react';
import ImgUpload from './이미지 업로드.png';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import TimePicker from 'react-time-picker';
import 'react-calendar/dist/Calendar.css';
import 'react-time-picker/dist/TimePicker.css';
import { format } from 'date-fns';
import moment from 'moment'; // moment 라이브러리 임포트

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

const PlanBottom = styled.div`
  padding: 20px;
  margin: auto;
`;

/* 캘린더 */
const CalendarContainer = styled.div`
  margin-bottom: 20px;
`;

const StyledCalendar = styled(Calendar)`
  border: none; /* 경계선 제거 */
  border-radius: 10px; /* 모서리 둥글게 */
  background-color: #f9f9f9; /* 배경 색상 */
  padding: 10px; /* 여백 추가 */

  .react-calendar__month-view__weekdays {
    display: none; /* 요일 헤더 숨기기 */
  }

  .react-calendar__month-view__weekdays__weekday {
    display: none; /* 요일 제목의 스타일을 비우기 */
  }

  .react-calendar__tile--now {
    border: 2px solid #4caf50; /* 오늘 날짜 스타일 */
  }

  .react-calendar__tile--active {
    background: #45a049; /* 오늘 날짜의 배경 색상 */
    color: white;
  }
`;

const Title = styled.h1`
  font-size: 20px;
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

/* 시간설정 */
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

  //시간 중앙 정렬
  .react-time-picker__inputGroup {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-time-picker__input {
    text-align: center;
    width: 100%;
  }
`;

/* 토글 스위치 */
const ToggleLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ToggleSwitch = styled.input`
  appearance: none;
  width: 34px;
  height: 20px;
  background: #ccc;
  border-radius: 20px;
  position: relative;
  outline: none;
  cursor: pointer;

  &:checked {
    background: #4caf50;
  }

  &:checked::before {
    transform: translateX(14px);
  }

  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: white;
    top: 2px;
    left: 2px;
    transition: transform 0.2s ease;
  }
`;

function PlanRoom() {
  const [image, setImage] = useState(ImgUpload);
  const fileInputRef = useRef(null);
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;
  const [startTime, setStartTime] = useState('00:00');
  const [endTime, setEndTime] = useState('00:00');
  const [showTime, setShowTime] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const onDateChange = (range) => {
    setDateRange(range);
  };

  const handleToggleChange = () => {
    setShowTime(!showTime);
  };

  return (
    <PlanContainer>
      <h1>국내 여행 계획하기</h1>
      <PlanTop>
        <div>
          <div>대표 이미지</div>
          <br />
          <Img
            src={image}
            alt="image_upload"
            id="image_upload"
            onClick={() => {
              if (fileInputRef.current) {
                fileInputRef.current.click();
              } else {
                console.warn('File input element is null/undefined');
              }
            }}
          />
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
        </div>
        <Text>
          <div>여행 제목</div>
          <input type="text" />
          <div>여행 설명</div>
          <textarea cols="60" rows="10" />
        </Text>
      </PlanTop>
      <PlanBottom>
        <Title>여행 기간</Title>
        <DateDisplay>
          <DateText>{format(startDate, 'yyyy/MM/dd')}</DateText>
          <Separator>~</Separator>
          <DateText>{format(endDate, 'yyyy/MM/dd')}</DateText>
        </DateDisplay>
        <CalendarContainer>
          <StyledCalendar
            selectRange={true}
            onChange={onDateChange}
            value={dateRange}
            calendarType="gregory"
            showNeighboringMonth={false}
            next2Label={null}
            prev2Label={null}
            minDetail="year"
            formatDay={(locale, date) => moment(date).format('D')} // 일 제거 숫자만 보이게
            formatYear={(locale, date) => moment(date).format('YYYY')} // 네비게이션 눌렀을때 숫자 년도만 보이게
            formatMonthYear={(locale, date) => moment(date).format('YYYY. MM')} // 네비게이션에서 2023. 12 이렇게 보이도록 설정
          />
        </CalendarContainer>
        <ToggleLabel>
          <span style={{ marginLeft: '10px' }}>시간 설정 표시</span>
          <ToggleSwitch
            type="checkbox"
            checked={showTime}
            onChange={handleToggleChange}
          />
        </ToggleLabel>
        {showTime && (
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
        )}
      </PlanBottom>
    </PlanContainer>
  );
}

export default PlanRoom;
