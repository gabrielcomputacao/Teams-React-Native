import Groups from "@screens/Groups";
import { ThemeProvider } from "styled-components";
import theme from "@theme/index";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import { ActivityIndicatorBase } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {/* activeIndicator é um componente de loading */}
      {fontsLoaded ? <Groups /> : <ActivityIndicatorBase />}
    </ThemeProvider>
  );
}
