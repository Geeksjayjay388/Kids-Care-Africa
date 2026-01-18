// pages/Homepage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Home, Utensils, BookOpen, Users, Target, HeartHandshake, Globe } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

const Homepage = () => {
  // Hero background would be replaced with actual image
  const heroStyle = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const helpWays = [
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "One-Time Donation",
      description: "Make a direct impact today. Every dollar provides immediate relief.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Monthly Sponsor",
      description: "Become a sustaining member and change a child's life every month.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Project Funding",
      description: "Sponsor an entire project - build a well, school, or shelter.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Spread Awareness",
      description: "Share our mission. Follow, share, and tell others about our work.",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const projects = [
    {
      icon: <Droplet className="w-10 h-10" />,
      title: "Clean Water Initiative",
      description: "Building sustainable water catchment points and wells across rural communities.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      impact: "12,000+ people served"
    },
    {
      icon: <Home className="w-10 h-10" />,
      title: "Safe Shelter Program",
      description: "Constructing secure, weather-resistant homes for orphaned and vulnerable children.",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80",
      impact: "250+ shelters built"
    },
    {
      icon: <Utensils className="w-10 h-10" />,
      title: "Nutrition Security",
      description: "Providing daily nutritious meals and teaching sustainable farming practices.",
      image: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      impact: "45,000 meals monthly"
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Education for All",
      description: "Building schools, providing supplies, and training teachers for quality education.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      impact: "3,000+ children in school"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white" style={heroStyle}>
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Giving Hope to <span className="text-red-400">Africa's Children</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-200">
              Every child deserves clean water, safe shelter, nutritious food, and quality education. 
              Join us in making this a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/blog"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition duration-300 text-center"
              >
                Discover Our Stories
              </Link>
              <Link
                to="/donate"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition duration-300 text-center"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How <span className="text-red-600">You Can Help</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Your support takes many forms, and every contribution makes a lasting difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {helpWays.map((way, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`${way.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  {way.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{way.title}</h3>
                <p className="text-gray-600">{way.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/donate"
              className="inline-flex items-center bg-red-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition duration-300"
            >
              <HeartHandshake className="mr-2" />
              Choose Your Way to Help
            </Link>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-red-600">Impact Projects</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Transforming lives through sustainable solutions in communities across Africa
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                reverse={index % 2 === 1}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Together, We've Achieved
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">50+</div>
                  <div className="text-gray-600">Communities Reached</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">15k+</div>
                  <div className="text-gray-600">Children Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">250+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">5</div>
                  <div className="text-gray-600">African Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;