export default class ApiData {

    static RUTA_BASE = "http://localhost:8008";

    static async getTodosLosProductos() {
        const res = await fetch(`${this.RUTA_BASE}/productos`)
        const data = await res.json();
        return data;
    }

    static async getProductosPorAnimal(idAnimal) {
        const res = await fetch(`${this.RUTA_BASE}/productos/animal/${idAnimal}`)
        const data = await res.json();
        return data;
    }

    static async getTodosLosAnimales() {
        const res = await fetch(`${this.RUTA_BASE}/animales`);
        const data = await res.json();
        return data;
    }

    static async getProductosRandom() {
        const res = await fetch(`${this.RUTA_BASE}/productos/random`);
        const data = await res.json()
        return data;
    }

    static async getProductoPorId(idProducto) {
        const res = await fetch(`${this.RUTA_BASE}/productos/${idProducto}`);
        const data = await res.json()
        return data;
    }

    static async registrarUsuario(email, password, nombres, domicilio, codigoPostal) {
        const userData = {
            email,
            password,
            nombres,
            domicilio,
            codigoPostal
        };

        try {
            const response = await fetch(`${this.RUTA_BASE}/usuarios/registrar`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                throw new Error(`Error al registrar el usuario. HTTP error! ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error(e.message)
        }
    }

    static async loginUsuario(email,password){
        const userDataLogin ={
            email,
            password
        }
        try {
            const res = await fetch(`${this.RUTA_BASE}/usuarios/login`,{
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify(userDataLogin),
                credentials: 'include'
            });
            
            if(!res.ok){
                throw new Error(`Error al Loguear el usuario. HTTP error! ${res.status}`);
            }
            const data = await res.json();
            return data;
        } catch (error) {
            
        }
    }

    static async obtenerUsuario() {
        const res = await fetch(`${this.RUTA_BASE}/usuarios`,{
            method:'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });

        if (!res.ok) return null;

        const data = await res.json();
        return data;
    }

    static async eliminarProducto(id){
        const res = await fetch(`${this.RUTA_BASE}/productos/delete/${id}`,{
            method:'DELETE',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });
        if(!res.ok){
            throw new Error(`Error al Eliminar producto! ${res.status}`);
        }
    
        const data = await res.json()
        return data;
    }
    
    static async logoutUsuario(){
        try {
            const res = await fetch(`${this.RUTA_BASE}/usuarios/logout`,{
                method:'POST',
                credentials: 'include'
            });
            
            if(!res.ok){
                throw new Error(`Error al cerrar la sesion del usuario. HTTP error! ${res.status}`);
            }

            const data = await res.json();
            return data;
        } catch (error) {
            
        }
    }
}