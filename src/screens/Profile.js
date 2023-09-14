import React, { Component } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import Header from "../components/Header";
import Post from "../components/Post";

class Profile extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        nickname: 'Caio Padovani',
        email: 'fdp@gmail.com',
        image: require('../../assets/imgs/fence.jpg'),
        comments: [{
          nickname: 'John Ray Sheldon',
          comment: 'Stuning!'
        }, {
          nickname: 'Ana Ray Sheldon',
          comment: 'Foto Linda, onde foi tirada!'
        }]
      },
      {
        id: Math.random(),
        nickname: 'Antoni Padovani',
        email: 'fdp@gmail.com',
        image: require('../../assets/imgs/fence.jpg'),
        comments: [{
          nickname: 'John Ray Sheldon',
          comment: 'Stuning!'
        }, {
          nickname: 'Sheldon',
          comment: 'Foto Linda, onde foi tirada!'
        }, {
          nickname: 'John Ray Sheldon',
          comment: 'Stuning!'
        }, {
          nickname: 'Tetinha Ray Sheldon',
          comment: 'Linda, tirada!'
        }]
      },
      {
        id: Math.random(),
        nickname: 'Josh Padovani',
        email: 'fdp@gmail.com',
        image: require('../../assets/imgs/fence.jpg'),
        comments: []
      }
    ]
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.state.posts}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) =>
            <Post key={item.id} {...item} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})

export default Profile