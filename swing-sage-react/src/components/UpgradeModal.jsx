import React from 'react';
import { X, Sparkles } from 'lucide-react'; // Using Lucide icons for consistency

const UpgradeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay"> {/* Re-using auth-modal-overlay for consistent modal background */}
      <div className="modal-content" style={{
        maxWidth: '500px',
        width: '90%',
        padding: 'var(--spacing-lg)',
        borderRadius: 'var(--border-radius-md)',
        backgroundColor: 'var(--secondary-bg)',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.7)',
        border: '1px solid var(--accent-color)', // Added a green border
        position: 'relative',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        animation: 'zoomIn 0.3s ease-out forwards' // Keep zoom animation from AuthModal
      }}>
        <button
          onClick={onClose}
          className="auth-modal-close" // Re-using auth-modal-close class
          style={{ position: 'absolute', top: '15px', right: '15px' }}
        >
          <X size={24} />
        </button>

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Sparkles size={64} style={{ color: 'var(--accent-color)', marginBottom: 'var(--spacing-sm)' }} />
          <h2 style={{ fontSize: '2em', fontWeight: 'bold', color: 'var(--accent-color)', marginBottom: '10px' }}>Upgrade to Sage Pro</h2>
          <p style={{ color: 'var(--text-color)', opacity: 0.8 }}>Unlock your full potential with our most powerful features.</p>
        </div>

        <ul style={{ listStyle: 'none', padding: 0, margin: 'var(--spacing-md) 0 var(--spacing-lg) 0', width: '100%' }}>
          {[
            'Unlimited Swing Analyses',
            'Detailed, Pro-level Reports',
            'Permanent Swing History & Tracking',
            'Video Comparison Tools'
          ].map((feature, index) => (
            <li key={index} style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              color: 'var(--text-color)',
              fontSize: '1.05em'
            }}>
              <Sparkles size={20} style={{ color: 'var(--accent-color)', marginRight: '10px' }} /> {feature}
            </li>
          ))}
        </ul>

        <button className="button button-accent" style={{ width: '100%' }}>
          Unlock Sage Pro Now
        </button>
      </div>
    </div>
  );
};

export default UpgradeModal;