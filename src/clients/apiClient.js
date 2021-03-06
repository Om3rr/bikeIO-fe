const API = "http://localhost:3000/bikeapi"
const UPLOAD_FILE = API + "/files"
const REGISTER_BIKES = API + "/bike"
const SEARCH = API + "/bike"

const performApi = async (path, params = {}) => {
    try {
        const recaptcha_token = await window.grecaptcha.execute('6Lf2enQaAAAAANrscy5B6c7uY5ZQNa87gUfq3vgN', {action: path.replace(API, '')})
        return await fetch(path, {...params, headers: {...(params.headers || {}), "x-token": recaptcha_token}})
    } catch (e) {
        console.error(e)
    }


}
export const uploadFile = async (file) => {
    try {
        let form = new FormData()
        form.append('file', file.src.file)
        const response = await performApi(UPLOAD_FILE, {
            method: "POST",
            body: form
        })
        return response.json()
    } catch (error) {
        console.log(error)
        return {error}
    }
}

export const uploadAllFiles = async (files) => {
    return await Promise.all(files.map(f => uploadFile(f)))
}

export const registerBikes = async (bikeDetails) => {
    try {
        const response = await performApi(REGISTER_BIKES, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({bikeDetails})
        })
        return response.json();
    } catch (e) {
        return {}
    }

}

export const searchBikes = async (bikeId) => {
    try {
        const response = await performApi(SEARCH + `/${bikeId}`)
        const {result: {bike}} = await response.json()
        return bike
    } catch (e) {

    }

}