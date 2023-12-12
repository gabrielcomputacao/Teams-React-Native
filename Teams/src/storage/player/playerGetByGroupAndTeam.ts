import { playersGetByGroup } from "./playersGetByGroup";

export async function playersGetByGroupAndTeam(group: string, team: string) {
  try {
    const storage = await playersGetByGroup(group);

    const playersTime = storage.filter((player) => player.time === team);

    return playersTime;
  } catch (error) {
    throw error;
  }
}
