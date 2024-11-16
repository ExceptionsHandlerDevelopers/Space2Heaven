import { Schema, model, models } from "mongoose";

const PropertySchema = new Schema({
    title: { type: String, required: true },
    images: { type: [String], required: true }, 
    price: { type: String, required: true },
    propertyType: { type: String, required: true },
    rooms: {
        bedrooms: { type: Number, required: true },
        bathrooms: { type: Number, required: true },
    },
    description: { type: String, required: true },
    location: { type: String, required: true },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        postalCode: { type: String },
    },
    serviceType: { type: String, required: true, enum: ['buy', 'sell', 'rent'] },
    status: { type: String, required: true, enum: ['available', 'sold', 'pending'], default: 'available' }, 
    dimensions: { type: String, required: true },
    area: { type: String, required: true },
    yearBuilt: { type: Number, required: true },
    features: { type: [String] },
},
    { timestamps: true }
);

const PropertyModel = models.property_db || model("property_db", PropertySchema)

export default PropertyModel