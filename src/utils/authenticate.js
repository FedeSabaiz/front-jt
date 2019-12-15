export default function () {
    const token = sessionStorage.getItem('jtToken');

    if(token) {
        const baseUri = token.split('.')[1];
        //Decodificar base64
        const base64 = baseUri.replace('-', '+').replace('_', '/');
        // Payload decodificado
        const payload = JSON.parse(window.atob(base64));

        return {
            isAuthenticated: true,
            payload
        }
    } else {
        return {
            isAuthenticated: false,
            payload: null
        }
    }

}