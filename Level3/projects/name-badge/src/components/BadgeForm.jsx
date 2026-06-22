export default function BadgeForm(){
    return(
        <div className="form">
            <h2>Badge Form</h2>
            <hr />
            <form>
                <label>Name: </label><br />
                <input /><br />

                <label>Description: </label><br />
                <textarea></textarea><br />
                <label>Phone Number:</label><br />
                <input type="tel" /><br />

                <label>Employee</label>
                <input type="radio" />
                <label>Guess</label>
                <input type="radio" /><br />

               
                <input type="checkbox" />
                <label>Agree to Terms and Conditions:</label>


            </form>
            <submit></submit>
        </div>
    )
}