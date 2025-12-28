import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
// Removed unused react-markdown import

// Actually, I should probably check if react-markdown is available, or just render it as white-space pre-wrap for now to be safe.
// The user has 'react' but I haven't seen 'react-markdown' in package.json. 
// I will just use a simple whitespace-pre-line display for now to avoid dependency hell, 
// OR I will just use basic specific formatting.
// Let's stick to simple text rendering with dangerousHtml (if we trust it) or just text.
// Given it's "Admin" writing it, maybe simple text with line breaks is enough.

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { getPost } = useBlog();
    const navigate = useNavigate();
    const [post, setPost] = useState(getPost(id || ''));

    useEffect(() => {
        if (id) {
            const foundPost = getPost(id);
            if (foundPost) {
                setPost(foundPost);
            } else {
                navigate('/blog');
            }
        }
    }, [id, getPost, navigate]);

    if (!post) return null;

    return (
        <div className="min-h-screen bg-cyber-900 flex flex-col">
            <Navbar />

            <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8">
                <article className="max-w-4xl mx-auto">
                    <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft size={18} className="mr-2" /> Back to Articles
                    </Link>

                    <header className="mb-12 text-center">
                        <div className="flex items-center justify-center gap-4 text-sm text-cyber-accent font-mono mb-6">
                            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                            <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-cyber-700 shadow-2xl">
                            <img
                                src={post.image || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </header>

                    <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-cyber-accent prose-strong:text-white">
                        {/* Simple rendering for now to avoid external dependencies issues */}
                        {post.content.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line.startsWith('# ') ? <h1 className="text-3xl font-bold mt-8 mb-4">{line.replace('# ', '')}</h1> :
                                    line.startsWith('## ') ? <h2 className="text-2xl font-bold mt-6 mb-3">{line.replace('## ', '')}</h2> :
                                        line.startsWith('### ') ? <h3 className="text-xl font-bold mt-5 mb-2">{line.replace('### ', '')}</h3> :
                                            line.trim() === '' ? <br /> :
                                                <p className="mb-4 text-gray-300 leading-relaxed">{line}</p>
                                }
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-cyber-700">
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="flex items-center gap-1 bg-cyber-800 border border-cyber-700 text-cyber-accent px-3 py-1.5 rounded-full text-sm">
                                    <Tag size={12} /> {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPost;
