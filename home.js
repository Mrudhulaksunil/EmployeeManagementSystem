
let username=localStorage.getItem('Username')
console.log(username);
head1.innerHTML=`welcome ${username}`

function addEmp() {
    let employee = {
        id: document.getElementById('empid').value,//or id:empid.value
        name: document.getElementById('empname').value,
        address: document.getElementById('empadd').value,
        designation: document.getElementById('empdes').value,
        experience: document.getElementById('empexp').value,
        salary: document.getElementById('empsal').value
    }
    if(employee.id==''||employee.name==''||employee.address==''||employee.designation==''||employee.experience==''||employee.salary==''){
        alert('please enter full details')
    }else{
        if(employee.id in localStorage){
            alert('Employee already exists')
        }else{
            localStorage.setItem(employee.id,JSON.stringify(employee))
            alert('Employee added successfully')
        }
    
    }


}

function searchId() {
    let key= emp.value;
    if(key in localStorage){
        let employee=JSON.parse(localStorage.getItem(key))
        console.log(employee);//object
        result.innerHTML=`
        <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Employee Details</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee Id:${employee.id}</li>
        <li class="list-group-item">Employee Name:${employee.name}</li>
        <li class="list-group-item">Employee Address:${employee.address}</li>
        <li class="list-group-item">Employee Designation:${employee.designation}</li>
        <li class="list-group-item">Employee Experience:${employee.experience}</li>
        <li class="list-group-item">Employee Salary:${employee.salary}</li>
    
      </ul>
      
    </div>`
    
    }else{
        alert('Enter valid employee id')
    }
}
function logOut(){
    localStorage.clear()
    window.location='./index.html'
}
