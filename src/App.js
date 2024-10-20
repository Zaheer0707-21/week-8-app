import SInput from "./compounds/singleinput"
import Multiinputs from "./compounds/multiinputs"
import Addinginputs from "./compounds/Addinginputs"
import Random from "./compounds/random-num"
import Task1 from "./compounds/week8-task-01"
import Task2 from "./compounds/week8-task-02"
import Shoppinglist from "./compounds/Shoppinglist"
import Colourchanging from "./compounds/Colourchanging"
import List from "./compounds/check-list"
import Login from "./compounds/login"
import Task3 from "./compounds/week8-task-03"
import Task4 from "./compounds/week8-task-04"
import Task5 from "./compounds/week8-task-05"
const App=()=>{
  return(
     <>
      <SInput/>
      <Multiinputs/>
      <Addinginputs/>
      <Random/>
      <Task1/>
      <Task2/>
      <Task3/>
      <Task4/>
      <Task5/>
      <Shoppinglist/>
      <Colourchanging/>
      <List/>
     </>
  )

}
 export default App