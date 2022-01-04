import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import ItemListMobilComponent from '../components/ItemListMobilComponent';

const MobilScreenComponent = () => {
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Cari E-Tiket"
        placeholderTextColor={'#000'}
        style={styles.searchbar}
        iconColor="#FF8922"
      />
      <View style={styles.filters}>
        <TouchableOpacity style={styles.filters.filter}>
          <Text style={styles.filters.filter.label}>Berlangsung</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.filters.filter, {marginLeft: 12}]}>
          <Text style={styles.filters.filter.label}>Selesai</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>
        <ItemListMobilComponent
          title="AEON Mall  JGC"
          subTitle="Lt.P2-B4-01"
          time="12.30 WIB"
          date="30 Desember 2021"
          status="Telah Selesai"
        />
        <ItemListMobilComponent
          title="AEON Mall  JGC"
          subTitle="Lt.P2-B4-01"
          time="12.30 WIB"
          date="30 Desember 2021"
          status="Telah Selesai"
        />
        <ItemListMobilComponent
          title="AEON Mall  JGC"
          subTitle="Lt.P2-B4-01"
          time="12.30 WIB"
          date="30 Desember 2021"
          status="Telah Selesai"
        />
        <ItemListMobilComponent
          title="AEON Mall  JGC"
          subTitle="Lt.P2-B4-01"
          time="12.30 WIB"
          date="30 Desember 2021"
          status="Telah Selesai"
        />
        <ItemListMobilComponent
          title="AEON Mall  JGC"
          subTitle="Lt.P2-B4-01"
          time="12.30 WIB"
          date="30 Desember 2021"
          status="Telah Selesai"
        />
        <ItemListMobilComponent
          title="AEON Mall  JGC"
          subTitle="Lt.P2-B4-01"
          time="12.30 WIB"
          date="30 Desember 2021"
          status="Telah Selesai"
        />
        <ItemListMobilComponent
          title="AEON Mall  JGC"
          subTitle="Lt.P2-B4-01"
          time="12.30 WIB"
          date="30 Desember 2021"
          status="Telah Selesai"
        />
        <ItemListMobilComponent
          title="AEON Mall  JGC"
          subTitle="Lt.P2-B4-01"
          time="12.30 WIB"
          date="30 Desember 2021"
          status="Telah Selesai"
        />
        <ItemListMobilComponent
          title="AEON Mall  JGC"
          subTitle="Lt.P2-B4-01"
          time="12.30 WIB"
          date="30 Desember 2021"
          status="Telah Selesai"
        />
        <ItemListMobilComponent
          title="AEON Mall  JGC"
          subTitle="Lt.P2-B4-01"
          time="12.30 WIB"
          date="30 Desember 2021"
          status="Telah Selesai"
        />
      </ScrollView>
    </View>
  );
};

export default MobilScreenComponent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  searchbar: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
  },
  filters: {
    flexDirection: 'row',
    marginTop: 12,
    filter: {
      backgroundColor: '#FF9A6C',
      width: 120,
      paddingVertical: 12,
      alignItems: 'center',
      borderRadius: 20,
      label: {
        color: '#FFF',
      },
    },
  },
  content: {
    marginTop: 30,
  },
});
