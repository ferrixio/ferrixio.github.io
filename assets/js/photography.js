const imageFolder = './assets/css/photo/';
const container = document.querySelector('photo-container');

fetch('https://ferrixio.github.io/assets/js/photo.json')
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

            // Create <img> element
            const img = document.createElement('img');
            img.src = imageFolder + image.file;
            img.style.objectPosition = `${image.position}`; // Or set this dynamically if needed

            // Create <figcaption> with two lines
            const caption = document.createElement('figcaption');
            caption.innerHTML = `${image.text}<br>${image.date}`;

            // Build the structure
            link.appendChild(img);
            link.appendChild(caption);
            wrapper.appendChild(link);
            container.appendChild(wrapper);
        });
    })
    .catch(err => console.error('Error loading images: ', err));