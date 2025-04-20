import Image from "next/image";
import TextImg from "../../../public/images/v6/hero-inner-text-img-tg.png";
import Shape2Img from "../../../public/images/elements/shape-yellow-stars.svg";
function Hero() {
	return (
		<div className="aximo-hero-section5 bg-light7 position-relative">
			<div className="container">
				<div className="aximo-hero-content6 overflow-hidden">
					<div className="aximo-hero-title">
						<div className="aximo-hero-text">Spesialis Kaca Patri &</div>
					</div>
					<div className="aximo-hero-title">
						<Image src={TextImg} alt="TextImg" />
						<div className="aximo-hero-text">Kaca Aluminium</div>
					</div>
					<div className="aximo-hero-title">
						<div className="aximo-hero-text">Berkualitas</div>
						<div className="aximo-marquee-two">
							<div className="aximo-infinite two">
								{[...Array(18)].map(() => (
									<a key={crypto.randomUUID()} href="/about-us">
										View Our Work <image src="/images/v6/next-white.svg" alt="View our Work" />
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="aximo-p-shape z-index">
				<Image src={Shape2Img} alt="Shape" />
			</div>
		</div>
	);
}

export default Hero;
