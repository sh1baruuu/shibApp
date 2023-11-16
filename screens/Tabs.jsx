import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown:false,
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default Tabs;
