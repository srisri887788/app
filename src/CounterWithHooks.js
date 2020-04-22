import React, { useState } from 'react'

const CounterWithHooks = () => {

    const [count, setCount] = useState(0);
    const [text, setText] = useState('Hi Cognizant');
    const [a] = useState(1)
    const incremetHandler = () => {
        setCount(count + 1)
    }
    const decrementHandler = () => {
        setCount(count - 1)
    }
    const getNumber = () => {
        if (count >= 10 && count < 20) {
            return { text: 'Good', color: 'blue' }
        } else if (count >= 20 && count < 30) {
            return { text: 'Very Good ', color: 'red' }

        } else {
            return { text: 'OK ! ', color: 'orange' }

        }
    }

    return (

        <div class="jumbotron">
            <button class="btn btn-large btn-danger" type="button" onClick={() => incremetHandler()}><span class="glyphicon glyphicon-plus"></span></button>
            <div class="badge">
                New  {count}
            </div>
            <button class={"btn btn-large btn-danger" + (!count ? 'disabled' : '')} type="button" disabled={!count} onClick={() => decrementHandler()}><span class="glyphicon glyphicon-minus"></span></button>
            <h3>Status <span class="label label-default" style={{ backgroundColor: getNumber().color }}>{(getNumber() || {}).text}</span></h3>
        </div>
    )
}

export default CounterWithHooks
