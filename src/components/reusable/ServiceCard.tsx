interface ServiceCardProps {
  name: string;
  price: string;
  description: string;
<<<<<<< HEAD
  additionalText?: string;
}

export default function ServiceCard(props: ServiceCardProps) {
  return (
    <div className="max-w-[90vw] sm:max-w-md rounded-2xl shadow-xl p-6 bg-gradient-to-br from-rose-200 to-blue-200 break-words overflow-hidden">
      <h3 className="text-center text-xl font-semibold text-gray-800 mb-4 break-words">
        {props.name}
=======
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
>>>>>>> a419378 (Overall structure of page)
      </h3>

      <div className="flex items-center gap-2 mb-4">
        <hr className="flex-grow border-gray-500" />
<<<<<<< HEAD
        <span className="flex items-center text-fuchsia-600 font-bold text-4xl whitespace-nowrap overflow-hidden text-ellipsis">
          {props.price}
        </span>
        <hr className="flex-grow border-gray-500" />
      </div>

      <p className="text-sm text-gray-700 break-words whitespace-pre-line">
        {props.description}
      </p>
=======
        <span className="flex items-center text-fuchsia-600 font-bold text-4xl">
          {price}
        </span>
        <hr className="flex-grow border-gray-500" />
      </div>
      <p className="text-sm text-gray-700">{description}</p>
>>>>>>> a419378 (Overall structure of page)
    </div>
  );
}
