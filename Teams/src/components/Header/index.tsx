import { Containeer, Logo, BackButton, BackIcon } from "./styles";
import LogoImg from "../../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    /* volta sempre para a tela anterior
    navigation.goBack()


    volta para o inicio
    navigation.popToTop()

    */
    navigation.navigate("groups");
  }

  return (
    <Containeer>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={LogoImg} />
    </Containeer>
  );
}
