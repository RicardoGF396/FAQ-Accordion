const questions = document.querySelectorAll('.question');


questions.forEach(function(question){
  //Vamos a tomar el boton, pregunta e icono de la pregunta en la que estemos
    const btn = question.querySelector(".question_btn"); //BOTONES
    const questionOption = question.querySelector(".question_option"); //PREGUNTAS
    const arrow = question.querySelector(".arrow"); //ICONOS
    btn.addEventListener('click', function(){  
  
      questions.forEach(function(item){

      const questionOption = item.querySelector(".question_option")
      const arrow = item.querySelector(".arrow");

        if(item !== question){
          item.classList.remove("show_text")
          questionOption.classList.remove("orange")
          arrow.classList.remove("rotation")
        }
      })
  
      question.classList.toggle("show_text")
      questionOption.classList.toggle("orange")
      arrow.classList.toggle("rotation")
    })
  })