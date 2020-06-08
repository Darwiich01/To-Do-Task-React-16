import React , {Component } from 'react';

class App extends Component 
  {
      constructor(props)
      {
        super(props);
        this.state ={
          userName : "Darwish",
          todoItems : [{action:'ABC', done: false}, {action:'Workout', done: true}, {action:'Study', done:true}],
          newItem : " "
        }
        
      }


      render()
      {
        return (
                <div>
                  <h4 className="bg-primary text-white text-center p-2">  
                     
                     {this.state.userName} To Do List  
                     {this.state.todoItems.filter(t=> !t.done).length  } itmes</h4>
               
                <div className="container-fluid">
                  <div className="my-1">
                    
                    <input 
                    className="form-control" 
                    value={this.state.newItem} 
                    onChange={this.updateNewItemValue} />
                    
                    <button className="btn btn-warning my-1 " onClick={this.createNewTodo} > Add  </button>
                  </div>

                  <table className="table table-striped table-bordered">
                        <thead>
                          <tr>
                            <td>Description</td>
                            <td>Status</td>
                          </tr>
                        </thead>
                        <tbody>  {this.todoTableRows() }    </tbody>
                  </table>

                </div>
                </div>
            
              );
      }

      changeState = () => {
          this.setState({userName: this.state.userName === 'Darwish' ? 'Dar' : 'Darwish' })
      }

      createNewTodo =() =>
      {
        if(!this.state.todoItems.find(item => item.action === this.state.newItem))
        {
          this.setState({
            todoItems: [...this.state.todoItems, {action: this.state.newItem , done : false}]
          })
        }
      }

      updateNewItemValue =(event) =>
      {
          this.setState({newItem : event.target.value})
      }


      toggeltodo = (todo) =>
     
             this.setState( {todoItems: this.state.todoItems.map(item=>
                      item.action === todo.action ? { ...item, done: !item.done  }   : item) });
    


      todoTableRows = () => this.state.todoItems.map(item =>
                            <tr key={item.action}>
                              <td> {item.action} </td>
                              <td> <input type="checkbox" checked={ item.done }  
                                          onChange={ () => this.toggeltodo(item)   } /> 
                              </td>
                            </tr> );


    
     
  }

export default App;
