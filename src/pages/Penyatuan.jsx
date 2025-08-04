import React, { useEffect } from "react";
import { FaClock } from "react-icons/fa";
import wilayahImg from "../assets/danau.png"; // ganti sesuai gambar peta atau danau jika ada
import Navbar from "../components/Navbar";
import Discover from "../components/DiscoverSocial";
import Footer from "../components/Footer";

export default function Penyatuan() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative bg-white text-black min-h-screen">
      <Navbar />
      <div className="pt-28">
        {/* Header Section */}
        <div className="w-full px-4 md:px-20 py-10 bg-gradient-to-r from-[#3d4c2a] via-[#4d5d2f] to-[#5f6f35] text-white">
          <div className="max-w-5xl mx-auto space-y-3">
            <p className="text-sm text-white/80">
              <span className="underline">Topics</span> / Sosial
            </p>
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              Simbol Penyatuan Catur Desa
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


        {/* Konten Artikel */}
        <div className="max-w-3xl mx-auto mt-12 px-4 md:px-0 text-sm md:text-base leading-relaxed text-justify space-y-6">
          
          <h2 className="text-xl md:text-2xl font-bold">Logo Catur Desa</h2>
          <p >
            Masyarakat Adat Dalem Tamblingan tinggal tersebar di Catur Desa, yaitu Gobleg, Munduk, Gesing, dan Umejero. Sebagai upaya untuk mempersatukan ideologi masyarakat, pada Desember 2017 dicetuskan sebuah logo sebagai simbol identitas masyarakat Adat Dalem Tamblingan. Logo Adat Dalem Tamblingan di Catur Desa tersebut diprakarsai oleh Jro Mangku Made Adhi, salah seorang keturunan Belog Bengkung di Umejero. Pada tanggal 21 Januari 2018, logo Adat Dalem Tamblingan di Catur Desa diresmikan oleh Dane Pengerajeg Dalem Tamblingan di Wantilan Desa Gobleg.
          </p>
          
          <h2 className="text-xl md:text-2xl font-bold">Makna dan Filosofi Logo</h2>
          <p >
            Logo berwarna hitam dengan dasar putih, sebagai simbol dari Bhatara Wisnu dan Bhatara Siwa. Makna dari bagian-bagian yang tertuang dalam logo adalah:
            <ol className="mx-10 list-disc space-y-2">
            <li>
                <span className="font-normal">
                <b>Tapak dara:</b> merupakan simbol Tuhan dan pemusatan pikiran
                </span>
            </li>
            <li>
                <span className="font-normal">
                <b>Meru tumpang solas:</b> simbol pusat Dalem Tamblingan
                </span>
            </li>
            <li>
                <span className="font-normal">
                <b>Bentuk segi empat:</b> simbol bumi atau air (Wisnu), di mana angka 'empat' adalah simbol bumi
                </span>
            </li>
            <li>
                <span className="font-normal">
                <b>Cakra:</b> simbol Wisnu
                </span>
            </li>
            <li>
                <span className="font-normal">
                <b>Dasar warna putih:</b> simbol Bhatara Siwa
                </span>
            </li>
            </ol>
          </p>
        </div>
      </div>

      <div className="h-20" />
      <Discover/>
      <Footer/>
    </div>
  );
}
