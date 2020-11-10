import React from 'react'

export const Articles = () => {
    return (
        <div className="card-deck">
            <div className="card border-light text-white bg-primary">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
               
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer bg-info">
                    <small className="text-white">Last updated 3 mins ago</small>
                </div>
            </div>
            <div className="card border-light text-white bg-primary">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer bg-info">
                    <small className="text-white">Last updated 3 mins ago</small>
                </div>
            </div>
            <div className="card border-light text-white bg-primary">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
                <div className="card-footer bg-info">
                    <small className="text-white">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>
    )
}
