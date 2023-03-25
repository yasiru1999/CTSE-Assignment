import React from 'react';
import { Card, EventImage } from '../styles/all';
import { CardContent, Controls, DeleteButton, Mycardcontent, MyCardImage, MyCardInfo, MyCardTitle, UpdateButton } from '../styles/myevent';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigatorIOS } from 'react-native';
import { View, Image } from "react-native";


function MyEventCard({ item, del, navmethod, type = false }) {
    return (
        <Card>
            <Mycardcontent>
                <View
                // onPress={() => navigation.navigate("UpdateFuelComent", { cid: cmt._id, id: tip._id, textEdit: cmt.comments })}
                >
                    {/* <Image source={{ uri: item.img }} style={{ marginTop: -17, marginLeft: 250 }} /> */}
                    <EventImage source={{ uri: item.img }} />
                </View>
                <MyCardTitle>
                    {item.title}
                </MyCardTitle>
                <CardContent>
                    <MyCardImage source={{ uri: item.img1 }} />
                    <MyCardInfo>
                        Date {item.date}
                    </MyCardInfo>
                    <MyCardInfo>
                        Time {item.time}
                    </MyCardInfo>
                    <MyCardInfo>
                        Venue {item.venue}
                    </MyCardInfo>

                    {!type &&
                        <Controls>
                            <UpdateButton onPress={() => navmethod(item)}>
                                <FontAwesome5 name='edit' size={20} color="orange" />
                            </UpdateButton>

                            <DeleteButton>
                                <MaterialCommunityIcons onPress={() => del(item._id)} name='delete-outline' color="red" size={30} />
                            </DeleteButton>

                        </Controls>
                    }
                </CardContent>
            </Mycardcontent>

        </Card>
    );
}

export default MyEventCard;