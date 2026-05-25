import Link from "next/dist/client/link";

const images = [
  { src: "/assets/Images/papafish.jpeg", caption: "Fish Mount" },
  { src: "/assets/Images/turkey.jpeg", caption: "Turkey Mount" },
  { src: "/assets/Images/deergroup.jpeg", caption: "Grouped Mounts" },
  { src: "/assets/Images/hog.jpeg", caption: "Hog Mount" },
  { src: "/assets/Images/fish1.jpeg", caption: "Fish Mount" },
  { src: "/assets/Images/hornmount.jpeg", caption: "Antler Mount" },
  { src: "/assets/Images/ducks.jpg", caption: "Duck Mount" },
  { src: "/assets/Images/joshdeer.jpeg", caption: "Whitetail Buck" },
  { src: "/assets/Images/monsterdeer.jpeg", caption: "Whitetail Buck" },
  // { src: "/assets/Images/velvetdeer.jpeg", caption: "Whitetail Buck" },
  { src: "/assets/Images/mimideer.png", caption: "Whitetail Buck" },
  { src: "/assets/Images/image20.jpg", caption: "Fish Mount" },
  { src: "/assets/Images/image22.jpg", caption: "Fish Mount" },
  { src: "/assets/Images/mrtwister.png", caption: "Mr. Twister" },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-[#3d2b1f] text-white">
      {/* Nav */}
      <nav className="px-8 py-5 flex items-center justify-between bg-[#3d2b1f]">
        <Link href="/">
          <img src="/assets/MH.png" alt="MH Logo" className="w-20" />
        </Link>
        <div className="flex gap-10 items-center">
          <Link
            href="/"
            className="text-white uppercase text-sm tracking-wide hover:text-white/70"
          >
            Home
          </Link>
          <Link
            href="/pricelist"
            className="text-white uppercase text-sm tracking-wide hover:text-white/70"
          >
            Price List
          </Link>
          <Link
            href="/gallery"
            className="text-white uppercase text-sm tracking-wide hover:text-white/70"
          >
            Gallery
          </Link>
          <Link
            href="/reviews"
            className="text-white uppercase text-sm tracking-wide hover:text-white/70"
          >
            Reviews
          </Link>
          <Link
            href="/contact"
            className="bg-[#6b3a1f] text-white uppercase text-sm px-5 py-2 rounded-lg hover:bg-[#7d4424]"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-4">Gallery</h1>
        <p className="text-white/70 text-lg mb-2">
          A glimpse into the legacy — from whitetail bucks to strutting toms.
        </p>
        <p className="text-white/70">
          Each piece is handcrafted with care and tradition.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.src}
            className="bg-[#2e1f14] rounded-lg overflow-hidden"
          >
            <img
              src={image.src}
              alt={image.caption}
              className={
                image.caption === "Mr. Twister"
                  ? "w-full"
                  : "w-full aspect-square object-cover object-center"
              }
            />
            <p className="text-center py-3 text-white/80">{image.caption}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="border-t border-white/20 py-6 text-center text-white/60 text-sm">
        <p>2025 Mickey Herring Taxidermy</p>
        <p>3724 Hydrangea Street — Columbia, SC 29205</p>
      </footer>
    </div>
  );
}
