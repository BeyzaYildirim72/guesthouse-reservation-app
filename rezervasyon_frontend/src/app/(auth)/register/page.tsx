import React from 'react';
import RegisterForm from '@/components/auth/RegisterForm';

export default function RegisterPage() {
    return (
        <div 
            className="flex items-center justify-center min-h-screen p-4 md:p-8 bg-cover bg-center select-none"
            style={{ 
                backgroundImage: "linear-gradient(rgba(44, 58, 34, 0.25), rgba(44, 58, 34, 0.25)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1920')" 
            }}
        >
            <RegisterForm />
        </div>
    );
}