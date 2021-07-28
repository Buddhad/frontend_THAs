import { useState } from "react";
import { saveAs } from 'file-saver'

 const Meme=({meme, setMeme})=>
{

    const[form, setForm]=useState({
        template_id: meme.id,
        username:"vandanaa_aroraa",
        password:"HelloHey",
        boxes:[]
    });

    const memeGenerator=()=>{
        let url=`https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`

        
        form.boxes.map((bx,idx)=>{
        url+= `&boxes[${idx}][text]=${bx.text}`;
        });
      
        fetch(url)
        .then((res) =>res.json())
        .then((data) =>{
            if(data.success===true){
          setMeme({...meme, url: data.data.url});
            }

            else{
                alert(`Please fill all the ${meme.box_count} boxes`);
            }
        })
      
    };


    return(
        <div className="meme">
        <img src={meme.url} />
        <br />
          
        {[...Array(meme.box_count)].map((el,idx)=>(
    
         <input key={idx} type="text" placeholder={`Meme Caption ${idx+1}`} onChange={(e)=>{
             const txtArray = form.boxes;
            txtArray[idx]= {text:e.target.value} 
            
            setForm({...form,boxes:txtArray})
           

         }}  />

        ))}
     
     <button onClick={memeGenerator}>Generate Meme</button>
     <button onClick={()=>{
         setMeme(null);
     }}>Choose Template</button>


      <button onClick={ ()=> {saveAs(meme.url, 'image.jpg')}}>Download Meme</button>


        </div>
    )
}

export default Meme;