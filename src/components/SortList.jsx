import {Link} from 'react-router-dom';

const SortList = () => {
    const sortList =['date','votes']
    const orderList=['asc','desc']

    const sortSubmit = (sort) => {
        console.log(sort)
    }

    return (
        <div>
            <form>
                <ol className='SortList'>
                {sortList.map(sort => {
                return (
                    <li>
                         <input type="radio" key={sort} name="sort_by" value={sort}></input><label>{sort[0].toUpperCase()+sort.slice(1)}</label> 
                    </li>      
                )
                })}  
                </ol>
                <ol className='SortList'>
                {orderList.map(order => {
                return (
                    <li>
                         <input type="radio" key={order} name="order" value={order}></input><label>{order[0].toUpperCase()+order.slice(1)}</label> 
                    </li>       
                )
                })}  
                </ol>
                <button type='submit'>Sort</button>
            </form>
        </div>
    )
};

export default SortList