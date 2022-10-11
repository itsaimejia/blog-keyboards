export const formatDate = date =>{
    const newDate = new Date(date)
    console.log()
    const options={
        year:'numeric',
        month:'long',
        day:'2-digit'
    }
    return newDate.toLocaleDateString('es-Mx', options)
}