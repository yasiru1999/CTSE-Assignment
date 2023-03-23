import styled from "styled-components";

export const InputView = styled.View`
  height: auto;
  width: 350px;
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  flex:1 ;
  border: 1px;
  border-color: gray;
  padding: 5px;
  border-radius: 5px;
  margin-top: 3px;
`;

export const TextArea = styled.TextInput`
  border: 1px;
  border-color: gray;
  padding: 5px;
  border-radius: 5px;
  margin-top: 3px;
  margin-bottom: 10px;
`;

export const Caution = styled.Text`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  width: 350px;
  padding: 10px;
  margin: 10px 0;
  text-align: center;
`;

export const ButtonView = styled.Text`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
