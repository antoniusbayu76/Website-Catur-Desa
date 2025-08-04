import background from "../assets/secondsecbg.png";
import map from "../assets/petabali.png";

export default function Secondsec() {
  return (
    <section
      className="w-full bg-cover bg-center text-white px-6 py-16 md:px-20 relative overflow-hidden min-h-[28rem]"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="relative w-full h-full min-h-[28rem]">
        {/* Slide 1 Saja */}
        <div className="absolute inset-0 flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16 px-0">
          <div className="md:flex-1 max-w-xl space-y-4 z-10 pr-8 md:pr-24 pb-12">
            <h2 className="text-2xl md:text-4xl italic font-bold leading-tight">
              Adat Dalem Tamblingan
            </h2>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-white/90 max-w-prose">
              Masyarakat Adat Dalem Tamblingan adalah komunitas tradisional yang
              mendiami wilayah Catur Desa Munduk, Gobleg, Gesing, dan Umejero di
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
          <div className="md:flex-1 flex justify-center z-10">
            <img
              src={map}
              alt="Peta Tanah Tamblingan"
              className="max-w-xs md:max-w-sm w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
