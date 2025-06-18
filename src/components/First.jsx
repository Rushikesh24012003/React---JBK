export default function First()
{
    let newStyle = {
        color : 'blue' ,
        fontFamily : 'Arial' ,
        textAlign : 'center' ,
        textTransform : 'uppercase'

    }

    return(
        <>
            <h1 style={newStyle}>This is first Component</h1>
        </>
    )
}