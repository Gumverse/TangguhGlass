"use client";

import FadeInUp from "@/components/animation/FadeInUp";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Shape2Img from "../../../public/images/v5/shape2.png";
import PlayBtnImg from "../../../public/images/v6/play-btn.png";
import VideoBg from "../../../public/images/v6/video-img-tg.jpg";
function Video() {
	const [isOpen, setOpen] = useState(false);

	return (
		<FadeInUp className="aximo-video-section2 extra-side-margin">
			{/* SEO Hidden Content */}
			<div style={{ display: "none" }}>
				<p>
					Video profil Tangguh Glass menampilkan proses pembuatan kaca patri dan kaca aluminium berkualitas tinggi, mulai dari desain hingga pemasangan di berbagai proyek rumah, kantor, dan tempat ibadah di Indonesia.
				</p>
			</div>
			{/* End SEO Hidden Content */}
			<div
				className="video-image-container"
				style={{
					position: "relative",
					width: "100%",
					maxWidth: "1400px",
					margin: "0 auto",
					aspectRatio: "16/9", // or set a fixed height if you prefer
					maxHeight: "675px",
					borderRadius: "12px",
				}}
			>
				<Image
					src={VideoBg}
					alt="video bg"
					fill
					style={{ objectFit: "fill", borderRadius: "12px" }}
					className="img-border"
					sizes="(max-width: 1400px) 100vw, 1400px"
					priority
				/>
			</div>
			<ModalVideo
				channel="youtube"
				youtube={{ autoplay: 0 }}
				isOpen={isOpen}
				videoId="7e90gBu4pas"
				onClose={() => setOpen(false)}
			/>
			<button className="aximo-video-popup play-btn-size video-init" onClick={() => setOpen(true)}>
				<Image src={PlayBtnImg} alt="Play Btn" height={100} width={100}/>
				<div className="waves waves6 wave-1"></div>
				<div className="waves waves6 wave-2"></div>
			</button>
		</FadeInUp>
	);
}

export default Video;
