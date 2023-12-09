import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Groups from "@screens/Groups";
import { NewGroup } from "@screens/NewGroup";
import { Players } from "@screens/Players";

const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Groups" component={Groups}></Screen>
      <Screen name="new" component={NewGroup}></Screen>
      <Screen name="players" component={Players}></Screen>
    </Navigator>
  );
}
