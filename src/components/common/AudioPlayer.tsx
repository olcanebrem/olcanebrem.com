import { useEffect, useRef, useState, useCallback } from 'react';
import type { MouseEvent, KeyboardEvent } from 'react';

// ... (Icons remain the same)
const PlayIcon = () => <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>;
const PauseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="currentColor"/></svg>;
const SkipNextIcon = () => <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" fill="currentColor"/></svg>;
const SkipPreviousIcon = () => <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" fill="currentColor"/></svg>;
const MusicNoteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" fill="currentColor"/></svg>;
const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/></svg>;


interface Song {
  id: number;
  title: string;
  artist: string;
  src: string;
  albumArt?: string;
}

export default function AudioPlayer() {
  const audioPlayer = useRef<HTMLAudioElement>(null);
  const progressBar = useRef<HTMLDivElement>(null);
  const trackListRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerVisible, setIsPlayerVisible] = useState(true); // Player initially visible
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const [shouldRenderPlayer, setShouldRenderPlayer] = useState(isPlayerVisible);

  const [songs] = useState<Song[]>([
    { id: 1, title: 'Acoustic Breeze', artist: 'Benjamin Tissot', src: 'https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3', albumArt: 'https://www.bensound.com/bensound-img/acousticbreeze.jpg' },
    { id: 2, title: 'Sunny', artist: 'Benjamin Tissot', src: 'https://www.bensound.com/bensound-music/bensound-sunny.mp3', albumArt: 'https://www.bensound.com/bensound-img/sunny.jpg' },
    { id: 3, title: 'Creative Minds', artist: 'Benjamin Tissot', src: 'https://www.bensound.com/bensound-music/bensound-creativeminds.mp3', albumArt: 'https://www.bensound.com/bensound-img/creativeminds.jpg' },
    { id: 4, title: 'Jazzy Frenchy', artist: 'Benjamin Tissot', src: 'https://www.bensound.com/bensound-music/bensound-jazzyfrenchy.mp3', albumArt: 'https://www.bensound.com/bensound-img/jazzyfrenchy.jpg' },
    { id: 5, title: 'Ukulele', artist: 'Benjamin Tissot', src: 'https://www.bensound.com/bensound-music/bensound-ukulele.mp3', albumArt: 'https://www.bensound.com/bensound-img/ukulele.jpg' },
  ]);

  const formatTime = (seconds: number): string => {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (isPlayerVisible) {
      setShouldRenderPlayer(true);
    } else {
      const timer = setTimeout(() => setShouldRenderPlayer(false), 300); // Match exit animation
      return () => clearTimeout(timer);
    }
  }, [isPlayerVisible]);

  // Audio logic hooks (simplified for brevity, same as before)
  useEffect(() => {
    const audio = audioPlayer.current; if (!audio || songs.length === 0) return;
    const currentSong = songs[currentSongIndex]; if (!currentSong) return;
    const newSrcAbsolute = new URL(currentSong.src, window.location.origin).href;
    if (audio.src !== newSrcAbsolute) audio.src = currentSong.src;
    if (isPlaying) audio.play().catch(e => { console.error("Play error:", e); setIsPlaying(false); }); else audio.pause();
  }, [currentSongIndex, songs, isPlaying]);

  useEffect(() => {
    const audio = audioPlayer.current; if (!audio) return;
    const updateProgress = () => { if (progressBar.current && audio.duration) progressBar.current.style.width = `${(audio.currentTime / audio.duration) * 100}%`; setCurrentTime(formatTime(audio.currentTime)); };
    const loadMeta = () => setDuration(formatTime(audio.duration || 0));
    const handleEnded = () => setCurrentSongIndex(prev => (prev + 1) % songs.length);
    const setPlay = () => setIsPlaying(true); const setPause = () => setIsPlaying(false);
    audio.addEventListener('timeupdate', updateProgress); audio.addEventListener('loadedmetadata', loadMeta); audio.addEventListener('ended', handleEnded); audio.addEventListener('play', setPlay); audio.addEventListener('pause', setPause);
    if (audio.readyState >= 1 && songs[currentSongIndex] && audio.src === new URL(songs[currentSongIndex].src, window.location.origin).href) loadMeta();
    return () => { audio.removeEventListener('timeupdate', updateProgress); audio.removeEventListener('loadedmetadata', loadMeta); audio.removeEventListener('ended', handleEnded); audio.removeEventListener('play', setPlay); audio.removeEventListener('pause', setPause); };
  }, [songs, currentSongIndex]);

  useEffect(() => {
    if (trackListRef.current && isPlayerVisible && songs.length > 0 && currentSongIndex < songs.length) {
      const el = trackListRef.current.children[currentSongIndex] as HTMLElement;
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [currentSongIndex, isPlayerVisible, songs.length]);

  const togglePlay = useCallback(() => { if (songs.length > 0) setIsPlaying(p => !p); }, [songs.length]);
  const playTrack = useCallback((idx: number) => { if (idx >= 0 && idx < songs.length) { setCurrentSongIndex(idx); setIsPlaying(true); }}, [songs.length]);
  const playNext = useCallback(() => { if (songs.length > 0) { setCurrentSongIndex(p => (p + 1) % songs.length); setIsPlaying(true); }}, [songs.length]);
  const playPrevious = useCallback(() => { if (songs.length > 0) { setCurrentSongIndex(p => (p - 1 + songs.length) % songs.length); setIsPlaying(true); }}, [songs.length]);
  const togglePlayerVisibility = useCallback(() => setIsPlayerVisible(p => !p), []);
  const closePlayer = useCallback((e?: MouseEvent<HTMLButtonElement>) => { e?.stopPropagation(); setIsPlayerVisible(false); }, []);
  const currentSongDetails: Song | null = songs[currentSongIndex] || null;
  const handleProgressClick = useCallback((e: MouseEvent<HTMLDivElement>) => { const audio = audioPlayer.current; if (!audio || !audio.duration) return; const rect = e.currentTarget.getBoundingClientRect(); audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration; }, []);
  const handleTrackKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>, idx: number) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); playTrack(idx); }}, [playTrack]);


  return (
    <>
      <style>{`
        /* ... (Root variables and base styles remain largely the same) ... */
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
        :root {
          --md-sys-color-primary: #6750A4; --md-sys-color-on-primary: #FFFFFF; --md-sys-color-primary-container: #EADDFF; --md-sys-color-on-primary-container: #21005D;
          --md-sys-color-secondary-container: #E8DEF8; --md-sys-color-on-secondary-container: #1D192B; --md-sys-color-tertiary-container: #FFD8E4;
          --md-sys-color-background: #FFFBFE; --md-sys-color-on-background: #1C1B1F; --md-sys-color-surface: #FFFBFE; --md-sys-color-on-surface: #1C1B1F;
          --md-sys-color-surface-variant: #E7E0EC; --md-sys-color-on-surface-variant: #49454F; --md-sys-color-surface-container: #F3EDF7;
          --md-sys-color-outline: #79747E; --md-sys-color-outline-variant: #CAC4D0;
          --md-sys-typescale-headline-small-font-family: 'Roboto', sans-serif; /* ... other typestyles */
          --md-sys-typescale-title-large-font-family: 'Roboto', sans-serif; --md-sys-typescale-title-medium-font-family: 'Roboto', sans-serif;
          --md-sys-typescale-body-large-font-family: 'Roboto', sans-serif; --md-sys-typescale-body-medium-font-family: 'Roboto', sans-serif;
          --md-sys-typescale-label-medium-font-family: 'Roboto', sans-serif;
          --md-sys-elevation-level1: 0px 1px 2px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15);
          --md-sys-elevation-level2: 0px 1px 2px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15);
          --md-sys-elevation-level3: 0px 4px 8px 3px rgba(0,0,0,0.15), 0px 1px 3px rgba(0,0,0,0.3);
          --md-sys-shape-corner-small: 8px; --md-sys-shape-corner-medium: 12px; --md-sys-shape-corner-large: 16px; --md-sys-shape-corner-full: 9999px;

          /* Sizing for minified/expanded player */
          --player-minified-height: 250px; /* Adjust based on minified content. Header, song details, progress, time, controls. */
          --player-expanded-max-height: 85vh; /* Max height of player when expanded */
        }
        body { font-family: var(--md-sys-typescale-body-large-font-family); background-color: var(--md-sys-color-background); color: var(--md-sys-color-on-background); margin: 0; line-height: 1.5; }

        /* General Transitions */
        .fab-toggle-button, .control-button, .track-item, .player-header .icon-button {
          transition: background-color 0.25s ease-out, color 0.25s ease-out, transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease-out;
        }
        .progress-bar { transition: width 0.1s linear; }

        /* FAB */
        .fab-toggle-button {
          /* ... (styles mostly same as before, opacity/transform transitions for show/hide) ... */
          position: fixed; bottom: 24px; right: 24px; width: 56px; height: 56px; border-radius: var(--md-sys-shape-corner-large);
          background-color: var(--md-sys-color-primary-container); color: var(--md-sys-color-on-primary-container); border: none;
          box-shadow: var(--md-sys-elevation-level2); cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 1000;
          opacity: 1; transform: scale(1) translateY(0);
          transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.25s ease-out, box-shadow 0.25s ease-out;
          pointer-events: auto;
        }
        .fab-toggle-button.fab-hidden { opacity: 0; transform: scale(0.8) translateY(10px); pointer-events: none; }
        .fab-toggle-button:hover:not(.fab-hidden) { transform: scale(1.05) translateY(-2px); box-shadow: var(--md-sys-elevation-level3); background-color: var(--md-sys-color-tertiary-container); }
        .fab-toggle-button:active:not(.fab-hidden) { transform: scale(0.98); }
        .fab-toggle-button svg { width: 24px; height: 24px; }

        /* Player Container - Handles minified/expanded and entrance/exit */
        .audio-player-container {
          position: fixed; bottom: 20px; right: 20px; width: 340px;
          background: var(--md-sys-color-surface-container);
          border-radius: var(--md-sys-shape-corner-large);
          box-shadow: var(--md-sys-elevation-level2);
          z-index: 1000;
          display: flex; flex-direction: column;
          padding: 16px; gap: 12px; /* Reduced gap for minified state */
          color: var(--md-sys-color-on-surface);

          /* Sizing & Animation for minified/expanded by hover */
          max-height: var(--player-minified-height);
          overflow: hidden; /* Crucial to clip content in minified state and during transition */
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
                      opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                      box-shadow 0.25s ease-out; /* Add shadow transition for hover */
          
          /* Initial state for entrance/exit animation (controlled by .player-visible) */
          opacity: 0; transform: translateY(20px) scale(0.95); pointer-events: none; 
        }
        .audio-player-container.player-visible { /* Entrance animation */
          opacity: 1; transform: translateY(0) scale(1); pointer-events: auto;
        }
        .audio-player-container.player-visible:hover { /* Expansion on hover */
          max-height: var(--player-expanded-max-height);
          box-shadow: var(--md-sys-elevation-level3); /* Increase shadow when expanded */
          /* overflow: auto; /* Optional: If you want the *entire player* to scroll if content (incl. full tracklist) exceeds max-height */
        }
        
        /* Header, Song Details, Progress, Time, Controls remain visible in minified state */
        .player-header { display: flex; justify-content: space-between; align-items: center; padding: 0 0 4px 0; /* Reduced padding */ }
        .player-header > span { font-size: 1em; /* Adjusted font-size for minified */ color: var(--md-sys-color-on-surface-variant); font-weight: 500; }
        .player-header .icon-button { background: transparent; border: none; color: var(--md-sys-color-on-surface-variant); padding: 8px; border-radius: var(--md-sys-shape-corner-full); cursor: pointer; display: inline-flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
        .player-header .icon-button:hover { background-color: color-mix(in srgb, var(--md-sys-color-on-surface-variant) 8%, transparent); }
        .player-header .icon-button svg { width: 20px; height: 20px; } /* Slightly smaller close icon */

        .song-details { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 4px; /* Reduced gap */ }
        .album-art { width: 64px; height: 64px; /* Smaller album art for minified */ object-fit: cover; border-radius: var(--md-sys-shape-corner-medium); box-shadow: var(--md-sys-elevation-level1); transition: width 0.3s ease, height 0.3s ease; }
        .audio-player-container.player-visible:hover .album-art { width: 100px; height: 100px; /* Larger on expand */ }
        .song-details h3 { margin: 0; font-size: 1.1em; /* Adjusted */ color: var(--md-sys-color-on-surface); font-weight: 500; }
        .song-details p { margin: 0; font-size: 0.85em; /* Adjusted */ color: var(--md-sys-color-on-surface-variant); }

        .progress-bar-container { background-color: var(--md-sys-color-surface-variant); border-radius: var(--md-sys-shape-corner-full); cursor: pointer; height: 6px; width: 100%; overflow: hidden; }
        .progress-bar { background-color: var(--md-sys-color-primary); height: 100%; border-radius: var(--md-sys-shape-corner-full); }
        .progress-bar-container:hover .progress-bar { background-color: color-mix(in srgb, var(--md-sys-color-primary) 80%, var(--md-sys-color-on-primary)); }

        .time-display { display: flex; justify-content: space-between; font-size: 0.8em; /* Adjusted */ color: var(--md-sys-color-on-surface-variant); padding: 0 4px; }

        .controls { display: flex; justify-content: center; align-items: center; gap: 10px; /* Reduced gap */ }
        .control-button { background-color: transparent; border: none; color: var(--md-sys-color-on-surface-variant); width: 40px; height: 40px; /* Slightly smaller controls */ border-radius: var(--md-sys-shape-corner-full); display: inline-flex; align-items: center; justify-content: center; cursor: pointer; position: relative; overflow: hidden; }
        .control-button:hover:not(:disabled) { background-color: color-mix(in srgb, var(--md-sys-color-on-surface-variant) 8%, transparent); }
        .control-button:disabled { color: var(--md-sys-color-outline); cursor: not-allowed; }
        .control-button svg { width: 22px; height: 22px; /* Adjusted icon size */ }
        .control-button.play-pause-button { background-color: var(--md-sys-color-primary-container); color: var(--md-sys-color-on-primary-container); width: 48px; height: 48px; /* Main play/pause slightly larger */ }
        .control-button.play-pause-button svg { width: 24px; height: 24px; }
        .control-button.play-pause-button:hover:not(:disabled) { background-color: var(--md-sys-color-primary); color: var(--md-sys-color-on-primary); transform: scale(1.05); box-shadow: var(--md-sys-elevation-level1); }
        .control-button:active:not(:disabled) { transform: scale(0.95); }
        .control-button.play-pause-button:active:not(:disabled) { transform: scale(0.92); }

        /* Track List - Hidden by default, revealed on player hover */
        .track-list {
          opacity: 0;
          transform: translateY(-10px); /* Start slightly up for reveal animation */
          transition: opacity 0.3s ease-out 0.1s, /* Delay opacity reveal after max-height starts */
                      transform 0.3s ease-out 0.1s;
          /* Height will be auto, it doesn't have its own max-height transition here */
          /* It's revealed because the parent .audio-player-container's max-height increases */
          background-color: var(--md-sys-color-surface);
          border-radius: var(--md-sys-shape-corner-small);
          margin-top: 8px; /* Space above tracklist when it appears */
          flex-shrink: 0; /* Important for layout within flex container */
          overflow: hidden; /* Clip children if track-item has box-shadow for example */
        }
        .audio-player-container.player-visible:hover .track-list {
          opacity: 1;
          transform: translateY(0);
        }
        .track-item { padding: 10px 14px; /* Slightly reduced padding */ cursor: pointer; border-bottom: 1px solid var(--md-sys-color-outline-variant); display: flex; flex-direction: column; gap: 1px; position: relative; overflow: hidden; }
        .track-item:last-child { border-bottom: none; }
        .track-item:hover:not(.active) { background-color: color-mix(in srgb, var(--md-sys-color-on-surface) 4%, transparent); transform: translateY(-1px); box-shadow: var(--md-sys-elevation-level1); }
        .track-item.active { background-color: var(--md-sys-color-secondary-container); transform: none; box-shadow: none; }
        .track-item.active .track-title { color: var(--md-sys-color-on-secondary-container); font-weight: 500; }
        .track-item.active .track-artist { color: var(--md-sys-color-on-secondary-container); }
        .track-title { font-size: 0.95em; color: var(--md-sys-color-on-surface); font-weight: 400; }
        .track-artist { font-size: 0.8em; color: var(--md-sys-color-on-surface-variant); }

        /* CSS Ripple Effect (same as before) */
        .control-button::after, .track-item::after, .fab-toggle-button::after, .player-header .icon-button::after { content: ''; position: absolute; top: 50%; left: 50%; width: 5px; height: 5px; background: currentColor; opacity: 0; border-radius: 100%; transform: scale(1) translate(-50%, -50%); transform-origin: 50% 50%; pointer-events: none; }
        .control-button.play-pause-button::after { background: var(--md-sys-color-on-primary); }
        .fab-toggle-button::after { background: var(--md-sys-color-on-primary-container); }
        .player-header .icon-button::after { background: var(--md-sys-color-on-surface-variant); }
        .control-button:active::after, .track-item:active::after, .fab-toggle-button:active::after, .player-header .icon-button:active::after { transition: transform 0.4s cubic-bezier(0,0,0.2,1), opacity 0.5s cubic-bezier(0,0,0.2,1); transform: scale(35) translate(-50%,-50%); opacity: 0.12; }
      `}</style>

      <audio ref={audioPlayer} preload="metadata" style={{ display: 'none' }} />

      <button
        onClick={togglePlayerVisibility}
        className={`fab-toggle-button ${isPlayerVisible ? 'fab-hidden' : ''}`} // FAB hidden when player is visible
        aria-label={isPlayerVisible ? 'Hide Music Player' : 'Show Music Player'}
      >
        <MusicNoteIcon />
      </button>

      {shouldRenderPlayer && ( // Conditionally render player for exit animation
        <div className={`audio-player-container ${isPlayerVisible ? 'player-visible' : ''}`}>
          <div className="player-header">
            <span>Now Playing</span>
            <button onClick={closePlayer} aria-label="Close Player" className="icon-button">
              <CloseIcon />
            </button>
          </div>

          <div className="song-details">
            <img
              src={currentSongDetails?.albumArt || '/album-art/default.png'}
              alt={currentSongDetails?.title || 'Album Art'}
              className="album-art"
              onError={(e) => (e.currentTarget.src = '/album-art/default.png')}
            />
            <h3>{currentSongDetails?.title || 'No Song Selected'}</h3>
            <p>{currentSongDetails?.artist || 'Unknown Artist'}</p>
          </div>

          <div className="progress-bar-container" onClick={handleProgressClick}>
            <div ref={progressBar} className="progress-bar"></div>
          </div>
          <div className="time-display">
            <span>{currentTime}</span>
            <span>{duration}</span>
          </div>

          <div className="controls">
            <button onClick={playPrevious} disabled={songs.length === 0} aria-label="Previous Song" className="control-button">
              <SkipPreviousIcon />
            </button>
            <button onClick={togglePlay} disabled={songs.length === 0} aria-label={isPlaying ? 'Pause' : 'Play'} className="control-button play-pause-button">
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
            <button onClick={playNext} disabled={songs.length === 0} aria-label="Next Song" className="control-button">
              <SkipNextIcon />
            </button>
          </div>

          {/* Track list is always in the DOM if songs exist, its visibility is CSS controlled */}
          {songs.length > 0 && (
            <div ref={trackListRef} className="track-list">
              {songs.map((song, index) => (
                <div
                  key={song.id}
                  className={`track-item ${index === currentSongIndex ? 'active' : ''}`}
                  onClick={() => playTrack(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => handleTrackKeyDown(e, index)}
                >
                  <span className="track-title">{song.title}</span>
                  <span className="track-artist">{song.artist}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}