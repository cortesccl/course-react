const getImage = async() => {
    try {
        const apiKey = 'onG0rCcOuINHW8ldLXsgu4RThA5GiySB';
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data}  = await response.json();
        const {url} = data.images.original;
        console.log(url);
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        //manejo del error
        console.error(error);
    }
 
}

getImage().then(console.log);

