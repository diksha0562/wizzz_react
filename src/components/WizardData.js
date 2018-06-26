export default function (){
    return [
        {heading: "Name", type:"text", name:"name"},
        {heading: "Email", type:"email", name:"email"},
        {heading: "Password", type:"text", name:"password"},
        {heading: "Mobile Number", type:"text", name:"mobileNumber"},
        {heading:"Gender", type:"radio", name:"gender", value:["male", "female", "other"]}
    ]
}