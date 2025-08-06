import React, { useEffect } from "react";
import { FaClock } from "react-icons/fa";
import lateng from "../assets/lateng.png";
import ciplokan from "../assets/ciplokan.png";
import lempuyak from "../assets/lempuyak.png";
import Navbar from "../components/Navbar";
import Discover from "../components/DiscoverEnvi";
import Footer from "../components/Footer";

export default function Tanamanobat() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative bg-white text-black min-h-screen">
      <Navbar />
      <div className="pt-28 pb-15">
        {/* Header */}
        <div className="w-full px-4 md:px-20 py-10 bg-gradient-to-r from-[#625b39] via-[#988c44] to-[#d1bb48] text-white">
          <div className="max-w-5xl mx-auto space-y-3">
            <p className="text-sm text-white/80">
              <span className="underline">Topics</span> / Lingkungan
            </p>
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              Telusur Tanaman Obat Alas Mertajati
            </h1>
            <div className="text-sm text-white/90 flex flex-wrap items-center gap-4 mt-2">
              <span>By KKN Mekar Banjar </span>
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
        
        <div className="text-sm md:text-base leading-relaxed pb-6 text-justify space-y-4">
            <p className="indent-8">
            Di kawasan pegunungan Bali Utara yang sejuk dan lembap, terdapat hutan alami bernama Alas Mertajati yang kaya akan keanekaragaman hayati. Terletak di wilayah Catur Desa — yaitu Munduk, Gobleg, Gesing, dan Umejero — kawasan ini dikenal sebagai daerah yang masih menjaga kearifan lokal serta kelestarian lingkungan. Alas Mertajati menjadi habitat berbagai jenis flora liar yang tumbuh secara alami di bawah kanopi hutan, termasuk banyak tanaman obat yang memiliki potensi sebagai sumber bahan alami untuk pengobatan dan kesehatan. Keberagaman tanaman tersebut menjadi salah satu kekayaan alam yang patut diperhatikan dalam upaya pelestarian sumber daya hayati. 
            </p>
            
        </div>
        <ol className="mx-5 list-decimal font-semibold">
            <li><span className="font-semibold">Lateng  </span></li>
    {/* Image & Quote */}
            <div className="max-w-fit mx-auto mt-6 px-4 md:px-0">
            <div className="relative rounded-lg shadow-lg overflow-hidden">
                <img src={lateng} alt="Lateng" className="w-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center">
            Sumber: Dokumentasi Penulis
            </p>
            </div>
              <p className="font-normal indent-8 text-justify pt-4 ">
              Daun Lateng atau Jelatang (<i>Urtica dioica</i>) merupakan tumbuhan liar yang dikenal luas sebagai "daun gatal" karena bulu halus pada permukaannya dapat menimbulkan rasa gatal, kemerahan, dan sensasi seperti tersengat saat bersentuhan dengan kulit. Tanaman ini sering ditemukan di daerah lembap seperti kawasan Alas Mertajati. Meski dihindari karena efek iritasinya, daun lateng sebenarnya menyimpan berbagai manfaat kesehatan berkat kandungan senyawa aktifnya seperti polisakarida, vitamin C, karoten, flavonoid, serta sifat antibakteri dan antijamur. 

              </p>
              <p className="font-normal indent-8 text-justify  pb-4">
              Dalam pengobatan tradisional, daun jelatang biasanya diolah terlebih dahulu—dilayukan dengan pemanasan atau direbus—untuk menghilangkan efek gatal sebelum digunakan. Daun yang sudah diolah ini sering ditempelkan pada area pegal, nyeri otot, atau gejala masuk angin karena dipercaya memberikan efek hangat dan melancarkan peredaran darah. Selain itu, ekstraknya dapat dijadikan krim topikal untuk mengatasi masalah kulit seperti eksim, bisul, atau peradangan, serta dikonsumsi sebagai teh herbal yang bermanfaat sebagai antiinflamasi, penstabil gula darah, dan sumber antioksidan.
              </p>
              
              
            <li><span className="font-semibold">Ceplokan  </span></li>
    {/* Image & Quote */}
            <div className="max-w-fit mx-auto mt-6 px-4 md:px-0">
            <div className="relative rounded-lg shadow-lg overflow-hidden">
                <img src={ciplokan} alt="Ceplokan" className="w-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center">
            Sumber: google
            </p>
            </div>
              <p className="font-normal indent-8 text-justify pt-4 ">
              Ceplokan (<i>Physalis angulata L.</i>) adalah tanaman herbal liar yang berasal dari Amerika namun kini tersebar luas di daerah tropis. Tanaman ini mudah dikenali dari buah kecilnya yang terbungkus kelopak tipis menyerupai lentera, berwarna hijau saat muda dan kuning-oranye saat matang. Secara fisik, ciplukan memiliki batang bersegi tajam dan berongga dengan cabang menggarpu, daun berbentuk bulat telur hingga lanset yang tepinya bergerigi, serta akar tunggang dan serabut berwarna putih. Tanaman ini tumbuh liar di lahan terbuka, semak belukar, pinggiran hutan, dan dapat ditemukan dari dataran rendah hingga ketinggian 1.500 mdpl.
              </p>
              <p className="font-normal indent-8 text-justify  pb-4">
              Ceplokan telah menarik perhatian peneliti karena kandungan senyawa aktifnya seperti withanolida, flavonoid, dan antioksidan yang memberikan berbagai manfaat kesehatan. Tanaman ini diketahui memiliki sifat antidiabetik, antiinflamasi, antihipertensi, bahkan potensi sebagai antikanker. Buah matangnya bisa dikonsumsi langsung sebagai camilan sehat, sementara daun dan akarnya sering direbus untuk diambil airnya guna membantu menurunkan gula darah, meredakan peradangan, atau mengatasi demam. Meski terlihat sederhana, ciplukan menyimpan potensi besar sebagai bahan fitofarmaka di masa depan, meski penggunaannya tetap harus memperhatikan takaran yang tepat.
              </p>
              
              
            <li><span className="font-semibold">Lempuyak  </span></li>
    {/* Image & Quote */}
            <div className="max-w-fit mx-auto mt-6 px-4 md:px-0">
            <div className="relative rounded-lg shadow-lg overflow-hidden">
                <img src={lempuyak} alt="Lempuyak" className="w-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center">
            Sumber: google
            </p>
            </div>
              <p className="font-normal indent-8 text-justify pt-4 ">
              Lempuyak (<i>Lantana camara</i>), juga dikenal sebagai tembelekan atau bunga pagar, adalah tanaman semak tahunan dari famili Verbenaceae yang berasal dari Amerika Tropis. Tanaman ini tumbuh setinggi 0,5–4 meter, dengan batang berkayu (kadang berduri) dan daun tunggal berbentuk bulat telur bertepi bergerigi serta permukaan kasar. Lempuyak mudah dikenali dari bunga kecilnya yang berwarna cerah (merah, kuning, oranye) dan beraroma harum tajam. Buahnya bulat kecil, berwarna hitam mengilap saat matang. Tanaman ini tumbuh liar di dataran rendah hingga ketinggian 1.700 mdpl, sering ditemukan di ladang, sempadan jalan, atau hutan, karena sangat adaptif dan tahan kekeringan.
              </p>
              <p className="font-normal indent-8 text-justify  pb-4">
              Meski dianggap gulma, lempuyak memiliki manfaat farmakologis. Daunnya mengandung senyawa lantadene A dan B yang bersifat antibakteri, antiinflamasi, dan insektisida alami. Dalam pengobatan tradisional, daun yang ditumbuk digunakan sebagai obat luar untuk gatal-gatal, luka bernanah, dan infeksi kulit ringan. Namun, tanaman ini juga beracun jika dikonsumsi berlebihan, terutama buah dan daunnya. Oleh karena itu, pemanfaatannya sebaiknya hanya untuk penggunaan luar dengan tetap memperhatikan kehati-hatian.
              </p>
          </ol>

        <div className="text-sm md:text-base leading-relaxed pb-6 text-justify space-y-4">
            <p className="indent-8">
            Selain ketiga tanaman di atas, masyarakat sekitar Alas Mertajati juga mengenal sejumlah tumbuhan lain yang memiliki fungsi pengobatan, yaitu:
            </p>
            <ol className="mx-10 list-disc space-y-2">
            <li>
                <span className="font-normal">
                <b>Pamor</b>, digunakan bersama daun sirih untuk kegiatan menginang, juga memiliki sifat antiseptik dan pelindung rongga mulut.
                </span>
            </li>
            <li>
                <span className="font-normal">
                <b>Base-base</b>, tanaman yang menyerupai sirih dan bermanfaat untuk mengatasi infeksi saluran pernapasan atau mulut.
                </span>
            </li>
            <li>
                <span className="font-normal">
                <b>Dengencel</b>, digunakan secara lokal sebagai obat merah untuk luka luar.
                </span>
            </li>
            <li>
                <span className="font-normal">
                <b>Ke yehyeh</b>, dimanfaatkan untuk meredakan panas dalam dan sariawan.
                </span>
            </li>
            <li>
                <span className="font-normal">
                <b>Kangkang yuyu</b>, tanaman lokal yang dapat digunakan secara tradisional untuk mengobati sakit telinga.
                </span>
            </li>
            </ol>

            <p className="indent-8">
            Alas Mertajati bukan sekadar hutan, tetapi sebuah ruang hidup dan pengetahuan yang menyatu dengan kehidupan masyarakat adat di sekitarnya. Tanaman-tanaman liar yang tumbuh di dalamnya menyimpan kekayaan potensi farmakologi yang belum seluruhnya dieksplorasi secara ilmiah. Melindungi kawasan ini berarti turut menjaga warisan hayati dan kearifan lokal yang berharga, yang dapat memberikan kontribusi nyata bagi kesehatan masyarakat dan pengembangan obat berbasis alam di masa depan.
            </p>

            
        </div>

        </div>
       

        
        
      </div>
      <Discover />
      <Footer />
    </div>
  );
}
