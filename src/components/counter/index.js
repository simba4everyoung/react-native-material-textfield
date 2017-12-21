import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class Counter extends PureComponent {
  static propTypes = {
    count: PropTypes.number.isRequired,
    limit: PropTypes.number,

    fontSize: PropTypes.number,

    baseColor: PropTypes.string.isRequired,
    errorColor: PropTypes.string.isRequired,

    countColor: PropTypes.string,

    style: Text.propTypes.style,
  };

  render() {
    let { count, limit, countColor, errorColor, fontSize, style } = this.props;

    let textStyle = {
      color: count > limit? errorColor : countColor,
      fontSize,
    };

    if (!limit) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text style={[styles.text, style, textStyle]}>
          {count} / {limit}
        </Text>
      </View>
    );
  }
}
