import {useState} from "react"


let structure = {
  standA : {
    tier1: [ "block1" , "block2" , "block3" , "block4"],
    tier2: ["block5" , "block6"],
    tier3: ["block7" , "block8" , "block9"]
  },
  standB : {
    tier4: [ "block10"],
    tier5: ["block11" , "block12" , "block13"],
  }
}


function App() {

  let [option, changeOption] = useState("block1");

  let list = [];


  

  for (const [key, value] of Object.entries(structure)) {
    for (const [key1, value1] of Object.entries(value)) {
      for (const [key2, value2] of Object.entries(value1)) {
        if(value2 === option) {
          console.log(key,key1,value2)
          list.push(key);
          list.push(key1);
          list.push(value2);
        }

      }
    }
  }



  return (
    <div className="App" style={{fontSize:"30px" , paddingTop:"30px"}}>
     <select value={option} onChange={(e)=>changeOption(option = e.target.value)}>
        <option value="block1">block1</option>
        <option value="block2">block2</option>
        <option value="block3">block3</option>
        <option value="block4">block4</option>
        <option value="block5">block5</option>
        <option value="block6">block6</option>
        <option value="block7">block7</option>
        <option value="block8">block8</option>
        <option value="block9">block9</option>
        <option value="block10">block10</option>
        <option value="block11">block11</option>
        <option value="block12">block12</option>
        <option value="block13">block13</option>
    </select>
    <div style={{fontSize:"30px" , paddingTop:"30px"}}>
      {`${list[2]} is inside ${list[1]} where is inside ${list[0]}`}
    </div>
    </div>
  );
}

export default App;
