import Image from "next/image";
import Link from "next/link";
import NextWhiteImg from "../../../public/images/v6/next-white.svg";
function ProjectCard({ project: { title, img } }) {
    return (
        <div className="aximo-project-thumb5">
            {/* SEO Hidden Content */}
            <div style={{ display: "none" }}>
                <p>
                    {title} adalah salah satu karya kaca patri, kaca inlay, atau kaca dekoratif dari Tangguh Glass yang dikerjakan dengan material berkualitas dan desain estetik untuk berbagai kebutuhan rumah, tempat ibadah, atau bangunan komersial.
                </p>
            </div>
            {/* End SEO Hidden Content */}
            <div
                className="project-image-wrapper"
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%", // Make sure the parent allows this to work!
                    minHeight: "600px", // Optional: fallback minimum height
                }}
            >
                <Image
                    src={img}
                    alt={title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="100vw"
                />
            </div>
            <div className="aximo-marquee-two">
                <div className="aximo-infinite two">
                    {[...Array(18)].map(() => (
                        <Link key={crypto.randomUUID()} href="/galeri">
                            {title} <Image src={NextWhiteImg} alt="Next" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
