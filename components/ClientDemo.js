export default function RSCDemo() {
    console.log("RSCDemo rendered");
    return (
        <div className="src">
            <h2>A React Client Component</h2>
            <p>
                Will be rendered on the client <strong>AND</strong>
            </p>
            <p>
                <strong>NEVER</strong> on the client-side!
            </p>
        </div>
    );
}