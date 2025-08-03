import { useNavigate } from "react-router-dom";
import munduk from "../assets/munduk.png";
import gobleg from "../assets/gobleg.png";
import gesing from "../assets/gesing.png";
import umajero from "../assets/umajero.png";
import thumbnail1 from "../assets/PosyanduMunduk.jpg";
import thumbnail2 from "../assets/Purnama.JPG";
import thumbnail3 from "../assets/danau.png";
import thumbnail4 from "../assets/danau.png";
import thumbnailbkup from "../assets/danau.png";
import petaMunduk from "../assets/Munduk 1.png"; 

const allDesa = [
  { name: "Munduk", image: munduk, link: "/munduk" },
  { name: "Gobleg", image: gobleg, link: "/gobleg" },
  { name: "Gesing", image: gesing, link: "/gesing" },
  { name: "Umajero", image: umajero, link: "/umajero" },
];

const articleThumbnails = [
  {
    title: "Posyandu Lansia Desa Munduk",
    desc: "Komitmen Pelayanan Kesehatan Berkelanjutan bagi Masyarakat Lanjut Usia.",
    image: thumbnail1,
    link: "/posyandu-munduk",
  },
  {
    title: "Ruang Hidup Warisan Leluhur",
    desc: "Menyusuri Jejak Pujawali Purnama di Munduk antara Sakralitas dan Kebersamaan.",
    image: thumbnail2,
    link: "/pujawali",
  },
  /*{
    title: "Permainan Tradisional",
    desc: "Permainan anak-anak dan aktivitas komunitas desa.",
    image: thumbnail3,
  },
  {
    title: "Pertanian & Ekonomi",
    desc: "Sistem pertanian tradisional dan kehidupan ekonomi desa.",
    image: thumbnail4,
  }, */
];

