import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from '../screens/chats/chat.screen';

const Stack = createStackNavigator();

const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
};
export default function ChatScreenStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Chat" 
                component={ChatScreen} 
                options={{
                    headerShown: true,
                    headerTitle:'Messenger',
                    headerStyle: {
                        height:40,
                        
                    },
                    headerTitleAlign:'center',
                    headerTitleStyle: {
                        fontSize: 18
                    },
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                }}/>
        </Stack.Navigator>
    )
};