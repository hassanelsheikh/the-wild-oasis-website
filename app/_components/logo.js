import Link from "next/link";
import Image from "next/image";
function Logo() {
  return (
    <div>
      <Link href={"/"} className="flex item-center gap-4">
        <Image
          src="/logo.png"
          height={"60"}
          width={"60"}
          quality={100}
          alt="The Wild Oasis Logo"
        ></Image>
        <span className="text-xl font-semibold text-primary mt-4">
          The Wild Oasis
        </span>
      </Link>
    </div>
  );
}

export default Logo;
