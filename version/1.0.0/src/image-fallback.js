// Image-Fallback.js
// Created by github.com/MarketingPipeline
// Add image load errors with ease!

// Function to detect image load errors   
// https://stackoverflow.com/questions/9815762/detect-when-an-image-fails-to-load-in-javascript

// Listen for Image Success and Errors
function testImage(imgElement) {
    // Define the promise
    const imgPromise = new Promise(function imgPromiseCheck(resolve, reject) {
        // When image is loaded, resolve the promise
        imgElement.addEventListener('load', function imgOnLoad() {
            resolve(this);
        });
        // When there's an error during load, reject the promise
        imgElement.addEventListener('error', function imgOnError() {
            reject();
        })
    });
    return imgPromise;
}

//Gather all img elements on page
let images = document.getElementsByTagName('img');
//Check all images for any promise errors
for (let image of images) {
	//Promise returned
	testImage(image).then(
	//On success, do nothing
    function success() {
    },
	//On image loading error		
    function rejected() {
		//Replace errored image source with fallback picture of Image Not Found
        image.setAttribute("src", "http://placehold.jp/500x333.png?text=Image Error");
    }
);
}