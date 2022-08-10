const styleButton = (colorButton="white") => ({
    backgroundColor: colorButton,
    borderRadius: "100%",
    padding: "10px",
    marginRight: "5px",
})



const Panel = ({ method1, method2 }) => {
    return (
        <div style={{paddingTop:"10%",}}>
            <button
                name="ch4"
                style={styleButton("red")}
                onClick={() => method1()}
            >
                ch4
            </button>
            <button
                name="ch5"
                style={styleButton()}
                onClick={() => method2()}
            >
                ch5
            </button>
        </div>
    )
}

export default Panel