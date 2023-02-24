import {Component} from "react";

import './Project.scss'

class Project extends Component {

    state = {
        projectName: 'Программирование',
        taskName: 'Изучение React',
        hoursOfWork: '',
        percentageOfHours: '',
        maxHours: 30,
        hours: ['', ''],
    }

    setStateValues = (index, value) => {
        this.setState(({hours}) => ({
            hours: hours.map((item, i) => {
                if (index === i) {
                    item = +value;
                }
                return item;
            }),
            hoursOfWork: hours.reduce((total, donation) => {
                return total + donation
            })
        }))
        this.setHoursOfWork();
        this.setPercentageOfHours();
    }

    setHoursOfWork = () => {
        this.setState(({hours}) => ({
            hoursOfWork: hours.reduce((total, donation) => {
                return total + donation
            })
        }))
    }

    setPercentageOfHours = () => {
        this.setState(({hoursOfWork, maxHours}) => ({
            percentageOfHours: `${Math.floor(hoursOfWork * 100 / maxHours * 10) / 10}%`
        }))
    }

    render() {

        const hoursElems = this.state.hours.map((itemValue, i) => {
            return (
                <input
                    key={i}
                    type='number'
                    className='cell'
                    onChange={(e) => this.setStateValues(i, e.target.value)}
                    value={this.state.hours[i]}/>
            )
        })

        return (
            <div className='project'>
                <input type='text' readOnly={true} value={this.state.projectName}/>
                <input type='text' readOnly={true} value={this.state.taskName}/>
                <input readOnly={true} type='number' value={this.state.hoursOfWork}/>
                <input readOnly={true} type='number' value={this.state.percentageOfHours}/>
                <input readOnly={true} type='number' value={this.state.maxHours}/>
                {hoursElems}
            </div>

        )
    }
}

export default Project;