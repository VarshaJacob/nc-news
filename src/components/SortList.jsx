const SortList = () => {
    const sortList ={Date:'created_at',Votes:'votes', Comments:'comment_count'}
    const orderList=['asc','desc']

    return (
        <div>
            <form>
                <ol className='SortList'>
                {Object.keys(sortList).map(sort => {
                return (
                    <li key={sort}>
                         <input type="radio"  name="sort_by" value={sortList[sort]} required></input><label>{sort[0].toUpperCase()+sort.slice(1)}</label> 
                    </li>      
                )
                })}  
                </ol>
                <ol className='SortList'>
                {orderList.map(order => {
                return (
                    <li key={order}>
                         <input type="radio"  name="order" value={order} required></input><label>{order[0].toUpperCase()+order.slice(1)}</label> 
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