import Marquee from "../components/Marquee";
import { certifications } from "../constants";

const topRow = certifications.slice(0, Math.ceil(certifications.length / 2));
const bottomRow = certifications.slice(Math.ceil(certifications.length / 2));

export default function Certificate() {
  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading">My Certificates</h2>
      <div className="relative w-full mt-12 overflow-hidden space-y-6">
        {/* Baris atas - ke kiri */}
        <Marquee pauseOnHover className="[--duration:15s]">
          {topRow.map((cert, index) => (
            <div
              key={index}
              className="relative w-64 h-40 overflow-hidden rounded-xl shadow-lg mx-4 cursor-pointer"
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/70 p-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-semibold text-white line-clamp-2">
                  {cert.title}
                </p>
              </div>
            </div>
          ))}
        </Marquee>

        {/* Baris bawah - ke kanan */}
        <Marquee reverse pauseOnHover className="[--duration:15s]">
          {bottomRow.map((cert, index) => (
            <div
              key={index}
              className="relative w-64 h-40 overflow-hidden rounded-xl shadow-lg mx-4 cursor-pointer"
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/70 p-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-semibold text-white line-clamp-2">
                  {cert.title}
                </p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
