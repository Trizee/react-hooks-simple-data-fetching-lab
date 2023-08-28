// create your App component here
import react,{useState , useEffect} from "react";

function App(){

    const [dogImg,setDogImg] = useState(false)
    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r => r.json())
        .then(data => setDogImg(data.message))
    },[])

    console.log(dogImg)

    if(!dogImg) return <p>Loading...</p>;
    else return <img src={dogImg} alt="A Random Dog"/>


}

export default App