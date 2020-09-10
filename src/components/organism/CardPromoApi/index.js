import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Animated,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Barcode from 'react-native-barcode-expo';
import PropTypes from 'prop-types';
import { ItemCard } from './../../molecule/CardItemsPromo';

export class CardPromoApi extends React.Component {
  static propTypes = {
    itemProps: PropTypes.shape(ItemCard.propTypes),

    cards: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        barcode: PropTypes.string,
        picture: PropTypes.any,
        content: PropTypes.element,
      })
    ),

    selected: PropTypes.string,

    listStyle: PropTypes.any,

    duration: PropTypes.number,
  };

  static defaultProps = {
    duration: 600,
  };

  _layouts = new Map();

  constructor(props) {
    super(props);

    this.state = {
      selected: new Map(),
      zoomedStyle: {},
      maxHeight: 400,
      zoomAnim: new Animated.Value(1),
    };
  }

  _keyExtractor = (item, index) => item.id;

  _onPressItem = ({ item, index }) => {
    if (!this._flatList) {
      return;
    }

    this.setState((state) => {
      if (state.selected.get(item.id)) {
        return state;
      }

      selected = new Map();
      selected.set(item.id, true);

      this._flatList.scrollToIndex({ animated: true, index });

      let windowWidth = Dimensions.get('window').width;
      let windowHeight = Dimensions.get('window').height;

      let viewWidth = this._layouts.get(item.id).width;
      let viewHeight = this._layouts.get(item.id).height;

      let scale = windowWidth / viewWidth;

      //let maxHeight = windowHeight / scale;
      let maxHeight = 400;
      Animated.timing(this.state.zoomAnim, {
        toValue: scale,
        duration: this.props.duration,
      }).start();

      return {
        ...state,
        selected: selected,
        zoomedStyle: {
          transform: [
            { scale: this.state.zoomAnim },
            { translateY: viewWidth * 0.5 * (scale - 1) },
          ],
        },
        maxHeight: maxHeight,
      };
    });
  };

  _onCloseItem = ({ item, index }) => {
    this.setState((state) => {
      Animated.timing(this.state.zoomAnim, {
        toValue: 1,
        duration: this.props.duration,
      }).start();

      return {
        ...state,
        selected: new Map(),
        zoomedStyle: {
          transform: [{ scale: this.state.zoomAnim }, { translateY: 0 }],
        },
      };
    });
  };

  _renderItem = ({ item, index }) => (
    <ItemCard
      onLayout={(e) => this._layouts.set(item.id, e.nativeEvent.layout)}
      title={item.title}
      picture={item.picture}
      content={item.content}
      barcode={item.barcode}
      onPress={() => this._onPressItem({ item, index })}
      onClose={() => this._onCloseItem({ item, index })}
      maxHeight={this.state.maxHeight}
      selected={this.state.selected.get(item.id)}
      heightDuration={this.props.duration}
    />
  );

  render() {
    return (
      <Animated.View
        style={[{ flex: 1, marginTop: 20 }, this.state.zoomedStyle]}
      >
        <ImageBackground
          source={require('./../../../../assets/login1.png')}
          style={{
            position: 'absolute',
            flex: 1,
            width: 420,
            top: 0,

            height: 720,
            left: 0,
          }}
        ></ImageBackground>
        <Image
          source={require('../../../../assets/xxxx.png')}
          style={{
            height: 110,
            width: 220,
            marginTop: 30,
            alignContent: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            textAlign: 'center',

            color: 'white',
            fontSize: 25,
            fontWeight: '200',
          }}
        >
          COUPON VOUCHER
        </Text>
        <FlatList
          ref={(c) => (this._flatList = c)}
          style={[
            {
              flex: 1,
              marginTop: 0,
              marginBottom: 0,
            },
            this.props.listStyle,
          ]}
          data={this.props.cards}
          scrollEnabled={true}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </Animated.View>
    );
  }
}
