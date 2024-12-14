import { useState } from "react";
export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div>
            <input
                style={{
                    padding: 10,
                    margin: 10,
                }}
                type="text"
                placeholder="title"
                onChange={(e) => {
                    const value = e.target.value;
                    console.log(value);
                    setTitle(value);
                }}
            ></input>
            <br></br>
            <input
                style={{
                    padding: 10,
                    margin: 10,
                }}
                type="text"
                placeholder="description"
                onChange={(e) => {
                    const value = e.target.value;
                    console.log(value);
                    setDescription(value);
                }}
            ></input>
            <br></br>
            <button
                onClick={() => {
                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description,
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                        .then(async (res) => {
                            console.log(res);
                            const resp = await res.json();
                            console.log(resp);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }}
            >
                Add a todo
            </button>
        </div>
    );
}
