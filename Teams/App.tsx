import Groups from "@screens/Groups";
import { ThemeProvider } from "styled-components";
import theme from "@theme/index";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import { Loading } from "@components/Loading";
import { StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {/* activeIndicator é um componente de loading */}
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}