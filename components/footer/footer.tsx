import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 bottom-0 w-full flex justify-between items-center p-6">
      <div className="flex items-center">
        <Image
          src="/footer/s_logo.png"
          alt="FooterLogo"
          width={150}
          height={40}
          layout="fixed"
        />
        <span className="">© 2024</span>
      </div>
      <div className="flex">
        <span className="mr-2">Privacy</span>
        <span className="mr-2">Terms</span>
        <span className="mr-2">Sitemap</span>
      </div>
    </footer>
  );
}
