import {Component} from "react";

import './Project.scss'

class Project extends Component {

    state = {
        projectName: this.props.projectName,
        taskName: this.props.taskName,
        hoursOfWork: '',
        percentageOfHours: '',
        maxHours: this.props.maxHours,
        hours: [0, 0, 0, 0, 0, 0, 0, 0, 0],
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
                    className='cell type-it th-small text-center'
                    onChange={(e) => this.setStateValues(i, e.target.value)}
                    value={this.state.hours[i]}/>
            )
        })

        return (
            <div className='project'>
                <div className='chart__row'>
                    <div className='chart__aside-menu'>
                        <input className='text-left' type='text' readOnly={true} value={this.state.projectName}/>
                        <input className='text-left' type='text' readOnly={true} value={this.state.taskName}/>
                        <input className='cell text-center th-small' readOnly={true} type='number'
                               value={this.state.hoursOfWork}/>
                        <input className='cell text-center th-small' readOnly={true} type='text'
                               value={this.state.percentageOfHours}/>
                        <input className='cell text-center th-small' readOnly={true} type='number'
                               value={this.state.maxHours}/>
                    </div>
                    <div className='chart__table'>
                        {hoursElems}
                    </div>
                </div>
            </div>

        )
    }
}

export default Project;