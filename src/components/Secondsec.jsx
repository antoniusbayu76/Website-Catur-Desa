import background from "../assets/secondsecbg.png";
import map from "../assets/petasect2fix.png";

export default function Secondsec() {
  return (
    <section
      className="w-full bg-cover bg-center text-white px-6 py-16 md:px-20"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
        {/* Left Content: Title & Description */}
        <div className="md:flex-1 max-w-xl space-y-4">
          <h2 className="text-2xl md:text-4xl italic font-bold leading-tight">
            Adat Dalem Tamblingan
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-white/90">
            Masyarakat Adat Dalem Tamblingan adalah komunitas tradisional yang
            mendiami wilayah Catur Desa Munduk, Gobleg, Gesing, dan Umajero di
            sekitar Danau Tamblingan, Buleleng. Mereka memiliki akar sejarah
            dari peradaban kuno Tamblingan dan dikenal teguh memegang{" "}
            <span className="italic">Piagem Gama Tirta</span>, sistem nilai
            leluhur yang menekankan pentingnya air suci (tirta) sebagai sumber
            kehidupan dan keseimbangan semesta. Danau Tamblingan dipandang
            sebagai kawasan suci yang dijaga melalui sistem{" "}
            <span className="italic">alas kekeran</span> (hutan larangan),
            mencerminkan harmoni antara manusia dan alam. Kehidupan mereka
            diatur oleh lembaga adat dan tokoh spiritual yang melestarikan
            tradisi serta menjalankan ritual di pura-pura peninggalan leluhur.
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
