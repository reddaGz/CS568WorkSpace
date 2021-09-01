export default function FunctionalComponenet(){
    const state={
        name:"Jhon",
        address:"127 Marthing luther king "
    }
    return (
        <div>

          <h1>Functional component</h1>
          <p>Address of {state.name} is {state.address}</p>
        </div>
    )
}