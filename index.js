//кнопка наверх
window.addEventListener('scroll', function() {
    
    let currScrollPos2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (currScrollPos2 > 100) {
      document.getElementById('toTop').style.opacity = currScrollPos2/500 ;
    }
    else  {
        document.getElementById('toTop').style.opacity = -currScrollPos2/500 ;
      }
  }
);
//СЧЕТЧИК ПРАВИЛЬНЫХ ОТВЕТОВ
function summary() {
    let count = document.getElementsByClassName('question').length; //Количество вопросов
    let answers = document.querySelectorAll('.question'); 
    let score = 0; //Количество верных ответов
    let rightAnswers = ["q1_2", "q2_1", "q3_2", "q4_1", "q5_3"] //Список верных ответов
    let test_ans = document.getElementById("str5");
    console.log(q1_1);
  
    let check = false;
    document.getElementsByName("q1").forEach(function(input){
      if(input.checked) check = true;
  
    }
    );
    if(check){
  
      for (let i = 0; i < count; i++) {
      let chosenAnswer = answers[i].querySelector("input[type='radio']:checked"); 
      if (chosenAnswer && chosenAnswer.id == rightAnswers[i]) 
      {
        score++;
      }
      test_ans.innerHTML  =  "Всего правильных ответов: " + score ;
      }
    }
    else{
      alert("Вы не ответили на вопрос")
    }
  }
      