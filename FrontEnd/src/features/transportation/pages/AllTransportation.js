import NavigationBottomBar from "../../../components/NavigationBottomBar";
import SideBar from "../../../components/SideBar";
import { Container, PageTitle, TopNav, IconView, SearchView } from "./Transportation.style";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, ScrollView } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import { Searchbar } from 'react-native-paper';
import { useEffect, useState } from "react";
import TransportationCard from "../Components/TransportationCard";
import { GET, POST, DELETE } from '../../../helpers/httphelper';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AllTranportation({ navigation }) {

  const [searchQuery, setSearchQuery] = useState('');
  const [transportation, setTransportation] = useState([]);
  const [userId, setUserId] = useState('');
  const focus = useIsFocused();

  const handleDeleteReportById = async (id) => {
    try {
      const res = await DELETE(`api/transportation/deleteTransportationById/${id}`, {});
      alert(res.message);
      handleFetchAllReportsById();
    } catch (err) {
      console.log(err);
    }
  }

  const handleFetchAllReportsById = async () => {
    try {
      if (userId !== '') {
        const res = await GET(`api/transportation/getAllTransportationsByUserId/${userId}`);
        setTransportation(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleGetUserId = async () => {
    try {
      const value = await AsyncStorage.getItem('uid');
      if (value !== null) {
        setUserId(value);
        handleFetchAllReportsById();
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleSearchByName = async () => {
    try {
      if (searchQuery === '') {
        handleFetchAllReportsById();
      } else {
        let ob = {
          title: searchQuery,
          user: userId
        }
        const res = await POST('api/transportation/searchTransportationsByName', ob);
        setTransportation(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    handleGetUserId();
  }, [focus]);

  useEffect(() => {
    handleFetchAllReportsById();
  }, [userId]);

  useEffect(() => {
    handleSearchByName();
  }, [searchQuery]);

  return (
    <Container>
      <SideBar navigation={navigation} />
      <TopNav>
        <View style={{ width: 30 }}></View>
        <View>
          <PageTitle>Tranportation</PageTitle>
        </View>
        <IconView>
          <Icon name="plus-circle" size={32} color="#42a1f5" onPress={() => navigation.navigate("Addtransportation")} />
        </IconView>
      </TopNav>
      <SearchView>
        <Searchbar
          placeholder="Search"
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
          style={{ width: "90%" }}
        />
      </SearchView>
      <ScrollView style={{ marginBottom: "20%" }}>
        {transportation?.map((Transportation, index) => (
          <TransportationCard
            key={index}
            data={Transportation}
            isOwner={true}
            deleteFunc={handleDeleteReportById}
            navigation={navigation}
          />
        ))}
      </ScrollView>
      <NavigationBottomBar navigation={navigation} />
    </Container>
  )
}

export default AllTranportation;
