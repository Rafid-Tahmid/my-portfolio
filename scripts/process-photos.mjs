import sharp from "sharp";
import { mkdirSync } from "fs";
mkdirSync("public/bg", { recursive: true });
mkdirSync("public/photos", { recursive: true });
const P = (id) => `photos/pexels-rafid-${id}.jpg`;
const opt = { limitInputPixels: false };

// hero: sunset tree over Adelaide — keep the gold, gentle darken
await sharp(P(29677538), opt).resize({ width: 2000 }).modulate({ brightness: 0.9, saturation: 1.05 }).webp({ quality: 76 }).toFile("public/bg/hero.webp");
// about side panel: B&W laneway
await sharp(P(36745301), opt).resize({ width: 900 }).webp({ quality: 74 }).toFile("public/photos/about.webp");
// projects bg: looking up between buildings, dark
await sharp(P(26180221), opt).resize({ width: 1600 }).modulate({ brightness: 0.6 }).blur(1.5).webp({ quality: 70 }).toFile("public/bg/projects.webp");
// education bg: library ceiling, warm, dark
await sharp(P(30301846), opt).resize({ width: 1600 }).modulate({ brightness: 0.55, saturation: 0.9 }).blur(1.2).webp({ quality: 70 }).toFile("public/bg/education.webp");
// contact bg: pier into the sea
await sharp(P(30345626), opt).resize({ width: 1600 }).modulate({ brightness: 0.75 }).webp({ quality: 72 }).toFile("public/bg/contact.webp");

// gallery — full color/contrast, natural
const gallery = [29677538, 37434605, 36801057, 26180221, 30301846, 30345626, 36745301];
for (const id of gallery) {
  const img = sharp(P(id), opt).resize({ width: 900 });
  const info = await img.webp({ quality: 76 }).toFile(`public/photos/g-${id}.webp`);
  console.log(id, info.width, info.height);
}
