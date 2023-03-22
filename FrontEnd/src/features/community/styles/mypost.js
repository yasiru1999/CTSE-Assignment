import styled from "styled-components";

export const Mycardcontent = styled.View`
display: flex;
padding: 5px;
width: 100%;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const MyCardTitle = styled.Text`
font-size: 20px;
width:310px;
align-self: center;
color:"grey";
font-weight: bold;
align-self: center;
`

export const CardContent = styled.View`
display: flex;
margin-top: 10px;
flex-direction: row;
justify-content: center;
align-items: center;
`
export const MyCardImage = styled.Image`
height: 120px;
width: 190px;
flex: 1;
`

export const MyCardInfo = styled.Text`
font-size: 15px;
margin-left: 5px;
flex: 1;
margin-right: 10px;
`

export const Controls = styled.View`
display: flex;
align-items: center;
flex-direction: column;
`
export const UpdateButton = styled.TouchableOpacity`
margin-top:-10px;
`

export const DeleteButton = styled.TouchableOpacity`
margin-top: 20px;
`

export const HeadText = styled.Text`
font-size: 30px;
margin-bottom: 10px;
color: #0099FF;
`

export const NText = styled.Text`
font-size: 20px;
`

export const NoPost = styled.View`
padding: 10px;
margin-top: 30px;
width: 90%;
align-items: center;
background-color: lightgray;
`