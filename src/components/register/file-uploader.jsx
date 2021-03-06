import React, {useState} from 'react';
import Files from "react-butterfiles";
import {useFormatMessage} from "react-intl-hooks";

const FileUploader = ({onFileChanged, files=[]}) => {
    const [errors, onError] = useState([])
    const t = useFormatMessage();
    return (<Files
        multiple={true}
        maxSize="2mb"
        multipleMaxSize="10mb"
        multipleMaxCount={4}
        accept={["application/pdf", "image/jpg", "image/jpeg", "image/png"]}
        onSuccess={(newFiles) => {
            onFileChanged([...files, ...newFiles])
        }}
        onError={onError}
    >
        {({browseFiles, getDropZoneProps, getLabelProps}) => (
            <>
                <div {...getDropZoneProps({className: "myDropZone"})} onClick={browseFiles}>
                    <span>{t({id: "dropzone.helper"})}</span>
                </div>
                <ol>
                    {files.map(file => (
                        <li key={file.name}>{file.name}</li>
                    ))}
                    {errors.map(error => (
                        <li key={error.file.name}>
                            {error.file.name} - {error.type}
                        </li>
                    ))}
                </ol>
            </>
        )}
    </Files>)
}

export default FileUploader