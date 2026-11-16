import { useCallback, useEffect, useRef, useState } from 'react';
import type { FocusEvent, PointerEvent as ReactPointerEvent } from 'react';

type MediaPanelProps = {
  id: 'fashion' | 'accessories';
  title: string;
  cta: string;
  ctaAriaLabel: string;
  posterSrc: string;
  videoSrc: string;
  href: string;
  prefersReducedMotion: boolean;
};

export function MediaPanel({
  id,
  title,
  cta,
  ctaAriaLabel,
  posterSrc,
  videoSrc,
  href,
  prefersReducedMotion,
}: MediaPanelProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const engagedRef = useRef(false);
  const playRequestRef = useRef(0);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  const stopVideo = useCallback(() => {
    engagedRef.current = false;
    playRequestRef.current += 1;
    setIsVideoVisible(false);

    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.pause();
    try {
      video.currentTime = 0;
    } catch {
      // Metadata may not be available yet; the next play starts from frame zero.
    }
  }, []);

  const startVideo = useCallback(() => {
    if (prefersReducedMotion || videoFailed) {
      return;
    }

    const video = videoRef.current;
    if (!video) {
      return;
    }

    engagedRef.current = true;
    video.muted = true;

    const requestId = playRequestRef.current + 1;
    playRequestRef.current = requestId;

    void video
      .play()
      .then(() => {
        if (!engagedRef.current || requestId !== playRequestRef.current) {
          if (!engagedRef.current) {
            video.pause();
            try {
              video.currentTime = 0;
            } catch {
              // Ignore reset failures when the media is not ready.
            }
          }
          return;
        }

        setIsVideoVisible(true);
      })
      .catch(() => {
        if (requestId === playRequestRef.current) {
          setIsVideoVisible(false);
        }
      });
  }, [prefersReducedMotion, videoFailed]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      stopVideo();
    }
  }, [prefersReducedMotion, stopVideo]);

  const handlePointerEnter = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType === 'mouse') {
      startVideo();
    }
  };

  const handlePointerLeave = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType === 'mouse') {
      stopVideo();
    }
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse') {
      startVideo();
    }
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse') {
      stopVideo();
    }
  };

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    const nextTarget = event.relatedTarget;
    if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
      stopVideo();
    }
  };

  return (
    <section
      className={`panel panel--${id}`}
      aria-labelledby={`${id}-title`}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={stopVideo}
      onFocusCapture={startVideo}
      onBlurCapture={handleBlur}
    >
      <div className="panel__media" aria-hidden="true">
        {!posterFailed && (
          <img
            className="panel__poster"
            src={posterSrc}
            alt=""
            draggable={false}
            onError={() => setPosterFailed(true)}
          />
        )}
        {!videoFailed && (
          <video
            ref={videoRef}
            className={`panel__video${isVideoVisible ? ' is-visible' : ''}`}
            src={videoSrc}
            muted
            loop
            playsInline
            preload="metadata"
            tabIndex={-1}
            disablePictureInPicture
            onError={() => {
              setVideoFailed(true);
              setIsVideoVisible(false);
            }}
          />
        )}
      </div>

      <div className="panel__overlay" aria-hidden="true" />

      <div className="panel__content">
        <h2 id={`${id}-title`} className="panel__title">
          {title}
        </h2>
        <a className="panel__cta" href={href} aria-label={ctaAriaLabel}>
          {cta}
        </a>
      </div>
    </section>
  );
}
