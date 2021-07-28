export default function Templates(props)
{
    return(
        <div>
        {props.temp.map((temp) => (

            <div 
            key={temp.id} 
            className="template"
             onClick={()=>{
                props.setMeme(temp)
            }}>
              <div style={{backgroundImage:`url(${temp.url})`}} className='img'></div>
            </div>

           
          ) )}

          </div>
    )
}