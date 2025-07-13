export default function Secondsec() {
  return (
    <section className="w-full bg-[#f4f4f4] text-black px-6 py-12 md:px-16">
      <h2 className="text-center text-lg md:text-xl italic mb-8">
        About <span className="font-bold">Masyarakat Adat Dalem Tamblingan</span>
      </h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Text/Video Placeholder */}
        <div className="bg-gray-300 h-64 flex items-center justify-center text-xl font-bold text-black">
          Text/Video
        </div>

        {/* Maps Placeholder */}
        <div className="bg-[#529da0] h-64 flex items-center justify-center relative">
          <div className="bg-black w-40 h-32 relative">
            <div className="bg-red-500 w-10 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md"></div>
            <span className="absolute top-2 left-1/2 -translate-x-1/2 text-white text-sm">
              Maps
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
