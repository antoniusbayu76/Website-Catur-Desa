import React from "react";
import { FaClock } from "react-icons/fa";
import danau from "../assets/danau.png";
/* import Navbar from "../components/Navbar"; */
import { useEffect } from "react";


export default function History() {
    useEffect(() => {
  window.scrollTo({ top: 0, behavior: "instant" }); // atau "smooth"
}, []);

  return (
    <div className="relative bg-white text-black min-h-screen">
      {/*<Navbar /> */}

      {/* Hero Section */}
      <div className="pt-28">
        <div className="w-full px-4 md:px-20 py-10 bg-gradient-to-r from-[#44342F] to-[#AA5C46] text-white">
          <div className="max-w-5xl mx-auto space-y-3">
            <p className="text-sm text-white/80">
              <span className="underline">Topics</span> / Kebudayaan
            </p>
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              Legenda Dalem Tamblingan dan Pembentukan Catur Desa
            </h1>
            <div className="text-sm text-white/90 flex flex-wrap items-center gap-4 mt-2">
              <span>By Brasti</span>
            </div>
            <div className="text-sm text-white/90 flex flex-wrap items-center gap-4 mt-2">
              <span className="flex items-center gap-1">
                <FaClock className="text-xs" />
                10 min read
              </span>
              <span>
                Updated 14:28 AM EDT, Sun July 20, 2025
              </span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="max-w-2xl mx-auto mt-6 px-4 md:px-0">
            <div className="relative rounded-lg shadow-lg overflow-hidden">
                <img
                src={danau}
                alt="Danau Tamblingan"
                className="w-full object-cover"
                />
            <div className="absolute inset-0 bg-black/20" />
            </div>
        <div className="max-w-3xl mx-auto mt-6 px-4 md:px-0">
            <blockquote className="border-l-4 border-[#4d472a] pl-4 italic font-semibold text-sm md:text-xl text-black/80">
                “Kisah awal bukan hanya cerita, tapi fondasi nilai, tradisi, dan arah hidup sebuah masyarakat.”
            </blockquote>
        </div>


        </div>
                {/* Subjudul dan Deskripsi Panjang */}
        <div className="max-w-3xl mx-auto mt-12 px-4 md:px-0">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
            Asal-usul Dewa Bahem dan Nama Tamblingan
        </h2>
        <div className="text-sm md:text-base leading-relaxed text-justify space-y-4">
            <p className="indent-8">
            Dikisahkan, Sang Hyang Aji Sakti, dengan ketajaman yoga semadinya di Pegunungan Kelasa, India Utara melahirkan putra-putri sebanyak empat orang, yaitu Dewa Bramang, Dewa Mas Ngencorong, Dewa Bahem, dan Dewa Ayu Nare Swari. Setelah dewasa ketiga putra Sang Hyang Aji Sakti diutus ke Nusantara. Dewa Bramang melinggih di Solo, Dewa Mas Ngencorong melinggih di Kulangkung/Klungkung, dan Dewa Bahem melinggih di Alas Merta Jati Tamblingan.
            </p>
            <p className="indent-8">
            Alas Merta Jati Tamblingan merupakan pemukiman yang dibangun oleh Dewa Bahem sejak abad ke- 10 hingga akhir abad ke- 14. Dewa Bahem dengan para pengiringnya pertama kali tiba di sebuah gua yang ada di Alas Merta Jati, bernama Gua Naga Loka pada abad ke-10. Ketika itu telah ada penduduk asli penghuni Tamblingan, yaitu Pasek Tamblingan, Pasek Panji Landung, dan Pasek Kulisah. Kedatangan Dewa Bahem di Alas Merta Jati diterima dengan baik oleh penduduk asli dan hidup berdampingan dengan baik. Dewa Bahem kemudian mohon restu kepada Sang Hyang Naga Gelundung dan Sang Hyang Purwa Bumi untuk membuka Alas Merta Jati sebagai tempat pemukiman dengan sarana banten/sesajen. Banten dengan segala kelengkapannya diturunkan ke lubang Gua Naga Loka sebagai kunci pertiwi agar bumi beserta isinya tetap seimbang dan membawa berkah. Sebagai tanda restu dari Sang Pencipta, Dewa Bahem mendapatkan wara nugraha/paica berupa keris dan wija ratus (terdiri dari beras ketan hitam-putih, beras merah-putih, pindulan, kelapa yang dihancurkan, kunyit, cekuh, jahe, pala, merica, tabia bun). Selanjutnya kedua paica tersebut diagungkan sebagai perlambang pengukuhan/ penobatan Dewa Bahem sebagai Dalem Tamblingan, dan sejak saat itulah Beliau kabhiseka, disebut “Dalem Tamblingan”.
            </p>
        </div>
        </div>
                {/* Subjudul dan Deskripsi Panjang */}
        <div className="max-w-3xl mx-auto mt-12 px-4 md:px-0">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
            Perpindahan dari Alas Mertajati dan Lahirnya Catur Desa
        </h2>
        <div className="text-sm md:text-base leading-relaxed text-justify space-y-4">
            <p className="indent-8">
            Dalam perkembangan berikutnya, pada akhir abad ke-14, atas dasar alasan menjaga kesucian air danau sebagai sumber kehidupan, keturunan (preti sentana) Ida Dalem Tamblingan sebagai Sang Pemimpin, para pengiring, dan seluruh krama Tamblingan rela meninggalkan Alas Mertajati. Juga, pada saat itu, jumlah karaman Tamblingan sudah semakin banyak, yang artinya semakin banyak pula sumber daya yang dibutuhkan untuk penghidupan. Sementara itu, Alas Mertajati sebagai sumber kehidupan harus tetap utuh agar kebutuhan hidup bisa terus terpenuhi. Dikisahkan pula, ketika akan melakukan upacara pengabenan jika ada yang meninggal dunia, mayatnya selalu menghilang. Hal tersebut dimaknai sebagai satu bentuk peringatan bahwa kawasan Mertajati harus selalu dijaga kesuciannya, tidak untuk tempat tinggal. Setelah keluar dan turun dari kawasan Alas Mertajati, desa pertama yang dibangun adalah Hunusan (saat ini bernama Gobleg), tepatnya di areal Pura Batumadeg dan Unusan saat ini. Kemudian sebagian ada yang pindah dan berdiam di Tengah-mel (Munduk) dan Pangi (Gesing).
            </p>
            <p className="indent-8">
            Kemudian diperintahkanlah keturunan Belog Bengkung untuk membuka permukiman dan lahan pertanian (uma) di luar desa. Ki Jambe sebagai keturunan Belog Bengkung berjalan ke arah barat (kauh) bersama Pasek Dana Jaya hingga menemukan asap di dekat gunung kembar (kukusan dadua) dan mata air yang keluar dari batu. Air dialirkan untuk irigasi, namun alirannya terhalang oleh sebuah batu besar. Mereka menghadap Dane Pengerajeg, sang pemimpin keturunan dari Ida Dalem Tamblingan, memohon bantuan agar batu bisa terangkat. Dane Pengerajeg kemudian memberikan tongkat dan batok kelapa berisi tirta (air suci) untuk mengangkat batu agar air bisa mengalir. Batu akhirnya berhasil terangkat dan dinamakan Batu Месерак/Mecongkak, sehingga air bisa mengalir di bawah batu tersebut. Ki Jambe (Belog Bengkung) kemudian mendedikasikan lahan pertanian (uma) seluas 30 are yang ditanami galih (padi beras merah, beras putih, dan ketan hitam). Galih disebut juga sarin taun yang dihaturkan ke jeroan, kediaman sang pemimpin pada saat pujawali karya alilitan). Maka kemudian kawasan tersebut dinamakan Umejero. Keempat desa ini (Gobleg, Munduk, Gesing, dan Umejero) kemudian disebut Catur Desa. Dalam konteks Adat Dalem Tamblingan, masing-masing desa tersebut berkedudukan sebagai banjar adat (dalam pemerintahan negara menjadi desa dinas dan dalam pemerintahan provinsi menjadi desa adat). Maka kemudian, kawasan keempat desa ini dikenal dengan nama Adat Dalem Tamblingan di Catur Desa.
            </p>
        </div>
        </div>
                {/* Subjudul dan Deskripsi Panjang */}
        <div className="max-w-3xl mx-auto mt-12 px-4 md:px-0">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
            Bukti Sejarah dalam Prasasti Kuno
        </h2>
        <div className="text-sm md:text-base leading-relaxed text-justify space-y-4">
            <p className="indent-8">
            Nama "karaman i Tambelingan" (penduduk di Tamblingan) terekam dalam beberapa prasasti, sebagai sumber sejarah kuno untuk memperoleh gambaran kehidupan masyarakat pada masa itu, yaitu:
            </p>
            <ol className="list-decimal list-inside space-y-6 text-sm md:text-base leading-relaxed text-justify">
                <li>
                <span className="font-semibold">Prasasti Gobleg, Pura Batur A (844 Saka / 922 Masehi)</span> yang dikeluarkan oleh Raja Sri Ugrasena Warmadewa. Menyebutkan jabatan wakil masyarakat golongan Wisnawa di Tamblingan yang tinggal di sekitar bangunan suci Hyang Tahinuti. Disebutkan juga bahwa pengelolaan harta tinggalan orang-orang putus keturunan agar digunakan untuk memperbaiki tempat-tempat suci.
                </li>
                <li>
                <span className="font-semibold">Prasasti Gobleg, Pura Batur B (1041 Saka / 1119 Masehi)</span> yang dikeluarkan oleh Sri Maharaja Sri Suradhipa. Menyebutkan tentang anugerah Raja kepada karaman i Tambelingan untuk tidak lagi melakukan kerja bakti di Manasa (Pantai Bungkulan). Dalam prasasti ini ditetapkan juga berbagai macam tugas dan kewajiban, juga larangan melakukan tindak kekerasan seperti mencuri, membegal, mengamuk, merampas, durhaka, analuh, meracun. Segala denda akibat tindak kekerasan diserahkan kepada Hyang Api di Tengah-mel. Karaman i Tambelingan diperkenankan menebang kayu di hutan, tetapi harus bertindak arif, juga harus bertindak bijak terhadap pendatang apalagi dililit hutang harus diberi perlindungan. Bagi yang melanggar isi prasasti akan kena kutukan, menemukan sengsara selama hidupnya beserta keluarga dan keturunannya. Selanjutnya ditetapkan pula batas-batas wilayah Desa Tamblingan.
                </li>
                <li>
                <span className="font-semibold">Prasasti Tamblingan (1306 Saka / 1384 Masehi)</span> yang dikeluarkan oleh Paduka Parameswara Sri Wijayarejasa. Berisikan tentang perintah raja kepada pande besi di Tamblingan supaya kembali ke Tamblingan lagi. Disebutkan juga bahwa Aryya Kenceng / Cengceng (dari Majapahit) janganlah mengganggu kehidupan di Tamblingan, supaya pergi dari Tamblingan dan bertempat tinggal di Lo Gajah. Dituliskan juga tentang iuran yang dibebankan dan harus dibayarkan setiap bulan kedelapan kepada desa-desa kecil yang ada di bawah kekuasaan Desa Tamblingan, yakni Hunusan, Pangi, Kdu, dan Tengah-mel.
                </li>
                <li>
                <span className="font-semibold">Prasasti Gobleg, Pura Batur C (1320 Saka / 1398 Masehi)</span>, tanpa menyebutkan nama raja yang mengeluarkan. Menyebutkan tentang keterangan yang hampir sama dengan Prasasti Tamblingan. Dalam prasasti Gobleg, Pura Batur C ini juga dikeluarkan perintah untuk memperkokoh sabda telapak beliau Paduka Bhattara Sri Parameswara yang dicandikan di Wisnubhawana.
                </li>
            </ol>
        </div>
        </div>

        </div>
        {/* Space ksongg*/}
        <div className="h-20" />
    </div>
  );
}