export default function Munduk() {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const filteredDesa = allDesa.filter((desa) => desa.link !== currentPath);

  const handleNavigate = (link) => {
    navigate(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#834D3D] text-white font-sans overflow-x-hidden">
      {/* HERO */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-no-repeat transition-transform duration-500"
          style={{
            backgroundImage: `url(${munduk})`,
            backgroundSize: window.innerWidth < 640 ? "150%" : "110%",
          }}
        />
        <div className="absolute inset-0 bg-black/45 z-10" />
        <div
          className="absolute bottom-0 w-full h-20 z-20 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #834D3D 100%)",
          }}
        />
        <div className="relative z-30 flex items-center justify-center h-full">
          <h1 className="text-white text-5xl font-bold">Munduk</h1>
        </div>
      </section>

      {/* HIGHLIGHT */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div
          className="text-center px-6 py-6 text-white relative overflow-hidden"
          style={{
            borderRadius: "16px",
            backgroundColor: "rgba(201, 164, 53, 0.15)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            boxShadow: "inset 0 0 40px rgba(255, 233, 155, 0.2)",
          }}
        >
          <h2 className="text-base sm:text-lg font-semibold leading-snug">
            Bagan Highlight Atau Ringkasan Dari Bagian Paling Penting Atau Menarik Dari Suatu Hal Yang Ada Di <br />
            <span className="font-bold">Desa Munduk</span> Seperti Fun Fact Ataupun Kedudukan
          </h2>
        </div>

        <div className="mt-6 rounded-xl overflow-hidden shadow-lg max-w-2xl mx-auto">
          <img src={thumbnailbkup} alt="Highlight" className="w-full h-64 object-cover" />
        </div>

        <div
          className="relative max-w-3xl mx-auto mt-6 rounded-xl text-white text-sm sm:text-base italic"
          style={{
            backgroundColor: "rgba(201, 164, 53, 0.08)",
            padding: "20px 24px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "0",
              top: "16px",
              bottom: "16px",
              width: "5px",
              borderRadius: "6px",
              backgroundColor: "#C9A435",
              zIndex: 10,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: "100%",
              background: "linear-gradient(to right, rgba(224, 177, 153, 0.1), rgba(131, 77, 62, 0.9))",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
          <p
            style={{
              marginLeft: "12px",
              lineHeight: "1.75",
              position: "relative",
              zIndex: 2,
            }}
          >
            “Kutipan adalah pengulangan satu ekspresi sebagai bagian dari yang lain, terutama ketika ekspresi yang dikutip itu terkenal atau secara tersurat dihubungkan dengan kutipan ke sumber yang asli, ditandai oleh kutip.”
          </p>
        </div>
      </section>

      {/* DESKRIPSI 2 KOLOM */}
      <section
              className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 py-10 mt-6 text-white"
                style={{
                  borderRadius: "18px",
                  backgroundColor: "rgba(243, 145, 65, 0.20)", // F39141 @ 20%
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  boxShadow: `
                  inset 0 6px 20px rgba(255, 255, 255, 0.15),
                  inset 0 -6px 18px rgba(255, 255, 255, 0.12),
                  0 3px 12px rgba(0, 0, 0, 0.15)
                  `,
                }}
            >
        {/* KIRI */}
          <div className="md:col-span-2">
          <h3 className="text-3xl font-bold mb-4">Sub Judul 1</h3>
      
          <h4 className="text-lg font-semibold mb-1">Sub Judul 2</h4>
          <p className="text-sm leading-relaxed mb-6 text-justify">
            Alas Mertajati adalah hutan adat yang terletak di kawasan Danau Tamblingan,
            Kecamatan Banjar, Kabupaten Buleleng, Bali. Hutan ini memiliki nilai spiritual
            yang tinggi bagi masyarakat adat Dalem Tamblingan, karena dipercaya sebagai tempat suci
            yang menjadi sumber kehidupan dan harmoni dengan alam.
          </p>
      
          <h4 className="text-lg font-semibold mb-1">Sub Judul 2</h4>
          <p className="text-sm leading-relaxed text-justify">
            Alas Mertajati adalah hutan adat yang terletak di kawasan Danau Tamblingan,
            Kecamatan Banjar, Kabupaten Buleleng, Bali. Hutan ini memiliki nilai spiritual
            yang tinggi bagi masyarakat.
          </p>
        </div>
      
        {/* KANAN */}
        <div className="space-y-6 flex flex-col items-center justify-start">
          <div className="w-28 h-28 bg-gray-300 flex items-center justify-center rounded-full text-xl font-bold text-black shadow-inner">
            LOGO
          </div>
          {/* Gambar peta */}
        <div className="w-full">
          <img
            src={petaMunduk}
            alt="Peta Munduk"
          />
        </div>
          <p className="text-xs italic text-center text-white/80">Letak Munduk Pada Catur Desa</p>
        </div>
      </section>

      {/* DATA DESA */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-4 py-10 items-start">
        <div className="flex flex-col rounded-xl overflow-hidden">
          <div className="rounded-xl overflow-hidden shadow-md">
            <img src={thumbnailbkup} alt="Gambar Tambahan" className="w-full h-64 object-cover" />
          </div>
          <div className="mt-2 text-white text-xs pl-2">
            <p className="leading-snug">
              Keterangan Lengkap Mengenai Gambar
              <br />
              <span className="text-[10px] text-gray-200 italic">
                Source: Dokumentasi Pribadi Baga Raksa Alas Mertajati
              </span>
            </p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 text-black">
          <h4 className="text-lg font-semibold mb-4">DATA DESA</h4>
          <ul className="text-sm space-y-1">
            <li>Jumlah Penduduk: XXXXX</li>
            <li>Jumlah KK: XXXX</li>
            <li>Luas Wilayah: XXXX m²</li>
            <li>Mayoritas Pekerjaan: ABCD</li>
            <li>Other: XXXX</li>
            <li>Other: XXXX</li>
            <li>Other: XXXX</li>
          </ul>
        </div>
      </section>

      {/* GLIMPSE */}
      <section
        className="py-12 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400/30"
        style={{ paddingLeft: "4rem", paddingRight: "4rem", maxWidth: "100%", margin: "0 auto" }}
      >
        <div className="flex items-center gap-4 mb-8 justify-center">
          <div className="flex-grow border-t border-white/70 max-w-[300px]" />
          <h2 className="text-2xl sm:text-3xl font-bold whitespace-nowrap text-center">Glimpse Of Munduk</h2>
          <div className="flex-grow border-t border-white/70 max-w-[300px]" />
        </div>

        <div className="flex justify-center gap-10 flex-wrap">
          {articleThumbnails.map((item, idx) => (
            <div
              key={idx}
              className="relative w-[220px] min-w-[220px] h-[330px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer shrink-0"
              onClick={() => {
                if (item.link) navigate(item.link); // ✅ navigasi jika ada link
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-115"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex flex-col justify-end">
                <h3 className="text-white font-semibold text-lg leading-tight">{item.title}</h3>
                <p className="text-white text-xs mt-1 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DISCOVER MORE */}
      <section className="bg-[#9C675A] py-12 px-4">
        <h3 className="text-2xl font-bold text-center mb-10">Discover More</h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {filteredDesa.map((desa, i) => (
            <div
              key={i}
              onClick={() => handleNavigate(desa.link)}
              className="relative w-48 h-32 sm:w-56 sm:h-36 md:w-64 md:h-40 lg:w-72 lg:h-44 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
            >
              <img
                src={desa.image}
                alt={desa.name}
                className="absolute inset-0 w-full h-full object-cover block transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                <span className="text-white text-xl sm:text-2xl font-semibold tracking-wide drop-shadow-md">{desa.name}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-white mt-12">
          Developed by <strong>KKN MEKAR BANJAR UGM 2025</strong>
        </p>
      </section>
    </div>
  );
}
