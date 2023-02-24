import Project from "../project/Project";
import './Table.scss';
import {Component} from "react";

class Table extends Component {

    render() {


        return (
            <div className='table__outer'>
                <div className='table__inner'>
                    <h1 className='table-header'>
                        Диаграмма Ганта (Ресурсный подход)
                    </h1>
                    <table className='table'>
                        <caption className='caption'>Диаграмма Ганта (Ресурсный подход)</caption>
                        <thead>
                        <tr>
                            <div className='aside-headers'>
                                <th>
                                    <input className='text-left' type='text' readOnly={true} value='Категория'/>
                                </th>
                                <th>
                                    <input className='text-left' type='text' readOnly={true} value='Проект'/>
                                </th>
                                <th colspan="3">
                                    <input className='text-center' type='text' readOnly={true}
                                           value='Анализ процента выполнения'/>
                                </th>
                            </div>
                            <th className='th-small'>
                                <input className='text-center' type='text' readOnly={true} value='25.02'/>
                            </th>
                            <th className='th-small'>
                                <input className='text-center' type='text' readOnly={true} value='26.02'/>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <Project projectName='Программирование' taskName='Изучение React' maxHours={100}/>
                        <Project projectName='Программирование' taskName='Изучение JS' maxHours={30}/>
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}

export default Table;