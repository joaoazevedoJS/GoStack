import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  display: flex;
  place-content: center;

  span {
    width: 160px;
    color: #312e38;
    background: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;

    display: flex;
    place-content: center;

    position: absolute;
    bottom: calc(100% + 12px);

    &::before {
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;

      position: absolute;
      top: 100%;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
