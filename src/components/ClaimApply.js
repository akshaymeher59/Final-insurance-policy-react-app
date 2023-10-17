import React from 'react'

const ClaimApply = () => {
    return (
        <table class="table table-striped">
            <thead className='table-dark'>
                <tr><span class="badge bg-info">Apply For Claim</span></tr>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Policy</th>
                    <th>Premium</th>
                    <th>Max Limit</th>
                    <th>Req Ammount</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>p1</th>
                    <th>Ram</th>
                    <th>Jeevan Chaya</th>
                    <th>500</th>
                    <th>100000</th>
                    <th>
                        <input type='text'></input>
                    </th>
                    <th>
                        <button type="button" class="btn btn-outline-primary">Claim</button>
                    </th>
                </tr>
                <tr>
                    <th>p2</th>
                    <th>SHam</th>
                    <th>Jeevan Chaya</th>
                    <th>500</th>
                    <th>100000</th>
                    <th>
                        <input type='text'></input>
                    </th>
                    <th>
                        <button type="button" class="btn btn-outline-primary">Claim</button>
                    </th>
                </tr>
                <tr>
                    <th>p3</th>
                    <th>Ram</th>
                    <th>Jeevan Chaya</th>
                    <th>500</th>
                    <th>100000</th>
                    <th>
                        <input type='text'></input>
                    </th>
                    <th>
                        <button type="button" class="btn btn-outline-primary">Claim</button>
                    </th>
                </tr>
                <tr>
                    <th>p4</th>
                    <th>Ram</th>
                    <th>Jeevan Chaya</th>
                    <th>500</th>
                    <th>100000</th>
                    <th>
                        <input type='text'></input>
                    </th>
                    <th>
                        <button type="button" class="btn btn-outline-primary">Claim</button>
                    </th>
                </tr>
            </tbody>
        </table>
    )
}

export default ClaimApply