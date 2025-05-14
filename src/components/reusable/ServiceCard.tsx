interface ServiceCardProps {
  name: string;
  price: string;
  description: string;
}

export default function ServiceCard({
  name,
  price,
  description,
}: ServiceCardProps) {
  return (
    <div className="rounded-2xl shadow-md p-6 bg-gradient-to-br from-rose-200 to-blue-200">
      <h3 className="text-center text-xl font-semibold text-gray-800 mb-4">
        {name}
      </h3>

      <div className="flex items-center gap-2 mb-4">
        <hr className="flex-grow border-gray-500" />
        <span className="flex items-center text-fuchsia-600 font-bold text-4xl">
          {price}
        </span>
        <hr className="flex-grow border-gray-500" />
      </div>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
}
