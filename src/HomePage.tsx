import React, { useState } from "react";
import ImageSearch from "./ImageSearch/ImageSearch";
import useMarsPhotos from "./useMarsPhotos";

const HomePage = (): JSX.Element => {
	const [date, setDate] = useState("");
	const [camera, setCamera] = useState("");
	const { isLoading, error, data } = useMarsPhotos(date, camera);

	

	return (
		<>
			
			<ImageSearch onChangeDate={date => setDate(date)} onChangeCamera={camera => setCamera(camera)}/>
		</>
	);
};

export default HomePage;