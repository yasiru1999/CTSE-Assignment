import NavigationBottomBar from "../../../../components/NavigationBottomBar";
import SideBar from "../../../../components/SideBar";
import { Container, PageTitle, TopNav, IconView, SearchView } from "./Reports.style";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, ScrollView } from "react-native";
import { Searchbar } from 'react-native-paper';
import { useEffect, useState } from "react";
import ReportCard from "../../components/ReportCard/ReportCard";
import { GET, POST } from '../../../../helpers/httphelper';

function Reports({ navigation }) {

  const [searchQuery, setSearchQuery] = useState('');
  const [reports, setReports] = useState([]);

  const handleFetchAllReports = async () => {
    try {
      const res = await GET('api/reports/get/all');
      setReports(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleSearchByName = async () => {
    try {
      if (searchQuery === '') {
        handleFetchAllReports();
      } else {
        let ob = {
          title: searchQuery
        }
        const res = await POST('api/reports/search', ob);
        setReports(res.data);
        console.log(res)
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    handleFetchAllReports();
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
          <PageTitle>Reports</PageTitle>
        </View>
        <IconView>
          <Icon name="plus-circle" size={32} color="#42a1f5" onPress={() => navigation.navigate("CreateReport")} />
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
        {reports?.map((report, index) => (
          <ReportCard
            key={index}
            data={report}
            isOwner={false}
            navigation={navigation}
          />
        ))}
      </ScrollView>
      <NavigationBottomBar navigation={navigation} />
    </Container>
  )
}

export default Reports;
