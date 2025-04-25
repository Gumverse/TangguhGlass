export async function GET() {
    const baseUrl = "https://tangguhglass.netlify.app";

    const staticPages = [
        "", // homepage
        "tentang-kami",
        "layanan",
        "galeri",
        "artikel",
        "kontak",
    ];

    const blogSlugs = [
        "jenis-jenis-kaca-patri-dan-variasinya",
        "panduan-memilih-jenis-kaca-dekoratif",
    ];

    const urls = [...staticPages, ...blogSlugs.map((slug) => `artikel/${slug}`)];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
            .map(
                (path) => `
      <url>
        <loc>${baseUrl}${path ? "/" + path : ""}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>${path.startsWith("artikel") ? "monthly" : "weekly"
                    }</changefreq>
        <priority>${path === "" ? "1.0" : "0.8"}</priority>
      </url>
    `
            )
            .join("")}
  </urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
