const app = {
    title: 'Visibility app',
    text: 'This is now visible',
    visible: false
}

let vis = app.visible;

const appRoot = document.getElementById('app');

const show = () => {
    vis = !vis;
    render();
}


const render = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={show}>
                {vis ? 'Hide text' : 'Show text'}
            </button>
            {
                vis === true && <p>{app.text}</p>
            }
        </div>

    )

    ReactDOM.render(template, appRoot);
}

render();