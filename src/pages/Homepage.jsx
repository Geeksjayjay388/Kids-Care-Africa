// pages/Homepage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Home, Utensils, BookOpen, Users, Target, HeartHandshake, Globe, ArrowRight } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

const Homepage = () => {
  const helpWays = [
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "One-Time Donation",
      description: "Make a direct impact today. Every dollar provides immediate relief.",
      color: "bg-red-50 text-red-600",
      delay: "0"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Monthly Sponsor",
      description: "Become a sustaining member and change a child's life every month.",
      color: "bg-blue-50 text-blue-600",
      delay: "100"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Project Funding",
      description: "Sponsor an entire project - build a well, school, or shelter.",
      color: "bg-green-50 text-green-600",
      delay: "200"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Spread Awareness",
      description: "Share our mission. Follow, share, and tell others about our work.",
      color: "bg-purple-50 text-purple-600",
      delay: "300"
    }
  ];

  const projects = [
    {
      icon: <Droplet className="w-10 h-10" />,
      title: "Clean Water Initiative",
      description: "Building sustainable water catchment points and wells across rural communities.",
      image: "https://imgs.search.brave.com/ztcMISWkRLlgSlpoO6DXQ6bX9juNqeEcfvtOekR7KKA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzY3/YWVmZmViOTAwMmE0/MjZmMTUwY2EyMS82/NjdhNGJjMC03ZjI0/LTQzM2YtOGEyNi04/ZGJjMTFlMWY4YjUv/MDI0SW1wYWN0V2F0/ZXJJSS5qcGc",
      impact: "12,000+ people served",
      category: "Water"
    },
    {
      icon: <Home className="w-10 h-10" />,
      title: "Safe Shelter Program",
      description: "Constructing secure, weather-resistant homes for orphaned and vulnerable children.",
      image: "https://imgs.search.brave.com/Bvtj0bkePA6c1UcQa5aVlYWzm8FdYrK5f0kO_3_qSns/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYWRzdHRjLmNv/bS9tZWRpYS9pbWFn/ZXMvNjZmZC84ZGY0/LzQwMDMvMTgzZC9h/OGQ0LzhhOTEvbWVk/aXVtX2pwZy9yZWZ1/Z2lvcy1kZS1lc3Bl/cmFuY2EtMTAtY2Vu/dHJvcy1kZS1hY29s/aGltZW50by1wYXJh/LWNyaWFuY2FzLWVt/LXNpdHVhY2FvLWRl/LXZ1bG5lcmFiaWxp/ZGFkZS1hby1yZWRv/ci1kby1tdW5kb184/LmpwZz8xNzI3ODky/OTk5",
      impact: "250+ shelters built",
      category: "Shelter"
    },
    {
      icon: <Utensils className="w-10 h-10" />,
      title: "Nutrition Security",
      description: "Providing daily nutritious meals and teaching sustainable farming practices.",
      image: "https://imgs.search.brave.com/PVOgfYw3hBrgBiq-hjeqVSSRoNsgCHKwmHk-ZfZ1ZK8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cmV1dGVycy5jb20v/cmVzaXplci92Mi9J/REI1RkpNUFJWT1ZQ/SUI0UUMySERJQ0pZ/SS5qcGc_YXV0aD01/ZjM5NTY3MTlmM2Q4/NDllY2VjNDBhYzI3/YTE5YzY1NTc4OTc5/OWIwNWNiNWZjYzIw/NWIxOThjNzZlYzNm/MzViJndpZHRoPTEy/MDAmcXVhbGl0eT04/MA",
      impact: "45,000 meals monthly",
      category: "Food"
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Education for All",
      description: "Building schools, providing supplies, and training teachers for quality education.",
      image: "https://imgs.search.brave.com/8uXmAwusjMU4zJgiywAi1bpiabCjGCI9wLimX36iUOw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hZnJp/Y2FuLXNjaG9vbC1j/aGlsZHJlbi0zODI3/MzI2Ny5qcGc",
      impact: "3,000+ children in school",
      category: "Education"
    }
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
            alt="African children smiling"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left pt-20 h-full flex items-center">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 text-sm font-medium mb-6 tracking-wider uppercase animate-fade-in-up">
              Non-Profit Organization
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in-up delay-100">
              Giving Hope to <br />
              <span className="text-red-500 relative inline-block">
                Africa's Children
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-red-500 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed animate-fade-in-up delay-200">
              Every child deserves clean water, safe shelter, nutritious food, and quality education.
              We are dedicated to breaking the cycle of poverty and empowering the next generation
              of leaders. Join our community of changemakers and help us build a brighter future,
              one village at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start animate-fade-in-up delay-300">
              <Link
                to="/donate"
                className="bg-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition duration-300 shadow-lg hover:shadow-red-600/40 hover:-translate-y-1"
              >
                Donate Now
              </Link>
              <Link
                to="/blog"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition duration-300 flex items-center justify-center group"
              >
                Our Impact
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help Section - Typography Driven */}
      <section className="py-32 bg-white text-gray-900 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Section Title */}
            <div className="lg:col-span-4">
              <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4 block">Get Involved</span>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-none mb-8">
                Be a<br />Force for<br /><span className="text-red-600">Good.</span>
              </h2>
              <div className="w-20 h-1.5 bg-gray-900 mb-8"></div>
              <p className="text-xl text-gray-500 leading-relaxed">
                Change doesn't happen by chance. It happens by choice. Choose how you want to make a difference today.
              </p>
            </div>

            {/* Steps / Typography Grid */}
            <div className="lg:col-span-8 space-y-12">

              {/* Item 01 */}
              <div className="group border-t border-gray-200 pt-12 hover:border-red-600 transition-colors duration-500 cursor-pointer">
                <div className="flex flex-col md:flex-row gap-8 md:items-start">
                  <span className="text-6xl md:text-8xl font-black text-gray-100 group-hover:text-red-50 transition-colors duration-500 leading-none">01</span>
                  <div className="pt-2">
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-red-600 transition-colors">Become a Monthly Sponsor</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-xl">
                      Join our community of sustainers. A small monthly gift provides reliable support for long-term projects and emergency relief.
                    </p>
                    <Link to="/donate" className="inline-flex items-center text-sm font-bold uppercase tracking-wide hover:text-red-600 transition-colors border-b-2 border-transparent hover:border-red-600 pb-0.5">
                      Start Monthly Giving <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Item 02 */}
              <div className="group border-t border-gray-200 pt-12 hover:border-blue-600 transition-colors duration-500 cursor-pointer">
                <div className="flex flex-col md:flex-row gap-8 md:items-start">
                  <span className="text-6xl md:text-8xl font-black text-gray-100 group-hover:text-blue-50 transition-colors duration-500 leading-none">02</span>
                  <div className="pt-2">
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-600 transition-colors">One-Time Donation</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-xl">
                      Make an immediate impact. Your single donation can provide food, water, or shelter to a child in crisis right now.
                    </p>
                    <Link to="/donate" className="inline-flex items-center text-sm font-bold uppercase tracking-wide hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-blue-600 pb-0.5">
                      Give Once <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Item 03 */}
              <div className="group border-t border-gray-200 pt-12 hover:border-purple-600 transition-colors duration-500 cursor-pointer">
                <div className="flex flex-col md:flex-row gap-8 md:items-start">
                  <span className="text-6xl md:text-8xl font-black text-gray-100 group-hover:text-purple-50 transition-colors duration-500 leading-none">03</span>
                  <div className="pt-2">
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-purple-600 transition-colors">Fund a Specific Project</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-xl">
                      From building schools to digging wells. Direct your funds to the tangible infrastructure projects that matter most to you.
                    </p>
                    <Link to="/blog" className="inline-flex items-center text-sm font-bold uppercase tracking-wide hover:text-purple-600 transition-colors border-b-2 border-transparent hover:border-purple-600 pb-0.5">
                      See Our Projects <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-bold text-red-500">50+</div>
              <div className="text-gray-400 font-medium">Communities</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-blue-500">15k+</div>
              <div className="text-gray-400 font-medium">Children Impacted</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-green-500">250+</div>
              <div className="text-gray-400 font-medium">Projects Done</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-purple-500">5</div>
              <div className="text-gray-400 font-medium">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 px-4">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Impact Projects</h2>
              <p className="text-gray-600 text-lg">
                Transforming lives through sustainable solutions in communities across Africa.
              </p>
            </div>
            <Link to="/blog" className="hidden md:flex items-center text-red-600 font-semibold hover:text-red-700 transition">
              View All Projects <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold text-gray-900 shadow-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                      {React.cloneElement(project.icon, { className: "w-6 h-6" })}
                    </div>
                    <span className="text-sm font-medium text-gray-500">{project.impact}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <Link
                    to="/donate"
                    className="inline-flex items-center font-semibold text-red-600 hover:text-red-700 group-hover:underline decoration-2 underline-offset-4"
                  >
                    Support this Cause <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/blog" className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition">
              View All Projects <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-red-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle,white,transparent_70%)]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Make a Difference?</h2>
          <p className="text-xl md:text-2xl text-red-100 mb-12 leading-relaxed">
            Your contribution can change a child's future today. Join thousands of donors who are bringing hope to Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/donate"
              className="bg-white text-red-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Donate Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;