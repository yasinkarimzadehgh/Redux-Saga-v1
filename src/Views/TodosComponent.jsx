import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todosSelector } from '../store/todos/todosReducer';

function TodosComponent() {

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(todosSelector)



    const loadingUI = () => {
        return (
            <p>Loading...</p>
        )
    }
    const errorUI = () => {
        return (
            <p>{error}</p>
        )
    }
    const dataUI = () => {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Completed</th>
                    </tr>
                </thead>
                <tbody>{data && data?.map((object, index) => {
                    return (
                        <tr key={object.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{object.id}</td>
                            <td>{object.title}</td>
                            <td>{object.completed ? 'Inactive' : 'Active'}</td>
                        </tr>
                    )

                })}

                </tbody>
            </table>
        )
    }
    return (
        <div>
            <button onClick={() => dispatch({ type: 'FETCH_USERS' })}>Get remote API data</button>

            <div>
                {
                    loading ? loadingUI() :
                        error ? errorUI() :
                            data ? dataUI() : null
                }

            </div>

        </div>
    )
}

export default TodosComponent