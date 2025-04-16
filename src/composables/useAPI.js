import { ref } from 'vue'
import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://node-app-1i0x.onrender.com/',
})

const employees = ref([])
const loading = ref(false)

export default function useAPI() { 

    const getEmployees = async () => { 
        loading.value = true
        if (employees.value.length === 0) { 
            const response = await instance.get('api/employees/fetch')
            employees.value = response.data
        }

        loading.value = false
    }

    return {instance, employees, getEmployees, loading}
}