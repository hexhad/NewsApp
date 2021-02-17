import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import { View, StyleSheet, FlatList, ActivityIndicator, Alert } from 'react-native';
import FlashMessage, { showMessage } from "react-native-flash-message";
import moment from 'moment';


const Card = styled.TouchableOpacity`
    height :250px;
    background : #FFF;
    border-radius: 8px;
    margin-bottom:5px;
    margin-top:5px;
    padding: 15px;
`;

const Main = styled.View`
    margin-left:35px;
    margin-right:35px;
    border-radius: 8px;
    margin-top:20px;
    margin-bottom:20px;
    flex: 1;
`;

const Welcome = styled.Text`
    margin-top: 30px;
    font-size: 20px;
    font-family: 'Poppins-SemiBold';
`;

const Date = styled.Text`
    font-size: 20px;
    font-family: 'Poppins-ExtraLight';
`;

const Time = styled.Text`
    font-size: 10px;
    font-family: 'Poppins-ExtraLight';
    text-align: center;
    color:#FFF;
    padding:3px;
    margin-right:3px;
`;

const Shape = styled.View`
    background: #5C6BCA;
    border-radius: 5px
    margin-left:8px;
    height : 18px;
    margin-top:4px;
`;

const NormalText = styled.Text`
    font-size: 15px;
    font-family: 'Poppins-ExtraLight';
`;

const MainTitle = styled.Text`
    font-size: 20px;
    margin-bottom:5px;
    font-family: 'Poppins-SemiBold';
`;

const newsUrl = "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=57be68310fe444318902f63daea62025";



function ScreenOne() {
   
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        var date = moment().utcOffset('+05:30').format("YYYY-MM-DD");
        var time = moment().utcOffset('+05:30').format(' hh:mm a');
        setCurrentTime(time);
        setCurrentDate(date);
    }, []);
    
    useEffect(() => {
        fetch(newsUrl)
            .then((response) => response.json())
            .then((json) => setData(json.articles))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    getData = (item) => {
        var title = item.title;
        var desc = item.description;

        Alert.alert(title, desc);
    }
    
    


    return (
        <View style={{ flex: 1,}}>
            <FlashMessage position="center" />
            <Main>
                
                <Welcome>Welcome</Welcome>

                <View style={style.Row}>
                    <Date>{ currentDate }</Date>
                    <Shape><Time>{ currentTime }</Time></Shape>
                </View>

                {
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <Card onPress={getData.bind(this,item)}>
                                <MainTitle numberOfLines={2}>{item.title}</MainTitle>
                                <NormalText numberOfLines={7}>{item.description}</NormalText>
                            </Card>  
                        )}
                    />
                }
            </Main>
        </View>
    );
}


const style = StyleSheet.create({
    Row: {
        flexDirection:"row"
    }
});


export default ScreenOne;