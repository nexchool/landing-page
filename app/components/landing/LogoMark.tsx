import Image from "next/image";
import emblem from "./assets/emblem.png";

export function LogoMark() {
  // Served as-is: the file is already sized for 2x display, and `output: "standalone"`
  // would otherwise need the image optimiser on the server.
  return <Image className="logo-mark" src={emblem} alt="" width={62} height={34} unoptimized priority />;
}
