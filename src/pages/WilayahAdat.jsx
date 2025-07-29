import React, { useEffect } from "react";
import { FaClock } from "react-icons/fa";
import wilayahImg from "../assets/danau.png"; // ganti sesuai gambar peta atau danau jika ada
import Navbar from "../components/Navbar";

export default function WilayahAdat() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative bg-white text-black min-h-screen">
      <Navbar />
      <div className="pt-28">
        {/* Header Section */}
        <div className="w-full px-4 md:px-20 py-10 bg-gradient-to-r from-[#625b39] via-[#988c44] to-[#d1bb48] text-white">
          <div className="max-w-5xl mx-auto space-y-3">
            <p className="text-sm text-white/80">
              <span className="underline">Topics</span> / Lingkungan
            </p>
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              Wilayah Adat Dalem Tamblingan Saat Ini
            </h1>
            <div className="text-sm text-white/90 flex flex-wrap items-center gap-4 mt-2">
              <span>By KKN Mekar Banjar</span>
            </div>
            <div className="text-sm text-white/90 flex flex-wrap items-center gap-4 mt-2">
              <span className="flex items-center gap-1">
                <FaClock className="text-xs" />
                10 min read
              </span>
              <span>Updated 09:45 AM WITA, Sat July 26, 2025</span>
            </div>
          </div>
        </div>

        {/* Gambar dan Kutipan */}
        <div className="max-w-2xl mx-auto mt-6 px-4 md:px-0">
          <div className="relative rounded-lg shadow-lg overflow-hidden">
            <img src={wilayahImg} alt="Wilayah Adat Tamblingan" className="w-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="max-w-3xl mx-auto mt-6 px-4 md:px-0">
            <blockquote className="border-l-4 border-[#4d472a] pl-4 italic font-semibold text-sm md:text-xl text-black/80">
              “Wilayah bukan sekadar batas, tetapi ruang hidup, sakralitas, dan tanggung jawab bersama.”
            </blockquote>
          </div>
        </div>

        {/* Konten Artikel */}
        <div className="max-w-3xl mx-auto mt-12 px-4 md:px-0 text-sm md:text-base leading-relaxed text-justify space-y-6">
          <h2 className="text-xl md:text-2xl font-bold">Sejarah Penetapan Batas Wilayah Tamblingan Kuna</h2>
          <p className="indent-8">
            Setelah meninggalkan Alas Mertajati, Ida Dalem Tamblingan menetapkan batas wilayah Tamblingan (kuna), berlokasi di wilayah yang termasuk Nyatur Desa. Berdasarkan babad Kandan Sang Hyang Mertajati disebutkan bahwa batas selatan wewidangan (wilayah) Adat Dalem Tamblingan tidak hanya sebatas Danau Tamblingan, namun sampai sekitar Danau Buyan II, naik ke puncak Gunung Raung, di sana ada Pura Bukit dengan pelinggih Padma Anglayang. Bagian barat wewidangan sampai daerah Batu Macepak di Desa Umejero.
          </p>

          <h2 className="text-xl md:text-2xl font-bold">Penegasan Wilayah dalam Prasasti Gobleg (Suradhipa)</h2>
          <p className="indent-8">
            Batas wilayah Adat Dalem Tamblingan juga sudah tercantum dalam Prasasti Gobleg, Pura Batur B atau sering juga disebut Prasasti Suradhipa berangka tahun 1041 Saka (1119 Masehi), yaitu:
          </p>
          <blockquote className="border-l-4 border-[#4d472a] pl-4 italic">
            "Batasnya yang sebelah timur adalah Pardahanan, batasnya sebelah utara adalah Pasrahan Asba ring Ratanya, terus naik meninggi dan terus turun sampai di Tanjung, terus Ulun-her, lalu Sri Gampuhan, terus sampai di Bunut-matungked, di Kaliaga terus berbataskan Jurang Selat, di Kedu sampai batas sungai yang di Kunyit, di Hujung-mata, yang berbataskan Baledan-raja. Lalu sampai ke Hara Sungsang di Panyawangan, sampai di Banyu Sungkur, di Tengah-mel terus sampai di Batu Macepak."
          </blockquote>

          <h2 className="text-xl md:text-2xl font-bold">Pemetaan Spasial Wilayah Adat (2019)</h2>
          <p className="indent-8">
            Kemudian, berdasarkan pemetaan spasial wilayah Adat Dalem Tamblingan di Catur Desa secara partisipatif yang dilakukan pada bulan Oktober 2019, batasnya adalah sebagai berikut:
          </p>
          <p className="indent-8">
            "Batas wilayah Adat Dalem Tamblingan di Catur Desa dimulai dari Candi Bentar Gobleg - Wanagiri, kemudian ke arah timur laut mengikuti alur tebing sampai bertemu pohon seming besar, lalu menyeberangi Danau Buyan ke arah tenggara sampai di pinggir danau di utara Pura Guna Anyar. Selanjutnya masih ke arah tenggara menaiki bukit dan dilanjutkan ke arah barat daya hingga dekat lokasi SUTET, lalu ke arah selatan menyusuri hutan hingga bertemu pangkung (sungai musiman). Lalu ke arah barat menyusuri hutan sampai bertemu Hutan Sampian Lalang Buyan dan ke arah selatan melewati Sungai Penguskusan sampai di tepi Pulan Kuali. Kemudian mengelilingi sisi timur tepi Pulan Kuali dan ke arah selatan sampai di lereng Hutan Naga Loka. Lanjut mengelilingi sisi timur lereng Hutan Naga Loka, masih ke arah selatan mengikuti lereng Hutan Naga Loka dan Hutan Bukit Pucuk sampai di Hutan Gesing, bertemu pal batas Kabupaten Buleleng dengan Kabupaten Tabanan.
          </p>
          <p className="indent-8">
            Kemudian ke arah tenggara melewati semak belukar sampai bertemu jalan setapak, lalu ke arah selatan mengikuti pangkung hingga titik di antara Gunung Sanghyang dan Gunung Batukaru (TK 33). Lalu ke arah barat dan ke arah barat daya melewati punggung bukit sampai areal hutan jati yang merupakan batas barat daya Alas Mertajati, dan ke arah barat laut masih mengikuti punggung bukit sampai titik di dekat pal batas Desa Gesing - Desa Umejero - Desa Pujungan.
          </p>
          <p className="indent-8">
            Dari pal batas desa, batas ke arah barat mengikuti pangkung sampai bertemu Pangkung Tiase, lanjut ke arah barat mengikuti pohon temen sebagai batas kebun (pangkung) melewati PABU 37 sampai bertemu jalan setapak di dekat pal batas Kabupaten Buleleng - Kabupaten Tabanan di Jalan Desa Banjar Cemara. Kemudian ke arah barat laut mengikuti jalan setapak (pohon temen sebagai batas kebun) melewati PBU 36 sampai bertemu Jurang Yeh Dati. Selanjutnya mengikuti Jurang Yeh Dati sampai Pangkung Kendengan."
          </p>
         

          <h2 className="text-xl md:text-2xl font-bold">Cakupan Luas dan Fungsi Wilayah</h2>
          <p className="indent-8">
            Luas wilayah Adat Dalem Tamblingan di Catur Desa secara keseluruhan adalah 6.991 hektar yang terdiri dari:
          </p>
          <ul className="space-y-2 text-justify">
            <li className="flex items-start">
              <span className="w-4 flex-shrink-0 mt-1">•</span>
              <p className="ml-2">Areal sawah, perkebunan, dan permukiman desa: 5.693 hektar</p>
            </li>
            <li className="flex items-start">
              <span className="w-4 flex-shrink-0 mt-1">•</span>
              <p className="ml-2">Areal hutan Alas Mertajati: 1.298 hektar</p>
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold">Keberadaan Lahan Enclave di Kawasan Adat</h2>
          <p className="indent-8">
            Saat ini di dalam kawasan Alas Mertajati terdapat lahan pribadi, tanah kebun enclave ber-Sertifikat Hak Milik (SHM) seluas 14,97 hektar (namun berdasarkan <a href="https://ksda-bali.go.id" target="_blank" rel="noopener noreferrer" className="text-blue-600 italic underline hover:text-blue-800">ksda-bali.go.id</a> luas lahan enclave tersebut adalah 8 hektar). Ada banyak versi terkait keberadaan lahan tersebut, namun tidak ada satu pun yang akurat walaupun sudah dirunut secara logis.
          </p>
        </div>
      </div>

      <div className="h-20" />
    </div>
  );
}
