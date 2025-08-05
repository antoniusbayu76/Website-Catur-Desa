import { useEffect } from "react";
import NavbarNoTourism from "../components/NavbarNoTourism";
import { FaMapMarkerAlt } from "react-icons/fa";
import wisata1 from "../assets/danau.png";
import wisata2 from "../assets/danau.png";
import wisata3 from "../assets/danau.png";
import wisata4 from "../assets/danau.png";
import pariwisatabg from "../assets/pariwbg.JPG";

export default function Pariwisata() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const wisataList = [
    {
      title: "Air Terjun Munduk",
      image: wisata1,
      description:
        "Salah satu air terjun paling populer di Munduk yang dikelilingi hutan lebat dan jalur trekking alami. Air terjun ini menawarkan suasana sejuk dan asri yang cocok untuk relaksasi.",
      location: "Desa Munduk, Banjar, Buleleng",
    },
    {
      title: "Air Terjun Melanting",
      image: wisata2,
      description:
        "Air terjun setinggi sekitar 20 meter yang terletak tidak jauh dari Air Terjun Munduk. Suasananya tenang dan jalur menuju lokasi cocok bagi pecinta alam.",
      location: "Munduk, Banjar, Buleleng",
    },
    {
      title: "Kebun Mawar Munduk",
      image: wisata3,
      description:
        "Taman bunga mawar yang luas dan tertata rapi, sangat cocok untuk kegiatan fotografi, wisata keluarga, atau sekadar bersantai di tengah keindahan bunga.",
      location: "Jalan Raya Munduk – Gobleg",
    },
    {
      title: "Danau Buyan & Tamblingan",
      image: wisata4,
      description:
        "Dua danau kembar yang menawarkan pemandangan alam memukau, suasana spiritual, serta aktivitas seperti berperahu dan trekking hutan.",
      location: "Pinggiran Munduk – Cagar Alas Mertajati",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative text-white"
      style={{
        backgroundImage: `url(${pariwisatabg})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay gelap agar kontras lebih bagus */}
      <div className="absolute inset-0 bg-black/10 z-0" />

      <div className="relative z-10">
        <NavbarNoTourism />

        {/* Header */}
        <section
          className="pt-28 pb-12 px-6 md:px-20 text-white"
          style={{
          background: "linear-gradient(to right, rgba(79, 195, 247, 0.5), rgba(2, 136, 209, 0.5))",
          }}
>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Pariwisata Sekitar Catur Desa
          </h1>
          <p className="text-sm sm:text-base max-w-2xl">
            Menyusuri jejak keindahan alam dan budaya yang mengelilingi Desa
            Munduk dan Catur Desa lainnya. Temukan pengalaman yang menghubungkan
            spiritualitas, kesejukan alam, dan keaslian masyarakat adat.
          </p>
        </section>

        {/* Daftar Wisata */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-10 space-y-16">
          {wisataList.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start gap-8 group bg-white/80 text-black rounded-xl p-4 shadow-lg backdrop-blur-md"
            >
              <div className="md:w-1/2 w-full overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[280px] md:h-[320px] object-cover transition duration-300 group-hover:scale-105 rounded-lg"
                />
              </div>
              <div className="md:w-1/2 space-y-3">
                <h2 className="text-2xl md:text-3xl font-bold text-[#44342F]">
                  {item.title}
                </h2>
                <p className="text-sm text-justify leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center text-sm text-[#AA5C46] mt-2">
                  <FaMapMarkerAlt className="mr-2" /> {item.location}
                </div>
              </div>
            </div>
          ))}
        </section>

        <div className="h-12" />
      </div>
    </div>
  );
}