"use client"
import React, { useState } from 'react';
import PageTransition from "@/Components/PageTransition";
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import "@/Components/style.css";
type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>
export default function Page (props: IndexPageProps, ref: IndexPageRef){
  const [formData, setFormData] = useState({
    tanggal: '',
    persembahan: '',
  kebaktian:''
  });
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('https://gpdi.nlc.dchost.online/api/report/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Reset the form data
      setFormData({
        tanggal: '',
        persembahan: '',
        kebaktian: ''
      });
      toast.success("Successfully submitted form!");
   }
   
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
    return(
    <body>
         <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
         <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Persembahan</h1>
         </div>
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
  <div className="relative z-0 w-full mb-5 group">
      <input type="date"  name="tanggal"   value={formData.tanggal}  onChange={handleInputChange}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tanggal</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="number"  name="persembahan"  value={formData.persembahan}  onChange={handleInputChange}   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Total Persembahan</label>
     
  </div>
  <div className="relative z-0 w-full mb-5 group">
  <select id="underline_select" name="kebaktian" value={formData.kebaktian}  onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
    <option selected>Pilih Kebatian </option>
    <option value="pagi">Pagi</option>
    <option value="malam">malam</option>
    
</select>
  </div>
  
  
  <button type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
</body>
    )
}