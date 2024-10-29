interface InputProps {
    title: string;
    value: string;
    placeholder?: string; // Optional prop
    type: string;
    // setValue: (value: string) => void; // Improved naming for clarity
}

const Input = ({ title, value, placeholder = "", type }: InputProps) => {
    return (
        <div className="mb-4"> {/* Added margin-bottom for spacing */}
            <label htmlFor={title.toLowerCase()} className="block font-medium mb-1">
                {title}
            </label>
            <input
                type={type}
                id={title.toLowerCase()}
                value={value}
                // onChange={(e) => setValue(e.target.value)}
                className="input-class"
                placeholder={placeholder}
                required
            />
        </div>
    );
};

export default Input;
