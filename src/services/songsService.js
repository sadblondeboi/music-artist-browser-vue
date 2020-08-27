import { service } from "./service";

export async function getSongs() {
  const { data } = service.get("/songs");
  return data;
}

export async function getSong(id) {
  return (await getSongs())[id];
}