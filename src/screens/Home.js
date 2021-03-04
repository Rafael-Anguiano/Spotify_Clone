import React from 'react'
import { ImageBackground, TouchableOpacity, View } from 'react-native'
import { 
    Card, 
    CardItem, 
    Thumbnail, 
    Text, 
    Button, 
    Icon, 
    Left, 
    Body, 
    Right,
    Toast } from 'native-base';


export default class HomeScreen extends React.Component {  
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
        return (
        <View style={{flex: 1, backgroundColor:'#151515'}}>
            <Card transparent>
                <CardItem style={{backgroundColor:'#333333'}}>
                    <Left>
                        <Thumbnail square source={{uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/The_Pretty_Reckless_-_Going_To_Hell_%28Official_Album_Cover%29.png/220px-The_Pretty_Reckless_-_Going_To_Hell_%28Official_Album_Cover%29.png'}} />
                    </Left>
                    <Body>
                        <Text style={{color:'white'}}>NativeBase</Text>
                        <Text note style={{color:'#9F9F9F'}}>GeekyAnts</Text>
                    </Body>
                    <TouchableOpacity onPress={() => {this.likedSong()}}>
                        <Icon active name={this.state.heart} style={{color: this.state.heartcolor}} />
                    </TouchableOpacity> 
                    <TouchableOpacity onPress={() => {this.pauseSong()}}>
                        <Icon active name={this.state.pausePlay} style={{color:'white'}} />
                    </TouchableOpacity> 
                </CardItem>
            </Card>    
        </View>
        
        )
    }
}
/*
<Right>
                        <TouchableOpacity onPress={() => {}}>
                            <Icon active name="heart" style={{color:'white'}} />
                        </TouchableOpacity> 
                        <TouchableOpacity onPress={() => {}}>
                            <Icon active name="play" style={{color:'white'}} />
                        </TouchableOpacity> 
                    </Right>

*/
//<Thumbnail source={{uri: 'Image URL'}} />
//<Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>