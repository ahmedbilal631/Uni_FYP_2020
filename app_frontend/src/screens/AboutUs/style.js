import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  heading: {
    color: "white",
    marginTop: 5,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  headerIcon: {
    fontSize: 30,
    color: "white"
  },
  cardContainer: {
    flexDirection: "row",
    paddingLeft: 5,
    marginTop: 20
  },
  cardInnerContainer: {
    flexDirection: "row",
    width: "25%"
    // paddingLeft: 10,
  },
  creditorsThumbail: {
    flexDirection: "row",
    width: "20%"
  },

  filterContainer: {
    marginLeft: 15,
    marginTop: 10,
    flexDirection: "row",
    flex: 1
  },
  AboutApp: {
    flexDirection: "column",
    paddingRight: 15,
    paddingLeft: 15,
    width: "75%",
    marginLeft: 10,
  },
  aboutappHeading: {
    fontWeight: "bold"
  },
  devName: {
    fontWeight: "bold",
    color: "white",
  },
  devDescription: {
    color: "lightgray",
    fontSize: 14
  },
  aboutappBody: {
    color: "gray",
    fontSize: 14
  },
  contactHeadView: {
    flexDirection: "row",
    width: "80%",
    alignSelf: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderRadius: 30,
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 30,
    elevation: 7,

  },
  contectIcon: {
    color: "white",
    fontSize: 25
  },
  creditsContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,

  },
  cardBody: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 15,
  },
  cardContent: {
    flexDirection: "column",
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
    borderRightWidth: 0,
    borderRadius: 10,
    elevation: 5,
  },
  headerCardItem: {
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    borderRadius: 10,
  },
 
});
