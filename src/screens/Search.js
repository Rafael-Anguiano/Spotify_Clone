import React from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import { Item, Input, Icon, Button, Text, Card, CardItem, Left, Right, Thumbnail, Body} from 'native-base';

export default class SearchScreen extends React.Component {  
    constructor(props) {
        super(props)
        this.state = {
            //Current song liked
            liked: false,
            heart: 'heart-outline',
            heartcolor: 'white',
            //Pause-play
            paused: false,
            pausePlay: 'play',
            //Toast
            //showToast: false,
        };
    }

    likedSong(){
        if(this.state.liked === false){
            this.setState({heart: 'heart', liked: true, heartcolor:'#1DB954'})
            //Toast.show({
            //    text: "Song added to Liked Songs",
            //})
        }
        if(this.state.liked === true){
            this.setState({heart: 'heart-outline', liked: false, heartcolor:'white'})
            //Toast.show({
            //    text: "Song removed from Liked Songs",
            //})
        }
    }

    pauseSong(){
        if(this.state.paused === false){
            this.setState({pausePlay: 'pause', paused: true})
        }
        if(this.state.paused === true){
            this.setState({pausePlay: 'play', paused: false})
        }
    }

    render() {
        const { navigation } = this.props
        return (
        <View style={{flex: 1, backgroundColor:'#151515'}}>
            <ScrollView>
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
            </ScrollView>
            
            <ScrollView>
                <Button>
                    <Text>Click Me!</Text>
                </Button>
            </ScrollView>
            
            <Card transparent>
                <TouchableOpacity onPress={()=>{
                    //navigation.navigate('Search')
                }}>
                    <CardItem style={{backgroundColor:'#333333'}}>
                        <Left>
                            <Thumbnail square source={{uri: 'https://www.spirit-of-metal.com/les%20goupes/T/The%20Pretty%20Reckless/Kill%20Me/Kill%20Me_2513.jpg'}} />
                        </Left>
                        <Body>
                            <Text style={{color:'white'}}>Track</Text>
                            <Text note style={{color:'#9F9F9F'}}>Autor</Text>
                        </Body>
                        <TouchableOpacity onPress={() => {this.likedSong()}}>
                            <Icon active name={this.state.heart} style={{color: this.state.heartcolor}} />
                        </TouchableOpacity> 
                        <TouchableOpacity onPress={() => {this.pauseSong()}}>
                            <Icon active name={this.state.pausePlay} style={{color:'white'}} />
                        </TouchableOpacity> 
                    </CardItem>
                </TouchableOpacity>
            </Card>  
        </View>
        
        )
    }
}