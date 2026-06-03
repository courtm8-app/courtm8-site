import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/logo-lockup.svg"
        alt="Courtm8"
        width={176}
        height={32}
        priority
        className="hidden h-8 w-auto max-w-full sm:h-9 md:block lg:h-10"
      />
      <Image
        src="/logo-icon.svg"
        alt="Courtm8"
        width={32}
        height={40}
        priority
        className="h-9 w-auto sm:h-10 md:hidden"
      />
    </div>
  );
}
