import Link from "next/dist/client/link";

const reviews = [
  {
    name: "Darrel Bentley",
    review:
      "My mount is so amazing. Really fast turn around. Very friendly as well.",
    stars: 5,
  },
  {
    name: "Angela Brazil",
    review:
      "Absolutely amazing taxidermist! He makes every creature so life-like and to perfection.",
    stars: 5,
  },
  {
    name: "Bill Gallaher",
    review: "Got my buck mounted to shoulder looks amazing on the wall.",
    stars: 4,
  },
  {
    name: "Carl Gable",
    review:
      "This man is a true artist. I could not have asked for a better mount.",
    stars: 5,
  },
  {
    name: "Mike Herring",
    review: "Great deer heads, excellent fish mounts as well.",
    stars: 5,
  },
  {
    name: "Micaiah Bouknight",
    review: "Great job on wood duck mount!",
    stars: 5,
  },
  {
    name: "Jared Anderson",
    review:
      "Had a raccoon done years ago still looks like the day I brought it home. Just dropped a Canadian goose off and I know the result will be the same! His work holds years to come.",
    stars: 5,
  },
];

export default function Reviews() {
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
        <h1 className="text-5xl font-bold mb-4">Reviews</h1>
        <p className="text-white/70 text-lg mb-2">
          Every mount tells a story. Here are a few shared by those who treasure
          them.
        </p>
        <p className="text-white/70">
          Craftsmanship remembered, moments preserved.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="bg-white rounded-lg p-6 text-center"
          >
            <h3 className="text-[#3d2b1f] font-bold text-lg mb-3">
              {review.name}
            </h3>
            <p className="text-gray-600 text-md mb-4">{review.review}</p>
            <div className="flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={
                    i < review.stars ? "text-yellow-400" : "text-gray-300"
                  }
                >
                  ★
                </span>
              ))}
            </div>
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
