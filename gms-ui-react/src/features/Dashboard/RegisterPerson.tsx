import { Card } from 'primereact/card';
import { InputText } from '../../components/InputText/InputText';
import { Button } from '../../components/Button/Button';
import { useState } from 'react';

export default function RegisterPersonCard({ onCancel }: { onCancel?: () => void }) {
  const [form, setForm] = useState({
    name: '',
    dateOfJoin: '',
    email: '',
    contact: '',
    plan: '',
    price: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#ECE9E9]">
      <Card className="w-full max-w-lg p-6">
        <div className="text-2xl font-bold text-[#332F64] mb-6 text-center">Become member</div>
        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">Name of Participant</label>
            <InputText
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border-2 border-[#332F64] focus:border-[#332F64] bg-white"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Date of Join</label>
            <InputText
              name="dateOfJoin"
              type="date"
              value={form.dateOfJoin}
              onChange={handleChange}
              className="w-full border-2 border-[#332F64] focus:border-[#332F64] bg-white"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Email Address</label>
            <InputText
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border-2 border-[#332F64] focus:border-[#332F64] bg-white"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Contact No.</label>
            <InputText
              name="contact"
              value={form.contact}
              onChange={handleChange}
              className="w-full border-2 border-[#332F64] focus:border-[#332F64] bg-white"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Plan</label>
            <InputText
              name="plan"
              value={form.plan}
              onChange={handleChange}
              className="w-full border-2 border-[#332F64] focus:border-[#332F64] bg-white"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Price</label>
            <InputText
              name="price"
              value={form.price}
              onChange={handleChange}
              className="w-full border-2 border-[#332F64] focus:border-[#332F64] bg-white"
            />
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-8">
          <Button
            label="Avail membership"
            className="rounded-full bg-[#1A1363] border-[#1A1363] text-white px-6"
            // onClick={...}
          />
          <Button
            label="Cancel"
            className="rounded-full bg-gray-400 border-gray-400 text-white px-6"
            onClick={onCancel}
          />
        </div>
      </Card>
    </div>
  );
}