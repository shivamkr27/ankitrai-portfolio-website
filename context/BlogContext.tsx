import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BlogPost } from '../types';
import { INITIAL_BLOG_POSTS } from '../data/blogData';
import { db } from '../services/firebaseConfig';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, orderBy } from 'firebase/firestore';

interface BlogContextType {
    posts: BlogPost[];
    addPost: (post: BlogPost) => Promise<void>;
    updatePost: (post: BlogPost) => Promise<void>;
    deletePost: (id: string) => Promise<void>;
    getPost: (id: string) => BlogPost | undefined;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const useBlog = () => {
    const context = useContext(BlogContext);
    if (!context) {
        throw new Error('useBlog must be used within a BlogProvider');
    }
    return context;
};

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Subscribe to Firestore updates
        const q = query(collection(db, 'posts'), orderBy('date', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const firebasePosts = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as BlogPost[];

            // Merge Initial posts (if they don't exist in Firebase yet?)
            // Actually, for simplicity and consistency, let's just display Firebase posts.
            // If Firebase is empty, we act as if it's a fresh blog.
            // BUT to preserve the "Demo" feel, we can concatenate INITIAL posts if they aren't duplicate.
            // A simple way: Display Firebase posts preferentially.
            if (firebasePosts.length === 0 && !localStorage.getItem('initial_seeded')) {
                // Optional: Seed initial posts to Firebase? 
                // For now, let's just combine them client-side or just use Firebase.
                // Let's use ONLY Firebase for "Dynamic" blog to avoid confusion.
                // Users can "Create" the initial posts if they want.

                // Wait, the user expects the "Initial Data" to be there.
                // Let's seed them automatically if the DB is empty!
                seedInitialPosts();
            } else {
                setPosts(firebasePosts);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const seedInitialPosts = async () => {
        // Check if we already seeded to avoid infinite loop or duplicates on reload before sync
        if (localStorage.getItem('initial_seeded')) return;

        // Check if collection is empty (snapshot above handles this, but here we trigger writes)
        // We'll just write them one by one.
        try {
            // This is a bit risky if multiple clients load at once, but for a portfolio it's fine.
            for (const post of INITIAL_BLOG_POSTS) {
                // We use 'addDoc' which generates ID, but we want to keep stable IDs? 
                // No, let Firestore generate IDs.
                const { id, ...postData } = post; // remove ID, let firestore create one
                await addDoc(collection(db, 'posts'), postData);
            }
            localStorage.setItem('initial_seeded', 'true');
        } catch (e) {
            console.error("Error seeding initial posts:", e);
        }
    };

    const addPost = async (post: BlogPost) => {
        try {
            // We ignore the 'id' passed in because Firestore generates it
            const { id, ...postData } = post;
            await addDoc(collection(db, 'posts'), postData);
        } catch (error) {
            console.error("Error adding post:", error);
            throw error;
        }
    };

    const updatePost = async (updatedPost: BlogPost) => {
        try {
            const { id, ...postData } = updatedPost;
            if (!id) throw new Error("Post ID is missing for update");
            const postRef = doc(db, 'posts', id);
            await updateDoc(postRef, postData as any); // Type assertion to handle partials if needed, though BlogPost is strict
        } catch (error) {
            console.error("Error updating post:", error);
            throw error;
        }
    };

    const deletePost = async (id: string) => {
        try {
            await deleteDoc(doc(db, 'posts', id));
        } catch (error) {
            console.error("Error deleting post:", error);
            throw error;
        }
    };

    const getPost = (id: string) => {
        return posts.find((post) => post.id === id);
    };

    return (
        <BlogContext.Provider value={{ posts, addPost, updatePost, deletePost, getPost }}>
            {children}
        </BlogContext.Provider>
    );
};
