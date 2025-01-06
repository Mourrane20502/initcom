import { TValeurs } from "../data/data";

export default function ValuesSection({ title, description, icon }: TValeurs) {
  return (
    <div className="flex flex-col items-center text-center bg-white w-[320px] rounded-2xl shadow-md p-8 hover:shadow-xl hover:scale-105 transition-transform duration-300 border border-gray-200">
      <div className="mb-6 p-5 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full shadow-inner">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-4 tracking-tight">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed text-base">
        {description}
      </p>
    </div>
  );
}
