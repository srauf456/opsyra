import React, {use, useState} from "react"
export default function ClientForm(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
    })
    const [error, setError] = useState({})
    return(
        <div>
            <h2>Add A Client</h2>
            <form>
                <input/>
                <input/>
                <input/>
                <button></button>
            </form>
        </div>
    )

}