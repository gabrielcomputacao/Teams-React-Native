import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/FIlter";

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight title="Nome da turma" subtitle="adicione a galera!!" />

      <Form>
        <Input placeholder="Nome da Pessoa" autoCorrect={false} />

        <ButtonIcon icon="add" type="PRIMARY" />
      </Form>

      <Filter title="Time A" />
    </Container>
  );
}
