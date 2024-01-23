import mysql from "mysql2/promise"

export default async function Subscribers() {
  const connection = await mysql.createConnection()
  const [rows] = await connection.query("SELECT * FROM Subscribers;")
  return (
    <main>
      <h1 className="text-2xl font-bold mb-8">Lista de inscritos</h1>
      <table className="w-full text-center">
        <thead className="border-b-[1px]">
          <tr className="[&>*]:py-4">
            <th>ID</th>
            <th>Email</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((subscriber) => (
            <tr key={subscriber.id} className="[&>*]:p-4">
              <td>{subscriber.id}</td>
              <td className="text-left">{subscriber.email}</td>
              <td>{subscriber.createdAt.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}