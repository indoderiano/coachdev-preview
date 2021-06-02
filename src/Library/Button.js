import React, { Children } from 'react'

export default function Button ({children, basic}) {
    return (
        <div
            style={{
                display: 'inline-block',
                padding: "12px 28px",
                borderRadius: "10px",
                background: basic ? "" : "#FF7D5E",
                color: basic ? "#FF7D5E" : "white",
                fontFamily: "siberian, sans",
                fontWeight: "500"
            }}
        >
            {children}
        </div>
    )
}
