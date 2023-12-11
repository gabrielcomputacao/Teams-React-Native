import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";
import { AppError } from "@utils/AppError";

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll();
    /* verifica se ja existe esse conteudo dentro do array, retorna booleano */
    const groupAlReadyExists = storedGroups.includes(newGroup);

    if (groupAlReadyExists) {
      throw new AppError("Já existe um grupo cadastrado com esse nome.");
    }

    /* transforma de objeto para json */
    const storage = JSON.stringify([...storedGroups, newGroup]);
    /* setItem metodo que é utilizado para armazenar no aparelho do usuario no storage */
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    /* lança o erro para ser tratado onde chamou a função */
    throw error;
  }
}
