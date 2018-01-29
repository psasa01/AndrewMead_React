import React from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import Action from './Action';
import OptionModal from './OptionModal';

 

export default class IndecisionApp extends React.Component {
    state = {
            options: [],
            selectedOption: undefined
        }
 
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
        if(options) {
            this.setState(() => ({ options }));
        }
        } catch (e) {
            // Do nothing!
        }
        
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))};

    handleDeleteOptionSingular = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };    
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }))
    };
    handleAddOption = (option) => {
        if(!option) {
            return 'Enter Valid Value to add Item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exist!';
        } 
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    };
    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    };
    render() {
        const title = "Indecision"
        const subtitle = "Put your life in the hands of the computer!"
        
        return (
            <div>
                <Header 
                    subtitle={subtitle}
                />
                <Action 
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOptionSingular={this.handleDeleteOptionSingular}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
                <OptionModal 
                    handleClearSelectedOption={this.handleClearSelectedOption}
                    selectedOption={this.state.selectedOption}
                />
            </div>
        )
    }
}