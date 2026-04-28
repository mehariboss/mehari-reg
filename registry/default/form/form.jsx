import {useState} from 'react';

export function Form({onSubmit,children}) {
    return <form onSubmit={onSubmit}>{children}</form>;
}

export function Input({label, value, onChange, error}) {

    return(
        <div style={{marginBottom: "10px"}}>
            <label>{label}</label>
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                style={{display: "block", padding: "8px", width: "100%"}}
            
            />
            {error && <span style={{color: "red"}}>{error}</span>}
        </div>
    );


}