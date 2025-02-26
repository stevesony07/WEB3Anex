import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Button } from '../shared/Button';

export const UserProfile = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = auth.currentUser;

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-2 hover:opacity-80"
      >
        <div className="w-8 h-8 rounded-full bg-cyber-blue/20 border-2 border-cyber-blue flex items-center justify-center">
          {user?.email?.[0].toUpperCase() || 'U'}
        </div>
        <span className="text-cyber-blue">{user?.email}</span>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-black/90 border border-cyber-blue rounded-lg shadow-lg backdrop-blur-sm">
          <div className="p-4">
            <Button type="secondary" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};