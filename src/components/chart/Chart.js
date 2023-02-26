import {Component} from "react";
import moment from "moment";

import Project from "../project/Project";
import './Chart.scss';


class Chart extends Component {

    state = {
        dates: [
            {},
        ]
    }

    // componentDidMount() {
    //     document.querySelector('.chart').scrollLeft = 600; // установить позиц.скролла
    // }


    render() {
        // const cellsCountArr = [],
        //     CELLS_COUNT = 50;
        // for (let i = 0; i < CELLS_COUNT; i++) {
        //     cellsCountArr.push(0)
        // }
        //
        // const cells = cellsCountArr.map(() => {
        //     return (
        //         <input type="text"/>
        //     )
        // })
        //
        // console.log(cells)


        return (
            <>
                <div className='chart__wrap'>
                    <h1 className='table-header'>
                        Диаграмма Ганта (Ресурсный подход)
                    </h1>
                    <div className='chart'>
                        <div className='chart__head'>
                            <div className='chart__row'>
                                <div className='chart__aside-menu'></div>
                                <div className='chart__table'>
                                    <input className='text-center chart__month' type='text' readOnly={true}
                                           value='Февраль'/>
                                </div>
                            </div>
                            <div className='chart__row'>
                                <div className='chart__aside-menu'>
                                    <input className='text-left' type='text' readOnly={true} value='Категория'/>
                                    <input className='text-left' type='text' readOnly={true} value='Проект'/>
                                    <input className='text-center' type='text' readOnly={true}
                                           value='Анализ процента выполнения'/>
                                </div>
                                <div className='chart__table'>
                                    <input className='text-center' type='text' readOnly={true}
                                           value={new Date(2023, 3, 1).getDate()}/>
                                    <input className='text-center' type='text' readOnly={true}
                                           value={new Date(2023, 3, 2).getDate()}/>
                                    <input className='text-center' type='text' readOnly={true}
                                           value={new Date(2023, 3, 3).getDate()}/>
                                </div>
                            </div>
                        </div>
                        <div className='chart__body'>
                            <Project projectName='Программирование' taskName='Изучение React' maxHours={100}/>
                            <Project projectName='Программирование' taskName='Изучение JS' maxHours={30}/>
                            <Project projectName='Программирование' taskName='Fetch' maxHours={10}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

// const Cell = () => {
//     return (
//         <input type="text"/>
//     )
// }

export default Chart;