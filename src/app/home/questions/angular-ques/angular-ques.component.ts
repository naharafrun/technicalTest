import { Component, OnInit } from '@angular/core';
import {Question} from "../model/Question";
import {QuizConfig} from "../model/quizConfig";
import {Quiz} from "../model/quiz";
import {QuestionsService} from "../../../services/questions.service";
import {Option} from "../model/option";
import {Router} from "@angular/router";

@Component({
  selector: 'app-angular-ques',
  templateUrl: './angular-ques.component.html',
  styleUrls: ['./angular-ques.component.css']
})
export class AngularQuesComponent implements OnInit {
  quizes: any[];
  quiz : Quiz  =  new  Quiz ( null ) ;
  mode  =  'quiz' ;
  quizName: string;
  config: QuizConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,  // if true, it will move to next question automatically when answered.
    'duration': 300,  // indicates the time (in secs) in which quiz needs to be completed. 0 means unlimited.
    'pageSize': 1,
    'requiredAll': false,  // indicates if you must answer all the questions before submitting.
    'richText': false,
    'shuffleQuestions': false,
    'shuffleOptions': false,
    'showClock' : true ,
    'showPager': true,
    'theme': 'none'
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  timer: any = null;
  startTime: Date;
  endTime: Date;
  ellapsedTime = '00:00';
  duration = '';

  constructor(private questionsService: QuestionsService,
              private router: Router) { }

  ngOnInit(): void {
    this.quizes = this.questionsService.getAll();
    this.quizName = this.quizes[0].id;
    this.loadQuiz(this.quizName);
  }
  loadQuiz(quizName: string) {
    console.log(quizName);
    this.questionsService.get(quizName).subscribe(res => {
      console.log(res);
      this.quiz = new Quiz(res);
      this.pager.count = this.quiz.questions.length;
      this.startTime = new Date();
      this.ellapsedTime = '00:00';
      this.timer = setInterval(() => { this.tick(); }, 1000);
      console.log(this.config);
      this.duration = this.parseTime(this.config.duration);
    });
    this.mode = 'quiz';
  }

  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    console.log(diff);
    if (diff >= this.config.duration) {
      this.onSubmit();
    }
    this.ellapsedTime = this.parseTime(diff);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    console.log(mins, secs)
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  get filteredQuestions() {
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: Question, option: Option) {
    if (question.questionTypeId === 1) {
      question.options.forEach((x) => {
        if (x.id !== option.id) x.selected = false;
      });
    }
    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
    }
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }

  isAnswered(question: Question) {
    return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  };

  onSubmit() {
    let answers = [];
    this.quiz.questions.forEach(x =>
      answers.push(
        { 'quizId': this.quiz.id,
          'questionId': x.id,
          'answered': x.answered
        }));
    console.log(this.quiz.questions);
    this.mode = 'result';
  }

  goBackTo () {
    this.router.navigate(['/examinee']);
  }
}
