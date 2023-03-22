import React from 'react';
import { Car2, Card, Card2 } from '../styles/all';
import { CardContent, Controls, DeleteButton, Mycardcontent, MyCardImage, MyCardInfo, MyCardTitle, UpdateButton } from '../styles/mypost';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigatorIOS } from 'react-native';

function MyCard({ item, del, navmethod }) {
    return (
        <Car2>
            <Mycardcontent>
                <MyCardTitle>
                    {item.title}
                </MyCardTitle>
                <CardContent>
                    <MyCardImage source={{ uri: item.img1 }} />
                    <MyCardInfo>
                        {item.Description}
                    </MyCardInfo>
                    <Controls>
                        <UpdateButton onPress={() => navmethod(item)}>
                            <FontAwesome5 name='edit' size={20} color="orange" />
                        </UpdateButton>

                        <DeleteButton>
                            <MaterialCommunityIcons onPress={() => del(item._id)} name='delete-outline' color="red" size={30} />
                        </DeleteButton>

                    </Controls>
                </CardContent>
            </Mycardcontent>

        </Car2>
    );
}

export default MyCard;