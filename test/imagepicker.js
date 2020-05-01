import React, { Component } from 'react';
import { View, Image, Text, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class App extends Component {
  
    state = {
        image: ''
    };

    handleClick = () => {
        const options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };

        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                this.setState({ image: response });
            }
        });

      
    };

    render() {
        const  image = this.state;
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {image && (
                    <Image
                        source={{ uri: this.state.image.uri }}
                        style={{ width: 200, height: 200, margin: 5 }}
                    />
                )}
                <Button title="انتخاب عکس" onPress={this.handleClick} />
            </View>
        );
    }
}
