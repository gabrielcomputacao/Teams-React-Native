import { Containeer, Logo, BackButton, BackIcon } from "./styles";
import LogoImg from "../../../assets/logo.png";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <Containeer>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={LogoImg} />
    </Containeer>
  );
}
