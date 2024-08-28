
import './index.css';



const UserData = (props) => {


    const { users } = props
    console.log(users)
    return (
        <>
            {
                users.map((currentUser) => {
                    const { id, Job_Title, Location, Compensation, Resume_in_Progress, Hiers_Required, Status } = currentUser;
                    return (
                        <tr key={id}>
                            <td>
                                {Job_Title}
                            </td>
                            <td>
                                {Location}
                            </td>
                            <td>
                                {Compensation}
                            </td>
                            <td>
                                {Resume_in_Progress}
                            </td>
                            <td>
                                {Hiers_Required}
                            </td>
                            <td className='status p-1'>
                                {Status}
                            </td>
                        </tr>
                    )

                }
                )


            }
        </>
    )

}

export default UserData 


