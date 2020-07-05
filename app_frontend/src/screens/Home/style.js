import { StyleSheet, Dimensions } from "react-native";
import { Left } from "native-base";
const { height, width } = Dimensions.get("window");



var appColor = '#05CE1D';


export const styles1 = StyleSheet.create({
   
  header: {
    // height: 175,
    // alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
    aspectRatio: 1.8,
    textAlign: "center"
  },
  searchIcon: {
    color: "white",
    fontSize: 35
  },
  // addIconView: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   // height:500
  // },
  addNewButton: {
    alignItems: "center",
    width: 50,
    // alignSelf:'center',
    position: "absolute",
    bottom: 10,
    right: 10,
    justifyContent: "center",
    height: 50,
    borderRadius: 100,
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    elevation: 3,
    zIndex: 999,
    shadowRadius: 15
  },
  cardContainer: {
    marginHorizontal: 10
  },
  cardInnerContainer: {
    flexDirection: "row"
  },
  cardHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  top_container: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  searchInput: {
    color: "#f5f5f5",
    backgroundColor: "#fff",
    flexDirection: "row",
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  camIcon: {
    marginTop: 10
  },
  itemStyle: {
    borderColor: "transparent"
  },
  filterContainer: {
    marginLeft: 15,
    marginTop: 10,
    flexDirection: "row",
    flex: 1
  },
  filterImage: {
    width: 90,
    height: 90,
    borderRadius: 50
  },
  cardContainer: {
    marginHorizontal: 10,
    zIndex: -1
  },
  cardInnerContainer: {
    flexDirection: "row"
  },
  cardHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  nameText: {
    fontSize: 10
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  readMore: {
    color: "#0366d6",
    fontSize: 12,
    paddingTop: 2
  },
  headerCenterText: {
    alignSelf: "center",
    color: "#fff",
    position: "absolute",
    paddingHorizontal: 70,
    fontSize: 20,
    flexWrap: "wrap",
    width: "100%",
    textAlign: "center"
    // textTransform: 'uppercase'
  },
  headerCardContainer: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0
  },
  headerCardItem: {
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0
  },
  modalClose: {
    position: "absolute",
    right: 0,
    padding: 20,
    color: "white"
   
    

  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.4)"
  },
  modalImage: {
    width: "100%",
    alignSelf: "center",
    height: 300,
    justifyContent:"center"
  },
  shareIcon:{
    marginTop: -5,
    fontSize: 25,
    color: "gray",
    paddingLeft: 15,
    paddingTop: 15,

  }
});
