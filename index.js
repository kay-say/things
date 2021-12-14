// class App extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             count: 0
//         }
//         this.handleClick=this.handleClick.bind(this)
//     }
//     handleClick(){
//         this.setState({count: this.state.count+1})
//     }
//     render(){
//         return(
//             <div>
//                 <button onClick={this.handleClick}>Add thing</button>
//                 <p>{this.state.count}</p>
//             </div>
//         )
//     }

// }
// ReactDOM.render(<App />,document.getElementById("root"))

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            things: ["thing1","thing2"]
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        const newThingText = `Thing${this.state.things.length + 1}`
        //this.setState({things:["asas","sasasasas asasas"]})
        this.setState({things:[...this.state.things,newThingText]})
        console.log(this.state.things)
    }
    render(){
        const list=this.state.things.map(item=><p>{item}</p>)
        return(
            <div>
                <button onClick={this.handleClick}>Add thing</button>
                {list}
            </div>
        )
    }

}
ReactDOM.render(<App />,document.getElementById("root"))