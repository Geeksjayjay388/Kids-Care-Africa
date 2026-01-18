// pages/Blog.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock, ChevronRight } from 'lucide-react';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Clean Water Brings New Hope to Kibera Village",
            excerpt: "How our new water catchment system transformed daily life for 500 families in rural Kenya, reducing disease and empowering women who no longer walk miles for water.",
            image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            date: "Dec 15, 2023",
            author: "Sarah Johnson",
            category: "Water Projects",
            readTime: "5 min read",
            featured: true
        },
        {
            id: 2,
            title: "Building Dreams: 50 New Homes for Orphaned Children",
            excerpt: "Witness the journey of constructing safe shelters for vulnerable children in Uganda...",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            date: "Nov 28, 2023",
            author: "David Mwangi",
            category: "Shelter Program",
            readTime: "7 min read",
            featured: false
        },
        {
            id: 3,
            title: "From Hunger to Hope: Our Nutrition Program Success",
            excerpt: "See how sustainable farming and nutrition education are changing lives in Malawi...",
            image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            date: "Nov 10, 2023",
            author: "Maria Rodriguez",
            category: "Food Security",
            readTime: "6 min read",
            featured: false
        },
        {
            id: 4,
            title: "Education Opens Doors: New School in Tanzania",
            excerpt: "Celebrating the opening of our 10th school, providing education to 400 children...",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            date: "Oct 22, 2023",
            author: "James Omondi",
            category: "Education",
            readTime: "4 min read",
            featured: false
        },
        {
            id: 5,
            title: "Meet Amina: From Street Child to Future Doctor",
            excerpt: "An inspiring story of resilience and how education can break the cycle of poverty...",
            image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            date: "Oct 5, 2023",
            author: "Lisa Chen",
            category: "Success Stories",
            readTime: "8 min read",
            featured: false
        },
        {
            id: 6,
            title: "Sustainable Solutions: Our Solar Water Pump Project",
            excerpt: "How renewable energy is powering clean water access in remote communities...",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            date: "Sep 18, 2023",
            author: "Robert Kamau",
            category: "Innovation",
            readTime: "5 min read",
            featured: false
        }
    ];

    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);
    const categories = ["All Stories", "Water Projects", "Shelter Program", "Food Security", "Education", "Success Stories"];

    return (
        <div className="min-h-screen bg-neutral-50 font-sans">

            {/* Hero Section - Featured Post */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                </div>

                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-20">
                    <span className="inline-block px-4 py-1.5 bg-red-600 text-white text-sm font-semibold tracking-wide uppercase rounded-full w-fit mb-6">
                        Featured Story
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                        {featuredPost.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                        {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center space-x-6 text-white/90">
                        <div className="flex items-center">
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt={featuredPost.author}
                                className="w-10 h-10 rounded-full border-2 border-white/20 mr-3"
                            />
                            <span className="font-medium">{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center text-sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            {featuredPost.date}
                        </div>
                        <div className="flex items-center text-sm">
                            <Clock className="w-4 h-4 mr-2" />
                            {featuredPost.readTime}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* Categories Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-gray-200 pb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Latest Stories</h2>
                    <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 no-scrollbar">
                        {categories.map((category, idx) => (
                            <button
                                key={idx}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap
                            ${idx === 0
                                        ? 'bg-gray-900 text-white shadow-md'
                                        : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-100'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {regularPosts.map((post) => (
                        <Link to={`/blog/${post.id}`} key={post.id} className="group flex flex-col h-full">
                            <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[4/3] shadow-sm">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col">
                                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-3">
                                    <span>{post.date}</span>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                    <span>{post.readTime}</span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-red-600 transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed text-sm">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto flex items-center text-red-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Newsletter Section */}
                <div className="mt-24 relative rounded-3xl overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="Newsletter background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gray-900/80 mix-blend-multiply"></div>
                    </div>

                    <div className="relative px-6 py-16 md:px-12 md:py-20 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Join Our Community of Changemakers
                        </h2>
                        <p className="text-gray-300 mb-8 text-lg">
                            Get inspiring stories, impact updates, and opportunities to help directly in your inbox. No spam, just hope.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-grow px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 backdrop-blur-sm"
                            />
                            <button
                                type="submit"
                                className="px-8 py-3.5 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all shadow-lg hover:shadow-red-600/30 whitespace-nowrap"
                            >
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;