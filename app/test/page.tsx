import React from 'react'

type User = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  imageUrl?: string;
}

async function page() {

  const getTestData = async () => {
    const response = await fetch('https://mini-saas-crud-backend.vercel.app/user/all', {cache: 'no-store'});
    return response;
  }

  const testData = await getTestData();
  const data: User[] = await testData.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Users</h1>

      {data.length === 0 ? (
        <p className="text-gray-600">No users found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">Name</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">Email</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">Phone</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.id} className="even:bg-gray-50 hover:bg-gray-100">
                  <td className="px-4 py-3 align-top">
                    <div className="flex items-center gap-3">
                      {user.imageUrl ? (
                        <img src={user.imageUrl} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                          {(user.name || '').split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase()}
                        </div>
                      )}
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">{user.email}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{user.phone || '-'}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    <div className="flex gap-2">
                      <a className="text-blue-600 hover:underline" href={`mailto:${user.email}`}>Email</a>
                      <button className="text-sm text-gray-500 hover:text-gray-700">Details</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default page