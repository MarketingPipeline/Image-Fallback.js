var defaultImgError = "http://placehold.jp/500x333.png?text=Image Error"
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
	image.setAttribute("data-test", image.src)
	//Promise returned
	testImage(image).then(
	//On success, do nothing
    function success() {
    },
	//On image loading error		
    function rejected() {
		//Replace errored image source with fallback picture of Image Not Found
        image.setAttribute("src", defaultImgError);
    }
);
}

if ('IntersectionObserver' in window) {

// Lazy Load Images using Intersection Observer
(function () {
	var observer = new IntersectionObserver(onIntersect);

	Array.from(document.getElementsByTagName('img')).forEach((img) => {
		observer.observe(img);
	});

	function onIntersect(entries) {
		entries.forEach((entry) => {
			if (entry.target.getAttribute("data-processed") || !entry.isIntersecting)
				return true;
			entry.target.setAttribute("src", entry.target.getAttribute("data-src"));
			entry.target.setAttribute("data-processed", true);
		});
	}
})();
}

/// Allow image error default to be switched with ease... 
if (typeof ImageError !== 'undefined') {
   // Image error (VARIABLE) was defined on page
	defaultImgError = ImageError
} /*

else{
	// Image error was not found.. 
}

*/
