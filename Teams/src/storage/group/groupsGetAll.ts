import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";

export async function groupsGetAll() {
  try {
    /* pega os itens salvos no aparelho do usuario nessa chave especifica  */
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);

    /* transforma de json para objeto javascript */
    const groups: string[] = storage ? JSON.parse(storage) : [];

    return groups;
  } catch (error) {
    throw error;
  }
}
