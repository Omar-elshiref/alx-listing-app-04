import { PropertyProps } from "@/interfaces/index";
import Image from "next/image";
import BookingSection from "./BookingSection";
import Button from "../common/Button";
// import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto p-6">
      {/* top Section */}
      <div className="flex justify-between items-center">
   <div>
       <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-3 mt-2 text-sm text-gray-500">
        <span className="flex items-center gap-2">{<Image src="/assets/Star2.svg" alt="Star" width={20} height={20} />} {property.rating}</span>
        <span>( 345 reviews )</span>
        <span className="flex items-center gap-1">{<Image src="/assets/Map Point.svg" alt="Location" width={20} height={20} />} {property.address.state}, {property.address.city}, {property.address.country}</span>
        <span className="flex items-center gap-1">{<Image src="/assets/profile 1.svg" alt="profile" width={20} height={20} />} Mainstream</span>
      </div>
   </div>
      <div className="flex items-center gap-2">
        <Button icon="/assets/Heart.svg" text="Save" className="flex items-center justify-center gap-2 py-1.5 px-3 rounded-full  bg-white text-black cursor-pointer border border-gray-300 font-semibold text-sm" onClick={() => {}} />
        <Button icon="/assets/Share.svg" text="Share" className="flex items-center justify-center gap-2 py-1.5 px-3 rounded-full  bg-white text-black cursor-pointer border border-gray-300 font-semibold text-sm" onClick={() => {}} />
      </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-4">
        <Image src={property.image[0]} alt={property.name} className="col-span-2 row-span-2 w-full h-full   rounded-lg" width={400} height={400} />
        <Image src={property.image[1]} alt={property.name} className="col-span-2 row-span-1 w-full   rounded-lg" width={400} height={300} />
        <Image src={property.image[2]} alt={property.name} className="col-span-1 row-span-1 w-full   rounded-lg" width={400} height={400} />
        <Image src={property.image[3]} alt={property.name} className="col-span-1 row-span-1 w-full   rounded-lg" width={400} height={400} />
        {/* Add more images */}
      </div>

      <div className="flex justify-between items-center gap-8 mb-4">
        <div className="flex justify-between gap-5 items-center text-nowrap ">
                 <span className="flex items-center gap-1.5 text-black text-md border border-gray-300 rounded-full px-4 py-2">
                  <Image
                    src="/assets/bed 1.svg"
                    alt="Bed Icon"
                    width={20}
                    height={20}
                  />
                  {property.offers.bed}
                </span>
                <span className="flex items-center gap-1 text-black text-md border border-gray-300 rounded-full px-4 py-2">
                  <Image
                    src="/assets/bathtub 1.svg"
                    alt="bathtub Icon"
                    width={20}
                    height={20}
                  /> 
                  {property.offers.shower}
                </span>
                <span className="flex items-center gap-1 text-black text-md border border-gray-300 rounded-full px-4 py-2">
                  <Image
                    src="/assets/people 1.svg"
                    alt="people"
                    width={20}
                    height={20}
                  /> 
                  {property.offers.occupants}
                </span>
               </div>
      </div>

      {/* Description */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p>{property.description}</p>
      </div>

      {/* Amenities */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">What this place offers</h2>
        <ul className="flex flex-wrap space-x-4">
          {property.category.map((amenity, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded-md">
              {amenity}
            </li>
          ))}
        </ul>
      </div>
      <BookingSection price={property.price}/>
    </div>
  );
};

export default PropertyDetail;