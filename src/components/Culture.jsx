import toy from "../assets/toy.png"

const topics = [
  { title: "Toy", desc: "Permainan dianggap warisan budaya adat Tamblingan", bg: toy },
  { title: "W A", desc: "Permainan dianggap warisan budaya adat Tamblingan", bg: toy },
  { title: "Heritage", desc: "Desa Adat mewarisi nilai budaya sejak zaman leluhur dan tetap dijaga",bg: toy },
  { title: "Law", desc: "Permainan dianggap warisan budaya adat Tamblingan", bg: toy },
  { title: "History", desc: "Permainan dianggap warisan budaya adat Tamblingan", bg: toy },
  { title: "Ayuk", desc: "Permainan dianggap warisan budaya adat Tamblingan", bg: toy },
];

export default function CultureContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left: Video Embeds */}
      <div className="flex flex-col gap-6">
        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Dummy Video 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Dummy Video 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Right: Topics */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {topics.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden h-32 md:h-56 bg-[#151515]/10"
            style={{
              backgroundImage: `url(${item.bg})`,
              backgroundSize: "300%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10 p-3 text-white h-full flex flex-col justify-between items-center text-center">
              <div className="text-base font-bold">{item.title}</div>
              <div className="text-xs opacity-80">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
