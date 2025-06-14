const imageFolder = './assets/css/photo/';
const container = document.getElementById('photo-container');

const scale = 0.1;

// fetch('https://ferrixio.github.io/assets/js/photo.json')
fetch('./assets/js/photo.json')
    .then(response => response.json())
    .then(images => {
        images.forEach(image => {
            // Create outer div with class 'polaroid'
            var wrapper = document.createElement('div');
            wrapper.className = 'polaroid';

            // Create <a> element
            const link = document.createElement('a');
            link.href = imageFolder + image.file;
            link.target = '_blank';

            const canvas = document.createElement('canvas');

            // Create <figcaption> with two lines
            const caption = document.createElement('figcaption');
            caption.innerHTML = `${image.text}<br>${image.date}`;

            // Create <img> element
            const img = document.createElement('img');
            img.src = imageFolder + image.file;
            img.style.objectPosition = `${image.position}`;

            // Build the structure
            link.appendChild(canvas);
            link.appendChild(caption);
            wrapper.appendChild(link);
            container.appendChild(wrapper);

            // substitute it with canvas and resize it to 10% of original sizes
            img.onload = () => {
                canvas.width = img.naturalWidth * scale;
                canvas.height = img.naturalHeight * scale;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
        });
    })
    .catch(err => console.error('Error loading images: ', err));