import React, { useEffect } from "react";
import { FaClock } from "react-icons/fa";
import Navbar from "../components/Navbar";
import bgImage from "../assets/PosyanduMunduk.jpg";
import pos1 from "../assets/pos01.jpg";
import pos2 from "../assets/pos02.jpg";
import pos3 from "../assets/pos03.jpg";
import pos4 from "../assets/pos04.jpg";


export default function PosyanduLansiaMunduk() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative bg-white text-black min-h-screen">
      <Navbar />

      {/* HEADER */}
      <div className="pt-28">
        <div className="w-full px-4 md:px-20 py-10 bg-gradient-to-r from-[#44342F] to-[#AA5C46] text-white">
          <div className="max-w-5xl mx-auto space-y-3">
            <p className="text-sm font-bold italic text-white/85">
              <span className="underline">MUNDUK</span> 
            </p>
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              Posyandu Lansia Desa Munduk: Komitmen Pelayanan Kesehatan Berkelanjutan bagi Masyarakat Lanjut Usia
            </h1>
            <div className="text-sm text-white/90 flex flex-wrap items-center gap-4 mt-2">
              <span>By Tim KKN Mekar Banjar UGM</span>
            </div>
            <div className="text-sm text-white/90 flex items-center gap-4 mt-2">
              <span className="flex items-center gap-1">
                <FaClock className="text-xs" /> 6 min read
              </span>
              <span>Updated Juli 2025</span>
            </div>
          </div>
        </div>

        {/* AWAL IMAGE */}
        <div className="max-w-2xl mx-auto mt-6 px-4 md:px-0">
          <div className="relative rounded-lg shadow-lg overflow-hidden">
            <img src={pos1} alt="Posyandu1" className="w-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-3xl mx-auto mt-10 px-4 md:px-0 space-y-6 text-justify text-sm md:text-base leading-relaxed">
          <p className="text-sm italic text-gray-600">Banjar, 2 Juli 2025</p>

          {/* PARAGRAPH 1 */}
          <p className="indent-8">
            Dalam rangka meningkatkan kualitas kesehatan dan kesejahteraan kelompok lanjut usia, Puskesmas Banjar II secara konsisten melaksanakan kegiatan Posyandu Lansia yang rutin digelar setiap tanggal 2 setiap bulannya. Kegiatan ini menjadi bagian dari program pelayanan kesehatan masyarakat yang mengutamakan prinsip promotif dan preventif, khususnya bagi kalangan usia lanjut yang rentan terhadap berbagai penyakit degeneratif. Posyandu Lansia Desa Munduk rutin dilaksanakan di Gedung Arena Serba Guna Desa Munduk mulai pukul 09.00 hingga 12.00 WITA.
          </p>

          {/* IMAGE_PLACEHOLDER_1 */}
          <div className="max-w-2xl mx-auto mt-6 px-4 md:px-0">
          <div className="relative rounded-lg shadow-lg overflow-hidden">
            <img src={pos2} alt="Possyandu2" className="w-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

          {/* PARAGRAPH 2 */}
          <p className="indent-8">
            Setiap pelaksanaan Posyandu Lansia selalu disambut dengan antusias oleh warga lanjut usia. Mereka datang untuk memeriksakan kondisi kesehatannya secara rutin dengan pelayanan yang meliputi pemeriksaan tekanan darah, gula darah, kadar asam urat, kolesterol, kesehatan gigi dan mulut, serta konsultasi atas keluhan kesehatan lainnya. Pemeriksaan dilakukan secara menyeluruh oleh tim medis dari Puskesmas Banjar II yang terdiri dari dokter, perawat, dan tenaga farmasi. Setelah pemeriksaan dilakukan, para lansia juga mendapatkan obat-obatan yang dibutuhkan secara gratis berdasarkan hasil evaluasi medis. Hal ini sangat membantu para lansia dalam mengelola kesehatannya secara teratur tanpa terbebani oleh biaya pemeriksaan atau pengobatan.
          </p>

          {/* IMAGE_PLACEHOLDER_2 */}
          <div className="max-w-2xl mx-auto mt-6 px-4 md:px-0">
          <div className="relative rounded-lg shadow-lg overflow-hidden">
            <img src={pos3} alt="Possyandu3" className="w-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

          {/* PARAGRAPH 3 */}
          <p className="indent-8">
            Selain pemeriksaan medis, kegiatan Posyandu Lansia juga memberikan edukasi dan penyuluhan seputar kesehatan lanjut usia. Petugas memberikan pemahaman tentang pentingnya menjaga pola makan sehat, melakukan aktivitas fisik ringan yang sesuai usia, menjaga kebersihan diri dan lingkungan, serta disiplin dalam mengonsumsi obat-obatan yang telah diberikan. Lansia diajak berdiskusi secara interaktif agar lebih memahami kondisi kesehatannya dan mampu menerapkan kebiasaan hidup sehat dalam kehidupan sehari-hari.
          </p>

          
          {/* PARAGRAPH 4 */}
          <p className="indent-8">
            Hasil dari pemeriksaan kesehatan gigi dan mulut yang telah dilakukan yaitu masih banyak lansia yang masih kurang perhatian akan kesehatan gigi dan mulutnya. Lansia di Desa Munduk cenderung hampir tidak pernah ke dokter gigi, melainkan memilih untuk datang ke tukang gigi. Banyak lansia yang giginya sudah tanggal dan sisa akar, namun memilih untuk tidak dirawat dikarenakan biaya yang tinggi. Hal tersebut perlu diperhatikan karena kesehatan gigi dan mulut akan berdampak pada kualitas hidup seseorang.
          </p>

          {/* IMAGE_PLACEHOLDER_3 */}
          <div className="max-w-2xl mx-auto mt-6 px-4 md:px-0">
          <div className="relative rounded-lg shadow-lg overflow-hidden">
            <img src={pos4} alt="Possyandu4" className="w-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

          {/* PARAGRAPH 5 */}
          <p className="indent-8">
            Lebih dari sekadar layanan medis, Posyandu Lansia di Desa Munduk juga menjadi wadah berkumpul, bersosialisasi, dan saling mendukung antar warga lansia. Mereka merasa lebih diperhatikan dan memiliki ruang untuk berbagi cerita serta pengalaman hidup. Hal ini turut mendukung peningkatan kesehatan mental dan emosional lansia yang juga menjadi bagian penting dari kesehatan secara menyeluruh.
          </p>

          <p className="indent-8">
            Puskesmas Banjar II terus mendorong keikutsertaan aktif seluruh lansia yang tinggal di Desa Munduk dan sekitarnya untuk mengikuti kegiatan ini secara rutin. Dukungan dari keluarga dan masyarakat sekitar sangat dibutuhkan agar para lansia tidak hanya sekadar bertahan hidup, tetapi juga bisa menjalani masa tua yang sehat, mandiri, dan bermartabat. Dengan terlaksananya Posyandu Lansia setiap bulan, diharapkan Desa Munduk dapat menjadi contoh desa tangguh dalam pelayanan kesehatan lansia serta mewujudkan lingkungan yang peduli terhadap kesejahteraan kelompok usia lanjut.
          </p>
        </div>
      </div>
      <div className="h-24" />
    </div>
  );
}
