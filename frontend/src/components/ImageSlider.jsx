import { useEffect, useRef } from 'react';
// Assuming the image imports are correct
import img1 from '../images/carslide1.png';
import img2 from '../images/carslide2.png';
import img3 from '../images/carslide3.png';
import img4 from '../images/carslide4.png';


function ImageSlider() {
    // 1. Create Refs for the main DOM elements you need to manipulate
    const sliderRef = useRef(null);
    const sliderListRef = useRef(null);
    const thumbnailRef = useRef(null);

    // NOTE: In a true React application, state (useState) would be preferred 
    // over direct DOM manipulation for moving elements, but since the original
    // code relies on appending elements, we stick to Refs.

    // A utility function to access the current elements
    const getElements = () => {
        const slider = sliderRef.current;
        const sliderList = sliderListRef.current;
        const thumbnail = thumbnailRef.current;

        // Exit early if any ref is null (shouldn't happen after mount)
        if (!slider || !sliderList || !thumbnail) return null;

        return {
            slider,
            sliderList,
            thumbnail,
            sliderItems: sliderList.querySelectorAll('.item'),
            thumbnailItems: thumbnail.querySelectorAll('.item')
        };
    };

    function moveSlider(direction) {
          
        const elements = getElements();
       
        if (!elements) return; // Safety check

        const { slider, sliderList, thumbnail, sliderItems, thumbnailItems } = elements;
     
        // IMPORTANT: We need to use requestAnimationFrame to ensure the class
        // additions for CSS transition happen after the DOM updates.

        if (direction === 'next') {
            // Move the first item to the end of the list
            sliderList.appendChild(sliderItems[0]);
            thumbnail.appendChild(thumbnailItems[0]);
            
            // Add the class for animation, then remove it
            slider.classList.add('next');

        } else {
            // Move the last item to the start of the list
            sliderList.prepend(sliderItems[sliderItems.length - 1]);
            thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);

            // Add the class for animation, then remove it
            slider.classList.add('prev');
        }

        // Handle animationend (note: this logic is still mixing concerns, 
        // a pure React approach would use state, but we mimic the original logic)
        const handleAnimationEnd = () => {
             if(direction === 'next'){
                 slider.classList.remove('next');
             } else {
                 slider.classList.remove('prev');
             }
             slider.removeEventListener('animationend', handleAnimationEnd);
        }

        // Attach listener to remove the class after the transition finishes
        slider.addEventListener('animationend', handleAnimationEnd);
       
            

    }

    // Since the buttons are inside the JSX, we attach the event handlers directly
    // to the JSX element, which is the React way.
   
    return (
        <>
            {/* 2. Attach the refs to the corresponding JSX elements */}
            <div className="slider" ref={sliderRef}>
                <div className="list" ref={sliderListRef}>
                    
                    {/* SLIDER ITEMS HERE */}
                    <div className="item">
                        <img src={img1} alt=""/>
                        <div className="content">
                            <div className="title">Meet our car and Service</div>
                            <div className="type">car shop</div>
                            <div className="description">
                                find your favorite car or get some our service for your care car to look like blandnew alway time. too many thing we prepare for you to find out in our website. 
                            </div>
                            <div className="flex button">
                                <button>SEE MORE</button>
                            </div>
                        </div>
                    </div>
                    {/* ... other slider items ... */}
                    <div className="item"><img src={img2} alt=""/> <div className="content">...</div> </div>
                    <div className="item"><img src={img3} alt=""/> <div className="content">...</div> </div>
                    <div className="item"><img src={img4} alt=""/> <div className="content">...</div> </div>

                </div>

                <div className="thumbnail" ref={thumbnailRef}>
                    {/* THUMBNAIL ITEMS HERE */}
                    <div className="item"><img src={img1} alt=""/></div>
                    <div className="item"><img src={img2} alt=""/></div>
                    <div className="item"><img src={img3} alt=""/></div>
                    <div className="item"><img src={img4} alt=""/></div>
                </div>

                <div className="nextPrevArrows">
                    {/* 3. Attach the event handlers directly to the JSX buttons */}
                    <button className="prev" onClick={() => moveSlider('prev')}> {"<"} </button>
                    <button className="next" onClick={() => moveSlider('next')}> {">"} </button>
                </div>
            </div>
        </>
    );
}

export default ImageSlider;