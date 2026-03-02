const videos = [
  {
    label: "AI Booking Appointment",
    poster: "/videos/booking-poster.jpg",
    src: "/videos/booking-demo.mp4",
  },
  {
    label: "After-Hours Call Handling",
    poster: "/videos/afterhours-poster.jpg",
    src: "/videos/afterhours-demo.mp4",
  },
  {
    label: "AI Answering Questions",
    poster: "/videos/questions-poster.jpg",
    src: "/videos/questions-demo.mp4",
  },
];

export function VideoProof() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="heading-tight mb-12 text-center text-2xl font-extrabold sm:mb-20 sm:text-4xl">
          Native Voice Performance
        </h2>

        {/* Desktop: grid, Mobile: horizontal scroll */}
        <div className="hidden gap-10 md:grid md:grid-cols-3">
          {videos.map((video) => (
            <VideoCard key={video.label} {...video} />
          ))}
        </div>

        <div className="scroll-snap-x flex gap-6 overflow-x-auto pb-4 md:hidden">
          {videos.map((video) => (
            <div key={video.label} className="w-[280px] flex-shrink-0">
              <VideoCard {...video} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({
  label,
  poster,
  src,
}: {
  label: string;
  poster: string;
  src: string;
}) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="group relative w-full overflow-hidden rounded-[40px] border border-slate-300 bg-slate-200 p-2">
        <div className="relative aspect-[9/16] overflow-hidden rounded-[32px] bg-slate-100">
          {/* Video element — lazy loaded, no autoplay */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            preload="none"
            playsInline
            muted
            loop
            poster={poster}
            aria-label={`Demo video: ${label}`}
            src={src}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-8">
            {/* Play button placeholder */}
            <button
              className="mb-auto flex h-14 w-14 items-center justify-center self-center rounded-full bg-primary text-white shadow-xl transition-transform group-hover:scale-110"
              aria-label={`Play ${label} video`}
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <p className="text-center font-bold text-white">{label}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
