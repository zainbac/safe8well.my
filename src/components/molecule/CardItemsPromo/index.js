import React from 'react';
import {
  Animated,
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import Barcode from 'react-native-barcode-expo';

export class ItemCard extends React.Component {
  static propTypes = {
    value: '',
    title: PropTypes.string.isRequired,
    barcode: PropTypes.string.isRequired,
    picture: PropTypes.any.isRequired,
    selected: PropTypes.bool,
    height: PropTypes.number,
    maxHeight: PropTypes.number,
    onPress: PropTypes.func,
    onLayout: PropTypes.func,
    onClose: PropTypes.func,
    children: PropTypes.string.isRequired,
    activeOpacity: PropTypes.number,

    shrinkTo: PropTypes.number,
    shrinkDuration: PropTypes.number,
    heightDuration: PropTypes.number,

    borderRadius: PropTypes.number,

    textStyle: PropTypes.any,

    closeIcon: PropTypes.element,

    content: PropTypes.element,
  };

  constructor(props) {
    super(props);

    this.state = {
      heightAnim: new Animated.Value(this.props.height || 200),
      scaleAnim: new Animated.Value(1),
      selected: this.props.selected,
      barcode: this.props.barcode,
    };
  }

  _onPresIn = () => {
    if (this.props.selected) {
      this.setState({ barcode: this.props.barcode });

      return;
    }

    Animated.timing(this.state.scaleAnim, {
      toValue: this.props.shrinkTo || 0.96,
      duration: this.props.shrinkDuration || 200,
    }).start();
  };

  _onPressOut = () => {
    if (this.props.selected) {
      return;
    }

    Animated.timing(this.state.scaleAnim, {
      toValue: 1,
      duration: this.props.shrinkDuration || 200,
    }).start();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected && !this.props.selected) {
      Animated.timing(this.state.heightAnim, {
        toValue: nextProps.maxHeight || 80,
        duration: nextProps.heightDuration || 160,
      }).start();
    }

    if (!nextProps.selected && this.props.selected) {
      Animated.timing(this.state.heightAnim, {
        toValue: nextProps.height || 200,
        duration: nextProps.heightDuration || 260,
      }).start();
    }
  }

  render() {
    console.log(this.props.barcode);
    return (
      <TouchableOpacity
        activeOpacity={this.props.activeOpacity || 0.8}
        onPressIn={this._onPresIn}
        onPressOut={this._onPressOut}
        onPress={this.props.onPress}
      >
        <Animated.View
          style={[
            styles.container,
            this.props.style,
            this.props.borderRadius
              ? { borderRadius: this.props.borderRadius }
              : {},
            {
              transform: [{ scale: this.state.scaleAnim }],
              height: this.state.heightAnim,
            },
          ]}
        >
          <ImageBackground
            onLayout={this.props.onLayout}
            borderRadius={
              this.props.selected ? 0 : this.props.borderRadius || 10
            }
            source={this.props.picture}
            style={[styles.image, { height: this.props.height || 100 }]}
          >
            <Text style={[styles.text, this.props.textStyle]}>
              {this.props.title}
            </Text>
            {this.props.selected ? (
              <TouchableWithoutFeedback onPress={this.props.onClose}>
                <View
                  style={{
                    position: 'absolute',
                    top: 26,
                    right: 26,
                  }}
                >
                  {this.props.closeIcon || (
                    <Text style={{ color: '#3b8af1', fontWeight: 'bold' }}>
                      X
                    </Text>
                  )}
                </View>
              </TouchableWithoutFeedback>
            ) : null}
          </ImageBackground>

          {this.props.selected ? (
            <View style={{ flex: 1, padding: 20 }}>
              {/* {this.props.content || <Text>COntent!</Text>} */}

              <Text style={{ textAlign: 'center' }}>{this.props.content}</Text>
              <Barcode value={this.props.barcode} format='CODE128' />
              <Text style={{ textAlign: 'center' }}>{this.props.barcode}</Text>
            </View>
          ) : null}
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

    backgroundColor: 'white',
    margin: 10,
    padding: 0,
  },
  image: {
    padding: 100,

    flexDirection: 'column',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  text: {
    backgroundColor: 'transparent',
    color: '#c42645',
    padding: 30,

    bottom: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 10,
  },
});
