import React, { Component } from 'react'

export default class Employee extends Component {
    render() {
        const {employee, index, updatePromotions}= this.props;
        const {id, name, isPromoted, salary} = employee || {};
        return (
            <>
                <tr key={id}>
                    <th scope="row">{id}</th>
                    <td>{name}</td>
                    <td>
                        <div class="badge">
                            <input onChange={(e) => updatePromotions(e, index)} defaultChecked={isPromoted} type="checkbox" />
                        </div>
                    </td>
                    <td>{salary}</td>
                </tr>


            </>
        )
    }
}
