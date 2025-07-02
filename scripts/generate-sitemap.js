import { createWriteStream } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

const generateSitemap = async () => {
  const links = [
    { url: "", changefreq: "weekly", priority: 1.0 },
    { url: "/services", changefreq: "weekly", priority: 0.8 },
    { url: "/about-us", changefreq: "monthly", priority: 0.8 },
    { url: "/contact-us", changefreq: "monthly", priority: 0.8 },
  ];

  const stream = new SitemapStream({ hostname: "https://aimmax.co.ke" });
  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(
    (data) => data.toString()
  );

  const writeStream = createWriteStream("public/sitemap.xml");
  writeStream.write(xml);
  writeStream.end();
};

generateSitemap();
