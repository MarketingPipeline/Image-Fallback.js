// Image-Fallback.js
// Created by github.com/MarketingPipeline
// Add image load errors with ease!






/// Function to detect image load errors   
///// https://stackoverflow.com/questions/9815762/detect-when-an-image-fails-to-load-in-javascript

function testImage(url) {

    // Define the promise
    const imgPromise = new Promise(function imgPromise(resolve, reject) {

        // Create the image
        const imgElement = new Image();

        // When image is loaded, resolve the promise
        imgElement.addEventListener('load', function imgOnLoad() {
            resolve(this);
        });

        // When there's an error during load, reject the promise
        imgElement.addEventListener('error', function imgOnError() {
            reject();
        })

        // Assign URL
        imgElement.src = url;

    });

    return imgPromise;
}


/// Check all images on pages for any errors

let images = document.getElementsByTagName('img')

for (image of images) {
	testImage(image.src).then(

// If an error occured		
		
  // Show Fallback / Image Not Found (Picture)		
    function rejected() {
        image.setAttribute("src", "http://placehold.jp/500x333.png?text=Image Error");

    }

);
}
