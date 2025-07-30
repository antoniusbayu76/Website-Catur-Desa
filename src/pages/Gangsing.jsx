import React, { useEffect } from "react";
import { FaClock } from "react-icons/fa";
import headerImg from "../assets/gangsing.png";
import Navbar from "../components/Navbar";
import DiscoverCulture from "../components/DiscoverCulture";
import Footer from "../components/Footer";

export default function Gangsing() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative bg-white text-black min-h-screen">
      <Navbar />
      <div className="pt-28 pb-15">
        {/* Header */}
        <div className="w-full px-4 md:px-20 py-10 bg-gradient-to-r from-[#44342F] to-[#AA5C46] text-white">
          <div className="max-w-5xl mx-auto space-y-3">
            <p className="text-sm text-white/80">
              <span className="underline">Topics</span> / Kebudayaan
            </p>
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              Permainan Gangsing sebagai Warisan Budaya Catur Desa
            </h1>
            <div className="text-sm text-white/90 flex flex-wrap items-center gap-4 mt-2">
              <span>By Maesya Geyra Efrinada - KKN PPM UGM Mekar Banjar 2025</span>
            </div>
            <div className="text-sm text-white/90 flex flex-wrap items-center gap-4 mt-2">
              <span className="flex items-center gap-1">
                <FaClock className="text-xs" />
                10 min read
              </span>
              <span>Updated 21:00 WITA, Wed July 30, 2025</span>
            </div>
          </div>
        </div>

        {/* Image & Quote */}
        <div className="max-w-2xl mx-auto mt-6 px-4 md:px-0">
          <div className="relative rounded-lg shadow-lg overflow-hidden">
            <img src={headerImg} alt="Alas Mertajati" className="w-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <blockquote className="border-l-4 border-[#4d472a] pl-4 italic font-semibold text-sm md:text-xl text-black/80 mt-6">
            "harusnya ada quotes gak sih? apa gak harus?"
          </blockquote>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto mt-12 px-4 md:px-0 text-sm md:text-base leading-relaxed text-justify space-y-6">
          <p className="indent-8">
            Permainan gangsing merupakan salah satu warisan budaya yang mengakar kuat dalam kehidupan masyarakat Catur Desa atau Adat Dalem Tamblingan, yang meliputi Desa Munduk, Gesing, Gobleg, dan Umajero. Berbeda dengan pertunjukan, permainan ini mengandung unsur kompetisi yang mengandalkan keterampilan, kekuatan, dan keseimbangan ketika gangsing berputar pada porosnya. Permainan gangsing dimainkan secara serius sebagai bentuk pertandingan tradisional yang sarat makna kebersamaan dan identitas budaya lokal. 
          </p>

          <p className="indent-8">
            Meskipun permainan gangsing telah dikenal dan diwariskan secara turun-temurun sejak dahulu, hingga kini belum diketahui secara pasti kapan permainan ini pertama kali dimainkan. Menurut Putu Ardana, secara geografis, permainan gangsing berasal dari para petani kopi di lereng barat daya Gunung Batukaru. Mereka memainkan gangsing di tanah lapang sebagai pengisi waktu senggang setelah masa panen kopi yang berlangsung sekitar Mei hingga Agustus.
          </p>

          <p className="indent-8">
            Permainan gangsing di Catur Desa berkembang cukup dinamis, terutama dari segi ukuran, bentuk, dan teknologi pembuatan. Pada tahun 1950-an, bentuk gangsing menyerupai jambu biji dengan diameter sekitar 12–20 cm. Memasuki tahun 1970-an, yang dikenal sebagai era gangsing bebas, ukuran gangsing berkembang sangat besar hingga mencapai diameter 40 cm. Mulai pertengahan tahun 1990-an, masyarakat Catur Desa mulai melakukan standarisasi terhadap ukuran gangsing dengan diameter 21 cm. Selain itu, seiring waktu, bentuk gangsing juga semakin pipih. 

          </p>

          <p className="indent-8">
            Teknologi pembuatan gangsing juga unik. Bahan yang digunakan umumnya adalah batang kayu keras dan berserat halus, seperti kayu jeruk, sawo, limau, kelengkeng, dan kemuning. Pemilihan jenis kayu ini sangat penting karena berpengaruh pada daya tahan dan putaran gangsing saat dimainkan. 
          </p>

          <p className="indent-8">
            Dalam permainan gangsing, aturan main tetap dijaga dengan baik meskipun mengalami beberapa penyesuaian seiring waktu. Dahulu, gangsing diolesi minyak atau yang disebut <i>lengisan</i> agar dapat berputar lebih lama. Namun, sejak akhir tahun 1990-an, penggunaan minyak tersebut dilarang karena dianggap mengganggu kenyamanan penonton saat pertandingan berlangsung.
          </p>

          <p className="indent-8">
            Permainan ini biasanya dimainkan oleh laki-laki dari berbagai kelompok usia, yang tergabung dalam satu tim yang dikenal sebagai <i>seke</i>. Setiap seke umumnya beranggotakan sekitar 10 orang dan membawa sekitar 25 gangsing. Proses regenerasi pemain berlangsung secara alami, karena tim sering terdiri atas ayah dan anak, sehingga tradisi ini dapat terus dilanjutkan dan diwariskan lintas generasi.
          </p>

          <p className="indent-8">
            Pelestarian permainan ini menghadapi beberapa tantangan. Salah satunya adalah munculnya pemain yang memodifikasi gangsing dengan menambah beban agar tidak sesuai aturan. Selain itu, jumlah pengrajin pembuat gangsing juga sedikit. Meskipun demikian, masyarakat Catur Desa tetap konsisten menjaga permainan ini sebagai bagian dari identitas budaya lokal yang terus hidup dan berkembang hingga kini.
          </p>
        </div>
      </div>
      <DiscoverCulture />
      <Footer />
    </div>
  );
}
