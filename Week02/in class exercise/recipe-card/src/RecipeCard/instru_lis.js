import React from "react";

export default function InstructionsList (props) {
    const {instructions} = props

    return (
        <div id = "instru">
            <div class = "headFrame"><h2>Instructions</h2></div>
            <div id = "instruLi">
                <ol>
                {instructions.map((i, index) => (
                    <li key = {index}>{i}</li>
                ))}
                </ol>
            </div>
        </div>
    )
}