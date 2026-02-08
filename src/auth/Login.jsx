import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import Swal from "sweetalert2";

function Login() {
  const { signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(location.state?.from?.pathname || "/");
        Swal.fire({
          position: "center-center",
          icon: "success",
          title: "Registration successful!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error during login:", error);
        Swal.fire({
          position: "center-center",
          icon: "error",
          title: "Login failed!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="hero-content flex-col">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        {/* <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p> */}
      </div>
      <div className="card bg-base-100 w-full sm:w-[320px] max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit(handleRegistration)}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="input"
                placeholder="Email"
              />
              {errors.email && (
                <b className="error text-[#ff0000]">*This field is required*</b>
              )}
              <label className="label">Password</label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                })}
                type="password"
                className="input"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <b className="error text-[#ff0000]">*This field is required*</b>
              )}
              {errors.password?.type === "minLength" && (
                <b className="error text-[#ff0000]">
                  *Password must be at least 6 characters*
                </b>
              )}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
              <span className="text-sm mt-2">
                Don't have an account?
                <Link
                  state={location.state}
                  to="/register"
                  className="link link-hover text-blue-500"
                >
                  <b> Register</b>
                </Link>
              </span>
            </fieldset>
          </form>
          {/* Google */}
          <button className="btn bg-white text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
