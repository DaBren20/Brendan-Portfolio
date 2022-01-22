import React from 'react'

const Form = () => {
    return (
        <div class="form1">
            <h1>Contact Me!</h1>
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="firstName">First Name:</label>
                        <input type="text" class="form-control" id="firstName" placeholder="First Name" />
                </div>
                    <div class="form-group col-md-6">
                        <label for="lastName">Last Name:</label>
                        <input type="text" class="form-control" id="lastName" placeholder="Last Name" />
                    </div>
                </div>    
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="feedback" class="form-label">Feedback</label>
                <textarea>Enter your text here</textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form
