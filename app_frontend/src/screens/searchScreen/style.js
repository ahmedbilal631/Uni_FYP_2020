import { StyleSheet } from 'react-native';


export default styles = StyleSheet.create({
    searchContainer: {
        paddingTop: 20,
        paddingBottom: 10,
        height:'auto',
        borderBottomWidth:1,
        borderColor:"grey"
    },
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
    searchInput: {
        color: '#f5f5f5',
        // color: '#fe3562',
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginHorizontal: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    camIcon: {
        marginTop: 10
    },
    itemStyle: {
        borderColor: 'transparent'
    },
    itemStyle1: {
        borderColor: 'transparent',
        marginTop:5
    },
    filterContainer: {

        marginLeft: 15,
        marginTop: 10,
        backgroundColor:"transparent",
        borderWidth:0,
        flexDirection: 'row',
        // flex: 1
    },
    filterImage: {
        width: 90,
        height: 90,
        borderRadius: 50
    },
    cardContainer: {
        marginHorizontal: 10
    },
    cardInnerContainer: {
        flexDirection: 'row',
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nameText: {
        fontSize: 10
    },
    textContainer: {
        flex: 1,
        marginLeft: 10
    },
    readMore: {
        color: '#0366d6',
        fontSize: 12,
        paddingTop: 2
    },
    filtersContainer:{
        borderTopWidth:2,
        borderColor:"#fff",
        marginTop:10,
        marginHorizontal:15,
    },
    selectBoxesContainer:{
        flexDirection: 'row',
        justifyContent: "space-between",
    }
    ,
    cameraIconBtn: {
        backgroundColor:"transparent"
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
      filterBtn: {
          color: "white",
          borderColor: "white",
          width: "50%",
          alignSelf: "center",
          justifyContent: 'center',
          marginTop: 20,
          borderRadius: 5,

      }
})