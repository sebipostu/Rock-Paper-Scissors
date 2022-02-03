import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css'],
})
export class StartPageComponent implements OnInit {
  scoreCount: number = 0;
  public myChoice: any;

  ///init
  closeTab = false;
  paper = undefined;
  rock = undefined;
  scissors = undefined;

  ///init end
  count = 0;
  results = '';
  choices = ['rock', 'paper', 'scissors'];
  size = this.choices.length;
  computerChoice = '';
  ///set my choice
  isActive(parameter: any) {
    this.myChoice = parameter;
    this.setComputerChoice();
    this.getResult();
  }

  ///set computer choice
  setComputerChoice() {
    this.computerChoice =
      this.choices[Math.floor(Math.random() * this.choices.length)];
  }
  ///get fighting result
  getResult() {
    let result = '';
    if (this.myChoice === 'paper' && this.computerChoice === 'rock') {
      result = ' YOU WIN! ';
      this.count = this.count + 1;
    } else if (
      this.myChoice === 'paper' &&
      this.computerChoice === 'scissors'
    ) {
      result = ' YOU LOSE! ';
      this.count = this.count - 1;
    } else if (this.myChoice === 'paper' && this.computerChoice === 'paper') {
      result = ' DRAW! ';
    } else if (this.myChoice === 'rock' && this.computerChoice === 'scissors') {
      result = ' YOU WIN! ';
      this.count = this.count + 1;
    } else if (this.myChoice === 'rock' && this.computerChoice === 'paper') {
      result = ' YOU LOSE! ';
      this.count = this.count - 1;
    } else if (this.myChoice === 'rock' && this.computerChoice === 'rock') {
      result = ' DRAW! ';
    } else if (this.myChoice === 'scissors' && this.computerChoice === 'rock') {
      result = ' YOU LOSE! ';
      this.count = this.count - 1;
    } else if (
      this.myChoice === 'scissors' &&
      this.computerChoice === 'paper'
    ) {
      result = ' YOU WIN! ';
      this.count = this.count + 1;
    } else if (
      this.myChoice === 'scissors' &&
      this.computerChoice === 'scissors'
    ) {
      result = ' DRAW! ';
    }
    this.results = result;
  }

  constructor() {}
  ngOnInit(): void {}
}
