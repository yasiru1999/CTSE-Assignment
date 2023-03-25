import NavigationBottomBar from "../../../components/NavigationBottomBar";
import SideBar from "../../../components/SideBar";
import { Container, PageTitle, TopNav, IconView, SearchView } from "./Transportation.style";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, ScrollView } from "react-native";
import { Searchbar } from 'react-native-paper';
import { useEffect, useState } from "react";
import TransportationCard from "../Components/TransportationCard";
import { GET, POST } from '../../../helpers/httphelper';

function Transportation({ navigation }) {

  const [searchQuery, setSearchQuery] = useState('');
  const [transportation, setTransportation] = useState([]);

  const handleFetchAllTransportation = async () => {
    try {
      const res = await GET('api/transportation/getAllTransportations');
      setTransportation(res.data);
    } catch (err) {
      console.log(err);
    }
  }


  const handleSearchByName = async () => {
    try {
      if (searchQuery === '') {
        handleFetchAllTransportation();
      } else {
        let ob = {
          title: searchQuery
        }
        const res = await POST('api/accommodations/search', ob);
        setTransportation(res.data);
        console.log(res)
      }
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    handleFetchAllTransportation();
  }, []);

  useEffect(() => {
    handleSearchByName();
  }, [searchQuery]);

  return (
    <Container>
      <SideBar navigation={navigation} />
      <TopNav>
        <View style={{ width: 30 }}></View>
        <View>
          <PageTitle>Transportation</PageTitle>
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

      <ScrollView style={{ marginBottom: "20%",width: "90%" }}>
        {transportation?.map((Transportation, index) => (
          <TransportationCard
            key={index}
            data={Transportation}
            isOwner={false}
            navigation={navigation}
          />
        ))}
      </ScrollView>
      
      <NavigationBottomBar navigation={navigation} />
    </Container>
  )
}

export default Transportation;