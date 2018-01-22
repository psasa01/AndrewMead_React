'use strict';

var app = {
    title: 'Indecision',
    subtitle: 'This is fuck\'n Indecision app :)',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
    var izbrisiSve = function izbrisiSve() {
        app.options = [];
        renderApp();
    };
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length ? 'Evo ti opcije' : 'Nema ništa čovjeće'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: izbrisiSve },
            'Izbri\u0161i sve'
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'Item one'
            ),
            React.createElement(
                'li',
                null,
                'item two'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );
    var user = {
        name: 'Saša Petrović',
        age: 39,
        location: 'Sarajevo'
    };

    function getLocation(location) {
        if (location) return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
        return undefined;
    }

    ReactDOM.render(template, appRoot);
};

renderApp();
