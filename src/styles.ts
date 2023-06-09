import styled from "@emotion/styled";

export type WrapperProps = {
  height: number;
  width: number;
};

export const Wrapper = styled.div<WrapperProps>`
  border: none;
  background-color: white;
  border-radius: ${({ height }) => `${height}px`};
  box-sizing: content-box;
  cursor: pointer;
  height: ${({ height }) => `${height}px`};
  padding: 4px;
  width: ${({ width }) => `${width}px`};
`;

export const Inner = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`;

export type SelectedProps = {
  height: number;
  index: number;
  isVertical?: boolean;
  length: number;
  width: number;
};

export const Selected = styled.div<SelectedProps>`
  background: #aaa;
  border-radius: 50%;
  height: ${({ height, isVertical, width }) =>
    `${isVertical ? width : height}px`};
  left: ${({ height, index, isVertical, length }) =>
    !index || isVertical
      ? 0
      : `calc(((100% - ${height}px) / ${length - 1}) * ${index})`};
  position: absolute;
  transition: 100ms;
  top: ${({ index, isVertical, length, width }) =>
    isVertical ? `calc(((100% - ${width}px) / ${length - 1}) * ${index})` : 0};
  width: ${({ height, isVertical, width }) =>
    `${isVertical ? width : height}px`};
`;

export const Select = styled.select`
  display: none;
`;
