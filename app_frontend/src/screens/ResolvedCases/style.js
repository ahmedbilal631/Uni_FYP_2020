import { StyleSheet } from 'react-native';


export default styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: '#05CE1D',
        paddingTop: 20,
        paddingBottom: 10,
        height:'auto',
        borderBottomWidth:1,
        borderColor:"grey"
    },
    searchInput: {
        color: '#f5f5f5',
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
        borderWidth:0
        // flexDirection: 'row',
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
        paddingTop: 5,
        fontWeight: 'bold',
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
        // paddingTop: 6,
        paddingLeft: 10,
        fontSize: 14,
        fontWeight: 'bold',
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
      headerIcon: { fontSize: 30, color: "white" },
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
})