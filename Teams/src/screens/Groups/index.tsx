import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";

export default function Groups() {
  return (
    <Container>
      <Header />
      <Highlight subtitle="Jogue com sua turma" title="Jogar" />
    </Container>
  );
}

{
  /*  <View style={styles.container}></View> */
}
/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
}); */
