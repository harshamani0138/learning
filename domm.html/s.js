function father(){
    console.log("father");
    <button onClick="mother()">click2</button>
}

  function  mother(){
        console.log("mother");
        <button onClick="child">click3</button>
    }
      function  child(){
            console.log("child");

        }