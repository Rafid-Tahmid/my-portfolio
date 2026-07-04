import sharp from "sharp";
import { mkdirSync } from "fs";

const SRC = process.env.SRC_DIR ?? "/tmp/bg-src";
mkdirSync("public/bg", { recursive: true });

// hero: valley — duotone into brand indigo, dark, subtle
await sharp(`${SRC}/37208027.jpg`)
  .grayscale()
  .tint({ r: 124, g: 108, b: 255 })
  .modulate({ brightness: 0.7 })
  .blur(1.2)
  .webp({ quality: 72 })
  .toFile("public/bg/hero.webp");

// projects: coastal road — very dark, desaturated, blurred texture behind glass
await sharp(`${SRC}/37373252.jpg`)
  .modulate({ brightness: 0.6, saturation: 0.6 })
  .blur(2.5)
  .webp({ quality: 70 })
  .toFile("public/bg/projects.webp");

// contact: jellyfish — natural cyan already on-palette, darkened
await sharp(`${SRC}/37813391.jpg`)
  .modulate({ brightness: 0.7, saturation: 0.8 })
  .blur(1.5)
  .webp({ quality: 72 })
  .toFile("public/bg/contact.webp");

console.log("done");
