/* compartilha as informações das rotas para dentro da aplicação */
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes></AppRoutes>
    </NavigationContainer>
  );
}
