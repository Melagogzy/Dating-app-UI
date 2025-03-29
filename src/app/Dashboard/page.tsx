import Image from "next/image";

const users = [
  { name: "Davina", age: 23, location: "Abuja", match: "85%", status: "Verified Address", image: "/profile.jpg", bgImage: "/partners.jpg" },
  { name: "Emily", age: 23, location: "Lagos", match: "80%", status: "Verified Address", image: "/profile.jpg", bgImage: "/partners.jpg" },
  { name: "John", age: 26, location: "Delta", match: "70%", status: "Verified Address", image: "/profile.jpg", bgImage: "/partners.jpg" },
  { name: "Mada", age: 29, location: "Abuja", match: "77%", status: "Verified Address", image: "/profile.jpg", bgImage: "/partners.jpg" },
  { name: "Kevin", age: 31, location: "PH", match: "70%", status: "Verified Address", image: "/profile.jpg", bgImage: "/partners.jpg" },
  { name: "Lora", age: 26, location: "Lagos", match: "60%", status: "Verified Address", image: "/profile.jpg", bgImage: "/partners.jpg" },
];

export default function UserDashboard() {
  return (
    <div className="p-4 w-full mx-auto max-w-6xl">
   
    <div className="w-full bg-white shadow rounded-lg mb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 w-full">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Image 
            src="/profile.jpg" 
            alt="User Profile" 
            width={50} 
            height={50} 
            className="rounded-full"
            priority
          />
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-semibold truncate">Welcome, Temiloluwa</h2>
            <div className="text-sm text-gray-500">My Profile Completeness</div>
            <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
              <div className="w-1/2 h-2 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="w-full sm:w-auto sm:ml-auto sm:pl-4">
          <label className="text-sm font-medium block mb-1">Relationship Type:</label>
          <select className="w-full sm:w-40 border p-2 rounded text-sm">
            <option>Dating</option>
            <option>Friendship</option>
            <option>Networking</option>
          </select>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {users.map((user, index) => (
        <div key={index} className="bg-white p-3 rounded-lg shadow-md relative">
         
          <div
            className="relative h-32 sm:h-40 rounded-lg overflow-hidden bg-gray-100"
            style={{ 
              backgroundImage: `url(${user.bgImage})`, 
              backgroundSize: "cover", 
              backgroundPosition: "center" 
            }}
          />
          
          <div className="absolute bottom-[calc(100%-190px)] left-1/2 transform -translate-x-1/2">
            <Image
              src={user.image}
              alt={user.name}
              width={70}
              height={70}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>

          <div className="flex justify-between items-start mt-12 sm:mt-5 px-1">
            <div className="truncate mr-2">
              <h3 className="text-md sm:text-lg font-semibold truncate">{user.name}, {user.age}</h3>
              <p className="text-xs sm:text-sm text-gray-500 truncate">{user.location}</p>
            </div>
            <div className="text-right min-w-[70px]">
              <p className="text-xs sm:text-sm font-medium text-gray-700">{user.match}% Match</p>
              <p className="text-xs sm:text-sm text-blue-600 truncate">✅ {user.status}</p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 mt-2 px-1 line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eros mi.
          </p>

          <div className="flex justify-between items-center mt-3 px-1">
            <button className="bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full transition-colors">
              More Info
            </button>
            <button className="text-gray-500 hover:text-red-500 text-lg transition-colors">
              ♡
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}
