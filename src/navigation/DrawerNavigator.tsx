import React, { useContext } from 'react';
import { View, Image } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { ThemeContext, Text, Divider, Switch } from 'react-native-elements';
import { ThemeReducerContext } from '../helpers/ThemeReducer';
import { SafeAreaView } from 'react-native-safe-area-context';

function CustomContentComponent(props) {
  const { ThemeState, dispatch } = useContext(ThemeReducerContext);
  const { theme } = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: '100%',
        backgroundColor: theme.colors.grey5,
      }}
      edges={['right', 'left', 'bottom']}
    >
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../images/logo.png')}
          style={{ width: '70%', height: 100, tintColor: '#397af8' }}
          resizeMode="contain"
        />
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          paddingLeft: 25,
        }}
      >
        <Text
          style={{
            marginTop: 3,
          }}
        >
          Dark Mode
        </Text>

        <Switch
          style={{
            position: 'absolute',
            right: 5,
          }}
          value={ThemeState.themeMode === 'dark'}
          onValueChange={(val) => {
            if (val === true) {
              dispatch({ type: 'set-theme', payload: 'dark' });
            } else {
              dispatch({ type: 'set-theme', payload: 'light' });
            }
          }}
        />
      </View>
      <Divider style={{ marginTop: 15 }} />
      <View style={{ marginLeft: 10, width: '100%' }}>
        <DrawerItemList {...props} />
      </View>
    </SafeAreaView>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <CustomContentComponent {...props} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
