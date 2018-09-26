import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            header : "this is header",
            content : "this is content",
            data:
            [
                {
                    "id": 1,
                    "name": "a",
                    "age" : "20"
                },
                {
                    "id": 2,
                    "name": "b",
                    "age" : "30"
                },
                {
                    "id": 3,
                    "name": "c",
                    "age" : "40"
                }
            ],
            dataemp:[] 
        }

        this.setStatehandler =  this.setStatehandler.bind(this);
    };
    setStatehandler(){
        var item = "setState....";
        var myarr = this.state.dataemp.slice();
        myarr.push(item);
        this.setState({dataemp : myarr});
    }
   render() {
       var i = 2;
       var css ={
        color: 'red'
       };
       var css2 ={
        color: 'blue'
       };
      return (
         <div style = {css}>
            Hello World!!
           <h1>{1 + 1}</h1> 
            <h1 style = {css2}>{i === 1 ? 'true' : 'false'}</h1>
            <Header/>
            <Content/>
            <table>
                <tbody>
                    {this.state.data.map((person, i) => <TableRow key = {i}
                    data = {person}/>)}
                </tbody>
            </table>
            <h3>{this.state.header}</h3>
            <h3>{this.state.content}</h3>

            <button onClick = {this.setStatehandler}>SET STATE</button>
            <h4>State Array: {this.state.dataemp}</h4>

         </div>
      );
   }
}

class TableRow extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}

class Header extends React.Component {
    render() {
       return (
          <div>
             <h1>Header!!!</h1>
          </div>
       );
    }
 }
 class Content extends React.Component {
    render() {
       return (
          <div>
             <h2>Content</h2>
             <p>The content text!!!</p>
          </div>
       );
    }
 } 
export default App;