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
	description: "Tangguh Glass spesialis kaca patri, kaca inlay, dan kaca dekoratif berkualitas. Solusi desain, pembuatan, dan pemasangan kaca patri terbaik untuk rumah, tempat ibadah, dan bangunan komersial.",
};

// Hapus import font lama
// import { inter, playfair_display } from "../fonts";

// Import font dari next/font/google
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
});

const playfair_display = Playfair_Display({
	subsets: ['latin'],
	variable: '--font-playfair',
	display: 'swap',
});


// Hapus: import Head from "next/head";

export default function HomeSixLayout({ children }) {
	return (
		<html lang="id" className={`${inter.variable} ${playfair_display.variable}`}>
			<body>
				<ImportBsJS />
				<Header />
				{/* Contoh penggunaan lazy load Swiper */}
				{children}
				<Footer />
				<ScrollToTop />
			</body>
		</html>
	);
}
