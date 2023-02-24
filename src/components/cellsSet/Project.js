import {Component} from "react";

import Cell from "../cell/Cell";
import './Project.scss'

class Project extends Component {

    state = {
        projectName: 'Программирование',
        taskName: 'Изучение React',
        maxHours: '',
        hoursOfWork: 0,
        percentageOfHours: '',
        hours: [0, 0]
    }

    componentDidMount() {
        console.log(this.state)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state)
    }

    data = [
        {
            cellType: "hours",
            defaultValue: 0,
            inputType: "number",
        },
        {
            cellType: "hours",
            defaultValue: 0,
            inputType: "number",
        },
    ]


    setStateValues = (type, value) => {
        switch (type) {
            case 'maxHours':
                this.setState({maxHours: value})
                break;
            case 'hours':
                console.log(1)
                this.setState({hoursOfWork: this.state.hoursOfWork + +value})
                break;
        }
    }

    render() {

        const hoursElems = this.data.map((item, i) => {
            const {inputType, cellType, defaultValue} = item;
            return (
                <Cell key={i} cellType={cellType} action={this.setStateValues} defaultValue={defaultValue} inputType={inputType}/>
            )
        })

        return (
            <div className='project'>
                <input type='text' value={this.state.projectName}/>
                <input type='text' value={this.state.taskName}/>
                <Cell cellType={'hoursOfWork'} defaultValue={0} readonly={true} inputType={'number'}/>
                <Cell cellType={'percentageOfHours'} defaultValue={0} readonly={true} inputType={'number'}/>
                <Cell cellType={'maxHours'} action={this.setStateValues} defaultValue={0} inputType={'number'}/>
                {hoursElems}
                {/*<Cell cellType={'hours'} action={this.setStateValues} defaultValue='' inputType={'number'}/>*/}
                {/*<Cell cellType={'hours'} action={this.setStateValues} defaultValue='' inputType={'number'}/>*/}
            </div>

        )
    }
}

export default Project;