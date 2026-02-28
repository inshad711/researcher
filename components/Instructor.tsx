import React from 'react';
import { ArrowUpRight } from 'lucide-react';

// 1. Define the Interface for Instructor Props
interface Instructor {
  name: string;
  role: string;
  imageUrl: string;
}

// 2. Type the Component Props
const InstructorCard: React.FC<Instructor> = ({ name, role, imageUrl }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer bg-gray-100">
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        // Fixed TypeScript Error: Casting target to HTMLImageElement
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          const target = e.target as HTMLImageElement;
          target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end text-white">
        <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
          <h3 className="text-2xl font-bold mb-1 tracking-tight">{name}</h3>
          <p className="text-sm font-medium text-gray-300 tracking-wide uppercase">{role}</p>
        </div>
        
        {/* Circular Arrow Button */}
        <div className="relative overflow-hidden bg-white w-12 h-12 rounded-full flex items-center justify-center text-black ">
          <div className="fly-icon-target">
            <ArrowUpRight size={22} strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Instructor() {
  // 3. Apply the Instructor interface to the array
  const instructors: Instructor[] = [
    {
      name: "James Parker",
      role: "Full-Stack Developer",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Dr. Ravi Sharma",
      role: "Data Scientist & AI Researcher",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "John Mitchell",
      role: "Marketing Strategist & Coach",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className=" text-[#0a1024]">
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-18">
        
         {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10 space-y-4">
          {/* <div className="flex items-center text-[#0a1024] font-bold uppercase tracking-wider text-sm bg-indigo-50 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2" />
            Meet Our Instructors
          </div> */}
          
          <h2 className="text-3xl md:text-[38px] max-w-2xl mx-auto font-normal text-[#101010] leading-[42.2px] ">
            Learn from Industry-Leading Instructors
          </h2>
          
          <p className=" max-w-3xl font-sans">
            Our instructors aren’t just teachers — they’re experienced professionals, 
            creators, and leaders in their fields. At Educrave, you’ll be guided by 
            experts who bring real-world knowledge and proven strategies directly to your screen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {instructors.map((instructor, index) => (
            <div 
              key={instructor.name} // Using name as key is safer than index if name is unique
              className="opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_forwards]"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <InstructorCard {...instructor} />
            </div>
          ))}
        </div>
      </section>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes flyOutIn {
          0% { transform: translate(0, 0); opacity: 1; }
          45% { transform: translate(30px, -30px); opacity: 0; }
          50% { transform: translate(-30px, 30px); opacity: 0; }
          100% { transform: translate(0, 0); opacity: 1; }
        }

        .group:hover .fly-icon-target {
          animation: flyOutIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
}