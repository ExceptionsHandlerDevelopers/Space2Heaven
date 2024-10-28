import { Schema, model, models } from "mongoose";

const PropertySchema = new Schema({
    title: String,
    images: { type: [String], required: true }, // Array of image URLs
    price: { type: String, required: true }, // Price of the property
    propertyType: { type: String, required: true }, // e.g., "Villa", "Apartment"
    rooms: {
        bedrooms: { type: Number, required: true },
        bathrooms: { type: Number, required: true },
    },
    description: { type: String, required: true }, // Detailed description of the property
    location: { type: String, required: true }, // City or general location
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        postalCode: { type: String },
    },
    serviceType: { type: String, required: true, enum: ['buy', 'sell', 'rent'] }, // Type of service
    status: { type: String, required: true, enum: ['available', 'sold', 'pending'], default: 'available' }, // Status of listing
    dimensions: { type: String, required: true }, // e.g., "30x40"
    area: { type: String, required: true }, // Area of the property (e.g., "20,000 Sq. Ft")
    yearBuilt: { type: Number, required: true }, // Year the property was built
    features: { type: [String] }, // Array of features (e.g., ["Swimming Pool", "Garden"])
},
    { timestamps: true }
);

const PropertyModel = models.property_db || model("property_db", PropertySchema)

export default PropertyModel