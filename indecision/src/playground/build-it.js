class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.visibility = this.visibility.bind(this);
        this.state = {
            visible: false
        }
    }
    visibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
            console.log(this.state)
          
        })
    }
    render() {
        return (
            <div>
                <h1>VisibilityApp</h1>
                <button onClick={this.visibility}>{this.state.visible ? 'Hide Me!' : 'Show me!'}</button>
                {this.state.visible && <p>This will become invisible</p>}
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'))

// const app = {
//     title: 'Visibility app',
//     text: 'This is now visible',
//     visible: false
// }

// let vis = app.visible;

// const appRoot = document.getElementById('app');

// const show = () => {
//     vis = !vis;
//     render();
// }


// const render = () => {

//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={show}>
//                 {vis ? 'Hide text' : 'Show text'}
//             </button>
//             {
//                 vis === true && <p>{app.text}</p>
//             }
//         </div>

//     )

//     ReactDOM.render(template, appRoot);
// }

// render();