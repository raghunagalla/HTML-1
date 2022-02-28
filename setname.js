React Hooks:16.8

const [name,setName]=useState("ramu");

useEffect(()=>{
  console.log("it will execute every change of variable")  
})

useEffect(()=>{
    console.log("it will execute only once")  
,[]})

useEffect(()=>{
    console.log("it will execute only if 'count' value is changed")  
,[name]})  


useEffect(()=>{....})
useEffect(()=>{....},[])
useEffect(()=>{....},[name])

window.localStorage.key()
window.localStorage.setItem()
window.localStorage.getItem()
window.localStorage.removeItem()
window.localStorage.clear()
window.localStorage.length

window.sessionStorage.key()
window.sessionStorage.setItem()
window.sessionStorage.getItem()
window.sessionStorage.removeItem()
window.sessionStorage.clear()
window.sessionStorage.length





key()      -->To check a variable existance in local/session storage
setItem()  -->To store a variable in the local/session storage
getItem()  -->To get the variable from local/session storage
removeItem() --> To remove the item from local/session storage
clear()  --> To remove all items from the local /session storage
length   --> to know the number of variables in loca/session storeage
