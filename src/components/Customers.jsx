import React, { useState } from 'react'
import { Paper } from '@material-ui/core';
import ProfileLogo from '../images/pics/profile.png'
import '../styles.css';

function Customers() {
    const [customers, setcustomers] = useState(["sumit", "dheeraj", "preet", "mayank"])
    return (
        <div style={{ display: "flex" ,overflow:"auto"}}>
            {customers.map(function (name) {
                return(
                <Paper style={{
                    minWidth: "25rem",
                    padding: "15px",
                    margin: "0px 10px"
                }}>
                    <div>
                        <p style={{ paddingBottom: "2rem" }}>
                            <div style={{ color: "blue", fontWeight: "bold" }}>""</div>

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aut hic? In quis minima cum officiis possimus dolore odio qui reprehenderit, ex harum animi obcaecati itaque consectetur? Natus, magni veniam.
                        </p>
                    </div>

                    <div className="customer">
                        <img className="customer-image" src={ProfileLogo} alt="Logo" />
                        <div style={{ fontSize: "20px" }}>
                            {name}
                        </div>
                        <div style={{ opacity: "0.5" }}>
                            Place
                        </div>
                    </div>
                </Paper>)
            })}

        </div>
    )
}

export default Customers
