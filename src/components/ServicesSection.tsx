import { CheckCircle } from "lucide-react";
import { Tservices } from "../data/data";

export default function ServicesSection({ title, description, points }: Tservices) {
  return (
    <div
      key={title}
      className="flex flex-col p-8 transition-transform duration-300 transform bg-white shadow-lg rounded-2xl hover:scale-105 hover:shadow-2xl"
    >
      {/* Icon with Title */}
      <div className="flex items-center gap-3 mb-4">
        <CheckCircle className="text-rose-600" size={32} />
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      </div>

      {/* Description */}
      <p className="mb-6 leading-relaxed text-gray-600">
        {description}
      </p>

      {/* Points */}
      {points.length > 0 && (
        <ul className="space-y-4">
          {points.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-700"
            >
              <CheckCircle className="text-rose-500" size={20} />
              <span className="text-sm">{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
