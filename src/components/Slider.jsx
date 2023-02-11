import React, { useCallback, useEffect, useRef, useState } from 'react';

const slideStyles = {
    width: '100%',
    height: "100%",
    backgroundSize: 'cover',
    backgroundPosition: "center",
}
const containerSlideStyle = {
    display: "flex",
    height: "100%",
    transition: "transform ease-out 0.3s",
}
const slidesContainerOverflowStyles = {
    overflow: "hidden",
    height: "100%",
};

const Slider = ({ slides, parentWidth }) => {
    //* Cracion de slider
    const timeranimating = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    
    const goToNext = useCallback(() => {
        const islastIndex = currentIndex === slides.length - 1;
        const newIdex = islastIndex ? 0 : currentIndex + 1;
        setCurrentIndex(newIdex);
    }, [currentIndex, slides]);

    const gotoIndex = (indexSlide) => {
        setCurrentIndex(indexSlide);
    }
    const getSlideStylesWithBackground = (slideIndex) => ({
        ...slideStyles,
        backgroundImage: `url(${slides[slideIndex].url})`,
        width: `${parentWidth}px`,
    });
    const getSlidesContainerStylesWithWidth = () => ({
        ...containerSlideStyle,
        width: parentWidth * slides.length,
        transform: `translateX(${-(currentIndex * parentWidth)}px)`
    })
    useEffect(() => {
        if (timeranimating.current) {
            clearTimeout(timeranimating.current);
        }

        timeranimating.current = setTimeout(() => {
            goToNext();
        }, 5000);

        return () => clearTimeout(timeranimating.current);
    }, [goToNext])
    return (
        <div className='containerImgSlide' >
            <div className='degradadoSlide'></div>
            <div className='opacity'></div>

            <div style={slidesContainerOverflowStyles}>
                <div style={getSlidesContainerStylesWithWidth()}>
                    {slides.map((_, slideIndex) => (
                        <div
                            key={slideIndex}
                            className='imageWidth'
                            style={getSlideStylesWithBackground(slideIndex)}
                        ></div>

                    ))}
                </div>
            </div>

            <div className='containerButtom'>
                {slides.map((slide, indexSlide) =>
                    <div key={indexSlide}
                        onClick={() => gotoIndex(indexSlide)}
                        className={currentIndex === indexSlide ? 'ButtonGoToIndex active' : 'ButtonGoToIndex '}
                    >
                    </div>
                )}
            </div>
        </div >

    );
};

export default Slider;