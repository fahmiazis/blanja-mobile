import React, { Component } from 'react'
// import {TouchableOpacity} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/SimpleLineIcons'

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

import TestPage from './TestPage' //untuk uji coba
import Login from './Login'  
import Register from './Register'
import ForgotPassword from './ForgotPassword'
import Home from './HomeV2'
import Cart from './Cart'
import Detail from './DetailProduct'
import ProfileOption from './ProfileOption'
import ProfileEdit from './ProfileEdit'
import ProfileOrder from './ProfileOrder'
import Checkout from './Checkout'
import Category from './Category'
import Catalog from './Catalog'
import ProfileAddress from './ProfileAddress'
import Success from './Success'

const CartStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            options={{
                title: "",
                headerStyle: {backgroundColor: "", elevation: 0}
            }}
            name="Cart"
            component={Cart}
            />
        </Stack.Navigator>
    );
};

const CategoryStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            options={{
                title: "Categories",
                headerStyle: {backgroundColor: "", elevation: 0}
            }}
            name="Category"
            component={Category}
            />
            <Stack.Screen 
            options={{
                title: "Catalog",
                headerStyle: {backgroundColor: "", elevation: 0}
            }}
            name="Catalog"
            component={Catalog}
            />
        </Stack.Navigator>
    );
};

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            options={{
                title: "Home",
                headerStyle: {backgroundColor: "", elevation: 0}
            }}
            name="Home"
            component={Home}
            />
        </Stack.Navigator>
    );
};

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            options={{
                title: "Home",
                headerStyle: {backgroundColor: "", elevation: 0}
            }}
            name="Profile"
            component={ProfileOption}
            />
            <Stack.Screen 
            name='ProfileOrder' 
            component={ProfileOrder} 
            options={{title: "My Orders"}} 
            />
        </Stack.Navigator>
    );
};

const TabbedScreen = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen 
            options={{
                tabBarIcon: ({size, color, focused}) => (
                    <Icon name='home' size={size} color={color} />
                ),
            }}
            name="Home"
            component={HomeStack}
            />

            <BottomTab.Screen 
            options={{
                tabBarIcon: ({size, color, focused}) => (
                    <Icon name='cart-outline' size={size} color={color} />
                ),
            }}
            name="Shop"
            component={CategoryStack}
            />

            <BottomTab.Screen 
            options={{
                tabBarIcon: ({size, color, focused}) => (
                    <Icon2 name='handbag' size={size} color={color} />
                ),
            }}
            name="Bag"
            component={CartStack}
            />

            <BottomTab.Screen 
            options={{
                tabBarIcon: ({size, color, focused}) => (
                    <Icon name='heart-outline' size={size} color={color} />
                ),
            }}
            name="Favorites"
            component={HomeStack}
            />

            <BottomTab.Screen 
            options={{
                tabBarIcon: ({size, color, focused}) => (
                    <Icon name='account' size={size} color={color} />
                ),
            }}
            name="Profile"
            component={ProfileStack}
            />
        </BottomTab.Navigator>
    );
};

class Main extends Component {
    render() {
        return (
            <NavigationContainer>
                    {!this.props.auth.isLogin ? (
                    <Stack.Navigator>
                       <Stack.Screen
                        options={{headerShown: false}} 
                        name="Register" 
                        component={Register} 
                       /> 
                       <Stack.Screen
                       options={{headerShown: false}} 
                       name="Login" 
                       component={Login} 
                       />
                       <Stack.Screen
                       options={{headerShown: false}}
                       name="ForgotPassword"
                       component={ForgotPassword}
                       />
                    </Stack.Navigator>
                    ): (
                    <Stack.Navigator>
                        <Stack.Screen name="Tabbed" component={TabbedScreen} 
                        options={{headerTransparent: true, title: ""}}
                        />
                        <Stack.Screen name='Detail' component={Detail} options={{headerShown: false}} />
                        <Stack.Screen name='ProfileEdit' component={ProfileEdit} options={{headerShown: false}} />
                        <Stack.Screen name='Checkout' component={Checkout} options={{title: "Checkout"}} />
                        <Stack.Screen name='ProfileAddress' component={ProfileAddress} options={{headerShown: false}} />
                        <Stack.Screen name='Success' component={Success} options={{headerShown: false}} />
                    </Stack.Navigator>
                    )}
            </NavigationContainer>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Main);