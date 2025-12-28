import React, { useState, useEffect } from 'react';
import { useBlog } from '../context/BlogContext';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save, Image as ImageIcon } from 'lucide-react';
import { BlogPost } from '../types';

const PostEditor: React.FC = () => {
    const { posts, addPost, updatePost, getPost } = useBlog();
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const isEditing = Boolean(id);

    const [formData, setFormData] = useState<Omit<BlogPost, 'id' | 'date'>>({
        title: '',
        excerpt: '',
        content: '',
        author: 'Ankit Rai',
        image: '',
        tags: []
    });

    const [tagInput, setTagInput] = useState('');

    useEffect(() => {
        if (isEditing && id) {
            const post = getPost(id);
            if (post) {
                setFormData({
                    title: post.title,
                    excerpt: post.excerpt,
                    content: post.content,
                    author: post.author,
                    image: post.image,
                    tags: post.tags
                });
            } else {
                navigate('/admin'); // Redirect if ID not found
            }
        }
    }, [id, isEditing, getPost, navigate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAddTag = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && tagInput.trim()) {
            e.preventDefault();
            if (!formData.tags.includes(tagInput.trim())) {
                setFormData(prev => ({ ...prev, tags: [...prev.tags, tagInput.trim()] }));
            }
            setTagInput('');
        }
    };

    const removeTag = (tagrToRemove: string) => {
        setFormData(prev => ({ ...prev, tags: prev.tags.filter(tag => tag !== tagrToRemove) }));
    };

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const now = new Date().toISOString().split('T')[0]; // simple date format YYYY-MM-DD

        try {
            if (isEditing && id) {
                await updatePost({
                    id,
                    date: posts.find(p => p.id === id)?.date || now, // Keep original date if editing
                    ...formData
                });
            } else {
                await addPost({
                    id: Date.now().toString(),
                    date: now,
                    ...formData
                });
            }
            navigate('/admin');
        } catch (error) {
            console.error("Failed to save post:", error);
            alert("Failed to save post. Please try again. Check console for details.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-cyber-900 text-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={() => navigate('/admin')}
                    className="flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
                >
                    <ArrowLeft size={18} className="mr-2" /> Back to Dashboard
                </button>

                <div className="bg-cyber-800/50 rounded-xl p-8 border border-cyber-700/50">
                    <h1 className="text-2xl font-bold mb-8 text-white">
                        {isEditing ? 'Edit Post' : 'Create New Post'}
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
                            <input
                                type="text"
                                name="title"
                                required
                                className="w-full bg-cyber-900 border border-cyber-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyber-accent focus:border-transparent transition-all"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Enter post title"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Author</label>
                                <input
                                    type="text"
                                    name="author"
                                    required
                                    className="w-full bg-cyber-900 border border-cyber-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyber-accent transition-all"
                                    value={formData.author}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Image URL</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <ImageIcon className="h-5 w-5 text-gray-500" />
                                    </div>
                                    <input
                                        type="url"
                                        name="image"
                                        className="w-full pl-10 bg-cyber-900 border border-cyber-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyber-accent transition-all"
                                        value={formData.image}
                                        onChange={handleChange}
                                        placeholder="https://..."
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Excerpt (Short Description)</label>
                            <textarea
                                name="excerpt"
                                required
                                rows={3}
                                className="w-full bg-cyber-900 border border-cyber-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyber-accent transition-all"
                                value={formData.excerpt}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Content (Markdown Support)</label>
                            <textarea
                                name="content"
                                required
                                rows={12}
                                className="w-full bg-cyber-900 border border-cyber-700 rounded-lg p-3 text-white font-mono text-sm focus:ring-2 focus:ring-cyber-accent transition-all"
                                value={formData.content}
                                onChange={handleChange}
                                placeholder="# Heading\n\nWrite your content here..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Tags (Press Enter to add)</label>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {formData.tags.map(tag => (
                                    <span key={tag} className="bg-cyber-700 px-3 py-1 rounded-full text-xs flex items-center gap-2">
                                        {tag}
                                        <button type="button" onClick={() => removeTag(tag)} className="hover:text-red-400">&times;</button>
                                    </span>
                                ))}
                            </div>
                            <input
                                type="text"
                                className="w-full bg-cyber-900 border border-cyber-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyber-accent transition-all"
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                                onKeyDown={handleAddTag}
                                placeholder="Type and press Enter..."
                            />
                        </div>

                        <div className="pt-4 flex justify-end">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`flex items-center gap-2 bg-cyber-accent text-cyber-900 font-bold px-6 py-3 rounded-lg hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                <Save size={20} />
                                {isEditing ? 'Update Post' : 'Publish Post'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PostEditor;
