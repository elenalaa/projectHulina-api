import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import {ListItem as CoolListItem, Thumbnail, Left, Body, Right, Button, Icon, Image } from 'native-base';
import Moment from 'react-moment';
import moment from "moment";

const ListItem = ({navigation, singleEvent}) => {
  
  const apiUrl= 'http://open-api.myhelsinki.fi/v1/events/?limit=5';

  
  return (

        <CoolListItem thumbnail>
           <Left>
            <Thumbnail square source={{ apiUrl: singleEvent.images} }/>
          </Left>
           <Body>
            <Text>{singleEvent.name}</Text>
            <Text>{singleEvent.city}</Text>
            <Text>{moment(singleEvent.datetime).format('MMMM Do YYYY, h:mm:ss a')}</Text>
            
          </Body>
                  
        </CoolListItem>
 )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

ListItem.propTypes = {
  navigation: PropTypes.object,
  singleEvent: PropTypes.object,
};

export default ListItem;
