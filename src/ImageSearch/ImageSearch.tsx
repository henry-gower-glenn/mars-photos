import React, { useState } from "react";
import styles from "./ImageSearch.module.scss";

export interface ImageSearchProps {
	onChangeDate: (date: string) => void;
	onChangeCamera: (camera: string) => void;
}

const ImageSearch = (props: ImageSearchProps): JSX.Element => {
	const [date, setDate] = useState("");
	const [camera, setCamera] = useState("");

	const setDateWithCallBack = (value: string) => {
		setDate(value);
		props.onChangeDate(value);
	};

	const setCameraWithCallBack = (value: string) => {
		setCamera(value);
		props.onChangeCamera(value);
	};

	return (
		<div className={styles.container}>
			<div className={styles.title}>Select Date:</div>
			<div>
				<input className={styles.dateSelecter} type="date" value={date} onChange={(e) => setDateWithCallBack(e.target.value)}/>
			</div>
			<div className={styles.title}>Select Camera:</div>
			<select className={styles.cameraSelecter} value={camera} onChange={(e) => setCameraWithCallBack(e.target.value)}>
				<option value="FHAZ">Front Hazard Avoidance Camera</option>
				<option value="RHAZ">Rear Hazard Avoidance Camera</option>
				<option value="MAST">Mast Camera</option>
				<option value="CHEMCAM">Chemistry and Camera Complex</option>
				<option value="MAHLI">Mars Hand Lens Imager</option>
				<option value="MARDI">Mars Descent Imager</option>
				<option value="NAVCAM">Navigation Camera</option>
				<option value="PANCAM">Panoramic Camera</option>
				<option value="MINITES">Miniature Thermal Emission Spectrometer (Mini-TES)</option>
			</select>
		</div>
	);
};

export default ImageSearch;