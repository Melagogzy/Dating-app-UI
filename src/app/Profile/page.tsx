"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import { Pencil, Camera, Bike, UtensilsCrossed, Music, Plane, Paintbrush, BookOpen, Ruler, User, Briefcase, MapPin, Weight, Cross, Sun, CameraIcon, Heart, Globe, Star } from "lucide-react";

const PhotoUploader = () => {
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>(Array(4).fill(null));

  const handleUploadClick = useCallback((index: number) => {
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index]?.click();
    }
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
      {fileInputRefs.current.map((_, index) => (
        <button
          key={index}
          onClick={() => handleUploadClick(index)}
          className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-200 rounded-md flex flex-col items-center justify-center text-gray-600 font-semibold p-1 sm:p-2 hover:bg-gray-300 transition"
        >
          <span className="text-xs sm:text-sm mb-1">Add Photo</span>
          <Camera size={18} className="sm:w-6 sm:h-6" />
          <input
            type="file"ref={(el: HTMLInputElement | null) => {
              if (el) {
                fileInputRefs.current[index] = el;
              }
            }}
            className="hidden"
            accept="image/*"
            onChange={(e) => console.log(`Selected file: ${e.target.files?.[0]?.name}`)}
          />
        </button>
      ))}
    </div>
  );
};

