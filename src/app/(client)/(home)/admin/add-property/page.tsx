// src/components/PropertyForm.tsx
"use client"

import { useToast } from '@/hooks/use-toast';
import { PropertyFormValues } from '@/types';
import axios from 'axios';
import React, { useState } from 'react';

const AddProperty: React.FC = () => {

  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<PropertyFormValues>({
    title: '',
    images: [],
    rooms: {
      bedrooms: 1,
      bathrooms: 1
    },
    description: '',
    price: 0,
    location: '',
    address: {
      street: '',
      city: '',
      state: '',
      postalCode: ''
    },
    propertyType: '',
    serviceType: 'buy',
    status: 'available',
    dimensions: '',
    area: '',
    yearBuilt: new Date().getFullYear(),
    features: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    const files = (e.target as HTMLInputElement).files;

    if (files && name === "images") {
      const selectedFiles = Array.from(files);
      if (selectedFiles.length > 10) {
        alert("You can only upload up to 10 files.");
        setFormData({ ...formData, [name]: selectedFiles.slice(0, 10) });
      } else {
        setFormData({ ...formData, [name]: selectedFiles });
      }
    } else {
      setFormData((prevData) => {
        // Check if the field is under `rooms`
        if (["bedrooms", "bathrooms"].includes(name)) {
          return {
            ...prevData,
            rooms: {
              ...prevData.rooms,
              [name]: value
            }
          };
        }

        // Check if the field is under `address`
        if (["street", "city", "state", "postalCode"].includes(name)) {
          return {
            ...prevData,
            address: {
              ...prevData.address,
              [name]: value
            }
          };
        }

        // For top-level fields
        return {
          ...prevData,
          [name]: value
        };
      });
    }
  };


  const handleFeaturesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const features = e.target.value.split(',').map(feature => feature.trim());
    setFormData({ ...formData, features });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData();

    // Append simple form fields
    Object.keys(formData).forEach(key => {
      if (key !== "images" && key !== "rooms" && key !== "address" && key !== "features") {
        form.append(key, formData[key as keyof PropertyFormValues] as any);
      }
    });

    // Append nested objects
    Object.keys(formData.rooms).forEach(roomKey => {
      form.append(`rooms[${roomKey}]`, formData.rooms[roomKey as keyof typeof formData.rooms].toString());
    });

    Object.keys(formData.address).forEach(addressKey => {
      const addressValue = formData.address[addressKey as keyof typeof formData.address];
      if (addressValue !== undefined) {
        form.append(`address[${addressKey}]`, addressValue.toString());
      }
    });

    form.append("features", formData.features.join(", "));

    // Append images (files)
    formData.images.forEach((file: File) => {
      form.append("images", file);
    });

    try {
      setLoading(true);
      const response = await axios.post("/api/admin/add-property", form, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      toast({
        description: response?.data?.msg
      });
    } catch (error: any) {
      console.log("Error : ", error);
      const errorMessage = error?.response?.data?.error || error?.message || "An error occurred. Unable to add property";
      toast({
        description: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex-center py-24 px-4 bg-gray-100 flex-col gap-4 w-full">
      <form
        onSubmit={handleSubmit}
        className="w-full lg:max-w-4xl xl:max-w-5xl bg-white p-6 lg:p-8 rounded-lg shadow-md space-y-6 flex-center flex-col"
      >
        <h1 className="text-burgundy font-semibold text-xl text-center">Add Property</h1>
        <hr className="w-full h-1 bg-burgundy max-w-xl" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            {/* Title */}
            <div className="col-span-full">
              <label className="block font-medium mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="input-class w-full"
                placeholder="Name of property..."
              />
            </div>

            {/* Images */}
            <div className="col-span-full">
              <label className="block font-medium mb-1">Images (up to 10, max 500 KB each)</label>
              <input
                type="file"
                name="images"
                multiple
                onChange={handleChange}
                className="input-class w-full"
              />
            </div>

          {/* Description */}
          <div className="col-span-full">
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="input-class w-full"
              placeholder="Type description..."
            />
          </div>

          {/* Bedrooms, Bathrooms, Price */}
          <div className="col-span-full flex flex-wrap gap-4">
            <div className="flex-1 min-w-[140px]">
              <label className="block font-medium mb-1">Bedrooms</label>
              <input
                type="number"
                name="bedrooms"
                value={formData.rooms.bedrooms}
                onChange={handleChange}
                required
                min={1}
                className="input-class w-full"
              />
            </div>
            <div className="flex-1 min-w-[140px]">
              <label className="block font-medium mb-1">Bathrooms</label>
              <input
                type="number"
                name="bathrooms"
                value={formData.rooms.bathrooms}
                onChange={handleChange}
                min={1}
                className="input-class w-full"
              />
            </div>
            <div className="flex-1 min-w-[140px]">
              <label className="block font-medium mb-1">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="input-class w-full"
              />
            </div>
          </div>

          {/* Location, Address Details */}
          <div className="col-span-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block font-medium mb-1">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="input-class w-full"
                placeholder="Mumbra"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Street</label>
              <input
                type="text"
                name="street"
                value={formData.address.street}
                onChange={handleChange}
                className="input-class w-full"
                placeholder="Street name"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formData.address.city}
                onChange={handleChange}
                className="input-class w-full"
                placeholder="Mumbai"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">State</label>
              <input
                type="text"
                name="state"
                value={formData.address.state}
                onChange={handleChange}
                className="input-class w-full"
                placeholder="Maharashtra"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={formData.address.postalCode}
                onChange={handleChange}
                className="input-class w-full"
                placeholder="547890"
              />
            </div>
          </div>

          {/* Property Type and Additional Info */}
          <div className="col-span-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block font-medium mb-1">Property Type</label>
              <input
                type="text"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                required
                className="input-class w-full"
                placeholder="Villa/Apartment..."
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Service Type</label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="input-class w-full"
              >
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
                <option value="rent">Rent</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Dimensions</label>
              <input
                type="text"
                name="dimensions"
                value={formData.dimensions}
                onChange={handleChange}
                required
                className="input-class w-full"
                placeholder="20x40 ft"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Area</label>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                required
                className="input-class w-full"
                placeholder="1000 sq.ft"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Year Built</label>
              <input
                type="number"
                name="yearBuilt"
                value={formData.yearBuilt}
                onChange={handleChange}
                required
                className="input-class w-full"
              />
            </div>
          </div>

          <div className="col-span-full grid grid-cols-1  md:grid-cols-3 gap-4">
            {/* Status */}
            <div>
              <label className="block font-medium mb-1">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
                className="input-class w-full"
              >
                <option value="available">Available</option>
                <option value="sold">Sold</option>
                <option value="pending">Pending</option>
              </select>
            </div>

            {/* Features */}
            <div className="col-span-2">
              <label className="block font-medium mb-1">Features (comma separated)</label>
              <input
                type="text"
                name="features"
                value={formData.features.join(', ')}
                onChange={handleFeaturesChange}
                className="input-class w-full"
                placeholder="Swimming Pool, Garden..."
              />
            </div>
          </div>
        </div>


        {/* Submit Button */}
        <button type="submit" className="btn-class w-full flex justify-center" disabled={loading}>
          {loading ? (<div className="w-6 h-6 loader-common-styles" />)
            : "Add Property"
          }
        </button>
      </form>
    </section>
  );
};

export default AddProperty;
