import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll();
    /* transforma de objeto para json */
    const storage = JSON.stringify([...storedGroups, newGroup]);
    /* setItem metodo que é utilizado para armazenar no aparelho do usuario no storage */
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    /* lança o erro para ser tratado onde chamou a função */
    throw error;
  }
}
