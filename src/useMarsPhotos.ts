import { useQuery } from "@tanstack/react-query";

const useMarsPhotos = (date: string, camera: string) => useQuery(["marsPhotos"], async () => {
	const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + date + "&camera=" + camera + "&api_key=h75b9OZz46M8quG3APE9b0yP4f765gJuaL335q3G";
	const res = await fetch(url);
	const marsPhotoDetails = await res.json();
	return marsPhotoDetails;
});

export default useMarsPhotos;