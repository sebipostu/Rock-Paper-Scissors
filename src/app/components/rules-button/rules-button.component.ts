import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/_modal';
@Component({
  selector: 'app-rules-button',
  templateUrl: './rules-button.component.html',
  styleUrls: ['./rules-button.component.css'],
})
export class RulesButtonComponent implements OnInit {
  constructor(public modalService: ModalService) {}

  ngOnInit(): void {}
}
