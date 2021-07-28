const Block = (props) => {
  return (
    <div className ="Text0">
          <h1>{props.title}</h1>
          <h3>you have consumed 56 cals today</h3>
          
          <div className ="Text1">
          <h1>Burger</h1>
          <h3>you have consumed 69 cals today</h3>
         
          <div className ="Text3">
          <h1>Browne</h1>
          <h3>you have consumed 105 cals today</h3>
          
          <div className ="Text4">
          <h1>Coke</h1>
          <h3>you have consumed 206 cals today</h3>

          <div className ="Text5">
          <h1>Fried Rice</h1>
          <h3>you have consumed 506 cals today</h3>
        <div className ="Text6">
          <h1>Lassania</h1>
          <h3>you have consumed 356 cals today</h3>
          <div className ="Text7">
          <h1>Pani Puri</h1>
          <h3>you have consumed 10 cals today</h3>
          </div>
          </div>
          </div>
      </div>
        </div>
        </div>
        </div>
  )
}

Block.defaultsProps={
  title:'Pizza'
}

export default Block





