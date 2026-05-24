export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/wooded-scene.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-8 py-5 flex items-center justify-between">
        <a href="/">
          <img src="/assets/MH.png" alt="MH Logo" className="w-20" />
        </a>
        <div className="flex gap-10 items-center">
          <a
            href="/"
            className="text-white uppercase text-sm tracking-wide hover:text-white/70"
          >
            Home
          </a>
          <a
            href="/pricelist"
            className="text-white uppercase text-sm tracking-wide hover:text-white/70"
          >
            Price List
          </a>
          <a
            href="/gallery"
            className="text-white uppercase text-sm tracking-wide hover:text-white/70"
          >
            Gallery
          </a>
          <a
            href="/reviews"
            className="text-white uppercase text-sm tracking-wide hover:text-white/70"
          >
            Reviews
          </a>
          <a
            href="/contact"
            className="bg-[#6b3a1f] text-white uppercase text-sm px-5 py-2 rounded-lg hover:bg-[#7d4424]"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Mickey Herring Taxidermy
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            As an avid hunter and fisherman, I know the importance of treasuring
            your wildlife trophies. I specialize in deer, turkey, and fish, but
            I'm always up for a new challenge.
          </p>
          <a
            href="/pricelist"
            className="bg-[#6b3a1f] text-white px-8 py-3 rounded-full text-lg hover:bg-[#7d4424] transition-colors duration-200"
          >
            View Price List
          </a>
        </div>
      </div>
    </div>
  );
}
