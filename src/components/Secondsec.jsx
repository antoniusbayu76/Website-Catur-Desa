import background from "../assets/secondsecbg.png";
import map from "../assets/mapdummy.png";

export default function Secondsec() {
  return (
    <section
      className="w-full bg-cover bg-center text-white px-6 py-16 md:px-20"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
        {/* Left Content: Title & Description */}
        <div className="md:flex-1 max-w-xl space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            Empat Desa Tanah Tamblingan
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-white/90">
            Secara wilayah, Tanah Adat Dalem Tamblingan mencakup 4 desa :{" "}
            <span className="font-semibold text-white">
              Gobleg, Munduk, Umajero, dan Gesing.
            </span>{" "}
            Keempatnya berbagi nilai, tradisi, dan sistem sosial yang tumbuh dari akar sejarah yang sama.
          </p>
        </div>

        {/* Right Content: Map Image */}
        <div className="md:flex-1 flex justify-center">
          <img
            src={map}
            alt="Peta Tanah Tamblingan"
            className="max-w-xs md:max-w-sm w-full"
          />
        </div>
      </div>
    </section>
  );
}
