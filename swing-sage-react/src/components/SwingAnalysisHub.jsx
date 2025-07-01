// src/components/SwingAnalysisHub.jsx - COMPLETE FILE (Enhanced Responsive Video Player)
import React, { useState, useRef, useEffect } from 'react';
import VideoUploader from './VideoUploader';
import VideoPlayer from './VideoPlayer';
import AnalysisOverlay from './AnalysisOverlay';
import mockAnalysisData from '../data/mockAnalysisData.js';
import { 
  Play, Pause, Rewind, FastForward, Repeat, RotateCw, 
  SkipBack, SkipForward, Volume2, Maximize2 
} from 'lucide-react';

const SwingAnalysisHub = ({ userVideoUrl, analysisData, swingStage, onVideoUploadSuccess, isLoggedIn }) => {
  const videoPlayerRef = useRef(null);
  const [videoDimensions, setVideoDimensions] = useState({ width: 0, height: 0 });
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [analysisFrameTimes, setAnalysisFrameTimes] = useState({});
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const getVideoElement = () => videoPlayerRef.current?.videoElement;

  const handleLoadedMetadata = () => {
    const video = getVideoElement();
    if (video) {
      setVideoDimensions({
        width: video.videoWidth,
        height: video.videoHeight
      });
      setDuration(video.duration);

      // Generate analysis frame times based on video duration
      const videoDuration = video.duration;
      setAnalysisFrameTimes({
        'setup': videoDuration * 0.1,
        'takeaway': videoDuration * 0.25,
        'backswing': videoDuration * 0.4,
        'transition': videoDuration * 0.55,
        'impact': videoDuration * 0.7,
        'follow-through': videoDuration * 0.85,
        'finish': videoDuration * 0.95
      });
    }
  };

  const handleTimeUpdate = () => {
    const video = getVideoElement();
    if (video) {
      setCurrentTime(video.currentTime);
    }
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  useEffect(() => {
    const video = getVideoElement();
    if (video) {
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      
      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      };
    }
  }, [userVideoUrl]);

  const togglePlayPause = () => {
    const video = getVideoElement();
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
    }
  };

  const jumpToTime = (time) => {
    const video = getVideoElement();
    if (video) {
      video.currentTime = Math.max(0, Math.min(time, duration));
    }
  };

  const changePlaybackSpeed = (speed) => {
    const video = getVideoElement();
    if (video) {
      video.playbackRate = speed;
      setPlaybackSpeed(speed);
    }
  };

  const restartVideo = () => {
    const video = getVideoElement();
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  };

  const toggleMute = () => {
    const video = getVideoElement();
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const handleVolumeChange = (newVolume) => {
    const video = getVideoElement();
    if (video) {
      video.volume = newVolume;
      setVolume(newVolume);
      if (newVolume === 0) {
        setIsMuted(true);
      } else if (isMuted) {
        setIsMuted(false);
      }
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const getProgressPercentage = () => {
    return duration > 0 ? (currentTime / duration) * 100 : 0;
  };

  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * duration;
    jumpToTime(newTime);
  };

  const jumpToStage = (stageKey) => {
    onVideoUploadSuccess(userVideoUrl, mockAnalysisData[stageKey], stageKey);
    const timeToJump = analysisFrameTimes[stageKey];
    if (getVideoElement() && timeToJump !== undefined) {
      jumpToTime(timeToJump);
      getVideoElement().play();
    }
  };

  const handleProFeatureClick = () => {
    if (!isLoggedIn) {
      alert("Please log in to access this feature!");
      return;
    }
    setShowUpgradeModal(true);
  };

  const currentDetailedAnalysis = analysisData && swingStage ? mockAnalysisData[swingStage] : null;

  const stageOrder = ['setup', 'takeaway', 'backswing', 'transition', 'impact', 'follow-through', 'finish'];

  return (
    <section className="swing-analysis-hub">
      <h2 className="section-title">Swing Analysis Hub</h2>

      {!userVideoUrl ? (
        <VideoUploader onUploadSuccess={onVideoUploadSuccess} />
      ) : (
        <div className="analysis-display">
          {/* Video Player Section */}
          <div className="video-player-section card">
            <div className="video-header">
              <h3 style={{color: 'var(--text-color)', marginBottom: 'var(--spacing-md)'}}>
                Your Swing Video 
                {swingStage && (
                  <span style={{color: 'var(--accent-color)'}}>
                    • {swingStage.charAt(0).toUpperCase() + swingStage.slice(1)}
                  </span>
                )}
              </h3>
            </div>

            <div className="player-wrapper">
              <VideoPlayer
                src={userVideoUrl}
                controls={false}
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}
                ref={videoPlayerRef}
              />
              {analysisData && (
                <AnalysisOverlay
                  analysisData={analysisData.visuals ? analysisData : currentDetailedAnalysis}
                  videoDimensions={videoDimensions}
                />
              )}
            </div>

            {/* Progress Bar */}
            <div className="progress-container" style={{
              width: '100%',
              height: '6px',
              background: 'var(--quaternary-bg)',
              borderRadius: '3px',
              margin: 'var(--spacing-lg) 0',
              cursor: 'pointer',
              position: 'relative'
            }}>
              <div 
                className="progress-bar"
                onClick={handleProgressClick}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '3px',
                  position: 'relative',
                  background: 'var(--quaternary-bg)'
                }}
              >
                <div 
                  className="progress-fill"
                  style={{
                    width: `${getProgressPercentage()}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, var(--accent-color), var(--accent-hover))',
                    borderRadius: '3px',
                    transition: 'width 0.1s ease'
                  }}
                />
                {/* Analysis markers */}
                {Object.entries(analysisFrameTimes).map(([stage, time]) => (
                  <div
                    key={stage}
                    style={{
                      position: 'absolute',
                      left: `${(time / duration) * 100}%`,
                      top: '-2px',
                      width: '2px',
                      height: '10px',
                      background: swingStage === stage ? 'var(--accent-color)' : 'var(--warning-color)',
                      borderRadius: '1px',
                      cursor: 'pointer'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      jumpToStage(stage);
                    }}
                    title={`Jump to ${stage}`}
                  />
                ))}
              </div>
            </div>

            {/* Enhanced Video Controls */}
            <div className="video-controls-bar">
              <div className="control-group-left">
                <button className="control-button" onClick={togglePlayPause} title={isPlaying ? "Pause" : "Play"}>
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
                
                <button className="control-button" onClick={restartVideo} title="Restart">
                  <Repeat size={18} />
                </button>
                
                <button 
                  className="control-button" 
                  onClick={() => jumpToTime(currentTime - 5)} 
                  title="Rewind 5s"
                >
                  <SkipBack size={18} />
                </button>
                
                <button 
                  className="control-button" 
                  onClick={() => jumpToTime(currentTime + 5)} 
                  title="Forward 5s"
                >
                  <SkipForward size={18} />
                </button>
              </div>

              <div className="control-group-center">
                <span className="time-display">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="control-group-right">
                <div className="volume-control">
                  <button className="control-button" onClick={toggleMute} title="Toggle Mute">
                    <Volume2 size={18} />
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                    className="volume-slider"
                  />
                </div>
                
                <select
                  className="speed-select"
                  value={playbackSpeed}
                  onChange={(e) => changePlaybackSpeed(parseFloat(e.target.value))}
                  title="Playback Speed"
                >
                  <option value="0.25">0.25x</option>
                  <option value="0.5">0.5x</option>
                  <option value="0.75">0.75x</option>
                  <option value="1">1x</option>
                  <option value="1.25">1.25x</option>
                  <option value="1.5">1.5x</option>
                  <option value="2">2x</option>
                </select>
              </div>
            </div>

            {/* Swing Stage Navigation */}
            <div className="swing-stage-jumps">
              <h4 style={{
                color: 'var(--text-color)', 
                marginBottom: 'var(--spacing-md)', 
                textAlign: 'center',
                width: '100%'
              }}>
                Analyze Swing Phases
              </h4>
              <div className="stage-buttons">
                {stageOrder.map(stageKey => (
                  <button
                    key={stageKey}
                    className={`button ${swingStage === stageKey ? 'active' : ''}`}
                    onClick={() => jumpToStage(stageKey)}
                  >
                    <RotateCw size={16} />
                    {stageKey.charAt(0).toUpperCase() + stageKey.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Analysis Results Section */}
          <div className="analysis-results card fade-in">
            <h3 style={{color: 'var(--accent-color)', marginBottom: 'var(--spacing-lg)'}}>
              AI Analysis: {swingStage ? swingStage.charAt(0).toUpperCase() + swingStage.slice(1) : 'Overview'}
            </h3>
            
            {currentDetailedAnalysis ? (
              <div className="analysis-content">
                <div className="summary-section">
                  <h4 style={{color: 'var(--text-color)', marginBottom: 'var(--spacing-md)'}}>Summary</h4>
                  <p style={{ 
                    marginBottom: 'var(--spacing-lg)', 
                    lineHeight: '1.6',
                    padding: 'var(--spacing-md)',
                    background: 'var(--quaternary-bg)',
                    borderRadius: 'var(--radius-md)',
                    borderLeft: '4px solid var(--accent-color)'
                  }}>
                    {currentDetailedAnalysis.summary}
                  </p>
                </div>

                <div className="feedback-section">
                  <h4 style={{ color: 'var(--text-color)', marginBottom: 'var(--spacing-md)' }}>
                    Key Metrics
                  </h4>
                  <div className="feedback-grid">
                    {currentDetailedAnalysis.feedback.map((item, index) => (
                      <div key={index} className="feedback-card">
                        <div className="metric-header">
                          <h5 style={{color: 'var(--text-color)', margin: 0}}>{item.metric}</h5>
                          <span className={`status-badge ${item.status === 'Good' ? 'good' : 'needs-improvement'}`}>
                            {item.status}
                          </span>
                        </div>
                        <div className="metric-values">
                          <span className="current-value">Current: {item.value}</span>
                          <span className="ideal-value">Ideal: {item.ideal}</span>
                        </div>
                        <p className="metric-tip">{item.tip}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="ai-insight">
                  <h4 style={{color: 'var(--accent-color)', marginBottom: 'var(--spacing-md)'}}>
                    AI Insight
                  </h4>
                  <p style={{
                    fontStyle: 'italic',
                    fontSize: 'var(--font-size-lg)',
                    lineHeight: '1.5',
                    padding: 'var(--spacing-lg)',
                    background: 'linear-gradient(135deg, var(--quaternary-bg), var(--tertiary-bg))',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--accent-color)'
                  }}>
                    "{currentDetailedAnalysis.aiTip}"
                  </p>
                </div>

                <div className="upgrade-prompt">
                  <p style={{
                    marginTop: 'var(--spacing-xl)', 
                    fontSize: 'var(--font-size-sm)',
                    textAlign: 'center',
                    padding: 'var(--spacing-lg)',
                    background: 'var(--quaternary-bg)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px dashed var(--accent-color)'
                  }}>
                    ✨ Get detailed video overlays, swing comparisons, and progress tracking with 
                    <button 
                      onClick={handleProFeatureClick} 
                      className="link" 
                      style={{marginLeft: 'var(--spacing-xs)'}}
                    >
                      Swing Sage Pro
                    </button>
                  </p>
                </div>
              </div>
            ) : (
              <div className="empty-state">
                <div style={{ 
                  textAlign: 'center', 
                  minHeight: '300px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 'var(--spacing-md)'
                }}>
                  <Camera size={64} style={{color: 'var(--accent-color)', opacity: 0.5}} />
                  <h4 style={{color: 'var(--accent-color)'}}>Ready for Analysis</h4>
                  <p className="placeholder-text">
                    Upload a swing video to get started with AI-powered analysis and personalized coaching tips.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .video-controls-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--spacing-lg);
          background: var(--quaternary-bg);
          border-radius: var(--radius-md);
          margin-top: var(--spacing-lg);
          flex-wrap: wrap;
          gap: var(--spacing-md);
        }

        .control-group-left,
        .control-group-center,
        .control-group-right {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }

        .control-button {
          background: var(--tertiary-bg);
          border: 1px solid var(--border-color);
          color: var(--text-color);
          padding: var(--spacing-sm);
          border-radius: var(--radius-sm);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
          min-width: 40px;
          height: 40px;
        }

        .control-button:hover {
          background: var(--accent-color);
          color: var(--primary-bg);
          transform: translateY(-1px);
        }

        .time-display {
          color: var(--text-color);
          font-size: var(--font-size-sm);
          font-weight: 500;
          min-width: 100px;
          text-align: center;
        }

        .volume-control {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .volume-slider {
          width: 60px;
          height: 4px;
          background: var(--tertiary-bg);
          border-radius: 2px;
          outline: none;
          cursor: pointer;
        }

        .volume-slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          background: var(--accent-color);
          border-radius: 50%;
          cursor: pointer;
        }

        .speed-select {
          background: var(--tertiary-bg);
          color: var(--text-color);
          border: 1px solid var(--border-color);
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: var(--radius-sm);
          font-size: var(--font-size-sm);
          cursor: pointer;
          min-width: 70px;
        }

        .swing-stage-jumps {
          margin-top: var(--spacing-2xl);
          padding: var(--spacing-xl);
          background: var(--quaternary-bg);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }

        .stage-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--spacing-sm);
        }

        .stage-buttons .button {
          font-size: var(--font-size-sm);
          padding: var(--spacing-sm) var(--spacing-md);
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
        }

        .feedback-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-xl);
        }

        .feedback-card {
          background: var(--quaternary-bg);
          border-radius: var(--radius-md);
          padding: var(--spacing-lg);
          border: 1px solid var(--border-color);
          transition: all var(--transition-normal);
        }

        .feedback-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .metric-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-md);
        }

        .status-badge {
          padding: var(--spacing-xs) var(--spacing-sm);
          border-radius: var(--radius-sm);
          font-size: var(--font-size-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .status-badge.good {
          background: rgba(46, 213, 115, 0.2);
          color: var(--success-color);
          border: 1px solid var(--success-color);
        }

        .status-badge.needs-improvement {
          background: rgba(255, 165, 2, 0.2);
          color: var(--warning-color);
          border: 1px solid var(--warning-color);
        }

        .metric-values {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
          margin-bottom: var(--spacing-md);
        }

        .current-value {
          font-weight: 600;
          color: var(--text-color);
        }

        .ideal-value {
          font-size: var(--font-size-sm);
          color: var(--placeholder-color);
        }

        .metric-tip {
          font-size: var(--font-size-sm);
          color: var(--text-color);
          opacity: 0.9;
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .analysis-display {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .video-controls-bar {
            flex-direction: column;
            gap: var(--spacing-md);
          }

          .control-group-left,
          .control-group-center,
          .control-group-right {
            justify-content: center;
          }

          .stage-buttons .button {
            font-size: var(--font-size-xs);
            padding: var(--spacing-xs) var(--spacing-sm);
          }

          .feedback-grid {
            grid-template-columns: 1fr;
          }

          .swing-stage-jumps {
            padding: var(--spacing-lg);
          }
        }
      `}</style>
    </section>
  );
};

export default SwingAnalysisHub;