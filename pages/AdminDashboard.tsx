import React from 'react';
import { useBlog } from '../context/BlogContext';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, LogOut, FileText } from 'lucide-react';

const AdminDashboard: React.FC = () => {
    const { posts, deletePost } = useBlog();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('is_admin_authenticated');
        navigate('/admin/login');
    };

    const handleDelete = (id: string) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            deletePost(id);
        }
    };

    return (
        <div className="min-h-screen bg-cyber-900 text-gray-100 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Admin Dashboard
                    </h1>
                    <div className="flex gap-4">
                        <Link
                            to="/"
                            className="flex items-center gap-2 px-4 py-2 border border-cyber-700 rounded text-gray-400 hover:text-white hover:bg-cyber-800 transition-colors"
                        >
                            View Site
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-4 py-2 border border-red-500/30 text-red-400 rounded hover:bg-red-500/10 transition-colors"
                        >
                            <LogOut size={18} /> Logout
                        </button>
                    </div>
                </div>

                <div className="grid gap-8">
                    <div className="bg-cyber-800/50 rounded-xl p-6 border border-cyber-700/50">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold flex items-center gap-2">
                                <FileText className="text-cyber-accent" />
                                All Blog Posts ({posts.length})
                            </h2>
                            <Link
                                to="/admin/new"
                                className="flex items-center gap-2 bg-cyber-accent text-cyber-900 px-4 py-2 rounded font-bold hover:bg-cyan-400 transition-colors"
                            >
                                <Plus size={18} /> Create New Post
                            </Link>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-cyber-700 text-gray-400 text-sm">
                                        <th className="py-3 px-4">Title</th>
                                        <th className="py-3 px-4">Date</th>
                                        <th className="py-3 px-4">Author</th>
                                        <th className="py-3 px-4 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-cyber-700/50">
                                    {posts.map((post) => (
                                        <tr key={post.id} className="group hover:bg-cyber-700/20 transition-colors">
                                            <td className="py-3 px-4 font-medium text-white">{post.title}</td>
                                            <td className="py-3 px-4 text-gray-400">{post.date}</td>
                                            <td className="py-3 px-4 text-gray-400">{post.author}</td>
                                            <td className="py-3 px-4 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Link
                                                        to={`/admin/edit/${post.id}`}
                                                        className="p-2 text-blue-400 hover:bg-blue-400/10 rounded transition-colors"
                                                        title="Edit"
                                                    >
                                                        <Edit size={18} />
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(post.id)}
                                                        className="p-2 text-red-400 hover:bg-red-400/10 rounded transition-colors"
                                                        title="Delete"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    {posts.length === 0 && (
                                        <tr>
                                            <td colSpan={4} className="py-8 text-center text-gray-500 italic">
                                                No posts found. Create your first one!
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
