import NavigationBottomBar from "../../../../components/NavigationBottomBar";
import SideBar from "../../../../components/SideBar";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, PageTitle, TopNav, IconView, SearchView } from "../Accommodations/Accommodations.style";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { GET, POST, DELETE } from '../../../../helpers/httphelper';
import { View, ScrollView } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import AccommodationCard from "../../components/AccommodationCard/AccommodationCard";
import { Searchbar } from 'react-native-paper';
import { useEffect, useState } from "react";


function MyAccommodations({ navigation }) {

  const [searchQuery, setSearchQuery] = useState('');
  const [reports, setReports] = useState([]);
  const [userId, setUserId] = useState('');
  const focus = useIsFocused();

  const handleDeleteReportById = async (id) => {
    try {

      const res = await DELETE(`api/accommodations/delete/${id}`, {});
      alert(res.message);
      handleFetchAllReportsById();

    } catch (err) {

      console.log(err);

    }
  }

  const handleFetchAllReportsById = async () => {
    try {

      if (userId !== '') {
        const res = await GET(`api/accommodations/get/user/${userId}`);
        setReports(res.data);
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
          name: searchQuery,
          user: userId

        }
        const res = await POST('api/accommodations/search/user', ob);
        setReports(res.data);
        console.log(res)

      }
    } catch (err) {
      console.log(err);
    }
  };

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
          <PageTitle>Accommodations</PageTitle>
        </View>
        <IconView>
          <Icon name="plus-circle" size={32} color="#42a1f5" onPress={() => navigation.navigate("CreateAccomadation")} />
        </IconView>
      </TopNav>
      
      <SearchView>
        <Searchbar
          placeholder="Search"
          style={{ width: "90%" }}
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
        />
      </SearchView>
      <ScrollView style={{ marginBottom: "20%" }}>
        {reports?.map((report, index) => (
          <AccommodationCard
            key={index}
            data={report}
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

export default MyAccommodations;
