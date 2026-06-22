import {useDashboardContext} from "../context/DashboardContext";
import { MdEdit, MdDelete } from "react-icons/md";
import { exportToCSV } from "../utils/exportToCSV";
import { Button } from "../ui/Button";


function UserTable({users, dispatch, setActiveUser}){
   const {role, userInfo, addActivity } = useDashboardContext();

    const exportUsers = () => {
    const csvData = users.map(user => ({
      Name: `${user.firstName} ${user.lastName}`,
      Email: user.email,
      Role: user.role,
      Department: user.company?.department || "",
    }));

    exportToCSV(csvData, "users.csv");
  };

return(
      <div className="w-full">
        {role === "admin" && (
  <div className="flex justify-center mb-4">
    <Button
      onClick={exportUsers}
      className="gap-2 text-black"
    >
      Export CSV
    </Button>
  </div>
)}
      <div className="md:hidden space-y-4">
        {users.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded shadow-green-300 border">
            <div className="flex  justify-center items-start mb-3">
              <div>
                <h3 className="font-bold text-lg text-black">{user.firstName} {user.lastName}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
            <div className="space-y-1 mb-3">
              <p className="text-sm text-black"><span className="font-semibold text-black">Role:</span> {user.role}</p>
              <p className="text-sm text-black"><span className="font-semibold text-black">Department:</span> {user.company.department}</p>
            </div>
            {role === "admin" && (
              <div className="flex gap-2">
                <Button
                  onClick={() => setActiveUser(user)}
                  className="flex-1 flex items-center justify-center gap-2 text-black"
                >
                  <MdEdit /> Edit
                </Button>
                <Button
                  onClick={() =>{
                      
                      dispatch({ type: "DELETE_USER", payload: user.id });
                     if (role === "admin") {
                     
    addActivity({
      text: `${userInfo?.name || "Admin"} deleted user: ${user.firstName} ${user.lastName}`
    });
  }
}}
                  className="flex-1 flex items-center justify-center gap-2 text-black"
                >
                  <MdDelete /> Delete
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
  <div className="hidden md:block overflow-x-auto">
    <table className="rounded shadow max-w-full">
        <thead>
            <tr >
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Role</th>
                <th className="p-3 border">Department</th>
                {role === "admin" && <th className="p-3 border">X</th>}
                {role === "admin" && <th className="p-3 border">Edit</th>}
            </tr>
        </thead>
        <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                <td className="p-3 border">{user.firstName+' '}{user.lastName}</td>
                <td className="p-3 border">{user.email}</td>
                <td className="p-3 border">{user.role}</td>
                <td className="p-3 border">{user.company.department}</td>
                {role === "admin" && (
                <td className="p-3 border"> 
              <Button
                onClick={() =>{
                  dispatch({ type: "DELETE_USER", payload: user.id })
                   if (role === "admin") {
                     
    addActivity({
      text: `${userInfo?.name || "Admin"} deleted user: ${user.firstName} ${user.lastName}`
    });
  }
}}
                
                variant="danger"
              >
                Delete
              </Button>
            </td>
                )}

                {role === "admin" && (
               <td className="p-3 border"> 
              <Button
                onClick={() =>
                  setActiveUser(user)} 
                   //editUser now has user object data     
               variant="danger"
              >
                Edit
              </Button>
            </td>
                )}
           
                </tr>
            ))}
        </tbody>
    </table>
    </div>
    </div>
);
}


export default UserTable;

