import React from "react";

const HelloMsg = (props) => {

    const studentList = props.data;
    console.log(studentList);

    return (
        <>
            <p>hello dear</p>
        </>
    );

}

export default HelloMsg;