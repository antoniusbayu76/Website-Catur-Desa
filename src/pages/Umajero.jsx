import { useNavigate } from "react-router-dom";
import munduk from "../assets/munduk.png";
import gobleg from "../assets/gobleg.png";
import gesing from "../assets/gesing.png";
import umajero from "../assets/umajero.png";

const allDesa = [
  { name: "Munduk", image: munduk, link: "/munduk" },
  { name: "Gobleg", image: gobleg, link: "/gobleg" },
  { name: "Gesing", image: gesing, link: "/gesing" },
  { name: "Umajero", image: umajero, link: "/umajero" },
];

export default function Umajero() {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const filteredDesa = allDesa.filter((desa) => desa.link !== currentPath);

  const handleNavigate = (link) => {
    navigate(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#fcfcf6] text-gray-900 font-sans overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-[75vh] w-full">
        <img
          src={umajero}
          alt="Umajero"
          className="absolute inset-0 w-full h-full object-cover object-center m-0 p-0"
        />
        <div className="absolute inset-0 bg-black/40 flex justify-center items-center z-10">
          <h1 className="text-white text-5xl font-bold">Umajero</h1>
        </div>
        {/* Gradient bottom */}
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-b from-transparent to-[#fcfcf6] z-20" />
      </section>

      {/* HIGHLIGHT */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold leading-relaxed">
          Bagian Highlight Atau Ringkasan Dari Bagian Paling Penting Atau Menarik Dari Suatu Hal Yang Ada Di Desa Umajero Seperti Fun Fact Ataupun Kedudukan Ataupun Sejarah Desa Umajero
        </h2>
        <div className="mt-6">
          <div className="w-full h-64 bg-gray-300 rounded-xl flex items-center justify-center text-gray-600 text-sm italic">
            *Gambar utama belum tersedia*
          </div>
          <p className="text-xs text-center italic mt-2 text-gray-500">
            *Kutipan adalah pengulangan satu ekspresi sebagai bagian dari yang lain, terutama ketika ekspresi yang dikutip itu terkenal...*
          </p>
        </div>
      </section>

      {/* DESKRIPSI 2 KOLOM */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4 py-10">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold">Sub Judul 1</h3>
          <h4 className="text-md font-semibold mt-2">Sub Judul 2</h4>
          <p className="text-sm text-gray-700 mt-2">
            Jelaskan keunikan atau nilai-nilai khas dari Desa Umajero. Misalnya, peran pentingnya dalam sejarah Tamblingan atau budaya spiritualnya.
          </p>
          <h4 className="text-md font-semibold mt-6">Sub Judul 2</h4>
          <p className="text-sm text-gray-700 mt-2">
            Uraikan kebiasaan adat atau tradisi penting yang dijaga hingga kini, serta pengaruhnya terhadap hubungan dengan alam.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-gray-300 flex items-center justify-center rounded-full text-xl font-bold">
              LOGO
            </div>
          </div>
          <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-600">
            *Peta belum tersedia*
          </div>
          <p className="text-xs text-center text-gray-500">Keterangan mengenai peta</p>
        </div>
      </section>

      {/* DATA DESA */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-4">
        <div className="h-64 bg-gray-200 rounded-xl shadow flex items-center justify-center text-sm text-gray-600">
          *Gambar tambahan belum tersedia*
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <h4 className="text-lg font-semibold mb-4">Data Desa</h4>
          <ul className="text-sm text-gray-800 space-y-1">
            <li>Jumlah Penduduk: XXXXX</li>
            <li>Jumlah KK: XXXX</li>
            <li>Luas Wilayah: XXXX m²</li>
            <li>Mayoritas Pekerjaan: ABCD</li>
            <li>Jumlah Penduduk: XXXX</li>
            <li>Jumlah KK: XXXX</li>
            <li>DLL: XXX</li>
          </ul>
        </div>
      </section>

      {/* GALERI */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          Galeri Foto/Video <span className="text-sm text-gray-500">*ntar liat duls*</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-32 bg-gray-200 rounded-lg shadow-sm flex items-center justify-center text-xs text-gray-500 italic"
            >
              Belum ada foto {i + 1}
            </div>
          ))}
        </div>
      </section>

      {/* TRANSISI HALUS */}
      <div className="w-full h-6 flex items-end">
        <div className="w-full border-t border-gray-300 shadow-md shadow-gray-200/40" />
      </div>

      {/* DISCOVER MORE */}
      <section className="bg-gray-100 py-12 px-4">
        <h3 className="text-2xl font-bold text-center mb-10">Discover More</h3>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {filteredDesa.map((desa, i) => (
            <div
              key={i}
              onClick={() => handleNavigate(desa.link)}
              className="relative w-48 h-32 sm:w-56 sm:h-36 md:w-64 md:h-40 lg:w-72 lg:h-44 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-[1.03]"
            >
              <img
                src={desa.image}
                alt={desa.name}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-xl sm:text-2xl font-semibold tracking-wide drop-shadow-md">
                  {desa.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-500 mt-12">
          Developed by <strong>KKN MEKAR BANJAR UGM 2025</strong>
        </p>
      </section>
    </div>
  );
}
