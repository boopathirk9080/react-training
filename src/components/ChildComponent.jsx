// import LearnProps from "./LearnProps"

function ChildComponent(props) {
    const {name,age,email,phone}=props.userData
    // const newtext="HElloworld"

    return (
        <div>
            <h1> {name}</h1>
            <h1> {age}</h1>
            <h1> {email}</h1>
            <h1> {phone}</h1>

            {/* <LearnProps newtext={newtext} /> */}
        </div>
    )
}

export default ChildComponent