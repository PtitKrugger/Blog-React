/**
 * @param {"danger" | "warning" | "info"} type 
 * @param {string} children
 */
export function Alert({type = 'info', children}) {
    return (
        <div className={`alert alert-${type}`} role="alert">
            {children}
        </div>            
    );
}