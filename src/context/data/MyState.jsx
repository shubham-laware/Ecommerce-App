import myContext from "./myContext";


function MyState(props){
    const state={
        name:"mystate",
        id:1
    }
    const msg="Welcome"
    return(
        <myContext.Provider value={{state,msg}}>
            {props.children}
        </myContext.Provider>
    )
}

export default MyState;