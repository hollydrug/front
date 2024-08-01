import { useEffect, useState } from 'react';
import {
  DetailContainer,
  DetailMain,
  DetailNavContainer,
  DetailSub,
  DetailWrapper,
} from '../Detail/DetailPage';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { detailDataState, presDataArrayState } from '../../atoms/atom';
import DetailContent from '../../components/detail/DetailContent';
import DetailNav from '../../components/detail/DetailNav';
import { Outlet } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import styled from 'styled-components';

const PrescriptionDetailPage = () => {
  const setDetailData = useSetRecoilState(detailDataState);
  const DataArray = useRecoilValue(presDataArrayState);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [leftEnable, setLeftEnable] = useState(false);
  const [rightEnable, setRightEnable] = useState(false);
  useEffect(() => {
    setDetailData(DataArray[currentIndex]);
    setLeftEnable(!(currentIndex === 0));
    setRightEnable(currentIndex < DataArray.length - 1);
    console.log(currentIndex < DataArray.length - 1);
  }, [currentIndex, DataArray, setDetailData]);

  const handleLeftButton = () => {
    if (currentIndex === 0) {
      return;
    }
    setCurrentIndex(currentIndex - 1);
  };
  const handleRightButton = () => {
    if (currentIndex === DataArray.length - 1) {
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <DetailContainer>
      <Title>
        내 처방전 정보 ({currentIndex + 1}/{DataArray.length})
      </Title>
      <Left
        size={30}
        onClick={handleLeftButton}
        color={leftEnable ? 'black' : 'gray'}
      />
      <DetailWrapper>
        <DetailMain>
          <DetailContent />
        </DetailMain>
        <DetailNavContainer>
          <DetailNav />
        </DetailNavContainer>
        <DetailSub>
          <Outlet />
        </DetailSub>
      </DetailWrapper>
      <Right
        size={30}
        onClick={handleRightButton}
        color={rightEnable ? 'black' : 'gray'}
      />
    </DetailContainer>
  );
};

export default PrescriptionDetailPage;

const Title = styled.p`
  font-family: BitBit;
  margin-bottom: 20px;
  font-size: 25px;
`;

const Left = styled(FaAngleLeft)`
  position: absolute;
  left: calc(50vw - 500px);
  top: 270px;
`;

const Right = styled(FaAngleRight)`
  position: absolute;
  right: calc(50vw - 500px);
  top: 270px;
`;