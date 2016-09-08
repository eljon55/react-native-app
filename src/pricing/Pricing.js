import React, { Component } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  RNEPricingCard,
  RNEText
} from 'react-native-elements'

let styles = {}

class Contact extends Component {
  render () {
    return (
      <ScrollView>
        <View style={styles.headingContainer}>
          <Icon color='white' name='games' size={62} />
          <RNEText style={styles.heading}>Pricing</RNEText>
        </View>
        <View style={styles.container}>
          <RNEPricingCard
            color={colors.primary}
            title='Free'
            price='$0'
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
          />
          <RNEPricingCard
            color={colors.secondary}
            title='Starter'
            price='$19'
            info={['10 Users', 'Basic Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
          />
          <RNEPricingCard
            color={colors.secondary2}
            title='Enterprise'
            price='$49'
            info={['100 Users', 'One on One Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
          />
        </View>
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  container: {
    margin: 15
  },
  headingContainer: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.grey2
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  }
})

export default Contact
