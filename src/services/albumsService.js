import { service } from "./service";

export async function getAlbums() {
  const { data } = await service.get("/albums");
  return data;
}

export async function getAlbum(id) {
  return (await getAlbums())[id];
}

export async function getAlbumsByArtist(id) {
  const albums = await getAlbums();
  const filteredAlbums = {};
  Object.keys(albums).forEach(
    (key) => albums[key].artist === id && (filteredAlbums[key] = albums[key])
  );
  return filteredAlbums;
}
