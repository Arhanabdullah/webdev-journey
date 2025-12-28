import React from 'react'

const TableView = () => {
    return (
        <div>
            <div class="added-items card">
                <h3>Added Items</h3>
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Service Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody id="item-list">

                    </tbody>
                </table>
                <div class="total">
                    <p>Total Amount</p>
                    <span id="total-amount">₹ 0</span>
                </div>
            </div>
        </div>
    )
}

export default TableView
