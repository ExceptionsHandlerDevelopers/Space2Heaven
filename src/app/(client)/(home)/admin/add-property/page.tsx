// src/components/PropertyForm.tsx
import React, { useState } from 'react';

interface PropertyFormValues {
  title: string;
  images: string[];
  bedrooms: number;
  bathrooms?: number;
  description: string;
  price: number;
  location: string;
  street?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  propertyType: string;
  serviceType: 'buy' | 'sell' | 'rent';
  status: 'available' | 'sold' | 'pending';
  dimensions: string;
  area: string;
  yearBuilt: number;
  features: string[];
}

const PropertyForm: React.FC = () => {
  const [formData, setFormData] = useState<PropertyFormValues>({
    title: '',
    images: [],
    bedrooms: 1,
    bathrooms: undefined,
    description: '',
    price: 0,
    location: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    propertyType: '',
    serviceType: 'buy',
    status: 'available',
    dimensions: '',
    area: '',
    yearBuilt: new Date().getFullYear(),
    features: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submit form data to your API endpoint
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Property</h2>
      
      {/* Title */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Images */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Images (comma separated URLs)</label>
        <input
          type="text"
          name="images"
          value={formData.images.join(', ')}
          onChange={(e) => setFormData({ ...formData, images: e.target.value.split(',') })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Rooms */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
        <input
          type="number"
          name="bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
          required
          min={1}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Bathrooms</label>
        <input
          type="number"
          name="bathrooms"
          value={formData.bathrooms || ''}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Price */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Location */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Address */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Street</label>
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">State</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Postal Code</label>
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Property Type */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Property Type</label>
        <input
          type="text"
          name="propertyType"
          value={formData.propertyType}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Service Type */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Service Type</label>
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
          <option value="rent">Rent</option>
        </select>
      </div>

      {/* Status */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="available">Available</option>
          <option value="sold">Sold</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      {/* Dimensions */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Dimensions</label>
        <input
          type="text"
          name="dimensions"
          value={formData.dimensions}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Area */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Area</label>
        <input
          type="text"
          name="area"
          value={formData.area}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Year Built */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Year Built</label>
        <input
          type="number"
          name="yearBuilt"
          value={formData.yearBuilt}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Features */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Features (comma separated)</label>
        <input
          type="text"
          name="features"
          value={formData.features.join(', ')}
          onChange={(e) => setFormData({ ...formData, features: e.target.value.split(',') })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Add Property
      </button>
    </form>
  );
};

export default PropertyForm;
