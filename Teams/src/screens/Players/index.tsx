import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/FIlter";
import { Alert, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";

type RoutePArams = {
  group: string;
};

export function Players() {
  const [team, setTeam] = useState("TimeA");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [newPlayersName, setNewPlayersName] = useState("");

  const route = useRoute();
  const { group } = route.params as RoutePArams;

  async function handleAddPlayer() {
    if (newPlayersName.trim().length === 0) {
      return Alert.alert("Nova Pessoa", "informe o nome da pessoa!");
    }

    const newPlayer = {
      nome: newPlayersName,
      time: team,
    };

    try {
      await playerAddByGroup(newPlayer, group);
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova Pessoa", error.message);
      } else {
        console.log(error);
        Alert.alert("Nova Pessoa", "Não foi possível adicionar.");
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team);

      setPlayers(playersByTeam);
    } catch (error) {
      Alert.alert("Pessoas", "Não foi possível carregar as pessoas filtradas.");
    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="adicione a galera!!" />

      <Form>
        <Input
          placeholder="Nome da Pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayersName}
        />

        <ButtonIcon onPress={handleAddPlayer} icon="add" type="PRIMARY" />
      </Form>

      <HeaderList>
        <FlatList
          data={["timeA", "timeB"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={team === item}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <PlayerCard name={item.nome} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não tem resultados ainda para players" />
        )}
        showsVerticalScrollIndicator={false}
        /* com o array e possivel passar varios estilos que sao aplicados dependendo da condicional  */
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button title="Remover Turma" type="SECONDARY" />
    </Container>
  );
}
