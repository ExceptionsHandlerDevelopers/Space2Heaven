"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { CustomerDataTypes } from "@/types";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const Customers = () => {
  const { toast } = useToast()
  const [customerData, setCustomerData] = useState<CustomerDataTypes[]>();

  useEffect(() => {
    const fetchCustomers = async () => {
      const token = Cookies.get("admin_cookie_token"); // Get token from cookies
      console.log("Token : ", token);
      
      if (!token) {
        toast({
          description: "Session expired. Please log in again."
        });
        return; // Exit if no token is found
      }

      try {
        // Make the request with the token as Authorization header
        const response = await axios.get<CustomerDataTypes[]>("/api/admin/customers", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Response : ", response);
        
        setCustomerData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast({
          description: "Failed to fetch customer data."
        });
      }
    };

    fetchCustomers();
  }, []); // Fetch customers on mount


  // If no customer data is available, show loading
  if (!customerData) {
    return (
      <section className="min-h-screen py-24 px-4 bg-sand-soft flex items-center flex-col bg-[url(/images/pattern.png)]">
        <div className="w-full max-w-5xl bg-white p-4 rounded-lg shadow-lg">

        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-24 px-4 bg-sand-soft flex items-center flex-col bg-[url(/images/pattern.png)]">
      <div className="w-full max-w-5xl bg-white p-4 rounded-lg shadow-lg">
        <Table>
          <TableCaption>List of Customers</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">S.No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Service Type</TableHead>
              <TableHead className="text-right">Contacted on</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customerData.map((customer, index) => (
              <TableRow key={customer._id}>
                <TableCell className="font-medium text-right">{index + 1}</TableCell>
                <TableCell className="font-medium">{customer.name}</TableCell>
                <TableCell>{customer.contact}</TableCell>
                <TableCell>{customer.serviceType}</TableCell>
                <TableCell className="text-right">
                  {customer.createdAt ? (
                    new Date(customer.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  ) : "N/A"
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default Customers;
