import React, { useState } from "react";
import ImageSearch from "./ImageSearch/ImageSearch";
import useMarsPhotos from "./useMarsPhotos";
import Loader from "./assets/loading-slow-internet.gif";
import ImageHolder from "./ImageHolder/ImageHolder";
import Title from "./Title/Title";

const HomePage = (): JSX.Element => {
	const [date, setDate] = useState("");
	const [camera, setCamera] = useState("");
	const { isLoading, error, data } = useMarsPhotos(date, camera);

	return (
		<>
			{error ? "An error has occured, please try again" : <></>}
			{isLoading ? Loader : <></>}
			<Title title="Mars Rover Photos"/>
			<ImageSearch onChangeDate={date => setDate(date)} onChangeCamera={camera => setCamera(camera)}/>
			{data ? <ImageHolder images={data?.photos}/> : <></>}
		</>
	);
};

export default HomePage;