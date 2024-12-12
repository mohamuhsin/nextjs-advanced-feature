import fs from "node:fs/promises";

export default async function DataFetchingDemo() {
    const data = await fs.readFile("dummy-db.json", "utf-8"); // reading a file
    const users = JSON.parse(data); // loading data from the file

    return (
        <div className="rsc">
            <h2>RSC with data fetching</h2>
            <p>
                Uses <strong>async / await</strong> for data fetching
            </p>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
