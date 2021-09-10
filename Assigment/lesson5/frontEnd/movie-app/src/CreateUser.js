const { Component } = require("react");

class CreateUser extends Component {
  render() {
    return (
      <div>
        <div
          class="signup"
          id="signup_id"
          style={{"margin-top": "200px", "margin-left": "300px"}}
        >
          <div class="bs-example">
            <div>
              <div className="form-group row">
                <label for="first_name" className="col-sm-2 col-form-label">
                  First name
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    id="first_name"
                    placeholder="first name"
                    required
                  />
                  <br/>
                </div>
              </div>
              <div className="form-group row">
                <label for="last_name" className="col-sm-2 col-form-label">
                  Last name
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    placeholder="last name"
                    required
                  />
                  <br/>
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="last_name"
                  className="col-sm-2 col-form-label"
                ></label>
                <div className="col-sm-2">
                  <label for="role"> Role</label>
                  <select name="role" id="roleId" className="roleOption">
                    <option value="member">Member</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
               
              </div>
              <br/>
              <div class="form-group row">
                <label for="user name" className="col-sm-2 col-form-label">
                  user name
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    id="user_name_id"
                    placeholder="user name"
                    required
                  />
                </div>
                
              </div>
              <br/>
              <div className="form-group row">
                <label for="inputPassword" className="col-sm-2 col-form-label">
                  Password
                </label>
                <div className="col-sm-6">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
              <br/>
              <div className="form-group row">
                <div className="col-sm-6 offset-sm-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    id="signup_form_id"
                  >
                    sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUser