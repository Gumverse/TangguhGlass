import { inter, playfair_display } from "../fonts";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// react modal video css
import "react-modal-video/css/modal-video.css";

// fonts
import "../../public/css/fontawesome.css";
import "../../public/css/icomoon.css";

import ScrollToTop from "@/components/common/ScrollToTop";

//  Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ImportBsJS from "@/components/BootstrapClient";
import Footer from "@/components/home-six/footer";
import Header from "@/components/home-six/header";


// main css
import "../../public/css/app.css";
import "../../public/css/main.css";
import "../../public/css/mobile-nav.css";

export const metadata = {
	title: "Tangguh Glass | Spesialis Kaca Patri dan Aluminium",
	description: "Spesialis Kaca Patri dan Aluminium",
};

export default function HomeSixLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${playfair_display.variable}`}>
				<ImportBsJS />
				<Header />
				{children}
				<Footer />
				<ScrollToTop />
			</body>
		</html>
	);
}
