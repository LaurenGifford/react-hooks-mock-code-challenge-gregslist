import React, {useState} from "react"

function Form({baseURL, onNewSubmit}) {
    const [formData, setFormData] = useState({
        description: "description",
        image: "image",
        location: "location"
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        }) 
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`${baseURL}`, {
            method: "POST",
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data => onNewSubmit(data))

    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input 
                type="text"
                value={formData.description}
                name="description"
                onChange={(e) => handleChange(e)}
            />
            <input 
                type="text"
                value={formData.image}
                name="image"
                onChange={(e) => handleChange(e)}
            />
                        <input 
                type="text"
                value={formData.location}
                name="location"
                onChange={(e) => handleChange(e)}
            />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form