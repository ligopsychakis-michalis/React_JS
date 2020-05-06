import React, {useState} from 'react';

export function DogGallery(){
    const [dogPhotos, setDogPhotos] = useState(null);

    async function getDogPhoto(){
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await res.json();
        console.log(data);
        setDogPhotos(data);
        return;
    };

    return (
        <div>
            <Button handleClick={getDogPhoto} />
            <br/>
            <br/>
            <DogPhoto dogPhoto={dogPhotos}/>
        </div>    
    );
};


function DogPhoto({dogPhoto}){
    if(dogPhoto){
        if(dogPhoto.status == 'success'){
            return <img src={dogPhoto.message} alt="dog photo" width={500}/>;
        }else if (dogPhoto.status != 'success'){ 
            return <p>Something wrong with Fetch...</p>; 
        }
    }
    return <p>Get your first dog by clicking the button!</p>; 
};


function Button({handleClick}){
    return <button onClick={handleClick} >Get a dog!</button>; 
};