import {Dimensions} from 'react-native'


export default (styles = {
  header: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  heading: {
    color: "white",
    marginTop: 5,
    fontWeight:'bold'
  },
  
  btnBorder: {
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#05CE1D"
  },
  descripionText: {
    fontSize: 14
  },
  ShortLocataionText: {
    fontSize: 15,

    color: "gray"
  },
  bottomStyleView: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: "100%"
  },
  topLeftAboutDetail: {
    fontSize: 14,
    fontWeight: "bold"
  },
  topLeftAbout: {
    fontSize: 15,
    color: "gray"
  },
  PersonalDetailView: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 5
  },
  missingPersonTitle: {
    textAlign: "left",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10
  },
  topDetails: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingRight: 10
  },
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 5
  },
  imagePadding: {
    padding: 20
  },
  modalClose: {
    position: "absolute",
    right: 0,
    padding: 20,
    color: "white",
    zIndex: 1
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,.9)"
  },
  modalImage: {
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    maxWidth: Dimensions.get("window").width,
    // maxHeight: Dimensions.get("window").height
  },
  postedByText: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    paddingVertical: 20
  }
});
