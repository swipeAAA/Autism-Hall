document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');

    fetch('images.json')
        .then(response => response.json())
        .then(images => {
            images.forEach(image => {
                const box = document.createElement('div');
                box.className = 'box';

                const img = document.createElement('img');
                img.src = image;
                img.alt = 'Image';

                box.appendChild(img);
                container.appendChild(box);
            });
        })
        .catch(error => console.error('Error loading images:', error));
});
