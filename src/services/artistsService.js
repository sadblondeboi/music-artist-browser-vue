import { service } from "./service";

export async function getArtists() {
  const { data } = await service.get("/artists");
  return data;
}

export async function getArtist(id) {
  return (await getArtists())[id];
}
