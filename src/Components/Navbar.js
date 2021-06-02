import React from 'react'
import Button from '../Library/Button'
import logo from '../Images/coachplus1.png'

export default function Navbar ({style}) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                padding: "15px 30px",
                position: "relative",
                // height: ""
                // flex: "1",
                ...style,

            }}
        >
            <div
                style={{
                    flex: "1",
                    justifyContent: "start",
                    alignContent: "start",
                    textAlign: "left",
                    position: "relative",
                    ...navCenter
                }}
            >
                <img
                    style={{
                        // height: "80%",
                        height: "20px"
                    }}
                    src={logo}
                />
            </div>
            <div
                style={{
                    ...navCenter,
                    justifyContent: "center"
                }}
            >
                <span
                    style={{
                        ...navText,
                        color: "rgba(0,0,0,.9)",
                        position: "relative"
                    }}
                >
                    Home
                    <span
                        style={{
                            position: "absolute",
                            top: "120%",
                            left: "50%",
                            transform: "translate(-50% , 0)",
                            background: "#FF7D5E",
                            width: "5px",
                            height: "5px",
                            borderRadius: "10px"
                        }}
                    />
                </span>
                <span
                    style={{
                        ...navText,
                        color: "rgba(0,0,0,.3)"
                    }}
                >
                    Training Program
                </span>
                <span
                    style={{
                        ...navText,
                        color: "rgba(0,0,0,.3)"
                    }}
                >
                    Article
                </span>
                <span
                    style={{
                        ...navText,
                        color: "rgba(0,0,0,.3)"
                    }}
                >
                    Company
                </span>
                <span
                    style={{
                        ...navText,
                        color: "rgba(0,0,0,.3)"
                    }}
                >
                    Help
                </span>
                {/* <span>middle</span> */}
            </div>
            <div
                style={{
                    ...navCenter,
                    textAlign: "right",
                    justifyContent: "flex-end"
                }}
            >
                <Button basic>Sign up</Button>
                <Button>Sign in</Button>
            </div>
        </div>
    )
}


const navCenter = {
    flex: "1",
    alignItems: "center",
    display: "flex"
    // alignContent: "center",
    // verticalAlign: "20px"
}

const navText = {
    whiteSpace: "nowrap",
    padding: "0 .5em"
}

const selected = {
    color: "rgba(0,0,0,.9)"
}