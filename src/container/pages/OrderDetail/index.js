import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Card, Button } from 'react-native-elements';

const OrderDetail = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('./../../../../assets/login1.png')}
        style={{
          position: 'absolute',
          flex: 1,
          width: 420,
          bottom: 0,
          top: 20,
          height: 720,
          left: 0,
        }}
      ></ImageBackground>
      <View
        style={{
          flex: 1,
          paddingTop: 40,

          marginBottom: 50,
        }}
      >
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 17 }}>
          PROCEDURE OF ONLINE RENTAL{' '}
        </Text>
        <ScrollView>
          <Card>
            <View>
              <Text
                style={{
                  alignSelf: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  textAlign: 'center',
                  justifyContent: 'center',
                  fontSize: 15,
                  paddingTop: 0,
                  color: 'black',
                  marginBottom: 10,
                }}
              >
                Select and agreed the amount need to pay with the
                deposit(refundable) and additional things that need to buy
                separately based on item description that provided.
              </Text>
              <Image
                source={require('../../../../assets/money.png')}
                style={{
                  width: 100,
                  height: 100,
                  alignItems: 'center',
                  borderRadius: 6,

                  alignSelf: 'center',
                }}
              />
            </View>
          </Card>

          <Card>
            <Text
              style={{
                justifyContent: 'flex-start',
                textAlign: 'center',
                fontSize: 15,
                paddingTop: 18,
                marginBottom: 10,
              }}
            >
              Then , verify your amount need to transfer to account and save it
              :{' '}
            </Text>
            <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
              our Founder personal account.{' '}
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              RHB : 1123 0300 266557{' '}
            </Text>
            <Image
              source={require('../../../../assets/dollar.png')}
              style={{
                width: 100,
                height: 100,
                alignItems: 'center',
                borderRadius: 6,

                alignSelf: 'center',
              }}
            />
          </Card>
          <Card>
            <Text
              style={{
                justifyContent: 'flex-start',
                textAlign: 'center',
                fontSize: 15,
                paddingTop: 18,
              }}
            >
              After that , you need to submit form at our links and upload the
              receipt payment for proof.{' '}
            </Text>

            <Image
              source={require('../../../../assets/instruct1.png')}
              style={{
                height: 200,
                width: 400,

                alignItems: 'center',
                borderRadius: 6,
                justifyContent: 'center',
                right: 20,
              }}
            />
          </Card>
          <Card>
            <Text
              style={{
                justifyContent: 'flex-start',

                fontSize: 15,
                paddingTop: 18,
              }}
            >
              {' '}
              Lastly, after your submission we will contact and arrange letter
              agreement in black & white and arrange delivery to your house as
              fast as possible .{' '}
            </Text>

            <Image
              source={require('../../../../assets/instruct3.png')}
              style={{
                height: 200,
                width: 400,
                alignItems: 'center',
                borderRadius: 6,
                justifyContent: 'center',
                right: 55,
              }}
            />
          </Card>
          <Card>
            <Text
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                alignContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 20,

                paddingTop: 18,
              }}
            >
              {' '}
              Congratulation .You have done of our process online rental
              equipment.We will arrange your equipment shortly.{' '}
            </Text>

            <Image
              source={require('../../../../assets/ddds.png')}
              style={{
                height: 200,
                width: 400,
                alignItems: 'center',
                borderRadius: 6,
                justifyContent: 'center',
                right: 20,
              }}
            />
          </Card>
        </ScrollView>
      </View>

      <View>
        <Button
          title=' GO RENT NOW
          '
          onPress={() => props.navigation.navigate('Order')}
        />
      </View>
    </View>
  );
};
export default OrderDetail;
