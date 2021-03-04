import React from 'react'
import { View, ScrollView } from 'react-native'
import { Item, Input, Icon, Button, Text } from 'native-base';

export default class SearchScreen extends React.Component {  
    render() {
        return (
        <View style={{flex: 1, backgroundColor:'#151515'}}>
            <View style={{margin:25}}>
                <Text style={{color:'white', fontSize:28, fontWeight:'bold'}}>Search</Text>
            </View>
            <Item rounded style={{backgroundColor:'white', width:'92%', alignSelf:'center'}}>
                <Icon name="ios-search-outline" />
                <Input 
                    placeholder="Artists, songs, or podcasts" 
                    placeholderTextColor={'black'} 
                    style={{fontWeight:'bold', fontSize:16}}
                />
            </Item>
        </View>
        )
    }
}