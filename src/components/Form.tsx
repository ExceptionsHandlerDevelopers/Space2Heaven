import Input from "./Input"

const Form = ({ formType = "signin" }: { formType: string }) => {
    return (
        <form>
            {formType === "signup" && (
                <Input title={"Full Name"} value="" placeholder="Enter your name" type={"text"} />
            )}

            {formType === "signup" && (
                <Input title={"Phone No"} value="" placeholder="Enter your Phone No" type={"text"} />
            )}

            <Input title={"Email ID"} value="" placeholder="Enter your EmailID" type={"email"} />

            <Input title={"Password"} value="" placeholder="Enter your password" type={"password"} />

            {formType === "signup" && (
                <Input title={"Confirm Password"} value="" placeholder="Confirm Password" type={"password"} />
            )}

            <button type="submit" className="btn-class">
                {formType === "signup" ? "Sign Up" : "Sign In"}
            </button>
        </form>
    )
}
export default Form