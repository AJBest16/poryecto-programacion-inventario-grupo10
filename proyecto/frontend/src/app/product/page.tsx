"use client";
import { useProductStore } from '@/store/product.store';
import React, { useState } from 'react'
import Principal from '@/module/principal';

export default function page() {
  const { setProduct } = useProductStore();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    unit: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      await setProduct(formData);
      setMessage('Producto creado con éxito');
      setFormData({ name: '', description: '', unit: '', location: '' });
    } catch {
      setMessage('Error al crear el producto');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Principal>
    <main className="min-h-screen flex items-center justify-center bg-amber-50 p-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-semibold text-gray-900">Registro De Productos</h2>

        <div>
          <label htmlFor="name" className="block text-gray-700 mb-1">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="text-gray-950 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-gray-700 mb-1">
            Descripcion
          </label>
          <input
            type="text"
            id="descriptiom"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="text-gray-950 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="unit" className="block text-gray-700 mb-1">
            Unit
          </label>
          <input
            type="text"
            id="unit"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            required
            className="text-gray-950 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
         <div>
          <label htmlFor="location" className="block text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="text-gray-950 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
          Registrarse
        </button>
      </form>
    </main>
    </Principal>
  );
}
