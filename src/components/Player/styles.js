import styled from 'styled-components';

export const Container = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #282828;
  padding: 25px;
`;

export const Current = styled.div`
  width: 220px;
  display: flex;
  align-items: center;

  img {
    width: 45px;
    height: 45px;
  }
  div {
    margin-left: 12px;
    display: flex;
    flex-direction: column;

    span {
      font-size: 13px;
    }
    small {
      font-size: 12px;
      color: #b3b3b3;
      margin-top: 5px;
    }
  }
`;

export const Progress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;

  button {
    background: transparent;
    border: 0;
    margin: 0 15px;
  }
`;

export const Volume = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  margin-right: 20px;

  img {
    margin-right: 5px;
  }
`;

export const Time = styled.div`
display: flex;
align-items: center
margin-top: 5px;
span{
  font-size: 11px;
   color: #b3b3b3;
}
`;

export const ProgressStyle = styled.div`
  width: 500px;
  margin: 0 15px;
`;
