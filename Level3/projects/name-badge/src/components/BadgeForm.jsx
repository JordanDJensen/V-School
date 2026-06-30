import { useState } from "react"

export default function BadgeForm(props){

    const {addBadge} = props

    const [initState, setInitState] = useState({
        user: '',
        description: '',
        phone: '',
        access: '',
        termAgreement: false
    })

  

    const [formData, setFormData] = useState(initState)
    console.log(formData)

    const isFormIncomplete = 
    formData.user.trim() === '' || 
    formData.description.trim() === '' ||
    formData.phone.trim() === '' ||
    formData.access === ''

    function handleChange(e){
        const {name, value, type, checked} = e.target
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault();       
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
                <textarea name="description" value={formData.description} onChange={handleChange}></textarea><br />
                <label>Phone Number:</label><br />
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} /><br />

                <label>Employee</label>
                <input type="radio" name="access" value="employee" onChange={handleChange} />
                <label>Guess</label>
                <input type="radio" name="access" value="guess" onChange={handleChange} /><br />

               
                <input type="checkbox" name="termAgreement" checked={formData.termAgreement} onChange={handleChange} />
                <label>Agree to Terms and Conditions:</label><br />

                <button disabled={isFormIncomplete}>Submit</button>
            </form>
            
        </div>
    )
}