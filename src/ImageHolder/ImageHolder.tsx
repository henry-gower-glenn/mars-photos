import React from "react";
import { Photo } from "../useMarsPhotos";
import styles from "./ImageHolder.module.scss";

export interface ImageHolderProps {
	images: Photo[];
}

const ImageHolder = (props: ImageHolderProps): JSX.Element => {

	const images = props.images.map((x, i) => {
		console.log(x);
		return (
			<div key={i}>
				<img src={x.img_src} alt="Image"/>
			</div>
		);
	});

	return (
		<div className={styles.container}>
			{images}
		</div>
	);
};

export default ImageHolder;