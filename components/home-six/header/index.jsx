"use client";
import DesktopNav from "@/components/common/navigation/desktop-nav/DesktopNav";
import NavItem from "@/components/common/navigation/desktop-nav/NavItem";
import MobileNavbar from "@/components/common/navigation/mobile-nav/MobileNavbar";
import { menuItemsData } from "@/components/common/navigation/mobile-nav/menuItemsData";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";
import styles from "./header.module.css";

function Header() {
	return (
		<header className="site-header aximo-header-section site-header--menu-center bg-light7" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopNav>
							<NavItem url="/">Beranda</NavItem>
							<NavItem url="tentang-kami">Tentang Kami</NavItem>
							<NavItem url="layanan">Layanan</NavItem>
							<NavItem url="galeri">Galeri</NavItem>
							<NavItem url="artikel">Artikel</NavItem>
							<NavItem url="kontak">Kontak</NavItem>
						</DesktopNav>
					</div>
					<HeaderButton className={styles.hideOnMobile} />
					<MobileNavbar menuItemsData={menuItemsData} title="Tangguh Glass" />
				</nav>
			</div>
		</header>
	);
}

export default Header;
