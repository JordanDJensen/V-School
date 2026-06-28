import { useState } from "react"

export default function BadgeForm(props){

    const {addBadge} = props

    const [initState, setInitState] = useState({
        user: '',
        description: '',
        phone: '',
        badge: ''
    })

    const [formData, setFormData] = useState(initState)
    console.log(formData)

    function handleChange(e){
        const {name, value} = e.target
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("click")
        addBadge(formData)
        setFormData(initState)
    }


    return(
        <div className="form">
            <h2>Badge Form</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <label>Name: </label><br />
                <input name="user" value={formData.user} onChange={handleChange}/><br />

                <label>Description: </label><br />
                <textarea></textarea><br />
                <label>Phone Number:</label><br />
                <input type="tel" /><br />

                <label>Employee</label>
                <input type="radio" />
                <label>Guess</label>
                <input type="radio" /><br />

               
                <input type="checkbox" />
                <label>Agree to Terms and Conditions:</label><br />

                <button>Submit</button>
            </form>
            
        </div>
    )
}