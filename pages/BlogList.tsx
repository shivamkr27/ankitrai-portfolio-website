import React from 'react';
import { useBlog } from '../context/BlogContext';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReadingProgressBar from '../components/ReadingProgressBar';

const BlogList: React.FC = () => {
    const { posts } = useBlog();

    return (
        <div className="min-h-screen bg-cyber-900 flex flex-col">
            <Navbar />
            {/* 
         Note: The Navbar handles basic navigation. 
         Since we are on a separate route '/blog', the anchor links in Navbar (like #about) 
         need to be handled. We'll update Navbar later to support this.
       */}

            <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyber-accent to-blue-500 mb-6">
                            Security Insights
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Latest articles, tutorials, and news from the world of cybersecurity.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.id} className="bg-cyber-800 border border-cyber-700 rounded-2xl overflow-hidden hover:border-cyber-accent/50 transition-all duration-300 group flex flex-col">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.image || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-900 to-transparent opacity-60"></div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-cyber-accent font-mono mb-3">
                                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                        <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                                    </div>

                                    <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyber-accent transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-4 flex flex-wrap gap-2 mb-4">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="text-[10px] bg-cyber-700/50 px-2 py-1 rounded text-gray-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        to={`/blog/${post.id}`}
                                        className="inline-flex items-center text-cyber-accent hover:text-white font-semibold transition-colors mt-auto"
                                    >
                                        Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BlogList;
