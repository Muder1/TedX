import { useState, useEffect } from "react";
import "./Podcast.css";

const Podcast = ({ title, embed, desc }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Disable page scroll when video is open
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isExpanded]);

  return (
    <>
      {/* ==================== 1. THE CARD (Always Visible) ==================== */}
      <div className="podcast">
        <h3 className="podcast-title">{title}</h3>
        {desc && <p className="podcast-desc">{desc}</p>}
        
        {/* Thumbnail / Video Container in Card */}
        <div 
          className="card-video-container" 
          onClick={() => setIsExpanded(true)}
        >
          <div className="video-wrapper">
            {/* If expanded, show a placeholder in the card so layout doesn't break.
                If NOT expanded, show the actual video/iframe here. */}
            {isExpanded ? (
              <div className="video-placeholder">Playing in Cinema Mode...</div>
            ) : (
              <>
                {embed}
                {/* Click Overlay to trigger expand */}
                <div className="click-trigger">
                  <span className="expand-icon">⤢ Click to Expand</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ==================== 2. THE MODAL (Only when Expanded) ==================== */}
      {isExpanded && (
        <div className="cinema-modal-overlay" onClick={() => setIsExpanded(false)}>
          
          <div className="cinema-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="video-wrapper">
              {embed}
            </div>
            
            <button 
              className="close-cinema-btn"
              onClick={() => setIsExpanded(false)}
            >
              ✕ Close
            </button>
          </div>
          
        </div>
      )}
    </>
  );
};

export default Podcast;