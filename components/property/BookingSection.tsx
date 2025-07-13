import { useRouter } from 'next/router';

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const router = useRouter();

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${price}/night</h3>
      <div className="mt-4">
        <label>Check-in</label>
        <input type="date" className="border p-2 w-full mt-2" />
      </div>
      <div className="mt-4">
        <label>Check-out</label>
        <input type="date" className="border p-2 w-full mt-2" />
      </div>

      {/* Total payment */}
      <div className="mt-4">
      <button
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md cursor-pointer"
        onClick={() => {
          // Use Next.js router for client-side navigation
          router.push('/booking');
        }}
      >
        Reserve now
      </button>
    </div>
    </div>
  );
};

export default BookingSection;