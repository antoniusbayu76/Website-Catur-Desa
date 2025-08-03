import React, { useEffect } from "react";
import { FaClock } from "react-icons/fa";
import pengelukat from "../assets/penglukatgumi.jpg";
import ngendihang from "../assets/ngendihang.jpg";
import melasti from "../assets/melasti.jpg";
import ritualdanau from "../assets/ritualdanau.jpg";
import luahagung from "../assets/luahagung.jpg";
import idabetara from "../assets/idabetara.jpg";
import Navbar from "../components/Navbar";
import DiscoverCulture from "../components/DiscoverCulture";
import Footer from "../components/Footer";

export default function Alilitan() {
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
              Ritual Karya Alilitan Adat Dalem Tamblingan
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
            Karya Alilitan
        </h2>
        <div className="text-sm md:text-base leading-relaxed text-justify space-y-4">
            <p className="indent-8">
            Karya Alilitan adalah proses rangkaian ritual yang diselenggarakan oleh masyarakat Adat Dalem Tamblingan. Karya Alilitan dilaksanakan setiap dua tahun sekali, yang biasanya jatuh pada tahun ganjil. Karya Alilitan mempunyai tujuan utama, yaitu untuk membersihkan dan menyucikan alam beserta isinya dan senantiasa menjaga harmoni alam. 
            </p>
            <p className="indent-8">
            Pada purana disebutkan bahwa dulu karya alilitan dilakukan setiap tahun. Namun saat ini, Karya dilaksanakan setiap dua tahun sekali, karena proses Karya Alilitan memakan waktu selama 6 bulan khusus untuk dewa yadnya, dan memasuki sasih kanem, 4 bulan kemudian diikuti dengan rangkaian nangluk Merana. Pada waktu ini masyarakat ADT melakukan Upacara Penyanggra Nangluk Merana. Kemudian pada sasih kapitu dan kaulu dilaksanakan upacara pitra yadnya. Selanjutnya pada sasih kesanga dilakukan upacara Sesiep (Penyepian). 
            </p>
            <p className="indent-8">
            Berdasarkan hal tersebut diatas, karya alilitan, sulit dilakukan setiap tahun. Selain itu, berdasarkan purana yang ada diijinkan untuk menunda pelaksanaan Karya Alilitan selama satu tahun atau Ngarad. Biasanya waktu jeda ini dipakai untuk pemeliharaan fisik pada bangunan - bangunan pura yang ada di wilayah adat Dalem Tamblingan.
            </p>
        </div>
        </div>
                {/* Subjudul dan Deskripsi Panjang */}
        <div className="max-w-3xl mx-auto mt-12 px-4 md:px-0">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
            Rangkaian Upacara Karya Alilitan
        </h2>
        <div className="text-sm md:text-base leading-relaxed text-justify space-y-4">
            <p className="indent-8">
            Proses Karya Alilitan dilaksanakan manut pesasihan, dimulai pada kembanging sasih Kedasa (biasanya jatuh pada bulan April) sampai pada Kembang sasih Kelima (bulan November). Rangkaian Upacara Karya Alilitan adalah sebagai berikut:
            </p>
            <ol className="list-decimal list-inside space-y-6 text-sm md:text-base leading-relaxed text-justify">
                <li className="font-bold">
                <span className="font-bold">Pengelukat Gumi</span>
                </li>
            </ol>
            <p className="indent-8">
            Sebelum melakukan rangkaian proses Lilitan Karya, masyarakat adat Dalem Tamblingan akan mengadakan ritual upacara <i>Pengelukat Gumi</i>. Pengelukat Gumi adalah  ritual yang dilaksanakan oleh masyarakat adat dalem Tamblingan yang bertujuan untuk menyucikan dan membersihkan alam beserta isinya dengan sarana air suci (tirta). Adapun proses dari upacara pengelukat gumi dimulai dari nunas panugrahan kepada penguasa bumi, setelah itu dilakukan upacara Pecaruan Manca Kelud. Ada 2 tingkatan upacara pengelukat gumi yang dilaksanakan oleh masyarakat adat dalem Tamblingan yaitu tingkatan madya dan utama.
            </p>
        </div>
        </div>

        {/* Image & Quote */}
        <div className="max-w-xl mx-auto mt-6 px-4 md:px-0">
          <div className="relative rounded-lg shadow-lg overflow-hidden">
            <img src={pengelukat} alt="Pengelukat Gumi" className="w-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        <p className="text-sm text-gray-600 mt-2 text-center">
          Upacara <i>Pengelukat Gumi</i> di Perapat Agung Desa Gobleg
        </p>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto mt-8 px-4 md:px-0 text-sm md:text-base leading-relaxed text-justify space-y-6">
          <p className="indent-8">
            Pada tingkatan madya, Pengelukat gumi dilaksanakan di Perapat Agung yang dihadiri oleh seluruh masyarakat adat Dalem Tambingan. Seusai ritual tirta pengelukat gumi akan di sebarkan ke seluruh pura utama yang ada di wilayah Adat Dalem Tamblingan oleh masing-masing pemangku pengempon pura dan seluruh palemahan di wewidangan ADT. Sehari setelah ritual pengelukat gumi, akan dilaksanakan sesiep (penyepian) di seluruh wewidangan ADT.
          </p>
          <p className="indent-8">
            Pada tingkatan utama, ritual pengelukat gumi dilaksanakan di Perepat Agung yang dihadiri oleh seluruh masyarakat adat Dalem Tambingan. Seusai ritual di desa Gobleg, upacara dilanjutkan dengan Mececala (berjalan melintasi wewidangan Catur Desa). Hal ini bertujuan untuk ngemargiang (memercikkan) tirta ke seluruh wilayah Adat Dalem Tamblingan untuk menyucikan wilayah ADT pada khususnya, dan seluruh bumi pada umumnya. Sehari setelah ritual pengelukat gumi, akan dilaksanakan sesiep (penyepian) di seluruh wewidangan ADT.
          </p>

        </div>


                {/* Subjudul dan Deskripsi Panjang */}
        <div className="max-w-3xl mx-auto mt-6 px-4 md:px-0">
        <div className="text-sm md:text-base leading-relaxed text-justify space-y-4">
            <ol start={2} className="list-decimal list-inside space-y-6 text-sm md:text-base leading-relaxed text-justify">
                <li className="font-bold">
                <span className="font-bold">Karya Dalu</span>
                </li>
            </ol>
            <blockquote className="border-l-4 border-[#4d472a] pl-4 italic font-semibold text-sm md:text-base text-black/80">
                Dina Besik (Sasih Kasa) <br />
                Jejepan (Pangelong) <br />
                Nuju Kandengan (Beteng)
            </blockquote>
            <p className="indent-8">
            Karya Dalu diselenggarakan pada jejepan (pangelong) sasih Kasa yang berpusat di Pura Pemulungan Agung. Dalu berarti pepetengan (kegelapan), dimana alam semesta beserta isinya berada dalam kegelapan atau kekotoran sehingga perlu dilaksanakan ritual upacara untuk membersihkan dan menyucikan bumi. Ritual pembersihan ini disimbolkan dengan upacara menyalakan api di jaba tengah pura Pemulungan Agung, sebagai simbol hilangnya kegelapan dan dibersihkannya kekotoran alam yaitu pada buana alit dan buana agung.

            </p>
        </div>
        <div className="max-w-xl mx-auto mt-6 px-4 md:px-0">
          <div className="relative rounded-lg shadow-lg overflow-hidden">
            <img src={ngendihang} alt="Ngandihang" className="w-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        <p className="text-sm text-gray-600 mt-2 text-center">
          Upacara <i>Pengelukat Gumi</i> di Jaba Tengah Pura Pemulungan Agung
        </p>
        </div>
        {/* Article Content */}
        <div className="max-w-3xl mx-auto mt-8 px-4 md:px-0 text-sm md:text-base leading-relaxed text-justify space-y-6">
          <p className="indent-8">
            Keesokan harinya dilaksanakan ritual melasti ke Luah Ingkup / Tukad Sridaka (Tukad Cangkup) dengan tujuan, pertama untuk menghanyutkan kekotoran dan nunas pemarisudha bumi. Tukad ini disebut tukad cangkup karena airnya merupakan gabungan dari 3 air yaitu yeh masem, toya ling, sudamanik. Campuran dari tiga mata air ini sifatnya pemarisudha, yang artinya melebur segala kekotoran dan mengharmonisasi buana agung dengan buana alit. Pada karya ini masyarakat subak ngaturang <i>sarin taun</i> berupa padi dan biji biji hasil bumi yang akan disimpan di Pura Pemulungan Agung.

          </p>
        </div>
        </div>


                {/* Subjudul dan Deskripsi Panjang */}
        <div className="max-w-3xl mx-auto mt-6 px-4 md:px-0">
        <div className="text-sm md:text-base leading-relaxed text-justify space-y-4">
            <ol start={3} className="list-decimal list-inside space-y-6 text-sm md:text-base leading-relaxed text-justify">
                <li className="font-bold">
                <span className="font-bold">Bongkol Karya</span>
                </li>
            </ol>
            <blockquote className="border-l-4 border-[#4d472a] pl-4 italic font-semibold text-sm md:text-base text-black/80">
               <i> Kembanging Sasih Karo</i> <br />
                <i>Nuju Kandengan </i>
            </blockquote>
            <p className="indent-8">
            Bongkol Karya diselenggarakan pada Kembanging Sasih Karo yang berpusat di Pura Pemulungan Agung. Ritual Bongkol Karya dilaksanakan untuk membersihkan tujuh unsur di dasar bumi dengan tujuan untuk menguatkan dan membersihkan dasar bumi, kemudian ritual dilanjutkan dengan melaksanakan melasti ke Luah Alit (Tukad) Mendaum. Pada akhir upacara, nunas tirta Pengening-ening.

            </p>
        </div>
        <div className="max-w-xl mx-auto mt-6 px-4 md:px-0">
          <div className="relative rounded-lg shadow-lg overflow-hidden">
            <img src={melasti} alt="Melasti" className="w-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        <p className="text-sm text-gray-600 mt-2 text-center">
          <i>Melasti</i> ke Luah Alit Mendaum
        </p>
        </div>
        </div>

        
                {/* Subjudul dan Deskripsi Panjang */}
        <div className="max-w-3xl mx-auto mt-6 px-4 md:px-0">
        <div className="text-sm md:text-base leading-relaxed text-justify space-y-4">
            <ol start={4} className="list-decimal list-inside space-y-6 text-sm md:text-base leading-relaxed text-justify">
                <li className="font-bold">
                <span className="font-bold">Karya Alit Ngetiga (Pengerakih)</span>
                </li>
            </ol>
            <blockquote className="border-l-4 border-[#4d472a] pl-4 italic font-semibold text-sm md:text-base text-black/80">
              Kembangin Sasih Ketiga <br />
              Dina Sudama / Menghindari Pelpelan (Pasah)

            </blockquote>
            <p className="indent-8">
            Setelah Bongkol Karya atau penguatan dan pembersihan bumi, barulah masing-masing masyarakat melaksanakan upacara pengerakih (karya alit) di pura raganta atau sanggah/merajan.
            </p>
        </div>
        </div>
        

                 {/* Subjudul dan Deskripsi Panjang */}
        <div className="max-w-3xl mx-auto mt-6 px-4 md:px-0">
        <div className="text-sm md:text-base leading-relaxed text-justify space-y-4">
            <ol start={5} className="list-decimal list-inside space-y-6 text-sm md:text-base leading-relaxed text-justify">
                <li className="font-bold">
                <span className="font-bold">Karya Penyahjah</span>
                </li>
            </ol>
            <blockquote className="border-l-4 border-[#4d472a] pl-4 italic font-semibold text-sm md:text-base text-black/80">
              Kembangin Sasih Kapat <br />
              Dina Sudama / Menghindari Pelpelan (Pasah)
            </blockquote>
            <p className="indent-8">
            Karya Penyahjah dilakukan di Luhuring Capah, Madyaning Capah dan Soring Capah. Upacara pengerakih di pura-pura yang ada di Luhuring Capah Adat Dalem Tamblingan yang dilaksanakan pada kembangin sasih Kapat. Ritual pembersihan dan penyucian dilanjutkan ke bagian hulu, yaitu di seputaran Hutan dan Danau Tamblingan. Ritual dimulai dengan melasti dari desa Gobleg menuju Danau Tamblingan yang kemudian menyebar untuk ngaturang pengerakih ke seluruh pura dengan tujuan untuk membersihkan parahyangan - parahyangan di luring capah.

            </p>
        </div>
        <div className="max-w-xl mx-auto mt-6 px-4 md:px-0">
          <div className="relative rounded-lg shadow-lg overflow-hidden">
            <img src={ritualdanau} alt="Ritual di Danau" className="w-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        <p className="text-sm text-gray-600 mt-2 text-center">
          Ritual di Danau Tamblingan
        </p>
        </div>
         {/* Article Content */}
        <div className="max-w-3xl mx-auto mt-8 px-4 md:px-0 text-sm md:text-base leading-relaxed text-justify space-y-6">
          <p className="indent-8">
           Selain untuk penyucian kawasan, ritual ditujukan juga untuk memohon keselamatan dan kesejahteraan, serta sebagai ucapan syukur atas kesuburan dan keberlimpahan air yang bersumber dari Danau Tamblingan dengan ritual ngaturang Pekelem. Agar masyarakat dapat melakukan persembahyangan, maka dipilihlah salah satu pura di luhuring capah sebagai pusat untuk melakukan karya. Tiga hari setelah selesai di Luhuring Capah, dilanjutkan dengan upacara Pengerakih di pura-pura yang ada di Madyaning Capah. Sedangkan pengerakih di Soring Capah dilaksanakan pada saat melasti ke Luah Agung (Segara) Labuan Aji.

          </p>
        </div>
        </div>


                 {/* Subjudul dan Deskripsi Panjang */}
        <div className="max-w-3xl mx-auto mt-6 px-4 md:px-0">
        <div className="text-sm md:text-base leading-relaxed text-justify space-y-4">
            <ol start={6} className="list-decimal list-inside space-y-6 text-sm md:text-base leading-relaxed text-justify">
                <li className="font-bold">
                <span className="font-bold">Madyaning Karya</span>
                </li>
            </ol>
            <blockquote className="border-l-4 border-[#4d472a] pl-4 italic font-semibold text-sm md:text-base text-black/80">
              Jejepan Sasih Kapat <br />
              Nuju Kandengan
            </blockquote>
            <p className="indent-8">
            Madyaning karya diselenggarakan pada jejepan sasih Kapat Nuju Kandengan, yang berpusat di pura Pemulungan Agung, dengan tujuan untuk memohon kesucian dan keseimbangan alam. Dari Pengelukat Gumi sampai Karya Penyahjah merupakan rangkaian proses pembersihan dan penyucian alam, maka pada Madyaning Karya dilakukan ritual ke segara untuk menetralisir segala kekotoran dari proses pembersihan tersebut, karena diyakini bahwa laut adalah penetralisir segala kekotoran. Sehingga dilaksanakan ritual Melasti ke Segara Agung Labuan Aji untuk memohon Pada Ida Betara Baruna agar segala kekotoran semesta ini dinetralisir.

            </p>
            <p className="indent-8">
            Selain itu, tujuan utama dari ritual melasti ke Luah Agung (Segara) Labuan Aji adalah untuk melimpahkan Merta kepada panjak Ida Betara Pengulu yang ada di sepanjang perjalanan yang dilalui. Oleh karena itu, selama perjalanan melasti ngiringang Ida Betara Pengulu, deha teruna tekor mesuryak <i>“suryak sari jelih lambih matan balang”</i> sebagai simbolis menyebarkan kesejahteraan. Sebagai wujud syukur atas kelimpahan <i>merta</i> (kesejahteraan) yang diterima, masyarakat yang dilalui ngaturang penyanggra pada Ida Betara Pengulu berupa sesajen dan makanan minuman, kemudian boleh di <i>tunas</i> (dinikmati) oleh masyarakat yang melasti ngiringang Ida Betara. Dalam perjalanan menuju Segara Labuan aji, Ida Betara keiring mesandekan di Batugundul, desa Banjar. Setelah itu pemargi ida Betara dilanjutkan ke luah agung labuan Aji. Setibanya di Pantai Labuan Aji, Ida Betara keiring Mesandekan (istirahat sejenak). Setelah mesandekan ritual dilanjutkan dengan upacara mesucian ring pesiraman di Luah Agung, yang kemudian dilanjutkan ke pesimpangan Ida Betara Pengulu.

            </p>
        </div>
        <div className="max-w-xl mx-auto mt-6 px-4 md:px-0">
          <div className="relative rounded-lg shadow-lg overflow-hidden">
            <img src={luahagung} alt="Luah Agung" className="w-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        <p className="text-sm text-gray-600 mt-2 text-center">
          Melasti Ke Luah Agung Labuan Aji
        </p>
        </div>
         {/* Article Content */}
        <div className="max-w-3xl mx-auto mt-8 px-4 md:px-0 text-sm md:text-base leading-relaxed text-justify space-y-6">
          <p className="indent-8">
           Selama 3 hari Ida betara Nyejer, masyarakat melakukan persembahyangan di pesimpangan Ida betara Pengulu yang berlokasi di pinggir pantai Labuan Aji, dan selama itu masyarakat subak yang airnya berasal dari Tamblingan akan menghaturkan persembahan pada Ida Betara Pengulu berupa Boga (<i>Nasi Klatkat</i>) yang bisa ditunas oleh masyarakat Panjak Pengulu selama berada di Labuan Aji. Desa-desa yang dilewati saat melasti ke Labuan Aji adalah Desa Kayu Putih, Tirtasari, Banyuseri, Banjar, Dencarik dan Temukus dengan jarak kurang lebih 20 kilometer. Setelah ritual di Labuan Aji, masyarakat kembali ke Hulu dengan melewati jalur yang berbeda yaitu melalui Desa Cempaga dan Desa Pedawa sepanjang sekitar 18 kilometer. Hal ini bertujuan agar kesejahteraan dapat tersebar ke semua wilayah secara merata.

          </p>
        </div>
        </div>


                 {/* Subjudul dan Deskripsi Panjang */}
        <div className="max-w-3xl mx-auto mt-6 px-4 md:px-0">
        <div className="text-sm md:text-base leading-relaxed text-justify space-y-4">
            <ol start={7} className="list-decimal list-inside space-y-6 text-sm md:text-base leading-relaxed text-justify">
                <li className="font-bold">
                <span className="font-bold">Pucaking Karya (Ngayu Ayu)</span>
                </li>
            </ol>
            <blockquote className="border-l-4 border-[#4d472a] pl-4 italic font-semibold text-sm md:text-base text-black/80">
              Kembangin Sasih Kelima <br />
              Nuju Kandengan

            </blockquote>
            <p className="indent-8">
            Karya Pangayu-ayu dilaksanakan pada kembangin sasih Kalima nuju kandengan, sebagai puncak Lilitan Karya yang bertujuan untuk ngenteg Linggih Jagat dan Ngenteg Linggih Kamertaan. Bahwa Kamertaan atau kesejahteraan harus dikukuhkan dan dikuatkan, agar bisa berkelanjutan. Sebelum Karya Pengayu Ayu, pada saat medal desa, Krama subak ngaturang Sarin Taun berupa Padi dan biji -biji hasil bumi. Sebagian dari sarin taun yang dihaturkan ini disimpan untuk karya yang akan datang. Dan sarin taun yang disimpan di lumbung Pura Pemulungan Agung pada karya sebelumnya ditedunkan untuk upacara dan setelah upacara Karya ditunas oleh masyarakat. Ritual Karya Pengayu Ayu diakhiri dengan upacara melasti ke Luah Alit Mendaum untuk menyucikan arca lekita Ida Betara. 

            </p>
        </div>
        <div className="max-w-xl mx-auto mt-6 px-4 md:px-0">
          <div className="relative rounded-lg shadow-lg overflow-hidden">
            <img src={idabetara} alt="Ida Betara" className="w-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        <p className="text-sm text-gray-600 mt-2 text-center">
          Upacara Penyucian Arca Lekita Ida Betara
        </p>
        </div>
         {/* Article Content */}
        <div className="max-w-3xl mx-auto mt-8 px-4 md:px-0 text-sm md:text-base leading-relaxed text-justify space-y-6">
          <p className="indent-8">
           Upacara melasti selalu menandai akhir dari lilitan karya, karena ritual yang dilakukan adalah <i>Karya</i> yang bisa diartikan sebagai bekerja. Bekerja untuk membersihkan alam dari segala kekotoran, bekerja untuk memperoleh kesejahteraan. Maka dari itu, karya selalu diakhiri dengan nyiramang atau menyucikan due arca lekita Ida Betara sebagai sarana prasarana yang dipakai selama ritual.

          </p>
        </div>
        </div>
        
      </div>
      <DiscoverCulture />
      <Footer />
    </div>
  );
}
