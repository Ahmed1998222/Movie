import { StyleSheet } from 'react-native';
import { calcHeight, calcWidth } from './Dimension'
import AppStyles from './Fontstyles'


const Fontstyles = StyleSheet.create({
    HeaderContainer: {

        backgroundColor: 'white',
        height: calcHeight(60),
        paddingHorizontal: 5,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    sticky: {
        flex: 1,
        backgroundColor: "white",
        width: '94%',
        alignSelf: 'center',
        height: calcHeight(120)
    },
    HeaderTitle: {
        fontFamily: AppStyles.Fonts.Bold,
        color: 'black',
        fontSize: calcWidth(25),
        textAlign: 'left'
    },
    ScrollView: {
        flex: 1,
        backgroundColor: 'white'
    }
    ,

    ViewContainer: {
        flex: 1,
        backgroundColor: "white",
        width: '94%',
        alignSelf: 'center'
    },
    CategoryContainerSelect: {
        backgroundColor: AppStyles.Color.Green,
        borderRadius: calcWidth(15),
        width: '30%',
        height: calcHeight(35),
        alignContent: 'center',
        alignItems: 'center',

    },
    CategoryContainer: {
        backgroundColor: AppStyles.Color.LightGray,
        borderRadius: calcWidth(20),
        width: '30%',
        height: calcHeight(35),
        alignContent: 'center',
        alignItems: 'center',

    },
    CategoryTextSelect: {

        color: 'white',
        textAlignVertical: 'center',
        height: '100%',
        fontFamily: AppStyles.Fonts.Bold,
        fontSize: calcWidth(15),
        textAlign: 'center',
        marginRight:calcWidth(5)
    },
    CategoryText: {

        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
        height: '100%',
        fontFamily: AppStyles.Fonts.Bold,
        fontSize: calcWidth(15),
        textAlign: 'center',
        marginRight:calcWidth(5)

    },
    Row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Card: {
        backgroundColor: "#fff",
        width: '96%',
        height: calcHeight(150),
        marginTop: calcHeight(20),
        marginBottom: calcHeight(10),
        alignSelf: 'center',
        borderRadius: 10,
        shadowColor: AppStyles.Color.LightGray,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 12,
        flexDirection: 'row'
    },
    FilmName: {
        color: AppStyles.Color.Dark_Gray,
        fontFamily: AppStyles.Fonts.Bold,
        fontSize: calcWidth(19),
        textAlign: 'center',
        marginBottom: calcWidth(10),
        alignSelf: 'flex-start'

    },
    FilmDate: {
        color: AppStyles.Color.TEXT_GRAY,
        fontFamily: AppStyles.Fonts.Regular,
        fontSize: calcWidth(15),
        textAlign: 'center',
        alignSelf: 'flex-start'

    },
    FilmPercentage: {
        color: AppStyles.Color.Green,
        fontFamily: AppStyles.Fonts.Bold,
        fontSize: calcWidth(15),

        textAlign: 'right'
    },
    ContainerImage: {
        width: calcWidth(115),
        height: calcHeight(150),
        padding: calcWidth(10),
        alignSelf: 'flex-end',
        alignContent: 'flex-start',
        alignItems: 'flex-end'

    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: calcWidth(10)
    }
    ,
    CategoryType: {
        backgroundColor: AppStyles.Color.LightGray,
        borderRadius: calcWidth(10),
        width: calcWidth(100),
        height: calcHeight(35),
        alignContent: 'center',
        alignItems: 'center',
        marginTop: calcHeight(10)

    },
    textContainerCard: {
        padding: calcWidth(10),
        width: '60%'
    },
    Loader: {
        alignSelf: "center",
        marginTop: calcHeight(100)
    },
    TitleFilm: {
        color: 'black',
        fontSize: calcWidth(20),
        fontFamily: AppStyles.Fonts.Bold,
        textAlign: 'center',
        marginTop: calcHeight(10)
    },
    Percentage: {
        color: AppStyles.Color.Green,
        fontFamily: AppStyles.Fonts.Bold,
        fontSize: calcWidth(20),

        textAlign: 'center',
        marginTop: calcHeight(10)
    },
    Title_Left: {
        marginTop: calcHeight(10),
        marginBottom: calcHeight(10),
        textAlign: 'left',
        fontSize: calcWidth(15),
        fontFamily: AppStyles.Fonts.Bold
    },
    overview: {
        color: AppStyles.Color.Dark_Gray,
        fontSize: calcWidth(14)
    },
    margin_5: {
        marginLeft: calcWidth(5)
    },
    circlePic: {
        height: calcHeight(75),
        width: calcWidth(75),
        //backgroundColor: '#e6e6e6',
        borderRadius: 50,
        //borderWidth: calcWidth(1),
        //borderColor: "red",
        marginRight: calcWidth(25),
        elevation: 5,
        backgroundColor:'red'
    },
    ActorText:{
        textAlign:'center' ,
         fontSize:calcWidth(15) ,
          color:AppStyles.Color.Dark_Gray ,
          marginTop:calcHeight(5),
          marginRight: calcWidth(25),

    },
    fieldMessage:{
        width:'90%',
        alignSelf:'center',
        fontSize:calcWidth(15),
        color:AppStyles.Color.TEXT_GRAY
    }


});
export default Fontstyles;
