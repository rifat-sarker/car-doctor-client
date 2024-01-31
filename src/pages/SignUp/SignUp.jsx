import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignUp =(event)=> {
        event.preventDefault();
        const form = event.target;
        console.log(form);
        const name = form.name.value;
        const email =form.email.value;
        const password = form.password.value;
        const user = {name,email,password}
        console.log(user);
        createUser(email,password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })

    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 my-12 py-12">
        <div className="hero-content flex-col gap-11 lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <p className="py-6">
              <img src={img} alt="" />
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-3xl text-center font-bold pt-4">Sign Up</h1>
            <form onSubmit={handleSignUp}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </div>
            </form>
            <p className="text-center py-4 text-primary">
              Already have an account? Please 
              <Link className="link" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
