/**
 * @param {string} children
 * @param {"primary" | "secondary" | "danger"} variant 
 * @returns 
 */
export default function Button({ children, variant, ...props }) {
    if (props.href) {
        return <a href={props.href} className={`btn btn-${variant}`} {...props}>{children}</a>
    }
    
    return (
        <button className={`btn btn-${variant}`} {...props}>{children}</button>
    );
}