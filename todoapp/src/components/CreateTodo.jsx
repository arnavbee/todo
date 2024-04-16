export function CreateTodo(){
    return <div>
        <input style={{padding: 30, margin: 20}} type="text" placeholder="title"/> <br />
        <input style={{padding: 30, margin: 20}} type="text" placeholder="description" /> <br />

        <button style={{padding: 30, margin: 20}} >Add a todo</button>
    </div>
}