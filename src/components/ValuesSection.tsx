import { TValeurs } from "../data/data";

export default function ValuesSection({ title, description, icon }: TValeurs) {
  return (
    <div className="flex flex-col items-center text-center bg-white w-[320px] rounded-2xl shadow-md p-8 hover:shadow-xl hover:scale-105 transition-transform duration-300 border border-rose-200">
      <div className="p-5 mb-6 rounded-full shadow-inner bg-gradient-to-br from-rose-100 to-rose-200">
        {icon}
      </div>

      <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-800">
        {title}
      </h3>

      <p className="text-base leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  );
}
