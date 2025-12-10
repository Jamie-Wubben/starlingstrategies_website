'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
    const t = useTranslations('ContactPage.form');
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            interest: formData.get('interest'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">{t('name')}</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">{t('email')}</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-400 mb-2">{t('interest')}</label>
                <select
                    id="interest"
                    name="interest"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                >
                    <option value="automation">{t('options.automation')}</option>
                    <option value="uavs">{t('options.uavs')}</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={`w-full font-bold py-4 px-6 rounded-lg transition-all shadow-lg shadow-primary/25 text-lg ${status === 'sending'
                        ? 'bg-gray-700 cursor-wait text-gray-300'
                        : status === 'success'
                            ? 'bg-green-600 cursor-default text-white'
                            : 'bg-primary hover:bg-blue-600 text-white'
                    }`}
            >
                {status === 'sending' ? t('sending') : status === 'success' ? t('success') : t('submit')}
            </button>

            {status === 'error' && (
                <p className="text-red-400 text-center text-sm mt-2">{t('error')}</p>
            )}
        </form>
    );
}
