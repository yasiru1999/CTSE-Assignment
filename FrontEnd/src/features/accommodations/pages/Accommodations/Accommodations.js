import NavigationBottomBar from "../../../../components/NavigationBottomBar";
import SideBar from "../../../../components/SideBar";
import { Container, PageTitle, TopNav, IconView, SearchView } from "./Accommodations.style";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, ScrollView } from "react-native";
import { Searchbar } from 'react-native-paper';
import { useEffect, useState } from "react";
import AccommodationCard from "../../components/AccommodationCard/AccommodationCard";
import { GET, POST } from '../../../../helpers/httphelper';

function Accommodations({ navigation }) {

  const [searchQuery, setSearchQuery] = useState('');
  const [accommodations, setAccommodations] = useState([]);

  const handleFetchAllAccommodations = async () => {
    try {
      const res = await GET('api/accommodations/get/all');
      setAccommodations(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleSearchByName = async () => {
    try {
      if (searchQuery === '') {
        handleFetchAllAccommodations();
      } else {
        let ob = {
          title: searchQuery
        }
        const res = await POST('api/accommodations/search', ob);
        setAccommodations(res.data);
        console.log(res)
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    handleFetchAllAccommodations();
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
          <PageTitle>Accommodations</PageTitle>
        </View>
        <IconView>
          <Icon name="plus-circle" size={32} color="#42a1f5" onPress={() => navigation.navigate("CreateAccomadation")} />
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
        {accommodations?.map((accommodation, index) => (
          <AccommodationCard
            key={index}
            data={accommodation}
            isOwner={false}
            navigation={navigation}
          />
        ))}
      </ScrollView>
      <NavigationBottomBar navigation={navigation} />
    </Container>
  )
}

export default Accommodations;
