const imageFolder = './assets/photo/';
const container = document.getElementsByClassName('gallery')[0];

const scale = 0.1;

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Trigger the image load when the card becomes visible
            if (entry.target._loadImage) {
                entry.target._loadImage();
            }
            // Stop watching this element once it has loaded
            observer.unobserve(entry.target);
        }
    });
}, {
    rootMargin: '200px' // Preloads images 200px before they enter the screen for smooth scrolling
});

fetch('./assets/json/photo.json')
    .then(response => response.json())
    .then(images => {
        images.forEach(image => {

            // Create <a> element
            const link = document.createElement('a');
            link.className = 'polaroid_hyperlink';
            link.href = imageFolder + image.file;
            link.target = '_blank';

            // Create outer div with class 'polaroid'
            var wrapper = document.createElement('div');
            wrapper.className = 'polaroid';

            const canvas = document.createElement('canvas');

            // Create <figcaption> with two lines
            const caption = document.createElement('figcaption');
            caption.innerHTML = `${image.text}`;

            // Build the structure
            wrapper.appendChild(canvas);
            wrapper.appendChild(caption);
            link.appendChild(wrapper);
            container.appendChild(link);

            link._loadImage = () => {
                const img = document.createElement('img');
                img.src = imageFolder + image.file;

                // substitute it with canvas and resize it to 10% of original sizes
                img.onload = () => {
                    canvas.width = img.naturalWidth * scale;
                    canvas.height = img.naturalHeight * scale;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                };
            };

            imageObserver.observe(link);
        });
    })
    .catch(err => console.error('Error loading images: ', err));