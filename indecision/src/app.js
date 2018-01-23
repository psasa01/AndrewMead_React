const app = {
    title: 'Indecision',
    subtitle: 'This is fuck\'n Indecision app :)',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
}

const izbrisiSve = () => {
    app.options = [];
    renderApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');


const renderApp = () => {
    
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length ? 'Evo ti opcije' : 'Nema ništa čovjeće'}</p>
            
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>

            <button onClick={izbrisiSve}>Izbriši sve</button>



            <ol>
            {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>
                })
            }
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );
    const user = {
        name: 'Saša Petrović',
        age: 39,
        location: 'Sarajevo'
    };
    
    function getLocation(location) {
        if (location)
        return <p>Location: {location}</p>;
        return undefined;
    }
      
    ReactDOM.render(template, appRoot);

}

renderApp();

