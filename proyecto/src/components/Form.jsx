import React, { useState } from 'react';

const Form = ({ newLocation }) => {
    const [city, setCity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({ city });
        if (city === "" || !city) return;

        newLocation(city);
    }

    return (

        <div className="container mb-3 mx-auto ">
            <form onSubmit={onSubmit}>
                <div className="form mb-3 mx-auto">
                    <input type="text" className="ciudad" placeholder="Ciudad" onChange={(e) => setCity(e.target.value)} />
                    <button className="btn btn-primary form-text" type="submit">Buscar</button>
                </div>
            </form>
        </div>

    );
}

export default Form;