/**
 * @providesModule HSButton
 */

import React, { PropTypes } from 'react'
import { TouchableHighlight, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from 'HSColors'
import Text from 'HSText'

let styles = {}

const log = () => {
  console.log('please attach method to this component')
}

const Button = ({buttonStyle, title, onPress, icon, secondary, secondary2, secondary3, primary1, primary2, primary3, backgroundColor, color, fontSize, underlayColor}) => (
  <TouchableHighlight
    underlayColor={underlayColor || 'transparent'}
    onPress={onPress || log}>
    <View
      style={[
        styles.button,
        secondary && {backgroundColor: colors.secondary},
        secondary2 && {backgroundColor: colors.secondary2},
        secondary3 && {backgroundColor: colors.secondary3},
        primary1 && {backgroundColor: colors.primary1},
        primary2 && {backgroundColor: colors.primary2},
        backgroundColor && {backgroundColor},
        buttonStyle && buttonStyle
      ]}
      >
      {
        icon && <Icon color={icon.color || 'white'} size={icon.size || 26} style={styles.icon} name={icon.name} />
      }
      <Text style={[styles.text, color && {color}, fontSize && {fontSize}]}>
        {title}
      </Text>
    </View>
  </TouchableHighlight>
)

Button.propTypes = {
  buttonStyle: PropTypes.any,
  title: PropTypes.string,
  onPress: PropTypes.any,
  icon: PropTypes.object
}

styles = StyleSheet.create({
  button: {
    padding: 20,
    borderTopWidth: 1,
    marginLeft: 15,
    marginRight: 15,
    borderColor: '#ededed',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    marginTop: 7.5,
    marginBottom: 7.5
  },
  text: {
    color: 'white',
    fontSize: 18
  },
  icon: {
    marginRight: 10
  }
})

export default Button
