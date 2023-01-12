import {Link} from 'react-router-dom';

const SortList = () => {
    const sortList =['date','votes']
    const orderList=['asc','desc']

    const sortSubmit = (sort) => {
        console.log(sort)
    }

    return (
        <div>
           
                {sortList.map(sort => {
                    return (
                        <form>
                            <input type='radio'>{sort}</input>
                        </form>

                        
                    )
                })}
                
           
        </div>
    )
};

export default SortList