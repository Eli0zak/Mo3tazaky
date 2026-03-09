import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function ChevronLeft() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
        </svg>
    );
}

function ChevronRight() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
        </svg>
    );
}

// Gradient placeholder slide when no real image is provided
function PlaceholderSlide({ index, gradient, label }) {
    return (
        <div
            className="img-slide-placeholder"
            style={{ background: gradient }}
        >
            <div className="img-slide-label">
                <span className="img-slide-num">0{index + 1}</span>
                <span className="img-slide-text">{label}</span>
            </div>
        </div>
    );
}

export default function ImageSlider({ slides }) {
    const { i18n } = useTranslation();
    const isAr = i18n.language === 'ar';
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const total = slides.length;

    const goTo = (idx, dir) => {
        setDirection(dir);
        setCurrent((idx + total) % total);
    };

    const prev = () => goTo(current - 1, -1);
    const next = () => goTo(current + 1, 1);

    // Touch / drag handling
    const dragStart = useRef(null);
    const handleDragStart = (e) => {
        dragStart.current = e.touches ? e.touches[0].clientX : e.clientX;
    };
    const handleDragEnd = (e) => {
        if (dragStart.current === null) return;
        const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
        const diff = dragStart.current - endX;
        if (Math.abs(diff) > 50) {
            diff > 0 ? next() : prev();
        }
        dragStart.current = null;
    };

    const variants = {
        enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
    };

    const slide = slides[current];
    const captionText = slide?.caption
        ? (typeof slide.caption === 'string' ? slide.caption : (isAr ? slide.caption.ar : slide.caption.en))
        : null;

    return (
        <div className="img-slider">
            {/* Main slide area */}
            <div
                className="img-slider-track"
                onMouseDown={handleDragStart}
                onMouseUp={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchEnd={handleDragEnd}
            >
                <AnimatePresence mode="popLayout" custom={direction}>
                    <motion.div
                        key={current}
                        className="img-slide"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.42, ease: [0.4, 0, 0.2, 1] }}
                    >
                        {slide.src ? (
                            slide.type === 'video' || slide.src.match(/\.(mp4|webm)$/i) ? (
                                <video
                                    src={slide.src}
                                    className="img-slide-img"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            ) : (
                                <img src={slide.src} alt={slide.label} className="img-slide-img" />
                            )
                        ) : (
                            <PlaceholderSlide index={current} gradient={slide.gradient} label={slide.label} />
                        )}
                        {/* Caption overlay */}
                        {captionText && (
                            <div className="img-slide-caption">{captionText}</div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="img-slider-controls">
                <button className="img-slider-btn" onClick={prev} aria-label="Previous">
                    <ChevronLeft />
                </button>

                {/* Dots */}
                <div className="img-slider-dots">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            className={`img-dot ${i === current ? 'img-dot--active' : ''}`}
                            onClick={() => goTo(i, i > current ? 1 : -1)}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>

                <button className="img-slider-btn" onClick={next} aria-label="Next">
                    <ChevronRight />
                </button>
            </div>

            {/* Counter */}
            <div className="img-slider-counter">
                <span className="img-counter-current">{String(current + 1).padStart(2, '0')}</span>
                <span className="img-counter-sep"> / </span>
                <span className="img-counter-total">{String(total).padStart(2, '0')}</span>
            </div>
        </div>
    );
}
