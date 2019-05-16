class Scroll {
    constructor(elements) {
        this.page = document.querySelector(".js-body");

        this.isElementInViewport(elements);
    }

    isElementInViewport(element) {
        //Vars 
        const el = Array.from(document.querySelectorAll('.element')),

        watch = (entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0) {
                    
                    // Adds Class when element comes into view
                    entry.target.classList.add('in-viewport');

                    // Unobserves this element
                    observer.unobserve(entry.target);
                }
            })
        };
            
        const observer = new IntersectionObserver(watch);

        el.forEach((val) => {
            observer.observe(val);
        });
    }
}

export default Scroll;
