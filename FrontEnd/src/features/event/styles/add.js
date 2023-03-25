import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  margin-top: 30px;
  align-items: center;
`;

export const TitleText = styled.Text`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: bold;
`;
export const SelectContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ImageContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  align-items: center;
`;
export const SelectImage = styled.Image`
  width: 60px;
  height: 50px;
`;

export const InputContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

export const InputView = styled.View`
  height: 70px;
  width: 300px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.2;
  shadow-radius: 2;
  elevation: 2;
`;

export const InputTextArea = styled.View`
  height: 100px;
  width: 300px;
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  flex: 1;
  border: 1px;
  border-color: gray;
  padding: 5px;
  border-radius: 5px;
  margin-top: 3px;
  margin: 5px;
`;
export const OneSwitch = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SwichGroup = styled.View`
  display: flex;
  margin-top: 13px;
  justify-content: space-around;
  flex-direction: row;
`;

export const SearchView = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const BackPage = styled.TouchableOpacity`
  background-color: #1AB65C;
  width: 280px;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 60px;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  shadow-color: #000;
  shadow-offset: {
    width: 0,
    height: 2,
  };
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

export const PageTitle = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: black;
`;
