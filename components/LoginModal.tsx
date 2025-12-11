import React, { useEffect } from 'react';
import { X, Lock, User } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 relative z-10 overflow-hidden transform transition-all animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800">Login SIRS</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-8">
            <div className="mb-6 text-center">
                <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lock className="w-8 h-8" />
                </div>
                <p className="text-gray-500 text-sm">Masuk untuk mengakses dashboard manajemen.</p>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              alert('Ini hanya demo frontend. Backend belum terhubung.');
            }}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-xs font-bold mb-2 uppercase tracking-wide">Username / NIP</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input 
                            type="text" 
                            className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" 
                            placeholder="Masukkan NIP Anda" 
                        />
                    </div>
                </div>
                <div className="mb-8">
                    <label className="block text-gray-700 text-xs font-bold mb-2 uppercase tracking-wide">Password</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input 
                            type="password" 
                            className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" 
                            placeholder="••••••••" 
                        />
                    </div>
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-teal-600 text-white py-3 rounded-lg font-bold hover:bg-teal-700 transition shadow-md hover:shadow-lg transform active:scale-95 duration-200"
                >
                    Masuk Dashboard
                </button>
            </form>
        </div>
        <div className="p-4 bg-gray-50 text-center text-xs text-gray-400 border-t border-gray-100">
            Lupa password? Hubungi Administrator IT.
        </div>
      </div>
    </div>
  );
};