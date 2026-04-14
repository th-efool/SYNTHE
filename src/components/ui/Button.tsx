type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary"
}

export function Button({ variant = "primary", ...props }: ButtonProps) {
    const base = "px-4 py-2 rounded-md text-sm font-medium"

    const styles = {
        primary: "bg-black text-white",
        secondary: "bg-gray-200 text-black"
    }

    return (
        <button
            className={`${base} ${styles[variant]}`}
            {...props}
        />
    )
}