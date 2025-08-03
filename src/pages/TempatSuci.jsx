import React, { useEffect } from "react";
import { FaClock } from "react-icons/fa";
import wilayahImg from "../assets/danau.png"; // ganti sesuai gambar peta atau danau jika ada
import Navbar from "../components/Navbar";
import Discover from "../components/DiscoverEnvi";
import Footer from "../components/Footer";

export default function TempatSuci() {
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
              Tempat Suci Masyarakat Adat
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
          <h2 className="text-xl md:text-2xl font-bold">Sebaran Kawasan Tempat Suci Berdasarkan Pembagian Capah</h2>
          <p >
            Tempat suci Adat Dalem Tamblingan di Catur Desa tersebar dalam tiga kawasan utama:
          </p>
          <ol className="mx-10 list-disc">
            <li><span className="font-normal">Luhuring/Duwuring Capah (areal hulu, berada di dalam Alas Mertajati)</span></li>
            <li><span className="font-normal">Madyaning Capah (areal tengah, berada di kawasan perkebunan dan permukiman Catur Desa)</span></li>
            <li><span className="font-normal">Soring Capah (areal hilir, berada di luar desa)</span></li>
          </ol>
         

          <h2 className="text-xl md:text-2xl font-bold">I. Luhuring/Duwuring Capah</h2>
          <p >
            Terdiri dari 19 tempat suci, yang dibedakan ke dalam empat kategori: pelinggih, bebaturan, pengayatan, dan sanggaran.

          </p>
          <ol className="mx-5 list-decimal font-semibold">
            <li><span className="font-semibold">Pelinggih</span></li>
              <p className="font-normal">
              Bentuknya sudah permanen, dibuat dari kayu atau batu, dan telah diupacarai secara lengkap (memakuh, murip-murip, dan meLaspas).
              </p>
              <ol className="mx-10 list-disc space-y-2">
                <li>
                  <span className="font-normal">
                    Pura Bukit/Gunung Rawung – Arca leluhur dan bebaturan megalitik; pemujaan pada Ida Bhatara Langlang Buwana dan Ida Bhatara Gana
                  </span>
                </li>
                <li>
                  <span className="font-normal">
                    Pura Guna Anyar – Pemujaan pada Ida Bhatara Gunasari
                  </span>
                </li>
                <li>
                  <span className="font-normal">
                    Pura Tajun/Tajuh – Pemujaan pada Ida Bhatara Brahma Murti, Wisnu Murti, dan Guru Murti
                  </span>
                </li>
                <li>
                  <span className="font-normal">
                    Pura Ulun Danu/Belah Danu/Sanghyang Kangin – Pura Kamertaan; media megalitik untuk pemujaan Ida Bhatara Merta Jaya
                  </span>
                </li>
                <li>
                  <span className="font-normal">
                    Pura Dalem Tamblingan – Memiliki tinggalan arkeologi lingga yoni; pemujaan pada Ida Bhatara Dewa Bahem dan Siwa Murti
                  </span>
                </li>
                <li>
                  <span className="font-normal">
                    Pura Endek/Kentel Gumi – Lokasi penemuan prasasti Gobleg; pemujaan pada Ida Bhatara Murti Jaya
                  </span>
                </li>
                <li>
                  <span className="font-normal">
                    Pura Gubug/Pemaheman – Pusat persembahyangan saat Pangeresik; pemujaan pada Ida Bhatara Suryajaya
                  </span>
                </li>
                <li>
                  <span className="font-normal">
                    Pura Sanghyang Kauh – Pura kamertaan terkait hasil bumi; pemujaan pada Ida Bhatara Manik Merta dan Galih Merta
                  </span>
                </li>
              </ol>
              
            <li><span className="font-semibold">Bebaturan</span></li>
              <p className="font-normal">
              Berupa batu, bukan pelinggih permanen, dan tidak diupacarai seperti pelinggih.
              </p>
              <ol className="mx-10 list-disc space-y-2">
                <li>
                  <span className="font-normal">
                    Pura Naga Loka – Tempat munculnya Ida Dalem Tamblingan dari danau
                  </span>
                </li>
                <li>
                  <span className="font-normal">
                    Pura Tirta Mangening – Tempat memohon dan mengambil batu suci
                  </span>
                </li>
                <li>
                  <span className="font-normal">
                    Pura Embang – Susunan batu pipih untuk pemujaan Ida Bhatara Pregawa
                  </span>
                </li>
                <li>
                  <span className="font-normal">
                    Pura Telaga Aya/Taman Bagendran – Pemujaan pada Ida Bhatara Ganamawa
                  </span>
                </li>
                <li>
                  <span className="font-normal">
                    Bebaturan Pengukiran – Terkait pemujaan para undagi
                  </span>
                </li>
                <li>
                  <span className="font-normal">
                    Bebaturan Penguskusan – Dua bebatuan untuk memuja kekuatan alam
                  </span>
                </li>
                <li>
                  <span className="font-normal">
                    Bebaturan Tukang Timbang – Dolmen megalitik untuk permohonan keselamatan dan kesuburan
                  </span>
                </li>
              </ol>

            <li><span className="font-semibold">Pengayatan</span></li>
            <p className="font-normal">
              Berupa bebaturan.
              </p>
            <ol className="mx-10 list-disc space-y-2">
              <li>
                <span className="font-normal">
                  Pura Duwur Sari – Berada di sekitar Pura Guna Anyar
                </span>
              </li>
              <li>
                <span className="font-normal">
                  Pura Batu Lepang – Berada di sekitar Pura Endek
                </span>
              </li>
            </ol>

            <li><span className="font-semibold">Sanggaran (Pecalang Agung)</span></li>
            <p className="font-normal">
              Tempat pemujaan pada Ida Bhatara Lawangan Agung:
              </p>
            <ol className="mx-10 list-disc space-y-2">
              <li>
                <span className="font-normal">Pekemitan Kangin</span>
              </li>
              <li>
                <span className="font-normal">Pekemitan Kauh</span>
              </li>
            </ol>

          </ol>
          <h2 className="text-xl md:text-2xl font-bold">II. Madyaning Capah</h2>
          <p >
            Terdiri dari 19 tempat suci yang tersebar di wilayah permukiman dan perkebunan Catur Desa. Terdiri dari tiga kategori: pelinggih (pura), bebaturan, dan pecalang.
          </p>
          <ol className="mx-5 list-decimal font-semibold">
            <li><span className="font-semibold">Pelinggih (Pura)</span></li>
              <ol className="mx-5 list-disc space-y-2">
                <li><span className="font-normal">Pura Batumadeg</span></li>
                <li><span className="font-normal">Pura Siwa Muka Bulakan</span></li>
                <li><span className="font-normal">Pura Siwa Muka Suwukan</span></li>
                <li><span className="font-normal">Pura Pemulungan Agung</span></li>
                <li><span className="font-normal">Pura Pemulungan Alit Kangin</span></li>
                <li><span className="font-normal">Pura Tanggunlangit</span></li>
                <li><span className="font-normal">Pura Batumancer</span></li>
                <li><span className="font-normal">Pura Batur</span></li>
                <li><span className="font-normal">Pura Blangbangan</span></li>
                <li><span className="font-normal">Pura Ularan</span></li>
                <li><span className="font-normal">Pura Pemulungan Alit Kauh</span></li>
                <li><span className="font-normal">Pura Taman</span></li>
                <li><span className="font-normal">Pura Sanda (Subak Basah)</span></li>
                <li><span className="font-normal">Pura Kopi (Subak Kering/Subak Abian Tegal)</span></li>
                <li><span className="font-normal">Pura Dalem Gobleg/Madura Sakti</span></li>
              </ol>

              
            <li><span className="font-semibold">Bebaturan</span></li>
              <ol className="mx-5 list-disc space-y-2">
                <li><span className="font-normal">Bebaturan Tukang Timbang Pemulungan Alit Kangin</span></li>
                <li><span className="font-normal">Bebaturan Tukang Timbang Pemulungan Alit Kauh</span></li>
              </ol>

            <li><span className="font-semibold">Pecalang</span></li>
            <p className="font-normal">
              Berfungsi sebagai penjaga keamanan wilayah pura.
              </p>
              <ol className="mx-10 list-disc space-y-2">
                <li>
                  <span className="font-normal">
                    Pecalang Agung Kalimoko (menjaga wilayah Pura Batu Madeg)
                  </span>
                </li>
                <li>
                  <span className="font-normal">
                    Pecalang Penyatur Pura Pemulungan Agung
                  </span>
                </li>
              </ol>
          </ol>

          <h2 className="text-xl md:text-2xl font-bold">III. Soring Capah</h2>
          <ol className="mx-5 list-decimal font-semibold">
            <li><span className="font-semibold">Pura Segara Labuhan Aji</span></li>
            <p className="font-normal">
            Terletak di Desa Temukus, Kecamatan Banjar. Berfungsi untuk melarung kekotoran dan menyucikan bumi pada petengin sasih Kapat. Pemujaan pada Ida Bhatara Pengulu. Selain krama Adat Dalem Tamblingan Catur Desa, terdapat 37 subak di Kecamatan Busungbiu, Banjar, dan Seririt yang menyungsung pura ini. Subak-subak ini mendapatkan air dari Alas Mertajati.

          </p>
              
          </ol>
          <h2 className="text-xl md:text-2xl font-bold">IV.  Empat Suci Tambahan di Luar Tiga Capah</h2>
          <p className="font-normal">
            Berikut adalah daftar tempat suci lainnya di wilayah Catur Desa:
          </p>
          <ol className="mx-5 list-decimal space-y-2">
            <li><span className="font-normal">Bencingah</span></li>
            <li><span className="font-normal">Pelinggih Ratu Nyoman</span></li>
            <li><span className="font-normal">Pura Subak Unusan</span></li>
            <li><span className="font-normal">Pura Subak Jembong</span></li>
            <li><span className="font-normal">Pelinggih Batu Kasur</span></li>
            <li><span className="font-normal">Pelinggih Tukad Mendaum</span></li>
            <li><span className="font-normal">Pelinggih Tukad Cangkup</span></li>
            <li><span className="font-normal">Pelinggih Yeh Mua</span></li>
            <li><span className="font-normal">Pura Pande</span></li>
            <li><span className="font-normal">Pura Subak Abian Desa Munduk</span></li>

            <li>
              <span className="font-normal">Pura Khayangan Tiga Desa Munduk:</span>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li><span className="font-normal">Pura Dalem Desa Munduk</span></li>
                <li><span className="font-normal">Pura Dalem Asah Munduk</span></li>
                <li><span className="font-normal">Pura Prajapati Desa Munduk</span></li>
                <li><span className="font-normal">Pura Puseh Desa Munduk</span></li>
              </ul>
            </li>

            <li>
              <span className="font-normal">Pura Khayangan Tiga Desa Gesing:</span>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li><span className="font-normal">Pura Dalem Desa Gesing</span></li>
                <li><span className="font-normal">Pura Prajapati Desa Gesing</span></li>
                <li><span className="font-normal">Pura Puseh Bale Agung Desa Gesing</span></li>
              </ul>
            </li>

            <li><span className="font-normal">Pura Perjuangan</span></li>
            <li><span className="font-normal">Catus Pata Desa Umejero</span></li>
            <li><span className="font-normal">Pura Ulun Suwi (Subak Basar Umejero)</span></li>
            <li><span className="font-normal">Pura Melanting</span></li>
            <li><span className="font-normal">Pura Suan Alit</span></li>
            <li><span className="font-normal">Pura Subak Linggasana</span></li>
            <li><span className="font-normal">Pura Gunung Kembar</span></li>
            <li><span className="font-normal">Pura Batu Mecongkak</span></li>
            <li><span className="font-normal">Pura Munduk Ngandang (Subak Kering Umejero)</span></li>

            <li>
              <span className="font-normal">Pura Khayangan Tiga Desa Umejero:</span>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li><span className="font-normal">Pura Dalem Desa Umejero</span></li>
                <li><span className="font-normal">Pura Prajapati Desa Umejero</span></li>
                <li><span className="font-normal">Pura Puseh Bale Agung Desa Umejero</span></li>
              </ul>
            </li>

            <li><span className="font-normal">Catur Buana Waru Tengah</span></li>
          </ol>


          
        </div>
      </div>

      <div className="h-20" />
      <Discover/>
      <Footer/>
    </div>
  );
}
