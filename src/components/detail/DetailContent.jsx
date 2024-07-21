import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { detailDataState } from '../../atoms/atom';

// 이미지 경로에 오류가 생겼는지 수동으로 src 설정해도 계속 안 불러와져서 이쪽 레이아웃은 일단 그냥 냅뒀습니다. 빠른 시일 내로 수정해서 다시 올릴게요.

const DetailContent = () => {
  const { itemImage, itemName, efcyQesitm } = useRecoilValue(detailDataState);
  return (
    <DetailContentContainer>
      <Contents>
        <ImgArea>
          <PillImage src='../../assets/medicineImg.png' alt='알약 이미지' />
        </ImgArea>
        <TextArea>
          <MedicineTitle>{itemName}</MedicineTitle>
          <MedicineEfficacy>{efcyQesitm}</MedicineEfficacy>
        </TextArea>
      </Contents>
    </DetailContentContainer>
  );
};

export default DetailContent;

const DetailContentContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  background-color: white;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Contents = styled.div`
  width: 600px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  padding-right: 10px;
`;

const ImgArea = styled.div`
  position: absolute;
  margin-top: 15px;
  width: 64px;
  height: 64px;
`;

const TextArea = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-left: 75px;
  width: 530px;
  height: 150px;
  gap: 10px;
`;

const MedicineTitle = styled.h1`
  font-size: 30px;
  margin: 15px 0;
  padding-left: 5px;
`;

const MedicineEfficacy = styled.div`
  padding: 5px;
`;

const PillImage = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 3px solid #bababa;
  border-radius: 2px;
`;
