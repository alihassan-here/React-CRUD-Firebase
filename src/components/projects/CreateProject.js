import { useState } from "react";
import { useDispatch } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';


const CreateProject = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProject({ title, content }));
    }

    return (
        <div className='container'>
            <form className='white' onSubmit={handleSubmit}>
                <h5 className='grey-text text-darken-3'>Create new project</h5>
                <div className='input-field'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' id='title' onChange={e => setTitle(e.target.value)} />
                </div>
                <div className='input-field'>
                    <label htmlFor='content'>Project Content</label>
                    <textarea id='content' className='materialize-textarea' onChange={e => setContent(e.target.value)} />
                </div>
                <div className='input-field'>
                    <button className='btn pink lighten-1 z-depth-0'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateProject;