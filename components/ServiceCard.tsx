import React from 'react';
import { Play, BookOpen, User, Star, Dot } from 'lucide-react';

type Course = {
  id: number;
  title: string;
  instructor: string;
  role: string;
  price: string;
  reviews: string;
  hours: string;
  lessons: string;
  level: string;
  image: string;
};

const courses: Course[] = [
  {
    id: 1,
    title: "Mastering Digital Marketing",
    instructor: "Sarah Mitchell",
    role: "Digital Marketing Expert",
    price: "$49",
    reviews: "1,250",
    hours: "5 Hours",
    lessons: "40+ Lessons",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 2,
    title: "Full-Stack Web Development Bootcamp",
    instructor: "James Parker",
    role: "Senior Software Engineer",
    price: "$89",
    reviews: "2,800",
    hours: "18 Hours",
    lessons: "90+ Lessons",
    level: "Beginner to Advanced",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 3,
    title: "UI/UX Design Essentials with Figma",
    instructor: "Lina Gomez",
    role: "Creative Director",
    price: "$59",
    reviews: "900",
    hours: "6 Hours",
    lessons: "25+ Lessons",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=500",
  },

];

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <div className="bg-white rounded-lg p-[6px] overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full rounded-lg object-cover"
        />
        
        {/* Overlays */}
        <div className="absolute top-4 left-4 flex gap-2">
           <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white px-3 py-1.5 rounded-xl text-xs font-semibold">
              <div className="bg-blue-600 rounded-full p-1">
                <Play size={10} fill="currentColor" />
              </div>
              {course.hours}
           </div>
        </div>

        <div className="absolute top-4 right-4">
           <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white px-3 py-1.5 rounded-xl text-xs font-semibold">
              <div className="bg-orange-700/80 rounded-full p-1">
                <BookOpen size={10} />
              </div>
              {course.lessons}
           </div>
        </div>

        {/* Level Badge */}
        <div className="absolute -bottom-1 left-4">
          <div className="bg-white px-6 py-2 rounded-t-xl shadow-sm border-x border-t border-gray-100">
             <span className="text-[13px] font-bold text-[#0A1D56]">{course.level}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-6 px-5 pt-8 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#0A1D56] leading-tight mb-4">
          {course.title}
        </h3>

        {/* Instructor */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#0A1D56] flex items-center justify-center text-white">
            <User size={20} />
          </div>
          <div>
            <p className="text-sm font-bold text-[#0A1D56]">{course.instructor}</p>
            <p className="text-xs text-gray-500">{course.role}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default function ServiceCard() {
  return (
    <div className="min-h-screen bg-gray-50/30 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-[#0A1D56] font-bold text-sm mb-3">
              <div className="bg-[#0A1D56] rounded-full p-0.5">
                <Dot size={16} strokeWidth={4} className="text-white" />
              </div>
              <span className="uppercase tracking-wider">Featured Courses</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-medium text-slate-900">
              Top Courses Loved by Learners
            </h1>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-4 max-w-sm">
            <p className="text-slate-600 text-md md:text-right leading-relaxed">
              These are the most popular, highly rated, and career-boosting courses trusted by thousands of students worldwide.
            </p>
            <button className="bg-[#2541B2] hover:bg-[#1e3591] text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-blue-500/20">
              Contact US
            </button>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

      </div>
    </div>
  );
}
