
//Написать цикл который выведет в консоль по порядку элементы списка из параметра salary:
var responseData = {'name': "Maxim",
'age': 30,
'salary': [2000, "4000", "6000"]};
//1
{for(let i = 0; i<responseData.salary.length; i++){
    console.log(responseData.salary[i])
}}
//2
{let i = 0
    while(i<responseData.salary.length){
        console.log(responseData.salary[i])
        i++
    }};
//3
{for (i in responseData.salary){
    console.log(responseData.salary[i])
    }};
// ***Написать цикл который выведет в консоль по порядку элементы списка из параметра person.
let salary = 2000;
let user_name = "Maxim";
let age = 30;
let response = {'start_qa_salary': salary,
          'qa_salary_after_6_months': salary * 2,
          'qa_salary_after_12_months': salary * 2.7,
          'qa_salary_after_1.5_year': salary * 3.3,
          'qa_salary_after_3.5_years': salary * 3.8,
          'person': {'u_name': [user_name, salary, age],
                     'u_age': age,
                     'u_salary_5_years': salary * 4.2}
          }

{for (i in response.person){
    console.log(i, response.person[i]);
}};