
let budgetBtn = document.getElementById('budget-submit');
let expenseBtn = document.getElementById('expense-submit');
let totalBudget = document.getElementById('budget-amount');
let expenseName = document.getElementById('expense-input');
let expenseAmount = document.getElementById('amount-input');
let balance = document.getElementById('balance-amount');
let expenseList = document.getElementById("expense-list");
let allExpenses = [];
let expense = document.getElementById('expense-amount');

getBudget();

function getBudget(){
    budgetBtn.addEventListener('click', ()=>{
        let budget = document.getElementById('budget-input');
        totalBudget.innerHTML = budget.value;
        balance.innerHTML = budget.value;
        event.preventDefault();
        getExpense();
    });
}

function getExpense(){
    expenseBtn.addEventListener('click', ()=>{
        //let expense = document.getElementById('expense-amount');

        event.preventDefault();
 
        totalExpense(expenseAmount.value);
        

        let Newbalance = balance.innerHTML - expense.innerHTML;
        balance.innerHTML = Newbalance;
        
        addToList(expenseAmount.value);//expense.innerHTML

    });
}

function totalExpense(value){
    //set expense text content 
    let total = 0;
    
    allExpenses.push(value);
    
    total = allExpenses.reduce(function (acc, currentValue) {
        acc = Number(acc) + Number(currentValue);
        return acc
        
    }, 0)
    
    /*
     for(let i =0; i< allExpenses.length; i++){
        console.log(typeof total);
        
        total = Number(total) + Number(allExpenses[i]);
        console.log(total);
        
        //console.log(typeof allExpenses[i]);
         
     }
    */
    expense.textContent = Number(total);
    return total;
    
}

function addToList(value){

    let expenseValue = value;
    
    this.itemID++;
    

    let div = document.createElement('div');
    //let expenseValue = value;
    div.classList.add('expense');
    //alert('here');
    div.innerHTML = `<div class="expense-item d-flex justify-content-between align-items-baseline">
        <h6 class="expense-title mb-0 text-uppercase list-item">- ${expenseName.value}</h6>
        <h5 class="expense-amount mb-0 list-item">$${value}</h5>
        </div`;
        
        expenseList.appendChild(div);
    

}



