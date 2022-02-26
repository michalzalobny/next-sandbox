import styled from 'styled-components';
import { motion } from 'framer-motion';

import { SelectItem } from './components/SelectItem/SelectItem';
import { Arrow } from './svg/Arrow';

const bgColor = 'white';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const SelectItemComp = styled(SelectItem)`
  padding: 0 15px;
  transition: background-color 0.5s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const ExpandContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${bgColor};
  color: ${bgColor};

  &:before {
    content: '';
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.08);
  }
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  max-height: 200px;
  overflow: auto;
`;

export const ArrowSvg = styled(Arrow)`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ArrowWrapper = styled(motion.div)`
  position: absolute;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  width: 10px;

  &:before {
    content: '';
    display: block;
    width: 100%;
    padding-bottom: 100%;
  }
`;

export const SelectedItemsWrapper = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
  text-align: left;
  position: relative;
  padding: 0 15px;
`;

export const SelectedTextWrapper = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  width: 100%;
`;

export const SelectedItemText = styled.p`
  font-size: 16px;
  padding: 15px 0;
  font-weight: 800;
  pointer-events: none;
  color: black;
  margin-right: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 80%;
`;
