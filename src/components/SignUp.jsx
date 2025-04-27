import React from 'react'

const SignUp = () => {
  return (
    <>
      <div className="parent">
        <div className="heading">Create your PopX account</div>

        <div>
          <form>
            <div>
              <label htmlFor="Name">Full Name</label>
              <div>
                <input type="text" id="Name" placeholder="Enter full name" required />
              </div>
            </div>

            <div>
              <label htmlFor="Phone">Phone Number</label>
              <div>
                <input type="number" id="Phone" placeholder="Enter Phone Number" required />
              </div>
            </div>

            <div>
              <label htmlFor="email">Email Address</label>
              <div>
                <input type="email" id="email" placeholder="Enter Email Address" required />
              </div>
            </div>

            <div>
              <label htmlFor="Password">Password</label>
              <div>
                <input type="password" id="Password" placeholder="Enter password" required />
              </div>
            </div>

            <div>
              <label htmlFor="Company">Company Name</label>
              <div>
                <input type="text" id="Company" placeholder="Enter Company Name" />
              </div>
            </div>

            <div>
              <label>Are you an Agency?</label><br />
              <input type="radio" id="agency-yes" name="agency" value="yes" required />
              <label htmlFor="agency-yes">Yes</label>

              <input type="radio" id="agency-no" name="agency" value="no" />
              <label htmlFor="agency-no">No</label>
            </div>

            <div>
              <button type="submit">
                LogIn
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp
