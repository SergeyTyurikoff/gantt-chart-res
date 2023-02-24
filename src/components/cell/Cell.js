import {Component} from "react";
import './Cell.scss'

// const cellTypes = {
//     category: 'category',
//     project: 'project',
//     hours: 'hours'
// }

class Cell extends Component {
    state = {
        value: this.props.defaultValue,
    }

    onChangeValue = (e) => {
        this.setState({value: e.target.value})
        if (this.props.action) {
            this.props.action(this.props.cellType, this.state.value);
        }

    }

    render() {
        const {readonly, inputType} = this.props;

        return (
            <input
                onChange={this.onChangeValue}
                readOnly={readonly}
                className={`cell ${readonly ? 'cell-readonly' : ''} ${inputType === 'number' ? 'cell-number' : 'cell-text'}`}
                value={this.state.value}/>
        )
    }
}

export default Cell;