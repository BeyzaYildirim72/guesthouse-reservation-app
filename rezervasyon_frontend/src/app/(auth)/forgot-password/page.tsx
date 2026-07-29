import React from 'react';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';

export default function ForgotPasswordPage() {
    return (
        <div 
            className="flex items-center justify-center min-h-screen p-5 bg-cover bg-center select-none"
            style={{ 
                backgroundImage: "linear-gradient(rgba(44, 58, 34, 0.25), rgba(44, 58, 34, 0.25)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1920')" 
            }}
        >
            <ForgotPasswordForm />
        </div>
    );
}