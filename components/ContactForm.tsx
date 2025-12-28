import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            const response = await fetch("https://formsubmit.co/ajax/ankitrai83826@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formState)
            });

            if (response.ok) {
                setStatus('success');
                alert("Thank you for your message. Ankit's team will get back to you shortly.");
                setFormState({ name: '', email: '', subject: '', message: '' });
                setStatus('idle');
            } else {
                setStatus('error');
                alert("Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error("Form submission error", error);
            setStatus('error');
            alert("Something went wrong. Please try again later.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-cyber-800 border border-cyber-600 rounded px-4 py-3 text-white focus:outline-none focus:border-cyber-accent transition-colors"
                    placeholder="John Doe"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-cyber-800 border border-cyber-600 rounded px-4 py-3 text-white focus:outline-none focus:border-cyber-accent transition-colors"
                    placeholder="john@company.com"
                />
            </div>
            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">Subject</label>
                <select
                    name="subject"
                    id="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full bg-cyber-800 border border-cyber-600 rounded px-4 py-3 text-white focus:outline-none focus:border-cyber-accent transition-colors"
                >
                    <option value="">Select a Topic</option>
                    <option value="Consulting">Cyber Security Consulting</option>
                    <option value="Training">Training / Workshop</option>
                    <option value="VAPT">VAPT / Audit</option>
                    <option value="Speaking">Speaking Opportunity</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full bg-cyber-800 border border-cyber-600 rounded px-4 py-3 text-white focus:outline-none focus:border-cyber-accent transition-colors"
                    placeholder="How can I help you?"
                ></textarea>
            </div>
            <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-cyber-accent text-cyber-900 font-bold py-3 px-4 rounded hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {status === 'submitting' ? 'Sending...' : 'Send Message'} <Send size={18} />
            </button>
        </form>
    );
};

export default ContactForm;
