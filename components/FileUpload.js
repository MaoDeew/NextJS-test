import { useState } from "react";
import { uploadFilesToFirebase } from "../firebase/fileupload";

const FileUpload = () =>{
    const [files, setFiles] = useState([]);
    const [statusUpload, setStatusUpload] = useState([]);
    const handleChange = (event) =>{
        for (let i = 0; i < event.target.files.length; i++) {
            const fileSelected = event.target.files[i];
            fileSelected["id"] = Math.random();
            fileSelected["extension"] = fileSelected.name.split('.').pop();
            setFiles(prevState => [...prevState, fileSelected]);
          }
        
    }

    const handleUpload = (event) =>{
        event.preventDefault();

        const response = uploadFilesToFirebase(files)
        setStatusUpload(response)
       
    }

    const totalFilesSize = files.reduce((sumFile,file) =>{
        return sumFile + file.size;
    },0);

    return(
        <div>
            <input type="file" onChange={handleChange}></input>
            <button onClick={handleUpload}>Upload</button>
            {files.map(file =>{
                return(
                    <li key={file.id}>
                        {file.name}  
                        {file.size}
                    </li>
                )
            })}

            {console.log(statusUpload)}
        </div>
    )
}

export default FileUpload;