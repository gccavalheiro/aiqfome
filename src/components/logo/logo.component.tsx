import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" title="Página inicial">
      <Image
        src="/assets/icons/aiq-logo.svg"
        alt="Aiqfome Logo"
        width={32}
        height={32}
        className="w-auto h-auto"
      />
    </Link>
  );
}
