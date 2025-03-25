import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Carousel, Colors, Spacings } from 'react-native-ui-lib';

const HomeScreen = () => {
  const carouselImages = [
    "https://media.diy.com/is/image/KingfisherDigital/8b8ee8838a6e1da3b7d9132a13304247173dcbea?$WCMS_NPI_FW_M$",
    "https://media.diy.com/is/image/KingfisherDigital/3ce7340454512723d2e565188d66dbe842efa91f?$WCMS_NPI_FW_M$",
    "https://media.diy.com/is/image/KingfisherDigital/bacab61641eb3a8d3af5cb6213c327ab53e6969f?$WCMS_NPI_FW_M$"
  ]

  const categoryImages = [
    "https://s7g10.scene7.com/is/image/KingfisherDigital/59caa93f1118ffd4c927dc51c27b859352b76976?$WCMS_NPI_FW_S$",
    "https://s7g10.scene7.com/is/image/KingfisherDigital/d5125aaf915e77ea7d4ef7438c8aafaf65fc6052?$WCMS_NPI_FW_S$",
    "https://s7g10.scene7.com/is/image/KingfisherDigital/d60c452a4bcac80740dc591ab958cf513c215ddd?$WCMS_NPI_FW_S$",
    "https://s7g10.scene7.com/is/image/KingfisherDigital/44a9f39a20ad40efa03798fb6cc8b231d184b804?$WCMS_NPI_FW_S$",
    "https://s7g10.scene7.com/is/image/KingfisherDigital/8641460d3104d760e5cb1fdb7042100a1a40fd56?$WCMS_NPI_FW_S$",
    "https://s7g10.scene7.com/is/image/KingfisherDigital/1068e80558f6b72fac98a0d673a158ba6abd33bd?$WCMS_NPI_FW_S$",
    "https://media.diy.com/is/image/KingfisherDigital/WCMS_sq_img?$bgc=ededed&$fgi=KingfisherDigital/4812c7df885bb91390bee67fcb34d1f01b87d907"
  ]
  return (
    <ScrollView>
      <View style={styles.headerBackground} />
      <View style={{ marginTop: 40, paddingHorizontal: 16, paddingBottom: 16 }}>
        <View style={styles.searchInput}>
          <Ionicons size={28} color="white" name="search-outline" style={{ marginRight: 8 }} />
          <Text style={{ color: 'white', fontSize: 20 }}>Search our products</Text>
          <Ionicons size={28} color="white" name="barcode-outline" style={{ marginLeft: 'auto' }} />
        </View>
      </View>
      <View style={{ paddingVertical: 16, paddingHorizontal: 16, flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: "#000000" }}>
        <Button
          label="Sign in"
          onPress={() => { }}
          borderRadius={5}
          backgroundColor="#ffe500"
          color="#000000"
          size={Button.sizes.large}
          labelStyle={{ fontSize: 20, fontWeight: "bold" }}
          paddingH={true} />
        <Button
          label="Register"
          onPress={() => { }}
          outline={true}
          outlineColor={Colors.white}
          borderRadius={5}
          size={Button.sizes.large}
          labelStyle={{ fontSize: 20, fontWeight: "bold" }} />
      </View>
      <Image
        source={{
          uri: "https://media.diy.com/is/image/KingfisherDigital/7d0947d3b14bf59dfe30ef421761c6ae57e43479?$BQ_HBT_D$"
        }}
        style={{ height: 100, width: "100%" }}
      />
      <View style={{ marginTop: 16, width: "100%" }}>
        <Carousel
          pageWidth={350 - Spacings.s5 * 2}
          itemSpacings={Spacings.s3}
          containerMarginHorizontal={Spacings.s1}
          containerStyle={{ height: 300 }}
        >
          {carouselImages.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={{ height: 300, width: 300 }}
            />
          ))}
        </Carousel>
      </View>

      <View style={{ marginTop: 16, width: "100%" }}>
        <Text style={{ fontWeight: "bold", textAlign: "center", fontSize: 25, marginBottom: 16 }}>Popular categories</Text>
        <Carousel
          pageWidth={250 - Spacings.s5 * 2}
          itemSpacings={Spacings.s3}
          containerMarginHorizontal={Spacings.s1}
          containerStyle={{ height: 200 }}
        >
          {categoryImages.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={{ height: 200, width: 200 }}
            />
          ))}
        </Carousel>
      </View>
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  headerBackground: {
    position: 'absolute',
    top: 0,
    width: '100%',
    alignItems: 'center',
    height: 110,
    backgroundColor: '#252324',
  },
  searchInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#3d3d3d',
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
  },
  headerCard: {
    elevation: 2,
    backgroundColor: 'white',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default HomeScreen;
