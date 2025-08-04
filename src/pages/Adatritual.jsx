import React, { useEffect } from "react";
import { FaClock } from "react-icons/fa";
import gamatirta from "../assets/gamatirta.jpg";
import yadnya from "../assets/yadnya.jpg";
import karyadalu from "../assets/karyadalu.jpg";
import bongkol from "../assets/bongkol.jpg";
import pengerakih from "../assets/pengerakih.jpg";
import pangayu from "../assets/sasihkalima.jpg";
import kadasa from "../assets/kadasa.jpg";


import pengelukat from "../assets/penglukatgumi.jpg";
import ngendihang from "../assets/ngendihang.jpg";
import melasti from "../assets/melasti.jpg";
import ritualdanau from "../assets/ritualdanau.jpg";
import luahagung from "../assets/luahagung.jpg";
import idabetara from "../assets/idabetara.jpg";
import Navbar from "../components/Navbar";
import DiscoverCulture from "../components/DiscoverCulture";
import Footer from "../components/Footer";

export default function Adatritual() {
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
               Adat dan Ritual Dalem Tamblingan
            </h1>
            <div className="text-sm text-white/90 flex flex-wrap items-center gap-4 mt-2">
              <span>By Brasti</span>
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
         {/* Subjudul dan Deskripsi Panjang */}
        <div className="max-w-3xl mx-auto mt-12 px-4 md:px-0">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
            Dasar Spiritualitas: Piagem Gama Tirta
        </h2>
    {/* Image & Quote */}
            <div className="max-w-sm pb-4 mx-auto mt-6 px-4 md:px-0">
            <div className="relative rounded-lg shadow-lg overflow-hidden">
                <img src={gamatirta} alt="Pengelukat Gumi" className="w-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
            </div>
            </div>
        <div className="text-sm md:text-base leading-relaxed text-justify space-y-4">
            <p >
           Masyarakat Adat Dalem Tamblingan di Catur Desa adalah penganut <i>Piagem Gama Tirta yang memuliakan air</i>. <i>Dresta</i>, pelaksanaan ritual masyarakat Adat Dalem Tamblingan di Catur Desa memiliki keunikan, berbeda dengan desa lain di Bali. Rangkaian panjang upacara atau <i>karya alilitan</i> masyarakat Adat Dalem Tamblingan dilakukan setiap dua tahun. Upacara ini memiliki dua tujuan utama:
                <ol className="mx-5 list-disc space-y-2">
                <li>
                    <span className="font-normal">
                    Untuk membersihkan alam dan manusia dari hal-hal buruk
                    </span>
                </li>
                <li>
                    <span className="font-normal">
                    Untuk berbagi kesejahteraan kepada sesama
                    </span>
                </li>
                </ol>
            Melalui <i>karya</i> yang dilakukan ini diharapkan keseimbangan dan kelestarian kosmos akan terjaga.
            </p>
            
        </div>
        </div>
                {/* Subjudul dan Deskripsi Panjang */}
        <div className="max-w-3xl mx-auto mt-12 px-4 md:px-0">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
            Yadnya Berdasarkan Pesasihan Leluhur
        </h2>
            {/* Image & Quote */}
            <div className="max-w-sm pb-4 mx-auto mt-6 px-4 md:px-0">
            <div className="relative rounded-lg shadow-lg overflow-hidden">
                <img src={yadnya} alt="Yadnya" className="w-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
            </div>
            </div>
        <div className="text-sm md:text-base leading-relaxed text-justify space-y-4">
            <p >
           Yadnya atau rangkaian upacara dilakukan berdasarkan <i>pesasihan</i> yang telah dilaksanakan secara turun-temurun oleh <i>krama</i> (masyarakat) Adat Dalem Tamblingan. Upacara-upacara tersebut antara lain:
            </p>
            <ol className="list-decimal list-inside space-y-6 text-sm md:text-base leading-relaxed text-justify">
                <li className="font-bold">
                <span className="font-bold">Karya Dalu (Sasih Kasa - Juli)</span>
                </li>
            </ol>
            {/* Image & Quote */}
            <div className="max-w-sm pb-4 mx-auto mt-6 px-4 md:px-0">
            <div className="relative rounded-lg shadow-lg overflow-hidden">
                <img src={karyadalu} alt="Karya Dalu" className="w-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
            </div>
            </div>
            <p >
            Dilaksanakan pada <i>petengin</i> (bulan mati) sasih Kasa, bertujuan untuk membersihkan atau menyucikan Pertiwi. <b>Dalu</b> berarti gelap atau malam. Ritual dilakukan pada tiga mata air (Toya Masem, Toya Sudamanik, dan Toya Ling) yang disebut Tukad Sridaka, terletak di perbatasan antara Desa Munduk dengan Gesing (Tukad Cangkup). Jarak tempuh dari Pura Pemulungan Agung ke Tukad Cangkup sekitar 3,4 km.
            </p>
        </div>
        </div>


                {/* Subjudul dan Deskripsi Panjang */}
        <div className="max-w-3xl mx-auto mt-6 px-4 md:px-0">
        <div className="text-sm md:text-base leading-relaxed text-justify space-y-4">
            <ol start={2} className="list-decimal list-inside space-y-6 text-sm md:text-base leading-relaxed text-justify">
                <li className="font-bold">
                <span className="font-bold">Bongkol Karya (Sasih Karo)</span>
                </li>
            </ol>
{/* Image & Quote */}
            <div className="max-w-sm pb-4 mx-auto mt-6 px-4 md:px-0">
            <div className="relative rounded-lg shadow-lg overflow-hidden">
                <img src={bongkol} alt="Bongkol Karya" className="w-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
            </div>
            </div>
            <p >
            Dilaksanakan pada <i>kembangin</i> (bulan purnama) sasih Karo, sekitar 15 hari setelah Karya Dalu. Tujuannya adalah untuk menguatkan dan membersihkan pertiwi <i>sapta petala</i> (dasar bumi). Ritual dilaksanakan di mata air besar Luahan Agung Mendaum di perbatasan Desa Munduk dengan Gobleg.
            </p>
        </div>
        </div>


                {/* Subjudul dan Deskripsi Panjang */}
        <div className="max-w-3xl mx-auto mt-6 px-4 md:px-0">
        <div className="text-sm md:text-base leading-relaxed text-justify space-y-4">
            <ol start={3} className="list-decimal list-inside space-y-6 text-sm md:text-base leading-relaxed text-justify">
                <li className="font-bold">
                <span className="font-bold">Pengerakih Raganta (Sasih Katiga)</span>
                </li>
            </ol>
            <p >
            Dilaksanakan di <i>pura raganta</i> atau <i>merajan</i> keluarga pada <i>kembangin</i> sasih Katiga.Penyucian dilakukan oleh setiap keluarga di pekarangan, kebun, serta tempat ibadah keluarga masing-masing.

            </p>
        </div>
        </div>

        
                {/* Subjudul dan Deskripsi Panjang */}
        <div className="max-w-3xl mx-auto mt-6 px-4 md:px-0">
        <div className="text-sm md:text-base leading-relaxed text-justify space-y-4">
            <ol start={4} className="list-decimal list-inside space-y-6 text-sm md:text-base leading-relaxed text-justify">
                <li className="font-bold">
                <span className="font-bold">Pengerakih Luhuring Capah (Sasih Kapat)</span>
                </li>
            </ol>
            <div className="max-w-sm pb-4 mx-auto mt-6 px-4 md:px-0">
            <div className="relative rounded-lg shadow-lg overflow-hidden">
                <img src={pengerakih} alt="Sasih Kapat" className="w-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
            </div>
            </div>
            <p >
            Penyucian dilakukan di bagian hulu atau kepala wilayah, yaitu di sekitar Hutan dan Danau Tamblingan, melalui upacara <i>ngaturang pakelem</i>. Selain penyucian kawasan, ritual ini juga memohon keselamatan dan kesejahteraan serta sebagai wujud syukur atas kesuburan air dari Danau Tamblingan. Perjalanan upacara dimulai dari Pura Pemulungan Agung menuju Pura Naga Loka (sekitar 15,8 km), dengan beristirahat di Pura Gubung dan nunas tirta di Pura Tirta Mengening. Tiga hari kemudian dilanjutkan ke pura-pura di Madyaning Capah.
            </p>
        </div>
        </div>
        

                 {/* Subjudul dan Deskripsi Panjang */}
        <div className="max-w-3xl mx-auto mt-6 px-4 md:px-0">
        <div className="text-sm md:text-base leading-relaxed text-justify space-y-4">
            <ol start={5} className="list-decimal list-inside space-y-6 text-sm md:text-base leading-relaxed text-justify">
                <li className="font-bold">
                <span className="font-bold">Pemelastian ke Segara Agung (Sasih Kapat)</span>
                </li>
            </ol>
            <p >
            Dilaksanakan pada <i>petengin</i> sasih Kapat menuju Segara Agung – Pura Labuan Aji (<i>pura Soring Capah</i>), untuk:
            <ol className="mx-10 list-disc">
            <li><span className="font-normal">Membersihkan</span></li>
            <li><span className="font-normal">Menguatkan</span></li>
            <li><span className="font-normal">Menyuburkan permukaan bumi dan segala isinya</span></li>
            </ol>
            Segala kekotoran dari penyucian dilarung ke laut. <b>Ida Bhatara Pengulu</b> yang direpresentasikan dalam bentuk pusaka-pusaka diiringi oleh <i>krama</i> Adat Dalem Tamblingan berjalan sejauh sekitar 19,5 km. Masyarakat desa yang dilewati (Kayu Putih, Tirtasari, Banyuseri, Banjar, Dencarik, dan Temukus) memberikan suguhan makanan dan minuman kepada para pengiring serta menghaturkan bakti. Ida Bhatara Pengulu melinggih selama tiga hari di Pura Labuan Aji. Setelah tiga hari, lewat tengah malam, Ida Bhatara Pengulu kembali (<i>Duwe Mantuk</i>) menuju Gobleg melalui jalur berbeda (Desa Cempaga dan Desa Pedawa), sejauh sekitar 18,3 km, agar kesejahteraan menyebar lebih luas.
            </p>
        </div>
        </div>


                 {/* Subjudul dan Deskripsi Panjang */}
        <div className="max-w-3xl mx-auto mt-6 px-4 md:px-0">
        <div className="text-sm md:text-base leading-relaxed text-justify space-y-4">
            <ol start={6} className="list-decimal list-inside space-y-6 text-sm md:text-base leading-relaxed text-justify">
                <li className="font-bold">
                <span className="font-bold">Pangayu-ayu (Sasih Kalima)</span>
                </li>
            </ol>
            <div className="max-w-sm pb-4 mx-auto mt-6 px-4 md:px-0">
            <div className="relative rounded-lg shadow-lg overflow-hidden">
                <img src={pangayu} alt="Sasih Kalima" className="w-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
            </div>
            </div>
            <p >
            Merupakan puncak pujawali, bertujuan untuk:
                <ol className="mx-10 list-disc ">
                <li><span className="font-normal italic">Ngenteg Linggih Jagat</span></li>
                <li><span className="font-normal italic">Ngenteg Linggih Kamertan</span></li>
                </ol>
            Artinya, kesejahteraan (<i>kamertan</i>) harus dikukuhkan dan diperkuat agar bertahan lama. Pada saat ini, <i>sarin taun</i> yang disimpan di lumbung Pura Pemulungan Agung diturunkan dan dibagikan kepada <i>krama</i>.

            </p>
        </div>
        </div>


                 {/* Subjudul dan Deskripsi Panjang */}
        <div className="max-w-3xl mx-auto mt-6 px-4 md:px-0">
        <div className="text-sm md:text-base leading-relaxed text-justify space-y-4">
            <ol start={7} className="list-decimal list-inside space-y-6 text-sm md:text-base leading-relaxed text-justify">
                <li className="font-bold">
                <span className="font-bold">Nangluk Merana (Sasih Kanem)</span>
                </li>
            </ol>
            <p >
            Upacara ini dilaksanakan pada <i>petengin</i> sasih Kanem, sebagai sarana penolak bala. Tujuannya adalah memohon agar dijauhkan dari hal-hal negatif seperti:

            <ol className="mx-10 list-disc ">
            <li><span className="font-normal">Penyakit</span></li>
            <li><span className="font-normal">Hama</span></li>
            <li><span className="font-normal">Bencana</span></li>
            </ol>
            </p>
        </div>
        </div>

                 {/* Subjudul dan Deskripsi Panjang */}
        <div className="max-w-3xl mx-auto mt-6 px-4 md:px-0">
        <div className="text-sm md:text-base leading-relaxed text-justify space-y-4">
            <ol start={8} className="list-decimal list-inside space-y-6 text-sm md:text-base leading-relaxed text-justify">
                <li className="font-bold">
                <span className="font-bold">Pitra Yadnya (Sasih Kapitu dan Kawulu)</span>
                </li>
            </ol>
            <p >
            Merupakan waktu khusus bagi masyarakat Adat Dalem Tamblingan untuk melaksanakan upacara <i>ngaben</i> (ngabain).
    
            </p>
                 {/* Subjudul dan Deskripsi Panjang */}
        <div className="max-w-3xl mx-auto mt-6 px-4 md:px-0">
        <div className="text-sm md:text-base leading-relaxed text-justify space-y-4">
            <ol start={9} className="list-decimal list-inside space-y-6 text-sm md:text-base leading-relaxed text-justify">
                <li className="font-bold">
                <span className="font-bold">Panyanggra Ulu, Madya, Sor (Sasih Kasanga)</span>
                </li>
            </ol>
            <p >
            Prosesi upacara dari hulu ke hilir, untuk menyeimbangkan wilayah atas, tengah, dan bawah secara <i>sekala niskala</i>. Upacara ini ditutup di Pura Dalem Madura Sakti (Pura Dalem Gobleg) pada <i>petengin</i> sasih Kasanga. Kemudian dilanjutkan dengan <i>pujawali</i> di Pura Dalem Tamblingan, dan diteruskan dengan penyanggra ke tiga desa lainnya:
            <ol className="mx-10 list-disc ">
            <li><span className="font-normal">Munduk</span></li>
            <li><span className="font-normal">Gesing</span></li>
            <li><span className="font-normal">Umejero</span></li>
            </ol>
            </p>
        </div>

        <div className="text-sm md:text-base leading-relaxed text-justify space-y-4">
            <ol start={10} className="list-decimal list-inside space-y-6 text-sm md:text-base leading-relaxed text-justify">
                <li className="font-bold">
                <span className="font-bold">Panglukat Gumi (Sasih Kadasa)</span>
                </li>
            </ol>
            <div className="max-w-sm pb-4 mx-auto mt-6 px-4 md:px-0">
            <div className="relative rounded-lg shadow-lg overflow-hidden">
                <img src={kadasa} alt="Sasih Kadasa" className="w-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
            </div>
            </div>
            <p >
            Dilaksanakan pada <i>kembangin</i> sasih Kadasa. Merupakan upacara pembersihan:
            <ol className="mx-10 list-disc space-y-2">
            <li><span className="font-normal"><b>Buana Agung</b> (semesta)</span></li>
            <li><span className="font-normal"><b>Buana Alit</b> (tubuh manusia)</span></li>
            </ol>

            Pembersihan dilakukan melalui <b>panglukatan</b>, yaitu ritual pembersihan menggunakan sarana air.
            </p>
        </div>
        </div>
        </div>
        </div>
        
      </div>
      <DiscoverCulture />
      <Footer />
    </div>
  );
}
