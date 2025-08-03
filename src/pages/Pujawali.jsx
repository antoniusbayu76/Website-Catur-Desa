import React, { useEffect } from "react";
import { FaClock } from "react-icons/fa";
import Navbar from "../components/Navbar";
import purnama1 from "../assets/purnamah.jpg";



export default function PujawaliPurnamaMunduk() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative bg-white text-black min-h-screen">
      <Navbar />

      <div className="pt-28">
        {/* HEADER */}
        <div className="w-full px-4 md:px-20 py-10 bg-gradient-to-r from-[#44342F] to-[#AA5C46] text-white">
          <div className="max-w-5xl mx-auto space-y-3">
            <p className="text-sm font-bold italic text-white/85">
              <span className="underline">MUNDUK</span> 
            </p>
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              Menyusuri Jejak Pujawali Purnama di Munduk antara Sakralitas dan Kebersamaan
            </h1>
            <div className="text-sm text-white/90 flex flex-wrap items-center gap-4 mt-2">
              <span>By Tim KKN Mekar Banjar UGM</span>
            </div>
            <div className="text-sm text-white/90 flex items-center gap-4 mt-2">
              <span className="flex items-center gap-1">
                <FaClock className="text-xs" /> 5 min read
              </span>
              <span>Updated Juli 2025</span>
            </div>
          </div>
        </div>

        {/* FEATURED IMAGE */}
        <div className="max-w-2xl mx-auto mt-6 px-4 md:px-0">
          <div className="relative rounded-lg shadow-lg overflow-hidden">
            <img src={purnama1} alt="Pujawali Purnama" className="w-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-3xl mx-auto mt-10 px-4 md:px-0 space-y-6 text-justify text-sm md:text-base leading-relaxed">
          <p className="text-sm italic text-gray-600">Buleleng, 10 Juli 2025</p>

          {/* PARAGRAPH 1 */}
          <p className="indent-8">
            Purnama selalu menjadi penanda sakral dalam kosmologi Bali. Di Desa Munduk, Buleleng, perayaan Pujawali Purnama menjadi momentum kolektif yang merayakan keharmonisan antara manusia, alam, dan yang ilahi. Pada tanggal 10 Juli 2025, dua pura utama di kawasan ini, Pura Puseh dan Pura Pande, menjadi pusat peribadatan dalam suasana yang syahdu dan penuh taksu.
          </p>

          <p className="indent-8">
            Meskipun kedua pura turut melaksanakan upacara, aktivitas umat lebih terpusat di Pura Puseh, yang secara fungsional memang menjadi ruang publik spiritual utama bagi krama adat. Adapun Pura Pande, dengan karakteristiknya yang lebih tertutup dan familial, hanya diakses oleh kelompok masyarakat tertentu yang memiliki hubungan genealogi maupun spiritual dengan tradisi pande (pandai besi). Meskipun tidak ada pertunjukan tari sebagaimana lazimnya dalam piodalan berskala besar, suasana tetap penuh khidmat berkat iringan tabuh gamelan yang menyambut setiap prosesi dengan nuansa magis.
          </p>

          {/* PARAGRAPH 2 */}
          <p className="indent-8">
            Rangkaian upacara dimulai dengan prosesi ngaturan banten, persembahan simbolik yang dirangkai dengan tata estetika dan nilai filosofis yang tinggi. Banten-banten tersebut dipersembahkan di pelataran suci sebagai media komunikasi dengan manifestasi ketuhanan yang akan “mendak”, turun menyatu dalam dimensi ritus. Para pemangku adat dari berbagai banjar berkumpul, memimpin ritual dan doa-doa yang terstruktur dalam palet bahasa sanskrita dan bali alus. Identitas dan otoritas religius mereka terlihat dari pakaian adat yang dikenakan serta sarana ritual yang dibawa.
          </p>

          <p className="indent-8">
            Keterlibatan generasi muda dalam upacara ini tak sekadar pelengkap simbolik. Para truna-truni turut mengatur banten, menancapkan umbul-umbul di halaman pura, serta memastikan jalannya upacara berlangsung secara tertib. Partisipasi ini menunjukkan kesinambungan nilai dan regenerasi spiritual yang tetap terpelihara dalam masyarakat Tamblingan. Mereka tidak hanya belajar tentang struktur ritual, tetapi juga menyerap nilai disiplin, penghormatan, dan rasa tanggung jawab komunal.
          </p>

          {/* PARAGRAPH 3 */}
          <p className="indent-8">
            Prosesi puncak ditandai dengan persembahyangan massal yang berlangsung secara bergantian. Dipimpin oleh Jro Mangku, umat bergiliran masuk ke dalam area utama pura untuk melakukan puja dengan khidmat. Tak ada hiruk-pikuk, hanya deru gamelan yang menyatu dengan aroma dupa, membawa batin umat mendekat pada yang niskala.
          </p>

          {/* PARAGRAPH 4 */}
          <p className="indent-8">
            Pujawali Purnama bukan sekadar ritus rutin, melainkan ekspresi kolektif yang mempertegas identitas spiritual dan sosial masyarakat adat Munduk. Dalam konteks kekinian yang makin cepat berubah, keberadaan upacara seperti ini menjadi penanda kuat bahwa tradisi bukanlah beban masa lalu, melainkan sumber makna yang terus tumbuh bersama umatnya.
          </p>
        </div>
      </div>

      <div className="h-24" />
    </div>
  );
}
