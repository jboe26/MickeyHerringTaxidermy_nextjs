import Link from "next/dist/client/link";

export default function PriceList() {
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
        <h1 className="text-5xl font-bold mb-4">Pricing</h1>
        <p className="text-white/70 text-lg mb-2">
          Handcrafted taxidermy honoring the art and memory of the outdoors.
        </p>
        <p className="text-white font-semibold text-lg mb-2">
          For inquiries, please call 803-331-2139
        </p>
        <p className="text-red-400 font-semibold">
          Prices are subject to change without notice.
        </p>
      </div>

      {/* Price Cards */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Birds */}
        <div className="bg-[#4a5c2a] rounded-lg p-6">
          <h2 className="text-xl font-bold text-center mb-2">Birds</h2>
          <p className="text-white/70 text-sm text-center mb-4">
            Includes a suitable base. Natural Habitat bases available for extra
            cost.
          </p>
          <div className="space-y-2 text-sm">
            {[
              ["Duck", "$450"],
              ["Goose", "$750"],
              ["Grouse", "$450"],
              ["Pheasant", "$450"],
              ["Pheasant (Fan pose)", "$125"],
              ["Turkey", "$1200"],
              ["Turkey (Head, Neck & Tail)", "$650"],
              ["Quail-sized Bird", "$350"],
              ["Canada Goose", "$750"],
              ["Other Geese", "$600"],
            ].map(([item, price]) => (
              <div
                key={item}
                className="flex justify-between border-b border-white/20 pb-1"
              >
                <span>{item}</span>
                <span>{price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* European Skull Mounts */}
        <div className="bg-[#4a5c2a] rounded-lg p-6">
          <h2 className="text-xl font-bold text-center mb-2">
            European Skull Mounts
          </h2>
          <p className="text-white/70 text-sm text-center mb-4">
            Natural skull cleaned, bleached & treated.
          </p>
          <div className="space-y-2 text-sm">
            {[
              ["Bear", "$250"],
              ["Boar", "$250"],
              ["Deer", "$175"],
            ].map(([item, price]) => (
              <div
                key={item}
                className="flex justify-between border-b border-white/20 pb-1"
              >
                <span>{item}</span>
                <span>{price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Game Mounts */}
        <div className="bg-[#4a5c2a] rounded-lg p-6">
          <h2 className="text-xl font-bold text-center mb-2">Game Mounts</h2>
          <div className="space-y-2 text-sm">
            {[
              ["Beaver", "$1200"],
              ["Black Bear", "$1075"],
              ["Boar", "$850"],
              ["Bobcat", "$1200"],
              ["Coyote", "$1200"],
              ["Whitetail Buck", "$750"],
              ["Mule Deer", "$850"],
              ["Fox", "$1200"],
              ["Otter", "$1050"],
              ["Raccoon", "$1050"],
              ["Squirrel", "$375"],
            ].map(([item, price]) => (
              <div
                key={item}
                className="flex justify-between border-b border-white/20 pb-1"
              >
                <span>{item}</span>
                <span>{price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Horn Plaques */}
        <div className="bg-[#4a5c2a] rounded-lg p-6">
          <h2 className="text-xl font-bold text-center mb-2">Horn Plaques</h2>
          <p className="text-white/70 text-sm text-center mb-4">
            Covered in buckskin and mounted on wood panel.
          </p>
          <div className="space-y-2 text-sm">
            {[["Deer", "$125"]].map(([item, price]) => (
              <div
                key={item}
                className="flex justify-between border-b border-white/20 pb-1"
              >
                <span>{item}</span>
                <span>{price}</span>
              </div>
            ))}
          </div>
        </div>
        <div></div>

        {/* Fish */}
        <div className="bg-[#4a5c2a] rounded-lg p-6">
          <h2 className="text-xl font-bold text-center mb-2">Fish</h2>
          <div className="space-y-2 text-sm">
            {[
              ["Bass", "$400"],
              ["Pan Fish", "$375"],
              ["Striper/Trout (per inch)", "$25"],
              ["Saltwater Fish (per inch)", "$25"],
            ].map(([item, price]) => (
              <div
                key={item}
                className="flex justify-between border-b border-white/20 pb-1"
              >
                <span>{item}</span>
                <span>{price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/20 py-6 text-center text-white/60 text-sm">
        <p>2025 Mickey Herring Taxidermy</p>
        <p>3724 Hydrangea Street — Columbia, SC 29205</p>
      </footer>
    </div>
  );
}
