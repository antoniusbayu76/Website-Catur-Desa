import React, { useEffect } from "react";
import { FaClock } from "react-icons/fa";
import wilayahImg from "../assets/danau.png"; // ganti sesuai gambar peta atau danau jika ada
import Navbar from "../components/Navbar";
import Discover from "../components/DiscoverEnvi";
import Footer from "../components/Footer";

export default function Mertajati() {
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
              Alas Mertajati
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
              “......”
            </blockquote>
          </div>
        </div>

        {/* Konten Artikel */}
        <div className="max-w-3xl mx-auto mt-12 px-4 md:px-0 text-sm md:text-base leading-relaxed text-justify space-y-6">
          <h2 className="text-xl md:text-2xl font-bold">Letak dan Topografi</h2>
          <p className="indent-8">
            Alas Mertajati merupakan kawasan hutan yang membentang dari utara ke selatan di bagian timur wilayah Adat Dalem Tamblingan. Kawasan Alas Mertajati berada pada ketinggian 1200–1400 meter dari permukaan laut dan mempunyai topografi yang bervariasi mulai dari datar (khususnya di sekitar Danau Tamblingan), agak curam, hingga sangat curam.
          </p>

          <h2 className="text-xl md:text-2xl font-bold">Luas dan Komponen Kawasan</h2>
          <p className="indent-8">
            Berdasar hasil pemetaan partisipatif, Alas Mertajati mempunyai luas 1.298 hektar, dan di dalamnya terdapat Danau Tamblingan seluas sekitar 160 hektar. Terdapat juga lahan enclave di dalam kawasan hutan berupa lahan pribadi, yaitu tanah kebun ber-Sertifikat Hak Milik (SHM) dengan luas 14,97 hektar.

          </p>
    
          <h2 className="text-xl md:text-2xl font-bold">Inventarisasi Vegetasi (Oktober 2019)</h2>
          <p className="indent-8">
            Pada bulan Oktober 2019 telah dilakukan Inventarisasi Vegetasi Alas Mertajati dengan mengambil titik sampel pengamatan di 14 petak ukur. Berdasar hasil pengamatan pada 14 Petak Ukur (PU), dengan menggunakan penamaan lokal di dalam kawasan Alas Mertajati, terdapat:

          </p>
          <ol className="mx-10 list-disc">
            <li>
                <span className="font-normal">91 jenis pohon</span>
            </li>
            <li>
                <span className="font-normal">57 jenis vegetasi bawah</span>
            </li>
            </ol>
          <p className="indent-8">
            Keragaman terendah ada pada PU 11 dengan 8 jenis vegetasi dan PU 14 dengan 10 jenis vegetasi. Rendahnya keanekaragaman hayati pada PU 14 disebabkan karena PU tersebut berada pada areal hutan bekas rehabilitasi dengan tanaman pokok rasamala (<i>Altingia excelsa</i>).
          </p>
          <p className="indent-8">
           Namun jenis-jenis pohon lokal seperti kalijee, kejuang, lentoro, pelindo, dan gintungan telah tumbuh secara alami mulai tingkat semai, pancang, hingga tiang. Hal ini menandai bahwa pada wilayah tersebut telah terjadi peningkatan keragaman.

          </p>
         
          <h2 className="text-xl md:text-2xl font-bold">Pembagian Zona Sosial Masyarakat</h2>
          <p className="indent-8">
            Secara sosial, masyarakat Adat Dalem Tamblingan membagi kawasan Alas Mertajati ke dalam empat zona. Pembagian zona tersebut menggunakan beberapa pertimbangan, yaitu:
          </p>
          <ol className="mx-10 list-disc">
            <li>
                <span className="font-normal">Lokasi perburuan</span>
            </li>
            <li>
                <span className="font-normal">Dominasi jenis</span>
            </li>
            <li>
                <span className="font-normal">Jarak dengan Danau Tamblingan dan Danau Buyan</span>
            </li>
            </ol>

            <p className="mx-10 mt-2">
            Setiap zona diidentifikasi melalui 3 - 4 petak ukur untuk melihat nilai:
            </p>

            <ol className="mx-10 list-disc mt-1">
            <li>
                <span className="font-normal">Kerapatan relatif</span>
            </li>
            <li>
                <span className="font-normal">Frekuensi relatif</span>
            </li>
            <li>
                <span className="font-normal">Dominansi relatif</span>
            </li>
            </ol>

          <p className="indent-8">
            Dengan menjumlahkan ketiga parameter tersebut, dapat diketahui indeks nilai penting dari masing-masing jenis vegetasi yang dapat memberikan gambaran tentang peranan jenis vegetasi bersangkutan di dalam komunitasnya atau pada lokasi tertentu.
          </p>

          <h2 className="text-xl md:text-2xl font-bold">Faktor yang Mempengaruhi Keberhasilan Vegetasi</h2>
          <p className="indent-8">
            Keberhasilan setiap jenis vegetasi untuk mengokupasi suatu area dipengaruhi oleh kemampuan vegetasi tersebut beradaptasi secara optimal terhadap seluruh faktor yang saling berinteraksi, meliputi:
          </p>
          <ol className="mx-10 list-disc mt-1">
            <li>
                <span className="font-normal"><b>Faktor lingkungan fisik</b>: temperatur, cahaya, struktur tanah, kelembaban</span>
            </li>
            <li>
                <span className="font-normal"><b>Faktor biotik</b>: interaksi antar jenis, kompetisi, parasitisme</span>
            </li>
            <li>
                <span className="font-normal"><b>Faktor kimia</b>: ketersediaan air, oksigen, pH, nutrisi tanah</span>
            </li>
            </ol>
          
          
        </div>
      </div>

      <div className="h-20" />
      <Discover/>
      <Footer/>
    </div>
  );
}
