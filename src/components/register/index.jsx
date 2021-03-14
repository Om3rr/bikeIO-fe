import {Controller, useForm} from "react-hook-form";
import React, {useEffect, useState} from "react";
import {useFormatMessage} from "react-intl-hooks";
import FileUploader from "./file-uploader";
import './index.css'
import {registerBikes, uploadAllFiles} from "../../clients/apiClient";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import {withRouter} from "react-router-dom";

const renderField = ({control, errors, t, name, label, rules}) => (
    <FormControl fullWidth variant="outlined" className={"formField"}>
        <Controller
            name={name}
            as={
                <TextField
                    id={name}
                    helperText={errors[name] ? errors[name].message : null}
                    label={t({id: label})}
                    error={!!errors[name]}
                />
            }
            control={control}
            defaultValue=""
            rules={rules}
        />
    </FormControl>
)

const Register = ({history}) => {
    const defaultValues = {
        // firstName: "omer",
        // lastName: "shacham",
        // phone: "0506652800",
        // secondary_phone: "0506652800",
        // city: "tel aviv",
        // bike_id: "1234",
        // brand: "trek",
        // color: "white",
        // acceptedTerms: true,

    }
    const {register, handleSubmit, errors, reset, formState, setError, control} = useForm({defaultValues});
    const {isDirty, isSubmitting} = formState;
    const [files, onFileChanged] = useState([])
    const [fileResult, uploadFiles] = useState(null)
    const t = useFormatMessage();
    useEffect((e) => {
        console.log(errors)
    }, [errors])
    const onSubmit = async (data) => {
        let bikeDocs = fileResult
        if (!bikeDocs) {
            bikeDocs = await uploadAllFiles(files)
            uploadFiles(bikeDocs)
        }

        const assets = bikeDocs.map(doc => {
            const {file} = doc
            return file
        })
        console.log("imhere")
        const {result, error} = await registerBikes( {
            assets,
            ...data
        })
        error && Object.entries(error).forEach(([k, v]) => {
            setError(k, {type: "server", message: v})
        });
        result && history.push("/success");

    }
    return (<form onSubmit={handleSubmit(onSubmit)}>
        <div className={"formFields"}>
            {renderField(
                {
                    control,
                    errors,
                    t,
                    name: "firstName",
                    label: "register.first_name.title",
                    rules: {required: t({id: "register.first_name.required"})}
                }
            )}
            {renderField(
                {
                    control,
                    errors,
                    t,
                    name: "lastName",
                    label: "register.last_name.title",
                    rules: {required: t({id: "register.last_name.required"})}
                }
            )}
            {renderField(
                {
                    control,
                    errors,
                    t,
                    name: "phone",
                    label: "register.phone.title",
                    rules: {
                        required: t({id: "register.phone.required"}),
                        pattern: {value: /^\d+$/i, message: t({id: "register.phone.invalid"})}
                    }
                }
            )}
            {renderField(
                {
                    control,
                    errors,
                    t,
                    name: "secondary_phone",
                    label: "register.secondary_phone.title",
                    rules: {pattern: {value: /^\d*$/i, message: t({id: "register.secondary_phone.invalid"})}}
                }
            )}
            {renderField(
                {
                    control,
                    errors,
                    t,
                    name: "bike_id",
                    label: "register.bike_id.title",
                    rules: {required: t({id: "register.bike_id.required"})}
                }
            )}
            {renderField(
                {
                    control,
                    errors,
                    t,
                    name: "city",
                    label: "register.city.title",
                    rules: {required: t({id: "register.city.required"})}
                }
            )}
            {renderField(
                {
                    control,
                    errors,
                    t,
                    name: "brand",
                    label: "register.brand.title",
                    rules: {required: t({id: "register.brand.required"})}
                }
            )}
            {renderField(
                {
                    control,
                    errors,
                    t,
                    name: "color",
                    label: "register.color.title",
                    rules: {required: t({id: "register.color.required"})}
                }
            )}
            <div>
                <FileUploader files={files} onFileChanged={onFileChanged}/>
            </div>
            <div className={"spacer"}></div>
            <div>
                <Button variant="contained" fullWidth color="primary" disabled={isSubmitting}
                        type="submit">
                    {t({id: "button.submit"})}
                </Button>
            </div>
        </div>

    </form>)
}

export default withRouter(Register)