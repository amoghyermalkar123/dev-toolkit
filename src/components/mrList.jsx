export default function MRList() {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>MR Link</th>
              <th>All threads resolved</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>
                <a target='_blank'
                  rel='noopener noreferrer' href="https://github.com/tauri-apps/tauri">Policies</a>
              </td>
              <td>
                <div className="badge badge-success gap-2">
                  YES
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