export default function ProfileHeader() {
  return (
    <div className="relative w-full bg-white shadow rounded-lg overflow-hidden">
   
      <div className="relative h-32 sm:h-48 w-full bg-cover bg-center flex flex-col justify-end pb-4 sm:pb-6 px-4 sm:px-6" style={{ backgroundImage: 'url("/partners.jpg")' }}>
        <button className="absolute top-2 sm:top-4 left-2 sm:left-4 px-2 sm:px-4 py-1 sm:py-2 bg-gray-700 text-white text-xs sm:text-sm rounded">Back</button>
        <button className="absolute top-2 sm:top-4 right-2 sm:right-4 px-2 sm:px-4 py-1 sm:py-2 bg-gray-700 text-white text-xs sm:text-sm rounded">Update Cover</button>
      </div>

      <div className="relative flex flex-col sm:flex-row items-start sm:items-center px-4 sm:px-6 py-4 sm:py-6">
        <div className="absolute -top-12 sm:-top-16 left-4 sm:left-6 w-24 h-24 sm:w-32 sm:h-32 overflow-hidden rounded-full border-4 border-white shadow-md">
          <Image 
            src="/profile.jpg" 
            alt="Profile Picture" 
            width={128} 
            height={128} 
            className="w-full h-full object-cover rounded-full" 
          />
        </div>
        <div className="ml-28 sm:ml-40 flex-1 mb-4 sm:mb-0">
          <h2 className="text-xl sm:text-2xl font-semibold">Temiloluwa, 27</h2>
          <p className="text-gray-600 text-base sm:text-lg">Lagos</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
          <button className="bg-red-500 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-sm sm:text-base">Edit Profile</button>
          <button className="bg-red-500 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-sm sm:text-base">Edit Match Setup</button>
        </div>
      </div>

      <div className="px-4 sm:px-6 py-4 sm:py-6 w-full flex flex-col">
        <div className="bg-gray-100 p-3 sm:p-4 rounded-md w-full sm:w-1/2">
          <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
            A few words about myself <Pencil size={14} className="sm:w-4 sm:h-4" />
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4">
         
          <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-300 rounded-md overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Profile Placeholder"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>

          <PhotoUploader />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 pb-4 sm:pb-6">
        <div className="bg-white p-4 sm:p-6 shadow rounded-md">
          <h3 className="text-base sm:text-lg font-semibold mb-3">My Hobbies</h3>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="flex flex-col items-center justify-center bg-green-500 p-2 sm:p-3 w-14 h-14 sm:w-20 sm:h-20 rounded-full">
              <Bike size={20} className="sm:w-7 sm:h-7" color="white" />
              <span className="text-white text-[10px] sm:text-xs">Biking</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-yellow-500 p-2 sm:p-3 w-14 h-14 sm:w-20 sm:h-20 rounded-full">
              <UtensilsCrossed size={20} className="sm:w-7 sm:h-7" color="white" />
              <span className="text-white text-[10px] sm:text-xs">Cooking</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-purple-500 p-2 sm:p-3 w-14 h-14 sm:w-20 sm:h-20 rounded-full">
              <Music size={20} className="sm:w-7 sm:h-7" color="white" />
              <span className="text-white text-[10px] sm:text-xs">Dancing</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-blue-400 p-2 sm:p-3 w-14 h-14 sm:w-20 sm:h-20 rounded-full">
              <CameraIcon size={20} className="sm:w-7 sm:h-7" color="white" />
              <span className="text-white text-[10px] sm:text-xs">Museums & Arts</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 sm:p-6 shadow rounded-md">
          <h3 className="text-base sm:text-lg font-semibold mb-3">My Interests</h3>
          <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
            <div className="flex flex-col items-center justify-center bg-blue-700 p-2 sm:p-3 w-14 h-14 sm:w-20 sm:h-20 rounded-full">
              <Plane size={20} className="sm:w-7 sm:h-7" color="white" />
              <span className="text-white text-[10px] sm:text-xs">Travel</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-pink-500 p-2 sm:p-3 w-14 h-14 sm:w-20 sm:h-20 rounded-full">
              <Paintbrush size={20} className="sm:w-7 sm:h-7" color="white" />
              <span className="text-white text-[10px] sm:text-xs">Drawing</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-red-500 p-2 sm:p-3 w-14 h-14 sm:w-20 sm:h-20 rounded-full">
              <BookOpen size={20} className="sm:w-7 sm:h-7" color="white" />
              <span className="text-white text-[10px] sm:text-xs">History</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-green-500 p-2 sm:p-3 w-14 h-14 sm:w-20 sm:h-20 rounded-full">
              <Ruler size={20} className="sm:w-7 sm:h-7" color="white" />
              <span className="text-white text-[10px] sm:text-xs">Wood<br/>working</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-yellow-500 p-2 sm:p-3 w-14 h-14 sm:w-20 sm:h-20 rounded-full">
              <CameraIcon size={20} className="sm:w-7 sm:h-7" color="white" />
              <span className="text-white text-[10px] sm:text-xs">Photo<br/>graphy</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-teal-500 p-2 sm:p-3 w-14 h-14 sm:w-20 sm:h-20 rounded-full">
              <Sun size={20} className="sm:w-7 sm:h-7" color="white" />
              <span className="text-white text-[10px] sm:text-xs">Poetry</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-indigo-700 p-2 sm:p-3 w-14 h-14 sm:w-20 sm:h-20 rounded-full">
              <Star size={20} className="sm:w-7 sm:h-7" color="white" />
              <span className="text-white text-[10px] sm:text-xs">Knitting</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 sm:p-6 shadow-lg rounded-md w-full max-w-md">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">About Me</h3>
          <div className="space-y-1 sm:space-y-2">
            {[
              { icon: <User size={14} className="sm:w-4 sm:h-4 text-red-500" />, label: "Gender", value: "Male" },
              { icon: <Star size={14} className="sm:w-4 sm:h-4 text-blue-500" />, label: "Age", value: "27" },
              { icon: <Briefcase size={14} className="sm:w-4 sm:h-4 text-yellow-500" />, label: "Occupation", value: "Engineer" },
              { icon: <Heart size={14} className="sm:w-4 sm:h-4 text-green-500" />, label: "Relationship", value: "Single" },
              { icon: <MapPin size={14} className="sm:w-4 sm:h-4 text-purple-500" />, label: "Location", value: "Lagos" },
              { icon: <Ruler size={14} className="sm:w-4 sm:h-4 text-teal-500" />, label: "Height range", value: "5'5 - 6'0" },
              { icon: <Weight size={14} className="sm:w-4 sm:h-4 text-pink-500" />, label: "Weight range", value: "60 - 70kg" },
              { icon: <Cross size={14} className="sm:w-4 sm:h-4 text-indigo-500" />, label: "Religion", value: "Christianity" },
              { icon: <Globe size={14} className="sm:w-4 sm:h-4 text-orange-500" />, label: "Nationality", value: "Nigerian" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-1 sm:gap-2">
                {item.icon}
                <span className="w-24 sm:w-32 font-medium text-sm sm:text-base">{item.label}:</span>
                <span className="text-gray-700 text-sm sm:text-base">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}