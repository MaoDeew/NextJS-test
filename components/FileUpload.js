import { useState, useEffect } from "react";
import { uploadFilesToFirebase } from "../firebase/fileupload";

const FileUpload = () =>{
    const [files, setFiles] = useState([]);
    const [uploadStatus, setUploadStatus] = useState([]);
    const [visibleStatusUpload,setVisibleStatusUpload] = useState(false);
    
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

        const response =  uploadFilesToFirebase(files)
        setUploadStatus(response)
    }

    const handleCloseErrors = (event) =>{
        event.preventDefault();
        setVisibleStatusUpload(false);
    }

    const totalFilesSize = files.reduce((sumFile,file) =>{
        return sumFile + file.size;
    },0);

    useEffect(()=>{
        if(uploadStatus.length>0){
        setVisibleStatusUpload(true);
        }
    },[uploadStatus])

    return(
        <div>
            {console.log(uploadStatus,visibleStatusUpload)}
                <input type="file" onChange={handleChange}></input>
                <button onClick={handleUpload}>Upload</button>
            {files.map(file =>{
                return(
                    <li key={file.id}>
                        {file.name}
                    </li>
                )
            })}
            <div>
                <h3>Total File Size: {totalFilesSize} bytes</h3>
                <button onClick={handleCloseErrors}>Delete messages</button>
            </div>
        {visibleStatusUpload ? uploadStatus.map(status =>(<p key={status}>{status}</p>)) : ""}
        </div>
    )
}

export default FileUpload;