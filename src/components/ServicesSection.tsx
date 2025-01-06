import { Tservices } from '../data/data'

export default function ServicesSection({title,description ,points} :Tservices) {
  return (
    <div
    key={title}
    className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 p-8 flex flex-col"
  >
    {/* Service Title */}
    <h3 className="text-2xl font-bold text-rose-500 mb-4">
      {title}
    </h3>

    {/* Service Description */}
    <p className="text-gray-600  font-semibold leading-relaxed mb-6">
      {description}
    </p>

    {points.length > 0 && (
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-gray-700 text-sm"
          >
            <span className="mt-1 text-rose-500">•</span>
            <span className="text-md">{point}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
)
  
}
