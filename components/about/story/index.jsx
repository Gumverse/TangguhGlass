import Image from "next/image";
import Star2Img from "../../../public/images/v1/star2.png";
import StoryContent from "./StoryContent";
import StoryPhotos from "./StoryPhotos";
function Story() {
	return (
		<div className="section aximo-section-padding6">
			<div className="container">
				<div className="aximo-section-title center title-description">
					<h2>
						<span className="aximo-title-animation">
						Kualitas & Pelayanan Terpercaya
						</span>
					</h2>
					<p>
					Kami menghadirkan karya seni kaca berkualitas tinggi yang memadukan keindahan tradisional dan teknologi modern. Dengan layanan pemesanan mudah serta pengiriman ke seluruh Indonesia, kami siap memenuhi kebutuhan hunian, tempat ibadah, maupun proyek komersial Anda.
					</p>
				</div>

				{/* <StoryPhotos /> */}

				<div className="aximo-story-content">
					<StoryContent />
				</div>
			</div>
		</div>
	);
}

export default Story;
