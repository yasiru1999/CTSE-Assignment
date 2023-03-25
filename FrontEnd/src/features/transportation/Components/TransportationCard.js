import React from 'react';
import { Text, Card, Button } from '@rneui/themed';
import { Location, Title, ButtonView } from './TransportationCard.style';
import Icon from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';

function TransportationCard({ data, isOwner, deleteFunc, navigation }) {

  return (
    <Card>
      <Title>{data.title}</Title>
      <Card.Divider />
      <Card.Image
        style={{ padding: 0 }}
        source={{
          uri: data.Image
        }}
      />
      <Location>
        <Icon name="location" size={20} color="#42a1f5" />
        Start - {data.origin} | Destination - {data.destination}
      </Location>
      <Location>
        <Icon name="timer" size={20} color="#42a1f5" />
        {data.date}
      </Location>
      <Text style={{ marginBottom: 10 }}>
        {data.typeOfTransportation}
      </Text>
      {isOwner && <ButtonView>
        <View style={{ width: "50%" }}>
          <Button
            icon={
              <Icon
                name="create"
                size={20}
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              width: "100%",
              backgroundColor: "#42a1f5",
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Edit"
            onPress={() => navigation.navigate('Edittranportation', { id: data._id })}
          />
        </View>
        <View style={{ width: "50%", margin: 10 }}>
          <Button
            icon={
              <Icon
                name="trash"
                size={20}
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              width: "100%",
              backgroundColor: "red",
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Delete"
            onPress={() => { deleteFunc(data._id) }}
          />

        </View>
      </ButtonView>}
    </Card>
  )
}

export default TransportationCard;