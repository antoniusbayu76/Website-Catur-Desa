import React, { useEffect } from "react";
import { FaClock } from "react-icons/fa";
import wilayahImg from "../assets/danau.png"; // ganti sesuai gambar peta atau danau jika ada
import Navbar from "../components/Navbar";
import Discover from "../components/DiscoverSocial";
import Footer from "../components/Footer";

export default function Pemerintahan() {
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
              Sistem Pemerintahan Adat Dalem Tamblingan
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
          <h2 className="text-xl md:text-2xl font-bold">Struktur Organisasi Dresta Kuna Adat Dalem Tamblingan</h2>
          <p >
            Sebagai sebuah organisasi, Adat Dalem Tamblingan mempunyai struktur organisasi dresta kuna, yaitu:
            <ol className="mx-10 list-disc space-y-2">
            <li><span className="font-normal">Ngurah Mancawarna (Pengerajeg)</span></li>
            <li><span className="font-normal">Ngurah Pengenter</span></li>
            <li><span className="font-normal">Ngurah Pasek</span></li>
            <li><span className="font-normal">Ngurah Mangku Agung</span></li>
            <li><span className="font-normal">Ngurah Pengengeng</span></li>
            <li><span className="font-normal">Ngurah Kubayan</span></li>
            <li><span className="font-normal">Ngurah Nyarita</span></li>
            </ol>
            Dibantu Pengabih Linggih Kiwa-Tengen, yaitu Agung Belayu dan Barak Tegeh Kori.
          </p>
         

          <h2 className="text-xl md:text-2xl font-bold">Peran dan Kedudukan Pengerajeg</h2>
          <p >
            Pengerajeg adalah Sang Pemimpin, baik dalam hal sekala maupun niskala. Dikisahkan, pada suatu ketika Ida Dalem ngastawa (memuja) di Karang Kedas (saat ini menjadi Pura Batur). Ketika bermeditasi, terlihatlah kukus (asap) di arah kaja-kangin (timur laut) dan kelod-kangin (tenggara). Pada kedua kukus tersebut ditemukan bembengan/kandengan (mata air). Mata air tersebut difungsikan sebagai tirta pradana urip dan tirta pradana pati, air suci untuk muput saluiring seraja karya (panca yadnya), pengentas semua rangkaian kegiatan upacara baik niskala maupun sekala. Pada bembengan/kandengan arah kaja-kangin kemudian didirikan Pura Siwa Muka Bulakan dan arah kelod-kangin didirikan Pura Siwa Muka Suwukan.
          </p>
          <p >
            Pada tahun 1800-an, krama Adat Dalem Tamblingan pernah dipimpin oleh seorang pengerajeg perempuan, bernama Gusti Ayu Rai. Beliau merupakan tokoh yang ngajegan adat. Ketika itu Sang Suami sudah meninggal dan keturunannya masih kecil-kecil. Sebagai pemimpin perempuan pertama, Gusti Ayu Rai dikenal sebagai panglingsir Adat Dalem Tamblingan yang berkharisma luar biasa. Beliau memimpin hingga Lingsir (tua), bahkan jika ke pura harus di-tegen (ditandu).

          </p>
          
          <h2 className="text-xl md:text-2xl font-bold">Fungsi dan Kewenangan Ngurah Mancawarna</h2>
          <p >
            Pengerajeg disebut juga Ngurah Mancawarna yang menjalankan lima fungsi. Krama Adat Dalem Tamblingan, sebagai pemeluk Siwa Muka Bulakan dan Siwa Muka Suwukan Dalem Tamblingan, memiliki awig-awig atau aturan, terkait dengan Ngurah Mancawarna, Sang Pemimpin Adat Dalem Tamblingan.

            <ol className="mx-10 list-decimal space-y-2">
            <li>
                <span className="font-normal">
                Ngurah Mancawarna adalah turunan Dalem Tamblingan
                </span>
            </li>
            <li>
                <span className="font-normal">
                Ngurah Mancawarna memegang kewenangan tertinggi dalam bidang yaanya (upacara)
                </span>
            </li>
            <li>
                <span className="font-normal">
                Ngurah Mancawarna mempunyai lima fungsi, yaitu:
                </span>
                <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>
                    <span className="font-normal">
                    <b>Ida Siwa</b> tatkala nuhur tirta (menyucikan air)
                    </span>
                </li>
                <li>
                    <span className="font-normal">
                    <b>Penyiratan / Balian Guru Sakti</b> tatkala melaksanakan upacara
                    </span>
                </li>
                <li>
                    <span className="font-normal">
                    <b>Ngurah Penyarikan</b> tatkala muput yadnya (mengentaskan upacara)
                    </span>
                </li>
                <li>
                    <span className="font-normal">
                    <b>Bhagawan Gama</b> tatkala melaksanakan upacara penglukat gumi
                    </span>
                </li>
                <li>
                    <span className="font-normal">
                    <b>Ngurah Bendesa Dalem Tamblingan</b> tatkala nabdab krama (memimpin masyarakat)
                    </span>
                </li>
                </ul>
            </li>
            <li>
                <span className="font-normal">
                Ngurah Mancawarna tidak dipilih oleh pesamuan agung
                </span>
            </li>
            <li>
                <span className="font-normal">
                Ngurah Mancawarna bertanggung jawab secara horisontal kepada seluruh krama Adat Dalem Tamblingan dan secara vertikal kepada Ida Bethara sesuhunan ring Adat Dalem Tamblingan
                </span>
            </li>
            <li>
                <span className="font-normal">
                Apabila keturunan Ngurah Bendesa Dalem Tamblingan lebih dari satu orang, untuk diangkat menjadi Ngurah Mancawarna diutamakan memperhatikan mufakat dari Beliau melalui musyawarah internal jeroan (keluarga Pengerajeg)
                </span>
            </li>
            </ol>

          </p>
         

          <h2 className="text-xl md:text-2xl font-bold">Peran Krama Adat dalam Upacara</h2>
          <p >
            Krama Adat Dalem Tamblingan memiliki peran khusus dalam pelaksana upacara:
          <ol className="mx-5 list-decimal font-semibold">
            <li><span className="font-semibold">Petugas pelaksana upacara</span></li>
                <ol className="mx-10 list-disc space-y-2">
                <li><span className="font-normal">Balian Guru Sakti adalah Ngurah Mancawarna</span></li>
                <li><span className="font-normal">Balian Tiga sakti dari turunan Pengenter</span></li>
                <li><span className="font-normal">Balian Sanding dari turunan Pasek Wancing</span></li>
                <li><span className="font-normal">Balian Sasa dari turunan Barak Tegeh Kori</span></li>
                <li><span className="font-normal">Balian Susul</span></li>
                <li><span className="font-normal">Permas</span></li>
                </ol>

              
            <li><span className="font-semibold">Pembantu pelaksana upacara</span></li>
                <ol className="mx-10 list-disc space-y-2">
                <li>
                    <span className="font-normal">
                    Pengenter dibantu oleh Petinggi dalam pelaksanaan upacara yang terkait dengan bebantenan
                    </span>
                </li>
                <li>
                    <span className="font-normal">
                    Pengengeng bertanggung jawab sebagai juru rawos upacara
                    </span>
                </li>
                <li>
                    <span className="font-normal">
                    Kubayan bertanggung jawab pada keamanan duwe, bersama dengan Deha Teruna Tekor
                    </span>
                </li>
                <li>
                    <span className="font-normal">
                    Ngurah Nyarita sebagai pelaksana seni (tari dan tabuh/Seka Keklentingan)
                    </span>
                </li>
                <li>
                    <span className="font-normal">
                    Kelian Subak se-Catur Desa
                    </span>
                </li>
                <li>
                    <span className="font-normal">
                    Kelian Banjar Adat se-Catur Desa
                    </span>
                </li>
                <li>
                    <span className="font-normal">
                    Perbekel se-Catur Desa
                    </span>
                </li>
                <li>
                    <span className="font-normal">
                    Menega (Jaga Teleng dan Jaga Wana)
                    </span>
                </li>
                </ol>

              <p className="font-normal">
              Juga, seluruh masyarakat Adat Dalem Tamblingan wajib ngayah di pura pada saat upacara sesuai dengan fungsinya.
              </p>

    

          </ol>
          </p>

          <h2 className="text-xl md:text-2xl font-bold">Tata Kelola Banten dalam Upacara</h2>
          <p >
            Dalam tatanan upacara, masyarakat dan banjar adat berperan besar dalam pengadaan banten (kekenaan banten). Pengenter bertugas menyusun seluruh rangkaian dan proses karya/upacara, dan nantinya secara detil banten diorganisir oleh setiap banjar adat untuk diserahkan ke setiap dadya (keluarga). Banten yang dibuat oleh setiap dadya atau keluarga langsung diserahkan ke pura, diterima dan diatur oleh petinggi Lanang-istri dengan pimpinan pengenter. Banten kemudian akan dihaturkan oleh Pelaksana Upacara. Pengetahuan tentang banten mulai dipraktikkan ketika deha teruna tekor, ikut berpartisipasi secara langsung ketika upacara dan persiapannya. Praktik langsung, ditambah dengan cerita-cerita dari penglingsir lebih memudahkan generasi penerus memahami. Ada juga banten yang sudah ditulis oleh penglingsir yang dulu rajin menuliskan dari banten yang ada.

          </p>
          <h2 className="text-xl md:text-2xl font-bold">Peran Khusus Menega</h2>
          <p >
            Sementara itu, menega mempunyai tugas khusus menjaga hutan (jaga wana) dan menjaga danau (jaga teleng), terdiri dari orang-orang yang ditentukan berdasarkan keturunan dan tetap melaksanakan tugasnya hingga saat ini.
          </p>
          

          
        </div>
      </div>

      <div className="h-20" />
      <Discover/>
      <Footer/>
    </div>
  );
}
